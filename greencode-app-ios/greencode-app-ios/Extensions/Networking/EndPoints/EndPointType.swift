//
//  EndPointType.swift
//  greencode-app-ios
//
//  Created by Erick Kaique Da Silva on 21/11/19.
//  Copyright © 2019 Erick Kaique da Silva. All rights reserved.
//

import Foundation

protocol EndPointType {
    var base: String { get }
    var path: String { get }
    var query: [URLQueryItem]? { get }
    var header: [String: String]? { get }
}

extension EndPointType {
    
    var components: URLComponents {
        if var components = URLComponents(string: base) {
            if query != nil {
                components.queryItems = query
            }
            components.path = path
            return components
        }
        fatalError("Fail to set Components")
    }
    
    var request: URLRequest {
        if let url = components.url {
            return URLRequest(url: url)
        }
        
        fatalError("Failed to set URL")
    }
    
}
