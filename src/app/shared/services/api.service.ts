import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { apiCatalogueDummyData } from '../data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getDummyAPIs(): Observable<any[]> {
    // Replace this with your actual API data retrieval logic
    return of(apiCatalogueDummyData);
  }
}
