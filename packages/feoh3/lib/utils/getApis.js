"use strict";var b=Object.create;var s=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var w=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var y=(r,a)=>{for(var e in a)s(r,e,{get:a[e],enumerable:!0})},n=(r,a,e,i)=>{if(a&&typeof a=="object"||typeof a=="function")for(let t of l(a))!x.call(r,t)&&t!==e&&s(r,t,{get:()=>a[t],enumerable:!(i=k(a,t))||i.enumerable});return r};var g=(r,a,e)=>(e=r!=null?b(w(r)):{},n(a||!r||!r.__esModule?s(e,"default",{value:r,enumerable:!0}):e,r)),h=r=>n(s({},"__esModule",{value:!0}),r);var o=(r,a,e)=>new Promise((i,t)=>{var m=d=>{try{c(e.next(d))}catch(f){t(f)}},u=d=>{try{c(e.throw(d))}catch(f){t(f)}},c=d=>d.done?i(d.value):Promise.resolve(d.value).then(m,u);c((e=e.apply(r,a)).next())});var q={};y(q,{default:()=>j});module.exports=h(q);var p=g(require("fs/promises")),j=()=>o(void 0,null,function*(){return yield p.default.readdir("./src/backend/apis")});
//# sourceMappingURL=getApis.js.map