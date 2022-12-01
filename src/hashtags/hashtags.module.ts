import { Module } from "@nestjs/common";
import { HashtagsController } from "./hashtags.controller";

@Module({
    imports:[],
    controllers:[HashtagsController],
  providers: []
})
export class HashtagsModule {}
