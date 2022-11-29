import { Controller, Get } from '@nestjs/common';

@Controller('api/hashtags')
export class HashtagsController {

    //Top hashtags (default top 10)
    @Get()
    async get():Promise<string>{
        return 'this is hashtags get controller'
    }

    //All posts of this given hashtag
    @Get(':tag/posts')
    async getPostsOfGivenTag():Promise<string>{
        return 'All posts of this given hashtag'
    }
}
