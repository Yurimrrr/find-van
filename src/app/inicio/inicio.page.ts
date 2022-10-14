import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../entities/usuario.model';
import { VanService } from '../services/van.service';
import { Van } from './../entities/vans.model';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  constructor(
    private route: Router,
    private vanServ: VanService
    ) { }

  public vans: Array<Van> = this.vanServ.getAllVan();

  public results = [...this.vans];


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
