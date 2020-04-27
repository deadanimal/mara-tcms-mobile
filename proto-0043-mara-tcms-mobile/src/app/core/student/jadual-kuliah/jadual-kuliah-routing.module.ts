import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JadualKuliahPage } from './jadual-kuliah.page';

const routes: Routes = [
  {
    path: '',
    component: JadualKuliahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JadualKuliahPageRoutingModule {}
