import { Injectable } from '@angular/core';
import { UsuarioVan } from '../entities/usuarioVan.model';
import { VanService } from './van.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioVanService {

  constructor(
    private usuario: UsuarioVan,
    private vanServ: VanService
    ) { }

  usuarios : Array<UsuarioVan>;

  public getAllJogadores(): Array<UsuarioVan> {
    return this.usuarios;
  }

  public getUsuarioVanById(id: number): UsuarioVan{
    const usuarioEncontrado = this.usuarios.find(obj => obj.id === id);

    if (!usuarioEncontrado) {
      console.log("UsuarioVan não encontrado")
    }
    return usuarioEncontrado;
  }

  public insertUsuarioVan(usuarioDto: UsuarioVan): void {
    const { van } = this.usuario;
    const { email } = usuarioDto;

    this.vanServ.insertVan(van);

    const usuarioEncontrado = this.usuarios.find(obj => obj.email === email);

    if (usuarioEncontrado) {
      console.log(`UsuarioVan com o e-mail ${email} já cadastrado`);
    }

    const jogadorCriado = this.usuarios.push(usuarioDto);
  }

  public updateUsuarioVan(usuarioDto: UsuarioVan): void{

    let usuarioEncontrado = this.usuarios.find(obj => obj.id === usuarioDto.id);

    if (!usuarioEncontrado) {
      console.log("UsuarioVan não encontrado")
    }

    usuarioEncontrado = usuarioDto;

  }

  public deleteVan(id: number): void {
    // const usuarioEncontrado = this.usuarios.find(obj => obj.id === id);

    // if (!usuarioEncontrado) {
    //   console.log("UsuarioVan não encontrado")
    // }

  }
}
