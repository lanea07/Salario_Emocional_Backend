"use strict";(self.webpackChunksalarioemocionalfrontend=self.webpackChunksalarioemocionalfrontend||[]).push([[559],{4559:(fe,b,l)=>{l.r(b),l.d(b,{BenefitEmployeeModule:()=>he});var c=l(4755),s=l(9401),d=l(1585),x=l(5770),v=l(8582),u=l(9089),f=l(5118),e=l(2223);let T=(()=>{class i{transform(t){return t.reduce((r,o)=>r+o.benefit_detail.time_hours,0),t?t.reduce((r,o)=>r+o.benefit_detail.time_hours,0):0}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275pipe=e.Yjl({name:"sum",type:i,pure:!0}),i})();var S=l(5226),m=l.n(S),g=l(3144),B=l(2340);let y=(()=>{class i{constructor(t){this.http=t,this.apiBaseUrl=B.N.apiBaseUrl,this.token=localStorage.getItem("token")}index(t,n){const r=(new g.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/benefituser?userId=${t}&year=${n}`,{headers:r,withCredentials:!0})}show(t,n){const r=(new g.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/benefituser/${t}?year=${n}`,{headers:r,withCredentials:!0})}create(t){const n=(new g.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.post(`${this.apiBaseUrl}/benefituser`,t,{headers:n,withCredentials:!0})}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(g.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var Z=l(1239),D=l(427),A=l(3499),N=l(2641),I=l(7579);const J=["modalContent"];function F(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"mwl-calendar-month-view",11),e.NdJ("dayClicked",function(r){e.CHM(t);const o=e.oxw();return e.KtG(o.dayClicked(r.day))})("eventTimesChanged",function(r){e.CHM(t);const o=e.oxw();return e.KtG(o.eventTimesChanged(r))}),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("viewDate",t.viewDate)("events",t.events)("refresh",t.refresh)("activeDayIsOpen",t.activeDayIsOpen)}}function M(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"mwl-calendar-week-view",12),e.NdJ("eventTimesChanged",function(r){e.CHM(t);const o=e.oxw();return e.KtG(o.eventTimesChanged(r))}),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("viewDate",t.viewDate)("events",t.events)("refresh",t.refresh)}}function q(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"mwl-calendar-day-view",12),e.NdJ("eventTimesChanged",function(r){e.CHM(t);const o=e.oxw();return e.KtG(o.eventTimesChanged(r))}),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("viewDate",t.viewDate)("events",t.events)("refresh",t.refresh)}}function Q(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",13)(1,"h5",14),e._uU(2,"Event action occurred"),e.qZA(),e.TgZ(3,"button",15),e.NdJ("click",function(){const o=e.CHM(t).close;return e.KtG(o())}),e.TgZ(4,"span",16),e._uU(5,"\xd7"),e.qZA()()(),e.TgZ(6,"div",17)(7,"div"),e._uU(8," Action: "),e.TgZ(9,"pre"),e._uU(10),e.qZA()(),e.TgZ(11,"div"),e._uU(12," Event: "),e.TgZ(13,"pre"),e._uU(14),e.ALo(15,"json"),e.qZA()()(),e.TgZ(16,"div",18)(17,"button",19),e.NdJ("click",function(){const o=e.CHM(t).close;return e.KtG(o())}),e._uU(18," OK "),e.qZA()()}if(2&i){const t=e.oxw();e.xp6(10),e.Oqu(t.modalData.action),e.xp6(4),e.Oqu(e.lcZ(15,2,t.modalData.event))}}const U={primary:{primary:"#37a91b",secondary:"#55ffbb"},secondary:{primary:"#888888",secondary:"#bbbbbb"}};let Y=(()=>{class i{constructor(t){this.modal=t,this.view=d.wr.Month,this.CalendarView=d.wr,this.viewDate=new Date,this.refresh=new I.x,this.events=[],this.activeDayIsOpen=!1}ngOnChanges(t){this.addEventsToCalendar(this.data)}dayClicked({date:t,events:n}){(0,A.Z)(t,this.viewDate)?(this.activeDayIsOpen=!((0,N.Z)(this.viewDate,t)&&!0===this.activeDayIsOpen||0===n.length),this.viewDate=t):(this.viewDate=t,this.activeDayIsOpen=!1)}eventTimesChanged({event:t,newStart:n,newEnd:r}){this.events=this.events.map(o=>o===t?{...t,start:n,end:r}:o)}deleteEvent(t){this.events=this.events.filter(n=>n!==t)}setView(t){this.view=t}closeOpenMonthViewDay(){this.activeDayIsOpen=!1}addEventsToCalendar(t){this.events=[],t?.flat().forEach(n=>{let{benefit_user:r}=n;r.forEach(o=>{("Mi Viernes"===o.benefits.name||"Mi Banco de Horas"===o.benefits.name)&&(this.events=[...this.events,{title:n.name+" - "+o.benefits.name+" - "+o.benefit_detail.name,start:new Date(o.benefit_begin_time),end:new Date(o.benefit_end_time),color:n.id===Number.parseInt(localStorage.getItem("uid"))?U.primary:U.secondary,draggable:!1,meta:n}])})})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(u.FF))},i.\u0275cmp=e.Xpm({type:i,selectors:[["calendar-component"]],viewQuery:function(t,n){if(1&t&&e.Gf(J,7),2&t){let r;e.iGM(r=e.CRH())&&(n.modalContent=r.first)}},inputs:{data:"data"},features:[e.TTD],decls:28,vars:20,consts:[[1,"row","text-center"],[1,"col-md-4"],[1,"btn-group"],["mwlCalendarPreviousView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],["mwlCalendarToday","",1,"btn","btn-outline-secondary",3,"viewDate","viewDateChange"],["mwlCalendarNextView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],[1,"btn","btn-primary",3,"click"],[3,"ngSwitch"],[3,"viewDate","events","refresh","activeDayIsOpen","dayClicked","eventTimesChanged",4,"ngSwitchCase"],[3,"viewDate","events","refresh","eventTimesChanged",4,"ngSwitchCase"],["modalContent",""],[3,"viewDate","events","refresh","activeDayIsOpen","dayClicked","eventTimesChanged"],[3,"viewDate","events","refresh","eventTimesChanged"],[1,"modal-header"],[1,"modal-title"],["type","button",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-secondary",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.NdJ("viewDateChange",function(o){return n.viewDate=o})("viewDateChange",function(){return n.closeOpenMonthViewDay()}),e._uU(4," Previous "),e.qZA(),e.TgZ(5,"div",4),e.NdJ("viewDateChange",function(o){return n.viewDate=o}),e._uU(6," Today "),e.qZA(),e.TgZ(7,"div",5),e.NdJ("viewDateChange",function(o){return n.viewDate=o})("viewDateChange",function(){return n.closeOpenMonthViewDay()}),e._uU(8," Next "),e.qZA()()(),e.TgZ(9,"div",1)(10,"h3"),e._uU(11),e.ALo(12,"calendarDate"),e.qZA()(),e.TgZ(13,"div",1)(14,"div",2)(15,"div",6),e.NdJ("click",function(){return n.setView(n.CalendarView.Month)}),e._uU(16," Month "),e.qZA(),e.TgZ(17,"div",6),e.NdJ("click",function(){return n.setView(n.CalendarView.Week)}),e._uU(18," Week "),e.qZA(),e.TgZ(19,"div",6),e.NdJ("click",function(){return n.setView(n.CalendarView.Day)}),e._uU(20," Day "),e.qZA()()()(),e._UZ(21,"br"),e.TgZ(22,"div",7),e.YNc(23,F,1,4,"mwl-calendar-month-view",8),e.YNc(24,M,1,3,"mwl-calendar-week-view",9),e.YNc(25,q,1,3,"mwl-calendar-day-view",9),e.qZA(),e.YNc(26,Q,19,4,"ng-template",null,10,e.W1O)),2&t&&(e.xp6(3),e.Q6J("view",n.view)("viewDate",n.viewDate),e.xp6(2),e.Q6J("viewDate",n.viewDate),e.xp6(2),e.Q6J("view",n.view)("viewDate",n.viewDate),e.xp6(4),e.Oqu(e.Dn7(12,16,n.viewDate,n.view+"ViewTitle","en")),e.xp6(4),e.ekj("active",n.view===n.CalendarView.Month),e.xp6(2),e.ekj("active",n.view===n.CalendarView.Week),e.xp6(2),e.ekj("active",n.view===n.CalendarView.Day),e.xp6(3),e.Q6J("ngSwitch",n.view),e.xp6(1),e.Q6J("ngSwitchCase",n.CalendarView.Month),e.xp6(1),e.Q6J("ngSwitchCase",n.CalendarView.Week),e.xp6(1),e.Q6J("ngSwitchCase",n.CalendarView.Day))},dependencies:[d.YX,d.MG,d.nA,d.GH,d.TK,d.Se,c.RF,c.n9,d.vk,c.Ts],encapsulation:2,changeDetection:0}),i})(),O=(()=>{class i{constructor(){this.doughnutChartLabels=["Usadas","Disponibles"],this.doughnutChartData={labels:this.doughnutChartLabels,datasets:[{data:[this.totalBancoHoras,16-this.totalBancoHoras],backgroundColor:["#C8102E","gray"],hoverBackgroundColor:["#D8102E","darkgray"]}]},this.doughnutChartType="doughnut"}ngOnChanges(t){this.doughnutChartData.datasets[0].data=[this.totalBancoHoras,16-this.totalBancoHoras],this.chart?.chart?.update()}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["doughnut-chart-component"]],viewQuery:function(t,n){if(1&t&&e.Gf(v.jh,5),2&t){let r;e.iGM(r=e.CRH())&&(n.chart=r.first)}},inputs:{totalBancoHoras:"totalBancoHoras"},features:[e.TTD],decls:1,vars:2,consts:[["baseChart","",1,"chart",3,"data","type"]],template:function(t,n){1&t&&e._UZ(0,"canvas",0),2&t&&e.Q6J("data",n.doughnutChartData)("type",n.doughnutChartType)},dependencies:[v.jh],encapsulation:2}),i})();function V(i,a){if(1&i&&(e.TgZ(0,"option",12),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.s9C("value",t),e.xp6(1),e.hij("",t," ")}}function H(i,a){if(1&i&&(e.TgZ(0,"option",12),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.MGl("value"," ",t.id,""),e.xp6(1),e.hij(" ",t.name," ")}}function k(i,a){1&i&&e._UZ(0,"div")}function E(i,a){1&i&&e._UZ(0,"img",30)}function $(i,a){1&i&&e._UZ(0,"img",31)}function j(i,a){1&i&&e._UZ(0,"img",32)}function G(i,a){1&i&&e._UZ(0,"img",33)}function K(i,a){1&i&&e._UZ(0,"img",34)}function L(i,a){if(1&i&&(e.TgZ(0,"div",35),e._UZ(1,"doughnut-chart-component",36),e.qZA()),2&i){const t=e.oxw(3);e.xp6(1),e.Q6J("totalBancoHoras",t.totalBancoHoras)}}function R(i,a){if(1&i&&(e.TgZ(0,"div",19)(1,"div",20),e.YNc(2,E,1,0,"img",21),e.YNc(3,$,1,0,"img",22),e.YNc(4,j,1,0,"img",23),e.YNc(5,G,1,0,"img",24),e.YNc(6,K,1,0,"img",25),e.qZA(),e.TgZ(7,"div",26)(8,"div",27),e._uU(9),e.qZA(),e._UZ(10,"ul",28),e.qZA(),e.YNc(11,L,2,1,"div",29),e.qZA()),2&i){const t=a.$implicit,n=e.oxw(2);e.xp6(1),e.Q6J("ngSwitch",t.name),e.xp6(1),e.Q6J("ngSwitchCase","Mi Cumplea\xf1os"),e.xp6(1),e.Q6J("ngSwitchCase","Mi Banco de Horas"),e.xp6(1),e.Q6J("ngSwitchCase","Mi Horario Flexible"),e.xp6(1),e.Q6J("ngSwitchCase","Mi Viernes"),e.xp6(1),e.Q6J("ngSwitchCase","Tiempo para el Viajero"),e.xp6(3),e.hij(" ",t.name," "),e.xp6(1),e.Q6J("innerHTML",n.selectBenefit(t.id),e.oJD),e.xp6(1),e.Q6J("ngIf","Mi Banco de Horas"===t.name)}}function z(i,a){if(1&i&&(e._UZ(0,"hr"),e.TgZ(1,"div",17)(2,"div",3)(3,"h2"),e._uU(4),e.qZA()(),e.YNc(5,R,12,9,"div",18),e.qZA()),2&i){const t=e.oxw();e.xp6(4),e.hij("Detalle de beneficios de ",null==t.currentUserBenefits?null:t.currentUserBenefits.name,""),e.xp6(1),e.Q6J("ngForOf",t.benefits)}}let W=(()=>{class i{constructor(t,n,r,o,w){this.fb=t,this.benefitUserService=n,this.benefitService=r,this.userService=o,this.router=w,this.onClickString="",this.years=[],this.totalBancoHoras=0,this.viewBenefitUser=this.fb.group({years:[(new Date).getFullYear().toString(),s.kI.required],users:["",s.kI.required]});const _=(new Date).getFullYear();for(let h=_;h>_-5;h--)this.years.push(h)}ngOnInit(){this.userService.show(Number.parseInt(localStorage.getItem("uid"))).subscribe({next:t=>{this.user=Object.values(t)[0]},error:t=>{this.router.navigateByUrl("benefit-employee"),m().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:n=>{n.addEventListener("mouseenter",m().stopTimer),n.addEventListener("mouseleave",m().resumeTimer)}})}}),this.benefitService.index().subscribe(t=>this.benefits=t),this.benefitUserService.index(Number.parseInt(localStorage.getItem("uid")),this.viewBenefitUser.get("years")?.value).subscribe(t=>{this.allUsersBenefits=t,this.calendarData=this.allUsersBenefits})}getBenefitDetail(t){this.viewBenefitUser.get("years")?.value&&this.viewBenefitUser.get("users")?.value&&this.benefitUserService.index(Number.parseInt(localStorage.getItem("uid")),this.viewBenefitUser.get("years")?.value).subscribe(n=>{this.allUsersBenefits=n,this.currentUserBenefits=this.allUsersBenefits.find(r=>r.id===Number.parseInt(this.viewBenefitUser.controls.users.value)),this.calendarData=this.allUsersBenefits})}emitir(){this.totalBancoHoras=Math.round(100*Math.random())}selectBenefit(t){let n=this.currentUserBenefits?.benefit_user.filter(r=>r.benefit_id===t);if(n?.length){let r="";switch(n[0].benefits.name){case"Mi Cumplea\xf1os":return n?`<li class="list-group-item">\n              Fecha de redenci\xf3n: ${new c.uU("en-US").transform(n[0].benefit_begin_time,"dd/MM/yyyy, hh:mm a")}\n            </li>`:'<li class="list-group-item">No se encontraron beneficios registrados</li>';case"Mi Banco de Horas":return this.totalBancoHoras=(new T).transform(n),n.forEach(o=>{r+=`<li class="list-group-item">\n              ${new c.uU("en-US").transform(o.benefit_begin_time,"dd/MM/yyyy, hh:mm a")}: ${o.benefit_detail.time_hours} horas\n            </li>`}),n?r:'<li class="list-group-item">No se encontraron beneficios registrados</li>';case"Mi Horario Flexible":case"Tiempo para el Viajero":return n?`<li class="list-group-item">\n                ${n[0].benefit_detail.name}\n              </li>`:'<li class="list-group-item">No se encontraron beneficios registrados</li>';case"Mi Viernes":return n.forEach(o=>{r+=`<li class="list-group-item">\n              ${new c.uU("en-US").transform(o.benefit_begin_time,"dd/MM/yyyy, hh:mm a")}: ${o.benefit_detail.time_hours} horas\n            </li>`}),n?r:'<li class="list-group-item">No se encontraron beneficios registrados</li>'}}return this.totalBancoHoras=0,'<li class="list-group-item">No se encontraron beneficios registrados</li>'}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(s.qu),e.Y36(y),e.Y36(Z.T),e.Y36(D.K),e.Y36(f.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["benefitemployee-index"]],decls:27,vars:8,consts:[[1,"row","mt-5"],[1,"col"],[3,"formGroup"],[1,"row","p-3"],[1,"col-3"],[1,"input-group"],["for","years",1,"input-group-text"],["formControlName","years",1,"form-select",3,"change"],[3,"value",4,"ngFor","ngForOf"],[1,"col-9"],["for","user",1,"input-group-text"],["formControlName","users",1,"form-select",3,"change"],[3,"value"],[4,"ngIf","ngIfThen"],[1,"row","pb-3"],[3,"data"],["newBenefitDetailTemplate",""],[1,"row","shadow","rounded","mb-3"],["class","input-group mb-3",4,"ngFor","ngForOf"],[1,"input-group","mb-3"],[1,"input-group-text",2,"width","20%",3,"ngSwitch"],["src","./assets/images/cumplea\xf1os.svg","width","100%;",4,"ngSwitchCase"],["src","./assets/images/banco_horas.svg","width","100%;",4,"ngSwitchCase"],["src","./assets/images/horario_flexible.svg","width","100%;",4,"ngSwitchCase"],["src","./assets/images/mi_viernes.svg","width","100%;",4,"ngSwitchCase"],["src","./assets/images/tiempo_viajero.svg","width","100%;",4,"ngSwitchCase"],[1,"form-control"],[1,"card-header"],[1,"list-group","list-group-flush",3,"innerHTML"],["class","input-group-text","style","width: 25%;",4,"ngIf"],["src","./assets/images/cumplea\xf1os.svg","width","100%;"],["src","./assets/images/banco_horas.svg","width","100%;"],["src","./assets/images/horario_flexible.svg","width","100%;"],["src","./assets/images/mi_viernes.svg","width","100%;"],["src","./assets/images/tiempo_viajero.svg","width","100%;"],[1,"input-group-text",2,"width","25%"],[3,"totalBancoHoras"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"label",6),e._uU(7,"A\xf1o"),e.qZA(),e.TgZ(8,"select",7),e.NdJ("change",function(o){return n.getBenefitDetail(o)}),e.YNc(9,V,2,2,"option",8),e.qZA()()(),e.TgZ(10,"div",9)(11,"div",5)(12,"label",10),e._uU(13,"Colaborador"),e.qZA(),e.TgZ(14,"select",11),e.NdJ("change",function(o){return n.getBenefitDetail(o)}),e.TgZ(15,"option",12),e._uU(16),e.qZA(),e.YNc(17,H,2,2,"option",8),e.qZA()()()()()()(),e.YNc(18,k,1,0,"div",13),e._UZ(19,"hr"),e.TgZ(20,"div",3)(21,"h2"),e._uU(22,"Calendario de beneficios MiViernes - Mis colaboradores"),e.qZA()(),e.TgZ(23,"div",14),e._UZ(24,"calendar-component",15),e.qZA(),e.YNc(25,z,6,2,"ng-template",null,16,e.W1O)),2&t){const r=e.MAs(26);e.xp6(2),e.Q6J("formGroup",n.viewBenefitUser),e.xp6(7),e.Q6J("ngForOf",n.years),e.xp6(6),e.MGl("value"," ",null==n.user?null:n.user.id,""),e.xp6(1),e.hij(" ",null==n.user?null:n.user.name," "),e.xp6(1),e.Q6J("ngForOf",null==n.user?null:n.user.subordinates),e.xp6(1),e.Q6J("ngIf",n.viewBenefitUser.valid)("ngIfThen",r),e.xp6(6),e.Q6J("data",n.calendarData)}},dependencies:[c.sg,c.O5,c.RF,c.n9,s._Y,s.YN,s.Kr,s.EJ,s.JJ,s.JL,s.sg,s.u,Y,O],encapsulation:2}),i})(),P=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["benefitemployee-show"]],decls:2,vars:0,template:function(t,n){1&t&&(e.TgZ(0,"p"),e._uU(1,"show works!"),e.qZA())},encapsulation:2}),i})();var X=l(9906),ee=l(3900),te=l(8505),ne=l(9358),ie=l(6518);function ae(i,a){if(1&i&&(e.TgZ(0,"option",22),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.s9C("value",t.id),e.xp6(1),e.Oqu(t.name)}}function re(i,a){1&i&&(e.TgZ(0,"span",23),e._UZ(1,"i",24),e.qZA())}function oe(i,a){if(1&i&&(e.TgZ(0,"option",22),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.s9C("value",t.id),e.xp6(1),e.Oqu(t.name)}}function se(i,a){1&i&&(e.TgZ(0,"span",23),e._UZ(1,"i",24),e.qZA())}function le(i,a){if(1&i&&(e.TgZ(0,"option",22),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.s9C("value",t.id),e.xp6(1),e.hij(" ",t.name,"")}}function ce(i,a){1&i&&(e.TgZ(0,"span",23),e._UZ(1,"i",24),e.qZA())}const p=function(i){return{invalid:i}},C=i=>i<10?`0${i}`:`${i}`;let de=(()=>{class i extends u.Cw{fromModel(t){if(!t)return null;const n=t.split(":");return{hour:parseInt(n[0],10),minute:parseInt(n[1],10),second:parseInt(n[2],10)}}toModel(t){return null!=t?`${C(t.hour)}:${C(t.minute)}:${C(t.second)}`:null}}return i.\u0275fac=function(){let a;return function(n){return(a||(a=e.n5z(i)))(n||i)}}(),i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i})();const me=[{path:"",component:X.t,children:[{path:"index",component:W},{path:"show/:id",component:P},{path:"create",component:(()=>{class i{constructor(t,n,r,o,w,_,h){this.fb=t,this.authService=n,this.benefitService=r,this.benefitUserService=o,this.userService=w,this.router=_,this.changeDetectorRef=h,this.disableSubmitBtn=!1,this.createForm=this.fb.group({benefit_id:[{value:"",disabled:!0},s.kI.required],benefit_detail_id:[{value:"",disabled:!0},s.kI.required],time:["",s.kI.required],model:["",s.kI.required],benefit_begin_time:[""],benefit_end_time:[""],user_id:[{value:"",disabled:!0}]}),this.meridian=!0,this.userAndBenefitSpinner=!0,this.benefitDetailSpinner=!0}ngOnInit(){this.authService.validarAdmin().pipe((0,ee.w)(t=>t?this.userService.index():this.userService.show(Number.parseInt(localStorage.getItem("uid"))))).subscribe(t=>{this.users=Object.values(t),this.createForm.get("user_id")?.enable()}),this.benefitService.index().subscribe({next:t=>{this.benefits=t,this.createForm.get("benefit_id")?.enable(),this.userAndBenefitSpinner=!1},error:t=>{this.router.navigateByUrl("benefit-employee"),m().fire({title:"Error",icon:"error",html:t.error.msg,timer:3e3,timerProgressBar:!0,didOpen:n=>{n.addEventListener("mouseenter",m().stopTimer),n.addEventListener("mouseleave",m().resumeTimer)}})}}),this.createForm.get("benefit_detail_id").valueChanges.subscribe(t=>{this.selectedBenefitDetail=this.benefit_details?.find(n=>n.id===Number.parseInt(t||0))})}ngAfterViewChecked(){this.changeDetectorRef.detectChanges()}campoEsValido(t){return this.createForm.controls[t].errors&&this.createForm.controls[t].touched}save(){if(this.createForm.invalid)return void this.createForm.markAllAsTouched();let t=`${this.createForm.get("model")?.value.year}-${this.createForm.get("model")?.value.month}-${this.createForm.get("model")?.value.day} ${this.createForm.get("time")?.value}`;this.createForm.get("benefit_begin_time")?.setValue((0,c.p6)(new Date(t),"yyyy-MM-dd HH:mm:ss","en-US")),this.createForm.get("benefit_end_time")?.setValue((0,c.p6)((0,ne.Z)(new Date(t),this.selectedBenefitDetail.time_hours).toString(),"yyyy-MM-dd HH:mm:ss","en-US")),this.benefitUserService.create(this.createForm.value).subscribe({next:n=>{m().fire({title:"Creado",text:JSON.stringify(n),icon:"success",showClass:{popup:"animate__animated animate__fadeIn"},hideClass:{popup:"animate__animated animate__fadeOutUp"}})}})}fillBenefitDetail(t){this.createForm.get("benefit_detail_id").reset(""),this.benefitService.show(t.target.value).pipe((0,te.b)(n=>{this.createForm.get("benefit_id").valid&&(this.benefitDetailSpinner=!1)})).subscribe(n=>{this.benefit_details=Object.values(n)[0].benefit_detail,this.createForm.get("benefit_id").valid&&(this.benefitDetailSpinner=!0,this.createForm.get("benefit_detail_id").enable())})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(s.qu),e.Y36(ie.e),e.Y36(Z.T),e.Y36(y),e.Y36(D.K),e.Y36(f.F0),e.Y36(e.sBO))},i.\u0275cmp=e.Xpm({type:i,selectors:[["benefitemployee-create"]],decls:41,vars:25,consts:[[1,"row","mt-5","p-5"],[1,"col"],[1,"p-5",3,"formGroup","ngSubmit"],[1,"row","mb-3"],[1,"col-xl-9","px-2","d-flex","flex-column","justify-content-evenly"],["for","benefit"],[1,"input-group"],["formControlName","user_id","id","user_id","required","",1,"form-select",3,"ngClass"],["value",""],[3,"value",4,"ngFor","ngForOf"],["class","input-group-text","id","basic-addon1",4,"ngIf"],["formControlName","benefit_id","id","benefit_id","required","",1,"form-select",3,"ngClass","change"],["for","benefit_detail"],["formControlName","benefit_detail_id","id","benefit_detail_id","required","",1,"form-select",3,"ngClass"],[1,"col-xl-3","px-2","d-flex","flex-column"],["formControlName","model","required","",1,"m-2",3,"ngClass","navigate"],["dp",""],["formControlName","time","required","",1,"m-2","d-flex","justify-content-around",3,"ngClass","meridian"],["type","hidden","formControlName","benefit_begin_time",3,"value"],["type","hidden","formControlName","benefit_end_time"],[1,"mb-3"],["type","submit",1,"btn","btn-success","float-end",3,"disabled"],[3,"value"],["id","basic-addon1",1,"input-group-text"],[1,"fa-solid","fa-spinner","fa-spin","fa-xs"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"h1"),e._uU(2,"Registrar Nuevo Beneficio"),e.qZA(),e._UZ(3,"hr"),e.TgZ(4,"div",1)(5,"form",2),e.NdJ("ngSubmit",function(){return n.save()}),e.TgZ(6,"div",3)(7,"div",4)(8,"label",5),e._uU(9,"Selecciona un colaborador"),e.qZA(),e.TgZ(10,"div",6)(11,"select",7)(12,"option",8),e._uU(13,"-- Seleccione Colaborador --"),e.qZA(),e.YNc(14,ae,2,2,"option",9),e.qZA(),e.YNc(15,re,2,0,"span",10),e.qZA(),e.TgZ(16,"label",5),e._uU(17,"Selecciona un beneficio"),e.qZA(),e.TgZ(18,"div",6)(19,"select",11),e.NdJ("change",function(o){return n.fillBenefitDetail(o)}),e.TgZ(20,"option",8),e._uU(21,"-- Seleccione Beneficio --"),e.qZA(),e.YNc(22,oe,2,2,"option",9),e.qZA(),e.YNc(23,se,2,0,"span",10),e.qZA(),e.TgZ(24,"label",12),e._uU(25,"Selecciona un Detalle"),e.qZA(),e.TgZ(26,"div",6)(27,"select",13)(28,"option",8),e._uU(29,"-- Seleccione Detalle --"),e.qZA(),e.YNc(30,le,2,2,"option",9),e.qZA(),e.YNc(31,ce,2,0,"span",10),e.qZA()(),e.TgZ(32,"div",14)(33,"ngb-datepicker",15,16),e.NdJ("navigate",function(o){return n.date=o.next}),e.qZA(),e._UZ(35,"ngb-timepicker",17),e.qZA()(),e._UZ(36,"input",18)(37,"input",19),e.TgZ(38,"div",20)(39,"button",21),e._uU(40," Crear "),e.qZA()()()()()),2&t&&(e.xp6(5),e.Q6J("formGroup",n.createForm),e.xp6(6),e.Q6J("ngClass",e.VKq(15,p,n.campoEsValido("user_id"))),e.xp6(3),e.Q6J("ngForOf",n.users),e.xp6(1),e.Q6J("ngIf",n.userAndBenefitSpinner),e.xp6(4),e.Q6J("ngClass",e.VKq(17,p,n.campoEsValido("benefit_id"))),e.xp6(3),e.Q6J("ngForOf",n.benefits),e.xp6(1),e.Q6J("ngIf",n.userAndBenefitSpinner),e.xp6(4),e.Q6J("ngClass",e.VKq(19,p,n.campoEsValido("benefit_detail_id"))),e.xp6(3),e.Q6J("ngForOf",n.benefit_details),e.xp6(1),e.Q6J("ngIf",!n.benefitDetailSpinner),e.xp6(2),e.Q6J("ngClass",e.VKq(21,p,n.campoEsValido("model"))),e.xp6(2),e.Q6J("ngClass",e.VKq(23,p,n.campoEsValido("time")))("meridian",n.meridian),e.xp6(1),e.s9C("value",n.benefit_begin_time),e.xp6(3),e.Q6J("disabled",n.disableSubmitBtn))},dependencies:[c.mk,c.sg,c.O5,u.VL,u.Pm,s._Y,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.JL,s.Q7,s.sg,s.u],encapsulation:2}),i})()},{path:"**",redirectTo:"index"}]}];let pe=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[f.Bz.forChild(me),f.Bz]}),i})(),he=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[T,{provide:u.Cw,useClass:de}],imports:[pe,d._8.forRoot({provide:d._A,useFactory:x.x}),c.ez,u.M,u.UL,v.vQ,s.UX,s.u5]}),i})()}}]);