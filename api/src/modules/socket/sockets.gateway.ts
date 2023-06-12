import { Logger } from '@nestjs/common'
import { ConnectedSocket, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { Server } from 'http'
import { Socket } from 'socket.io'

@WebSocketGateway({
  cors: {
    origin: [ 'http://localhost:3000' ],
    credentials: true
  },
  transports: [ 'websocket', 'polling' ]
})
export class SocketsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private _logger: Logger = new Logger('SocketsGateway')

  @WebSocketServer() wss: Server
  
  afterInit (server: Server): void {
    this._logger.log('Initialized')
  }
  
  handleDisconnect (client: Socket): void {
    this._logger.log(`Client Disconnected: ${client.id}`)
  }
  
  handleConnection (client: Socket, ...args: any[]): void {
    this._logger.log(`Client Connected: ${client.id}`)
  }

  async handleSendFileStream (buf: Buffer): Promise<void> {
    this.wss.emit('receiveFile', buf)
  }

  // startMyTimer(){}

  // stopMyTimer(){}
}