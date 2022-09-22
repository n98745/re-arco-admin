import{d as ce,l as fe,m as pe,o as X,e as de,q as _e,n as ve,s as me,r as h,g as ge,v as we,x as ye,y as Y,z as Oe,A as Z,C as he,D as C,E as N,F as be,_ as Se,G as Pe,w as Ee,i as Fe}from"./index.c7a3d020.js";const $e=ce({name:"LayoutFooter",setup(){return{classNames:[fe("layout-footer")]}}});function xe(e,r,t,n,a,s){return X(),de("footer",{class:ve(e.classNames)},[_e(e.$slots,"default")],2)}var Ce=pe($e,[["render",xe]]);const St=""+new URL("logo.da9b9095.svg",import.meta.url).href;var M;const D=typeof window<"u",Ie=e=>typeof e=="function",je=e=>typeof e=="string",j=()=>{};D&&((M=window==null?void 0:window.navigator)==null?void 0:M.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function P(e){return typeof e=="function"?e():ge(e)}function ee(e,r){function t(...n){e(()=>r.apply(this,n),{fn:r,thisArg:this,args:n})}return t}const te=e=>e();function Ne(e,r={}){let t,n;return s=>{const u=P(e),o=P(r.maxWait);if(t&&clearTimeout(t),u<=0||o!==void 0&&o<=0)return n&&(clearTimeout(n),n=null),s();o&&!n&&(n=setTimeout(()=>{t&&clearTimeout(t),n=null,s()},o)),t=setTimeout(()=>{n&&clearTimeout(n),n=null,s()},u)}}function Te(e=te){const r=h(!0);function t(){r.value=!1}function n(){r.value=!0}return{isActive:r,pause:t,resume:n,eventFilter:(...s)=>{r.value&&e(...s)}}}function ke(e){return e}function L(e){return we()?(ye(e),!0):!1}function Pt(e,r=200,t={}){return ee(Ne(r,t),e)}function De(e,r=!0){Y()?he(e):r?e():Z(e)}function re(e,r=!0){Y()?Oe(e):r?e():Z(e)}function Et(e=!1,r={}){const{truthyValue:t=!0,falsyValue:n=!1}=r,a=me(e),s=h(e);function u(o){if(arguments.length)return s.value=o,s.value;{const i=P(t);return s.value=s.value===i?P(n):i,s.value}}return a?u:[s,u]}var A=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,Ae=(e,r)=>{var t={};for(var n in e)Le.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&A)for(var n of A(e))r.indexOf(n)<0&&Me.call(e,n)&&(t[n]=e[n]);return t};function Re(e,r,t={}){const n=t,{eventFilter:a=te}=n,s=Ae(n,["eventFilter"]);return C(e,ee(a,r),s)}var ze=Object.defineProperty,Qe=Object.defineProperties,Ve=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,R=(e,r,t)=>r in e?ze(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Be=(e,r)=>{for(var t in r||(r={}))ne.call(r,t)&&R(e,t,r[t]);if(I)for(var t of I(r))ae.call(r,t)&&R(e,t,r[t]);return e},We=(e,r)=>Qe(e,Ve(r)),qe=(e,r)=>{var t={};for(var n in e)ne.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&I)for(var n of I(e))r.indexOf(n)<0&&ae.call(e,n)&&(t[n]=e[n]);return t};function Je(e,r,t={}){const n=t,{eventFilter:a}=n,s=qe(n,["eventFilter"]),{eventFilter:u,pause:o,resume:i,isActive:f}=Te(a);return{stop:Re(e,r,We(Be({},s),{eventFilter:u})),pause:o,resume:i,isActive:f}}function se(e){var r;const t=P(e);return(r=t==null?void 0:t.$el)!=null?r:t}const E=D?window:void 0,He=D?window.document:void 0;function oe(...e){let r,t,n,a;if(je(e[0])?([t,n,a]=e,r=E):[r,t,n,a]=e,!r)return j;let s=j;const u=C(()=>se(r),i=>{s(),i&&(i.addEventListener(t,n,a),s=()=>{i.removeEventListener(t,n,a),s=j})},{immediate:!0,flush:"post"}),o=()=>{u(),s()};return L(o),o}function le(e,r=!1){const t=h(),n=()=>t.value=Boolean(e());return n(),re(n,r),t}function Ue(e,r={}){const{window:t=E}=r,n=le(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let a;const s=h(!1),u=()=>{!n.value||(a||(a=t.matchMedia(e)),s.value=a.matches)};return De(()=>{u(),a&&("addEventListener"in a?a.addEventListener("change",u):a.addListener(u),L(()=>{"removeEventListener"in a?a.removeEventListener("change",u):a.removeListener(u)}))}),s}const T=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k="__vueuse_ssr_handlers__";T[k]=T[k]||{};const Ge=T[k];function ue(e,r){return Ge[e]||r}function Ke(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var Xe=Object.defineProperty,z=Object.getOwnPropertySymbols,Ye=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,Q=(e,r,t)=>r in e?Xe(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,V=(e,r)=>{for(var t in r||(r={}))Ye.call(r,t)&&Q(e,t,r[t]);if(z)for(var t of z(r))Ze.call(r,t)&&Q(e,t,r[t]);return e};const et={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function tt(e,r,t,n={}){var a;const{flush:s="pre",deep:u=!0,listenToStorageChanges:o=!0,writeDefaults:i=!0,mergeDefaults:f=!1,shallow:g,window:b=E,eventFilter:_,onError:v=l=>{console.error(l)}}=n,p=(g?be:h)(r);if(!t)try{t=ue("getDefaultStorage",()=>{var l;return(l=E)==null?void 0:l.localStorage})()}catch(l){v(l)}if(!t)return p;const c=P(r),F=Ke(c),w=(a=n.serializer)!=null?a:et[F],{pause:d,resume:y}=Je(p,()=>O(p.value),{flush:s,deep:u,eventFilter:_});return b&&o&&oe(b,"storage",$),$(),p;function O(l){try{l==null?t.removeItem(e):t.setItem(e,w.write(l))}catch(m){v(m)}}function S(l){if(!(l&&l.key!==e)){d();try{const m=l?l.newValue:t.getItem(e);if(m==null)return i&&c!==null&&t.setItem(e,w.write(c)),c;if(!l&&f){const x=w.read(m);return Ie(f)?f(x,c):F==="object"&&!Array.isArray(x)?V(V({},c),x):x}else return typeof m!="string"?m:w.read(m)}catch(m){v(m)}finally{y()}}}function $(l){l&&l.key!==e||(p.value=S(l))}}function ie(e){return Ue("(prefers-color-scheme: dark)",e)}var rt=Object.defineProperty,B=Object.getOwnPropertySymbols,nt=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable,W=(e,r,t)=>r in e?rt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,st=(e,r)=>{for(var t in r||(r={}))nt.call(r,t)&&W(e,t,r[t]);if(B)for(var t of B(r))at.call(r,t)&&W(e,t,r[t]);return e};function ot(e={}){const{selector:r="html",attribute:t="class",initialValue:n="auto",window:a=E,storage:s,storageKey:u="vueuse-color-scheme",listenToStorageChanges:o=!0,storageRef:i,emitAuto:f}=e,g=st({auto:"",light:"light",dark:"dark"},e.modes||{}),b=ie({window:a}),_=N(()=>b.value?"dark":"light"),v=i||(u==null?h(n):tt(u,n,s,{window:a,listenToStorageChanges:o})),p=N({get(){return v.value==="auto"&&!f?_.value:v.value},set(d){v.value=d}}),c=ue("updateHTMLAttrs",(d,y,O)=>{const S=a==null?void 0:a.document.querySelector(d);if(!!S)if(y==="class"){const $=O.split(/\s/g);Object.values(g).flatMap(l=>(l||"").split(/\s/g)).filter(Boolean).forEach(l=>{$.includes(l)?S.classList.add(l):S.classList.remove(l)})}else S.setAttribute(y,O)});function F(d){var y;const O=d==="auto"?_.value:d;c(r,t,(y=g[O])!=null?y:O)}function w(d){e.onChanged?e.onChanged(d,F):F(d)}return C(p,w,{flush:"post",immediate:!0}),f&&C(_,()=>w(p.value),{flush:"post"}),re(()=>w(p.value)),p}var lt=Object.defineProperty,ut=Object.defineProperties,it=Object.getOwnPropertyDescriptors,q=Object.getOwnPropertySymbols,ct=Object.prototype.hasOwnProperty,ft=Object.prototype.propertyIsEnumerable,J=(e,r,t)=>r in e?lt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,pt=(e,r)=>{for(var t in r||(r={}))ct.call(r,t)&&J(e,t,r[t]);if(q)for(var t of q(r))ft.call(r,t)&&J(e,t,r[t]);return e},dt=(e,r)=>ut(e,it(r));function Ft(e={}){const{valueDark:r="dark",valueLight:t="",window:n=E}=e,a=ot(dt(pt({},e),{onChanged:(o,i)=>{var f;e.onChanged?(f=e.onChanged)==null||f.call(e,o==="dark"):i(o)},modes:{dark:r,light:t}})),s=ie({window:n});return N({get(){return a.value==="dark"},set(o){o===s.value?a.value="auto":a.value=o?"dark":"light"}})}const H=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function $t(e,r={}){const{document:t=He,autoExit:n=!1}=r,a=e||(t==null?void 0:t.querySelector("html")),s=h(!1);let u=H[0];const o=le(()=>{if(t){for(const c of H)if(c[1]in t)return u=c,!0}else return!1;return!1}),[i,f,g,,b]=u;async function _(){!o.value||(t!=null&&t[g]&&await t[f](),s.value=!1)}async function v(){if(!o.value)return;await _();const c=se(a);c&&(await c[i](),s.value=!0)}async function p(){s.value?await _():await v()}return t&&oe(t,b,()=>{s.value=!!(t!=null&&t[g])},!1),n&&L(_),{isSupported:o,isFullscreen:s,enter:v,exit:_,toggle:p}}var U;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(U||(U={}));var _t=Object.defineProperty,G=Object.getOwnPropertySymbols,vt=Object.prototype.hasOwnProperty,mt=Object.prototype.propertyIsEnumerable,K=(e,r,t)=>r in e?_t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,gt=(e,r)=>{for(var t in r||(r={}))vt.call(r,t)&&K(e,t,r[t]);if(G)for(var t of G(r))mt.call(r,t)&&K(e,t,r[t]);return e};const wt={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};gt({linear:ke},wt);const yt={},Ot=Fe("Copyright \xA9 2022 xxxx xxx");function ht(e,r){const t=Ce;return X(),Pe(t,{class:"footer"},{default:Ee(()=>[Ot]),_:1})}const xt=Se(yt,[["render",ht],["__scopeId","data-v-8f797162"]]);export{xt as F,Ce as L,St as _,$t as a,Ft as b,Et as c,Pt as d,tt as u};
