import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semakan',
  templateUrl: './semakan.page.html',
  styleUrls: ['./semakan.page.scss'],
})
export class SemakanPage implements OnInit {

  isChecked: boolean = false
  
  constructor() { }

  ngOnInit() {
  }

  check() {
    this.isChecked = true
  }

}
