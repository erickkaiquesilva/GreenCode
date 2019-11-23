//
//  Usuario.swift
//  greencode-app-ios
//
//  Created by Erick Kaique Da Silva on 21/11/19.
//  Copyright © 2019 Erick Kaique da Silva. All rights reserved.
//

import Foundation

struct Usuario: Decodable {
    let id: Int
    let nome: String
    let sobrenome: String
    let email: String
    let senha: String
}
