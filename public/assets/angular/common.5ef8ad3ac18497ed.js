"use strict";(self.webpackChunksalarioemocionalfrontend=self.webpackChunksalarioemocionalfrontend||[]).push([[592],{1913:(m,d,n)=>{n.d(d,{a:()=>p});var e=n(9862),u=n(553),h=n(6689);let p=(()=>{class a{constructor(t){this.http=t,this.apiBaseUrl=u.N.apiBaseUrl,this.token=localStorage.getItem("token")}index(){const t=(new e.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/benefitdetail`,{headers:t,withCredentials:!0})}show(t){const r=(new e.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/benefitdetail/${t}`,{headers:r,withCredentials:!0})}create(t){const r=(new e.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.post(`${this.apiBaseUrl}/benefitdetail`,t,{headers:r,withCredentials:!0})}update(t,r){const l=(new e.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.put(`${this.apiBaseUrl}/benefitdetail/${t}`,r,{headers:l,withCredentials:!0})}destroy(t){const r=(new e.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.delete(`${this.apiBaseUrl}/benefitdetail/${t}`,{headers:r,withCredentials:!0})}static#t=this.\u0275fac=function(r){return new(r||a)(h.LFG(e.eN))};static#e=this.\u0275prov=h.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()},4642:(m,d,n)=>{n.d(d,{e:()=>p});var e=n(9862),u=n(553),h=n(6689);let p=(()=>{class a{constructor(t){this.http=t,this.apiBaseUrl=u.N.apiBaseUrl,this.token=localStorage.getItem("token")}index(){const t=(new e.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/position`,{headers:t,withCredentials:!0})}show(t){const r=(new e.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/position/${t}`,{headers:r,withCredentials:!0})}create(t){const r=(new e.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.post(`${this.apiBaseUrl}/position`,t,{headers:r,withCredentials:!0})}update(t,r){const l=(new e.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.put(`${this.apiBaseUrl}/position/${t}`,r,{headers:l,withCredentials:!0})}destroy(t){const r=(new e.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.delete(`${this.apiBaseUrl}/position/${t}`,{headers:r,withCredentials:!0})}static#t=this.\u0275fac=function(r){return new(r||a)(h.LFG(e.eN))};static#e=this.\u0275prov=h.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()},8047:(m,d,n)=>{n.d(d,{N:()=>p});var e=n(9862),u=n(553),h=n(6689);let p=(()=>{class a{constructor(t){this.http=t,this.apiBaseUrl=u.N.apiBaseUrl,this.token=localStorage.getItem("token")}index(){const t=(new e.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/role`,{headers:t,withCredentials:!0})}show(t){const r=(new e.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/role/${t}`,{headers:r,withCredentials:!0})}create(t){const r=(new e.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.post(`${this.apiBaseUrl}/role`,t,{headers:r,withCredentials:!0})}update(t,r){const l=(new e.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.put(`${this.apiBaseUrl}/role/${t}`,r,{headers:l,withCredentials:!0})}destroy(t){const r=(new e.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.delete(`${this.apiBaseUrl}/role/${t}`,{headers:r,withCredentials:!0})}static#t=this.\u0275fac=function(r){return new(r||a)(h.LFG(e.eN))};static#e=this.\u0275prov=h.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()},3416:(m,d,n)=>{n.d(d,{z:()=>a});var e=n(6689),u=n(3912),h=n(6814);let p=(()=>{class c{constructor(r,l){this.router=r,this.location=l,this.history=[],this.router.events.subscribe(s=>{s instanceof u.m2&&this.history.push(s.urlAfterRedirects)})}back(){this.history.pop(),this.history.length>0?this.location.back():this.router.navigateByUrl("/")}static#t=this.\u0275fac=function(l){return new(l||c)(e.LFG(u.F0),e.LFG(h.Ye))};static#e=this.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),a=(()=>{class c{constructor(r){this.navigation=r}onClick(){this.navigation.back()}static#t=this.\u0275fac=function(l){return new(l||c)(e.Y36(p))};static#e=this.\u0275dir=e.lG2({type:c,selectors:[["","backButton",""]],hostBindings:function(l,s){1&l&&e.NdJ("click",function(){return s.onClick()})}})}return c})()},5406:(m,d,n)=>{n.d(d,{t:()=>l});var e=n(6689),u=n(3912);let h=(()=>{class s{constructor(i){this.router=i,this.breadcrumbChanged=new e.vpe(!1),this.breadcrumbs=[],this.router.events.subscribe(o=>{this.onRouteEvent(o)})}onRouteEvent(i){if(!(i instanceof u.m2))return;let o=this.router.routerState.root.snapshot,g="";const f=[];for(;null!=o.firstChild;){if(o=o.firstChild,null===o.routeConfig||!o.routeConfig.path||(g+=`/${this.createUrl(o)}`,!o.title))continue;const v=this.createBreadcrumb(o,g);f.push(v)}this.breadcrumbs=f,this.breadcrumbChanged.emit(this.breadcrumbs)}createBreadcrumb(i,o){return{displayName:i.title,url:o,route:i.routeConfig}}createUrl(i){return i&&i.url.map(function(o){return o.toString()}).join("/")}static#t=this.\u0275fac=function(o){return new(o||s)(e.LFG(u.F0))};static#e=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var p=n(6814);function a(s,B){if(1&s&&(e.TgZ(0,"li",4)(1,"small")(2,"a",5),e._uU(3),e.qZA()()()),2&s){const i=B.$implicit;e.xp6(2),e.s9C("routerLink",i.url),e.xp6(1),e.Oqu(i.displayName)}}let c=(()=>{class s{constructor(i){this.breadcrumbService=i,this.breadcrumbService.breadcrumbChanged.subscribe(o=>{this.onBreadcrumbChange(o)})}onBreadcrumbChange(i){this.breadcrumbs=i}static#t=this.\u0275fac=function(o){return new(o||s)(e.Y36(h))};static#e=this.\u0275cmp=e.Xpm({type:s,selectors:[["breadcrumbs"]],decls:4,vars:1,consts:[[1,"px-5","py-2","bg-transparent"],["aria-label","breadcrumb",2,"--bs-breadcrumb-divider","'>'"],[1,"breadcrumb"],["class","breadcrumb-item",4,"ngFor","ngForOf"],[1,"breadcrumb-item"],[1,"link-danger","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover",3,"routerLink"]],template:function(o,g){1&o&&(e.TgZ(0,"div",0)(1,"nav",1)(2,"ol",2),e.YNc(3,a,4,2,"li",3),e.qZA()()()),2&o&&(e.xp6(3),e.Q6J("ngForOf",g.breadcrumbs))},dependencies:[p.sg,u.rH],encapsulation:2})}return s})();var t=n(833),r=n(9139);let l=(()=>{class s{static#t=this.\u0275fac=function(o){return new(o||s)};static#e=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-main-container"]],decls:6,vars:0,consts:[[1,"container"],["main",""]],template:function(o,g){1&o&&(e._UZ(0,"app-navbar")(1,"offcanvas")(2,"breadcrumbs"),e.TgZ(3,"div",0,1),e._UZ(5,"router-outlet"),e.qZA())},dependencies:[u.lC,c,t.S,r.I],encapsulation:2})}return s})()},7645:(m,d,n)=>{n.d(d,{o:()=>h});var e=n(2096),u=n(6689);let h=(()=>{class p{constructor(){}checkboxRequired(){return c=>(0,e.of)(c.value?null:{required:!0})}minIfFilled(c){return t=>(t.value||0===t.value)&&t&&t.value<c?{minIfFilled:`El valor debe ser mayor o igual que ${c}`}:null}camposIguales(c,t){return r=>{const l=r.get(c)?.value,s=r.get(t)?.value;return l!==s?(r.get(t)?.setErrors({noIguales:!0}),{noIguales:!0}):(r.get(t)?.setErrors(null),null)}}static#t=this.\u0275fac=function(t){return new(t||p)};static#e=this.\u0275prov=u.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()},9913:(m,d,n)=>{n.d(d,{K:()=>p});var e=n(9862),u=n(553),h=n(6689);let p=(()=>{class a{constructor(t){this.http=t,this.apiBaseUrl=u.N.apiBaseUrl,this.token=localStorage.getItem("token")}index(){const t=(new e.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/user`,{headers:t,withCredentials:!0})}show(t){const r=(new e.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/user/${t}`,{headers:r,withCredentials:!0})}create(t){const r=(new e.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.post(`${this.apiBaseUrl}/user`,t,{headers:r,withCredentials:!0})}update(t,r){const l=(new e.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.put(`${this.apiBaseUrl}/user/${t}`,r,{headers:l,withCredentials:!0})}destroy(t){const r=(new e.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.delete(`${this.apiBaseUrl}/user/${t}`,{headers:r,withCredentials:!0})}static#t=this.\u0275fac=function(r){return new(r||a)(h.LFG(e.eN))};static#e=this.\u0275prov=h.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()}}]);