import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErreurComponent } from './information/erreur/erreur.component';
import { HomeComponent } from './composantFixe/home/home.component';
import { PresentationComponent } from './composantPrincipal/presentation/presentation.component';
import { ContactComponent } from './composantPrincipal/contact/contact.component';
import { InscriptionComponent } from './user/inscription/inscription.component';
import { InesComponent } from './ines/ines/ines.component';
import { MissionComponent } from './ines/mission/mission.component';
import { ValidationComponent } from './composantPrincipal/validation/validation.component';
import { CreateMissionComponent } from './composantPrincipal/create-mission/create-mission.component';

const routes: Routes = [

  {path: 'inscription', component: InscriptionComponent, outlet: 'userRoute'},
  {path: 'validation', component: ValidationComponent, outlet: 'validation'},
  {path: 'creationmission', component: CreateMissionComponent, outlet: 'creationmission'},


{path: 'home', children: [
{path: 'presentation', component: PresentationComponent},
{path: 'ines', component: InesComponent},
{path: 'mission', component: MissionComponent},
{path: 'score', component: ContactComponent}
]},

 {path: '', component: InesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
