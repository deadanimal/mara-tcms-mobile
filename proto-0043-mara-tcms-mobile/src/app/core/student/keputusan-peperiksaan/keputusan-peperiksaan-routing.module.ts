import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeputusanPeperiksaanPage } from './keputusan-peperiksaan.page';

const routes: Routes = [
  {
    path: '',
    component: KeputusanPeperiksaanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeputusanPeperiksaanPageRoutingModule {}
