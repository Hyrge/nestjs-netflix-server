import { Controller, Get, Post, Patch, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

interface Movie {
  id: number;
  title: string;
};

@Controller('movie')
export class AppController {

  constructor(private readonly appService: AppService) {}
  private movies: Movie[] = [
    { id: 1, title: '인셉션' },
    { id: 2, title: '인터스텔라' },
  ];


  @Get()
  getMovies() {
    return this.movies;
  }

  @Get(':id')
  getMovie(@Param('id', ParseIntPipe) id: number) {
    const movie = this.movies.find(m => m.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  @Post()
  createMovie(@Body() body: { title: string }) {
    const movie = {
      id: this.movies.length + 1,
      title: body.title,
    }
    this.movies.push(movie);
    return movie;
  }


  @Patch(':id')
  updateMovie(
    @Param('id', ParseIntPipe) id: number,
    @Body('title') title: string
  ) {
    const movie = this.movies.find(m => m.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not founㅇd`);
    }
    
    Object.assign(movie, { title });
    return movie;
  }

  @Delete(':id')
  deleteMovie(@Param('id', ParseIntPipe) id: number) {
    const movieIdx = this.movies.findIndex(m => m.id === id);
    if (movieIdx === -1) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    this.movies.splice(movieIdx, 1);
    return movieIdx;
  } 
  
  

  
}