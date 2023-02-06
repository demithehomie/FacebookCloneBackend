import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  username: string;

  @Column('text')
  description: string;

  @Column()
  created_at: Date;

  @Column()
  isPublished: boolean;

}