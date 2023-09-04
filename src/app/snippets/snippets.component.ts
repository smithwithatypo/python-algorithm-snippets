import { Component } from '@angular/core';
import { Snippet } from '../models/snippet';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.css']
})
export class SnippetsComponent {
  data: Snippet[] = [];

  constructor( private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => this.data = data);
  }



}
