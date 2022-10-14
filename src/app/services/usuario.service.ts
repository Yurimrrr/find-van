import { Injectable } from '@angular/core';
import { Usuario } from '../entities/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private usuario: Usuario) { }

  usuarios : Array<Usuario>;

  private getAllJogadores(): Array<Usuario> {
    return this.usuarios;
  }

  private getUsuarioById(id: number): Usuario{
    const usuarioEncontrado = this.usuarios.find(obj => obj.id === id);

    if (!usuarioEncontrado) {
      console.log("Usuario não encontrado")
    }
    return usuarioEncontrado;
  }

  private insertUsuario(usuarioDto: Usuario): void {
    const { email } = usuarioDto;
    const usuarioEncontrado = this.usuarios.find(obj => obj.email === email);

    if (usuarioEncontrado) {
      console.log(`Usuario com o e-mail ${email} já cadastrado`);
    }

    const jogadorCriado = this.usuarios.push(usuarioDto);
  }

  private updateUsuario(usuarioDto: Usuario): void{

    let usuarioEncontrado = this.usuarios.find(obj => obj.id === usuarioDto.id);

    if (!usuarioEncontrado) {
      console.log("Usuario não encontrado")
    }

    usuarioEncontrado = usuarioDto;

  }

  private deleteVan(id: number): void {
    // const usuarioEncontrado = this.usuarios.find(obj => obj.id === id);

    // if (!usuarioEncontrado) {
    //   console.log("Usuario não encontrado")
    // }

  }
}
