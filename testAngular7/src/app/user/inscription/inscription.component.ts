import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  [x: string]: any;

  userForm: FormGroup;

    constructor(private fb: FormBuilder, private us: UserService , private router: Router) { }

    ngOnInit() {
  this.userForm = this.fb.group({
  name: '',
  techno: '',
  points: 0,
  service: ''
  });
    }

  onSubmitForm() {
  const resultUser = this.userForm.value;
  const resultUsers = new User(
  resultUser.name,
  resultUser.techno,
  resultUser.points,
  resultUser.service
  );
  console.log(resultUsers);
  this.us.createSessionUser(resultUsers);
  const user = JSON.parse(sessionStorage.getItem('USER'));
// tslint:disable-next-line: align
this.us.updateUser(user);
  if (user != null) {
this.router.navigate(['']);
}
  }
  }
