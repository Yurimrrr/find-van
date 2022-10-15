import { Endereco } from "./endereco.model";
import { Van } from "./vans.model";

export class Usuario  {
    constructor(public id?: number,
      public nome?: string,
      public email?: string,
      public endereco?: Endereco,
      public cpf?: string,
      public senha?: string,
      public foto?: string,
      public vanId?: number,
      public van?: Van) {
    }
}
