import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpleadosModule } from './empleados/empleados.module';
import { AreasDeTrabajoModule } from './areas-de-trabajo/areas-de-trabajo.module';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      ttl: 2000
    }),
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
  providers: [AppService,
    {
    provide: APP_INTERCEPTOR,
    useClass: CacheInterceptor,
  }],
})
export class AppModule {}
