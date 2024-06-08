import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  


  // this method is used to start connection/handhshake of socket with server
  // connectSocket(message: any) {
  //   this.webSocketSubject.next
  // }

  // // this method is used to get response from server
  // receiveStatus() {
  //   return this.webSocket.fromEvent('/get-response');
  // }

  // this method is used to end web socket connection
  // disconnectSocket() {
  //   this.webSocket.disconnect();
  // }
  // connect(): void {
  //   this.socket = new WebSocket('ws://localhost:8000/ws');
  //   this.socket.onmessage = (event) => {
  //     this.messages.push(event.data);
  //   };
  // }

  // sendMessage(message: string): void {
  //   this.webSocketSubject.next('message')
  // }
}
