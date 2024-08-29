import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { CustomerGroupDto } from './customer-group.dto';
import { PaymentMethodDto } from './payment-methods.dto';

export class ClientDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  blocked: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cellPhone: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  channel: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  country: string;

  @ApiProperty()
  customerGroups: CustomerGroupDto;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  customerSchema: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  distrChan: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  division: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  fiscalCode1: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  fiscalCode2: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  frequency: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  frequencyDays: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  idPortfolio: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  immediateDelivery: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  industryCode: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  industryCode1: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  isEnrollment: boolean;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name2: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  office: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  paymentCondition: string;

  @ApiProperty({ type: [PaymentMethodDto] })
  @IsArray({ each: true })
  paymentMethods: [PaymentMethodDto];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  priceGroup: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  priceList: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  routeId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  salesOrg: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  supplyCenter: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  vendorGroup: string;
}
