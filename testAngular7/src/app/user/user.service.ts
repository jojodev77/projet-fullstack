import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

user$ = new Subject<any>();

  constructor() {
    this.updateUser(JSON.parse(sessionStorage.getItem('USER')));
   }


// afficher donnee utilisateur
getSessionUser(): Observable<User> {
return this.user$.asObservable();

// creation utilisateur
}
createSessionUser(user: User) {
sessionStorage.setItem( 'USER', JSON.stringify(user));
}
// efface donnee utilisateur
deleteSessionUser(user: User[]) {
sessionStorage.removeItem('USER');
}
// Actualiser l'observable 
updateUser(user: User): void {
this.user$.next(user);
}
}
