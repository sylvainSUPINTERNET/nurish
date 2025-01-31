import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { UserModule } from './db/user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), DbModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
