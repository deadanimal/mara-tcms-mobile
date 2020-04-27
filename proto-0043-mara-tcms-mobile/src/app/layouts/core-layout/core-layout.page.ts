import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-layout',
  templateUrl: './core-layout.page.html',
  styleUrls: ['./core-layout.page.scss'],
})
export class CoreLayoutPage implements OnInit {

  appPages = [
    {
      title: 'Home',
      url: '/core/home',
      icon: 'grid-outline'
    },
    {
      title: 'Jadual Kuliah',
      url: '/core/jadual-kuliah',
      icon: 'calendar-outline'
    },
    {
      title: 'Jadual Peperiksaan',
      url: '/core/jadual-peperiksaan',
      icon: 'calendar'
    },
    {
      title: 'Keputusan Peperiksaan',
      url: '/core/keputusan-peperiksaan',
      icon: 'newspaper-outline'
    },
    {
      title: 'Latihan Industri',
      url: '/core/latihan-industri',
      icon: 'chatbox-ellipses-outline'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
