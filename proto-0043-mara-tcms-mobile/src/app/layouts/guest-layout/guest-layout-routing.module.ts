import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestLayoutPage } from './guest-layout.page';

const routes: Routes = [
  {
    path: '',
    component: GuestLayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestLayoutPageRoutingModule {}
