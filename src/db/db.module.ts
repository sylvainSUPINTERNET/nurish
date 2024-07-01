import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { MealModule } from './meal/meal.module';

@Module({
    imports: [ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.MONGODB_URL),
        UserModule,
        MealModule],
    controllers: [],
    providers: [],
})
export class DbModule {}
