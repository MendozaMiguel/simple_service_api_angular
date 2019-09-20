import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './../data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }


  public createArticle(article: Article) {
    return this.httpClient.post(`${this.apiURL}/posts/`, article);
  }

  public updateArticle(article: Article) {
    return this.httpClient.put(`${this.apiURL}/posts/${article.id}`, article);
  }

  public deleteArticle(id: number) {
    return this.httpClient.delete(`${this.apiURL}/posts/${id}`);
  }

  public getArticleById(id: number) {
    return this.httpClient.get(`${this.apiURL}/posts/${id}`);
  }
}
