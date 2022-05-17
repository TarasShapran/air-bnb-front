import {Component, OnInit} from '@angular/core';
import {IApartments} from "../../interfaces/apartments.interface";
import {ApartmentService} from "../../services/apartment.service";
import {Form, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {
  apartments: IApartments[]
  form: FormGroup
  orderByOptions: string[] = ['region', 'createdAt']
  country: string

  constructor(private apartmentService: ApartmentService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.apartmentService.getAll().subscribe(value => {
      this.apartments = value
    })
    this.form = this.formBuilder.group({
      orderBy: new FormControl('region', [Validators.required]),
      country:new FormControl('')
    })
    this.form.get('orderBy')?.valueChanges.subscribe(value=>{
      this.apartmentService.getAll(10,1,value).subscribe(value => {
        this.apartments = value
      })
    })
  }

}
