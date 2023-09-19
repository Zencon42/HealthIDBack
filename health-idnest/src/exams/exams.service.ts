import { Injectable } from '@nestjs/common';

@Injectable()
export class ExamsService {
  storeExams(): string {
    return 'Exams stored!';
  }

  getExams(id: string): string {
    return "Here is your exams! ${id}";
  }
}
