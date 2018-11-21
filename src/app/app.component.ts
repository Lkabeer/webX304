import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  user: any;
  message: string = '';

  newItem = '';
  editMsg: boolean = false;
  editId: number;

  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.itemsRef = db.list('messages', ref => ref.limitToLast(5));
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    afAuth.user.subscribe(user => { 
      if(user) {
        this.user = user;
        console.log(this.user);
      }
    });
  }
  
  sendChat(newMessage: string) {
    this.itemsRef.push({ message: newMessage, name: this.user.displayName});
    this.message = '';
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
