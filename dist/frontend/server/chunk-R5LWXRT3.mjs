import './polyfills.server.mjs';
import{a as A}from"./chunk-CRHYGTQT.mjs";import{a as w,b as y,c as I,e as S,f as x,g}from"./chunk-DHI3IYNT.mjs";import"./chunk-HFO3NBNJ.mjs";import{a as M,g as u}from"./chunk-NJYGYNSG.mjs";import"./chunk-VHAA3TJB.mjs";import{Nc as p,Ob as s,Pb as v,Qb as h,Sb as l,Ta as C,Wa as a,Xa as f,da as d,ob as m,ub as r,vb as n,wb as c}from"./chunk-6NV4FUQI.mjs";import"./chunk-VVCT4QZE.mjs";var b=(()=>{class t{constructor(){this.data={content:"",description:"",id:0,thumbNailLink:"",title:"",user:{email:"",id:0,profileImage:"",username:""},userId:0}}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=d({type:t,selectors:[["app-view-card"]],inputs:{data:"data"},standalone:!0,features:[l],decls:12,vars:4,consts:[[1,"m-10","shadow-emerald-900"],[1,"flex","justify-center"],[1,"mt-10","mb-10","flex","justify-center"],["mat-card-image","","alt","Photo of a Shiba Inu",3,"src"],[1,"flex","justify-end","mt-7"]],template:function(e,o){e&1&&(r(0,"mat-card",0)(1,"mat-card-header",1)(2,"mat-card-title"),s(3),n()(),r(4,"div",2),c(5,"img",3),n(),r(6,"mat-card-content")(7,"p"),s(8),n()(),r(9,"mat-card-content",4)(10,"mat-card-title"),s(11),n()()()),e&2&&(a(3),v(o.data.title),a(2),m("src",o.data.thumbNailLink||"https://placehold.co/600x400",C),a(3),v(o.data.content),a(3),h(" Author: ",o.data.user.username," "))},dependencies:[g,w,I,S,x,y,p,u]})}}return t})();var H=(()=>{class t{constructor(i,e){this.route=i,this.articleService=e}ngOnInit(){let i=this.route.snapshot.params.id;this.articleService.viewArticle(i).subscribe({next:e=>{this.Article=e},error:e=>{console.error(e)}})}static{this.\u0275fac=function(e){return new(e||t)(f(M),f(A))}}static{this.\u0275cmp=d({type:t,selectors:[["app-view-article"]],standalone:!0,features:[l],decls:2,vars:1,consts:[[3,"data"]],template:function(e,o){e&1&&(r(0,"div"),c(1,"app-view-card",0),n()),e&2&&(a(),m("data",o.Article))},dependencies:[b,p,u]})}}return t})();export{H as ViewArticleComponent};