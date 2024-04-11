import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css',
})
export class UserRegistrationComponent {
  reactiveFrom: FormGroup;

  constructor() {
    this.reactiveFrom = new FormGroup(
      {
      email: new FormControl('', [Validators.required && Validators.email]),
      password:new FormControl('', [Validators.required]),
      confirmpassword: new FormControl('',[Validators.required])
    },

    {
      validators: this.passwordMatchValidatior,

    }

  );
  }

  passwordMatchValidatior(control: AbstractControl){
return control.get('password')?.value ===
control.get('confirmpassword')?.value
? null
:{mismatch:true};
  }

  onSubmit(){
    console.log(this.reactiveFrom);
  }

}
