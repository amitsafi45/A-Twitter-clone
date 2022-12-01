import 'dotenv/config'
import { Module } from '@nestjs/common';
import { PostsController } from './posts/posts.controller';
import { HashtagsController } from './hashtags/hashtags.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UsersModule } from './users/users.module';
import { getConnection } from './config/database.config';
import { DatabaseModule } from './config/database.module';
import { PostsModule } from './posts/posts.module';
import { HashtagsModule } from './hashtags/hashtags.module';

@Module({
  imports: [DatabaseModule,UsersModule,PostsModule,HashtagsModule],
})
export class AppModule {}
