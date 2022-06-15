import {Component, OnInit} from '@angular/core';
import {DataTransferService} from "../../services/data-transfer.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email: string;
  user: IUser;
  constructor(private transferService: DataTransferService, private userService: UserService,private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    // this.transferService.currentUserSubject.subscribe(value => {
    //   if (value) {
    //     this.user =value
    //     this.email = value.email;
    //   }
    // })
    this.userService.getMe().subscribe(value => {
      console.log(value)
      this.user=value
      this.email = value.email;
    })
  }

  userInfo(): void {
    this.router.navigate(['personal-info'])
  }

  login():void {
    this.router.navigate(['login'])
  }

  logout() {
    this.authService.logout()
  }
}
