import { Inject, Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { Game } from './games.entity'

@Injectable()
export class GameService{
    constructor(
        @Inject('GAME_REPOSITORY')
        private gameRepository: Repository<Game>,
    ){}
}