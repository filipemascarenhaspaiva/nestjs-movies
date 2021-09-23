import { Controller, Get } from '@nestjs/common';
import { FilmesService, Filme } from './filmes.service';

@Controller('filmes')
export class FilmesController {
  constructor(private filmesService: FilmesService) {}

  @Get()
  index(): Filme[] {
    return this.filmesService.getAll();
  }
}
