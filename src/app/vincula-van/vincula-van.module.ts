import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VinculaVanPageRoutingModule } from './vincula-van-routing.module';

import { VinculaVanPage } from './vincula-van.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VinculaVanPageRoutingModule
  ],
  declarations: [VinculaVanPage]
})
export class VinculaVanPageModule {}
