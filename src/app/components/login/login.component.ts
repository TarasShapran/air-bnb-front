import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private userService: UserService, private transferService: DataTransferService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  login(): void {
    this.authService.login(this.loginForm.getRawValue()).subscribe(() => {
      this.userService.getMe().subscribe(me => {
        this.transferService.currentUserSubject.next(me)
      })
    })
  }
}
