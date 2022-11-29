import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {

    //Get details of given user by username
    @Get(':username')
    async getUserByUsername():Promise<string>{
        return 'Get details of given user by username'
    }

    //Get details of given user by userid

    @Get(':userID')
    async getUserByUserID():Promise<string>{
        return 'Get details of given user by userid'
    }

    //Create a new user

    @Post()
    async create():Promise<string>{
        return 'Create a new user'
    }

    //Update bio/name/image etc of an user

    @Patch(':userId')
    async update():Promise<string>{
        return 'Update bio/name/image etc of an user'
    }

    //Follow the given user

    @Put(':userID/follow')
    async followUser():Promise<string>{
        return 'Follow the given user'
    }

    //Un-follow the given user

    @Delete(':userID/follow')
    async unFollowUser():Promise<string>{
        return 'Un-follow the given user'
    }
}
