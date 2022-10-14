import { Injectable } from '@angular/core';
import { UsuarioVan } from '../entities/usuarioVan.model';
import { Van } from '../entities/vans.model';
import { VanService } from './van.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioVanService {

  constructor(
    private vanServ: VanService
    ) { }

  usuarios : Array<UsuarioVan> = [];

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
    const { van } = usuarioDto;
    const { email } = usuarioDto;

    const _van = new Van();
    _van.id = van.id;
    _van.bairro = van.bairro;
    _van.cnpj = van.cnpj;
    _van.descricao = van.descricao;
    _van.foto = van.foto;
    _van.nome = van.nome;

    this.vanServ.insertVan(_van);

    const usuario = new UsuarioVan()

    usuario.id = usuarioDto.id;
    usuario.nome = usuarioDto.nome;
    usuario.email = usuarioDto.email;
    usuario.endereco = usuarioDto.endereco;
    usuario.cpf = usuarioDto.cpf;
    usuario.senha = usuarioDto.senha;
    usuario.foto = usuarioDto.foto;
    usuario.van = _van;

    const usuarioEncontrado = this.usuarios.find(obj => obj.email === email);

    if (usuarioEncontrado) {
      console.log(`UsuarioVan com o e-mail ${email} já cadastrado`);
    }

    const usuarioCriado = this.usuarios.push(usuarioDto);
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
