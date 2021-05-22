import { Controller } from '@nestjs/common';
import { Game } from './games.entity';
import { GameService } from './games.service';
import { Request } from 'express';

@Controller('game')
export class GameController {
    constructor(private readonly gameService: GameService) {}
}