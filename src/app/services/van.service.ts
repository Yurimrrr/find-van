import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Van } from '../entities/vans.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class VanService {

  url = 'http://localhost:3000/vans';
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    })
  }

  vans : Array<Van> = [];

  public getAllVan(): Observable<Van[]> {
    return this.httpClient.get<Van[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  public getVanById(id: number): Observable<Van>{
    return this.httpClient.get<Van>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  public insertVan(vanDto: Van) {
    console.log("entrou no insert da van");
    return this.httpClient.post<Van>(this.url, JSON.stringify(vanDto), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      ).subscribe()
  }

  public updateVan(vanDto: Van): Observable<Van>{
    return this.httpClient.put<Van>(this.url + '/' + vanDto.id, JSON.stringify(vanDto), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  public deleteVan(vanDto: Van) {
    return this.httpClient.delete<Van>(this.url + '/' + vanDto.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

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
