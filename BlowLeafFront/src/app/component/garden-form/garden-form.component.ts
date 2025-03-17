import { Component, output } from '@angular/core';
import { ReactiveFormsModule, NonNullableFormBuilder, FormGroup, Validators } from '@angular/forms';
import { Garden } from '../../model/garden';

@Component({
  selector: 'app-garden-form',
  imports: [ReactiveFormsModule],
  templateUrl: './garden-form.component.html',
  styleUrl: './garden-form.component.css'
})
export class GardenFormComponent {

  gardenForm:FormGroup;
  onGardenUpdate = output<Garden>();

  constructor(private fb: NonNullableFormBuilder) {
      this.gardenForm = this.fb.group({
               width: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
               height: ['', [Validators.required, Validators.min(1), Validators.max(10)]]
             });
   }

 onSubmit() {
     var garden = new Garden({} as Garden);
     garden.init(this.gardenForm.value.width, this.gardenForm.value.height);
     console.log(garden)
     this.onGardenUpdate.emit(garden);

     //this.userService.save(user).subscribe(result => this.gotoUserList());

   }
}
