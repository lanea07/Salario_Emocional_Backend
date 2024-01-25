"use strict";(self.webpackChunksalarioemocionalfrontend=self.webpackChunksalarioemocionalfrontend||[]).push([[885],{8885:(Q,h,o)=>{o.r(h),o.d(h,{BenefitDetailModule:()=>V});var d=o(6814),s=o(6223),b=o(627),l=o(180),A=o(1107),g=o(4664),r=o(591),e=o(6689),f=o(1913),x=o(7645),C=o(1230);function y(i,m){if(1&i&&(e.TgZ(0,"small",14),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(t.benefitDetailNameErrors)}}function T(i,m){if(1&i&&(e.TgZ(0,"small",14),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(t.timeHoursErrors)}}const v=function(i){return{invalid:i}};let Z=(()=>{class i{get benefitFormGroup(){return this.createForm.controls.benefitFormGroup}get benefitDetailNameErrors(){return(this.createForm.get("name")?.errors).minlength?"El nombre no cumple con el largo m\xednimo de 5 caracteres":""}get timeHoursErrors(){const t=this.createForm.get("time_hours")?.errors;return t.minIfFilled?t.minIfFilled:""}constructor(t,n,a,c,u,p){this.activatedRoute=t,this.as=n,this.benefitDetailService=a,this.fb=c,this.router=u,this.validatorService=p,this.createForm=this.fb.group({name:["",[s.kI.required,s.kI.minLength(5)]],time_hours:["",[s.kI.required,this.validatorService.minIfFilled(1)]]}),this.disableSubmitBtn=!1}ngOnInit(){this.benefitDetailService.index().subscribe({error:t=>this.as.subscriptionAlert(r.fI.ERROR,r.gW.ERROR,t.message)}),this.router.url.includes("edit")&&this.activatedRoute.params.pipe((0,g.w)(({id:t})=>this.benefitDetailService.show(t))).subscribe({next:t=>{const n=Object.values(t)[0];this.benefitDetail=n,this.createForm.get("name")?.setValue(n.name),this.createForm.get("time_hours")?.setValue(n.time_hours)},error:({error:t})=>{this.router.navigateByUrl("benefit-employee"),this.as.subscriptionAlert(r.fI.ERROR,r.gW.ERROR,t.message)}})}campoEsValido(t){return this.createForm.controls[t].errors&&this.createForm.controls[t].touched}save(){this.createForm.invalid?this.createForm.markAllAsTouched():(this.benefitDetail?.id?this.benefitDetailService.update(this.benefitDetail.id,this.createForm.value).subscribe({next:()=>{this.router.navigateByUrl(`/benefit-detail/show/${this.benefitDetail?.id}`),this.as.subscriptionAlert(r.fI.ACTUALIZADO,r.gW.SUCCESS)},error:({error:t})=>{this.as.subscriptionAlert(r.fI.ERROR,r.gW.ERROR,t.message),this.disableSubmitBtn=!1}}):this.benefitDetailService.create(this.createForm.value).subscribe({next:({id:t})=>{this.router.navigateByUrl(`/benefit-detail/show/${t}`),this.as.subscriptionAlert(r.fI.CREADO,r.gW.SUCCESS)},error:({error:t})=>{this.disableSubmitBtn=!1,this.as.subscriptionAlert(r.fI.ERROR,r.gW.ERROR,t.message)}}),this.disableSubmitBtn=!0)}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(l.gz),e.Y36(r.c9),e.Y36(f.a),e.Y36(s.qu),e.Y36(l.F0),e.Y36(x.o))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["benefitdetail-create"]],decls:20,vars:11,consts:[[1,"row"],[1,"col"],[1,"p-5",3,"formGroup","ngSubmit"],[1,"mb-3"],["header","Informaci\xf3n del detalle de Beneficio"],[1,"mb-3","form-floating"],["type","text","formControlName","name","id","name","placeholder","Nombre Completo",1,"form-control",3,"ngClass"],["for","name",1,"form-label"],[1,"fa-solid","fa-boxes-stacked","me-1"],["class","text-danger",4,"ngIf"],["type","number","formControlName","time_hours","id","time_hours","placeholder","Tiempo en horas",1,"form-control",3,"ngClass"],["for","time_hours",1,"form-label"],[1,"fa-solid","fa-hourglass-end","me-1"],["type","submit",1,"btn","btn-success","float-end",3,"disabled"],[1,"text-danger"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return a.save()}),e.TgZ(3,"div",3)(4,"p-panel",4)(5,"div",5),e._UZ(6,"input",6),e.TgZ(7,"label",7),e._UZ(8,"i",8),e._uU(9,"Nombre del Beneficio"),e.qZA(),e.YNc(10,y,2,1,"small",9),e.qZA(),e.TgZ(11,"div",5),e._UZ(12,"input",10),e.TgZ(13,"label",11),e._UZ(14,"i",12),e._uU(15,"Tiempo en horas (Opcional)"),e.qZA(),e.YNc(16,T,2,1,"small",9),e.qZA()()(),e.TgZ(17,"div",3)(18,"button",13),e._uU(19),e.qZA()()()()()),2&n&&(e.xp6(2),e.Q6J("formGroup",a.createForm),e.xp6(4),e.Q6J("ngClass",e.VKq(7,v,a.campoEsValido("name"))),e.xp6(4),e.Q6J("ngIf",a.campoEsValido("name")),e.xp6(2),e.Q6J("ngClass",e.VKq(9,v,a.campoEsValido("time_hours"))),e.xp6(4),e.Q6J("ngIf",a.campoEsValido("time_hours")),e.xp6(2),e.Q6J("disabled",a.disableSubmitBtn),e.xp6(1),e.hij(" ",null!=a.benefitDetail&&a.benefitDetail.id?"Actualizar":"Crear"," "))},dependencies:[d.mk,d.O5,C.s,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.sg,s.u],encapsulation:2})}return i})();var O=o(2369);let S=(()=>{class i{constructor(t,n,a,c){this.as=t,this.benefitDetailService=n,this.renderer=a,this.router=c,this.columns=[{title:"Nombre",data:"name"},{title:"Beneficio Asociado",data:function(u,p,k){return u.benefit.map(R=>`<a style="cursor: pointer;" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover px-1"\n          benefit_detail_id="${R.id}">${R.name}</a>`).join("|")}},{title:"Opciones",data:function(u,p,k){return`\n          <span style="cursor: pointer;" benefit_detail_options_id="${u.id}" class="badge rounded-pill text-bg-warning">\n            Detalles\n            <i class="fa-solid fa-circle-info fa-fade" style="color: #000000;"></i>\n          </span>`}}]}ngOnInit(){this.dtOptions={ajax:(t,n)=>{this.benefitDetailService.index().subscribe({next:a=>{n({data:a})},error:a=>{this.router.navigateByUrl("benefit-employee"),this.as.subscriptionAlert(r.fI.ERROR,r.gW.ERROR,a.error.message)}})},columns:this.columns,responsive:!0,language:O}}ngAfterViewInit(){this.renderer.listen("document","click",t=>{t.target.hasAttribute("benefit_detail_id")&&this.router.navigate(["/benefit/show/"+t.target.getAttribute("benefit_detail_id")]),t.target.hasAttribute("benefit_detail_options_id")&&this.router.navigate(["/benefit-detail/show/"+t.target.getAttribute("benefit_detail_options_id")])})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(r.c9),e.Y36(f.a),e.Y36(e.Qsj),e.Y36(l.F0))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["benefitdetail-index"]],decls:5,vars:1,consts:[[1,"row","mt-5"],[1,"col"],["datatable","",1,"table","table-hover","table-sm","table-striped",3,"dtOptions"],[1,"bg-dark","text-light"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"table",2),e._UZ(3,"thead",3)(4,"tbody"),e.qZA()()()),2&n&&(e.xp6(2),e.Q6J("dtOptions",a.dtOptions))},dependencies:[b.G],encapsulation:2})}return i})();var D=o(3416);function F(i,m){1&i&&(e.TgZ(0,"div"),e._UZ(1,"i",12),e.qZA())}function I(i,m){1&i&&(e.TgZ(0,"div"),e._UZ(1,"i",12),e.qZA())}function E(i,m){if(1&i&&(e.TgZ(0,"tr")(1,"td")(2,"a",16),e._uU(3),e.qZA()()()),2&i){const t=m.$implicit;e.xp6(2),e.MGl("routerLink","/benefit/show/",t.id,""),e.xp6(1),e.Oqu(t.name)}}function U(i,m){if(1&i&&(e.TgZ(0,"table",13)(1,"thead",14)(2,"tr")(3,"th"),e._uU(4,"Beneficio al que pertenece"),e.qZA()()(),e.TgZ(5,"tbody"),e.YNc(6,E,4,2,"tr",15),e.qZA()()),2&i){const t=e.oxw();e.xp6(6),e.Q6J("ngForOf",null==t.benefitDetail?null:t.benefitDetail.benefit)}}const B=function(i){return{disabled:i}},w=[{path:"",component:A.t,children:[{path:"index",component:S,title:"P\xe1gina Principal"},{path:"create",component:Z,title:"Crear Beneficio"},{path:"edit/:id",component:Z,title:"Editar Beneficio"},{path:"show/:id",component:(()=>{class i{constructor(t,n,a,c){this.benefitDetailService=t,this.activatedRoute=n,this.as=a,this.router=c,this.loaded=!1}ngOnInit(){this.activatedRoute.params.pipe((0,g.w)(({id:t})=>this.benefitDetailService.show(t))).subscribe({next:t=>{this.benefitDetail=Object.values(t)[0],this.loaded=!0},error:t=>{this.router.navigateByUrl("benefit-employee"),this.as.subscriptionAlert(r.fI.ERROR,r.gW.ERROR,t.message)}})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(f.a),e.Y36(l.gz),e.Y36(r.c9),e.Y36(l.F0))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["benefitdetail-show"]],decls:20,vars:8,consts:[[1,"row"],[1,"col"],[1,"btn-group","float-end","mt-5","mb-5"],["backButton","",1,"btn","btn-outline-secondary"],["aria-current","page",1,"btn","btn-warning",3,"routerLink","ngClass"],[1,"row","px-5"],[1,"col-12","d-flex","flex-column","my-2"],[4,"ngIf"],[1,"form-text"],[1,"col-12"],[4,"ngIf","ngIfElse"],["benefitdetail",""],[1,"fa-solid","fa-spinner","fa-spin","fa-xs"],[1,"table","table-hover","table-sm"],[1,"bg-dark","text-light"],[4,"ngFor","ngForOf"],[1,"link-primary","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover",3,"routerLink"]],template:function(n,a){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),e._uU(4,"Volver"),e.qZA(),e.TgZ(5,"a",4),e._uU(6,"Editar"),e.qZA()()()(),e.TgZ(7,"div",0)(8,"div",1)(9,"div",5)(10,"div",6),e.YNc(11,F,2,0,"div",7),e._uU(12),e.TgZ(13,"span",8),e._uU(14,"Nombre"),e.qZA()()(),e.TgZ(15,"div",5)(16,"div",9),e.YNc(17,I,2,0,"div",10),e.qZA()()()(),e.YNc(18,U,7,1,"ng-template",null,11,e.W1O)),2&n){const c=e.MAs(19);e.xp6(5),e.MGl("routerLink","/benefit-detail/edit/",null==a.benefitDetail?null:a.benefitDetail.id,""),e.Q6J("ngClass",e.VKq(6,B,!a.loaded)),e.xp6(6),e.Q6J("ngIf",!a.loaded),e.xp6(1),e.hij(" ",null==a.benefitDetail?null:a.benefitDetail.name," "),e.xp6(5),e.Q6J("ngIf",!a.loaded)("ngIfElse",c)}},dependencies:[l.rH,d.mk,d.sg,d.O5,D.z],encapsulation:2})}return i})(),title:"Ver Beneficio"},{path:"**",redirectTo:"index"}]}];let Y=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[l.Bz.forChild(w),l.Bz]})}return i})();var J=o(6208),N=o(3162);let V=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[Y,d.ez,b.T,N.W,s.UX,J.m]})}return i})()}}]);