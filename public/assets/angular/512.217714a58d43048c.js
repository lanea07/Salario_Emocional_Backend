"use strict";(self.webpackChunksalarioemocionalfrontend=self.webpackChunksalarioemocionalfrontend||[]).push([[512],{8512:(ae,v,s)=>{s.r(v),s.d(v,{UserModule:()=>re});var m=s(4755),d=s(5118),b=s(5226),u=s.n(b),e=s(2223),h=s(427);function x(o,n){if(1&o&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.xp6(1),e.hij(" ",t.name," ")}}function U(o,n){if(1&o&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td")(4,"a",5),e._uU(5),e.qZA()(),e.TgZ(6,"td"),e.YNc(7,x,2,1,"div",4),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td")(15,"a",6),e._uU(16," Detalle "),e._UZ(17,"i",7),e.qZA()()()),2&o){const t=n.$implicit;e.xp6(2),e.Oqu(t.name),e.xp6(2),e.MGl("href","mailto:",t.email,"",e.LSH),e.xp6(1),e.Oqu(t.email),e.xp6(2),e.Q6J("ngForOf",t.roles),e.xp6(2),e.hij(" ",t.positions.name," "),e.xp6(2),e.Oqu(null==t.leader?null:t.leader.name),e.xp6(2),e.Oqu(null==t.subordinates?null:t.subordinates.length),e.xp6(2),e.MGl("routerLink","/user/show/",t.id,"")}}let q=(()=>{class o{constructor(t,i){this.userService=t,this.router=i,this.users=[]}ngOnInit(){this.userService.index().subscribe({next:t=>this.users=t,error:t=>{this.router.navigateByUrl("benefit-employee"),u().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:i=>{i.addEventListener("mouseenter",u().stopTimer),i.addEventListener("mouseleave",u().resumeTimer)}})}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.K),e.Y36(d.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["user-index"]],decls:21,vars:1,consts:[[1,"row","mt-5"],[1,"col"],[1,"table","table-hover","table-sm"],[1,"bg-dark","text-light"],[4,"ngFor","ngForOf"],[1,"link-primary","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover",3,"href"],[3,"routerLink"],[1,"fa-solid","fa-circle-info","fa-xs"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"table",2)(3,"thead",3)(4,"tr")(5,"th"),e._uU(6,"Nombre"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Correo"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Roles"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Cargo"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Jefe Directo"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"Empleados a cargo"),e.qZA(),e.TgZ(17,"th"),e._uU(18,"Opciones"),e.qZA()()(),e.TgZ(19,"tbody"),e.YNc(20,U,18,8,"tr",4),e.qZA()()()()),2&t&&(e.xp6(20),e.Q6J("ngForOf",i.users))},dependencies:[m.sg,d.rH],encapsulation:2}),o})();var Z=s(3900),f=s(7870);function A(o,n){1&o&&(e.TgZ(0,"div"),e._UZ(1,"i",14),e.qZA())}function S(o,n){1&o&&(e.TgZ(0,"div"),e._UZ(1,"i",14),e.qZA())}function F(o,n){1&o&&(e.TgZ(0,"div"),e._UZ(1,"i",14),e.qZA())}function w(o,n){if(1&o&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.xp6(1),e.hij(" ",t.name," ")}}function O(o,n){1&o&&(e.TgZ(0,"div"),e._UZ(1,"i",14),e.qZA())}function N(o,n){1&o&&(e.TgZ(0,"div"),e._UZ(1,"i",14),e.qZA())}function J(o,n){1&o&&(e.TgZ(0,"span",5),e._uU(1,"No registra"),e.qZA())}function y(o,n){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,J,2,0,"span",15),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.loaded)}}function I(o,n){1&o&&(e.TgZ(0,"div"),e._UZ(1,"i",14),e.qZA())}function Y(o,n){1&o&&(e.TgZ(0,"span",5),e._uU(1,"No tiene empleados a su cargo"),e.qZA())}function E(o,n){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,Y,2,0,"span",15),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.loaded)}}function k(o,n){if(1&o&&(e.TgZ(0,"tr")(1,"td")(2,"a",19),e._uU(3),e.qZA()()()),2&o){const t=n.$implicit;e.xp6(2),e.MGl("routerLink","/user/show/",t.id,""),e.xp6(1),e.Oqu(null==t?null:t.name)}}function Q(o,n){if(1&o&&(e.TgZ(0,"mat-accordion",16)(1,"mat-expansion-panel")(2,"mat-expansion-panel-header")(3,"mat-panel-title")(4,"span",5),e._uU(5," Empleados directos a su cargo "),e.qZA()()(),e.TgZ(6,"table",17)(7,"thead",18)(8,"tr")(9,"th"),e._uU(10,"Nombre"),e.qZA()()(),e.TgZ(11,"tbody"),e.YNc(12,k,4,2,"tr",6),e.qZA()()()()),2&o){const t=e.oxw();e.xp6(12),e.Q6J("ngForOf",null==t.user?null:t.user.subordinates)}}function V(o,n){if(1&o&&(e.TgZ(0,"a",19),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.MGl("routerLink","/user/show/",null==t.user||null==t.user.leader?null:t.user.leader.id,""),e.xp6(1),e.Oqu(null==t.user||null==t.user.leader?null:t.user.leader.name)}}const _=function(o){return{disabled:o}};let L=(()=>{class o{constructor(t,i,r){this.userService=t,this.activatedRoute=i,this.router=r,this.roles=[],this.loaded=!1}ngOnInit(){this.activatedRoute.params.pipe((0,Z.w)(({id:t})=>this.userService.show(t))).subscribe({next:t=>{this.user=Object.values(t)[0],this.loaded=!0,this.user?.roles?.forEach(i=>this.roles.push(i.name))},error:t=>{this.router.navigateByUrl("benefit-employee"),u().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:i=>{i.addEventListener("mouseenter",u().stopTimer),i.addEventListener("mouseleave",u().resumeTimer)}})}})}destroy(){u().fire({title:"Est\xe1 seguro?",text:"Al eliminar el usuario se eliminar\xe1 todo registro de la base de datos",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Eliminar!",showClass:{popup:"animate__animated animate__fadeIn"},hideClass:{popup:"animate__animated animate__fadeOutUp"}}).then(t=>{t.isConfirmed&&this.userService.destroy(this.user?.id).subscribe(i=>{u().fire("Deleted!",i.toString(),"success")})})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.K),e.Y36(d.gz),e.Y36(d.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["user-show"]],decls:42,vars:22,consts:[[1,"row","mt-5"],[1,"col"],[1,"row","p-5"],[1,"col-xs-12","col-md-4","d-flex","flex-column"],[4,"ngIf"],[1,"form-text"],[4,"ngFor","ngForOf"],[1,"link-primary","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover",3,"href"],[4,"ngIf","ngIfElse"],[1,"btn-group","float-end","mt-5","mb-5"],["aria-current","page",1,"btn","btn-warning",3,"routerLink","ngClass"],[1,"btn","btn-outline-danger",3,"ngClass","click"],["subordinates",""],["leader",""],[1,"fa-solid","fa-spinner","fa-spin","fa-xs"],["class","form-text",4,"ngIf"],["multi","",1,"example-headers-align"],[1,"table","table-hover","table-sm"],[1,"bg-dark","text-light"],[1,"link-primary","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover",3,"routerLink"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.YNc(4,A,2,0,"div",4),e._uU(5),e.TgZ(6,"span",5),e._uU(7,"Nombre"),e.qZA()(),e.TgZ(8,"div",3),e.YNc(9,S,2,0,"div",4),e._uU(10),e.TgZ(11,"span",5),e._uU(12,"Cargo"),e.qZA()(),e.TgZ(13,"div",3),e.YNc(14,F,2,0,"div",4),e.YNc(15,w,2,1,"div",6),e.TgZ(16,"span",5),e._uU(17,"Rol"),e.qZA()()(),e.TgZ(18,"div",2)(19,"div",3),e.YNc(20,O,2,0,"div",4),e.TgZ(21,"a",7),e._uU(22),e.qZA(),e.TgZ(23,"span",5),e._uU(24,"Correo Electr\xf3nico"),e.qZA()(),e.TgZ(25,"div",3),e.YNc(26,N,2,0,"div",4),e.YNc(27,y,2,1,"div",8),e.TgZ(28,"span",5),e._uU(29,"Jefe"),e.qZA()(),e.TgZ(30,"div",3),e.YNc(31,I,2,0,"div",4),e.YNc(32,E,2,1,"div",8),e.qZA()(),e.TgZ(33,"div",9)(34,"a",10),e._uU(35,"Editar"),e.qZA(),e.TgZ(36,"a",11),e.NdJ("click",function(){return i.destroy()}),e._uU(37,"Eliminar"),e.qZA()()()(),e.YNc(38,Q,13,1,"ng-template",null,12,e.W1O),e.YNc(40,V,2,2,"ng-template",null,13,e.W1O)),2&t){const r=e.MAs(39),l=e.MAs(41);e.xp6(4),e.Q6J("ngIf",!i.loaded),e.xp6(1),e.hij(" ",null==i.user?null:i.user.name," "),e.xp6(4),e.Q6J("ngIf",!i.loaded),e.xp6(1),e.hij(" ",null==i.user||null==i.user.positions?null:i.user.positions.name," "),e.xp6(4),e.Q6J("ngIf",!i.loaded),e.xp6(1),e.Q6J("ngForOf",null==i.user?null:i.user.roles),e.xp6(5),e.Q6J("ngIf",!i.loaded),e.xp6(1),e.MGl("href","mailto:",null==i.user?null:i.user.email,"",e.LSH),e.xp6(1),e.Oqu(null==i.user?null:i.user.email),e.xp6(4),e.Q6J("ngIf",!i.loaded),e.xp6(1),e.Q6J("ngIf",!(null!=i.user&&i.user.leader))("ngIfElse",l),e.xp6(4),e.Q6J("ngIf",!i.loaded),e.xp6(1),e.Q6J("ngIf",(null==i.user?null:i.user.subordinates.length)<1)("ngIfElse",r),e.xp6(2),e.MGl("routerLink","/user/edit/",null==i.user?null:i.user.id,""),e.Q6J("ngClass",e.VKq(18,_,!i.loaded)),e.xp6(2),e.Q6J("ngClass",e.VKq(20,_,!i.loaded))}},dependencies:[m.mk,m.sg,m.O5,d.rH,f.pp,f.ib,f.yz,f.yK],encapsulation:2}),o})();var B=s(9906),a=s(9401),M=s(9207),G=s(1407),j=s(7270),C=s(9114),R=s(787),K=s(1217);function z(o,n){1&o&&(e.TgZ(0,"span",20),e._uU(1,"Obligatorio"),e.qZA())}function $(o,n){1&o&&(e.TgZ(0,"span",20),e._uU(1,"Obligatorio"),e.qZA())}function D(o,n){if(1&o&&(e.TgZ(0,"span",20),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Oqu(t.passErrorMsg)}}function P(o,n){if(1&o&&(e.TgZ(0,"mat-option",21),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function H(o,n){if(1&o&&(e.TgZ(0,"mat-option",21),e._uU(1),e.qZA()),2&o){const t=n.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function X(o,n){1&o&&(e.TgZ(0,"div"),e._UZ(1,"i",22),e.qZA())}const p=function(o){return{invalid:o}};function W(o,n){if(1&o&&(e.TgZ(0,"div",23),e._UZ(1,"input",24),e.TgZ(2,"label",25),e._uU(3),e.qZA()()),2&o){const t=n.$implicit,i=e.oxw();e.xp6(1),e.s9C("id",t.name),e.Q6J("ngClass",e.VKq(5,p,!i.rolesFormGroup.valid&&i.rolesFormGroup.touched))("formControl",i.rolesFormGroup.get(t.name)),e.xp6(1),e.s9C("for",t.name),e.xp6(1),e.Oqu(t.name)}}function ee(o,n){1&o&&(e.TgZ(0,"div"),e._UZ(1,"i",22),e.qZA())}function te(o,n){if(1&o&&(e.TgZ(0,"div",23)(1,"div",26),e._UZ(2,"input",27),e.TgZ(3,"label",28),e._uU(4),e.qZA()()()),2&o){const t=n.$implicit,i=e.oxw();e.xp6(2),e.s9C("value",t.id),e.s9C("id",t.id),e.Q6J("ngClass",e.VKq(5,p,i.campoEsValido("position_id"))),e.xp6(1),e.s9C("for",t.id),e.xp6(1),e.hij(" ",t.name," ")}}let T=(()=>{class o{get rolesFormGroup(){return this.createForm.controls.rolesFormGroup}get passErrorMsg(){return(this.createForm.get("password")?.errors).minlength?"La contrase\xf1a no cumple con el largo m\xednimo de 6 caracteres":""}constructor(t,i,r,l,c,g,se){this.fb=t,this.userService=i,this.roleService=r,this.positionService=l,this.router=c,this.activatedRoute=g,this.validatorService=se,this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",this.user={name:"",email:"",email_verified_at:null,position_id:0,leader:null,created_at:new Date,updated_at:new Date,subordinates:[],positions:void 0,roles:[]},this.roles=[],this.positions=[],this.disableSubmitBtn=!1,this.createForm=this.fb.group({name:["",[a.kI.required,a.kI.minLength(5)]],email:["",[a.kI.required,a.kI.pattern(this.emailPattern)]],password:["",[this.passwordRequiredIfNotNull()]],leader:[""],subordinates:[""],position_id:["",a.kI.required]}),this.loaded=!1}ngOnInit(){this.roleService.index().subscribe({next:t=>{this.roles=t,this.loaded=!0,this.createForm.addControl("rolesFormGroup",this.buildChecksFormGroup(t))},error:t=>{this.router.navigateByUrl("benefit-employee"),u().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:i=>{i.addEventListener("mouseenter",u().stopTimer),i.addEventListener("mouseleave",u().resumeTimer)}})}}),this.positionService.index().subscribe(t=>{this.positions=t,this.loaded=!0}),this.userService.index().subscribe(t=>{this.posibleLeader=t,this.posibleSubordinates=t,this.filteredSubordinates=t}),this.router.url.includes("edit")&&this.activatedRoute.params.pipe((0,Z.w)(({id:t})=>this.userService.show(t))).subscribe(t=>{const i=Object.values(t)[0];this.user=i,this.createForm.get("name")?.setValue(i.name),this.createForm.get("email")?.setValue(i.email),Object.keys(this.rolesFormGroup.controls).forEach(r=>{Object.values(i.roles).forEach(l=>{r===l.name&&this.rolesFormGroup.get(r).setValue(!0)})}),i.leader&&this.createForm.get("leader")?.setValue(i.leader.id),i.subordinates&&this.createForm.get("subordinates")?.setValue(i.subordinates?.map(r=>r.id)),this.createForm.get("position_id")?.setValue(i.positions?.id?.toString())})}campoEsValido(t){return this.createForm.controls[t].errors&&this.createForm.controls[t].touched}save(){this.createForm.invalid?this.createForm.markAllAsTouched():(this.user.id?this.userService.update(this.user.id,this.createForm.value).subscribe(t=>{u().fire({title:"Actualizado",icon:"success",showClass:{popup:"animate__animated animate__fadeIn"},hideClass:{popup:"animate__animated animate__fadeOutUp"}}),this.router.navigateByUrl(`/user/show/${this.user.id}`)}):this.userService.create(this.createForm.value).subscribe(t=>{this.router.navigateByUrl(`/user/show/${t.id}`)}),this.disableSubmitBtn=!0)}buildChecksFormGroup(t,i=[]){let r=this.fb.group({},{validators:[this.atLeastOneCheckboxCheckedValidator()]});return t.forEach(l=>{let c=i.some(g=>g===l.id);r.addControl(l.name,this.fb.control(c,{},this.validatorService.checkboxRequired()))}),r}atLeastOneCheckboxCheckedValidator(t=1){return function(r){let l=0;return Object.keys(r.controls).forEach(c=>{r.controls[c].value&&l++}),l<t?{requireCheckboxToBeChecked:!0}:null}}filterSubordinates(t){this.filteredSubordinates=this.posibleSubordinates.filter(i=>i.id!==t.value)}passwordRequiredIfNotNull(t=6){return function(r){return r.value&&r.value.length<t?{minlength:!0}:null}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(a.qu),e.Y36(h.K),e.Y36(M.N),e.Y36(G.e),e.Y36(d.F0),e.Y36(d.gz),e.Y36(j.o))},o.\u0275cmp=e.Xpm({type:o,selectors:[["user-create"]],decls:45,vars:21,consts:[[1,"row","mt-5"],[1,"col"],[1,"p-5",3,"formGroup","ngSubmit"],[1,"mb-3"],["for","name",1,"form-label"],["type","text","formControlName","name","id","name","placeholder","Nombre Completo",1,"form-control",3,"ngClass"],["class","form-text text-danger",4,"ngIf"],["for","email",1,"form-label"],["type","email","formControlName","email","id","email","placeholder","email@company.com",1,"form-control",3,"ngClass"],["for","password",1,"form-label"],["type","password","formControlName","password","id","password","placeholder","password",1,"form-control",3,"ngClass"],["formControlName","leader",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["formControlName","subordinates","multiple",""],["for","roles",1,"form-label"],[1,"row"],[4,"ngIf"],["class","col-sm-6 col-md-4 col-lg-2",4,"ngFor","ngForOf"],["for","positions",1,"form-label"],["type","submit",1,"btn","btn-success","float-end",3,"disabled"],[1,"form-text","text-danger"],[3,"value"],[1,"fa-solid","fa-spinner","fa-spin","fa-xs"],[1,"col-sm-6","col-md-4","col-lg-2"],["type","checkbox",1,"form-check-input",3,"id","ngClass","formControl"],[1,"form-check-label","ms-2",3,"for"],[1,"form-check"],["type","radio","formControlName","position_id","id","position.id","required","",1,"form-check-input",3,"value","id","ngClass"],[1,"form-check-label",3,"for"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return i.save()}),e.TgZ(3,"div",3)(4,"label",4),e._uU(5,"Nombre Completo"),e.qZA(),e._UZ(6,"input",5),e.YNc(7,z,2,0,"span",6),e.qZA(),e.TgZ(8,"div",3)(9,"label",7),e._uU(10,"Correo Electr\xf3nico"),e.qZA(),e._UZ(11,"input",8),e.YNc(12,$,2,0,"span",6),e.qZA(),e.TgZ(13,"div",3)(14,"label",9),e._uU(15,"Contrase\xf1a"),e.qZA(),e._UZ(16,"input",10),e.YNc(17,D,2,1,"span",6),e.qZA(),e.TgZ(18,"div",3)(19,"mat-form-field")(20,"mat-label"),e._uU(21,"Jefe (Opcional)"),e.qZA(),e.TgZ(22,"mat-select",11),e.NdJ("selectionChange",function(l){return i.filterSubordinates(l)}),e.YNc(23,P,2,2,"mat-option",12),e.qZA()()(),e.TgZ(24,"div",3)(25,"mat-form-field")(26,"mat-label"),e._uU(27,"Subordinados (Opcional)"),e.qZA(),e.TgZ(28,"mat-select",13),e.YNc(29,H,2,2,"mat-option",12),e.qZA()()(),e.TgZ(30,"div",3)(31,"label",14),e._uU(32,"Roles"),e.qZA(),e.TgZ(33,"div",15),e.YNc(34,X,2,0,"div",16),e.YNc(35,W,4,7,"div",17),e.qZA()(),e.TgZ(36,"div",3)(37,"label",18),e._uU(38,"Cargos"),e.qZA(),e.TgZ(39,"div",15),e.YNc(40,ee,2,0,"div",16),e.YNc(41,te,5,7,"div",17),e.qZA()(),e.TgZ(42,"div",3)(43,"button",19),e._uU(44),e.qZA()()()()()),2&t&&(e.xp6(2),e.Q6J("formGroup",i.createForm),e.xp6(4),e.Q6J("ngClass",e.VKq(15,p,i.campoEsValido("name"))),e.xp6(1),e.Q6J("ngIf",i.campoEsValido("name")),e.xp6(4),e.Q6J("ngClass",e.VKq(17,p,i.campoEsValido("email"))),e.xp6(1),e.Q6J("ngIf",i.campoEsValido("email")),e.xp6(4),e.Q6J("ngClass",e.VKq(19,p,i.campoEsValido("password"))),e.xp6(1),e.Q6J("ngIf",i.campoEsValido("password")),e.xp6(6),e.Q6J("ngForOf",i.posibleLeader),e.xp6(6),e.Q6J("ngForOf",i.filteredSubordinates),e.xp6(5),e.Q6J("ngIf",!i.loaded),e.xp6(1),e.Q6J("ngForOf",i.roles),e.xp6(5),e.Q6J("ngIf",!i.loaded),e.xp6(1),e.Q6J("ngForOf",i.positions),e.xp6(2),e.Q6J("disabled",i.disableSubmitBtn),e.xp6(1),e.hij(" ",i.user.id?"Actualizar":"Crear"," "))},dependencies:[m.mk,m.sg,m.O5,a._Y,a.Fj,a.Wl,a._,a.JJ,a.JL,a.Q7,a.oH,a.sg,a.u,C.KE,C.hX,R.gD,K.ey],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),o})();const oe=[{path:"",component:B.t,children:[{path:"index",component:q},{path:"create",component:T},{path:"edit/:id",component:T},{path:"show/:id",component:L},{path:"**",redirectTo:"index"}]}];let ie=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.Bz.forChild(oe),d.Bz]}),o})();var ne=s(1292);let re=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.ez,ie,a.UX,ne.h]}),o})()}}]);