import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notifications1';
  constructor(private msg: MessageService){
  }

  

  requestPermission(){
    console.log("hola");
    this.msg.requestPerm();
  }

 

  // requestPermission() {
  //   console.log("permisos ");
  //   this.afMessaging.requestToken.subscribe(
  //       (token) => { 
  //         console.log("hola");
  //         console.log('Permission granted! Save to the server!', token); 
  //       },
  //       (error) => {
  //          console.error(error); 
  //       },  
  //     );
  // }
}
