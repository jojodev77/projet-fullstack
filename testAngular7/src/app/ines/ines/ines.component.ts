import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { MissionService } from 'src/app/services/mission.service';

@Component({
  selector: 'app-ines',
  templateUrl: './ines.component.html',
  styleUrls: ['./ines.component.css']
})
export class InesComponent implements OnInit {
user: User;
url: 'https://conjugaison.lemonde.fr/conjugaison/premier-groupe/%C3%A9chouer';
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
// Mise a jour du session storage
let user = JSON.parse(sessionStorage.getItem('USER'));
this.us.updateUser(user);
this.afficherMission();
  }

  // Redirection INES 
routageInes() {
if (this.user != null) {
 this.router.navigate(['home/mission']);
} else {
alert('Merci de vous isncrire');
this.router.navigate([{ outlets: { userRoute: 'inscription' } }]);
}
}
// Afficher mission
afficherMission() {
this.ms.getMissionSelectionner();
}

// si il refuse 
refuser() {
 // window.location.href = this.url;
}
}
