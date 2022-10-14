import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Endereco } from 'src/app/entities/endereco.model';
import { Usuario } from 'src/app/entities/usuario.model';
import { UsuarioEntity } from 'src/app/entities/usuarioEntity.model';
import { UsuarioVan } from 'src/app/entities/usuarioVan.model';
import { Van } from 'src/app/entities/vans.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UsuarioVanService } from 'src/app/services/usuarioVan.service';

@Component({
  selector: 'app-cadastro-modal',
  templateUrl: './cadastro-modal.component.html',
  styleUrls: ['./cadastro-modal.component.scss'],
})
export class CadastroModalComponent implements OnInit {

public usuario: UsuarioEntity = new UsuarioEntity();

public van: Van = new Van();

public endereco: Endereco = new Endereco();

  type: boolean = true;

  constructor(
              private modalCtrl: ModalController,
              // private rotaAtiva: ActivatedRoute,
              // private rota: Router,
              private usuarioVanServ: UsuarioVanService,
              private usuarioServ: UsuarioService) { }

  ngOnInit() {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  cadastrar(){
    //id temporario dps o banco gera
    let id = Math.floor(Math.random() * 99999999);
    if(this.type){
      this.usuario = {
        id: id,
        nome: this.usuario.nome,
        senha: this.usuario.senha,
        email: this.usuario.email,
        endereco: this.usuario.endereco,
        cpf: this.usuario.cpf,
        foto: "teste"
      }
      this.usuarioServ.insertUsuario(this.usuario)
    }else{
      let id_van = Math.floor(Math.random() * 99999999);
      this.van = {
        id: id_van,
        nome: this.van.nome,
        cnpj: this.van.cnpj,
        bairro: this.van.bairro,
        descricao: this.van.descricao,
        foto: "https://img0.icarros.com/dbimg/imgmodelo/2/699_15.png"
      }
      let usuarioVan = new UsuarioVan();
      usuarioVan = {
        id: id,
        nome: this.usuario.nome,
        senha: this.usuario.senha,
        email: this.usuario.email,
        endereco: this.usuario.endereco,
        cpf: this.usuario.cpf,
        foto: this.usuario.foto,
        van: this.van
      }
      this.usuarioVanServ.insertUsuarioVan(usuarioVan)
    }
  }

  confirm(type: boolean) {
    this.type = type;
    return this.modalCtrl.dismiss(this.type, 'confirm');
  }
}
