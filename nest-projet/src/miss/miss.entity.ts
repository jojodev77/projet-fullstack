import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Miss {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('int')
  points: number;

  @Column('text')
  but: string;

}
