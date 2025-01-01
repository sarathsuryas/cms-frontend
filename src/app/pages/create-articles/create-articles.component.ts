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
   
    this.articleForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      content: ['', [Validators.required]],
      published: [false],
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
          console.error(err)
        }
      })
    } else {
      console.log('Form is invalid');
    }
  } 

}
