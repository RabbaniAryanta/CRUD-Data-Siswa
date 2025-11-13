import { IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { payment_method as Payment } from "@prisma/client";

export class CreateTransactionDto {
    @IsNotEmpty()
    @IsString()
    paymentMethod: Payment;

    @IsNotEmpty()
    @IsString()
    orderName: string;

    @IsNotEmpty()
    @IsNumber()
    detail: DetailMenuDto[];
}

export class DetailMenuDto {
    @IsNotEmpty()
    @IsNumber()
    menuId: number;

    @IsNotEmpty()
    @IsNumber()
    quantity: number;
}
