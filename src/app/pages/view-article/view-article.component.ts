import { Component } from '@angular/core';
import { ViewCardComponent } from "../../components/view-card/view-card.component";
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { IArticle } from '../../interfaces/IArticle';

@Component({
  selector: 'app-view-article',
  standalone: true,
  imports: [ViewCardComponent,CommonModule,RouterModule],
  templateUrl: './view-article.component.html',
  styleUrl: './view-article.component.css'
})
export class ViewArticleComponent {
Article!:IArticle
constructor(private route: ActivatedRoute,private articleService:ArticleService) {}
ngOnInit() {
  const id = this.route.snapshot.params['id']; // Correct way
  this.articleService.viewArticle(id).subscribe({
    next:(data)=>{
      // console.log(data)
      this.Article = data
    },
    error:(err)=>{
      console.error(err)
    }
  })
}
}
