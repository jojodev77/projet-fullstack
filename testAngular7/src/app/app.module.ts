import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './composantFixe/menu/menu.component';
import { PresentationComponent } from './composantPrincipal/presentation/presentation.component';
import { ContactComponent } from './composantPrincipal/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ErreurComponent } from './information/erreur/erreur.component';
import { HomeComponent } from './composantFixe/home/home.component';
import { UserModule } from './user/user.module';
import { MissionComponent } from './ines/mission/mission.component';
import { InesModule } from './ines/ines/ines.module';
import { InesComponent } from './ines/ines/ines.component';
import { ValidationComponent } from './composantPrincipal/validation/validation.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { CreateMissionComponent } from './composantPrincipal/create-mission/create-mission.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PresentationComponent,
    ContactComponent,
    ErreurComponent,
    HomeComponent,
    InesComponent,
    MissionComponent,
    ValidationComponent,
    CreateMissionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    UserModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
