import { Injectable, Get } from '@nestjs/common';
import { Miss } from './miss.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MissService {
    constructor(
        @InjectRepository(Miss)
        private readonly missRepository: Repository<Miss>,
      ) {}

      findAll(): Promise<Miss[]> {
        return this.missRepository.find();
      }
}
