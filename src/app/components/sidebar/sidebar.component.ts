import { Component, OnInit } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import { AuthService } from 'src/app/authentication/auth.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public userLogger?: User;
  public photoURL!: string;
  public isAtivo: boolean = true; // Defina o valor da variável com base na lógica do seu aplicativo
  public showNav: boolean = false;
  public isMobile: boolean = false;

  constructor(private authService: AuthService, private auth: Auth, private bpo: BreakpointObserver) { }

  ngOnInit(): void {
    this.getUser();
  }

  getBreakpoint() {
    this.bpo.observe(['(max-width: 639px)']).subscribe((res) => {
      if(res.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
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
