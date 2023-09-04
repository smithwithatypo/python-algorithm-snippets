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


}
