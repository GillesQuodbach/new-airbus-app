import { Action } from '@ngrx/store';
import { Aircraft } from '../model/aircraft.model';
import { OperationsActionsType } from './operation.actions';

export interface ActionEvent {
  type: AircraftsActionsTypes;
  payload: any;
}

export enum AircraftsActionsTypes {
  // affichage des avions = 3 états possible
  //? Action : Get all aircrafts
  GET_ALL_AIRCRAFTS = '[Aircrafts] Get All Aircrafts',
  GET_ALL_AIRCRAFTS_SUCCESS = '[Aircrafts] Get All Aircrafts Success',
  GET_ALL_AIRCRAFTS_ERROR = '[Aircrafts] Get All Aircrafts Error',
  GET_SEARCH_AIRCRAFTS = '[Aircrafts] Get Searched Aircafts',

  //? Action : Get Designed aircrafts
  GET_DESIGNED_AIRCRAFTS = '[Aircrafts] Get Designed Aircrafts',
  GET_DESIGNED_AIRCRAFTS_SUCCESS = '[Aircrafts] Get Designed Aircrafts Success',
  GET_DESIGNED_AIRCRAFTS_ERROR = '[Aircrafts] Get Designed Aircrafts Error',

  //? Action : Get Development aircrafts
  GET_DEVELOPMENT_AIRCRAFTS = '[Aircrafts] Get Development Aircrafts',
  GET_DEVELOPMENT_AIRCRAFTS_SUCCESS = '[Aircrafts] Get Development Aircrafts Success',
  GET_DEVELOPMENT_AIRCRAFTS_ERROR = '[Aircrafts] Get Development Aircrafts Error',

  //? Action : Get Searched aircrafts
  GET_SEARCHED_AIRCRAFTS = '[Aircrafts] Get Searched Aircrafts',
  GET_SEARCHED_AIRCRAFTS_SUCCESS = '[Aircrafts] Get Searched Aircrafts Success',
  GET_SEARCHED_AIRCRAFTS_ERROR = '[Aircrafts] Get Searched Aircrafts Error',

  ADD_OPERATION = '[Operations] Add one',
  REMOVE_OPERATION = '[Operations] Remove one',
}

// ! Get all aircrafts

export class AddOneOperationsAction implements Action {
  type: OperationsActionsType = OperationsActionsType.ADD_OPERATION;
  constructor(public payload: any) {}
}

export class RemoveOneOperationsAction implements Action {
  type: OperationsActionsType = OperationsActionsType.REMOVE_OPERATION;
  constructor(public payload: any) {}
}
export class GetAllAircraftsAction implements Action {
  type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS;
  constructor(public payload: any) {}
}

export class GetAllAircraftsActionSuccess implements Action {
  type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS;
  constructor(public payload: Aircraft[]) {}
}

export class GetAllAircraftsActionError implements Action {
  type: AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR;
  constructor(public payload: string) {}
}

// ! Get designed aircrafts
export class GetDesignedAircraftsAction implements Action {
  type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS;
  constructor(public payload: any) {}
}

export class GetDesignedAircraftsActionSuccess implements Action {
  type: AircraftsActionsTypes =
    AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS;
  constructor(public payload: Aircraft[]) {}
}

export class GetDesignedAircraftsActionError implements Action {
  type: AircraftsActionsTypes =
    AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_ERROR;
  constructor(public payload: string) {}
}

// ! Get development aircrafts
export class GetDevelopmentAircraftsAction implements Action {
  type: AircraftsActionsTypes = AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS;
  constructor(public payload: any) {}
}

export class GetDevelopmentAircraftsActionSuccess implements Action {
  type: AircraftsActionsTypes =
    AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_SUCCESS;
  constructor(public payload: Aircraft[]) {}
}

export class GetDevelopmentAircraftsActionError implements Action {
  type: AircraftsActionsTypes =
    AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_ERROR;
  constructor(public payload: string) {}
}

// ! Get searched aircrafts
export class GetSearchedAircraftsAction implements Action {
  type: AircraftsActionsTypes = AircraftsActionsTypes.GET_SEARCHED_AIRCRAFTS;
  constructor(public payload: any) {}
}

export class GetSearchedAircraftsActionSuccess implements Action {
  type: AircraftsActionsTypes =
    AircraftsActionsTypes.GET_SEARCHED_AIRCRAFTS_SUCCESS;
  constructor(public payload: Aircraft[]) {}
}

export class GetSearchedAircraftsActionError implements Action {
  type: AircraftsActionsTypes =
    AircraftsActionsTypes.GET_SEARCHED_AIRCRAFTS_ERROR;
  constructor(public payload: string) {}
}
export type AircraftsActions =
  | GetAllAircraftsAction
  | GetAllAircraftsActionSuccess
  | GetAllAircraftsActionError
  | GetDesignedAircraftsAction
  | GetDesignedAircraftsActionSuccess
  | GetDesignedAircraftsActionError
  | GetDevelopmentAircraftsAction
  | GetDevelopmentAircraftsActionSuccess
  | GetDevelopmentAircraftsActionError
  | GetSearchedAircraftsAction
  | GetSearchedAircraftsActionSuccess
  | GetSearchedAircraftsActionError
  | AddOneOperationsAction
  | RemoveOneOperationsAction;
