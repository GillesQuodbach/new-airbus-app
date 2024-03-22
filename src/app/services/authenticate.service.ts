import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { isUserLoggedIn } from '../ngrx/aircrafts.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor(private http: HttpClient, private store: Store) {}

  public checkEmail(email: string): Observable<boolean> {
    return this.http
      .get<User[]>(environment.host + '/users')
      .pipe(map((users) => users.some((user) => user.email === email)));
  }

  public getUsers(email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(
      environment.host + `/users?email=${email}&password=${password}`
    );
  }

  public isUserLoggedIn$(): Observable<boolean> {
    return this.store.select(isUserLoggedIn);
  }
}
