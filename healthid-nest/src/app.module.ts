import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExamsService } from './exams/exams.service';
import { ExamsModule } from './exams/exams.module';
import { ExamsController } from './exams/exams.controller';
import { Exam } from './exams/exams.entity'
import { HealthServiceService } from './healthservice/healthservice.service';
import { HealthServiceController } from './healthservice/healthservice.controllers';
import { HealthServiceModule } from './healthservice/healthservice.module';
import { HealthService } from './healthservice/healthservice.entity';

@Module({
  imports: [ExamsModule, HealthServiceModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'healthid.mysql.dbaas.com.br',
    port: 3306,
    username: 'healthid',
    password: 'Zencon@2023',
    database: 'healthid',
    entities: [Exam, HealthService],
    synchronize: false,
  }),
],
  controllers: [AppController, ExamsController, HealthServiceController],
  providers: [AppService, ExamsService, HealthServiceService],
})
export class AppModule {}
