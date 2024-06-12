import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

@Controller('nestapi')
export class NestapiController {
  // Handler for GET requests

  testArray: number[] = [1, 2, 3, 4, 5, 6, 7];
  newAray: number[] = [10, 20, 30, 40, 50, 60, 70];

  @Get()
  findAll() {
    return this.testArray; // Directly return the array
  }

  // Handler for GET requests
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.testArray[id];
  }

  // Handler for POST requests to '/dogs'
  @Post()
  create() {
    return this.newAray;
  }

  // Handler for PUT requests to '/dogs/:id'
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number) {
    this.newAray[id] = id * 100 + 100;
    return this.newAray;
  }

  // Handler for DELETE requests to '/dogs/:id'array.splice(index, 1);
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    const index = id;
    this.newAray.splice(index, 1);
    return this.newAray;
  }
}
