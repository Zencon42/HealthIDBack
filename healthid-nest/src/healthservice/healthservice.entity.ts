// import { UUID } from 'crypto';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class HealthService {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
}