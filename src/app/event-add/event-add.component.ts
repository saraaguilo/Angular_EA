
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: [ './event-add.component.css' ]
})
export class EventAddComponent implements OnInit {
  eventAdd: Event | undefined; 

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private location: Location,
    
  ) {
  }
  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    
      this.eventService.addEvent(this.eventAdd)
        .subscribe(() => this.goBack());
    
  }
  
}
