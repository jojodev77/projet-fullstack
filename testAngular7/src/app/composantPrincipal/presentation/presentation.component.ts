import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
user: User;

  constructor(private us: UserService) { }
// asyncrone utilisateur
  ngOnInit() {

this.us.getSessionUser().subscribe(
data => this.user = data
);

// Mise a jour du session storage
let user = JSON.parse(sessionStorage.getItem('USER'));
this.us.updateUser(user);
  }

}
