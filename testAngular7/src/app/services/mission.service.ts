import { Injectable } from '@angular/core';
import { Mission } from '../models/missions.class';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

 httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };

// liste de missions, a reporter dans autres fichiers
mission: Mission[] = [
  {id: 1, name: 'Le selfie JAVA', points: 1, but: 'Prendre 5 selfie avec des devs JAVA' },
  {id: 2, name: 'Un dessin agile', points: 1, but: 'Te faire offire 3 dessin ' },
  {id: 3, name: 'C pas moi', points: 1, but: 'Faire croire à un projet loufoque à un collègue ' },
  {id: 4, name: 'Angu-birstday', points: 1, but: 'Récupérer 15 dates d\'anniversaires' }
    ];
// variable nbre aléatoire mission
nbrMission: number;
nbrMissions: number;
nbrMissionAleatoire: number;
nbrMissionAleatoirestoFixe: number;
chiffre: number;
miss: Mission[];

// observable de la mission
mission$ = new Subject<Mission>();

  constructor(private http: HttpClient) {
this.afficherDonneMysql().subscribe(
(data: Mission[]) => {this.miss = data; }
);
  }

// Tri aléatoire des missions
TrierAleatoireMission() {
// this.nbrMission = this.mission.length;
this.nbrMission = this.miss.length;
this.nbrMissionAleatoire = Math.random() * this.nbrMission;
// tslint:disable-next-line: radix
this.nbrMissionAleatoirestoFixe = parseInt(this.nbrMissionAleatoire.toFixed(0));
this.chiffre = this.nbrMissionAleatoirestoFixe;
// this.mission$.next(this.mission[this.chiffre]);
this.mission$.next(this.miss[this.chiffre]);

}

getMissionSelectionner(): Observable<Mission> {
return this.mission$.asObservable();

}
// Alimenter le subject 
UpdateSubject() {
this.TrierAleatoireMission();
// this.mission$.next(this.mission[this.chiffre]);
this.mission$.next(this.miss[this.chiffre]);
}
// test avec api reel nestJS
afficherMissionApi(): Observable<Array<Mission>> {
return this.http.get<Array<Mission>>('http://localhost:3000/mission', this.httpOptions);
}
// test avec pi nestjs
afficherDonneMysql(): Observable<Array<Mission>> {
  return this.http.get<Array<Mission>>('http://localhost:3000/miss', this.httpOptions);
}
// post des donnes vers api ves mysql
postDonneMySql(mission: Mission[]): Observable<Array<Mission>> {
return this.http.post<Array<Mission>>('http://localhost:3000/miss', mission);
}
}
