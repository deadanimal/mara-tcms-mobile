import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreLayoutPage } from './core-layout.page';

const routes: Routes = [
  {
    path: '',
    component: CoreLayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreLayoutPageRoutingModule {}
