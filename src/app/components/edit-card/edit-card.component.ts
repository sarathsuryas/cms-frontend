import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { WordlimitPipe } from '../../pipes/wordlimit.pipe';
import { MatDialog } from '@angular/material/dialog';
import { EditDialougueComponent } from '../edit-dialougue/edit-dialougue.component';
import { ArticleService } from '../../services/article.service';
import { ToasterComponent } from '../toaster/toaster.component';

@Component({
  selector: 'app-edit-card',
  standalone: true,
  imports: [CommonModule,MatCardModule, MatButtonModule, WordlimitPipe,RouterModule,ToasterComponent],
  templateUrl: './edit-card.component.html',
  styleUrl: './edit-card.component.css'
})
export class EditCardComponent {
@ViewChild(ToasterComponent) toaster!: ToasterComponent;
@Input() title:string = '';
@Input() description: string = '';
@Input() thumbLink: string = '';
@Input() articleId:number = 0
@Input() content:string = ''
@Output() dataEmitter = new EventEmitter<number>();


constructor(public dialog: MatDialog,private _articleService:ArticleService) {}

openDialog() {
  
  const dialogRef = this.dialog.open(EditDialougueComponent,{
    data:{
     title:this.title,
     description:this.description,
     content:this.content,
     articleId:this.articleId
    }
  });

  dialogRef.afterClosed().subscribe(result => {
   this._articleService.editArticle(this.articleId,result).subscribe({
        next:(value)=>{
          this.title = value.title
          this.description = value.description
           this.toaster.showSuccess("success")
        },
        error:(err)=>{
          this.toaster.showError(err)
          console.error(err)
        }
      })

})
}

delete() {
  this.dataEmitter.emit(this.articleId)
}
 

}
