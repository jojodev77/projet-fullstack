import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InesComponent } from './ines.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MissionComponent } from '../mission/mission.component';
import { UserModule } from 'src/app/user/user.module';

@NgModule({
  declarations: [InesComponent, MissionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AppRoutingModule,
    UserModule

  ]
})
export class InesModule { }
