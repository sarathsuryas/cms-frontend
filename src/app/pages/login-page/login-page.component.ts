import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ToasterComponent } from '../../components/toaster/toaster.component';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,MatButtonModule, FormsModule, ReactiveFormsModule,MatCardModule,CommonModule,RouterModule,ToasterComponent],
 
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{
  loginForm!:FormGroup
    @ViewChild(ToasterComponent) toaster!: ToasterComponent;
  
  constructor(private _authService:AuthService,private _router:Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)])
    });
  }
  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      // Check if the code is running in the browser
       if(localStorage.getItem('userToken')) {
        this._router.navigate(['home/articles'])
      }
    } 
    
  }
  login() {
    if(this.loginForm.valid) {
      this._authService.login(this.loginForm.value).subscribe({
        next:(value)=>{
          localStorage.setItem('userToken',value.token)
          console.log(value)
           this._router.navigate(['home/articles'])
        },
        error:(err)=>{
           this.toaster.showError("User not exist please register")
           console.log(err)
        }
      })
    }
  }
}
