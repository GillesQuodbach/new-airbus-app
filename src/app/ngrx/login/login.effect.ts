import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { EMPTY, Observable, catchError, map, mergeMap, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  GetUserAction,
  GetUserActionError,
  GetUserActionSuccess,
  UsersActionsTypes,
  GetUserLogoutAction,
  GetUserLogoutActionError,
  GetUserLogoutActionSuccess,
  LogoutActionsTypes,
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
      mergeMap((action: { type: string; payload: { email: string } }) => {
        const { email } = action.payload;

        return this.authService.checkEmail(email).pipe(
          mergeMap((emailExists) => {
            if (emailExists) {
              return this.authService.getUsers(email).pipe(
                map((user) => new GetUserActionSuccess(user)),
                catchError((err) => of(new GetUserActionError(err.message)))
              );
            } else {
              return of(new GetUserActionError('Email does not exist'));
            }
          })
        );
      })
    )
  );
  // GetUserLogout: Observable<Action> = createEffect(() =>
  //   this.effectActions.pipe(
  //     ofType(LogoutActionsTypes.LOGOUT_USER),
  //     mergeMap(() => {
  //       return this.authService.logout().pipe(
  //         map(() => new GetUserLogoutActionSuccess()), // Action de succès si la déconnexion réussit
  //         catchError((err) => of(new GetUserLogoutActionError(err.message))) // Action d'erreur en cas d'échec de la déconnexion
  //       );
  //     })
  //   )
  // );
}
