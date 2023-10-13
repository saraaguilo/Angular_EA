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
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }
  add(userName: string): void {
    userName = userName.trim();
    if (!userName) { return; }
    this.userService.addUser({ userName } as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }
  delete(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.userService.deleteUser(user._id).subscribe();
  }

  
}
