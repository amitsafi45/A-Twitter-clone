import {PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,DeleteDateColumn} from 'typeorm'
export abstract class DateInfo{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @CreateDateColumn({name:"created_at"})
    createdAt:Date

    @UpdateDateColumn({name:"updated_at"})
    updatedAt:Date

    @DeleteDateColumn({name:"delete_at"})
    deleteAt:Date

}