import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { AircraftsNavbarComponent } from './components/aircrafts/aircrafts-navbar/aircrafts-navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AircraftsEffects } from './ngrx/aircrafts.effect';
import { AircraftsReducer } from './ngrx/aircrafts.reducer';
import { AlertComponent } from './components/aircrafts/alert/alert.component';
import { LoginComponent } from './components/login/login.component';
import { UsersEffects } from './ngrx/login/login.effect';

@NgModule({
  declarations: [
    AppComponent,
    AircraftsComponent,
    AircraftsNavbarComponent,
    AlertComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ airbusState: AircraftsReducer }), // spécifie le reducer
    EffectsModule.forRoot([AircraftsEffects, UsersEffects]),
    StoreDevtoolsModule.instrument(), // envoi les infos à chaque action au devtools
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
