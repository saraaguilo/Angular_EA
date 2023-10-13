import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getEvents();
  }
  // Como en el heroes.component, obtiene los 'heroes' mediante HeroService y utiliza un slice para obtener los 'Top Heroes'
  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => this.events = events.slice(1, 5));
  }
}