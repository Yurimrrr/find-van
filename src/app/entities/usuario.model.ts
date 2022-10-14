import { Endereco } from "./endereco.model";

export class Usuario {

    // constructor()
    constructor(public id?: number,
                public nome?: string,
                public email?: string,
                public endereco?: Endereco,
                public cpf?: string,
                public foto?: string) {
    }
}
