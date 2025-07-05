import { Injectable } from '@nestjs/common';

export interface Movie {
  id: number;
  title: string;
};


@Injectable()
export class AppService {
}
