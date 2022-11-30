import 'dotenv/config'
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { HashtagsController } from './hashtags/hashtags.controller';
import { UsersController } from './users/users.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UsersEntity } from './entities/users.entity';
import { PostEntity } from './entities/posts.entity';
import { HashtagsEntity } from './entities/hashtags.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port:Number( process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [UsersEntity,PostEntity,HashtagsEntity],
    logging:true,
    synchronize: true,})],
  controllers: [AppController, PostsController, HashtagsController, UsersController],
  providers: [AppService],
})
export class AppModule {}
