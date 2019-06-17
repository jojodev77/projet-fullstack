import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { MissionService } from 'src/app/services/mission.service';
import { User } from 'src/app/models/user.model';
import { Mission } from 'src/app/models/missions.class';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
user: User;
mission: Mission;


  constructor(
private router: Router,
private us: UserService,
private ms: MissionService
  ) { }

  ngOnInit() {
    this.us.getSessionUser().subscribe(
      data => this.user = data
      );
      // Mise a jour du session storage
// tslint:disable-next-line: align
      let user = JSON.parse(sessionStorage.getItem('USER'));
// tslint:disable-next-line: align
      this.us.updateUser(user);
  }
validerMission() {
this.user.points = + 1;
this.router.navigate(['']);
let user = JSON.parse(sessionStorage.getItem('USER'));
// tslint:disable-next-line: align
      this.us.updateUser(user.points  + 1);
}
}
