import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { UserLocation } from '../models/userLocation.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly httpClient: HttpClient) {}

  /* This method need to map the Observable stream and then map 
  the final array for passing only the location data to the component */
  getUserData(): Observable<UserLocation[]> {
    return this.httpClient
      .get<any>('https://randomuser.me/api/?results=20')
      .pipe(map((data: any) => data.results.map((user: any) => user.location)));
  }
}
