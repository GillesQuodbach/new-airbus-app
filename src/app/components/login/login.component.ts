import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isUserLoggedIn } from 'src/app/ngrx/aircrafts.selectors';
import { AircraftsStateEnum } from 'src/app/ngrx/aircrafts.state';
import { GetUserAction } from 'src/app/ngrx/login/login.actions';
import { DataStateEnum } from 'src/app/state/aircraft.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userLogged$: Observable<boolean> | undefined;
  readonly aircraftsStateEnum = AircraftsStateEnum;
  readonly dataStateEnum = DataStateEnum;
  static loginForm: any;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthenticateService
  ) {}

  ngOnInit(): void {
    this.userLogged$ = this.store.select(isUserLoggedIn);
  }

  loginForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$'),
      ],
    ],
    password: ['', [Validators.required]],
  });

  loginUser() {
    const { email, password } = this.loginForm.value;
    this.store.dispatch(new GetUserAction({ email }));
  }

  logoutUser() {
    this.store.dispatch(new GetUserAction({ email: '' }));
  }
}
