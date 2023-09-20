import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthServiceService } from './healthservice.service';
import { HealthServiceController } from './healthservice.controllers';
import { HealthService } from './healthservice.entity'

@Module({
    imports: [TypeOrmModule.forFeature([HealthService])],
    exports: [TypeOrmModule],
    providers: [HealthServiceService],
    controllers: [HealthServiceController]
})
export class HealthServiceModule {}