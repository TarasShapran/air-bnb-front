import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {IApartments} from "../interfaces/apartments.interface";
import {urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(perPage = 5, page = 1, sortBy = 'createdAt'): Observable<IApartments[]> {
    const httpParams = new HttpParams({
      fromObject: {
        perPage,
        page,
        sortBy,

      }
    })
    return this.httpClient.get<IApartments[]>(`${urls.apartments}`, {params: httpParams})
  }

  getById(id: string): Observable<IApartments> {
    return this.httpClient.get<IApartments>(`${urls.apartments}/`+id)
  }
}
