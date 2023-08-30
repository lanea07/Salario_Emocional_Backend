"use strict";(self.webpackChunksalarioemocionalfrontend=self.webpackChunksalarioemocionalfrontend||[]).push([[512],{8512:(ce,b,s)=>{s.r(b),s.d(b,{UserModule:()=>me});var m=s(4755),a=s(9401),C=s(5415),q=s(1292),d=s(5118),h=s(206),F=s(2369),e=s(2223),v=s(6550),Z=s(427);let w=(()=>{class o{constructor(t,i,n,l,c){this.as=t,this.renderer=i,this.router=n,this.titleService=l,this.userService=c,this.columns=[{title:"Nombre",data:"name"},{title:"Correo",data:"email"},{title:"Roles",data:"roles[0].name"},{title:"Cargo",data:"positions.name"},{title:"Jefe Directo",data:"leader.name"},{title:"Empleados a cargo",data:"subordinates.length"},{title:"Opciones",data:function(p,A,S){return`\n          <span style="cursor: pointer;" user_id="${p.id}" class="badge rounded-pill text-bg-warning">\n            Detalles\n            <i class="fa-solid fa-circle-info fa-fade" style="color: #000000;"></i>\n          </span>`}}],this.titleService.setTitle("Usuarios")}ngOnInit(){this.dtOptions={ajax:(t,i)=>{this.userService.index().subscribe({next:n=>{i({data:n})},error:n=>{this.as.subscriptionAlert(h.fI.ERROR,h.gW.ERROR,n.error.message)}})},columns:this.columns,responsive:!0,language:F}}ngAfterViewInit(){this.renderer.listen("document","click",t=>{t.target.hasAttribute("user_id")&&this.router.navigate(["/user/show/"+t.target.getAttribute("user_id")])})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.c9),e.Y36(e.Qsj),e.Y36(d.F0),e.Y36(v.Dx),e.Y36(Z.K))},o.\u0275cmp=e.Xpm({type:o,selectors:[["user-index"]],decls:5,vars:1,consts:[[1,"row","mt-5"],[1,"col"],["datatable","",1,"table","table-hover","table-sm",3,"dtOptions"],[1,"bg-dark","text-light"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"table",2),e._UZ(3,"thead",3)(4,"tbody"),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("dtOptions",i.dtOptions))},dependencies:[C.G],encapsulation:2}),o})();var T=s(3900),y=s(5226),u=s.n(y),g=s(7870),N=s(1768);function O(o,r){1&o&&(e.TgZ(0,"div"),e._UZ(1,"i",15),e.qZA())}function J(o,r){1&o&&(e.TgZ(0,"div"),e._UZ(1,"i",15),e.qZA())}function I(o,r){1&o&&(e.TgZ(0,"div"),e._UZ(1,"i",15),e.qZA())}function Y(o,r){if(1&o&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&o){const t=r.$implicit;e.xp6(1),e.hij(" ",t.name," ")}}function E(o,r){1&o&&(e.TgZ(0,"div"),e._UZ(1,"i",15),e.qZA())}function Q(o,r){1&o&&(e.TgZ(0,"div"),e._UZ(1,"i",15),e.qZA())}function k(o,r){1&o&&(e.TgZ(0,"span",5),e._uU(1,"No registra"),e.qZA())}function V(o,r){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,k,2,0,"span",16),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.loaded)}}function B(o,r){1&o&&(e.TgZ(0,"div"),e._UZ(1,"i",15),e.qZA())}function R(o,r){1&o&&(e.TgZ(0,"span",5),e._uU(1,"No tiene empleados a su cargo"),e.qZA())}function L(o,r){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,R,2,0,"span",16),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.loaded)}}function M(o,r){if(1&o&&(e.TgZ(0,"tr")(1,"td")(2,"a",20),e._uU(3),e.qZA()()()),2&o){const t=r.$implicit;e.xp6(2),e.MGl("routerLink","/user/show/",t.id,""),e.xp6(1),e.Oqu(null==t?null:t.name)}}function G(o,r){if(1&o&&(e.TgZ(0,"mat-accordion",17)(1,"mat-expansion-panel")(2,"mat-expansion-panel-header")(3,"mat-panel-title")(4,"span",5),e._uU(5," Empleados directos a su cargo "),e.qZA()()(),e.TgZ(6,"table",18)(7,"thead",19)(8,"tr")(9,"th"),e._uU(10,"Nombre"),e.qZA()()(),e.TgZ(11,"tbody"),e.YNc(12,M,4,2,"tr",6),e.qZA()()()()),2&o){const t=e.oxw();e.xp6(12),e.Q6J("ngForOf",null==t.user?null:t.user.subordinates)}}function j(o,r){if(1&o&&(e.TgZ(0,"a",20),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.MGl("routerLink","/user/show/",null==t.user||null==t.user.leader?null:t.user.leader.id,""),e.xp6(1),e.Oqu(null==t.user||null==t.user.leader?null:t.user.leader.name)}}const _=function(o){return{disabled:o}};let z=(()=>{class o{constructor(t,i,n,l){this.userService=t,this.activatedRoute=i,this.router=n,this.titleService=l,this.roles=[],this.loaded=!1,this.titleService.setTitle("Detalle")}ngOnInit(){this.activatedRoute.params.pipe((0,T.w)(({id:t})=>this.userService.show(t))).subscribe({next:t=>{this.user=Object.values(t)[0],this.loaded=!0,this.user?.roles?.forEach(i=>this.roles.push(i.name))},error:t=>{this.router.navigateByUrl("benefit-employee"),u().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:i=>{i.addEventListener("mouseenter",u().stopTimer),i.addEventListener("mouseleave",u().resumeTimer)}})}})}destroy(){u().fire({title:"Est\xe1 seguro?",text:"Al eliminar el usuario se eliminar\xe1 todo registro de la base de datos",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Eliminar!",showClass:{popup:"animate__animated animate__fadeIn"},hideClass:{popup:"animate__animated animate__fadeOutUp"}}).then(t=>{t.isConfirmed&&this.userService.destroy(this.user?.id).subscribe({next:i=>{this.router.navigateByUrl("user/index"),u().fire({title:"Eliminado",icon:"success"})},error:i=>{u().fire({title:"Error al borrar registro",text:i,icon:"error"})}})})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(Z.K),e.Y36(d.gz),e.Y36(d.F0),e.Y36(v.Dx))},o.\u0275cmp=e.Xpm({type:o,selectors:[["user-show"]],decls:44,vars:22,consts:[[1,"row","mt-5"],[1,"col"],[1,"row","px-5"],[1,"col-xs-12","col-md-4","d-flex","flex-column","my-2"],[4,"ngIf"],[1,"form-text"],[4,"ngFor","ngForOf"],[1,"link-primary","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover",3,"href"],[4,"ngIf","ngIfElse"],[1,"btn-group","float-end","mt-5","mb-5"],["backButton","",1,"btn","btn-outline-secondary"],["aria-current","page",1,"btn","btn-warning",3,"routerLink","ngClass"],[1,"btn","btn-outline-danger",3,"ngClass","click"],["subordinates",""],["leader",""],[1,"fa-solid","fa-spinner","fa-spin","fa-xs"],["class","form-text",4,"ngIf"],["multi","",1,"example-headers-align"],[1,"table","table-hover","table-sm"],[1,"bg-dark","text-light"],[1,"link-primary","link-offset-2","link-underline-opacity-25","link-underline-opacity-100-hover",3,"routerLink"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.YNc(4,O,2,0,"div",4),e._uU(5),e.TgZ(6,"span",5),e._uU(7,"Nombre"),e.qZA()(),e.TgZ(8,"div",3),e.YNc(9,J,2,0,"div",4),e._uU(10),e.TgZ(11,"span",5),e._uU(12,"Cargo"),e.qZA()(),e.TgZ(13,"div",3),e.YNc(14,I,2,0,"div",4),e.YNc(15,Y,2,1,"div",6),e.TgZ(16,"span",5),e._uU(17,"Rol"),e.qZA()()(),e.TgZ(18,"div",2)(19,"div",3),e.YNc(20,E,2,0,"div",4),e.TgZ(21,"a",7),e._uU(22),e.qZA(),e.TgZ(23,"span",5),e._uU(24,"Correo Electr\xf3nico"),e.qZA()(),e.TgZ(25,"div",3),e.YNc(26,Q,2,0,"div",4),e.YNc(27,V,2,1,"div",8),e.TgZ(28,"span",5),e._uU(29,"Jefe"),e.qZA()(),e.TgZ(30,"div",3),e.YNc(31,B,2,0,"div",4),e.YNc(32,L,2,1,"div",8),e.qZA()(),e.TgZ(33,"div",9)(34,"button",10),e._uU(35,"Volver"),e.qZA(),e.TgZ(36,"a",11),e._uU(37,"Editar"),e.qZA(),e.TgZ(38,"a",12),e.NdJ("click",function(){return i.destroy()}),e._uU(39,"Eliminar"),e.qZA()()()(),e.YNc(40,G,13,1,"ng-template",null,13,e.W1O),e.YNc(42,j,2,2,"ng-template",null,14,e.W1O)),2&t){const n=e.MAs(41),l=e.MAs(43);e.xp6(4),e.Q6J("ngIf",!i.loaded),e.xp6(1),e.hij(" ",null==i.user?null:i.user.name," "),e.xp6(4),e.Q6J("ngIf",!i.loaded),e.xp6(1),e.hij(" ",null==i.user||null==i.user.positions?null:i.user.positions.name," "),e.xp6(4),e.Q6J("ngIf",!i.loaded),e.xp6(1),e.Q6J("ngForOf",null==i.user?null:i.user.roles),e.xp6(5),e.Q6J("ngIf",!i.loaded),e.xp6(1),e.MGl("href","mailto:",null==i.user?null:i.user.email,"",e.LSH),e.xp6(1),e.Oqu(null==i.user?null:i.user.email),e.xp6(4),e.Q6J("ngIf",!i.loaded),e.xp6(1),e.Q6J("ngIf",!(null!=i.user&&i.user.leader))("ngIfElse",l),e.xp6(4),e.Q6J("ngIf",!i.loaded),e.xp6(1),e.Q6J("ngIf",(null==i.user?null:i.user.subordinates.length)<1)("ngIfElse",n),e.xp6(4),e.MGl("routerLink","/user/edit/",null==i.user?null:i.user.id,""),e.Q6J("ngClass",e.VKq(18,_,!i.loaded)),e.xp6(2),e.Q6J("ngClass",e.VKq(20,_,!i.loaded))}},dependencies:[g.pp,g.ib,g.yz,g.yK,m.mk,m.sg,m.O5,d.rH,N.z],encapsulation:2}),o})();var K=s(9906),P=s(1407),$=s(9207),D=s(7270),x=s(9114),X=s(787),W=s(1217);function H(o,r){1&o&&(e.TgZ(0,"span",29),e._uU(1,"Obligatorio"),e.qZA())}function ee(o,r){1&o&&(e.TgZ(0,"span",29),e._uU(1,"Obligatorio"),e.qZA())}function te(o,r){if(1&o&&(e.TgZ(0,"span",29),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Oqu(t.passErrorMsg)}}function oe(o,r){if(1&o&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&o){const t=r.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function ie(o,r){if(1&o&&(e.TgZ(0,"mat-option",30),e._uU(1),e.qZA()),2&o){const t=r.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function re(o,r){1&o&&(e.TgZ(0,"div"),e._UZ(1,"i",31),e.qZA())}const f=function(o){return{invalid:o}};function ne(o,r){if(1&o&&(e.TgZ(0,"div",32),e._UZ(1,"input",33),e.TgZ(2,"label",34),e._uU(3),e.qZA()()),2&o){const t=r.$implicit,i=e.oxw();e.xp6(1),e.s9C("id",t.name),e.Q6J("ngClass",e.VKq(5,f,!i.rolesFormGroup.valid&&i.rolesFormGroup.touched))("formControl",i.rolesFormGroup.get(t.name)),e.xp6(1),e.s9C("for",t.name),e.xp6(1),e.Oqu(t.name)}}function se(o,r){1&o&&(e.TgZ(0,"div"),e._UZ(1,"i",31),e.qZA())}function ae(o,r){if(1&o&&(e.TgZ(0,"div",32)(1,"div",35),e._UZ(2,"input",36),e.TgZ(3,"label",37),e._uU(4),e.qZA()()()),2&o){const t=r.$implicit,i=e.oxw();e.xp6(2),e.s9C("value",t.id),e.s9C("id",t.id),e.Q6J("ngClass",e.VKq(5,f,i.campoEsValido("position_id"))),e.xp6(1),e.s9C("for",t.id),e.xp6(1),e.hij(" ",t.name," ")}}let U=(()=>{class o{get rolesFormGroup(){return this.createForm.controls.rolesFormGroup}get passErrorMsg(){const t=this.createForm.get("password")?.errors;return t.minlength?"La contrase\xf1a no cumple con el largo m\xednimo de 6 caracteres":t.required?"La contrase\xf1a es obligatoria":""}constructor(t,i,n,l,c,p,A,S){this.activatedRoute=t,this.fb=i,this.positionService=n,this.roleService=l,this.router=c,this.titleService=p,this.userService=A,this.validatorService=S,this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",this.createForm=this.fb.group({name:["",[a.kI.required,a.kI.minLength(5)]],email:["",[a.kI.required,a.kI.pattern(this.emailPattern)]],password:["",[this.passwordRequiredIfNotNull()]],leader:[""],subordinates:[""],position_id:["",a.kI.required],requirePassChange:[!1]}),this.disableSubmitBtn=!1,this.loaded=!1,this.positions=[],this.roles=[],this.user={name:"",email:"",email_verified_at:null,position_id:0,leader:null,created_at:new Date,updated_at:new Date,subordinates:[],positions:void 0,roles:[],requirePassChange:!1},this.titleService.setTitle("Nuevo Usuario")}ngOnInit(){this.roleService.index().subscribe({next:t=>{this.roles=t,this.loaded=!0,this.createForm.addControl("rolesFormGroup",this.buildChecksFormGroup(t))},error:t=>{this.router.navigateByUrl("benefit-employee"),u().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:i=>{i.addEventListener("mouseenter",u().stopTimer),i.addEventListener("mouseleave",u().resumeTimer)}})}}),this.positionService.index().subscribe(t=>{this.positions=t,this.loaded=!0}),this.userService.index().subscribe(t=>{this.posibleLeader=t,this.posibleSubordinates=t,this.filteredSubordinates=t}),this.router.url.includes("edit")&&this.activatedRoute.params.pipe((0,T.w)(({id:t})=>this.userService.show(t))).subscribe(t=>{const i=Object.values(t)[0];this.user=i,this.createForm.get("name")?.setValue(i.name),this.createForm.get("email")?.setValue(i.email),Object.keys(this.rolesFormGroup.controls).forEach(n=>{Object.values(i.roles).forEach(l=>{n===l.name&&this.rolesFormGroup.get(n).setValue(!0)})}),i.leader&&this.createForm.get("leader")?.setValue(i.leader.id),i.subordinates&&this.createForm.get("subordinates")?.setValue(i.subordinates?.map(n=>n.id)),this.createForm.get("position_id")?.setValue(i.positions?.id?.toString()),this.createForm.get("requirePassChange")?.setValue(i.requirePassChange)})}campoEsValido(t){return this.createForm.controls[t].errors&&this.createForm.controls[t].touched}save(){this.createForm.invalid?this.createForm.markAllAsTouched():(this.user.id?this.userService.update(this.user.id,this.createForm.value).subscribe({next:()=>{this.router.navigateByUrl(`/user/show/${this.user.id}`),u().fire({title:"Actualizado",icon:"success"})},error:t=>{u().fire({title:"Error",text:t.error.message,icon:"error"}),this.disableSubmitBtn=!1}}):this.userService.create(this.createForm.value).subscribe({next:t=>{this.router.navigateByUrl(`/user/show/${t.id}`),u().fire({title:"Creado",icon:"success"})},error:t=>{u().fire({title:"Error",text:t.error.message,icon:"error"}),this.disableSubmitBtn=!1}}),this.disableSubmitBtn=!0)}buildChecksFormGroup(t,i=[]){let n=this.fb.group({},{validators:[this.atLeastOneCheckboxCheckedValidator()]});return t.forEach(l=>{let c=i.some(p=>p===l.id);n.addControl(l.name,this.fb.control(c,{},this.validatorService.checkboxRequired()))}),n}atLeastOneCheckboxCheckedValidator(t=1){return function(n){let l=0;return Object.keys(n.controls).forEach(c=>{n.controls[c].value&&l++}),l<t?{requireCheckboxToBeChecked:!0}:null}}filterSubordinates(t){this.filteredSubordinates=this.posibleSubordinates.filter(i=>i.id!==t.value)}passwordRequiredIfNotNull(t=6){return function(n){return(n.value||n.hasValidator(a.kI.required))&&n.value.length<t?{minlength:!0}:null}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d.gz),e.Y36(a.qu),e.Y36(P.e),e.Y36($.N),e.Y36(d.F0),e.Y36(v.Dx),e.Y36(Z.K),e.Y36(D.o))},o.\u0275cmp=e.Xpm({type:o,selectors:[["user-create"]],decls:56,vars:21,consts:[[1,"row"],[1,"col"],[1,"p-5",3,"formGroup","ngSubmit"],[1,"mb-3","form-floating"],["type","text","formControlName","name","id","name","placeholder","Nombre Completo",1,"form-control",3,"ngClass"],["for","name",1,"form-label"],[1,"fa-solid","fa-user","me-1"],["class","form-text text-danger",4,"ngIf"],["type","email","formControlName","email","id","email","placeholder","email@company.com",1,"form-control",3,"ngClass"],["for","email",1,"form-label"],[1,"fa-solid","fa-at","me-1"],[1,"mb-3","input-group"],[1,"form-floating"],["type","password","formControlName","password","id","password","placeholder","password",1,"form-control",3,"ngClass"],["for","password",1,"form-label"],[1,"fa-solid","fa-key","me-1"],[1,"input-group-text"],[1,"form-check","form-switch"],["for","requirePassChange",1,"form-check-label"],["type","checkbox","role","switch","formControlName","requirePassChange",1,"form-check-input"],[1,"mb-3"],["formControlName","leader",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["formControlName","subordinates","multiple",""],["for","roles",1,"form-label"],[4,"ngIf"],["class","col-sm-6 col-md-4 col-lg-2",4,"ngFor","ngForOf"],["for","positions",1,"form-label"],["type","submit",1,"btn","btn-success","float-end",3,"disabled"],[1,"form-text","text-danger"],[3,"value"],[1,"fa-solid","fa-spinner","fa-spin","fa-xs"],[1,"col-sm-6","col-md-4","col-lg-2"],["type","checkbox",1,"form-check-input",3,"id","ngClass","formControl"],[1,"form-check-label","ms-2",3,"for"],[1,"form-check"],["type","radio","formControlName","position_id","id","position.id","required","",1,"form-check-input",3,"value","id","ngClass"],[1,"form-check-label",3,"for"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return i.save()}),e.TgZ(3,"div",3),e._UZ(4,"input",4),e.TgZ(5,"label",5),e._UZ(6,"i",6),e._uU(7,"Nombre Completo"),e.qZA(),e.YNc(8,H,2,0,"span",7),e.qZA(),e.TgZ(9,"div",3),e._UZ(10,"input",8),e.TgZ(11,"label",9),e._UZ(12,"i",10),e._uU(13,"Correo Electr\xf3nico"),e.qZA(),e.YNc(14,ee,2,0,"span",7),e.qZA(),e.TgZ(15,"div",11)(16,"div",12),e._UZ(17,"input",13),e.TgZ(18,"label",14),e._UZ(19,"i",15),e._uU(20,"Contrase\xf1a"),e.qZA()(),e.TgZ(21,"div",16)(22,"div",17)(23,"small")(24,"label",18),e._uU(25,"\xbfRequiere cambiar password?"),e.qZA()(),e._UZ(26,"input",19),e.qZA()()(),e.YNc(27,te,2,1,"span",7),e.TgZ(28,"div",20)(29,"mat-form-field")(30,"mat-label"),e._uU(31,"Jefe (Opcional)"),e.qZA(),e.TgZ(32,"mat-select",21),e.NdJ("selectionChange",function(l){return i.filterSubordinates(l)}),e.YNc(33,oe,2,2,"mat-option",22),e.qZA()()(),e.TgZ(34,"div",20)(35,"mat-form-field")(36,"mat-label"),e._uU(37,"Subordinados (Opcional)"),e.qZA(),e.TgZ(38,"mat-select",23),e.YNc(39,ie,2,2,"mat-option",22),e.qZA()()(),e.TgZ(40,"div",20)(41,"label",24),e._uU(42,"Roles"),e.qZA(),e.TgZ(43,"div",0),e.YNc(44,re,2,0,"div",25),e.YNc(45,ne,4,7,"div",26),e.qZA()(),e.TgZ(46,"div",20)(47,"label",27),e._uU(48,"Cargos"),e.qZA(),e.TgZ(49,"div",0),e.YNc(50,se,2,0,"div",25),e.YNc(51,ae,5,7,"div",26),e.qZA()(),e._UZ(52,"div",20),e.TgZ(53,"div",20)(54,"button",28),e._uU(55),e.qZA()()()()()),2&t&&(e.xp6(2),e.Q6J("formGroup",i.createForm),e.xp6(2),e.Q6J("ngClass",e.VKq(15,f,i.campoEsValido("name"))),e.xp6(4),e.Q6J("ngIf",i.campoEsValido("name")),e.xp6(2),e.Q6J("ngClass",e.VKq(17,f,i.campoEsValido("email"))),e.xp6(4),e.Q6J("ngIf",i.campoEsValido("email")),e.xp6(3),e.Q6J("ngClass",e.VKq(19,f,i.campoEsValido("password"))),e.xp6(10),e.Q6J("ngIf",i.campoEsValido("password")),e.xp6(6),e.Q6J("ngForOf",i.posibleLeader),e.xp6(6),e.Q6J("ngForOf",i.filteredSubordinates),e.xp6(5),e.Q6J("ngIf",!i.loaded),e.xp6(1),e.Q6J("ngForOf",i.roles),e.xp6(5),e.Q6J("ngIf",!i.loaded),e.xp6(1),e.Q6J("ngForOf",i.positions),e.xp6(3),e.Q6J("disabled",i.disableSubmitBtn),e.xp6(1),e.hij(" ",i.user.id?"Actualizar":"Crear"," "))},dependencies:[x.KE,x.hX,X.gD,W.ey,m.mk,m.sg,m.O5,a._Y,a.Fj,a.Wl,a._,a.JJ,a.JL,a.Q7,a.oH,a.sg,a.u],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),o})();const le=[{path:"",component:K.t,children:[{path:"index",component:w},{path:"create",component:U},{path:"edit/:id",component:U},{path:"show/:id",component:z},{path:"**",redirectTo:"index"}]}];let ue=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.Bz.forChild(le),d.Bz]}),o})();var de=s(4466);let me=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[q.h,m.ez,C.T,a.UX,ue,de.m]}),o})()}}]);