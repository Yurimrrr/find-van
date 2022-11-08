import { Usuario } from "./usuario.model"

export class AuthResponseDto{
    data : {
        user: Usuario
        token: string
    }
}