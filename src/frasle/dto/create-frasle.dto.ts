import { IsString, IsOptional, IsNumberString } from 'class-validator';

export class CreateFrasleDto {
  @IsString()
  codigo: string;

  @IsString()
  descripcion: string;

  @IsNumberString()
  precio: string;

  @IsOptional()
  @IsString()
  imagen?: string;

  @IsOptional()
  @IsString()
  categoria?: string;

  @IsOptional()
  @IsString()
  fabricante?: string; 
}
