import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MohonPage } from './mohon.page';

const routes: Routes = [
  {
    path: '',
    component: MohonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MohonPageRoutingModule {}
