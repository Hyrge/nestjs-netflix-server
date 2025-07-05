import { Injectable, NotFoundException } from '@nestjs/common';

export interface Movie {
  id: number;
  title: string;
};


@Injectable()
export class AppService {
  private movies: Movie[] = [
    { id: 1, title: '인셉션' },
    { id: 2, title: '인터스텔라' },
  ];
  
  getManymovies(title?: string) {
    if(!title) return this.movies;
    return this.movies.filter(m => m.title.includes(title))
  }

  getMovieById(id: number) {
    const movie = this.movies.find(m => m.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  createMovie(title: string) {
    const movie = {
      id: this.movies.length + 1,
      title,
    }
    this.movies.push(movie);
    return movie;
  }

  updateMovie(id: number, title: string) {
    const movie = this.movies.find(m => m.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    Object.assign(movie, { title });
    return movie;
  }

  deleteMovie(id: number) {
    const movieIdx = this.movies.findIndex(m => m.id === id);
    if (movieIdx === -1) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    this.movies.splice(movieIdx, 1);
    return movieIdx + 1;
  }

}
