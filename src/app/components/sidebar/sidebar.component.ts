import { Component, OnInit } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public userLogger!: User;
  public photoURL!: string;
  public isAtivo: boolean = true; // Defina o valor da variável com base na lógica do seu aplicativo

  constructor(private authService: AuthService, private auth: Auth) { }

  ngOnInit(): void {
    this.userLogger = this.authService.userLogged;
    this.photoURL = this.userLogger.providerData[0].photoURL!;
  }

  signOut() {
    this.authService.signOut();
  }



}
