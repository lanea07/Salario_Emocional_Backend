"use strict";(self.webpackChunksalarioemocionalfrontend=self.webpackChunksalarioemocionalfrontend||[]).push([[967],{5967:(z,b,a)=>{a.r(b),a.d(b,{BenefitModule:()=>W});var u=a(4755),l=a(9401),v=a(5415),m=a(5118),c=a(206),_=a(2369),e=a(2223),h=a(1239),g=a(6550);let F=(()=>{class i{constructor(t,n,r,s,d){this.as=t,this.benefitService=n,this.renderer=r,this.router=s,this.titleService=d,this.columns=[{title:"Nombre",data:"name"},{title:"Opciones",data:function(p,Z,S){return`\n          <span style="cursor: pointer;" benefit_id="${p.id}" class="badge rounded-pill text-bg-warning">\n            Detalles\n            <i class="fa-solid fa-circle-info fa-fade" style="color: #000000;"></i>\n          </span>`}}],this.titleService.setTitle("Beneficios")}ngOnInit(){this.dtOptions={ajax:(t,n)=>{this.benefitService.index().subscribe({next:r=>{n({data:r})},error:r=>{this.router.navigateByUrl("benefit-employee"),this.as.subscriptionAlert(c.fI.ERROR,c.gW.ERROR,r.error.message)}})},columns:this.columns,responsive:!0,language:_}}ngAfterViewInit(){this.renderer.listen("document","click",t=>{t.target.hasAttribute("benefit_id")&&this.router.navigate(["/benefit/show/"+t.target.getAttribute("benefit_id")])})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.c9),e.Y36(h.T),e.Y36(e.Qsj),e.Y36(m.F0),e.Y36(g.Dx))},i.\u0275cmp=e.Xpm({type:i,selectors:[["benefit-index"]],decls:5,vars:1,consts:[[1,"row","mt-5"],[1,"col"],["datatable","",1,"table","table-hover","table-sm",3,"dtOptions"],[1,"bg-dark","text-light"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"table",2),e._UZ(3,"thead",3)(4,"tbody"),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("dtOptions",n.dtOptions))},dependencies:[v.G],encapsulation:2}),i})();var C=a(3900),A=a(5226),f=a.n(A),E=a(6518),y=a(1768);function I(i,o){1&i&&(e.TgZ(0,"div"),e._UZ(1,"i",13),e.qZA())}function O(i,o){if(1&i&&(e.TgZ(0,"div",14)(1,"p")(2,"a",15),e._UZ(3,"i",16),e._uU(4,"Pol\xedtica"),e.qZA()()()),2&i){const t=e.oxw();e.xp6(2),e.s9C("href",t.filePoliticas,e.LSH)}}function w(i,o){1&i&&(e.TgZ(0,"div"),e._UZ(1,"i",13),e.qZA())}const D=function(i){return{disabled:i}};function B(i,o){if(1&i&&(e.TgZ(0,"a",17),e._uU(1,"Editar"),e.qZA()),2&i){const t=e.oxw();e.MGl("routerLink","/benefit/edit/",t.benefit.id,""),e.Q6J("ngClass",e.VKq(2,D,!t.loaded))}}function U(i,o){if(1&i&&(e.TgZ(0,"tr")(1,"td")(2,"p"),e._uU(3),e.qZA()()()),2&i){const t=o.$implicit;e.xp6(3),e.Oqu(t.name)}}function Y(i,o){if(1&i&&(e.TgZ(0,"table",18)(1,"thead",19)(2,"tr")(3,"th"),e._uU(4,"Posibles configuraciones"),e.qZA()()(),e.TgZ(5,"tbody"),e.YNc(6,U,4,1,"tr",20),e.qZA()()),2&i){const t=e.oxw();e.xp6(6),e.Q6J("ngForOf",null==t.benefit?null:t.benefit.benefit_detail)}}let k=(()=>{class i{constructor(t,n,r,s,d){this.activatedRoute=t,this.authService=n,this.benefitService=r,this.router=s,this.titleService=d,this.benefit={name:"",created_at:new Date,updated_at:new Date,benefit_detail:[]},this.filePoliticas="",this.isAdmin=!1,this.loaded=!1,this.titleService.setTitle("Detalle")}ngOnInit(){this.activatedRoute.params.pipe((0,C.w)(({id:t})=>this.benefitService.show(t))).subscribe({next:t=>{console.log(t),this.benefit=Object.values(t)[0],this.details=this.benefit.benefit_detail,this.filePoliticas=this.benefit.politicas_path?this.benefit.politicas_path:"",this.loaded=!0},error:t=>{this.router.navigateByUrl("benefit-employee"),f().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:n=>{n.addEventListener("mouseenter",f().stopTimer),n.addEventListener("mouseleave",f().resumeTimer)}})}}),this.authService.validarAdmin().subscribe({next:t=>{this.isAdmin=t.admin},error:t=>{f().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:n=>{n.addEventListener("mouseenter",f().stopTimer),n.addEventListener("mouseleave",f().resumeTimer)}})}})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(m.gz),e.Y36(E.e),e.Y36(h.T),e.Y36(m.F0),e.Y36(g.Dx))},i.\u0275cmp=e.Xpm({type:i,selectors:[["benefit-show"]],decls:18,vars:6,consts:[[1,"row","mt-5"],[1,"col"],[1,"row","px-5"],[1,"col-10","d-flex","flex-column","my-2"],[4,"ngIf"],[1,"form-text"],["class","col-2",4,"ngIf"],[1,"col-12"],[4,"ngIf","ngIfElse"],[1,"btn-group","float-end","mt-5","mb-5"],["backButton","",1,"btn","btn-outline-secondary"],["class","btn btn-warning","aria-current","page",3,"routerLink","ngClass",4,"ngIf"],["benefitDetail",""],[1,"fa-solid","fa-spinner","fa-spin","fa-xs"],[1,"col-2"],["target","_blank",1,"link-secondary","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover",3,"href"],[1,"fa-solid","fa-arrow-up-right-from-square","me-1"],["aria-current","page",1,"btn","btn-warning",3,"routerLink","ngClass"],[1,"table","table-hover","table-sm"],[1,"bg-dark","text-light"],[4,"ngFor","ngForOf"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.YNc(4,I,2,0,"div",4),e._uU(5),e.TgZ(6,"span",5),e._uU(7,"Nombre"),e.qZA()(),e.YNc(8,O,5,1,"div",6),e.qZA(),e.TgZ(9,"div",2)(10,"div",7),e.YNc(11,w,2,0,"div",8),e.qZA()(),e.TgZ(12,"div",9)(13,"button",10),e._uU(14,"Volver"),e.qZA(),e.YNc(15,B,2,4,"a",11),e.qZA()()(),e.YNc(16,Y,7,1,"ng-template",null,12,e.W1O)),2&t){const r=e.MAs(17);e.xp6(4),e.Q6J("ngIf",!n.loaded),e.xp6(1),e.hij(" ",n.benefit.name," "),e.xp6(3),e.Q6J("ngIf",n.filePoliticas),e.xp6(3),e.Q6J("ngIf",!n.loaded)("ngIfElse",r),e.xp6(4),e.Q6J("ngIf",n.isAdmin)}},dependencies:[m.rH,u.mk,u.sg,u.O5,y.z],encapsulation:2}),i})();var R=a(9906),J=a(8473),N=a(7270);function P(i,o){if(1&i&&(e.TgZ(0,"small",15),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(t.benefitNameErrors)}}function G(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",16)(1,"input",17),e.NdJ("change",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.onFileChange(r))}),e.qZA()()}}function L(i,o){1&i&&(e.TgZ(0,"div"),e._UZ(1,"i",18),e.qZA())}const x=function(i){return{invalid:i}};function q(i,o){if(1&i&&(e.TgZ(0,"div",19)(1,"label",20),e._UZ(2,"input",21),e._uU(3),e.qZA()()),2&i){const t=o.$implicit,n=e.oxw();e.xp6(2),e.Q6J("ngClass",e.VKq(3,x,!n.benefitDetailFormGroup.valid&&n.benefitDetailFormGroup.touched))("formControl",n.benefitDetailFormGroup.get(null==t.id?null:t.id.toString())),e.xp6(1),e.hij(" ",t.name," ")}}function Q(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",9)(1,"a",22),e._UZ(2,"i",23),e._uU(3,"Ver pol\xedtica"),e.qZA(),e.TgZ(4,"a",24),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.showInput())}),e._UZ(5,"i",25),e._uU(6,"Editar adjunto"),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(1),e.s9C("href",t.filePoliticas,e.LSH)}}let T=(()=>{class i{get benefitDetailFormGroup(){return this.createForm.controls.benefitDetailFormGroup}get benefitNameErrors(){const t=this.createForm.get("name")?.errors;return t.minlength?"El nombre no cumple con el largo m\xednimo de 5 caracteres":t.required?"El campo es obligatorio":""}constructor(t,n,r,s,d,p,Z,S){this.activatedRoute=t,this.as=n,this.benefitDetailService=r,this.benefitService=s,this.fb=d,this.router=p,this.titleService=Z,this.validatorService=S,this.benefit={name:"",created_at:new Date,updated_at:new Date,benefit_detail:[]},this.benefitDetails=[],this.createForm=this.fb.group({name:["",[l.kI.required,l.kI.minLength(5)]],filePoliticas:[]}),this.disableSubmitBtn=!1,this.filePoliticas="",this.loaded=!1,this.politicsInput=!0,this.titleService.setTitle("Nuevo Beneficio")}ngOnInit(){this.benefitDetailService.index().subscribe({next:t=>{this.benefitDetails=t,this.loaded=!0,this.createForm.addControl("benefitDetailFormGroup",this.buildBenefitDetailFormGroup(t))},error:t=>{this.router.navigateByUrl("benefit-employee"),f().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:n=>{n.addEventListener("mouseenter",f().stopTimer),n.addEventListener("mouseleave",f().resumeTimer)}})}}),this.router.url.includes("edit")&&this.activatedRoute.params.pipe((0,C.w)(({id:t})=>this.benefitService.show(t))).subscribe({next:t=>{console.log(t);const n=Object.values(t)[0];this.benefit=n,this.createForm.get("name")?.setValue(n.name),Object.keys(this.benefitDetailFormGroup.controls).forEach(r=>{Object.values(n.benefit_detail).forEach(s=>{r===s.id.toString()&&this.benefitDetailFormGroup.get(r).setValue(!0)})}),this.benefit.politicas_path?(this.filePoliticas=this.benefit.politicas_path,this.politicsInput=!1):this.politicsInput=!0},error:({error:t})=>{this.router.navigateByUrl("benefit-employee"),f().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:n=>{n.addEventListener("mouseenter",f().stopTimer),n.addEventListener("mouseleave",f().resumeTimer)}})}})}campoEsValido(t){try{return this.createForm.controls[t].errors&&this.createForm.controls[t].touched}catch{Object.keys(this.benefitDetailFormGroup.controls).forEach(r=>this.benefitDetailFormGroup.get(r).errors&&this.benefitDetailFormGroup.get(r).touched)}}save(){if(this.createForm.invalid)return void this.createForm.markAllAsTouched();const t=new FormData;t.append("benefitDetailFormGroup",JSON.stringify(this.createForm.get("benefitDetailFormGroup").value)),t.append("name",this.createForm.get("name").value),t.append("filePoliticas",this.createForm.get("filePoliticas").value),this.benefit.id?(t.append("_method","PUT"),this.benefitService.update(this.benefit.id,t).subscribe({next:()=>{this.router.navigateByUrl(`/benefit/show/${this.benefit.id}`),this.as.subscriptionAlert(c.fI.ACTUALIZADO,c.gW.SUCCESS)},error:({error:n})=>{this.disableSubmitBtn=!1,this.as.subscriptionAlert(c.fI.ERROR,c.gW.ERROR,n.message)}})):this.benefitService.create(t).subscribe({next:({id:n})=>{this.router.navigateByUrl(`/benefit/show/${n}`),this.as.subscriptionAlert(c.fI.CREADO,c.gW.SUCCESS)},error:({error:n})=>{this.disableSubmitBtn=!1,this.as.subscriptionAlert(c.fI.ERROR,c.gW.ERROR,n.message)}}),this.disableSubmitBtn=!0}buildBenefitDetailFormGroup(t,n=[]){let r=this.fb.group({},{validators:[this.atLeastOneCheckboxCheckedValidator()]});return t.forEach(s=>{let d=n.some(p=>p===s.id);r.addControl(s.id.toString(),this.fb.control(d,{},this.validatorService.checkboxRequired()))}),r}atLeastOneCheckboxCheckedValidator(t=1){return function(r){let s=0;return Object.keys(r.controls).forEach(d=>{r.controls[d].value&&s++}),s<t?{requireCheckboxToBeChecked:!0}:null}}onFileChange(t){t.target.files.length>0&&this.createForm.patchValue({filePoliticas:t.target.files[0]})}showInput(){this.politicsInput=!0}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(m.gz),e.Y36(c.c9),e.Y36(J.a),e.Y36(h.T),e.Y36(l.qu),e.Y36(m.F0),e.Y36(g.Dx),e.Y36(N.o))},i.\u0275cmp=e.Xpm({type:i,selectors:[["benefit-create"]],decls:21,vars:11,consts:[[1,"row"],[1,"col"],[1,"p-5",3,"formGroup","ngSubmit"],[1,"mb-3","form-floating"],["type","text","formControlName","name","id","name","placeholder","Nombre Completo",1,"form-control",3,"ngClass"],["for","name",1,"form-label"],[1,"fa-solid","fa-box","me-1"],["class","text-danger",4,"ngIf"],["class","mb-3 input-group",4,"ngIf","ngIfElse"],[1,"mb-3"],[1,"form-label"],[4,"ngIf"],["class","col-3 mb-2",4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-success","float-end",3,"disabled"],["politicLinks",""],[1,"text-danger"],[1,"mb-3","input-group"],["type","file","id","filePoliticas","formControlName","filePoliticas",1,"form-control",3,"change"],[1,"fa-solid","fa-spinner","fa-spin","fa-xs"],[1,"col-3","mb-2"],[1,"form-check-label","ms-2"],["type","checkbox",1,"form-check-input",3,"ngClass","formControl"],["target","_blank","rel","noopener noreferrer",1,"me-3","link-primary","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover",3,"href"],[1,"fa-solid","fa-arrow-up-right-from-square","me-1"],[1,"link-warning","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover",2,"cursor","pointer",3,"click"],[1,"fa-solid","fa-pen-to-square","me-1"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return n.save()}),e.TgZ(3,"div",3),e._UZ(4,"input",4),e.TgZ(5,"label",5),e._UZ(6,"i",6),e._uU(7,"Nombre del Beneficio"),e.qZA(),e.YNc(8,P,2,1,"small",7),e.qZA(),e.YNc(9,G,2,0,"div",8),e.TgZ(10,"div",9)(11,"label",10),e._uU(12,"Detalles de Beneficio Disponibles"),e.qZA(),e.TgZ(13,"div",0),e.YNc(14,L,2,0,"div",11),e.YNc(15,q,4,5,"div",12),e.qZA()(),e.TgZ(16,"div",9)(17,"button",13),e._uU(18),e.qZA()()()()(),e.YNc(19,Q,7,1,"ng-template",null,14,e.W1O)),2&t){const r=e.MAs(20);e.xp6(2),e.Q6J("formGroup",n.createForm),e.xp6(2),e.Q6J("ngClass",e.VKq(9,x,n.campoEsValido("name"))),e.xp6(4),e.Q6J("ngIf",n.campoEsValido("name")),e.xp6(1),e.Q6J("ngIf",n.politicsInput)("ngIfElse",r),e.xp6(5),e.Q6J("ngIf",!n.loaded),e.xp6(1),e.Q6J("ngForOf",n.benefitDetails),e.xp6(2),e.Q6J("disabled",n.disableSubmitBtn),e.xp6(1),e.hij(" ",n.benefit.id?"Actualizar":"Crear"," ")}},dependencies:[u.mk,u.sg,u.O5,l._Y,l.Fj,l.Wl,l.JJ,l.JL,l.oH,l.sg,l.u],encapsulation:2}),i})();const j=[{path:"",component:R.t,children:[{path:"index",component:F},{path:"create",component:T},{path:"edit/:id",component:T},{path:"show/:id",component:k},{path:"**",redirectTo:"index"}]}];let V=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[m.Bz.forChild(j),m.Bz]}),i})();var M=a(4466);let W=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[V,u.ez,v.T,l.UX,M.m]}),i})()}}]);