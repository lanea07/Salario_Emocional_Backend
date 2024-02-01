"use strict";(self.webpackChunksalarioemocionalfrontend=self.webpackChunksalarioemocionalfrontend||[]).push([[375],{6375:(R,v,o)=>{o.r(v),o.d(v,{DependencyModule:()=>J});var d=o(6814),c=o(6223),u=o(627),b=o(6208),l=o(3912),T=o(5406),s=o(4664),n=o(591),e=o(6689),p=o(8162),m=o(1230),g=o(2746);function x(i,f){1&i&&(e.TgZ(0,"small",12),e._uU(1,"Obligatorio"),e.qZA())}const I=function(i){return{invalid:i}};let C=(()=>{class i{get nameErrorMsg(){const t=this.createForm.get("name")?.errors;return t.minlength?"El nombre no cumple con el largo m\xednimo de 6 caracteres":t.required?"El nombre es obligatorio":""}constructor(t,a,r,h,y){this.activatedRoute=t,this.as=a,this.fb=r,this.dependencyService=h,this.router=y,this.createForm=this.fb.group({name:["",[c.kI.required,c.kI.minLength(5)]],parent_id:["",c.kI.required]}),this.disableSubmitBtn=!1,this.loaded=!1}ngOnInit(){this.dependencyService.index().subscribe({next:t=>{this.dependencies=t,this.nodes=[this.dependencyService.buildDependencyTreeNode(t[0])]},error:({error:t})=>{this.router.navigateByUrl("dependency"),this.as.subscriptionAlert(n.fI.ERROR,n.gW.ERROR,t.message)}}),this.router.url.includes("edit")&&this.activatedRoute.params.pipe((0,s.w)(({id:t})=>this.dependencyService.show(t))).subscribe(t=>{this.dependency=Object.values(t)[0];let a=this.dependencyService.flattenDependency({...this.dependencies[0]}).find(r=>r.id===this.dependency?.parent_id);this.createForm.reset({name:this.dependency?.name,parent_id:this.dependencyService.makeNode(a)}),this.loaded=!0})}campoEsValido(t){return this.createForm.controls[t].errors&&this.createForm.controls[t].touched}save(){if(this.createForm.invalid)this.createForm.markAllAsTouched();else{if(this.dependency?.id){let t=this.dependencyService.flattenDependency({...this.dependencies[0]}).find(a=>this.createForm.get("parent_id")?.value.label===a.name);this.createForm.get("parent_id")?.setValue(t?.id),this.dependencyService.update(this.dependency.id,this.createForm.value).subscribe({next:()=>{this.router.navigateByUrl(`/dependency/show/${this.dependency?.id}`),this.as.subscriptionAlert(n.fI.ACTUALIZADO,n.gW.SUCCESS,"Actualizado")},error:({error:a})=>{this.as.subscriptionAlert(n.fI.ERROR,n.gW.ERROR,a.message),this.disableSubmitBtn=!1}})}else{let t=this.dependencyService.flattenDependency({...this.dependencies[0]}).find(a=>this.createForm.get("parent_id")?.value.label===a.name);this.createForm.get("parent_id")?.setValue(t?.id),this.dependencyService.create(this.createForm.value).subscribe({next:a=>{this.router.navigateByUrl(`/dependency/show/${a.id}`),this.as.subscriptionAlert(n.fI.CREADO,n.gW.SUCCESS,"Creado")},error:({error:a})=>{this.as.subscriptionAlert(n.fI.ERROR,n.gW.ERROR,a.message),this.disableSubmitBtn=!1}})}this.disableSubmitBtn=!0}}static#e=this.\u0275fac=function(a){return new(a||i)(e.Y36(l.gz),e.Y36(n.c9),e.Y36(c.qu),e.Y36(p.u),e.Y36(l.F0))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["user-create"]],decls:16,vars:9,consts:[[1,"row"],[1,"col"],[1,"p-5",3,"formGroup","ngSubmit"],[1,"mb-3"],["header","Informaci\xf3n de la dependencia"],[1,"mb-3","form-floating"],["type","text","formControlName","name","id","name","placeholder","Nombre Completo",1,"form-control",3,"ngClass"],["for","name",1,"form-label"],[1,"fa-solid","fa-box","me-1"],["class","text-danger",4,"ngIf"],["containerStyleClass","w-100","formControlName","parent_id","placeholder","-- Seleccione Dependencia --","data-","id",1,"md:w-20rem","w-100",3,"options","filter"],["type","submit",1,"btn","btn-success","float-end",3,"disabled"],[1,"text-danger"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return r.save()}),e.TgZ(3,"div",3)(4,"p-panel",4)(5,"div",5),e._UZ(6,"input",6),e.TgZ(7,"label",7),e._UZ(8,"i",8),e._uU(9,"Nombre de la Dependencia"),e.qZA(),e.YNc(10,x,2,0,"small",9),e.qZA(),e.TgZ(11,"div",3),e._UZ(12,"p-treeSelect",10),e.qZA()()(),e.TgZ(13,"div",3)(14,"button",11),e._uU(15),e.qZA()()()()()),2&a&&(e.xp6(2),e.Q6J("formGroup",r.createForm),e.xp6(4),e.Q6J("ngClass",e.VKq(7,I,r.campoEsValido("name"))),e.xp6(4),e.Q6J("ngIf",r.campoEsValido("name")),e.xp6(2),e.Q6J("options",r.nodes)("filter",!0),e.xp6(2),e.Q6J("disabled",r.disableSubmitBtn),e.xp6(1),e.hij(" ",null!=r.dependency&&r.dependency.id?"Actualizar":"Crear"," "))},dependencies:[d.mk,d.O5,c._Y,c.Fj,c.JJ,c.JL,m.s,g.mP,c.sg,c.u],encapsulation:2})}return i})();var B=o(2369),E=o(5219),O=o(6748),A=o(4844);function Z(i,f){if(1&i&&(e.TgZ(0,"table",3),e._UZ(1,"thead",4)(2,"tbody"),e.qZA()),2&i){const t=e.oxw();e.Q6J("dtOptions",t.dtOptions)}}function U(i,f){if(1&i&&(e.TgZ(0,"div",7),e._uU(1),e.qZA()),2&i){const t=f.$implicit;e.xp6(1),e.hij(" ",t.label," ")}}function w(i,f){if(1&i&&(e.TgZ(0,"p-organizationChart",5),e.YNc(1,U,2,1,"ng-template",6),e.qZA()),2&i){const t=e.oxw();e.Q6J("value",t.nodes)}}let D=(()=>{class i{constructor(t,a,r,h){this.as=t,this.dependencyService=a,this.renderer=r,this.router=h,this.columns=[{title:"Nombre",data:"name"},{title:"Opciones",data:function(y,_,V){return`\n          <span style="cursor: pointer;" dependency_id="${y.id}" class="badge rounded-pill text-bg-warning">\n            Detalles\n            <i class="fa-solid fa-circle-info fa-fade"  dependency_id="${y.id}" style="color: #000000;"></i>\n          </span>`}}],this.nodes=[]}ngOnInit(){this.dtOptions={ajax:(t,a)=>{this.dependencyService.index().subscribe({next:r=>{a({data:this.dependencyService.flattenDependency(r[0])}),this.nodes=[this.dependencyService.buildDependencyTreeNode(r[0])]},error:r=>{this.as.subscriptionAlert(n.fI.ERROR,n.gW.ERROR,r.error.message)}})},columns:this.columns,responsive:!0,language:B}}ngAfterViewInit(){this.renderer.listen("document","click",t=>{t.target.hasAttribute("dependency_id")&&this.router.navigate(["/dependency/show/"+t.target.getAttribute("dependency_id")])})}static#e=this.\u0275fac=function(a){return new(a||i)(e.Y36(n.c9),e.Y36(p.u),e.Y36(e.Qsj),e.Y36(l.F0))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["user-index"]],decls:5,vars:0,consts:[["header","Tabla"],["pTemplate","content"],["header","Organigrama"],["datatable","",1,"table","table-hover","table-sm","table-striped",3,"dtOptions"],[1,"bg-dark","text-light"],[3,"value"],["pTemplate","default"],[1,"p-2","text-center"]],template:function(a,r){1&a&&(e.TgZ(0,"p-tabView")(1,"p-tabPanel",0),e.YNc(2,Z,3,1,"ng-template",1),e.qZA(),e.TgZ(3,"p-tabPanel",2),e.YNc(4,w,2,1,"ng-template",1),e.qZA()())},dependencies:[u.G,E.jx,O.OE,A.xf,A.x4],encapsulation:2})}return i})();var F=o(3519),N=o.n(F),$=o(3416);function M(i,f){1&i&&(e.TgZ(0,"div"),e._UZ(1,"i",10),e.qZA())}const S=function(i){return{disabled:i}},Y=[{path:"",component:T.t,children:[{path:"index",component:D,title:"P\xe1gina Principal"},{path:"create",component:C,title:"Crear Dependencia"},{path:"edit/:id",component:C,title:"Editar Dependencia"},{path:"show/:id",component:(()=>{class i{constructor(t,a,r,h){this.dependencyService=t,this.activatedRoute=a,this.as=r,this.router=h,this.loaded=!1,this.roles=[]}ngOnInit(){this.activatedRoute.params.pipe((0,s.w)(({id:t})=>this.dependencyService.show(t))).subscribe({next:t=>{this.dependency=Object.values(t)[0],this.loaded=!0},error:({error:t})=>{this.router.navigateByUrl("benefit-employee"),this.as.subscriptionAlert(n.fI.ERROR,n.gW.ERROR,t.message)}})}destroy(){N().fire({title:"Est\xe1 seguro?",text:"Al eliminar la dependencia se eliminar\xe1 todo registro de la base de datos",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Eliminar!",showClass:{popup:"animate__animated animate__fadeIn"},hideClass:{popup:"animate__animated animate__fadeOutUp"}}).then(t=>{t.isConfirmed&&this.dependencyService.destroy(this.dependency?.id).subscribe({next:a=>{this.router.navigateByUrl("dependency/index"),this.as.subscriptionAlert(n.fI.ELIMINADO,n.gW.SUCCESS)},error:({error:a})=>this.as.subscriptionAlert(n.fI.ERROR,n.gW.ERROR,a.message)})})}static#e=this.\u0275fac=function(a){return new(a||i)(e.Y36(p.u),e.Y36(l.gz),e.Y36(n.c9),e.Y36(l.F0))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["dependency-show"]],decls:17,vars:9,consts:[[1,"row"],[1,"col"],[1,"btn-group","float-end","mt-5","mb-5"],["backButton","",1,"btn","btn-outline-secondary"],["aria-current","page",1,"btn","btn-warning",3,"routerLink","ngClass"],[1,"btn","btn-outline-danger",3,"ngClass","click"],[1,"row","px-5"],[1,"col-xs-12","col-md-4","d-flex","flex-column","my-2"],[4,"ngIf"],[1,"form-text"],[1,"fa-solid","fa-spinner","fa-spin","fa-xs"]],template:function(a,r){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),e._uU(4,"Volver"),e.qZA(),e.TgZ(5,"a",4),e._uU(6,"Editar"),e.qZA(),e.TgZ(7,"a",5),e.NdJ("click",function(){return r.destroy()}),e._uU(8,"Eliminar"),e.qZA()()()(),e.TgZ(9,"div",0)(10,"div",1)(11,"div",6)(12,"div",7),e.YNc(13,M,2,0,"div",8),e._uU(14),e.TgZ(15,"span",9),e._uU(16,"Nombre"),e.qZA()()()()()),2&a&&(e.xp6(5),e.MGl("routerLink","/dependency/edit/",null==r.dependency?null:r.dependency.id,""),e.Q6J("ngClass",e.VKq(5,S,!r.loaded)),e.xp6(2),e.Q6J("ngClass",e.VKq(7,S,!r.loaded)),e.xp6(6),e.Q6J("ngIf",!r.loaded),e.xp6(1),e.hij(" ",null==r.dependency?null:r.dependency.name," "))},dependencies:[d.mk,d.O5,l.rH,$.z],encapsulation:2})}return i})(),title:"Ver Dependencia"},{path:"**",redirectTo:"index"}]}];let j=(()=>{class i{static#e=this.\u0275fac=function(a){return new(a||i)};static#t=this.\u0275mod=e.oAB({type:i});static#n=this.\u0275inj=e.cJS({imports:[l.Bz.forChild(Y),l.Bz]})}return i})();var z=o(3162);let J=(()=>{class i{static#e=this.\u0275fac=function(a){return new(a||i)};static#t=this.\u0275mod=e.oAB({type:i});static#n=this.\u0275inj=e.cJS({imports:[d.ez,u.T,j,c.u5,z.W,c.UX,b.m]})}return i})()},8162:(R,v,o)=>{o.d(v,{u:()=>b});var d=o(9862),c=o(553),u=o(6689);let b=(()=>{class l{constructor(s){this.http=s,this.apiBaseUrl=c.N.apiBaseUrl,this.token=localStorage.getItem("token")}index(){const s=(new d.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/dependency`,{headers:s,withCredentials:!0})}show(s){const n=(new d.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/dependency/${s}`,{headers:n,withCredentials:!0})}create(s){const n=(new d.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.post(`${this.apiBaseUrl}/dependency`,s,{headers:n,withCredentials:!0})}update(s,n){const e=(new d.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.put(`${this.apiBaseUrl}/dependency/${s}`,n,{headers:e,withCredentials:!0})}destroy(s){const n=(new d.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.delete(`${this.apiBaseUrl}/dependency/${s}`,{headers:n,withCredentials:!0})}getNonTreeValidDependencies(){const s=(new d.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/dependency/getNonTreeValidDependencies`,{headers:s,withCredentials:!0})}buildDependencyTreeNode(s){const{path:n,name:e,children:p}=s;return{key:n,label:e,children:p.map(g=>this.buildDependencyTreeNode(g)),expanded:!0}}flattenDependency(s){let n=[s];if(s.children&&s.children.length>0)for(const e of s.children)n=n.concat(this.flattenDependency(e));return n}dependencyAncestors(s){const n=(new d.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/dependency/dependencyAncestors/${s}`,{headers:n,withCredentials:!0})}makeNode(s){const{path:n,name:e,children:p}=s,m=p?p.map(g=>this.makeNode(g)):[];return{key:n.replace(".","-"),label:e,children:m,expanded:!0}}static#e=this.\u0275fac=function(n){return new(n||l)(u.LFG(d.eN))};static#t=this.\u0275prov=u.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()}}]);