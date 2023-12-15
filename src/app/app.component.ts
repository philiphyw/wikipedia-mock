import { Component } from '@angular/core';
import { WikipediaService } from './services/wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wikipedia-mock';

  constructor(private wikipediaService:WikipediaService){}

  onSearchBarSubmit(value:string) {

    if(value){
     const result = this.wikipediaService.search(value);
    console.log(result);
    }
  }

}
