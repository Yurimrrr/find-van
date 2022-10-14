import { Injectable } from '@angular/core';
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

    private cadastrar(): void{

    }
}
