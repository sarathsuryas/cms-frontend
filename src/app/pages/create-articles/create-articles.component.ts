import { CommonModule } from '@angular/common';
import { Component,  NO_ERRORS_SCHEMA,  OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterModule } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ArticleService } from '../../services/article.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { ToasterComponent } from '../../components/toaster/toaster.component';


@Component({
  selector: 'app-create-articles',
  standalone: true,
  imports: [CommonModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule, 
    MatInputModule,
     MatIconModule,
     MatSelectModule,
     MatCardModule,
     MatCheckboxModule,
     FormsModule,
     ReactiveFormsModule,
     MatProgressSpinnerModule,
      NgxSpinnerModule,
      ToasterComponent
    ],
  templateUrl: './create-articles.component.html',
  styleUrl: './create-articles.component.css'
})
export class CreateArticlesComponent implements OnInit {
   file!:File
   @ViewChild(ToasterComponent) toaster!: ToasterComponent;
  constructor(
  private fb: FormBuilder,
  private _aricleService:ArticleService,
  private _router:Router,
  private spinner: NgxSpinnerService
) {}
  thumbnailPreview: string | ArrayBuffer | null = null;
  articleForm!: FormGroup;
  ngOnInit(): void {
    // this.articleForm = this.fb.group({
    //   title: ['', [Validators.required]],
    //   description: ['', [Validators.required]],
    //   content: ['', [Validators.required]],
    //   published: [false],
    // });
    this.articleForm = this.fb.group({
      title: [
        '', 
        [
          Validators.required,
          Validators.minLength(3), // Minimum 3 characters for a valid title
          Validators.maxLength(100), // Maximum 100 characters
          Validators.pattern(/^\S+(?: \S+)*$/) // Disallow leading/trailing whitespace
        ]
      ],
      description: [
        '', 
        [
          Validators.required,
          Validators.minLength(10), // Minimum 10 characters
          Validators.maxLength(300), // Maximum 300 characters
          Validators.pattern(/^\S+(?: \S+)*$/) // Disallow leading/trailing whitespace
        ]
      ],
      content: [
        '', 
        [
          Validators.required,
          Validators.minLength(50), // Minimum 50 characters
          Validators.pattern(/^\S+(?: \S+)*$/) // Disallow leading/trailing whitespace
        ]
      ],
      published: [false]
    });

  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    this.file = file as File
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.thumbnailPreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  onSubmit(): void {
    if (this.articleForm.valid) {
      this.spinner.show();
      this._aricleService.create(this.articleForm.value,this.file).subscribe({
        next:(value)=>{
          this.toaster.showSuccess("Upload Succcess")
           this._router.navigate(['home/articles'])
           this.spinner.hide()
           
        },
        error:(err)=>{
          this.spinner.hide()
          console.error(err)
        }
      })
    } else {
      console.log('Form is invalid');
    }
  } 

}
