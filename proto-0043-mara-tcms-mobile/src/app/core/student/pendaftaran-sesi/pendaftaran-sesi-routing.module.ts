import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendaftaranSesiPage } from './pendaftaran-sesi.page';

const routes: Routes = [
  {
    path: '',
    component: PendaftaranSesiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendaftaranSesiPageRoutingModule {}
