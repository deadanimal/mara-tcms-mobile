import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pengambilan',
  templateUrl: './pengambilan.page.html',
  styleUrls: ['./pengambilan.page.scss'],
})
export class PengambilanPage implements OnInit {

  segment: string = 'pengambilan'
  constructor() { }

  ngOnInit() {
  }

  changeSegment(){
    console.log(event)
    if (this.segment === 'pengambilan') {
      this.segment = 'institusi'
      console.log(this.segment)
    }
    else {
      this.segment = 'pengambilan'
      console.log(this.segment)
    }
  }
}
