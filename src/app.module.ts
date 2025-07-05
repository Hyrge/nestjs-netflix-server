import { Module } from '@nestjs/common';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [MovieModule], // 나중에 모든 모듈이 집합하는 중앙 역할만 함 
})
export class AppModule {}
