import { PartialType } from '@nestjs/mapped-types';
import { CreateAreaDeTrabajoDto } from './create-area-de-trabajo.dto';

export class UpdateAreaDeTrabajoDto extends PartialType(CreateAreaDeTrabajoDto) {
    id: number;
}
