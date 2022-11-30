import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger'
@ApiTags('posts')
@Controller('api/posts')
export class PostsController {

//Get all post
    @Get()
    async gets():Promise<string>{
      
        return 'Get all post'
    }

    //Get details of a post
    @Get(':postID')
    async get(@Param('postID') postID:string):Promise<string>{
        return 'Get details of a post'
    }

   //Create a new post

   @Post()
   async create():Promise<string>{
    return 'Create a new post'
   }

   //Delete a given post id

   @Delete(':postID')
   async delete(@Param('postID') postID:string):Promise<string>{
    return 'Delete a given post id'
   }

   //Like the given post

   @Put(':postID/like')
   async likePost(@Param('postID') postID:string):Promise<string>{
        return 'Like the given post'
   }

   //Un-like the given post

   @Delete(':postID/like')
   async unlikePost(@Param('postID') postID:string):Promise<string>{
    return 'Un-like the given post'
   }



}
