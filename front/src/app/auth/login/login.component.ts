import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {TokenStorageService} from '../../service/token-storage.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../service/notification.service';
import {LoggedInUser, UserCredentials} from "../../models/Auth";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private notificationService: NotificationService,
    private router: Router,
    private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.loginForm = this.createLoginForm();
  }

  createLoginForm(): FormGroup {
    return this.fb.group({
      username: ['', Validators.compose([Validators.required,
        Validators.pattern('^[a-zA-Z0-9]*$')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }


  logInUser(user:UserCredentials){
    this.authService.logIn(user).subscribe({
      next: (data) => {
        this.authService.setLoggedInUser(data);
        this.tokenStorage.saveUser(data);
        this.router.navigateByUrl(`/profile/${data.id}`);
    },error: (error) => {
        console.error(error);
        this.notificationService.showSnackBar('Unable to log in with provided credentials.');
      }
    })
  }

  submit(): void {
    if(this.loginForm.invalid){
      console.log(this.loginForm.errors);
      this.notificationService.showSnackBar('Login is invalid');
    }else{
      this.logInUser({
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      })
    }
  }

}
