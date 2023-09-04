import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Snippet } from '../models/snippet';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private dataUrl = '../../assets/data.json';
  constructor(private http: HttpClient) { }

  getData(): Observable<Snippet[]> {
    return this.http.get<{data: Snippet[]}>(this.dataUrl).pipe(
      map(response => response.data)
    );
  }
}
