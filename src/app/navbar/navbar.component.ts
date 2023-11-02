import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavigationComponent implements OnInit {

  

    public active : boolean = false 
  
    constructor() { }
    ngOnInit(): void {}
  
    setActive() : void {
      this.active = !this.active
    }
  
}
