import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VinculaVanPage } from './vincula-van.page';

const routes: Routes = [
  {
    path: '',
    component: VinculaVanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VinculaVanPageRoutingModule {}
