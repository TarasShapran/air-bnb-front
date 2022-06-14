import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {IApartments} from "../interfaces/apartments.interface";
import {urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  price:number;
  constructor(private httpClient: HttpClient) {
  }

  getAll(perPage = 0, page = 0, sortBy = 'createdAt',country='',city='',priceGte=0,priceLte =10000): Observable<IApartments[]> {
    const httpParams = new HttpParams({
      fromObject: {
        perPage,
        page,
        sortBy,
        country,
        city,
        priceGte,
        priceLte
      }
    })
    return this.httpClient.get<IApartments[]>(`${urls.apartments}`, {params: httpParams})
  }

  getById(id: string): Observable<IApartments> {
    return this.httpClient.get<IApartments>(`${urls.apartments}/`+id)
  }
}
