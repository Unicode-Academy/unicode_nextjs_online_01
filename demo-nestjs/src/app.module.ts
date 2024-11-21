import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './modules/products/products.module';
import { PermissionsController } from './modules/permissions/permissions.controller';
@Module({
  imports: [ConfigModule.forRoot(), ProductsModule],
  controllers: [AppController, PermissionsController],
  providers: [AppService],
})
export class AppModule {}
