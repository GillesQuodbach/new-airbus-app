import {
  AircraftsState,
  AircraftsStateEnum,
} from './../../ngrx/aircrafts.state';
import { Component, OnInit } from '@angular/core';
import { Aircraft } from 'src/app/model/aircraft.model';
import { Observable, startWith, map, catchError, of } from 'rxjs';
import { AppDataState, DataStateEnum } from 'src/app/state/aircraft.state';
import { Store } from '@ngrx/store';
import { selectCountAlertAircrafts } from 'src/app/ngrx/aircrafts.selectors';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css'],
})
export class AircraftsComponent implements OnInit {
  aircrafts$: Observable<AppDataState<Aircraft[]>> | null = null;
  aircraftsState$: Observable<AircraftsState> | null = null;
  counterAlertAircrafts$: Observable<number> | undefined;

  readonly aircraftsStateEnum = AircraftsStateEnum;
  readonly dataStateEnum = DataStateEnum;

  constructor(private store: Store<any>) {
    this.counterAlertAircrafts$ = store.select(selectCountAlertAircrafts);
  }

  ngOnInit(): void {
    this.aircraftsState$ = this.store.pipe(map((state) => state.airbusState));
  }
}
