import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',loadComponent:()=>import("./pages/login-page/login-page.component").then((m) => m.LoginPageComponent)},
{path:'register',loadComponent:()=>import("./pages/resgistration-page/resgistration-page.component").then((m)=>m.RegistrationPageComponent)},
{path:'test',loadComponent:()=>import('./components/toaster/toaster.component').then((m)=> m.ToasterComponent
)},
{path:'home',loadComponent:()=>import('./pages/main/main.component').then((m)=>m.MainComponent),
    children: [
        {
          path: 'articles',
          loadComponent: () => import('./pages/articles/articles.component').then((m) => m.ArticlesComponent)
        },
        {
            path:'create',
            loadComponent:() => import('./pages/create-articles/create-articles.component').then((m)=>m.CreateArticlesComponent)
        },
       {
        path:'view/:id',
        loadComponent:()=> import('./pages/view-article/view-article.component').then((m)=>m.ViewArticleComponent)
       },
    //    {
    //     path:'dashboard',
    //     loadComponent:()=> import('./pages/dashboard/dashboard.component').then((m)=>m.DashboardComponent)
    //    }
     {
        path:'dashboard',component:DashboardComponent
     } 
      ]
},
{ path: '**', redirectTo: 'login'},
];
 