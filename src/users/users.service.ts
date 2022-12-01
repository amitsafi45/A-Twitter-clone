import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from '../entities/users.entity';

@Injectable()
export class UsersService {
    
    constructor(
        @InjectRepository(UsersEntity) private  usersRepository:Repository<UsersEntity>){}

        /**
         * @param username 
         * @returns User
         */
       async getUserByUsername(username:string):Promise<UsersEntity>{
          return await this.usersRepository.findOne({where:{username:username}})
        }

        /**
         * 
         * @param userID 
         * @returns 
         */
        async getUserByUserID(userID:string):Promise<UsersEntity>{
                return await this.usersRepository.findOne({where:{id:userID}})
          
        }

        /**
         * 
         * @param data 
         * @returns 
         */
        async createUser(data:Partial<UsersEntity>):Promise<UsersEntity>{
          return await this.usersRepository.save(data)
        }
        /**
         * 
         * @param data 
         * @returns 
         */

        async updateUser(data:Partial<UsersEntity>):Promise<UsersEntity>{
          const existingUser=await this.usersRepository.findOne({where:{id:data.id}})
          if(!existingUser){
            throw new NotFoundException('User Not Found')
          }
         if(data.avatar)existingUser.avatar=data.avatar
         if(data.name)existingUser.name=data.name
         if(data.bio)existingUser.bio=data.bio
         return await this.usersRepository.save(existingUser)  

        }
}
