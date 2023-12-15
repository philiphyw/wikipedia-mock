import { Component } from '@angular/core';
import { WikipediaService } from './services/wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wikipedia-mock';
  page = [];
  constructor(private wikipediaService: WikipediaService) {}

  onSearchBarSubmit(value: string) {
    if (value) {
      this.wikipediaService.search(value).subscribe((res: any) => {
        this.page = res.query.search;
      });
    }
  }
}
