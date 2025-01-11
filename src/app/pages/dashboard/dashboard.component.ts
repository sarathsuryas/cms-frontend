import { AfterViewInit, Component, OnInit } from '@angular/core';
import { EditCardComponent } from "../../components/edit-card/edit-card.component";
import { ArticleService } from '../../services/article.service';
import { IArticle } from '../../interfaces/IArticle';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxLoadingComponent, NgxLoadingModule } from 'ngx-loading';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [EditCardComponent,CommonModule,RouterModule,NgxLoadingModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit {
  public articles:IArticle[] = []
  public loading = false
  constructor(private _articleService:ArticleService) {}
  ngAfterViewInit(): void {
     
  }
  ngOnInit(): void {
   this.loading = true
    this._articleService.getIndividualArticles().subscribe({
      next:(value)=>{
        this.loading = false
        this.articles = value
      },
      error:(err)=>{
        this.loading = false
        console.error(err)
      }
    })
  }
  delete(articleId:number) {
    this.loading = true
    this._articleService.deleteArticle(articleId).subscribe({
      next:(value)=>{
      this._articleService.getIndividualArticles().subscribe({
      next:(value)=>{
        this.loading = false
        this.articles = value
      },
      error:(err)=>{
        this.loading = false
        console.error(err)
      }
    })
      },
      error:(err)=>{
        this.loading = false
        console.error(err)
      }
    })
    
  }
  
}
