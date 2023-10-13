import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }
  
  //Ordena obtener los 'events' cuando se inicializa la pagina
  ngOnInit(): void {
    this.getUsers();
  }
  // Obtiene los 'heroes' proporcionados por el HeroService que a la vez le llegan del fichero de mock heroes
  getUsers(): void {
    this.userService.getEvents()
    .subscribe(users => this.users = users);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.userService.addEvent({ name } as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }
  delete(user: Event): void {
    this.users = this.users.filter(h => h !== user);
    this.userService.deleteUser(user.id).subscribe();
  }

  
}
