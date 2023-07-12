import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any;
  error: any;

  constructor(private auth: Auth) {}

  async emailSignIn(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        this.user = userCredential.user;
      })
      .catch((error) => {
        this.error = error;
      });
  }

  async googleSignIn() {
    signInWithPopup(this.auth, new GoogleAuthProvider())
      .then((userCredential) => {
        this.user = userCredential.user;
      })
      .catch((error) => {
        this.error = error;
      });
  }

  async signOut() {
    await this.auth.signOut();
    this.user = null;
  }
}
