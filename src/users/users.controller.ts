import { Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put } from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger'
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {

    constructor(private readonly userService:UsersService){}
    //Get details of given user by username
    @Get('/@:username')
    async getUserByUsername(@Param('username') username:string):Promise<any>{
        const user =await this.userService.getUserByUsername(username)
        if(!user){
            throw new NotFoundException('User Not Found')
        }
        return user
    }

    //Get details of given user by userid

    @Get(':userID')
    async getUserByUserID(@Param('userID') userID:string):Promise<any>{
        const user=await this.userService.getUserByUserID(userID)
        if(!user){
            throw new NotFoundException('User Not Found')
        }
        return user
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
