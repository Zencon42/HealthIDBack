import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { HealthService } from './healthservice.entity';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';


@Injectable()
export class HealthServiceService {

  constructor(
    @InjectRepository(HealthService)
    private examsRepository: Repository<HealthService>,
    private dataSource: DataSource
  ) {}

  async createHealthService(nameService: string): Promise<string> {

    const uuid = new UUID;
    let healthService = await this.dataSource
    .createQueryBuilder()
    .insert()
    .into(HealthService)
    .values([
        { id: uuid.toString(), name: nameService },
    ])
    .execute()

    return 'Health service created ' + healthService.raw.id;
  }
}

