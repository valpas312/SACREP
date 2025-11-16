import { IsString } from 'class-validator';

export class CreateEquivalenciaDto {
  @IsString()
  mazfrenCodigo: string;

  @IsString()
  frasleCodigo: string;
}
