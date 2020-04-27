import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemakanPageRoutingModule } from './semakan-routing.module';

import { SemakanPage } from './semakan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemakanPageRoutingModule
  ],
  declarations: [SemakanPage]
})
export class SemakanPageModule {}
