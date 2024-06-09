import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  findAll(
    @Body()
    dogUpdate: {
      id: number;
      name: string;
      breed: string;
      age: number;
      color: string;
    },
  ) {
    // Returns the provided dog details
    return { ...dogUpdate };
  }

  // Handler for GET requests to '/dogs/:id'
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number, @Body('name') name: string) {
    // Returns the dog id and name based on the provided id
    return { id, name };
  }

  // Handler for POST requests to '/dogs'
  @Post()
  create(
    @Body()
    dogUpdate: {
      id: number;
      name: string;
      breed: string;
      age: number;
      color: string;
    },
  ) {
    // Returns the provided dog details
    return dogUpdate;
  }

  // Handler for PUT requests to '/dogs/:id'
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    dogUpdate: {
      id: number;
      name: string;
      breed: string;
      age: number;
      color: string;
    },
  ) {
    // Returns the id and updated dog details
    return { id, ...dogUpdate };
  }

  // Handler for DELETE requests to '/dogs/:id'
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    // Returns the id of the dog to be deleted
    return { id };
  }
}
