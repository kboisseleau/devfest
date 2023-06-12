import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'container' })
export class Container {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  email: string
  
  @Column()
  lastname: string
  
  @Column()
  firstname: string

  @Column()
  pathfile: string
}
