import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpleadosModule } from './empleados/empleados.module';

@Module({
  imports: [
    EmpleadosModule,
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: './../db/empleados.sqlite',
      autoLoadModels: true,
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
