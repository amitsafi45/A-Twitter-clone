import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger'

@ApiTags('users')
@Controller('users')
export class UsersController {

    //Get details of given user by username
    @Get('/@:username')
    async getUserByUsername(@Param('username') username:string):Promise<string>{
        return 'Get details of given user by username'
    }

    //Get details of given user by userid

    @Get(':userID')
    async getUserByUserID(@Param('userID') userID:string):Promise<string>{
        return 'Get details of given user by userid'
    }

    //Create a new user

    @Post()
    async create():Promise<string>{
        return 'Create a new user'
    }

    //Update bio/name/image etc of an user

    @Patch(':userID')
    async update(@Param('userID') userID:string):Promise<string>{
        return 'Update bio/name/image etc of an user'
    }

    //Follow the given user

    @Put(':userID/follow')
    async followUser(@Param('userID') userID:string):Promise<string>{
        return 'Follow the given user'
    }

    //Un-follow the given user

    @Delete(':userID/follow')
    async unFollowUser(@Param('userID') userID:string):Promise<string>{
        return 'Un-follow the given user'
    }
}
