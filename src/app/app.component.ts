import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordStrengthValidator, checkPassword } from './password.validator';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Epictenet';
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  phoneNumber = "^^((\\+91-?)|0)?[0-9]{10}$";
  epicteNetForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.required, PasswordStrengthValidator]),
    reapeatPassword: new FormControl('', [Validators.required , checkPassword]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(this.phoneNumber)]),
  });
  showData: boolean = false;
  getFormData(){
    console.log(this.epicteNetForm);
    this.showData = true;
    
  }
//   public checkPasswords(control: FormGroup) { // here we have the 'passwords' group
//   let pass = control.get('password').value;
//   let confirmPass = control.get('reapeatPassword').value;

//   return pass === confirmPass ? null : { notSame: true }     
// }
}
