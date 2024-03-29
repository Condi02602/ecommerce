import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalConstants } from '../../shared/global-constants'
import { CoreService } from '../../core/core.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  password = true;
  confirmPassword = true;
  signupForm: any = FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder, private coreService: CoreService, private router: Router){}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name:["", [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      lastname:["", [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
     date: ["", [Validators.required]],
      age: ["", [Validators.required, Validators.pattern(GlobalConstants.ageRegex)]],
      email:["", [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      contact:["", [Validators.required, Validators.pattern(GlobalConstants.contactRegex)]],
      address: ["", [Validators.required]],
      password:["", [Validators.required]],
      confirmPassword:["", [Validators.required]]
    })
  }

  validateSubmit() {
    return this.signupForm.controls['password'].value !== this.signupForm.controls['confirmPassword'].value;
  }

  RegistrationUser(){
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.coreService.openSnackBar('Registration Successful', 'done');
    setTimeout(() => {
      this.router.navigate(["/products"]);
    }, 3000);
    } else {
      this.validateAllFormFields(this.signupForm);
      console.log(this.signupForm.value)
      this.coreService.openSnackBar("Your form is invalid");
      console.log(this.signupForm.status)
    }
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    })
  }
}
