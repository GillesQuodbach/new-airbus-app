import { Action } from '@ngrx/store';
import { User } from 'src/app/model/user.model';

export interface UserEvent {
  type: UsersActionsTypes;
  payload: any;
}

export enum UsersActionsTypes {
  GET_USER = '[User] Get User',
  GET_USER_SUCCESS = '[User] Get User Success',
  GET_USER_ERROR = '[User] Get User Error',
}

export enum LogoutActionsTypes {
  LOGOUT_USER = '[User] Logout User',
  LOGOUT_USER_SUCCESS = '[User] Logout User',
  LOGOUT_USER_ERROR = '[User] Logout User',
}
export class GetUserAction implements Action {
  type: UsersActionsTypes = UsersActionsTypes.GET_USER;
  constructor(public payload: any) {}
}

export class GetUserActionSuccess implements Action {
  type: UsersActionsTypes = UsersActionsTypes.GET_USER_SUCCESS;
  constructor(public payload: User[]) {}
}

export class GetUserActionError implements Action {
  type: UsersActionsTypes = UsersActionsTypes.GET_USER_ERROR;
  constructor(public payload: string) {}
}

export class GetUserLogoutAction implements Action {
  type: LogoutActionsTypes = LogoutActionsTypes.LOGOUT_USER;
  constructor(public payload: any) {}
}

export class GetUserLogoutActionSuccess implements Action {
  type: LogoutActionsTypes = LogoutActionsTypes.LOGOUT_USER_SUCCESS;
  constructor(public payload: any) {}
}

export class GetUserLogoutActionError implements Action {
  type: LogoutActionsTypes = LogoutActionsTypes.LOGOUT_USER_ERROR;
  constructor(public payload: string) {}
}

export type UserActions =
  | GetUserAction
  | GetUserActionSuccess
  | GetUserActionError
  | GetUserLogoutAction
  | GetUserLogoutActionSuccess
  | GetUserLogoutActionError;
