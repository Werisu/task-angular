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
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { getAuth, provideAuth } from "@angular/fire/auth";
import { environment } from 'src/environments/environment.development';
import { AuthGuardService } from './authentication/guard/auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { getStorage, provideStorage, StorageModule } from '@angular/fire/storage';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [
    AuthService,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig},
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
