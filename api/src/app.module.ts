import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ContainerController } from './modules/container/controller/container/container.controller'
import { ContainerModule } from './modules/container/container.module'
import { EnvModule } from './modules/config/env/env.module'
import { DatabaseModule } from './modules/config/database/database.module'
import { SocketsModule } from './modules/socket/sockets.module'

@Module({
  imports: [
    EnvModule,
    DatabaseModule,
    ContainerModule,
    SocketsModule
  ],
  controllers: [ AppController, ContainerController ],
  providers: [ AppService ]
})
export class AppModule {}
