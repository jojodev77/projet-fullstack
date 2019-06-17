import { Module } from '@nestjs/common';
import { MissController } from './miss.controller';
import { MissService } from './miss.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Miss } from './miss.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Miss])],
  controllers: [MissController],
  providers: [MissService],
})
export class MissModule {}
