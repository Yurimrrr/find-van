import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthResponseDto } from '../entities/auth-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  acessToken: string;

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    return this.http
      .post<AuthResponseDto>(`${environment.backendApiUrl}/v1/login`, {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Email: username,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Senha: password,
      })
      .subscribe((result) => {
        this.acessToken = result.data.token;
        console.log(result);
        localStorage.setItem('user_name', result.data.user.nome);
        localStorage.setItem('access_token', result.data.token);
      });
  }

  logout() {
    localStorage.removeItem('user_name');
    localStorage.removeItem('access_token');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }
}
