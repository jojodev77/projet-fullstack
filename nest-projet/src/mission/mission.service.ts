import { Injectable } from '@nestjs/common';
import { Mission } from './mission.interface';

@Injectable()
export class MissionService {
mission: Mission[] = [
{id: 1, name: 'toutoumag', points: 2, but: 'faire imiter le bruit du chien'},
{id: 1, name: 'toutoumag', points: 2, but: 'faire imiter le bruit du chien'},
{id: 1, name: 'toutoumag', points: 2, but: 'faire imiter le bruit du chien'},
];
getMission(): Mission[] {
return this.mission;
}
}
