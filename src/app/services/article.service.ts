import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { ArticleDto } from '../dtos/article.dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArticle } from '../interfaces/IArticle';
import { API_URLS } from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private _http:HttpClient) { }
  create(dto:ArticleDto,file:File) {
    const formData = new FormData();
    formData.append('file', file); 
    formData.append('dto', JSON.stringify(dto)); 
  
    return this._http.post(API_URLS.ARTICLE.CREATE, formData);
  }
  getArticles(page:number,limit:number):Observable<IArticle[]>{
    return this._http.get<IArticle[]>(`${API_URLS.ARTICLE.GET_ARTICLES}?page=${page}&limit=${limit}`)
  }
  viewArticle(id:number):Observable<IArticle> {
    return this._http.get<IArticle>(`${API_URLS.ARTICLE.VIEW_ARTICLE}?articleId=${id}`)
  }
  getIndividualArticles():Observable<IArticle[]> {
    return this._http.get<IArticle[]>(API_URLS.ARTICLE.GET_INDIVIDUAL_ARTICLES)
  }
  editArticle(articleId: number, data: any): Observable<IArticle> {
    const formData = new FormData();
    formData.append('articleId', articleId.toString());
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('content', data.content);
    
    if (data.thumbNail) {
      formData.append('thumbNail', data.thumbNail);
    }
  
    return this._http.patch<IArticle>(API_URLS.ARTICLE.EDIT_ARTICLE, formData);
  }
  
  deleteArticle(articleId:number) {
    return this._http.delete(`${API_URLS.ARTICLE.DELETE_ARTICLE}/${articleId}`);
  }
} 
 