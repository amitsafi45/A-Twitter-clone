import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from '../entities/users.entity';

@Injectable()
export class UsersService {
    
    constructor(
        @InjectRepository(UsersEntity) private  usersRepository:Repository<UsersEntity>){}
     
       async getUserByUsername(username:string):Promise<UsersEntity>{
          return await this.usersRepository.findOne({where:{username:username}})
        }

    
}
