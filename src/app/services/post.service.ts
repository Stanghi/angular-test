import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private urlTipologiche =
    'http://localhost:5000/api/tipologiche/getCuisinesList';

  private urlRestaurants =
    'http://localhost:5000/api/restaurant/getRestaurants/0/10';

  constructor(private http: HttpClient) {}

  getTipologiche() {
    return this.http.get(this.urlTipologiche);
  }

  getRestaurants() {
    return this.http.get(this.urlRestaurants);
  }
}
