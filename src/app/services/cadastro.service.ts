import { Injectable } from '@angular/core';
import { Usuario } from '../entities/usuario.model';
import { UsuarioVan } from '../entities/usuarioVan.model';
import { UsuarioService } from './usuario.service';
import { UsuarioVanService } from './usuarioVan.service';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(
    private usuarioServ: UsuarioService,
    private usuarioVanServ: UsuarioVanService
    ) { }

public cadastrar(tipoUsuario: boolean, usuario: Usuario, usuarioVan: UsuarioVan): void{
      if(tipoUsuario){
        this.usuarioServ.insertUsuario(usuario);
      }else{
        this.usuarioVanServ.insertUsuarioVan(usuarioVan);
      }
    }
}
