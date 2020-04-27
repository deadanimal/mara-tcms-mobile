import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendaftaranSesiPageRoutingModule } from './pendaftaran-sesi-routing.module';

import { PendaftaranSesiPage } from './pendaftaran-sesi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendaftaranSesiPageRoutingModule
  ],
  declarations: [PendaftaranSesiPage]
})
export class PendaftaranSesiPageModule {}
