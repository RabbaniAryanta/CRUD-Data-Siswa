import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsNumber, IsString } from 'class-validator';
import { Category } from '@prisma/client';
import { CreateMenuDto } from './create-menu.dto';

export class UpdateMenuDto extends PartialType(CreateMenuDto) { @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsNumber()
    price: number;

    @IsOptional()
    @IsString()
    category: Category;
    
    @IsOptional()
    @IsString()
    description: string;
}


