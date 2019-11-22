import socket = require('socket.io');

// import appSocket from "socket.io";
export class SocketServer {
  public Start() {
    this.OnStarted();
  }
  protected OnStarted(): void {
    const appSocket = socket(3000);
    this.OnConnect(appSocket);
  }


  private OnConnect(io: socket.Server) {
    new SocketServer().Start()
  }
}