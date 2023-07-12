import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  User,
  signInWithEmailAndPassword,
  signInWithPopup,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: User;
  error: any;

  constructor(private auth: Auth, private router: Router) {}

  async emailSignIn(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        this.user = userCredential.user;
        this.gravarUsuario(this.user);
        this.router.navigate(['/todoapp']);
      })
      .catch((error) => {
        this.error = error;
      });
  }

  async googleSignIn() {
    signInWithPopup(this.auth, new GoogleAuthProvider())
      .then((userCredential) => {
        this.user = userCredential.user;
        this.gravarUsuario(this.user);
        this.router.navigate(['/todoapp']);
      })
      .catch((error) => {
        this.error = error;
      });
  }

  async signOut() {
    await this.auth.signOut();
    this.router.navigate(['/']);
    sessionStorage.clear();
    this.user = null!;
  }

  isLogged() {
    let getSession = sessionStorage.getItem('user');
    return getSession ? true : false;
  }

  gravarUsuario(user: any) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  get userLogged() {
    let getSession = sessionStorage.getItem('user');
    return getSession ? JSON.parse(getSession) : null;
  }
}
