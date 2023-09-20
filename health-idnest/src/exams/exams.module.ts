import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamsService } from './exams.service';
import { ExamsController } from './exams.controller';
import { Exam } from './exams.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Exam])],
    exports: [TypeOrmModule],
    providers: [ExamsService],
    controllers: [ExamsController]
})
export class ExamsModule {}