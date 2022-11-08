import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthResponseDto } from '../entities/auth-response';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  acessToken: string;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    console.log("entrou aqui")
    return this.http.post<AuthResponseDto>(`${environment.backendApiUrl}/v1/login`, {Email: username, Senha: password})
      .subscribe(result => {
          this.acessToken = result.data.token;
          console.log(result);
          localStorage.setItem('user_name', result.data.user.nome)
          localStorage.setItem('access_token', result.data.token);
        });
  }

  logout() {
    localStorage.removeItem('user_name');
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}
