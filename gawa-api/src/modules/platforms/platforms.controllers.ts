import { Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Platform } from './platforms.entity';
import { PlatformService } from './platforms.service';
import { Request } from 'express';

@Controller('platform')
export class PlatformController {
  constructor(private readonly platformService: PlatformService) {}

  @Get()
  async findAll(): Promise<Platform[]> {
    return this.platformService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Platform> {
    return this.findById(id);
  }

  @Post('')
  async createPlatform(@Req() request: Request): Promise<Platform> {
    return this.platformService.createPlatform(request.body);
  }

  @Patch(':id')
  async updateGame(
    @Req() request: Request,
    @Param('id') id: number,
  ): Promise<Platform> {
    return this.platformService.updatePlatform(id, request.body);
  }
}
