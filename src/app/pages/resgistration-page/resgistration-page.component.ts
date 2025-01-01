import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToasterComponent } from '../../components/toaster/toaster.component';

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,MatButtonModule, FormsModule, ReactiveFormsModule,MatCardModule,CommonModule,RouterModule,ToasterComponent],
  templateUrl: './resgistration-page.component.html',
  styleUrl: './resgistration-page.component.css'
})
export class RegistrationPageComponent {
  @ViewChild(ToasterComponent) toaster!: ToasterComponent;
   registerForm!:FormGroup
     constructor(private _authService:AuthService,private _router:Router) {
       this.registerForm = new FormGroup({
         username: new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z]+$')]),
         email: new FormControl('',[Validators.required,Validators.email]),
         password: new FormControl('',[Validators.required,Validators.minLength(6)])
       });
     
     }
     register() {
      if(this.registerForm.valid) {
        this._authService.register(this.registerForm.value).subscribe({
          next:(value)=>{
            if(value.token) {
              localStorage.setItem('userToken',value.token)
              this.toaster.showSuccess("Registration Done")
              this._router.navigate(['home/articles'])
            } 
          },
          error:(err)=>{
            console.error(err)
            this.toaster.showError("user is Exist please login")
          }
        })
      }
      }
}
