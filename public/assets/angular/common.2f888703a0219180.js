"use strict";(self.webpackChunksalarioemocionalfrontend=self.webpackChunksalarioemocionalfrontend||[]).push([[592],{1913:(u,h,a)=>{a.d(h,{a:()=>l});var r=a(9862),c=a(553),o=a(6689);let l=(()=>{class n{constructor(t){this.http=t,this.apiBaseUrl=c.N.apiBaseUrl,this.token=localStorage.getItem("token")}index(){const t=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/benefitdetail`,{headers:t,withCredentials:!0})}show(t){const e=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/benefitdetail/${t}`,{headers:e,withCredentials:!0})}create(t){const e=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.post(`${this.apiBaseUrl}/benefitdetail`,t,{headers:e,withCredentials:!0})}update(t,e){const s=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.put(`${this.apiBaseUrl}/benefitdetail/${t}`,e,{headers:s,withCredentials:!0})}destroy(t){const e=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.delete(`${this.apiBaseUrl}/benefitdetail/${t}`,{headers:e,withCredentials:!0})}static#t=this.\u0275fac=function(e){return new(e||n)(o.LFG(r.eN))};static#e=this.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},2278:(u,h,a)=>{a.d(h,{T:()=>l});var r=a(9862),c=a(553),o=a(6689);let l=(()=>{class n{constructor(t){this.http=t,this.apiBaseUrl=c.N.apiBaseUrl,this.baseUrl=c.N.baseUrl,this.token=localStorage.getItem("token")}index(){const t=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.baseUrl}/sanctum/csrf-cookie`).subscribe(),this.http.get(`${this.apiBaseUrl}/benefit`,{headers:t,withCredentials:!0})}show(t){const e=(new r.WM).set("Accept","application/json").set("Content-type","multipart/form-data").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/benefit/${t}`,{headers:e,withCredentials:!0})}create(t){const e=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.post(`${this.apiBaseUrl}/benefit`,t,{headers:e,withCredentials:!0})}update(t,e){const s=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.post(`${this.apiBaseUrl}/benefit/${t}`,e,{headers:s,withCredentials:!0})}destroy(t){const e=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.delete(`${this.apiBaseUrl}/benefit/${t}`,{headers:e,withCredentials:!0})}indexAvailable(){const t=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.baseUrl}/sanctum/csrf-cookie`).subscribe(),this.http.get(`${this.apiBaseUrl}/benefit/available`,{headers:t,withCredentials:!0})}static#t=this.\u0275fac=function(e){return new(e||n)(o.LFG(r.eN))};static#e=this.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},8162:(u,h,a)=>{a.d(h,{u:()=>l});var r=a(9862),c=a(553),o=a(6689);let l=(()=>{class n{constructor(t){this.http=t,this.apiBaseUrl=c.N.apiBaseUrl,this.token=localStorage.getItem("token")}index(){const t=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/dependency`,{headers:t,withCredentials:!0})}show(t){const e=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/dependency/${t}`,{headers:e,withCredentials:!0})}create(t){const e=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.post(`${this.apiBaseUrl}/dependency`,t,{headers:e,withCredentials:!0})}update(t,e){const s=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.put(`${this.apiBaseUrl}/dependency/${t}`,e,{headers:s,withCredentials:!0})}destroy(t){const e=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.delete(`${this.apiBaseUrl}/dependency/${t}`,{headers:e,withCredentials:!0})}buildDependencyTreeNode(t){const{path:e,name:s,children:p}=t;return{key:e,label:s,children:p.map(g=>this.buildDependencyTreeNode(g)),expanded:!0}}flattenDependency(t){let e=[t];if(t.children&&t.children.length>0)for(const s of t.children)e=e.concat(this.flattenDependency(s));return e}dependencyAncestors(){const t=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/dependency/dependencyAncestors`,{headers:t,withCredentials:!0})}makeNode(t){const{path:e,name:s,children:p}=t,d=p?p.map(g=>this.makeNode(g)):[];return{key:e.replace(".","-"),label:s,children:d,expanded:!0}}static#t=this.\u0275fac=function(e){return new(e||n)(o.LFG(r.eN))};static#e=this.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},4642:(u,h,a)=>{a.d(h,{e:()=>l});var r=a(9862),c=a(553),o=a(6689);let l=(()=>{class n{constructor(t){this.http=t,this.apiBaseUrl=c.N.apiBaseUrl,this.token=localStorage.getItem("token")}index(){const t=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/position`,{headers:t,withCredentials:!0})}show(t){const e=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/position/${t}`,{headers:e,withCredentials:!0})}create(t){const e=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.post(`${this.apiBaseUrl}/position`,t,{headers:e,withCredentials:!0})}update(t,e){const s=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.put(`${this.apiBaseUrl}/position/${t}`,e,{headers:s,withCredentials:!0})}destroy(t){const e=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.delete(`${this.apiBaseUrl}/position/${t}`,{headers:e,withCredentials:!0})}static#t=this.\u0275fac=function(e){return new(e||n)(o.LFG(r.eN))};static#e=this.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},8047:(u,h,a)=>{a.d(h,{N:()=>l});var r=a(9862),c=a(553),o=a(6689);let l=(()=>{class n{constructor(t){this.http=t,this.apiBaseUrl=c.N.apiBaseUrl,this.token=localStorage.getItem("token")}index(){const t=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/role`,{headers:t,withCredentials:!0})}show(t){const e=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.get(`${this.apiBaseUrl}/role/${t}`,{headers:e,withCredentials:!0})}create(t){const e=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.post(`${this.apiBaseUrl}/role`,t,{headers:e,withCredentials:!0})}update(t,e){const s=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.put(`${this.apiBaseUrl}/role/${t}`,e,{headers:s,withCredentials:!0})}destroy(t){const e=(new r.WM).set("Accept","application/json").set("Authorization",`Bearer ${localStorage.getItem("token")}`);return this.http.delete(`${this.apiBaseUrl}/role/${t}`,{headers:e,withCredentials:!0})}static#t=this.\u0275fac=function(e){return new(e||n)(o.LFG(r.eN))};static#e=this.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},3416:(u,h,a)=>{a.d(h,{z:()=>n});var r=a(6689),c=a(180),o=a(6814);let l=(()=>{class i{constructor(e,s){this.router=e,this.location=s,this.history=[],this.router.events.subscribe(p=>{p instanceof c.m2&&this.history.push(p.urlAfterRedirects)})}back(){this.history.pop(),this.history.length>0?this.location.back():this.router.navigateByUrl("/")}static#t=this.\u0275fac=function(s){return new(s||i)(r.LFG(c.F0),r.LFG(o.Ye))};static#e=this.\u0275prov=r.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),n=(()=>{class i{constructor(e){this.navigation=e}onClick(){this.navigation.back()}static#t=this.\u0275fac=function(s){return new(s||i)(r.Y36(l))};static#e=this.\u0275dir=r.lG2({type:i,selectors:[["","backButton",""]],hostBindings:function(s,p){1&s&&r.NdJ("click",function(){return p.onClick()})}})}return i})()},7645:(u,h,a)=>{a.d(h,{o:()=>o});var r=a(2096),c=a(6689);let o=(()=>{class l{constructor(){}checkboxRequired(){return i=>(0,r.of)(i.value?null:{required:!0})}minIfFilled(i){return t=>(t.value||0===t.value)&&t&&t.value<i?{minIfFilled:`El valor debe ser mayor o igual que ${i}`}:null}camposIguales(i,t){return e=>{const s=e.get(i)?.value,p=e.get(t)?.value;return s!==p?(e.get(t)?.setErrors({noIguales:!0}),{noIguales:!0}):(e.get(t)?.setErrors(null),null)}}static#t=this.\u0275fac=function(t){return new(t||l)};static#e=this.\u0275prov=c.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},6208:(u,h,a)=>{a.d(h,{m:()=>c});var r=a(6689);let c=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=r.oAB({type:o});static#r=this.\u0275inj=r.cJS({})}return o})()}}]);