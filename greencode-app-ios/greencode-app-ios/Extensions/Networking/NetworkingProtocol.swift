//
//  NetworkingProtocol.swift
//  greencode-app-ios
//
//  Created by Erick Kaique Da Silva on 21/11/19.
//  Copyright © 2019 Erick Kaique da Silva. All rights reserved.
//

import Foundation

protocol NetworkingProtocol {
    var session: URLSession { get }
    func fetch<T: Decodable>(with request: URLRequest, to decode: T.Type, completion: @escaping (Result<T, APIError>) -> Void)
}
