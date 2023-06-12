import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { ContainerService } from '../../services/container/container.service'

@Controller('container')
export class ContainerController {

  constructor (private readonly _containerService: ContainerService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async cutPdf (@UploadedFile() file: Express.Multer.File): Promise<void> {
    console.log(file)
    this._containerService.save(file)
  } 
}
