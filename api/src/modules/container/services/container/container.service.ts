import { Injectable, BadRequestException } from '@nestjs/common'
import { ContainerRepositoryService } from '../../repository/container/container.repository.service'
import { SocketsGateway } from 'src/modules/socket/sockets.gateway'
import { Container } from 'db/entities/Container'
import * as path from 'path'
import { promises } from 'fs'

@Injectable()
export class ContainerService {
  constructor (
    private readonly _containerRepo: ContainerRepositoryService,
    private readonly _socketGateway: SocketsGateway
  ) {
        
  }

  public async save (file: Express.Multer.File): Promise<void> {
    if (file?.buffer) {
      const pathFile = await this._addFile(file.buffer, file.originalname)
      const container = new Container()
      container.email = 'boisseleau.kevin@gmail.com'
      container.firstname = 'kevin'
      container.lastname = 'boisseleau'
      container.pathfile = pathFile

      const ret = await this._containerRepo.create(container) as any

      if (ret) {
        const buf = await this._getFile(ret.pathfile)
        ret.base64 = `data:image/png;base64, ${buf.toString('base64')}`
        this._socketGateway.handleSendFileStream(ret)
      }
    } else {
      throw new BadRequestException('Not file')
    }
  }

  public async getFiles (): Promise<any> {
    const containers = await this._containerRepo.findAll() as any
    if (containers?.length) {
      for (const c of containers) {
        const buf = await this._getFile(c.pathfile)
        c.base64 = `data:image/png;base64,  ${buf.toString('base64')}`
      }

      return containers
    }
  }

  private async _addFile (buffer: Buffer, name: string): Promise<string> {
    const pathFile = path.join('files', `${this._uuid()}-${name}`)
    await promises.writeFile(pathFile, buffer)

    return pathFile
  }

  private async _getFile (pathFile: string): Promise<Buffer> {
    return promises.readFile(pathFile)
  }

  private _uuid (): string {
    let dt = new Date().getTime()
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (dt + Math.random() * 16) % 16 | 0
      dt = Math.floor(dt / 16)
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })

    return uuid
  }
}
