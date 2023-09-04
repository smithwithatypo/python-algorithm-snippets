import { Component } from '@angular/core';
import { Snippet } from '../models/snippet';

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.css']
})
export class SnippetsComponent {
  data: Snippet[] = [];

  constructor() {
  this.data.push(new Snippet("code", "explanation", "use_case", new Set<string>(["category"])));
  
  }


}
