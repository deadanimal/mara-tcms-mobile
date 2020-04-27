import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeputusanPeperiksaanPageRoutingModule } from './keputusan-peperiksaan-routing.module';

import { KeputusanPeperiksaanPage } from './keputusan-peperiksaan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KeputusanPeperiksaanPageRoutingModule
  ],
  declarations: [KeputusanPeperiksaanPage]
})
export class KeputusanPeperiksaanPageModule {}
