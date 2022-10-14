import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../entities/usuario.model';
import { Van } from './../entities/vans.model';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  public vans: Array<Van> = [
    new Van(1, "Van cabulosa", "Pampulha", "Van atende somente no horario da noite", "./../../assets/img/van1.png"),
    new Van(2, "Van doida", "Barreiro", "Van atende somente no horario da noite", "./../../assets/img/van2.png"),
    new Van(3, "Van guilherme", "Ibirite", "Van atende somente no horario da noite", "./../../assets/img/van3.png"),
    new Van(4, "Van yuri", "Venda nova", "Van atende somente no horario da noite", "./../../assets/img/van1.png"),
    new Van(5, "Van cleitinhos", "Dona Clara", "Van atende somente no horario da noite", "./../../assets/img/Van-Escolar.png"),
    new Van(6, "Van fuchs", "Sagrada Familia", "Van atende somente no horario da noite", "./../../assets/img/vanConnect.png"),
  ];

  public results = [...this.vans];

  constructor(private route: Router) { }

  ngOnInit() {
    console.log(this.vans)
  }

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.vans.filter(d => d.bairro.toLowerCase().indexOf(query) > -1);
  }

  //arrumar isso dps big integer parece não ser serto
  entrarNaVan(id: BigInteger){
    this.route.navigate(['/vincula-van']);
  }

}
