import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticleCardComponent } from "../../components/article-card/article-card.component";
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../services/article.service';
import { IArticle } from '../../interfaces/IArticle';
import { WordlimitPipe } from '../../pipes/wordlimit.pipe';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [RouterModule, ArticleCardComponent,CommonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit{
  public articles:IArticle[] = []
  constructor(private _articleService:ArticleService) {}
  ngOnInit(): void {
    this._articleService.getArticles().subscribe({
      next:(value)=> {
        this.articles = value
      },
      error:(err)=>{
        console.error(err)
      }
    })
  }
   
}
