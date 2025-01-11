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

  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<EditDialougueComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any) {
     console.log(data.thumbNailLink)
   }
   articleForm!: FormGroup;
   imagePreview: string | null = this.data.thumbNailLink
   file!:File
     ngOnInit(): void {
      this.articleForm = this.fb.group({
        title: [
          this.data.title, 
          [
            Validators.required,
            Validators.minLength(3), // Minimum 3 characters for a valid title
            Validators.maxLength(100), // Maximum 100 characters
            Validators.pattern(/^\S+(?: \S+)*$/) // Disallow leading/trailing whitespace
          ]
        ],
        description: [
          this.data.description, 
          [
            Validators.required,
            Validators.minLength(10), // Minimum 10 characters
            Validators.maxLength(300), // Maximum 300 characters
            Validators.pattern(/^\S+(?: \S+)*$/) // Disallow leading/trailing whitespace
          ]
        ],
        content: [
          this.data.content, 
          [
            Validators.required,
            Validators.minLength(50), // Minimum 50 characters
            Validators.pattern(/^\S+(?: \S+)*$/) // Disallow leading/trailing whitespace
          ]
        ],
      });
      
     }

     onFileChange(event: Event): void {
      const file = (event.target as HTMLInputElement)?.files?.[0];
      if (file) {
        this.file = file
        this.articleForm.patchValue({ image: file });
        this.articleForm.get('image')?.updateValueAndValidity();
  
        // Create a preview
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreview = reader.result as string;
        };
        reader.readAsDataURL(file);
      }
    }


     onSubmit() {
      if(this.articleForm.valid) {
        this.dialogRef.close({title:this.articleForm.controls['title'].value,description:this.articleForm.controls['description'].value,content:this.articleForm.controls['content'].value,thumbNail:this.file});
      
      }
      
     }  
}
