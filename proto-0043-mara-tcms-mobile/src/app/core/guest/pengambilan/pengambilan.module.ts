import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PengambilanPageRoutingModule } from './pengambilan-routing.module';

import { PengambilanPage } from './pengambilan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PengambilanPageRoutingModule
  ],
  declarations: [PengambilanPage]
})
export class PengambilanPageModule {}
