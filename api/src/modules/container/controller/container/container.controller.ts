import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { ContainerService } from '../../services/container/container.service'
import { Container } from 'db/entities/Container'

@Controller('container')
export class ContainerController {

  constructor (private readonly _containerService: ContainerService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async saveFile (@UploadedFile() file: Express.Multer.File): Promise<void> {
    console.log(file)
    this._containerService.save(file)
  } 

  @Get()
  async getFiles (): Promise<Container[]> {
    return this._containerService.getFiles()
  } 
}
