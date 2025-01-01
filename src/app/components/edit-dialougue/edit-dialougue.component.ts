import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-edit-dialougue',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatDialogModule,MatCardModule,
       FormsModule,
       ReactiveFormsModule,
       MatFormFieldModule, 
           MatInputModule,
            MatIconModule
      ],
  templateUrl: './edit-dialougue.component.html',
  styleUrl: './edit-dialougue.component.css'
})
export class EditDialougueComponent {

   articleForm!: FormGroup;
   constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<EditDialougueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      
    }
     ngOnInit(): void {
       this.articleForm = this.fb.group({
         title: [this.data.title, [Validators.required]],
         description: [this.data.description, [Validators.required]],
         content: [this.data.content, [Validators.required]],
       });
     }
     onSubmit() {
      this.dialogRef.close({title:this.articleForm.controls['title'].value,description:this.articleForm.controls['description'].value,content:this.articleForm.controls['content'].value});
      
     }  
}
