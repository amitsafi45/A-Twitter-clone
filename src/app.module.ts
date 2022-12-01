import 'dotenv/config'
import { Module } from '@nestjs/common';
import { PostsController } from './posts/posts.controller';
import { HashtagsController } from './hashtags/hashtags.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UsersModule } from './users/users.module';
import { getConnection } from './config/database.config';

@Module({
  imports: [TypeOrmModule.forRootAsync(getConnection), UsersModule],
  controllers: [ PostsController, HashtagsController],
  providers: [],
})
export class AppModule {}
