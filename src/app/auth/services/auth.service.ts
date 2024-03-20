import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponseInterface } from '../types/auth.responce.interface';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { Observable, map } from 'rxjs';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(private http: HttpClient) { }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + 'users';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response) => response.user));
  }
}