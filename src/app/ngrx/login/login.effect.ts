import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Observable, catchError, map, mergeMap, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  GetUserActionError,
  GetUserActionSuccess,
  UsersActionsTypes,
} from './login.actions';
import { Router } from '@angular/router';

@Injectable()
export class UsersEffects {
  constructor(
    private authService: AuthenticateService,
    private effectActions: Actions,
    private router: Router
  ) {}

  getAllUsersEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(UsersActionsTypes.GET_USER),
      mergeMap(
        (action: {
          type: string;
          payload: { email: string; password: string };
        }) => {
          const { email, password } = action.payload;
          if (!email || !password) {
            return this.authService
              .getUsers(email, password)
              .pipe(map((user) => new GetUserActionError(user)));
          }
          return this.authService.getUsers(email, password).pipe(
            mergeMap((user) => {
              if (user[0]?.email === email && user[0]?.password) {
                return of(new GetUserActionSuccess(user));
              } else {
                return of(new GetUserActionError('Invalid email or password'));
              }
            })
          );
        }
      )
    )
  );
}
