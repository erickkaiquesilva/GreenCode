//
//  Result.swift
//  greencode-app-ios
//
//  Created by Erick Kaique Da Silva on 21/11/19.
//  Copyright © 2019 Erick Kaique da Silva. All rights reserved.
//

import Foundation

enum Result<T, U> where U: Error {
    case success(T)
    case failure(U)
}
