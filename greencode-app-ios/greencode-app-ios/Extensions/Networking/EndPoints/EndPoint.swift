//
//  EndPoint.swift
//  greencode-app-ios
//
//  Created by Erick Kaique Da Silva on 21/11/19.
//  Copyright © 2019 Erick Kaique da Silva. All rights reserved.
//

import Foundation

enum GreenCodeEndPoint {
    case signIn(String, String)
}

extension GreenCodeEndPoint: EndPointType {
    var base: String {
        return "http://3.211.16.250"
    }
    
    var path: String {
        switch self {
        case .signIn(let email, let senha):
            return "/\(email)/\(senha)"
        }
    }
    
    var query: [URLQueryItem]? {
        return nil
    }
    
    var header: [String : String]? {
        return nil
    }
}
