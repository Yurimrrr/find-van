import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Van } from './../entities/vans.model';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public vans: Van = new Van();  

  public van:Van[] = [
    { id: 1,
      nome: 'Van cabulosa',
      bairro: 'Pampulha',
      descricao: 'Van atende somente no horario da noite',
      foto:'./../../assets/img/van1.png' },

    { id: 2, 
      nome: 'Van doida',
      bairro: 'Barreiro',
      descricao: 'Van atende nos dois horarios',
      foto:'./../../assets/img/van2.png'},  

    { id: 3, 
      nome: 'Van guilherme',
      bairro: 'Ibirite',
      descricao: 'Van atende nos dois horarios',
      foto:'./../../assets/img/van3.png' },
      

    { id: 4,
      nome: 'Van yuri',
      bairro: 'Venda nova',
      descricao: 'Van atende nos dois horarios',
      foto:'./../../assets/img/van1.png' },

    { id: 5,
      nome: 'Van cleitinhos',
      bairro: 'Dona Clara',
      descricao: 'Van atende nos dois horarios',
      foto:'./../../assets/img/Van-Escolar.png' },

   
    { id: 6,
      nome: 'Van fuchs',
      bairro: 'Sagrada Familia',
      descricao: 'Van atende nos dois horarios',
      foto:'./../../assets/img/vanConnect.png' }
  
  ];

  constructor(private route: Router) { }

  ngOnInit() {
  }

  //arrumar isso dps big integer parece não ser serto
  entrarNaVan(id: BigInteger){
    this.route.navigate(['/vincula-van']);
  }

}
