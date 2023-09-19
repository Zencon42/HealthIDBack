import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthServiceService {
  createHealthService(): string {
    return 'Health service created';
  }
}

