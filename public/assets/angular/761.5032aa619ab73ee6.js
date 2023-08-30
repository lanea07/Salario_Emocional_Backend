"use strict";(self.webpackChunksalarioemocionalfrontend=self.webpackChunksalarioemocionalfrontend||[]).push([[761],{7761:(N,g,n)=>{n.r(g),n.d(g,{RoleModule:()=>B});var d=n(4755),a=n(9401),b=n(5415),m=n(5118),s=n(206),S=n(2369),e=n(2223),p=n(9207),h=n(6550);let x=(()=>{class r{constructor(t,o,l,u,f){this.as=t,this.renderer=o,this.roleService=l,this.router=u,this.titleService=f,this.columns=[{title:"Nombre",data:"name"},{title:"Opciones",data:function(v,J,D){return`\n          <span style="cursor: pointer;" role_id="${v.id}" class="badge rounded-pill text-bg-warning">\n            Detalles\n            <i class="fa-solid fa-circle-info fa-fade" style="color: #000000;"></i>\n          </span>`}}],this.titleService.setTitle("Roles")}ngOnInit(){this.dtOptions={ajax:(t,o)=>{this.roleService.index().subscribe({next:l=>{o({data:l})},error:l=>{this.router.navigateByUrl("benefit-employee"),this.as.subscriptionAlert(s.fI.ERROR,s.gW.ERROR,l.error.message)}})},columns:this.columns,responsive:!0,language:S}}ngAfterViewInit(){this.renderer.listen("document","click",t=>{t.target.hasAttribute("role_id")&&this.router.navigate(["/role/show/"+t.target.getAttribute("role_id")])})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(s.c9),e.Y36(e.Qsj),e.Y36(p.N),e.Y36(m.F0),e.Y36(h.Dx))},r.\u0275cmp=e.Xpm({type:r,selectors:[["role-index"]],decls:5,vars:1,consts:[[1,"row","mt-5"],[1,"col"],["datatable","",1,"table","table-hover","table-sm",3,"dtOptions"],[1,"bg-dark","text-light"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"table",2),e._UZ(3,"thead",3)(4,"tbody"),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("dtOptions",o.dtOptions))},dependencies:[b.G],encapsulation:2}),r})();var C=n(3900),T=n(5226),c=n.n(T),y=n(1768);function A(r,i){1&r&&(e.TgZ(0,"div"),e._UZ(1,"i",9),e.qZA())}const Z=function(r){return{disabled:r}};let E=(()=>{class r{constructor(t,o,l,u){this.activatedRoute=t,this.roleService=o,this.router=l,this.titleService=u,this.loaded=!1,this.titleService.setTitle("Detalle")}ngOnInit(){this.activatedRoute.params.pipe((0,C.w)(({id:t})=>this.roleService.show(t))).subscribe({next:t=>{this.role=t,this.loaded=!0},error:t=>{this.router.navigateByUrl("benefit-employee"),c().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:o=>{o.addEventListener("mouseenter",c().stopTimer),o.addEventListener("mouseleave",c().resumeTimer)}})}})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(m.gz),e.Y36(p.N),e.Y36(m.F0),e.Y36(h.Dx))},r.\u0275cmp=e.Xpm({type:r,selectors:[["role-show"]],decls:13,vars:6,consts:[[1,"row","mt-5"],[1,"col"],[1,"row","px-5"],[1,"col-xs-12","col-md-4","d-flex","flex-column","my-2"],[4,"ngIf"],[1,"form-text"],[1,"btn-group","float-end","mt-5","mb-5"],["backButton","",1,"btn","btn-outline-secondary"],["aria-current","page",1,"btn","btn-warning",3,"routerLink","ngClass"],[1,"fa-solid","fa-spinner","fa-spin","fa-xs"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.YNc(4,A,2,0,"div",4),e._uU(5),e.TgZ(6,"span",5),e._uU(7,"Nombre"),e.qZA()()(),e.TgZ(8,"div",6)(9,"button",7),e._uU(10,"Volver"),e.qZA(),e.TgZ(11,"a",8),e._uU(12,"Editar"),e.qZA()()()()),2&t&&(e.xp6(4),e.Q6J("ngIf",!o.loaded),e.xp6(1),e.hij(" ",null==o.role?null:o.role.name," "),e.xp6(6),e.MGl("routerLink","/role/edit/",null==o.role?null:o.role.id,""),e.Q6J("ngClass",e.VKq(4,Z,!o.loaded)))},dependencies:[d.mk,d.O5,m.rH,y.z],encapsulation:2}),r})();var O=n(9906);function I(r,i){if(1&r&&(e.TgZ(0,"small",10),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Oqu(t.roleNameErrors)}}const U=function(r){return{invalid:r}};let R=(()=>{class r{get roleNameErrors(){const t=this.createForm.get("name")?.errors;return t.minlength?"El nombre no cumple con el largo m\xednimo de 5 caracteres":t.required?"El campo es obligatorio":""}constructor(t,o,l,u,f,v){this.activatedRoute=t,this.as=o,this.fb=l,this.roleService=u,this.router=f,this.titleService=v,this.createForm=this.fb.group({name:["",[a.kI.required,a.kI.minLength(5)]]}),this.disableSubmitBtn=!1,this.role={name:"",created_at:new Date,updated_at:new Date},this.titleService.setTitle("Nuevo Rol")}ngOnInit(){this.router.url.includes("edit")&&this.activatedRoute.params.pipe((0,C.w)(({id:t})=>this.roleService.show(t))).subscribe({next:t=>{const o=t;this.role=o,this.createForm.get("name")?.setValue(o.name)},error:t=>{this.router.navigateByUrl("benefit-employee"),c().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:o=>{o.addEventListener("mouseenter",c().stopTimer),o.addEventListener("mouseleave",c().resumeTimer)}})}})}campoEsValido(t){return this.createForm.controls[t].errors&&this.createForm.controls[t].touched}save(){this.createForm.invalid?this.createForm.markAllAsTouched():(this.role.id?this.roleService.update(this.role.id,this.createForm.value).subscribe({next:()=>{this.router.navigateByUrl(`/role/show/${this.role.id}`),this.as.subscriptionAlert(s.fI.ACTUALIZADO,s.gW.SUCCESS)},error:({error:t})=>{this.disableSubmitBtn=!1,this.as.subscriptionAlert(s.fI.ERROR,s.gW.ERROR,t.message)}}):this.roleService.create(this.createForm.value).subscribe({next:({id:t})=>{this.router.navigateByUrl(`/role/show/${t}`),this.as.subscriptionAlert(s.fI.CREADO,s.gW.SUCCESS)},error:({error:t})=>{this.disableSubmitBtn=!1,this.as.subscriptionAlert(s.fI.ERROR,s.gW.ERROR,t.message)}}),this.disableSubmitBtn=!0)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(m.gz),e.Y36(s.c9),e.Y36(a.qu),e.Y36(p.N),e.Y36(m.F0),e.Y36(h.Dx))},r.\u0275cmp=e.Xpm({type:r,selectors:[["role-create"]],decls:12,vars:7,consts:[[1,"row"],[1,"col"],[1,"p-5",3,"formGroup","ngSubmit"],[1,"mb-3","form-floating"],["type","text","formControlName","name","id","name","placeholder","Nombre Completo",1,"form-control",3,"ngClass"],["for","name",1,"form-label"],[1,"fa-solid","fa-toolbox","me-1"],["class","text-danger",4,"ngIf"],[1,"mb-3"],["type","submit",1,"btn","btn-success","float-end",3,"disabled"],[1,"text-danger"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return o.save()}),e.TgZ(3,"div",3),e._UZ(4,"input",4),e.TgZ(5,"label",5),e._UZ(6,"i",6),e._uU(7,"Nombre del Rol"),e.qZA(),e.YNc(8,I,2,1,"small",7),e.qZA(),e.TgZ(9,"div",8)(10,"button",9),e._uU(11),e.qZA()()()()()),2&t&&(e.xp6(2),e.Q6J("formGroup",o.createForm),e.xp6(2),e.Q6J("ngClass",e.VKq(5,U,o.campoEsValido("name"))),e.xp6(4),e.Q6J("ngIf",o.campoEsValido("name")),e.xp6(2),e.Q6J("disabled",o.disableSubmitBtn),e.xp6(1),e.hij(" ",o.role.id?"Actualizar":"Crear"," "))},dependencies:[d.mk,d.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u],encapsulation:2}),r})();const w=[{path:"",component:O.t,children:[{path:"index",component:x},{path:"create",component:R},{path:"edit/:id",component:R},{path:"show/:id",component:E},{path:"**",redirectTo:"index"}]}];let F=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[m.Bz.forChild(w),m.Bz]}),r})();var Y=n(4466);let B=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[d.ez,b.T,F,a.UX,Y.m]}),r})()}}]);