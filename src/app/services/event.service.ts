import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ActionEvent } from '../ngrx/aircrafts.actions';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  //Objet permettant la comm entre les composants
  eventSubject: Subject<ActionEvent> = new Subject<ActionEvent>();

  // type d'événement publié par notre objet
  eventSubjectObservable = this.eventSubject.asObservable();

  // Observable qui permet à tous les composants qui le souhaitent de recevoir les actions des autres

  publishEvent(event: ActionEvent) {
    //méthode de publication d'un événement ou message
    this.eventSubject.next(event); //tous les compossants qui ont souscrit à notre service, recevront l'evt  publié
    //Ils devront faire auparavant un subscribe à eventSubObjectObservable
  }
}
