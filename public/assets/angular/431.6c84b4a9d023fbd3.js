"use strict";(self.webpackChunksalarioemocionalfrontend=self.webpackChunksalarioemocionalfrontend||[]).push([[431],{6431:(k,u,a)=>{a.r(u),a.d(u,{BenefitDetailModule:()=>S});var m=a(4755),l=a(5118),b=a(5226),o=a.n(b),e=a(2223),c=a(8473);function g(i,r){if(1&i&&(e.TgZ(0,"a",8),e._uU(1),e.qZA()),2&i){const t=r.$implicit;e.MGl("routerLink","/benefit/show/",t.id,""),e.xp6(1),e.Oqu(t.name)}}function v(i,r){if(1&i&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e.YNc(4,g,2,2,"a",5),e.qZA(),e.TgZ(5,"td")(6,"a",6),e._uU(7," Detalle "),e._UZ(8,"i",7),e.qZA()()()),2&i){const t=r.$implicit;e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Q6J("ngForOf",t.benefit),e.xp6(2),e.MGl("routerLink","/benefit-detail/show/",t.id,"")}}let Z=(()=>{class i{constructor(t,n){this.benefitDetailService=t,this.router=n,this.benefitDetails=[]}ngOnInit(){this.benefitDetailService.index().subscribe({next:t=>{this.benefitDetails=t,this.benefits=Object.values(t)},error:t=>{this.router.navigateByUrl("benefit-employee"),o().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:n=>{n.addEventListener("mouseenter",o().stopTimer),n.addEventListener("mouseleave",o().resumeTimer)}})}})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.a),e.Y36(l.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["benefitdetail-index"]],decls:13,vars:1,consts:[[1,"row","mt-5"],[1,"col"],[1,"table","table-hover","table-sm"],[1,"bg-dark","text-light"],[4,"ngFor","ngForOf"],["class","link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover px-1",3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"],[1,"fa-solid","fa-circle-info","fa-xs"],[1,"link-primary","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover","px-1",3,"routerLink"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"table",2)(3,"thead",3)(4,"tr")(5,"th"),e._uU(6,"Nombre"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Beneficio Asociado"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Opciones"),e.qZA()()(),e.TgZ(11,"tbody"),e.YNc(12,v,9,3,"tr",4),e.qZA()()()()),2&t&&(e.xp6(12),e.Q6J("ngForOf",n.benefitDetails))},dependencies:[m.sg,l.rH],styles:["table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:last-child){border-right:2px solid #0D6EFD}"]}),i})();var f=a(3900);function _(i,r){1&i&&(e.TgZ(0,"div"),e._UZ(1,"i",11),e.qZA())}function C(i,r){1&i&&(e.TgZ(0,"div"),e._UZ(1,"i",11),e.qZA())}function T(i,r){if(1&i&&(e.TgZ(0,"tr")(1,"td")(2,"a",15),e._uU(3),e.qZA()()()),2&i){const t=r.$implicit;e.xp6(2),e.MGl("routerLink","/benefit/show/",t.id,""),e.xp6(1),e.Oqu(t.name)}}function x(i,r){if(1&i&&(e.TgZ(0,"table",12)(1,"thead",13)(2,"tr")(3,"th"),e._uU(4,"Beneficio al que pertenece"),e.qZA()()(),e.TgZ(5,"tbody"),e.YNc(6,T,4,2,"tr",14),e.qZA()()),2&i){const t=e.oxw();e.xp6(6),e.Q6J("ngForOf",t.benefitDetail.benefit)}}const D=function(i){return{disabled:i}};let y=(()=>{class i{constructor(t,n,d){this.benefitDetailService=t,this.activatedRoute=n,this.router=d,this.benefitDetail={name:"",time_hours:0,created_at:new Date,updated_at:new Date,benefit:[]},this.loaded=!1}ngOnInit(){this.activatedRoute.params.pipe((0,f.w)(({id:t})=>this.benefitDetailService.show(t))).subscribe({next:t=>{this.benefitDetail=Object.values(t)[0],this.loaded=!0},error:t=>{this.router.navigateByUrl("benefit-employee"),o().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:n=>{n.addEventListener("mouseenter",o().stopTimer),n.addEventListener("mouseleave",o().resumeTimer)}})}})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.a),e.Y36(l.gz),e.Y36(l.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["benefitdetail-show"]],decls:16,vars:8,consts:[[1,"row","mt-5"],[1,"col"],[1,"row","p-5"],[1,"col-12","d-flex","flex-column"],[4,"ngIf"],[1,"form-text"],[1,"col-12"],[4,"ngIf","ngIfElse"],[1,"btn-group","float-end","mt-5","mb-5"],["aria-current","page",1,"btn","btn-warning",3,"routerLink","ngClass"],["benefitdetail",""],[1,"fa-solid","fa-spinner","fa-spin","fa-xs"],[1,"table","table-hover","table-sm"],[1,"bg-dark","text-light"],[4,"ngFor","ngForOf"],[1,"link-primary","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover",3,"routerLink"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.YNc(4,_,2,0,"div",4),e._uU(5),e.TgZ(6,"span",5),e._uU(7,"Nombre"),e.qZA()()(),e.TgZ(8,"div",2)(9,"div",6),e.YNc(10,C,2,0,"div",7),e.qZA()(),e.TgZ(11,"div",8)(12,"a",9),e._uU(13,"Editar"),e.qZA()()()(),e.YNc(14,x,7,1,"ng-template",null,10,e.W1O)),2&t){const d=e.MAs(15);e.xp6(4),e.Q6J("ngIf",!n.loaded),e.xp6(1),e.hij(" ",n.benefitDetail.name," "),e.xp6(5),e.Q6J("ngIf",!n.loaded)("ngIfElse",d),e.xp6(2),e.MGl("routerLink","/benefit-detail/edit/",n.benefitDetail.id,""),e.Q6J("ngClass",e.VKq(6,D,!n.loaded))}},dependencies:[m.mk,m.sg,m.O5,l.rH],encapsulation:2}),i})();var F=a(9906),s=a(9401),A=a(7270);function O(i,r){1&i&&(e.TgZ(0,"span",10),e._uU(1,"Obligatorio"),e.qZA())}function w(i,r){1&i&&(e.TgZ(0,"span",10),e._uU(1,"Si es diligenciado, aseg\xfarese que sea mayor que cero"),e.qZA())}const p=function(i){return{invalid:i}};let h=(()=>{class i{get benefitFormGroup(){return this.createForm.controls.benefitFormGroup}constructor(t,n,d,q,I){this.fb=t,this.benefitDetailService=n,this.router=d,this.activatedRoute=q,this.validatorService=I,this.benefitDetail={name:"",created_at:new Date,updated_at:new Date,benefit_detail:[]},this.disableSubmitBtn=!1,this.createForm=this.fb.group({name:["",[s.kI.required,s.kI.minLength(5)]],time_hours:["",[this.validatorService.minIfFilled(1)]]})}ngOnInit(){this.benefitDetailService.index().subscribe({error:t=>{this.router.navigateByUrl("benefit-employee"),o().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:n=>{n.addEventListener("mouseenter",o().stopTimer),n.addEventListener("mouseleave",o().resumeTimer)}})}}),this.router.url.includes("edit")&&this.activatedRoute.params.pipe((0,f.w)(({id:t})=>this.benefitDetailService.show(t))).subscribe({next:t=>{const n=Object.values(t)[0];this.benefitDetail=n,this.createForm.get("name")?.setValue(n.name)},error:t=>{this.router.navigateByUrl("benefit-employee"),o().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:n=>{n.addEventListener("mouseenter",o().stopTimer),n.addEventListener("mouseleave",o().resumeTimer)}})}})}campoEsValido(t){return this.createForm.controls[t].errors&&this.createForm.controls[t].touched}save(){this.createForm.invalid?this.createForm.markAllAsTouched():(this.benefitDetail.id?this.benefitDetailService.update(this.benefitDetail.id,this.createForm.value).subscribe(t=>{o().fire({title:"Actualizado",icon:"success",showClass:{popup:"animate__animated animate__fadeIn"},hideClass:{popup:"animate__animated animate__fadeOutUp"}}),this.router.navigateByUrl(`/benefit-detail/show/${this.benefitDetail.id}`)}):this.benefitDetailService.create(this.createForm.value).subscribe(t=>{this.router.navigateByUrl(`/benefit-detail/show/${t.id}`)}),this.disableSubmitBtn=!0)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(s.qu),e.Y36(c.a),e.Y36(l.F0),e.Y36(l.gz),e.Y36(A.o))},i.\u0275cmp=e.Xpm({type:i,selectors:[["benefitdetail-create"]],decls:16,vars:11,consts:[[1,"row","mt-5"],[1,"col"],[1,"p-5",3,"formGroup","ngSubmit"],[1,"mb-3"],["for","name",1,"form-label"],["type","text","formControlName","name","id","name","placeholder","Nombre Completo",1,"form-control",3,"ngClass"],["class","form-text text-danger",4,"ngIf"],["for","time_hours",1,"form-label"],["type","number","formControlName","time_hours","id","time_hours","placeholder","Nombre Completo",1,"form-control",3,"ngClass"],["type","submit",1,"btn","btn-success","float-end",3,"disabled"],[1,"form-text","text-danger"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return n.save()}),e.TgZ(3,"div",3)(4,"label",4),e._uU(5,"Nombre del Beneficio"),e.qZA(),e._UZ(6,"input",5),e.YNc(7,O,2,0,"span",6),e.qZA(),e.TgZ(8,"div",3)(9,"label",7),e._uU(10,"Tiempo en horas (Opcional)"),e.qZA(),e._UZ(11,"input",8),e.YNc(12,w,2,0,"span",6),e.qZA(),e.TgZ(13,"div",3)(14,"button",9),e._uU(15),e.qZA()()()()()),2&t&&(e.xp6(2),e.Q6J("formGroup",n.createForm),e.xp6(4),e.Q6J("ngClass",e.VKq(7,p,n.campoEsValido("name"))),e.xp6(1),e.Q6J("ngIf",n.campoEsValido("name")),e.xp6(4),e.Q6J("ngClass",e.VKq(9,p,n.campoEsValido("time_hours"))),e.xp6(1),e.Q6J("ngIf",n.campoEsValido("time_hours")),e.xp6(2),e.Q6J("disabled",n.disableSubmitBtn),e.xp6(1),e.hij(" ",n.benefitDetail.id?"Actualizar":"Crear"," "))},dependencies:[m.mk,m.O5,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.sg,s.u],encapsulation:2}),i})();const U=[{path:"",component:F.t,children:[{path:"index",component:Z},{path:"create",component:h},{path:"edit/:id",component:h},{path:"show/:id",component:y},{path:"**",redirectTo:"index"}]}];let B=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[l.Bz.forChild(U),l.Bz]}),i})(),S=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[m.ez,B,s.UX]}),i})()}}]);