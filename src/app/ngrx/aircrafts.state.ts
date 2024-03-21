import { User } from 'src/app/model/user.model';
import { EntityState } from '@ngrx/entity';
import { Aircraft } from '../model/aircraft.model';
import { Operation } from '../model/operation.model';

export enum AircraftsStateEnum { // les diffrents états du state
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  INITIAL = 'Initial',
}

export interface AircraftsState extends EntityState<Operation> {
  //structure du state
  aircrafts: Aircraft[];
  errorMessage: string;
  dataState: AircraftsStateEnum;
  users: User[];
  isUserLogged: boolean;
}

//état initial du state et valeurs par défaut
export const initState: AircraftsState = {
  aircrafts: [],
  errorMessage: '',
  dataState: AircraftsStateEnum.INITIAL,
  ids: [],
  entities: {},
  users: [],
  isUserLogged: false,
};

// {
//   type: '[Operation] Add one',
//   payload: {id:1, name:'po'}

//   }
