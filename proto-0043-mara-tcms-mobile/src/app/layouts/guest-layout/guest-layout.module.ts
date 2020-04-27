import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestLayoutPageRoutingModule } from './guest-layout-routing.module';

import { GuestLayoutPage } from './guest-layout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuestLayoutPageRoutingModule
  ],
  declarations: [GuestLayoutPage]
})
export class GuestLayoutPageModule {}
