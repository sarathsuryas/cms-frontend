import './polyfills.server.mjs';
import{a as Ui,b as Gi}from"./chunk-LAUYF2PE.mjs";import{r as je,s as Bt,t as Vi,u as We}from"./chunk-NFH35OA3.mjs";import{b as ji,c as Wi}from"./chunk-PPEY33HQ.mjs";import{B as Bi,C as He,E as zi,F as Hi,J as Qi,a as At,j as Ai,k as Z,l as qt,p as Mi,q as Di,r as Fi,s as Ri,t as $i,u as Ni,w as Pi,y as st}from"./chunk-HFO3NBNJ.mjs";import{b as Ti,d as Ii,e as Oi,g as Li}from"./chunk-NJYGYNSG.mjs";import{a as Ci}from"./chunk-VHAA3TJB.mjs";import{c as Ei,d as Ne,f as Pe,g as Be,h as ze}from"./chunk-J4BDXTMW.mjs";import{A as si,Ab as Ot,C as Oe,Ca as Ft,Cb as bi,D as Le,Da as Qt,Db as pt,E as li,Eb as fi,Fb as N,Gb as P,Hb as _,Ic as wi,Jb as F,Jc as xi,Kb as Pt,Kc as yi,Lb as L,Lc as ki,Mb as A,Mc as $e,N as Ae,Nb as De,Nc as at,Ob as rt,P as mt,Pb as Lt,Qc as be,Rb as B,Rc as Si,Sb as T,T as pe,Tb as Fe,U as I,V as W,Wa as w,X as vt,Xa as p,Z as ci,Za as hi,_ as g,a as ri,bb as pi,da as S,db as ht,ea as V,f as q,fa as M,gb as Rt,hb as O,ib as $t,jc as bt,ma as Dt,mb as G,n as Ie,na as wt,nb as R,oa as xt,ob as x,pa as Me,pb as kt,pc as z,qb as $,qc as _i,ra as v,rb as ui,rc as Re,sb as St,sc as vi,ta as di,tb as Nt,tc as Kt,u as ai,ub as f,v as he,va as yt,vb as E,w as It,wa as U,wb as J,xa as gt,xb as ue,ya as mi,yb as ge,zb as gi,zc as X}from"./chunk-6NV4FUQI.mjs";import{a as D}from"./chunk-VVCT4QZE.mjs";var oo=["*",[["mat-toolbar-row"]]],ro=["*","mat-toolbar-row"],ao=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=M({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"],standalone:!0})}}return t})(),qi=(()=>{class t{constructor(e,i,n){this._elementRef=e,this._platform=i,this._document=n}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static{this.\u0275fac=function(i){return new(i||t)(p(U),p(At),p(X))}}static{this.\u0275cmp=S({type:t,selectors:[["mat-toolbar"]],contentQueries:function(i,n,o){if(i&1&&F(o,ao,5),i&2){let r;L(r=A())&&(n._toolbarRows=r)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,n){i&2&&(St(n.color?"mat-"+n.color:""),$("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],standalone:!0,features:[T],ngContentSelectors:ro,decls:2,vars:0,template:function(i,n){i&1&&(P(oo),_(0),_(1,1))},styles:[".mat-toolbar{background:var(--mat-toolbar-container-background-color);color:var(--mat-toolbar-container-text-color)}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font);font-size:var(--mat-toolbar-title-text-size);line-height:var(--mat-toolbar-title-text-line-height);font-weight:var(--mat-toolbar-title-text-weight);letter-spacing:var(--mat-toolbar-title-text-tracking);margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color);--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color)}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}"],encapsulation:2,changeDetection:0})}}return t})();var Zi=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=V({type:t})}static{this.\u0275inj=W({imports:[st,st]})}}return t})();var ve=["*"],co=["content"],mo=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],ho=["mat-drawer","mat-drawer-content","*"];function po(t,a){if(t&1){let e=Ot();f(0,"div",1),pt("click",function(){wt(e);let n=N();return xt(n._onBackdropClicked())}),E()}if(t&2){let e=N();$("mat-drawer-shown",e._isShowingBackdrop())}}function uo(t,a){t&1&&(f(0,"mat-drawer-content"),_(1,2),E())}var go=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],bo=["mat-sidenav","mat-sidenav-content","*"];function fo(t,a){if(t&1){let e=Ot();f(0,"div",1),pt("click",function(){wt(e);let n=N();return xt(n._onBackdropClicked())}),E()}if(t&2){let e=N();$("mat-drawer-shown",e._isShowingBackdrop())}}function _o(t,a){t&1&&(f(0,"mat-sidenav-content"),_(1,2),E())}var vo='.mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color);background-color:var(--mat-sidenav-content-background-color);box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color)}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color);box-shadow:var(--mat-sidenav-container-elevation-shadow);background-color:var(--mat-sidenav-container-background-color);border-top-right-radius:var(--mat-sidenav-container-shape);border-bottom-right-radius:var(--mat-sidenav-container-shape);width:var(--mat-sidenav-container-width);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape);border-bottom-left-radius:var(--mat-sidenav-container-shape);border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape);border-bottom-left-radius:var(--mat-sidenav-container-shape);border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape);border-bottom-right-radius:var(--mat-sidenav-container-shape);border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*="visibility: hidden"]{display:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}',Yi={transformDrawer:Ei("transform",[Be("open, open-instant",Pe({transform:"none",visibility:"visible"})),Be("void",Pe({"box-shadow":"none",visibility:"hidden"})),ze("void => open-instant",Ne("0ms")),ze("void <=> open, open-instant => void",Ne("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"))])};var wo=new vt("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:xo}),Ve=new vt("MAT_DRAWER_CONTAINER");function xo(){return!1}var fe=(()=>{class t extends Bt{constructor(e,i,n,o,r){super(n,o,r),this._changeDetectorRef=e,this._container=i}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}static{this.\u0275fac=function(i){return new(i||t)(p(bt),p(pe(()=>Xi)),p(U),p(je),p(ht))}}static{this.\u0275cmp=S({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:4,hostBindings:function(i,n){i&2&&kt("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px")},standalone:!0,features:[B([{provide:Bt,useExisting:t}]),O,T],ngContentSelectors:ve,decls:1,vars:0,template:function(i,n){i&1&&(P(),_(0))},encapsulation:2,changeDetection:0})}}return t})(),Ji=(()=>{class t{get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=Z(e)}get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=Z(e)),this._autoFocus=e}get opened(){return this._opened}set opened(e){this.toggle(Z(e))}constructor(e,i,n,o,r,s,c,d){this._elementRef=e,this._focusTrapFactory=i,this._focusMonitor=n,this._platform=o,this._ngZone=r,this._interactivityChecker=s,this._doc=c,this._container=d,this._focusTrap=null,this._elementFocusedBeforeDrawerWasOpened=null,this._enableAnimations=!1,this._position="start",this._mode="over",this._disableClose=!1,this._opened=!1,this._animationStarted=new q,this._animationEnd=new q,this._animationState="void",this.openedChange=new gt(!0),this._openedStream=this.openedChange.pipe(It(l=>l),Ie(()=>{})),this.openedStart=this._animationStarted.pipe(It(l=>l.fromState!==l.toState&&l.toState.indexOf("open")===0),Le(void 0)),this._closedStream=this.openedChange.pipe(It(l=>!l),Ie(()=>{})),this.closedStart=this._animationStarted.pipe(It(l=>l.fromState!==l.toState&&l.toState==="void"),Le(void 0)),this._destroyed=new q,this.onPositionChanged=new gt,this._modeChanged=new q,this.openedChange.subscribe(l=>{l?(this._doc&&(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement),this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._ngZone.runOutsideAngular(()=>{ai(this._elementRef.nativeElement,"keydown").pipe(It(l=>l.keyCode===27&&!this.disableClose&&!Ai(l)),mt(this._destroyed)).subscribe(l=>this._ngZone.run(()=>{this.close(),l.stopPropagation(),l.preventDefault()}))}),this._animationEnd.pipe(li((l,m)=>l.fromState===m.fromState&&l.toState===m.toState)).subscribe(l=>{let{fromState:m,toState:u}=l;(u.indexOf("open")===0&&m==="void"||u==="void"&&m.indexOf("open")===0)&&this.openedChange.emit(this._opened)})}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{e.removeEventListener("blur",n),e.removeEventListener("mousedown",n),e.removeAttribute("tabindex")};e.addEventListener("blur",n),e.addEventListener("mousedown",n)})),e.focus(i)}_focusByCssSelector(e,i){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,i)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(i=>{!i&&typeof this._elementRef.nativeElement.focus=="function"&&e.focus()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngAfterContentChecked(){this._platform.isBrowser&&(this._enableAnimations=!0)}ngOnDestroy(){this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,i){e&&i&&(this._openedVia=i);let n=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),n}_setOpen(e,i,n){return this._opened=e,e?this._animationState=this._enableAnimations?"open":"open-instant":(this._animationState="void",i&&this._restoreFocus(n)),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(Oe(1)).subscribe(r=>o(r?"open":"close"))})}_getWidth(){return this._elementRef.nativeElement&&this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=!!this._container?.hasBackdrop)}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,n=i.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),n.insertBefore(this._anchor,i)),n.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}static{this.\u0275fac=function(i){return new(i||t)(p(U),p($i),p(Ni),p(At),p(ht),p(Ri),p(X,8),p(Ve,8))}}static{this.\u0275cmp=S({type:t,selectors:[["mat-drawer"]],viewQuery:function(i,n){if(i&1&&Pt(co,5),i&2){let o;L(o=A())&&(n._content=o.first)}},hostAttrs:["tabIndex","-1",1,"mat-drawer"],hostVars:12,hostBindings:function(i,n){i&1&&fi("@transform.start",function(r){return n._animationStarted.next(r)})("@transform.done",function(r){return n._animationEnd.next(r)}),i&2&&(bi("@transform",n._animationState),R("align",null),$("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-drawer-opened",n.opened))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],standalone:!0,features:[T],ngContentSelectors:ve,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,n){i&1&&(P(),f(0,"div",1,0),_(2),E())},dependencies:[Bt],encapsulation:2,data:{animation:[Yi.transformDrawer]},changeDetection:0})}}return t})(),Xi=(()=>{class t{get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=Z(e)}get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:Z(e)}get scrollable(){return this._userContent||this._content}constructor(e,i,n,o,r,s=!1,c){this._dir=e,this._element=i,this._ngZone=n,this._changeDetectorRef=o,this._animationMode=c,this._drawers=new mi,this.backdropClick=new gt,this._destroyed=new q,this._doCheckSubject=new q,this._contentMargins={left:null,right:null},this._contentMarginChanges=new q,e&&e.change.pipe(mt(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),r.change().pipe(mt(this._destroyed)).subscribe(()=>this.updateContentMargins()),this._autosize=s}ngAfterContentInit(){this._allDrawers.changes.pipe(Ae(this._allDrawers),mt(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Ae(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(si(10),mt(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let n=this._left._getWidth();e+=n,i-=n}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let n=this._right._getWidth();i+=n,e-=n}}e=e||null,i=i||null,(e!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:e,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(It(i=>i.fromState!==i.toState),mt(this._drawers.changes)).subscribe(i=>{i.toState!=="open-instant"&&this._animationMode!=="NoopAnimations"&&this._element.nativeElement.classList.add("mat-drawer-transition"),this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(mt(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e&&e.onPositionChanged.pipe(mt(this._drawers.changes)).subscribe(()=>{this._ngZone.onMicrotaskEmpty.pipe(Oe(1)).subscribe(()=>{this._validateDrawers()})})}_watchDrawerMode(e){e&&e._modeChanged.pipe(mt(he(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let i=this._element.nativeElement.classList,n="mat-drawer-container-has-open";e?i.add(n):i.remove(n)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static{this.\u0275fac=function(i){return new(i||t)(p(Pi,8),p(U),p(ht),p(bt),p(Vi),p(wo),p(Qt,8))}}static{this.\u0275cmp=S({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(i,n,o){if(i&1&&(F(o,fe,5),F(o,Ji,5)),i&2){let r;L(r=A())&&(n._content=r.first),L(r=A())&&(n._allDrawers=r)}},viewQuery:function(i,n){if(i&1&&Pt(fe,5),i&2){let o;L(o=A())&&(n._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,n){i&2&&$("mat-drawer-container-explicit-backdrop",n._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],standalone:!0,features:[B([{provide:Ve,useExisting:t}]),T],ngContentSelectors:ho,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,n){i&1&&(P(mo),G(0,po,1,2,"div",0),_(1),_(2,1),G(3,uo,2,0,"mat-drawer-content")),i&2&&(Nt(0,n.hasBackdrop?0:-1),w(3),Nt(3,n._content?-1:3))},dependencies:[fe],styles:['.mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color);background-color:var(--mat-sidenav-content-background-color);box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color)}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color);box-shadow:var(--mat-sidenav-container-elevation-shadow);background-color:var(--mat-sidenav-container-background-color);border-top-right-radius:var(--mat-sidenav-container-shape);border-bottom-right-radius:var(--mat-sidenav-container-shape);width:var(--mat-sidenav-container-width);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape);border-bottom-left-radius:var(--mat-sidenav-container-shape);border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape);border-bottom-left-radius:var(--mat-sidenav-container-shape);border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape);border-bottom-right-radius:var(--mat-sidenav-container-shape);border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*="visibility: hidden"]{display:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}'],encapsulation:2,changeDetection:0})}}return t})(),_e=(()=>{class t extends fe{constructor(e,i,n,o,r){super(e,i,n,o,r)}static{this.\u0275fac=function(i){return new(i||t)(p(bt),p(pe(()=>Ge)),p(U),p(je),p(ht))}}static{this.\u0275cmp=S({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],hostVars:4,hostBindings:function(i,n){i&2&&kt("margin-left",n._container._contentMargins.left,"px")("margin-right",n._container._contentMargins.right,"px")},standalone:!0,features:[B([{provide:Bt,useExisting:t}]),O,T],ngContentSelectors:ve,decls:1,vars:0,template:function(i,n){i&1&&(P(),_(0))},encapsulation:2,changeDetection:0})}}return t})(),Ue=(()=>{class t extends Ji{constructor(){super(...arguments),this._fixedInViewport=!1,this._fixedTopGap=0,this._fixedBottomGap=0}get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=Z(e)}get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=qt(e)}get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=qt(e)}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})()}static{this.\u0275cmp=S({type:t,selectors:[["mat-sidenav"]],hostAttrs:["tabIndex","-1",1,"mat-drawer","mat-sidenav"],hostVars:17,hostBindings:function(i,n){i&2&&(R("align",null),kt("top",n.fixedInViewport?n.fixedTopGap:null,"px")("bottom",n.fixedInViewport?n.fixedBottomGap:null,"px"),$("mat-drawer-end",n.position==="end")("mat-drawer-over",n.mode==="over")("mat-drawer-push",n.mode==="push")("mat-drawer-side",n.mode==="side")("mat-drawer-opened",n.opened)("mat-sidenav-fixed",n.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],standalone:!0,features:[O,T],ngContentSelectors:ve,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,n){i&1&&(P(),f(0,"div",1,0),_(2),E())},dependencies:[Bt],encapsulation:2,data:{animation:[Yi.transformDrawer]},changeDetection:0})}}return t})(),Ge=(()=>{class t extends Xi{constructor(){super(...arguments),this._allDrawers=void 0,this._content=void 0}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})()}static{this.\u0275cmp=S({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(i,n,o){if(i&1&&(F(o,_e,5),F(o,Ue,5)),i&2){let r;L(r=A())&&(n._content=r.first),L(r=A())&&(n._allDrawers=r)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(i,n){i&2&&$("mat-drawer-container-explicit-backdrop",n._backdropOverride)},exportAs:["matSidenavContainer"],standalone:!0,features:[B([{provide:Ve,useExisting:t}]),O,T],ngContentSelectors:bo,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,n){i&1&&(P(go),G(0,fo,1,2,"div",0),_(1),_(2,1),G(3,_o,2,0,"mat-sidenav-content")),i&2&&(Nt(0,n.hasBackdrop?0:-1),w(3),Nt(3,n._content?-1:3))},dependencies:[_e],styles:[vo],encapsulation:2,changeDetection:0})}}return t})(),tn=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=V({type:t})}static{this.\u0275inj=W({imports:[st,We,We,st]})}}return t})();function en(t,a){return t?t.classList?t.classList.contains(a):new RegExp("(^| )"+a+"( |$)","gi").test(t.className):!1}function we(t,a){if(t&&a){let e=i=>{en(t,i)||(t.classList?t.classList.add(i):t.className+=" "+i)};[a].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(e))}}function zt(t,a){if(t&&a){let e=i=>{t.classList?t.classList.remove(i):t.className=t.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," ")};[a].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(e))}}function nn(t,a){if(t instanceof HTMLElement){let e=t.offsetWidth;if(a){let i=getComputedStyle(t);e+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return e}return 0}function on(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function Qe(t,a={}){if(on(t)){let e=(i,n)=>{var o,r;let s=(o=t?.$attrs)!=null&&o[i]?[(r=t?.$attrs)==null?void 0:r[i]]:[];return[n].flat().reduce((c,d)=>{if(d!=null){let l=typeof d;if(l==="string"||l==="number")c.push(d);else if(l==="object"){let m=Array.isArray(d)?e(i,d):Object.entries(d).map(([u,h])=>i==="style"&&(h||h===0)?`${u.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?u:void 0);c=m.length?c.concat(m.filter(u=>!!u)):c}}return c},s)};Object.entries(a).forEach(([i,n])=>{if(n!=null){let o=i.match(/^on(.+)/);o?t.addEventListener(o[1].toLowerCase(),n):i==="p-bind"||i==="pBind"?Qe(t,n):(n=i==="class"?[...new Set(e("class",n))].join(" ").trim():i==="style"?e("style",n).join(";").trim():n,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=n),t.setAttribute(i,n))}})}}function Ke(t){if(t){let a=t.offsetHeight,e=getComputedStyle(t);return a-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),a}return 0}function rn(t){if(t){let a=t.getBoundingClientRect();return{top:a.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:a.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function an(t,a){if(t){let e=t.offsetHeight;if(a){let i=getComputedStyle(t);e+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return e}return 0}function qe(t){if(t){let a=t.offsetWidth,e=getComputedStyle(t);return a-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),a}return 0}function sn(t){var a;t&&("remove"in Element.prototype?t.remove():(a=t.parentNode)==null||a.removeChild(t))}function ln(t,a="",e){on(t)&&e!==null&&e!==void 0&&t.setAttribute(a,e)}function cn(){let t=new Map;return{on(a,e){let i=t.get(a);return i?i.push(e):i=[e],t.set(a,i),this},off(a,e){let i=t.get(a);return i&&i.splice(i.indexOf(e)>>>0,1),this},emit(a,e){let i=t.get(a);i&&i.slice().map(n=>{n(e)})},clear(){t.clear()}}}function et(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function ko(t){return!!(t&&t.constructor&&t.call&&t.apply)}function C(t){return!et(t)}function ft(t,a=!0){return t instanceof Object&&t.constructor===Object&&(a||Object.keys(t).length!==0)}function tt(t,...a){return ko(t)?t(...a):t}function Ct(t,a=!0){return typeof t=="string"&&(a||t!=="")}function dn(t){return Ct(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function xe(t,a="",e={}){let i=dn(a).split("."),n=i.shift();return n?ft(t)?xe(tt(t[Object.keys(t).find(o=>dn(o)===n)||""],e),i.join("."),e):void 0:tt(t,e)}function ye(t,a=!0){return Array.isArray(t)&&(a||t.length!==0)}function mn(t){return C(t)&&!isNaN(t)}function Y(t,a){if(a){let e=a.test(t);return a.lastIndex=0,e}return!1}function Mt(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function ke(t){return Ct(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(a,e)=>e===0?a:"-"+a.toLowerCase()).toLowerCase():t}function Ze(t){return Ct(t)?t.replace(/[A-Z]/g,(a,e)=>e===0?a:"."+a.toLowerCase()).toLowerCase():t}var Se={};function Zt(t="pui_id_"){return Se.hasOwnProperty(t)||(Se[t]=0),Se[t]++,`${t}${Se[t]}`}function So(){let t=[],a=(r,s,c=999)=>{let d=n(r,s,c),l=d.value+(d.key===r?0:c)+1;return t.push({key:r,value:l}),l},e=r=>{t=t.filter(s=>s.value!==r)},i=(r,s)=>n(r,s).value,n=(r,s,c=0)=>[...t].reverse().find(d=>s?!0:d.key===r)||{key:r,value:c},o=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:o,set:(r,s,c)=>{s&&(s.style.zIndex=String(a(r,!0,c)))},clear:r=>{r&&(e(o(r)),r.style.zIndex="")},getCurrent:r=>i(r,!0)}}var ca=So();var j=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var hn=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(i){return new(i||t)(p(hi))};static \u0275dir=M({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]},standalone:!0})}return t})(),Et=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=W({imports:[at]})}return t})();var Co=Object.defineProperty,Eo=Object.defineProperties,To=Object.getOwnPropertyDescriptors,Ee=Object.getOwnPropertySymbols,gn=Object.prototype.hasOwnProperty,bn=Object.prototype.propertyIsEnumerable,pn=(t,a,e)=>a in t?Co(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,ct=(t,a)=>{for(var e in a||(a={}))gn.call(a,e)&&pn(t,e,a[e]);if(Ee)for(var e of Ee(a))bn.call(a,e)&&pn(t,e,a[e]);return t},Ye=(t,a)=>Eo(t,To(a)),_t=(t,a)=>{var e={};for(var i in t)gn.call(t,i)&&a.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&Ee)for(var i of Ee(t))a.indexOf(i)<0&&bn.call(t,i)&&(e[i]=t[i]);return e};var Io=cn(),it=Io;function un(t,a){ye(t)?t.push(...a||[]):ft(t)&&Object.assign(t,a)}function Oo(t){return ft(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function Lo(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Je(t="",a=""){return Lo(`${Ct(t,!1)&&Ct(a,!1)?`${t}-`:t}${a}`)}function fn(t="",a=""){return`--${Je(t,a)}`}function Ao(t=""){let a=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(a+e)%2!==0}function _n(t,a="",e="",i=[],n){if(Ct(t)){let o=/{([^}]*)}/g,r=t.trim();if(Ao(r))return;if(Y(r,o)){let s=r.replaceAll(o,l=>{let u=l.replace(/{|}/g,"").split(".").filter(h=>!i.some(b=>Y(h,b)));return`var(${fn(e,ke(u.join("-")))}${C(n)?`, ${n}`:""})`}),c=/(\d+\s+[\+\-\*\/]\s+\d+)/g,d=/var\([^)]+\)/g;return Y(s.replace(d,"0"),c)?`calc(${s})`:s}return r}else if(mn(t))return t}function Mo(t,a,e){Ct(a,!1)&&t.push(`${a}:${e};`)}function Ht(t,a){return t?`${t}{${a}}`:""}var jt=(...t)=>Do(y.getTheme(),...t),Do=(t={},a,e,i)=>{if(a){let{variable:n,options:o}=y.defaults||{},{prefix:r,transform:s}=t?.options||o||{},d=Y(a,/{([^}]*)}/g)?a:`{${a}}`;return i==="value"||et(i)&&s==="strict"?y.getTokenValue(a):_n(d,void 0,r,[n.excludedKeyRegex],e)}return""};function Fo(t,a={}){let e=y.defaults.variable,{prefix:i=e.prefix,selector:n=e.selector,excludedKeyRegex:o=e.excludedKeyRegex}=a,r=(d,l="")=>Object.entries(d).reduce((m,[u,h])=>{let b=Y(u,o)?Je(l):Je(l,ke(u)),k=Oo(h);if(ft(k)){let{variables:nt,tokens:dt}=r(k,b);un(m.tokens,dt),un(m.variables,nt)}else m.tokens.push((i?b.replace(`${i}-`,""):b).replaceAll("-",".")),Mo(m.variables,fn(b),_n(k,b,i,[o]));return m},{variables:[],tokens:[]}),{variables:s,tokens:c}=r(t,i);return{value:s,tokens:c,declarations:s.join(""),css:Ht(n,s.join(""))}}var lt={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let a=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var i;return(i=a.map(n=>n.resolve(e)).find(n=>n.matched))!=null?i:this.rules.custom.resolve(e)})}},_toVariables(t,a){return Fo(t,{prefix:a?.prefix})},getCommon({name:t="",theme:a={},params:e,set:i,defaults:n}){var o,r,s,c,d,l,m;let{preset:u,options:h}=a,b,k,nt,dt,K,Tt,ot;if(C(u)&&h.transform!=="strict"){let{primitive:Yt,semantic:Jt,extend:Xt}=u,Vt=Jt||{},{colorScheme:te}=Vt,ee=_t(Vt,["colorScheme"]),ie=Xt||{},{colorScheme:ne}=ie,Ut=_t(ie,["colorScheme"]),Gt=te||{},{dark:oe}=Gt,re=_t(Gt,["dark"]),ae=ne||{},{dark:se}=ae,le=_t(ae,["dark"]),ce=C(Yt)?this._toVariables({primitive:Yt},h):{},de=C(ee)?this._toVariables({semantic:ee},h):{},me=C(re)?this._toVariables({light:re},h):{},ei=C(oe)?this._toVariables({dark:oe},h):{},ii=C(Ut)?this._toVariables({semantic:Ut},h):{},ni=C(le)?this._toVariables({light:le},h):{},oi=C(se)?this._toVariables({dark:se},h):{},[zn,Hn]=[(o=ce.declarations)!=null?o:"",ce.tokens],[jn,Wn]=[(r=de.declarations)!=null?r:"",de.tokens||[]],[Vn,Un]=[(s=me.declarations)!=null?s:"",me.tokens||[]],[Gn,Qn]=[(c=ei.declarations)!=null?c:"",ei.tokens||[]],[Kn,qn]=[(d=ii.declarations)!=null?d:"",ii.tokens||[]],[Zn,Yn]=[(l=ni.declarations)!=null?l:"",ni.tokens||[]],[Jn,Xn]=[(m=oi.declarations)!=null?m:"",oi.tokens||[]];b=this.transformCSS(t,zn,"light","variable",h,i,n),k=Hn;let to=this.transformCSS(t,`${jn}${Vn}`,"light","variable",h,i,n),eo=this.transformCSS(t,`${Gn}`,"dark","variable",h,i,n);nt=`${to}${eo}`,dt=[...new Set([...Wn,...Un,...Qn])];let io=this.transformCSS(t,`${Kn}${Zn}color-scheme:light`,"light","variable",h,i,n),no=this.transformCSS(t,`${Jn}color-scheme:dark`,"dark","variable",h,i,n);K=`${io}${no}`,Tt=[...new Set([...qn,...Yn,...Xn])],ot=tt(u.css,{dt:jt})}return{primitive:{css:b,tokens:k},semantic:{css:nt,tokens:dt},global:{css:K,tokens:Tt},style:ot}},getPreset({name:t="",preset:a={},options:e,params:i,set:n,defaults:o,selector:r}){var s,c,d;let l,m,u;if(C(a)&&e.transform!=="strict"){let h=t.replace("-directive",""),b=a,{colorScheme:k,extend:nt,css:dt}=b,K=_t(b,["colorScheme","extend","css"]),Tt=nt||{},{colorScheme:ot}=Tt,Yt=_t(Tt,["colorScheme"]),Jt=k||{},{dark:Xt}=Jt,Vt=_t(Jt,["dark"]),te=ot||{},{dark:ee}=te,ie=_t(te,["dark"]),ne=C(K)?this._toVariables({[h]:ct(ct({},K),Yt)},e):{},Ut=C(Vt)?this._toVariables({[h]:ct(ct({},Vt),ie)},e):{},Gt=C(Xt)?this._toVariables({[h]:ct(ct({},Xt),ee)},e):{},[oe,re]=[(s=ne.declarations)!=null?s:"",ne.tokens||[]],[ae,se]=[(c=Ut.declarations)!=null?c:"",Ut.tokens||[]],[le,ce]=[(d=Gt.declarations)!=null?d:"",Gt.tokens||[]],de=this.transformCSS(h,`${oe}${ae}`,"light","variable",e,n,o,r),me=this.transformCSS(h,le,"dark","variable",e,n,o,r);l=`${de}${me}`,m=[...new Set([...re,...se,...ce])],u=tt(dt,{dt:jt})}return{css:l,tokens:m,style:u}},getPresetC({name:t="",theme:a={},params:e,set:i,defaults:n}){var o;let{preset:r,options:s}=a,c=(o=r?.components)==null?void 0:o[t];return this.getPreset({name:t,preset:c,options:s,params:e,set:i,defaults:n})},getPresetD({name:t="",theme:a={},params:e,set:i,defaults:n}){var o;let r=t.replace("-directive",""),{preset:s,options:c}=a,d=(o=s?.directives)==null?void 0:o[r];return this.getPreset({name:r,preset:d,options:c,params:e,set:i,defaults:n})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,a){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?a.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:a.options.darkModeSelector):[]},getLayerOrder(t,a={},e,i){let{cssLayer:n}=a;return n?`@layer ${tt(n.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:a={},params:e,props:i={},set:n,defaults:o}){let r=this.getCommon({name:t,theme:a,params:e,set:n,defaults:o}),s=Object.entries(i).reduce((c,[d,l])=>c.push(`${d}="${l}"`)&&c,[]).join(" ");return Object.entries(r||{}).reduce((c,[d,l])=>{if(l?.css){let m=Mt(l?.css),u=`${d}-variables`;c.push(`<style type="text/css" data-primevue-style-id="${u}" ${s}>${m}</style>`)}return c},[]).join("")},getStyleSheet({name:t="",theme:a={},params:e,props:i={},set:n,defaults:o}){var r;let s={name:t,theme:a,params:e,set:n,defaults:o},c=(r=t.includes("-directive")?this.getPresetD(s):this.getPresetC(s))==null?void 0:r.css,d=Object.entries(i).reduce((l,[m,u])=>l.push(`${m}="${u}"`)&&l,[]).join(" ");return c?`<style type="text/css" data-primevue-style-id="${t}-variables" ${d}>${Mt(c)}</style>`:""},createTokens(t={},a,e="",i="",n={}){return Object.entries(t).forEach(([o,r])=>{let s=Y(o,a.variable.excludedKeyRegex)?e:e?`${e}.${Ze(o)}`:Ze(o),c=i?`${i}.${o}`:o;ft(r)?this.createTokens(r,a,s,c,n):(n[s]||(n[s]={paths:[],computed(d,l={}){var m,u;return this.paths.length===1?(m=this.paths[0])==null?void 0:m.computed(this.paths[0].scheme,l.binding):d&&d!=="none"?(u=this.paths.find(h=>h.scheme===d))==null?void 0:u.computed(d,l.binding):this.paths.map(h=>h.computed(h.scheme,l[h.scheme]))}}),n[s].paths.push({path:c,value:r,scheme:c.includes("colorScheme.light")?"light":c.includes("colorScheme.dark")?"dark":"none",computed(d,l={}){let m=/{([^}]*)}/g,u=r;if(l.name=this.path,l.binding||(l.binding={}),Y(r,m)){let b=r.trim().replaceAll(m,dt=>{var K;let Tt=dt.replace(/{|}/g,""),ot=(K=n[Tt])==null?void 0:K.computed(d,l);return ye(ot)&&ot.length===2?`light-dark(${ot[0].value},${ot[1].value})`:ot?.value}),k=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,nt=/var\([^)]+\)/g;u=Y(b.replace(nt,"0"),k)?`calc(${b})`:b}return et(l.binding)&&delete l.binding,{colorScheme:d,path:this.path,paths:l,value:u.includes("undefined")?void 0:u}}}))}),n},getTokenValue(t,a,e){var i;let o=(c=>c.split(".").filter(l=>!Y(l.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(a),r=a.includes("colorScheme.light")?"light":a.includes("colorScheme.dark")?"dark":void 0,s=[(i=t[o])==null?void 0:i.computed(r)].flat().filter(c=>c);return s.length===1?s[0].value:s.reduce((c={},d)=>{let l=d,{colorScheme:m}=l,u=_t(l,["colorScheme"]);return c[m]=u,c},void 0)},getSelectorRule(t,a,e,i){return e==="class"||e==="attr"?Ht(C(a)?`${t}${a},${t} ${a}`:t,i):Ht(t,C(a)?Ht(a,i):i)},transformCSS(t,a,e,i,n={},o,r,s){if(C(a)){let{cssLayer:c}=n;if(i!=="style"){let d=this.getColorSchemeOption(n,r);a=e==="dark"?d.reduce((l,{type:m,selector:u})=>(C(u)&&(l+=u.includes("[CSS]")?u.replace("[CSS]",a):this.getSelectorRule(u,s,m,a)),l),""):Ht(s??":root",a)}if(c){let d={name:"primeui",order:"primeui"};ft(c)&&(d.name=tt(c.name,{name:t,type:i})),C(d.name)&&(a=Ht(`@layer ${d.name}`,a),o?.layerNames(d.name))}return a}return""}},y={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:a}=t;a&&(this._theme=Ye(ct({},a),{options:ct(ct({},this.defaults.options),a.options)}),this._tokens=lt.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),it.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Ye(ct({},this.theme),{preset:t}),this._tokens=lt.createTokens(t,this.defaults),this.clearLoadedStyleNames(),it.emit("preset:change",t),it.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Ye(ct({},this.theme),{options:t}),this.clearLoadedStyleNames(),it.emit("options:change",t),it.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return lt.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",a){return lt.getCommon({name:t,theme:this.theme,params:a,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",a){let e={name:t,theme:this.theme,params:a,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return lt.getPresetC(e)},getDirective(t="",a){let e={name:t,theme:this.theme,params:a,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return lt.getPresetD(e)},getCustomPreset(t="",a,e,i){let n={name:t,preset:a,options:this.options,selector:e,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return lt.getPreset(n)},getLayerOrderCSS(t=""){return lt.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",a,e="style",i){return lt.transformCSS(t,a,i,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",a,e={}){return lt.getCommonStyleSheet({name:t,theme:this.theme,params:a,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,a,e={}){return lt.getStyleSheet({name:t,theme:this.theme,params:a,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:a}){this._loadingStyles.size&&(this._loadingStyles.delete(a),it.emit(`theme:${a}:load`,t),!this._loadingStyles.size&&it.emit("theme:load"))}};var Ro=0,vn=(()=>{class t{document=g(X);use(e,i={}){let n=!1,o=e,r=null,{immediate:s=!0,manual:c=!1,name:d=`style_${++Ro}`,id:l=void 0,media:m=void 0,nonce:u=void 0,first:h=!1,props:b={}}=i;if(this.document){if(r=this.document.querySelector(`style[data-primeng-style-id="${d}"]`)||l&&this.document.getElementById(l)||this.document.createElement("style"),!r.isConnected){o=e,Qe(r,{type:"text/css",media:m,nonce:u});let k=this.document.head;h&&k.firstChild?k.insertBefore(r,k.firstChild):k.appendChild(r),ln(r,"data-primeng-style-id",d)}return r.textContent!==o&&(r.textContent=o),{id:l,name:d,el:r,css:o}}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Wt={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},$o=({dt:t})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,No=({dt:t})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${t("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Q=(()=>{class t{name="base";useStyle=g(vn);theme=$o;css=No;classes={};inlineStyles={};load=(e,i={},n=o=>o)=>{let o=n(tt(e,{dt:jt}));return o?this.useStyle.use(Mt(o),D({name:this.name},i)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},i="")=>this.load(this.theme,e,(n="")=>y.transformCSS(e.name||this.name,`${n}${i}`));getCommonTheme=e=>y.getCommon(this.name,e);getComponentTheme=e=>y.getComponent(this.name,e);getDirectiveTheme=e=>y.getDirective(this.name,e);getPresetTheme=(e,i,n)=>y.getCustomPreset(this.name,e,i,n);getLayerOrderThemeCSS=()=>y.getLayerOrderCSS(this.name);getStyleSheet=(e="",i={})=>{if(this.css){let n=tt(this.css,{dt:jt}),o=Mt(`${n}${e}`),r=Object.entries(i).reduce((s,[c,d])=>s.push(`${c}="${d}"`)&&s,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${r}>${o}</style>`}return""};getCommonThemeStyleSheet=(e,i={})=>y.getCommonStyleSheet(this.name,e,i);getThemeStyleSheet=(e,i={})=>{let n=[y.getStyleSheet(this.name,e,i)];if(this.theme){let o=this.name==="base"?"global-style":`${this.name}-style`,r=tt(this.theme,{dt:jt}),s=Mt(y.transformCSS(o,r)),c=Object.entries(i).reduce((d,[l,m])=>d.push(`${l}="${m}"`)&&d,[]).join(" ");n.push(`<style type="text/css" data-primeng-style-id="${o}" ${c}>${s}</style>`)}return n.join("")};static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Po=(()=>{class t{theme=Rt(void 0);isThemeChanged=!1;document=g(X);baseStyle=g(Q);constructor(){Kt(()=>{it.on("theme:change",e=>{vi(()=>{this.isThemeChanged=!0,this.theme.set(e)})})},{allowSignalWrites:!0}),Kt(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){y.clearLoadedStyleNames(),it.clear()}onThemeChange(e){y.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!y.isStyleNameLoaded("common")){let{primitive:e,semantic:i,global:n,style:o}=this.baseStyle.getCommonTheme?.()||{},r={nonce:void 0};this.baseStyle.load(e?.css,D({name:"primitive-variables"},r)),this.baseStyle.load(i?.css,D({name:"semantic-variables"},r)),this.baseStyle.load(n?.css,D({name:"global-variables"},r)),this.baseStyle.loadTheme(D({name:"global-style"},r),o),y.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:i}=e||{};i&&this.theme.set(i)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),wn=(()=>{class t extends Po{ripple=Rt(!1);platformId=g(Ft);inputStyle=Rt("outlined");inputVariant=Rt("outlined");overlayOptions={};csp=Rt({nonce:void 0});filterMatchModeOptions={text:[j.STARTS_WITH,j.CONTAINS,j.NOT_CONTAINS,j.ENDS_WITH,j.EQUALS,j.NOT_EQUALS],numeric:[j.EQUALS,j.NOT_EQUALS,j.LESS_THAN,j.LESS_THAN_OR_EQUAL_TO,j.GREATER_THAN,j.GREATER_THAN_OR_EQUAL_TO],date:[j.DATE_IS,j.DATE_IS_NOT,j.DATE_BEFORE,j.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new q;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=D(D({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:i,ripple:n,inputStyle:o,theme:r,overlayOptions:s,translation:c}=e||{};i&&this.csp.set(i),n&&this.ripple.set(n),o&&this.inputStyle.set(o),s&&(this.overlayOptions=s),c&&this.setTranslation(c),r&&this.setThemeConfig({theme:r})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ns=new vt("PRIME_NG_CONFIG");var xn=(()=>{class t extends Q{name="common";static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ut=(()=>{class t{document=g(X);platformId=g(Ft);el=g(U);injector=g(di);cd=g(bt);renderer=g(pi);config=g(wn);baseComponentStyle=g(xn);baseStyle=g(Q);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Zt("pc");_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,i="",n={}){return xe(e,i,n)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!Si(this.platformId)){let{dt:i}=e;i&&i.currentValue&&(this._loadScopedThemeStyles(i.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(i.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles()}_loadStyles(){let e=()=>{Wt.isStyleNameLoaded("base")||(this.baseStyle.loadCSS(this.styleOptions),Wt.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!Wt.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Wt.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!y.isStyleNameLoaded("common")){let{primitive:e,semantic:i,global:n,style:o}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,D({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(i?.css,D({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(n?.css,D({name:"global-variables"},this.styleOptions)),this.baseStyle.loadTheme(D({name:"global-style"},this.styleOptions),o),y.setLoadedStyleName("common")}if(!y.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:i}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,D({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(D({name:`${this.componentStyle?.name}-style`},this.styleOptions),i),y.setLoadedStyleName(this.componentStyle?.name)}if(!y.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,D({name:"layer-order",first:!0},this.styleOptions)),y.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:i}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},n=this.componentStyle?.load(i,D({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=n?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){Wt.clearLoadedStyleNames(),it.on("theme:change",e)}cx(e,i){let n=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:e}sx(e){let i=this.componentStyle?.inlineStyles?.[e];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:D({},i)}get parent(){return this.parentInstance}static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,inputs:{dt:"dt"},standalone:!0,features:[B([xn,Q]),Dt]})}return t})();var yn=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,i){e&&i&&(e.classList?e.classList.add(i):e.className+=" "+i)}static addMultipleClasses(e,i){if(e&&i)if(e.classList){let n=i.trim().split(" ");for(let o=0;o<n.length;o++)e.classList.add(n[o])}else{let n=i.split(" ");for(let o=0;o<n.length;o++)e.className+=" "+n[o]}}static removeClass(e,i){e&&i&&(e.classList?e.classList.remove(i):e.className=e.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,i){e&&i&&[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(o=>this.removeClass(e,o)))}static hasClass(e,i){return e&&i?e.classList?e.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(i){return i!==e})}static find(e,i){return Array.from(e.querySelectorAll(i))}static findSingle(e,i){return this.isElement(e)?e.querySelector(i):null}static index(e){let i=e.parentNode.childNodes,n=0;for(var o=0;o<i.length;o++){if(i[o]==e)return n;i[o].nodeType==1&&n++}return-1}static indexWithinGroup(e,i){let n=e.parentNode?e.parentNode.childNodes:[],o=0;for(var r=0;r<n.length;r++){if(n[r]==e)return o;n[r].attributes&&n[r].attributes[i]&&n[r].nodeType==1&&o++}return-1}static appendOverlay(e,i,n="self"){n!=="self"&&e&&i&&this.appendChild(e,i)}static alignOverlay(e,i,n="self",o=!0){e&&i&&(o&&(e.style.minWidth=`${t.getOuterWidth(i)}px`),n==="self"?this.relativePosition(e,i):this.absolutePosition(e,i))}static relativePosition(e,i,n=!0){let o=K=>{if(K)return getComputedStyle(K).getPropertyValue("position")==="relative"?K:o(K.parentElement)},r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=i.offsetHeight,c=i.getBoundingClientRect(),d=this.getWindowScrollTop(),l=this.getWindowScrollLeft(),m=this.getViewport(),h=o(e)?.getBoundingClientRect()||{top:-1*d,left:-1*l},b,k;c.top+s+r.height>m.height?(b=c.top-h.top-r.height,e.style.transformOrigin="bottom",c.top+b<0&&(b=-1*c.top)):(b=s+c.top-h.top,e.style.transformOrigin="top");let nt=c.left+r.width-m.width,dt=c.left-h.left;r.width>m.width?k=(c.left-h.left)*-1:nt>0?k=dt-nt:k=c.left-h.left,e.style.top=b+"px",e.style.left=k+"px",n&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,i,n=!0){let o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),r=o.height,s=o.width,c=i.offsetHeight,d=i.offsetWidth,l=i.getBoundingClientRect(),m=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),h=this.getViewport(),b,k;l.top+c+r>h.height?(b=l.top+m-r,e.style.transformOrigin="bottom",b<0&&(b=m)):(b=c+l.top+m,e.style.transformOrigin="top"),l.left+s>h.width?k=Math.max(0,l.left+u+d-s):k=l.left+u,e.style.top=b+"px",e.style.left=k+"px",n&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,i=[]){return e.parentNode===null?i:this.getParents(e.parentNode,i.concat([e.parentNode]))}static getScrollableParents(e){let i=[];if(e){let n=this.getParents(e),o=/(auto|scroll)/,r=s=>{let c=window.getComputedStyle(s,null);return o.test(c.getPropertyValue("overflow"))||o.test(c.getPropertyValue("overflowX"))||o.test(c.getPropertyValue("overflowY"))};for(let s of n){let c=s.nodeType===1&&s.dataset.scrollselectors;if(c){let d=c.split(",");for(let l of d){let m=this.findSingle(s,l);m&&r(m)&&i.push(m)}}s.nodeType!==9&&r(s)&&i.push(s)}}return i}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",i}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",i}static getHiddenElementDimensions(e){let i={};return e.style.visibility="hidden",e.style.display="block",i.width=e.offsetWidth,i.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",i}static scrollInView(e,i){let n=getComputedStyle(e).getPropertyValue("borderTopWidth"),o=n?parseFloat(n):0,r=getComputedStyle(e).getPropertyValue("paddingTop"),s=r?parseFloat(r):0,c=e.getBoundingClientRect(),l=i.getBoundingClientRect().top+document.body.scrollTop-(c.top+document.body.scrollTop)-o-s,m=e.scrollTop,u=e.clientHeight,h=this.getOuterHeight(i);l<0?e.scrollTop=m+l:l+h>u&&(e.scrollTop=m+l-u+h)}static fadeIn(e,i){e.style.opacity=0;let n=+new Date,o=0,r=function(){o=+e.style.opacity.replace(",",".")+(new Date().getTime()-n)/i,e.style.opacity=o,n=+new Date,+o<1&&(window.requestAnimationFrame&&requestAnimationFrame(r)||setTimeout(r,16))};r()}static fadeOut(e,i){var n=1,o=50,r=i,s=o/r;let c=setInterval(()=>{n=n-s,n<=0&&(n=0,clearInterval(c)),e.style.opacity=n},o)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,i){var n=Element.prototype,o=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(r){return[].indexOf.call(document.querySelectorAll(r),this)!==-1};return o.call(e,i)}static getOuterWidth(e,i){let n=e.offsetWidth;if(i){let o=getComputedStyle(e);n+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return n}static getHorizontalPadding(e){let i=getComputedStyle(e);return parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)}static getHorizontalMargin(e){let i=getComputedStyle(e);return parseFloat(i.marginLeft)+parseFloat(i.marginRight)}static innerWidth(e){let i=e.offsetWidth,n=getComputedStyle(e);return i+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),i}static width(e){let i=e.offsetWidth,n=getComputedStyle(e);return i-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),i}static getInnerHeight(e){let i=e.offsetHeight,n=getComputedStyle(e);return i+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),i}static getOuterHeight(e,i){let n=e.offsetHeight;if(i){let o=getComputedStyle(e);n+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return n}static getHeight(e){let i=e.offsetHeight,n=getComputedStyle(e);return i-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),i}static getWidth(e){let i=e.offsetWidth,n=getComputedStyle(e);return i-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),i}static getViewport(){let e=window,i=document,n=i.documentElement,o=i.getElementsByTagName("body")[0],r=e.innerWidth||n.clientWidth||o.clientWidth,s=e.innerHeight||n.clientHeight||o.clientHeight;return{width:r,height:s}}static getOffset(e){var i=e.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,i){let n=e.parentNode;if(!n)throw"Can't replace element";return n.replaceChild(i,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,i=e.indexOf("MSIE ");if(i>0)return!0;var n=e.indexOf("Trident/");if(n>0){var o=e.indexOf("rv:");return!0}var r=e.indexOf("Edge/");return r>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,i){if(this.isElement(i))i.appendChild(e);else if(i&&i.el&&i.el.nativeElement)i.el.nativeElement.appendChild(e);else throw"Cannot append "+i+" to "+e}static removeChild(e,i){if(this.isElement(i))i.removeChild(e);else if(i.el&&i.el.nativeElement)i.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+i}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let i=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let i=document.createElement("div");i.className="p-scrollbar-measure",document.body.appendChild(i);let n=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let i=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=i,i}static invokeElementMethod(e,i,n){e[i].apply(e,n)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),i=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:i[1]||"",version:i[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,i){e&&document.activeElement!==e&&e.focus(i)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,i=""){let n=this.find(e,this.getFocusableSelectorString(i)),o=[];for(let r of n){let s=getComputedStyle(r);this.isVisible(r)&&s.display!="none"&&s.visibility!="hidden"&&o.push(r)}return o}static getFocusableElement(e,i=""){let n=this.findSingle(e,this.getFocusableSelectorString(i));if(n){let o=getComputedStyle(n);if(this.isVisible(n)&&o.display!="none"&&o.visibility!="hidden")return n}return null}static getFirstFocusableElement(e,i=""){let n=this.getFocusableElements(e,i);return n.length>0?n[0]:null}static getLastFocusableElement(e,i){let n=this.getFocusableElements(e,i);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(e,i=!1){let n=t.getFocusableElements(e),o=0;if(n&&n.length>0){let r=n.indexOf(n[0].ownerDocument.activeElement);i?r==-1||r===0?o=n.length-1:o=r-1:r!=-1&&r!==n.length-1&&(o=r+1)}return n[o]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,i){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return i?.parentElement.parentElement;default:let n=typeof e;if(n==="string")return document.querySelector(e);if(n==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let r=(s=>!!(s&&s.constructor&&s.call&&s.apply))(e)?e():e;return r&&r.nodeType===9||this.isExist(r)?r:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,i){if(e){let n=e.getAttribute(i);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,i={},...n){if(e){let o=document.createElement(e);return this.setAttributes(o,i),o.append(...n),o}}static setAttribute(e,i="",n){this.isElement(e)&&n!==null&&n!==void 0&&e.setAttribute(i,n)}static setAttributes(e,i={}){if(this.isElement(e)){let n=(o,r)=>{let s=e?.$attrs?.[o]?[e?.$attrs?.[o]]:[];return[r].flat().reduce((c,d)=>{if(d!=null){let l=typeof d;if(l==="string"||l==="number")c.push(d);else if(l==="object"){let m=Array.isArray(d)?n(o,d):Object.entries(d).map(([u,h])=>o==="style"&&(h||h===0)?`${u.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?u:void 0);c=m.length?c.concat(m.filter(u=>!!u)):c}}return c},s)};Object.entries(i).forEach(([o,r])=>{if(r!=null){let s=o.match(/^on(.+)/);s?e.addEventListener(s[1].toLowerCase(),r):o==="pBind"?this.setAttributes(e,r):(r=o==="class"?[...new Set(n("class",r))].join(" ").trim():o==="style"?n("style",r).join(";").trim():r,(e.$attrs=e.$attrs||{})&&(e.$attrs[o]=r),e.setAttribute(o,r))}})}}static isFocusableElement(e,i=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`):!1}}return t})();var kn=(()=>{class t extends ut{autofocus=!1;_autofocus=!1;focused=!1;platformId=g(Ft);document=g(X);host=g(U);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){be(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=yn.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275dir=M({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",z],_autofocus:[0,"pAutoFocus","_autofocus"]},standalone:!0,features:[$t,O]})}return t})();var Bo=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,zo={root:({props:t,instance:a})=>["p-badge p-component",{"p-badge-circle":C(t.value)&&String(t.value).length===1,"p-badge-dot":et(t.value)&&!a.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},Sn=(()=>{class t extends Q{name="badge";theme=Bo;classes=zo;static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var ti=(()=>{class t extends ut{styleClass=yt();style=yt();badgeSize=yt();size=yt();severity=yt();value=yt();badgeDisabled=yt(!1,{transform:z});_componentStyle=g(Sn);containerClass=Re(()=>{let e="p-badge p-component";return C(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),et(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=S({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(i,n){i&2&&(ui(n.style()),St(n.containerClass()),kt("display",n.badgeDisabled()&&"none"))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},standalone:!0,features:[B([Sn]),O,T],decls:1,vars:1,template:function(i,n){i&1&&rt(0),i&2&&Lt(n.value())},dependencies:[at,Et],encapsulation:2,changeDetection:0})}return t})(),Cn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=W({imports:[ti,Et,Et]})}return t})();var jo=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Wo=(()=>{class t extends Q{name="baseicon";inlineStyles=jo;static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var Vo=["*"],En=(()=>{class t extends ut{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=et(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=S({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",z],styleClass:"styleClass"},standalone:!0,features:[B([Wo]),$t,O,T],ngContentSelectors:Vo,decls:1,vars:0,template:function(i,n){i&1&&(P(),_(0))},encapsulation:2,changeDetection:0})}return t})();var Tn=(()=>{class t extends En{pathId;ngOnInit(){this.pathId="url(#"+Zt()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=S({type:t,selectors:[["SpinnerIcon"]],standalone:!0,features:[O,T],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(Me(),f(0,"svg",0)(1,"g"),J(2,"path",1),E(),f(3,"defs")(4,"clipPath",2),J(5,"rect",3),E()()()),i&2&&(St(n.getClassNames()),R("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),w(),R("clip-path",n.pathId),w(3),x("id",n.pathId))},encapsulation:2})}return t})();var Uo=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Go={root:"p-ink"},In=(()=>{class t extends Q{name="ripple";theme=Uo;classes=Go;static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var On=(()=>{class t extends ut{zone=g(ht);_componentStyle=g(In);animationListener;mouseDownListener;timeout;constructor(){super(),Kt(()=>{be(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let i=this.getInk();if(!i||this.document.defaultView?.getComputedStyle(i,null).display==="none")return;if(zt(i,"p-ink-active"),!Ke(i)&&!qe(i)){let s=Math.max(nn(this.el.nativeElement),an(this.el.nativeElement));i.style.height=s+"px",i.style.width=s+"px"}let n=rn(this.el.nativeElement),o=e.pageX-n.left+this.document.body.scrollTop-qe(i)/2,r=e.pageY-n.top+this.document.body.scrollLeft-Ke(i)/2;this.renderer.setStyle(i,"top",r+"px"),this.renderer.setStyle(i,"left",o+"px"),we(i,"p-ink-active"),this.timeout=setTimeout(()=>{let s=this.getInk();s&&zt(s,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let i=0;i<e.length;i++)if(typeof e[i].className=="string"&&e[i].className.indexOf("p-ink")!==-1)return e[i];return null}resetInk(){let e=this.getInk();e&&zt(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),zt(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,sn(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=M({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],standalone:!0,features:[B([In]),O]})}return t})();var Ko=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,qo={root:({instance:t,props:a})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!a.label&&!a.badge,"p-button-vertical":(a.iconPos==="top"||a.iconPos==="bottom")&&a.label,"p-button-loading":a.loading,"p-button-link":a.link,[`p-button-${a.severity}`]:a.severity,"p-button-raised":a.raised,"p-button-rounded":a.rounded,"p-button-text":a.text,"p-button-outlined":a.outlined,"p-button-sm":a.size==="small","p-button-lg":a.size==="large","p-button-plain":a.plain,"p-button-fluid":a.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},Ln=(()=>{class t extends Q{name="button";theme=Ko;classes=qo;static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var Zo=["content"],Yo=["loading"],Jo=["icon"],Xo=["*"],An=t=>({class:t});function tr(t,a){t&1&&gi(0)}function er(t,a){if(t&1&&J(0,"span",8),t&2){let e=N(3);x("ngClass",e.iconClass()),R("aria-hidden",!0)("data-pc-section","loadingicon")}}function ir(t,a){if(t&1&&J(0,"SpinnerIcon",9),t&2){let e=N(3);x("styleClass",e.spinnerIconClass())("spin",!0),R("aria-hidden",!0)("data-pc-section","loadingicon")}}function nr(t,a){if(t&1&&(ue(0),G(1,er,1,3,"span",6)(2,ir,1,4,"SpinnerIcon",7),ge()),t&2){let e=N(2);w(),x("ngIf",e.loadingIcon),w(),x("ngIf",!e.loadingIcon)}}function or(t,a){}function rr(t,a){if(t&1&&G(0,or,0,0,"ng-template",10),t&2){let e=N(2);x("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function ar(t,a){if(t&1&&(ue(0),G(1,nr,3,2,"ng-container",2)(2,rr,1,1,null,5),ge()),t&2){let e=N();w(),x("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),w(),x("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",Fe(3,An,e.iconClass()))}}function sr(t,a){if(t&1&&J(0,"span",8),t&2){let e=N(2);St(e.icon),x("ngClass",e.iconClass()),R("data-pc-section","icon")}}function lr(t,a){}function cr(t,a){if(t&1&&G(0,lr,0,0,"ng-template",10),t&2){let e=N(2);x("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function dr(t,a){if(t&1&&(ue(0),G(1,sr,1,4,"span",11)(2,cr,1,1,null,5),ge()),t&2){let e=N();w(),x("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),w(),x("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Fe(3,An,e.iconClass()))}}function mr(t,a){if(t&1&&(f(0,"span",12),rt(1),E()),t&2){let e=N();R("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),w(),Lt(e.label)}}function hr(t,a){if(t&1&&J(0,"p-badge",13),t&2){let e=N();x("value",e.badge)("severity",e.badgeSeverity)}}var pr=(()=>{class t extends ut{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new gt;onFocus=new gt;onBlur=new gt;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,n])=>this[`_${i}`]!==n&&(this[`_${i}`]=n))}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return et(this.fluid)?!!i:this.fluid}_componentStyle=g(Ln);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;case"icon":this.iconTemplate=e.template;break;case"loadingicon":this.loadingIconTemplate=e.template;break;default:this.contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:i}=e;if(i){let n=i.currentValue;for(let o in n)this[o]=n[o]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[i])=>e+` ${i}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=S({type:t,selectors:[["p-button"]],contentQueries:function(i,n,o){if(i&1&&(F(o,Zo,5),F(o,Yo,5),F(o,Jo,5),F(o,hn,4)),i&2){let r;L(r=A())&&(n.contentTemplate=r.first),L(r=A())&&(n.loadingIconTemplate=r.first),L(r=A())&&(n.iconTemplate=r.first),L(r=A())&&(n.templates=r)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",z],loading:[2,"loading","loading",z],loadingIcon:"loadingIcon",raised:[2,"raised","raised",z],rounded:[2,"rounded","rounded",z],text:[2,"text","text",z],plain:[2,"plain","plain",z],severity:"severity",outlined:[2,"outlined","outlined",z],link:[2,"link","link",z],tabindex:[2,"tabindex","tabindex",_i],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",z],fluid:[2,"fluid","fluid",z],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},standalone:!0,features:[B([Ln]),$t,O,Dt,T],ngContentSelectors:Xo,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(i,n){i&1&&(P(),f(0,"button",0),pt("click",function(r){return n.onClick.emit(r)})("focus",function(r){return n.onFocus.emit(r)})("blur",function(r){return n.onBlur.emit(r)}),_(1),G(2,tr,1,0,"ng-container",1)(3,ar,3,5,"ng-container",2)(4,dr,3,5,"ng-container",2)(5,mr,2,3,"span",3)(6,hr,1,2,"p-badge",4),E()),i&2&&(x("ngStyle",n.style)("disabled",n.disabled||n.loading)("ngClass",n.buttonClass)("pAutoFocus",n.autofocus),R("type",n.type)("aria-label",n.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",n.tabindex),w(2),x("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),w(),x("ngIf",n.loading),w(),x("ngIf",!n.loading),w(),x("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.label),w(),x("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.badge))},dependencies:[at,wi,yi,$e,ki,On,kn,Tn,Cn,ti,Et],encapsulation:2,changeDetection:0})}return t})(),Mn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=V({type:t});static \u0275inj=W({imports:[at,pr,Et,Et]})}return t})();var Dn=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=V({type:t})}static{this.\u0275inj=W({imports:[st,st]})}}return t})();var ur=["*"],gr='@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-list-divider::after{content:"";display:block;border-bottom-width:1px;border-bottom-style:solid}}.mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item__wrapper{display:block}.mdc-list-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer}.mdc-list-item:focus{outline:none}.mdc-list-item.mdc-list-item--with-one-line{height:48px}.mdc-list-item.mdc-list-item--with-two-lines{height:64px}.mdc-list-item.mdc-list-item--with-three-lines{height:88px}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--disabled,.mdc-list-item.mdc-list-item--non-interactive{cursor:auto}.mdc-list-item:not(.mdc-list-item--selected):focus::before,.mdc-list-item.mdc-ripple-upgraded--background-focused::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-list-item:not(.mdc-list-item--selected):focus::before,.mdc-list-item.mdc-ripple-upgraded--background-focused::before{border-color:CanvasText}}.mdc-list-item.mdc-list-item--selected::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:3px double rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-list-item.mdc-list-item--selected::before{border-color:CanvasText}}.mdc-list-item.mdc-list-item--selected:focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:3px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-list-item.mdc-list-item--selected:focus::before{border-color:CanvasText}}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__content[for]{pointer-events:none}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item__overline-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-three-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-three-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px}[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start,.mdc-list-item--with-leading-avatar .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-avatar.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-avatar .mdc-list-item__start{border-radius:50%}.mdc-list-item--with-leading-icon.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start,.mdc-list-item--with-leading-icon .mdc-list-item__start[dir=rtl]{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-icon.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-thumbnail.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-thumbnail.mdc-list-item,.mdc-list-item--with-leading-thumbnail.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-thumbnail .mdc-list-item__start{margin-left:16px;margin-right:16px}[dir=rtl] .mdc-list-item--with-leading-thumbnail .mdc-list-item__start,.mdc-list-item--with-leading-thumbnail .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-thumbnail.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-image.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-image.mdc-list-item,.mdc-list-item--with-leading-image.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-image .mdc-list-item__start{margin-left:16px;margin-right:16px}[dir=rtl] .mdc-list-item--with-leading-image .mdc-list-item__start,.mdc-list-item--with-leading-image .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-image.mdc-list-item--with-one-line{height:72px}.mdc-list-item--with-leading-image.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-leading-video.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-video.mdc-list-item,.mdc-list-item--with-leading-video.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-video .mdc-list-item__start{margin-left:0;margin-right:16px}[dir=rtl] .mdc-list-item--with-leading-video .mdc-list-item__start,.mdc-list-item--with-leading-video .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:0}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-video.mdc-list-item--with-one-line{height:72px}.mdc-list-item--with-leading-video.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-checkbox.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start[dir=rtl]{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-radio.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-radio.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-radio .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-radio .mdc-list-item__start[dir=rtl]{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-leading-switch.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-list-item--with-leading-switch.mdc-list-item,.mdc-list-item--with-leading-switch.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-list-item--with-leading-switch .mdc-list-item__start{margin-left:16px;margin-right:16px}[dir=rtl] .mdc-list-item--with-leading-switch .mdc-list-item__start,.mdc-list-item--with-leading-switch .mdc-list-item__start[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__overline-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__overline-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines .mdc-list-item__overline-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-switch.mdc-list-item--with-one-line{height:56px}.mdc-list-item--with-leading-switch.mdc-list-item--with-two-lines{height:72px}.mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item,.mdc-list-item--with-trailing-icon.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-icon .mdc-list-item__end,.mdc-list-item--with-trailing-icon .mdc-list-item__end[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item,.mdc-list-item--with-trailing-meta.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-trailing-meta .mdc-list-item__end[dir=rtl]{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mdc-typography-caption-font-family);font-size:var(--mdc-typography-caption-font-size);line-height:var(--mdc-typography-caption-line-height);font-weight:var(--mdc-typography-caption-font-weight);letter-spacing:var(--mdc-typography-caption-letter-spacing);text-decoration:var(--mdc-typography-caption-text-decoration);text-transform:var(--mdc-typography-caption-text-transform)}.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end[dir=rtl]{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-radio.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-list-item--with-trailing-radio .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-radio .mdc-list-item__end[dir=rtl]{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-switch.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-switch.mdc-list-item,.mdc-list-item--with-trailing-switch.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-list-item--with-trailing-switch .mdc-list-item__end{margin-left:16px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-switch .mdc-list-item__end,.mdc-list-item--with-trailing-switch .mdc-list-item__end[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-switch.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item--with-overline.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-overline.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-overline.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-overline.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-list-item,.mdc-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-list-group .mdc-deprecated-list{padding:0}.mdc-list-group__subheader{margin:calc((3rem - 1.5rem)/2) 16px}.mdc-list-divider{padding:0;background-clip:content-box}.mdc-list-divider.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-text.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-icon.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-image.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-avatar.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-switch.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-radio.mdc-list-divider--with-leading-inset{padding-left:16px;padding-right:auto}[dir=rtl] .mdc-list-divider.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-text.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-icon.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-image.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-avatar.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-switch.mdc-list-divider--with-leading-inset,[dir=rtl] .mdc-list-divider--with-leading-radio.mdc-list-divider--with-leading-inset,.mdc-list-divider.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-text.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-icon.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-image.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-avatar.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-switch.mdc-list-divider--with-leading-inset[dir=rtl],.mdc-list-divider--with-leading-radio.mdc-list-divider--with-leading-inset[dir=rtl]{padding-left:auto;padding-right:16px}.mdc-list-divider.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-text.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-icon.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-image.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-avatar.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-switch.mdc-list-divider--with-trailing-inset,.mdc-list-divider--with-leading-radio.mdc-list-divider--with-trailing-inset{padding-left:auto;padding-right:16px}[dir=rtl] .mdc-list-divider.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-text.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-icon.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-image.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-avatar.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-switch.mdc-list-divider--with-trailing-inset,[dir=rtl] .mdc-list-divider--with-leading-radio.mdc-list-divider--with-trailing-inset,.mdc-list-divider.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-text.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-icon.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-image.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-thumbnail.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-avatar.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-checkbox.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-switch.mdc-list-divider--with-trailing-inset[dir=rtl],.mdc-list-divider--with-leading-radio.mdc-list-divider--with-trailing-inset[dir=rtl]{padding-left:16px;padding-right:auto}.mdc-list-divider--with-leading-video.mdc-list-divider--with-leading-inset{padding-left:0px;padding-right:auto}[dir=rtl] .mdc-list-divider--with-leading-video.mdc-list-divider--with-leading-inset,.mdc-list-divider--with-leading-video.mdc-list-divider--with-leading-inset[dir=rtl]{padding-left:auto;padding-right:0px}[dir=rtl] .mdc-list-divider,.mdc-list-divider[dir=rtl]{padding:0}.mdc-list-item{background-color:var(--mdc-list-list-item-container-color)}.mdc-list-item.mdc-list-item--selected{background-color:var(--mdc-list-list-item-selected-container-color)}.mdc-list-item--with-one-line{border-radius:var(--mdc-list-list-item-container-shape)}.mdc-list-item--with-one-line.mdc-list-item--with-leading-avatar,.mdc-list-item--with-one-line.mdc-list-item--with-leading-icon,.mdc-list-item--with-one-line.mdc-list-item--with-leading-thumbnail,.mdc-list-item--with-one-line.mdc-list-item--with-leading-checkbox,.mdc-list-item--with-one-line.mdc-list-item--with-leading-radio,.mdc-list-item--with-one-line.mdc-list-item--with-leading-switch{border-radius:var(--mdc-list-list-item-container-shape)}.mdc-list-item--with-one-line.mdc-list-item--with-leading-image,.mdc-list-item--with-one-line.mdc-list-item--with-leading-video{border-radius:var(--mdc-list-list-item-container-shape)}.mdc-list-item--with-two-lines{border-radius:var(--mdc-list-list-item-container-shape)}.mdc-list-item--with-two-lines.mdc-list-item--with-leading-avatar,.mdc-list-item--with-two-lines.mdc-list-item--with-leading-icon,.mdc-list-item--with-two-lines.mdc-list-item--with-leading-thumbnail,.mdc-list-item--with-two-lines.mdc-list-item--with-leading-checkbox,.mdc-list-item--with-two-lines.mdc-list-item--with-leading-radio,.mdc-list-item--with-two-lines.mdc-list-item--with-leading-switch,.mdc-list-item--with-two-lines.mdc-list-item--with-leading-image,.mdc-list-item--with-two-lines.mdc-list-item--with-leading-video{border-radius:var(--mdc-list-list-item-container-shape)}.mdc-list-item--with-three-lines{border-radius:var(--mdc-list-list-item-container-shape)}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mdc-list-list-item-one-line-container-height)}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mdc-list-list-item-two-line-container-height)}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mdc-list-list-item-three-line-container-height)}.mdc-list-item__primary-text{color:var(--mdc-list-list-item-label-text-color)}.mdc-list-item__primary-text{font-family:var(--mdc-list-list-item-label-text-font);line-height:var(--mdc-list-list-item-label-text-line-height);font-size:var(--mdc-list-list-item-label-text-size);font-weight:var(--mdc-list-list-item-label-text-weight);letter-spacing:var(--mdc-list-list-item-label-text-tracking)}.mdc-list-item__secondary-text{color:var(--mdc-list-list-item-supporting-text-color)}.mdc-list-item__secondary-text{font-family:var(--mdc-list-list-item-supporting-text-font);line-height:var(--mdc-list-list-item-supporting-text-line-height);font-size:var(--mdc-list-list-item-supporting-text-size);font-weight:var(--mdc-list-list-item-supporting-text-weight);letter-spacing:var(--mdc-list-list-item-supporting-text-tracking)}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mdc-list-list-item-leading-icon-color)}.mdc-list-item--with-leading-icon .mdc-list-item__start{width:var(--mdc-list-list-item-leading-icon-size);height:var(--mdc-list-list-item-leading-icon-size)}.mdc-list-item--with-leading-icon .mdc-list-item__start>i{font-size:var(--mdc-list-list-item-leading-icon-size)}.mdc-list-item--with-leading-icon .mdc-list-item__start .mdc-list-item__icon{font-size:var(--mdc-list-list-item-leading-icon-size);width:var(--mdc-list-list-item-leading-icon-size);height:var(--mdc-list-list-item-leading-icon-size)}.mdc-list-item--with-leading-icon .mdc-list-item__start .mdc-list-item__icon,.mdc-list-item--with-leading-icon .mdc-list-item__start .mdc-list-item__icon>.materialdesignWizIconSvgsSvgIcon{display:block}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mdc-list-list-item-leading-avatar-size);height:var(--mdc-list-list-item-leading-avatar-size)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mdc-list-list-item-trailing-supporting-text-color)}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mdc-list-list-item-trailing-supporting-text-font);line-height:var(--mdc-list-list-item-trailing-supporting-text-line-height);font-size:var(--mdc-list-list-item-trailing-supporting-text-size);font-weight:var(--mdc-list-list-item-trailing-supporting-text-weight);letter-spacing:var(--mdc-list-list-item-trailing-supporting-text-tracking)}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mdc-list-list-item-trailing-icon-color)}.mdc-list-item--with-trailing-icon .mdc-list-item__end{width:var(--mdc-list-list-item-trailing-icon-size);height:var(--mdc-list-list-item-trailing-icon-size)}.mdc-list-item--with-trailing-icon .mdc-list-item__end>i{font-size:var(--mdc-list-list-item-trailing-icon-size)}.mdc-list-item--with-trailing-icon .mdc-list-item__end .mdc-list-item__icon{font-size:var(--mdc-list-list-item-trailing-icon-size);width:var(--mdc-list-list-item-trailing-icon-size);height:var(--mdc-list-list-item-trailing-icon-size)}.mdc-list-item--with-trailing-icon .mdc-list-item__end .mdc-list-item__icon,.mdc-list-item--with-trailing-icon .mdc-list-item__end .mdc-list-item__icon>.materialdesignWizIconSvgsSvgIcon{display:block}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mdc-list-list-item-selected-trailing-icon-color)}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text,.mdc-list-item--disabled .mdc-list-item__overline-text{opacity:var(--mdc-list-list-item-disabled-label-text-opacity)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mdc-list-list-item-disabled-leading-icon-color)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{opacity:var(--mdc-list-list-item-disabled-leading-icon-opacity)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mdc-list-list-item-disabled-trailing-icon-color)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{opacity:var(--mdc-list-list-item-disabled-trailing-icon-opacity)}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mdc-list-list-item-hover-label-text-color)}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mdc-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mdc-list-list-item-hover-trailing-icon-color)}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mdc-list-list-item-focus-label-text-color)}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mdc-list-list-item-disabled-label-text-color)}.mdc-list-item:hover::before{background-color:var(--mdc-list-list-item-hover-state-layer-color);opacity:var(--mdc-list-list-item-hover-state-layer-opacity)}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mdc-list-list-item-disabled-state-layer-color);opacity:var(--mdc-list-list-item-disabled-state-layer-opacity)}.mdc-list-item:focus::before{background-color:var(--mdc-list-list-item-focus-state-layer-color);opacity:var(--mdc-list-list-item-focus-state-layer-opacity)}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mdc-list-list-item-disabled-label-text-opacity)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mdc-list-list-item-leading-avatar-shape);background-color:var(--mdc-list-list-item-leading-avatar-color)}.mat-mdc-list-item-icon{font-size:var(--mdc-list-list-item-leading-icon-size)}.cdk-high-contrast-active a.mdc-list-item--activated::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:"";opacity:0;pointer-events:none}.mat-mdc-list-item>.mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus>.mat-mdc-focus-indicator::before{content:""}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape);--mat-mdc-focus-indicator-border-radius:var(--mat-list-active-indicator-shape)}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color)}',br=["unscopedContent"],fr=["text"],_r=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],vr=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var wr=new vt("ListOption"),xr=(()=>{class t{constructor(e){this._elementRef=e}static{this.\u0275fac=function(i){return new(i||t)(p(U))}}static{this.\u0275dir=M({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"],standalone:!0})}}return t})(),yr=(()=>{class t{constructor(e){this._elementRef=e}static{this.\u0275fac=function(i){return new(i||t)(p(U))}}static{this.\u0275dir=M({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"],standalone:!0})}}return t})(),kr=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=M({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"],standalone:!0})}}return t})(),Fn=(()=>{class t{constructor(e){this._listOption=e}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static{this.\u0275fac=function(i){return new(i||t)(p(wr,8))}}static{this.\u0275dir=M({type:t,hostVars:4,hostBindings:function(i,n){i&2&&$("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())},standalone:!0})}}return t})(),Sr=(()=>{class t extends Fn{static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})()}static{this.\u0275dir=M({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],standalone:!0,features:[O]})}}return t})(),Cr=(()=>{class t extends Fn{static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})()}static{this.\u0275dir=M({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],standalone:!0,features:[O]})}}return t})(),Er=new vt("MAT_LIST_CONFIG"),Te=(()=>{class t{constructor(){this._isNonInteractive=!0,this._disableRipple=!1,this._disabled=!1,this._defaultOptions=g(Er,{optional:!0})}get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=Z(e)}get disabled(){return this._disabled}set disabled(e){this._disabled=Z(e)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275dir=M({type:t,hostVars:1,hostBindings:function(i,n){i&2&&R("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"},standalone:!0})}}return t})(),Tr=(()=>{class t{set lines(e){this._explicitLines=qt(e,null),this._updateItemLines(!1)}get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=Z(e)}get disabled(){return this._disabled||!!this._listBase?.disabled}set disabled(e){this._disabled=Z(e)}get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(e,i,n,o,r,s){this._elementRef=e,this._ngZone=i,this._listBase=n,this._platform=o,this._explicitLines=null,this._disableRipple=!1,this._disabled=!1,this._subscriptions=new ri,this._rippleRenderer=null,this._hasUnscopedTextContent=!1,this.rippleConfig=r||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._noopAnimations=s==="NoopAnimations",n&&!n._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Bi(this,this._ngZone,this._hostElement,this._platform),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(he(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;n.classList.toggle("mdc-list-item__primary-text",o),n.classList.toggle("mdc-list-item__secondary-text",!o)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static{this.\u0275fac=function(i){return new(i||t)(p(U),p(ht),p(Te,8),p(At),p(He,8),p(Qt,8))}}static{this.\u0275dir=M({type:t,contentQueries:function(i,n,o){if(i&1&&(F(o,Sr,4),F(o,Cr,4)),i&2){let r;L(r=A())&&(n._avatars=r),L(r=A())&&(n._icons=r)}},hostVars:4,hostBindings:function(i,n){i&2&&(R("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),$("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"},standalone:!0})}}return t})();var Rn=(()=>{class t extends Tr{get activated(){return this._activated}set activated(e){this._activated=Z(e)}constructor(e,i,n,o,r,s){super(e,i,n,o,r,s),this._activated=!1}_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}static{this.\u0275fac=function(i){return new(i||t)(p(U),p(ht),p(Te,8),p(At),p(He,8),p(Qt,8))}}static{this.\u0275cmp=S({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,n,o){if(i&1&&(F(o,yr,5),F(o,xr,5),F(o,kr,5)),i&2){let r;L(r=A())&&(n._lines=r),L(r=A())&&(n._titles=r),L(r=A())&&(n._meta=r)}},viewQuery:function(i,n){if(i&1&&(Pt(br,5),Pt(fr,5)),i&2){let o;L(o=A())&&(n._unscopedContent=o.first),L(o=A())&&(n._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:11,hostBindings:function(i,n){i&2&&(R("aria-current",n._getAriaCurrent()),$("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("_mat-animation-noopable",n._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],standalone:!0,features:[O,T],ngContentSelectors:vr,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-mdc-focus-indicator"]],template:function(i,n){if(i&1){let o=Ot();P(_r),_(0),f(1,"span",1),_(2,1),_(3,2),f(4,"span",2,0),pt("cdkObserveContent",function(){return wt(o),xt(n._updateItemLines(!0))}),_(6,3),E()(),_(7,4),_(8,5),J(9,"div",3)}},dependencies:[Mi],encapsulation:2,changeDetection:0})}}return t})();var $n=(()=>{class t extends Te{constructor(){super(...arguments),this._isNonInteractive=!1}static{this.\u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})()}static{this.\u0275cmp=S({type:t,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],standalone:!0,features:[B([{provide:Te,useExisting:t}]),O,T],ngContentSelectors:ur,decls:1,vars:0,template:function(i,n){i&1&&(P(),_(0))},styles:[gr],encapsulation:2,changeDetection:0})}}return t})();var Nn=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=V({type:t})}static{this.\u0275inj=W({imports:[Di,at,st,zi,Hi,Dn]})}}return t})();var Pn=(()=>{class t{constructor(){this.userSubject=new q,this.user$=this.userSubject.asObservable()}setUser(e){this.userSubject.next(e)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Bn=(()=>{class t{constructor(e){this._http=e,this.api=`${Qi.api}/user`}getUserData(){return this._http.get(`${this.api}/get-user-data`)}static{this.\u0275fac=function(i){return new(i||t)(ci(Ci))}}static{this.\u0275prov=I({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Ar(t,a){if(t&1&&(f(0,"a",11)(1,"mat-icon",9),rt(2),E(),f(3,"span",10),rt(4),E()()),t&2){let e=a.$implicit;x("routerLink",e.route),w(2),Lt(e.icon),w(2),Lt(e.label)}}var gc=(()=>{class t{constructor(e,i,n,o,r){this._sharedService=n,this._userService=o,this.router=r,this.showFiller=!1,this.fillerNav=[{label:"Dashboard",icon:"dashboard",route:"dashboard"},{label:"Articles",icon:"article",route:"articles"},{label:"Add Article",icon:"add",route:"create"},{label:"Profile",icon:"person",route:"profile"}],this.fillerContent=Array.from({length:1},()=>`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`),this.mobileQuery=i.matchMedia("(max-width: 600px)"),this._mobileQueryListener=()=>e.detectChanges(),this.mobileQuery.addListener(this._mobileQueryListener)}ngOnInit(){}ngOnDestroy(){this.mobileQuery.removeListener(this._mobileQueryListener)}logout(){localStorage.removeItem("userToken"),this.router.navigate([""])}static{this.\u0275fac=function(i){return new(i||t)(p(bt),p(Fi),p(Pn),p(Bn),p(Ii))}}static{this.\u0275cmp=S({type:t,selectors:[["app-main"]],standalone:!0,features:[T],decls:19,vars:7,consts:[["snav",""],[1,"example-container"],["color","primary",1,"example-toolbar"],["mat-icon-button","",3,"click"],["color","primary",1,"example-app-name"],[1,"example-sidenav-container"],["fixedTopGap","56",3,"mode","fixedInViewport"],["mat-list-item","",3,"routerLink",4,"ngFor","ngForOf"],[3,"click"],["mat-list-icon",""],["mat-line",""],["mat-list-item","",3,"routerLink"]],template:function(i,n){if(i&1){let o=Ot();f(0,"div",1)(1,"mat-toolbar",2)(2,"button",3),pt("click",function(){wt(o);let s=De(9);return xt(s.toggle())}),f(3,"mat-icon"),rt(4,"menu"),E()(),f(5,"h1",4),rt(6,"Responsive App"),E()(),f(7,"mat-sidenav-container",5)(8,"mat-sidenav",6,0)(10,"mat-nav-list"),G(11,Ar,5,3,"a",7),f(12,"a",8),pt("click",function(){return wt(o),xt(n.logout())}),f(13,"mat-icon",9),rt(14,"logout"),E(),f(15,"span",10),rt(16,"Logout"),E()()()(),f(17,"mat-sidenav-content"),J(18,"router-outlet"),E()()()}i&2&&($("example-is-mobile",n.mobileQuery.matches),w(7),kt("margin-top",n.mobileQuery.matches?56:0,"px"),w(),x("mode",n.mobileQuery.matches?"over":"side")("fixedInViewport",n.mobileQuery.matches),w(3),x("ngForOf",n.fillerNav))},dependencies:[Li,Ti,Oi,Zi,qi,Wi,ji,Gi,Ui,tn,Ue,Ge,_e,Mn,Nn,$n,Rn,at,xi],styles:[".example-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;inset:0}.example-is-mobile[_ngcontent-%COMP%]   .example-toolbar[_ngcontent-%COMP%]{position:fixed;z-index:2}h1.example-app-name[_ngcontent-%COMP%]{margin-left:8px}.example-sidenav-container[_ngcontent-%COMP%]{flex:1}.example-is-mobile[_ngcontent-%COMP%]   .example-sidenav-container[_ngcontent-%COMP%]{flex:1 0 auto}"]})}}return t})();export{gc as MainComponent};
