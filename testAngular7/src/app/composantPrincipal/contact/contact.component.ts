import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';
import { MissionService } from 'src/app/services/mission.service';
import { Mission } from 'src/app/models/missions.class';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
// date et heure du jour
date = new Date();
user: User;
mission: Mission;

  constructor(
    private us: UserService,
    private router: Router,
    private ms: MissionService
     ) { }

  ngOnInit() {
// asyncrone user 
    this.us.getSessionUser().subscribe(
      data => this.user = data
      );
      // Mise a jour du session storage user
    let user = JSON.parse(sessionStorage.getItem('USER'));
    this.us.updateUser(user);

// afficher contenu des missions 
    this.ms.getMissionSelectionner().pipe(
      tap((data: Mission ) => console.log('la ' + data.id)),
      ).subscribe(
      data => {this.mission = data; }
      );
  // tslint:disable-next-line: align
  this.ms.UpdateSubject();
  }

}
