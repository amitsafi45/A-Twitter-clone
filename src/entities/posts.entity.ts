import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { DateInfo } from "./common/dateInfo.entity";
import { UsersEntity } from "./users.entity";

@Entity('posts')
export class PostEntity extends DateInfo {
  @Column({  nullable: true })
  text: string;

  @Column('json' )
  images: string[];

  @ManyToOne(() => UsersEntity)
  @JoinColumn({ name: 'author_id' })
  author: UsersEntity;

  @Column({ name: 'like_count', default: 0 })
  likeCount: number;

  @Column({ name: 'repost_count', default: 0 })
  repostCount: number;

  @Column('json')
  hashtags: string[];

  @Column('json' )
  mentions:Mention[];

  @OneToOne(() => PostEntity)
  @JoinColumn({ name: 'orig_post_id' })
  origPost: PostEntity;

  @OneToOne(() => PostEntity)
  @JoinColumn({ name: 'reply_to_id' })
  replyTo: PostEntity;
}

class Mention {
  name: string;
  id: string;
}