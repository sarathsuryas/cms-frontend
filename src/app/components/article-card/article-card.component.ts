import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { WordlimitPipe } from '../../pipes/wordlimit.pipe';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule,MatCardModule, MatButtonModule, WordlimitPipe,RouterModule],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css'
})
export class ArticleCardComponent {
@Input() title:string = '';
@Input() description: string = '';
@Input() thumbLink: string = '';
@Input() articleId:number = 0
}
