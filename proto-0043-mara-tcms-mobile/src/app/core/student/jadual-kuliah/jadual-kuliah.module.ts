import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JadualKuliahPageRoutingModule } from './jadual-kuliah-routing.module';

import { JadualKuliahPage } from './jadual-kuliah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JadualKuliahPageRoutingModule
  ],
  declarations: [JadualKuliahPage]
})
export class JadualKuliahPageModule {}
