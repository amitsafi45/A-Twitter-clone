import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class UsersDTO{

    @ApiProperty()
    username:string

    @ApiProperty()
    name: string;
   
    @ApiPropertyOptional()
    avatar?: string;

    @ApiPropertyOptional()
    bio?: string;
 
}

export class UpdateUsersDTO {

    @ApiProperty()
    id:string

    @ApiPropertyOptional()
    name: string;
   
    @ApiPropertyOptional()
    avatar?: string;

    @ApiPropertyOptional()
    bio?: string;

}