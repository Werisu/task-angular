import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  constructor(private auth: Auth) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  async listAllUsers() {

  }

}
