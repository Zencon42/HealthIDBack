import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Exam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  walletId: string;

  @Column()
  cid: string;
}