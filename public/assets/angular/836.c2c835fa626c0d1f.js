"use strict";(self.webpackChunksalarioemocionalfrontend=self.webpackChunksalarioemocionalfrontend||[]).push([[836],{836:(F,f,r)=>{r.r(f),r.d(f,{PositionModule:()=>w});var u=r(4755),l=r(9401),g=r(5415),d=r(5118),n=r(206),S=r(2369),e=r(2223),p=r(1407);let E=(()=>{class i{constructor(t,o,a,c){this.as=t,this.positionService=o,this.renderer=a,this.router=c,this.columns=[{title:"Nombre",data:"name"},{title:"Opciones",data:function(h,Y,J){return`<span style="cursor: pointer;" position_id="${h.id}" class="badge rounded-pill text-bg-warning">Detalles</span>`}}]}ngOnInit(){this.dtOptions={ajax:(t,o)=>{this.positionService.index().subscribe({next:a=>{o({data:a})},error:a=>{this.router.navigateByUrl("benefit-employee"),this.as.subscriptionAlert(n.fI.ERROR,n.gW.ERROR,a.error.message)}})},columns:this.columns,responsive:!0,language:S}}ngAfterViewInit(){this.renderer.listen("document","click",t=>{t.target.hasAttribute("position_id")&&this.router.navigate(["/position/show/"+t.target.getAttribute("position_id")])})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(n.c9),e.Y36(p.e),e.Y36(e.Qsj),e.Y36(d.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["position-index"]],decls:5,vars:1,consts:[[1,"row","mt-5"],[1,"col"],["datatable","",1,"table","table-hover","table-sm",3,"dtOptions"],[1,"bg-dark","text-light"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"table",2),e._UZ(3,"thead",3)(4,"tbody"),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("dtOptions",o.dtOptions))},dependencies:[g.G],encapsulation:2}),i})();var v=r(3900),R=r(5226),m=r.n(R),A=r(1768);function x(i,s){1&i&&(e.TgZ(0,"div"),e._UZ(1,"i",10),e.qZA())}const b=function(i){return{disabled:i}};let T=(()=>{class i{constructor(t,o,a,c){this.activatedRoute=t,this.as=o,this.positionService=a,this.router=c,this.loaded=!1}ngOnInit(){this.activatedRoute.params.pipe((0,v.w)(({id:t})=>this.positionService.show(t))).subscribe({next:t=>{this.position=t,this.loaded=!0},error:t=>{this.router.navigateByUrl("benefit-employee"),m().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:o=>{o.addEventListener("mouseenter",m().stopTimer),o.addEventListener("mouseleave",m().resumeTimer)}})}})}destroy(){m().fire({title:"Est\xe1 seguro?",text:"Al eliminar el usuario se eliminar\xe1 todo registro de la base de datos",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Eliminar!",showClass:{popup:"animate__animated animate__fadeIn"},hideClass:{popup:"animate__animated animate__fadeOutUp"}}).then(t=>{t.isConfirmed&&this.positionService.destroy(this.position?.id).subscribe({next:()=>{this.router.navigateByUrl("/positions"),this.as.subscriptionAlert(n.fI.ELIMINADO,n.gW.SUCCESS)},error:({error:o})=>{this.as.subscriptionAlert(n.fI.ERROR,n.gW.ERROR,o.message)}})})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(d.gz),e.Y36(n.c9),e.Y36(p.e),e.Y36(d.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["position-show"]],decls:15,vars:9,consts:[[1,"row","mt-5"],[1,"col"],[1,"row","p-5"],[1,"col-12","d-flex","flex-column"],[4,"ngIf"],[1,"form-text"],[1,"btn-group","float-end","mt-5","mb-5"],["backButton","",1,"btn"],["aria-current","page",1,"btn","btn-warning",3,"routerLink","ngClass"],[1,"btn","btn-outline-danger",3,"ngClass","click"],[1,"fa-solid","fa-spinner","fa-spin","fa-xs"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.YNc(4,x,2,0,"div",4),e._uU(5),e.TgZ(6,"span",5),e._uU(7,"Nombre"),e.qZA()()(),e.TgZ(8,"div",6)(9,"button",7),e._uU(10,"Volver"),e.qZA(),e.TgZ(11,"a",8),e._uU(12,"Editar"),e.qZA(),e.TgZ(13,"a",9),e.NdJ("click",function(){return o.destroy()}),e._uU(14,"Eliminar"),e.qZA()()()()),2&t&&(e.xp6(4),e.Q6J("ngIf",!o.loaded),e.xp6(1),e.hij(" ",null==o.position?null:o.position.name," "),e.xp6(6),e.MGl("routerLink","/position/edit/",null==o.position?null:o.position.id,""),e.Q6J("ngClass",e.VKq(5,b,!o.loaded)),e.xp6(2),e.Q6J("ngClass",e.VKq(7,b,!o.loaded)))},dependencies:[u.mk,u.O5,d.rH,A.z],encapsulation:2}),i})();var y=r(9906);function O(i,s){if(1&i&&(e.TgZ(0,"small",8),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(t.positionNameErrors)}}const I=function(i){return{invalid:i}};let C=(()=>{class i{get positionNameErrors(){const t=this.createForm.get("name")?.errors;return t.minlength?"El nombre no cumple con el largo m\xednimo de 5 caracteres":t.required?"El campo es obligatorio":""}constructor(t,o,a,c,h){this.activatedRoute=t,this.as=o,this.fb=a,this.positionService=c,this.router=h,this.createForm=this.fb.group({name:["",[l.kI.required,l.kI.minLength(5)]]}),this.disableSubmitBtn=!1,this.position={name:"",created_at:new Date,updated_at:new Date}}ngOnInit(){this.positionService.index().subscribe({error:t=>{this.router.navigateByUrl("benefit-employee"),m().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:o=>{o.addEventListener("mouseenter",m().stopTimer),o.addEventListener("mouseleave",m().resumeTimer)}})}}),this.router.url.includes("edit")&&this.activatedRoute.params.pipe((0,v.w)(({id:t})=>this.positionService.show(t))).subscribe({next:t=>{const o=t;this.position=o,this.createForm.get("name")?.setValue(o.name)},error:t=>{this.router.navigateByUrl("benefit-employee"),m().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:o=>{o.addEventListener("mouseenter",m().stopTimer),o.addEventListener("mouseleave",m().resumeTimer)}})}})}campoEsValido(t){return this.createForm.controls[t].errors&&this.createForm.controls[t].touched}save(){this.createForm.invalid?this.createForm.markAllAsTouched():(this.position.id?this.positionService.update(this.position.id,this.createForm.value).subscribe({next:()=>{this.router.navigateByUrl(`/position/show/${this.position.id}`),this.as.subscriptionAlert(n.fI.ACTUALIZADO,n.gW.SUCCESS)},error:({error:t})=>{this.as.subscriptionAlert(n.fI.ERROR,n.gW.ERROR,t.message),this.disableSubmitBtn=!1}}):this.positionService.create(this.createForm.value).subscribe({next:({id:t})=>{this.router.navigateByUrl(`/position/show/${t}`),this.as.subscriptionAlert(n.fI.CREADO,n.gW.SUCCESS)},error:({error:t})=>{this.disableSubmitBtn=!1,this.as.subscriptionAlert(n.fI.ERROR,n.gW.ERROR,t.message)}}),this.disableSubmitBtn=!0)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(d.gz),e.Y36(n.c9),e.Y36(l.qu),e.Y36(p.e),e.Y36(d.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["position-create"]],decls:11,vars:7,consts:[[1,"row"],[1,"col"],[1,"p-5",3,"formGroup","ngSubmit"],[1,"mb-3"],["for","name",1,"form-label"],["type","text","formControlName","name","id","name","placeholder","Nombre Completo",1,"form-control",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","submit",1,"btn","btn-success","float-end",3,"disabled"],[1,"text-danger"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return o.save()}),e.TgZ(3,"div",3)(4,"label",4),e._uU(5,"Nombre del Cargo"),e.qZA(),e._UZ(6,"input",5),e.YNc(7,O,2,1,"small",6),e.qZA(),e.TgZ(8,"div",3)(9,"button",7),e._uU(10),e.qZA()()()()()),2&t&&(e.xp6(2),e.Q6J("formGroup",o.createForm),e.xp6(4),e.Q6J("ngClass",e.VKq(5,I,o.campoEsValido("name"))),e.xp6(1),e.Q6J("ngIf",o.campoEsValido("name")),e.xp6(2),e.Q6J("disabled",o.disableSubmitBtn),e.xp6(1),e.hij(" ",o.position.id?"Actualizar":"Crear"," "))},dependencies:[u.mk,u.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u],encapsulation:2}),i})();const Z=[{path:"",component:y.t,children:[{path:"index",component:E},{path:"create",component:C},{path:"edit/:id",component:C},{path:"show/:id",component:T},{path:"**",redirectTo:"index"}]}];let B=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.Bz.forChild(Z),d.Bz]}),i})();var U=r(4466);let w=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[u.ez,g.T,B,l.UX,U.m]}),i})()}}]);