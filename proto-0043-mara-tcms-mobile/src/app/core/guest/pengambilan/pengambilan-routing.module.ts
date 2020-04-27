import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PengambilanPage } from './pengambilan.page';

const routes: Routes = [
  {
    path: '',
    component: PengambilanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PengambilanPageRoutingModule {}
