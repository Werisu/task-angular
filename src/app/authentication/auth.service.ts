import { Injectable } from '@angular/core';
import {
  GoogleAuthProvider,
  User,
  signInWithEmailAndPassword,
  signInWithPopup,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Auth } from 'firebase/auth';
import { Observable, Subject } from 'rxjs';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { environment } from 'src/environments/environment.development';

firebase.initializeApp(environment.firebaseConfig)

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: any;
  error: any;

  constructor(private auth: firebase.auth.Auth, private router: Router) {}

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

  public getUser(): Observable<User>{
    let subject = new Subject<any>();

    this.auth.onAuthStateChanged(user => {
      if (user) {
        this.user = user;
        subject.next(user);
      }
    });

    return subject.asObservable();
  }

  get userLogged() {
    return this.user;
  }
}
