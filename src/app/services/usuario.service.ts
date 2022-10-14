import { Injectable } from '@angular/core';
import { Usuario } from '../entities/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  private usuarios: Usuario[] = [];

  public getAllJogadores(): Array<Usuario> {
    return this.usuarios;
  }

  public getUsuarioById(id: number): Usuario{
    const usuarioEncontrado = this.usuarios.find(obj => obj.id === id);

    if (!usuarioEncontrado) {
      console.log("Usuario não encontrado")
    }
    return usuarioEncontrado;
  }

  public insertUsuario(usuarioDto: Usuario): void {
    const { email } = usuarioDto;
    const usuarioEncontrado = this.usuarios.find(obj => obj.email === email);

    if (usuarioEncontrado) {
      console.log(`Usuario com o e-mail ${email} já cadastrado`);
    }

    const usuario = new Usuario()

    usuario.id = usuarioDto.id;
    usuario.nome = usuarioDto.nome;
    usuario.email = usuarioDto.email;
    usuario.endereco = usuarioDto.endereco;
    usuario.cpf = usuarioDto.cpf;
    usuario.senha = usuarioDto.senha;
    usuario.foto = usuarioDto.foto;

    console.log(this.usuarios);

    const usuarioCriado = this.usuarios.push(usuario);
  }

  public updateUsuario(usuarioDto: Usuario): void{

    let usuarioEncontrado = this.usuarios.find(obj => obj.id === usuarioDto.id);

    if (!usuarioEncontrado) {
      console.log("Usuario não encontrado")
    }

    usuarioEncontrado = usuarioDto;

  }

  public deleteVan(id: number): void {
    // const usuarioEncontrado = this.usuarios.find(obj => obj.id === id);

    // if (!usuarioEncontrado) {
    //   console.log("Usuario não encontrado")
    // }

  }
}
