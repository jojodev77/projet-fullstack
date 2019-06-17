import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Mission } from 'src/app/models/missions.class';

@Component({
  selector: 'app-create-mission',
  templateUrl: './create-mission.component.html',
  styleUrls: ['./create-mission.component.css']
})
export class CreateMissionComponent implements OnInit {

createForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
this.createForm = this.fb.group({
name: ['', Validators.required],
points: ['', Validators.required],
but: ['', Validators.required],
});
  }
onSubmitForm() {
const result = this.createForm.value;
const results = new Mission(
result.id,
result.name,
result.points,
result.but
)
}

}
