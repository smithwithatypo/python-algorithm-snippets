import { Component } from '@angular/core';
import { Snippet } from '../models/snippet';
import { data_source } from '../../assets/data';

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.css']
})
export class SnippetsComponent {
  data: Snippet[] = [];

  constructor( ) { 
    this.data = data_source;
  }

  applyFilter(event: KeyboardEvent) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.data = data_source.filter((item) => {
      return item.categories.some(category => category.toLowerCase().includes(inputValue.toLowerCase()));
    });

  }

}
