import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../config/database.module';
import { UsersEntity } from '../entities/users.entity';
import { UsersController } from './users.controller';
//import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
    imports:[TypeOrmModule.forFeature([UsersEntity])],
    controllers:[UsersController],
  providers: [UsersService]
})
export class UsersModule {}
