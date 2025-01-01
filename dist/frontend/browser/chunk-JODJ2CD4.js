import{a as $}from"./chunk-PWRNR4PJ.js";import{a as Z}from"./chunk-JKZSEA6W.js";import{k as H,l as J,m as K,n as W,o as X,p as Y}from"./chunk-7ORCA72M.js";import{b as _}from"./chunk-ZJ72TYKT.js";import{b as j,d as u,f as D,g as G,h as V,j as c,k as Q,l as A,m as B,n as O,p as U,q as z}from"./chunk-FRLXEFVM.js";import"./chunk-XAZLOLJU.js";import{a as q,c as T}from"./chunk-QZK4JJ42.js";import{a as N,c as R,g as k}from"./chunk-IZSCQBLE.js";import{c as b,d as L,f as P}from"./chunk-RMMU5YDS.js";import"./chunk-I7QH563G.js";import{Fb as C,Fc as F,Ic as I,Mb as M,Nb as S,Ob as x,Qb as i,Ub as E,Ya as l,Za as f,ha as w,ob as g,qb as s,wb as t,xb as r,yb as p}from"./chunk-WEMSDPEI.js";function ee(e,d){e&1&&(t(0,"mat-error"),i(1,"Email is required!"),r())}function te(e,d){e&1&&(t(0,"mat-error"),i(1,"Enter a valid email address!"),r())}function re(e,d){e&1&&(t(0,"mat-error"),i(1,"Password is required!"),r())}function ie(e,d){e&1&&(t(0,"mat-error"),i(1," Password must be at least 6 characters long! "),r())}var Me=(()=>{class e{constructor(o,n){this._authService=o,this._router=n,this.loginForm=new V({email:new c("",[u.required,u.email]),password:new c("",[u.required,u.minLength(6)])})}ngOnInit(){typeof window<"u"&&localStorage.getItem("userToken")&&this._router.navigate(["home/articles"])}login(){this.loginForm.valid&&this._authService.login(this.loginForm.value).subscribe({next:o=>{localStorage.setItem("userToken",o.token),console.log(o),this._router.navigate(["home/articles"])},error:o=>{this.toaster.showError("User not exist please register"),console.log(o)}})}static{this.\u0275fac=function(n){return new(n||e)(f($),f(b))}}static{this.\u0275cmp=w({type:e,selectors:[["app-login-page"]],viewQuery:function(n,a){if(n&1&&M(_,5),n&2){let m;S(m=x())&&(a.toaster=m.first)}},standalone:!0,features:[E],decls:31,vars:5,consts:[[1,"bg-gray-400"],[1,"flex","justify-center","items-center","h-screen"],["color","primary",1,"shadow-emerald-100","w-[450px]"],[1,"flex","justify-center","p-4"],[3,"ngSubmit","formGroup"],[1,"w-full","mb-4"],[1,"w-full"],["matInput","","placeholder","***@gmail.com","formControlName","email","required",""],[4,"ngIf"],["matInput","","type","password","formControlName","password","required",""],[1,"flex","justify-center"],["mat-flat-button","","color","primary",1,"w-full"],[1,"flex","justify-center","p-5"],[1,"text-sm","font-light","text-gray-500","dark:text-gray-400"],["routerLink","/register",1,"font-medium","text-primary-600","hover:underline","dark:text-primary-500"]],template:function(n,a){if(n&1&&(p(0,"app-toaster"),t(1,"div",0)(2,"div",1)(3,"mat-card",2)(4,"div",3)(5,"h1"),i(6,"Login"),r()(),t(7,"mat-card-content")(8,"form",4),C("ngSubmit",function(){return a.login()}),t(9,"div",5)(10,"mat-form-field",6)(11,"mat-label"),i(12,"Email"),r(),p(13,"input",7),g(14,ee,2,0,"mat-error",8)(15,te,2,0,"mat-error",8),r()(),t(16,"div",5)(17,"mat-form-field")(18,"mat-label"),i(19,"Password"),r(),p(20,"input",9),g(21,re,2,0,"mat-error",8)(22,ie,2,0,"mat-error",8),r()(),t(23,"div",10)(24,"button",11),i(25,"Register"),r()()()(),t(26,"div",12)(27,"p",13),i(28," Don\u2019t have an account yet? "),t(29,"a",14),i(30,"Register"),r()()()()()()),n&2){let m,h,v,y;l(8),s("formGroup",a.loginForm),l(6),s("ngIf",(m=a.loginForm.get("email"))==null?null:m.hasError("required")),l(),s("ngIf",(h=a.loginForm.get("email"))==null?null:h.hasError("email")),l(6),s("ngIf",(v=a.loginForm.get("password"))==null?null:v.hasError("required")),l(),s("ngIf",(y=a.loginForm.get("password"))==null?null:y.hasError("minlength"))}},dependencies:[W,K,H,J,Y,X,Z,T,q,U,Q,j,D,G,O,z,A,B,k,N,R,I,F,P,L,_]})}}return e})();export{Me as LoginPageComponent};
