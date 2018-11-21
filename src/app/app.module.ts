import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReversePipe } from "../xteam/reverse.pipe";

export const firebaseConfig = {
  apiKey: "AIzaSyDq4qV3Rlb1qfbFyWfVeXj0kELvaQAmaTY",
  authDomain: "chatappx-9ce23.firebaseapp.com",
  databaseURL: "https://chatappx-9ce23.firebaseio.com",
  projectId: "chatappx-9ce23",
  storageBucket: "chatappx-9ce23.appspot.com",
  messagingSenderId: "670407836816"
};

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
