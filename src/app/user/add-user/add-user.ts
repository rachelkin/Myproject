import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule,FormArray  } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { UserObj } from '../user';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css'
})
export class AddUser {
  @Output() userCreated = new EventEmitter<UserObj>();
  Categories = ['personal', 'work', 'urgent'];
  form = new FormGroup({
    name: new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(18)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(18)]),
    }),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    passwords: new FormGroup({
      passwoed1: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwoed2: new FormControl('', [Validators.required, Validators.minLength(6)]),

    },  {validators:matchPassword},),
 categories: new FormArray(
      this.Categories.map(() => new FormControl(false))
    )
  });
  submit() {
    if (this.form.invalid) return;

    const formValue = this.form.value;
    const user: UserObj = {
      id: Date.now().toString(36),
      name: `${formValue.name?.firstName ?? ''} ${formValue.name?.lastName ?? ''}`.trim(),
      avatar: ''
    };

    this.userCreated.emit(user);
    this.form.reset();         
  }
  
//   get email(){
//     return this.form.controls.email.invalid;
//   };
//   get address(){
//     return this.form.controls.address.invalid;
//   };
// get firstName() {
//   return this.form.controls.name.controls.firstName.invalid;
// }

// get lastName() {
//   return this.form.controls.name.controls.lastName.invalid;
// }

// get lastNameinvalid() {
//   return this.form.controls.name.controls.firstName.invalid
// }
//  get categoriesControls() {
//     return (this.form.get('categories') as FormArray).controls;
//   }
get firstName() {
  return this.form.get('name.firstName') as FormControl;
}

get lastName() {
  return this.form.get('name.lastName') as FormControl;
}

get email() {
  return this.form.get('email') as FormControl;
}

get address() {
  return this.form.get('address') as FormControl;
}

get passwoed1() {
  return this.form.get('passwords.passwoed1') as FormControl;
}

get passwoed2() {
  return this.form.get('passwords.passwoed2') as FormControl;
}

}
function matchPassword(control: AbstractControl) {
  const password = control.get('passwoed1')?.value;
  const confirm = control.get('passwoed2')?.value;
  return password === confirm ? null : { mismatch: true };
};


