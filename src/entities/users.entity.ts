import { Column, Entity } from "typeorm";
import { DateInfo } from "./common/dateInfo.entity";

@Entity('users')
export class UsersEntity extends DateInfo{


    @Column({ length: 30, nullable: false, unique: true })
    username: string;

    @Column({ nullable: true, length: 50 })
    name: string;
  
    @Column({ nullable: true })
    avatar?: string;
  
    @Column({ nullable: true, length: 240 })
    bio?: string;
  
    @Column({ name: 'follower_count', default: 0 })
    followerCount: number;
  
    @Column({ name: 'following_count', default: 0 })
    followingCount: number;
  
    @Column('boolean', { default: false })
    verified: boolean;

}