import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalConstants } from '../../shared/global-constants';
import { Router } from '@angular/router';
import { CoreService } from '../../core/core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isAuthenticationFail!: boolean;
  hide = true;
  loginform: any = FormGroup;
  public email : any = new FormControl('')
  public password: any = new FormControl('')
  public uname:any;
  public upass:any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private coreService: CoreService
  ) {}

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      password: [null, [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginform.valid) {
      const email = this.loginform.get('email')?.value;
      const password = this.loginform.get('password')?.value;

      // Simulating login logic
      if (email === 'test@example.com' && password === 'password') {
        this.coreService.openSnackBar('Login Successful');
        sessionStorage.setItem('isLoginUser', 'true');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 2000);
      } else if (email !== 'test@example.com') {
        this.loginform.get('email')?.setErrors({ 'emailNotFound': true });
        this.coreService.openSnackBar('Email not found');
      } else {
        this.loginform.get('password')?.setErrors({ 'incorrectPassword': true });
        this.coreService.openSnackBar('Incorrect Password');
      }
    } else {
      this.validateAllFormFields(this.loginform);
      this.coreService.openSnackBar('Your form is invalid');
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
    });
  }
}
