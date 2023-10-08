import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PostModule,
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      database:'restjs',
      username:'root',
      password:'Nikhil@2209',
      port:3306,
      autoLoadEntities:true,
      synchronize:true

    }),
    CategoryModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
