//
//  File.swift
//  greencode-app-ios
//
//  Created by Erick Kaique Da Silva on 23/11/19.
//  Copyright © 2019 Erick Kaique da Silva. All rights reserved.
//

import Foundation

class LoginUserService: LoginUserRepositoryType {
    
    private let network: GreenCodeNetworkProtocol = GreenCodeNetwork()
    
    func requestSignIn(login: Login, completion: @escaping LoginUserResult) {
        network.request(service: LoginEndPoint.login(login: login)) { result in
            
            switch result {
            case .success(let usuario):
                completion(.success(try! JSONDecoder().decode(Usuario.self, from: usuario)))
            case .failure(let error):
                completion(.failure(error))
            default:
                break
            }
        }
    }
}
