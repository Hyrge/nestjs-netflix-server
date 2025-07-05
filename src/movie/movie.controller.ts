import { Controller, Get, Post, Patch, Delete, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getMovies(@Query('title') title?: string) {
    return this.movieService.getManymovies(title)
  }

  @Get(':id')
  getMovie(@Param('id', ParseIntPipe) id: number) {
    return this.movieService.getMovieById(id)
  }

  @Post()
  createMovie(@Body() body: { title: string }) {
    return this.movieService.createMovie(body.title)
  }


  @Patch(':id')
  updateMovie(
    @Param('id', ParseIntPipe) id: number,
    @Body('title') title: string
  ) {
    return this.movieService.updateMovie(id, title)
  }

  @Delete(':id')
  deleteMovie(@Param('id', ParseIntPipe) id: number) {
    return this.movieService.deleteMovie(id)
  } 
  
}
