import 'dotenv/config'
import {  TypeOrmModule, TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";
import {ConfigService,ConfigModule} from "@nestjs/config"

export default class DatabaseConfig{
    static getConnectionOptions():TypeOrmModuleOptions{
     return({ type: 'mysql',
     host: process.env.DATABASE_HOST,
     port:Number( process.env.DATABASE_PORT),
     username: process.env.DATABASE_USERNAME,
     password: process.env.DATABASE_PASSWORD,
     database: process.env.DATABASE_NAME,
     entities: [__dirname+'/../entities/*.entity{.ts,.js}'],
     logging:true,
     synchronize: true,})
    }
}

export const getConnection:TypeOrmModuleAsyncOptions={
  //  imports:[ConfigModule],
    useFactory:async():Promise<TypeOrmModuleOptions>=>DatabaseConfig.getConnectionOptions()

}