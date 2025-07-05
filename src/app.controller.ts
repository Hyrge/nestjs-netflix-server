import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

interface Movie {
  id: number;
  title: string;
};

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}
   

  
}