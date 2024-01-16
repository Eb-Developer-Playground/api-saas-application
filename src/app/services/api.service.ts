import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

import { Api } from '../models';
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

  getApiDetails(apiId: number): Observable<Api | undefined> {
    return of(apiCatalogueDummyData).pipe(
      map(apiList => apiList.find(api => api.id === apiId))
    );
  }
}
