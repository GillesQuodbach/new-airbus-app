import { getTestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { isUserLoggedIn } from './ngrx/aircrafts.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AircraftsStateEnum } from './ngrx/aircrafts.state';
import { DataStateEnum } from './state/aircraft.state';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'airbus-app-ngrx';
  userLogged$: Observable<boolean> | undefined;
  constructor(private store: Store) {}
  readonly aircraftsStateEnum = AircraftsStateEnum;
  readonly dataStateEnum = DataStateEnum;
  ngOnInit(): void {
    this.userLogged$ = this.store.select(isUserLoggedIn);
  }
}
