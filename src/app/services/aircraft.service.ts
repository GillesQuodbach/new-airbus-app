import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aircraft } from '../model/aircraft.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AircraftService {
  constructor(private http: HttpClient) {}

  //liste de tous les avions en base => une fois sur 2 on souhaite provoquer une erreur
  public getAirCrafts(): Observable<Aircraft[]> {
    // let host =
    //   Math.random() > 0.5 ? environment.host : environment.unreachableHost;
    // return this.http.get<Aircraft[]>(host + '/aircrafts');
    return this.http.get<Aircraft[]>(environment.host + '/aircrafts');
  }

  //liste des avions en phase design
  public getDesignedAircrafts(): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(
      environment.host + '/aircrafts?design=true'
    );
  }

  //liste des avions en phase de développement
  public getDevelopmentAircraft(): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(
      environment.host + '/aircrafts?development=true'
    );
  }

  //renvoi un avion à partir de l'id
  public getAircraftByMsn(id: number): Observable<Aircraft> {
    return this.http.get<Aircraft>(environment.host + '/aircrafts/' + id);
  }

  // renvoi un avion à partir d'une recherche
  public getSearchedAircraft(value: string): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(
      environment.host + `/aircrafts?prog_like=${value}`
    );
  }

  public getOperations(): Observable<Aircraft[]> {
    // let host =
    //   Math.random() > 0.5 ? environment.host : environment.unreachableHost;
    // return this.http.get<Aircraft[]>(host + '/aircrafts');
    return this.http.get<Aircraft[]>(environment.host + '/entities');
  }
}
