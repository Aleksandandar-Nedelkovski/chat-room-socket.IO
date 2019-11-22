import socket = require('socket.io');
import { MessageDataAccess } from "./Database/DataAccess/Message";

export class SocketServer {
  constructor(private messageDataAccess: MessageDataAccess = new MessageDataAccess()) { }
  public Start() {
    this.OnStarted();
  }
  protected OnStarted(): void {
    const appSocket = socket(3000);
    this.OnConnect(appSocket);
  }

  private OnConnect(io: socket.Server) {
    io.on("connection", (socket: any) => {
      let lastRoom: string = "";
      socket.on("joinRoom", (room: string) => {
        if (lastRoom !== "") {
          socket.leave(lastRoom);
        }
        if (room !== "") {
          socket.join(room);
        }
        this.messageDataAccess.GetAll({ room: room }, { messageText: 1, _id: 0 }).then((msgs: string[]) => {
          socket.emit('allMessages', msgs);
        });
        lastRoom = room;
      })
    })
  }
}

new SocketServer().Start()