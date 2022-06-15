import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ApartmentService} from "../../services/apartment.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-apartment',
  templateUrl: './new-apartment.component.html',
  styleUrls: ['./new-apartment.component.css']
})
export class NewApartmentComponent implements OnInit {
  apartment: IArguments;

  firstFormGroup = this._formBuilder.group({
    country: ['', Validators.required],
    city: ['', Validators.required],
    region: ['', Validators.required],
    description: ['', Validators.required],
    type: ['', Validators.required],
    title: ['', Validators.required],
    price: ['', Validators.required],
    number_of_rooms: ['', Validators.required],
    number_of_beds: ['', Validators.required],
    amount_of_places: ['', Validators.required],
    approve: [false, Validators.required],
  });


  constructor(private apartmentService: ApartmentService, private router: Router, private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  create() {
    this.apartmentService.createApartment(this.firstFormGroup.getRawValue()).subscribe(() =>
      this.router.navigate(['personal-info'])
    )
  }
}
