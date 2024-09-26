import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form-validations';
  user: any = { name: '', email: '', password: '' }
  userForm!: FormGroup;
  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')
      ])
    })
  }
}
