
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: [ './user-add.component.css' ]
})
export class UserAddComponent implements OnInit {
  userAdd: any = {}; 

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    
  ) {
  }
  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {

    this.userAdd.birthDate = new Date(this.userAdd.birthDate);
    console.log(this.userAdd.birthDate);
    //añadir al eventAdd el idUser despues de haberte registrado
      this.userService.addUser(this.userAdd)
        .subscribe(() => this.goBack());
    
  }
  
}