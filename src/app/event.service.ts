import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Event } from './event';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class EventService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient
    ) { }

  
  //The events web API expects a special header in HTTP save requests:
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private eventsUrl = 'http://localhost:9090/events';  // URL to web api


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  /** GET heroes from the server */
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl)
      .pipe(
        tap(_ => this.log('fetched events')),
        catchError(this.handleError<Event[]>('getEvents', []))
     );
  }
/*
  getEvent(id: number): Observable<Event> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const event = EVENTS.find(h => h.id === id)!;
    this.messageService.add(`EventService: fetched event id=${id}`);
    return of(event);
  }
  */

  /** GET event by id. Will 404 if id not found */
  getEvent(id: string): Observable<Event> {
    const url = `${this.eventsUrl}/${id}`;
    return this.http.get<Event>(url).pipe(
      tap(_ => this.log(`fetched event id=${id}`)),
      catchError(this.handleError<Event>(`getEvent id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateEvent(id: string, event: any): Observable<any> { //any canviat
    console.log(id);
    const url = `${this.eventsUrl}/${id}`;
    
    const resp = this.http.put(url, event, this.httpOptions).pipe(
      tap(_ => this.log(`updated event id=${id}`)),
      catchError(this.handleError<any>('updateEvent'))
    );
    return resp;

  }

  /** POST: add a new event to the server */
  addEvent(event: any): Observable<Event> {
    return this.http.post<Event>(this.eventsUrl, event, this.httpOptions).pipe(
      tap((newEvent: Event) => this.log(`added event w/ id=${newEvent._id}`)),
      catchError(this.handleError<Event>('addEvent'))
    );
  }

  /** DELETE: delete the event from the server */
  deleteEvent(id: string): Observable<Event> {
    const url = `${this.eventsUrl}/${id}`;

    return this.http.delete<Event>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted event id=${id}`)),
      catchError(this.handleError<Event>('deleteEvent'))
    );
  }

    /* GET events whose name contains search term */
  searchEvents(term: string): Observable<Event[]> {
    if (!term.trim()) {
      // if not search term, return empty event array.
      return of([]);
   }
    return this.http.get<Event[]>(`${this.eventsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found events matching "${term}"`) :
         this.log(`no events matching "${term}"`)),
     catchError(this.handleError<Event[]>('searchEvents', []))
   );
  }

  /** Log an EventService message with the MessageService */
  private log(message: string) {
  this.messageService.add(`EventService: ${message}`);
  }
}

