import { Injectable } from '@angular/core';
import { Van } from '../entities/vans.model';

@Injectable({
  providedIn: 'root'
})
export class VanService {


  constructor(private van: Van) { }

  vans : Array<Van>;

  public getAllVan(): Array<Van> {
    return this.vans;
  }

  public getVanById(id: number): Van{
    const vanEncontrado = this.vans.find(obj => obj.id === id);

    if (!vanEncontrado) {
      console.log("Usuario não encontrado")
    }
    return vanEncontrado;
  }

  public insertVan(vanDto: Van): void {
    const { cnpj } = vanDto;
    const usuarioEncontrado = this.vans.find(obj => obj.cnpj === cnpj);

    if (usuarioEncontrado) {
      console.log(`Van com o cnpj ${cnpj} já cadastrado`);
    }

    const jogadorCriado = this.vans.push(vanDto);
  }

  public updateVan(vanDto: Van): void{

    let usuarioEncontrado = this.vans.find(obj => obj.id === vanDto.id);

    if (!usuarioEncontrado) {
      console.log("Usuario não encontrado")
    }

    usuarioEncontrado = vanDto;

  }

  public deleteVan(id: number): void {
    // const usuarioEncontrado = this.usuarios.find(obj => obj.id === id);

    // if (!usuarioEncontrado) {
    //   console.log("Usuario não encontrado")
    // }

  }
}
