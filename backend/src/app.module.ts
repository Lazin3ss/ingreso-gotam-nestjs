import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpleadosModule } from './empleados/empleados.module';
import { AreasDeTrabajoModule } from './areas-de-trabajo/areas-de-trabajo.module';

@Module({
  imports: [
    AreasDeTrabajoModule,
    EmpleadosModule,
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: './../db/database.sqlite',
      autoLoadModels: true,
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
