import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LatihanIndustriPage } from './latihan-industri.page';

const routes: Routes = [
  {
    path: '',
    component: LatihanIndustriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LatihanIndustriPageRoutingModule {}
