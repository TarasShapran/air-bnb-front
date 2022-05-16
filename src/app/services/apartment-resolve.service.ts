import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IApartments} from "../interfaces";
import {Observable} from "rxjs";
import {ApartmentService} from "./apartment.service";

@Injectable({
  providedIn: 'root'
})
export class ApartmentResolveService implements Resolve<IApartments>{

  constructor(private apartmentService:ApartmentService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IApartments> | Promise<IApartments> | IApartments {
    console.log(route)
    return this.apartmentService.getById('62095b90510bf67c52f73e17');
  }
}
