"use strict";(self.webpackChunksalarioemocionalfrontend=self.webpackChunksalarioemocionalfrontend||[]).push([[836],{836:(B,h,a)=>{a.r(h),a.d(h,{PositionModule:()=>R});var u=a(4755),m=a(5118),b=a(5226),s=a.n(b),e=a(2223),c=a(1407);function C(i,r){if(1&i&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td")(4,"a",5),e._uU(5," Detalle "),e._UZ(6,"i",6),e.qZA()()()),2&i){const t=r.$implicit;e.xp6(2),e.Oqu(t.name),e.xp6(2),e.MGl("routerLink","/position/show/",t.id,"")}}let S=(()=>{class i{constructor(t,o){this.positionService=t,this.router=o,this.positions=[]}ngOnInit(){this.positionService.index().subscribe({next:t=>{this.positions=t},error:t=>{this.router.navigateByUrl("benefit-employee"),s().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:o=>{o.addEventListener("mouseenter",s().stopTimer),o.addEventListener("mouseleave",s().resumeTimer)}})}})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.e),e.Y36(m.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["position-index"]],decls:11,vars:1,consts:[[1,"row","mt-5"],[1,"col"],[1,"table","table-hover","table-sm"],[1,"bg-dark","text-light"],[4,"ngFor","ngForOf"],[3,"routerLink"],[1,"fa-solid","fa-circle-info","fa-xs"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"table",2)(3,"thead",3)(4,"tr")(5,"th"),e._uU(6,"Nombre"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Opciones"),e.qZA()()(),e.TgZ(9,"tbody"),e.YNc(10,C,7,2,"tr",4),e.qZA()()()()),2&t&&(e.xp6(10),e.Q6J("ngForOf",o.positions))},dependencies:[u.sg,m.rH],encapsulation:2}),i})();var f=a(3900),n=a(206);function E(i,r){1&i&&(e.TgZ(0,"div"),e._UZ(1,"i",9),e.qZA())}const g=function(i){return{disabled:i}};let T=(()=>{class i{constructor(t,o,d,p){this.activatedRoute=t,this.as=o,this.positionService=d,this.router=p,this.loaded=!1}ngOnInit(){this.activatedRoute.params.pipe((0,f.w)(({id:t})=>this.positionService.show(t))).subscribe({next:t=>{this.position=t,this.loaded=!0},error:t=>{this.router.navigateByUrl("benefit-employee"),s().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:o=>{o.addEventListener("mouseenter",s().stopTimer),o.addEventListener("mouseleave",s().resumeTimer)}})}})}destroy(){s().fire({title:"Est\xe1 seguro?",text:"Al eliminar el usuario se eliminar\xe1 todo registro de la base de datos",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Eliminar!",showClass:{popup:"animate__animated animate__fadeIn"},hideClass:{popup:"animate__animated animate__fadeOutUp"}}).then(t=>{t.isConfirmed&&this.positionService.destroy(this.position?.id).subscribe({next:()=>{this.router.navigateByUrl("/positions"),this.as.subscriptionAlert(n.fI.ELIMINADO,n.gW.SUCCESS)},error:({error:o})=>{this.as.subscriptionAlert(n.fI.ERROR,n.gW.ERROR,o.message)}})})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(m.gz),e.Y36(n.c9),e.Y36(c.e),e.Y36(m.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["position-show"]],decls:13,vars:9,consts:[[1,"row","mt-5"],[1,"col"],[1,"row","p-5"],[1,"col-12","d-flex","flex-column"],[4,"ngIf"],[1,"form-text"],[1,"btn-group","float-end","mt-5","mb-5"],["aria-current","page",1,"btn","btn-warning",3,"routerLink","ngClass"],[1,"btn","btn-outline-danger",3,"ngClass","click"],[1,"fa-solid","fa-spinner","fa-spin","fa-xs"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.YNc(4,E,2,0,"div",4),e._uU(5),e.TgZ(6,"span",5),e._uU(7,"Nombre"),e.qZA()()(),e.TgZ(8,"div",6)(9,"a",7),e._uU(10,"Editar"),e.qZA(),e.TgZ(11,"a",8),e.NdJ("click",function(){return o.destroy()}),e._uU(12,"Eliminar"),e.qZA()()()()),2&t&&(e.xp6(4),e.Q6J("ngIf",!o.loaded),e.xp6(1),e.hij(" ",null==o.position?null:o.position.name," "),e.xp6(4),e.MGl("routerLink","/position/edit/",null==o.position?null:o.position.id,""),e.Q6J("ngClass",e.VKq(5,g,!o.loaded)),e.xp6(2),e.Q6J("ngClass",e.VKq(7,g,!o.loaded)))},dependencies:[u.mk,u.O5,m.rH],encapsulation:2}),i})();var x=a(9906),l=a(9401);function Z(i,r){if(1&i&&(e.TgZ(0,"small",8),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(t.positionNameErrors)}}const A=function(i){return{invalid:i}};let v=(()=>{class i{get positionNameErrors(){const t=this.createForm.get("name")?.errors;return t.minlength?"El nombre no cumple con el largo m\xednimo de 5 caracteres":t.required?"El campo es obligatorio":""}constructor(t,o,d,p,w){this.activatedRoute=t,this.as=o,this.fb=d,this.positionService=p,this.router=w,this.createForm=this.fb.group({name:["",[l.kI.required,l.kI.minLength(5)]]}),this.disableSubmitBtn=!1,this.position={name:"",created_at:new Date,updated_at:new Date}}ngOnInit(){this.positionService.index().subscribe({error:t=>{this.router.navigateByUrl("benefit-employee"),s().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:o=>{o.addEventListener("mouseenter",s().stopTimer),o.addEventListener("mouseleave",s().resumeTimer)}})}}),this.router.url.includes("edit")&&this.activatedRoute.params.pipe((0,f.w)(({id:t})=>this.positionService.show(t))).subscribe({next:t=>{const o=t;this.position=o,this.createForm.get("name")?.setValue(o.name)},error:t=>{this.router.navigateByUrl("benefit-employee"),s().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:o=>{o.addEventListener("mouseenter",s().stopTimer),o.addEventListener("mouseleave",s().resumeTimer)}})}})}campoEsValido(t){return this.createForm.controls[t].errors&&this.createForm.controls[t].touched}save(){this.createForm.invalid?this.createForm.markAllAsTouched():(this.position.id?this.positionService.update(this.position.id,this.createForm.value).subscribe({next:()=>{this.router.navigateByUrl(`/position/show/${this.position.id}`),this.as.subscriptionAlert(n.fI.ACTUALIZADO,n.gW.SUCCESS)},error:({error:t})=>{this.as.subscriptionAlert(n.fI.ERROR,n.gW.ERROR,t.message),this.disableSubmitBtn=!1}}):this.positionService.create(this.createForm.value).subscribe({next:({id:t})=>{this.router.navigateByUrl(`/position/show/${t}`),this.as.subscriptionAlert(n.fI.CREADO,n.gW.SUCCESS)},error:({error:t})=>{this.disableSubmitBtn=!1,this.as.subscriptionAlert(n.fI.ERROR,n.gW.ERROR,t.message)}}),this.disableSubmitBtn=!0)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(m.gz),e.Y36(n.c9),e.Y36(l.qu),e.Y36(c.e),e.Y36(m.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["position-create"]],decls:11,vars:7,consts:[[1,"row"],[1,"col"],[1,"p-5",3,"formGroup","ngSubmit"],[1,"mb-3"],["for","name",1,"form-label"],["type","text","formControlName","name","id","name","placeholder","Nombre Completo",1,"form-control",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","submit",1,"btn","btn-success","float-end",3,"disabled"],[1,"text-danger"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return o.save()}),e.TgZ(3,"div",3)(4,"label",4),e._uU(5,"Nombre del Cargo"),e.qZA(),e._UZ(6,"input",5),e.YNc(7,Z,2,1,"small",6),e.qZA(),e.TgZ(8,"div",3)(9,"button",7),e._uU(10),e.qZA()()()()()),2&t&&(e.xp6(2),e.Q6J("formGroup",o.createForm),e.xp6(4),e.Q6J("ngClass",e.VKq(5,A,o.campoEsValido("name"))),e.xp6(1),e.Q6J("ngIf",o.campoEsValido("name")),e.xp6(2),e.Q6J("disabled",o.disableSubmitBtn),e.xp6(1),e.hij(" ",o.position.id?"Actualizar":"Crear"," "))},dependencies:[u.mk,u.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u],encapsulation:2}),i})();const y=[{path:"",component:x.t,children:[{path:"index",component:S},{path:"create",component:v},{path:"edit/:id",component:v},{path:"show/:id",component:T},{path:"**",redirectTo:"index"}]}];let U=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[m.Bz.forChild(y),m.Bz]}),i})(),R=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[u.ez,U,l.UX]}),i})()}}]);