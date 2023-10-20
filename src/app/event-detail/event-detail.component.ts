
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
      const Event = {
        coordinates: this.event.coordinates,
        eventName: this.event.eventName,
        idCategory: this.event.idCategory,
        date: this.event.date,
        idUser: this.event.idUser,
        description: this.event.description,
        assistants: this.event.assistants,
        link: this.event.link,
        photo: this.event.photo,
        idChat: this.event.idChat,
        idComments: this.event.idComments
      }
      this.eventService.updateEvent(Event)
        .subscribe(() => this.goBack());
    }
  }
  
}
