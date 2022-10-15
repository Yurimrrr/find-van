import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPageRoutingModule } from './cadastro-routing.module';

import { CadastroPage } from './cadastro.page';
import { CadastroModalComponent } from './cadastro-modal/cadastro-modal.component';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../entities/usuario.model';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPageRoutingModule
  ],
  declarations: [CadastroPage,
    CadastroModalComponent],
  providers:[
    UsuarioService,
  ]
})
export class CadastroPageModule {}
