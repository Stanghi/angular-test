import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-test';

  tipologiche: any;
  restaurants: any;
  restaurantsNumber: any;

  first: number = 1;
  rows: number = 11;

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getTipologiche().subscribe((response: any) => {
      this.tipologiche = response;
    });

    this.service
      .getRestaurants(this.first, this.rows)
      .subscribe((response: any) => {
        this.restaurants = response.array;
        this.restaurantsNumber = response.totalCount;
      });
  }

  onPageChange(event: any) {
    console.log(event);

    this.first = event.first;
    this.rows = event.rows;

    console.log(this.first, this.rows);

    this.service.getRestaurants(this.first, this.rows).subscribe((response) => {
      this.restaurants = response;
    });
  }
}
