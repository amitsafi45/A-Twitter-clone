import { Column, Entity } from "typeorm";
import { DateInfo } from "./common/dateInfo.entity";

@Entity('hashtags')
export class HashtagsEntity extends DateInfo{
    @Column({type:'text'})
    tag:string

    @Column({name:"recent_post_count",type:'bigint'})
    recentPostCount:number
}