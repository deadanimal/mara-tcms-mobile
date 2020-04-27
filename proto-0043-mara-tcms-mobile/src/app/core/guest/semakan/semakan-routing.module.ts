import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemakanPage } from './semakan.page';

const routes: Routes = [
  {
    path: '',
    component: SemakanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemakanPageRoutingModule {}
