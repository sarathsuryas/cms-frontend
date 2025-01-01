import { AfterViewInit, Component, OnInit } from '@angular/core';
import { EditCardComponent } from "../../components/edit-card/edit-card.component";
import { ArticleService } from '../../services/article.service';
import { IArticle } from '../../interfaces/IArticle';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [EditCardComponent,CommonModule,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit {
  public articles:IArticle[] = []
  constructor(private _articleService:ArticleService) {}
  ngAfterViewInit(): void {
     
  }
  ngOnInit(): void {

    this._articleService.getIndividualArticles().subscribe({
      next:(value)=>{
        this.articles = value
      },
      error:(err)=>{
        console.error(err)
      }
    })
  }
  delete(articleId:number) {
    this._articleService.deleteArticle(articleId).subscribe({
      next:(value)=>{
      this._articleService.getIndividualArticles().subscribe({
      next:(value)=>{
        this.articles = value
      },
      error:(err)=>{
        console.error(err)
      }
    })
      }
    })
    
  }
  
}
