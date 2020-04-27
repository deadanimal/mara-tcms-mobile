import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LatihanIndustriPageRoutingModule } from './latihan-industri-routing.module';

import { LatihanIndustriPage } from './latihan-industri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LatihanIndustriPageRoutingModule
  ],
  declarations: [LatihanIndustriPage]
})
export class LatihanIndustriPageModule {}
