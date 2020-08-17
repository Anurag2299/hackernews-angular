import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from './models/news.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  // private serviceUrl = 'https://hn.algolia.com/api/v1/search?tags=front_page';
  private serviceUrl = 'https://hn.algolia.com/api/v1/search?query=front_page&hitsPerPage=10&page=';
  constructor(private http: HttpClient) {}
 
  
  getNews(value){
    return this.http.get(this.serviceUrl+value);
  }

}
