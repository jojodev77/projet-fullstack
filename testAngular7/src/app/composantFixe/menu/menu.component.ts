import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

user: User;

  constructor(private us: UserService) { }

// Asynchrone utilisateur

  ngOnInit() {

this.us.getSessionUser().subscribe(
data =>  this.user  = data
);



// Cacher inscription/connexion
  }
apparaitreBoutonUser() {
const button = document.getElementById('boutonUser');
button.style.display = 'block';
}
}
