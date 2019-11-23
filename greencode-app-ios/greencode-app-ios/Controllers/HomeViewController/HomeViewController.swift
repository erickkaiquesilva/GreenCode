//
//  HomeViewController.swift
//  greencode-app-ios
//
//  Created by Erick Kaique Da Silva on 19/11/19.
//  Copyright © 2019 Erick Kaique da Silva. All rights reserved.
//

import UIKit

class HomeViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        self.tabBarController?.navigationController?.navigationItem.hidesBackButton = true
        self.tabBarController?.navigationItem.leftBarButtonItem = UIBarButtonItem(title: nil, style: UIBarButtonItem.Style.plain, target: self, action: nil)
        
        print("----------------------------\n SCENE: HOME VIEWCONTROLLER \n----------------------------")
    }
}
