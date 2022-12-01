import { EntityRepository, getCustomRepository, Repository ,} from "typeorm";
import { UsersEntity } from "../entities/users.entity";


export class UsersRepository extends Repository<UsersEntity>{

}