import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter<string>();
  term: string = '';

  onInput(event: any): void {
    if(event.target.value) this.term = event.target.value;
    
  }

  onFormSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}
