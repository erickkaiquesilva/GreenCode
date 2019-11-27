//
//  LoginModel.swift
//  greencode-app-ios
//
//  Created by Erick Kaique Da Silva on 21/11/19.
//  Copyright © 2019 Erick Kaique da Silva. All rights reserved.
//

import Foundation

struct LoginModel {
    private let id: Int
    private let nome: String
    private let sobrenome: String
    private let email: String
    private let senha: String
    
    init(id: Int, nome: String, sobrenome: String, email: String, senha: String) {
        self.id = id
        self.nome = nome
        self.sobrenome = sobrenome
        self.email = email
        self.senha = senha
    }
}
