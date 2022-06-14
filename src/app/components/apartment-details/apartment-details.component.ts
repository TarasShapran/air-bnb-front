import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApartmentService} from "../../services/apartment.service";
import {IApartments, IUser} from "../../interfaces";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css']
})
export class ApartmentDetailsComponent implements OnInit {
  apartment: IApartments;
  user: IUser

  constructor(private activatedRoute: ActivatedRoute, private apartmentService: ApartmentService, private userService: UserService,private router: Router) {
    this.activatedRoute.params.subscribe(params => {
        let id = params['id']
        apartmentService.getById(id).subscribe(value => this.apartment = value)

      }
    )
  }

  ngOnInit(): void {

  }

  userDet() {
    this.router.navigate(['user-det'])
  }
}
