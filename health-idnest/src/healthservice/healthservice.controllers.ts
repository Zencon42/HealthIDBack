import { Controller, Get, Post } from '@nestjs/common';
import { HealthServiceService } from './healthservice.service';

@Controller()
export class HealthServiceController {
  constructor(private readonly healthService: HealthServiceService) {}

  @Post('CreateHealthService')
  createHealthService(): string {
    return this.healthService.createHealthService();
  }
}
