import { Action } from '@ngrx/store';
import { Operation } from '../model/operation.model';

export enum OperationsActionsType {
  ADD_OPERATION = '[Operation] Add one',
  REMOVE_OPERATION = '[Operation] Remove one',
}

export class AddOneOperationsAction implements Action {
  type: OperationsActionsType = OperationsActionsType.ADD_OPERATION;
  constructor(public payload: Operation) {}
}

export class RemoveOneOperationsAction implements Action {
  type: OperationsActionsType = OperationsActionsType.REMOVE_OPERATION;
  constructor(public payload: number) {}
}
