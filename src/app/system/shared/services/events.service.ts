import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { BaseApi } from '../../../shared/core/base-api';
import { LSEvent } from '../models/event.model';

@Injectable()
export class EventsService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  addEvent(event: LSEvent): Observable<LSEvent> {
    return this.post('events', event);
  }

  getEvents(): Observable<LSEvent[]> {
    return this.get('events');
  }

  getEventById(id: string): Observable<LSEvent> {
    return this.get(`events/${id}`);
  }
}
