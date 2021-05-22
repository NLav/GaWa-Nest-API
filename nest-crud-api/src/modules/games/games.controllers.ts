import { Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Game } from './games.entity';
import { GameService } from './games.service';
import { request, Request } from 'express';
import { patch } from 'superagent';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  async findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Game> {
    return this.gameService.findById(id);
  }

  @Post('')
  async createGame(@Req() request: Request): Promise<Game> {
    return this.gameService.createGame(request.body);
  }

  @Patch(':id')
  async updateGame(
    @Req() request: Request,
    @Param('id') id: number,
  ): Promise<Game> {
    return this.gameService.updateGame(id, request.body);
  }
}
