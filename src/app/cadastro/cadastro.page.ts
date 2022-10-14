import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CadastroModalComponent } from './cadastro-modal/cadastro-modal.component';
import { Usuario } from '../entities/usuario.model';
import { UsuarioVan } from '../entities/usuarioVan.model';
import { CadastroService } from '../services/cadastro.service';
import { Van } from '../entities/vans.model';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  /*
  * @propety tipoUsuario
  * Se esse campo for true, não precisa modificar a tela,
  * Se esse campo for false, coloca o restante do formulario com os dados para ser preenchidos da van
  */
  public tipoUsuario: boolean;
  public nome: String;
  public cpf: String;

  @ViewChild(IonModal) modal: IonModal;
  name: string;
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }
  constructor(
    private modalCtrl: ModalController,
    private route: Router,
    private cadastroServ: CadastroService) { }

  ngOnInit() {
  }

  salvaDados(){
    //Caso o tipo do usuario for Usuario, só preencher o construtor com os valores da tela.
    let usuario = new Usuario();

    //se for usuario van preencher com os dados da tela + new Van(dados tela da van)
    let van = new Van();
    let usuarioVan = new UsuarioVan(van);
    this.cadastroServ.cadastrar(this.tipoUsuario, usuario, usuarioVan);
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: CadastroModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // tela inicial
      this.route.navigate(['/inicio']);
      //enviar o usuario para o login.
      // this.message = `Hello, ${data}!`;
    }
  }

  }




