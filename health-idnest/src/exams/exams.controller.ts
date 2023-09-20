import { Controller, Get, Param, Post, UploadedFile, UseInterceptors, Body } from '@nestjs/common';
import { Express } from 'express'
import { FileInterceptor } from '@nestjs/platform-express'
import { ExamsService } from './exams.service';
import { Exam } from './exams.entity';

@Controller()
export class ExamsController {
  constructor(private readonly examsService: ExamsService) {}

  @Post('StoreExams')
  @UseInterceptors(FileInterceptor('file'))
  storeExams(@UploadedFile() file: Express.Multer.File, @Body() params: any): Promise<string> {
    return this.examsService.storeExams(file, params.wallet);
  }

  @Get('GetExams/:id')
  getExams(@Param() params:any): Promise<Exam[]> {
    return this.examsService.getExams(params.id);
  }

  @Get('GetExamsEntity/:id')
  getExamsEntity(@Param() params:any): string {
    return this.examsService.getExamsEntity(params.id);
  }
}
