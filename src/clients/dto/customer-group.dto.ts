import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CustomerGroupDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  group: string;

  @ApiPropertyOptional()
  group1: string;

  @ApiPropertyOptional()
  group2: string;

  @ApiPropertyOptional()
  group3: string;

  @ApiPropertyOptional()
  group4: string;

  @ApiPropertyOptional()
  group5: string;
}
