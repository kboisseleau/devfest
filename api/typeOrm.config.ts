import { DataSource } from 'typeorm'
import { ConfigService } from '@nestjs/config'
import { config } from 'dotenv'
import { Container } from './db/entities/Container'
import { TableV0011686561456632 } from './db/migrations/1686561456632-Table-V-0-0-1'

config({ path: 'env/.env.local' })

const configService = new ConfigService()

export default new DataSource({
  type: 'postgres',
  host: configService.get('DATABASE_HOST'),
  port: configService.get('DATABASE_PORT'),
  username: configService.get('DATABASE_USERNAME'),
  password: configService.get('DATABASE_PASSWORD'),
  database: configService.get('DATABASE_NAME'),
  synchronize: false,
  entities: [ Container ],
  migrations: [ TableV0011686561456632 ]
})
