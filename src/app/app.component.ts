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

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getTipologiche().subscribe((response: any) => {
      this.tipologiche = response;
    });

    this.service.getRestaurants().subscribe((response: any) => {
      this.restaurants = response.array;
      console.log(this.restaurants);
    });
  }
}
