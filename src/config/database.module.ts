import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { getConnection } from "./database.config";

@Global()
@Module({
    imports: [TypeOrmModule.forRootAsync(getConnection)],
  })
  export class DatabaseModule {}
  