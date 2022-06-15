import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApartmentService} from "../../services/apartment.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-apartment',
  templateUrl: './new-apartment.component.html',
  styleUrls: ['./new-apartment.component.css']
})
export class NewApartmentComponent implements OnInit {
  updateForm: FormGroup;
  constructor(private apartmentService: ApartmentService,private router: Router) { }

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

  create() {

  }
}
