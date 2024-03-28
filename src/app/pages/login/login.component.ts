import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder: FormBuilder, private service: AuthService,
    private router: Router, private toastr: ToastrService) {
    sessionStorage.clear();

  }
  result: any;

  loginform = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });


  proceedlogin() {

    if (this.loginform.valid) {
      const { username } = this.loginform.value;
      this.service.getUserByUsername(username as string).subscribe(item => {
        this.result = item;
        console.log(this.result)
        if (this.result[0].password === this.loginform.value.password) {
            sessionStorage.setItem('username',this.result[0].username);
            sessionStorage.setItem('role',this.result[0].role);
            this.router.navigate(['']);
        } else {
          this.toastr.error('Invalid credentials');
        }
      });
    } else {
      this.toastr.warning('Please enter valid data.')
    }

  }
}