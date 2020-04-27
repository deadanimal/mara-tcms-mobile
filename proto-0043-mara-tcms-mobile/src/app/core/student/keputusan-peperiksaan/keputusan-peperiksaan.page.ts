import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keputusan-peperiksaan',
  templateUrl: './keputusan-peperiksaan.page.html',
  styleUrls: ['./keputusan-peperiksaan.page.scss'],
})
export class KeputusanPeperiksaanPage implements OnInit {

  isShow: boolean = false

  constructor() { }

  ngOnInit() {
  }

  view() {
    this.isShow = true
  }

}
