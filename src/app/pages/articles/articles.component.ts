import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticleCardComponent } from "../../components/article-card/article-card.component";
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../services/article.service';
import { IArticle } from '../../interfaces/IArticle';
import { WordlimitPipe } from '../../pipes/wordlimit.pipe';
import { NgxLoadingModule } from 'ngx-loading';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [RouterModule, ArticleCardComponent, CommonModule, NgxLoadingModule, InfiniteScrollDirective],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit {
  public articles: IArticle[] = []
  public loading = false
  page: number = 1; 
  limit: number = 6; 
  constructor(private _articleService: ArticleService) { }
  ngOnInit(): void {
    this.loading = true
    this.loadArticle()
  }

  loadArticle() {
    this._articleService.getArticles(this.page, this.limit).subscribe({
      next: (value) => {
        this.articles = [...this.articles, ...value];
        this.page++;
        this.loading = false
      },
      error: (err) => {
        this.loading = false
        console.error(err)
      }
    })
  }

  onScroll() {
    this.loadArticle();
  }

}
