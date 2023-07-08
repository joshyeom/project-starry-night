function qT(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Xy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qy={exports:{}},sd={},Yy={exports:{}},Je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bl=Symbol.for("react.element"),YT=Symbol.for("react.portal"),KT=Symbol.for("react.fragment"),ZT=Symbol.for("react.strict_mode"),JT=Symbol.for("react.profiler"),QT=Symbol.for("react.provider"),e1=Symbol.for("react.context"),t1=Symbol.for("react.forward_ref"),n1=Symbol.for("react.suspense"),i1=Symbol.for("react.memo"),r1=Symbol.for("react.lazy"),tv=Symbol.iterator;function s1(t){return t===null||typeof t!="object"?null:(t=tv&&t[tv]||t["@@iterator"],typeof t=="function"?t:null)}var Ky={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zy=Object.assign,Jy={};function Zo(t,e,n){this.props=t,this.context=e,this.refs=Jy,this.updater=n||Ky}Zo.prototype.isReactComponent={};Zo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qy(){}Qy.prototype=Zo.prototype;function um(t,e,n){this.props=t,this.context=e,this.refs=Jy,this.updater=n||Ky}var dm=um.prototype=new Qy;dm.constructor=um;Zy(dm,Zo.prototype);dm.isPureReactComponent=!0;var nv=Array.isArray,eS=Object.prototype.hasOwnProperty,fm={current:null},tS={key:!0,ref:!0,__self:!0,__source:!0};function nS(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)eS.call(e,i)&&!tS.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:bl,type:t,key:s,ref:o,props:r,_owner:fm.current}}function o1(t,e){return{$$typeof:bl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hm(t){return typeof t=="object"&&t!==null&&t.$$typeof===bl}function a1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var iv=/\/+/g;function cf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?a1(""+t.key):e.toString(36)}function Yc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case bl:case YT:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+cf(o,0):i,nv(r)?(n="",t!=null&&(n=t.replace(iv,"$&/")+"/"),Yc(r,e,n,"",function(c){return c})):r!=null&&(hm(r)&&(r=o1(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(iv,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",nv(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+cf(s,a);o+=Yc(s,e,n,l,r)}else if(l=s1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+cf(s,a++),o+=Yc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ec(t,e,n){if(t==null)return t;var i=[],r=0;return Yc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function l1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var fn={current:null},Kc={transition:null},c1={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:Kc,ReactCurrentOwner:fm};Je.Children={map:ec,forEach:function(t,e,n){ec(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ec(t,function(){e++}),e},toArray:function(t){return ec(t,function(e){return e})||[]},only:function(t){if(!hm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Je.Component=Zo;Je.Fragment=KT;Je.Profiler=JT;Je.PureComponent=um;Je.StrictMode=ZT;Je.Suspense=n1;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c1;Je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Zy({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=fm.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)eS.call(e,l)&&!tS.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:bl,type:t.type,key:r,ref:s,props:i,_owner:o}};Je.createContext=function(t){return t={$$typeof:e1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:QT,_context:t},t.Consumer=t};Je.createElement=nS;Je.createFactory=function(t){var e=nS.bind(null,t);return e.type=t,e};Je.createRef=function(){return{current:null}};Je.forwardRef=function(t){return{$$typeof:t1,render:t}};Je.isValidElement=hm;Je.lazy=function(t){return{$$typeof:r1,_payload:{_status:-1,_result:t},_init:l1}};Je.memo=function(t,e){return{$$typeof:i1,type:t,compare:e===void 0?null:e}};Je.startTransition=function(t){var e=Kc.transition;Kc.transition={};try{t()}finally{Kc.transition=e}};Je.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Je.useCallback=function(t,e){return fn.current.useCallback(t,e)};Je.useContext=function(t){return fn.current.useContext(t)};Je.useDebugValue=function(){};Je.useDeferredValue=function(t){return fn.current.useDeferredValue(t)};Je.useEffect=function(t,e){return fn.current.useEffect(t,e)};Je.useId=function(){return fn.current.useId()};Je.useImperativeHandle=function(t,e,n){return fn.current.useImperativeHandle(t,e,n)};Je.useInsertionEffect=function(t,e){return fn.current.useInsertionEffect(t,e)};Je.useLayoutEffect=function(t,e){return fn.current.useLayoutEffect(t,e)};Je.useMemo=function(t,e){return fn.current.useMemo(t,e)};Je.useReducer=function(t,e,n){return fn.current.useReducer(t,e,n)};Je.useRef=function(t){return fn.current.useRef(t)};Je.useState=function(t){return fn.current.useState(t)};Je.useSyncExternalStore=function(t,e,n){return fn.current.useSyncExternalStore(t,e,n)};Je.useTransition=function(){return fn.current.useTransition()};Je.version="18.2.0";Yy.exports=Je;var ve=Yy.exports;const mt=Xy(ve),u1=qT({__proto__:null,default:mt},[ve]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d1=ve,f1=Symbol.for("react.element"),h1=Symbol.for("react.fragment"),p1=Object.prototype.hasOwnProperty,m1=d1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g1={key:!0,ref:!0,__self:!0,__source:!0};function iS(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)p1.call(e,i)&&!g1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:f1,type:t,key:s,ref:o,props:r,_owner:m1.current}}sd.Fragment=h1;sd.jsx=iS;sd.jsxs=iS;qy.exports=sd;var j=qy.exports,rS={exports:{}},Ln={},sS={exports:{}},oS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,q){var W=B.length;B.push(q);e:for(;0<W;){var ce=W-1>>>1,M=B[ce];if(0<r(M,q))B[ce]=q,B[W]=M,W=ce;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var q=B[0],W=B.pop();if(W!==q){B[0]=W;e:for(var ce=0,M=B.length,U=M>>>1;ce<U;){var O=2*(ce+1)-1,Y=B[O],X=O+1,pe=B[X];if(0>r(Y,W))X<M&&0>r(pe,Y)?(B[ce]=pe,B[X]=W,ce=X):(B[ce]=Y,B[O]=W,ce=O);else if(X<M&&0>r(pe,W))B[ce]=pe,B[X]=W,ce=X;else break e}}return q}function r(B,q){var W=B.sortIndex-q.sortIndex;return W!==0?W:B.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,g=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(B){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=B)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function S(B){if(v=!1,y(B),!g)if(n(l)!==null)g=!0,ue(E);else{var q=n(c);q!==null&&Q(S,q.startTime-B)}}function E(B,q){g=!1,v&&(v=!1,f(I),I=-1),p=!0;var W=h;try{for(y(q),d=n(l);d!==null&&(!(d.expirationTime>q)||B&&!te());){var ce=d.callback;if(typeof ce=="function"){d.callback=null,h=d.priorityLevel;var M=ce(d.expirationTime<=q);q=t.unstable_now(),typeof M=="function"?d.callback=M:d===n(l)&&i(l),y(q)}else i(l);d=n(l)}if(d!==null)var U=!0;else{var O=n(c);O!==null&&Q(S,O.startTime-q),U=!1}return U}finally{d=null,h=W,p=!1}}var w=!1,b=null,I=-1,x=5,R=-1;function te(){return!(t.unstable_now()-R<x)}function ae(){if(b!==null){var B=t.unstable_now();R=B;var q=!0;try{q=b(!0,B)}finally{q?k():(w=!1,b=null)}}else w=!1}var k;if(typeof _=="function")k=function(){_(ae)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,Z=G.port2;G.port1.onmessage=ae,k=function(){Z.postMessage(null)}}else k=function(){m(ae,0)};function ue(B){b=B,w||(w=!0,k())}function Q(B,q){I=m(function(){B(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,ue(E))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(h){case 1:case 2:case 3:var q=3;break;default:q=h}var W=h;h=q;try{return B()}finally{h=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var W=h;h=B;try{return q()}finally{h=W}},t.unstable_scheduleCallback=function(B,q,W){var ce=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ce+W:ce):W=ce,B){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=W+M,B={id:u++,callback:q,priorityLevel:B,startTime:W,expirationTime:M,sortIndex:-1},W>ce?(B.sortIndex=W,e(c,B),n(l)===null&&B===n(c)&&(v?(f(I),I=-1):v=!0,Q(S,W-ce))):(B.sortIndex=M,e(l,B),g||p||(g=!0,ue(E))),B},t.unstable_shouldYield=te,t.unstable_wrapCallback=function(B){var q=h;return function(){var W=h;h=q;try{return B.apply(this,arguments)}finally{h=W}}}})(oS);sS.exports=oS;var v1=sS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aS=ve,Cn=v1;function me(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lS=new Set,el={};function Rs(t,e){No(t,e),No(t+"Capture",e)}function No(t,e){for(el[t]=e,t=0;t<e.length;t++)lS.add(e[t])}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uh=Object.prototype.hasOwnProperty,_1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rv={},sv={};function y1(t){return Uh.call(sv,t)?!0:Uh.call(rv,t)?!1:_1.test(t)?sv[t]=!0:(rv[t]=!0,!1)}function S1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E1(t,e,n,i){if(e===null||typeof e>"u"||S1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var pm=/[\-:]([a-z])/g;function mm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pm,mm);$t[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pm,mm);$t[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pm,mm);$t[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function gm(t,e,n,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(E1(e,n,r,i)&&(n=null),i||r===null?y1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Yi=aS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tc=Symbol.for("react.element"),oo=Symbol.for("react.portal"),ao=Symbol.for("react.fragment"),vm=Symbol.for("react.strict_mode"),Oh=Symbol.for("react.profiler"),cS=Symbol.for("react.provider"),uS=Symbol.for("react.context"),_m=Symbol.for("react.forward_ref"),kh=Symbol.for("react.suspense"),Fh=Symbol.for("react.suspense_list"),ym=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),dS=Symbol.for("react.offscreen"),ov=Symbol.iterator;function ua(t){return t===null||typeof t!="object"?null:(t=ov&&t[ov]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,uf;function Pa(t){if(uf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);uf=e&&e[1]||""}return`
`+uf+t}var df=!1;function ff(t,e){if(!t||df)return"";df=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{df=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Pa(t):""}function x1(t){switch(t.tag){case 5:return Pa(t.type);case 16:return Pa("Lazy");case 13:return Pa("Suspense");case 19:return Pa("SuspenseList");case 0:case 2:case 15:return t=ff(t.type,!1),t;case 11:return t=ff(t.type.render,!1),t;case 1:return t=ff(t.type,!0),t;default:return""}}function Bh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ao:return"Fragment";case oo:return"Portal";case Oh:return"Profiler";case vm:return"StrictMode";case kh:return"Suspense";case Fh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case uS:return(t.displayName||"Context")+".Consumer";case cS:return(t._context.displayName||"Context")+".Provider";case _m:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ym:return e=t.displayName||null,e!==null?e:Bh(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return Bh(t(e))}catch{}}return null}function M1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bh(e);case 8:return e===vm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fS(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function w1(t){var e=fS(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function nc(t){t._valueTracker||(t._valueTracker=w1(t))}function hS(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=fS(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function vu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zh(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function av(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pS(t,e){e=e.checked,e!=null&&gm(t,"checked",e,!1)}function Vh(t,e){pS(t,e);var n=Ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Hh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Hh(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Hh(t,e,n){(e!=="number"||vu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ia=Array.isArray;function Eo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Gh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(me(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(me(92));if(Ia(n)){if(1<n.length)throw Error(me(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function mS(t,e){var n=Ir(e.value),i=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function uv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gS(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gS(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ic,vS=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ic=ic||document.createElement("div"),ic.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ic.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function tl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var za={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T1=["Webkit","ms","Moz","O"];Object.keys(za).forEach(function(t){T1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),za[e]=za[t]})});function _S(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||za.hasOwnProperty(t)&&za[t]?(""+e).trim():e+"px"}function yS(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=_S(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var R1=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jh(t,e){if(e){if(R1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(me(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(me(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(me(61))}if(e.style!=null&&typeof e.style!="object")throw Error(me(62))}}function $h(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xh=null;function Sm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qh=null,xo=null,Mo=null;function dv(t){if(t=Pl(t)){if(typeof qh!="function")throw Error(me(280));var e=t.stateNode;e&&(e=ud(e),qh(t.stateNode,t.type,e))}}function SS(t){xo?Mo?Mo.push(t):Mo=[t]:xo=t}function ES(){if(xo){var t=xo,e=Mo;if(Mo=xo=null,dv(t),e)for(t=0;t<e.length;t++)dv(e[t])}}function xS(t,e){return t(e)}function MS(){}var hf=!1;function wS(t,e,n){if(hf)return t(e,n);hf=!0;try{return xS(t,e,n)}finally{hf=!1,(xo!==null||Mo!==null)&&(MS(),ES())}}function nl(t,e){var n=t.stateNode;if(n===null)return null;var i=ud(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(me(231,e,typeof n));return n}var Yh=!1;if(Wi)try{var da={};Object.defineProperty(da,"passive",{get:function(){Yh=!0}}),window.addEventListener("test",da,da),window.removeEventListener("test",da,da)}catch{Yh=!1}function A1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Va=!1,_u=null,yu=!1,Kh=null,b1={onError:function(t){Va=!0,_u=t}};function C1(t,e,n,i,r,s,o,a,l){Va=!1,_u=null,A1.apply(b1,arguments)}function L1(t,e,n,i,r,s,o,a,l){if(C1.apply(this,arguments),Va){if(Va){var c=_u;Va=!1,_u=null}else throw Error(me(198));yu||(yu=!0,Kh=c)}}function As(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function TS(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fv(t){if(As(t)!==t)throw Error(me(188))}function P1(t){var e=t.alternate;if(!e){if(e=As(t),e===null)throw Error(me(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return fv(r),t;if(s===i)return fv(r),e;s=s.sibling}throw Error(me(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(me(189))}}if(n.alternate!==i)throw Error(me(190))}if(n.tag!==3)throw Error(me(188));return n.stateNode.current===n?t:e}function RS(t){return t=P1(t),t!==null?AS(t):null}function AS(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=AS(t);if(e!==null)return e;t=t.sibling}return null}var bS=Cn.unstable_scheduleCallback,hv=Cn.unstable_cancelCallback,I1=Cn.unstable_shouldYield,N1=Cn.unstable_requestPaint,bt=Cn.unstable_now,D1=Cn.unstable_getCurrentPriorityLevel,Em=Cn.unstable_ImmediatePriority,CS=Cn.unstable_UserBlockingPriority,Su=Cn.unstable_NormalPriority,U1=Cn.unstable_LowPriority,LS=Cn.unstable_IdlePriority,od=null,mi=null;function O1(t){if(mi&&typeof mi.onCommitFiberRoot=="function")try{mi.onCommitFiberRoot(od,t,void 0,(t.current.flags&128)===128)}catch{}}var ii=Math.clz32?Math.clz32:B1,k1=Math.log,F1=Math.LN2;function B1(t){return t>>>=0,t===0?32:31-(k1(t)/F1|0)|0}var rc=64,sc=4194304;function Na(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Eu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Na(a):(s&=o,s!==0&&(i=Na(s)))}else o=n&~r,o!==0?i=Na(o):s!==0&&(i=Na(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ii(e),r=1<<n,i|=t[n],e&=~r;return i}function z1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function V1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ii(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=z1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Zh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function PS(){var t=rc;return rc<<=1,!(rc&4194240)&&(rc=64),t}function pf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Cl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ii(e),t[e]=n}function H1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ii(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function xm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ii(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function IS(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var NS,Mm,DS,US,OS,Jh=!1,oc=[],yr=null,Sr=null,Er=null,il=new Map,rl=new Map,lr=[],G1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pv(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":il.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":rl.delete(e.pointerId)}}function fa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Pl(e),e!==null&&Mm(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function W1(t,e,n,i,r){switch(e){case"focusin":return yr=fa(yr,t,e,n,i,r),!0;case"dragenter":return Sr=fa(Sr,t,e,n,i,r),!0;case"mouseover":return Er=fa(Er,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return il.set(s,fa(il.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,rl.set(s,fa(rl.get(s)||null,t,e,n,i,r)),!0}return!1}function kS(t){var e=is(t.target);if(e!==null){var n=As(e);if(n!==null){if(e=n.tag,e===13){if(e=TS(n),e!==null){t.blockedOn=e,OS(t.priority,function(){DS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Xh=i,n.target.dispatchEvent(i),Xh=null}else return e=Pl(n),e!==null&&Mm(e),t.blockedOn=n,!1;e.shift()}return!0}function mv(t,e,n){Zc(t)&&n.delete(e)}function j1(){Jh=!1,yr!==null&&Zc(yr)&&(yr=null),Sr!==null&&Zc(Sr)&&(Sr=null),Er!==null&&Zc(Er)&&(Er=null),il.forEach(mv),rl.forEach(mv)}function ha(t,e){t.blockedOn===e&&(t.blockedOn=null,Jh||(Jh=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,j1)))}function sl(t){function e(r){return ha(r,t)}if(0<oc.length){ha(oc[0],t);for(var n=1;n<oc.length;n++){var i=oc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(yr!==null&&ha(yr,t),Sr!==null&&ha(Sr,t),Er!==null&&ha(Er,t),il.forEach(e),rl.forEach(e),n=0;n<lr.length;n++)i=lr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)kS(n),n.blockedOn===null&&lr.shift()}var wo=Yi.ReactCurrentBatchConfig,xu=!0;function $1(t,e,n,i){var r=st,s=wo.transition;wo.transition=null;try{st=1,wm(t,e,n,i)}finally{st=r,wo.transition=s}}function X1(t,e,n,i){var r=st,s=wo.transition;wo.transition=null;try{st=4,wm(t,e,n,i)}finally{st=r,wo.transition=s}}function wm(t,e,n,i){if(xu){var r=Qh(t,e,n,i);if(r===null)wf(t,e,i,Mu,n),pv(t,i);else if(W1(r,t,e,n,i))i.stopPropagation();else if(pv(t,i),e&4&&-1<G1.indexOf(t)){for(;r!==null;){var s=Pl(r);if(s!==null&&NS(s),s=Qh(t,e,n,i),s===null&&wf(t,e,i,Mu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else wf(t,e,i,null,n)}}var Mu=null;function Qh(t,e,n,i){if(Mu=null,t=Sm(i),t=is(t),t!==null)if(e=As(t),e===null)t=null;else if(n=e.tag,n===13){if(t=TS(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Mu=t,null}function FS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(D1()){case Em:return 1;case CS:return 4;case Su:case U1:return 16;case LS:return 536870912;default:return 16}default:return 16}}var hr=null,Tm=null,Jc=null;function BS(){if(Jc)return Jc;var t,e=Tm,n=e.length,i,r="value"in hr?hr.value:hr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Jc=r.slice(t,1<i?1-i:void 0)}function Qc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ac(){return!0}function gv(){return!1}function Pn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ac:gv,this.isPropagationStopped=gv,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ac)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ac)},persist:function(){},isPersistent:ac}),e}var Jo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rm=Pn(Jo),Ll=Et({},Jo,{view:0,detail:0}),q1=Pn(Ll),mf,gf,pa,ad=Et({},Ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Am,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pa&&(pa&&t.type==="mousemove"?(mf=t.screenX-pa.screenX,gf=t.screenY-pa.screenY):gf=mf=0,pa=t),mf)},movementY:function(t){return"movementY"in t?t.movementY:gf}}),vv=Pn(ad),Y1=Et({},ad,{dataTransfer:0}),K1=Pn(Y1),Z1=Et({},Ll,{relatedTarget:0}),vf=Pn(Z1),J1=Et({},Jo,{animationName:0,elapsedTime:0,pseudoElement:0}),Q1=Pn(J1),eR=Et({},Jo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tR=Pn(eR),nR=Et({},Jo,{data:0}),_v=Pn(nR),iR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sR[t])?!!e[t]:!1}function Am(){return oR}var aR=Et({},Ll,{key:function(t){if(t.key){var e=iR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Am,charCode:function(t){return t.type==="keypress"?Qc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lR=Pn(aR),cR=Et({},ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yv=Pn(cR),uR=Et({},Ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Am}),dR=Pn(uR),fR=Et({},Jo,{propertyName:0,elapsedTime:0,pseudoElement:0}),hR=Pn(fR),pR=Et({},ad,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mR=Pn(pR),gR=[9,13,27,32],bm=Wi&&"CompositionEvent"in window,Ha=null;Wi&&"documentMode"in document&&(Ha=document.documentMode);var vR=Wi&&"TextEvent"in window&&!Ha,zS=Wi&&(!bm||Ha&&8<Ha&&11>=Ha),Sv=String.fromCharCode(32),Ev=!1;function VS(t,e){switch(t){case"keyup":return gR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function HS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var lo=!1;function _R(t,e){switch(t){case"compositionend":return HS(e);case"keypress":return e.which!==32?null:(Ev=!0,Sv);case"textInput":return t=e.data,t===Sv&&Ev?null:t;default:return null}}function yR(t,e){if(lo)return t==="compositionend"||!bm&&VS(t,e)?(t=BS(),Jc=Tm=hr=null,lo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zS&&e.locale!=="ko"?null:e.data;default:return null}}var SR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!SR[t.type]:e==="textarea"}function GS(t,e,n,i){SS(i),e=wu(e,"onChange"),0<e.length&&(n=new Rm("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ga=null,ol=null;function ER(t){eE(t,0)}function ld(t){var e=fo(t);if(hS(e))return t}function xR(t,e){if(t==="change")return e}var WS=!1;if(Wi){var _f;if(Wi){var yf="oninput"in document;if(!yf){var Mv=document.createElement("div");Mv.setAttribute("oninput","return;"),yf=typeof Mv.oninput=="function"}_f=yf}else _f=!1;WS=_f&&(!document.documentMode||9<document.documentMode)}function wv(){Ga&&(Ga.detachEvent("onpropertychange",jS),ol=Ga=null)}function jS(t){if(t.propertyName==="value"&&ld(ol)){var e=[];GS(e,ol,t,Sm(t)),wS(ER,e)}}function MR(t,e,n){t==="focusin"?(wv(),Ga=e,ol=n,Ga.attachEvent("onpropertychange",jS)):t==="focusout"&&wv()}function wR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ld(ol)}function TR(t,e){if(t==="click")return ld(e)}function RR(t,e){if(t==="input"||t==="change")return ld(e)}function AR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ai=typeof Object.is=="function"?Object.is:AR;function al(t,e){if(ai(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Uh.call(e,r)||!ai(t[r],e[r]))return!1}return!0}function Tv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rv(t,e){var n=Tv(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tv(n)}}function $S(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$S(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function XS(){for(var t=window,e=vu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vu(t.document)}return e}function Cm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bR(t){var e=XS(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$S(n.ownerDocument.documentElement,n)){if(i!==null&&Cm(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Rv(n,s);var o=Rv(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var CR=Wi&&"documentMode"in document&&11>=document.documentMode,co=null,ep=null,Wa=null,tp=!1;function Av(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tp||co==null||co!==vu(i)||(i=co,"selectionStart"in i&&Cm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wa&&al(Wa,i)||(Wa=i,i=wu(ep,"onSelect"),0<i.length&&(e=new Rm("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=co)))}function lc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var uo={animationend:lc("Animation","AnimationEnd"),animationiteration:lc("Animation","AnimationIteration"),animationstart:lc("Animation","AnimationStart"),transitionend:lc("Transition","TransitionEnd")},Sf={},qS={};Wi&&(qS=document.createElement("div").style,"AnimationEvent"in window||(delete uo.animationend.animation,delete uo.animationiteration.animation,delete uo.animationstart.animation),"TransitionEvent"in window||delete uo.transitionend.transition);function cd(t){if(Sf[t])return Sf[t];if(!uo[t])return t;var e=uo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qS)return Sf[t]=e[n];return t}var YS=cd("animationend"),KS=cd("animationiteration"),ZS=cd("animationstart"),JS=cd("transitionend"),QS=new Map,bv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(t,e){QS.set(t,e),Rs(e,[t])}for(var Ef=0;Ef<bv.length;Ef++){var xf=bv[Ef],LR=xf.toLowerCase(),PR=xf[0].toUpperCase()+xf.slice(1);Ur(LR,"on"+PR)}Ur(YS,"onAnimationEnd");Ur(KS,"onAnimationIteration");Ur(ZS,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(JS,"onTransitionEnd");No("onMouseEnter",["mouseout","mouseover"]);No("onMouseLeave",["mouseout","mouseover"]);No("onPointerEnter",["pointerout","pointerover"]);No("onPointerLeave",["pointerout","pointerover"]);Rs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IR=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function Cv(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,L1(i,e,void 0,t),t.currentTarget=null}function eE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Cv(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Cv(r,a,c),s=l}}}if(yu)throw t=Kh,yu=!1,Kh=null,t}function ft(t,e){var n=e[op];n===void 0&&(n=e[op]=new Set);var i=t+"__bubble";n.has(i)||(tE(e,t,2,!1),n.add(i))}function Mf(t,e,n){var i=0;e&&(i|=4),tE(n,t,i,e)}var cc="_reactListening"+Math.random().toString(36).slice(2);function ll(t){if(!t[cc]){t[cc]=!0,lS.forEach(function(n){n!=="selectionchange"&&(IR.has(n)||Mf(n,!1,t),Mf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[cc]||(e[cc]=!0,Mf("selectionchange",!1,e))}}function tE(t,e,n,i){switch(FS(e)){case 1:var r=$1;break;case 4:r=X1;break;default:r=wm}n=r.bind(null,e,n,t),r=void 0,!Yh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function wf(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=is(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}wS(function(){var c=s,u=Sm(n),d=[];e:{var h=QS.get(t);if(h!==void 0){var p=Rm,g=t;switch(t){case"keypress":if(Qc(n)===0)break e;case"keydown":case"keyup":p=lR;break;case"focusin":g="focus",p=vf;break;case"focusout":g="blur",p=vf;break;case"beforeblur":case"afterblur":p=vf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=vv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=K1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=dR;break;case YS:case KS:case ZS:p=Q1;break;case JS:p=hR;break;case"scroll":p=q1;break;case"wheel":p=mR;break;case"copy":case"cut":case"paste":p=tR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=yv}var v=(e&4)!==0,m=!v&&t==="scroll",f=v?h!==null?h+"Capture":null:h;v=[];for(var _=c,y;_!==null;){y=_;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,f!==null&&(S=nl(_,f),S!=null&&v.push(cl(_,S,y)))),m)break;_=_.return}0<v.length&&(h=new p(h,g,null,n,u),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Xh&&(g=n.relatedTarget||n.fromElement)&&(is(g)||g[ji]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?is(g):null,g!==null&&(m=As(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(v=vv,S="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(v=yv,S="onPointerLeave",f="onPointerEnter",_="pointer"),m=p==null?h:fo(p),y=g==null?h:fo(g),h=new v(S,_+"leave",p,n,u),h.target=m,h.relatedTarget=y,S=null,is(u)===c&&(v=new v(f,_+"enter",g,n,u),v.target=y,v.relatedTarget=m,S=v),m=S,p&&g)t:{for(v=p,f=g,_=0,y=v;y;y=Ds(y))_++;for(y=0,S=f;S;S=Ds(S))y++;for(;0<_-y;)v=Ds(v),_--;for(;0<y-_;)f=Ds(f),y--;for(;_--;){if(v===f||f!==null&&v===f.alternate)break t;v=Ds(v),f=Ds(f)}v=null}else v=null;p!==null&&Lv(d,h,p,v,!1),g!==null&&m!==null&&Lv(d,m,g,v,!0)}}e:{if(h=c?fo(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var E=xR;else if(xv(h))if(WS)E=RR;else{E=wR;var w=MR}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=TR);if(E&&(E=E(t,c))){GS(d,E,n,u);break e}w&&w(t,h,c),t==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&Hh(h,"number",h.value)}switch(w=c?fo(c):window,t){case"focusin":(xv(w)||w.contentEditable==="true")&&(co=w,ep=c,Wa=null);break;case"focusout":Wa=ep=co=null;break;case"mousedown":tp=!0;break;case"contextmenu":case"mouseup":case"dragend":tp=!1,Av(d,n,u);break;case"selectionchange":if(CR)break;case"keydown":case"keyup":Av(d,n,u)}var b;if(bm)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else lo?VS(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(zS&&n.locale!=="ko"&&(lo||I!=="onCompositionStart"?I==="onCompositionEnd"&&lo&&(b=BS()):(hr=u,Tm="value"in hr?hr.value:hr.textContent,lo=!0)),w=wu(c,I),0<w.length&&(I=new _v(I,t,null,n,u),d.push({event:I,listeners:w}),b?I.data=b:(b=HS(n),b!==null&&(I.data=b)))),(b=vR?_R(t,n):yR(t,n))&&(c=wu(c,"onBeforeInput"),0<c.length&&(u=new _v("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=b))}eE(d,e)})}function cl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=nl(t,n),s!=null&&i.unshift(cl(t,s,r)),s=nl(t,e),s!=null&&i.push(cl(t,s,r))),t=t.return}return i}function Ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lv(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=nl(n,s),l!=null&&o.unshift(cl(n,l,a))):r||(l=nl(n,s),l!=null&&o.push(cl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var NR=/\r\n?/g,DR=/\u0000|\uFFFD/g;function Pv(t){return(typeof t=="string"?t:""+t).replace(NR,`
`).replace(DR,"")}function uc(t,e,n){if(e=Pv(e),Pv(t)!==e&&n)throw Error(me(425))}function Tu(){}var np=null,ip=null;function rp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sp=typeof setTimeout=="function"?setTimeout:void 0,UR=typeof clearTimeout=="function"?clearTimeout:void 0,Iv=typeof Promise=="function"?Promise:void 0,OR=typeof queueMicrotask=="function"?queueMicrotask:typeof Iv<"u"?function(t){return Iv.resolve(null).then(t).catch(kR)}:sp;function kR(t){setTimeout(function(){throw t})}function Tf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),sl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);sl(e)}function xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Nv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qo=Math.random().toString(36).slice(2),fi="__reactFiber$"+Qo,ul="__reactProps$"+Qo,ji="__reactContainer$"+Qo,op="__reactEvents$"+Qo,FR="__reactListeners$"+Qo,BR="__reactHandles$"+Qo;function is(t){var e=t[fi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ji]||n[fi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Nv(t);t!==null;){if(n=t[fi])return n;t=Nv(t)}return e}t=n,n=t.parentNode}return null}function Pl(t){return t=t[fi]||t[ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(me(33))}function ud(t){return t[ul]||null}var ap=[],ho=-1;function Or(t){return{current:t}}function pt(t){0>ho||(t.current=ap[ho],ap[ho]=null,ho--)}function ut(t,e){ho++,ap[ho]=t.current,t.current=e}var Nr={},Qt=Or(Nr),gn=Or(!1),ps=Nr;function Do(t,e){var n=t.type.contextTypes;if(!n)return Nr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function vn(t){return t=t.childContextTypes,t!=null}function Ru(){pt(gn),pt(Qt)}function Dv(t,e,n){if(Qt.current!==Nr)throw Error(me(168));ut(Qt,e),ut(gn,n)}function nE(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(me(108,M1(t)||"Unknown",r));return Et({},n,i)}function Au(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nr,ps=Qt.current,ut(Qt,t),ut(gn,gn.current),!0}function Uv(t,e,n){var i=t.stateNode;if(!i)throw Error(me(169));n?(t=nE(t,e,ps),i.__reactInternalMemoizedMergedChildContext=t,pt(gn),pt(Qt),ut(Qt,t)):pt(gn),ut(gn,n)}var Ni=null,dd=!1,Rf=!1;function iE(t){Ni===null?Ni=[t]:Ni.push(t)}function zR(t){dd=!0,iE(t)}function kr(){if(!Rf&&Ni!==null){Rf=!0;var t=0,e=st;try{var n=Ni;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ni=null,dd=!1}catch(r){throw Ni!==null&&(Ni=Ni.slice(t+1)),bS(Em,kr),r}finally{st=e,Rf=!1}}return null}var po=[],mo=0,bu=null,Cu=0,Nn=[],Dn=0,ms=null,Ui=1,Oi="";function Kr(t,e){po[mo++]=Cu,po[mo++]=bu,bu=t,Cu=e}function rE(t,e,n){Nn[Dn++]=Ui,Nn[Dn++]=Oi,Nn[Dn++]=ms,ms=t;var i=Ui;t=Oi;var r=32-ii(i)-1;i&=~(1<<r),n+=1;var s=32-ii(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ui=1<<32-ii(e)+r|n<<r|i,Oi=s+t}else Ui=1<<s|n<<r|i,Oi=t}function Lm(t){t.return!==null&&(Kr(t,1),rE(t,1,0))}function Pm(t){for(;t===bu;)bu=po[--mo],po[mo]=null,Cu=po[--mo],po[mo]=null;for(;t===ms;)ms=Nn[--Dn],Nn[Dn]=null,Oi=Nn[--Dn],Nn[Dn]=null,Ui=Nn[--Dn],Nn[Dn]=null}var bn=null,Rn=null,gt=!1,ei=null;function sE(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ov(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bn=t,Rn=xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bn=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ms!==null?{id:Ui,overflow:Oi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bn=t,Rn=null,!0):!1;default:return!1}}function lp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cp(t){if(gt){var e=Rn;if(e){var n=e;if(!Ov(t,e)){if(lp(t))throw Error(me(418));e=xr(n.nextSibling);var i=bn;e&&Ov(t,e)?sE(i,n):(t.flags=t.flags&-4097|2,gt=!1,bn=t)}}else{if(lp(t))throw Error(me(418));t.flags=t.flags&-4097|2,gt=!1,bn=t}}}function kv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function dc(t){if(t!==bn)return!1;if(!gt)return kv(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rp(t.type,t.memoizedProps)),e&&(e=Rn)){if(lp(t))throw oE(),Error(me(418));for(;e;)sE(t,e),e=xr(e.nextSibling)}if(kv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(me(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=bn?xr(t.stateNode.nextSibling):null;return!0}function oE(){for(var t=Rn;t;)t=xr(t.nextSibling)}function Uo(){Rn=bn=null,gt=!1}function Im(t){ei===null?ei=[t]:ei.push(t)}var VR=Yi.ReactCurrentBatchConfig;function Jn(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Lu=Or(null),Pu=null,go=null,Nm=null;function Dm(){Nm=go=Pu=null}function Um(t){var e=Lu.current;pt(Lu),t._currentValue=e}function up(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function To(t,e){Pu=t,Nm=go=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function Hn(t){var e=t._currentValue;if(Nm!==t)if(t={context:t,memoizedValue:e,next:null},go===null){if(Pu===null)throw Error(me(308));go=t,Pu.dependencies={lanes:0,firstContext:t}}else go=go.next=t;return e}var rs=null;function Om(t){rs===null?rs=[t]:rs.push(t)}function aE(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Om(e)):(n.next=r.next,r.next=n),e.interleaved=n,$i(t,i)}function $i(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function km(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Mr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,$i(t,n)}return r=i.interleaved,r===null?(e.next=e,Om(i)):(e.next=r.next,r.next=e),i.interleaved=e,$i(t,n)}function eu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xm(t,n)}}function Fv(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Iu(t,e,n,i){var r=t.updateQueue;or=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(h=e,p=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(p,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,h=typeof g=="function"?g.call(p,d,h):g,h==null)break e;d=Et({},d,h);break e;case 2:or=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);vs|=o,t.lanes=o,t.memoizedState=d}}function Bv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(me(191,r));r.call(i)}}}var cE=new aS.Component().refs;function dp(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fd={isMounted:function(t){return(t=t._reactInternals)?As(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ln(),r=Tr(t),s=zi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Mr(t,s,r),e!==null&&(ri(e,t,r,i),eu(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ln(),r=Tr(t),s=zi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Mr(t,s,r),e!==null&&(ri(e,t,r,i),eu(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ln(),i=Tr(t),r=zi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Mr(t,r,i),e!==null&&(ri(e,t,i,n),eu(e,t,i))}};function zv(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!al(n,i)||!al(r,s):!0}function uE(t,e,n){var i=!1,r=Nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Hn(s):(r=vn(e)?ps:Qt.current,i=e.contextTypes,s=(i=i!=null)?Do(t,r):Nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fd,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vv(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&fd.enqueueReplaceState(e,e.state,null)}function fp(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=cE,km(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Hn(s):(s=vn(e)?ps:Qt.current,r.context=Do(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(dp(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&fd.enqueueReplaceState(r,r.state,null),Iu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ma(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(me(309));var i=n.stateNode}if(!i)throw Error(me(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===cE&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(me(284));if(!n._owner)throw Error(me(290,t))}return t}function fc(t,e){throw t=Object.prototype.toString.call(e),Error(me(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hv(t){var e=t._init;return e(t._payload)}function dE(t){function e(f,_){if(t){var y=f.deletions;y===null?(f.deletions=[_],f.flags|=16):y.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=Rr(f,_),f.index=0,f.sibling=null,f}function s(f,_,y){return f.index=y,t?(y=f.alternate,y!==null?(y=y.index,y<_?(f.flags|=2,_):y):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,y,S){return _===null||_.tag!==6?(_=Nf(y,f.mode,S),_.return=f,_):(_=r(_,y),_.return=f,_)}function l(f,_,y,S){var E=y.type;return E===ao?u(f,_,y.props.children,S,y.key):_!==null&&(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===sr&&Hv(E)===_.type)?(S=r(_,y.props),S.ref=ma(f,_,y),S.return=f,S):(S=ou(y.type,y.key,y.props,null,f.mode,S),S.ref=ma(f,_,y),S.return=f,S)}function c(f,_,y,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==y.containerInfo||_.stateNode.implementation!==y.implementation?(_=Df(y,f.mode,S),_.return=f,_):(_=r(_,y.children||[]),_.return=f,_)}function u(f,_,y,S,E){return _===null||_.tag!==7?(_=as(y,f.mode,S,E),_.return=f,_):(_=r(_,y),_.return=f,_)}function d(f,_,y){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Nf(""+_,f.mode,y),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case tc:return y=ou(_.type,_.key,_.props,null,f.mode,y),y.ref=ma(f,null,_),y.return=f,y;case oo:return _=Df(_,f.mode,y),_.return=f,_;case sr:var S=_._init;return d(f,S(_._payload),y)}if(Ia(_)||ua(_))return _=as(_,f.mode,y,null),_.return=f,_;fc(f,_)}return null}function h(f,_,y,S){var E=_!==null?_.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:a(f,_,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case tc:return y.key===E?l(f,_,y,S):null;case oo:return y.key===E?c(f,_,y,S):null;case sr:return E=y._init,h(f,_,E(y._payload),S)}if(Ia(y)||ua(y))return E!==null?null:u(f,_,y,S,null);fc(f,y)}return null}function p(f,_,y,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(y)||null,a(_,f,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case tc:return f=f.get(S.key===null?y:S.key)||null,l(_,f,S,E);case oo:return f=f.get(S.key===null?y:S.key)||null,c(_,f,S,E);case sr:var w=S._init;return p(f,_,y,w(S._payload),E)}if(Ia(S)||ua(S))return f=f.get(y)||null,u(_,f,S,E,null);fc(_,S)}return null}function g(f,_,y,S){for(var E=null,w=null,b=_,I=_=0,x=null;b!==null&&I<y.length;I++){b.index>I?(x=b,b=null):x=b.sibling;var R=h(f,b,y[I],S);if(R===null){b===null&&(b=x);break}t&&b&&R.alternate===null&&e(f,b),_=s(R,_,I),w===null?E=R:w.sibling=R,w=R,b=x}if(I===y.length)return n(f,b),gt&&Kr(f,I),E;if(b===null){for(;I<y.length;I++)b=d(f,y[I],S),b!==null&&(_=s(b,_,I),w===null?E=b:w.sibling=b,w=b);return gt&&Kr(f,I),E}for(b=i(f,b);I<y.length;I++)x=p(b,f,I,y[I],S),x!==null&&(t&&x.alternate!==null&&b.delete(x.key===null?I:x.key),_=s(x,_,I),w===null?E=x:w.sibling=x,w=x);return t&&b.forEach(function(te){return e(f,te)}),gt&&Kr(f,I),E}function v(f,_,y,S){var E=ua(y);if(typeof E!="function")throw Error(me(150));if(y=E.call(y),y==null)throw Error(me(151));for(var w=E=null,b=_,I=_=0,x=null,R=y.next();b!==null&&!R.done;I++,R=y.next()){b.index>I?(x=b,b=null):x=b.sibling;var te=h(f,b,R.value,S);if(te===null){b===null&&(b=x);break}t&&b&&te.alternate===null&&e(f,b),_=s(te,_,I),w===null?E=te:w.sibling=te,w=te,b=x}if(R.done)return n(f,b),gt&&Kr(f,I),E;if(b===null){for(;!R.done;I++,R=y.next())R=d(f,R.value,S),R!==null&&(_=s(R,_,I),w===null?E=R:w.sibling=R,w=R);return gt&&Kr(f,I),E}for(b=i(f,b);!R.done;I++,R=y.next())R=p(b,f,I,R.value,S),R!==null&&(t&&R.alternate!==null&&b.delete(R.key===null?I:R.key),_=s(R,_,I),w===null?E=R:w.sibling=R,w=R);return t&&b.forEach(function(ae){return e(f,ae)}),gt&&Kr(f,I),E}function m(f,_,y,S){if(typeof y=="object"&&y!==null&&y.type===ao&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case tc:e:{for(var E=y.key,w=_;w!==null;){if(w.key===E){if(E=y.type,E===ao){if(w.tag===7){n(f,w.sibling),_=r(w,y.props.children),_.return=f,f=_;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===sr&&Hv(E)===w.type){n(f,w.sibling),_=r(w,y.props),_.ref=ma(f,w,y),_.return=f,f=_;break e}n(f,w);break}else e(f,w);w=w.sibling}y.type===ao?(_=as(y.props.children,f.mode,S,y.key),_.return=f,f=_):(S=ou(y.type,y.key,y.props,null,f.mode,S),S.ref=ma(f,_,y),S.return=f,f=S)}return o(f);case oo:e:{for(w=y.key;_!==null;){if(_.key===w)if(_.tag===4&&_.stateNode.containerInfo===y.containerInfo&&_.stateNode.implementation===y.implementation){n(f,_.sibling),_=r(_,y.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=Df(y,f.mode,S),_.return=f,f=_}return o(f);case sr:return w=y._init,m(f,_,w(y._payload),S)}if(Ia(y))return g(f,_,y,S);if(ua(y))return v(f,_,y,S);fc(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,y),_.return=f,f=_):(n(f,_),_=Nf(y,f.mode,S),_.return=f,f=_),o(f)):n(f,_)}return m}var Oo=dE(!0),fE=dE(!1),Il={},gi=Or(Il),dl=Or(Il),fl=Or(Il);function ss(t){if(t===Il)throw Error(me(174));return t}function Fm(t,e){switch(ut(fl,e),ut(dl,t),ut(gi,Il),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wh(e,t)}pt(gi),ut(gi,e)}function ko(){pt(gi),pt(dl),pt(fl)}function hE(t){ss(fl.current);var e=ss(gi.current),n=Wh(e,t.type);e!==n&&(ut(dl,t),ut(gi,n))}function Bm(t){dl.current===t&&(pt(gi),pt(dl))}var _t=Or(0);function Nu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Af=[];function zm(){for(var t=0;t<Af.length;t++)Af[t]._workInProgressVersionPrimary=null;Af.length=0}var tu=Yi.ReactCurrentDispatcher,bf=Yi.ReactCurrentBatchConfig,gs=0,St=null,It=null,zt=null,Du=!1,ja=!1,hl=0,HR=0;function Xt(){throw Error(me(321))}function Vm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ai(t[n],e[n]))return!1;return!0}function Hm(t,e,n,i,r,s){if(gs=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tu.current=t===null||t.memoizedState===null?$R:XR,t=n(i,r),ja){s=0;do{if(ja=!1,hl=0,25<=s)throw Error(me(301));s+=1,zt=It=null,e.updateQueue=null,tu.current=qR,t=n(i,r)}while(ja)}if(tu.current=Uu,e=It!==null&&It.next!==null,gs=0,zt=It=St=null,Du=!1,e)throw Error(me(300));return t}function Gm(){var t=hl!==0;return hl=0,t}function ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?St.memoizedState=zt=t:zt=zt.next=t,zt}function Gn(){if(It===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=zt===null?St.memoizedState:zt.next;if(e!==null)zt=e,It=t;else{if(t===null)throw Error(me(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},zt===null?St.memoizedState=zt=t:zt=zt.next=t}return zt}function pl(t,e){return typeof e=="function"?e(t):e}function Cf(t){var e=Gn(),n=e.queue;if(n===null)throw Error(me(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((gs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,St.lanes|=u,vs|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ai(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,St.lanes|=s,vs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lf(t){var e=Gn(),n=e.queue;if(n===null)throw Error(me(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ai(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function pE(){}function mE(t,e){var n=St,i=Gn(),r=e(),s=!ai(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,Wm(_E.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,ml(9,vE.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(me(349));gs&30||gE(n,e,r)}return r}function gE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vE(t,e,n,i){e.value=n,e.getSnapshot=i,yE(e)&&SE(t)}function _E(t,e,n){return n(function(){yE(e)&&SE(t)})}function yE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ai(t,n)}catch{return!0}}function SE(t){var e=$i(t,1);e!==null&&ri(e,t,1,-1)}function Gv(t){var e=ci();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pl,lastRenderedState:t},e.queue=t,t=t.dispatch=jR.bind(null,St,t),[e.memoizedState,t]}function ml(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function EE(){return Gn().memoizedState}function nu(t,e,n,i){var r=ci();St.flags|=t,r.memoizedState=ml(1|e,n,void 0,i===void 0?null:i)}function hd(t,e,n,i){var r=Gn();i=i===void 0?null:i;var s=void 0;if(It!==null){var o=It.memoizedState;if(s=o.destroy,i!==null&&Vm(i,o.deps)){r.memoizedState=ml(e,n,s,i);return}}St.flags|=t,r.memoizedState=ml(1|e,n,s,i)}function Wv(t,e){return nu(8390656,8,t,e)}function Wm(t,e){return hd(2048,8,t,e)}function xE(t,e){return hd(4,2,t,e)}function ME(t,e){return hd(4,4,t,e)}function wE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function TE(t,e,n){return n=n!=null?n.concat([t]):null,hd(4,4,wE.bind(null,e,t),n)}function jm(){}function RE(t,e){var n=Gn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function AE(t,e){var n=Gn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function bE(t,e,n){return gs&21?(ai(n,e)||(n=PS(),St.lanes|=n,vs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function GR(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=bf.transition;bf.transition={};try{t(!1),e()}finally{st=n,bf.transition=i}}function CE(){return Gn().memoizedState}function WR(t,e,n){var i=Tr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},LE(t))PE(e,n);else if(n=aE(t,e,n,i),n!==null){var r=ln();ri(n,t,i,r),IE(n,e,i)}}function jR(t,e,n){var i=Tr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(LE(t))PE(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ai(a,o)){var l=e.interleaved;l===null?(r.next=r,Om(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=aE(t,e,r,i),n!==null&&(r=ln(),ri(n,t,i,r),IE(n,e,i))}}function LE(t){var e=t.alternate;return t===St||e!==null&&e===St}function PE(t,e){ja=Du=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function IE(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xm(t,n)}}var Uu={readContext:Hn,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},$R={readContext:Hn,useCallback:function(t,e){return ci().memoizedState=[t,e===void 0?null:e],t},useContext:Hn,useEffect:Wv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nu(4194308,4,wE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nu(4194308,4,t,e)},useInsertionEffect:function(t,e){return nu(4,2,t,e)},useMemo:function(t,e){var n=ci();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ci();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=WR.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=ci();return t={current:t},e.memoizedState=t},useState:Gv,useDebugValue:jm,useDeferredValue:function(t){return ci().memoizedState=t},useTransition:function(){var t=Gv(!1),e=t[0];return t=GR.bind(null,t[1]),ci().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=ci();if(gt){if(n===void 0)throw Error(me(407));n=n()}else{if(n=e(),Vt===null)throw Error(me(349));gs&30||gE(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Wv(_E.bind(null,i,s,t),[t]),i.flags|=2048,ml(9,vE.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ci(),e=Vt.identifierPrefix;if(gt){var n=Oi,i=Ui;n=(i&~(1<<32-ii(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=hl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=HR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},XR={readContext:Hn,useCallback:RE,useContext:Hn,useEffect:Wm,useImperativeHandle:TE,useInsertionEffect:xE,useLayoutEffect:ME,useMemo:AE,useReducer:Cf,useRef:EE,useState:function(){return Cf(pl)},useDebugValue:jm,useDeferredValue:function(t){var e=Gn();return bE(e,It.memoizedState,t)},useTransition:function(){var t=Cf(pl)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:pE,useSyncExternalStore:mE,useId:CE,unstable_isNewReconciler:!1},qR={readContext:Hn,useCallback:RE,useContext:Hn,useEffect:Wm,useImperativeHandle:TE,useInsertionEffect:xE,useLayoutEffect:ME,useMemo:AE,useReducer:Lf,useRef:EE,useState:function(){return Lf(pl)},useDebugValue:jm,useDeferredValue:function(t){var e=Gn();return It===null?e.memoizedState=t:bE(e,It.memoizedState,t)},useTransition:function(){var t=Lf(pl)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:pE,useSyncExternalStore:mE,useId:CE,unstable_isNewReconciler:!1};function Fo(t,e){try{var n="",i=e;do n+=x1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Pf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var YR=typeof WeakMap=="function"?WeakMap:Map;function NE(t,e,n){n=zi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ku||(ku=!0,Mp=i),hp(t,e)},n}function DE(t,e,n){n=zi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){hp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hp(t,e),typeof i!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jv(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new YR;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=cA.bind(null,t,e,n),e.then(t,t))}function $v(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xv(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zi(-1,1),e.tag=2,Mr(n,e,1))),n.lanes|=1),t)}var KR=Yi.ReactCurrentOwner,mn=!1;function sn(t,e,n,i){e.child=t===null?fE(e,null,n,i):Oo(e,t.child,n,i)}function qv(t,e,n,i,r){n=n.render;var s=e.ref;return To(e,r),i=Hm(t,e,n,i,s,r),n=Gm(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(gt&&n&&Lm(e),e.flags|=1,sn(t,e,i,r),e.child)}function Yv(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Qm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,UE(t,e,s,i,r)):(t=ou(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:al,n(o,i)&&t.ref===e.ref)return Xi(t,e,r)}return e.flags|=1,t=Rr(s,i),t.ref=e.ref,t.return=e,e.child=t}function UE(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(al(s,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,Xi(t,e,r)}return pp(t,e,n,i,r)}function OE(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(_o,wn),wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(_o,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(_o,wn),wn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(_o,wn),wn|=i;return sn(t,e,r,n),e.child}function kE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pp(t,e,n,i,r){var s=vn(n)?ps:Qt.current;return s=Do(e,s),To(e,r),n=Hm(t,e,n,i,s,r),i=Gm(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Xi(t,e,r)):(gt&&i&&Lm(e),e.flags|=1,sn(t,e,n,r),e.child)}function Kv(t,e,n,i,r){if(vn(n)){var s=!0;Au(e)}else s=!1;if(To(e,r),e.stateNode===null)iu(t,e),uE(e,n,i),fp(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Hn(c):(c=vn(n)?ps:Qt.current,c=Do(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Vv(e,o,i,c),or=!1;var h=e.memoizedState;o.state=h,Iu(e,i,o,r),l=e.memoizedState,a!==i||h!==l||gn.current||or?(typeof u=="function"&&(dp(e,n,u,i),l=e.memoizedState),(a=or||zv(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,lE(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Jn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Hn(l):(l=vn(n)?ps:Qt.current,l=Do(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Vv(e,o,i,l),or=!1,h=e.memoizedState,o.state=h,Iu(e,i,o,r);var g=e.memoizedState;a!==d||h!==g||gn.current||or?(typeof p=="function"&&(dp(e,n,p,i),g=e.memoizedState),(c=or||zv(e,n,c,i,h,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return mp(t,e,n,i,s,r)}function mp(t,e,n,i,r,s){kE(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Uv(e,n,!1),Xi(t,e,s);i=e.stateNode,KR.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Oo(e,t.child,null,s),e.child=Oo(e,null,a,s)):sn(t,e,a,s),e.memoizedState=i.state,r&&Uv(e,n,!0),e.child}function FE(t){var e=t.stateNode;e.pendingContext?Dv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Dv(t,e.context,!1),Fm(t,e.containerInfo)}function Zv(t,e,n,i,r){return Uo(),Im(r),e.flags|=256,sn(t,e,n,i),e.child}var gp={dehydrated:null,treeContext:null,retryLane:0};function vp(t){return{baseLanes:t,cachePool:null,transitions:null}}function BE(t,e,n){var i=e.pendingProps,r=_t.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(_t,r&1),t===null)return cp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gd(o,i,0,null),t=as(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=vp(n),e.memoizedState=gp,t):$m(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ZR(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Rr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Rr(a,s):(s=as(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?vp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=gp,i}return s=t.child,t=s.sibling,i=Rr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function $m(t,e){return e=gd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function hc(t,e,n,i){return i!==null&&Im(i),Oo(e,t.child,null,n),t=$m(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ZR(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Pf(Error(me(422))),hc(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=gd({mode:"visible",children:i.children},r,0,null),s=as(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Oo(e,t.child,null,o),e.child.memoizedState=vp(o),e.memoizedState=gp,s);if(!(e.mode&1))return hc(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(me(419)),i=Pf(s,i,void 0),hc(t,e,o,i)}if(a=(o&t.childLanes)!==0,mn||a){if(i=Vt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,$i(t,r),ri(i,t,r,-1))}return Jm(),i=Pf(Error(me(421))),hc(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=uA.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Rn=xr(r.nextSibling),bn=e,gt=!0,ei=null,t!==null&&(Nn[Dn++]=Ui,Nn[Dn++]=Oi,Nn[Dn++]=ms,Ui=t.id,Oi=t.overflow,ms=e),e=$m(e,i.children),e.flags|=4096,e)}function Jv(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),up(t.return,e,n)}function If(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function zE(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jv(t,n,e);else if(t.tag===19)Jv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Nu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),If(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Nu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}If(e,!0,n,null,s);break;case"together":If(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function iu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(me(153));if(e.child!==null){for(t=e.child,n=Rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function JR(t,e,n){switch(e.tag){case 3:FE(e),Uo();break;case 5:hE(e);break;case 1:vn(e.type)&&Au(e);break;case 4:Fm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(Lu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?BE(t,e,n):(ut(_t,_t.current&1),t=Xi(t,e,n),t!==null?t.sibling:null);ut(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return zE(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,OE(t,e,n)}return Xi(t,e,n)}var VE,_p,HE,GE;VE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_p=function(){};HE=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ss(gi.current);var s=null;switch(n){case"input":r=zh(t,r),i=zh(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=Gh(t,r),i=Gh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Tu)}jh(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(el.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(el.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ft("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};GE=function(t,e,n,i){n!==i&&(e.flags|=4)};function ga(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function QR(t,e,n){var i=e.pendingProps;switch(Pm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return vn(e.type)&&Ru(),qt(e),null;case 3:return i=e.stateNode,ko(),pt(gn),pt(Qt),zm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(dc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ei!==null&&(Rp(ei),ei=null))),_p(t,e),qt(e),null;case 5:Bm(e);var r=ss(fl.current);if(n=e.type,t!==null&&e.stateNode!=null)HE(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(me(166));return qt(e),null}if(t=ss(gi.current),dc(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[fi]=e,i[ul]=s,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<Da.length;r++)ft(Da[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":av(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":cv(i,s),ft("invalid",i)}jh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&uc(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&uc(i.textContent,a,t),r=["children",""+a]):el.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ft("scroll",i)}switch(n){case"input":nc(i),lv(i,s,!0);break;case"textarea":nc(i),uv(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Tu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gS(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[fi]=e,t[ul]=i,VE(t,e,!1,!1),e.stateNode=t;e:{switch(o=$h(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<Da.length;r++)ft(Da[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":av(t,i),r=zh(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),ft("invalid",t);break;case"textarea":cv(t,i),r=Gh(t,i),ft("invalid",t);break;default:r=i}jh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?yS(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vS(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&tl(t,l):typeof l=="number"&&tl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(el.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",t):l!=null&&gm(t,s,l,o))}switch(n){case"input":nc(t),lv(t,i,!1);break;case"textarea":nc(t),uv(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Eo(t,!!i.multiple,s,!1):i.defaultValue!=null&&Eo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Tu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)GE(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(me(166));if(n=ss(fl.current),ss(gi.current),dc(e)){if(i=e.stateNode,n=e.memoizedProps,i[fi]=e,(s=i.nodeValue!==n)&&(t=bn,t!==null))switch(t.tag){case 3:uc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&uc(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[fi]=e,e.stateNode=i}return qt(e),null;case 13:if(pt(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&Rn!==null&&e.mode&1&&!(e.flags&128))oE(),Uo(),e.flags|=98560,s=!1;else if(s=dc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(me(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(me(317));s[fi]=e}else Uo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else ei!==null&&(Rp(ei),ei=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?Nt===0&&(Nt=3):Jm())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return ko(),_p(t,e),t===null&&ll(e.stateNode.containerInfo),qt(e),null;case 10:return Um(e.type._context),qt(e),null;case 17:return vn(e.type)&&Ru(),qt(e),null;case 19:if(pt(_t),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ga(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Nu(t),o!==null){for(e.flags|=128,ga(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(_t,_t.current&1|2),e.child}t=t.sibling}s.tail!==null&&bt()>Bo&&(e.flags|=128,i=!0,ga(s,!1),e.lanes=4194304)}else{if(!i)if(t=Nu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ga(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!gt)return qt(e),null}else 2*bt()-s.renderingStartTime>Bo&&n!==1073741824&&(e.flags|=128,i=!0,ga(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=bt(),e.sibling=null,n=_t.current,ut(_t,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return Zm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(me(156,e.tag))}function eA(t,e){switch(Pm(e),e.tag){case 1:return vn(e.type)&&Ru(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ko(),pt(gn),pt(Qt),zm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bm(e),null;case 13:if(pt(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(me(340));Uo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(_t),null;case 4:return ko(),null;case 10:return Um(e.type._context),null;case 22:case 23:return Zm(),null;case 24:return null;default:return null}}var pc=!1,Zt=!1,tA=typeof WeakSet=="function"?WeakSet:Set,we=null;function vo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function yp(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var Qv=!1;function nA(t,e){if(np=xu,t=XS(),Cm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ip={focusedElem:t,selectionRange:n},xu=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,m=g.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?v:Jn(e.type,v),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(me(163))}}catch(S){Tt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return g=Qv,Qv=!1,g}function $a(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&yp(e,n,s)}r=r.next}while(r!==i)}}function pd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Sp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function WE(t){var e=t.alternate;e!==null&&(t.alternate=null,WE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fi],delete e[ul],delete e[op],delete e[FR],delete e[BR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jE(t){return t.tag===5||t.tag===3||t.tag===4}function e_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ep(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Tu));else if(i!==4&&(t=t.child,t!==null))for(Ep(t,e,n),t=t.sibling;t!==null;)Ep(t,e,n),t=t.sibling}function xp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(xp(t,e,n),t=t.sibling;t!==null;)xp(t,e,n),t=t.sibling}var Gt=null,Qn=!1;function Ji(t,e,n){for(n=n.child;n!==null;)$E(t,e,n),n=n.sibling}function $E(t,e,n){if(mi&&typeof mi.onCommitFiberUnmount=="function")try{mi.onCommitFiberUnmount(od,n)}catch{}switch(n.tag){case 5:Zt||vo(n,e);case 6:var i=Gt,r=Qn;Gt=null,Ji(t,e,n),Gt=i,Qn=r,Gt!==null&&(Qn?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(Qn?(t=Gt,n=n.stateNode,t.nodeType===8?Tf(t.parentNode,n):t.nodeType===1&&Tf(t,n),sl(t)):Tf(Gt,n.stateNode));break;case 4:i=Gt,r=Qn,Gt=n.stateNode.containerInfo,Qn=!0,Ji(t,e,n),Gt=i,Qn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yp(n,e,o),r=r.next}while(r!==i)}Ji(t,e,n);break;case 1:if(!Zt&&(vo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}Ji(t,e,n);break;case 21:Ji(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,Ji(t,e,n),Zt=i):Ji(t,e,n);break;default:Ji(t,e,n)}}function t_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tA),e.forEach(function(i){var r=dA.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function $n(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,Qn=!1;break e;case 3:Gt=a.stateNode.containerInfo,Qn=!0;break e;case 4:Gt=a.stateNode.containerInfo,Qn=!0;break e}a=a.return}if(Gt===null)throw Error(me(160));$E(s,o,r),Gt=null,Qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)XE(e,t),e=e.sibling}function XE(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(e,t),li(t),i&4){try{$a(3,t,t.return),pd(3,t)}catch(v){Tt(t,t.return,v)}try{$a(5,t,t.return)}catch(v){Tt(t,t.return,v)}}break;case 1:$n(e,t),li(t),i&512&&n!==null&&vo(n,n.return);break;case 5:if($n(e,t),li(t),i&512&&n!==null&&vo(n,n.return),t.flags&32){var r=t.stateNode;try{tl(r,"")}catch(v){Tt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&pS(r,s),$h(a,o);var c=$h(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?yS(r,d):u==="dangerouslySetInnerHTML"?vS(r,d):u==="children"?tl(r,d):gm(r,u,d,c)}switch(a){case"input":Vh(r,s);break;case"textarea":mS(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Eo(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Eo(r,!!s.multiple,s.defaultValue,!0):Eo(r,!!s.multiple,s.multiple?[]:"",!1))}r[ul]=s}catch(v){Tt(t,t.return,v)}}break;case 6:if($n(e,t),li(t),i&4){if(t.stateNode===null)throw Error(me(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){Tt(t,t.return,v)}}break;case 3:if($n(e,t),li(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{sl(e.containerInfo)}catch(v){Tt(t,t.return,v)}break;case 4:$n(e,t),li(t);break;case 13:$n(e,t),li(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ym=bt())),i&4&&t_(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(c=Zt)||u,$n(e,t),Zt=c):$n(e,t),li(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(we=t,u=t.child;u!==null;){for(d=we=u;we!==null;){switch(h=we,p=h.child,h.tag){case 0:case 11:case 14:case 15:$a(4,h,h.return);break;case 1:vo(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){Tt(i,n,v)}}break;case 5:vo(h,h.return);break;case 22:if(h.memoizedState!==null){i_(d);continue}}p!==null?(p.return=h,we=p):i_(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_S("display",o))}catch(v){Tt(t,t.return,v)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){Tt(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:$n(e,t),li(t),i&4&&t_(t);break;case 21:break;default:$n(e,t),li(t)}}function li(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jE(n)){var i=n;break e}n=n.return}throw Error(me(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(tl(r,""),i.flags&=-33);var s=e_(t);xp(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=e_(t);Ep(t,a,o);break;default:throw Error(me(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iA(t,e,n){we=t,qE(t)}function qE(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||pc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Zt;a=pc;var c=Zt;if(pc=o,(Zt=l)&&!c)for(we=r;we!==null;)o=we,l=o.child,o.tag===22&&o.memoizedState!==null?r_(r):l!==null?(l.return=o,we=l):r_(r);for(;s!==null;)we=s,qE(s),s=s.sibling;we=r,pc=a,Zt=c}n_(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):n_(t)}}function n_(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||pd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bv(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&sl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(me(163))}Zt||e.flags&512&&Sp(e)}catch(h){Tt(e,e.return,h)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function i_(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function r_(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pd(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{Sp(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{Sp(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){we=null;break}var a=e.sibling;if(a!==null){a.return=e.return,we=a;break}we=e.return}}var rA=Math.ceil,Ou=Yi.ReactCurrentDispatcher,Xm=Yi.ReactCurrentOwner,Bn=Yi.ReactCurrentBatchConfig,rt=0,Vt=null,Pt=null,jt=0,wn=0,_o=Or(0),Nt=0,gl=null,vs=0,md=0,qm=0,Xa=null,pn=null,Ym=0,Bo=1/0,Ii=null,ku=!1,Mp=null,wr=null,mc=!1,pr=null,Fu=0,qa=0,wp=null,ru=-1,su=0;function ln(){return rt&6?bt():ru!==-1?ru:ru=bt()}function Tr(t){return t.mode&1?rt&2&&jt!==0?jt&-jt:VR.transition!==null?(su===0&&(su=PS()),su):(t=st,t!==0||(t=window.event,t=t===void 0?16:FS(t.type)),t):1}function ri(t,e,n,i){if(50<qa)throw qa=0,wp=null,Error(me(185));Cl(t,n,i),(!(rt&2)||t!==Vt)&&(t===Vt&&(!(rt&2)&&(md|=n),Nt===4&&cr(t,jt)),_n(t,i),n===1&&rt===0&&!(e.mode&1)&&(Bo=bt()+500,dd&&kr()))}function _n(t,e){var n=t.callbackNode;V1(t,e);var i=Eu(t,t===Vt?jt:0);if(i===0)n!==null&&hv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&hv(n),e===1)t.tag===0?zR(s_.bind(null,t)):iE(s_.bind(null,t)),OR(function(){!(rt&6)&&kr()}),n=null;else{switch(IS(i)){case 1:n=Em;break;case 4:n=CS;break;case 16:n=Su;break;case 536870912:n=LS;break;default:n=Su}n=nx(n,YE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function YE(t,e){if(ru=-1,su=0,rt&6)throw Error(me(327));var n=t.callbackNode;if(Ro()&&t.callbackNode!==n)return null;var i=Eu(t,t===Vt?jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Bu(t,i);else{e=i;var r=rt;rt|=2;var s=ZE();(Vt!==t||jt!==e)&&(Ii=null,Bo=bt()+500,os(t,e));do try{aA();break}catch(a){KE(t,a)}while(1);Dm(),Ou.current=s,rt=r,Pt!==null?e=0:(Vt=null,jt=0,e=Nt)}if(e!==0){if(e===2&&(r=Zh(t),r!==0&&(i=r,e=Tp(t,r))),e===1)throw n=gl,os(t,0),cr(t,i),_n(t,bt()),n;if(e===6)cr(t,i);else{if(r=t.current.alternate,!(i&30)&&!sA(r)&&(e=Bu(t,i),e===2&&(s=Zh(t),s!==0&&(i=s,e=Tp(t,s))),e===1))throw n=gl,os(t,0),cr(t,i),_n(t,bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(me(345));case 2:Zr(t,pn,Ii);break;case 3:if(cr(t,i),(i&130023424)===i&&(e=Ym+500-bt(),10<e)){if(Eu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ln(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=sp(Zr.bind(null,t,pn,Ii),e);break}Zr(t,pn,Ii);break;case 4:if(cr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ii(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*rA(i/1960))-i,10<i){t.timeoutHandle=sp(Zr.bind(null,t,pn,Ii),i);break}Zr(t,pn,Ii);break;case 5:Zr(t,pn,Ii);break;default:throw Error(me(329))}}}return _n(t,bt()),t.callbackNode===n?YE.bind(null,t):null}function Tp(t,e){var n=Xa;return t.current.memoizedState.isDehydrated&&(os(t,e).flags|=256),t=Bu(t,e),t!==2&&(e=pn,pn=n,e!==null&&Rp(e)),t}function Rp(t){pn===null?pn=t:pn.push.apply(pn,t)}function sA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ai(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~qm,e&=~md,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ii(e),i=1<<n;t[n]=-1,e&=~i}}function s_(t){if(rt&6)throw Error(me(327));Ro();var e=Eu(t,0);if(!(e&1))return _n(t,bt()),null;var n=Bu(t,e);if(t.tag!==0&&n===2){var i=Zh(t);i!==0&&(e=i,n=Tp(t,i))}if(n===1)throw n=gl,os(t,0),cr(t,e),_n(t,bt()),n;if(n===6)throw Error(me(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Zr(t,pn,Ii),_n(t,bt()),null}function Km(t,e){var n=rt;rt|=1;try{return t(e)}finally{rt=n,rt===0&&(Bo=bt()+500,dd&&kr())}}function _s(t){pr!==null&&pr.tag===0&&!(rt&6)&&Ro();var e=rt;rt|=1;var n=Bn.transition,i=st;try{if(Bn.transition=null,st=1,t)return t()}finally{st=i,Bn.transition=n,rt=e,!(rt&6)&&kr()}}function Zm(){wn=_o.current,pt(_o)}function os(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,UR(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(Pm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ru();break;case 3:ko(),pt(gn),pt(Qt),zm();break;case 5:Bm(i);break;case 4:ko();break;case 13:pt(_t);break;case 19:pt(_t);break;case 10:Um(i.type._context);break;case 22:case 23:Zm()}n=n.return}if(Vt=t,Pt=t=Rr(t.current,null),jt=wn=e,Nt=0,gl=null,qm=md=vs=0,pn=Xa=null,rs!==null){for(e=0;e<rs.length;e++)if(n=rs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}rs=null}return t}function KE(t,e){do{var n=Pt;try{if(Dm(),tu.current=Uu,Du){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Du=!1}if(gs=0,zt=It=St=null,ja=!1,hl=0,Xm.current=null,n===null||n.return===null){Nt=1,gl=e,Pt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=$v(o);if(p!==null){p.flags&=-257,Xv(p,o,a,s,e),p.mode&1&&jv(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){jv(s,c,e),Jm();break e}l=Error(me(426))}}else if(gt&&a.mode&1){var m=$v(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Xv(m,o,a,s,e),Im(Fo(l,a));break e}}s=l=Fo(l,a),Nt!==4&&(Nt=2),Xa===null?Xa=[s]:Xa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=NE(s,l,e);Fv(s,f);break e;case 1:a=l;var _=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(wr===null||!wr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=DE(s,a,e);Fv(s,S);break e}}s=s.return}while(s!==null)}QE(n)}catch(E){e=E,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(1)}function ZE(){var t=Ou.current;return Ou.current=Uu,t===null?Uu:t}function Jm(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Vt===null||!(vs&268435455)&&!(md&268435455)||cr(Vt,jt)}function Bu(t,e){var n=rt;rt|=2;var i=ZE();(Vt!==t||jt!==e)&&(Ii=null,os(t,e));do try{oA();break}catch(r){KE(t,r)}while(1);if(Dm(),rt=n,Ou.current=i,Pt!==null)throw Error(me(261));return Vt=null,jt=0,Nt}function oA(){for(;Pt!==null;)JE(Pt)}function aA(){for(;Pt!==null&&!I1();)JE(Pt)}function JE(t){var e=tx(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?QE(t):Pt=e,Xm.current=null}function QE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=eA(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,Pt=null;return}}else if(n=QR(n,e,wn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);Nt===0&&(Nt=5)}function Zr(t,e,n){var i=st,r=Bn.transition;try{Bn.transition=null,st=1,lA(t,e,n,i)}finally{Bn.transition=r,st=i}return null}function lA(t,e,n,i){do Ro();while(pr!==null);if(rt&6)throw Error(me(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(me(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(H1(t,s),t===Vt&&(Pt=Vt=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mc||(mc=!0,nx(Su,function(){return Ro(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bn.transition,Bn.transition=null;var o=st;st=1;var a=rt;rt|=4,Xm.current=null,nA(t,n),XE(n,t),bR(ip),xu=!!np,ip=np=null,t.current=n,iA(n),N1(),rt=a,st=o,Bn.transition=s}else t.current=n;if(mc&&(mc=!1,pr=t,Fu=r),s=t.pendingLanes,s===0&&(wr=null),O1(n.stateNode),_n(t,bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ku)throw ku=!1,t=Mp,Mp=null,t;return Fu&1&&t.tag!==0&&Ro(),s=t.pendingLanes,s&1?t===wp?qa++:(qa=0,wp=t):qa=0,kr(),null}function Ro(){if(pr!==null){var t=IS(Fu),e=Bn.transition,n=st;try{if(Bn.transition=null,st=16>t?16:t,pr===null)var i=!1;else{if(t=pr,pr=null,Fu=0,rt&6)throw Error(me(331));var r=rt;for(rt|=4,we=t.current;we!==null;){var s=we,o=s.child;if(we.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(we=c;we!==null;){var u=we;switch(u.tag){case 0:case 11:case 15:$a(8,u,s)}var d=u.child;if(d!==null)d.return=u,we=d;else for(;we!==null;){u=we;var h=u.sibling,p=u.return;if(WE(u),u===c){we=null;break}if(h!==null){h.return=p,we=h;break}we=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}we=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,we=o;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$a(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,we=f;break e}we=s.return}}var _=t.current;for(we=_;we!==null;){o=we;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,we=y;else e:for(o=_;we!==null;){if(a=we,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:pd(9,a)}}catch(E){Tt(a,a.return,E)}if(a===o){we=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,we=S;break e}we=a.return}}if(rt=r,kr(),mi&&typeof mi.onPostCommitFiberRoot=="function")try{mi.onPostCommitFiberRoot(od,t)}catch{}i=!0}return i}finally{st=n,Bn.transition=e}}return!1}function o_(t,e,n){e=Fo(n,e),e=NE(t,e,1),t=Mr(t,e,1),e=ln(),t!==null&&(Cl(t,1,e),_n(t,e))}function Tt(t,e,n){if(t.tag===3)o_(t,t,n);else for(;e!==null;){if(e.tag===3){o_(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(wr===null||!wr.has(i))){t=Fo(n,t),t=DE(e,t,1),e=Mr(e,t,1),t=ln(),e!==null&&(Cl(e,1,t),_n(e,t));break}}e=e.return}}function cA(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ln(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(jt&n)===n&&(Nt===4||Nt===3&&(jt&130023424)===jt&&500>bt()-Ym?os(t,0):qm|=n),_n(t,e)}function ex(t,e){e===0&&(t.mode&1?(e=sc,sc<<=1,!(sc&130023424)&&(sc=4194304)):e=1);var n=ln();t=$i(t,e),t!==null&&(Cl(t,e,n),_n(t,n))}function uA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ex(t,n)}function dA(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(me(314))}i!==null&&i.delete(e),ex(t,n)}var tx;tx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,JR(t,e,n);mn=!!(t.flags&131072)}else mn=!1,gt&&e.flags&1048576&&rE(e,Cu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;iu(t,e),t=e.pendingProps;var r=Do(e,Qt.current);To(e,n),r=Hm(null,e,i,t,r,n);var s=Gm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(s=!0,Au(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,km(e),r.updater=fd,e.stateNode=r,r._reactInternals=e,fp(e,i,t,n),e=mp(null,e,i,!0,s,n)):(e.tag=0,gt&&s&&Lm(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(iu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=hA(i),t=Jn(i,t),r){case 0:e=pp(null,e,i,t,n);break e;case 1:e=Kv(null,e,i,t,n);break e;case 11:e=qv(null,e,i,t,n);break e;case 14:e=Yv(null,e,i,Jn(i.type,t),n);break e}throw Error(me(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),pp(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Kv(t,e,i,r,n);case 3:e:{if(FE(e),t===null)throw Error(me(387));i=e.pendingProps,s=e.memoizedState,r=s.element,lE(t,e),Iu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Fo(Error(me(423)),e),e=Zv(t,e,i,n,r);break e}else if(i!==r){r=Fo(Error(me(424)),e),e=Zv(t,e,i,n,r);break e}else for(Rn=xr(e.stateNode.containerInfo.firstChild),bn=e,gt=!0,ei=null,n=fE(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Uo(),i===r){e=Xi(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return hE(e),t===null&&cp(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,rp(i,r)?o=null:s!==null&&rp(i,s)&&(e.flags|=32),kE(t,e),sn(t,e,o,n),e.child;case 6:return t===null&&cp(e),null;case 13:return BE(t,e,n);case 4:return Fm(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Oo(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),qv(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ut(Lu,i._currentValue),i._currentValue=o,s!==null)if(ai(s.value,o)){if(s.children===r.children&&!gn.current){e=Xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=zi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),up(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(me(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),up(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,To(e,n),r=Hn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=Jn(i,e.pendingProps),r=Jn(i.type,r),Yv(t,e,i,r,n);case 15:return UE(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),iu(t,e),e.tag=1,vn(i)?(t=!0,Au(e)):t=!1,To(e,n),uE(e,i,r),fp(e,i,r,n),mp(null,e,i,!0,t,n);case 19:return zE(t,e,n);case 22:return OE(t,e,n)}throw Error(me(156,e.tag))};function nx(t,e){return bS(t,e)}function fA(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new fA(t,e,n,i)}function Qm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hA(t){if(typeof t=="function")return Qm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_m)return 11;if(t===ym)return 14}return 2}function Rr(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ou(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Qm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ao:return as(n.children,r,s,e);case vm:o=8,r|=8;break;case Oh:return t=On(12,n,e,r|2),t.elementType=Oh,t.lanes=s,t;case kh:return t=On(13,n,e,r),t.elementType=kh,t.lanes=s,t;case Fh:return t=On(19,n,e,r),t.elementType=Fh,t.lanes=s,t;case dS:return gd(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cS:o=10;break e;case uS:o=9;break e;case _m:o=11;break e;case ym:o=14;break e;case sr:o=16,i=null;break e}throw Error(me(130,t==null?t:typeof t,""))}return e=On(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function as(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function gd(t,e,n,i){return t=On(22,t,i,e),t.elementType=dS,t.lanes=n,t.stateNode={isHidden:!1},t}function Nf(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function Df(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pA(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pf(0),this.expirationTimes=pf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function eg(t,e,n,i,r,s,o,a,l){return t=new pA(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},km(s),t}function mA(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ix(t){if(!t)return Nr;t=t._reactInternals;e:{if(As(t)!==t||t.tag!==1)throw Error(me(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(me(171))}if(t.tag===1){var n=t.type;if(vn(n))return nE(t,n,e)}return e}function rx(t,e,n,i,r,s,o,a,l){return t=eg(n,i,!0,t,r,s,o,a,l),t.context=ix(null),n=t.current,i=ln(),r=Tr(n),s=zi(i,r),s.callback=e??null,Mr(n,s,r),t.current.lanes=r,Cl(t,r,i),_n(t,i),t}function vd(t,e,n,i){var r=e.current,s=ln(),o=Tr(r);return n=ix(n),e.context===null?e.context=n:e.pendingContext=n,e=zi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Mr(r,e,o),t!==null&&(ri(t,r,o,s),eu(t,r,o)),o}function zu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function a_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function tg(t,e){a_(t,e),(t=t.alternate)&&a_(t,e)}function gA(){return null}var sx=typeof reportError=="function"?reportError:function(t){console.error(t)};function ng(t){this._internalRoot=t}_d.prototype.render=ng.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(me(409));vd(t,e,null,null)};_d.prototype.unmount=ng.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_s(function(){vd(null,t,null,null)}),e[ji]=null}};function _d(t){this._internalRoot=t}_d.prototype.unstable_scheduleHydration=function(t){if(t){var e=US();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&kS(t)}};function ig(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function l_(){}function vA(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=zu(o);s.call(c)}}var o=rx(e,i,t,0,null,!1,!1,"",l_);return t._reactRootContainer=o,t[ji]=o.current,ll(t.nodeType===8?t.parentNode:t),_s(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=zu(l);a.call(c)}}var l=eg(t,0,!1,null,null,!1,!1,"",l_);return t._reactRootContainer=l,t[ji]=l.current,ll(t.nodeType===8?t.parentNode:t),_s(function(){vd(e,l,n,i)}),l}function Sd(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=zu(o);a.call(l)}}vd(e,o,t,r)}else o=vA(n,e,t,r,i);return zu(o)}NS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Na(e.pendingLanes);n!==0&&(xm(e,n|1),_n(e,bt()),!(rt&6)&&(Bo=bt()+500,kr()))}break;case 13:_s(function(){var i=$i(t,1);if(i!==null){var r=ln();ri(i,t,1,r)}}),tg(t,1)}};Mm=function(t){if(t.tag===13){var e=$i(t,134217728);if(e!==null){var n=ln();ri(e,t,134217728,n)}tg(t,134217728)}};DS=function(t){if(t.tag===13){var e=Tr(t),n=$i(t,e);if(n!==null){var i=ln();ri(n,t,e,i)}tg(t,e)}};US=function(){return st};OS=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};qh=function(t,e,n){switch(e){case"input":if(Vh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ud(i);if(!r)throw Error(me(90));hS(i),Vh(i,r)}}}break;case"textarea":mS(t,n);break;case"select":e=n.value,e!=null&&Eo(t,!!n.multiple,e,!1)}};xS=Km;MS=_s;var _A={usingClientEntryPoint:!1,Events:[Pl,fo,ud,SS,ES,Km]},va={findFiberByHostInstance:is,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},yA={bundleType:va.bundleType,version:va.version,rendererPackageName:va.rendererPackageName,rendererConfig:va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=RS(t),t===null?null:t.stateNode},findFiberByHostInstance:va.findFiberByHostInstance||gA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{od=gc.inject(yA),mi=gc}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_A;Ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ig(e))throw Error(me(200));return mA(t,e,null,n)};Ln.createRoot=function(t,e){if(!ig(t))throw Error(me(299));var n=!1,i="",r=sx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=eg(t,1,!1,null,null,n,!1,i,r),t[ji]=e.current,ll(t.nodeType===8?t.parentNode:t),new ng(e)};Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(me(188)):(t=Object.keys(t).join(","),Error(me(268,t)));return t=RS(e),t=t===null?null:t.stateNode,t};Ln.flushSync=function(t){return _s(t)};Ln.hydrate=function(t,e,n){if(!yd(e))throw Error(me(200));return Sd(null,t,e,!0,n)};Ln.hydrateRoot=function(t,e,n){if(!ig(t))throw Error(me(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=sx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=rx(e,null,t,1,n??null,r,!1,s,o),t[ji]=e.current,ll(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new _d(e)};Ln.render=function(t,e,n){if(!yd(e))throw Error(me(200));return Sd(null,t,e,!1,n)};Ln.unmountComponentAtNode=function(t){if(!yd(t))throw Error(me(40));return t._reactRootContainer?(_s(function(){Sd(null,null,t,!1,function(){t._reactRootContainer=null,t[ji]=null})}),!0):!1};Ln.unstable_batchedUpdates=Km;Ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!yd(n))throw Error(me(200));if(t==null||t._reactInternals===void 0)throw Error(me(38));return Sd(t,e,n,!1,i)};Ln.version="18.2.0-next-9e3b772b8-20220608";function ox(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ox)}catch(t){console.error(t)}}ox(),rS.exports=Ln;var ax=rS.exports;const SA=Xy(ax);var lx,c_=ax;lx=c_.createRoot,c_.hydrateRoot;/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vl(){return vl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},vl.apply(this,arguments)}var mr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(mr||(mr={}));const u_="popstate";function EA(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Ap("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:cx(r)}return MA(e,n,null,t)}function Dt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function rg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xA(){return Math.random().toString(36).substr(2,8)}function d_(t,e){return{usr:t.state,key:t.key,idx:e}}function Ap(t,e,n,i){return n===void 0&&(n=null),vl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ea(e):e,{state:n,key:e&&e.key||i||xA()})}function cx(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ea(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function MA(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=mr.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(vl({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=mr.Pop;let m=u(),f=m==null?null:m-c;c=m,l&&l({action:a,location:v.location,delta:f})}function h(m,f){a=mr.Push;let _=Ap(v.location,m,f);n&&n(_,m),c=u()+1;let y=d_(_,c),S=v.createHref(_);try{o.pushState(y,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;r.location.assign(S)}s&&l&&l({action:a,location:v.location,delta:1})}function p(m,f){a=mr.Replace;let _=Ap(v.location,m,f);n&&n(_,m),c=u();let y=d_(_,c),S=v.createHref(_);o.replaceState(y,"",S),s&&l&&l({action:a,location:v.location,delta:0})}function g(m){let f=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof m=="string"?m:cx(m);return Dt(f,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,f)}let v={get action(){return a},get location(){return t(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(u_,d),l=m,()=>{r.removeEventListener(u_,d),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let f=g(m);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:p,go(m){return o.go(m)}};return v}var f_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(f_||(f_={}));function wA(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?ea(e):e,r=fx(i.pathname||"/",n);if(r==null)return null;let s=ux(t);TA(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=DA(s[a],kA(r));return o}function ux(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Dt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=ls([i,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(Dt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ux(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:IA(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of dx(s.path))r(s,o,l)}),e}function dx(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=dx(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function TA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:NA(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const RA=/^:\w+$/,AA=3,bA=2,CA=1,LA=10,PA=-2,h_=t=>t==="*";function IA(t,e){let n=t.split("/"),i=n.length;return n.some(h_)&&(i+=PA),e&&(i+=bA),n.filter(r=>!h_(r)).reduce((r,s)=>r+(RA.test(s)?AA:s===""?CA:LA),i)}function NA(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function DA(t,e){let{routesMeta:n}=t,i={},r="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=r==="/"?e:e.slice(r.length)||"/",u=UA({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!u)return null;Object.assign(i,u.params);let d=a.route;s.push({params:i,pathname:ls([r,u.pathname]),pathnameBase:GA(ls([r,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(r=ls([r,u.pathnameBase]))}return s}function UA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=OA(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,u,d)=>{if(u==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return c[u]=FA(a[d]||"",u),c},{}),pathname:s,pathnameBase:o,pattern:t}}function OA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),rg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(i.push(a),"/([^\\/]+)"));return t.endsWith("*")?(i.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function kA(t){try{return decodeURI(t)}catch(e){return rg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function FA(t,e){try{return decodeURIComponent(t)}catch(n){return rg(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function fx(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function BA(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ea(t):t;return{pathname:n?n.startsWith("/")?n:zA(n,e):e,search:WA(i),hash:jA(r)}}function zA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Uf(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function VA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function HA(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=ea(t):(r=vl({},t),Dt(!r.pathname||!r.pathname.includes("?"),Uf("?","pathname","search",r)),Dt(!r.pathname||!r.pathname.includes("#"),Uf("#","pathname","hash",r)),Dt(!r.search||!r.search.includes("#"),Uf("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(i||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=BA(r,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const ls=t=>t.join("/").replace(/\/\/+/g,"/"),GA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),WA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,jA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function $A(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const hx=["post","put","patch","delete"];new Set(hx);const XA=["get",...hx];new Set(XA);/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vu(){return Vu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Vu.apply(this,arguments)}const sg=ve.createContext(null),qA=ve.createContext(null),Ed=ve.createContext(null),xd=ve.createContext(null),ta=ve.createContext({outlet:null,matches:[],isDataRoute:!1}),px=ve.createContext(null);function Md(){return ve.useContext(xd)!=null}function mx(){return Md()||Dt(!1),ve.useContext(xd).location}function gx(t){ve.useContext(Ed).static||ve.useLayoutEffect(t)}function wd(){let{isDataRoute:t}=ve.useContext(ta);return t?ab():YA()}function YA(){Md()||Dt(!1);let t=ve.useContext(sg),{basename:e,navigator:n}=ve.useContext(Ed),{matches:i}=ve.useContext(ta),{pathname:r}=mx(),s=JSON.stringify(VA(i).map(l=>l.pathnameBase)),o=ve.useRef(!1);return gx(()=>{o.current=!0}),ve.useCallback(function(l,c){if(c===void 0&&(c={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let u=HA(l,JSON.parse(s),r,c.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:ls([e,u.pathname])),(c.replace?n.replace:n.push)(u,c.state,c)},[e,n,s,r,t])}function KA(t,e){return ZA(t,e)}function ZA(t,e,n){Md()||Dt(!1);let{navigator:i}=ve.useContext(Ed),{matches:r}=ve.useContext(ta),s=r[r.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=mx(),c;if(e){var u;let v=typeof e=="string"?ea(e):e;a==="/"||(u=v.pathname)!=null&&u.startsWith(a)||Dt(!1),c=v}else c=l;let d=c.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",p=wA(t,{pathname:h}),g=nb(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:ls([a,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:ls([a,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),r,n);return e&&g?ve.createElement(xd.Provider,{value:{location:Vu({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:mr.Pop}},g):g}function JA(){let t=ob(),e=$A(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return ve.createElement(ve.Fragment,null,ve.createElement("h2",null,"Unexpected Application Error!"),ve.createElement("h3",{style:{fontStyle:"italic"}},e),n?ve.createElement("pre",{style:r},n):null,s)}const QA=ve.createElement(JA,null);class eb extends ve.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?ve.createElement(ta.Provider,{value:this.props.routeContext},ve.createElement(px.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function tb(t){let{routeContext:e,match:n,children:i}=t,r=ve.useContext(sg);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),ve.createElement(ta.Provider,{value:e},i)}function nb(t,e,n){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var r;if((r=n)!=null&&r.errors)t=n.matches;else return null}let s=t,o=(i=n)==null?void 0:i.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Dt(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,c)=>{let u=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||QA);let h=e.concat(s.slice(0,c+1)),p=()=>{let g;return u?g=d:l.route.Component?g=ve.createElement(l.route.Component,null):l.route.element?g=l.route.element:g=a,ve.createElement(tb,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?ve.createElement(eb,{location:n.location,revalidation:n.revalidation,component:d,error:u,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var bp;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(bp||(bp={}));var _l;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(_l||(_l={}));function ib(t){let e=ve.useContext(sg);return e||Dt(!1),e}function rb(t){let e=ve.useContext(qA);return e||Dt(!1),e}function sb(t){let e=ve.useContext(ta);return e||Dt(!1),e}function vx(t){let e=sb(),n=e.matches[e.matches.length-1];return n.route.id||Dt(!1),n.route.id}function ob(){var t;let e=ve.useContext(px),n=rb(_l.UseRouteError),i=vx(_l.UseRouteError);return e||((t=n.errors)==null?void 0:t[i])}function ab(){let{router:t}=ib(bp.UseNavigateStable),e=vx(_l.UseNavigateStable),n=ve.useRef(!1);return gx(()=>{n.current=!0}),ve.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Vu({fromRouteId:e},s)))},[t,e])}function Ua(t){Dt(!1)}function lb(t){let{basename:e="/",children:n=null,location:i,navigationType:r=mr.Pop,navigator:s,static:o=!1}=t;Md()&&Dt(!1);let a=e.replace(/^\/*/,"/"),l=ve.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof i=="string"&&(i=ea(i));let{pathname:c="/",search:u="",hash:d="",state:h=null,key:p="default"}=i,g=ve.useMemo(()=>{let v=fx(c,a);return v==null?null:{location:{pathname:v,search:u,hash:d,state:h,key:p},navigationType:r}},[a,c,u,d,h,p,r]);return g==null?null:ve.createElement(Ed.Provider,{value:l},ve.createElement(xd.Provider,{children:n,value:g}))}function cb(t){let{children:e,location:n}=t;return KA(Cp(e),n)}var p_;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(p_||(p_={}));new Promise(()=>{});function Cp(t,e){e===void 0&&(e=[]);let n=[];return ve.Children.forEach(t,(i,r)=>{if(!ve.isValidElement(i))return;let s=[...e,r];if(i.type===ve.Fragment){n.push.apply(n,Cp(i.props.children,s));return}i.type!==Ua&&Dt(!1),!i.props.index||!i.props.children||Dt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Cp(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const ub="startTransition",m_=u1[ub];function db(t){let{basename:e,children:n,future:i,window:r}=t,s=ve.useRef();s.current==null&&(s.current=EA({window:r,v5Compat:!0}));let o=s.current,[a,l]=ve.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},u=ve.useCallback(d=>{c&&m_?m_(()=>l(d)):l(d)},[l,c]);return ve.useLayoutEffect(()=>o.listen(u),[o,u]),ve.createElement(lb,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}var g_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(g_||(g_={}));var v_;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(v_||(v_={}));function fb(t){const e=new Error(t);if(e.stack===void 0)try{throw e}catch{}return e}var hb=fb,Xe=hb;function pb(t){return!!t&&typeof t.then=="function"}var ht=pb;function mb(t,e){if(t!=null)return t;throw Xe(e??"Got unexpected null or undefined")}var vt=mb;function We(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class Td{getValue(){throw Xe("BaseLoadable")}toPromise(){throw Xe("BaseLoadable")}valueMaybe(){throw Xe("BaseLoadable")}valueOrThrow(){throw Xe(`Loadable expected value, but in "${this.state}" state`)}promiseMaybe(){throw Xe("BaseLoadable")}promiseOrThrow(){throw Xe(`Loadable expected promise, but in "${this.state}" state`)}errorMaybe(){throw Xe("BaseLoadable")}errorOrThrow(){throw Xe(`Loadable expected error, but in "${this.state}" state`)}is(e){return e.state===this.state&&e.contents===this.contents}map(e){throw Xe("BaseLoadable")}}class gb extends Td{constructor(e){super(),We(this,"state","hasValue"),We(this,"contents",void 0),this.contents=e}getValue(){return this.contents}toPromise(){return Promise.resolve(this.contents)}valueMaybe(){return this.contents}valueOrThrow(){return this.contents}promiseMaybe(){}errorMaybe(){}map(e){try{const n=e(this.contents);return ht(n)?ys(n):zo(n)?n:Nl(n)}catch(n){return ht(n)?ys(n.next(()=>this.map(e))):Rd(n)}}}class vb extends Td{constructor(e){super(),We(this,"state","hasError"),We(this,"contents",void 0),this.contents=e}getValue(){throw this.contents}toPromise(){return Promise.reject(this.contents)}valueMaybe(){}promiseMaybe(){}errorMaybe(){return this.contents}errorOrThrow(){return this.contents}map(e){return this}}class _x extends Td{constructor(e){super(),We(this,"state","loading"),We(this,"contents",void 0),this.contents=e}getValue(){throw this.contents}toPromise(){return this.contents}valueMaybe(){}promiseMaybe(){return this.contents}promiseOrThrow(){return this.contents}errorMaybe(){}map(e){return ys(this.contents.then(n=>{const i=e(n);if(zo(i)){const r=i;switch(r.state){case"hasValue":return r.contents;case"hasError":throw r.contents;case"loading":return r.contents}}return i}).catch(n=>{if(ht(n))return n.then(()=>this.map(e).contents);throw n}))}}function Nl(t){return Object.freeze(new gb(t))}function Rd(t){return Object.freeze(new vb(t))}function ys(t){return Object.freeze(new _x(t))}function yx(){return Object.freeze(new _x(new Promise(()=>{})))}function _b(t){return t.every(e=>e.state==="hasValue")?Nl(t.map(e=>e.contents)):t.some(e=>e.state==="hasError")?Rd(vt(t.find(e=>e.state==="hasError"),"Invalid loadable passed to loadableAll").contents):ys(Promise.all(t.map(e=>e.contents)))}function Sx(t){const n=(Array.isArray(t)?t:Object.getOwnPropertyNames(t).map(r=>t[r])).map(r=>zo(r)?r:ht(r)?ys(r):Nl(r)),i=_b(n);return Array.isArray(t)?i:i.map(r=>Object.getOwnPropertyNames(t).reduce((s,o,a)=>({...s,[o]:r[a]}),{}))}function zo(t){return t instanceof Td}const yb={of:t=>ht(t)?ys(t):zo(t)?t:Nl(t),error:t=>Rd(t),loading:()=>yx(),all:Sx,isLoadable:zo};var bs={loadableWithValue:Nl,loadableWithError:Rd,loadableWithPromise:ys,loadableLoading:yx,loadableAll:Sx,isLoadable:zo,RecoilLoadable:yb},Sb=bs.loadableWithValue,Eb=bs.loadableWithError,xb=bs.loadableWithPromise,Mb=bs.loadableLoading,wb=bs.loadableAll,Tb=bs.isLoadable,Rb=bs.RecoilLoadable,Dl=Object.freeze({__proto__:null,loadableWithValue:Sb,loadableWithError:Eb,loadableWithPromise:xb,loadableLoading:Mb,loadableAll:wb,isLoadable:Tb,RecoilLoadable:Rb});const Lp={RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED:!0,RECOIL_GKS_ENABLED:new Set(["recoil_hamt_2020","recoil_sync_external_store","recoil_suppress_rerender_in_callback","recoil_memory_managament_2020"])};function Ab(t,e){var n,i;const r=(n=process.env[t])===null||n===void 0||(i=n.toLowerCase())===null||i===void 0?void 0:i.trim();if(r==null||r==="")return;if(!["true","false"].includes(r))throw Xe(`({}).${t} value must be 'true', 'false', or empty: ${r}`);e(r==="true")}function bb(t,e){var n;const i=(n=process.env[t])===null||n===void 0?void 0:n.trim();i==null||i===""||e(i.split(/\s*,\s*|\s+/))}function Cb(){var t;typeof process>"u"||((t=process)===null||t===void 0?void 0:t.env)!=null&&(Ab("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED",e=>{Lp.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=e}),bb("RECOIL_GKS_ENABLED",e=>{e.forEach(n=>{Lp.RECOIL_GKS_ENABLED.add(n)})}))}Cb();var na=Lp;function Ad(t){return na.RECOIL_GKS_ENABLED.has(t)}Ad.setPass=t=>{na.RECOIL_GKS_ENABLED.add(t)};Ad.setFail=t=>{na.RECOIL_GKS_ENABLED.delete(t)};Ad.clear=()=>{na.RECOIL_GKS_ENABLED.clear()};var at=Ad;function Lb(t,e,{error:n}={}){return null}var Pb=Lb,og=Pb,Of,kf,Ff;const Ib=(Of=mt.createMutableSource)!==null&&Of!==void 0?Of:mt.unstable_createMutableSource,Ex=(kf=mt.useMutableSource)!==null&&kf!==void 0?kf:mt.unstable_useMutableSource,xx=(Ff=mt.useSyncExternalStore)!==null&&Ff!==void 0?Ff:mt.unstable_useSyncExternalStore;function Nb(){var t;const{ReactCurrentDispatcher:e,ReactCurrentOwner:n}=mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;return((t=e==null?void 0:e.current)!==null&&t!==void 0?t:n.currentDispatcher).useSyncExternalStore!=null}function Db(){return at("recoil_transition_support")?{mode:"TRANSITION_SUPPORT",early:!0,concurrent:!0}:at("recoil_sync_external_store")&&xx!=null?{mode:"SYNC_EXTERNAL_STORE",early:!0,concurrent:!1}:at("recoil_mutable_source")&&Ex!=null&&typeof window<"u"&&!window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE?at("recoil_suppress_rerender_in_callback")?{mode:"MUTABLE_SOURCE",early:!0,concurrent:!0}:{mode:"MUTABLE_SOURCE",early:!1,concurrent:!1}:at("recoil_suppress_rerender_in_callback")?{mode:"LEGACY",early:!0,concurrent:!1}:{mode:"LEGACY",early:!1,concurrent:!1}}function Ub(){return!1}var Ul={createMutableSource:Ib,useMutableSource:Ex,useSyncExternalStore:xx,currentRendererSupportsUseSyncExternalStore:Nb,reactMode:Db,isFastRefreshEnabled:Ub};class ag{constructor(e){We(this,"key",void 0),this.key=e}toJSON(){return{key:this.key}}}class Mx extends ag{}class wx extends ag{}function Ob(t){return t instanceof Mx||t instanceof wx}var bd={AbstractRecoilValue:ag,RecoilState:Mx,RecoilValueReadOnly:wx,isRecoilValue:Ob},kb=bd.AbstractRecoilValue,Fb=bd.RecoilState,Bb=bd.RecoilValueReadOnly,zb=bd.isRecoilValue,Vo=Object.freeze({__proto__:null,AbstractRecoilValue:kb,RecoilState:Fb,RecoilValueReadOnly:Bb,isRecoilValue:zb});function Vb(t,e){return function*(){let n=0;for(const i of t)yield e(i,n++)}()}var Cd=Vb;class Tx{}const Hb=new Tx,Ss=new Map,lg=new Map;function Gb(t){return Cd(t,e=>vt(lg.get(e)))}function Wb(t){if(Ss.has(t)){const e=`Duplicate atom key "${t}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;console.warn(e)}}function jb(t){na.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED&&Wb(t.key),Ss.set(t.key,t);const e=t.set==null?new Vo.RecoilValueReadOnly(t.key):new Vo.RecoilState(t.key);return lg.set(t.key,e),e}class Rx extends Error{}function $b(t){const e=Ss.get(t);if(e==null)throw new Rx(`Missing definition for RecoilValue: "${t}""`);return e}function Xb(t){return Ss.get(t)}const Hu=new Map;function qb(t){var e;if(!at("recoil_memory_managament_2020"))return;const n=Ss.get(t);if(n!=null&&(e=n.shouldDeleteConfigOnRelease)!==null&&e!==void 0&&e.call(n)){var i;Ss.delete(t),(i=Ax(t))===null||i===void 0||i(),Hu.delete(t)}}function Yb(t,e){at("recoil_memory_managament_2020")&&(e===void 0?Hu.delete(t):Hu.set(t,e))}function Ax(t){return Hu.get(t)}var Sn={nodes:Ss,recoilValues:lg,registerNode:jb,getNode:$b,getNodeMaybe:Xb,deleteNodeConfigIfPossible:qb,setConfigDeletionHandler:Yb,getConfigDeletionHandler:Ax,recoilValuesForKeys:Gb,NodeMissingError:Rx,DefaultValue:Tx,DEFAULT_VALUE:Hb};function Kb(t,e){e()}var Zb={enqueueExecution:Kb};function Jb(t,e){return e={exports:{}},t(e,e.exports),e.exports}var Qb=Jb(function(t){var e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},n={},i=5,r=Math.pow(2,i),s=r-1,o=r/2,a=r/4,l={},c=function(P){return function(){return P}},u=n.hash=function(D){var P=typeof D>"u"?"undefined":e(D);if(P==="number")return D;P!=="string"&&(D+="");for(var K=0,de=0,C=D.length;de<C;++de){var J=D.charCodeAt(de);K=(K<<5)-K+J|0}return K},d=function(P){return P-=P>>1&1431655765,P=(P&858993459)+(P>>2&858993459),P=P+(P>>4)&252645135,P+=P>>8,P+=P>>16,P&127},h=function(P,K){return K>>>P&s},p=function(P){return 1<<P},g=function(P,K){return d(P&K-1)},v=function(P,K,de,C){var J=C;if(!P){var F=C.length;J=new Array(F);for(var ie=0;ie<F;++ie)J[ie]=C[ie]}return J[K]=de,J},m=function(P,K,de){var C=de.length-1,J=0,F=0,ie=de;if(P)J=F=K;else for(ie=new Array(C);J<K;)ie[F++]=de[J++];for(++J;J<=C;)ie[F++]=de[J++];return P&&(ie.length=C),ie},f=function(P,K,de,C){var J=C.length;if(P){for(var F=J;F>=K;)C[F--]=C[F];return C[K]=de,C}for(var ie=0,se=0,xe=new Array(J+1);ie<K;)xe[se++]=C[ie++];for(xe[K]=de;ie<J;)xe[++se]=C[ie++];return xe},_=1,y=2,S=3,E=4,w={__hamt_isEmpty:!0},b=function(P){return P===w||P&&P.__hamt_isEmpty},I=function(P,K,de,C){return{type:_,edit:P,hash:K,key:de,value:C,_modify:B}},x=function(P,K,de){return{type:y,edit:P,hash:K,children:de,_modify:q}},R=function(P,K,de){return{type:S,edit:P,mask:K,children:de,_modify:W}},te=function(P,K,de){return{type:E,edit:P,size:K,children:de,_modify:ce}},ae=function(P){return P===w||P.type===_||P.type===y},k=function(P,K,de,C,J){for(var F=[],ie=C,se=0,xe=0;ie;++xe)ie&1&&(F[xe]=J[se++]),ie>>>=1;return F[K]=de,te(P,se+1,F)},G=function(P,K,de,C){for(var J=new Array(K-1),F=0,ie=0,se=0,xe=C.length;se<xe;++se)if(se!==de){var Ue=C[se];Ue&&!b(Ue)&&(J[F++]=Ue,ie|=1<<se)}return R(P,ie,J)},Z=function D(P,K,de,C,J,F){if(de===J)return x(P,de,[F,C]);var ie=h(K,de),se=h(K,J);return R(P,p(ie)|p(se),ie===se?[D(P,K+i,de,C,J,F)]:ie<se?[C,F]:[F,C])},ue=function(P,K,de,C,J,F,ie,se){for(var xe=J.length,Ue=0;Ue<xe;++Ue){var et=J[Ue];if(de(ie,et.key)){var lt=et.value,tt=F(lt);return tt===lt?J:tt===l?(--se.value,m(P,Ue,J)):v(P,Ue,I(K,C,ie,tt),J)}}var Mt=F();return Mt===l?J:(++se.value,v(P,xe,I(K,C,ie,Mt),J))},Q=function(P,K){return P===K.edit},B=function(P,K,de,C,J,F,ie){if(K(F,this.key)){var se=C(this.value);return se===this.value?this:se===l?(--ie.value,w):Q(P,this)?(this.value=se,this):I(P,J,F,se)}var xe=C();return xe===l?this:(++ie.value,Z(P,de,this.hash,this,J,I(P,J,F,xe)))},q=function(P,K,de,C,J,F,ie){if(J===this.hash){var se=Q(P,this),xe=ue(se,P,K,this.hash,this.children,C,F,ie);return xe===this.children?this:xe.length>1?x(P,this.hash,xe):xe[0]}var Ue=C();return Ue===l?this:(++ie.value,Z(P,de,this.hash,this,J,I(P,J,F,Ue)))},W=function(P,K,de,C,J,F,ie){var se=this.mask,xe=this.children,Ue=h(de,J),et=p(Ue),lt=g(se,et),tt=se&et,Mt=tt?xe[lt]:w,wt=Mt._modify(P,K,de+i,C,J,F,ie);if(Mt===wt)return this;var Hr=Q(P,this),Zi=se,Gr=void 0;if(tt&&b(wt)){if(Zi&=~et,!Zi)return w;if(xe.length<=2&&ae(xe[lt^1]))return xe[lt^1];Gr=m(Hr,lt,xe)}else if(!tt&&!b(wt)){if(xe.length>=o)return k(P,Ue,wt,se,xe);Zi|=et,Gr=f(Hr,lt,wt,xe)}else Gr=v(Hr,lt,wt,xe);return Hr?(this.mask=Zi,this.children=Gr,this):R(P,Zi,Gr)},ce=function(P,K,de,C,J,F,ie){var se=this.size,xe=this.children,Ue=h(de,J),et=xe[Ue],lt=(et||w)._modify(P,K,de+i,C,J,F,ie);if(et===lt)return this;var tt=Q(P,this),Mt=void 0;if(b(et)&&!b(lt))++se,Mt=v(tt,Ue,lt,xe);else if(!b(et)&&b(lt)){if(--se,se<=a)return G(P,se,Ue,xe);Mt=v(tt,Ue,w,xe)}else Mt=v(tt,Ue,lt,xe);return tt?(this.size=se,this.children=Mt,this):te(P,se,Mt)};w._modify=function(D,P,K,de,C,J,F){var ie=de();return ie===l?w:(++F.value,I(D,C,J,ie))};function M(D,P,K,de,C){this._editable=D,this._edit=P,this._config=K,this._root=de,this._size=C}M.prototype.setTree=function(D,P){return this._editable?(this._root=D,this._size=P,this):D===this._root?this:new M(this._editable,this._edit,this._config,D,P)};var U=n.tryGetHash=function(D,P,K,de){for(var C=de._root,J=0,F=de._config.keyEq;;)switch(C.type){case _:return F(K,C.key)?C.value:D;case y:{if(P===C.hash)for(var ie=C.children,se=0,xe=ie.length;se<xe;++se){var Ue=ie[se];if(F(K,Ue.key))return Ue.value}return D}case S:{var et=h(J,P),lt=p(et);if(C.mask&lt){C=C.children[g(C.mask,lt)],J+=i;break}return D}case E:{if(C=C.children[h(J,P)],C){J+=i;break}return D}default:return D}};M.prototype.tryGetHash=function(D,P,K){return U(D,P,K,this)};var O=n.tryGet=function(D,P,K){return U(D,K._config.hash(P),P,K)};M.prototype.tryGet=function(D,P){return O(D,P,this)};var Y=n.getHash=function(D,P,K){return U(void 0,D,P,K)};M.prototype.getHash=function(D,P){return Y(D,P,this)},n.get=function(D,P){return U(void 0,P._config.hash(D),D,P)},M.prototype.get=function(D,P){return O(P,D,this)};var X=n.has=function(D,P,K){return U(l,D,P,K)!==l};M.prototype.hasHash=function(D,P){return X(D,P,this)};var pe=n.has=function(D,P){return X(P._config.hash(D),D,P)};M.prototype.has=function(D){return pe(D,this)};var Se=function(P,K){return P===K};n.make=function(D){return new M(0,0,{keyEq:D&&D.keyEq||Se,hash:D&&D.hash||u},w,0)},n.empty=n.make();var he=n.isEmpty=function(D){return D&&!!b(D._root)};M.prototype.isEmpty=function(){return he(this)};var De=n.modifyHash=function(D,P,K,de){var C={value:de._size},J=de._root._modify(de._editable?de._edit:NaN,de._config.keyEq,0,D,P,K,C);return de.setTree(J,C.value)};M.prototype.modifyHash=function(D,P,K){return De(K,D,P,this)};var Pe=n.modify=function(D,P,K){return De(D,K._config.hash(P),P,K)};M.prototype.modify=function(D,P){return Pe(P,D,this)};var z=n.setHash=function(D,P,K,de){return De(c(K),D,P,de)};M.prototype.setHash=function(D,P,K){return z(D,P,K,this)};var Be=n.set=function(D,P,K){return z(K._config.hash(D),D,P,K)};M.prototype.set=function(D,P){return Be(D,P,this)};var Re=c(l),Ie=n.removeHash=function(D,P,K){return De(Re,D,P,K)};M.prototype.removeHash=M.prototype.deleteHash=function(D,P){return Ie(D,P,this)};var Me=n.remove=function(D,P){return Ie(P._config.hash(D),D,P)};M.prototype.remove=M.prototype.delete=function(D){return Me(D,this)};var ze=n.beginMutation=function(D){return new M(D._editable+1,D._edit+1,D._config,D._root,D._size)};M.prototype.beginMutation=function(){return ze(this)};var He=n.endMutation=function(D){return D._editable=D._editable&&D._editable-1,D};M.prototype.endMutation=function(){return He(this)};var ke=n.mutate=function(D,P){var K=ze(P);return D(K),He(K)};M.prototype.mutate=function(D){return ke(D,this)};var Qe=function(P){return P&&xt(P[0],P[1],P[2],P[3],P[4])},xt=function(P,K,de,C,J){for(;de<P;){var F=K[de++];if(F&&!b(F))return Rt(F,C,[P,K,de,C,J])}return Qe(J)},Rt=function(P,K,de){switch(P.type){case _:return{value:K(P),rest:de};case y:case E:case S:var C=P.children;return xt(C.length,C,0,K,de);default:return Qe(de)}},L={done:!0};function T(D){this.v=D}T.prototype.next=function(){if(!this.v)return L;var D=this.v;return this.v=Qe(D.rest),D},T.prototype[Symbol.iterator]=function(){return this};var ne=function(P,K){return new T(Rt(P._root,K))},ye=function(P){return[P.key,P.value]},_e=n.entries=function(D){return ne(D,ye)};M.prototype.entries=M.prototype[Symbol.iterator]=function(){return _e(this)};var N=function(P){return P.key},fe=n.keys=function(D){return ne(D,N)};M.prototype.keys=function(){return fe(this)};var ge=function(P){return P.value},ee=n.values=M.prototype.values=function(D){return ne(D,ge)};M.prototype.values=function(){return ee(this)};var Te=n.fold=function(D,P,K){var de=K._root;if(de.type===_)return D(P,de.value,de.key);for(var C=[de.children],J=void 0;J=C.pop();)for(var F=0,ie=J.length;F<ie;){var se=J[F++];se&&se.type&&(se.type===_?P=D(P,se.value,se.key):C.push(se.children))}return P};M.prototype.fold=function(D,P){return Te(D,P,this)};var Le=n.forEach=function(D,P){return Te(function(K,de,C){return D(de,C,P)},null,P)};M.prototype.forEach=function(D){return Le(D,this)};var be=n.count=function(D){return D._size};M.prototype.count=function(){return be(this)},Object.defineProperty(M.prototype,"size",{get:M.prototype.count}),t.exports?t.exports=n:(void 0).hamt=n});class eC{constructor(e){We(this,"_map",void 0),this._map=new Map(e==null?void 0:e.entries())}keys(){return this._map.keys()}entries(){return this._map.entries()}get(e){return this._map.get(e)}has(e){return this._map.has(e)}set(e,n){return this._map.set(e,n),this}delete(e){return this._map.delete(e),this}clone(){return ug(this)}toMap(){return new Map(this._map)}}class cg{constructor(e){if(We(this,"_hamt",Qb.empty.beginMutation()),e instanceof cg){const n=e._hamt.endMutation();e._hamt=n.beginMutation(),this._hamt=n.beginMutation()}else if(e)for(const[n,i]of e.entries())this._hamt.set(n,i)}keys(){return this._hamt.keys()}entries(){return this._hamt.entries()}get(e){return this._hamt.get(e)}has(e){return this._hamt.has(e)}set(e,n){return this._hamt.set(e,n),this}delete(e){return this._hamt.delete(e),this}clone(){return ug(this)}toMap(){return new Map(this._hamt)}}function ug(t){return at("recoil_hamt_2020")?new cg(t):new eC(t)}var tC={persistentMap:ug},nC=tC.persistentMap,iC=Object.freeze({__proto__:null,persistentMap:nC});function rC(t,...e){const n=new Set;e:for(const i of t){for(const r of e)if(r.has(i))continue e;n.add(i)}return n}var Ya=rC;function sC(t,e){const n=new Map;return t.forEach((i,r)=>{n.set(r,e(i,r))}),n}var Gu=sC;function oC(){return{nodeDeps:new Map,nodeToNodeSubscriptions:new Map}}function aC(t){return{nodeDeps:Gu(t.nodeDeps,e=>new Set(e)),nodeToNodeSubscriptions:Gu(t.nodeToNodeSubscriptions,e=>new Set(e))}}function Bf(t,e,n,i){const{nodeDeps:r,nodeToNodeSubscriptions:s}=n,o=r.get(t);if(o&&i&&o!==i.nodeDeps.get(t))return;r.set(t,e);const a=o==null?e:Ya(e,o);for(const l of a)s.has(l)||s.set(l,new Set),vt(s.get(l)).add(t);if(o){const l=Ya(o,e);for(const c of l){if(!s.has(c))return;const u=vt(s.get(c));u.delete(t),u.size===0&&s.delete(c)}}}function lC(t,e,n,i){var r,s,o,a;const l=n.getState();i===l.currentTree.version||i===((r=l.nextTree)===null||r===void 0?void 0:r.version)||((s=l.previousTree)===null||s===void 0||s.version);const c=n.getGraph(i);if(Bf(t,e,c),i===((o=l.previousTree)===null||o===void 0?void 0:o.version)){const d=n.getGraph(l.currentTree.version);Bf(t,e,d,c)}if(i===((a=l.previousTree)===null||a===void 0?void 0:a.version)||i===l.currentTree.version){var u;const d=(u=l.nextTree)===null||u===void 0?void 0:u.version;if(d!==void 0){const h=n.getGraph(d);Bf(t,e,h,c)}}}var Ol={cloneGraph:aC,graph:oC,saveDepsToStore:lC};let cC=0;const uC=()=>cC++;let dC=0;const fC=()=>dC++;let hC=0;const pC=()=>hC++;var Ld={getNextTreeStateVersion:uC,getNextStoreID:fC,getNextComponentID:pC};const{persistentMap:__}=iC,{graph:mC}=Ol,{getNextTreeStateVersion:bx}=Ld;function Cx(){const t=bx();return{version:t,stateID:t,transactionMetadata:{},dirtyAtoms:new Set,atomValues:__(),nonvalidatedAtoms:__()}}function gC(){const t=Cx();return{currentTree:t,nextTree:null,previousTree:null,commitDepth:0,knownAtoms:new Set,knownSelectors:new Set,transactionSubscriptions:new Map,nodeTransactionSubscriptions:new Map,nodeToComponentSubscriptions:new Map,queuedComponentCallbacks_DEPRECATED:[],suspendedComponentResolvers:new Set,graphsByVersion:new Map().set(t.version,mC()),retention:{referenceCounts:new Map,nodesRetainedByZone:new Map,retainablesToCheckForRelease:new Set},nodeCleanupFunctions:new Map}}var Lx={makeEmptyTreeState:Cx,makeEmptyStoreState:gC,getNextTreeStateVersion:bx};class Px{}function vC(){return new Px}var Pd={RetentionZone:Px,retentionZone:vC};function _C(t,e){const n=new Set(t);return n.add(e),n}function yC(t,e){const n=new Set(t);return n.delete(e),n}function SC(t,e,n){const i=new Map(t);return i.set(e,n),i}function EC(t,e,n){const i=new Map(t);return i.set(e,n(i.get(e))),i}function xC(t,e){const n=new Map(t);return n.delete(e),n}function MC(t,e){const n=new Map(t);return e.forEach(i=>n.delete(i)),n}var Ix={setByAddingToSet:_C,setByDeletingFromSet:yC,mapBySettingInMap:SC,mapByUpdatingInMap:EC,mapByDeletingFromMap:xC,mapByDeletingMultipleFromMap:MC};function*wC(t,e){let n=0;for(const i of t)e(i,n++)&&(yield i)}var dg=wC;function TC(t,e){return new Proxy(t,{get:(i,r)=>(!(r in i)&&r in e&&(i[r]=e[r]()),i[r]),ownKeys:i=>Object.keys(i)})}var Nx=TC;const{getNode:kl,getNodeMaybe:RC,recoilValuesForKeys:y_}=Sn,{RetentionZone:S_}=Pd,{setByAddingToSet:AC}=Ix,bC=Object.freeze(new Set);class CC extends Error{}function LC(t,e,n){if(!at("recoil_memory_managament_2020"))return()=>{};const{nodesRetainedByZone:i}=t.getState().retention;function r(s){let o=i.get(s);o||i.set(s,o=new Set),o.add(e)}if(n instanceof S_)r(n);else if(Array.isArray(n))for(const s of n)r(s);return()=>{if(!at("recoil_memory_managament_2020"))return;const{retention:s}=t.getState();function o(a){const l=s.nodesRetainedByZone.get(a);l==null||l.delete(e),l&&l.size===0&&s.nodesRetainedByZone.delete(a)}if(n instanceof S_)o(n);else if(Array.isArray(n))for(const a of n)o(a)}}function fg(t,e,n,i){const r=t.getState();if(r.nodeCleanupFunctions.has(n))return;const s=kl(n),o=LC(t,n,s.retainedBy),a=s.init(t,e,i);r.nodeCleanupFunctions.set(n,()=>{a(),o()})}function PC(t,e,n){fg(t,t.getState().currentTree,e,n)}function IC(t,e){var n;const i=t.getState();(n=i.nodeCleanupFunctions.get(e))===null||n===void 0||n(),i.nodeCleanupFunctions.delete(e)}function NC(t,e,n){return fg(t,e,n,"get"),kl(n).get(t,e)}function Dx(t,e,n){return kl(n).peek(t,e)}function DC(t,e,n){var i;const r=RC(e);return r==null||(i=r.invalidate)===null||i===void 0||i.call(r,t),{...t,atomValues:t.atomValues.clone().delete(e),nonvalidatedAtoms:t.nonvalidatedAtoms.clone().set(e,n),dirtyAtoms:AC(t.dirtyAtoms,e)}}function UC(t,e,n,i){const r=kl(n);if(r.set==null)throw new CC(`Attempt to set read-only RecoilValue: ${n}`);const s=r.set;return fg(t,e,n,"set"),s(t,e,i)}function OC(t,e,n){const i=t.getState(),r=t.getGraph(e.version),s=kl(n).nodeType;return Nx({type:s},{loadable:()=>Dx(t,e,n),isActive:()=>i.knownAtoms.has(n)||i.knownSelectors.has(n),isSet:()=>s==="selector"?!1:e.atomValues.has(n),isModified:()=>e.dirtyAtoms.has(n),deps:()=>{var o;return y_((o=r.nodeDeps.get(n))!==null&&o!==void 0?o:[])},subscribers:()=>{var o,a;return{nodes:y_(dg(Ux(t,e,new Set([n])),l=>l!==n)),components:Cd((o=(a=i.nodeToComponentSubscriptions.get(n))===null||a===void 0?void 0:a.values())!==null&&o!==void 0?o:[],([l])=>({name:l}))}}})}function Ux(t,e,n){const i=new Set,r=Array.from(n),s=t.getGraph(e.version);for(let a=r.pop();a;a=r.pop()){var o;i.add(a);const l=(o=s.nodeToNodeSubscriptions.get(a))!==null&&o!==void 0?o:bC;for(const c of l)i.has(c)||r.push(c)}return i}var Fr={getNodeLoadable:NC,peekNodeLoadable:Dx,setNodeValue:UC,initializeNode:PC,cleanUpNode:IC,setUnvalidatedAtomValue_DEPRECATED:DC,peekNodeInfo:OC,getDownstreamNodes:Ux};let Ox=null;function kC(t){Ox=t}function FC(){var t;(t=Ox)===null||t===void 0||t()}var kx={setInvalidateMemoizedSnapshot:kC,invalidateMemoizedSnapshot:FC};const{getDownstreamNodes:BC,getNodeLoadable:Fx,setNodeValue:zC}=Fr,{getNextComponentID:VC}=Ld,{getNode:HC,getNodeMaybe:Bx}=Sn,{DefaultValue:hg}=Sn,{reactMode:GC}=Ul,{AbstractRecoilValue:WC,RecoilState:jC,RecoilValueReadOnly:$C,isRecoilValue:XC}=Vo,{invalidateMemoizedSnapshot:qC}=kx;function YC(t,{key:e},n=t.getState().currentTree){var i,r;const s=t.getState();n.version===s.currentTree.version||n.version===((i=s.nextTree)===null||i===void 0?void 0:i.version)||(n.version,(r=s.previousTree)===null||r===void 0||r.version);const o=Fx(t,n,e);return o.state==="loading"&&o.contents.catch(()=>{}),o}function KC(t,e){const n=t.clone();return e.forEach((i,r)=>{i.state==="hasValue"&&i.contents instanceof hg?n.delete(r):n.set(r,i)}),n}function ZC(t,e,{key:n},i){if(typeof i=="function"){const r=Fx(t,e,n);if(r.state==="loading"){const s=`Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;throw Xe(s)}else if(r.state==="hasError")throw r.contents;return i(r.contents)}else return i}function JC(t,e,n){if(n.type==="set"){const{recoilValue:r,valueOrUpdater:s}=n,o=ZC(t,e,r,s),a=zC(t,e,r.key,o);for(const[l,c]of a.entries())Pp(e,l,c)}else if(n.type==="setLoadable"){const{recoilValue:{key:r},loadable:s}=n;Pp(e,r,s)}else if(n.type==="markModified"){const{recoilValue:{key:r}}=n;e.dirtyAtoms.add(r)}else if(n.type==="setUnvalidated"){var i;const{recoilValue:{key:r},unvalidatedValue:s}=n,o=Bx(r);o==null||(i=o.invalidate)===null||i===void 0||i.call(o,e),e.atomValues.delete(r),e.nonvalidatedAtoms.set(r,s),e.dirtyAtoms.add(r)}else og(`Unknown action ${n.type}`)}function Pp(t,e,n){n.state==="hasValue"&&n.contents instanceof hg?t.atomValues.delete(e):t.atomValues.set(e,n),t.dirtyAtoms.add(e),t.nonvalidatedAtoms.delete(e)}function zx(t,e){t.replaceState(n=>{const i=Vx(n);for(const r of e)JC(t,i,r);return Hx(t,i),qC(),i})}function Id(t,e){if(Ka.length){const n=Ka[Ka.length-1];let i=n.get(t);i||n.set(t,i=[]),i.push(e)}else zx(t,[e])}const Ka=[];function QC(){const t=new Map;return Ka.push(t),()=>{for(const[e,n]of t)zx(e,n);Ka.pop()}}function Vx(t){return{...t,atomValues:t.atomValues.clone(),nonvalidatedAtoms:t.nonvalidatedAtoms.clone(),dirtyAtoms:new Set(t.dirtyAtoms)}}function Hx(t,e){const n=BC(t,e,e.dirtyAtoms);for(const s of n){var i,r;(i=Bx(s))===null||i===void 0||(r=i.invalidate)===null||r===void 0||r.call(i,e)}}function Gx(t,e,n){Id(t,{type:"set",recoilValue:e,valueOrUpdater:n})}function e2(t,e,n){if(n instanceof hg)return Gx(t,e,n);Id(t,{type:"setLoadable",recoilValue:e,loadable:n})}function t2(t,e){Id(t,{type:"markModified",recoilValue:e})}function n2(t,e,n){Id(t,{type:"setUnvalidated",recoilValue:e,unvalidatedValue:n})}function i2(t,{key:e},n,i=null){const r=VC(),s=t.getState();s.nodeToComponentSubscriptions.has(e)||s.nodeToComponentSubscriptions.set(e,new Map),vt(s.nodeToComponentSubscriptions.get(e)).set(r,[i??"<not captured>",n]);const o=GC();if(o.early&&(o.mode==="LEGACY"||o.mode==="MUTABLE_SOURCE")){const a=t.getState().nextTree;a&&a.dirtyAtoms.has(e)&&n(a)}return{release:()=>{const a=t.getState(),l=a.nodeToComponentSubscriptions.get(e);l===void 0||!l.has(r)||(l.delete(r),l.size===0&&a.nodeToComponentSubscriptions.delete(e))}}}function r2(t,e){var n;const{currentTree:i}=t.getState(),r=HC(e.key);(n=r.clearCache)===null||n===void 0||n.call(r,t,i)}var Si={RecoilValueReadOnly:$C,AbstractRecoilValue:WC,RecoilState:jC,getRecoilValueAsLoadable:YC,setRecoilValue:Gx,setRecoilValueLoadable:e2,markRecoilValueModified:t2,setUnvalidatedRecoilValue:n2,subscribeToRecoilValue:i2,isRecoilValue:XC,applyAtomValueWrites:KC,batchStart:QC,writeLoadableToTreeState:Pp,invalidateDownstreams:Hx,copyTreeState:Vx,refreshRecoilValue:r2};function s2(t,e,n){const i=t.entries();let r=i.next();for(;!r.done;){const s=r.value;if(e.call(n,s[1],s[0],t))return!0;r=i.next()}return!1}var o2=s2;const{cleanUpNode:a2}=Fr,{deleteNodeConfigIfPossible:l2,getNode:Wx}=Sn,{RetentionZone:jx}=Pd,c2=12e4,$x=new Set;function Xx(t,e){const n=t.getState(),i=n.currentTree;if(n.nextTree)return;const r=new Set;for(const o of e)if(o instanceof jx)for(const a of h2(n,o))r.add(a);else r.add(o);const s=u2(t,r);for(const o of s)f2(t,i,o)}function u2(t,e){const n=t.getState(),i=n.currentTree,r=t.getGraph(i.version),s=new Set,o=new Set;return a(e),s;function a(l){const c=new Set,u=d2(t,i,l,s,o);for(const g of u){var d;if(Wx(g).retainedBy==="recoilRoot"){o.add(g);continue}if(((d=n.retention.referenceCounts.get(g))!==null&&d!==void 0?d:0)>0){o.add(g);continue}if(qx(g).some(m=>n.retention.referenceCounts.get(m))){o.add(g);continue}const v=r.nodeToNodeSubscriptions.get(g);if(v&&o2(v,m=>o.has(m))){o.add(g);continue}s.add(g),c.add(g)}const h=new Set;for(const g of c)for(const v of(p=r.nodeDeps.get(g))!==null&&p!==void 0?p:$x){var p;s.has(v)||h.add(v)}h.size&&a(h)}}function d2(t,e,n,i,r){const s=t.getGraph(e.version),o=[],a=new Set;for(;n.size>0;)l(vt(n.values().next().value));return o;function l(c){if(i.has(c)||r.has(c)){n.delete(c);return}if(a.has(c))return;const u=s.nodeToNodeSubscriptions.get(c);if(u)for(const d of u)l(d);a.add(c),n.delete(c),o.push(c)}}function f2(t,e,n){if(!at("recoil_memory_managament_2020"))return;a2(t,n);const i=t.getState();i.knownAtoms.delete(n),i.knownSelectors.delete(n),i.nodeTransactionSubscriptions.delete(n),i.retention.referenceCounts.delete(n);const r=qx(n);for(const l of r){var s;(s=i.retention.nodesRetainedByZone.get(l))===null||s===void 0||s.delete(n)}e.atomValues.delete(n),e.dirtyAtoms.delete(n),e.nonvalidatedAtoms.delete(n);const o=i.graphsByVersion.get(e.version);if(o){const l=o.nodeDeps.get(n);if(l!==void 0){o.nodeDeps.delete(n);for(const c of l){var a;(a=o.nodeToNodeSubscriptions.get(c))===null||a===void 0||a.delete(n)}}o.nodeToNodeSubscriptions.delete(n)}l2(n)}function h2(t,e){var n;return(n=t.retention.nodesRetainedByZone.get(e))!==null&&n!==void 0?n:$x}function qx(t){const e=Wx(t).retainedBy;return e===void 0||e==="components"||e==="recoilRoot"?[]:e instanceof jx?[e]:e}function p2(t,e){const n=t.getState();n.nextTree?n.retention.retainablesToCheckForRelease.add(e):Xx(t,new Set([e]))}function m2(t,e,n){var i;if(!at("recoil_memory_managament_2020"))return;const r=t.getState().retention.referenceCounts,s=((i=r.get(e))!==null&&i!==void 0?i:0)+n;s===0?Yx(t,e):r.set(e,s)}function Yx(t,e){if(!at("recoil_memory_managament_2020"))return;t.getState().retention.referenceCounts.delete(e),p2(t,e)}function g2(t){if(!at("recoil_memory_managament_2020"))return;const e=t.getState();Xx(t,e.retention.retainablesToCheckForRelease),e.retention.retainablesToCheckForRelease.clear()}function v2(t){return t===void 0?"recoilRoot":t}var Cs={SUSPENSE_TIMEOUT_MS:c2,updateRetainCount:m2,updateRetainCountToZero:Yx,releaseScheduledRetainablesNow:g2,retainedByOptionWithDefault:v2};const{unstable_batchedUpdates:_2}=SA;var y2={unstable_batchedUpdates:_2};const{unstable_batchedUpdates:S2}=y2;var E2={unstable_batchedUpdates:S2};const{batchStart:x2}=Si,{unstable_batchedUpdates:M2}=E2;let pg=M2||(t=>t());const w2=t=>{pg=t},T2=()=>pg,R2=t=>{pg(()=>{let e=()=>{};try{e=x2(),t()}finally{e()}})};var Nd={getBatcher:T2,setBatcher:w2,batchUpdates:R2};function*A2(t){for(const e of t)for(const n of e)yield n}var Kx=A2;const Zx=typeof Window>"u"||typeof window>"u",b2=t=>!Zx&&(t===window||t instanceof Window),C2=typeof navigator<"u"&&navigator.product==="ReactNative";var Dd={isSSR:Zx,isReactNative:C2,isWindow:b2};function L2(t,e){let n;return(...i)=>{n||(n={});const r=e(...i);return Object.hasOwnProperty.call(n,r)||(n[r]=t(...i)),n[r]}}function P2(t,e){let n,i;return(...r)=>{const s=e(...r);return n===s||(n=s,i=t(...r)),i}}function I2(t,e){let n,i;return[(...o)=>{const a=e(...o);return n===a||(n=a,i=t(...o)),i},()=>{n=null}]}var N2={memoizeWithArgsHash:L2,memoizeOneWithArgsHash:P2,memoizeOneWithArgsHashAndInvalidation:I2};const{batchUpdates:Ip}=Nd,{initializeNode:D2,peekNodeInfo:U2}=Fr,{graph:O2}=Ol,{getNextStoreID:k2}=Ld,{DEFAULT_VALUE:F2,recoilValues:E_,recoilValuesForKeys:x_}=Sn,{AbstractRecoilValue:B2,getRecoilValueAsLoadable:z2,setRecoilValue:M_,setUnvalidatedRecoilValue:V2}=Si,{updateRetainCount:au}=Cs,{setInvalidateMemoizedSnapshot:H2}=kx,{getNextTreeStateVersion:G2,makeEmptyStoreState:W2}=Lx,{isSSR:j2}=Dd,{memoizeOneWithArgsHashAndInvalidation:$2}=N2;class Ud{constructor(e,n){We(this,"_store",void 0),We(this,"_refCount",1),We(this,"getLoadable",i=>(this.checkRefCount_INTERNAL(),z2(this._store,i))),We(this,"getPromise",i=>(this.checkRefCount_INTERNAL(),this.getLoadable(i).toPromise())),We(this,"getNodes_UNSTABLE",i=>{if(this.checkRefCount_INTERNAL(),(i==null?void 0:i.isModified)===!0){if((i==null?void 0:i.isInitialized)===!1)return[];const o=this._store.getState().currentTree;return x_(o.dirtyAtoms)}const r=this._store.getState().knownAtoms,s=this._store.getState().knownSelectors;return(i==null?void 0:i.isInitialized)==null?E_.values():i.isInitialized===!0?x_(Kx([r,s])):dg(E_.values(),({key:o})=>!r.has(o)&&!s.has(o))}),We(this,"getInfo_UNSTABLE",({key:i})=>(this.checkRefCount_INTERNAL(),U2(this._store,this._store.getState().currentTree,i))),We(this,"map",i=>{this.checkRefCount_INTERNAL();const r=new Np(this,Ip);return i(r),r}),We(this,"asyncMap",async i=>{this.checkRefCount_INTERNAL();const r=new Np(this,Ip);return r.retain(),await i(r),r.autoRelease_INTERNAL(),r}),this._store={storeID:k2(),parentStoreID:n,getState:()=>e,replaceState:i=>{e.currentTree=i(e.currentTree)},getGraph:i=>{const r=e.graphsByVersion;if(r.has(i))return vt(r.get(i));const s=O2();return r.set(i,s),s},subscribeToTransactions:()=>({release:()=>{}}),addTransactionMetadata:()=>{throw Xe("Cannot subscribe to Snapshots")}};for(const i of this._store.getState().knownAtoms)D2(this._store,i,"get"),au(this._store,i,1);this.autoRelease_INTERNAL()}retain(){this._refCount<=0,this._refCount++;let e=!1;return()=>{e||(e=!0,this._release())}}autoRelease_INTERNAL(){j2||window.setTimeout(()=>this._release(),10)}_release(){if(this._refCount--,this._refCount===0){if(this._store.getState().nodeCleanupFunctions.forEach(e=>e()),this._store.getState().nodeCleanupFunctions.clear(),!at("recoil_memory_managament_2020"))return}else this._refCount<0}isRetained(){return this._refCount>0}checkRefCount_INTERNAL(){at("recoil_memory_managament_2020")&&this._refCount<=0}getStore_INTERNAL(){return this.checkRefCount_INTERNAL(),this._store}getID(){return this.checkRefCount_INTERNAL(),this._store.getState().currentTree.stateID}getStoreID(){return this.checkRefCount_INTERNAL(),this._store.storeID}}function Jx(t,e,n=!1){const i=t.getState(),r=n?G2():e.version;return{currentTree:{version:n?r:e.version,stateID:n?r:e.stateID,transactionMetadata:{...e.transactionMetadata},dirtyAtoms:new Set(e.dirtyAtoms),atomValues:e.atomValues.clone(),nonvalidatedAtoms:e.nonvalidatedAtoms.clone()},commitDepth:0,nextTree:null,previousTree:null,knownAtoms:new Set(i.knownAtoms),knownSelectors:new Set(i.knownSelectors),transactionSubscriptions:new Map,nodeTransactionSubscriptions:new Map,nodeToComponentSubscriptions:new Map,queuedComponentCallbacks_DEPRECATED:[],suspendedComponentResolvers:new Set,graphsByVersion:new Map().set(r,t.getGraph(e.version)),retention:{referenceCounts:new Map,nodesRetainedByZone:new Map,retainablesToCheckForRelease:new Set},nodeCleanupFunctions:new Map(Cd(i.nodeCleanupFunctions.entries(),([s])=>[s,()=>{}]))}}function X2(t){const e=new Ud(W2());return t!=null?e.map(t):e}const[w_,Qx]=$2((t,e)=>{var n;const i=t.getState(),r=e==="latest"?(n=i.nextTree)!==null&&n!==void 0?n:i.currentTree:vt(i.previousTree);return new Ud(Jx(t,r),t.storeID)},(t,e)=>{var n,i;return String(e)+String(t.storeID)+String((n=t.getState().nextTree)===null||n===void 0?void 0:n.version)+String(t.getState().currentTree.version)+String((i=t.getState().previousTree)===null||i===void 0?void 0:i.version)});H2(Qx);function q2(t,e="latest"){const n=w_(t,e);return n.isRetained()?n:(Qx(),w_(t,e))}class Np extends Ud{constructor(e,n){super(Jx(e.getStore_INTERNAL(),e.getStore_INTERNAL().getState().currentTree,!0),e.getStoreID()),We(this,"_batch",void 0),We(this,"set",(i,r)=>{this.checkRefCount_INTERNAL();const s=this.getStore_INTERNAL();this._batch(()=>{au(s,i.key,1),M_(this.getStore_INTERNAL(),i,r)})}),We(this,"reset",i=>{this.checkRefCount_INTERNAL();const r=this.getStore_INTERNAL();this._batch(()=>{au(r,i.key,1),M_(this.getStore_INTERNAL(),i,F2)})}),We(this,"setUnvalidatedAtomValues_DEPRECATED",i=>{this.checkRefCount_INTERNAL();const r=this.getStore_INTERNAL();Ip(()=>{for(const[s,o]of i.entries())au(r,s,1),V2(r,new B2(s),o)})}),this._batch=n}}var Od={Snapshot:Ud,MutableSnapshot:Np,freshSnapshot:X2,cloneSnapshot:q2},Y2=Od.Snapshot,K2=Od.MutableSnapshot,Z2=Od.freshSnapshot,J2=Od.cloneSnapshot,kd=Object.freeze({__proto__:null,Snapshot:Y2,MutableSnapshot:K2,freshSnapshot:Z2,cloneSnapshot:J2});function Q2(...t){const e=new Set;for(const n of t)for(const i of n)e.add(i);return e}var eL=Q2;const{useRef:tL}=mt;function nL(t){const e=tL(t);return e.current===t&&typeof t=="function"&&(e.current=t()),e}var T_=nL;const{getNextTreeStateVersion:iL,makeEmptyStoreState:eM}=Lx,{cleanUpNode:rL,getDownstreamNodes:sL,initializeNode:oL,setNodeValue:aL,setUnvalidatedAtomValue_DEPRECATED:lL}=Fr,{graph:cL}=Ol,{cloneGraph:uL}=Ol,{getNextStoreID:tM}=Ld,{createMutableSource:zf,reactMode:nM}=Ul,{applyAtomValueWrites:dL}=Si,{releaseScheduledRetainablesNow:iM}=Cs,{freshSnapshot:fL}=kd,{useCallback:hL,useContext:rM,useEffect:Dp,useMemo:pL,useRef:mL,useState:gL}=mt;function _a(){throw Xe("This component must be used inside a <RecoilRoot> component.")}const sM=Object.freeze({storeID:tM(),getState:_a,replaceState:_a,getGraph:_a,subscribeToTransactions:_a,addTransactionMetadata:_a});let Up=!1;function R_(t){if(Up)throw Xe("An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.");const e=t.getState();if(e.nextTree===null){at("recoil_memory_managament_2020")&&at("recoil_release_on_cascading_update_killswitch_2021")&&e.commitDepth>0&&iM(t);const n=e.currentTree.version,i=iL();e.nextTree={...e.currentTree,version:i,stateID:i,dirtyAtoms:new Set,transactionMetadata:{}},e.graphsByVersion.set(i,uL(vt(e.graphsByVersion.get(n))))}}const oM=mt.createContext({current:sM}),Fd=()=>rM(oM),aM=mt.createContext(null);function vL(){return rM(aM)}function mg(t,e,n){const i=sL(t,n,n.dirtyAtoms);for(const r of i){const s=e.nodeToComponentSubscriptions.get(r);if(s)for(const[o,[a,l]]of s)l(n)}}function lM(t){const e=t.getState(),n=e.currentTree,i=n.dirtyAtoms;if(i.size){for(const[r,s]of e.nodeTransactionSubscriptions)if(i.has(r))for(const[o,a]of s)a(t);for(const[r,s]of e.transactionSubscriptions)s(t);(!nM().early||e.suspendedComponentResolvers.size>0)&&(mg(t,e,n),e.suspendedComponentResolvers.forEach(r=>r()),e.suspendedComponentResolvers.clear())}e.queuedComponentCallbacks_DEPRECATED.forEach(r=>r(n)),e.queuedComponentCallbacks_DEPRECATED.splice(0,e.queuedComponentCallbacks_DEPRECATED.length)}function _L(t){const e=t.getState();e.commitDepth++;try{const{nextTree:n}=e;if(n==null)return;e.previousTree=e.currentTree,e.currentTree=n,e.nextTree=null,lM(t),e.previousTree!=null?e.graphsByVersion.delete(e.previousTree.version):og("Ended batch with no previous state, which is unexpected","recoil"),e.previousTree=null,at("recoil_memory_managament_2020")&&n==null&&iM(t)}finally{e.commitDepth--}}function yL({setNotifyBatcherOfChange:t}){const e=Fd(),[,n]=gL([]);return t(()=>n({})),Dp(()=>(t(()=>n({})),()=>{t(()=>{})}),[t]),Dp(()=>{Zb.enqueueExecution("Batcher",()=>{_L(e.current)})}),null}function SL(t,e){const n=eM();return e({set:(i,r)=>{const s=n.currentTree,o=aL(t,s,i.key,r),a=new Set(o.keys()),l=s.nonvalidatedAtoms.clone();for(const c of a)l.delete(c);n.currentTree={...s,dirtyAtoms:eL(s.dirtyAtoms,a),atomValues:dL(s.atomValues,o),nonvalidatedAtoms:l}},setUnvalidatedAtomValues:i=>{i.forEach((r,s)=>{n.currentTree=lL(n.currentTree,s,r)})}}),n}function EL(t){const e=fL(t),n=e.getStore_INTERNAL().getState();return e.retain(),n.nodeCleanupFunctions.forEach(i=>i()),n.nodeCleanupFunctions.clear(),n}let A_=0;function xL({initializeState_DEPRECATED:t,initializeState:e,store_INTERNAL:n,children:i}){let r;const s=p=>{const g=r.current.graphsByVersion;if(g.has(p))return vt(g.get(p));const v=cL();return g.set(p,v),v},o=(p,g)=>{if(g==null){const{transactionSubscriptions:v}=d.current.getState(),m=A_++;return v.set(m,p),{release:()=>{v.delete(m)}}}else{const{nodeTransactionSubscriptions:v}=d.current.getState();v.has(g)||v.set(g,new Map);const m=A_++;return vt(v.get(g)).set(m,p),{release:()=>{const f=v.get(g);f&&(f.delete(m),f.size===0&&v.delete(g))}}}},a=p=>{R_(d.current);for(const g of Object.keys(p))vt(d.current.getState().nextTree).transactionMetadata[g]=p[g]},l=p=>{R_(d.current);const g=vt(r.current.nextTree);let v;try{Up=!0,v=p(g)}finally{Up=!1}v!==g&&(r.current.nextTree=v,nM().early&&mg(d.current,r.current,v),vt(c.current)())},c=mL(null),u=hL(p=>{c.current=p},[c]),d=T_(()=>n??{storeID:tM(),getState:()=>r.current,replaceState:l,getGraph:s,subscribeToTransactions:o,addTransactionMetadata:a});n!=null&&(d.current=n),r=T_(()=>t!=null?SL(d.current,t):e!=null?EL(e):eM());const h=pL(()=>zf==null?void 0:zf(r,()=>r.current.currentTree.version),[r]);return Dp(()=>{const p=d.current;for(const g of new Set(p.getState().knownAtoms))oL(p,g,"get");return()=>{for(const g of p.getState().knownAtoms)rL(p,g)}},[d]),mt.createElement(oM.Provider,{value:d},mt.createElement(aM.Provider,{value:h},mt.createElement(yL,{setNotifyBatcherOfChange:u}),i))}function ML(t){const{override:e,...n}=t,i=Fd();return e===!1&&i.current!==sM?t.children:mt.createElement(xL,n)}function wL(){return Fd().current.storeID}var Ki={RecoilRoot:ML,useStoreRef:Fd,useRecoilMutableSource:vL,useRecoilStoreID:wL,notifyComponents_FOR_TESTING:mg,sendEndOfBatchNotifications_FOR_TESTING:lM};function TL(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}var RL=TL;const{useEffect:AL,useRef:bL}=mt;function CL(t){const e=bL();return AL(()=>{e.current=t}),e.current}var cM=CL;const{useStoreRef:LL}=Ki,{SUSPENSE_TIMEOUT_MS:PL}=Cs,{updateRetainCount:ya}=Cs,{RetentionZone:IL}=Pd,{useEffect:NL,useRef:DL}=mt,{isSSR:b_}=Dd;function UL(t){if(at("recoil_memory_managament_2020"))return OL(t)}function OL(t){const n=(Array.isArray(t)?t:[t]).map(o=>o instanceof IL?o:o.key),i=LL();NL(()=>{if(!at("recoil_memory_managament_2020"))return;const o=i.current;if(r.current&&!b_)window.clearTimeout(r.current),r.current=null;else for(const a of n)ya(o,a,1);return()=>{for(const a of n)ya(o,a,-1)}},[i,...n]);const r=DL(),s=cM(n);if(!b_&&(s===void 0||!RL(s,n))){const o=i.current;for(const a of n)ya(o,a,1);if(s)for(const a of s)ya(o,a,-1);r.current&&window.clearTimeout(r.current),r.current=window.setTimeout(()=>{r.current=null;for(const a of n)ya(o,a,-1)},PL)}}var gg=UL;function kL(){return"<component name not available>"}var Fl=kL;const{batchUpdates:FL}=Nd,{DEFAULT_VALUE:uM}=Sn,{currentRendererSupportsUseSyncExternalStore:BL,reactMode:ia,useMutableSource:zL,useSyncExternalStore:VL}=Ul,{useRecoilMutableSource:HL,useStoreRef:Ei}=Ki,{AbstractRecoilValue:Op,getRecoilValueAsLoadable:Bl,setRecoilValue:Wu,setUnvalidatedRecoilValue:GL,subscribeToRecoilValue:Ho}=Si,{useCallback:yn,useEffect:Go,useMemo:dM,useRef:Za,useState:vg}=mt,{setByAddingToSet:WL}=Ix,{isSSR:jL}=Dd;function _g(t,e,n){if(t.state==="hasValue")return t.contents;throw t.state==="loading"?new Promise(r=>{const s=n.current.getState().suspendedComponentResolvers;s.add(r),jL&&ht(t.contents)&&t.contents.finally(()=>{s.delete(r)})}):t.state==="hasError"?t.contents:Xe(`Invalid value of loadable atom "${e.key}"`)}function $L(){const t=Fl(),e=Ei(),[,n]=vg([]),i=Za(new Set);i.current=new Set;const r=Za(new Set),s=Za(new Map),o=yn(l=>{const c=s.current.get(l);c&&(c.release(),s.current.delete(l))},[s]),a=yn((l,c)=>{s.current.has(c)&&n([])},[]);return Go(()=>{const l=e.current;Ya(i.current,r.current).forEach(c=>{if(s.current.has(c))return;const u=Ho(l,new Op(c),h=>a(h,c),t);s.current.set(c,u),l.getState().nextTree?l.getState().queuedComponentCallbacks_DEPRECATED.push(()=>{a(l.getState(),c)}):a(l.getState(),c)}),Ya(r.current,i.current).forEach(c=>{o(c)}),r.current=i.current}),Go(()=>{const l=s.current;return Ya(i.current,new Set(l.keys())).forEach(c=>{const u=Ho(e.current,new Op(c),d=>a(d,c),t);l.set(c,u)}),()=>l.forEach((c,u)=>o(u))},[t,e,o,a]),dM(()=>{function l(g){return v=>{Wu(e.current,g,v)}}function c(g){return()=>Wu(e.current,g,uM)}function u(g){var v;i.current.has(g.key)||(i.current=WL(i.current,g.key));const m=e.current.getState();return Bl(e.current,g,ia().early&&(v=m.nextTree)!==null&&v!==void 0?v:m.currentTree)}function d(g){const v=u(g);return _g(v,g,e)}function h(g){return[d(g),l(g)]}function p(g){return[u(g),l(g)]}return{getRecoilValue:d,getRecoilValueLoadable:u,getRecoilState:h,getRecoilStateLoadable:p,getSetRecoilState:l,getResetRecoilState:c}},[i,e])}const XL={current:0};function qL(t){const e=Ei(),n=Fl(),i=yn(()=>{var a;const l=e.current,c=l.getState(),u=ia().early&&(a=c.nextTree)!==null&&a!==void 0?a:c.currentTree;return{loadable:Bl(l,t,u),key:t.key}},[e,t]),r=yn(a=>{let l;return()=>{var c,u;const d=a();return(c=l)!==null&&c!==void 0&&c.loadable.is(d.loadable)&&((u=l)===null||u===void 0?void 0:u.key)===d.key?l:(l=d,d)}},[]),s=dM(()=>r(i),[i,r]),o=yn(a=>{const l=e.current;return Ho(l,t,a,n).release},[e,t,n]);return VL(o,s,s).loadable}function YL(t){const e=Ei(),n=yn(()=>{var c;const u=e.current,d=u.getState(),h=ia().early&&(c=d.nextTree)!==null&&c!==void 0?c:d.currentTree;return Bl(u,t,h)},[e,t]),i=yn(()=>n(),[n]),r=Fl(),s=yn((c,u)=>{const d=e.current;return Ho(d,t,()=>{if(!at("recoil_suppress_rerender_in_callback"))return u();const p=n();l.current.is(p)||u(),l.current=p},r).release},[e,t,r,n]),o=HL();if(o==null)throw Xe("Recoil hooks must be used in components contained within a <RecoilRoot> component.");const a=zL(o,i,s),l=Za(a);return Go(()=>{l.current=a}),a}function kp(t){const e=Ei(),n=Fl(),i=yn(()=>{var l;const c=e.current,u=c.getState(),d=ia().early&&(l=u.nextTree)!==null&&l!==void 0?l:u.currentTree;return Bl(c,t,d)},[e,t]),r=yn(()=>({loadable:i(),key:t.key}),[i,t.key]),s=yn(l=>{const c=r();return l.loadable.is(c.loadable)&&l.key===c.key?l:c},[r]);Go(()=>{const l=Ho(e.current,t,c=>{a(s)},n);return a(s),l.release},[n,t,e,s]);const[o,a]=vg(r);return o.key!==t.key?r().loadable:o.loadable}function KL(t){const e=Ei(),[,n]=vg([]),i=Fl(),r=yn(()=>{var a;const l=e.current,c=l.getState(),u=ia().early&&(a=c.nextTree)!==null&&a!==void 0?a:c.currentTree;return Bl(l,t,u)},[e,t]),s=r(),o=Za(s);return Go(()=>{o.current=s}),Go(()=>{const a=e.current,l=a.getState(),c=Ho(a,t,d=>{var h;if(!at("recoil_suppress_rerender_in_callback"))return n([]);const p=r();(h=o.current)!==null&&h!==void 0&&h.is(p)||n(p),o.current=p},i);if(l.nextTree)a.getState().queuedComponentCallbacks_DEPRECATED.push(()=>{o.current=null,n([])});else{var u;if(!at("recoil_suppress_rerender_in_callback"))return n([]);const d=r();(u=o.current)!==null&&u!==void 0&&u.is(d)||n(d),o.current=d}return c.release},[i,r,t,e]),s}function yg(t){return at("recoil_memory_managament_2020")&&gg(t),{TRANSITION_SUPPORT:kp,SYNC_EXTERNAL_STORE:BL()?qL:kp,MUTABLE_SOURCE:YL,LEGACY:KL}[ia().mode](t)}function fM(t){const e=Ei(),n=yg(t);return _g(n,t,e)}function Bd(t){const e=Ei();return yn(n=>{Wu(e.current,t,n)},[e,t])}function ZL(t){const e=Ei();return yn(()=>{Wu(e.current,t,uM)},[e,t])}function JL(t){return[fM(t),Bd(t)]}function QL(t){return[yg(t),Bd(t)]}function eP(){const t=Ei();return(e,n={})=>{FL(()=>{t.current.addTransactionMetadata(n),e.forEach((i,r)=>GL(t.current,new Op(r),i))})}}function hM(t){return at("recoil_memory_managament_2020")&&gg(t),kp(t)}function pM(t){const e=Ei(),n=hM(t);return _g(n,t,e)}function tP(t){return[pM(t),Bd(t)]}var nP={recoilComponentGetRecoilValueCount_FOR_TESTING:XL,useRecoilInterface:$L,useRecoilState:JL,useRecoilStateLoadable:QL,useRecoilValue:fM,useRecoilValueLoadable:yg,useResetRecoilState:ZL,useSetRecoilState:Bd,useSetUnvalidatedAtomValues:eP,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:hM,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:pM,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:tP};function iP(t,e){const n=new Map;for(const[i,r]of t)e(r,i)&&n.set(i,r);return n}var rP=iP;function sP(t,e){const n=new Set;for(const i of t)e(i)&&n.add(i);return n}var oP=sP;function aP(...t){const e=new Map;for(let n=0;n<t.length;n++){const i=t[n].keys();let r;for(;!(r=i.next()).done;)e.set(r.value,t[n].get(r.value))}return e}var lP=aP;const{batchUpdates:cP}=Nd,{DEFAULT_VALUE:uP,getNode:mM,nodes:dP}=Sn,{useStoreRef:Sg}=Ki,{AbstractRecoilValue:fP,setRecoilValueLoadable:hP}=Si,{SUSPENSE_TIMEOUT_MS:pP}=Cs,{cloneSnapshot:ju}=kd,{useCallback:zd,useEffect:gM,useRef:C_,useState:mP}=mt,{isSSR:L_}=Dd;function Vd(t){const e=Sg();gM(()=>e.current.subscribeToTransactions(t).release,[t,e])}function P_(t){const e=t.atomValues.toMap(),n=Gu(rP(e,(i,r)=>{const o=mM(r).persistence_UNSTABLE;return o!=null&&o.type!=="none"&&i.state==="hasValue"}),i=>i.contents);return lP(t.nonvalidatedAtoms.toMap(),n)}function gP(t){Vd(zd(e=>{let n=e.getState().previousTree;const i=e.getState().currentTree;n||(n=e.getState().currentTree);const r=P_(i),s=P_(n),o=Gu(dP,l=>{var c,u,d,h;return{persistence_UNSTABLE:{type:(c=(u=l.persistence_UNSTABLE)===null||u===void 0?void 0:u.type)!==null&&c!==void 0?c:"none",backButton:(d=(h=l.persistence_UNSTABLE)===null||h===void 0?void 0:h.backButton)!==null&&d!==void 0?d:!1}}}),a=oP(i.dirtyAtoms,l=>r.has(l)||s.has(l));t({atomValues:r,previousAtomValues:s,atomInfo:o,modifiedAtoms:a,transactionMetadata:{...i.transactionMetadata}})},[t]))}function vP(t){Vd(zd(e=>{const n=ju(e,"latest"),i=ju(e,"previous");t({snapshot:n,previousSnapshot:i})},[t]))}function _P(){const t=Sg(),[e,n]=mP(()=>ju(t.current)),i=cM(e),r=C_(),s=C_();if(Vd(zd(a=>n(ju(a)),[])),gM(()=>{const a=e.retain();if(r.current&&!L_){var l;window.clearTimeout(r.current),r.current=null,(l=s.current)===null||l===void 0||l.call(s),s.current=null}return()=>{window.setTimeout(a,10)}},[e]),i!==e&&!L_){if(r.current){var o;window.clearTimeout(r.current),r.current=null,(o=s.current)===null||o===void 0||o.call(s),s.current=null}s.current=e.retain(),r.current=window.setTimeout(()=>{var a;r.current=null,(a=s.current)===null||a===void 0||a.call(s),s.current=null},pP)}return e}function vM(t,e){var n;const i=t.getState(),r=(n=i.nextTree)!==null&&n!==void 0?n:i.currentTree,s=e.getStore_INTERNAL().getState().currentTree;cP(()=>{const o=new Set;for(const c of[r.atomValues.keys(),s.atomValues.keys()])for(const u of c){var a,l;((a=r.atomValues.get(u))===null||a===void 0?void 0:a.contents)!==((l=s.atomValues.get(u))===null||l===void 0?void 0:l.contents)&&mM(u).shouldRestoreFromSnapshots&&o.add(u)}o.forEach(c=>{hP(t,new fP(c),s.atomValues.has(c)?vt(s.atomValues.get(c)):uP)}),t.replaceState(c=>({...c,stateID:e.getID()}))})}function yP(){const t=Sg();return zd(e=>vM(t.current,e),[t])}var _M={useRecoilSnapshot:_P,gotoSnapshot:vM,useGotoRecoilSnapshot:yP,useRecoilTransactionObserver:vP,useTransactionObservation_DEPRECATED:gP,useTransactionSubscription_DEPRECATED:Vd};const{peekNodeInfo:SP}=Fr,{useStoreRef:EP}=Ki;function xP(){const t=EP();return({key:e})=>SP(t.current,t.current.getState().currentTree,e)}var MP=xP;const{reactMode:wP}=Ul,{RecoilRoot:TP,useStoreRef:RP}=Ki,{useMemo:AP}=mt;function bP(){wP().mode==="MUTABLE_SOURCE"&&console.warn("Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.");const t=RP().current;return AP(()=>{function e({children:n}){return mt.createElement(TP,{store_INTERNAL:t},n)}return e},[t])}var CP=bP;const{loadableWithValue:LP}=Dl,{initializeNode:PP}=Fr,{DEFAULT_VALUE:IP,getNode:NP}=Sn,{copyTreeState:DP,getRecoilValueAsLoadable:UP,invalidateDownstreams:OP,writeLoadableToTreeState:kP}=Si;function I_(t){return NP(t.key).nodeType==="atom"}class FP{constructor(e,n){We(this,"_store",void 0),We(this,"_treeState",void 0),We(this,"_changes",void 0),We(this,"get",i=>{if(this._changes.has(i.key))return this._changes.get(i.key);if(!I_(i))throw Xe("Reading selectors within atomicUpdate is not supported");const r=UP(this._store,i,this._treeState);if(r.state==="hasValue")return r.contents;throw r.state==="hasError"?r.contents:Xe(`Expected Recoil atom ${i.key} to have a value, but it is in a loading state.`)}),We(this,"set",(i,r)=>{if(!I_(i))throw Xe("Setting selectors within atomicUpdate is not supported");if(typeof r=="function"){const s=this.get(i);this._changes.set(i.key,r(s))}else PP(this._store,i.key,"set"),this._changes.set(i.key,r)}),We(this,"reset",i=>{this.set(i,IP)}),this._store=e,this._treeState=n,this._changes=new Map}newTreeState_INTERNAL(){if(this._changes.size===0)return this._treeState;const e=DP(this._treeState);for(const[n,i]of this._changes)kP(e,n,LP(i));return OP(this._store,e),e}}function BP(t){return e=>{t.replaceState(n=>{const i=new FP(t,n);return e(i),i.newTreeState_INTERNAL()})}}var zP={atomicUpdater:BP},VP=zP.atomicUpdater,yM=Object.freeze({__proto__:null,atomicUpdater:VP});function HP(t,e){if(!t)throw new Error(e)}var GP=HP,Oa=GP;const{atomicUpdater:WP}=yM,{batchUpdates:jP}=Nd,{DEFAULT_VALUE:$P}=Sn,{useStoreRef:XP}=Ki,{refreshRecoilValue:qP,setRecoilValue:N_}=Si,{cloneSnapshot:YP}=kd,{gotoSnapshot:KP}=_M,{useCallback:ZP}=mt;class SM{}const JP=new SM;function EM(t,e,n,i){let r=JP,s;if(jP(()=>{const a="useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";if(typeof e!="function")throw Xe(a);const l=Nx({...i??{},set:(u,d)=>N_(t,u,d),reset:u=>N_(t,u,$P),refresh:u=>qP(t,u),gotoSnapshot:u=>KP(t,u),transact_UNSTABLE:u=>WP(t)(u)},{snapshot:()=>{const u=YP(t);return s=u.retain(),u}}),c=e(l);if(typeof c!="function")throw Xe(a);r=c(...n)}),r instanceof SM&&Oa(!1),ht(r))r=r.finally(()=>{var a;(a=s)===null||a===void 0||a()});else{var o;(o=s)===null||o===void 0||o()}return r}function QP(t,e){const n=XP();return ZP((...i)=>EM(n.current,t,i),e!=null?[...e,n]:void 0)}var xM={recoilCallback:EM,useRecoilCallback:QP};const{useStoreRef:eI}=Ki,{refreshRecoilValue:tI}=Si,{useCallback:nI}=mt;function iI(t){const e=eI();return nI(()=>{const n=e.current;tI(n,t)},[t,e])}var rI=iI;const{atomicUpdater:sI}=yM,{useStoreRef:oI}=Ki,{useMemo:aI}=mt;function lI(t,e){const n=oI();return aI(()=>(...i)=>{sI(n.current)(s=>{t(s)(...i)})},e!=null?[...e,n]:void 0)}var cI=lI;class uI{constructor(e){We(this,"value",void 0),this.value=e}}var dI={WrappedValue:uI},fI=dI.WrappedValue,MM=Object.freeze({__proto__:null,WrappedValue:fI});const{isFastRefreshEnabled:hI}=Ul;class D_ extends Error{}class pI{constructor(e){var n,i,r;We(this,"_name",void 0),We(this,"_numLeafs",void 0),We(this,"_root",void 0),We(this,"_onHit",void 0),We(this,"_onSet",void 0),We(this,"_mapNodeValue",void 0),this._name=e==null?void 0:e.name,this._numLeafs=0,this._root=null,this._onHit=(n=e==null?void 0:e.onHit)!==null&&n!==void 0?n:()=>{},this._onSet=(i=e==null?void 0:e.onSet)!==null&&i!==void 0?i:()=>{},this._mapNodeValue=(r=e==null?void 0:e.mapNodeValue)!==null&&r!==void 0?r:s=>s}size(){return this._numLeafs}root(){return this._root}get(e,n){var i;return(i=this.getLeafNode(e,n))===null||i===void 0?void 0:i.value}getLeafNode(e,n){if(this._root==null)return;let i=this._root;for(;i;){if(n==null||n.onNodeVisit(i),i.type==="leaf")return this._onHit(i),i;const r=this._mapNodeValue(e(i.nodeKey));i=i.branches.get(r)}}set(e,n,i){const r=()=>{var s,o,a,l;let c,u;for(const[m,f]of e){var d,h,p;const _=this._root;if((_==null?void 0:_.type)==="leaf")throw this.invalidCacheError();const y=c;if(c=y?y.branches.get(u):_,c=(d=c)!==null&&d!==void 0?d:{type:"branch",nodeKey:m,parent:y,branches:new Map,branchKey:u},c.type!=="branch"||c.nodeKey!==m)throw this.invalidCacheError();y==null||y.branches.set(u,c),i==null||(h=i.onNodeVisit)===null||h===void 0||h.call(i,c),u=this._mapNodeValue(f),this._root=(p=this._root)!==null&&p!==void 0?p:c}const g=c?(s=c)===null||s===void 0?void 0:s.branches.get(u):this._root;if(g!=null&&(g.type!=="leaf"||g.branchKey!==u))throw this.invalidCacheError();const v={type:"leaf",value:n,parent:c,branchKey:u};(o=c)===null||o===void 0||o.branches.set(u,v),this._root=(a=this._root)!==null&&a!==void 0?a:v,this._numLeafs++,this._onSet(v),i==null||(l=i.onNodeVisit)===null||l===void 0||l.call(i,v)};try{r()}catch(s){if(s instanceof D_)this.clear(),r();else throw s}}delete(e){const n=this.root();if(!n)return!1;if(e===n)return this._root=null,this._numLeafs=0,!0;let i=e.parent,r=e.branchKey;for(;i;){var s;if(i.branches.delete(r),i===n)return i.branches.size===0?(this._root=null,this._numLeafs=0):this._numLeafs--,!0;if(i.branches.size>0)break;r=(s=i)===null||s===void 0?void 0:s.branchKey,i=i.parent}for(;i!==n;i=i.parent)if(i==null)return!1;return this._numLeafs--,!0}clear(){this._numLeafs=0,this._root=null}invalidCacheError(){const e=hI()?"Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache.":"Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";throw og(e+(this._name!=null?` - ${this._name}`:"")),new D_}}var mI={TreeCache:pI},gI=mI.TreeCache,wM=Object.freeze({__proto__:null,TreeCache:gI});class vI{constructor(e){var n;We(this,"_maxSize",void 0),We(this,"_size",void 0),We(this,"_head",void 0),We(this,"_tail",void 0),We(this,"_map",void 0),We(this,"_keyMapper",void 0),this._maxSize=e.maxSize,this._size=0,this._head=null,this._tail=null,this._map=new Map,this._keyMapper=(n=e.mapKey)!==null&&n!==void 0?n:i=>i}head(){return this._head}tail(){return this._tail}size(){return this._size}maxSize(){return this._maxSize}has(e){return this._map.has(this._keyMapper(e))}get(e){const n=this._keyMapper(e),i=this._map.get(n);if(i)return this.set(e,i.value),i.value}set(e,n){const i=this._keyMapper(e);this._map.get(i)&&this.delete(e);const s=this.head(),o={key:e,right:s,left:null,value:n};s?s.left=o:this._tail=o,this._map.set(i,o),this._head=o,this._size++,this._maybeDeleteLRU()}_maybeDeleteLRU(){this.size()>this.maxSize()&&this.deleteLru()}deleteLru(){const e=this.tail();e&&this.delete(e.key)}delete(e){const n=this._keyMapper(e);if(!this._size||!this._map.has(n))return;const i=vt(this._map.get(n)),r=i.right,s=i.left;r&&(r.left=i.left),s&&(s.right=i.right),i===this.head()&&(this._head=r),i===this.tail()&&(this._tail=s),this._map.delete(n),this._size--}clear(){this._size=0,this._head=null,this._tail=null,this._map=new Map}}var _I={LRUCache:vI},yI=_I.LRUCache,TM=Object.freeze({__proto__:null,LRUCache:yI});const{LRUCache:SI}=TM,{TreeCache:EI}=wM;function xI({name:t,maxSize:e,mapNodeValue:n=i=>i}){const i=new SI({maxSize:e}),r=new EI({name:t,mapNodeValue:n,onHit:s=>{i.set(s,!0)},onSet:s=>{const o=i.tail();i.set(s,!0),o&&r.size()>e&&r.delete(o.key)}});return r}var U_=xI;function Zn(t,e,n){if(typeof t=="string"&&!t.includes('"')&&!t.includes("\\"))return`"${t}"`;switch(typeof t){case"undefined":return"";case"boolean":return t?"true":"false";case"number":case"symbol":return String(t);case"string":return JSON.stringify(t);case"function":if((e==null?void 0:e.allowFunctions)!==!0)throw Xe("Attempt to serialize function in a Recoil cache key");return`__FUNCTION(${t.name})__`}if(t===null)return"null";if(typeof t!="object"){var i;return(i=JSON.stringify(t))!==null&&i!==void 0?i:""}if(ht(t))return"__PROMISE__";if(Array.isArray(t))return`[${t.map((r,s)=>Zn(r,e,s.toString()))}]`;if(typeof t.toJSON=="function")return Zn(t.toJSON(n),e,n);if(t instanceof Map){const r={};for(const[s,o]of t)r[typeof s=="string"?s:Zn(s,e)]=o;return Zn(r,e,n)}return t instanceof Set?Zn(Array.from(t).sort((r,s)=>Zn(r,e).localeCompare(Zn(s,e))),e,n):Symbol!==void 0&&t[Symbol.iterator]!=null&&typeof t[Symbol.iterator]=="function"?Zn(Array.from(t),e,n):`{${Object.keys(t).filter(r=>t[r]!==void 0).sort().map(r=>`${Zn(r,e)}:${Zn(t[r],e,r)}`).join(",")}}`}function MI(t,e={allowFunctions:!1}){return Zn(t,e)}var Hd=MI;const{TreeCache:wI}=wM,vc={equality:"reference",eviction:"keep-all",maxSize:1/0};function TI({equality:t=vc.equality,eviction:e=vc.eviction,maxSize:n=vc.maxSize}=vc,i){const r=RI(t);return AI(e,n,r,i)}function RI(t){switch(t){case"reference":return e=>e;case"value":return e=>Hd(e)}throw Xe(`Unrecognized equality policy ${t}`)}function AI(t,e,n,i){switch(t){case"keep-all":return new wI({name:i,mapNodeValue:n});case"lru":return U_({name:i,maxSize:vt(e),mapNodeValue:n});case"most-recent":return U_({name:i,maxSize:1,mapNodeValue:n})}throw Xe(`Unrecognized eviction policy ${t}`)}var bI=TI;function CI(t){return()=>null}var LI={startPerfBlock:CI};const{isLoadable:PI,loadableWithError:_c,loadableWithPromise:II,loadableWithValue:Vf}=Dl,{WrappedValue:RM}=MM,{getNodeLoadable:yc,peekNodeLoadable:NI,setNodeValue:DI}=Fr,{saveDepsToStore:UI}=Ol,{DEFAULT_VALUE:OI,getConfigDeletionHandler:kI,getNode:FI,registerNode:O_}=Sn,{isRecoilValue:BI}=Vo,{markRecoilValueModified:k_}=Si,{retainedByOptionWithDefault:zI}=Cs,{recoilCallback:VI}=xM,{startPerfBlock:HI}=LI;class AM{}const Sa=new AM,Ea=[],Sc=new Map,GI=(()=>{let t=0;return()=>t++})();function bM(t){let e=null;const{key:n,get:i,cachePolicy_UNSTABLE:r}=t,s=t.set!=null?t.set:void 0,o=new Set,a=bI(r??{equality:"reference",eviction:"keep-all"},n),l=zI(t.retainedBy_UNSTABLE),c=new Map;let u=0;function d(){return!at("recoil_memory_managament_2020")||u>0}function h(M){return M.getState().knownSelectors.add(n),u++,()=>{u--}}function p(){return kI(n)!==void 0&&!d()}function g(M,U,O,Y,X){ue(U,Y,X),v(M,O)}function v(M,U){G(M,U)&&k(M),f(U,!0)}function m(M,U){G(M,U)&&(vt(R(M)).stateVersions.clear(),f(U,!1))}function f(M,U){const O=Sc.get(M);if(O!=null){for(const Y of O)k_(Y,vt(e));U&&Sc.delete(M)}}function _(M,U){let O=Sc.get(U);O==null&&Sc.set(U,O=new Set),O.add(M)}function y(M,U,O,Y,X,pe){return U.then(Se=>{if(!d())throw k(M),Sa;const he=Vf(Se);return g(M,O,X,he,Y),Se}).catch(Se=>{if(!d())throw k(M),Sa;if(ht(Se))return S(M,Se,O,Y,X,pe);const he=_c(Se);throw g(M,O,X,he,Y),Se})}function S(M,U,O,Y,X,pe){return U.then(Se=>{if(!d())throw k(M),Sa;pe.loadingDepKey!=null&&pe.loadingDepPromise===U?O.atomValues.set(pe.loadingDepKey,Vf(Se)):M.getState().knownSelectors.forEach(z=>{O.atomValues.delete(z)});const he=b(M,O);if(he&&he.state!=="loading"){if((G(M,X)||R(M)==null)&&v(M,X),he.state==="hasValue")return he.contents;throw he.contents}if(!G(M,X)){const z=x(M,O);if(z!=null)return z.loadingLoadable.contents}const[De,Pe]=w(M,O,X);if(De.state!=="loading"&&g(M,O,X,De,Pe),De.state==="hasError")throw De.contents;return De.contents}).catch(Se=>{if(Se instanceof AM)throw Sa;if(!d())throw k(M),Sa;const he=_c(Se);throw g(M,O,X,he,Y),Se})}function E(M,U,O,Y){var X,pe,Se,he;if(G(M,Y)||U.version===((X=M.getState())===null||X===void 0||(pe=X.currentTree)===null||pe===void 0?void 0:pe.version)||U.version===((Se=M.getState())===null||Se===void 0||(he=Se.nextTree)===null||he===void 0?void 0:he.version)){var De,Pe,z;UI(n,O,M,(De=(Pe=M.getState())===null||Pe===void 0||(z=Pe.nextTree)===null||z===void 0?void 0:z.version)!==null&&De!==void 0?De:M.getState().currentTree.version)}for(const Be of O)o.add(Be)}function w(M,U,O){const Y=HI(n);let X=!0,pe=!0;const Se=()=>{Y(),pe=!1};let he,De=!1,Pe;const z={loadingDepKey:null,loadingDepPromise:null},Be=new Map;function Re({key:Me}){const ze=yc(M,U,Me);switch(Be.set(Me,ze),X||(E(M,U,new Set(Be.keys()),O),m(M,O)),ze.state){case"hasValue":return ze.contents;case"hasError":throw ze.contents;case"loading":throw z.loadingDepKey=Me,z.loadingDepPromise=ze.contents,ze.contents}throw Xe("Invalid Loadable state")}const Ie=Me=>(...ze)=>{if(pe)throw Xe("Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.");return e==null&&Oa(!1),VI(M,Me,ze,{node:e})};try{he=i({get:Re,getCallback:Ie}),he=BI(he)?Re(he):he,PI(he)&&(he.state==="hasError"&&(De=!0),he=he.contents),ht(he)?he=y(M,he,U,Be,O,z).finally(Se):Se(),he=he instanceof RM?he.value:he}catch(Me){he=Me,ht(he)?he=S(M,he,U,Be,O,z).finally(Se):(De=!0,Se())}return De?Pe=_c(he):ht(he)?Pe=II(he):Pe=Vf(he),X=!1,ae(M,O,Be),E(M,U,new Set(Be.keys()),O),[Pe,Be]}function b(M,U){let O=U.atomValues.get(n);if(O!=null)return O;const Y=new Set;try{O=a.get(pe=>(typeof pe!="string"&&Oa(!1),yc(M,U,pe).contents),{onNodeVisit:pe=>{pe.type==="branch"&&pe.nodeKey!==n&&Y.add(pe.nodeKey)}})}catch(pe){throw Xe(`Problem with cache lookup for selector "${n}": ${pe.message}`)}if(O){var X;U.atomValues.set(n,O),E(M,U,Y,(X=R(M))===null||X===void 0?void 0:X.executionID)}return O}function I(M,U){const O=b(M,U);if(O!=null)return k(M),O;const Y=x(M,U);if(Y!=null){var X;return((X=Y.loadingLoadable)===null||X===void 0?void 0:X.state)==="loading"&&_(M,Y.executionID),Y.loadingLoadable}const pe=GI(),[Se,he]=w(M,U,pe);return Se.state==="loading"?(te(M,pe,Se,he,U),_(M,pe)):(k(M),ue(U,Se,he)),Se}function x(M,U){const O=Kx([c.has(M)?[vt(c.get(M))]:[],Cd(dg(c,([X])=>X!==M),([,X])=>X)]);function Y(X){for(const[pe,Se]of X)if(!yc(M,U,pe).is(Se))return!0;return!1}for(const X of O){if(X.stateVersions.get(U.version)||!Y(X.depValuesDiscoveredSoFarDuringAsyncWork))return X.stateVersions.set(U.version,!0),X;X.stateVersions.set(U.version,!1)}}function R(M){return c.get(M)}function te(M,U,O,Y,X){c.set(M,{depValuesDiscoveredSoFarDuringAsyncWork:Y,executionID:U,loadingLoadable:O,stateVersions:new Map([[X.version,!0]])})}function ae(M,U,O){if(G(M,U)){const Y=R(M);Y!=null&&(Y.depValuesDiscoveredSoFarDuringAsyncWork=O)}}function k(M){c.delete(M)}function G(M,U){var O;return U===((O=R(M))===null||O===void 0?void 0:O.executionID)}function Z(M){return Array.from(M.entries()).map(([U,O])=>[U,O.contents])}function ue(M,U,O){M.atomValues.set(n,U);try{a.set(Z(O),U)}catch(Y){throw Xe(`Problem with setting cache for selector "${n}": ${Y.message}`)}}function Q(M){if(Ea.includes(n)){const U=`Recoil selector has circular dependencies: ${Ea.slice(Ea.indexOf(n)).join(" → ")}`;return _c(Xe(U))}Ea.push(n);try{return M()}finally{Ea.pop()}}function B(M,U){const O=U.atomValues.get(n);return O??a.get(Y=>{var X;return typeof Y!="string"&&Oa(!1),(X=NI(M,U,Y))===null||X===void 0?void 0:X.contents})}function q(M,U){return Q(()=>I(M,U))}function W(M){M.atomValues.delete(n)}function ce(M,U){e==null&&Oa(!1);for(const Y of o){var O;const X=FI(Y);(O=X.clearCache)===null||O===void 0||O.call(X,M,U)}o.clear(),W(U),a.clear(),k_(M,e)}return s!=null?e=O_({key:n,nodeType:"selector",peek:B,get:q,set:(U,O,Y)=>{let X=!1;const pe=new Map;function Se({key:z}){if(X)throw Xe("Recoil: Async selector sets are not currently supported.");const Be=yc(U,O,z);if(Be.state==="hasValue")return Be.contents;if(Be.state==="loading"){const Re=`Getting value of asynchronous atom or selector "${z}" in a pending state while setting selector "${n}" is not yet supported.`;throw Xe(Re)}else throw Be.contents}function he(z,Be){if(X)throw Xe("Recoil: Async selector sets are not currently supported.");const Re=typeof Be=="function"?Be(Se(z)):Be;DI(U,O,z.key,Re).forEach((Me,ze)=>pe.set(ze,Me))}function De(z){he(z,OI)}const Pe=s({set:he,get:Se,reset:De},Y);if(Pe!==void 0)throw ht(Pe)?Xe("Recoil: Async selector sets are not currently supported."):Xe("Recoil: selector set should be a void function.");return X=!0,pe},init:h,invalidate:W,clearCache:ce,shouldDeleteConfigOnRelease:p,dangerouslyAllowMutability:t.dangerouslyAllowMutability,shouldRestoreFromSnapshots:!1,retainedBy:l}):e=O_({key:n,nodeType:"selector",peek:B,get:q,init:h,invalidate:W,clearCache:ce,shouldDeleteConfigOnRelease:p,dangerouslyAllowMutability:t.dangerouslyAllowMutability,shouldRestoreFromSnapshots:!1,retainedBy:l})}bM.value=t=>new RM(t);var Wo=bM;const{isLoadable:WI,loadableWithError:Hf,loadableWithPromise:Gf,loadableWithValue:Us}=Dl,{WrappedValue:CM}=MM,{peekNodeInfo:jI}=Fr,{DEFAULT_VALUE:ts,DefaultValue:ar,getConfigDeletionHandler:LM,registerNode:$I,setConfigDeletionHandler:XI}=Sn,{isRecoilValue:qI}=Vo,{getRecoilValueAsLoadable:YI,markRecoilValueModified:KI,setRecoilValue:F_,setRecoilValueLoadable:ZI}=Si,{retainedByOptionWithDefault:JI}=Cs,xa=t=>t instanceof CM?t.value:t;function QI(t){const{key:e,persistence_UNSTABLE:n}=t,i=JI(t.retainedBy_UNSTABLE);let r=0;function s(_){return Gf(_.then(y=>(o=Us(y),y)).catch(y=>{throw o=Hf(y),y}))}let o=ht(t.default)?s(t.default):WI(t.default)?t.default.state==="loading"?s(t.default.contents):t.default:Us(xa(t.default));o.contents;let a;const l=new Map;function c(_){return _}function u(_,y){const S=y.then(E=>{var w,b;return((b=((w=_.getState().nextTree)!==null&&w!==void 0?w:_.getState().currentTree).atomValues.get(e))===null||b===void 0?void 0:b.contents)===S&&F_(_,f,E),E}).catch(E=>{var w,b;throw((b=((w=_.getState().nextTree)!==null&&w!==void 0?w:_.getState().currentTree).atomValues.get(e))===null||b===void 0?void 0:b.contents)===S&&ZI(_,f,Hf(E)),E});return S}function d(_,y,S){var E;r++;const w=()=>{var k;r--,(k=l.get(_))===null||k===void 0||k.forEach(G=>G()),l.delete(_)};if(_.getState().knownAtoms.add(e),o.state==="loading"){const k=()=>{var G;((G=_.getState().nextTree)!==null&&G!==void 0?G:_.getState().currentTree).atomValues.has(e)||KI(_,f)};o.contents.finally(k)}const b=(E=t.effects)!==null&&E!==void 0?E:t.effects_UNSTABLE;if(b!=null){let Q=function(U){if(G&&U.key===e){const O=k;return O instanceof ar?h(_,y):ht(O)?Gf(O.then(Y=>Y instanceof ar?o.toPromise():Y)):Us(O)}return YI(_,U)},B=function(U){return Q(U).toPromise()},q=function(U){var O;const Y=jI(_,(O=_.getState().nextTree)!==null&&O!==void 0?O:_.getState().currentTree,U.key);return G&&U.key===e&&!(k instanceof ar)?{...Y,isSet:!0,loadable:Q(U)}:Y};var R=Q,te=B,ae=q;let k=ts,G=!0,Z=!1,ue=null;const W=U=>O=>{if(G){const Y=Q(f),X=Y.state==="hasValue"?Y.contents:ts;k=typeof O=="function"?O(X):O,ht(k)&&(k=k.then(pe=>(ue={effect:U,value:pe},pe)))}else{if(ht(O))throw Xe("Setting atoms to async values is not implemented.");typeof O!="function"&&(ue={effect:U,value:xa(O)}),F_(_,f,typeof O=="function"?Y=>{const X=xa(O(Y));return ue={effect:U,value:X},X}:xa(O))}},ce=U=>()=>W(U)(ts),M=U=>O=>{var Y;const{release:X}=_.subscribeToTransactions(pe=>{var Se;let{currentTree:he,previousTree:De}=pe.getState();De||(De=he);const Pe=(Se=he.atomValues.get(e))!==null&&Se!==void 0?Se:o;if(Pe.state==="hasValue"){var z,Be,Re,Ie;const Me=Pe.contents,ze=(z=De.atomValues.get(e))!==null&&z!==void 0?z:o,He=ze.state==="hasValue"?ze.contents:ts;((Be=ue)===null||Be===void 0?void 0:Be.effect)!==U||((Re=ue)===null||Re===void 0?void 0:Re.value)!==Me?O(Me,He,!he.atomValues.has(e)):((Ie=ue)===null||Ie===void 0?void 0:Ie.effect)===U&&(ue=null)}},e);l.set(_,[...(Y=l.get(_))!==null&&Y!==void 0?Y:[],X])};for(const U of b)try{const O=U({node:f,storeID:_.storeID,parentStoreID_UNSTABLE:_.parentStoreID,trigger:S,setSelf:W(U),resetSelf:ce(U),onSet:M(U),getPromise:B,getLoadable:Q,getInfo_UNSTABLE:q});if(O!=null){var I;l.set(_,[...(I=l.get(_))!==null&&I!==void 0?I:[],O])}}catch(O){k=O,Z=!0}if(G=!1,!(k instanceof ar)){var x;const U=Z?Hf(k):ht(k)?Gf(u(_,k)):Us(xa(k));U.contents,y.atomValues.set(e,U),(x=_.getState().nextTree)===null||x===void 0||x.atomValues.set(e,U)}}return w}function h(_,y){var S,E;return(S=(E=y.atomValues.get(e))!==null&&E!==void 0?E:a)!==null&&S!==void 0?S:o}function p(_,y){if(y.atomValues.has(e))return vt(y.atomValues.get(e));if(y.nonvalidatedAtoms.has(e)){if(a!=null)return a;if(n==null)return o;const S=y.nonvalidatedAtoms.get(e),E=n.validator(S,ts);return a=E instanceof ar?o:Us(E),a}else return o}function g(){a=void 0}function v(_,y,S){if(y.atomValues.has(e)){const E=vt(y.atomValues.get(e));if(E.state==="hasValue"&&S===E.contents)return new Map}else if(!y.nonvalidatedAtoms.has(e)&&S instanceof ar)return new Map;return a=void 0,new Map().set(e,Us(S))}function m(){return LM(e)!==void 0&&r<=0}const f=$I({key:e,nodeType:"atom",peek:h,get:p,set:v,init:d,invalidate:g,shouldDeleteConfigOnRelease:m,dangerouslyAllowMutability:t.dangerouslyAllowMutability,persistence_UNSTABLE:t.persistence_UNSTABLE?{type:t.persistence_UNSTABLE.type,backButton:t.persistence_UNSTABLE.backButton}:void 0,shouldRestoreFromSnapshots:!0,retainedBy:i});return f}function Eg(t){const{...e}=t,n="default"in t?t.default:new Promise(()=>{});return qI(n)?eN({...e,default:n}):QI({...e,default:n})}function eN(t){const e=Eg({...t,default:ts,persistence_UNSTABLE:t.persistence_UNSTABLE===void 0?void 0:{...t.persistence_UNSTABLE,validator:i=>i instanceof ar?i:vt(t.persistence_UNSTABLE).validator(i,ts)},effects:t.effects,effects_UNSTABLE:t.effects_UNSTABLE}),n=Wo({key:`${t.key}__withFallback`,get:({get:i})=>{const r=i(e);return r instanceof ar?t.default:r},set:({set:i},r)=>i(e,r),cachePolicy_UNSTABLE:{eviction:"most-recent"},dangerouslyAllowMutability:t.dangerouslyAllowMutability});return XI(n.key,LM(t.key)),n}Eg.value=t=>new CM(t);var PM=Eg;class tN{constructor(e){var n;We(this,"_map",void 0),We(this,"_keyMapper",void 0),this._map=new Map,this._keyMapper=(n=e==null?void 0:e.mapKey)!==null&&n!==void 0?n:i=>i}size(){return this._map.size}has(e){return this._map.has(this._keyMapper(e))}get(e){return this._map.get(this._keyMapper(e))}set(e,n){this._map.set(this._keyMapper(e),n)}delete(e){this._map.delete(this._keyMapper(e))}clear(){this._map.clear()}}var nN={MapCache:tN},iN=nN.MapCache,rN=Object.freeze({__proto__:null,MapCache:iN});const{LRUCache:B_}=TM,{MapCache:sN}=rN,Ec={equality:"reference",eviction:"none",maxSize:1/0};function oN({equality:t=Ec.equality,eviction:e=Ec.eviction,maxSize:n=Ec.maxSize}=Ec){const i=aN(t);return lN(e,n,i)}function aN(t){switch(t){case"reference":return e=>e;case"value":return e=>Hd(e)}throw Xe(`Unrecognized equality policy ${t}`)}function lN(t,e,n){switch(t){case"keep-all":return new sN({mapKey:n});case"lru":return new B_({mapKey:n,maxSize:vt(e)});case"most-recent":return new B_({mapKey:n,maxSize:1})}throw Xe(`Unrecognized eviction policy ${t}`)}var IM=oN;const{setConfigDeletionHandler:cN}=Sn;function uN(t){var e,n;const i=IM({equality:(e=(n=t.cachePolicyForParams_UNSTABLE)===null||n===void 0?void 0:n.equality)!==null&&e!==void 0?e:"value",eviction:"keep-all"});return r=>{var s,o;const a=i.get(r);if(a!=null)return a;const{cachePolicyForParams_UNSTABLE:l,...c}=t,u="default"in t?t.default:new Promise(()=>{}),d=PM({...c,key:`${t.key}__${(s=Hd(r))!==null&&s!==void 0?s:"void"}`,default:typeof u=="function"?u(r):u,retainedBy_UNSTABLE:typeof t.retainedBy_UNSTABLE=="function"?t.retainedBy_UNSTABLE(r):t.retainedBy_UNSTABLE,effects:typeof t.effects=="function"?t.effects(r):typeof t.effects_UNSTABLE=="function"?t.effects_UNSTABLE(r):(o=t.effects)!==null&&o!==void 0?o:t.effects_UNSTABLE});return i.set(r,d),cN(d.key,()=>{i.delete(r)}),d}}var dN=uN;const{setConfigDeletionHandler:fN}=Sn;let hN=0;function pN(t){var e,n;const i=IM({equality:(e=(n=t.cachePolicyForParams_UNSTABLE)===null||n===void 0?void 0:n.equality)!==null&&e!==void 0?e:"value",eviction:"keep-all"});return r=>{var s;let o;try{o=i.get(r)}catch(h){throw Xe(`Problem with cache lookup for selector ${t.key}: ${h.message}`)}if(o!=null)return o;const a=`${t.key}__selectorFamily/${(s=Hd(r,{allowFunctions:!0}))!==null&&s!==void 0?s:"void"}/${hN++}`,l=h=>t.get(r)(h),c=t.cachePolicy_UNSTABLE,u=typeof t.retainedBy_UNSTABLE=="function"?t.retainedBy_UNSTABLE(r):t.retainedBy_UNSTABLE;let d;if(t.set!=null){const h=t.set;d=Wo({key:a,get:l,set:(g,v)=>h(r)(g,v),cachePolicy_UNSTABLE:c,dangerouslyAllowMutability:t.dangerouslyAllowMutability,retainedBy_UNSTABLE:u})}else d=Wo({key:a,get:l,cachePolicy_UNSTABLE:c,dangerouslyAllowMutability:t.dangerouslyAllowMutability,retainedBy_UNSTABLE:u});return i.set(r,d),fN(d.key,()=>{i.delete(r)}),d}}var Br=pN;const mN=Br({key:"__constant",get:t=>()=>t,cachePolicyForParams_UNSTABLE:{equality:"reference"}});function gN(t){return mN(t)}var vN=gN;const _N=Br({key:"__error",get:t=>()=>{throw Xe(t)},cachePolicyForParams_UNSTABLE:{equality:"reference"}});function yN(t){return _N(t)}var SN=yN;function EN(t){return t}var xN=EN;const{loadableWithError:NM,loadableWithPromise:DM,loadableWithValue:UM}=Dl;function Gd(t,e){const n=Array(e.length).fill(void 0),i=Array(e.length).fill(void 0);for(const[r,s]of e.entries())try{n[r]=t(s)}catch(o){i[r]=o}return[n,i]}function MN(t){return t!=null&&!ht(t)}function Wd(t){return Array.isArray(t)?t:Object.getOwnPropertyNames(t).map(e=>t[e])}function Fp(t,e){return Array.isArray(t)?e:Object.getOwnPropertyNames(t).reduce((n,i,r)=>({...n,[i]:e[r]}),{})}function Ao(t,e,n){const i=n.map((r,s)=>r==null?UM(e[s]):ht(r)?DM(r):NM(r));return Fp(t,i)}function wN(t,e){return e.map((n,i)=>n===void 0?t[i]:n)}const TN=Br({key:"__waitForNone",get:t=>({get:e})=>{const n=Wd(t),[i,r]=Gd(e,n);return Ao(t,i,r)},dangerouslyAllowMutability:!0}),RN=Br({key:"__waitForAny",get:t=>({get:e})=>{const n=Wd(t),[i,r]=Gd(e,n);return r.some(s=>!ht(s))?Ao(t,i,r):new Promise(s=>{for(const[o,a]of r.entries())ht(a)&&a.then(l=>{i[o]=l,r[o]=void 0,s(Ao(t,i,r))}).catch(l=>{r[o]=l,s(Ao(t,i,r))})})},dangerouslyAllowMutability:!0}),AN=Br({key:"__waitForAll",get:t=>({get:e})=>{const n=Wd(t),[i,r]=Gd(e,n);if(r.every(o=>o==null))return Fp(t,i);const s=r.find(MN);if(s!=null)throw s;return Promise.all(r).then(o=>Fp(t,wN(i,o)))},dangerouslyAllowMutability:!0}),bN=Br({key:"__waitForAllSettled",get:t=>({get:e})=>{const n=Wd(t),[i,r]=Gd(e,n);return r.every(s=>!ht(s))?Ao(t,i,r):Promise.all(r.map((s,o)=>ht(s)?s.then(a=>{i[o]=a,r[o]=void 0}).catch(a=>{i[o]=void 0,r[o]=a}):null)).then(()=>Ao(t,i,r))},dangerouslyAllowMutability:!0}),CN=Br({key:"__noWait",get:t=>({get:e})=>{try{return Wo.value(UM(e(t)))}catch(n){return Wo.value(ht(n)?DM(n):NM(n))}},dangerouslyAllowMutability:!0});var LN={waitForNone:TN,waitForAny:RN,waitForAll:AN,waitForAllSettled:bN,noWait:CN};const{RecoilLoadable:PN}=Dl,{DefaultValue:IN}=Sn,{RecoilRoot:NN,useRecoilStoreID:DN}=Ki,{isRecoilValue:UN}=Vo,{retentionZone:ON}=Pd,{freshSnapshot:kN}=kd,{useRecoilState:FN,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:BN,useRecoilStateLoadable:zN,useRecoilValue:VN,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:HN,useRecoilValueLoadable:GN,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:WN,useResetRecoilState:jN,useSetRecoilState:$N}=nP,{useGotoRecoilSnapshot:XN,useRecoilSnapshot:qN,useRecoilTransactionObserver:YN}=_M,{useRecoilCallback:KN}=xM,{noWait:ZN,waitForAll:JN,waitForAllSettled:QN,waitForAny:eD,waitForNone:tD}=LN;var xg={DefaultValue:IN,isRecoilValue:UN,RecoilLoadable:PN,RecoilEnv:na,RecoilRoot:NN,useRecoilStoreID:DN,useRecoilBridgeAcrossReactRoots_UNSTABLE:CP,atom:PM,selector:Wo,atomFamily:dN,selectorFamily:Br,constSelector:vN,errorSelector:SN,readOnlySelector:xN,noWait:ZN,waitForNone:tD,waitForAny:eD,waitForAll:JN,waitForAllSettled:QN,useRecoilValue:VN,useRecoilValueLoadable:GN,useRecoilState:FN,useRecoilStateLoadable:zN,useSetRecoilState:$N,useResetRecoilState:jN,useGetRecoilValueInfo_UNSTABLE:MP,useRecoilRefresher_UNSTABLE:rI,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:WN,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:HN,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:BN,useRecoilCallback:KN,useRecoilTransaction_UNSTABLE:cI,useGotoRecoilSnapshot:XN,useRecoilSnapshot:qN,useRecoilTransactionObserver_UNSTABLE:YN,snapshot_UNSTABLE:kN,useRetain:gg,retentionZone:ON},nD=xg.RecoilRoot,Ls=xg.atom,kn=xg.useRecoilState;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mg="153",Os={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ks={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},iD=0,z_=1,rD=2,OM=1,sD=2,Pi=3,Dr=0,cn=1,hi=2,Ar=0,bo=1,Bp=2,V_=3,H_=4,oD=5,so=100,aD=101,lD=102,G_=103,W_=104,cD=200,uD=201,dD=202,fD=203,kM=204,FM=205,hD=206,pD=207,mD=208,gD=209,vD=210,_D=0,yD=1,SD=2,zp=3,ED=4,xD=5,MD=6,wD=7,wg=0,TD=1,RD=2,Vi=0,AD=1,bD=2,CD=3,LD=4,PD=5,BM=300,jo=301,$o=302,Vp=303,Hp=304,jd=306,Gp=1e3,ti=1001,Wp=1002,on=1003,j_=1004,Wf=1005,yt=1006,ID=1007,yl=1008,br=1009,ND=1010,DD=1011,Tg=1012,zM=1013,gr=1014,vr=1015,Hi=1016,VM=1017,HM=1018,cs=1020,UD=1021,ni=1023,OD=1024,kD=1025,us=1026,Xo=1027,FD=1028,GM=1029,BD=1030,WM=1031,jM=1033,jf=33776,$f=33777,Xf=33778,qf=33779,$_=35840,X_=35841,q_=35842,Y_=35843,zD=36196,K_=37492,Z_=37496,J_=37808,Q_=37809,e0=37810,t0=37811,n0=37812,i0=37813,r0=37814,s0=37815,o0=37816,a0=37817,l0=37818,c0=37819,u0=37820,d0=37821,Yf=36492,VD=36283,f0=36284,h0=36285,p0=36286,$M=3e3,ds=3001,HD=3200,GD=3201,Rg=0,WD=1,fs="",je="srgb",yi="srgb-linear",XM="display-p3",Kf=7680,jD=519,$D=512,XD=513,qD=514,YD=515,KD=516,ZD=517,JD=518,QD=519,jp=35044,m0="300 es",$p=1035,ki=2e3,$u=2001;class Ps{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zf=Math.PI/180,Xp=180/Math.PI;function Cr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function an(t,e,n){return Math.max(e,Math.min(n,t))}function eU(t,e){return(t%e+e)%e}function Jf(t,e,n){return(1-n)*t+n*e}function g0(t){return(t&t-1)===0&&t!==0}function qp(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function _r(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ct(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ce{constructor(e=0,n=0){Ce.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,n,i,r,s,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],v=r[0],m=r[3],f=r[6],_=r[1],y=r[4],S=r[7],E=r[2],w=r[5],b=r[8];return s[0]=o*v+a*_+l*E,s[3]=o*m+a*y+l*w,s[6]=o*f+a*S+l*b,s[1]=c*v+u*_+d*E,s[4]=c*m+u*y+d*w,s[7]=c*f+u*S+d*b,s[2]=h*v+p*_+g*E,s[5]=h*m+p*y+g*w,s[8]=h*f+p*S+g*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=n*d+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Qf.makeScale(e,n)),this}rotate(e){return this.premultiply(Qf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Qf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qf=new Ye;function qM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Sl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const v0={};function Ja(t){t in v0||(v0[t]=!0,console.warn(t))}function Co(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function eh(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const tU=new Ye().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),nU=new Ye().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function iU(t){return t.convertSRGBToLinear().applyMatrix3(nU)}function rU(t){return t.applyMatrix3(tU).convertLinearToSRGB()}const sU={[yi]:t=>t,[je]:t=>t.convertSRGBToLinear(),[XM]:iU},oU={[yi]:t=>t,[je]:t=>t.convertLinearToSRGB(),[XM]:rU},Xn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return yi},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=sU[e],r=oU[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Fs;class YM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fs===void 0&&(Fs=Sl("canvas")),Fs.width=e.width,Fs.height=e.height;const i=Fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Sl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Co(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Co(n[i]/255)*255):n[i]=Co(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aU=0;class KM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aU++}),this.uuid=Cr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(th(r[o].image)):s.push(th(r[o]))}else s=th(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function th(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?YM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lU=0;class un extends Ps{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=ti,r=ti,s=yt,o=yl,a=ni,l=br,c=un.DEFAULT_ANISOTROPY,u=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lU++}),this.uuid=Cr(),this.name="",this.source=new KM(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ja("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ds?je:fs),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==BM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gp:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case Wp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gp:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case Wp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ja("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===je?ds:$M}set encoding(e){Ja("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ds?je:fs}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=BM;un.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,n=0,i=0,r=1){Wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,S=(p+1)/2,E=(f+1)/2,w=(u+h)/4,b=(d+v)/4,I=(g+m)/4;return y>S&&y>E?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=b/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=I/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=b/s,r=I/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-v)/_,this.z=(h-u)/_,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class si extends Ps{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Wt(0,0,e,n),this.scissorTest=!1,this.viewport=new Wt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ja("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ds?je:fs),this.texture=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:yt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new KM(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ZM extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cU extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Es{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(d!==v||l!==h||c!==p||u!==g){let m=1-a;const f=l*h+c*p+u*g+d*v,_=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const E=Math.sqrt(y),w=Math.atan2(E,f*_);m=Math.sin(m*w)/E,a=Math.sin(a*w)/E}const S=a*_;if(l=l*m+h*S,c=c*m+p*S,u=u*m+g*S,d=d*m+v*S,m===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=E,c*=E,u*=E,d*=E}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*d+l*p-c*h,e[n+1]=l*g+u*h+c*d-a*p,e[n+2]=c*g+u*p+a*h-l*d,e[n+3]=u*g-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(_0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(_0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*n+o*r-a*i,u=l*i+a*n-s*r,d=l*r+s*i-o*n,h=-s*n-o*i-a*r;return this.x=c*l+h*-s+u*-a-d*-o,this.y=u*l+h*-o+d*-s-c*-a,this.z=d*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nh.copy(this).projectOnVector(e),this.sub(nh)}reflect(e){return this.sub(nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nh=new V,_0=new Es;class zl{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Bs.copy(e.boundingBox),Bs.applyMatrix4(e.matrixWorld),this.union(Bs);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Ri.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ri)}else r.boundingBox===null&&r.computeBoundingBox(),Bs.copy(r.boundingBox),Bs.applyMatrix4(e.matrixWorld),this.union(Bs)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),xc.subVectors(this.max,Ma),zs.subVectors(e.a,Ma),Vs.subVectors(e.b,Ma),Hs.subVectors(e.c,Ma),Qi.subVectors(Vs,zs),er.subVectors(Hs,Vs),$r.subVectors(zs,Hs);let n=[0,-Qi.z,Qi.y,0,-er.z,er.y,0,-$r.z,$r.y,Qi.z,0,-Qi.x,er.z,0,-er.x,$r.z,0,-$r.x,-Qi.y,Qi.x,0,-er.y,er.x,0,-$r.y,$r.x,0];return!ih(n,zs,Vs,Hs,xc)||(n=[1,0,0,0,1,0,0,0,1],!ih(n,zs,Vs,Hs,xc))?!1:(Mc.crossVectors(Qi,er),n=[Mc.x,Mc.y,Mc.z],ih(n,zs,Vs,Hs,xc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new V,new V,new V,new V,new V,new V,new V,new V],Ri=new V,Bs=new zl,zs=new V,Vs=new V,Hs=new V,Qi=new V,er=new V,$r=new V,Ma=new V,xc=new V,Mc=new V,Xr=new V;function ih(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Xr.fromArray(t,s);const a=r.x*Math.abs(Xr.x)+r.y*Math.abs(Xr.y)+r.z*Math.abs(Xr.z),l=e.dot(Xr),c=n.dot(Xr),u=i.dot(Xr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const uU=new zl,wa=new V,rh=new V;class Ag{constructor(e=new V,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):uU.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wa.subVectors(e,this.center);const n=wa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(wa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wa.copy(e.center).add(rh)),this.expandByPoint(wa.copy(e.center).sub(rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new V,sh=new V,wc=new V,tr=new V,oh=new V,Tc=new V,ah=new V;class JM{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,n),Ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){sh.copy(e).add(n).multiplyScalar(.5),wc.copy(n).sub(e).normalize(),tr.copy(this.origin).sub(sh);const s=e.distanceTo(n)*.5,o=-this.direction.dot(wc),a=tr.dot(this.direction),l=-tr.dot(wc),c=tr.lengthSq(),u=Math.abs(1-o*o);let d,h,p,g;if(u>0)if(d=o*l-a,h=o*a-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(sh).addScaledVector(wc,h),p}intersectSphere(e,n){Ai.subVectors(e.center,this.origin);const i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,n,i,r,s){oh.subVectors(n,e),Tc.subVectors(i,e),ah.crossVectors(oh,Tc);let o=this.direction.dot(ah),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;tr.subVectors(this.origin,e);const l=a*this.direction.dot(Tc.crossVectors(tr,Tc));if(l<0)return null;const c=a*this.direction.dot(oh.cross(tr));if(c<0||l+c>o)return null;const u=-a*tr.dot(ah);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,n,i,r,s,o,a,l,c,u,d,h,p,g,v,m){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,h,p,g,v,m)}set(e,n,i,r,s,o,a,l,c,u,d,h,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Gs.setFromMatrixColumn(e,0).length(),s=1/Gs.setFromMatrixColumn(e,1).length(),o=1/Gs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,g=a*u,v=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=h-v*c,n[9]=-a*l,n[2]=v-h*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,g=c*u,v=c*d;n[0]=h+v*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=v+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,g=c*u,v=c*d;n[0]=h-v*a,n[4]=-o*d,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=v-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,g=a*u,v=a*d;n[0]=l*u,n[4]=g*c-p,n[8]=h*c+v,n[1]=l*d,n[5]=v*c+h,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-h*d,n[8]=g*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+g,n[10]=h-v*d}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+v,n[5]=o*u,n[9]=p*d-g,n[2]=g*d-p,n[6]=a*u,n[10]=v*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dU,e,fU)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),nr.crossVectors(i,xn),nr.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),nr.crossVectors(i,xn)),nr.normalize(),Rc.crossVectors(xn,nr),r[0]=nr.x,r[4]=Rc.x,r[8]=xn.x,r[1]=nr.y,r[5]=Rc.y,r[9]=xn.y,r[2]=nr.z,r[6]=Rc.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],_=i[3],y=i[7],S=i[11],E=i[15],w=r[0],b=r[4],I=r[8],x=r[12],R=r[1],te=r[5],ae=r[9],k=r[13],G=r[2],Z=r[6],ue=r[10],Q=r[14],B=r[3],q=r[7],W=r[11],ce=r[15];return s[0]=o*w+a*R+l*G+c*B,s[4]=o*b+a*te+l*Z+c*q,s[8]=o*I+a*ae+l*ue+c*W,s[12]=o*x+a*k+l*Q+c*ce,s[1]=u*w+d*R+h*G+p*B,s[5]=u*b+d*te+h*Z+p*q,s[9]=u*I+d*ae+h*ue+p*W,s[13]=u*x+d*k+h*Q+p*ce,s[2]=g*w+v*R+m*G+f*B,s[6]=g*b+v*te+m*Z+f*q,s[10]=g*I+v*ae+m*ue+f*W,s[14]=g*x+v*k+m*Q+f*ce,s[3]=_*w+y*R+S*G+E*B,s[7]=_*b+y*te+S*Z+E*q,s[11]=_*I+y*ae+S*ue+E*W,s[15]=_*x+y*k+S*Q+E*ce,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+v*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-n*l*d+n*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],_=d*m*c-v*h*c+v*l*p-a*m*p-d*l*f+a*h*f,y=g*h*c-u*m*c-g*l*p+o*m*p+u*l*f-o*h*f,S=u*v*c-g*d*c+g*a*p-o*v*p-u*a*f+o*d*f,E=g*d*l-u*v*l-g*a*h+o*v*h+u*a*m-o*d*m,w=n*_+i*y+r*S+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=_*b,e[1]=(v*h*s-d*m*s-v*r*p+i*m*p+d*r*f-i*h*f)*b,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*f+i*l*f)*b,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*b,e[4]=y*b,e[5]=(u*m*s-g*h*s+g*r*p-n*m*p-u*r*f+n*h*f)*b,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*f-n*l*f)*b,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*b,e[8]=S*b,e[9]=(g*d*s-u*v*s-g*i*p+n*v*p+u*i*f-n*d*f)*b,e[10]=(o*v*s-g*a*s+g*i*c-n*v*c-o*i*f+n*a*f)*b,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*b,e[12]=E*b,e[13]=(u*v*r-g*d*r+g*i*h-n*v*h-u*i*m+n*d*m)*b,e[14]=(g*a*r-o*v*r-g*i*l+n*v*l+o*i*m-n*a*m)*b,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*h+n*a*h)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,g=s*d,v=o*u,m=o*d,f=a*d,_=l*c,y=l*u,S=l*d,E=i.x,w=i.y,b=i.z;return r[0]=(1-(v+f))*E,r[1]=(p+S)*E,r[2]=(g-y)*E,r[3]=0,r[4]=(p-S)*w,r[5]=(1-(h+f))*w,r[6]=(m+_)*w,r[7]=0,r[8]=(g+y)*b,r[9]=(m-_)*b,r[10]=(1-(h+v))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Gs.set(r[0],r[1],r[2]).length();const o=Gs.set(r[4],r[5],r[6]).length(),a=Gs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);const c=1/s,u=1/o,d=1/a;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,n.setFromRotationMatrix(qn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ki){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(a===ki)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===$u)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ki){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),h=(n+e)*c,p=(i+r)*u;let g,v;if(a===ki)g=(o+s)*d,v=-2*d;else if(a===$u)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Gs=new V,qn=new Ht,dU=new V(0,0,0),fU=new V(1,1,1),nr=new V,Rc=new V,xn=new V,y0=new Ht,S0=new Es;class $d{constructor(e=0,n=0,i=0,r=$d.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-an(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return y0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(y0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return S0.setFromEuler(this),this.setFromQuaternion(S0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$d.DEFAULT_ORDER="XYZ";class bg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hU=0;const E0=new V,Ws=new Es,bi=new Ht,Ac=new V,Ta=new V,pU=new V,mU=new Es,x0=new V(1,0,0),M0=new V(0,1,0),w0=new V(0,0,1),gU={type:"added"},T0={type:"removed"};class dn extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hU++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new V,n=new $d,i=new Es,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ht},normalMatrix:{value:new Ye}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new bg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ws.setFromAxisAngle(e,n),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,n){return Ws.setFromAxisAngle(e,n),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(x0,e)}rotateY(e){return this.rotateOnAxis(M0,e)}rotateZ(e){return this.rotateOnAxis(w0,e)}translateOnAxis(e,n){return E0.copy(e).applyQuaternion(this.quaternion),this.position.add(E0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(x0,e)}translateY(e){return this.translateOnAxis(M0,e)}translateZ(e){return this.translateOnAxis(w0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ac.copy(e):Ac.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Ta,Ac,this.up):bi.lookAt(Ac,Ta,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),Ws.setFromRotationMatrix(bi),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gU)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(T0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(T0)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,e,pU),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,mU,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}dn.DEFAULT_UP=new V(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new V,Ci=new V,lh=new V,Li=new V,js=new V,$s=new V,R0=new V,ch=new V,uh=new V,dh=new V;let bc=!1;class Un{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Yn.subVectors(e,n),r.cross(Yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Yn.subVectors(r,n),Ci.subVectors(i,n),lh.subVectors(e,n);const o=Yn.dot(Yn),a=Yn.dot(Ci),l=Yn.dot(lh),c=Ci.dot(Ci),u=Ci.dot(lh),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const h=1/d,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Li),Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getUV(e,n,i,r,s,o,a,l){return bc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bc=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Li),l.setScalar(0),l.addScaledVector(s,Li.x),l.addScaledVector(o,Li.y),l.addScaledVector(a,Li.z),l}static isFrontFacing(e,n,i,r){return Yn.subVectors(i,n),Ci.subVectors(e,n),Yn.cross(Ci).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),Yn.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Un.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return bc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bc=!0),Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Un.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;js.subVectors(r,i),$s.subVectors(s,i),ch.subVectors(e,i);const l=js.dot(ch),c=$s.dot(ch);if(l<=0&&c<=0)return n.copy(i);uh.subVectors(e,r);const u=js.dot(uh),d=$s.dot(uh);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(js,o);dh.subVectors(e,s);const p=js.dot(dh),g=$s.dot(dh);if(g>=0&&p<=g)return n.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector($s,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return R0.subVectors(s,r),a=(d-u)/(d-u+(p-g)),n.copy(r).addScaledVector(R0,a);const f=1/(m+v+h);return o=v*f,a=h*f,n.copy(i).addScaledVector(js,o).addScaledVector($s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let vU=0;class Is extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vU++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=bo,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=kM,this.blendDst=FM,this.blendEquation=so,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=zp,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jD,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kf,this.stencilZFail=Kf,this.stencilZPass=Kf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bo&&(i.blending=this.blending),this.side!==Dr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const QM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function fh(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Xn.workingColorSpace){return this.r=e,this.g=n,this.b=i,Xn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Xn.workingColorSpace){if(e=eU(e,1),n=an(n,0,1),i=an(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=fh(o,s,e+1/3),this.g=fh(o,s,e),this.b=fh(o,s,e-1/3)}return Xn.toWorkingColorSpace(this,r),this}setStyle(e,n=je){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=je){const i=QM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}copyLinearToSRGB(e){return this.r=eh(e.r),this.g=eh(e.g),this.b=eh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=je){return Xn.fromWorkingColorSpace(Kt.copy(this),e),Math.round(an(Kt.r*255,0,255))*65536+Math.round(an(Kt.g*255,0,255))*256+Math.round(an(Kt.b*255,0,255))}getHexString(e=je){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Xn.workingColorSpace){Xn.fromWorkingColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,s=Kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Xn.workingColorSpace){return Xn.fromWorkingColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=je){Xn.fromWorkingColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==je?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Kn),Kn.h+=e,Kn.s+=n,Kn.l+=i,this.setHSL(Kn.h,Kn.s,Kn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Kn),e.getHSL(Cc);const i=Jf(Kn.h,Cc.h,n),r=Jf(Kn.s,Cc.s,n),s=Jf(Kn.l,Cc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Ze;Ze.NAMES=QM;class Xd extends Is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new V,Lc=new Ce;class oi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=jp,this.updateRange={offset:0,count:-1},this.gpuType=vr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Lc.fromBufferAttribute(this,n),Lc.applyMatrix3(e),this.setXY(n,Lc.x,Lc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=_r(n,this.array)),n}setX(e,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=_r(n,this.array)),n}setY(e,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=_r(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=_r(n,this.array)),n}setW(e,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array),s=ct(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ew extends oi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class tw extends oi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class zn extends oi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let _U=0;const In=new Ht,hh=new dn,Xs=new V,Mn=new zl,Ra=new zl,Bt=new V;class xi extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_U++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qM(e)?tw:ew)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,n,i){return In.makeTranslation(e,n,i),this.applyMatrix4(In),this}scale(e,n,i){return In.makeScale(e,n,i),this.applyMatrix4(In),this}lookAt(e){return hh.lookAt(e),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ag);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ra.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(Mn.min,Ra.min),Mn.expandByPoint(Bt),Bt.addVectors(Mn.max,Ra.max),Mn.expandByPoint(Bt)):(Mn.expandByPoint(Ra.min),Mn.expandByPoint(Ra.max))}Mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Bt.fromBufferAttribute(a,c),l&&(Xs.fromBufferAttribute(e,c),Bt.add(Xs)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new V,u[R]=new V;const d=new V,h=new V,p=new V,g=new Ce,v=new Ce,m=new Ce,f=new V,_=new V;function y(R,te,ae){d.fromArray(r,R*3),h.fromArray(r,te*3),p.fromArray(r,ae*3),g.fromArray(o,R*2),v.fromArray(o,te*2),m.fromArray(o,ae*2),h.sub(d),p.sub(d),v.sub(g),m.sub(g);const k=1/(v.x*m.y-m.x*v.y);isFinite(k)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(k),_.copy(p).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar(k),c[R].add(f),c[te].add(f),c[ae].add(f),u[R].add(_),u[te].add(_),u[ae].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let R=0,te=S.length;R<te;++R){const ae=S[R],k=ae.start,G=ae.count;for(let Z=k,ue=k+G;Z<ue;Z+=3)y(i[Z+0],i[Z+1],i[Z+2])}const E=new V,w=new V,b=new V,I=new V;function x(R){b.fromArray(s,R*3),I.copy(b);const te=c[R];E.copy(te),E.sub(b.multiplyScalar(b.dot(te))).normalize(),w.crossVectors(I,te);const k=w.dot(u[R])<0?-1:1;l[R*4]=E.x,l[R*4+1]=E.y,l[R*4+2]=E.z,l[R*4+3]=k}for(let R=0,te=S.length;R<te;++R){const ae=S[R],k=ae.start,G=ae.count;for(let Z=k,ue=k+G;Z<ue;Z+=3)x(i[Z+0]),x(i[Z+1]),x(i[Z+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,u=new V,d=new V;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new oi(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const A0=new Ht,qr=new JM,Pc=new Ag,b0=new V,qs=new V,Ys=new V,Ks=new V,ph=new V,Ic=new V,Nc=new Ce,Dc=new Ce,Uc=new Ce,C0=new V,L0=new V,P0=new V,Oc=new V,kc=new V;class Fn extends dn{constructor(e=new xi,n=new Xd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ic.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(ph.fromBufferAttribute(d,e),o?Ic.addScaledVector(ph,u):Ic.addScaledVector(ph.sub(n),u))}n.add(Ic)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pc.copy(i.boundingSphere),Pc.applyMatrix4(s),qr.copy(e.ray).recast(e.near),!(Pc.containsPoint(qr.origin)===!1&&(qr.intersectSphere(Pc,b0)===null||qr.origin.distanceToSquared(b0)>(e.far-e.near)**2))&&(A0.copy(s).invert(),qr.copy(e.ray).applyMatrix4(A0),!(i.boundingBox!==null&&qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,qr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,E=y;S<E;S+=3){const w=a.getX(S),b=a.getX(S+1),I=a.getX(S+2);r=Fc(this,f,e,i,c,u,d,w,b,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const _=a.getX(m),y=a.getX(m+1),S=a.getX(m+2);r=Fc(this,o,e,i,c,u,d,_,y,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,E=y;S<E;S+=3){const w=S,b=S+1,I=S+2;r=Fc(this,f,e,i,c,u,d,w,b,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const _=m,y=m+1,S=m+2;r=Fc(this,o,e,i,c,u,d,_,y,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function yU(t,e,n,i,r,s,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Dr,a),l===null)return null;kc.copy(a),kc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(kc);return c<n.near||c>n.far?null:{distance:c,point:kc.clone(),object:t}}function Fc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,qs),t.getVertexPosition(l,Ys),t.getVertexPosition(c,Ks);const u=yU(t,e,n,i,qs,Ys,Ks,Oc);if(u){r&&(Nc.fromBufferAttribute(r,a),Dc.fromBufferAttribute(r,l),Uc.fromBufferAttribute(r,c),u.uv=Un.getInterpolation(Oc,qs,Ys,Ks,Nc,Dc,Uc,new Ce)),s&&(Nc.fromBufferAttribute(s,a),Dc.fromBufferAttribute(s,l),Uc.fromBufferAttribute(s,c),u.uv1=Un.getInterpolation(Oc,qs,Ys,Ks,Nc,Dc,Uc,new Ce),u.uv2=u.uv1),o&&(C0.fromBufferAttribute(o,a),L0.fromBufferAttribute(o,l),P0.fromBufferAttribute(o,c),u.normal=Un.getInterpolation(Oc,qs,Ys,Ks,C0,L0,P0,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new V,materialIndex:0};Un.getNormal(qs,Ys,Ks,d.normal),u.face=d}return u}class Vl extends xi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new zn(c,3)),this.setAttribute("normal",new zn(u,3)),this.setAttribute("uv",new zn(d,2));function g(v,m,f,_,y,S,E,w,b,I,x){const R=S/b,te=E/I,ae=S/2,k=E/2,G=w/2,Z=b+1,ue=I+1;let Q=0,B=0;const q=new V;for(let W=0;W<ue;W++){const ce=W*te-k;for(let M=0;M<Z;M++){const U=M*R-ae;q[v]=U*_,q[m]=ce*y,q[f]=G,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[f]=w>0?1:-1,u.push(q.x,q.y,q.z),d.push(M/b),d.push(1-W/I),Q+=1}}for(let W=0;W<I;W++)for(let ce=0;ce<b;ce++){const M=h+ce+Z*W,U=h+ce+Z*(W+1),O=h+(ce+1)+Z*(W+1),Y=h+(ce+1)+Z*W;l.push(M,U,Y),l.push(U,O,Y),B+=6}a.addGroup(p,B,x),p+=B,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=qo(t[n]);for(const r in i)e[r]=i[r]}return e}function SU(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function nw(t){return t.getRenderTarget()===null?t.outputColorSpace:yi}const Xu={clone:qo,merge:rn};var EU=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xU=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends Is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EU,this.fragmentShader=xU,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qo(e.uniforms),this.uniformsGroups=SU(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class iw extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=ki}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Tn extends iw{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Xp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xp*2*Math.atan(Math.tan(Zf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Zf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Zs=-90,Js=1;class MU extends dn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Tn(Zs,Js,e,n);r.layers=this.layers,this.add(r);const s=new Tn(Zs,Js,e,n);s.layers=this.layers,this.add(s);const o=new Tn(Zs,Js,e,n);o.layers=this.layers,this.add(o);const a=new Tn(Zs,Js,e,n);a.layers=this.layers,this.add(a);const l=new Tn(Zs,Js,e,n);l.layers=this.layers,this.add(l);const c=new Tn(Zs,Js,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ki)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$u)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=Vi,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class rw extends un{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:jo,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wU extends si{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ja("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ds?je:fs),this.texture=new rw(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Vl(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:qo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Ar});s.uniforms.tEquirect.value=n;const o=new Fn(r,s),a=n.minFilter;return n.minFilter===yl&&(n.minFilter=yt),new MU(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const mh=new V,TU=new V,RU=new Ye;class Jr{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=mh.subVectors(i,n).cross(TU.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(mh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||RU.getNormalMatrix(e),r=this.coplanarPoint(mh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new Ag,Bc=new V;class sw{constructor(e=new Jr,n=new Jr,i=new Jr,r=new Jr,s=new Jr,o=new Jr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ki){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],g=r[9],v=r[10],m=r[11],f=r[12],_=r[13],y=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,m-p,S-f).normalize(),i[1].setComponents(l+s,h+c,m+p,S+f).normalize(),i[2].setComponents(l+o,h+u,m+g,S+_).normalize(),i[3].setComponents(l-o,h-u,m-g,S-_).normalize(),i[4].setComponents(l-a,h-d,m-v,S-y).normalize(),n===ki)i[5].setComponents(l+a,h+d,m+v,S+y).normalize();else if(n===$u)i[5].setComponents(a,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Bc.x=r.normal.x>0?e.max.x:e.min.x,Bc.y=r.normal.y>0?e.max.y:e.min.y,Bc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ow(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function AU(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,h=c.usage,p=t.createBuffer();t.bindBuffer(u,p),t.bufferData(u,d,h),c.onUploadCallback();let g;if(d instanceof Float32Array)g=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)g=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=t.SHORT;else if(d instanceof Uint32Array)g=t.UNSIGNED_INT;else if(d instanceof Int32Array)g=t.INT;else if(d instanceof Int8Array)g=t.BYTE;else if(d instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const h=u.array,p=u.updateRange;t.bindBuffer(d,c),p.count===-1?t.bufferSubData(d,0,h):(n?t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:o,remove:a,update:l}}class Cg extends xi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=n/l,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const _=f*h-o;for(let y=0;y<c;y++){const S=y*d-s;g.push(S,-_,0),v.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const y=_+c*f,S=_+c*(f+1),E=_+1+c*(f+1),w=_+1+c*f;p.push(y,S,w),p.push(S,E,w)}this.setIndex(p),this.setAttribute("position",new zn(g,3)),this.setAttribute("normal",new zn(v,3)),this.setAttribute("uv",new zn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cg(e.width,e.height,e.widthSegments,e.heightSegments)}}var bU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LU=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,PU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IU=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DU="vec3 transformed = vec3( position );",UU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OU=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kU=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,FU=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,BU=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,zU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GU=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$U=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,XU=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qU=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,YU=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,KU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZU=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QU=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e3="gl_FragColor = linearToOutputTexel( gl_FragColor );",t3=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,i3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,s3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,a3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,f3=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,h3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,v3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,M3=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,w3=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,T3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,R3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,A3=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b3=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C3=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,L3=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,P3=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,I3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,D3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k3=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,B3=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,z3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,V3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,H3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,G3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,X3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,q3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Y3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Q3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eO=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tO=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nO=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iO=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rO=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sO=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,oO=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aO=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lO=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cO=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uO=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,dO=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fO=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hO=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pO=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mO=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gO=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vO=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_O=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yO=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SO=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EO=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xO=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const MO=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wO=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,TO=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RO=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,AO=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bO=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,CO=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,LO=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,PO=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,IO=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,NO=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DO=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,UO=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OO=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kO=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,FO=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BO=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zO=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VO=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HO=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GO=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WO=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jO=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$O=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XO=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qO=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YO=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KO=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZO=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,JO=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QO=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ek=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,tk=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nk=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,qe={alphamap_fragment:bU,alphamap_pars_fragment:CU,alphatest_fragment:LU,alphatest_pars_fragment:PU,aomap_fragment:IU,aomap_pars_fragment:NU,begin_vertex:DU,beginnormal_vertex:UU,bsdfs:OU,iridescence_fragment:kU,bumpmap_pars_fragment:FU,clipping_planes_fragment:BU,clipping_planes_pars_fragment:zU,clipping_planes_pars_vertex:VU,clipping_planes_vertex:HU,color_fragment:GU,color_pars_fragment:WU,color_pars_vertex:jU,color_vertex:$U,common:XU,cube_uv_reflection_fragment:qU,defaultnormal_vertex:YU,displacementmap_pars_vertex:KU,displacementmap_vertex:ZU,emissivemap_fragment:JU,emissivemap_pars_fragment:QU,encodings_fragment:e3,encodings_pars_fragment:t3,envmap_fragment:n3,envmap_common_pars_fragment:i3,envmap_pars_fragment:r3,envmap_pars_vertex:s3,envmap_physical_pars_fragment:v3,envmap_vertex:o3,fog_vertex:a3,fog_pars_vertex:l3,fog_fragment:c3,fog_pars_fragment:u3,gradientmap_pars_fragment:d3,lightmap_fragment:f3,lightmap_pars_fragment:h3,lights_lambert_fragment:p3,lights_lambert_pars_fragment:m3,lights_pars_begin:g3,lights_toon_fragment:_3,lights_toon_pars_fragment:y3,lights_phong_fragment:S3,lights_phong_pars_fragment:E3,lights_physical_fragment:x3,lights_physical_pars_fragment:M3,lights_fragment_begin:w3,lights_fragment_maps:T3,lights_fragment_end:R3,logdepthbuf_fragment:A3,logdepthbuf_pars_fragment:b3,logdepthbuf_pars_vertex:C3,logdepthbuf_vertex:L3,map_fragment:P3,map_pars_fragment:I3,map_particle_fragment:N3,map_particle_pars_fragment:D3,metalnessmap_fragment:U3,metalnessmap_pars_fragment:O3,morphcolor_vertex:k3,morphnormal_vertex:F3,morphtarget_pars_vertex:B3,morphtarget_vertex:z3,normal_fragment_begin:V3,normal_fragment_maps:H3,normal_pars_fragment:G3,normal_pars_vertex:W3,normal_vertex:j3,normalmap_pars_fragment:$3,clearcoat_normal_fragment_begin:X3,clearcoat_normal_fragment_maps:q3,clearcoat_pars_fragment:Y3,iridescence_pars_fragment:K3,output_fragment:Z3,packing:J3,premultiplied_alpha_fragment:Q3,project_vertex:eO,dithering_fragment:tO,dithering_pars_fragment:nO,roughnessmap_fragment:iO,roughnessmap_pars_fragment:rO,shadowmap_pars_fragment:sO,shadowmap_pars_vertex:oO,shadowmap_vertex:aO,shadowmask_pars_fragment:lO,skinbase_vertex:cO,skinning_pars_vertex:uO,skinning_vertex:dO,skinnormal_vertex:fO,specularmap_fragment:hO,specularmap_pars_fragment:pO,tonemapping_fragment:mO,tonemapping_pars_fragment:gO,transmission_fragment:vO,transmission_pars_fragment:_O,uv_pars_fragment:yO,uv_pars_vertex:SO,uv_vertex:EO,worldpos_vertex:xO,background_vert:MO,background_frag:wO,backgroundCube_vert:TO,backgroundCube_frag:RO,cube_vert:AO,cube_frag:bO,depth_vert:CO,depth_frag:LO,distanceRGBA_vert:PO,distanceRGBA_frag:IO,equirect_vert:NO,equirect_frag:DO,linedashed_vert:UO,linedashed_frag:OO,meshbasic_vert:kO,meshbasic_frag:FO,meshlambert_vert:BO,meshlambert_frag:zO,meshmatcap_vert:VO,meshmatcap_frag:HO,meshnormal_vert:GO,meshnormal_frag:WO,meshphong_vert:jO,meshphong_frag:$O,meshphysical_vert:XO,meshphysical_frag:qO,meshtoon_vert:YO,meshtoon_frag:KO,points_vert:ZO,points_frag:JO,shadow_vert:QO,shadow_frag:ek,sprite_vert:tk,sprite_frag:nk},Ee={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},di={basic:{uniforms:rn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:rn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:rn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:rn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:rn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:rn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:rn([Ee.points,Ee.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:rn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:rn([Ee.common,Ee.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:rn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:rn([Ee.sprite,Ee.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:rn([Ee.common,Ee.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:rn([Ee.lights,Ee.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};di.physical={uniforms:rn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const zc={r:0,b:0,g:0};function ik(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function g(m,f){let _=!1,y=f.isScene===!0?f.background:null;switch(y&&y.isTexture&&(y=(f.backgroundBlurriness>0?n:e).get(y)),y===null?v(a,l):y&&y.isColor&&(v(y,1),_=!0),t.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),_=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),_=!0;break}(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),y&&(y.isCubeTexture||y.mapping===jd)?(u===void 0&&(u=new Fn(new Vl(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:qo(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,b,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=y.colorSpace!==je,(d!==y||h!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,h=y.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Fn(new Cg(2,2),new An({name:"BackgroundMaterial",uniforms:qo(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=y.colorSpace!==je,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,f){m.getRGB(zc,nw(t)),i.buffers.color.setClear(zc.r,zc.g,zc.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function rk(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function d(G,Z,ue,Q,B){let q=!1;if(o){const W=v(Q,ue,Z);c!==W&&(c=W,p(c.object)),q=f(G,Q,ue,B),q&&_(G,Q,ue,B)}else{const W=Z.wireframe===!0;(c.geometry!==Q.id||c.program!==ue.id||c.wireframe!==W)&&(c.geometry=Q.id,c.program=ue.id,c.wireframe=W,q=!0)}B!==null&&n.update(B,t.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,I(G,Z,ue,Q),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(B).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(G){return i.isWebGL2?t.bindVertexArray(G):s.bindVertexArrayOES(G)}function g(G){return i.isWebGL2?t.deleteVertexArray(G):s.deleteVertexArrayOES(G)}function v(G,Z,ue){const Q=ue.wireframe===!0;let B=a[G.id];B===void 0&&(B={},a[G.id]=B);let q=B[Z.id];q===void 0&&(q={},B[Z.id]=q);let W=q[Q];return W===void 0&&(W=m(h()),q[Q]=W),W}function m(G){const Z=[],ue=[],Q=[];for(let B=0;B<r;B++)Z[B]=0,ue[B]=0,Q[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:ue,attributeDivisors:Q,object:G,attributes:{},index:null}}function f(G,Z,ue,Q){const B=c.attributes,q=Z.attributes;let W=0;const ce=ue.getAttributes();for(const M in ce)if(ce[M].location>=0){const O=B[M];let Y=q[M];if(Y===void 0&&(M==="instanceMatrix"&&G.instanceMatrix&&(Y=G.instanceMatrix),M==="instanceColor"&&G.instanceColor&&(Y=G.instanceColor)),O===void 0||O.attribute!==Y||Y&&O.data!==Y.data)return!0;W++}return c.attributesNum!==W||c.index!==Q}function _(G,Z,ue,Q){const B={},q=Z.attributes;let W=0;const ce=ue.getAttributes();for(const M in ce)if(ce[M].location>=0){let O=q[M];O===void 0&&(M==="instanceMatrix"&&G.instanceMatrix&&(O=G.instanceMatrix),M==="instanceColor"&&G.instanceColor&&(O=G.instanceColor));const Y={};Y.attribute=O,O&&O.data&&(Y.data=O.data),B[M]=Y,W++}c.attributes=B,c.attributesNum=W,c.index=Q}function y(){const G=c.newAttributes;for(let Z=0,ue=G.length;Z<ue;Z++)G[Z]=0}function S(G){E(G,0)}function E(G,Z){const ue=c.newAttributes,Q=c.enabledAttributes,B=c.attributeDivisors;ue[G]=1,Q[G]===0&&(t.enableVertexAttribArray(G),Q[G]=1),B[G]!==Z&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,Z),B[G]=Z)}function w(){const G=c.newAttributes,Z=c.enabledAttributes;for(let ue=0,Q=Z.length;ue<Q;ue++)Z[ue]!==G[ue]&&(t.disableVertexAttribArray(ue),Z[ue]=0)}function b(G,Z,ue,Q,B,q,W){W===!0?t.vertexAttribIPointer(G,Z,ue,B,q):t.vertexAttribPointer(G,Z,ue,Q,B,q)}function I(G,Z,ue,Q){if(i.isWebGL2===!1&&(G.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const B=Q.attributes,q=ue.getAttributes(),W=Z.defaultAttributeValues;for(const ce in q){const M=q[ce];if(M.location>=0){let U=B[ce];if(U===void 0&&(ce==="instanceMatrix"&&G.instanceMatrix&&(U=G.instanceMatrix),ce==="instanceColor"&&G.instanceColor&&(U=G.instanceColor)),U!==void 0){const O=U.normalized,Y=U.itemSize,X=n.get(U);if(X===void 0)continue;const pe=X.buffer,Se=X.type,he=X.bytesPerElement,De=i.isWebGL2===!0&&(Se===t.INT||Se===t.UNSIGNED_INT||U.gpuType===zM);if(U.isInterleavedBufferAttribute){const Pe=U.data,z=Pe.stride,Be=U.offset;if(Pe.isInstancedInterleavedBuffer){for(let Re=0;Re<M.locationSize;Re++)E(M.location+Re,Pe.meshPerAttribute);G.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let Re=0;Re<M.locationSize;Re++)S(M.location+Re);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let Re=0;Re<M.locationSize;Re++)b(M.location+Re,Y/M.locationSize,Se,O,z*he,(Be+Y/M.locationSize*Re)*he,De)}else{if(U.isInstancedBufferAttribute){for(let Pe=0;Pe<M.locationSize;Pe++)E(M.location+Pe,U.meshPerAttribute);G.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let Pe=0;Pe<M.locationSize;Pe++)S(M.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let Pe=0;Pe<M.locationSize;Pe++)b(M.location+Pe,Y/M.locationSize,Se,O,Y*he,Y/M.locationSize*Pe*he,De)}}else if(W!==void 0){const O=W[ce];if(O!==void 0)switch(O.length){case 2:t.vertexAttrib2fv(M.location,O);break;case 3:t.vertexAttrib3fv(M.location,O);break;case 4:t.vertexAttrib4fv(M.location,O);break;default:t.vertexAttrib1fv(M.location,O)}}}}w()}function x(){ae();for(const G in a){const Z=a[G];for(const ue in Z){const Q=Z[ue];for(const B in Q)g(Q[B].object),delete Q[B];delete Z[ue]}delete a[G]}}function R(G){if(a[G.id]===void 0)return;const Z=a[G.id];for(const ue in Z){const Q=Z[ue];for(const B in Q)g(Q[B].object),delete Q[B];delete Z[ue]}delete a[G.id]}function te(G){for(const Z in a){const ue=a[Z];if(ue[G.id]===void 0)continue;const Q=ue[G.id];for(const B in Q)g(Q[B].object),delete Q[B];delete ue[G.id]}}function ae(){k(),u=!0,c!==l&&(c=l,p(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:ae,resetDefaultState:k,dispose:x,releaseStatesOfGeometry:R,releaseStatesOfProgram:te,initAttributes:y,enableAttribute:S,disableUnusedAttributes:w}}function sk(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){t.drawArrays(s,c,u),n.update(u,s,1)}function l(c,u,d){if(d===0)return;let h,p;if(r)h=t,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,d),n.update(u,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function ok(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=h>0,S=o||e.has("OES_texture_float"),E=y&&S,w=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:E,maxSamples:w}}function ak(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Jr,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,y=_*4;let S=f.clippingState||null;l.value=S,S=u(g,h,y,p);for(let E=0;E!==y;++E)S[E]=n[E];f.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,S=p;y!==v;++y,S+=4)o.copy(d[y]).applyMatrix4(_,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function lk(t){let e=new WeakMap;function n(o,a){return a===Vp?o.mapping=jo:a===Hp&&(o.mapping=$o),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Vp||a===Hp)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new wU(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class aw extends iw{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const yo=4,I0=[.125,.215,.35,.446,.526,.582],ns=20,gh=new aw,N0=new Ze;let vh=null;const Qr=(1+Math.sqrt(5))/2,Qs=1/Qr,D0=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Qr,Qs),new V(0,Qr,-Qs),new V(Qs,0,Qr),new V(-Qs,0,Qr),new V(Qr,Qs,0),new V(-Qr,Qs,0)];class U0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){vh=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=F0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=k0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vh),e.scissorTest=!1,Vc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===jo||e.mapping===$o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vh=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:Hi,format:ni,colorSpace:yi,depthBuffer:!1},r=O0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=O0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ck(s)),this._blurMaterial=uk(s,e,n)}return r}_compileMaterial(e){const n=new Fn(this._lodPlanes[0],e);this._renderer.compile(n,gh)}_sceneToCubeUV(e,n,i,r){const a=new Tn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(N0),u.toneMapping=Vi,u.autoClear=!1;const p=new Xd({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new Fn(new Vl,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(N0),v=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const y=this._cubeSize;Vc(r,_*y,f>2?y:0,y,y),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===jo||e.mapping===$o;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=F0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=k0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Fn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Vc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,gh)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=D0[(r-1)%D0.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Fn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ns-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):ns;m>ns&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);const f=[];let _=0;for(let b=0;b<ns;++b){const I=b/v,x=Math.exp(-I*I/2);f.push(x),b===0?_+=x:b<m&&(_+=2*x)}for(let b=0;b<f.length;b++)f[b]=f[b]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const S=this._sizeLods[r],E=3*S*(r>y-yo?r-y+yo:0),w=4*(this._cubeSize-S);Vc(n,E,w,3*S,2*S),l.setRenderTarget(n),l.render(d,gh)}}function ck(t){const e=[],n=[],i=[];let r=t;const s=t-yo+1+I0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-yo?l=I0[o-t+yo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,v=3,m=2,f=1,_=new Float32Array(v*g*p),y=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let w=0;w<p;w++){const b=w%3*2/3-1,I=w>2?0:-1,x=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];_.set(x,v*g*w),y.set(h,m*g*w);const R=[w,w,w,w,w,w];S.set(R,f*g*w)}const E=new xi;E.setAttribute("position",new oi(_,v)),E.setAttribute("uv",new oi(y,m)),E.setAttribute("faceIndex",new oi(S,f)),e.push(E),r>yo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function O0(t,e,n){const i=new si(t,e,n);return i.texture.mapping=jd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function uk(t,e,n){const i=new Float32Array(ns),r=new V(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Lg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function k0(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function F0(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Lg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dk(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vp||l===Hp,u=l===jo||l===$o;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new U0(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){n===null&&(n=new U0(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function fk(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function hk(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let y=0,S=_.length;y<S;y+=3){const E=_[y+0],w=_[y+1],b=_[y+2];h.push(E,w,w,b,b,E)}}else{const _=g.array;v=g.version;for(let y=0,S=_.length/3-1;y<S;y+=3){const E=y+0,w=y+1,b=y+2;h.push(E,w,w,b,b,E)}}const m=new(qM(h)?tw:ew)(h,1);m.version=v;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function pk(t,e,n,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){t.drawElements(s,p,a,h*l),n.update(p,s,1)}function d(h,p,g){if(g===0)return;let v,m;if(r)v=t,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,p,a,h*l,g),n.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function mk(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function gk(t,e){return t[0]-e[0]}function vk(t,e){return Math.abs(e[1])-Math.abs(t[1])}function _k(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Wt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==v){let Z=function(){k.dispose(),s.delete(u),u.removeEventListener("dispose",Z)};var p=Z;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let x=0;y===!0&&(x=1),S===!0&&(x=2),E===!0&&(x=3);let R=u.attributes.position.count*x,te=1;R>e.maxTextureSize&&(te=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const ae=new Float32Array(R*te*4*v),k=new ZM(ae,R,te,v);k.type=vr,k.needsUpdate=!0;const G=x*4;for(let ue=0;ue<v;ue++){const Q=w[ue],B=b[ue],q=I[ue],W=R*te*4*ue;for(let ce=0;ce<Q.count;ce++){const M=ce*G;y===!0&&(o.fromBufferAttribute(Q,ce),ae[W+M+0]=o.x,ae[W+M+1]=o.y,ae[W+M+2]=o.z,ae[W+M+3]=0),S===!0&&(o.fromBufferAttribute(B,ce),ae[W+M+4]=o.x,ae[W+M+5]=o.y,ae[W+M+6]=o.z,ae[W+M+7]=0),E===!0&&(o.fromBufferAttribute(q,ce),ae[W+M+8]=o.x,ae[W+M+9]=o.y,ae[W+M+10]=o.z,ae[W+M+11]=q.itemSize===4?o.w:1)}}m={count:v,texture:k,size:new Ce(R,te)},s.set(u,m),u.addEventListener("dispose",Z)}let f=0;for(let y=0;y<h.length;y++)f+=h[y];const _=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let v=i[u.id];if(v===void 0||v.length!==g){v=[];for(let S=0;S<g;S++)v[S]=[S,0];i[u.id]=v}for(let S=0;S<g;S++){const E=v[S];E[0]=S,E[1]=h[S]}v.sort(vk);for(let S=0;S<8;S++)S<g&&v[S][1]?(a[S][0]=v[S][0],a[S][1]=v[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(gk);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let _=0;for(let S=0;S<8;S++){const E=a[S],w=E[0],b=E[1];w!==Number.MAX_SAFE_INTEGER&&b?(m&&u.getAttribute("morphTarget"+S)!==m[w]&&u.setAttribute("morphTarget"+S,m[w]),f&&u.getAttribute("morphNormal"+S)!==f[w]&&u.setAttribute("morphNormal"+S,f[w]),r[S]=b,_+=b):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),f&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const y=u.morphTargetsRelative?1:1-_;d.getUniforms().setValue(t,"morphTargetBaseInfluence",y),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function yk(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);return r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER)),d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const lw=new un,cw=new ZM,uw=new cU,dw=new rw,B0=[],z0=[],V0=new Float32Array(16),H0=new Float32Array(9),G0=new Float32Array(4);function ra(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=B0[r];if(s===void 0&&(s=new Float32Array(r),B0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function qd(t,e){let n=z0[e];n===void 0&&(n=new Int32Array(e),z0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Sk(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Ek(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function xk(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function Mk(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function wk(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ut(n,i))return;G0.set(i),t.uniformMatrix2fv(this.addr,!1,G0),Ot(n,i)}}function Tk(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ut(n,i))return;H0.set(i),t.uniformMatrix3fv(this.addr,!1,H0),Ot(n,i)}}function Rk(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ut(n,i))return;V0.set(i),t.uniformMatrix4fv(this.addr,!1,V0),Ot(n,i)}}function Ak(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function bk(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function Ck(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function Lk(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function Pk(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Ik(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function Nk(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function Dk(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function Uk(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||lw,r)}function Ok(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||uw,r)}function kk(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||dw,r)}function Fk(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||cw,r)}function Bk(t){switch(t){case 5126:return Sk;case 35664:return Ek;case 35665:return xk;case 35666:return Mk;case 35674:return wk;case 35675:return Tk;case 35676:return Rk;case 5124:case 35670:return Ak;case 35667:case 35671:return bk;case 35668:case 35672:return Ck;case 35669:case 35673:return Lk;case 5125:return Pk;case 36294:return Ik;case 36295:return Nk;case 36296:return Dk;case 35678:case 36198:case 36298:case 36306:case 35682:return Uk;case 35679:case 36299:case 36307:return Ok;case 35680:case 36300:case 36308:case 36293:return kk;case 36289:case 36303:case 36311:case 36292:return Fk}}function zk(t,e){t.uniform1fv(this.addr,e)}function Vk(t,e){const n=ra(e,this.size,2);t.uniform2fv(this.addr,n)}function Hk(t,e){const n=ra(e,this.size,3);t.uniform3fv(this.addr,n)}function Gk(t,e){const n=ra(e,this.size,4);t.uniform4fv(this.addr,n)}function Wk(t,e){const n=ra(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function jk(t,e){const n=ra(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $k(t,e){const n=ra(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Xk(t,e){t.uniform1iv(this.addr,e)}function qk(t,e){t.uniform2iv(this.addr,e)}function Yk(t,e){t.uniform3iv(this.addr,e)}function Kk(t,e){t.uniform4iv(this.addr,e)}function Zk(t,e){t.uniform1uiv(this.addr,e)}function Jk(t,e){t.uniform2uiv(this.addr,e)}function Qk(t,e){t.uniform3uiv(this.addr,e)}function eF(t,e){t.uniform4uiv(this.addr,e)}function tF(t,e,n){const i=this.cache,r=e.length,s=qd(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||lw,s[o])}function nF(t,e,n){const i=this.cache,r=e.length,s=qd(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||uw,s[o])}function iF(t,e,n){const i=this.cache,r=e.length,s=qd(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||dw,s[o])}function rF(t,e,n){const i=this.cache,r=e.length,s=qd(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||cw,s[o])}function sF(t){switch(t){case 5126:return zk;case 35664:return Vk;case 35665:return Hk;case 35666:return Gk;case 35674:return Wk;case 35675:return jk;case 35676:return $k;case 5124:case 35670:return Xk;case 35667:case 35671:return qk;case 35668:case 35672:return Yk;case 35669:case 35673:return Kk;case 5125:return Zk;case 36294:return Jk;case 36295:return Qk;case 36296:return eF;case 35678:case 36198:case 36298:case 36306:case 35682:return tF;case 35679:case 36299:case 36307:return nF;case 35680:case 36300:case 36308:case 36293:return iF;case 36289:case 36303:case 36311:case 36292:return rF}}class oF{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Bk(n.type)}}class aF{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=sF(n.type)}}class lF{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const _h=/(\w+)(\])?(\[|\.)?/g;function W0(t,e){t.seq.push(e),t.map[e.id]=e}function cF(t,e,n){const i=t.name,r=i.length;for(_h.lastIndex=0;;){const s=_h.exec(i),o=_h.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){W0(n,c===void 0?new oF(a,t,e):new aF(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new lF(a),W0(n,d)),n=d}}}class lu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);cF(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function j0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let uF=0;function dF(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function fF(t){switch(t){case yi:return["Linear","( value )"];case je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function $0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+dF(t.getShaderSource(e),o)}else return r}function hF(t,e){const n=fF(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function pF(t,e){let n;switch(e){case AD:n="Linear";break;case bD:n="Reinhard";break;case CD:n="OptimizedCineon";break;case LD:n="ACESFilmic";break;case PD:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function mF(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ka).join(`
`)}function gF(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function vF(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ka(t){return t!==""}function X0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function q0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _F=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yp(t){return t.replace(_F,yF)}function yF(t,e){const n=qe[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Yp(n)}const SF=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Y0(t){return t.replace(SF,EF)}function EF(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function K0(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xF(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===OM?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===sD?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function MF(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case jo:case $o:e="ENVMAP_TYPE_CUBE";break;case jd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wF(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case $o:e="ENVMAP_MODE_REFRACTION";break}return e}function TF(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case wg:e="ENVMAP_BLENDING_MULTIPLY";break;case TD:e="ENVMAP_BLENDING_MIX";break;case RD:e="ENVMAP_BLENDING_ADD";break}return e}function RF(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function AF(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=xF(n),c=MF(n),u=wF(n),d=TF(n),h=RF(n),p=n.isWebGL2?"":mF(n),g=gF(s),v=r.createProgram();let m,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ka).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ka).join(`
`),f.length>0&&(f+=`
`)):(m=[K0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),f=[p,K0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Vi?"#define TONE_MAPPING":"",n.toneMapping!==Vi?qe.tonemapping_pars_fragment:"",n.toneMapping!==Vi?pF("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.encodings_pars_fragment,hF("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ka).join(`
`)),o=Yp(o),o=X0(o,n),o=q0(o,n),a=Yp(a),a=X0(a,n),a=q0(a,n),o=Y0(o),a=Y0(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===m0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===m0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=_+m+o,S=_+f+a,E=j0(r,r.VERTEX_SHADER,y),w=j0(r,r.FRAGMENT_SHADER,S);if(r.attachShader(v,E),r.attachShader(v,w),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),t.debug.checkShaderErrors){const x=r.getProgramInfoLog(v).trim(),R=r.getShaderInfoLog(E).trim(),te=r.getShaderInfoLog(w).trim();let ae=!0,k=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ae=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,E,w);else{const G=$0(r,E,"vertex"),Z=$0(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+G+`
`+Z)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(R===""||te==="")&&(k=!1);k&&(this.diagnostics={runnable:ae,programLog:x,vertexShader:{log:R,prefix:m},fragmentShader:{log:te,prefix:f}})}r.deleteShader(E),r.deleteShader(w);let b;this.getUniforms=function(){return b===void 0&&(b=new lu(r,v)),b};let I;return this.getAttributes=function(){return I===void 0&&(I=vF(r,v)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uF++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=w,this}let bF=0;class CF{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new LF(e),n.set(e,i)),i}}class LF{constructor(e){this.id=bF++,this.code=e,this.usedTimes=0}}function PF(t,e,n,i,r,s,o){const a=new bg,l=new CF,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===0?"uv":`uv${x}`}function m(x,R,te,ae,k){const G=ae.fog,Z=k.geometry,ue=x.isMeshStandardMaterial?ae.environment:null,Q=(x.isMeshStandardMaterial?n:e).get(x.envMap||ue),B=Q&&Q.mapping===jd?Q.image.height:null,q=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const W=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ce=W!==void 0?W.length:0;let M=0;Z.morphAttributes.position!==void 0&&(M=1),Z.morphAttributes.normal!==void 0&&(M=2),Z.morphAttributes.color!==void 0&&(M=3);let U,O,Y,X;if(q){const et=di[q];U=et.vertexShader,O=et.fragmentShader}else U=x.vertexShader,O=x.fragmentShader,l.update(x),Y=l.getVertexShaderID(x),X=l.getFragmentShaderID(x);const pe=t.getRenderTarget(),Se=k.isInstancedMesh===!0,he=!!x.map,De=!!x.matcap,Pe=!!Q,z=!!x.aoMap,Be=!!x.lightMap,Re=!!x.bumpMap,Ie=!!x.normalMap,Me=!!x.displacementMap,ze=!!x.emissiveMap,He=!!x.metalnessMap,ke=!!x.roughnessMap,Qe=x.anisotropy>0,xt=x.clearcoat>0,Rt=x.iridescence>0,L=x.sheen>0,T=x.transmission>0,ne=Qe&&!!x.anisotropyMap,ye=xt&&!!x.clearcoatMap,_e=xt&&!!x.clearcoatNormalMap,N=xt&&!!x.clearcoatRoughnessMap,fe=Rt&&!!x.iridescenceMap,ge=Rt&&!!x.iridescenceThicknessMap,ee=L&&!!x.sheenColorMap,Te=L&&!!x.sheenRoughnessMap,Le=!!x.specularMap,be=!!x.specularColorMap,D=!!x.specularIntensityMap,P=T&&!!x.transmissionMap,K=T&&!!x.thicknessMap,de=!!x.gradientMap,C=!!x.alphaMap,J=x.alphaTest>0,F=!!x.extensions,ie=!!Z.attributes.uv1,se=!!Z.attributes.uv2,xe=!!Z.attributes.uv3;return{isWebGL2:u,shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:U,fragmentShader:O,defines:x.defines,customVertexShaderID:Y,customFragmentShaderID:X,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:Se,instancingColor:Se&&k.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:yi,map:he,matcap:De,envMap:Pe,envMapMode:Pe&&Q.mapping,envMapCubeUVHeight:B,aoMap:z,lightMap:Be,bumpMap:Re,normalMap:Ie,displacementMap:h&&Me,emissiveMap:ze,normalMapObjectSpace:Ie&&x.normalMapType===WD,normalMapTangentSpace:Ie&&x.normalMapType===Rg,metalnessMap:He,roughnessMap:ke,anisotropy:Qe,anisotropyMap:ne,clearcoat:xt,clearcoatMap:ye,clearcoatNormalMap:_e,clearcoatRoughnessMap:N,iridescence:Rt,iridescenceMap:fe,iridescenceThicknessMap:ge,sheen:L,sheenColorMap:ee,sheenRoughnessMap:Te,specularMap:Le,specularColorMap:be,specularIntensityMap:D,transmission:T,transmissionMap:P,thicknessMap:K,gradientMap:de,opaque:x.transparent===!1&&x.blending===bo,alphaMap:C,alphaTest:J,combine:x.combine,mapUv:he&&v(x.map.channel),aoMapUv:z&&v(x.aoMap.channel),lightMapUv:Be&&v(x.lightMap.channel),bumpMapUv:Re&&v(x.bumpMap.channel),normalMapUv:Ie&&v(x.normalMap.channel),displacementMapUv:Me&&v(x.displacementMap.channel),emissiveMapUv:ze&&v(x.emissiveMap.channel),metalnessMapUv:He&&v(x.metalnessMap.channel),roughnessMapUv:ke&&v(x.roughnessMap.channel),anisotropyMapUv:ne&&v(x.anisotropyMap.channel),clearcoatMapUv:ye&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:_e&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(x.sheenRoughnessMap.channel),specularMapUv:Le&&v(x.specularMap.channel),specularColorMapUv:be&&v(x.specularColorMap.channel),specularIntensityMapUv:D&&v(x.specularIntensityMap.channel),transmissionMapUv:P&&v(x.transmissionMap.channel),thicknessMapUv:K&&v(x.thicknessMap.channel),alphaMapUv:C&&v(x.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ie||Qe),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,vertexUv1s:ie,vertexUv2s:se,vertexUv3s:xe,pointsUvs:k.isPoints===!0&&!!Z.attributes.uv&&(he||C),fog:!!G,useFog:x.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:M,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&te.length>0,shadowMapType:t.shadowMap.type,toneMapping:x.toneMapped?t.toneMapping:Vi,useLegacyLights:t.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===hi,flipSided:x.side===cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:F&&x.extensions.derivatives===!0,extensionFragDepth:F&&x.extensions.fragDepth===!0,extensionDrawBuffers:F&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:F&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const te in x.defines)R.push(te),R.push(x.defines[te]);return x.isRawShaderMaterial===!1&&(_(R,x),y(R,x),R.push(t.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function _(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function y(x,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),x.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),x.push(a.mask)}function S(x){const R=g[x.type];let te;if(R){const ae=di[R];te=Xu.clone(ae.uniforms)}else te=x.uniforms;return te}function E(x,R){let te;for(let ae=0,k=c.length;ae<k;ae++){const G=c[ae];if(G.cacheKey===R){te=G,++te.usedTimes;break}}return te===void 0&&(te=new AF(t,R,x,s),c.push(te)),te}function w(x){if(--x.usedTimes===0){const R=c.indexOf(x);c[R]=c[c.length-1],c.pop(),x.destroy()}}function b(x){l.remove(x)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:E,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:I}}function IF(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function NF(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Z0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function J0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,g,v,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=m),e++,f}function a(d,h,p,g,v,m){const f=o(d,h,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,g,v,m){const f=o(d,h,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||NF),i.length>1&&i.sort(h||Z0),r.length>1&&r.sort(h||Z0)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function DF(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new J0,t.set(i,[o])):r>=s.length?(o=new J0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function UF(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new Ze};break;case"SpotLight":n={position:new V,direction:new V,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function OF(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let kF=0;function FF(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function BF(t,e){const n=new UF,i=OF(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new V);const s=new V,o=new Ht,a=new Ht;function l(u,d){let h=0,p=0,g=0;for(let te=0;te<9;te++)r.probe[te].set(0,0,0);let v=0,m=0,f=0,_=0,y=0,S=0,E=0,w=0,b=0,I=0;u.sort(FF);const x=d===!0?Math.PI:1;for(let te=0,ae=u.length;te<ae;te++){const k=u[te],G=k.color,Z=k.intensity,ue=k.distance,Q=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=G.r*Z*x,p+=G.g*Z*x,g+=G.b*Z*x;else if(k.isLightProbe)for(let B=0;B<9;B++)r.probe[B].addScaledVector(k.sh.coefficients[B],Z);else if(k.isDirectionalLight){const B=n.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity*x),k.castShadow){const q=k.shadow,W=i.get(k);W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,r.directionalShadow[v]=W,r.directionalShadowMap[v]=Q,r.directionalShadowMatrix[v]=k.shadow.matrix,S++}r.directional[v]=B,v++}else if(k.isSpotLight){const B=n.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(G).multiplyScalar(Z*x),B.distance=ue,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,r.spot[f]=B;const q=k.shadow;if(k.map&&(r.spotLightMap[b]=k.map,b++,q.updateMatrices(k),k.castShadow&&I++),r.spotLightMatrix[f]=q.matrix,k.castShadow){const W=i.get(k);W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,r.spotShadow[f]=W,r.spotShadowMap[f]=Q,w++}f++}else if(k.isRectAreaLight){const B=n.get(k);B.color.copy(G).multiplyScalar(Z),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),r.rectArea[_]=B,_++}else if(k.isPointLight){const B=n.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity*x),B.distance=k.distance,B.decay=k.decay,k.castShadow){const q=k.shadow,W=i.get(k);W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,W.shadowCameraNear=q.camera.near,W.shadowCameraFar=q.camera.far,r.pointShadow[m]=W,r.pointShadowMap[m]=Q,r.pointShadowMatrix[m]=k.shadow.matrix,E++}r.point[m]=B,m++}else if(k.isHemisphereLight){const B=n.get(k);B.skyColor.copy(k.color).multiplyScalar(Z*x),B.groundColor.copy(k.groundColor).multiplyScalar(Z*x),r.hemi[y]=B,y++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_FLOAT_1,r.rectAreaLTC2=Ee.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_HALF_1,r.rectAreaLTC2=Ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=g;const R=r.hash;(R.directionalLength!==v||R.pointLength!==m||R.spotLength!==f||R.rectAreaLength!==_||R.hemiLength!==y||R.numDirectionalShadows!==S||R.numPointShadows!==E||R.numSpotShadows!==w||R.numSpotMaps!==b)&&(r.directional.length=v,r.spot.length=f,r.rectArea.length=_,r.point.length=m,r.hemi.length=y,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=w+b-I,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=I,R.directionalLength=v,R.pointLength=m,R.spotLength=f,R.rectAreaLength=_,R.hemiLength=y,R.numDirectionalShadows=S,R.numPointShadows=E,R.numSpotShadows=w,R.numSpotMaps=b,r.version=kF++)}function c(u,d){let h=0,p=0,g=0,v=0,m=0;const f=d.matrixWorldInverse;for(let _=0,y=u.length;_<y;_++){const S=u[_];if(S.isDirectionalLight){const E=r.directional[h];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),h++}else if(S.isSpotLight){const E=r.spot[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const E=r.rectArea[v];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),a.identity(),o.copy(S.matrixWorld),o.premultiply(f),a.extractRotation(o),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const E=r.point[p];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:r}}function Q0(t,e){const n=new BF(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function zF(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Q0(t,e),n.set(s,[l])):o>=a.length?(l=new Q0(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class VF extends Is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HF extends Is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const GF=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WF=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jF(t,e,n){let i=new sw;const r=new Ce,s=new Ce,o=new Wt,a=new VF({depthPacking:GD}),l=new HF,c={},u=n.maxTextureSize,d={[Dr]:cn,[cn]:Dr,[hi]:hi},h=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:GF,fragmentShader:WF}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new xi;g.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Fn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=OM;let f=this.type;this.render=function(E,w,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const I=t.getRenderTarget(),x=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),te=t.state;te.setBlending(Ar),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const ae=f!==Pi&&this.type===Pi,k=f===Pi&&this.type!==Pi;for(let G=0,Z=E.length;G<Z;G++){const ue=E[G],Q=ue.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);const B=Q.getFrameExtents();if(r.multiply(B),s.copy(Q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/B.x),r.x=s.x*B.x,Q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/B.y),r.y=s.y*B.y,Q.mapSize.y=s.y)),Q.map===null||ae===!0||k===!0){const W=this.type!==Pi?{minFilter:on,magFilter:on}:{};Q.map!==null&&Q.map.dispose(),Q.map=new si(r.x,r.y,W),Q.map.texture.name=ue.name+".shadowMap",Q.camera.updateProjectionMatrix()}t.setRenderTarget(Q.map),t.clear();const q=Q.getViewportCount();for(let W=0;W<q;W++){const ce=Q.getViewport(W);o.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),te.viewport(o),Q.updateMatrices(ue,W),i=Q.getFrustum(),S(w,b,Q.camera,ue,this.type)}Q.isPointLightShadow!==!0&&this.type===Pi&&_(Q,b),Q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(I,x,R)};function _(E,w){const b=e.update(v);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new si(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(w,null,b,h,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(w,null,b,p,v,null)}function y(E,w,b,I){let x=null;const R=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)x=R;else if(x=b.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const te=x.uuid,ae=w.uuid;let k=c[te];k===void 0&&(k={},c[te]=k);let G=k[ae];G===void 0&&(G=x.clone(),k[ae]=G),x=G}if(x.visible=w.visible,x.wireframe=w.wireframe,I===Pi?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:d[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,b.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const te=t.properties.get(x);te.light=b}return x}function S(E,w,b,I,x){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Pi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const ae=e.update(E),k=E.material;if(Array.isArray(k)){const G=ae.groups;for(let Z=0,ue=G.length;Z<ue;Z++){const Q=G[Z],B=k[Q.materialIndex];if(B&&B.visible){const q=y(E,B,I,x);t.renderBufferDirect(b,null,ae,q,E,Q)}}}else if(k.visible){const G=y(E,k,I,x);t.renderBufferDirect(b,null,ae,G,E,null)}}const te=E.children;for(let ae=0,k=te.length;ae<k;ae++)S(te[ae],w,b,I,x)}}function $F(t,e,n){const i=n.isWebGL2;function r(){let C=!1;const J=new Wt;let F=null;const ie=new Wt(0,0,0,0);return{setMask:function(se){F!==se&&!C&&(t.colorMask(se,se,se,se),F=se)},setLocked:function(se){C=se},setClear:function(se,xe,Ue,et,lt){lt===!0&&(se*=et,xe*=et,Ue*=et),J.set(se,xe,Ue,et),ie.equals(J)===!1&&(t.clearColor(se,xe,Ue,et),ie.copy(J))},reset:function(){C=!1,F=null,ie.set(-1,0,0,0)}}}function s(){let C=!1,J=null,F=null,ie=null;return{setTest:function(se){se?pe(t.DEPTH_TEST):Se(t.DEPTH_TEST)},setMask:function(se){J!==se&&!C&&(t.depthMask(se),J=se)},setFunc:function(se){if(F!==se){switch(se){case _D:t.depthFunc(t.NEVER);break;case yD:t.depthFunc(t.ALWAYS);break;case SD:t.depthFunc(t.LESS);break;case zp:t.depthFunc(t.LEQUAL);break;case ED:t.depthFunc(t.EQUAL);break;case xD:t.depthFunc(t.GEQUAL);break;case MD:t.depthFunc(t.GREATER);break;case wD:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}F=se}},setLocked:function(se){C=se},setClear:function(se){ie!==se&&(t.clearDepth(se),ie=se)},reset:function(){C=!1,J=null,F=null,ie=null}}}function o(){let C=!1,J=null,F=null,ie=null,se=null,xe=null,Ue=null,et=null,lt=null;return{setTest:function(tt){C||(tt?pe(t.STENCIL_TEST):Se(t.STENCIL_TEST))},setMask:function(tt){J!==tt&&!C&&(t.stencilMask(tt),J=tt)},setFunc:function(tt,Mt,wt){(F!==tt||ie!==Mt||se!==wt)&&(t.stencilFunc(tt,Mt,wt),F=tt,ie=Mt,se=wt)},setOp:function(tt,Mt,wt){(xe!==tt||Ue!==Mt||et!==wt)&&(t.stencilOp(tt,Mt,wt),xe=tt,Ue=Mt,et=wt)},setLocked:function(tt){C=tt},setClear:function(tt){lt!==tt&&(t.clearStencil(tt),lt=tt)},reset:function(){C=!1,J=null,F=null,ie=null,se=null,xe=null,Ue=null,et=null,lt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let h={},p={},g=new WeakMap,v=[],m=null,f=!1,_=null,y=null,S=null,E=null,w=null,b=null,I=null,x=!1,R=null,te=null,ae=null,k=null,G=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,Q=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(B)[1]),ue=Q>=1):B.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),ue=Q>=2);let q=null,W={};const ce=t.getParameter(t.SCISSOR_BOX),M=t.getParameter(t.VIEWPORT),U=new Wt().fromArray(ce),O=new Wt().fromArray(M);function Y(C,J,F,ie){const se=new Uint8Array(4),xe=t.createTexture();t.bindTexture(C,xe),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ue=0;Ue<F;Ue++)i&&(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)?t.texImage3D(J,0,t.RGBA,1,1,ie,0,t.RGBA,t.UNSIGNED_BYTE,se):t.texImage2D(J+Ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,se);return xe}const X={};X[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),X[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(X[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),X[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pe(t.DEPTH_TEST),l.setFunc(zp),Me(!1),ze(z_),pe(t.CULL_FACE),Re(Ar);function pe(C){h[C]!==!0&&(t.enable(C),h[C]=!0)}function Se(C){h[C]!==!1&&(t.disable(C),h[C]=!1)}function he(C,J){return p[C]!==J?(t.bindFramebuffer(C,J),p[C]=J,i&&(C===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=J),C===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=J)),!0):!1}function De(C,J){let F=v,ie=!1;if(C)if(F=g.get(J),F===void 0&&(F=[],g.set(J,F)),C.isWebGLMultipleRenderTargets){const se=C.texture;if(F.length!==se.length||F[0]!==t.COLOR_ATTACHMENT0){for(let xe=0,Ue=se.length;xe<Ue;xe++)F[xe]=t.COLOR_ATTACHMENT0+xe;F.length=se.length,ie=!0}}else F[0]!==t.COLOR_ATTACHMENT0&&(F[0]=t.COLOR_ATTACHMENT0,ie=!0);else F[0]!==t.BACK&&(F[0]=t.BACK,ie=!0);ie&&(n.isWebGL2?t.drawBuffers(F):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(F))}function Pe(C){return m!==C?(t.useProgram(C),m=C,!0):!1}const z={[so]:t.FUNC_ADD,[aD]:t.FUNC_SUBTRACT,[lD]:t.FUNC_REVERSE_SUBTRACT};if(i)z[G_]=t.MIN,z[W_]=t.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(z[G_]=C.MIN_EXT,z[W_]=C.MAX_EXT)}const Be={[cD]:t.ZERO,[uD]:t.ONE,[dD]:t.SRC_COLOR,[kM]:t.SRC_ALPHA,[vD]:t.SRC_ALPHA_SATURATE,[mD]:t.DST_COLOR,[hD]:t.DST_ALPHA,[fD]:t.ONE_MINUS_SRC_COLOR,[FM]:t.ONE_MINUS_SRC_ALPHA,[gD]:t.ONE_MINUS_DST_COLOR,[pD]:t.ONE_MINUS_DST_ALPHA};function Re(C,J,F,ie,se,xe,Ue,et){if(C===Ar){f===!0&&(Se(t.BLEND),f=!1);return}if(f===!1&&(pe(t.BLEND),f=!0),C!==oD){if(C!==_||et!==x){if((y!==so||w!==so)&&(t.blendEquation(t.FUNC_ADD),y=so,w=so),et)switch(C){case bo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bp:t.blendFunc(t.ONE,t.ONE);break;case V_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case H_:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case bo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case V_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case H_:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}S=null,E=null,b=null,I=null,_=C,x=et}return}se=se||J,xe=xe||F,Ue=Ue||ie,(J!==y||se!==w)&&(t.blendEquationSeparate(z[J],z[se]),y=J,w=se),(F!==S||ie!==E||xe!==b||Ue!==I)&&(t.blendFuncSeparate(Be[F],Be[ie],Be[xe],Be[Ue]),S=F,E=ie,b=xe,I=Ue),_=C,x=!1}function Ie(C,J){C.side===hi?Se(t.CULL_FACE):pe(t.CULL_FACE);let F=C.side===cn;J&&(F=!F),Me(F),C.blending===bo&&C.transparent===!1?Re(Ar):Re(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const ie=C.stencilWrite;c.setTest(ie),ie&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),ke(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):Se(t.SAMPLE_ALPHA_TO_COVERAGE)}function Me(C){R!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),R=C)}function ze(C){C!==iD?(pe(t.CULL_FACE),C!==te&&(C===z_?t.cullFace(t.BACK):C===rD?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Se(t.CULL_FACE),te=C}function He(C){C!==ae&&(ue&&t.lineWidth(C),ae=C)}function ke(C,J,F){C?(pe(t.POLYGON_OFFSET_FILL),(k!==J||G!==F)&&(t.polygonOffset(J,F),k=J,G=F)):Se(t.POLYGON_OFFSET_FILL)}function Qe(C){C?pe(t.SCISSOR_TEST):Se(t.SCISSOR_TEST)}function xt(C){C===void 0&&(C=t.TEXTURE0+Z-1),q!==C&&(t.activeTexture(C),q=C)}function Rt(C,J,F){F===void 0&&(q===null?F=t.TEXTURE0+Z-1:F=q);let ie=W[F];ie===void 0&&(ie={type:void 0,texture:void 0},W[F]=ie),(ie.type!==C||ie.texture!==J)&&(q!==F&&(t.activeTexture(F),q=F),t.bindTexture(C,J||X[C]),ie.type=C,ie.texture=J)}function L(){const C=W[q];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function T(){try{t.compressedTexImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ye(){try{t.texSubImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{t.texSubImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function N(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(){try{t.texStorage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{t.texStorage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Le(){try{t.texImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function be(C){U.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),U.copy(C))}function D(C){O.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),O.copy(C))}function P(C,J){let F=d.get(J);F===void 0&&(F=new WeakMap,d.set(J,F));let ie=F.get(C);ie===void 0&&(ie=t.getUniformBlockIndex(J,C.name),F.set(C,ie))}function K(C,J){const ie=d.get(J).get(C);u.get(J)!==ie&&(t.uniformBlockBinding(J,ie,C.__bindingPointIndex),u.set(J,ie))}function de(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},q=null,W={},p={},g=new WeakMap,v=[],m=null,f=!1,_=null,y=null,S=null,E=null,w=null,b=null,I=null,x=!1,R=null,te=null,ae=null,k=null,G=null,U.set(0,0,t.canvas.width,t.canvas.height),O.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:pe,disable:Se,bindFramebuffer:he,drawBuffers:De,useProgram:Pe,setBlending:Re,setMaterial:Ie,setFlipSided:Me,setCullFace:ze,setLineWidth:He,setPolygonOffset:ke,setScissorTest:Qe,activeTexture:xt,bindTexture:Rt,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:ne,texImage2D:Te,texImage3D:Le,updateUBOMapping:P,uniformBlockBinding:K,texStorage2D:ge,texStorage3D:ee,texSubImage2D:ye,texSubImage3D:_e,compressedTexSubImage2D:N,compressedTexSubImage3D:fe,scissor:be,viewport:D,reset:de}}function XF(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,T){return f?new OffscreenCanvas(L,T):Sl("canvas")}function y(L,T,ne,ye){let _e=1;if((L.width>ye||L.height>ye)&&(_e=ye/Math.max(L.width,L.height)),_e<1||T===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const N=T?qp:Math.floor,fe=N(_e*L.width),ge=N(_e*L.height);v===void 0&&(v=_(fe,ge));const ee=ne?_(fe,ge):v;return ee.width=fe,ee.height=ge,ee.getContext("2d").drawImage(L,0,0,fe,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+fe+"x"+ge+")."),ee}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function S(L){return g0(L.width)&&g0(L.height)}function E(L){return a?!1:L.wrapS!==ti||L.wrapT!==ti||L.minFilter!==on&&L.minFilter!==yt}function w(L,T){return L.generateMipmaps&&T&&L.minFilter!==on&&L.minFilter!==yt}function b(L){t.generateMipmap(L)}function I(L,T,ne,ye,_e=!1){if(a===!1)return T;if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let N=T;return T===t.RED&&(ne===t.FLOAT&&(N=t.R32F),ne===t.HALF_FLOAT&&(N=t.R16F),ne===t.UNSIGNED_BYTE&&(N=t.R8)),T===t.RG&&(ne===t.FLOAT&&(N=t.RG32F),ne===t.HALF_FLOAT&&(N=t.RG16F),ne===t.UNSIGNED_BYTE&&(N=t.RG8)),T===t.RGBA&&(ne===t.FLOAT&&(N=t.RGBA32F),ne===t.HALF_FLOAT&&(N=t.RGBA16F),ne===t.UNSIGNED_BYTE&&(N=ye===je&&_e===!1?t.SRGB8_ALPHA8:t.RGBA8),ne===t.UNSIGNED_SHORT_4_4_4_4&&(N=t.RGBA4),ne===t.UNSIGNED_SHORT_5_5_5_1&&(N=t.RGB5_A1)),(N===t.R16F||N===t.R32F||N===t.RG16F||N===t.RG32F||N===t.RGBA16F||N===t.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function x(L,T,ne){return w(L,ne)===!0||L.isFramebufferTexture&&L.minFilter!==on&&L.minFilter!==yt?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function R(L){return L===on||L===j_||L===Wf?t.NEAREST:t.LINEAR}function te(L){const T=L.target;T.removeEventListener("dispose",te),k(T),T.isVideoTexture&&g.delete(T)}function ae(L){const T=L.target;T.removeEventListener("dispose",ae),Z(T)}function k(L){const T=i.get(L);if(T.__webglInit===void 0)return;const ne=L.source,ye=m.get(ne);if(ye){const _e=ye[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&G(L),Object.keys(ye).length===0&&m.delete(ne)}i.remove(L)}function G(L){const T=i.get(L);t.deleteTexture(T.__webglTexture);const ne=L.source,ye=m.get(ne);delete ye[T.__cacheKey],o.memory.textures--}function Z(L){const T=L.texture,ne=i.get(L),ye=i.get(T);if(ye.__webglTexture!==void 0&&(t.deleteTexture(ye.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++)t.deleteFramebuffer(ne.__webglFramebuffer[_e]),ne.__webglDepthbuffer&&t.deleteRenderbuffer(ne.__webglDepthbuffer[_e]);else{if(t.deleteFramebuffer(ne.__webglFramebuffer),ne.__webglDepthbuffer&&t.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&t.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let _e=0;_e<ne.__webglColorRenderbuffer.length;_e++)ne.__webglColorRenderbuffer[_e]&&t.deleteRenderbuffer(ne.__webglColorRenderbuffer[_e]);ne.__webglDepthRenderbuffer&&t.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let _e=0,N=T.length;_e<N;_e++){const fe=i.get(T[_e]);fe.__webglTexture&&(t.deleteTexture(fe.__webglTexture),o.memory.textures--),i.remove(T[_e])}i.remove(T),i.remove(L)}let ue=0;function Q(){ue=0}function B(){const L=ue;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),ue+=1,L}function q(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function W(L,T){const ne=i.get(L);if(L.isVideoTexture&&xt(L),L.isRenderTargetTexture===!1&&L.version>0&&ne.__version!==L.version){const ye=L.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(ne,L,T);return}}n.bindTexture(t.TEXTURE_2D,ne.__webglTexture,t.TEXTURE0+T)}function ce(L,T){const ne=i.get(L);if(L.version>0&&ne.__version!==L.version){he(ne,L,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,ne.__webglTexture,t.TEXTURE0+T)}function M(L,T){const ne=i.get(L);if(L.version>0&&ne.__version!==L.version){he(ne,L,T);return}n.bindTexture(t.TEXTURE_3D,ne.__webglTexture,t.TEXTURE0+T)}function U(L,T){const ne=i.get(L);if(L.version>0&&ne.__version!==L.version){De(ne,L,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture,t.TEXTURE0+T)}const O={[Gp]:t.REPEAT,[ti]:t.CLAMP_TO_EDGE,[Wp]:t.MIRRORED_REPEAT},Y={[on]:t.NEAREST,[j_]:t.NEAREST_MIPMAP_NEAREST,[Wf]:t.NEAREST_MIPMAP_LINEAR,[yt]:t.LINEAR,[ID]:t.LINEAR_MIPMAP_NEAREST,[yl]:t.LINEAR_MIPMAP_LINEAR},X={[$D]:t.NEVER,[QD]:t.ALWAYS,[XD]:t.LESS,[YD]:t.LEQUAL,[qD]:t.EQUAL,[JD]:t.GEQUAL,[KD]:t.GREATER,[ZD]:t.NOTEQUAL};function pe(L,T,ne){if(ne?(t.texParameteri(L,t.TEXTURE_WRAP_S,O[T.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,O[T.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,O[T.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,Y[T.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,Y[T.minFilter])):(t.texParameteri(L,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(L,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(T.wrapS!==ti||T.wrapT!==ti)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(L,t.TEXTURE_MAG_FILTER,R(T.magFilter)),t.texParameteri(L,t.TEXTURE_MIN_FILTER,R(T.minFilter)),T.minFilter!==on&&T.minFilter!==yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,X[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ye=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===on||T.minFilter!==Wf&&T.minFilter!==yl||T.type===vr&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===Hi&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(t.texParameterf(L,ye.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function Se(L,T){let ne=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",te));const ye=T.source;let _e=m.get(ye);_e===void 0&&(_e={},m.set(ye,_e));const N=q(T);if(N!==L.__cacheKey){_e[N]===void 0&&(_e[N]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,ne=!0),_e[N].usedTimes++;const fe=_e[L.__cacheKey];fe!==void 0&&(_e[L.__cacheKey].usedTimes--,fe.usedTimes===0&&G(T)),L.__cacheKey=N,L.__webglTexture=_e[N].texture}return ne}function he(L,T,ne){let ye=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ye=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ye=t.TEXTURE_3D);const _e=Se(L,T),N=T.source;n.bindTexture(ye,L.__webglTexture,t.TEXTURE0+ne);const fe=i.get(N);if(N.version!==fe.__version||_e===!0){n.activeTexture(t.TEXTURE0+ne),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ge=E(T)&&S(T.image)===!1;let ee=y(T.image,ge,!1,u);ee=Rt(T,ee);const Te=S(ee)||a,Le=s.convert(T.format,T.colorSpace);let be=s.convert(T.type),D=I(T.internalFormat,Le,be,T.colorSpace);pe(ye,T,Te);let P;const K=T.mipmaps,de=a&&T.isVideoTexture!==!0,C=fe.__version===void 0||_e===!0,J=x(T,ee,Te);if(T.isDepthTexture)D=t.DEPTH_COMPONENT,a?T.type===vr?D=t.DEPTH_COMPONENT32F:T.type===gr?D=t.DEPTH_COMPONENT24:T.type===cs?D=t.DEPTH24_STENCIL8:D=t.DEPTH_COMPONENT16:T.type===vr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===us&&D===t.DEPTH_COMPONENT&&T.type!==Tg&&T.type!==gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=gr,be=s.convert(T.type)),T.format===Xo&&D===t.DEPTH_COMPONENT&&(D=t.DEPTH_STENCIL,T.type!==cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=cs,be=s.convert(T.type))),C&&(de?n.texStorage2D(t.TEXTURE_2D,1,D,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,D,ee.width,ee.height,0,Le,be,null));else if(T.isDataTexture)if(K.length>0&&Te){de&&C&&n.texStorage2D(t.TEXTURE_2D,J,D,K[0].width,K[0].height);for(let F=0,ie=K.length;F<ie;F++)P=K[F],de?n.texSubImage2D(t.TEXTURE_2D,F,0,0,P.width,P.height,Le,be,P.data):n.texImage2D(t.TEXTURE_2D,F,D,P.width,P.height,0,Le,be,P.data);T.generateMipmaps=!1}else de?(C&&n.texStorage2D(t.TEXTURE_2D,J,D,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,Le,be,ee.data)):n.texImage2D(t.TEXTURE_2D,0,D,ee.width,ee.height,0,Le,be,ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){de&&C&&n.texStorage3D(t.TEXTURE_2D_ARRAY,J,D,K[0].width,K[0].height,ee.depth);for(let F=0,ie=K.length;F<ie;F++)P=K[F],T.format!==ni?Le!==null?de?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,F,0,0,0,P.width,P.height,ee.depth,Le,P.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,F,D,P.width,P.height,ee.depth,0,P.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?n.texSubImage3D(t.TEXTURE_2D_ARRAY,F,0,0,0,P.width,P.height,ee.depth,Le,be,P.data):n.texImage3D(t.TEXTURE_2D_ARRAY,F,D,P.width,P.height,ee.depth,0,Le,be,P.data)}else{de&&C&&n.texStorage2D(t.TEXTURE_2D,J,D,K[0].width,K[0].height);for(let F=0,ie=K.length;F<ie;F++)P=K[F],T.format!==ni?Le!==null?de?n.compressedTexSubImage2D(t.TEXTURE_2D,F,0,0,P.width,P.height,Le,P.data):n.compressedTexImage2D(t.TEXTURE_2D,F,D,P.width,P.height,0,P.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?n.texSubImage2D(t.TEXTURE_2D,F,0,0,P.width,P.height,Le,be,P.data):n.texImage2D(t.TEXTURE_2D,F,D,P.width,P.height,0,Le,be,P.data)}else if(T.isDataArrayTexture)de?(C&&n.texStorage3D(t.TEXTURE_2D_ARRAY,J,D,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Le,be,ee.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,D,ee.width,ee.height,ee.depth,0,Le,be,ee.data);else if(T.isData3DTexture)de?(C&&n.texStorage3D(t.TEXTURE_3D,J,D,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Le,be,ee.data)):n.texImage3D(t.TEXTURE_3D,0,D,ee.width,ee.height,ee.depth,0,Le,be,ee.data);else if(T.isFramebufferTexture){if(C)if(de)n.texStorage2D(t.TEXTURE_2D,J,D,ee.width,ee.height);else{let F=ee.width,ie=ee.height;for(let se=0;se<J;se++)n.texImage2D(t.TEXTURE_2D,se,D,F,ie,0,Le,be,null),F>>=1,ie>>=1}}else if(K.length>0&&Te){de&&C&&n.texStorage2D(t.TEXTURE_2D,J,D,K[0].width,K[0].height);for(let F=0,ie=K.length;F<ie;F++)P=K[F],de?n.texSubImage2D(t.TEXTURE_2D,F,0,0,Le,be,P):n.texImage2D(t.TEXTURE_2D,F,D,Le,be,P);T.generateMipmaps=!1}else de?(C&&n.texStorage2D(t.TEXTURE_2D,J,D,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Le,be,ee)):n.texImage2D(t.TEXTURE_2D,0,D,Le,be,ee);w(T,Te)&&b(ye),fe.__version=N.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function De(L,T,ne){if(T.image.length!==6)return;const ye=Se(L,T),_e=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+ne);const N=i.get(_e);if(_e.version!==N.__version||ye===!0){n.activeTexture(t.TEXTURE0+ne),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const fe=T.isCompressedTexture||T.image[0].isCompressedTexture,ge=T.image[0]&&T.image[0].isDataTexture,ee=[];for(let F=0;F<6;F++)!fe&&!ge?ee[F]=y(T.image[F],!1,!0,c):ee[F]=ge?T.image[F].image:T.image[F],ee[F]=Rt(T,ee[F]);const Te=ee[0],Le=S(Te)||a,be=s.convert(T.format,T.colorSpace),D=s.convert(T.type),P=I(T.internalFormat,be,D,T.colorSpace),K=a&&T.isVideoTexture!==!0,de=N.__version===void 0||ye===!0;let C=x(T,Te,Le);pe(t.TEXTURE_CUBE_MAP,T,Le);let J;if(fe){K&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,C,P,Te.width,Te.height);for(let F=0;F<6;F++){J=ee[F].mipmaps;for(let ie=0;ie<J.length;ie++){const se=J[ie];T.format!==ni?be!==null?K?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,ie,0,0,se.width,se.height,be,se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,ie,P,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,ie,0,0,se.width,se.height,be,D,se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,ie,P,se.width,se.height,0,be,D,se.data)}}}else{J=T.mipmaps,K&&de&&(J.length>0&&C++,n.texStorage2D(t.TEXTURE_CUBE_MAP,C,P,ee[0].width,ee[0].height));for(let F=0;F<6;F++)if(ge){K?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,ee[F].width,ee[F].height,be,D,ee[F].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,P,ee[F].width,ee[F].height,0,be,D,ee[F].data);for(let ie=0;ie<J.length;ie++){const xe=J[ie].image[F].image;K?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,ie+1,0,0,xe.width,xe.height,be,D,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,ie+1,P,xe.width,xe.height,0,be,D,xe.data)}}else{K?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,be,D,ee[F]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,P,be,D,ee[F]);for(let ie=0;ie<J.length;ie++){const se=J[ie];K?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,ie+1,0,0,be,D,se.image[F]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+F,ie+1,P,be,D,se.image[F])}}}w(T,Le)&&b(t.TEXTURE_CUBE_MAP),N.__version=_e.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Pe(L,T,ne,ye,_e){const N=s.convert(ne.format,ne.colorSpace),fe=s.convert(ne.type),ge=I(ne.internalFormat,N,fe,ne.colorSpace);i.get(T).__hasExternalTextures||(_e===t.TEXTURE_3D||_e===t.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,ge,T.width,T.height,T.depth,0,N,fe,null):n.texImage2D(_e,0,ge,T.width,T.height,0,N,fe,null)),n.bindFramebuffer(t.FRAMEBUFFER,L),Qe(T)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ye,_e,i.get(ne).__webglTexture,0,ke(T)):(_e===t.TEXTURE_2D||_e>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ye,_e,i.get(ne).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function z(L,T,ne){if(t.bindRenderbuffer(t.RENDERBUFFER,L),T.depthBuffer&&!T.stencilBuffer){let ye=t.DEPTH_COMPONENT16;if(ne||Qe(T)){const _e=T.depthTexture;_e&&_e.isDepthTexture&&(_e.type===vr?ye=t.DEPTH_COMPONENT32F:_e.type===gr&&(ye=t.DEPTH_COMPONENT24));const N=ke(T);Qe(T)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,N,ye,T.width,T.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,N,ye,T.width,T.height)}else t.renderbufferStorage(t.RENDERBUFFER,ye,T.width,T.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,L)}else if(T.depthBuffer&&T.stencilBuffer){const ye=ke(T);ne&&Qe(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,t.DEPTH24_STENCIL8,T.width,T.height):Qe(T)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ye,t.DEPTH24_STENCIL8,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,L)}else{const ye=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let _e=0;_e<ye.length;_e++){const N=ye[_e],fe=s.convert(N.format,N.colorSpace),ge=s.convert(N.type),ee=I(N.internalFormat,fe,ge,N.colorSpace),Te=ke(T);ne&&Qe(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,ee,T.width,T.height):Qe(T)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Te,ee,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ee,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Be(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),W(T.depthTexture,0);const ye=i.get(T.depthTexture).__webglTexture,_e=ke(T);if(T.depthTexture.format===us)Qe(T)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ye,0,_e):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ye,0);else if(T.depthTexture.format===Xo)Qe(T)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ye,0,_e):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function Re(L){const T=i.get(L),ne=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");Be(T.__webglFramebuffer,L)}else if(ne){T.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[ye]),T.__webglDepthbuffer[ye]=t.createRenderbuffer(),z(T.__webglDepthbuffer[ye],L,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),z(T.__webglDepthbuffer,L,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(L,T,ne){const ye=i.get(L);T!==void 0&&Pe(ye.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),ne!==void 0&&Re(L)}function Me(L){const T=L.texture,ne=i.get(L),ye=i.get(T);L.addEventListener("dispose",ae),L.isWebGLMultipleRenderTargets!==!0&&(ye.__webglTexture===void 0&&(ye.__webglTexture=t.createTexture()),ye.__version=T.version,o.memory.textures++);const _e=L.isWebGLCubeRenderTarget===!0,N=L.isWebGLMultipleRenderTargets===!0,fe=S(L)||a;if(_e){ne.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)ne.__webglFramebuffer[ge]=t.createFramebuffer()}else{if(ne.__webglFramebuffer=t.createFramebuffer(),N)if(r.drawBuffers){const ge=L.texture;for(let ee=0,Te=ge.length;ee<Te;ee++){const Le=i.get(ge[ee]);Le.__webglTexture===void 0&&(Le.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&Qe(L)===!1){const ge=N?T:[T];ne.__webglMultisampledFramebuffer=t.createFramebuffer(),ne.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let ee=0;ee<ge.length;ee++){const Te=ge[ee];ne.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,ne.__webglColorRenderbuffer[ee]);const Le=s.convert(Te.format,Te.colorSpace),be=s.convert(Te.type),D=I(Te.internalFormat,Le,be,Te.colorSpace,L.isXRRenderTarget===!0),P=ke(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,P,D,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,ne.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(ne.__webglDepthRenderbuffer=t.createRenderbuffer(),z(ne.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(_e){n.bindTexture(t.TEXTURE_CUBE_MAP,ye.__webglTexture),pe(t.TEXTURE_CUBE_MAP,T,fe);for(let ge=0;ge<6;ge++)Pe(ne.__webglFramebuffer[ge],L,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge);w(T,fe)&&b(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(N){const ge=L.texture;for(let ee=0,Te=ge.length;ee<Te;ee++){const Le=ge[ee],be=i.get(Le);n.bindTexture(t.TEXTURE_2D,be.__webglTexture),pe(t.TEXTURE_2D,Le,fe),Pe(ne.__webglFramebuffer,L,Le,t.COLOR_ATTACHMENT0+ee,t.TEXTURE_2D),w(Le,fe)&&b(t.TEXTURE_2D)}n.unbindTexture()}else{let ge=t.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?ge=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ge,ye.__webglTexture),pe(ge,T,fe),Pe(ne.__webglFramebuffer,L,T,t.COLOR_ATTACHMENT0,ge),w(T,fe)&&b(ge),n.unbindTexture()}L.depthBuffer&&Re(L)}function ze(L){const T=S(L)||a,ne=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ye=0,_e=ne.length;ye<_e;ye++){const N=ne[ye];if(w(N,T)){const fe=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ge=i.get(N).__webglTexture;n.bindTexture(fe,ge),b(fe),n.unbindTexture()}}}function He(L){if(a&&L.samples>0&&Qe(L)===!1){const T=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],ne=L.width,ye=L.height;let _e=t.COLOR_BUFFER_BIT;const N=[],fe=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=i.get(L),ee=L.isWebGLMultipleRenderTargets===!0;if(ee)for(let Te=0;Te<T.length;Te++)n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Te=0;Te<T.length;Te++){N.push(t.COLOR_ATTACHMENT0+Te),L.depthBuffer&&N.push(fe);const Le=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(Le===!1&&(L.depthBuffer&&(_e|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&(_e|=t.STENCIL_BUFFER_BIT)),ee&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ge.__webglColorRenderbuffer[Te]),Le===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[fe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[fe])),ee){const be=i.get(T[Te]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,be,0)}t.blitFramebuffer(0,0,ne,ye,0,0,ne,ye,_e,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,N)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let Te=0;Te<T.length;Te++){n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,ge.__webglColorRenderbuffer[Te]);const Le=i.get(T[Te]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,Le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function ke(L){return Math.min(d,L.samples)}function Qe(L){const T=i.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function xt(L){const T=o.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function Rt(L,T){const ne=L.colorSpace,ye=L.format,_e=L.type;return L.isCompressedTexture===!0||L.format===$p||ne!==yi&&ne!==fs&&(ne===je?a===!1?e.has("EXT_sRGB")===!0&&ye===ni?(L.format=$p,L.minFilter=yt,L.generateMipmaps=!1):T=YM.sRGBToLinear(T):(ye!==ni||_e!==br)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),T}this.allocateTextureUnit=B,this.resetTextureUnits=Q,this.setTexture2D=W,this.setTexture2DArray=ce,this.setTexture3D=M,this.setTextureCube=U,this.rebindTextures=Ie,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Qe}function qF(t,e,n){const i=n.isWebGL2;function r(s,o=fs){let a;if(s===br)return t.UNSIGNED_BYTE;if(s===VM)return t.UNSIGNED_SHORT_4_4_4_4;if(s===HM)return t.UNSIGNED_SHORT_5_5_5_1;if(s===ND)return t.BYTE;if(s===DD)return t.SHORT;if(s===Tg)return t.UNSIGNED_SHORT;if(s===zM)return t.INT;if(s===gr)return t.UNSIGNED_INT;if(s===vr)return t.FLOAT;if(s===Hi)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===UD)return t.ALPHA;if(s===ni)return t.RGBA;if(s===OD)return t.LUMINANCE;if(s===kD)return t.LUMINANCE_ALPHA;if(s===us)return t.DEPTH_COMPONENT;if(s===Xo)return t.DEPTH_STENCIL;if(s===$p)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===FD)return t.RED;if(s===GM)return t.RED_INTEGER;if(s===BD)return t.RG;if(s===WM)return t.RG_INTEGER;if(s===jM)return t.RGBA_INTEGER;if(s===jf||s===$f||s===Xf||s===qf)if(o===je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===jf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$f)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===jf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$f)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$_||s===X_||s===q_||s===Y_)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===$_)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===X_)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===q_)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Y_)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zD)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===K_||s===Z_)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===K_)return o===je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Z_)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===J_||s===Q_||s===e0||s===t0||s===n0||s===i0||s===r0||s===s0||s===o0||s===a0||s===l0||s===c0||s===u0||s===d0)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===J_)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Q_)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===e0)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===t0)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===n0)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===i0)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===r0)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===s0)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===o0)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===a0)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===l0)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===c0)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===u0)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===d0)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Yf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Yf)return o===je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===VD||s===f0||s===h0||s===p0)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Yf)return a.COMPRESSED_RED_RGTC1_EXT;if(s===f0)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===h0)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===p0)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===cs?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class YF extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hc extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KF={type:"move"};class yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KF)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Hc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class ZF extends un{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:us,u!==us&&u!==Xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===us&&(i=gr),i===void 0&&u===Xo&&(i=cs),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class JF extends Ps{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null;const v=n.getContextAttributes();let m=null,f=null;const _=[],y=[];let S=null;const E=new Tn;E.layers.enable(1),E.viewport=new Wt;const w=new Tn;w.layers.enable(2),w.viewport=new Wt;const b=[E,w],I=new YF;I.layers.enable(1),I.layers.enable(2);let x=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(M){S=M},this.getController=function(M){let U=_[M];return U===void 0&&(U=new yh,_[M]=U),U.getTargetRaySpace()},this.getControllerGrip=function(M){let U=_[M];return U===void 0&&(U=new yh,_[M]=U),U.getGripSpace()},this.getHand=function(M){let U=_[M];return U===void 0&&(U=new yh,_[M]=U),U.getHandSpace()};function te(M){const U=y.indexOf(M.inputSource);if(U===-1)return;const O=_[U];O!==void 0&&(O.update(M.inputSource,M.frame,c||o),O.dispatchEvent({type:M.type,data:M.inputSource}))}function ae(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",ae),r.removeEventListener("inputsourceschange",k);for(let M=0;M<_.length;M++){const U=y[M];U!==null&&(y[M]=null,_[M].disconnect(U))}x=null,R=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,ce.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(M){s=M,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(M){a=M,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(M){c=M},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(M){if(r=M,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",ae),r.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,U),r.updateRenderState({baseLayer:p}),f=new si(p.framebufferWidth,p.framebufferHeight,{format:ni,type:br,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let U=null,O=null,Y=null;v.depth&&(Y=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,U=v.stencil?Xo:us,O=v.stencil?cs:gr);const X={colorFormat:n.RGBA8,depthFormat:Y,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(X),r.updateRenderState({layers:[h]}),f=new si(h.textureWidth,h.textureHeight,{format:ni,type:br,depthTexture:new ZF(h.textureWidth,h.textureHeight,O,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const pe=e.properties.get(f);pe.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ce.setContext(r),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function k(M){for(let U=0;U<M.removed.length;U++){const O=M.removed[U],Y=y.indexOf(O);Y>=0&&(y[Y]=null,_[Y].disconnect(O))}for(let U=0;U<M.added.length;U++){const O=M.added[U];let Y=y.indexOf(O);if(Y===-1){for(let pe=0;pe<_.length;pe++)if(pe>=y.length){y.push(O),Y=pe;break}else if(y[pe]===null){y[pe]=O,Y=pe;break}if(Y===-1)break}const X=_[Y];X&&X.connect(O)}}const G=new V,Z=new V;function ue(M,U,O){G.setFromMatrixPosition(U.matrixWorld),Z.setFromMatrixPosition(O.matrixWorld);const Y=G.distanceTo(Z),X=U.projectionMatrix.elements,pe=O.projectionMatrix.elements,Se=X[14]/(X[10]-1),he=X[14]/(X[10]+1),De=(X[9]+1)/X[5],Pe=(X[9]-1)/X[5],z=(X[8]-1)/X[0],Be=(pe[8]+1)/pe[0],Re=Se*z,Ie=Se*Be,Me=Y/(-z+Be),ze=Me*-z;U.matrixWorld.decompose(M.position,M.quaternion,M.scale),M.translateX(ze),M.translateZ(Me),M.matrixWorld.compose(M.position,M.quaternion,M.scale),M.matrixWorldInverse.copy(M.matrixWorld).invert();const He=Se+Me,ke=he+Me,Qe=Re-ze,xt=Ie+(Y-ze),Rt=De*he/ke*He,L=Pe*he/ke*He;M.projectionMatrix.makePerspective(Qe,xt,Rt,L,He,ke),M.projectionMatrixInverse.copy(M.projectionMatrix).invert()}function Q(M,U){U===null?M.matrixWorld.copy(M.matrix):M.matrixWorld.multiplyMatrices(U.matrixWorld,M.matrix),M.matrixWorldInverse.copy(M.matrixWorld).invert()}this.updateCameraXR=function(M){if(r===null)return M;S&&(M=S),I.near=w.near=E.near=M.near,I.far=w.far=E.far=M.far,(x!==I.near||R!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),x=I.near,R=I.far);const U=M.parent,O=I.cameras;Q(I,U);for(let Y=0;Y<O.length;Y++)Q(O[Y],U);return O.length===2?ue(I,E,w):I.projectionMatrix.copy(E.projectionMatrix),S&&B(I,U),I};function B(M,U){const O=S;U===null?O.matrix.copy(M.matrixWorld):(O.matrix.copy(U.matrixWorld),O.matrix.invert(),O.matrix.multiply(M.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0);const Y=O.children;for(let X=0,pe=Y.length;X<pe;X++)Y[X].updateMatrixWorld(!0);O.projectionMatrix.copy(M.projectionMatrix),O.projectionMatrixInverse.copy(M.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Xp*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(M){l=M,h!==null&&(h.fixedFoveation=M),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=M)};let q=null;function W(M,U){if(u=U.getViewerPose(c||o),g=U,u!==null){const O=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let Y=!1;O.length!==I.cameras.length&&(I.cameras.length=0,Y=!0);for(let X=0;X<O.length;X++){const pe=O[X];let Se=null;if(p!==null)Se=p.getViewport(pe);else{const De=d.getViewSubImage(h,pe);Se=De.viewport,X===0&&(e.setRenderTargetTextures(f,De.colorTexture,h.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(f))}let he=b[X];he===void 0&&(he=new Tn,he.layers.enable(X),he.viewport=new Wt,b[X]=he),he.matrix.fromArray(pe.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(pe.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(Se.x,Se.y,Se.width,Se.height),X===0&&(I.matrix.copy(he.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Y===!0&&I.cameras.push(he)}}for(let O=0;O<_.length;O++){const Y=y[O],X=_[O];Y!==null&&X!==void 0&&X.update(Y,U,c||o)}q&&q(M,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),g=null}const ce=new ow;ce.setAnimationLoop(W),this.setAnimationLoop=function(M){q=M},this.dispose=function(){}}}function QF(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,nw(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,y,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===cn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===cn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const y=t.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y,n(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=y*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eB(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,y){const S=y.program;i.uniformBlockBinding(_,S)}function c(_,y){let S=r[_.id];S===void 0&&(g(_),S=u(_),r[_.id]=S,_.addEventListener("dispose",m));const E=y.program;i.updateUBOMapping(_,E);const w=e.render.frame;s[_.id]!==w&&(h(_),s[_.id]=w)}function u(_){const y=d();_.__bindingPointIndex=y;const S=t.createBuffer(),E=_.__size,w=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,E,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const y=r[_.id],S=_.uniforms,E=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let w=0,b=S.length;w<b;w++){const I=S[w];if(p(I,w,E)===!0){const x=I.__offset,R=Array.isArray(I.value)?I.value:[I.value];let te=0;for(let ae=0;ae<R.length;ae++){const k=R[ae],G=v(k);typeof k=="number"?(I.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,x+te,I.__data)):k.isMatrix3?(I.__data[0]=k.elements[0],I.__data[1]=k.elements[1],I.__data[2]=k.elements[2],I.__data[3]=k.elements[0],I.__data[4]=k.elements[3],I.__data[5]=k.elements[4],I.__data[6]=k.elements[5],I.__data[7]=k.elements[0],I.__data[8]=k.elements[6],I.__data[9]=k.elements[7],I.__data[10]=k.elements[8],I.__data[11]=k.elements[0]):(k.toArray(I.__data,te),te+=G.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,x,I.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,y,S){const E=_.value;if(S[y]===void 0){if(typeof E=="number")S[y]=E;else{const w=Array.isArray(E)?E:[E],b=[];for(let I=0;I<w.length;I++)b.push(w[I].clone());S[y]=b}return!0}else if(typeof E=="number"){if(S[y]!==E)return S[y]=E,!0}else{const w=Array.isArray(S[y])?S[y]:[S[y]],b=Array.isArray(E)?E:[E];for(let I=0;I<w.length;I++){const x=w[I];if(x.equals(b[I])===!1)return x.copy(b[I]),!0}}return!1}function g(_){const y=_.uniforms;let S=0;const E=16;let w=0;for(let b=0,I=y.length;b<I;b++){const x=y[b],R={boundary:0,storage:0},te=Array.isArray(x.value)?x.value:[x.value];for(let ae=0,k=te.length;ae<k;ae++){const G=te[ae],Z=v(G);R.boundary+=Z.boundary,R.storage+=Z.storage}if(x.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=S,b>0){w=S%E;const ae=E-w;w!==0&&ae-R.boundary<0&&(S+=E-w,x.__offset=S)}S+=R.storage}return w=S%E,w>0&&(S+=E-w),_.__size=S,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}function tB(){const t=Sl("canvas");return t.style.display="block",t}class Pg{constructor(e={}){const{canvas:n=tB(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=je,this.useLegacyLights=!0,this.toneMapping=Vi,this.toneMappingExposure=1;const y=this;let S=!1,E=0,w=0,b=null,I=-1,x=null;const R=new Wt,te=new Wt;let ae=null;const k=new Ze(0);let G=0,Z=n.width,ue=n.height,Q=1,B=null,q=null;const W=new Wt(0,0,Z,ue),ce=new Wt(0,0,Z,ue);let M=!1;const U=new sw;let O=!1,Y=!1,X=null;const pe=new Ht,Se=new Ce,he=new V,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return b===null?Q:1}let z=i;function Be(A,$){for(let re=0;re<A.length;re++){const H=A[re],oe=n.getContext(H,$);if(oe!==null)return oe}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Mg}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",F,!1),n.addEventListener("webglcontextcreationerror",ie,!1),z===null){const $=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&$.shift(),z=Be($,A),z===null)throw Be($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Re,Ie,Me,ze,He,ke,Qe,xt,Rt,L,T,ne,ye,_e,N,fe,ge,ee,Te,Le,be,D,P,K;function de(){Re=new fk(z),Ie=new ok(z,Re,e),Re.init(Ie),D=new qF(z,Re,Ie),Me=new $F(z,Re,Ie),ze=new mk(z),He=new IF,ke=new XF(z,Re,Me,He,Ie,D,ze),Qe=new lk(y),xt=new dk(y),Rt=new AU(z,Ie),P=new rk(z,Re,Rt,Ie),L=new hk(z,Rt,ze,P),T=new yk(z,L,Rt,ze),Te=new _k(z,Ie,ke),fe=new ak(He),ne=new PF(y,Qe,xt,Re,Ie,P,fe),ye=new QF(y,He),_e=new DF,N=new zF(Re,Ie),ee=new ik(y,Qe,xt,Me,T,h,l),ge=new jF(y,T,Ie),K=new eB(z,ze,Ie,Me),Le=new sk(z,Re,ze,Ie),be=new pk(z,Re,ze,Ie),ze.programs=ne.programs,y.capabilities=Ie,y.extensions=Re,y.properties=He,y.renderLists=_e,y.shadowMap=ge,y.state=Me,y.info=ze}de();const C=new JF(y,z);this.xr=C,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=Re.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Re.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(A){A!==void 0&&(Q=A,this.setSize(Z,ue,!1))},this.getSize=function(A){return A.set(Z,ue)},this.setSize=function(A,$,re=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=A,ue=$,n.width=Math.floor(A*Q),n.height=Math.floor($*Q),re===!0&&(n.style.width=A+"px",n.style.height=$+"px"),this.setViewport(0,0,A,$)},this.getDrawingBufferSize=function(A){return A.set(Z*Q,ue*Q).floor()},this.setDrawingBufferSize=function(A,$,re){Z=A,ue=$,Q=re,n.width=Math.floor(A*re),n.height=Math.floor($*re),this.setViewport(0,0,A,$)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(W)},this.setViewport=function(A,$,re,H){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,$,re,H),Me.viewport(R.copy(W).multiplyScalar(Q).floor())},this.getScissor=function(A){return A.copy(ce)},this.setScissor=function(A,$,re,H){A.isVector4?ce.set(A.x,A.y,A.z,A.w):ce.set(A,$,re,H),Me.scissor(te.copy(ce).multiplyScalar(Q).floor())},this.getScissorTest=function(){return M},this.setScissorTest=function(A){Me.setScissorTest(M=A)},this.setOpaqueSort=function(A){B=A},this.setTransparentSort=function(A){q=A},this.getClearColor=function(A){return A.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(A=!0,$=!0,re=!0){let H=0;if(A){let oe=!1;if(b!==null){const Ae=b.texture.format;oe=Ae===jM||Ae===WM||Ae===GM}if(oe){const Ae=b.texture.type,Ne=Ae===br||Ae===gr||Ae===Tg||Ae===cs||Ae===VM||Ae===HM,Fe=ee.getClearColor(),Ve=ee.getClearAlpha(),Ke=Fe.r,Ge=Fe.g,$e=Fe.b,dt=He.get(b).__webglFramebuffer;Ne?(p[0]=Ke,p[1]=Ge,p[2]=$e,p[3]=Ve,z.clearBufferuiv(z.COLOR,dt,p)):(g[0]=Ke,g[1]=Ge,g[2]=$e,g[3]=Ve,z.clearBufferiv(z.COLOR,dt,g))}else H|=z.COLOR_BUFFER_BIT}$&&(H|=z.DEPTH_BUFFER_BIT),re&&(H|=z.STENCIL_BUFFER_BIT),z.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",F,!1),n.removeEventListener("webglcontextcreationerror",ie,!1),_e.dispose(),N.dispose(),He.dispose(),Qe.dispose(),xt.dispose(),T.dispose(),P.dispose(),K.dispose(),ne.dispose(),C.dispose(),C.removeEventListener("sessionstart",tt),C.removeEventListener("sessionend",Mt),X&&(X.dispose(),X=null),wt.stop()};function J(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=ze.autoReset,$=ge.enabled,re=ge.autoUpdate,H=ge.needsUpdate,oe=ge.type;de(),ze.autoReset=A,ge.enabled=$,ge.autoUpdate=re,ge.needsUpdate=H,ge.type=oe}function ie(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function se(A){const $=A.target;$.removeEventListener("dispose",se),xe($)}function xe(A){Ue(A),He.remove(A)}function Ue(A){const $=He.get(A).programs;$!==void 0&&($.forEach(function(re){ne.releaseProgram(re)}),A.isShaderMaterial&&ne.releaseShaderCache(A))}this.renderBufferDirect=function(A,$,re,H,oe,Ae){$===null&&($=De);const Ne=oe.isMesh&&oe.matrixWorld.determinant()<0,Fe=WT(A,$,re,H,oe);Me.setMaterial(H,Ne);let Ve=re.index,Ke=1;H.wireframe===!0&&(Ve=L.getWireframeAttribute(re),Ke=2);const Ge=re.drawRange,$e=re.attributes.position;let dt=Ge.start*Ke,At=(Ge.start+Ge.count)*Ke;Ae!==null&&(dt=Math.max(dt,Ae.start*Ke),At=Math.min(At,(Ae.start+Ae.count)*Ke)),Ve!==null?(dt=Math.max(dt,0),At=Math.min(At,Ve.count)):$e!=null&&(dt=Math.max(dt,0),At=Math.min(At,$e.count));const jn=At-dt;if(jn<0||jn===1/0)return;P.setup(oe,H,Fe,re,Ve);let wi,Ct=Le;if(Ve!==null&&(wi=Rt.get(Ve),Ct=be,Ct.setIndex(wi)),oe.isMesh)H.wireframe===!0?(Me.setLineWidth(H.wireframeLinewidth*Pe()),Ct.setMode(z.LINES)):Ct.setMode(z.TRIANGLES);else if(oe.isLine){let nt=H.linewidth;nt===void 0&&(nt=1),Me.setLineWidth(nt*Pe()),oe.isLineSegments?Ct.setMode(z.LINES):oe.isLineLoop?Ct.setMode(z.LINE_LOOP):Ct.setMode(z.LINE_STRIP)}else oe.isPoints?Ct.setMode(z.POINTS):oe.isSprite&&Ct.setMode(z.TRIANGLES);if(oe.isInstancedMesh)Ct.renderInstances(dt,jn,oe.count);else if(re.isInstancedBufferGeometry){const nt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,sf=Math.min(re.instanceCount,nt);Ct.renderInstances(dt,jn,sf)}else Ct.render(dt,jn)},this.compile=function(A,$){function re(H,oe,Ae){H.transparent===!0&&H.side===hi&&H.forceSinglePass===!1?(H.side=cn,H.needsUpdate=!0,Ql(H,oe,Ae),H.side=Dr,H.needsUpdate=!0,Ql(H,oe,Ae),H.side=hi):Ql(H,oe,Ae)}m=N.get(A),m.init(),_.push(m),A.traverseVisible(function(H){H.isLight&&H.layers.test($.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(y.useLegacyLights),A.traverse(function(H){const oe=H.material;if(oe)if(Array.isArray(oe))for(let Ae=0;Ae<oe.length;Ae++){const Ne=oe[Ae];re(Ne,A,H)}else re(oe,A,H)}),_.pop(),m=null};let et=null;function lt(A){et&&et(A)}function tt(){wt.stop()}function Mt(){wt.start()}const wt=new ow;wt.setAnimationLoop(lt),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(A){et=A,C.setAnimationLoop(A),A===null?wt.stop():wt.start()},C.addEventListener("sessionstart",tt),C.addEventListener("sessionend",Mt),this.render=function(A,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&($=C.updateCameraXR($)),A.isScene===!0&&A.onBeforeRender(y,A,$,b),m=N.get(A,_.length),m.init(),_.push(m),pe.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),U.setFromProjectionMatrix(pe),Y=this.localClippingEnabled,O=fe.init(this.clippingPlanes,Y),v=_e.get(A,f.length),v.init(),f.push(v),Hr(A,$,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(B,q),O===!0&&fe.beginShadows();const re=m.state.shadowsArray;if(ge.render(re,A,$),O===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,ee.render(v,A),m.setupLights(y.useLegacyLights),$.isArrayCamera){const H=$.cameras;for(let oe=0,Ae=H.length;oe<Ae;oe++){const Ne=H[oe];Zi(v,A,Ne,Ne.viewport)}}else Zi(v,A,$);b!==null&&(ke.updateMultisampleRenderTarget(b),ke.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(y,A,$),P.resetDefaultState(),I=-1,x=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Hr(A,$,re,H){if(A.visible===!1)return;if(A.layers.test($.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update($);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||U.intersectsSprite(A)){H&&he.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pe);const Ne=T.update(A),Fe=A.material;Fe.visible&&v.push(A,Ne,Fe,re,he.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||U.intersectsObject(A))){A.isSkinnedMesh&&A.skeleton.frame!==ze.render.frame&&(A.skeleton.update(),A.skeleton.frame=ze.render.frame);const Ne=T.update(A),Fe=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),he.copy(A.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),he.copy(Ne.boundingSphere.center)),he.applyMatrix4(A.matrixWorld).applyMatrix4(pe)),Array.isArray(Fe)){const Ve=Ne.groups;for(let Ke=0,Ge=Ve.length;Ke<Ge;Ke++){const $e=Ve[Ke],dt=Fe[$e.materialIndex];dt&&dt.visible&&v.push(A,Ne,dt,re,he.z,$e)}}else Fe.visible&&v.push(A,Ne,Fe,re,he.z,null)}}const Ae=A.children;for(let Ne=0,Fe=Ae.length;Ne<Fe;Ne++)Hr(Ae[Ne],$,re,H)}function Zi(A,$,re,H){const oe=A.opaque,Ae=A.transmissive,Ne=A.transparent;m.setupLightsView(re),O===!0&&fe.setGlobalState(y.clippingPlanes,re),Ae.length>0&&Gr(oe,Ae,$,re),H&&Me.viewport(R.copy(H)),oe.length>0&&Jl(oe,$,re),Ae.length>0&&Jl(Ae,$,re),Ne.length>0&&Jl(Ne,$,re),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Gr(A,$,re,H){const oe=Ie.isWebGL2;X===null&&(X=new si(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?Hi:br,minFilter:yl,samples:oe&&a===!0?4:0})),y.getDrawingBufferSize(Se),oe?X.setSize(Se.x,Se.y):X.setSize(qp(Se.x),qp(Se.y));const Ae=y.getRenderTarget();y.setRenderTarget(X),y.getClearColor(k),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear();const Ne=y.toneMapping;y.toneMapping=Vi,Jl(A,re,H),ke.updateMultisampleRenderTarget(X),ke.updateRenderTargetMipmap(X);let Fe=!1;for(let Ve=0,Ke=$.length;Ve<Ke;Ve++){const Ge=$[Ve],$e=Ge.object,dt=Ge.geometry,At=Ge.material,jn=Ge.group;if(At.side===hi&&$e.layers.test(H.layers)){const wi=At.side;At.side=cn,At.needsUpdate=!0,Zg($e,re,H,dt,At,jn),At.side=wi,At.needsUpdate=!0,Fe=!0}}Fe===!0&&(ke.updateMultisampleRenderTarget(X),ke.updateRenderTargetMipmap(X)),y.setRenderTarget(Ae),y.setClearColor(k,G),y.toneMapping=Ne}function Jl(A,$,re){const H=$.isScene===!0?$.overrideMaterial:null;for(let oe=0,Ae=A.length;oe<Ae;oe++){const Ne=A[oe],Fe=Ne.object,Ve=Ne.geometry,Ke=H===null?Ne.material:H,Ge=Ne.group;Fe.layers.test(re.layers)&&Zg(Fe,$,re,Ve,Ke,Ge)}}function Zg(A,$,re,H,oe,Ae){A.onBeforeRender(y,$,re,H,oe,Ae),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),oe.onBeforeRender(y,$,re,H,A,Ae),oe.transparent===!0&&oe.side===hi&&oe.forceSinglePass===!1?(oe.side=cn,oe.needsUpdate=!0,y.renderBufferDirect(re,$,H,oe,A,Ae),oe.side=Dr,oe.needsUpdate=!0,y.renderBufferDirect(re,$,H,oe,A,Ae),oe.side=hi):y.renderBufferDirect(re,$,H,oe,A,Ae),A.onAfterRender(y,$,re,H,oe,Ae)}function Ql(A,$,re){$.isScene!==!0&&($=De);const H=He.get(A),oe=m.state.lights,Ae=m.state.shadowsArray,Ne=oe.state.version,Fe=ne.getParameters(A,oe.state,Ae,$,re),Ve=ne.getProgramCacheKey(Fe);let Ke=H.programs;H.environment=A.isMeshStandardMaterial?$.environment:null,H.fog=$.fog,H.envMap=(A.isMeshStandardMaterial?xt:Qe).get(A.envMap||H.environment),Ke===void 0&&(A.addEventListener("dispose",se),Ke=new Map,H.programs=Ke);let Ge=Ke.get(Ve);if(Ge!==void 0){if(H.currentProgram===Ge&&H.lightsStateVersion===Ne)return Jg(A,Fe),Ge}else Fe.uniforms=ne.getUniforms(A),A.onBuild(re,Fe,y),A.onBeforeCompile(Fe,y),Ge=ne.acquireProgram(Fe,Ve),Ke.set(Ve,Ge),H.uniforms=Fe.uniforms;const $e=H.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($e.clippingPlanes=fe.uniform),Jg(A,Fe),H.needsLights=$T(A),H.lightsStateVersion=Ne,H.needsLights&&($e.ambientLightColor.value=oe.state.ambient,$e.lightProbe.value=oe.state.probe,$e.directionalLights.value=oe.state.directional,$e.directionalLightShadows.value=oe.state.directionalShadow,$e.spotLights.value=oe.state.spot,$e.spotLightShadows.value=oe.state.spotShadow,$e.rectAreaLights.value=oe.state.rectArea,$e.ltc_1.value=oe.state.rectAreaLTC1,$e.ltc_2.value=oe.state.rectAreaLTC2,$e.pointLights.value=oe.state.point,$e.pointLightShadows.value=oe.state.pointShadow,$e.hemisphereLights.value=oe.state.hemi,$e.directionalShadowMap.value=oe.state.directionalShadowMap,$e.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,$e.spotShadowMap.value=oe.state.spotShadowMap,$e.spotLightMatrix.value=oe.state.spotLightMatrix,$e.spotLightMap.value=oe.state.spotLightMap,$e.pointShadowMap.value=oe.state.pointShadowMap,$e.pointShadowMatrix.value=oe.state.pointShadowMatrix);const dt=Ge.getUniforms(),At=lu.seqWithValue(dt.seq,$e);return H.currentProgram=Ge,H.uniformsList=At,Ge}function Jg(A,$){const re=He.get(A);re.outputColorSpace=$.outputColorSpace,re.instancing=$.instancing,re.skinning=$.skinning,re.morphTargets=$.morphTargets,re.morphNormals=$.morphNormals,re.morphColors=$.morphColors,re.morphTargetsCount=$.morphTargetsCount,re.numClippingPlanes=$.numClippingPlanes,re.numIntersection=$.numClipIntersection,re.vertexAlphas=$.vertexAlphas,re.vertexTangents=$.vertexTangents,re.toneMapping=$.toneMapping}function WT(A,$,re,H,oe){$.isScene!==!0&&($=De),ke.resetTextureUnits();const Ae=$.fog,Ne=H.isMeshStandardMaterial?$.environment:null,Fe=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:yi,Ve=(H.isMeshStandardMaterial?xt:Qe).get(H.envMap||Ne),Ke=H.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ge=!!re.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),$e=!!re.morphAttributes.position,dt=!!re.morphAttributes.normal,At=!!re.morphAttributes.color,jn=H.toneMapped?y.toneMapping:Vi,wi=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Ct=wi!==void 0?wi.length:0,nt=He.get(H),sf=m.state.lights;if(O===!0&&(Y===!0||A!==x)){const En=A===x&&H.id===I;fe.setState(H,A,En)}let Ft=!1;H.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==sf.state.version||nt.outputColorSpace!==Fe||oe.isInstancedMesh&&nt.instancing===!1||!oe.isInstancedMesh&&nt.instancing===!0||oe.isSkinnedMesh&&nt.skinning===!1||!oe.isSkinnedMesh&&nt.skinning===!0||nt.envMap!==Ve||H.fog===!0&&nt.fog!==Ae||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==fe.numPlanes||nt.numIntersection!==fe.numIntersection)||nt.vertexAlphas!==Ke||nt.vertexTangents!==Ge||nt.morphTargets!==$e||nt.morphNormals!==dt||nt.morphColors!==At||nt.toneMapping!==jn||Ie.isWebGL2===!0&&nt.morphTargetsCount!==Ct)&&(Ft=!0):(Ft=!0,nt.__version=H.version);let Wr=nt.currentProgram;Ft===!0&&(Wr=Ql(H,$,oe));let Qg=!1,ca=!1,of=!1;const tn=Wr.getUniforms(),jr=nt.uniforms;if(Me.useProgram(Wr.program)&&(Qg=!0,ca=!0,of=!0),H.id!==I&&(I=H.id,ca=!0),Qg||x!==A){if(tn.setValue(z,"projectionMatrix",A.projectionMatrix),Ie.logarithmicDepthBuffer&&tn.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),x!==A&&(x=A,ca=!0,of=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const En=tn.map.cameraPosition;En!==void 0&&En.setValue(z,he.setFromMatrixPosition(A.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&tn.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||oe.isSkinnedMesh)&&tn.setValue(z,"viewMatrix",A.matrixWorldInverse)}if(oe.isSkinnedMesh){tn.setOptional(z,oe,"bindMatrix"),tn.setOptional(z,oe,"bindMatrixInverse");const En=oe.skeleton;En&&(Ie.floatVertexTextures?(En.boneTexture===null&&En.computeBoneTexture(),tn.setValue(z,"boneTexture",En.boneTexture,ke),tn.setValue(z,"boneTextureSize",En.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const af=re.morphAttributes;if((af.position!==void 0||af.normal!==void 0||af.color!==void 0&&Ie.isWebGL2===!0)&&Te.update(oe,re,Wr),(ca||nt.receiveShadow!==oe.receiveShadow)&&(nt.receiveShadow=oe.receiveShadow,tn.setValue(z,"receiveShadow",oe.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(jr.envMap.value=Ve,jr.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ca&&(tn.setValue(z,"toneMappingExposure",y.toneMappingExposure),nt.needsLights&&jT(jr,of),Ae&&H.fog===!0&&ye.refreshFogUniforms(jr,Ae),ye.refreshMaterialUniforms(jr,H,Q,ue,X),lu.upload(z,nt.uniformsList,jr,ke)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(lu.upload(z,nt.uniformsList,jr,ke),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&tn.setValue(z,"center",oe.center),tn.setValue(z,"modelViewMatrix",oe.modelViewMatrix),tn.setValue(z,"normalMatrix",oe.normalMatrix),tn.setValue(z,"modelMatrix",oe.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const En=H.uniformsGroups;for(let lf=0,XT=En.length;lf<XT;lf++)if(Ie.isWebGL2){const ev=En[lf];K.update(ev,Wr),K.bind(ev,Wr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wr}function jT(A,$){A.ambientLightColor.needsUpdate=$,A.lightProbe.needsUpdate=$,A.directionalLights.needsUpdate=$,A.directionalLightShadows.needsUpdate=$,A.pointLights.needsUpdate=$,A.pointLightShadows.needsUpdate=$,A.spotLights.needsUpdate=$,A.spotLightShadows.needsUpdate=$,A.rectAreaLights.needsUpdate=$,A.hemisphereLights.needsUpdate=$}function $T(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,$,re){He.get(A.texture).__webglTexture=$,He.get(A.depthTexture).__webglTexture=re;const H=He.get(A);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=re===void 0,H.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,$){const re=He.get(A);re.__webglFramebuffer=$,re.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(A,$=0,re=0){b=A,E=$,w=re;let H=!0,oe=null,Ae=!1,Ne=!1;if(A){const Ve=He.get(A);Ve.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(z.FRAMEBUFFER,null),H=!1):Ve.__webglFramebuffer===void 0?ke.setupRenderTarget(A):Ve.__hasExternalTextures&&ke.rebindTextures(A,He.get(A.texture).__webglTexture,He.get(A.depthTexture).__webglTexture);const Ke=A.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ne=!0);const Ge=He.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(oe=Ge[$],Ae=!0):Ie.isWebGL2&&A.samples>0&&ke.useMultisampledRTT(A)===!1?oe=He.get(A).__webglMultisampledFramebuffer:oe=Ge,R.copy(A.viewport),te.copy(A.scissor),ae=A.scissorTest}else R.copy(W).multiplyScalar(Q).floor(),te.copy(ce).multiplyScalar(Q).floor(),ae=M;if(Me.bindFramebuffer(z.FRAMEBUFFER,oe)&&Ie.drawBuffers&&H&&Me.drawBuffers(A,oe),Me.viewport(R),Me.scissor(te),Me.setScissorTest(ae),Ae){const Ve=He.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ve.__webglTexture,re)}else if(Ne){const Ve=He.get(A.texture),Ke=$||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ve.__webglTexture,re||0,Ke)}I=-1},this.readRenderTargetPixels=function(A,$,re,H,oe,Ae,Ne){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=He.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe){Me.bindFramebuffer(z.FRAMEBUFFER,Fe);try{const Ve=A.texture,Ke=Ve.format,Ge=Ve.type;if(Ke!==ni&&D.convert(Ke)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=Ge===Hi&&(Re.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&Re.has("EXT_color_buffer_float"));if(Ge!==br&&D.convert(Ge)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===vr&&(Ie.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=A.width-H&&re>=0&&re<=A.height-oe&&z.readPixels($,re,H,oe,D.convert(Ke),D.convert(Ge),Ae)}finally{const Ve=b!==null?He.get(b).__webglFramebuffer:null;Me.bindFramebuffer(z.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(A,$,re=0){const H=Math.pow(2,-re),oe=Math.floor($.image.width*H),Ae=Math.floor($.image.height*H);ke.setTexture2D($,0),z.copyTexSubImage2D(z.TEXTURE_2D,re,0,0,A.x,A.y,oe,Ae),Me.unbindTexture()},this.copyTextureToTexture=function(A,$,re,H=0){const oe=$.image.width,Ae=$.image.height,Ne=D.convert(re.format),Fe=D.convert(re.type);ke.setTexture2D(re,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,re.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,re.unpackAlignment),$.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,H,A.x,A.y,oe,Ae,Ne,Fe,$.image.data):$.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,H,A.x,A.y,$.mipmaps[0].width,$.mipmaps[0].height,Ne,$.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,H,A.x,A.y,Ne,Fe,$.image),H===0&&re.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(A,$,re,H,oe=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=A.max.x-A.min.x+1,Ne=A.max.y-A.min.y+1,Fe=A.max.z-A.min.z+1,Ve=D.convert(H.format),Ke=D.convert(H.type);let Ge;if(H.isData3DTexture)ke.setTexture3D(H,0),Ge=z.TEXTURE_3D;else if(H.isDataArrayTexture)ke.setTexture2DArray(H,0),Ge=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);const $e=z.getParameter(z.UNPACK_ROW_LENGTH),dt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),At=z.getParameter(z.UNPACK_SKIP_PIXELS),jn=z.getParameter(z.UNPACK_SKIP_ROWS),wi=z.getParameter(z.UNPACK_SKIP_IMAGES),Ct=re.isCompressedTexture?re.mipmaps[0]:re.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Ct.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ct.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,A.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,A.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,A.min.z),re.isDataTexture||re.isData3DTexture?z.texSubImage3D(Ge,oe,$.x,$.y,$.z,Ae,Ne,Fe,Ve,Ke,Ct.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ge,oe,$.x,$.y,$.z,Ae,Ne,Fe,Ve,Ct.data)):z.texSubImage3D(Ge,oe,$.x,$.y,$.z,Ae,Ne,Fe,Ve,Ke,Ct),z.pixelStorei(z.UNPACK_ROW_LENGTH,$e),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,dt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,At),z.pixelStorei(z.UNPACK_SKIP_ROWS,jn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,wi),oe===0&&H.generateMipmaps&&z.generateMipmap(Ge),Me.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?ke.setTextureCube(A,0):A.isData3DTexture?ke.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ke.setTexture2DArray(A,0):ke.setTexture2D(A,0),Me.unbindTexture()},this.resetState=function(){E=0,w=0,b=null,Me.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===je?ds:$M}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ds?je:yi}}class nB extends Pg{}nB.prototype.isWebGL1Renderer=!0;class fw extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class iB{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=jp,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Cr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new V;class qu{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}setX(e,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=_r(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=_r(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=_r(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=_r(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array),s=ct(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new oi(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new qu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hw extends Is{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let eo;const Aa=new V,to=new V,no=new V,io=new Ce,ba=new Ce,pw=new Ht,Gc=new V,Ca=new V,Wc=new V,ey=new Ce,Sh=new Ce,ty=new Ce;class rB extends dn{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",eo===void 0){eo=new xi;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new iB(n,5);eo.setIndex([0,1,2,0,2,3]),eo.setAttribute("position",new qu(i,3,0,!1)),eo.setAttribute("uv",new qu(i,2,3,!1))}this.geometry=eo,this.material=e!==void 0?e:new hw,this.center=new Ce(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),to.setFromMatrixScale(this.matrixWorld),pw.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),no.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&to.multiplyScalar(-no.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;jc(Gc.set(-.5,-.5,0),no,o,to,r,s),jc(Ca.set(.5,-.5,0),no,o,to,r,s),jc(Wc.set(.5,.5,0),no,o,to,r,s),ey.set(0,0),Sh.set(1,0),ty.set(1,1);let a=e.ray.intersectTriangle(Gc,Ca,Wc,!1,Aa);if(a===null&&(jc(Ca.set(-.5,.5,0),no,o,to,r,s),Sh.set(0,1),a=e.ray.intersectTriangle(Gc,Wc,Ca,!1,Aa),a===null))return;const l=e.ray.origin.distanceTo(Aa);l<e.near||l>e.far||n.push({distance:l,point:Aa.clone(),uv:Un.getInterpolation(Aa,Gc,Ca,Wc,ey,Sh,ty,new Ce),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function jc(t,e,n,i,r,s){io.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ba.x=s*io.x-r*io.y,ba.y=r*io.x+s*io.y):ba.copy(io),t.copy(e),t.x+=ba.x,t.y+=ba.y,t.applyMatrix4(pw)}class El extends xi{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new V,h=new V,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){const _=[],y=f/i;let S=0;f===0&&o===0?S=.5/n:f===i&&l===Math.PI&&(S=-.5/n);for(let E=0;E<=n;E++){const w=E/n;d.x=-e*Math.cos(r+w*s)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(r+w*s)*Math.sin(o+y*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(w+S,1-y),_.push(c++)}u.push(_)}for(let f=0;f<i;f++)for(let _=0;_<n;_++){const y=u[f][_+1],S=u[f][_],E=u[f+1][_],w=u[f+1][_+1];(f!==0||o>0)&&p.push(y,S,w),(f!==i-1||l<Math.PI)&&p.push(S,E,w)}this.setIndex(p),this.setAttribute("position",new zn(g,3)),this.setAttribute("normal",new zn(v,3)),this.setAttribute("uv",new zn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sB extends Is{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rg,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oB extends Is{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rg,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ny={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class aB{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const lB=new aB;class mw{constructor(e){this.manager=e!==void 0?e:lB,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class cB extends mw{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ny.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Sl("img");function l(){u(),ny.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class gw extends mw{constructor(e){super(e)}load(e,n,i,r){const s=new un,o=new cB(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class uB extends dn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class vw extends uB{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class dB{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=iy(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=iy();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function iy(){return(typeof performance>"u"?Date:performance).now()}class ry{constructor(e,n,i=0,r=1/0){this.ray=new JM(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new bg,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Kp(e,this,i,n),i.sort(sy),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Kp(e[r],this,i,n);return i.sort(sy),i}}function sy(t,e){return t.distance-e.distance}function Kp(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Kp(r[s],e,n,!0)}}class oy{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(an(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mg);const ay={type:"change"},Eh={type:"start"},ly={type:"end"};class _w extends Ps{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Os.ROTATE,MIDDLE:Os.DOLLY,RIGHT:Os.PAN},this.touches={ONE:ks.ROTATE,TWO:ks.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",Qe),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Qe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ay),i.update(),s=r.NONE},this.update=function(){const N=new V,fe=new Es().setFromUnitVectors(e.up,new V(0,1,0)),ge=fe.clone().invert(),ee=new V,Te=new Es,Le=new V,be=2*Math.PI;return function(){const P=i.object.position;N.copy(P).sub(i.target),N.applyQuaternion(fe),a.setFromVector3(N),i.autoRotate&&s===r.NONE&&x(b()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let K=i.minAzimuthAngle,de=i.maxAzimuthAngle;return isFinite(K)&&isFinite(de)&&(K<-Math.PI?K+=be:K>Math.PI&&(K-=be),de<-Math.PI?de+=be:de>Math.PI&&(de-=be),K<=de?a.theta=Math.max(K,Math.min(de,a.theta)):a.theta=a.theta>(K+de)/2?Math.max(K,a.theta):Math.min(de,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),N.setFromSpherical(a),N.applyQuaternion(ge),P.copy(i.target).add(N),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,d||ee.distanceToSquared(i.object.position)>o||8*(1-Te.dot(i.object.quaternion))>o||Le.distanceToSquared(i.target)>0?(i.dispatchEvent(ay),ee.copy(i.object.position),Te.copy(i.object.quaternion),Le.copy(i.target),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",L),i.domElement.removeEventListener("pointerdown",Re),i.domElement.removeEventListener("pointercancel",Me),i.domElement.removeEventListener("wheel",ke),i.domElement.removeEventListener("pointermove",Ie),i.domElement.removeEventListener("pointerup",Me),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Qe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new oy,l=new oy;let c=1;const u=new V;let d=!1;const h=new Ce,p=new Ce,g=new Ce,v=new Ce,m=new Ce,f=new Ce,_=new Ce,y=new Ce,S=new Ce,E=[],w={};function b(){return 2*Math.PI/60/60*i.autoRotateSpeed}function I(){return Math.pow(.95,i.zoomSpeed)}function x(N){l.theta-=N}function R(N){l.phi-=N}const te=function(){const N=new V;return function(ge,ee){N.setFromMatrixColumn(ee,0),N.multiplyScalar(-ge),u.add(N)}}(),ae=function(){const N=new V;return function(ge,ee){i.screenSpacePanning===!0?N.setFromMatrixColumn(ee,1):(N.setFromMatrixColumn(ee,0),N.crossVectors(i.object.up,N)),N.multiplyScalar(ge),u.add(N)}}(),k=function(){const N=new V;return function(ge,ee){const Te=i.domElement;if(i.object.isPerspectiveCamera){const Le=i.object.position;N.copy(Le).sub(i.target);let be=N.length();be*=Math.tan(i.object.fov/2*Math.PI/180),te(2*ge*be/Te.clientHeight,i.object.matrix),ae(2*ee*be/Te.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(te(ge*(i.object.right-i.object.left)/i.object.zoom/Te.clientWidth,i.object.matrix),ae(ee*(i.object.top-i.object.bottom)/i.object.zoom/Te.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function G(N){i.object.isPerspectiveCamera?c/=N:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*N)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(N){i.object.isPerspectiveCamera?c*=N:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/N)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ue(N){h.set(N.clientX,N.clientY)}function Q(N){_.set(N.clientX,N.clientY)}function B(N){v.set(N.clientX,N.clientY)}function q(N){p.set(N.clientX,N.clientY),g.subVectors(p,h).multiplyScalar(i.rotateSpeed);const fe=i.domElement;x(2*Math.PI*g.x/fe.clientHeight),R(2*Math.PI*g.y/fe.clientHeight),h.copy(p),i.update()}function W(N){y.set(N.clientX,N.clientY),S.subVectors(y,_),S.y>0?G(I()):S.y<0&&Z(I()),_.copy(y),i.update()}function ce(N){m.set(N.clientX,N.clientY),f.subVectors(m,v).multiplyScalar(i.panSpeed),k(f.x,f.y),v.copy(m),i.update()}function M(N){N.deltaY<0?Z(I()):N.deltaY>0&&G(I()),i.update()}function U(N){let fe=!1;switch(N.code){case i.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?R(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,i.keyPanSpeed),fe=!0;break;case i.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?R(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,-i.keyPanSpeed),fe=!0;break;case i.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?x(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(i.keyPanSpeed,0),fe=!0;break;case i.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?x(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(-i.keyPanSpeed,0),fe=!0;break}fe&&(N.preventDefault(),i.update())}function O(){if(E.length===1)h.set(E[0].pageX,E[0].pageY);else{const N=.5*(E[0].pageX+E[1].pageX),fe=.5*(E[0].pageY+E[1].pageY);h.set(N,fe)}}function Y(){if(E.length===1)v.set(E[0].pageX,E[0].pageY);else{const N=.5*(E[0].pageX+E[1].pageX),fe=.5*(E[0].pageY+E[1].pageY);v.set(N,fe)}}function X(){const N=E[0].pageX-E[1].pageX,fe=E[0].pageY-E[1].pageY,ge=Math.sqrt(N*N+fe*fe);_.set(0,ge)}function pe(){i.enableZoom&&X(),i.enablePan&&Y()}function Se(){i.enableZoom&&X(),i.enableRotate&&O()}function he(N){if(E.length==1)p.set(N.pageX,N.pageY);else{const ge=_e(N),ee=.5*(N.pageX+ge.x),Te=.5*(N.pageY+ge.y);p.set(ee,Te)}g.subVectors(p,h).multiplyScalar(i.rotateSpeed);const fe=i.domElement;x(2*Math.PI*g.x/fe.clientHeight),R(2*Math.PI*g.y/fe.clientHeight),h.copy(p)}function De(N){if(E.length===1)m.set(N.pageX,N.pageY);else{const fe=_e(N),ge=.5*(N.pageX+fe.x),ee=.5*(N.pageY+fe.y);m.set(ge,ee)}f.subVectors(m,v).multiplyScalar(i.panSpeed),k(f.x,f.y),v.copy(m)}function Pe(N){const fe=_e(N),ge=N.pageX-fe.x,ee=N.pageY-fe.y,Te=Math.sqrt(ge*ge+ee*ee);y.set(0,Te),S.set(0,Math.pow(y.y/_.y,i.zoomSpeed)),G(S.y),_.copy(y)}function z(N){i.enableZoom&&Pe(N),i.enablePan&&De(N)}function Be(N){i.enableZoom&&Pe(N),i.enableRotate&&he(N)}function Re(N){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(N.pointerId),i.domElement.addEventListener("pointermove",Ie),i.domElement.addEventListener("pointerup",Me)),T(N),N.pointerType==="touch"?xt(N):ze(N))}function Ie(N){i.enabled!==!1&&(N.pointerType==="touch"?Rt(N):He(N))}function Me(N){ne(N),E.length===0&&(i.domElement.releasePointerCapture(N.pointerId),i.domElement.removeEventListener("pointermove",Ie),i.domElement.removeEventListener("pointerup",Me)),i.dispatchEvent(ly),s=r.NONE}function ze(N){let fe;switch(N.button){case 0:fe=i.mouseButtons.LEFT;break;case 1:fe=i.mouseButtons.MIDDLE;break;case 2:fe=i.mouseButtons.RIGHT;break;default:fe=-1}switch(fe){case Os.DOLLY:if(i.enableZoom===!1)return;Q(N),s=r.DOLLY;break;case Os.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enablePan===!1)return;B(N),s=r.PAN}else{if(i.enableRotate===!1)return;ue(N),s=r.ROTATE}break;case Os.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enableRotate===!1)return;ue(N),s=r.ROTATE}else{if(i.enablePan===!1)return;B(N),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Eh)}function He(N){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;q(N);break;case r.DOLLY:if(i.enableZoom===!1)return;W(N);break;case r.PAN:if(i.enablePan===!1)return;ce(N);break}}function ke(N){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(N.preventDefault(),i.dispatchEvent(Eh),M(N),i.dispatchEvent(ly))}function Qe(N){i.enabled===!1||i.enablePan===!1||U(N)}function xt(N){switch(ye(N),E.length){case 1:switch(i.touches.ONE){case ks.ROTATE:if(i.enableRotate===!1)return;O(),s=r.TOUCH_ROTATE;break;case ks.PAN:if(i.enablePan===!1)return;Y(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ks.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;pe(),s=r.TOUCH_DOLLY_PAN;break;case ks.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Se(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Eh)}function Rt(N){switch(ye(N),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;he(N),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;De(N),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;z(N),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Be(N),i.update();break;default:s=r.NONE}}function L(N){i.enabled!==!1&&N.preventDefault()}function T(N){E.push(N)}function ne(N){delete w[N.pointerId];for(let fe=0;fe<E.length;fe++)if(E[fe].pointerId==N.pointerId){E.splice(fe,1);return}}function ye(N){let fe=w[N.pointerId];fe===void 0&&(fe=new Ce,w[N.pointerId]=fe),fe.set(N.pageX,N.pageY)}function _e(N){const fe=N.pointerId===E[0].pointerId?E[1]:E[0];return w[fe.pointerId]}i.domElement.addEventListener("contextmenu",L),i.domElement.addEventListener("pointerdown",Re),i.domElement.addEventListener("pointercancel",Me),i.domElement.addEventListener("wheel",ke,{passive:!1}),this.update()}}const yw={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Hl{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const fB=new aw(-1,1,1,-1,0,1),Ig=new xi;Ig.setAttribute("position",new zn([-1,3,0,-1,-1,0,3,-1,0],3));Ig.setAttribute("uv",new zn([0,2,0,0,2,0],2));class Sw{constructor(e){this._mesh=new Fn(Ig,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,fB)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class hB extends Hl{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof An?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Xu.clone(e.uniforms),this.material=new An({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Sw(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class cy extends Hl{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class pB extends Hl{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ew{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Ce);this._width=i.width,this._height=i.height,n=new si(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Hi}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hB(yw),this.clock=new dB}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}cy!==void 0&&(o instanceof cy?i=!0:o instanceof pB&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class xw extends Hl{constructor(e,n,i,r,s){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ze}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}const mB={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ze(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class xs extends Hl{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ce(e.x,e.y):new Ce(256,256),this.clearColor=new Ze(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new si(s,o,{type:Hi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new si(s,o,{type:Hi});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const p=new si(s,o,{type:Hi});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=mB;this.highPassUniforms=Xu.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new An({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.texSize.value=new Ce(s,o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=yw;this.copyUniforms=Xu.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new An({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Bp,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ze,this.oldClearAlpha=1,this.basic=new Xd,this.fsQuad=new Sw(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.texSize.value=new Ce(i,r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=xs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=xs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new An({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Ce(.5,.5)},direction:{value:new Ce(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new An({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}xs.BlurDirectionX=new Ce(1,0);xs.BlurDirectionY=new Ce(0,1);Date.now===void 0&&(Date.now=function(){return new Date().valueOf()});var Jt=Jt||function(){var t=[];return{REVISION:"8",getAll:function(){return t},removeAll:function(){t=[]},add:function(e){t.push(e)},remove:function(e){var n=t.indexOf(e);n!==-1&&t.splice(n,1)},update:function(e){if(t.length===0)return!1;var n=0,i=t.length;for(e=e!==void 0?e:Date.now();n<i;)t[n].update(e)?n++:(t.splice(n,1),i--);return!0}}}();Jt.Tween=function(t){var e=t,n={},i={},r=1e3,s=0,o=null,a=Jt.Easing.Linear.None,l=Jt.Interpolation.Linear,c=[],u=null,d=!1,h=null,p=null;this.to=function(g,v){return v!==void 0&&(r=v),i=g,this},this.start=function(g){Jt.add(this),d=!1,o=g!==void 0?g:Date.now(),o+=s;for(var v in i)if(!(e[v]===null||!(v in e))){if(i[v]instanceof Array){if(i[v].length===0)continue;i[v]=[e[v]].concat(i[v])}n[v]=e[v]}return this},this.stop=function(){return Jt.remove(this),this},this.delay=function(g){return s=g,this},this.easing=function(g){return a=g,this},this.interpolation=function(g){return l=g,this},this.chain=function(){return c=arguments,this},this.onStart=function(g){return u=g,this},this.onUpdate=function(g){return h=g,this},this.onComplete=function(g){return p=g,this},this.update=function(g){if(g<o)return!0;d===!1&&(u!==null&&u.call(e),d=!0);var v=(g-o)/r;v=v>1?1:v;var m=a(v);for(var f in n){var _=n[f],y=i[f];y instanceof Array?e[f]=l(y,m):e[f]=_+(y-_)*m}if(h!==null&&h.call(e,m),v==1){p!==null&&p.call(e);for(var S=0,E=c.length;S<E;S++)c[S].start(g);return!1}return!0}};Jt.Easing={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return .5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return t===0?0:Math.pow(1024,t-1)},Out:function(t){return t===1?1:1-Math.pow(2,-10*t)},InOut:function(t){return t===0?0:t===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){var e,n=.1,i=.4;return t===0?0:t===1?1:(!n||n<1?(n=1,e=i/4):e=i*Math.asin(1/n)/(2*Math.PI),-(n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)))},Out:function(t){var e,n=.1,i=.4;return t===0?0:t===1?1:(!n||n<1?(n=1,e=i/4):e=i*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/i)+1)},InOut:function(t){var e,n=.1,i=.4;return t===0?0:t===1?1:(!n||n<1?(n=1,e=i/4):e=i*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?-.5*(n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)):n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)*.5+1)}},Back:{In:function(t){var e=1.70158;return t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}},Bounce:{In:function(t){return 1-Jt.Easing.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?Jt.Easing.Bounce.In(t*2)*.5:Jt.Easing.Bounce.Out(t*2-1)*.5+.5}}};Jt.Interpolation={Linear:function(t,e){var n=t.length-1,i=n*e,r=Math.floor(i),s=Jt.Interpolation.Utils.Linear;return e<0?s(t[0],t[1],i):e>1?s(t[n],t[n-1],n-i):s(t[r],t[r+1>n?n:r+1],i-r)},Bezier:function(t,e){var n=0,i=t.length-1,r=Math.pow,s=Jt.Interpolation.Utils.Bernstein,o;for(o=0;o<=i;o++)n+=r(1-e,i-o)*r(e,o)*t[o]*s(i,o);return n},CatmullRom:function(t,e){var n=t.length-1,i=n*e,r=Math.floor(i),s=Jt.Interpolation.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(r=Math.floor(i=n*(1+e))),s(t[(r-1+n)%n],t[r],t[(r+1)%n],t[(r+2)%n],i-r)):e<0?t[0]-(s(t[0],t[0],t[1],t[1],-i)-t[0]):e>1?t[n]-(s(t[n],t[n],t[n-1],t[n-1],i-n)-t[n]):s(t[r?r-1:0],t[r],t[n<r+1?n:r+1],t[n<r+2?n:r+2],i-r)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=Jt.Interpolation.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1,i;if(t[e])return t[e];for(i=e;i>1;i--)n*=i;return t[e]=n}}(),CatmullRom:function(t,e,n,i,r){var s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}}};var ui=Jt;function gB(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,r,s,o,a=[],l=!0,c=!1;try{if(s=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=s.call(n)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw r}}return a}}function vB(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function uy(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,LB(i.key),i)}}function _B(t,e,n){return e&&uy(t.prototype,e),n&&uy(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function yB(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Zp(t,e)}function Yu(t){return Yu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Yu(t)}function Zp(t,e){return Zp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Zp(t,e)}function SB(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function EB(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function xB(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return EB(t)}function MB(t){var e=SB();return function(){var i=Yu(t),r;if(e){var s=Yu(this).constructor;r=Reflect.construct(i,arguments,s)}else r=i.apply(this,arguments);return xB(this,r)}}function dy(t,e){return TB(t)||gB(t,e)||Mw(t,e)||bB()}function $c(t){return wB(t)||RB(t)||Mw(t)||AB()}function wB(t){if(Array.isArray(t))return Jp(t)}function TB(t){if(Array.isArray(t))return t}function RB(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Mw(t,e){if(t){if(typeof t=="string")return Jp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jp(t,e)}}function Jp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function AB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function CB(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function LB(t){var e=CB(t,"string");return typeof e=="symbol"?e:String(e)}var ro=typeof window<"u"&&window.THREE?window.THREE:{LinearFilter:yt,Sprite:rB,SpriteMaterial:hw,SRGBColorSpace:je,Texture:un},PB=function(t){yB(n,t);var e=MB(n);function n(){var i,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:10,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"rgba(255, 255, 255, 1)";return vB(this,n),i=e.call(this,new ro.SpriteMaterial),i._text="".concat(r),i._textHeight=s,i._color=o,i._backgroundColor=!1,i._padding=0,i._borderWidth=0,i._borderRadius=0,i._borderColor="white",i._strokeWidth=0,i._strokeColor="white",i._fontFace="system-ui",i._fontSize=90,i._fontWeight="normal",i._canvas=document.createElement("canvas"),i._genCanvas(),i}return _B(n,[{key:"text",get:function(){return this._text},set:function(r){this._text=r,this._genCanvas()}},{key:"textHeight",get:function(){return this._textHeight},set:function(r){this._textHeight=r,this._genCanvas()}},{key:"color",get:function(){return this._color},set:function(r){this._color=r,this._genCanvas()}},{key:"backgroundColor",get:function(){return this._backgroundColor},set:function(r){this._backgroundColor=r,this._genCanvas()}},{key:"padding",get:function(){return this._padding},set:function(r){this._padding=r,this._genCanvas()}},{key:"borderWidth",get:function(){return this._borderWidth},set:function(r){this._borderWidth=r,this._genCanvas()}},{key:"borderRadius",get:function(){return this._borderRadius},set:function(r){this._borderRadius=r,this._genCanvas()}},{key:"borderColor",get:function(){return this._borderColor},set:function(r){this._borderColor=r,this._genCanvas()}},{key:"fontFace",get:function(){return this._fontFace},set:function(r){this._fontFace=r,this._genCanvas()}},{key:"fontSize",get:function(){return this._fontSize},set:function(r){this._fontSize=r,this._genCanvas()}},{key:"fontWeight",get:function(){return this._fontWeight},set:function(r){this._fontWeight=r,this._genCanvas()}},{key:"strokeWidth",get:function(){return this._strokeWidth},set:function(r){this._strokeWidth=r,this._genCanvas()}},{key:"strokeColor",get:function(){return this._strokeColor},set:function(r){this._strokeColor=r,this._genCanvas()}},{key:"_genCanvas",value:function(){var r=this,s=this._canvas,o=s.getContext("2d"),a=Array.isArray(this.borderWidth)?this.borderWidth:[this.borderWidth,this.borderWidth],l=a.map(function(I){return I*r.fontSize*.1}),c=Array.isArray(this.borderRadius)?this.borderRadius:[this.borderRadius,this.borderRadius,this.borderRadius,this.borderRadius],u=c.map(function(I){return I*r.fontSize*.1}),d=Array.isArray(this.padding)?this.padding:[this.padding,this.padding],h=d.map(function(I){return I*r.fontSize*.1}),p=this.text.split(`
`),g="".concat(this.fontWeight," ").concat(this.fontSize,"px ").concat(this.fontFace);o.font=g;var v=Math.max.apply(Math,$c(p.map(function(I){return o.measureText(I).width}))),m=this.fontSize*p.length;if(s.width=v+l[0]*2+h[0]*2,s.height=m+l[1]*2+h[1]*2,this.borderWidth){if(o.strokeStyle=this.borderColor,l[0]){var f=l[0]/2;o.lineWidth=l[0],o.beginPath(),o.moveTo(f,u[0]),o.lineTo(f,s.height-u[3]),o.moveTo(s.width-f,u[1]),o.lineTo(s.width-f,s.height-u[2]),o.stroke()}if(l[1]){var _=l[1]/2;o.lineWidth=l[1],o.beginPath(),o.moveTo(Math.max(l[0],u[0]),_),o.lineTo(s.width-Math.max(l[0],u[1]),_),o.moveTo(Math.max(l[0],u[3]),s.height-_),o.lineTo(s.width-Math.max(l[0],u[2]),s.height-_),o.stroke()}if(this.borderRadius){var y=Math.max.apply(Math,$c(l)),S=y/2;o.lineWidth=y,o.beginPath(),[!!u[0]&&[u[0],S,S,u[0]],!!u[1]&&[s.width-u[1],s.width-S,S,u[1]],!!u[2]&&[s.width-u[2],s.width-S,s.height-S,s.height-u[2]],!!u[3]&&[u[3],S,s.height-S,s.height-u[3]]].filter(function(I){return I}).forEach(function(I){var x=dy(I,4),R=x[0],te=x[1],ae=x[2],k=x[3];o.moveTo(R,ae),o.quadraticCurveTo(te,ae,te,k)}),o.stroke()}}this.backgroundColor&&(o.fillStyle=this.backgroundColor,this.borderRadius?(o.beginPath(),o.moveTo(l[0],u[0]),[[l[0],u[0],s.width-u[1],l[1],l[1],l[1]],[s.width-l[0],s.width-l[0],s.width-l[0],l[1],u[1],s.height-u[2]],[s.width-l[0],s.width-u[2],u[3],s.height-l[1],s.height-l[1],s.height-l[1]],[l[0],l[0],l[0],s.height-l[1],s.height-u[3],u[0]]].forEach(function(I){var x=dy(I,6),R=x[0],te=x[1],ae=x[2],k=x[3],G=x[4],Z=x[5];o.quadraticCurveTo(R,k,te,G),o.lineTo(ae,Z)}),o.closePath(),o.fill()):o.fillRect(l[0],l[1],s.width-l[0]*2,s.height-l[1]*2)),o.translate.apply(o,$c(l)),o.translate.apply(o,$c(h)),o.font=g,o.fillStyle=this.color,o.textBaseline="bottom";var E=this.strokeWidth>0;E&&(o.lineWidth=this.strokeWidth*this.fontSize/10,o.strokeStyle=this.strokeColor),p.forEach(function(I,x){var R=(v-o.measureText(I).width)/2,te=(x+1)*r.fontSize;E&&o.strokeText(I,R,te),o.fillText(I,R,te)}),this.material.map&&this.material.map.dispose();var w=this.material.map=new ro.Texture(s);w.minFilter=ro.LinearFilter,w.colorSpace=ro.SRGBColorSpace,w.needsUpdate=!0;var b=this.textHeight*p.length+a[1]*2+d[1]*2;this.scale.set(b*s.width/s.height,b,0)}},{key:"clone",value:function(){return new this.constructor(this.text,this.textHeight,this.color).copy(this)}},{key:"copy",value:function(r){return ro.Sprite.prototype.copy.call(this,r),this.color=r.color,this.backgroundColor=r.backgroundColor,this.padding=r.padding,this.borderWidth=r.borderWidth,this.borderColor=r.borderColor,this.fontFace=r.fontFace,this.fontSize=r.fontSize,this.fontWeight=r.fontWeight,this.strokeWidth=r.strokeWidth,this.strokeColor=r.strokeColor,this}}]),n}(ro.Sprite);const IB=Ls({key:"cameraPositionState",default:{x:-.9587738871461505,y:.9319559440928621,z:-1.2050770728864884}}),ww=Ls({key:"isInfo",default:!1}),NB=Ls({key:"isLogin",default:!1}),Tw=Ls({key:"nickName",default:""}),Rw=Ls({key:"loginModal",default:!1}),DB=Ls({key:"awarness",default:!1}),Ng=Ls({key:"pollutionLevel",default:0}),UB=[{country:"USA",camera:[-.2822325106742257,.9532250576577977,1.5005688252698752],location:{x:-.12670699972228983,y:.6039677812542492,z:.7830959792536895},pollutionLevel:.04},{country:"Korea",camera:[-.9587738871461505,.9319559440928621,-1.2050770728864884],location:{x:-.49879323913105933,y:.5913538811548442,z:-.6269301914101888},pollutionLevel:.02},{country:"UK",camera:[1.2052988948723735,1.3365621693103256,.02925989726484939],location:{x:.5922042811536482,y:.8013771570505241,z:.04001266993980511},pollutionLevel:.02},{country:"France",camera:[1.4261269232814708,1.0934100177132018,-.10303655592182832],location:{x:.6771773887308716,y:.7297435793079781,z:-.050293944220296295},pollutionLevel:.02},{country:"UAE",camera:[.9535914048560857,.6163384646057484,-1.3967069591120684],location:{x:.5028050855694319,y:.4035673356528914,z:-.7626308119537839},pollutionLevel:.02},{country:"Hong Kong",camera:[-.6264432344777228,.547452469624944,-1.5962032036926526],location:{x:-.3732289786266302,y:.3798922154299702,z:-.8441635610047926},pollutionLevel:.02},{country:"Mongolia",camera:[-.4197510833475272,1.0700726762552437,-1.3851907794814935],location:{x:-.20508661744206055,y:.7023019069661721,z:-.677683102394783},pollutionLevel:.8},{country:"Iceland",camera:[.8398362789792045,1.5715296370056615,.25489139750743106],location:{x:.4076212070054628,y:.9014316342520152,z:.1309234930268016},pollutionLevel:.8},{country:"Egypt",camera:[1.5580714142906211,.6640141080244135,-.6095069583811987],location:{x:.7823682956301422,y:.453911550073803,z:-.41561040979926633},pollutionLevel:.5},{country:"Brazil",camera:[1.0008800214073188,-.41932512244816106,1.4361078039031605],location:{x:.6115274304666978,y:-.18977805644560097,z:.7618239327619037},pollutionLevel:.5}];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},OB=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},bw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(h=64)),i.push(n[u],n[d],n[h],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Aw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OB(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||d==null)throw new kB;const h=s<<2|a>>4;if(i.push(h),c!==64){const p=a<<4&240|c>>2;if(i.push(p),d!==64){const g=c<<6&192|d;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kB extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FB=function(t){const e=Aw(t);return bw.encodeByteArray(e,!0)},Cw=function(t){return FB(t).replace(/\./g,"")},Lw=function(t){try{return bw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BB(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zB=()=>BB().__FIREBASE_DEFAULTS__,VB=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},HB=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lw(t[1]);return e&&JSON.parse(e)},Dg=()=>{try{return zB()||VB()||HB()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},GB=t=>{var e,n;return(n=(e=Dg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Pw=()=>{var t;return(t=Dg())===null||t===void 0?void 0:t.config},Iw=t=>{var e;return(e=Dg())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WB{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jB(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(en())}function $B(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function XB(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qB(){const t=en();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function YB(){try{return typeof indexedDB=="object"}catch{return!1}}function KB(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZB="FirebaseError";class zr extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=ZB,Object.setPrototypeOf(this,zr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gl.prototype.create)}}class Gl{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?JB(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new zr(r,a,i)}}function JB(t,e){return t.replace(QB,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const QB=/\{\$([^}]+)}/g;function e4(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ku(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(fy(s)&&fy(o)){if(!Ku(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function fy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Fa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function Ba(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function t4(t,e){const n=new n4(t,e);return n.subscribe.bind(n)}class n4{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");i4(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=xh),r.error===void 0&&(r.error=xh),r.complete===void 0&&(r.complete=xh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function i4(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t){return t&&t._delegate?t._delegate:t}class Yo{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new WB;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(o4(e))try{this.getOrInitializeService({instanceIdentifier:es})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=es){return this.instances.has(e)}getOptions(e=es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:s4(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=es){return this.component?this.component.multipleInstances?e:es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function s4(t){return t===es?void 0:t}function o4(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new r4(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ot||(ot={}));const l4={debug:ot.DEBUG,verbose:ot.VERBOSE,info:ot.INFO,warn:ot.WARN,error:ot.ERROR,silent:ot.SILENT},c4=ot.INFO,u4={[ot.DEBUG]:"log",[ot.VERBOSE]:"log",[ot.INFO]:"info",[ot.WARN]:"warn",[ot.ERROR]:"error"},d4=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=u4[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nw{constructor(e){this.name=e,this._logLevel=c4,this._logHandler=d4,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ot))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?l4[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ot.DEBUG,...e),this._logHandler(this,ot.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ot.VERBOSE,...e),this._logHandler(this,ot.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ot.INFO,...e),this._logHandler(this,ot.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ot.WARN,...e),this._logHandler(this,ot.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ot.ERROR,...e),this._logHandler(this,ot.ERROR,...e)}}const f4=(t,e)=>e.some(n=>t instanceof n);let hy,py;function h4(){return hy||(hy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function p4(){return py||(py=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dw=new WeakMap,Qp=new WeakMap,Uw=new WeakMap,Mh=new WeakMap,Ug=new WeakMap;function m4(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Lr(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dw.set(n,t)}).catch(()=>{}),Ug.set(e,t),e}function g4(t){if(Qp.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qp.set(t,e)}let em={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Uw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function v4(t){em=t(em)}function _4(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(wh(this),e,...n);return Uw.set(i,e.sort?e.sort():[e]),Lr(i)}:p4().includes(t)?function(...e){return t.apply(wh(this),e),Lr(Dw.get(this))}:function(...e){return Lr(t.apply(wh(this),e))}}function y4(t){return typeof t=="function"?_4(t):(t instanceof IDBTransaction&&g4(t),f4(t,h4())?new Proxy(t,em):t)}function Lr(t){if(t instanceof IDBRequest)return m4(t);if(Mh.has(t))return Mh.get(t);const e=y4(t);return e!==t&&(Mh.set(t,e),Ug.set(e,t)),e}const wh=t=>Ug.get(t);function S4(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Lr(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Lr(o.result),l.oldVersion,l.newVersion,Lr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const E4=["get","getKey","getAll","getAllKeys","count"],x4=["put","add","delete","clear"],Th=new Map;function my(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Th.get(e))return Th.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=x4.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||E4.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Th.set(e,s),s}v4(t=>({...t,get:(e,n,i)=>my(e,n)||t.get(e,n,i),has:(e,n)=>!!my(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M4{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(w4(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function w4(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tm="@firebase/app",gy="0.9.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=new Nw("@firebase/app"),T4="@firebase/app-compat",R4="@firebase/analytics-compat",A4="@firebase/analytics",b4="@firebase/app-check-compat",C4="@firebase/app-check",L4="@firebase/auth",P4="@firebase/auth-compat",I4="@firebase/database",N4="@firebase/database-compat",D4="@firebase/functions",U4="@firebase/functions-compat",O4="@firebase/installations",k4="@firebase/installations-compat",F4="@firebase/messaging",B4="@firebase/messaging-compat",z4="@firebase/performance",V4="@firebase/performance-compat",H4="@firebase/remote-config",G4="@firebase/remote-config-compat",W4="@firebase/storage",j4="@firebase/storage-compat",$4="@firebase/firestore",X4="@firebase/firestore-compat",q4="firebase",Y4="9.22.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm="[DEFAULT]",K4={[tm]:"fire-core",[T4]:"fire-core-compat",[A4]:"fire-analytics",[R4]:"fire-analytics-compat",[C4]:"fire-app-check",[b4]:"fire-app-check-compat",[L4]:"fire-auth",[P4]:"fire-auth-compat",[I4]:"fire-rtdb",[N4]:"fire-rtdb-compat",[D4]:"fire-fn",[U4]:"fire-fn-compat",[O4]:"fire-iid",[k4]:"fire-iid-compat",[F4]:"fire-fcm",[B4]:"fire-fcm-compat",[z4]:"fire-perf",[V4]:"fire-perf-compat",[H4]:"fire-rc",[G4]:"fire-rc-compat",[W4]:"fire-gcs",[j4]:"fire-gcs-compat",[$4]:"fire-fst",[X4]:"fire-fst-compat","fire-js":"fire-js",[q4]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=new Map,im=new Map;function Z4(t,e){try{t.container.addComponent(e)}catch(n){Ms.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xl(t){const e=t.name;if(im.has(e))return Ms.debug(`There were multiple attempts to register component ${e}.`),!1;im.set(e,t);for(const n of Zu.values())Z4(n,t);return!0}function Ow(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J4={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pr=new Gl("app","Firebase",J4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q4{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Yo("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=Y4;function kw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:nm,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Pr.create("bad-app-name",{appName:String(r)});if(n||(n=Pw()),!n)throw Pr.create("no-options");const s=Zu.get(r);if(s){if(Ku(n,s.options)&&Ku(i,s.config))return s;throw Pr.create("duplicate-app",{appName:r})}const o=new a4(r);for(const l of im.values())o.addComponent(l);const a=new Q4(n,i,o);return Zu.set(r,a),a}function ez(t=nm){const e=Zu.get(t);if(!e&&t===nm&&Pw())return kw();if(!e)throw Pr.create("no-app",{appName:t});return e}function Lo(t,e,n){var i;let r=(i=K4[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ms.warn(a.join(" "));return}xl(new Yo(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tz="firebase-heartbeat-database",nz=1,Ml="firebase-heartbeat-store";let Rh=null;function Fw(){return Rh||(Rh=S4(tz,nz,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ml)}}}).catch(t=>{throw Pr.create("idb-open",{originalErrorMessage:t.message})})),Rh}async function iz(t){try{return await(await Fw()).transaction(Ml).objectStore(Ml).get(Bw(t))}catch(e){if(e instanceof zr)Ms.warn(e.message);else{const n=Pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ms.warn(n.message)}}}async function vy(t,e){try{const i=(await Fw()).transaction(Ml,"readwrite");await i.objectStore(Ml).put(e,Bw(t)),await i.done}catch(n){if(n instanceof zr)Ms.warn(n.message);else{const i=Pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ms.warn(i.message)}}}function Bw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rz=1024,sz=30*24*60*60*1e3;class oz{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lz(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=_y();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=sz}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_y(),{heartbeatsToSend:n,unsentEntries:i}=az(this._heartbeatsCache.heartbeats),r=Cw(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function _y(){return new Date().toISOString().substring(0,10)}function az(t,e=rz){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),yy(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),yy(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class lz{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YB()?KB().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await iz(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return vy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return vy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function yy(t){return Cw(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cz(t){xl(new Yo("platform-logger",e=>new M4(e),"PRIVATE")),xl(new Yo("heartbeat",e=>new oz(e),"PRIVATE")),Lo(tm,gy,t),Lo(tm,gy,"esm2017"),Lo("fire-js","")}cz("");var uz="firebase",dz="9.22.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lo(uz,dz,"app");function Og(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function zw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fz=zw,Vw=new Gl("auth","Firebase",zw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=new Nw("@firebase/auth");function hz(t,...e){Ju.logLevel<=ot.WARN&&Ju.warn(`Auth (${jl}): ${t}`,...e)}function cu(t,...e){Ju.logLevel<=ot.ERROR&&Ju.error(`Auth (${jl}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,...e){throw kg(t,...e)}function vi(t,...e){return kg(t,...e)}function Hw(t,e,n){const i=Object.assign(Object.assign({},fz()),{[e]:n});return new Gl("auth","Firebase",i).create(e,{appName:t.name})}function pz(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&Wn(t,"argument-error"),Hw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function kg(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Vw.create(t,...e)}function Oe(t,e,...n){if(!t)throw kg(e,...n)}function Fi(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cu(e),new Error(e)}function qi(t,e){t||Fi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mz(){return Sy()==="http:"||Sy()==="https:"}function Sy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gz(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mz()||$B()||"connection"in navigator)?navigator.onLine:!0}function vz(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n){this.shortDelay=e,this.longDelay=n,qi(n>e,"Short delay should be less than long delay!"),this.isMobile=jB()||XB()}get(){return gz()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t,e){qi(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Fi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Fi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Fi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _z={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yz=new $l(3e4,6e4);function sa(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function oa(t,e,n,i,r={}){return Ww(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Wl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Gw.fetch()(jw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Ww(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},_z),e);try{const r=new Sz(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Xc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Xc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Xc(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Hw(t,u,c);Wn(t,u)}}catch(r){if(r instanceof zr)throw r;Wn(t,"network-request-failed",{message:String(r)})}}async function Xl(t,e,n,i,r={}){const s=await oa(t,e,n,i,r);return"mfaPendingCredential"in s&&Wn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function jw(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?Fg(t.config,r):`${t.config.apiScheme}://${r}`}class Sz{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(vi(this.auth,"network-request-failed")),yz.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xc(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=vi(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ez(t,e){return oa(t,"POST","/v1/accounts:delete",e)}async function xz(t,e){return oa(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mz(t,e=!1){const n=Ns(t),i=await n.getIdToken(e),r=Bg(i);Oe(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Qa(Ah(r.auth_time)),issuedAtTime:Qa(Ah(r.iat)),expirationTime:Qa(Ah(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ah(t){return Number(t)*1e3}function Bg(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return cu("JWT malformed, contained fewer than 3 sections"),null;try{const r=Lw(n);return r?JSON.parse(r):(cu("Failed to decode base64 JWT payload"),null)}catch(r){return cu("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function wz(t){const e=Bg(t);return Oe(e,"internal-error"),Oe(typeof e.exp<"u","internal-error"),Oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof zr&&Tz(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Tz({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rz{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qa(this.lastLoginAt),this.creationTime=Qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qu(t){var e;const n=t.auth,i=await t.getIdToken(),r=await wl(t,xz(n,{idToken:i}));Oe(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Cz(s.providerUserInfo):[],a=bz(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new $w(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Az(t){const e=Ns(t);await Qu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bz(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Cz(t){return t.map(e=>{var{providerId:n}=e,i=Og(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lz(t,e){const n=await Ww(t,{},async()=>{const i=Wl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=jw(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Gw.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Oe(e.idToken,"internal-error"),Oe(typeof e.idToken<"u","internal-error"),Oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wz(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Oe(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await Lz(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Tl;return i&&(Oe(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(Oe(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(Oe(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tl,this.toJSON())}_performRefresh(){return Fi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t,e){Oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hs{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=Og(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Rz(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $w(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await wl(this,this.stsTokenManager.getToken(this.auth,e));return Oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Mz(this,e)}reload(){return Az(this)}_assign(e){this!==e&&(Oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Qu(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await wl(this,Ez(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:y,emailVerified:S,isAnonymous:E,providerData:w,stsTokenManager:b}=n;Oe(y&&b,e,"internal-error");const I=Tl.fromJSON(this.name,b);Oe(typeof y=="string",e,"internal-error"),ir(d,e.name),ir(h,e.name),Oe(typeof S=="boolean",e,"internal-error"),Oe(typeof E=="boolean",e,"internal-error"),ir(p,e.name),ir(g,e.name),ir(v,e.name),ir(m,e.name),ir(f,e.name),ir(_,e.name);const x=new hs({uid:y,auth:e,email:h,emailVerified:S,displayName:d,isAnonymous:E,photoURL:g,phoneNumber:p,tenantId:v,stsTokenManager:I,createdAt:f,lastLoginAt:_});return w&&Array.isArray(w)&&(x.providerData=w.map(R=>Object.assign({},R))),m&&(x._redirectEventId=m),x}static async _fromIdTokenResponse(e,n,i=!1){const r=new Tl;r.updateFromServerResponse(n);const s=new hs({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Qu(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=new Map;function Bi(t){qi(t instanceof Function,"Expected a class definition");let e=Ey.get(t);return e?(qi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ey.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xw.type="NONE";const xy=Xw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(t,e,n){return`firebase:${t}:${e}:${n}`}class Po{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=uu(this.userKey,r.apiKey,s),this.fullPersistenceKey=uu("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Po(Bi(xy),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||Bi(xy);const o=uu(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=hs._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Po(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Po(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jw(e))return"Blackberry";if(Qw(e))return"Webos";if(zg(e))return"Safari";if((e.includes("chrome/")||Yw(e))&&!e.includes("edge/"))return"Chrome";if(Zw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function qw(t=en()){return/firefox\//i.test(t)}function zg(t=en()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yw(t=en()){return/crios\//i.test(t)}function Kw(t=en()){return/iemobile/i.test(t)}function Zw(t=en()){return/android/i.test(t)}function Jw(t=en()){return/blackberry/i.test(t)}function Qw(t=en()){return/webos/i.test(t)}function Yd(t=en()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Pz(t=en()){var e;return Yd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Iz(){return qB()&&document.documentMode===10}function eT(t=en()){return Yd(t)||Zw(t)||Qw(t)||Jw(t)||/windows phone/i.test(t)||Kw(t)}function Nz(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(t,e=[]){let n;switch(t){case"Browser":n=My(en());break;case"Worker":n=`${My(en())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${jl}/${i}`}async function nT(t,e){return oa(t,"GET","/v2/recaptchaConfig",sa(t,e))}function wy(t){return t!==void 0&&t.enterprise!==void 0}class iT{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dz(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function rT(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=vi("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",Dz().appendChild(i)})}function Uz(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Oz="https://www.google.com/recaptcha/enterprise.js?render=",kz="recaptcha-enterprise",Fz="NO_RECAPTCHA";class sT{constructor(e){this.type=kz,this.auth=Vr(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{nT(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new iT(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;wy(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Fz)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&wy(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}rT(Oz+a).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function ed(t,e,n,i=!1){const r=new sT(t);let s;try{s=await r.verify(n)}catch{s=await r.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bz{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zz{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ty(this),this.idTokenSubscription=new Ty(this),this.beforeStateQueue=new Bz(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bi(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Po.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vz()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ns(e):null;return n&&Oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Bi(e))})}async initializeRecaptchaConfig(){const e=await nT(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new iT(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new sT(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gl("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bi(e)||this._popupRedirectResolver;Oe(n,this,"argument-error"),this.redirectPersistenceManager=await Po.create(this,[Bi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Oe(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hz(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vr(t){return Ns(t)}class Ty{constructor(e){this.auth=e,this.observer=null,this.addObserver=t4(n=>this.observer=n)}get next(){return Oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vz(t,e){const n=Ow(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Ku(s,e??{}))return r;Wn(r,"already-initialized")}return n.initialize({options:e})}function Hz(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Bi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Gz(t,e,n){const i=Vr(t);Oe(i._canInitEmulator,i,"emulator-config-failed"),Oe(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=oT(e),{host:o,port:a}=Wz(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||jz()}function oT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Wz(t){const e=oT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Ry(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Ry(o)}}}function Ry(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jz(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fi("not implemented")}_getIdTokenResponse(e){return Fi("not implemented")}_linkToIdToken(e,n){return Fi("not implemented")}_getReauthenticationResolver(e){return Fi("not implemented")}}async function $z(t,e){return oa(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bh(t,e){return Xl(t,"POST","/v1/accounts:signInWithPassword",sa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xz(t,e){return Xl(t,"POST","/v1/accounts:signInWithEmailLink",sa(t,e))}async function qz(t,e){return Xl(t,"POST","/v1/accounts:signInWithEmailLink",sa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends Vg{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Rl(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Rl(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await ed(e,i,"signInWithPassword");return bh(e,r)}else return bh(e,i).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await ed(e,i,"signInWithPassword");return bh(e,s)}else return Promise.reject(r)});case"emailLink":return Xz(e,{email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return $z(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return qz(e,{idToken:n,email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(t,e){return Xl(t,"POST","/v1/accounts:signInWithIdp",sa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yz="http://localhost";class ws extends Vg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=Og(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new ws(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Io(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Io(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Io(e,n)}buildRequest(){const e={requestUri:Yz,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kz(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Zz(t){const e=Fa(Ba(t)).link,n=e?Fa(Ba(e)).deep_link_id:null,i=Fa(Ba(t)).deep_link_id;return(i?Fa(Ba(i)).link:null)||i||n||e||t}class Hg{constructor(e){var n,i,r,s,o,a;const l=Fa(Ba(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,d=Kz((r=l.mode)!==null&&r!==void 0?r:null);Oe(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Zz(e);try{return new Hg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(){this.providerId=aa.PROVIDER_ID}static credential(e,n){return Rl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Hg.parseLink(n);return Oe(i,"argument-error"),Rl._fromEmailAndCode(e,i.code,i.tenantId)}}aa.PROVIDER_ID="password";aa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";aa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends Gg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends ql{constructor(){super("facebook.com")}static credential(e){return ws._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";ur.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends ql{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ws._fromParams({providerId:Di.PROVIDER_ID,signInMethod:Di.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Di.credentialFromTaggedObject(e)}static credentialFromError(e){return Di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Di.credential(n,i)}catch{return null}}}Di.GOOGLE_SIGN_IN_METHOD="google.com";Di.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends ql{constructor(){super("github.com")}static credential(e){return ws._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends ql{constructor(){super("twitter.com")}static credential(e,n){return ws._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return fr.credential(n,i)}catch{return null}}}fr.TWITTER_SIGN_IN_METHOD="twitter.com";fr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ch(t,e){return Xl(t,"POST","/v1/accounts:signUp",sa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await hs._fromIdTokenResponse(e,i,r),o=Ay(i);return new Ts({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Ay(i);return new Ts({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Ay(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td extends zr{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,td.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new td(e,n,i,r)}}function aT(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?td._fromErrorAndOperation(t,s,e,i):s})}async function Jz(t,e,n=!1){const i=await wl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ts._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qz(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await wl(t,aT(i,r,e,t),n);Oe(s.idToken,i,"internal-error");const o=Bg(s.idToken);Oe(o,i,"internal-error");const{sub:a}=o;return Oe(t.uid===a,i,"user-mismatch"),Ts._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Wn(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lT(t,e,n=!1){const i="signIn",r=await aT(t,i,e),s=await Ts._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function e5(t,e){return lT(Vr(t),e)}async function t5(t,e,n){var i;const r=Vr(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const c=await ed(r,s,"signUpPassword");o=Ch(r,c)}else o=Ch(r,s).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await ed(r,s,"signUpPassword");return Ch(r,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await Ts._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function n5(t,e,n){return e5(Ns(t),aa.credential(e,n))}function i5(t,e,n,i){return Ns(t).onIdTokenChanged(e,n,i)}function r5(t,e,n){return Ns(t).beforeAuthStateChanged(e,n)}const nd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nd,"1"),this.storage.removeItem(nd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s5(){const t=en();return zg(t)||Yd(t)}const o5=1e3,a5=10;class uT extends cT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=s5()&&Nz(),this.fallbackToPolling=eT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Iz()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,a5):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},o5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}uT.type="LOCAL";const l5=uT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT extends cT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}dT.type="SESSION";const fT=dT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c5(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new Kd(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await c5(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u5{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Wg("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(){return window}function d5(t){_i().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(){return typeof _i().WorkerGlobalScope<"u"&&typeof _i().importScripts=="function"}async function f5(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function h5(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function p5(){return hT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="firebaseLocalStorageDb",m5=1,id="firebaseLocalStorage",mT="fbase_key";class Yl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zd(t,e){return t.transaction([id],e?"readwrite":"readonly").objectStore(id)}function g5(){const t=indexedDB.deleteDatabase(pT);return new Yl(t).toPromise()}function sm(){const t=indexedDB.open(pT,m5);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(id,{keyPath:mT})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(id)?e(i):(i.close(),await g5(),e(await sm()))})})}async function by(t,e,n){const i=Zd(t,!0).put({[mT]:e,value:n});return new Yl(i).toPromise()}async function v5(t,e){const n=Zd(t,!1).get(e),i=await new Yl(n).toPromise();return i===void 0?null:i.value}function Cy(t,e){const n=Zd(t,!0).delete(e);return new Yl(n).toPromise()}const _5=800,y5=3;class gT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>y5)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kd._getInstance(p5()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await f5(),!this.activeServiceWorker)return;this.sender=new u5(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||h5()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sm();return await by(e,nd,"1"),await Cy(e,nd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>by(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>v5(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Zd(r,!1).getAll();return new Yl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gT.type="LOCAL";const S5=gT;new $l(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(t,e){return e?Bi(e):(Oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg extends Vg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Io(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Io(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Io(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function E5(t){return lT(t.auth,new jg(t),t.bypassAuthState)}function x5(t){const{auth:e,user:n}=t;return Oe(n,e,"internal-error"),Qz(n,new jg(t),t.bypassAuthState)}async function M5(t){const{auth:e,user:n}=t;return Oe(n,e,"internal-error"),Jz(n,new jg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return E5;case"linkViaPopup":case"linkViaRedirect":return M5;case"reauthViaPopup":case"reauthViaRedirect":return x5;default:Wn(this.auth,"internal-error")}}resolve(e){qi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w5=new $l(2e3,1e4);class So extends _T{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,So.currentPopupAction&&So.currentPopupAction.cancel(),So.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Oe(e,this.auth,"internal-error"),e}async onExecution(){qi(this.filter.length===1,"Popup operations only handle one event");const e=Wg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,So.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,w5.get())};e()}}So.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T5="pendingRedirect",du=new Map;class R5 extends _T{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=du.get(this.auth._key());if(!e){try{const i=await A5(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}du.set(this.auth._key(),e)}return this.bypassAuthState||du.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function A5(t,e){const n=ST(e),i=yT(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}async function b5(t,e){return yT(t)._set(ST(e),"true")}function C5(t,e){du.set(t._key(),e)}function yT(t){return Bi(t._redirectPersistence)}function ST(t){return uu(T5,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L5(t,e,n){return P5(t,e,n)}async function P5(t,e,n){const i=Vr(t);pz(t,e,Gg),await i._initializationPromise;const r=vT(i,n);return await b5(r,i),r._openRedirect(i,e,"signInViaRedirect")}async function I5(t,e){return await Vr(t)._initializationPromise,ET(t,e,!1)}async function ET(t,e,n=!1){const i=Vr(t),r=vT(i,e),o=await new R5(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N5=10*60*1e3;class D5{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!U5(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!xT(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(vi(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=N5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ly(e))}saveEventToCache(e){this.cachedEventUids.add(Ly(e)),this.lastProcessedEventTime=Date.now()}}function Ly(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function U5(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O5(t,e={}){return oa(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k5=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,F5=/^https?/;async function B5(t){if(t.config.emulator)return;const{authorizedDomains:e}=await O5(t);for(const n of e)try{if(z5(n))return}catch{}Wn(t,"unauthorized-domain")}function z5(t){const e=rm(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!F5.test(n))return!1;if(k5.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V5=new $l(3e4,6e4);function Py(){const t=_i().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function H5(t){return new Promise((e,n)=>{var i,r,s;function o(){Py(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Py(),n(vi(t,"network-request-failed"))},timeout:V5.get()})}if(!((r=(i=_i().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=_i().gapi)===null||s===void 0)&&s.load)o();else{const a=Uz("iframefcb");return _i()[a]=()=>{gapi.load?o():n(vi(t,"network-request-failed"))},rT(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw fu=null,e})}let fu=null;function G5(t){return fu=fu||H5(t),fu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W5=new $l(5e3,15e3),j5="__/auth/iframe",$5="emulator/auth/iframe",X5={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},q5=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Y5(t){const e=t.config;Oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fg(e,$5):`https://${t.config.authDomain}/${j5}`,i={apiKey:e.apiKey,appName:t.name,v:jl},r=q5.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Wl(i).slice(1)}`}async function K5(t){const e=await G5(t),n=_i().gapi;return Oe(n,t,"internal-error"),e.open({where:document.body,url:Y5(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:X5,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=vi(t,"network-request-failed"),a=_i().setTimeout(()=>{s(o)},W5.get());function l(){_i().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z5={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},J5=500,Q5=600,eV="_blank",tV="http://localhost";class Iy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nV(t,e,n,i=J5,r=Q5){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Z5),{width:i.toString(),height:r.toString(),top:s,left:o}),c=en().toLowerCase();n&&(a=Yw(c)?eV:n),qw(c)&&(e=e||tV,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[p,g])=>`${h}${p}=${g},`,"");if(Pz(c)&&a!=="_self")return iV(e||"",a),new Iy(null);const d=window.open(e||"",a,u);Oe(d,t,"popup-blocked");try{d.focus()}catch{}return new Iy(d)}function iV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rV="__/auth/handler",sV="emulator/auth/handler",oV=encodeURIComponent("fac");async function Ny(t,e,n,i,r,s){Oe(t.config.authDomain,t,"auth-domain-config-required"),Oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:jl,eventId:r};if(e instanceof Gg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",e4(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(s||{}))o[u]=d}if(e instanceof ql){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${oV}=${encodeURIComponent(l)}`:"";return`${aV(t)}?${Wl(a).slice(1)}${c}`}function aV({config:t}){return t.emulator?Fg(t,sV):`https://${t.authDomain}/${rV}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh="webStorageSupport";class lV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fT,this._completeRedirectFn=ET,this._overrideRedirectResult=C5}async _openPopup(e,n,i,r){var s;qi((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ny(e,n,i,rm(),r);return nV(e,o,Wg())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await Ny(e,n,i,rm(),r);return d5(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(qi(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await K5(e),i=new D5(e);return n.register("authEvent",r=>(Oe(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Lh,{type:Lh},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Lh];o!==void 0&&n(!!o),Wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=B5(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return eT()||zg()||Yd()}}const cV=lV;var Dy="@firebase/auth",Uy="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function fV(t){xl(new Yo("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;Oe(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tT(t)},c=new zz(i,r,s,l);return Hz(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),xl(new Yo("auth-internal",e=>{const n=Vr(e.getProvider("auth").getImmediate());return(i=>new uV(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lo(Dy,Uy,dV(t)),Lo(Dy,Uy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hV=5*60,pV=Iw("authIdTokenMaxAge")||hV;let Oy=null;const mV=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>pV)return;const r=n==null?void 0:n.token;Oy!==r&&(Oy=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function gV(t=ez()){const e=Ow(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Vz(t,{popupRedirectResolver:cV,persistence:[S5,l5,fT]}),i=Iw("authTokenSyncURL");if(i){const s=mV(i);r5(n,s,()=>s(n.currentUser)),i5(n,o=>s(o))}const r=GB("auth");return r&&Gz(n,`http://${r}`),n}fV("Browser");const vV={apiKey:"AIzaSyB63ItbHjTxflmnd13ocRqoKnqGWprW6YE",authDomain:"easylogin-a1a37.firebaseapp.com",projectId:"easylogin-a1a37",storageBucket:"easylogin-a1a37.appspot.com",messagingSenderId:"820536119363",appId:"1:820536119363:web:15fc63fb5c051cfbf344f6",measurementId:"G-QG4CPB6CZM"},_V=kw(vV),qc=gV(_V);function MT(){const[t,e]=ve.useState(""),[n,i]=ve.useState(""),[r,s]=ve.useState(!0),[o,a]=kn(NB),[l,c]=kn(Rw),[u,d]=kn(Tw);ve.useEffect(()=>{I5(qc).then(v=>{v.user&&(a(!0),d(v.user.displayName),localStorage.setItem("nickName",v.user.displayName))}).catch(v=>{})},[o,l]);const h=()=>{const v=new Di;L5(qc,v)};function p(v){v.preventDefault(),n5(qc,t,n).then(m=>{const f=/(.*)@/;a(!0),d(m.user.email.match(f)[1]),localStorage.setItem("nickName",m.user.email.match(f)[1]),c(!l)}).catch(m=>{alert("Please check your E-mail or Password")})}const g=v=>{v.preventDefault(),t5(qc,t,n).then(m=>{alert("Your account is signed up!"),s(!r)}).catch(m=>{alert("Please try again to sign up")})};return j.jsxs("div",{className:"signInModal",children:[j.jsx("h1",{children:"StarryNight"}),r?j.jsxs(j.Fragment,{children:[j.jsxs("div",{className:"inputBox",children:[j.jsx("div",{className:"loginInput",children:j.jsx("input",{placeholder:"Email",required:!0,type:"email",value:t,onChange:v=>e(v.target.value)})}),j.jsx("div",{className:"loginInput",children:j.jsx("input",{placeholder:"Password",required:!0,type:"password",value:n,onChange:v=>i(v.target.value)})}),j.jsx("button",{className:"",type:"submit",onClick:p,children:"Login"})]}),j.jsxs("div",{className:"loginBox",children:[j.jsxs("div",{className:"orBox",children:[j.jsx("hr",{}),j.jsx("span",{children:"or"}),j.jsx("hr",{})]}),j.jsx("button",{className:"googleLoginButton",type:"submit",onClick:h,children:"Google Login"}),j.jsxs("div",{className:"signUpBox",children:[j.jsx("span",{children:"Want to join with us?"}),j.jsx("button",{onClick:()=>s(!r),children:"Sign up"})]})]})]}):j.jsx(j.Fragment,{children:j.jsxs("div",{className:"inputBox",children:[j.jsx("div",{className:"signUpInput",children:j.jsx("input",{placeholder:"Email",type:"email",required:!0,value:t,onChange:v=>e(v.target.value)})}),j.jsx("div",{className:"signUpInput",children:j.jsx("input",{placeholder:"Password",type:"password",required:!0,value:n,onChange:v=>i(v.target.value)})}),j.jsx("p",{children:"Please set correct email form and over 8 characters password"}),j.jsx("button",{className:"",type:"submit",onClick:g,children:"SignUp & Go to Login"})]})})]})}function wT(t,e){return function(){return t.apply(e,arguments)}}const{toString:yV}=Object.prototype,{getPrototypeOf:$g}=Object,Jd=(t=>e=>{const n=yV.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Mi=t=>(t=t.toLowerCase(),e=>Jd(e)===t),Qd=t=>e=>typeof e===t,{isArray:la}=Array,Al=Qd("undefined");function SV(t){return t!==null&&!Al(t)&&t.constructor!==null&&!Al(t.constructor)&&Vn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const TT=Mi("ArrayBuffer");function EV(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&TT(t.buffer),e}const xV=Qd("string"),Vn=Qd("function"),RT=Qd("number"),ef=t=>t!==null&&typeof t=="object",MV=t=>t===!0||t===!1,hu=t=>{if(Jd(t)!=="object")return!1;const e=$g(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},wV=Mi("Date"),TV=Mi("File"),RV=Mi("Blob"),AV=Mi("FileList"),bV=t=>ef(t)&&Vn(t.pipe),CV=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Vn(t.append)&&((e=Jd(t))==="formdata"||e==="object"&&Vn(t.toString)&&t.toString()==="[object FormData]"))},LV=Mi("URLSearchParams"),PV=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Kl(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),la(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function AT(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const bT=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),CT=t=>!Al(t)&&t!==bT;function om(){const{caseless:t}=CT(this)&&this||{},e={},n=(i,r)=>{const s=t&&AT(e,r)||r;hu(e[s])&&hu(i)?e[s]=om(e[s],i):hu(i)?e[s]=om({},i):la(i)?e[s]=i.slice():e[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&Kl(arguments[i],n);return e}const IV=(t,e,n,{allOwnKeys:i}={})=>(Kl(e,(r,s)=>{n&&Vn(r)?t[s]=wT(r,n):t[s]=r},{allOwnKeys:i}),t),NV=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),DV=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},UV=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&$g(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},OV=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},kV=t=>{if(!t)return null;if(la(t))return t;let e=t.length;if(!RT(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},FV=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&$g(Uint8Array)),BV=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},zV=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},VV=Mi("HTMLFormElement"),HV=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),ky=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),GV=Mi("RegExp"),LT=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Kl(n,(r,s)=>{e(r,s,t)!==!1&&(i[s]=r)}),Object.defineProperties(t,i)},WV=t=>{LT(t,(e,n)=>{if(Vn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(Vn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},jV=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return la(t)?i(t):i(String(t).split(e)),n},$V=()=>{},XV=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Ph="abcdefghijklmnopqrstuvwxyz",Fy="0123456789",PT={DIGIT:Fy,ALPHA:Ph,ALPHA_DIGIT:Ph+Ph.toUpperCase()+Fy},qV=(t=16,e=PT.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n};function YV(t){return!!(t&&Vn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const KV=t=>{const e=new Array(10),n=(i,r)=>{if(ef(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const s=la(i)?[]:{};return Kl(i,(o,a)=>{const l=n(o,r+1);!Al(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},ZV=Mi("AsyncFunction"),JV=t=>t&&(ef(t)||Vn(t))&&Vn(t.then)&&Vn(t.catch),le={isArray:la,isArrayBuffer:TT,isBuffer:SV,isFormData:CV,isArrayBufferView:EV,isString:xV,isNumber:RT,isBoolean:MV,isObject:ef,isPlainObject:hu,isUndefined:Al,isDate:wV,isFile:TV,isBlob:RV,isRegExp:GV,isFunction:Vn,isStream:bV,isURLSearchParams:LV,isTypedArray:FV,isFileList:AV,forEach:Kl,merge:om,extend:IV,trim:PV,stripBOM:NV,inherits:DV,toFlatObject:UV,kindOf:Jd,kindOfTest:Mi,endsWith:OV,toArray:kV,forEachEntry:BV,matchAll:zV,isHTMLForm:VV,hasOwnProperty:ky,hasOwnProp:ky,reduceDescriptors:LT,freezeMethods:WV,toObjectSet:jV,toCamelCase:HV,noop:$V,toFiniteNumber:XV,findKey:AT,global:bT,isContextDefined:CT,ALPHABET:PT,generateString:qV,isSpecCompliantForm:YV,toJSONObject:KV,isAsyncFn:ZV,isThenable:JV};function it(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}le.inherits(it,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:le.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const IT=it.prototype,NT={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{NT[t]={value:t}});Object.defineProperties(it,NT);Object.defineProperty(IT,"isAxiosError",{value:!0});it.from=(t,e,n,i,r,s)=>{const o=Object.create(IT);return le.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),it.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const QV=null;function am(t){return le.isPlainObject(t)||le.isArray(t)}function DT(t){return le.endsWith(t,"[]")?t.slice(0,-2):t}function By(t,e,n){return t?t.concat(e).map(function(r,s){return r=DT(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function e6(t){return le.isArray(t)&&!t.some(am)}const t6=le.toFlatObject(le,{},null,function(e){return/^is[A-Z]/.test(e)});function tf(t,e,n){if(!le.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=le.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,m){return!le.isUndefined(m[v])});const i=n.metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&le.isSpecCompliantForm(e);if(!le.isFunction(r))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(le.isDate(g))return g.toISOString();if(!l&&le.isBlob(g))throw new it("Blob is not supported. Use a Buffer instead.");return le.isArrayBuffer(g)||le.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,v,m){let f=g;if(g&&!m&&typeof g=="object"){if(le.endsWith(v,"{}"))v=i?v:v.slice(0,-2),g=JSON.stringify(g);else if(le.isArray(g)&&e6(g)||(le.isFileList(g)||le.endsWith(v,"[]"))&&(f=le.toArray(g)))return v=DT(v),f.forEach(function(y,S){!(le.isUndefined(y)||y===null)&&e.append(o===!0?By([v],S,s):o===null?v:v+"[]",c(y))}),!1}return am(g)?!0:(e.append(By(m,v,s),c(g)),!1)}const d=[],h=Object.assign(t6,{defaultVisitor:u,convertValue:c,isVisitable:am});function p(g,v){if(!le.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(g),le.forEach(g,function(f,_){(!(le.isUndefined(f)||f===null)&&r.call(e,f,le.isString(_)?_.trim():_,v,h))===!0&&p(f,v?v.concat(_):[_])}),d.pop()}}if(!le.isObject(t))throw new TypeError("data must be an object");return p(t),e}function zy(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Xg(t,e){this._pairs=[],t&&tf(t,this,e)}const UT=Xg.prototype;UT.append=function(e,n){this._pairs.push([e,n])};UT.toString=function(e){const n=e?function(i){return e.call(this,i,zy)}:zy;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function n6(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function OT(t,e,n){if(!e)return t;const i=n&&n.encode||n6,r=n&&n.serialize;let s;if(r?s=r(e,n):s=le.isURLSearchParams(e)?e.toString():new Xg(e,n).toString(i),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class i6{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){le.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Vy=i6,kT={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},r6=typeof URLSearchParams<"u"?URLSearchParams:Xg,s6=typeof FormData<"u"?FormData:null,o6=typeof Blob<"u"?Blob:null,a6=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),l6=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),pi={isBrowser:!0,classes:{URLSearchParams:r6,FormData:s6,Blob:o6},isStandardBrowserEnv:a6,isStandardBrowserWebWorkerEnv:l6,protocols:["http","https","file","blob","url","data"]};function c6(t,e){return tf(t,new pi.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,s){return pi.isNode&&le.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function u6(t){return le.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function d6(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function FT(t){function e(n,i,r,s){let o=n[s++];const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&le.isArray(r)?r.length:o,l?(le.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!le.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&le.isArray(r[o])&&(r[o]=d6(r[o])),!a)}if(le.isFormData(t)&&le.isFunction(t.entries)){const n={};return le.forEachEntry(t,(i,r)=>{e(u6(i),r,n,0)}),n}return null}const f6={"Content-Type":void 0};function h6(t,e,n){if(le.isString(t))try{return(e||JSON.parse)(t),le.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const nf={transitional:kT,adapter:["xhr","http"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=le.isObject(e);if(s&&le.isHTMLForm(e)&&(e=new FormData(e)),le.isFormData(e))return r&&r?JSON.stringify(FT(e)):e;if(le.isArrayBuffer(e)||le.isBuffer(e)||le.isStream(e)||le.isFile(e)||le.isBlob(e))return e;if(le.isArrayBufferView(e))return e.buffer;if(le.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return c6(e,this.formSerializer).toString();if((a=le.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return tf(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),h6(e)):e}],transformResponse:[function(e){const n=this.transitional||nf.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(e&&le.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?it.from(a,it.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:pi.classes.FormData,Blob:pi.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};le.forEach(["delete","get","head"],function(e){nf.headers[e]={}});le.forEach(["post","put","patch"],function(e){nf.headers[e]=le.merge(f6)});const qg=nf,p6=le.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),m6=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&p6[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},Hy=Symbol("internals");function La(t){return t&&String(t).trim().toLowerCase()}function pu(t){return t===!1||t==null?t:le.isArray(t)?t.map(pu):String(t)}function g6(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const v6=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Ih(t,e,n,i,r){if(le.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!le.isString(e)){if(le.isString(i))return e.indexOf(i)!==-1;if(le.isRegExp(i))return i.test(e)}}function _6(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function y6(t,e){const n=le.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}class rf{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const u=La(l);if(!u)throw new Error("header name must be a non-empty string");const d=le.findKey(r,u);(!d||r[d]===void 0||c===!0||c===void 0&&r[d]!==!1)&&(r[d||l]=pu(a))}const o=(a,l)=>le.forEach(a,(c,u)=>s(c,u,l));return le.isPlainObject(e)||e instanceof this.constructor?o(e,n):le.isString(e)&&(e=e.trim())&&!v6(e)?o(m6(e),n):e!=null&&s(n,e,i),this}get(e,n){if(e=La(e),e){const i=le.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return g6(r);if(le.isFunction(n))return n.call(this,r,i);if(le.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=La(e),e){const i=le.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Ih(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=La(o),o){const a=le.findKey(i,o);a&&(!n||Ih(i,i[a],a,n))&&(delete i[a],r=!0)}}return le.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||Ih(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return le.forEach(this,(r,s)=>{const o=le.findKey(i,s);if(o){n[o]=pu(r),delete n[s];return}const a=e?_6(s):String(s).trim();a!==s&&delete n[s],n[a]=pu(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return le.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&le.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Hy]=this[Hy]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=La(o);i[a]||(y6(r,o),i[a]=!0)}return le.isArray(e)?e.forEach(s):s(e),this}}rf.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);le.freezeMethods(rf.prototype);le.freezeMethods(rf);const Gi=rf;function Nh(t,e){const n=this||qg,i=e||n,r=Gi.from(i.headers);let s=i.data;return le.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function BT(t){return!!(t&&t.__CANCEL__)}function Zl(t,e,n){it.call(this,t??"canceled",it.ERR_CANCELED,e,n),this.name="CanceledError"}le.inherits(Zl,it,{__CANCEL__:!0});function S6(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new it("Request failed with status code "+n.status,[it.ERR_BAD_REQUEST,it.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const E6=pi.isStandardBrowserEnv?function(){return{write:function(n,i,r,s,o,a){const l=[];l.push(n+"="+encodeURIComponent(i)),le.isNumber(r)&&l.push("expires="+new Date(r).toGMTString()),le.isString(s)&&l.push("path="+s),le.isString(o)&&l.push("domain="+o),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const i=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function x6(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function M6(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function zT(t,e){return t&&!x6(e)?M6(t,e):e}const w6=pi.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let i;function r(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return i=r(window.location.href),function(o){const a=le.isString(o)?r(o):o;return a.protocol===i.protocol&&a.host===i.host}}():function(){return function(){return!0}}();function T6(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function R6(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),n[r]=l,i[r]=c;let d=s,h=0;for(;d!==r;)h+=n[d++],d=d%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const p=u&&c-u;return p?Math.round(h*1e3/p):void 0}}function Gy(t,e){let n=0;const i=R6(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,l=i(a),c=s<=o;n=s;const u={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&c?(o-s)/l:void 0,event:r};u[e?"download":"upload"]=!0,t(u)}}const A6=typeof XMLHttpRequest<"u",b6=A6&&function(t){return new Promise(function(n,i){let r=t.data;const s=Gi.from(t.headers).normalize(),o=t.responseType;let a;function l(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}le.isFormData(r)&&(pi.isStandardBrowserEnv||pi.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(t.auth){const p=t.auth.username||"",g=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(p+":"+g))}const u=zT(t.baseURL,t.url);c.open(t.method.toUpperCase(),OT(u,t.params,t.paramsSerializer),!0),c.timeout=t.timeout;function d(){if(!c)return;const p=Gi.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),v={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:p,config:t,request:c};S6(function(f){n(f),l()},function(f){i(f),l()},v),c=null}if("onloadend"in c?c.onloadend=d:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(d)},c.onabort=function(){c&&(i(new it("Request aborted",it.ECONNABORTED,t,c)),c=null)},c.onerror=function(){i(new it("Network Error",it.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let g=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const v=t.transitional||kT;t.timeoutErrorMessage&&(g=t.timeoutErrorMessage),i(new it(g,v.clarifyTimeoutError?it.ETIMEDOUT:it.ECONNABORTED,t,c)),c=null},pi.isStandardBrowserEnv){const p=(t.withCredentials||w6(u))&&t.xsrfCookieName&&E6.read(t.xsrfCookieName);p&&s.set(t.xsrfHeaderName,p)}r===void 0&&s.setContentType(null),"setRequestHeader"in c&&le.forEach(s.toJSON(),function(g,v){c.setRequestHeader(v,g)}),le.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),o&&o!=="json"&&(c.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&c.addEventListener("progress",Gy(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Gy(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=p=>{c&&(i(!p||p.type?new Zl(null,t,c):p),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const h=T6(u);if(h&&pi.protocols.indexOf(h)===-1){i(new it("Unsupported protocol "+h+":",it.ERR_BAD_REQUEST,t));return}c.send(r||null)})},mu={http:QV,xhr:b6};le.forEach(mu,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const C6={getAdapter:t=>{t=le.isArray(t)?t:[t];const{length:e}=t;let n,i;for(let r=0;r<e&&(n=t[r],!(i=le.isString(n)?mu[n.toLowerCase()]:n));r++);if(!i)throw i===!1?new it(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(le.hasOwnProp(mu,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!le.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:mu};function Dh(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Zl(null,t)}function Wy(t){return Dh(t),t.headers=Gi.from(t.headers),t.data=Nh.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),C6.getAdapter(t.adapter||qg.adapter)(t).then(function(i){return Dh(t),i.data=Nh.call(t,t.transformResponse,i),i.headers=Gi.from(i.headers),i},function(i){return BT(i)||(Dh(t),i&&i.response&&(i.response.data=Nh.call(t,t.transformResponse,i.response),i.response.headers=Gi.from(i.response.headers))),Promise.reject(i)})}const jy=t=>t instanceof Gi?t.toJSON():t;function Ko(t,e){e=e||{};const n={};function i(c,u,d){return le.isPlainObject(c)&&le.isPlainObject(u)?le.merge.call({caseless:d},c,u):le.isPlainObject(u)?le.merge({},u):le.isArray(u)?u.slice():u}function r(c,u,d){if(le.isUndefined(u)){if(!le.isUndefined(c))return i(void 0,c,d)}else return i(c,u,d)}function s(c,u){if(!le.isUndefined(u))return i(void 0,u)}function o(c,u){if(le.isUndefined(u)){if(!le.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,d){if(d in e)return i(c,u);if(d in t)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u)=>r(jy(c),jy(u),!0)};return le.forEach(Object.keys(Object.assign({},t,e)),function(u){const d=l[u]||r,h=d(t[u],e[u],u);le.isUndefined(h)&&d!==a||(n[u]=h)}),n}const VT="1.4.0",Yg={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Yg[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const $y={};Yg.transitional=function(e,n,i){function r(s,o){return"[Axios v"+VT+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new it(r(o," has been removed"+(n?" in "+n:"")),it.ERR_DEPRECATED);return n&&!$y[o]&&($y[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function L6(t,e,n){if(typeof t!="object")throw new it("options must be an object",it.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new it("option "+s+" must be "+l,it.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new it("Unknown option "+s,it.ERR_BAD_OPTION)}}const lm={assertOptions:L6,validators:Yg},rr=lm.validators;class rd{constructor(e){this.defaults=e,this.interceptors={request:new Vy,response:new Vy}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ko(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&lm.assertOptions(i,{silentJSONParsing:rr.transitional(rr.boolean),forcedJSONParsing:rr.transitional(rr.boolean),clarifyTimeoutError:rr.transitional(rr.boolean)},!1),r!=null&&(le.isFunction(r)?n.paramsSerializer={serialize:r}:lm.assertOptions(r,{encode:rr.function,serialize:rr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=s&&le.merge(s.common,s[n.method]),o&&le.forEach(["delete","get","head","post","put","patch","common"],g=>{delete s[g]}),n.headers=Gi.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,d=0,h;if(!l){const g=[Wy.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,c),h=g.length,u=Promise.resolve(n);d<h;)u=u.then(g[d++],g[d++]);return u}h=a.length;let p=n;for(d=0;d<h;){const g=a[d++],v=a[d++];try{p=g(p)}catch(m){v.call(this,m);break}}try{u=Wy.call(this,p)}catch(g){return Promise.reject(g)}for(d=0,h=c.length;d<h;)u=u.then(c[d++],c[d++]);return u}getUri(e){e=Ko(this.defaults,e);const n=zT(e.baseURL,e.url);return OT(n,e.params,e.paramsSerializer)}}le.forEach(["delete","get","head","options"],function(e){rd.prototype[e]=function(n,i){return this.request(Ko(i||{},{method:e,url:n,data:(i||{}).data}))}});le.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(Ko(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}rd.prototype[e]=n(),rd.prototype[e+"Form"]=n(!0)});const gu=rd;class Kg{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new Zl(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Kg(function(r){e=r}),cancel:e}}}const P6=Kg;function I6(t){return function(n){return t.apply(null,n)}}function N6(t){return le.isObject(t)&&t.isAxiosError===!0}const cm={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(cm).forEach(([t,e])=>{cm[e]=t});const D6=cm;function HT(t){const e=new gu(t),n=wT(gu.prototype.request,e);return le.extend(n,gu.prototype,e,{allOwnKeys:!0}),le.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return HT(Ko(t,r))},n}const kt=HT(qg);kt.Axios=gu;kt.CanceledError=Zl;kt.CancelToken=P6;kt.isCancel=BT;kt.VERSION=VT;kt.toFormData=tf;kt.AxiosError=it;kt.Cancel=kt.CanceledError;kt.all=function(e){return Promise.all(e)};kt.spread=I6;kt.isAxiosError=N6;kt.mergeConfig=Ko;kt.AxiosHeaders=Gi;kt.formToJSON=t=>FT(le.isHTMLForm(t)?new FormData(t):t);kt.HttpStatusCode=D6;kt.default=kt;const U6=kt,O6="AIzaSyAf0aIGPl8pvWT_7g3GlRi99jlJXIsunS0";const k6=()=>{const[t,e]=ve.useState(!0),[n,i]=ve.useState(!1),[r,s]=ve.useState(!1),[o,a]=ve.useState(!1),[l,c]=ve.useState(""),[u,d]=ve.useState(""),[h,p]=ve.useState(1),g=8,v=()=>{const w=(h-1)*g,b=w+g;return u.slice(w,b)},m=Math.ceil(u.length/g),f=[];for(let w=1;w<=m;w++)f.push(j.jsx("button",{className:h===w?"active":"",onClick:()=>p(w),children:w},w));ve.useEffect(()=>{(async()=>{try{const b=await U6.get("https://www.googleapis.com/youtube/v3/search",{params:{key:O6,part:"snippet",q:"light pollution",maxResults:50}});e(!t),i(!n),c(b.data.items[0]),d(b.data.items)}catch(b){console.error(b)}})()},[]);const _=()=>{i(!n),s(!r)},y=()=>{i(!n),a(!o)},S=w=>{p(w)},E=w=>{window.open(`https://www.youtube.com/watch?v=${w}`,"_blank")};return j.jsxs("div",{className:"AwarnessModal",children:[t&&j.jsxs("div",{className:"skeleton-video",children:[j.jsx("div",{className:"skeleton-thumbnail"}),j.jsxs("div",{className:"skeleton-details",children:[j.jsx("div",{className:"skeleton-title"}),j.jsx("div",{className:"skeleton-channel"})]})]}),n&&j.jsxs("div",{className:"youtubeContainer",children:[j.jsxs("div",{className:"thumbnail",children:[j.jsxs("svg",{onClick:_,width:"66",height:"66",viewBox:"0 0 66 66",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[j.jsx("rect",{width:"66",height:"66",rx:"33",fill:"white"}),j.jsx("path",{d:"M50 33L24.5 47.7224L24.5 18.2776L50 33Z",fill:"black"})]}),j.jsx("img",{src:l.snippet.thumbnails.high.url,alt:"mainvideo"})]}),j.jsxs("div",{className:"descriptionContainer",children:[j.jsxs("div",{children:[j.jsx("h1",{children:l.snippet.title}),j.jsx("p",{children:l.snippet.description}),j.jsx("p",{})]}),j.jsx("div",{className:"moreButton",children:j.jsx("svg",{onClick:y,width:"89",height:"22",viewBox:"0 0 89 22",xmlns:"http://www.w3.org/2000/svg",style:{fill:"black"},children:j.jsx("path",{d:"M88.5312 12.0312C89.1007 11.4617 89.1007 10.5383 88.5312 9.9688L79.2504 0.688025C78.6809 0.118511 77.7575 0.118511 77.188 0.688025C76.6185 1.25754 76.6185 2.18091 77.188 2.75042L85.4376 11L77.188 19.2496C76.6185 19.8191 76.6185 20.7425 77.188 21.312C77.7575 21.8815 78.6809 21.8815 79.2504 21.312L88.5312 12.0312ZM0 12.4583H87.5V9.54167H0V12.4583Z",fill:"white"})})})]})]}),r&&j.jsxs("div",{className:"iframeContainer",children:[j.jsx("svg",{onClick:_,width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:j.jsx("path",{d:"M0.910955 6.58917C0.754729 6.4329 0.666966 6.22097 0.666966 6C0.666966 5.77903 0.754729 5.56711 0.910955 5.41084L5.62512 0.696668C5.70199 0.617076 5.79395 0.553591 5.89562 0.509917C5.99729 0.466242 6.10664 0.443255 6.21729 0.442293C6.32794 0.441332 6.43767 0.462416 6.54008 0.504317C6.6425 0.546218 6.73554 0.608096 6.81378 0.68634C6.89203 0.764584 6.95391 0.857626 6.99581 0.96004C7.03771 1.06245 7.05879 1.17219 7.05783 1.28284C7.05687 1.39349 7.03388 1.50284 6.99021 1.60451C6.94653 1.70618 6.88305 1.79813 6.80345 1.875L2.67845 6L6.80345 10.125C6.95525 10.2822 7.03925 10.4927 7.03735 10.7112C7.03545 10.9297 6.94781 11.1387 6.7933 11.2932C6.6388 11.4477 6.42979 11.5353 6.21129 11.5372C5.99279 11.5391 5.78229 11.4551 5.62512 11.3033L0.910955 6.58917Z",fill:"white"})}),j.jsx("iframe",{src:`https://www.youtube.com/embed/${l.id.videoId}`,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})]}),o&&j.jsxs("div",{className:"moreContainer",children:[j.jsx("svg",{onClick:y,width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:j.jsx("path",{d:"M0.910955 6.58917C0.754729 6.4329 0.666966 6.22097 0.666966 6C0.666966 5.77903 0.754729 5.56711 0.910955 5.41084L5.62512 0.696668C5.70199 0.617076 5.79395 0.553591 5.89562 0.509917C5.99729 0.466242 6.10664 0.443255 6.21729 0.442293C6.32794 0.441332 6.43767 0.462416 6.54008 0.504317C6.6425 0.546218 6.73554 0.608096 6.81378 0.68634C6.89203 0.764584 6.95391 0.857626 6.99581 0.96004C7.03771 1.06245 7.05879 1.17219 7.05783 1.28284C7.05687 1.39349 7.03388 1.50284 6.99021 1.60451C6.94653 1.70618 6.88305 1.79813 6.80345 1.875L2.67845 6L6.80345 10.125C6.95525 10.2822 7.03925 10.4927 7.03735 10.7112C7.03545 10.9297 6.94781 11.1387 6.7933 11.2932C6.6388 11.4477 6.42979 11.5353 6.21129 11.5372C5.99279 11.5391 5.78229 11.4551 5.62512 11.3033L0.910955 6.58917Z",fill:"white"})}),j.jsx("div",{className:"videoContainer",children:v().map(w=>j.jsxs("div",{onClick:()=>E(w.id.videoId),className:"videoItem",children:[j.jsx("img",{src:w.snippet.thumbnails.medium.url,alt:w.snippet.title}),j.jsx("h3",{children:w.snippet.title}),j.jsx("p",{children:w.snippet.publishTime.match(/^(\d{4}-\d{2}-\d{2})/)[0]})]},w.id.videoId))}),j.jsxs("div",{className:"paginationButtons",children:[h!==1&&j.jsx("button",{onClick:()=>S(h-1),children:"<"}),f.map(w=>w),h!==m&&j.jsx("button",{onClick:()=>S(h+1),children:">"})]})]})]})},GT=()=>{const t=wd(),[e,n]=ve.useState(!1),[i,r]=kn(ww),[s,o]=kn(Rw),[a,l]=kn(DB),[c,u]=kn(Tw);ve.useEffect(()=>{const m=localStorage.getItem("nickName");m&&u(m)},[]);const d=()=>{n(!e)},h=()=>{o(!s)},p=()=>{r(!i),t(-1)},g=()=>{localStorage.removeItem("nickName"),window.location.reload()},v=()=>{l(!a)};return j.jsxs(j.Fragment,{children:[j.jsx("header",{children:j.jsxs("div",{className:"container-header",children:[i&&j.jsx(j.Fragment,{children:j.jsx("svg",{onClick:p,width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:j.jsx("path",{d:"M0.910955 6.58917C0.754729 6.4329 0.666966 6.22097 0.666966 6C0.666966 5.77903 0.754729 5.56711 0.910955 5.41084L5.62512 0.696668C5.70199 0.617076 5.79395 0.553591 5.89562 0.509917C5.99729 0.466242 6.10664 0.443255 6.21729 0.442293C6.32794 0.441332 6.43767 0.462416 6.54008 0.504317C6.6425 0.546218 6.73554 0.608096 6.81378 0.68634C6.89203 0.764584 6.95391 0.857626 6.99581 0.96004C7.03771 1.06245 7.05879 1.17219 7.05783 1.28284C7.05687 1.39349 7.03388 1.50284 6.99021 1.60451C6.94653 1.70618 6.88305 1.79813 6.80345 1.875L2.67845 6L6.80345 10.125C6.95525 10.2822 7.03925 10.4927 7.03735 10.7112C7.03545 10.9297 6.94781 11.1387 6.7933 11.2932C6.6388 11.4477 6.42979 11.5353 6.21129 11.5372C5.99279 11.5391 5.78229 11.4551 5.62512 11.3033L0.910955 6.58917Z",fill:"white"})})}),j.jsx("span",{onClick:d,children:"About StarryNight"}),j.jsx("span",{onClick:v,children:"Awarness"}),c?j.jsxs(j.Fragment,{children:[j.jsx("span",{children:c}),j.jsx("span",{onClick:g,children:"Log Out"})]}):j.jsx("span",{onClick:h,children:"Sign In"})]})}),e&&j.jsxs(j.Fragment,{children:[j.jsx("div",{onClick:d,className:"filter"}),j.jsx("div",{className:"modal",children:j.jsxs("div",{className:"modal-content",children:[j.jsxs("p",{children:["Have you ever seen the night sky because you want to see the stars?",j.jsx("br",{}),"Have you ever looked up at the sky on an especially difficult day?",j.jsx("br",{}),"But you rarely see stars Why is it getting harder to see the stars?",j.jsx("br",{}),j.jsx("br",{}),"According to the Ministry of Environment, light pollution refers to a condition in which excessive light due to improper use of artificial lighting or light leaking out of the lighting area to be illuminated interferes with people`'`s healthy and pleasant lives or damages the environment. Although this type of pollution can exist throughout the day, its effects are magnified during the night with the contrast of darkness.The area affected by artificial illumination continues to increase. The Starry night raises awareness of the phenomenon that light pollution is getting worse as urbanization gets worse. This project also tried to show the seriousness of light pollution in each country and the seriousness of each country.",j.jsx("br",{}),j.jsx("br",{}),"The Starry Night is a project by Jungho Yeom. Data from ",j.jsx("a",{href:"https://www.darksky.org/light-pollution/",children:"Dark Sky"})," and visualization created with Three.js."]}),j.jsx("button",{onClick:d,children:"X"})]})})]}),s&&j.jsxs(j.Fragment,{children:[j.jsx("div",{onClick:h,className:"filter"}),j.jsx(MT,{})]}),a&&j.jsxs(j.Fragment,{children:[j.jsx("div",{onClick:v,className:"filter"}),j.jsx(k6,{})]})]})};function F6(){const t=ve.useRef(null),[e,n]=kn(IB),[i,r]=kn(ww),[s,o]=kn(Ng),a=wd(),l=ve.useRef(null),c=ve.useRef(null),u=ve.useRef(null),d=ve.useRef(null),h=ve.useRef(null),p=ve.useRef([]);return console.log(1),ve.useEffect(()=>{let g=null;const v=new Pg({canvas:t.current,antialias:!0});v.setSize(window.innerWidth,window.innerHeight),v.domElement.style.pointerEvents="auto",l.current=v;const m=new fw;c.current=m;const f=new Tn(75,window.innerWidth/window.innerHeight,.1,1e3),_=0;f.zoom=_,f.updateProjectionMatrix(),u.current=f,f.position.copy(e);const y=new vw(3552075,.3);m.add(y);const S=new El(1,32,32),E=new gw,w=E.load("/earth/textures/Material.001_baseColor.jpeg",ce=>(ce.flipY=!1,ce.needsUpdate=!0,ce)),b=E.load("/earth/textures/Material.001_metallicRoughness.png",ce=>(ce.flipY=!1,ce.needsUpdate=!0,ce)),I=E.load("/earth/textures/Material.001_emissive.jpeg",ce=>(ce.flipY=!1,ce.needsUpdate=!0,ce)),x=new sB({map:w,metalnessMap:b,roughnessMap:b,emissiveMap:I,emissive:new Ze(16777215),emissiveIntensity:1});w.minFilter=yt,w.magFilter=yt,b.minFilter=yt,b.magFilter=yt,I.minFilter=yt,I.magFilter=yt;const R=new Fn(S,x);m.add(R);const te=new xs,ae=new Ew(v);ae.addPass(new xw(m,f)),ae.addPass(te),h.current=ae;const k=new _w(f,v.domElement);k.enableDamping=!0,k.rotateSpeed=.4,k.panSpeed=.4,k.enableZoom=!1,d.current=k;class G{constructor(M,U,O,Y){this.geometry=new El(.0115,8,8),this.material=new Xd({color:16777215,transparent:!0,opacity:.5,side:hi}),this.mesh=new Fn(this.geometry,this.material),this.mesh.position.set(M.x,M.y,M.z),this.mesh.userData.isButton=!0,this.mesh.userData.hovered=!1,this.mesh.userData.clicked=!1,this.mesh.userData.cameraPosition=U,this.text=new PB(O),this.text.position.set(M.x,M.y+.05,M.z),this.text.material.depthTest=!1,this.text.material.transparent=!0,this.text.material.opacity=0,this.text.scale.set(.05,.05,.05),this.mesh.userData.text=this.text,this.mesh.userData.level=Y,m.add(this.mesh),m.add(this.text)}}UB.forEach(ce=>{const M=new G(ce.location,ce.camera,ce.country,ce.pollutionLevel);m.add(M.mesh),p.current.push(M)});function Z(ce){const M=new Ce;M.x=ce.clientX/window.innerWidth*2-1,M.y=-(ce.clientY/window.innerHeight)*2+1;const U=new ry;U.setFromCamera(M,f);const O=U.intersectObjects(m.children,!0);for(const Y of m.children)Y.userData.isButton&&(O.length>0&&O[0].object===Y?Y.userData.hovered||(Y.userData.hovered=!0,Y.material.opacity=1,Y.material.needsUpdate=!0,v.domElement.style.cursor="pointer",Y.userData.text.material.opacity=1):Y.userData.hovered&&(Y.userData.hovered=!1,Y.material.opacity=.5,Y.material.needsUpdate=!0,v.domElement.style.cursor="auto",Y.userData.text.material.opacity=0))}function ue(){f.aspect=window.innerWidth/window.innerHeight,f.updateProjectionMatrix(),v.setSize(window.innerWidth,window.innerHeight),ae.setSize(window.innerWidth,window.innerHeight)}function Q(ce){const M=new Ce;M.x=ce.clientX/window.innerWidth*2-1,M.y=-(ce.clientY/window.innerHeight)*2+1;const U=new ry;U.setFromCamera(M,f);const O=U.intersectObjects(m.children,!0);for(const Y of O){const X=Y.object;if(X.userData&&X.userData.isButton&&!X.userData.clicked){X.userData.text.material.opacity=1;const pe=new V(...X.userData.cameraPosition),Se=1e3;new ui.Tween(f.position).to(pe,Se).easing(ui.Easing.Quadratic.InOut).start().onComplete(()=>{X.userData.clicked=!1;const he=0,De=1e3;new ui.Tween(f).to({zoom:he},De).easing(ui.Easing.Quadratic.InOut).onUpdate(()=>{f.updateProjectionMatrix()}).start().onComplete(()=>{n(f.position),o(X.userData.level),r(!i),a("/info")})});break}}}function B(){setTimeout(()=>{new ui.Tween(f).to({zoom:1},4e3).easing(ui.Easing.Quadratic.InOut).onUpdate(()=>{f.updateProjectionMatrix()}).start()},500)}function q(){g=requestAnimationFrame(q),ui.update(),d.current.update(),h.current.render()}B(),q(),window.addEventListener("resize",()=>{f.aspect=window.innerWidth/window.innerHeight,f.updateProjectionMatrix(),v.setSize(window.innerWidth,window.innerHeight),ae.setSize(window.innerWidth,window.innerHeight)});const W=t.current;return W&&(W.addEventListener("mousemove",Z),W.addEventListener("click",Q)),()=>{cancelAnimationFrame(g),window.removeEventListener("resize",ue);const ce=t.current;ce&&(ce.addEventListener("mousemove",Z),ce.addEventListener("click",Q))}},[]),j.jsxs(j.Fragment,{children:[j.jsx(GT,{}),j.jsx("canvas",{ref:t}),";"]})}const B6=()=>{const[t,e]=ve.useState(!1),[n,i]=kn(Ng),r=ve.useRef([]);ve.useEffect(()=>{const a=document.querySelectorAll(".checkLevel");r.current=Array.from(a),s(n)},[n]);const s=a=>{switch(a){case .02:o(1);break;case .04:o(2);break;case .5:o(5);break;case .8:o(7);break}},o=a=>{r.current[a-1]&&Array.from(r.current).reverse()[a-1].classList.add("hidden")};return j.jsxs("div",{className:"displayLevel",children:[j.jsx("div",{className:"svgContainer",onClick:()=>e(!t),children:j.jsxs("svg",{viewBox:"0 0 326 73",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[j.jsx("rect",{x:"295.712",y:"29.6949",width:"27.0224",height:"19.6526",fill:"#010001"}),j.jsx("rect",{x:"295.712",y:"29.6949",width:"27.0224",height:"19.6526",fill:"black",fillOpacity:"0.5",className:"checkLevel"}),j.jsx("rect",{x:"253.644",y:"29.6949",width:"27.0224",height:"19.6526",fill:"#152B6D"}),j.jsx("rect",{x:"253.644",y:"29.6949",width:"27.0224",height:"19.6526",fill:"black",fillOpacity:"0.5",className:"checkLevel"}),j.jsx("rect",{x:"211.576",y:"29.6949",width:"27.0224",height:"19.6526",fill:"#64D841"}),j.jsx("rect",{x:"211.576",y:"29.6949",width:"27.0224",height:"19.6526",fill:"black",fillOpacity:"0.5",className:"checkLevel"}),j.jsx("rect",{x:"169.508",y:"29.6949",width:"27.0224",height:"19.6526",fill:"#FDF953"}),j.jsx("rect",{x:"169.508",y:"29.6949",width:"27.0224",height:"19.6526",fill:"black",fillOpacity:"0.5",className:"checkLevel"}),j.jsx("rect",{x:"127.441",y:"29.6949",width:"27.0224",height:"19.6526",fill:"#E1A53C"}),j.jsx("rect",{x:"127.441",y:"29.6949",width:"27.0224",height:"19.6526",fill:"black",fillOpacity:"0.5",className:"checkLevel"}),j.jsx("rect",{x:"85.3728",y:"29.6949",width:"27.0224",height:"19.6526",fill:"#B75843"}),j.jsx("rect",{x:"85.3728",y:"29.6949",width:"27.0224",height:"19.6526",fill:"black",fillOpacity:"0.5",className:"checkLevel"}),j.jsx("rect",{x:"43.3051",y:"29.6949",width:"27.0224",height:"19.6526",fill:"#9C241D"}),j.jsx("rect",{x:"43.3051",y:"29.6949",width:"27.0224",height:"19.6526",fill:"black",fillOpacity:"0.5",className:"checkLevel"}),j.jsx("rect",{x:"1.2373",y:"29.6949",width:"27.0224",height:"19.6526",fill:"#AAAAAA"}),j.jsx("rect",{x:"1.2373",y:"29.6949",width:"27.0224",height:"19.6526",fill:"black",fillOpacity:"0.5",className:"checkLevel"}),j.jsx("path",{d:"M1.2373 56.9153L321.695 56.9153",stroke:"white",strokeWidth:"1.23729"}),j.jsx("path",{d:"M2.31464 63.3915C2.55542 63.3932 2.79269 63.4372 3.02644 63.5233C3.26018 63.6094 3.47109 63.75 3.65914 63.9451C3.84895 64.1402 4.0001 64.4038 4.11258 64.736C4.22682 65.0664 4.28481 65.4777 4.28657 65.9698C4.28657 66.4425 4.23912 66.8635 4.14421 67.2325C4.04931 67.5999 3.9131 67.9101 3.73559 68.1631C3.55984 68.4162 3.3463 68.6087 3.09498 68.7405C2.84365 68.8723 2.56069 68.9382 2.2461 68.9382C1.92448 68.9382 1.63888 68.8749 1.38931 68.7484C1.13975 68.6218 0.936754 68.447 0.780335 68.2238C0.623917 67.9988 0.526375 67.7405 0.487709 67.4487H1.29177C1.3445 67.6807 1.4517 67.8687 1.6134 68.0129C1.77684 68.1552 1.98775 68.2264 2.2461 68.2264C2.64154 68.2264 2.94998 68.0542 3.17143 67.7097C3.39288 67.3635 3.50448 66.8801 3.50624 66.2597H3.46406C3.37266 66.4109 3.25843 66.5409 3.12134 66.6499C2.98601 66.7589 2.83399 66.8432 2.66527 66.903C2.49655 66.9628 2.3164 66.9926 2.12483 66.9926C1.81375 66.9926 1.53079 66.9162 1.27595 66.7633C1.02111 66.6104 0.818122 66.4003 0.666976 66.1332C0.51583 65.8661 0.440257 65.5611 0.440257 65.2184C0.440257 64.8775 0.517587 64.5681 0.672248 64.2905C0.828667 64.0128 1.0466 63.7931 1.32604 63.6314C1.60724 63.4679 1.93678 63.388 2.31464 63.3915ZM2.31728 64.0769C2.11165 64.0769 1.92623 64.1279 1.76103 64.2298C1.59758 64.33 1.4684 64.4662 1.3735 64.6384C1.27859 64.8089 1.23114 64.9987 1.23114 65.2079C1.23114 65.417 1.27683 65.6068 1.36822 65.7773C1.46137 65.946 1.58791 66.0805 1.74785 66.1807C1.90954 66.2791 2.09408 66.3283 2.30146 66.3283C2.45612 66.3283 2.60024 66.2984 2.73381 66.2387C2.86738 66.1789 2.98425 66.0963 3.08443 65.9908C3.18461 65.8836 3.26282 65.7624 3.31906 65.627C3.3753 65.4917 3.40342 65.3494 3.40342 65.2C3.40342 65.0014 3.35597 64.8168 3.26106 64.6464C3.16791 64.4759 3.03962 64.3388 2.87617 64.2351C2.71272 64.1296 2.52642 64.0769 2.31728 64.0769Z",fill:"white"}),j.jsx("path",{d:"M323.025 63.4653V68.8644H322.208V64.2825H322.176L320.885 65.1262V64.3458L322.232 63.4653H323.025Z",fill:"white"}),j.jsx("line",{x1:"1.85595",y1:"54.4407",x2:"1.85595",y2:"59.3898",stroke:"white",strokeWidth:"1.23729"}),j.jsx("line",{x1:"322.313",y1:"54.4407",x2:"322.313",y2:"59.3898",stroke:"white",strokeWidth:"1.23729"})]})}),t&&j.jsx("img",{onClick:()=>e(!t),src:"./public/stars/level.jpg",alt:"level"})]})};function z6(){const t=ve.useRef(null);wd();const e=ve.useRef(null),n=ve.useRef(null),i=ve.useRef(null),r=ve.useRef(null),s=ve.useRef(null),o=ve.useRef(null),[a,l]=kn(Ng);return ve.useEffect(()=>{let c=null;const u=new Pg({canvas:t.current,antialias:!0});u.setSize(window.innerWidth,window.innerHeight),u.domElement.style.pointerEvents="auto",e.current=u;const d=new fw;n.current=d;const h=new Tn(75,window.innerWidth/window.innerHeight,.1,1e3);i.current=h;const p=new vw(3552075,.3);d.add(p);const g=new El(1,32,32),m=new gw().load("/stars/textures/material_emissive.png",ae=>{ae.flipY=!1,ae.minFilter=yt,ae.magFilter=yt,o.current.emissiveMap=ae,o.current.needsUpdate=!0}),f=new oB({emissiveMap:m,emissive:new Ze(16777215),emissiveIntensity:a,side:cn,transparent:!0,opacity:0});o.current=f,m.minFilter=yt,m.magFilter=yt;const _=new Fn(g,f);d.add(_),_.geometry.computeBoundingSphere();const y=_.geometry.boundingSphere.center.clone(),S=1,E=y.clone().add(new V(0,0,S));h.position.copy(E),h.lookAt(y);const w=new xs,b=new Ew(u);b.addPass(new xw(d,h)),b.addPass(w),s.current=b;const I=new _w(h,u.domElement);I.enableDamping=!0,I.rotateSpeed=.4,I.panSpeed=.4,I.enableZoom=!1,r.current=I;function x(){h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight),b.setSize(window.innerWidth,window.innerHeight)}function R(){c=requestAnimationFrame(R),ui.update(),r.current.update(),s.current.render()}function te(){const ae={value:0},k=2e3;new ui.Tween(ae).to({value:1},k).easing(ui.Easing.Quadratic.InOut).onUpdate(()=>{o.current.opacity=ae.value,o.current.needsUpdate=!0}).start()}return setTimeout(()=>{te()},500),R(),window.addEventListener("resize",x),()=>{cancelAnimationFrame(c),window.removeEventListener("resize",x)}},[]),j.jsxs("div",{style:{position:"relative"},children:[j.jsx(GT,{}),j.jsx("canvas",{ref:t}),j.jsx(B6,{})]})}const V6=()=>{const[t,e]=ve.useState(!1),n=wd();return ve.useEffect(()=>{const i=setTimeout(()=>{e(!0)},5500);return()=>{clearTimeout(i)}},[]),ve.useEffect(()=>{t&&n("/Earth")},[t]),j.jsx("main",{className:"main",children:j.jsxs("p",{className:`quote ${t?"animate":""}`,children:[j.jsx("span",{children:"“For my part I know nothing with any certainty, but the sight of the stars makes me dream.”"}),j.jsx("br",{}),j.jsx("span",{children:"— Vincent van Gogh"})]})})};lx(document.getElementById("root")).render(j.jsx(nD,{children:j.jsx(db,{children:j.jsxs(cb,{children:[j.jsx(Ua,{path:"/",element:j.jsx(V6,{})}),j.jsx(Ua,{path:"/earth",element:j.jsx(F6,{style:{overflow:"hidden"}})}),j.jsx(Ua,{path:"/signin",element:j.jsx(MT,{})}),j.jsx(Ua,{path:"/Info",element:j.jsx(z6,{})})]})})}),document.getElementById("root"));
