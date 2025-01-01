import { Injectable } from '@angular/core';
import { environment } from '../environment/environment.prod';
import { ArticleDto } from '../dtos/article.dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArticle } from '../interfaces/IArticle';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
 private api = `${environment.api}/article`
  constructor(private _http:HttpClient) { }
  create(dto:ArticleDto,file:File) {
    const formData = new FormData();
    formData.append('file', file); 
    formData.append('dto', JSON.stringify(dto)); 
  
    return this._http.post(`${this.api}/create`, formData);
  }
  getArticles():Observable<IArticle[]>{
    return this._http.get<IArticle[]>(`${this.api}/get-articles`)
  }
  viewArticle(id:number):Observable<IArticle> {
    return this._http.get<IArticle>(`${this.api}/view-article?articleId=${id}`)
  }
  getIndividualArticles():Observable<IArticle[]> {
    return this._http.get<IArticle[]>(`${this.api}/get-individual-articles`)
  }
  editArticle(articleId:number,data:any):Observable<IArticle> {
    return this._http.patch<IArticle>(`${this.api}/edit-article`,{articleId,data})
  }
  deleteArticle(articleId:number) {
    return this._http.delete(`${this.api}/${articleId}`);
  }
} 
 