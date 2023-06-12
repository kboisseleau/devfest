import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { pgModuleFactory } from './class/dataSourceOptions'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ ConfigModule ],
      inject: [ ConfigService ],
      useFactory: pgModuleFactory
    })
  ]
})
export class DatabaseModule {}
