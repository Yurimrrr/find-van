import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, retry } from 'rxjs/operators';
import { Usuario } from '../entities/usuario.model';
import { Van } from '../entities/vans.model';
import { VanService } from './van.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:3000/usuario';
  constructor(
    private httpClient: HttpClient,
    private vanServ: VanService
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    })
  }

  usuarios: Usuario[] = [];

  public getAllJogadores(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  public getUsuarioById(id: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  public insertUsuario(usuarioDto: Usuario, type: boolean): void {
    const { van } = usuarioDto;

    console.log(usuarioDto);

    if(!type){
      const vanInsert = this.vanServ.insertVan(van)

      console.log("VAN INSERT =========");
      console.log(vanInsert);
      console.log("VAN INSERT =========");

      // tem que ver como trasformar subscrible em objeto.

      // const _van = new Van();
      // vanInsert.toPromise().then(item => {
      //   _van.id = item.id
      //   _van.bairro = item.bairro;
      //   _van.cnpj = item.cnpj;
      //   _van.descricao = item.descricao;
      //   _van.foto = item.foto;
      //   _van.nome = item.nome;
      // })

      // usuarioDto.van = _van;
    }
    console.log("entrou aq");

    this.httpClient.post<Usuario>(this.url, JSON.stringify(usuarioDto), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      ).subscribe();
  }

  // public updateUsuario(usuarioDto: Usuario): void{

  //   let usuarioEncontrado = this.usuarios.find(obj => obj.id === usuarioDto.id);

  //   if (!usuarioEncontrado) {
  //     console.log("Usuario não encontrado")
  //   }

  //   usuarioEncontrado = usuarioDto;

  // }

  // public deleteVan(id: number): void {
  //   // const usuarioEncontrado = this.usuarios.find(obj => obj.id === id);

  //   // if (!usuarioEncontrado) {
  //   //   console.log("Usuario não encontrado")
  //   // }

  // }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
