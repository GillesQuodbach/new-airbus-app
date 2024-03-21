import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AircraftsState, AircraftsStateEnum } from './aircrafts.state';
import { Aircraft } from '../model/aircraft.model';

// on veux renvoyer le nombre d'avion en phase d'étude ET en construction
export const selectCountAlertAircrafts = createSelector(
  createFeatureSelector('airbusState'), // spécifie sur quel state on agit
  (state: AircraftsState) => {
    let total: number = 0;
    // if statment added becauseof typerror on init state.dataState was undefined
    if (state.dataState === AircraftsStateEnum.LOADED) {
      state.aircrafts.forEach((a) => {
        if (a.development == true && a.design == true) total++;
      });
    }
    return total;
  }
);

export const selectDevAndDesignedAircrafts = createSelector(
  createFeatureSelector('airbusState'),
  (state: AircraftsState) => {
    let aircraftArray: Aircraft[] = [];
    if (state.dataState === AircraftsStateEnum.LOADED) {
      state.aircrafts.forEach((a) => {
        if (a.development == true && a.design == true) {
          aircraftArray.push(a);
        }
      });
    }
    return aircraftArray;
  }
);

export const isUserLoggedIn = createSelector(
  createFeatureSelector('airbusState'),

  (state: AircraftsState) => {
    let isConnected;
    if (state.isUserLogged === true) {
      isConnected = true;
    } else {
      isConnected = false;
    }
    return isConnected;
  }
);
