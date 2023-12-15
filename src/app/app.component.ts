import { Component } from '@angular/core';
import { WikipediaService } from './services/wikipedia.service';
import { Page } from './shared/wikipedia.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wikipedia-mock';
  pages: Page[] =[];
  
  constructor(private wikipediaService: WikipediaService) {}

  onSearchBarSubmit(value: string) {
    if (value) {
      this.wikipediaService.search(value).subscribe((pages: Page[]) => {
        this.pages = pages;
      });
    }
  }
}
