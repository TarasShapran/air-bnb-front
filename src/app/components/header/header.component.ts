import {Component, OnInit} from '@angular/core';
import {DataTransferService} from "../../services/data-transfer.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email: string;
  hide: boolean;

  constructor(private transferService: DataTransferService, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.transferService.currentUserSubject.subscribe(value => {
      if (value) {
        this.email = value.email;
      }
    })
  }

  getUsers(): void {
    this.router.navigate(['users'])
  }

  getApartments() {
    this.router.navigate(['apartments'])
  }
}
