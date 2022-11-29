import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('api/posts')
export class PostsController {

//Get all post
    @Get()
    async gets():Promise<string>{
      
        return 'Get all post'
    }

    //Get details of a post
    @Get(':postID')
    async get():Promise<string>{
        return 'Get details of a post'
    }

   //Create a new post

   @Post()
   async create():Promise<string>{
    return 'Create a new post'
   }

   //Delete a given post id

   @Delete(':postID')
   async delete():Promise<string>{
    return 'Delete a given post id'
   }

   //Like the given post

   @Put(':postID/like')
   async likePost():Promise<string>{
        return 'Like the given post'
   }

   //Un-like the given post

   @Delete(':postID/like')
   async unlikePost():Promise<string>{
    return 'Un-like the given post'
   }



}
