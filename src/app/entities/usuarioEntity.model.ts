import { Endereco } from "./endereco.model";

export class UsuarioEntity {

    // constructor()
    constructor(public id?: number,
                public nome?: string,
                public email?: string,
                public endereco?: Endereco,
                public cpf?: string,
                public senha?: string,
                public foto?: string) {
    }
}
