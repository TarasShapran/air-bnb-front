import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApartmentService} from "../../services/apartment.service";
import {UserService} from "../../services/user.service";
import {IApartments} from "../../interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-apartment',
  templateUrl: './edit-apartment.component.html',
  styleUrls: ['./edit-apartment.component.css']
})
export class EditApartmentComponent implements OnInit {
  apartment: IApartments;
  newApartment: IApartments;
  updateForm: FormGroup;


  constructor(private activatedRoute: ActivatedRoute, private apartmentService: ApartmentService, private userService: UserService, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
        let id = params['id']
        apartmentService.getById(id).subscribe(value => {
          this.apartment = value
          this.updateForm.patchValue(value)
        })


      }
    )
  }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      country: new FormControl(''),
      city: new FormControl(''),
      description: new FormControl(''),
      region: new FormControl(''),
      type: new FormControl(''),
      number_of_rooms: new FormControl(''),
      number_of_beds: new FormControl(''),
      amount_of_places: new FormControl(''),
      price: new FormControl(''),
      title: new FormControl(''),
      approve: new FormControl('')
    })
  }


  update() {
    this.apartmentService.updateApartment(this.apartment.id, this.updateForm.getRawValue()).subscribe(() => {
      this.router.navigate(['personal-info'])
    })
  }

  delete() {
    this.apartmentService.deleteApartment(this.apartment.id).subscribe(()=>{
      this.router.navigate(['personal-info'])
    })
  }
}
