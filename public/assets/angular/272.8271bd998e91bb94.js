"use strict";(self.webpackChunksalarioemocionalfrontend=self.webpackChunksalarioemocionalfrontend||[]).push([[272],{272:(Z,g,r)=>{r.r(g),r.d(g,{BenefitModule:()=>z});var c=r(6814),f=r(6223),m=r(627),d=r(3912),p=r(5406),v=r(4664),l=r(6232),a=r(591),e=r(6689),I=r(1913),C=r(2278),T=r(7645),F=r(1230);function S(i,u){if(1&i&&(e.TgZ(0,"small",17),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(t.benefitNameErrors)}}function E(i,u){if(1&i){const t=e.EpF();e.TgZ(0,"div",3)(1,"label",18),e._uU(2,"Archivo de pol\xedticas"),e.qZA(),e.TgZ(3,"input",19),e.NdJ("change",function(o){e.CHM(t);const s=e.oxw();return e.KtG(s.onFileChange(o))}),e.qZA()()}}function U(i,u){1&i&&(e.TgZ(0,"div"),e._UZ(1,"i",20),e.qZA())}const A=function(i){return{invalid:i}};function O(i,u){if(1&i&&(e.TgZ(0,"div",21)(1,"label",22),e._UZ(2,"input",23),e._uU(3),e.qZA()()),2&i){const t=u.$implicit,n=e.oxw();e.xp6(2),e.Q6J("ngClass",e.VKq(3,A,!(null!=n.benefitDetailFormGroup&&n.benefitDetailFormGroup.valid)&&(null==n.benefitDetailFormGroup?null:n.benefitDetailFormGroup.touched)))("formControl",null==n.benefitDetailFormGroup?null:n.benefitDetailFormGroup.get(null==t.id?null:t.id.toString())),e.xp6(1),e.hij(" ",t.name," ")}}function R(i,u){if(1&i){const t=e.EpF();e.TgZ(0,"div",3)(1,"a",24),e._UZ(2,"i",25),e._uU(3,"Ver pol\xedtica"),e.qZA(),e.TgZ(4,"a",26),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.showInput())}),e._UZ(5,"i",27),e._uU(6,"Editar adjunto"),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(1),e.s9C("href",t.filePoliticas,e.LSH)}}let _=(()=>{class i{get benefitDetailFormGroup(){return this.createForm.controls.benefitDetailFormGroup}get benefitNameErrors(){const t=this.createForm.get("name")?.errors;return t.minlength?"El nombre no cumple con el largo m\xednimo de 5 caracteres":t.required?"El campo es obligatorio":""}constructor(t,n,o,s,h,b,x){this.activatedRoute=t,this.as=n,this.benefitDetailService=o,this.benefitService=s,this.fb=h,this.router=b,this.validatorService=x,this.createForm=this.fb.group({name:["",[f.kI.required,f.kI.minLength(5)]],filePoliticas:[]}),this.disableSubmitBtn=!1,this.filePoliticas="",this.loaded=!1,this.politicsInput=!0}ngOnInit(){this.benefitDetailService.index().pipe((0,v.w)(t=>(this.benefitDetails=t,this.createForm.addControl("benefitDetailFormGroup",this.buildBenefitDetailFormGroup(this.benefitDetails)),this.loaded=!0,this.activatedRoute.params)),(0,v.w)(({id:t})=>t?this.benefitService.show(t):l.E)).subscribe({next:t=>{const n=Object.values(t)[0];this.benefit=n,this.createForm.get("name")?.setValue(n.name),this.benefitDetailFormGroup&&Object.keys(this.benefitDetailFormGroup.controls).forEach(o=>{Object.values(n.benefit_detail).forEach(s=>{o===s.id.toString()&&this.benefitDetailFormGroup.get(o).setValue(!0)})}),this.benefit?.politicas_path?(this.filePoliticas=this.benefit.politicas_path,this.politicsInput=!1):this.politicsInput=!0},error:({error:t})=>this.as.subscriptionAlert(a.fI.ERROR,a.gW.ERROR,t.message)})}campoEsValido(t){try{return this.createForm.controls[t].errors&&this.createForm.controls[t].touched}catch{Object.keys(this.benefitDetailFormGroup.controls).forEach(o=>this.benefitDetailFormGroup.get(o).errors&&this.benefitDetailFormGroup.get(o).touched)}}save(){if(this.createForm.invalid)return void this.createForm.markAllAsTouched();const t=new FormData;t.append("benefitDetailFormGroup",JSON.stringify(this.createForm.get("benefitDetailFormGroup").value)),t.append("name",this.createForm.get("name").value),t.append("filePoliticas",this.createForm.get("filePoliticas").value),this.benefit?.id?(t.append("_method","PUT"),this.benefitService.update(this.benefit.id,t).subscribe({next:()=>{this.router.navigateByUrl(`/benefit/show/${this.benefit?.id}`),this.as.subscriptionAlert(a.fI.ACTUALIZADO,a.gW.SUCCESS)},error:({error:n})=>{this.disableSubmitBtn=!1,this.as.subscriptionAlert(a.fI.ERROR,a.gW.ERROR,n.message)}})):this.benefitService.create(t).subscribe({next:({id:n})=>{this.router.navigateByUrl(`/benefit/show/${n}`),this.as.subscriptionAlert(a.fI.CREADO,a.gW.SUCCESS)},error:({error:n})=>{this.disableSubmitBtn=!1,this.as.subscriptionAlert(a.fI.ERROR,a.gW.ERROR,n.message)}}),this.disableSubmitBtn=!0}buildBenefitDetailFormGroup(t,n=[]){let o=this.fb.group({},{validators:[this.atLeastOneCheckboxCheckedValidator()]});return t.forEach(s=>{let h=n.some(b=>b===s.id);o.addControl(s.id.toString(),this.fb.control(h,{},this.validatorService.checkboxRequired()))}),o}atLeastOneCheckboxCheckedValidator(t=1){return function(o){let s=0;return Object.keys(o.controls).forEach(h=>{o.controls[h].value&&s++}),s<t?{requireCheckboxToBeChecked:!0}:null}}onFileChange(t){t.target.files.length>0&&this.createForm.patchValue({filePoliticas:t.target.files[0]})}showInput(){this.politicsInput=!0}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(d.gz),e.Y36(a.c9),e.Y36(I.a),e.Y36(C.T),e.Y36(f.qu),e.Y36(d.F0),e.Y36(T.o))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["benefit-create"]],decls:24,vars:11,consts:[[1,"row"],[1,"col"],[1,"p-5",3,"formGroup","ngSubmit"],[1,"mb-3"],["header","Informaci\xf3n del Beneficio"],[1,"mb-3","form-floating"],["type","text","formControlName","name","id","name","placeholder","Nombre Completo",1,"form-control",3,"ngClass"],["for","name",1,"form-label"],[1,"fa-solid","fa-box","me-1"],["class","text-danger",4,"ngIf"],["class","mb-3",4,"ngIf","ngIfElse"],["header","Configuraci\xf3n Asociada"],[1,"form-label"],[4,"ngIf"],["class","col-3 mb-2",4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-success","float-end",3,"disabled"],["politicLinks",""],[1,"text-danger"],["for","filePoliticas",1,"form-label"],["type","file","id","filePoliticas","formControlName","filePoliticas",1,"form-control",3,"change"],[1,"fa-solid","fa-spinner","fa-spin","fa-xs"],[1,"col-3","mb-2"],[1,"form-check-label","ms-2"],["type","checkbox",1,"form-check-input",3,"ngClass","formControl"],["target","_blank","rel","noopener noreferrer",1,"me-3","link-primary","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover",3,"href"],[1,"fa-solid","fa-arrow-up-right-from-square","me-1"],[1,"link-warning","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover",2,"cursor","pointer",3,"click"],[1,"fa-solid","fa-pen-to-square","me-1"]],template:function(n,o){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return o.save()}),e.TgZ(3,"div",3)(4,"p-panel",4)(5,"div",5),e._UZ(6,"input",6),e.TgZ(7,"label",7),e._UZ(8,"i",8),e._uU(9,"Nombre del Beneficio"),e.qZA(),e.YNc(10,S,2,1,"small",9),e.qZA(),e.YNc(11,E,4,0,"div",10),e.qZA()(),e.TgZ(12,"div",3)(13,"p-panel",11)(14,"label",12),e._uU(15,"Detalles de Beneficio Disponibles"),e.qZA(),e.TgZ(16,"div",0),e.YNc(17,U,2,0,"div",13),e.YNc(18,O,4,5,"div",14),e.qZA()()(),e.TgZ(19,"div",3)(20,"button",15),e._uU(21),e.qZA()()()()(),e.YNc(22,R,7,1,"ng-template",null,16,e.W1O)),2&n){const s=e.MAs(23);e.xp6(2),e.Q6J("formGroup",o.createForm),e.xp6(4),e.Q6J("ngClass",e.VKq(9,A,o.campoEsValido("name"))),e.xp6(4),e.Q6J("ngIf",o.campoEsValido("name")),e.xp6(1),e.Q6J("ngIf",o.politicsInput)("ngIfElse",s),e.xp6(6),e.Q6J("ngIf",!o.loaded),e.xp6(1),e.Q6J("ngForOf",o.benefitDetails),e.xp6(2),e.Q6J("disabled",o.disableSubmitBtn),e.xp6(1),e.hij(" ",null!=o.benefit&&o.benefit.id?"Actualizar":"Crear"," ")}},dependencies:[c.mk,c.sg,c.O5,F.s,f._Y,f.Fj,f.Wl,f.JJ,f.JL,f.oH,f.sg,f.u],encapsulation:2})}return i})();var w=r(2369);let B=(()=>{class i{constructor(t,n,o,s){this.as=t,this.benefitService=n,this.renderer=o,this.router=s,this.columns=[{title:"Nombre",data:"name"},{title:"Opciones",data:function(h,b,x){return`\n          <span style="cursor: pointer;" benefit_id="${h.id}" class="badge rounded-pill text-bg-warning">\n            Detalles\n            <i class="fa-solid fa-circle-info fa-fade" style="color: #000000;"></i>\n          </span>`}}]}ngOnInit(){this.dtOptions={ajax:(t,n)=>{this.benefitService.index().subscribe({next:o=>{n({data:o})},error:o=>{this.router.navigateByUrl("benefit-employee"),this.as.subscriptionAlert(a.fI.ERROR,a.gW.ERROR,o.error.message)}})},columns:this.columns,responsive:!0,language:w,createdRow:function(t,n,o,s){n.valid_id||$(t).addClass("invalid-user")}}}ngAfterViewInit(){this.renderer.listen("document","click",t=>{t.target.hasAttribute("benefit_id")&&this.router.navigate(["/benefit/show/"+t.target.getAttribute("benefit_id")])})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(a.c9),e.Y36(C.T),e.Y36(e.Qsj),e.Y36(d.F0))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["benefit-index"]],decls:5,vars:1,consts:[[1,"row","mt-5"],[1,"col"],["datatable","",1,"table","table-hover","table-sm","table-striped",3,"dtOptions"],[1,"bg-dark","text-light"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"table",2),e._UZ(3,"thead",3)(4,"tbody"),e.qZA()()()),2&n&&(e.xp6(2),e.Q6J("dtOptions",o.dtOptions))},dependencies:[m.G],encapsulation:2})}return i})();var D=r(4567),y=r(3416);const k=function(i){return{disabled:i}};function Y(i,u){if(1&i&&(e.TgZ(0,"a",13),e._uU(1,"Editar"),e.qZA()),2&i){const t=e.oxw();e.MGl("routerLink","/benefit/edit/",null==t.benefit?null:t.benefit.id,""),e.Q6J("ngClass",e.VKq(2,k,!t.loaded))}}function N(i,u){1&i&&(e.TgZ(0,"div"),e._UZ(1,"i",14),e.qZA())}function P(i,u){1&i&&(e.TgZ(0,"span",15),e._uU(1,"Inactivo"),e.qZA())}function G(i,u){if(1&i&&(e.TgZ(0,"div",16)(1,"p")(2,"a",17),e._UZ(3,"i",18),e._uU(4,"Pol\xedtica"),e.qZA()()()),2&i){const t=e.oxw();e.xp6(2),e.s9C("href",t.filePoliticas,e.LSH)}}function J(i,u){1&i&&(e.TgZ(0,"div"),e._UZ(1,"i",14),e.qZA())}function j(i,u){if(1&i&&(e.TgZ(0,"tr")(1,"td")(2,"p"),e._uU(3),e.qZA()()()),2&i){const t=u.$implicit;e.xp6(3),e.Oqu(t.name)}}function M(i,u){if(1&i&&(e.TgZ(0,"table",19)(1,"thead",20)(2,"tr")(3,"th"),e._uU(4,"Posibles configuraciones"),e.qZA()()(),e.TgZ(5,"tbody"),e.YNc(6,j,4,1,"tr",21),e.qZA()()),2&i){const t=e.oxw();e.xp6(6),e.Q6J("ngForOf",null==t.benefit?null:t.benefit.benefit_detail)}}const q=[{path:"",component:p.t,children:[{path:"index",component:B,title:"P\xe1gina Principal"},{path:"create",component:_,title:"Crear Beneficio"},{path:"edit/:id",component:_,title:"Editar Beneficio"},{path:"show/:id",component:(()=>{class i{constructor(t,n,o,s){this.activatedRoute=t,this.as=n,this.authService=o,this.benefitService=s,this.filePoliticas="",this.isAdmin=!1,this.loaded=!1}ngOnInit(){this.activatedRoute.params.pipe((0,v.w)(({id:t})=>this.benefitService.show(t))).subscribe({next:t=>{this.benefit=Object.values(t)[0],this.details=this.benefit?.benefit_detail,this.filePoliticas=this.benefit?.politicas_path?this.benefit.politicas_path:"",this.loaded=!0},error:({error:t})=>this.as.subscriptionAlert(a.fI.ERROR,a.gW.ERROR,t.message)}),this.authService.validarAdmin().subscribe({next:t=>{this.isAdmin=t.admin},error:({error:t})=>this.as.subscriptionAlert(a.fI.ERROR,a.gW.ERROR,t.message)})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(d.gz),e.Y36(a.c9),e.Y36(D.e),e.Y36(C.T))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["benefit-show"]],decls:21,vars:7,consts:[[1,"row"],[1,"col"],[1,"btn-group","float-end","mt-5","mb-5"],["backButton","",1,"btn","btn-outline-secondary"],["class","btn btn-warning","aria-current","page",3,"routerLink","ngClass",4,"ngIf"],[1,"row","px-5"],[4,"ngIf"],["class","badge rounded-pill text-bg-danger ms-1",4,"ngIf"],[1,"form-text"],["class","col-2",4,"ngIf"],[1,"col-12"],[4,"ngIf","ngIfElse"],["benefitDetail",""],["aria-current","page",1,"btn","btn-warning",3,"routerLink","ngClass"],[1,"fa-solid","fa-spinner","fa-spin","fa-xs"],[1,"badge","rounded-pill","text-bg-danger","ms-1"],[1,"col-2"],["target","_blank",1,"link-secondary","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover",3,"href"],[1,"fa-solid","fa-arrow-up-right-from-square","me-1"],[1,"table","table-hover","table-sm"],[1,"bg-dark","text-light"],[4,"ngFor","ngForOf"]],template:function(n,o){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),e._uU(4,"Volver"),e.qZA(),e.YNc(5,Y,2,4,"a",4),e.qZA()()(),e.TgZ(6,"div",0)(7,"div",1)(8,"div",5)(9,"div"),e.YNc(10,N,2,0,"div",6),e._uU(11),e.YNc(12,P,2,0,"span",7),e.qZA(),e.TgZ(13,"span",8),e._uU(14,"Nombre"),e.qZA(),e.YNc(15,G,5,1,"div",9),e.qZA(),e.TgZ(16,"div",5)(17,"div",10),e.YNc(18,J,2,0,"div",11),e.qZA()()()(),e.YNc(19,M,7,1,"ng-template",null,12,e.W1O)),2&n){const s=e.MAs(20);e.xp6(5),e.Q6J("ngIf",o.isAdmin),e.xp6(5),e.Q6J("ngIf",!o.loaded),e.xp6(1),e.hij(" ",null==o.benefit?null:o.benefit.name,""),e.xp6(1),e.Q6J("ngIf",!(null!=o.benefit&&o.benefit.valid_id)&&o.loaded),e.xp6(3),e.Q6J("ngIf",o.filePoliticas),e.xp6(3),e.Q6J("ngIf",!o.loaded)("ngIfElse",s)}},dependencies:[d.rH,c.mk,c.sg,c.O5,y.z],encapsulation:2})}return i})(),title:"Ver Beneficio"},{path:"**",redirectTo:"index"}]}];let Q=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[d.Bz.forChild(q),d.Bz]})}return i})();var L=r(6208),V=r(3162);let z=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[Q,c.ez,m.T,V.W,f.UX,L.m]})}return i})()},2278:(Z,g,r)=>{r.d(g,{T:()=>d});var c=r(9862),f=r(553),m=r(6689);let d=(()=>{class p{constructor(l){this.http=l,this.apiBaseUrl=f.N.apiBaseUrl,this.baseUrl=f.N.baseUrl,this.token=localStorage.getItem("token")}index(){const l=(new c.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.baseUrl}/sanctum/csrf-cookie`).subscribe(),this.http.get(`${this.apiBaseUrl}/benefit`,{headers:l,withCredentials:!0})}show(l){const a=(new c.WM).set("Accept","application/json").set("Content-type","multipart/form-data").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/benefit/${l}`,{headers:a,withCredentials:!0})}create(l){const a=(new c.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.post(`${this.apiBaseUrl}/benefit`,l,{headers:a,withCredentials:!0})}update(l,a){const e=(new c.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.post(`${this.apiBaseUrl}/benefit/${l}`,a,{headers:e,withCredentials:!0})}destroy(l){const a=(new c.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.delete(`${this.apiBaseUrl}/benefit/${l}`,{headers:a,withCredentials:!0})}indexAvailable(){const l=(new c.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.baseUrl}/sanctum/csrf-cookie`).subscribe(),this.http.get(`${this.apiBaseUrl}/benefit/available`,{headers:l,withCredentials:!0})}static#e=this.\u0275fac=function(a){return new(a||p)(m.LFG(c.eN))};static#t=this.\u0275prov=m.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()}}]);