import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

user: User;

  constructor(private router: Router, private us: UserService) {
// this.router.navigate(['/home/presentation']);

  }

  ngOnInit() {
this.us.getSessionUser().subscribe(
data => { this.user = data; }
)
  }

}
