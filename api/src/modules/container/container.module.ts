import { Module } from '@nestjs/common'
import { ContainerController } from './controller/container/container.controller'
import { SocketsModule } from '../socket/sockets.module'
import { ContainerRepositoryService } from './repository/container/container.repository.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Container } from 'db/entities/Container'
import { ContainerService } from './services/container/container.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([ Container ]),
    SocketsModule
  ],
  controllers: [ ContainerController ],
  providers: [ ContainerService, ContainerRepositoryService ],
  exports: [ ContainerService ]
})
export class ContainerModule {}
