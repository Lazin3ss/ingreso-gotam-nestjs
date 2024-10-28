import { IsNotEmpty } from "class-validator";

export class CreateAreaDeTrabajoDto {
    @IsNotEmpty()
    nombre: string;
}
