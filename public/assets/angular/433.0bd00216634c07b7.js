"use strict";(self.webpackChunksalarioemocionalfrontend=self.webpackChunksalarioemocionalfrontend||[]).push([[433],{6433:(ce,C,s)=>{s.r(C),s.d(C,{UserModule:()=>le});var m=s(6814),a=s(6223),b=s(627),p=s(180),A=s(1107),y=s(9315),Z=s(4664),l=s(591),e=s(6689),U=s(8162),S=s(4642),x=s(8047),f=s(9862),q=s(553);let g=(()=>{class o{constructor(t){this.http=t,this.apiBaseUrl=q.N.apiBaseUrl,this.token=localStorage.getItem("token")}index(){const t=(new f.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/user`,{headers:t,withCredentials:!0})}show(t){const r=(new f.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/user/${t}`,{headers:r,withCredentials:!0})}create(t){const r=(new f.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.post(`${this.apiBaseUrl}/user`,t,{headers:r,withCredentials:!0})}update(t,r){const i=(new f.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.put(`${this.apiBaseUrl}/user/${t}`,r,{headers:i,withCredentials:!0})}destroy(t){const r=(new f.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.delete(`${this.apiBaseUrl}/user/${t}`,{headers:r,withCredentials:!0})}static#e=this.\u0275fac=function(r){return new(r||o)(e.LFG(f.eN))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var w=s(7645),F=s(2160),I=s(1230),E=s(2746);function N(o,d){1&o&&(e.TgZ(0,"span",43),e._uU(1,"Obligatorio"),e.qZA())}function R(o,d){1&o&&(e.TgZ(0,"span",43),e._uU(1,"Obligatorio"),e.qZA())}function O(o,d){1&o&&(e.TgZ(0,"span",43),e._uU(1,"Obligatorio"),e.qZA())}function k(o,d){if(1&o&&(e.TgZ(0,"span",43),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Oqu(t.passErrorMsg)}}function V(o,d){1&o&&(e.TgZ(0,"div"),e._UZ(1,"i",44),e.qZA())}const h=function(o){return{invalid:o}};function J(o,d){if(1&o&&(e.TgZ(0,"div",39),e._UZ(1,"input",45),e.TgZ(2,"label",46),e._uU(3),e.qZA()()),2&o){const t=d.$implicit,r=e.oxw();e.xp6(1),e.s9C("id",t.name),e.Q6J("ngClass",e.VKq(5,h,!r.rolesFormGroup.valid&&r.rolesFormGroup.touched))("formControl",r.rolesFormGroup.get(t.name)),e.xp6(1),e.s9C("for",t.name),e.xp6(1),e.Oqu(t.name)}}function Y(o,d){1&o&&(e.TgZ(0,"div"),e._UZ(1,"i",44),e.qZA())}function B(o,d){if(1&o&&(e.TgZ(0,"div",39)(1,"div",47),e._UZ(2,"input",48),e.TgZ(3,"label",49),e._uU(4),e.qZA()()()),2&o){const t=d.$implicit,r=e.oxw();e.xp6(2),e.s9C("value",t.id),e.s9C("id",t.id),e.Q6J("ngClass",e.VKq(5,h,r.campoEsValido("position_id"))),e.xp6(1),e.s9C("for",t.id),e.xp6(1),e.Oqu(t.name)}}let _=(()=>{class o{get rolesFormGroup(){return this.createForm.controls.rolesFormGroup}get passErrorMsg(){const t=this.createForm.get("password")?.errors;return t.minlength?"La contrase\xf1a no cumple con el largo m\xednimo de 6 caracteres":t.required?"La contrase\xf1a es obligatoria":""}constructor(t,r,i,n,u,c,v,de,ue){this.activatedRoute=t,this.as=r,this.dependencyService=i,this.fb=n,this.positionService=u,this.roleService=c,this.router=v,this.userService=de,this.validatorService=ue,this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",this.createForm=this.fb.group({name:["",[a.kI.required,a.kI.minLength(5)]],birthdate:["",a.kI.required],email:["",[a.kI.required,a.kI.pattern(this.emailPattern)]],leader:[""],password:["",[this.passwordRequiredIfNotNull()]],parent:[""],position_id:["",a.kI.required],requirePassChange:[!0],valid_id:["",a.kI.required],dependency_id:["",a.kI.required]}),this.disableSubmitBtn=!1,this.loaded=!1,this.positions=[],this.roles=[]}ngOnInit(){(0,y.D)({dependencies:this.dependencyService.index(),positions:this.positionService.index(),roles:this.roleService.index()}).subscribe({next:({dependencies:t,positions:r,roles:i})=>{this.dependencies=t,this.nodes=[this.dependencyService.buildDependencyTreeNode(t[0])],this.positions=r,this.roles=i,this.loaded=!0,this.createForm.addControl("rolesFormGroup",this.buildChecksFormGroup(i))},error:t=>{this.as.subscriptionAlert(l.fI.ERROR,l.gW.ERROR,t.statusText)}}),this.router.url.includes("edit")&&this.activatedRoute.params.pipe((0,Z.w)(({id:t})=>this.userService.show(t))).subscribe(t=>{const r=Object.values(t)[0];this.user=r,this.createForm.get("name")?.setValue(r.name),this.createForm.get("email")?.setValue(r.email),Object.keys(this.rolesFormGroup.controls).forEach(i=>{Object.values(r.roles).forEach(n=>{i===n.name&&this.rolesFormGroup.get(i).setValue(!0)})}),r.parent&&this.createForm.get("parent")?.setValue(r.parent.id),this.createForm.get("position_id")?.setValue(r.positions?.id?.toString()),this.createForm.get("requirePassChange")?.setValue(r.requirePassChange),this.createForm.get("valid_id")?.setValue(r.valid_id),this.createForm.get("birthdate")?.setValue(r.birthdate)})}campoEsValido(t){return this.createForm.controls[t].errors&&this.createForm.controls[t].touched}save(){if(this.createForm.invalid)return void this.createForm.markAllAsTouched();let t=this.dependencyService.flattenDependency({...this.dependencies[0]}).find(r=>this.createForm.get("dependency_id")?.value.label===r.name);this.createForm.get("dependency_id")?.setValue(t?.id),this.user?.id?this.userService.update(this.user?.id,this.createForm.value).subscribe({next:()=>{this.router.navigateByUrl(`/user/show/${this.user?.id}`),this.as.subscriptionAlert(l.fI.ACTUALIZADO,l.gW.SUCCESS)},error:r=>{this.as.subscriptionAlert(l.fI.ERROR,l.gW.ERROR,r.message),this.disableSubmitBtn=!1}}):this.userService.create(this.createForm.value).subscribe({next:r=>{this.router.navigateByUrl(`/user/show/${r.id}`),this.as.subscriptionAlert(l.fI.CREADO,l.gW.SUCCESS)},error:r=>{this.as.subscriptionAlert(l.fI.ERROR,l.gW.ERROR,r.message),this.disableSubmitBtn=!1}}),this.disableSubmitBtn=!0}buildChecksFormGroup(t,r=[]){let i=this.fb.group({},{validators:[this.atLeastOneCheckboxCheckedValidator()]});return t.forEach(n=>{let u=r.some(c=>c===n.id);i.addControl(n.name,this.fb.control(u,{},this.validatorService.checkboxRequired()))}),i}atLeastOneCheckboxCheckedValidator(t=1){return function(i){let n=0;return Object.keys(i.controls).forEach(u=>{i.controls[u].value&&n++}),n<t?{requireCheckboxToBeChecked:!0}:null}}filterSubordinates(t){this.filteredSubordinates=this.posibleSubordinates.filter(r=>r.id!==t.value)}passwordRequiredIfNotNull(t=6){return function(i){return(i.value||i.hasValidator(a.kI.required))&&i.value.length<t?{minlength:!0}:null}}fillColaboradores(t){if(!t.node.parent)return void this.emptyColaboradores();let r=t.node.key.split(".").pop();this.dependencyService.dependencyAncestors(r).subscribe({next:i=>{let n=this.dependencyService.flattenDependency(i[0]);this.users=n.flatMap(u=>u.users.filter(c=>c.valid_id)),this.users=this.users.sort((u,c)=>u.name.localeCompare(c.name))},error:i=>{}}),this.createForm.get("parent")?.reset(""),this.createForm.get("parent")?.enable()}emptyColaboradores(){this.users=[],this.createForm.get("parent")?.disable()}validatePasswordRequired(){this.createForm.get("password")?.value?this.createForm.get("requirePassChange")?.setValue(!1):this.createForm.get("requirePassChange")?.setValue(!0)}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(p.gz),e.Y36(l.c9),e.Y36(U.u),e.Y36(a.qu),e.Y36(S.e),e.Y36(x.N),e.Y36(p.F0),e.Y36(g),e.Y36(w.o))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["user-create"]],decls:71,vars:29,consts:[[1,"row"],[1,"col"],[1,"p-5",3,"formGroup","ngSubmit"],[1,"mb-3"],["header","Informaci\xf3n B\xe1sica"],[1,"col-lg-9"],[1,"mb-3","form-floating"],["type","text","formControlName","name","id","name","placeholder","Nombre Completo",1,"form-control",3,"ngClass"],["for","name",1,"form-label"],[1,"fa-solid","fa-user","me-1"],["class","form-text text-danger",4,"ngIf"],[1,"col-lg-3"],["type","date","formControlName","birthdate","id","birthdate","placeholder","Nombre Completo",1,"form-control",3,"ngClass"],["for","birthdate",1,"form-label"],[1,"fa-solid","fa-calendar-days","me-1"],["type","email","formControlName","email","id","email","placeholder","email@company.com",1,"form-control",3,"ngClass"],["for","email",1,"form-label"],[1,"fa-solid","fa-at","me-1"],[1,"mb-3","input-group"],[1,"form-floating"],["type","password","formControlName","password","id","password","placeholder","password",1,"form-control",3,"ngClass","keyup"],["for","password",1,"form-label"],[1,"fa-solid","fa-key","me-1"],[1,"input-group-text"],[1,"form-check","form-switch"],["for","requirePassChange",1,"form-check-label"],["type","checkbox","role","switch","formControlName","requirePassChange","id","requirePassChange",1,"form-check-input"],["header","Dependencia y Responsable (Opcional)"],[1,"row","mb-3"],["for","user_id"],[1,"text-secondary"],[1,"p-inputgroup"],["containerStyleClass","w-100","formControlName","dependency_id","placeholder","-- Seleccione Dependencia --","data-","id",1,"md:w-20rem","w-100",3,"options","filter","onNodeSelect","onNodeUnselect"],["styleClass","w-100","optionLabel","name","optionValue","id","formControlName","leader","placeholder","-- Seleccione Colaborador --",1,"w-100",3,"options"],["header","Roles"],[4,"ngIf"],["class","col-sm-6 col-md-4 col-lg-2",4,"ngFor","ngForOf"],["header","Cargos"],["header","V\xe1lido"],[1,"col-sm-6","col-md-4","col-lg-2"],["type","checkbox","id","valid_id","formControlName","valid_id",1,"form-check-input",3,"ngClass"],["for","valid_id",1,"form-check-label","ms-2"],["type","submit",1,"btn","btn-success","float-end",3,"disabled"],[1,"form-text","text-danger"],[1,"fa-solid","fa-spinner","fa-spin","fa-xs"],["type","checkbox",1,"form-check-input",3,"id","ngClass","formControl"],[1,"form-check-label","ms-2",3,"for"],[1,"form-check"],["type","radio","formControlName","position_id","id","position.id","required","",1,"form-check-input",3,"value","id","ngClass"],[1,"form-check-label",3,"for"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return i.save()}),e.TgZ(3,"div",3)(4,"p-panel",4)(5,"div",0)(6,"div",5)(7,"div",6),e._UZ(8,"input",7),e.TgZ(9,"label",8),e._UZ(10,"i",9),e._uU(11,"Nombre Completo"),e.qZA(),e.YNc(12,N,2,0,"span",10),e.qZA()(),e.TgZ(13,"div",11)(14,"div",6),e._UZ(15,"input",12),e.TgZ(16,"label",13),e._UZ(17,"i",14),e._uU(18,"Fecha de Nacimiento"),e.qZA(),e.YNc(19,R,2,0,"span",10),e.qZA()()(),e.TgZ(20,"div",6),e._UZ(21,"input",15),e.TgZ(22,"label",16),e._UZ(23,"i",17),e._uU(24,"Correo Electr\xf3nico"),e.qZA(),e.YNc(25,O,2,0,"span",10),e.qZA(),e.TgZ(26,"div",18)(27,"div",19)(28,"input",20),e.NdJ("keyup",function(){return i.validatePasswordRequired()}),e.qZA(),e.TgZ(29,"label",21),e._UZ(30,"i",22),e._uU(31,"Contrase\xf1a"),e.qZA()(),e.TgZ(32,"div",23)(33,"div",24)(34,"small")(35,"label",25),e._uU(36,"\xbfRequiere cambiar password?"),e.qZA()(),e._UZ(37,"input",26),e.qZA()()(),e.YNc(38,k,2,1,"span",10),e.qZA()(),e.TgZ(39,"div",3)(40,"p-panel",27)(41,"div",28)(42,"label",29),e._uU(43,"Selecciona la dependencia a la que pertenece y un colaborador para asign\xe1rselo como jefe"),e._UZ(44,"br"),e.TgZ(45,"small",30),e._uU(46,"(El colaborador que seleccione aqu\xed ser\xe1 qui\xe9n apruebe sus beneficios. Si no se asigna un responsable, los beneficios que solicit\xe9 nuevo colaborador ser\xe1n aprobados autom\xe1ticamente)"),e.qZA()(),e.TgZ(47,"div",31)(48,"p-treeSelect",32),e.NdJ("onNodeSelect",function(u){return i.fillColaboradores(u)})("onNodeUnselect",function(){return i.emptyColaboradores()}),e.qZA()()(),e.TgZ(49,"div",28)(50,"div",31),e._UZ(51,"p-dropdown",33),e.qZA()()()(),e.TgZ(52,"div",3)(53,"p-panel",34)(54,"div",0),e.YNc(55,V,2,0,"div",35),e.YNc(56,J,4,7,"div",36),e.qZA()()(),e.TgZ(57,"div",3)(58,"p-panel",37)(59,"div",0),e.YNc(60,Y,2,0,"div",35),e.YNc(61,B,5,7,"div",36),e.qZA()()(),e.TgZ(62,"div",3)(63,"p-panel",38)(64,"div",39),e._UZ(65,"input",40),e.TgZ(66,"label",41),e._uU(67,"V\xe1lido"),e.qZA()()()(),e.TgZ(68,"div",3)(69,"button",42),e._uU(70),e.qZA()()()()()),2&r&&(e.xp6(2),e.Q6J("formGroup",i.createForm),e.xp6(6),e.Q6J("ngClass",e.VKq(19,h,i.campoEsValido("name"))),e.xp6(4),e.Q6J("ngIf",i.campoEsValido("name")),e.xp6(3),e.Q6J("ngClass",e.VKq(21,h,i.campoEsValido("birthdate"))),e.xp6(4),e.Q6J("ngIf",i.campoEsValido("birthdate")),e.xp6(2),e.Q6J("ngClass",e.VKq(23,h,i.campoEsValido("email"))),e.xp6(4),e.Q6J("ngIf",i.campoEsValido("email")),e.xp6(3),e.Q6J("ngClass",e.VKq(25,h,i.campoEsValido("password"))),e.xp6(10),e.Q6J("ngIf",i.campoEsValido("password")),e.xp6(10),e.Q6J("options",i.nodes)("filter",!0),e.xp6(3),e.Q6J("options",i.users),e.xp6(4),e.Q6J("ngIf",!i.loaded),e.xp6(1),e.Q6J("ngForOf",i.roles),e.xp6(4),e.Q6J("ngIf",!i.loaded),e.xp6(1),e.Q6J("ngForOf",i.positions),e.xp6(4),e.Q6J("ngClass",e.VKq(27,h,!i.createForm.get("valid_id").valid&&i.createForm.get("valid_id").touched)),e.xp6(4),e.Q6J("disabled",i.disableSubmitBtn),e.xp6(1),e.hij(" ",null!=i.user&&i.user.id?"Actualizar":"Crear"," "))},dependencies:[m.mk,m.sg,m.O5,F.Lt,I.s,E.mP,a._Y,a.Fj,a.Wl,a._,a.JJ,a.JL,a.Q7,a.oH,a.sg,a.u],encapsulation:2})}return o})();var Q=s(2369);let j=(()=>{class o{constructor(t,r,i,n){this.as=t,this.renderer=r,this.router=i,this.userService=n,this.columns=[{title:"Nombre",data:"name"},{title:"Correo",data:"email"},{title:"Roles",data:"roles[0].name"},{title:"Cargo",data:"positions.name"},{title:"Responsable Directo",data:"parent.name"},{title:"V\xe1lido",data:function(u,c,v){return u.valid_id?"V\xe1lido":"No V\xe1lido"}},{title:"Opciones",data:function(u,c,v){return`\n          <span style="cursor: pointer;" user_id="${u.id}" class="badge rounded-pill text-bg-warning">\n            Detalles\n            <i class="fa-solid fa-circle-info fa-fade"  user_id="${u.id}" style="color: #000000;"></i>\n          </span>`}}]}ngOnInit(){this.dtOptions={ajax:(t,r)=>{this.userService.index().subscribe({next:i=>{r({data:i})},error:i=>{this.as.subscriptionAlert(l.fI.ERROR,l.gW.ERROR,i.error.message)}})},columns:this.columns,responsive:!0,language:Q,createdRow:function(t,r,i){r.valid_id||$(t).addClass("invalid-user")},columnDefs:[{render:(t,r,i)=>'<p class="fw-bold">'+t+"</p>",targets:0}]}}ngAfterViewInit(){this.renderer.listen("document","click",t=>{t.target.hasAttribute("user_id")&&this.router.navigate(["/user/show/"+t.target.getAttribute("user_id")])})}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(l.c9),e.Y36(e.Qsj),e.Y36(p.F0),e.Y36(g))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["user-index"]],decls:5,vars:1,consts:[[1,"row","mt-5"],[1,"col"],["datatable","",1,"table","table-hover","table-sm","table-striped",3,"dtOptions"],[1,"bg-dark","text-light"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"table",2),e._UZ(3,"thead",3)(4,"tbody"),e.qZA()()()),2&r&&(e.xp6(2),e.Q6J("dtOptions",i.dtOptions))},dependencies:[b.G],encapsulation:2})}return o})();var W=s(3519),M=s.n(W),z=s(3416);function G(o,d){1&o&&(e.TgZ(0,"div"),e._UZ(1,"i",15),e.qZA())}function L(o,d){1&o&&(e.TgZ(0,"div"),e._UZ(1,"i",15),e.qZA())}function P(o,d){1&o&&(e.TgZ(0,"div"),e._UZ(1,"i",15),e.qZA())}function D(o,d){if(1&o&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&o){const t=d.$implicit;e.xp6(1),e.hij(" ",t.name," ")}}function K(o,d){1&o&&(e.TgZ(0,"div"),e._UZ(1,"i",15),e.qZA())}function X(o,d){1&o&&(e.TgZ(0,"div"),e._UZ(1,"i",15),e.qZA())}function H(o,d){1&o&&(e.TgZ(0,"span",9),e._uU(1,"No registra"),e.qZA())}function ee(o,d){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,H,2,0,"span",16),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.loaded)}}function te(o,d){}function ie(o,d){if(1&o&&(e.TgZ(0,"a",17),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.MGl("routerLink","/user/show/",null==t.user||null==t.user.parent?null:t.user.parent.id,""),e.xp6(1),e.Oqu(null==t.user||null==t.user.parent?null:t.user.parent.name)}}const T=function(o){return{disabled:o}},oe=[{path:"",component:A.t,children:[{path:"index",component:j,title:"P\xe1gina Principal"},{path:"create",component:_,title:"Crear Usuario"},{path:"edit/:id",component:_,title:"Editar Usuario"},{path:"show/:id",component:(()=>{class o{constructor(t,r,i,n){this.userService=t,this.activatedRoute=r,this.as=i,this.router=n,this.roles=[],this.loaded=!1}ngOnInit(){this.activatedRoute.params.pipe((0,Z.w)(({id:t})=>this.userService.show(t))).subscribe({next:t=>{this.user=Object.values(t)[0],this.loaded=!0,this.user?.roles?.forEach(r=>this.roles.push(r.name))},error:t=>{this.router.navigateByUrl("benefit-employee"),this.as.subscriptionAlert(l.fI.ERROR,l.gW.ERROR,t.message)}})}destroy(){M().fire({title:"Est\xe1 seguro?",text:"Al eliminar el usuario se eliminar\xe1 todo registro de la base de datos",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Eliminar!",showClass:{popup:"animate__animated animate__fadeIn"},hideClass:{popup:"animate__animated animate__fadeOutUp"}}).then(t=>{t.isConfirmed&&this.userService.destroy(this.user?.id).subscribe({next:r=>{this.router.navigateByUrl("user/index"),this.as.subscriptionAlert(l.fI.ELIMINADO,l.gW.SUCCESS)},error:r=>this.as.subscriptionAlert(l.fI.ERROR,l.gW.ERROR,r.message)})})}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(g),e.Y36(p.gz),e.Y36(l.c9),e.Y36(p.F0))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["user-show"]],decls:43,vars:19,consts:[[1,"row"],[1,"col"],[1,"btn-group","float-end","mt-5","mb-5"],["backButton","",1,"btn","btn-outline-secondary"],["aria-current","page",1,"btn","btn-warning",3,"routerLink","ngClass"],[1,"btn","btn-outline-danger",3,"ngClass","click"],[1,"row","px-5"],[1,"col-xs-12","col-lg-4","d-flex","flex-column","my-2"],[4,"ngIf"],[1,"form-text"],[4,"ngFor","ngForOf"],[1,"link-primary","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover",3,"href"],[4,"ngIf","ngIfElse"],["subordinates",""],["parent",""],[1,"fa-solid","fa-spinner","fa-spin","fa-xs"],["class","form-text",4,"ngIf"],[1,"link-primary","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover",3,"routerLink"]],template:function(r,i){if(1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),e._uU(4,"Volver"),e.qZA(),e.TgZ(5,"a",4),e._uU(6,"Editar"),e.qZA(),e.TgZ(7,"a",5),e.NdJ("click",function(){return i.destroy()}),e._uU(8,"Eliminar"),e.qZA()()()(),e.TgZ(9,"div",0)(10,"div",1)(11,"div",6)(12,"div",7),e.YNc(13,G,2,0,"div",8),e._uU(14),e.TgZ(15,"span",9),e._uU(16,"Nombre"),e.qZA()(),e.TgZ(17,"div",7),e.YNc(18,L,2,0,"div",8),e._uU(19),e.TgZ(20,"span",9),e._uU(21,"Cargo"),e.qZA()(),e.TgZ(22,"div",7),e.YNc(23,P,2,0,"div",8),e.YNc(24,D,2,1,"div",10),e.TgZ(25,"span",9),e._uU(26,"Rol"),e.qZA()()(),e.TgZ(27,"div",6)(28,"div",7),e.YNc(29,K,2,0,"div",8),e.TgZ(30,"a",11),e._uU(31),e.qZA(),e.TgZ(32,"span",9),e._uU(33,"Correo Electr\xf3nico"),e.qZA()(),e.TgZ(34,"div",7),e.YNc(35,X,2,0,"div",8),e.YNc(36,ee,2,1,"div",12),e.TgZ(37,"span",9),e._uU(38,"Jefe"),e.qZA()()()()(),e.YNc(39,te,0,0,"ng-template",null,13,e.W1O),e.YNc(41,ie,2,2,"ng-template",null,14,e.W1O)),2&r){const n=e.MAs(42);e.xp6(5),e.MGl("routerLink","/user/edit/",null==i.user?null:i.user.id,""),e.Q6J("ngClass",e.VKq(15,T,!i.loaded)),e.xp6(2),e.Q6J("ngClass",e.VKq(17,T,!i.loaded)),e.xp6(6),e.Q6J("ngIf",!i.loaded),e.xp6(1),e.hij(" ",null==i.user?null:i.user.name," "),e.xp6(4),e.Q6J("ngIf",!i.loaded),e.xp6(1),e.hij(" ",null==i.user||null==i.user.positions?null:i.user.positions.name," "),e.xp6(4),e.Q6J("ngIf",!i.loaded),e.xp6(1),e.Q6J("ngForOf",null==i.user?null:i.user.roles),e.xp6(5),e.Q6J("ngIf",!i.loaded),e.xp6(1),e.MGl("href","mailto:",null==i.user?null:i.user.email,"",e.LSH),e.xp6(1),e.Oqu(null==i.user?null:i.user.email),e.xp6(4),e.Q6J("ngIf",!i.loaded),e.xp6(1),e.Q6J("ngIf",!(null!=i.user&&i.user.parent))("ngIfElse",n)}},dependencies:[m.mk,m.sg,m.O5,p.rH,z.z],encapsulation:2})}return o})(),title:"Ver Usuario"},{path:"**",redirectTo:"index"}]}];let se=(()=>{class o{static#e=this.\u0275fac=function(r){return new(r||o)};static#t=this.\u0275mod=e.oAB({type:o});static#i=this.\u0275inj=e.cJS({imports:[p.Bz.forChild(oe),p.Bz]})}return o})();var ne=s(6208),ae=s(3162);let le=(()=>{class o{static#e=this.\u0275fac=function(r){return new(r||o)};static#t=this.\u0275mod=e.oAB({type:o});static#i=this.\u0275inj=e.cJS({imports:[m.ez,b.T,ae.W,a.UX,se,ne.m]})}return o})()}}]);