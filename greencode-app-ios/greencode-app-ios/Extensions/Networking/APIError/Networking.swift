//
//  Networking.swift
//  greencode-app-ios
//
//  Created by Erick Kaique Da Silva on 21/11/19.
//  Copyright © 2019 Erick Kaique da Silva. All rights reserved.
//

import Foundation

class Networking: NetworkingProtocol {
    
    var session: URLSession
    
    init(configuration: URLSessionConfiguration) {
        self.session = URLSession(configuration: configuration)
    }
    
    convenience init() {
        self.init(configuration: .default)
    }
    
    private func decodingTask<T: Decodable>(data: Data, to type: T.Type) -> T? {
        do {
            let generictModel = try JSONDecoder().decode(T.self, from: data)
            return generictModel
        } catch let err {
            print(err.localizedDescription)
            return nil
        }
    }
    
    func fetch<T>(with request: URLRequest, to decode: T.Type, completion: @escaping (Result<T, APIError>) -> Void) where T : Decodable {
        
        let task = session.dataTask(with: request) { data, response, error in
            
            guard let httpResponse = response as? HTTPURLResponse else {
                completion(.failure(APIError.requestFailed(description: error?.localizedDescription ?? "No Description")))
                return
            }
            
            guard httpResponse.statusCode == 200 else {
                completion(.failure(APIError.responseUnsuccessful(description: "\(httpResponse.statusCode)")))
                return
            }
            
            guard let data = data else {
                completion(.failure(APIError.invalidData))
                return
            }
            
            guard let model = self.decodingTask(data: data, to: decode) else {
                completion(.failure(APIError.jsonConversionFailure(description: "Error Parcial")))
                return
            }
            
            completion(.success(model))
        }
        
        task.resume()
        
    }
    
    
}
