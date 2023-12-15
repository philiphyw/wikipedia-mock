import { Component, Input } from '@angular/core';
import { Page } from 'src/app/shared/wikipedia.model';


@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
@Input() pages:Page[] =[];

}
