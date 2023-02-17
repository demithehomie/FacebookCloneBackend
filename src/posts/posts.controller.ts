import { Controller, Get, Post, Body, Patch, Param, Delete,  HttpStatus } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}


  @Get()
  async showAllUsers(){
    const users = await this.postsService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'posts obtidos com sucesso',
      users
    };
  }

  @Post()

    async createUsers(@Body() data: CreatePostDto) {
      const user = await this.postsService.create(data);
     return {
       statusCode: HttpStatus.OK,
       message: 'post criado com sucesso',
       user
     };
  }


  @Get(':id')
  async readUPost(@Param('id') id: number) {
    const data =  await this.postsService.findById(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'post obtido com sucesso',
      data,
    };
  }

  @Patch(':id')
  async uppdateUser(@Param('id') id: number, @Body() data: Partial<CreatePostDto>) {
    await this.postsService.update(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'post atualizado com sucesso',
    };
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.postsService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'post appagado com sucessi',
    };
  }
}
