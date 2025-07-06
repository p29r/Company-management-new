import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserLogin } from '../../core/models/class/userLogin.model';
import { UserService } from '../../core/services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginFormObj: UserLogin = new UserLogin();

  // services
  userService = inject(UserService);
  router = inject(Router);

  onLogin() {
    debugger;
    console.log("login from object", this.loginFormObj);
    this.userService.login(this.loginFormObj).subscribe({
      next: (res: any) => {
        debugger;
        const data = res.data.data;
        const strData = JSON.stringify(data);

        localStorage.setItem('clientStriveUserNew', strData);
        this.router.navigateByUrl('/employee-list');
      },
      error: () => {
        debugger;
      }
    })
  }

}
