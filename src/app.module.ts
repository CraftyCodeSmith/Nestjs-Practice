import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DamanModule } from './daman/daman.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DamanModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
