import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private angularFirebaseMessaging: AngularFireMessaging) {
    this.getToken();
  }

  requestPerm() {
    this.angularFirebaseMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
      },
      (err) => {
        console.error('No Permission ' + err);
      }
    );
  }

  getToken(){
    this.angularFirebaseMessaging.getToken.subscribe(
      res => {
        console.log( res);
      }
    );
  }

  receiveMessage() {}
}
