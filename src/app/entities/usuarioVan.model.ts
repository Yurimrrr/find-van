import { Endereco } from "./endereco.model";
import { UsuarioEntity } from "./usuarioEntity.model";
import { Van } from "./vans.model";

export class UsuarioVan extends UsuarioEntity {
    constructor(public van?: Van) {
      super();
    }
}
