import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class createUserDto {

        @IsNotEmpty()
        @IsString()
        name: string;

        @IsNotEmpty()
        @IsString()
        @IsEmail()
        email: string;

        @IsNotEmpty()
        @IsStrongPassword()
        password: string;
        
        @IsNotEmpty()
        @IsString()
        role : string;

        createdAt?: string
}