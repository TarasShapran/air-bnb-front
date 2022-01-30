import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IApartments} from "../interfaces/apartments.interface";
import {urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<IApartments[]>{
    return this.httpClient.get<IApartments[]>(`${urls.apartments}`)
  }
}
