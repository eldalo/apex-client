import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PaymentMethodDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  typeCredit: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  creditLimit: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  creditUsed: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  amountAvailable: number;
}
