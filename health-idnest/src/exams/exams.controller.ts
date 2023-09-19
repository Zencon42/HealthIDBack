import { Controller, Get, Post } from '@nestjs/common';
import { ExamsService } from './exams.service';

@Controller()
export class ExamsController {
  constructor(private readonly examsService: ExamsService) {}

  @Post('StoreExams')
  storeExams(): string {
    return this.examsService.storeExams();
  }

  // @Get('GetExams/{ID}')
  // getExams(): string {
  //   return this.getExams.getExams();
  // }

  // @Get('GetExams/{Entity}')
  // getExams(): string {
  //   return this.getExams.getExams();
  // }
}
