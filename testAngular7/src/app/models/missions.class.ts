export class Mission {
id?: number;
name: string;
points: number;
but: string;

constructor(id: number, name: string, points: number, but: string) {
this.id = id;
this.name = name;
this.points = points;
this.but = but;
}
}
