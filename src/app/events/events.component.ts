import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service'; 

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService) { }
  
  //Ordena obtener los 'events' cuando se inicializa la pagina
  ngOnInit(): void {
    this.getEvents();
  }
  // Obtiene los 'heroes' proporcionados por el HeroService que a la vez le llegan del fichero de mock heroes
  getEvents(): void {
    this.eventService.getEvents()
    .subscribe(events => this.events = events);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.eventService.addEvent({ name } as Event)
      .subscribe(event => {
        this.events.push(event);
      });
  }
  delete(event: Event): void {
    this.events = this.events.filter(h => h !== event);
    this.eventService.deleteEvent(event.id).subscribe();
  }

  
}