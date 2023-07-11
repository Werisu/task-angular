import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AuthService } from './authentication/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyB7SGEPnROILjRHEc3FXbFT_jndZCHeZ1E",
      authDomain: "angularmemorando.firebaseapp.com",
      databaseURL: "https://angularmemorando-default-rtdb.firebaseio.com",
      projectId: "angularmemorando",
      storageBucket: "angularmemorando.appspot.com",
      messagingSenderId: "988276496590",
      appId: "1:988276496590:web:b11d2ae472455bcf53d89f"
    })),
    provideFirestore(() => getFirestore()),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
