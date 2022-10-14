import { Injectable } from '@angular/core';
import { UsuarioVan } from '../entities/usuarioVan.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioVanService {

  constructor(private usuario: UsuarioVan) { }

  usuarios : Array<UsuarioVan>;

  private getAllJogadores(): Array<UsuarioVan> {
    return this.usuarios;
  }

  private getUsuarioVanById(id: number): UsuarioVan{
    const usuarioEncontrado = this.usuarios.find(obj => obj.id === id);

    if (!usuarioEncontrado) {
      console.log("UsuarioVan não encontrado")
    }
    return usuarioEncontrado;
  }

  private insertUsuarioVan(usuarioDto: UsuarioVan): void {
    const { email } = usuarioDto;
    const usuarioEncontrado = this.usuarios.find(obj => obj.email === email);

    if (usuarioEncontrado) {
      console.log(`UsuarioVan com o e-mail ${email} já cadastrado`);
    }

    const jogadorCriado = this.usuarios.push(usuarioDto);
  }

  private updateUsuarioVan(usuarioDto: UsuarioVan): void{

    let usuarioEncontrado = this.usuarios.find(obj => obj.id === usuarioDto.id);

    if (!usuarioEncontrado) {
      console.log("UsuarioVan não encontrado")
    }

    usuarioEncontrado = usuarioDto;

  }

  private deleteVan(id: number): void {
    // const usuarioEncontrado = this.usuarios.find(obj => obj.id === id);

    // if (!usuarioEncontrado) {
    //   console.log("UsuarioVan não encontrado")
    // }

  }
}
