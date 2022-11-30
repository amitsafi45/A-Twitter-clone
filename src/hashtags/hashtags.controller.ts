import { Controller, Get, Param } from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger'
@ApiTags('hashtags')
@Controller('api/hashtags')
export class HashtagsController {

    //Top hashtags (default top 10)
    @Get()
    async get():Promise<string>{
        return 'this is hashtags get controller'
    }

    //All posts of this given hashtag
    @Get(':tag/posts')
    async getPostsOfGivenTag(@Param('tag') tag:string):Promise<string>{
        return 'All posts of this given hashtag'
    }
}
