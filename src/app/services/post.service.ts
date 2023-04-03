import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private urlTipologiche =
    'http://localhost:5000/api/tipologiche/getCuisinesList';

  constructor(private httpclient: HttpClient) {}

  getTipologiche() {
    return this.httpclient.get(this.urlTipologiche);
  }

  getRestaurants(first: number = 0, rows: number = 10) {
    return this.httpclient.get(
      `http://localhost:5000/api/restaurant/getRestaurants/${first}/${rows}`
    );
  }
}
