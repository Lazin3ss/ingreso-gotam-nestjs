import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateEmpleadoDto {
    @IsString()
    nombre: string;
    @IsDateString()
    fechaDeNacimiento: string;
    @IsOptional() @IsNumber()
    areaDeTrabajoId: number;
    @IsOptional() @IsBoolean()
    esDesarrollador: boolean;
    @IsOptional() @IsString()
    descripcion: string;
}
