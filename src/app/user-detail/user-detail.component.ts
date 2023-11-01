
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: [ './user-detail.component.css' ]
})
export class UserDetailComponent implements OnInit {
  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUser();
  }
  // Función que obtiene los detalles del user que ha sido especificado por el usuario
  getUser(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    console.log("id", id);
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.user) {
      //deconstrucció
        let{_id, createdAt, updatedAt, ...savedUser} = this.user;
        this.userService.updateUser(this.user._id, savedUser)
          .subscribe(() => this.goBack());
      }
  }
  
}
