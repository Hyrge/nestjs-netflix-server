import { Controller, Get, Post, Patch, Delete, Body, Param, NotFoundException, Query } from '@nestjs/common';
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
  getMovies(@Query('title') title?: string) {
    return this.appService.getManymovies(title)
  }

  @Get(':id')
  getMovie(@Param('id', ParseIntPipe) id: number) {
    return this.appService.getMovieById(id)
  }

  @Post()
  createMovie(@Body() body: { title: string }) {
    return this.appService.createMovie(body.title)
  }


  @Patch(':id')
  updateMovie(
    @Param('id', ParseIntPipe) id: number,
    @Body('title') title: string
  ) {
    return this.appService.updateMovie(id, title)
  }

  @Delete(':id')
  deleteMovie(@Param('id', ParseIntPipe) id: number) {
    return this.appService.deleteMovie(id)
  } 
  
  

  
}