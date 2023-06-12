import { Module } from '@nestjs/common'
import { SocketsGateway } from './sockets.gateway'

@Module({
  imports: [],
  providers: [ SocketsGateway ],
  exports: [ SocketsGateway ]
})
export class SocketsModule {}