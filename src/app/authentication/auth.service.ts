import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  User,
  UserCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateCurrentUser,
  updatePhoneNumber,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: User;
  error: any;
  credential!: UserCredential;

  constructor(private auth: Auth, private router: Router) {}

  async emailSignIn(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        this.user = userCredential.user;
        this.gravarUsuario(this.user);
        this.router.navigate(['/todoapp']);
        this.credential = userCredential;
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
    console.log('busca');

    let subject = new Subject<User>();

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

  updatePhoneNumber(phoneNumber: any) {
    updateCurrentUser(this.auth, {
      ...this.user,
      phoneNumber: phoneNumber,
    })
  }
}
