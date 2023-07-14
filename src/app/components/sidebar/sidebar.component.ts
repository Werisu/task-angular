import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public userLogger?: User;
  public photoURL!: string;
  public isAtivo: boolean = true; // Defina o valor da variável com base na lógica do seu aplicativo

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getUser();
  }

  signOut() {
    this.authService.signOut();
  }

  getUser() {
    this.authService.getUser().subscribe(user => {
      this.userLogger = user;
      this.photoURL = this.userLogger.photoURL!;
    });
  }

}
