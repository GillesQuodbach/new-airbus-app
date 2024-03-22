import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  GetAllAircraftsAction,
  GetDesignedAircraftsAction,
  GetDevelopmentAircraftsAction,
  GetSearchedAircraftsAction,
} from 'src/app/ngrx/aircrafts.actions';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css'],
})
export class AircraftsNavbarComponent implements OnInit {
  @Output() eventEmitter: EventEmitter<any> = new EventEmitter();

  searchForm = this.fb.group({
    searchValue: [''],
  });
  constructor(private fb: FormBuilder, private store: Store<any>) {}

  ngOnInit(): void {}

  getAllAircrafts() {
    this.store.dispatch(new GetAllAircraftsAction({}));
  }

  getSearchedAircrafts(value: any) {
    this.store.dispatch(
      new GetSearchedAircraftsAction({ value: value.value.searchValue })
    );
  }
  getDesignedAircrafts() {
    this.store.dispatch(new GetDesignedAircraftsAction({}));
  }

  getDevelopmentAircrafts() {
    this.store.dispatch(new GetDevelopmentAircraftsAction({}));
  }
}
