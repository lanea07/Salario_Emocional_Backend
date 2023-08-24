"use strict";(self.webpackChunksalarioemocionalfrontend=self.webpackChunksalarioemocionalfrontend||[]).push([[431],{6431:(j,v,o)=>{o.r(v),o.d(v,{BenefitDetailModule:()=>Q});var c=o(4755),l=o(9401),x=o(5415),d=o(5118),a=o(206),S=o(2369),e=o(2223),p=o(8473),h=o(6550);let A=(()=>{class i{constructor(t,r,s,u,b){this.as=t,this.benefitDetailService=r,this.renderer=s,this.router=u,this.titleService=b,this.columns=[{title:"Nombre",data:"name"},{title:"Beneficio Asociado",data:function(f,g,M){return f.benefit.map(D=>`<a style="cursor: pointer;" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover px-1"\n          benefit_detail_id="${D.id}">${D.name}</a>`).join("|")}},{title:"Opciones",data:function(f,g,M){return`\n          <span style="cursor: pointer;" benefit_detail_options_id="${f.id}" class="badge rounded-pill text-bg-warning">\n            Detalles\n            <i class="fa-solid fa-circle-info fa-fade" style="color: #000000;"></i>\n          </span>`}}],this.titleService.setTitle("Detalles de Beneficio")}ngOnInit(){this.dtOptions={ajax:(t,r)=>{this.benefitDetailService.index().subscribe({next:s=>{r({data:s})},error:s=>{this.router.navigateByUrl("benefit-employee"),this.as.subscriptionAlert(a.fI.ERROR,a.gW.ERROR,s.error.message)}})},columns:this.columns,responsive:!0,language:S}}ngAfterViewInit(){this.renderer.listen("document","click",t=>{t.target.hasAttribute("benefit_detail_id")&&this.router.navigate(["/benefit/show/"+t.target.getAttribute("benefit_detail_id")]),t.target.hasAttribute("benefit_detail_options_id")&&this.router.navigate(["/benefit-detail/show/"+t.target.getAttribute("benefit_detail_options_id")])})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(a.c9),e.Y36(p.a),e.Y36(e.Qsj),e.Y36(d.F0),e.Y36(h.Dx))},i.\u0275cmp=e.Xpm({type:i,selectors:[["benefitdetail-index"]],decls:5,vars:1,consts:[[1,"row","mt-5"],[1,"col"],["datatable","",1,"table","table-hover","table-sm",3,"dtOptions"],[1,"bg-dark","text-light"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"table",2),e._UZ(3,"thead",3)(4,"tbody"),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("dtOptions",r.dtOptions))},dependencies:[x.G],encapsulation:2}),i})();var C=o(3900),y=o(5226),m=o.n(y),B=o(1768);function E(i,n){1&i&&(e.TgZ(0,"div"),e._UZ(1,"i",12),e.qZA())}function O(i,n){1&i&&(e.TgZ(0,"div"),e._UZ(1,"i",12),e.qZA())}function F(i,n){if(1&i&&(e.TgZ(0,"tr")(1,"td")(2,"a",16),e._uU(3),e.qZA()()()),2&i){const t=n.$implicit;e.xp6(2),e.MGl("routerLink","/benefit/show/",t.id,""),e.xp6(1),e.Oqu(t.name)}}function w(i,n){if(1&i&&(e.TgZ(0,"table",13)(1,"thead",14)(2,"tr")(3,"th"),e._uU(4,"Beneficio al que pertenece"),e.qZA()()(),e.TgZ(5,"tbody"),e.YNc(6,F,4,2,"tr",15),e.qZA()()),2&i){const t=e.oxw();e.xp6(6),e.Q6J("ngForOf",t.benefitDetail.benefit)}}const I=function(i){return{disabled:i}};let U=(()=>{class i{constructor(t,r,s,u){this.benefitDetailService=t,this.activatedRoute=r,this.router=s,this.titleService=u,this.benefitDetail={name:"",time_hours:0,created_at:new Date,updated_at:new Date,benefit:[]},this.loaded=!1,this.titleService.setTitle("Detalle")}ngOnInit(){this.activatedRoute.params.pipe((0,C.w)(({id:t})=>this.benefitDetailService.show(t))).subscribe({next:t=>{this.benefitDetail=Object.values(t)[0],this.loaded=!0},error:t=>{this.router.navigateByUrl("benefit-employee"),m().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:r=>{r.addEventListener("mouseenter",m().stopTimer),r.addEventListener("mouseleave",m().resumeTimer)}})}})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(p.a),e.Y36(d.gz),e.Y36(d.F0),e.Y36(h.Dx))},i.\u0275cmp=e.Xpm({type:i,selectors:[["benefitdetail-show"]],decls:18,vars:8,consts:[[1,"row","mt-5"],[1,"col"],[1,"row","px-5"],[1,"col-12","d-flex","flex-column","my-2"],[4,"ngIf"],[1,"form-text"],[1,"col-12"],[4,"ngIf","ngIfElse"],[1,"btn-group","float-end","mt-5","mb-5"],["backButton","",1,"btn"],["aria-current","page",1,"btn","btn-warning",3,"routerLink","ngClass"],["benefitdetail",""],[1,"fa-solid","fa-spinner","fa-spin","fa-xs"],[1,"table","table-hover","table-sm"],[1,"bg-dark","text-light"],[4,"ngFor","ngForOf"],[1,"link-primary","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover",3,"routerLink"]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.YNc(4,E,2,0,"div",4),e._uU(5),e.TgZ(6,"span",5),e._uU(7,"Nombre"),e.qZA()()(),e.TgZ(8,"div",2)(9,"div",6),e.YNc(10,O,2,0,"div",7),e.qZA()(),e.TgZ(11,"div",8)(12,"button",9),e._uU(13,"Volver"),e.qZA(),e.TgZ(14,"a",10),e._uU(15,"Editar"),e.qZA()()()(),e.YNc(16,w,7,1,"ng-template",null,11,e.W1O)),2&t){const s=e.MAs(17);e.xp6(4),e.Q6J("ngIf",!r.loaded),e.xp6(1),e.hij(" ",r.benefitDetail.name," "),e.xp6(5),e.Q6J("ngIf",!r.loaded)("ngIfElse",s),e.xp6(4),e.MGl("routerLink","/benefit-detail/edit/",r.benefitDetail.id,""),e.Q6J("ngClass",e.VKq(6,I,!r.loaded))}},dependencies:[d.rH,c.mk,c.sg,c.O5,B.z],encapsulation:2}),i})();var R=o(9906),_=o(7270);function Y(i,n){if(1&i&&(e.TgZ(0,"small",13),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(t.benefitDetailNameErrors)}}function J(i,n){if(1&i&&(e.TgZ(0,"small",13),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(t.timeHoursErrors)}}const T=function(i){return{invalid:i}};let Z=(()=>{class i{get benefitFormGroup(){return this.createForm.controls.benefitFormGroup}get benefitDetailNameErrors(){return(this.createForm.get("name")?.errors).minlength?"El nombre no cumple con el largo m\xednimo de 5 caracteres":""}get timeHoursErrors(){const t=this.createForm.get("time_hours")?.errors;return t.minIfFilled?t.minIfFilled:""}constructor(t,r,s,u,b,f,g){this.activatedRoute=t,this.as=r,this.benefitDetailService=s,this.fb=u,this.router=b,this.titleService=f,this.validatorService=g,this.benefitDetail={name:"",created_at:new Date,updated_at:new Date,benefit_detail:[]},this.createForm=this.fb.group({name:["",[l.kI.required,l.kI.minLength(5)]],time_hours:["",[this.validatorService.minIfFilled(0)]]}),this.disableSubmitBtn=!1,this.titleService.setTitle("Nuevo detalle de Beneficio")}ngOnInit(){this.benefitDetailService.index().subscribe({error:t=>{this.router.navigateByUrl("benefit-employee"),m().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:r=>{r.addEventListener("mouseenter",m().stopTimer),r.addEventListener("mouseleave",m().resumeTimer)}})}}),this.router.url.includes("edit")&&this.activatedRoute.params.pipe((0,C.w)(({id:t})=>this.benefitDetailService.show(t))).subscribe({next:t=>{const r=Object.values(t)[0];this.benefitDetail=r,this.createForm.get("name")?.setValue(r.name),this.createForm.get("time_hours")?.setValue(r.time_hours)},error:({error:t})=>{this.router.navigateByUrl("benefit-employee"),m().fire({title:"Error",icon:"error",html:t.msg,timer:3e3,timerProgressBar:!0,didOpen:r=>{r.addEventListener("mouseenter",m().stopTimer),r.addEventListener("mouseleave",m().resumeTimer)}})}})}campoEsValido(t){return this.createForm.controls[t].errors&&this.createForm.controls[t].touched}save(){this.createForm.invalid?this.createForm.markAllAsTouched():(this.benefitDetail.id?this.benefitDetailService.update(this.benefitDetail.id,this.createForm.value).subscribe({next:()=>{this.router.navigateByUrl(`/benefit-detail/show/${this.benefitDetail.id}`),this.as.subscriptionAlert(a.fI.ACTUALIZADO,a.gW.SUCCESS)},error:({error:t})=>{this.as.subscriptionAlert(a.fI.ERROR,a.gW.ERROR,t.message),this.disableSubmitBtn=!1}}):this.benefitDetailService.create(this.createForm.value).subscribe({next:({id:t})=>{this.router.navigateByUrl(`/benefit-detail/show/${t}`),this.as.subscriptionAlert(a.fI.CREADO,a.gW.SUCCESS)},error:({error:t})=>{this.disableSubmitBtn=!1,this.as.subscriptionAlert(a.fI.ERROR,a.gW.ERROR,t.message)}}),this.disableSubmitBtn=!0)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(d.gz),e.Y36(a.c9),e.Y36(p.a),e.Y36(l.qu),e.Y36(d.F0),e.Y36(h.Dx),e.Y36(_.o))},i.\u0275cmp=e.Xpm({type:i,selectors:[["benefitdetail-create"]],decls:18,vars:11,consts:[[1,"row"],[1,"col"],[1,"p-5",3,"formGroup","ngSubmit"],[1,"mb-3","form-floating"],["type","text","formControlName","name","id","name","placeholder","Nombre Completo",1,"form-control",3,"ngClass"],["for","name",1,"form-label"],[1,"fa-solid","fa-boxes-stacked","me-1"],["class","text-danger",4,"ngIf"],["type","number","formControlName","time_hours","id","time_hours","placeholder","Tiempo en horas",1,"form-control",3,"ngClass"],["for","time_hours",1,"form-label"],[1,"fa-solid","fa-hourglass-end","me-1"],[1,"mb-3"],["type","submit",1,"btn","btn-success","float-end",3,"disabled"],[1,"text-danger"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return r.save()}),e.TgZ(3,"div",3),e._UZ(4,"input",4),e.TgZ(5,"label",5),e._UZ(6,"i",6),e._uU(7,"Nombre del Beneficio"),e.qZA(),e.YNc(8,Y,2,1,"small",7),e.qZA(),e.TgZ(9,"div",3),e._UZ(10,"input",8),e.TgZ(11,"label",9),e._UZ(12,"i",10),e._uU(13,"Tiempo en horas (Opcional)"),e.qZA(),e.YNc(14,J,2,1,"small",7),e.qZA(),e.TgZ(15,"div",11)(16,"button",12),e._uU(17),e.qZA()()()()()),2&t&&(e.xp6(2),e.Q6J("formGroup",r.createForm),e.xp6(2),e.Q6J("ngClass",e.VKq(7,T,r.campoEsValido("name"))),e.xp6(4),e.Q6J("ngIf",r.campoEsValido("name")),e.xp6(2),e.Q6J("ngClass",e.VKq(9,T,r.campoEsValido("time_hours"))),e.xp6(4),e.Q6J("ngIf",r.campoEsValido("time_hours")),e.xp6(2),e.Q6J("disabled",r.disableSubmitBtn),e.xp6(1),e.hij(" ",r.benefitDetail.id?"Actualizar":"Crear"," "))},dependencies:[c.mk,c.O5,l._Y,l.Fj,l.wV,l.JJ,l.JL,l.sg,l.u],encapsulation:2}),i})();const N=[{path:"",component:R.t,children:[{path:"index",component:A},{path:"create",component:Z},{path:"edit/:id",component:Z},{path:"show/:id",component:U},{path:"**",redirectTo:"index"}]}];let L=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.Bz.forChild(N),d.Bz]}),i})();var V=o(4466);let Q=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[L,c.ez,x.T,l.UX,V.m]}),i})()}}]);