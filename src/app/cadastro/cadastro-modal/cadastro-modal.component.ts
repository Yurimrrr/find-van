import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UsuarioEntity } from 'src/app/entities/usuarioEntity.model';
import { UsuarioVan } from 'src/app/entities/usuarioVan.model';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-cadastro-modal',
  templateUrl: './cadastro-modal.component.html',
  styleUrls: ['./cadastro-modal.component.scss'],
})
export class CadastroModalComponent implements OnInit {

public usuario: UsuarioEntity = new UsuarioEntity();
public usuarioVan: UsuarioVan = new UsuarioVan();

  type: boolean;

  constructor(
              private modalCtrl: ModalController, 
              private rotaAtiva: ActivatedRoute,
              private rota: Router) { }

  ngOnInit() {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  public cadastroUsuarioModal(){
    this.usuario = {
      id: this.usuario.id,
      nome: this.usuario.nome,
      senha: this.usuario.senha,
      email: this.usuario.email,
      endereco: this.usuario.endereco,
      cpf: this.usuario.cpf,
      foto: this.usuario.foto
    }
  }




  confirm(type: boolean) {
    this.type = type;
    return this.modalCtrl.dismiss(this.type, 'confirm');
  }
}
