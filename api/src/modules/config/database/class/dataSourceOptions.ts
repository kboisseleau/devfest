import { DataSourceOptions } from 'typeorm'
import type { ConfigService } from '@nestjs/config'

function pgModuleFactory (configService: ConfigService): DataSourceOptions {

  const host = configService.getOrThrow<string>('DATABASE_HOST') || 'localhost'
  const port = configService.getOrThrow<string>('DATABASE_PORT') || '5432'
  const databaseName = configService.getOrThrow<string>('DATABASE_NAME') || 'dev'
  const username = configService.getOrThrow<string>('DATABASE_USERNAME') || 'postgres'
  const password = configService.getOrThrow<string>('DATABASE_PASSWORD') || 'postgres__!'
  const dbPath = configService.getOrThrow<string>('DBPATH') || 'dist/db'

  const entitiesPath = `${dbPath}/entities/**/*.js`
  const migrationssPath = `${dbPath}/migrations/*.js`
  const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host,
    port: parseInt(port),
    username,
    password,
    database: databaseName,
    synchronize: false,
    migrationsRun: true,
    entities: [ entitiesPath ],
    migrations: [ migrationssPath ],
    logging: false
  }

  return dataSourceOptions
}

export { pgModuleFactory }