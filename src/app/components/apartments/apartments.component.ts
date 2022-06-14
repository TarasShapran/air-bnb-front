import {Component, OnInit, ViewChild} from '@angular/core';
import {IApartments} from "../../interfaces";
import {ApartmentService} from "../../services/apartment.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {
  private _allApartaments: IApartments[];

  apartments: IApartments[];
  form: FormGroup;
  orderByOptions: string[] = ['region', 'createdAt', "city"];
  country: string;
  city: string;
  minPrice: number
  maxPrice: number
  pageSize = 5;
  currentPage = 1;
  totalRows: 1;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private apartmentService: ApartmentService, private formBuilder: FormBuilder) {

  }


  ngOnInit(): void {
    this.loadData();
    // this.apartmentService.getAll().subscribe(value => {
    //   this.apartments = value
    // })
    this.form = this.formBuilder.group({
      orderBy: new FormControl('region', [Validators.required]),
      country: new FormControl(''),
      city: new FormControl(''),
      minPrice: new FormControl(0),
      maxPrice: new FormControl(10000),
    })
    this.form = this.formBuilder.group({
      orderBy: new FormControl('region', [Validators.required]),
      country: new FormControl(''),
      city: new FormControl(''),
      minPrice: new FormControl(0),
      maxPrice: new FormControl(10000),
    })
    this.form.valueChanges.subscribe(value => {
      this.apartmentService.getAll(this.pageSize, this.currentPage, value.orderBy, value.country, value.city, value.minPrice, value.maxPrice).subscribe(value => {
        this.apartments = value
      })
    })
  }

  loadData() {
    this.apartmentService.getAll(/*this.pageSize, this.currentPage, value.orderBy, value.country, value.city, value.minPrice, value.maxPrice*/).subscribe(value => {
      this._allApartaments = value;
      this.paginator.length = value.length;
      this._paginate();
    })
    // this.form.valueChanges.subscribe(value => {
    //
    // })
  }

  private _paginate() {
    this.apartments = this._allApartaments.slice(this.paginator.pageSize * this.paginator.pageIndex, this.paginator.pageSize * (this.paginator.pageIndex + 1));
  }

  pageChanged(event: PageEvent) {
    console.log({event})
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this._paginate();
  }
}
