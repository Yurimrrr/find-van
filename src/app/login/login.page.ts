import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  name: string;
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }


  user = "";
  password = "";
  isEscondeSenha: boolean;


  constructor(
    private modalCtrl: ModalController, 
    private route: Router,
    private alertController: AlertController,
    private authService: AuthService) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: LoginModalComponent,
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

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Preencha todos os campos!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  checkCampos(){
    if(this.user != "" && this.password != ""){
      this.authService.login(this.user, this.password);
      return this.openModal();
    }

    this.presentAlert();
    

  }

  escondeSenha(){
    this.isEscondeSenha = !this.isEscondeSenha;
  }

}
