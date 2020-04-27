import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-layout',
  templateUrl: './guest-layout.page.html',
  styleUrls: ['./guest-layout.page.scss'],
})
export class GuestLayoutPage implements OnInit {

  appPages = [
    {
      title: 'Pengambilan',
      url: '/guest/pengambilan',
      icon: 'newspaper-outline'
    },
    {
      title: 'Semakan',
      url: '/guest/semakan',
      icon: 'checkmark-done-circle-outline'
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
