import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectDevAndDesignedAircrafts } from 'src/app/ngrx/aircrafts.selectors';
import { AircraftsStateEnum } from 'src/app/ngrx/aircrafts.state';
import { DataStateEnum } from 'src/app/state/aircraft.state';
import { Aircraft } from 'src/app/model/aircraft.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  selectedDevAndDesignedAircrafts$: Observable<Aircraft[]> | undefined;

  readonly aircraftsStateEnum = AircraftsStateEnum;
  readonly dataStateEnum = DataStateEnum;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.selectedDevAndDesignedAircrafts$ = this.store.select(
      selectDevAndDesignedAircrafts
    );
  }
}
