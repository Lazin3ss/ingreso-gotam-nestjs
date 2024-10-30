import { IsNotEmpty } from "class-validator";
import { AreaDeTrabajoDto } from "./area-de-trabajo.dto";

export class CreateAreaDeTrabajoDto extends AreaDeTrabajoDto {
    @IsNotEmpty()
    nombre: string;
}
