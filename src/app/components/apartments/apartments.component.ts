import {Component, OnInit} from '@angular/core';
import {IApartments} from "../../interfaces/apartments.interface";
import {ApartmentService} from "../../services/apartment.service";

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {
  apartments: IApartments[]

  constructor(private apartmentService: ApartmentService) {
  }

  ngOnInit(): void {
    this.apartmentService.getAll().subscribe(value => {
      this.apartments = value
    })
  }

}
