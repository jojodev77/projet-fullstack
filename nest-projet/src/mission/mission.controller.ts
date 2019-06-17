import { Controller, Get } from '@nestjs/common';
import { Mission } from './mission.interface';
import { MissionService } from './mission.service';

@Controller('mission')
export class MissionController {
constructor(private missionService: MissionService) {

}
@Get()

// getMission(): Mission[] {
// return this.missionService.getMission();
// }
async getMiss(): Promise<Mission[]> {
return await this.missionService.getMission();
}
}
