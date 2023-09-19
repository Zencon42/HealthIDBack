import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExamsService } from './exams/exams.service';
import { ExamsModule } from './exams/exams.module';
import { ExamsController } from './exams/exams.controller';
import { HealthServiceService } from './healthservice/healthservice.service';
import { HealthServiceController } from './healthservice/healthservice.controllers';

@Module({
  imports: [ExamsModule],
  controllers: [AppController, ExamsController, HealthServiceController],
  providers: [AppService, ExamsService, HealthServiceService],
})
export class AppModule {}
