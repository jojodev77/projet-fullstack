import { Controller, Get } from '@nestjs/common';
import { Miss } from './miss.interface';
import { MissService } from './miss.service';

@Controller('miss')
export class MissController {
constructor(private missService: MissService) {}
@Get()
async getMissionMysql(): Promise<Miss[]> {
return await this.missService.findAll();
}
}
