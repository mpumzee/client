import { Component, NgModule, OnInit } from '@angular/core';
import { WebSocketService } from './web-socket.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { webSocket } from 'rxjs/webSocket';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  message = '';
  messages: any[] = [];
  private readonly URL = 'ws://localhost:3000';
  private webSocketSubject = webSocket<string>(this.URL);
  public webSocket$ = this.webSocketSubject.asObservable();


  constructor(private websocketService: WebSocketService) {}

  ngOnInit(): void {
    this.webSocketSubject.subscribe((x:any) =>{
      console.log(x);
      this.messages.push(x)
    });
    // this.initializeSocketConnection();
   }
  
  //  ngOnDestroy() {
  //   this.disconnectSocket();
  //  }
  
  //  // Initializes socket connection
  //  initializeSocketConnection() {
  //   this.websocketService.connectSocket('message');
  //  }
  
  //  // Receives response from socket connection 
  //  receiveSocketResponse() {
  //   this.websocketService.receiveStatus().subscribe(receivedMessage => {
  //    console.log(receivedMessage);
  //   });
  //  }
  
  //  // Disconnects socket connection
  //  disconnectSocket() {
  //   this.websocketService.disconnectSocket();
  //  }
  // ngOnInit(): void {
  //   this.webSocketService.connect();
  // }

  sendMessage(event: any) {
    if (event.keyCode === 13) {
      console.log(this.message);
      this.messages.push({message:this.message, owner:'client'})    
      this.webSocketSubject.next(this.message);
      this.message = ''
    }
  }
}