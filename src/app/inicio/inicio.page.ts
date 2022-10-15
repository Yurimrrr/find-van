import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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

  public vans: Array<Van> = [];

  public results = [...this.vans];

  loading=true


  async getVans(){
    this.vanServ.getAllVan().subscribe((vans: Van[]) => {
      this.vans = vans;
      console.log("GET VANS ========");
      console.log(this.vans);
      console.log("GET VANS ========");
    });
  }

  ngOnInit() {
    this.getVans();
    console.log("Array Vans Init vindo vazio");
    console.log(this.vans);
    this.loading = false;
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
