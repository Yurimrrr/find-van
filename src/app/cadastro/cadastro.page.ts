import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CadastroModalComponent } from './cadastro-modal/cadastro-modal.component';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
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
    private route: Router) { }

  ngOnInit() {
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




