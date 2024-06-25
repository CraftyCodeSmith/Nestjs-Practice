import { Module } from '@nestjs/common';
import { DamanController } from './daman.controller';
import { DamanService } from './daman.service';

@Module({
  controllers: [DamanController],
  providers: [DamanService]
})
export class DamanModule {}
