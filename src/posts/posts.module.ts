import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { DatabaseModule } from './database/database.module';
import { postsProviders } from './posts.providers';
import { databaseProviders } from './database/database.providers';
import { Post } from './entities/post.entity';

@Module({
  imports: [DatabaseModule, ],
  controllers: [PostsController],
  providers: [PostsService, ...postsProviders],
  exports: [PostsService]
})
export class PostsModule {}
