import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IRegister, IUser} from "../interfaces";
import {urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }
  register(user:IRegister):Observable<IRegister>{
    return this.httpClient.post<IRegister>(`${urls.users}`,user)

  }
  getMe():Observable<IUser>{
    return this.httpClient.get<IUser>(`${urls.users}/me`)
  }
  getAll():Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(`${urls.users}`)
  }
}
