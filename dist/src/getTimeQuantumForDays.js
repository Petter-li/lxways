!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ways=t():e.ways=t()}(self,(()=>(()=>{"use strict";var e={141:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(817)),a=function(e){if(1===e.length||0===e.length)return e;for(var t=e[0],r=[],n=[],o=1;o<e.length;o++)e[o]<=t&&r.push(e[o]),e[o]>t&&n.push(e[o]);return a(r).concat([t],a(n))};t.default=function(e){var t=e.map((function(e){return(0,o.default)(e.startDate,e.endDate)})),r=[];if(t.forEach((function(e){return r.push.apply(r,e)})),0===r.length)return[];var n=Array.from(new Set(r)).map((function(e){return new Date(e).getTime()})),u=a(n),f=[];1===u.length?f.push.apply(f,[u[0],u[0]]):u.forEach((function(e,t){0===t?f.push(e):(e-u[t-1]>864e5&&(f.push(u[t-1]),f.push(e)),t===u.length-1&&f.push(e))}));var i=[];if(f.length>0){var l=0,p=0;for(i=new Array(Math.ceil(f.length/2));l<f.length;)i[p++]=f.slice(l,l+=2)}return i}},817:function(e,t){var r=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){for(var n=[],o=new Date(e);o<new Date(t);)n=r(r([],n,!0),[new Date(o).getTime()],!1),o.setDate(o.getDate()+1);return r(r([],n,!0),[new Date(o).getTime()],!1)}}},t={};return function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}(141)})()));