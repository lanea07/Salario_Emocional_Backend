"use strict";(self.webpackChunksalarioemocionalfrontend=self.webpackChunksalarioemocionalfrontend||[]).push([[592],{8473:(m,h,a)=>{a.d(h,{a:()=>l});var e=a(2340),i=a(3144),c=a(2223);let l=(()=>{class n{constructor(t){this.http=t,this.apiBaseUrl=e.N.apiBaseUrl,this.token=localStorage.getItem("token")}index(){const t=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.get(`${this.apiBaseUrl}/benefitdetail`,{headers:t,withCredentials:!0})}show(t){const r=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.get(`${this.apiBaseUrl}/benefitdetail/${t}`,{headers:r,withCredentials:!0})}create(t){const r=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.post(`${this.apiBaseUrl}/benefitdetail`,t,{headers:r,withCredentials:!0})}update(t,r){const d=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.put(`${this.apiBaseUrl}/benefitdetail/${t}`,r,{headers:d,withCredentials:!0})}destroy(t){const r=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.delete(`${this.apiBaseUrl}/benefitdetail/${t}`,{headers:r,withCredentials:!0})}}return n.\u0275fac=function(t){return new(t||n)(c.LFG(i.eN))},n.\u0275prov=c.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},1239:(m,h,a)=>{a.d(h,{T:()=>l});var e=a(2340),i=a(3144),c=a(2223);let l=(()=>{class n{constructor(t){this.http=t,this.apiBaseUrl=e.N.apiBaseUrl,this.token=localStorage.getItem("token")}index(){const t=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.get("http://localhost:8000/sanctum/csrf-cookie").subscribe(),this.http.get(`${this.apiBaseUrl}/benefit`,{headers:t,withCredentials:!0})}show(t){const r=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.get(`${this.apiBaseUrl}/benefit/${t}`,{headers:r,withCredentials:!0})}create(t){const r=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.post(`${this.apiBaseUrl}/benefit`,t,{headers:r,withCredentials:!0})}update(t,r){const d=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.put(`${this.apiBaseUrl}/benefit/${t}`,r,{headers:d,withCredentials:!0})}destroy(t){const r=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.delete(`${this.apiBaseUrl}/benefit/${t}`,{headers:r,withCredentials:!0})}}return n.\u0275fac=function(t){return new(t||n)(c.LFG(i.eN))},n.\u0275prov=c.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},1407:(m,h,a)=>{a.d(h,{e:()=>l});var e=a(2340),i=a(3144),c=a(2223);let l=(()=>{class n{constructor(t){this.http=t,this.apiBaseUrl=e.N.apiBaseUrl,this.token=localStorage.getItem("token")}index(){const t=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.get(`${this.apiBaseUrl}/position`,{headers:t,withCredentials:!0})}show(t){const r=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.get(`${this.apiBaseUrl}/position/${t}`,{headers:r,withCredentials:!0})}create(t){const r=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.post(`${this.apiBaseUrl}/position`,t,{headers:r,withCredentials:!0})}update(t,r){const d=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.put(`${this.apiBaseUrl}/position/${t}`,r,{headers:d,withCredentials:!0})}destroy(t){const r=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.delete(`${this.apiBaseUrl}/position/${t}`,{headers:r,withCredentials:!0})}}return n.\u0275fac=function(t){return new(t||n)(c.LFG(i.eN))},n.\u0275prov=c.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},7831:(m,h,a)=>{a.d(h,{N:()=>l});var i=a(3144),c=a(2223);let l=(()=>{class n{constructor(t){this.http=t,this.apiBaseUrl="//localhost:8000/api",this.token=localStorage.getItem("token")}index(){const t=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.get(`${this.apiBaseUrl}/role`,{headers:t,withCredentials:!0})}show(t){const r=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.get(`${this.apiBaseUrl}/role/${t}`,{headers:r,withCredentials:!0})}create(t){const r=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.post(`${this.apiBaseUrl}/role`,t,{headers:r,withCredentials:!0})}update(t,r){const d=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.put(`${this.apiBaseUrl}/role/${t}`,r,{headers:d,withCredentials:!0})}destroy(t){const r=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.delete(`${this.apiBaseUrl}/role/${t}`,{headers:r,withCredentials:!0})}}return n.\u0275fac=function(t){return new(t||n)(c.LFG(i.eN))},n.\u0275prov=c.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},9906:(m,h,a)=>{a.d(h,{t:()=>U});var e=a(2223),i=a(5118),c=a(5226),l=a.n(c),n=a(6518),u=a(4755);function t(s,v){if(1&s&&(e.TgZ(0,"li",9)(1,"a",10),e._uU(2," Beneficios "),e.qZA(),e.TgZ(3,"ul",11)(4,"li")(5,"a",18),e._uU(6,"Nuevo"),e.qZA()(),e.TgZ(7,"li")(8,"a",19),e._uU(9,"Listado"),e.qZA()()()()),2&s){const o=e.oxw();e.xp6(1),e.ekj("active",o.router.isActive("/benefit",!1))}}function r(s,v){if(1&s&&(e.TgZ(0,"li",9)(1,"a",10),e._uU(2," Beneficios - Detalles "),e.qZA(),e.TgZ(3,"ul",11)(4,"li")(5,"a",20),e._uU(6,"Nuevo"),e.qZA()(),e.TgZ(7,"li")(8,"a",21),e._uU(9,"Listado"),e.qZA()()()()),2&s){const o=e.oxw();e.xp6(1),e.ekj("active",o.router.isActive("/benefit-detail",!1))}}function d(s,v){if(1&s&&(e.TgZ(0,"li",9)(1,"a",10),e._uU(2," Cargos "),e.qZA(),e.TgZ(3,"ul",11)(4,"li")(5,"a",22),e._uU(6,"Nuevo"),e.qZA()(),e.TgZ(7,"li")(8,"a",23),e._uU(9,"Listado"),e.qZA()()()()),2&s){const o=e.oxw();e.xp6(1),e.ekj("active",o.router.isActive("/position",!1))}}function f(s,v){if(1&s&&(e.TgZ(0,"li",9)(1,"a",10),e._uU(2," Usuarios "),e.qZA(),e.TgZ(3,"ul",11)(4,"li")(5,"a",24),e._uU(6,"Nuevo"),e.qZA()(),e.TgZ(7,"li")(8,"a",25),e._uU(9,"Listado"),e.qZA()()()()),2&s){const o=e.oxw();e.xp6(1),e.ekj("active",o.router.isActive("/user",!1))}}function g(s,v){if(1&s&&(e.TgZ(0,"li",9)(1,"a",10),e._uU(2," Roles "),e.qZA(),e.TgZ(3,"ul",11)(4,"li")(5,"a",26),e._uU(6,"Nuevo"),e.qZA()(),e.TgZ(7,"li")(8,"a",27),e._uU(9,"Listado"),e.qZA()()()()),2&s){const o=e.oxw();e.xp6(1),e.ekj("active",o.router.isActive("/role",!1))}}let B=(()=>{class s{constructor(o,p){this.authService=o,this.router=p,this.isAdmin=!1}ngOnInit(){this.authService.validarAdmin().subscribe({next:o=>{this.isAdmin=o.admin,this.user=JSON.parse(localStorage.getItem("user"))},error:o=>{l().fire({title:"Error",icon:"error",html:o.error.msg,timer:3e3,timerProgressBar:!0,didOpen:p=>{p.addEventListener("mouseenter",l().stopTimer),p.addEventListener("mouseleave",l().resumeTimer)}})}})}logout(){this.authService.logout().subscribe(o=>{this.router.navigateByUrl("/login")})}addClass(o){o.target.className=o.target.className.replace(" btn-outline-light",""),o.target.className+=" btn-outline-danger"}removeClass(o){o.target.className=o.target.className.replace(" btn-outline-danger",""),o.target.className+=" btn-outline-light"}}return s.\u0275fac=function(o){return new(o||s)(e.Y36(n.e),e.Y36(i.F0))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-navbar"]],decls:30,vars:8,consts:[["data-bs-theme","dark",1,"navbar","bg-dark","navbar-expand-lg","bg-body-tertiary","sticky-top"],[1,"container-fluid"],[1,"navbar-brand"],["src","./assets/images/pajaro_transparencia.png","height","40px;"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],["class","nav-item dropdown",4,"ngIf"],[1,"nav-item","dropdown"],["href","#","role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle"],[1,"dropdown-menu"],["routerLink","/benefit-employee/create","routerLinkActive","active",1,"dropdown-item"],["routerLink","/benefit-employee/index","routerLinkActive","active",1,"dropdown-item"],[1,"container-fluid","d-flex","justify-content-end"],[1,"navbar-text","mx-3"],[1,"btn","btn-outline-light","btn-sm",3,"click","mouseover","mouseleave"],[1,"fa-solid","fa-right-from-bracket"],["routerLink","/benefit/create",1,"dropdown-item"],["routerLink","/benefit/index",1,"dropdown-item"],["routerLink","/benefit-detail/create","routerLinkActive","active",1,"dropdown-item"],["routerLink","/benefit-detail/index","routerLinkActive","active",1,"dropdown-item"],["routerLink","/position/create","routerLinkActive","active",1,"dropdown-item"],["routerLink","/position/index","routerLinkActive","active",1,"dropdown-item"],["routerLink","/user/create","routerLinkActive","active",1,"dropdown-item"],["routerLink","/user/index","routerLinkActive","active",1,"dropdown-item"],["routerLink","/role/create","routerLinkActive","active",1,"dropdown-item"],["routerLink","/role/index","routerLinkActive","active",1,"dropdown-item"]],template:function(o,p){1&o&&(e.TgZ(0,"nav",0)(1,"div",1)(2,"a",2),e._UZ(3,"img",3),e._uU(4," Salario Emocional "),e.qZA(),e.TgZ(5,"button",4),e._UZ(6,"span",5),e.qZA(),e.TgZ(7,"div",6)(8,"ul",7),e.YNc(9,t,10,2,"li",8),e.YNc(10,r,10,2,"li",8),e.TgZ(11,"li",9)(12,"a",10),e._uU(13," Beneficios - Empleados "),e.qZA(),e.TgZ(14,"ul",11)(15,"li")(16,"a",12),e._uU(17,"Nuevo"),e.qZA()(),e.TgZ(18,"li")(19,"a",13),e._uU(20,"Listado"),e.qZA()()()(),e.YNc(21,d,10,2,"li",8),e.YNc(22,f,10,2,"li",8),e.YNc(23,g,10,2,"li",8),e.qZA(),e.TgZ(24,"div",14)(25,"span",15),e._uU(26),e.qZA(),e.TgZ(27,"button",16),e.NdJ("click",function(){return p.logout()})("mouseover",function(_){return p.addClass(_)})("mouseleave",function(_){return p.removeClass(_)}),e._uU(28," Cerrar Sesi\xf3n "),e._UZ(29,"i",17),e.qZA()()()()()),2&o&&(e.xp6(9),e.Q6J("ngIf",p.isAdmin),e.xp6(1),e.Q6J("ngIf",p.isAdmin),e.xp6(2),e.ekj("active",p.router.isActive("/benefit-employee",!1)),e.xp6(9),e.Q6J("ngIf",p.isAdmin),e.xp6(1),e.Q6J("ngIf",p.isAdmin),e.xp6(1),e.Q6J("ngIf",p.isAdmin),e.xp6(3),e.hij(" ",null==p.user?null:p.user.name," "))},dependencies:[u.O5,i.rH,i.Od],encapsulation:2}),s})(),U=(()=>{class s{}return s.\u0275fac=function(o){return new(o||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-main-container"]],decls:3,vars:0,consts:[[1,"container"]],template:function(o,p){1&o&&(e._UZ(0,"app-navbar"),e.TgZ(1,"div",0),e._UZ(2,"router-outlet"),e.qZA())},dependencies:[i.lC,B],encapsulation:2}),s})()},7270:(m,h,a)=>{a.d(h,{o:()=>c});var e=a(9646),i=a(2223);let c=(()=>{class l{constructor(){}checkboxRequired(){return u=>(0,e.of)(u.value?null:{required:!0})}minIfFilled(u){return t=>(t.value||0===t.value)&&t&&t.value<u?{min:"Value must be greater than zero"}:null}}return l.\u0275fac=function(u){return new(u||l)},l.\u0275prov=i.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},427:(m,h,a)=>{a.d(h,{K:()=>l});var e=a(2340),i=a(3144),c=a(2223);let l=(()=>{class n{constructor(t){this.http=t,this.apiBaseUrl=e.N.apiBaseUrl,this.token=localStorage.getItem("token")}index(){const t=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.get(`${this.apiBaseUrl}/user`,{headers:t,withCredentials:!0})}show(t){const r=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.get(`${this.apiBaseUrl}/user/${t}`,{headers:r,withCredentials:!0})}create(t){const r=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.post(`${this.apiBaseUrl}/user`,t,{headers:r,withCredentials:!0})}update(t,r){const d=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.put(`${this.apiBaseUrl}/user/${t}`,r,{headers:d,withCredentials:!0})}destroy(t){const r=(new i.WM).set("Accept","application/json").set("Authorization",`Bearer ${this.token}`);return this.http.delete(`${this.apiBaseUrl}/user/${t}`,{headers:r,withCredentials:!0})}}return n.\u0275fac=function(t){return new(t||n)(c.LFG(i.eN))},n.\u0275prov=c.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);