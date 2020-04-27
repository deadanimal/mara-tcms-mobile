import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pelajar: boolean = true
  tetamu: boolean = false
  
  constructor() { }

  ngOnInit() {
  }

}
