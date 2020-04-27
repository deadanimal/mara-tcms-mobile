import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JadualPeperiksaanPageRoutingModule } from './jadual-peperiksaan-routing.module';

import { JadualPeperiksaanPage } from './jadual-peperiksaan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JadualPeperiksaanPageRoutingModule
  ],
  declarations: [JadualPeperiksaanPage]
})
export class JadualPeperiksaanPageModule {}
