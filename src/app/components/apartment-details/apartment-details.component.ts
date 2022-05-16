import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApartmentService} from "../../services/apartment.service";
import {IApartments} from "../../interfaces";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css']
})
export class ApartmentDetailsComponent implements OnInit {
  apartment: IApartments;

  constructor(private activatedRoute: ActivatedRoute, private apartmentService: ApartmentService) {
    this.activatedRoute.params.subscribe(params => {
        console.log(params);
        let id = params['id']
        apartmentService.getById(id).subscribe(value => this.apartment = value)
      }
    )
  }

  ngOnInit(): void {
  }

}
