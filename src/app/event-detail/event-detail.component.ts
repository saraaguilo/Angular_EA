
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: [ './event-detail.component.css' ]
})
export class EventDetailComponent implements OnInit {
  event: Event | undefined;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getEvent();
  }
  // Función que obtiene los detalles del event que ha sido especificado por el usuario
  getEvent(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    console.log("id",id);
    this.eventService.getEvent(id)
      .subscribe(event => this.event = event);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.event) {
    //deconstrucció
      let{_id, createdAt, updatedAt, ...savedEvent} = this.event;
      this.eventService.updateEvent(this.event._id, savedEvent)
        .subscribe(() => this.goBack());
    }
  }
  
}
