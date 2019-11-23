//
//  LoginProtocols.swift
//  greencode-app-ios
//
//  Created by Erick Kaique Da Silva on 21/11/19.
//  Copyright © 2019 Erick Kaique da Silva. All rights reserved.
//

import Foundation

protocol RequestLogin {
    func signInUser(email: String, senha: String)
}
