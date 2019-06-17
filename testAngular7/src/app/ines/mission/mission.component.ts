import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';
import { Mission } from 'src/app/models/missions.class';
import { MissionService } from 'src/app/services/mission.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
  user: User;
mission: Mission;
missions: Mission[];
miss: Mission[];

  constructor(private us: UserService, private router: Router,
              private ms: MissionService) { }
// Synchrone user
  ngOnInit() {
this.us.getSessionUser().subscribe(
data => this.user = data
);
// Mise a jour du session storage
let user = JSON.parse(sessionStorage.getItem('USER'));
this.us.updateUser(user);

// Activer le tri des missions
this.ms.TrierAleatoireMission();
this.affichezMissionApi();
this.afficherMysql();
  }

// afficher mission 
afficherMission() {
  this.ms.getMissionSelectionner().pipe(
    tap((data: Mission ) => console.log('la ' + data.id)),
    ).subscribe(
    data => {this.mission = data; }
    );
// tslint:disable-next-line: align
this.ms.UpdateSubject();
  const affichbouton = document.getElementById('afficherbouton');
  affichbouton.style.display = 'none';
}

affichezMissionApi() {
this.ms.afficherMissionApi().subscribe(
(data: Mission[]) => {this.missions = data; }
);
}
afficherMysql() {
this.ms.afficherDonneMysql().subscribe(
(data: Mission[]) => {this.miss = data; }
);
}

}
