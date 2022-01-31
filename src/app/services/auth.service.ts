import {Injectable} from '@angular/core';
import {HttpClient,  HttpHeaders} from "@angular/common/http";
import {DataTransferService} from "./data-transfer.service";
import {IAuth, IToken} from "../interfaces";
import {Observable} from "rxjs";
import {urls} from "../configs";
import {tap} from "rxjs/operators";
import {UserService} from "./user.service";
import {IRegister} from "../interfaces/register.user.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessTokenKey = 'access';
  private refreshTokenKey = 'refresh';

  constructor(private httpClient: HttpClient, private transferService: DataTransferService, private userService: UserService) {
  }

  login(user: IAuth): Observable<IToken> {
    return this.httpClient.post<IToken>(urls.auth, user)
      .pipe(
        tap((tokens: IToken) => {
          this.userService.getMe().subscribe(me => {
            this.transferService.currentUserSubject.next(me)
          })
          this.setTokens(tokens)
        })
      )
  }

  refreshToken(): Observable<IToken> {
    return this.httpClient.post<IToken>(`${urls.auth}/refresh`, {token:this.getRefreshToken()})
      .pipe(
        tap((token: IToken) => {
          this.setTokens(token)
        })
      )
  }

  isAuthenticated(): boolean {
    return !!this.getAccessToken()
  }

  private setAccessToken(access_token: string): void {
    localStorage.setItem(this.accessTokenKey, access_token)
  }

  private setRefreshToken(refresh_token: string): void {
    localStorage.setItem(this.refreshTokenKey, refresh_token)
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessTokenKey)
  }

  private getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenKey)
  }

  private setTokens(token: IToken): void {
    const {access_token, refresh_token} = token;
    this.setAccessToken(access_token)
    this.setRefreshToken(refresh_token)
  }
}
