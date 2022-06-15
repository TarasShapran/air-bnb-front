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
  updateForm: FormGroup;
  apartment: IArguments;

  firstFormGroup = this._formBuilder.group({
    country: ['', Validators.required],
    city: ['', Validators.required],
    region: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    description: ['', Validators.required],
    type: ['', Validators.required],
    title: ['', Validators.required],
    price: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    number_of_rooms: ['', Validators.required],
    number_of_beds: ['', Validators.required],
    amount_of_places: ['', Validators.required],
    approve: ['', Validators.required],
  });

  isLinear = false;

  constructor(private apartmentService: ApartmentService, private router: Router, private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.apartment = this.thirdFormGroup.getRawValue()
    console.log(this.apartment)
    console.log(this.thirdFormGroup.getRawValue())




    this.updateForm = new FormGroup({
      country: new FormControl(''),
      city: new FormControl(''),
      region: new FormControl(''),
      description: new FormControl(''),
      type: new FormControl(''),
      title: new FormControl(''),
      price: new FormControl(''),
      number_of_rooms: new FormControl(''),
      number_of_beds: new FormControl(''),
      amount_of_places: new FormControl(''),
      approve: new FormControl('')
    })
  }

  create() {
    this.thirdFormGroup.patchValue(this.apartment)
    console.log(this.apartment)
  }
}
