import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AuthService } from './authentication/auth.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { getAuth, provideAuth } from "@angular/fire/auth";
import { environment } from 'src/environments/environment.development';
import { AuthGuardService } from './authentication/guard/auth-guard.service';

/*
apiKey: "AIzaSyB7SGEPnROILjRHEc3FXbFT_jndZCHeZ1E",
authDomain: "angularmemorando.firebaseapp.com",
databaseURL: "https://angularmemorando-default-rtdb.firebaseio.com",
projectId: "angularmemorando",
storageBucket: "angularmemorando.appspot.com",
messagingSenderId: "988276496590",
appId: "1:988276496590:web:b11d2ae472455bcf53d89f"
*/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    AuthService,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
