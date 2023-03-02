import { Controller, Get, Req, Res, Post, Body } from '@nestjs/common';

const cats = ["aaa", "bbb", "ccc"]

interface catDto {
  name: string;
  age: number;
}

@Controller('cats')
export class CatsController {
  @Get()
  getCats() {
    return cats
  }

  @Post()
  createCats(@Body() dto: catDto) {

    return `${dto.name} is created`
  }
}
