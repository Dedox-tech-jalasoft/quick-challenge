import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly httpClient: HttpClient) {}

  getUserData(): Observable<any> {
    return this.httpClient.get<any>("https://randomuser.me/api/?results=20");
  }
}
