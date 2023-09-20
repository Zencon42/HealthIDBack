import { Controller, Get, Post, Body } from '@nestjs/common';
import { HealthServiceService } from './healthservice.service';

@Controller()
export class HealthServiceController {
  constructor(private readonly healthService: HealthServiceService) {}

  @Post('CreateHealthService')
  createHealthService(@Body() params: any): Promise<string> {
    return this.healthService.createHealthService(params.name);
  }
}
