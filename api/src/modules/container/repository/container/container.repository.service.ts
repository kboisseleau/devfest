import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Container } from 'db/entities/Container'
import { Repository } from 'typeorm'

@Injectable()
export class ContainerRepositoryService {
  constructor (
        @InjectRepository(Container)
        private _containerRepository: Repository<Container>
  ) {}

  create (container: Container): Promise<Container> {
    return this._containerRepository.save(container)
  }

  findAll (): Promise<Container[]> {
    return this._containerRepository.find()
  }

  findOne (id: number): Promise<Container | null> {
    return this._containerRepository.findOneBy({ id })
  }

  findOneEmail (email: string): Promise<Container | null> {
    return this._containerRepository.findOneBy({ email })
  }
}
