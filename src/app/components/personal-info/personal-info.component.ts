import {Component, OnInit} from '@angular/core';
import {ApartmentService} from "../../services/apartment.service";
import {UserService} from "../../services/user.service";
import {IApartments, IUser} from "../../interfaces";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  apartments: IApartments[];
  user: IUser;
  constructor(private apartmentService: ApartmentService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.apartmentService.getUsersApartment().subscribe(value =>
      this.apartments = value)
    this.userService.getMe().subscribe(value => {
      console.log(value)
      this.user=value
    })
  }

}
