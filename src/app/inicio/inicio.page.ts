import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public vans = [
    { id: 1, nome: 'Van cabulosa', bairro: 'Pampulha', descricao: 'Van atende somente no horario da noite' },
    { id: 2, nome: 'Van doida', bairro: 'Barreiro', descricao: 'Van atende nos dois horarios' },
    { id: 3, nome: 'Van guilherme', bairro: 'Ibirite', descricao: 'Van atende nos dois horarios' },
    { id: 4, nome: 'Van yuri', bairro: 'Venda nova', descricao: 'Van atende nos dois horarios' },
    { id: 5, nome: 'Van cleitinhos', bairro: 'Dona Clara', descricao: 'Van atende nos dois horarios' },
    { id: 6, nome: 'Van fuchs', bairro: 'Sagrada Familia', descricao: 'Van atende nos dois horarios' }
  ];

  constructor(private route: Router) { }

  ngOnInit() {
  }

  //arrumar isso dps big integer parece não ser serto
  entrarNaVan(id: BigInteger){
    this.route.navigate(['/vincula-van']);
  }

}
