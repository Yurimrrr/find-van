import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Endereco } from 'src/app/entities/endereco.model';
import { Usuario } from 'src/app/entities/usuario.model';
import { Van } from 'src/app/entities/vans.model';
import { UsuarioService } from 'src/app/services/usuario.service';

import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

import {
  FormControl,
  FormGroup,
  FormBuilder,
  FormArray,
  Validators,
} from '@angular/forms';

import { Directive, HostListener } from '@angular/core'; //Validação campo number
////////Validação campo number
@Directive({
  selector: '[appIntegerInput]',
})
export class IntegerInputDirective {
  constructor() {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @HostListener('keypress', ['$event'])
  onInput(event: any) {
    const pattern = /[0-9]/; // without ., for integer only
    const inputChar = String.fromCharCode(
      event.which ? event.which : event.keyCode
    );

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
      return false;
    }
    return true;
  }
}

////////////////
@Component({
  selector: 'app-cadastro-modal',
  templateUrl: './cadastro-modal.component.html',
  styleUrls: ['./cadastro-modal.component.scss'],
})
export class CadastroModalComponent implements OnInit {
  formulario: FormGroup;

  public usuario: Usuario = new Usuario();

  public van: Van = new Van();

  public endereco: Endereco = new Endereco();

  name = new FormControl('');

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  public type: boolean = true;

  cameraOptions: CameraOptions = {
    quality: 100,
    allowEdit: false,
    correctOrientation: true,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
  };

  constructor(
    private modalCtrl: ModalController,
    // private rotaAtiva: ActivatedRoute,
    // private rota: Router,
    private usuarioServ: UsuarioService,
    private formBuilder: FormBuilder,
    private webView: WebView,
    private camera: Camera
  ) {}

  choosePhotos() {
    this.camera.getPicture(this.cameraOptions).then((res) => {
      console.log('response = ', res);
      this.van.foto = res;
    });
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ]),
      ],
      cpf: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ]),
      ],
      cnpj: [null],
      celular: [null],
      bairro: [null],
      rua: [null],
      estado: [null],
      cidade: [null],
      pais: [null],
      descricao: [null],
    });
  }
  async submit() {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  cadastrar() {
    this.modalCtrl.dismiss(this.type, 'confirm');
    //id temporario dps o banco gera
    if (this.type) {
      this.usuario = {
        nome: this.usuario.nome,
        senha: this.usuario.senha,
        email: this.usuario.email,
        endereco: this.endereco,
        cpf: this.usuario.cpf,
        foto: 'teste',
      };
      this.usuarioServ.insertUsuario(this.usuario, this.type);
    } else {
      this.van = {
        nome: this.van.nome,
        cnpj: this.van.cnpj,
        bairro: this.van.bairro,
        descricao: this.van.descricao,
        foto: 'https://img0.icarros.com/dbimg/imgmodelo/2/699_15.png',
      };
      let usuarioVan = new Usuario();
      usuarioVan = {
        nome: this.usuario.nome,
        senha: this.usuario.senha,
        email: this.usuario.email,
        endereco: this.endereco,
        cpf: this.usuario.cpf,
        foto: this.usuario.foto,
        van: this.van,
      };
      this.usuarioServ.insertUsuario(usuarioVan, this.type);
    }
  }
  confirm(type: boolean) {
    this.type = type;
    return this.modalCtrl.dismiss(this.type, 'confirm');
  }
}
