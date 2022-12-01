import { Injectable } from '@nestjs/common';
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
           
}
