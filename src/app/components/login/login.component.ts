import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";
import {DataTransferService} from "../../services/data-transfer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private transferService: DataTransferService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required])
    })
  }

  login(): void {
    this.authService.login(this.loginForm.getRawValue()).subscribe(() => {
      this.userService.getMe().subscribe(me => {
        this.transferService.currentUserSubject.next(me)
      })
      this.router.navigate(['apartments'])
    })
  }

  registration(): void {
    this.router.navigate(['register'])
  }
}
