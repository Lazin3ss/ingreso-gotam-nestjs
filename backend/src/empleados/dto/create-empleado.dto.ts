import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from "class-validator";
import { EmpleadoDto } from "./empleado.dto";
import { PartialType } from "@nestjs/mapped-types";

export class CreateEmpleadoDto extends PartialType(EmpleadoDto)  {
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
