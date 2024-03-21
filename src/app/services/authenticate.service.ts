import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { isUserLoggedIn } from '../ngrx/aircrafts.selectors';
import { GetUserLogoutAction } from '../ngrx/login/login.actions';

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

  public getUsers(email: string): Observable<User[]> {
    return this.http.get<User[]>(environment.host + `/users?email=${email}`);
  }

  public isUserLoggedIn$(): Observable<boolean> {
    return this.store.select(isUserLoggedIn);
  }
  public logout(): void {
    // Changez le type de retour à Observable<void>
    return this.store.dispatch(new GetUserLogoutAction({}));
  }
}
