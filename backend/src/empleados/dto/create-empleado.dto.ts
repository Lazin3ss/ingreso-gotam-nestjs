import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from "class-validator";
import { EmpleadoDto } from "./empleado.dto";

export class CreateEmpleadoDto extends EmpleadoDto {
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
