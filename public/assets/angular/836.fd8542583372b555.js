"use strict";(self.webpackChunksalarioemocionalfrontend=self.webpackChunksalarioemocionalfrontend||[]).push([[836],{836:(J,v,n)=>{n.r(v),n.d(v,{PositionModule:()=>Y});var c=n(4755),l=n(9401),b=n(5415),d=n(5118),r=n(206),T=n(2369),e=n(2223),h=n(1407),f=n(6550);let E=(()=>{class i{constructor(t,o,a,u,p){this.as=t,this.positionService=o,this.renderer=a,this.router=u,this.titleService=p,this.columns=[{title:"Nombre",data:"name"},{title:"Opciones",data:function(g,N,L){return`\n          <span style="cursor: pointer;" position_id="${g.id}" class="badge rounded-pill text-bg-warning">\n            Detalles\n            <i class="fa-solid fa-circle-info fa-fade" style="color: #000000;"></i>\n          </span>`}}],this.titleService.setTitle("Cargos")}ngOnInit(){this.dtOptions={ajax:(t,o)=>{this.positionService.index().subscribe({next:a=>{o({data:a})},error:a=>{this.router.navigateByUrl("benefit-employee"),this.as.subscriptionAlert(r.fI.ERROR,r.gW.ERROR,a.error.message)}})},columns:this.columns,responsive:!0,language:T}}ngAfterViewInit(){this.renderer.listen("document","click",t=>{t.target.hasAttribute("position_id")&&this.router.navigate(["/position/show/"+t.target.getAttribute("position_id")])})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(r.c9),e.Y36(h.e),e.Y36(e.Qsj),e.Y36(d.F0),e.Y36(f.Dx))},i.\u0275cmp=e.Xpm({type:i,selectors:[["position-index"]],decls:5,vars:1,consts:[[1,"row","mt-5"],[1,"col"],["datatable","",1,"table","table-hover","table-sm","table-striped",3,"dtOptions"],[1,"bg-dark","text-light"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"table",2),e._UZ(3,"thead",3)(4,"tbody"),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("dtOptions",o.dtOptions))},dependencies:[b.G],encapsulation:2}),i})();var C=n(3900),y=n(5226),m=n.n(y),R=n(1768);function A(i,s){1&i&&(e.TgZ(0,"div"),e._UZ(1,"i",10),e.qZA())}const S=function(i){return{disabled:i}};let O=(()=>{class i{constructor(t,o,a,u,p){this.activatedRoute=t,this.as=o,this.positionService=a,this.router=u,this.titleService=p,this.loaded=!1,this.titleService.setTitle("Detalle")}ngOnInit(){this.activatedRoute.params.pipe((0,C.w)(({id:t})=>this.positionService.show(t))).subscribe({next:t=>{this.position=t,this.loaded=!0},error:t=>{this.router.navigateByUrl("benefit-employee"),m().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:o=>{o.addEventListener("mouseenter",m().stopTimer),o.addEventListener("mouseleave",m().resumeTimer)}})}})}destroy(){m().fire({title:"Est\xe1 seguro?",text:"Al eliminar el usuario se eliminar\xe1 todo registro de la base de datos",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Eliminar!",showClass:{popup:"animate__animated animate__fadeIn"},hideClass:{popup:"animate__animated animate__fadeOutUp"}}).then(t=>{t.isConfirmed&&this.positionService.destroy(this.position?.id).subscribe({next:()=>{this.router.navigateByUrl("/positions"),this.as.subscriptionAlert(r.fI.ELIMINADO,r.gW.SUCCESS)},error:({error:o})=>{this.as.subscriptionAlert(r.fI.ERROR,r.gW.ERROR,o.message)}})})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(d.gz),e.Y36(r.c9),e.Y36(h.e),e.Y36(d.F0),e.Y36(f.Dx))},i.\u0275cmp=e.Xpm({type:i,selectors:[["position-show"]],decls:15,vars:9,consts:[[1,"row","mt-5"],[1,"col"],[1,"row","px-5"],[1,"col-12","d-flex","flex-column","my-2"],[4,"ngIf"],[1,"form-text"],[1,"btn-group","float-end","mt-5","mb-5"],["backButton","",1,"btn","btn-outline-secondary"],["aria-current","page",1,"btn","btn-warning",3,"routerLink","ngClass"],[1,"btn","btn-outline-danger",3,"ngClass","click"],[1,"fa-solid","fa-spinner","fa-spin","fa-xs"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.YNc(4,A,2,0,"div",4),e._uU(5),e.TgZ(6,"span",5),e._uU(7,"Nombre"),e.qZA()()(),e.TgZ(8,"div",6)(9,"button",7),e._uU(10,"Volver"),e.qZA(),e.TgZ(11,"a",8),e._uU(12,"Editar"),e.qZA(),e.TgZ(13,"a",9),e.NdJ("click",function(){return o.destroy()}),e._uU(14,"Eliminar"),e.qZA()()()()),2&t&&(e.xp6(4),e.Q6J("ngIf",!o.loaded),e.xp6(1),e.hij(" ",null==o.position?null:o.position.name," "),e.xp6(6),e.MGl("routerLink","/position/edit/",null==o.position?null:o.position.id,""),e.Q6J("ngClass",e.VKq(5,S,!o.loaded)),e.xp6(2),e.Q6J("ngClass",e.VKq(7,S,!o.loaded)))},dependencies:[c.mk,c.O5,d.rH,R.z],encapsulation:2}),i})();var Z=n(9906);function I(i,s){if(1&i&&(e.TgZ(0,"small",10),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(t.positionNameErrors)}}const U=function(i){return{invalid:i}};let x=(()=>{class i{get positionNameErrors(){const t=this.createForm.get("name")?.errors;return t.minlength?"El nombre no cumple con el largo m\xednimo de 5 caracteres":t.required?"El campo es obligatorio":""}constructor(t,o,a,u,p,g){this.activatedRoute=t,this.as=o,this.fb=a,this.positionService=u,this.router=p,this.titleService=g,this.createForm=this.fb.group({name:["",[l.kI.required,l.kI.minLength(5)]]}),this.disableSubmitBtn=!1,this.position={name:"",created_at:new Date,updated_at:new Date},this.titleService.setTitle("Nuevo Cargo")}ngOnInit(){this.positionService.index().subscribe({error:t=>{this.router.navigateByUrl("benefit-employee"),m().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:o=>{o.addEventListener("mouseenter",m().stopTimer),o.addEventListener("mouseleave",m().resumeTimer)}})}}),this.router.url.includes("edit")&&this.activatedRoute.params.pipe((0,C.w)(({id:t})=>this.positionService.show(t))).subscribe({next:t=>{const o=t;this.position=o,this.createForm.get("name")?.setValue(o.name)},error:t=>{this.router.navigateByUrl("benefit-employee"),m().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:o=>{o.addEventListener("mouseenter",m().stopTimer),o.addEventListener("mouseleave",m().resumeTimer)}})}})}campoEsValido(t){return this.createForm.controls[t].errors&&this.createForm.controls[t].touched}save(){this.createForm.invalid?this.createForm.markAllAsTouched():(this.position.id?this.positionService.update(this.position.id,this.createForm.value).subscribe({next:()=>{this.router.navigateByUrl(`/position/show/${this.position.id}`),this.as.subscriptionAlert(r.fI.ACTUALIZADO,r.gW.SUCCESS)},error:({error:t})=>{this.as.subscriptionAlert(r.fI.ERROR,r.gW.ERROR,t.message),this.disableSubmitBtn=!1}}):this.positionService.create(this.createForm.value).subscribe({next:({id:t})=>{this.router.navigateByUrl(`/position/show/${t}`),this.as.subscriptionAlert(r.fI.CREADO,r.gW.SUCCESS)},error:({error:t})=>{this.disableSubmitBtn=!1,this.as.subscriptionAlert(r.fI.ERROR,r.gW.ERROR,t.message)}}),this.disableSubmitBtn=!0)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(d.gz),e.Y36(r.c9),e.Y36(l.qu),e.Y36(h.e),e.Y36(d.F0),e.Y36(f.Dx))},i.\u0275cmp=e.Xpm({type:i,selectors:[["position-create"]],decls:12,vars:7,consts:[[1,"row"],[1,"col"],[1,"p-5",3,"formGroup","ngSubmit"],[1,"mb-3","form-floating"],["type","text","formControlName","name","id","name","placeholder","Nombre Completo",1,"form-control",3,"ngClass"],["for","name",1,"form-label"],[1,"fa-solid","fa-briefcase","me-1"],["class","text-danger",4,"ngIf"],[1,"mb-3"],["type","submit",1,"btn","btn-success","float-end",3,"disabled"],[1,"text-danger"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return o.save()}),e.TgZ(3,"div",3),e._UZ(4,"input",4),e.TgZ(5,"label",5),e._UZ(6,"i",6),e._uU(7,"Nombre del Cargo"),e.qZA(),e.YNc(8,I,2,1,"small",7),e.qZA(),e.TgZ(9,"div",8)(10,"button",9),e._uU(11),e.qZA()()()()()),2&t&&(e.xp6(2),e.Q6J("formGroup",o.createForm),e.xp6(2),e.Q6J("ngClass",e.VKq(5,U,o.campoEsValido("name"))),e.xp6(4),e.Q6J("ngIf",o.campoEsValido("name")),e.xp6(2),e.Q6J("disabled",o.disableSubmitBtn),e.xp6(1),e.hij(" ",o.position.id?"Actualizar":"Crear"," "))},dependencies:[c.mk,c.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u],encapsulation:2}),i})();const B=[{path:"",component:Z.t,children:[{path:"index",component:E},{path:"create",component:x},{path:"edit/:id",component:x},{path:"show/:id",component:O},{path:"**",redirectTo:"index"}]}];let w=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.Bz.forChild(B),d.Bz]}),i})();var F=n(4466);let Y=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[c.ez,b.T,w,l.UX,F.m]}),i})()}}]);