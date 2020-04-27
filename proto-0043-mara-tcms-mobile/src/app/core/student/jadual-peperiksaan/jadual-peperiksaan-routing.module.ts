import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JadualPeperiksaanPage } from './jadual-peperiksaan.page';

const routes: Routes = [
  {
    path: '',
    component: JadualPeperiksaanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JadualPeperiksaanPageRoutingModule {}
