!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.ways=r():e.ways=r()}(self,(()=>(()=>{"use strict";var e={135:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){var t={};return e.reduce((function(e,n){return t[n[r]]||(t[n[r]]=!0,e.push(n)),e}),[])}},65:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){return JSON.stringify(e)===JSON.stringify(r)}},488:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){return Object.fromEntries(e.map((function(e){return[e[r],e]})))}},498:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){var t={};return e.reduce((function(e,n){return t[n[r]]?e.push(n):t[n[r]]=!0,e}),[])}},869:function(e,r){var t=this&&this.__spreadArray||function(e,r,t){if(t||2===arguments.length)for(var n,u=0,a=r.length;u<a;u++)!n&&u in r||(n||(n=Array.prototype.slice.call(r,0,u)),n[u]=r[u]);return e.concat(n||Array.prototype.slice.call(r))};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r,n){var u=function(e,r,n){var u=e.length,a=e[0].length,o=u%r,f=JSON.parse(JSON.stringify(new Array(a).fill(0)));0!==o&&(e=t(t([],e,!0),JSON.parse(JSON.stringify(new Array(Math.abs(r-o)).fill(f))),!0));var i=a%n;return 0!==i&&(e=e.map((function(e){return e.push.apply(e,new Array(Math.abs(n-i)).fill(0)),e}))),e}(JSON.parse(JSON.stringify(e)),r,n),a=function(e,r,t,n){var u=JSON.parse(JSON.stringify(e));return r.forEach((function(e,r){e.forEach((function(e,a){u[Math.floor(r/t)][Math.floor(a/n)]+=e,(r+1)%t==0&&(a+1)%n==0&&(u[Math.floor(r/t)][Math.floor(a/n)]=Number((u[Math.floor(r/t)][Math.floor(a/n)]/(t*n)).toFixed(1)))}))})),u}(new Array(u.length/r).fill(new Array(u[0].length/n).fill(0)),u,r,n);return a}},528:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return new Promise((function(r,t){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return r(n.result)},n.onerror=function(e){return t(e)}}))}},141:function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var u=n(t(817)),a=function(e){if(1===e.length||0===e.length)return e;for(var r=e[0],t=[],n=[],u=1;u<e.length;u++)e[u]<=r&&t.push(e[u]),e[u]>r&&n.push(e[u]);return a(t).concat([r],a(n))};r.default=function(e){var r=e.map((function(e){return(0,u.default)(e.startDate,e.endDate)})),t=[];if(r.forEach((function(e){return t.push.apply(t,e)})),0===t.length)return[];var n=Array.from(new Set(t)).map((function(e){return new Date(e).getTime()})),o=a(n),f=[];1===o.length?f.push.apply(f,[o[0],o[0]]):o.forEach((function(e,r){0===r?f.push(e):(e-o[r-1]>864e5&&(f.push(o[r-1]),f.push(e)),r===o.length-1&&f.push(e))}));var i=[];if(f.length>0){var l=0,c=0;for(i=new Array(Math.ceil(f.length/2));l<f.length;)i[c++]=f.slice(l,l+=2)}return i}},891:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return Array.from(new URLSearchParams(e)).reduce((function(e,r){var t,n=r[0],u=r[1];return Object.assign({},e,((t={})[n]=e[n]?(Array.isArray(e[n])?e[n]:[e[n]]).concat(u):u,t))}),{})}},465:function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.getTimeQuantumForDays=r.makeDateBetweenArr=r.getArrFromMatrix=r.getUrlParams=r.removeNullUndefined=r.arrToObjectByKey=r.arrIsEqual=r.translateCookieToObject=r.getImgBase64=r.arrDuplicateRemoveByKey=r.findManyItemInArr=r.isRepeatArr=r.isArr=void 0;var u=t(178);Object.defineProperty(r,"isArr",{enumerable:!0,get:function(){return n(u).default}});var a=t(76);Object.defineProperty(r,"isRepeatArr",{enumerable:!0,get:function(){return n(a).default}});var o=t(498);Object.defineProperty(r,"findManyItemInArr",{enumerable:!0,get:function(){return n(o).default}});var f=t(135);Object.defineProperty(r,"arrDuplicateRemoveByKey",{enumerable:!0,get:function(){return n(f).default}});var i=t(528);Object.defineProperty(r,"getImgBase64",{enumerable:!0,get:function(){return n(i).default}});var l=t(602);Object.defineProperty(r,"translateCookieToObject",{enumerable:!0,get:function(){return n(l).default}});var c=t(65);Object.defineProperty(r,"arrIsEqual",{enumerable:!0,get:function(){return n(c).default}});var d=t(488);Object.defineProperty(r,"arrToObjectByKey",{enumerable:!0,get:function(){return n(d).default}});var s=t(152);Object.defineProperty(r,"removeNullUndefined",{enumerable:!0,get:function(){return n(s).default}});var p=t(891);Object.defineProperty(r,"getUrlParams",{enumerable:!0,get:function(){return n(p).default}});var y=t(869);Object.defineProperty(r,"getArrFromMatrix",{enumerable:!0,get:function(){return n(y).default}});var v=t(817);Object.defineProperty(r,"makeDateBetweenArr",{enumerable:!0,get:function(){return n(v).default}});var b=t(141);Object.defineProperty(r,"getTimeQuantumForDays",{enumerable:!0,get:function(){return n(b).default}})},178:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return"[object Array]"===Object.prototype.toString.call(e)}},76:function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var u=n(t(178));r.default=function(e){return(0,u.default)(e)?Array.from(new Set(e)).length!=e.length:(console.error("参数不为数组"),!1)}},817:function(e,r){var t=this&&this.__spreadArray||function(e,r,t){if(t||2===arguments.length)for(var n,u=0,a=r.length;u<a;u++)!n&&u in r||(n||(n=Array.prototype.slice.call(r,0,u)),n[u]=r[u]);return e.concat(n||Array.prototype.slice.call(r))};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){for(var n=[],u=new Date(e);u<new Date(r);)n=t(t([],n,!0),[new Date(u).getTime()],!1),u.setDate(u.getDate()+1);return t(t([],n,!0),[new Date(u).getTime()],!1)}},152:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return Object.entries(e).reduce((function(e,r){var t=r[0],n=r[1];return null==n||(e[t]=n),e}),{})}},602:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(){return document.cookie.split(";").map((function(e){return e.split("=")})).reduce((function(e,r){var t=r[0],n=r[1];return(e[t.trim().replace('"',"")]=n)&&e}),{})}}},r={};return function t(n){var u=r[n];if(void 0!==u)return u.exports;var a=r[n]={exports:{}};return e[n].call(a.exports,a,a.exports,t),a.exports}(465)})()));