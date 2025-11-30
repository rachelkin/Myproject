import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import { FormGroup,FormControl ,Validators  } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {
form=new FormGroup({
  firstName: new FormControl('',[Validators.required,Validators.maxLength(18)]),
  lastName: new FormControl('',[Validators.required,Validators.maxLength(18)]),
  adress: new FormControl('',[Validators.required]),
  email: new FormControl('',[Validators.required, Validators.email]),
  passwoed1: new FormControl('',[Validators.required, Validators.minLength(6)]),
  passwoed2: new FormControl('',[Validators.required, Validators.minLength(6)]),
  category: new FormControl('', [Validators.required]) 

});

submit(){

}
}
