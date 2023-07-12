import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public userLogger!: User;
  public photoURL!: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userLogger = this.authService.userLogged;
    this.photoURL = this.userLogger.providerData[0].photoURL!;
  }

  signOut() {
    this.authService.signOut();
  }



}
