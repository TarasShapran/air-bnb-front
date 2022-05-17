import {Component, Input, OnInit} from '@angular/core';
import {IApartments} from "../../../interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {
  @Input()
  apartment: IApartments

  constructor() {
  }

  ngOnInit(): void {
  }
}
