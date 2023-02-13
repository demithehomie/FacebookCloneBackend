import { Injectable, Inject } from '@nestjs/common';

import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {

  constructor(
    @Inject('POSTS_REPOSITORY')
    private postsRepository: Repository<Post>
    //private createPostDto: CreatePostDto
  ) {}

  async findAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  async create(data: CreatePostDto) {
   // return this.createPostDto.create();

    const post = this.postsRepository.create(data);
    await this.postsRepository.save(data);
    return post;

  }


 async findById(id: number) {
    return await this.postsRepository.findOne({
      where: {
        id : id
      },
    });
  }

  async update(id: number, data: Partial<UpdatePostDto>) {
    await this.postsRepository.update({id}, data)
    return await this.postsRepository.findOne;
  }

 async destroy(id: number) {


await this.postsRepository.delete({ id })  ;
return { deleted: true}
  }
}
