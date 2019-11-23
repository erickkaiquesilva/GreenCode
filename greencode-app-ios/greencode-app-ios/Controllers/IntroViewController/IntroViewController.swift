//
//  ViewController.swift
//  greencode-app-ios
//
//  Created by Erick Kaique da Silva on 05/09/19.
//  Copyright © 2019 Erick Kaique da Silva. All rights reserved.
//

import UIKit

class IntroViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        navigationController?.navigationBar.setBackgroundImage(UIImage(), for: UIBarMetrics.default)
        navigationController?.navigationBar.shadowImage = UIImage()
        navigationController?.navigationBar.isTranslucent = true
        
        print("Scene: INTROVIEWCONTROLLER")
    }
}

