//
//  LoginViewController.swift
//  greencode-app-ios
//
//  Created by Erick Kaique Da Silva on 19/11/19.
//  Copyright © 2019 Erick Kaique da Silva. All rights reserved.
//

import UIKit

class LoginViewController: UIViewController {
    
    let usuario: [String] = []
    
    @IBOutlet weak var inputEmail: UITextField!
    @IBOutlet weak var inputSenha: UITextField!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // REMOVE BUTTON  <- BACK
//        self.navigationItem.leftBarButtonItems = []
//        self.navigationItem.hidesBackButton = true
        
        print("----------------------------\n SCENE: LOGIN VIEWCONTROLLER \n----------------------------")
    }
    
    func verificaInputs() {
        guard let email = inputEmail.text else { return }
        guard let senha = inputSenha.text else { return }
        
    }
}
