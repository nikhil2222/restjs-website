import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from "@nestjs/typeorm";

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

    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
