"use strict";(self.webpackChunksalarioemocionalfrontend=self.webpackChunksalarioemocionalfrontend||[]).push([[329],{9329:(T,c,r)=>{r.r(c),r.d(c,{AuthModule:()=>_});var l=r(4755),i=r(5118),e=r(2223);let p=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["auth-main"]],decls:1,vars:0,template:function(t,s){1&t&&e._UZ(0,"router-outlet")},dependencies:[i.lC],encapsulation:2}),o})();var f=r(1741),a=r(9401),g=r(5226),d=r.n(g),h=r(7270),C=r(6518);function v(o,n){1&o&&(e.TgZ(0,"small",20),e._uU(1,"Obligatorio"),e.qZA())}function x(o,n){if(1&o&&(e.TgZ(0,"small",20),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Oqu(t.passErrorMsg)}}function w(o,n){1&o&&(e.TgZ(0,"small",20),e._uU(1),e.qZA()),2&o&&(e.xp6(1),e.Oqu("Las contrase\xf1a no coinciden"))}const m=function(o){return{invalid:o}};function Z(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"form",1),e.NdJ("ngSubmit",function(){e.CHM(t);const u=e.oxw();return e.KtG(u.submitPassChange())}),e.TgZ(1,"section",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"div",7)(7,"div",8)(8,"h2",9),e._uU(9,"Cambio de contrase\xf1a requerido"),e.qZA(),e.TgZ(10,"div",10),e._UZ(11,"input",11),e.TgZ(12,"label",12),e._uU(13,"Contrase\xf1a Actual"),e.qZA(),e.YNc(14,v,2,0,"small",13),e.qZA(),e.TgZ(15,"div",10),e._UZ(16,"input",14),e.TgZ(17,"label",15),e._uU(18,"Nueva Contrase\xf1a"),e.qZA(),e.YNc(19,x,2,1,"small",13),e.qZA(),e.TgZ(20,"div",10),e._UZ(21,"input",16),e.TgZ(22,"label",17),e._uU(23,"Repita la contrase\xf1a"),e.qZA(),e.YNc(24,w,2,1,"small",13),e.qZA(),e._UZ(25,"input",18),e.TgZ(26,"button",19),e._uU(27,"Login"),e.qZA()()()()()()()()()}if(2&o){const t=e.oxw();e.Q6J("formGroup",t.miFormulario),e.xp6(11),e.Q6J("ngClass",e.VKq(8,m,t.campoEsValido("currentPassword"))),e.xp6(3),e.Q6J("ngIf",t.campoEsValido("currentPassword")),e.xp6(2),e.Q6J("ngClass",e.VKq(10,m,t.campoEsValido("password"))),e.xp6(3),e.Q6J("ngIf",t.campoEsValido("password")),e.xp6(2),e.Q6J("ngClass",e.VKq(12,m,t.campoEsValido("retypePassword"))),e.xp6(3),e.Q6J("ngIf",t.campoEsValido("retypePassword")),e.xp6(2),e.Q6J("disabled",!t.miFormulario.valid)}}const y=[{path:"",component:p,children:[{path:"login",component:f.G},{path:"password-change",component:(()=>{class o{get passErrorMsg(){const t=this.miFormulario.get("password")?.errors;return t.required?"Obligatorio":t.minlength?"La contrase\xf1a no cumple con el largo m\xednimo de 6 caracteres":""}constructor(t,s,u,A){this.fb=t,this.validatorService=s,this.authService=u,this.router=A,this.miFormulario=this.fb.group({currentPassword:[,[a.kI.required]],password:[,[a.kI.required,a.kI.minLength(6)]],retypePassword:[,[a.kI.required,a.kI.minLength(6)]],device_name:["PC"]},{validators:this.validatorService.camposIguales("password","retypePassword")}),this.showScreen=!1,this.authService.validarRequirePassChange().subscribe({next:F=>F?this.showScreen=!0:this.router.navigate(["benefit-employee"])})}campoEsValido(t){return this.miFormulario.get(t)?.invalid&&this.miFormulario.get(t)?.touched}submitPassChange(){this.authService.passwordChange(this.miFormulario.value).subscribe({next:t=>{d().fire({title:"Actualizado",icon:"success",text:"Contrase\xf1a actualizada",showClass:{popup:"animate__animated animate__fadeIn"},hideClass:{popup:"animate__animated animate__fadeOutUp"}}),this.router.navigate(["benefit-employee"])},error:t=>{d().fire({title:"Error",icon:"error",text:JSON.stringify(t.error.message),showClass:{popup:"animate__animated animate__fadeIn"},hideClass:{popup:"animate__animated animate__fadeOutUp"}})}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(a.qu),e.Y36(h.o),e.Y36(C.e),e.Y36(i.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-pass-change"]],decls:1,vars:1,consts:[["autocomplete","off",3,"formGroup","ngSubmit",4,"ngIf"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"vh-100","gradient-custom"],[1,"container","py-5","h-100"],[1,"row","d-flex","justify-content-center","align-items-center","h-100"],[1,"col-12","col-md-8","col-lg-6","col-xl-5"],[1,"card",2,"border-radius","1rem"],[1,"card-body","p-5","text-center"],[1,"mb-md-5","mt-md-4","pb-5"],[1,"mb-2"],[1,"form-floating","mb-3"],["type","text","id","currentPassword","formControlName","currentPassword","placeholder","Nueva Contrase\xf1a",1,"form-control",3,"ngClass"],["for","currentPassword",1,"form-label"],["class","text-danger",4,"ngIf"],["type","text","id","password","formControlName","password","placeholder","Nueva Contrase\xf1a",1,"form-control",3,"ngClass"],["for","password",1,"form-label"],["type","text","id","retypePassword","formControlName","retypePassword","placeholder","Repita la contrase\xf1a",1,"form-control",3,"ngClass"],["for","retypePassword",1,"form-label"],["type","hidden","id","device_name","formControlName","device_name"],[1,"btn","btn-secondary",3,"disabled"],[1,"text-danger"]],template:function(t,s){1&t&&e.YNc(0,Z,28,14,"form",0),2&t&&e.Q6J("ngIf",s.showScreen)},dependencies:[l.mk,l.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u],encapsulation:2}),o})()},{path:"**",redirectTo:"login"}]}];let P=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[i.Bz.forChild(y),i.Bz]}),o})(),_=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[l.ez,P,a.UX]}),o})()}}]);