import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { IArticle } from '../../interfaces/IArticle';
interface Article {
  content:string;
  thumbNailLink:string;
  title:string;
  author:string;
}
@Component({
  selector: 'app-view-card',
  standalone: true,
  imports: [MatCardModule,CommonModule,RouterModule],
  templateUrl: './view-card.component.html',
  styleUrl: './view-card.component.css'
})
export class ViewCardComponent {
  @Input() data:IArticle = {content:'',description:'',id:0,thumbNailLink:'',title:'',user:{email:'',id:0,profileImage:'',username:''},userId:0}
   
} 
