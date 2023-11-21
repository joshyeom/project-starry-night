function XR(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function yE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var SE={exports:{}},Gd={},EE={exports:{}},et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rc=Symbol.for("react.element"),qR=Symbol.for("react.portal"),YR=Symbol.for("react.fragment"),KR=Symbol.for("react.strict_mode"),ZR=Symbol.for("react.profiler"),JR=Symbol.for("react.provider"),QR=Symbol.for("react.context"),eb=Symbol.for("react.forward_ref"),tb=Symbol.for("react.suspense"),nb=Symbol.for("react.memo"),ib=Symbol.for("react.lazy"),u_=Symbol.iterator;function rb(t){return t===null||typeof t!="object"?null:(t=u_&&t[u_]||t["@@iterator"],typeof t=="function"?t:null)}var xE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wE=Object.assign,ME={};function Sa(t,e,n){this.props=t,this.context=e,this.refs=ME,this.updater=n||xE}Sa.prototype.isReactComponent={};Sa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Sa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function TE(){}TE.prototype=Sa.prototype;function dg(t,e,n){this.props=t,this.context=e,this.refs=ME,this.updater=n||xE}var fg=dg.prototype=new TE;fg.constructor=dg;wE(fg,Sa.prototype);fg.isPureReactComponent=!0;var d_=Array.isArray,RE=Object.prototype.hasOwnProperty,hg={current:null},bE={key:!0,ref:!0,__self:!0,__source:!0};function AE(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)RE.call(e,i)&&!bE.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:rc,type:t,key:s,ref:o,props:r,_owner:hg.current}}function sb(t,e){return{$$typeof:rc,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pg(t){return typeof t=="object"&&t!==null&&t.$$typeof===rc}function ob(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var f_=/\/+/g;function Zf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ob(""+t.key):e.toString(36)}function bu(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case rc:case qR:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Zf(o,0):i,d_(r)?(n="",t!=null&&(n=t.replace(f_,"$&/")+"/"),bu(r,e,n,"",function(c){return c})):r!=null&&(pg(r)&&(r=sb(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(f_,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",d_(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Zf(s,a);o+=bu(s,e,n,l,r)}else if(l=rb(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Zf(s,a++),o+=bu(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Lc(t,e,n){if(t==null)return t;var i=[],r=0;return bu(t,i,"","",function(s){return e.call(n,s,r++)}),i}function ab(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _n={current:null},Au={transition:null},lb={ReactCurrentDispatcher:_n,ReactCurrentBatchConfig:Au,ReactCurrentOwner:hg};et.Children={map:Lc,forEach:function(t,e,n){Lc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Lc(t,function(){e++}),e},toArray:function(t){return Lc(t,function(e){return e})||[]},only:function(t){if(!pg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};et.Component=Sa;et.Fragment=YR;et.Profiler=ZR;et.PureComponent=dg;et.StrictMode=KR;et.Suspense=tb;et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lb;et.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=wE({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=hg.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)RE.call(e,l)&&!bE.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:rc,type:t.type,key:r,ref:s,props:i,_owner:o}};et.createContext=function(t){return t={$$typeof:QR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:JR,_context:t},t.Consumer=t};et.createElement=AE;et.createFactory=function(t){var e=AE.bind(null,t);return e.type=t,e};et.createRef=function(){return{current:null}};et.forwardRef=function(t){return{$$typeof:eb,render:t}};et.isValidElement=pg;et.lazy=function(t){return{$$typeof:ib,_payload:{_status:-1,_result:t},_init:ab}};et.memo=function(t,e){return{$$typeof:nb,type:t,compare:e===void 0?null:e}};et.startTransition=function(t){var e=Au.transition;Au.transition={};try{t()}finally{Au.transition=e}};et.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};et.useCallback=function(t,e){return _n.current.useCallback(t,e)};et.useContext=function(t){return _n.current.useContext(t)};et.useDebugValue=function(){};et.useDeferredValue=function(t){return _n.current.useDeferredValue(t)};et.useEffect=function(t,e){return _n.current.useEffect(t,e)};et.useId=function(){return _n.current.useId()};et.useImperativeHandle=function(t,e,n){return _n.current.useImperativeHandle(t,e,n)};et.useInsertionEffect=function(t,e){return _n.current.useInsertionEffect(t,e)};et.useLayoutEffect=function(t,e){return _n.current.useLayoutEffect(t,e)};et.useMemo=function(t,e){return _n.current.useMemo(t,e)};et.useReducer=function(t,e,n){return _n.current.useReducer(t,e,n)};et.useRef=function(t){return _n.current.useRef(t)};et.useState=function(t){return _n.current.useState(t)};et.useSyncExternalStore=function(t,e,n){return _n.current.useSyncExternalStore(t,e,n)};et.useTransition=function(){return _n.current.useTransition()};et.version="18.2.0";EE.exports=et;var me=EE.exports;const lt=yE(me),cb=XR({__proto__:null,default:lt},[me]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ub=me,db=Symbol.for("react.element"),fb=Symbol.for("react.fragment"),hb=Object.prototype.hasOwnProperty,pb=ub.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mb={key:!0,ref:!0,__self:!0,__source:!0};function CE(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)hb.call(e,i)&&!mb.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:db,type:t,key:s,ref:o,props:r,_owner:pb.current}}Gd.Fragment=fb;Gd.jsx=CE;Gd.jsxs=CE;SE.exports=Gd;var Y=SE.exports,PE={exports:{}},Fn={},LE={exports:{}},IE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,j){var H=F.length;F.push(j);e:for(;0<H;){var ae=H-1>>>1,M=F[ae];if(0<r(M,j))F[ae]=j,F[H]=M,H=ae;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var j=F[0],H=F.pop();if(H!==j){F[0]=H;e:for(var ae=0,M=F.length,U=M>>>1;ae<U;){var O=2*(ae+1)-1,q=F[O],$=O+1,pe=F[$];if(0>r(q,H))$<M&&0>r(pe,q)?(F[ae]=pe,F[$]=H,ae=$):(F[ae]=q,F[O]=H,ae=O);else if($<M&&0>r(pe,H))F[ae]=pe,F[$]=H,ae=$;else break e}}return j}function r(F,j){var H=F.sortIndex-j.sortIndex;return H!==0?H:F.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,m=!1,v=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(F){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=F)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function S(F){if(v=!1,y(F),!m)if(n(l)!==null)m=!0,ce(E);else{var j=n(c);j!==null&&K(S,j.startTime-F)}}function E(F,j){m=!1,v&&(v=!1,f(I),I=-1),p=!0;var H=h;try{for(y(j),d=n(l);d!==null&&(!(d.expirationTime>j)||F&&!Q());){var ae=d.callback;if(typeof ae=="function"){d.callback=null,h=d.priorityLevel;var M=ae(d.expirationTime<=j);j=t.unstable_now(),typeof M=="function"?d.callback=M:d===n(l)&&i(l),y(j)}else i(l);d=n(l)}if(d!==null)var U=!0;else{var O=n(c);O!==null&&K(S,O.startTime-j),U=!1}return U}finally{d=null,h=H,p=!1}}var w=!1,T=null,I=-1,x=5,b=-1;function Q(){return!(t.unstable_now()-b<x)}function ue(){if(T!==null){var F=t.unstable_now();b=F;var j=!0;try{j=T(!0,F)}finally{j?k():(w=!1,T=null)}}else w=!1}var k;if(typeof _=="function")k=function(){_(ue)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,J=W.port2;W.port1.onmessage=ue,k=function(){J.postMessage(null)}}else k=function(){g(ue,0)};function ce(F){T=F,w||(w=!0,k())}function K(F,j){I=g(function(){F(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,ce(E))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var H=h;h=j;try{return F()}finally{h=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,j){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var H=h;h=F;try{return j()}finally{h=H}},t.unstable_scheduleCallback=function(F,j,H){var ae=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ae+H:ae):H=ae,F){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=H+M,F={id:u++,callback:j,priorityLevel:F,startTime:H,expirationTime:M,sortIndex:-1},H>ae?(F.sortIndex=H,e(c,F),n(l)===null&&F===n(c)&&(v?(f(I),I=-1):v=!0,K(S,H-ae))):(F.sortIndex=M,e(l,F),m||p||(m=!0,ce(E))),F},t.unstable_shouldYield=Q,t.unstable_wrapCallback=function(F){var j=h;return function(){var H=h;h=j;try{return F.apply(this,arguments)}finally{h=H}}}})(IE);LE.exports=IE;var gb=LE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NE=me,kn=gb;function ge(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var DE=new Set,Al={};function Gs(t,e){Zo(t,e),Zo(t+"Capture",e)}function Zo(t,e){for(Al[t]=e,t=0;t<e.length;t++)DE.add(e[t])}var tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ap=Object.prototype.hasOwnProperty,vb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h_={},p_={};function _b(t){return Ap.call(p_,t)?!0:Ap.call(h_,t)?!1:vb.test(t)?p_[t]=!0:(h_[t]=!0,!1)}function yb(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Sb(t,e,n,i){if(e===null||typeof e>"u"||yb(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Jt[t]=new yn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Jt[e]=new yn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Jt[t]=new yn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Jt[t]=new yn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Jt[t]=new yn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Jt[t]=new yn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Jt[t]=new yn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Jt[t]=new yn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Jt[t]=new yn(t,5,!1,t.toLowerCase(),null,!1,!1)});var mg=/[\-:]([a-z])/g;function gg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(mg,gg);Jt[e]=new yn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(mg,gg);Jt[e]=new yn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(mg,gg);Jt[e]=new yn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Jt[t]=new yn(t,1,!1,t.toLowerCase(),null,!1,!1)});Jt.xlinkHref=new yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Jt[t]=new yn(t,1,!1,t.toLowerCase(),null,!0,!0)});function vg(t,e,n,i){var r=Jt.hasOwnProperty(e)?Jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Sb(e,n,r,i)&&(n=null),i||r===null?_b(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var or=NE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ic=Symbol.for("react.element"),Mo=Symbol.for("react.portal"),To=Symbol.for("react.fragment"),_g=Symbol.for("react.strict_mode"),Cp=Symbol.for("react.profiler"),UE=Symbol.for("react.provider"),OE=Symbol.for("react.context"),yg=Symbol.for("react.forward_ref"),Pp=Symbol.for("react.suspense"),Lp=Symbol.for("react.suspense_list"),Sg=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),kE=Symbol.for("react.offscreen"),m_=Symbol.iterator;function Ua(t){return t===null||typeof t!="object"?null:(t=m_&&t[m_]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Object.assign,Jf;function nl(t){if(Jf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Jf=e&&e[1]||""}return`
`+Jf+t}var Qf=!1;function eh(t,e){if(!t||Qf)return"";Qf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Qf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?nl(t):""}function Eb(t){switch(t.tag){case 5:return nl(t.type);case 16:return nl("Lazy");case 13:return nl("Suspense");case 19:return nl("SuspenseList");case 0:case 2:case 15:return t=eh(t.type,!1),t;case 11:return t=eh(t.type.render,!1),t;case 1:return t=eh(t.type,!0),t;default:return""}}function Ip(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case To:return"Fragment";case Mo:return"Portal";case Cp:return"Profiler";case _g:return"StrictMode";case Pp:return"Suspense";case Lp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case OE:return(t.displayName||"Context")+".Consumer";case UE:return(t._context.displayName||"Context")+".Provider";case yg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sg:return e=t.displayName||null,e!==null?e:Ip(t.type)||"Memo";case vr:e=t._payload,t=t._init;try{return Ip(t(e))}catch{}}return null}function xb(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ip(e);case 8:return e===_g?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function FE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function wb(t){var e=FE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Nc(t){t._valueTracker||(t._valueTracker=wb(t))}function BE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=FE(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Qu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Np(t,e){var n=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function g_(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zE(t,e){e=e.checked,e!=null&&vg(t,"checked",e,!1)}function Dp(t,e){zE(t,e);var n=Wr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Up(t,e.type,n):e.hasOwnProperty("defaultValue")&&Up(t,e.type,Wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function v_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Up(t,e,n){(e!=="number"||Qu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var il=Array.isArray;function Bo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Wr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Op(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ge(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function __(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ge(92));if(il(n)){if(1<n.length)throw Error(ge(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wr(n)}}function VE(t,e){var n=Wr(e.value),i=Wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function y_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function HE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?HE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Dc,GE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Dc=Dc||document.createElement("div"),Dc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Dc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Cl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var hl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mb=["Webkit","ms","Moz","O"];Object.keys(hl).forEach(function(t){Mb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),hl[e]=hl[t]})});function WE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||hl.hasOwnProperty(t)&&hl[t]?(""+e).trim():e+"px"}function $E(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=WE(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Tb=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fp(t,e){if(e){if(Tb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ge(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ge(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ge(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ge(62))}}function Bp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zp=null;function Eg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vp=null,zo=null,Vo=null;function S_(t){if(t=ac(t)){if(typeof Vp!="function")throw Error(ge(280));var e=t.stateNode;e&&(e=qd(e),Vp(t.stateNode,t.type,e))}}function jE(t){zo?Vo?Vo.push(t):Vo=[t]:zo=t}function XE(){if(zo){var t=zo,e=Vo;if(Vo=zo=null,S_(t),e)for(t=0;t<e.length;t++)S_(e[t])}}function qE(t,e){return t(e)}function YE(){}var th=!1;function KE(t,e,n){if(th)return t(e,n);th=!0;try{return qE(t,e,n)}finally{th=!1,(zo!==null||Vo!==null)&&(YE(),XE())}}function Pl(t,e){var n=t.stateNode;if(n===null)return null;var i=qd(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ge(231,e,typeof n));return n}var Hp=!1;if(tr)try{var Oa={};Object.defineProperty(Oa,"passive",{get:function(){Hp=!0}}),window.addEventListener("test",Oa,Oa),window.removeEventListener("test",Oa,Oa)}catch{Hp=!1}function Rb(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var pl=!1,ed=null,td=!1,Gp=null,bb={onError:function(t){pl=!0,ed=t}};function Ab(t,e,n,i,r,s,o,a,l){pl=!1,ed=null,Rb.apply(bb,arguments)}function Cb(t,e,n,i,r,s,o,a,l){if(Ab.apply(this,arguments),pl){if(pl){var c=ed;pl=!1,ed=null}else throw Error(ge(198));td||(td=!0,Gp=c)}}function Ws(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ZE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function E_(t){if(Ws(t)!==t)throw Error(ge(188))}function Pb(t){var e=t.alternate;if(!e){if(e=Ws(t),e===null)throw Error(ge(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return E_(r),t;if(s===i)return E_(r),e;s=s.sibling}throw Error(ge(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ge(189))}}if(n.alternate!==i)throw Error(ge(190))}if(n.tag!==3)throw Error(ge(188));return n.stateNode.current===n?t:e}function JE(t){return t=Pb(t),t!==null?QE(t):null}function QE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=QE(t);if(e!==null)return e;t=t.sibling}return null}var ex=kn.unstable_scheduleCallback,x_=kn.unstable_cancelCallback,Lb=kn.unstable_shouldYield,Ib=kn.unstable_requestPaint,It=kn.unstable_now,Nb=kn.unstable_getCurrentPriorityLevel,xg=kn.unstable_ImmediatePriority,tx=kn.unstable_UserBlockingPriority,nd=kn.unstable_NormalPriority,Db=kn.unstable_LowPriority,nx=kn.unstable_IdlePriority,Wd=null,Ti=null;function Ub(t){if(Ti&&typeof Ti.onCommitFiberRoot=="function")try{Ti.onCommitFiberRoot(Wd,t,void 0,(t.current.flags&128)===128)}catch{}}var di=Math.clz32?Math.clz32:Fb,Ob=Math.log,kb=Math.LN2;function Fb(t){return t>>>=0,t===0?32:31-(Ob(t)/kb|0)|0}var Uc=64,Oc=4194304;function rl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function id(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=rl(a):(s&=o,s!==0&&(i=rl(s)))}else o=n&~r,o!==0?i=rl(o):s!==0&&(i=rl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-di(e),r=1<<n,i|=t[n],e&=~r;return i}function Bb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zb(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-di(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Bb(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Wp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ix(){var t=Uc;return Uc<<=1,!(Uc&4194240)&&(Uc=64),t}function nh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function sc(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-di(e),t[e]=n}function Vb(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-di(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function wg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-di(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ct=0;function rx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sx,Mg,ox,ax,lx,$p=!1,kc=[],Lr=null,Ir=null,Nr=null,Ll=new Map,Il=new Map,Sr=[],Hb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function w_(t,e){switch(t){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":Ll.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Il.delete(e.pointerId)}}function ka(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ac(e),e!==null&&Mg(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Gb(t,e,n,i,r){switch(e){case"focusin":return Lr=ka(Lr,t,e,n,i,r),!0;case"dragenter":return Ir=ka(Ir,t,e,n,i,r),!0;case"mouseover":return Nr=ka(Nr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ll.set(s,ka(Ll.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Il.set(s,ka(Il.get(s)||null,t,e,n,i,r)),!0}return!1}function cx(t){var e=vs(t.target);if(e!==null){var n=Ws(e);if(n!==null){if(e=n.tag,e===13){if(e=ZE(n),e!==null){t.blockedOn=e,lx(t.priority,function(){ox(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);zp=i,n.target.dispatchEvent(i),zp=null}else return e=ac(n),e!==null&&Mg(e),t.blockedOn=n,!1;e.shift()}return!0}function M_(t,e,n){Cu(t)&&n.delete(e)}function Wb(){$p=!1,Lr!==null&&Cu(Lr)&&(Lr=null),Ir!==null&&Cu(Ir)&&(Ir=null),Nr!==null&&Cu(Nr)&&(Nr=null),Ll.forEach(M_),Il.forEach(M_)}function Fa(t,e){t.blockedOn===e&&(t.blockedOn=null,$p||($p=!0,kn.unstable_scheduleCallback(kn.unstable_NormalPriority,Wb)))}function Nl(t){function e(r){return Fa(r,t)}if(0<kc.length){Fa(kc[0],t);for(var n=1;n<kc.length;n++){var i=kc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Lr!==null&&Fa(Lr,t),Ir!==null&&Fa(Ir,t),Nr!==null&&Fa(Nr,t),Ll.forEach(e),Il.forEach(e),n=0;n<Sr.length;n++)i=Sr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Sr.length&&(n=Sr[0],n.blockedOn===null);)cx(n),n.blockedOn===null&&Sr.shift()}var Ho=or.ReactCurrentBatchConfig,rd=!0;function $b(t,e,n,i){var r=ct,s=Ho.transition;Ho.transition=null;try{ct=1,Tg(t,e,n,i)}finally{ct=r,Ho.transition=s}}function jb(t,e,n,i){var r=ct,s=Ho.transition;Ho.transition=null;try{ct=4,Tg(t,e,n,i)}finally{ct=r,Ho.transition=s}}function Tg(t,e,n,i){if(rd){var r=jp(t,e,n,i);if(r===null)fh(t,e,i,sd,n),w_(t,i);else if(Gb(r,t,e,n,i))i.stopPropagation();else if(w_(t,i),e&4&&-1<Hb.indexOf(t)){for(;r!==null;){var s=ac(r);if(s!==null&&sx(s),s=jp(t,e,n,i),s===null&&fh(t,e,i,sd,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else fh(t,e,i,null,n)}}var sd=null;function jp(t,e,n,i){if(sd=null,t=Eg(i),t=vs(t),t!==null)if(e=Ws(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ZE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sd=t,null}function ux(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nb()){case xg:return 1;case tx:return 4;case nd:case Db:return 16;case nx:return 536870912;default:return 16}default:return 16}}var Tr=null,Rg=null,Pu=null;function dx(){if(Pu)return Pu;var t,e=Rg,n=e.length,i,r="value"in Tr?Tr.value:Tr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Pu=r.slice(t,1<i?1-i:void 0)}function Lu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fc(){return!0}function T_(){return!1}function Bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fc:T_,this.isPropagationStopped=T_,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fc)},persist:function(){},isPersistent:Fc}),e}var Ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bg=Bn(Ea),oc=Tt({},Ea,{view:0,detail:0}),Xb=Bn(oc),ih,rh,Ba,$d=Tt({},oc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ag,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ba&&(Ba&&t.type==="mousemove"?(ih=t.screenX-Ba.screenX,rh=t.screenY-Ba.screenY):rh=ih=0,Ba=t),ih)},movementY:function(t){return"movementY"in t?t.movementY:rh}}),R_=Bn($d),qb=Tt({},$d,{dataTransfer:0}),Yb=Bn(qb),Kb=Tt({},oc,{relatedTarget:0}),sh=Bn(Kb),Zb=Tt({},Ea,{animationName:0,elapsedTime:0,pseudoElement:0}),Jb=Bn(Zb),Qb=Tt({},Ea,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eA=Bn(Qb),tA=Tt({},Ea,{data:0}),b_=Bn(tA),nA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=rA[t])?!!e[t]:!1}function Ag(){return sA}var oA=Tt({},oc,{key:function(t){if(t.key){var e=nA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Lu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?iA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ag,charCode:function(t){return t.type==="keypress"?Lu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Lu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),aA=Bn(oA),lA=Tt({},$d,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),A_=Bn(lA),cA=Tt({},oc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ag}),uA=Bn(cA),dA=Tt({},Ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),fA=Bn(dA),hA=Tt({},$d,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pA=Bn(hA),mA=[9,13,27,32],Cg=tr&&"CompositionEvent"in window,ml=null;tr&&"documentMode"in document&&(ml=document.documentMode);var gA=tr&&"TextEvent"in window&&!ml,fx=tr&&(!Cg||ml&&8<ml&&11>=ml),C_=String.fromCharCode(32),P_=!1;function hx(t,e){switch(t){case"keyup":return mA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function px(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ro=!1;function vA(t,e){switch(t){case"compositionend":return px(e);case"keypress":return e.which!==32?null:(P_=!0,C_);case"textInput":return t=e.data,t===C_&&P_?null:t;default:return null}}function _A(t,e){if(Ro)return t==="compositionend"||!Cg&&hx(t,e)?(t=dx(),Pu=Rg=Tr=null,Ro=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fx&&e.locale!=="ko"?null:e.data;default:return null}}var yA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function L_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yA[t.type]:e==="textarea"}function mx(t,e,n,i){jE(i),e=od(e,"onChange"),0<e.length&&(n=new bg("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var gl=null,Dl=null;function SA(t){Rx(t,0)}function jd(t){var e=Co(t);if(BE(e))return t}function EA(t,e){if(t==="change")return e}var gx=!1;if(tr){var oh;if(tr){var ah="oninput"in document;if(!ah){var I_=document.createElement("div");I_.setAttribute("oninput","return;"),ah=typeof I_.oninput=="function"}oh=ah}else oh=!1;gx=oh&&(!document.documentMode||9<document.documentMode)}function N_(){gl&&(gl.detachEvent("onpropertychange",vx),Dl=gl=null)}function vx(t){if(t.propertyName==="value"&&jd(Dl)){var e=[];mx(e,Dl,t,Eg(t)),KE(SA,e)}}function xA(t,e,n){t==="focusin"?(N_(),gl=e,Dl=n,gl.attachEvent("onpropertychange",vx)):t==="focusout"&&N_()}function wA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jd(Dl)}function MA(t,e){if(t==="click")return jd(e)}function TA(t,e){if(t==="input"||t==="change")return jd(e)}function RA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gi=typeof Object.is=="function"?Object.is:RA;function Ul(t,e){if(gi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ap.call(e,r)||!gi(t[r],e[r]))return!1}return!0}function D_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function U_(t,e){var n=D_(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=D_(n)}}function _x(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_x(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yx(){for(var t=window,e=Qu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Qu(t.document)}return e}function Pg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bA(t){var e=yx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_x(n.ownerDocument.documentElement,n)){if(i!==null&&Pg(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=U_(n,s);var o=U_(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var AA=tr&&"documentMode"in document&&11>=document.documentMode,bo=null,Xp=null,vl=null,qp=!1;function O_(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qp||bo==null||bo!==Qu(i)||(i=bo,"selectionStart"in i&&Pg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),vl&&Ul(vl,i)||(vl=i,i=od(Xp,"onSelect"),0<i.length&&(e=new bg("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=bo)))}function Bc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ao={animationend:Bc("Animation","AnimationEnd"),animationiteration:Bc("Animation","AnimationIteration"),animationstart:Bc("Animation","AnimationStart"),transitionend:Bc("Transition","TransitionEnd")},lh={},Sx={};tr&&(Sx=document.createElement("div").style,"AnimationEvent"in window||(delete Ao.animationend.animation,delete Ao.animationiteration.animation,delete Ao.animationstart.animation),"TransitionEvent"in window||delete Ao.transitionend.transition);function Xd(t){if(lh[t])return lh[t];if(!Ao[t])return t;var e=Ao[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Sx)return lh[t]=e[n];return t}var Ex=Xd("animationend"),xx=Xd("animationiteration"),wx=Xd("animationstart"),Mx=Xd("transitionend"),Tx=new Map,k_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(t,e){Tx.set(t,e),Gs(e,[t])}for(var ch=0;ch<k_.length;ch++){var uh=k_[ch],CA=uh.toLowerCase(),PA=uh[0].toUpperCase()+uh.slice(1);Xr(CA,"on"+PA)}Xr(Ex,"onAnimationEnd");Xr(xx,"onAnimationIteration");Xr(wx,"onAnimationStart");Xr("dblclick","onDoubleClick");Xr("focusin","onFocus");Xr("focusout","onBlur");Xr(Mx,"onTransitionEnd");Zo("onMouseEnter",["mouseout","mouseover"]);Zo("onMouseLeave",["mouseout","mouseover"]);Zo("onPointerEnter",["pointerout","pointerover"]);Zo("onPointerLeave",["pointerout","pointerover"]);Gs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LA=new Set("cancel close invalid load scroll toggle".split(" ").concat(sl));function F_(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Cb(i,e,void 0,t),t.currentTarget=null}function Rx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;F_(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;F_(r,a,c),s=l}}}if(td)throw t=Gp,td=!1,Gp=null,t}function gt(t,e){var n=e[Qp];n===void 0&&(n=e[Qp]=new Set);var i=t+"__bubble";n.has(i)||(bx(e,t,2,!1),n.add(i))}function dh(t,e,n){var i=0;e&&(i|=4),bx(n,t,i,e)}var zc="_reactListening"+Math.random().toString(36).slice(2);function Ol(t){if(!t[zc]){t[zc]=!0,DE.forEach(function(n){n!=="selectionchange"&&(LA.has(n)||dh(n,!1,t),dh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zc]||(e[zc]=!0,dh("selectionchange",!1,e))}}function bx(t,e,n,i){switch(ux(e)){case 1:var r=$b;break;case 4:r=jb;break;default:r=Tg}n=r.bind(null,e,n,t),r=void 0,!Hp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function fh(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=vs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}KE(function(){var c=s,u=Eg(n),d=[];e:{var h=Tx.get(t);if(h!==void 0){var p=bg,m=t;switch(t){case"keypress":if(Lu(n)===0)break e;case"keydown":case"keyup":p=aA;break;case"focusin":m="focus",p=sh;break;case"focusout":m="blur",p=sh;break;case"beforeblur":case"afterblur":p=sh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=R_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Yb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=uA;break;case Ex:case xx:case wx:p=Jb;break;case Mx:p=fA;break;case"scroll":p=Xb;break;case"wheel":p=pA;break;case"copy":case"cut":case"paste":p=eA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=A_}var v=(e&4)!==0,g=!v&&t==="scroll",f=v?h!==null?h+"Capture":null:h;v=[];for(var _=c,y;_!==null;){y=_;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,f!==null&&(S=Pl(_,f),S!=null&&v.push(kl(_,S,y)))),g)break;_=_.return}0<v.length&&(h=new p(h,m,null,n,u),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==zp&&(m=n.relatedTarget||n.fromElement)&&(vs(m)||m[nr]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?vs(m):null,m!==null&&(g=Ws(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(v=R_,S="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(v=A_,S="onPointerLeave",f="onPointerEnter",_="pointer"),g=p==null?h:Co(p),y=m==null?h:Co(m),h=new v(S,_+"leave",p,n,u),h.target=g,h.relatedTarget=y,S=null,vs(u)===c&&(v=new v(f,_+"enter",m,n,u),v.target=y,v.relatedTarget=g,S=v),g=S,p&&m)t:{for(v=p,f=m,_=0,y=v;y;y=Ks(y))_++;for(y=0,S=f;S;S=Ks(S))y++;for(;0<_-y;)v=Ks(v),_--;for(;0<y-_;)f=Ks(f),y--;for(;_--;){if(v===f||f!==null&&v===f.alternate)break t;v=Ks(v),f=Ks(f)}v=null}else v=null;p!==null&&B_(d,h,p,v,!1),m!==null&&g!==null&&B_(d,g,m,v,!0)}}e:{if(h=c?Co(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var E=EA;else if(L_(h))if(gx)E=TA;else{E=wA;var w=xA}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=MA);if(E&&(E=E(t,c))){mx(d,E,n,u);break e}w&&w(t,h,c),t==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&Up(h,"number",h.value)}switch(w=c?Co(c):window,t){case"focusin":(L_(w)||w.contentEditable==="true")&&(bo=w,Xp=c,vl=null);break;case"focusout":vl=Xp=bo=null;break;case"mousedown":qp=!0;break;case"contextmenu":case"mouseup":case"dragend":qp=!1,O_(d,n,u);break;case"selectionchange":if(AA)break;case"keydown":case"keyup":O_(d,n,u)}var T;if(Cg)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Ro?hx(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(fx&&n.locale!=="ko"&&(Ro||I!=="onCompositionStart"?I==="onCompositionEnd"&&Ro&&(T=dx()):(Tr=u,Rg="value"in Tr?Tr.value:Tr.textContent,Ro=!0)),w=od(c,I),0<w.length&&(I=new b_(I,t,null,n,u),d.push({event:I,listeners:w}),T?I.data=T:(T=px(n),T!==null&&(I.data=T)))),(T=gA?vA(t,n):_A(t,n))&&(c=od(c,"onBeforeInput"),0<c.length&&(u=new b_("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=T))}Rx(d,e)})}function kl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function od(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Pl(t,n),s!=null&&i.unshift(kl(t,s,r)),s=Pl(t,e),s!=null&&i.push(kl(t,s,r))),t=t.return}return i}function Ks(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function B_(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Pl(n,s),l!=null&&o.unshift(kl(n,l,a))):r||(l=Pl(n,s),l!=null&&o.push(kl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var IA=/\r\n?/g,NA=/\u0000|\uFFFD/g;function z_(t){return(typeof t=="string"?t:""+t).replace(IA,`
`).replace(NA,"")}function Vc(t,e,n){if(e=z_(e),z_(t)!==e&&n)throw Error(ge(425))}function ad(){}var Yp=null,Kp=null;function Zp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jp=typeof setTimeout=="function"?setTimeout:void 0,DA=typeof clearTimeout=="function"?clearTimeout:void 0,V_=typeof Promise=="function"?Promise:void 0,UA=typeof queueMicrotask=="function"?queueMicrotask:typeof V_<"u"?function(t){return V_.resolve(null).then(t).catch(OA)}:Jp;function OA(t){setTimeout(function(){throw t})}function hh(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Nl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Nl(e)}function Dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function H_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xa=Math.random().toString(36).slice(2),xi="__reactFiber$"+xa,Fl="__reactProps$"+xa,nr="__reactContainer$"+xa,Qp="__reactEvents$"+xa,kA="__reactListeners$"+xa,FA="__reactHandles$"+xa;function vs(t){var e=t[xi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[nr]||n[xi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=H_(t);t!==null;){if(n=t[xi])return n;t=H_(t)}return e}t=n,n=t.parentNode}return null}function ac(t){return t=t[xi]||t[nr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Co(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ge(33))}function qd(t){return t[Fl]||null}var em=[],Po=-1;function qr(t){return{current:t}}function yt(t){0>Po||(t.current=em[Po],em[Po]=null,Po--)}function pt(t,e){Po++,em[Po]=t.current,t.current=e}var $r={},on=qr($r),wn=qr(!1),Ls=$r;function Jo(t,e){var n=t.type.contextTypes;if(!n)return $r;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Mn(t){return t=t.childContextTypes,t!=null}function ld(){yt(wn),yt(on)}function G_(t,e,n){if(on.current!==$r)throw Error(ge(168));pt(on,e),pt(wn,n)}function Ax(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ge(108,xb(t)||"Unknown",r));return Tt({},n,i)}function cd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$r,Ls=on.current,pt(on,t),pt(wn,wn.current),!0}function W_(t,e,n){var i=t.stateNode;if(!i)throw Error(ge(169));n?(t=Ax(t,e,Ls),i.__reactInternalMemoizedMergedChildContext=t,yt(wn),yt(on),pt(on,t)):yt(wn),pt(wn,n)}var Wi=null,Yd=!1,ph=!1;function Cx(t){Wi===null?Wi=[t]:Wi.push(t)}function BA(t){Yd=!0,Cx(t)}function Yr(){if(!ph&&Wi!==null){ph=!0;var t=0,e=ct;try{var n=Wi;for(ct=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Wi=null,Yd=!1}catch(r){throw Wi!==null&&(Wi=Wi.slice(t+1)),ex(xg,Yr),r}finally{ct=e,ph=!1}}return null}var Lo=[],Io=0,ud=null,dd=0,Vn=[],Hn=0,Is=null,ji=1,Xi="";function cs(t,e){Lo[Io++]=dd,Lo[Io++]=ud,ud=t,dd=e}function Px(t,e,n){Vn[Hn++]=ji,Vn[Hn++]=Xi,Vn[Hn++]=Is,Is=t;var i=ji;t=Xi;var r=32-di(i)-1;i&=~(1<<r),n+=1;var s=32-di(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ji=1<<32-di(e)+r|n<<r|i,Xi=s+t}else ji=1<<s|n<<r|i,Xi=t}function Lg(t){t.return!==null&&(cs(t,1),Px(t,1,0))}function Ig(t){for(;t===ud;)ud=Lo[--Io],Lo[Io]=null,dd=Lo[--Io],Lo[Io]=null;for(;t===Is;)Is=Vn[--Hn],Vn[Hn]=null,Xi=Vn[--Hn],Vn[Hn]=null,ji=Vn[--Hn],Vn[Hn]=null}var On=null,Dn=null,St=!1,li=null;function Lx(t,e){var n=Wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,On=t,Dn=Dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,On=t,Dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Is!==null?{id:ji,overflow:Xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,On=t,Dn=null,!0):!1;default:return!1}}function tm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nm(t){if(St){var e=Dn;if(e){var n=e;if(!$_(t,e)){if(tm(t))throw Error(ge(418));e=Dr(n.nextSibling);var i=On;e&&$_(t,e)?Lx(i,n):(t.flags=t.flags&-4097|2,St=!1,On=t)}}else{if(tm(t))throw Error(ge(418));t.flags=t.flags&-4097|2,St=!1,On=t}}}function j_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;On=t}function Hc(t){if(t!==On)return!1;if(!St)return j_(t),St=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zp(t.type,t.memoizedProps)),e&&(e=Dn)){if(tm(t))throw Ix(),Error(ge(418));for(;e;)Lx(t,e),e=Dr(e.nextSibling)}if(j_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ge(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dn=Dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dn=null}}else Dn=On?Dr(t.stateNode.nextSibling):null;return!0}function Ix(){for(var t=Dn;t;)t=Dr(t.nextSibling)}function Qo(){Dn=On=null,St=!1}function Ng(t){li===null?li=[t]:li.push(t)}var zA=or.ReactCurrentBatchConfig;function oi(t,e){if(t&&t.defaultProps){e=Tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var fd=qr(null),hd=null,No=null,Dg=null;function Ug(){Dg=No=hd=null}function Og(t){var e=fd.current;yt(fd),t._currentValue=e}function im(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Go(t,e){hd=t,Dg=No=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(En=!0),t.firstContext=null)}function Yn(t){var e=t._currentValue;if(Dg!==t)if(t={context:t,memoizedValue:e,next:null},No===null){if(hd===null)throw Error(ge(308));No=t,hd.dependencies={lanes:0,firstContext:t}}else No=No.next=t;return e}var _s=null;function kg(t){_s===null?_s=[t]:_s.push(t)}function Nx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,kg(e)):(n.next=r.next,r.next=n),e.interleaved=n,ir(t,i)}function ir(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _r=!1;function Fg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ur(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ot&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ir(t,n)}return r=i.interleaved,r===null?(e.next=e,kg(i)):(e.next=r.next,r.next=e),i.interleaved=e,ir(t,n)}function Iu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,wg(t,n)}}function X_(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pd(t,e,n,i){var r=t.updateQueue;_r=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,v=a;switch(h=e,p=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){d=m.call(p,d,h);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,h=typeof m=="function"?m.call(p,d,h):m,h==null)break e;d=Tt({},d,h);break e;case 2:_r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ds|=o,t.lanes=o,t.memoizedState=d}}function q_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ge(191,r));r.call(i)}}}var Ux=new NE.Component().refs;function rm(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Kd={isMounted:function(t){return(t=t._reactInternals)?Ws(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=pn(),r=kr(t),s=Zi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ur(t,s,r),e!==null&&(fi(e,t,r,i),Iu(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=pn(),r=kr(t),s=Zi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ur(t,s,r),e!==null&&(fi(e,t,r,i),Iu(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pn(),i=kr(t),r=Zi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ur(t,r,i),e!==null&&(fi(e,t,i,n),Iu(e,t,i))}};function Y_(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ul(n,i)||!Ul(r,s):!0}function Ox(t,e,n){var i=!1,r=$r,s=e.contextType;return typeof s=="object"&&s!==null?s=Yn(s):(r=Mn(e)?Ls:on.current,i=e.contextTypes,s=(i=i!=null)?Jo(t,r):$r),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kd,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function K_(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Kd.enqueueReplaceState(e,e.state,null)}function sm(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Ux,Fg(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Yn(s):(s=Mn(e)?Ls:on.current,r.context=Jo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rm(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Kd.enqueueReplaceState(r,r.state,null),pd(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function za(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ge(309));var i=n.stateNode}if(!i)throw Error(ge(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Ux&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ge(284));if(!n._owner)throw Error(ge(290,t))}return t}function Gc(t,e){throw t=Object.prototype.toString.call(e),Error(ge(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Z_(t){var e=t._init;return e(t._payload)}function kx(t){function e(f,_){if(t){var y=f.deletions;y===null?(f.deletions=[_],f.flags|=16):y.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=Fr(f,_),f.index=0,f.sibling=null,f}function s(f,_,y){return f.index=y,t?(y=f.alternate,y!==null?(y=y.index,y<_?(f.flags|=2,_):y):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,y,S){return _===null||_.tag!==6?(_=Eh(y,f.mode,S),_.return=f,_):(_=r(_,y),_.return=f,_)}function l(f,_,y,S){var E=y.type;return E===To?u(f,_,y.props.children,S,y.key):_!==null&&(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===vr&&Z_(E)===_.type)?(S=r(_,y.props),S.ref=za(f,_,y),S.return=f,S):(S=Fu(y.type,y.key,y.props,null,f.mode,S),S.ref=za(f,_,y),S.return=f,S)}function c(f,_,y,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==y.containerInfo||_.stateNode.implementation!==y.implementation?(_=xh(y,f.mode,S),_.return=f,_):(_=r(_,y.children||[]),_.return=f,_)}function u(f,_,y,S,E){return _===null||_.tag!==7?(_=xs(y,f.mode,S,E),_.return=f,_):(_=r(_,y),_.return=f,_)}function d(f,_,y){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Eh(""+_,f.mode,y),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ic:return y=Fu(_.type,_.key,_.props,null,f.mode,y),y.ref=za(f,null,_),y.return=f,y;case Mo:return _=xh(_,f.mode,y),_.return=f,_;case vr:var S=_._init;return d(f,S(_._payload),y)}if(il(_)||Ua(_))return _=xs(_,f.mode,y,null),_.return=f,_;Gc(f,_)}return null}function h(f,_,y,S){var E=_!==null?_.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:a(f,_,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ic:return y.key===E?l(f,_,y,S):null;case Mo:return y.key===E?c(f,_,y,S):null;case vr:return E=y._init,h(f,_,E(y._payload),S)}if(il(y)||Ua(y))return E!==null?null:u(f,_,y,S,null);Gc(f,y)}return null}function p(f,_,y,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(y)||null,a(_,f,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ic:return f=f.get(S.key===null?y:S.key)||null,l(_,f,S,E);case Mo:return f=f.get(S.key===null?y:S.key)||null,c(_,f,S,E);case vr:var w=S._init;return p(f,_,y,w(S._payload),E)}if(il(S)||Ua(S))return f=f.get(y)||null,u(_,f,S,E,null);Gc(_,S)}return null}function m(f,_,y,S){for(var E=null,w=null,T=_,I=_=0,x=null;T!==null&&I<y.length;I++){T.index>I?(x=T,T=null):x=T.sibling;var b=h(f,T,y[I],S);if(b===null){T===null&&(T=x);break}t&&T&&b.alternate===null&&e(f,T),_=s(b,_,I),w===null?E=b:w.sibling=b,w=b,T=x}if(I===y.length)return n(f,T),St&&cs(f,I),E;if(T===null){for(;I<y.length;I++)T=d(f,y[I],S),T!==null&&(_=s(T,_,I),w===null?E=T:w.sibling=T,w=T);return St&&cs(f,I),E}for(T=i(f,T);I<y.length;I++)x=p(T,f,I,y[I],S),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?I:x.key),_=s(x,_,I),w===null?E=x:w.sibling=x,w=x);return t&&T.forEach(function(Q){return e(f,Q)}),St&&cs(f,I),E}function v(f,_,y,S){var E=Ua(y);if(typeof E!="function")throw Error(ge(150));if(y=E.call(y),y==null)throw Error(ge(151));for(var w=E=null,T=_,I=_=0,x=null,b=y.next();T!==null&&!b.done;I++,b=y.next()){T.index>I?(x=T,T=null):x=T.sibling;var Q=h(f,T,b.value,S);if(Q===null){T===null&&(T=x);break}t&&T&&Q.alternate===null&&e(f,T),_=s(Q,_,I),w===null?E=Q:w.sibling=Q,w=Q,T=x}if(b.done)return n(f,T),St&&cs(f,I),E;if(T===null){for(;!b.done;I++,b=y.next())b=d(f,b.value,S),b!==null&&(_=s(b,_,I),w===null?E=b:w.sibling=b,w=b);return St&&cs(f,I),E}for(T=i(f,T);!b.done;I++,b=y.next())b=p(T,f,I,b.value,S),b!==null&&(t&&b.alternate!==null&&T.delete(b.key===null?I:b.key),_=s(b,_,I),w===null?E=b:w.sibling=b,w=b);return t&&T.forEach(function(ue){return e(f,ue)}),St&&cs(f,I),E}function g(f,_,y,S){if(typeof y=="object"&&y!==null&&y.type===To&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ic:e:{for(var E=y.key,w=_;w!==null;){if(w.key===E){if(E=y.type,E===To){if(w.tag===7){n(f,w.sibling),_=r(w,y.props.children),_.return=f,f=_;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===vr&&Z_(E)===w.type){n(f,w.sibling),_=r(w,y.props),_.ref=za(f,w,y),_.return=f,f=_;break e}n(f,w);break}else e(f,w);w=w.sibling}y.type===To?(_=xs(y.props.children,f.mode,S,y.key),_.return=f,f=_):(S=Fu(y.type,y.key,y.props,null,f.mode,S),S.ref=za(f,_,y),S.return=f,f=S)}return o(f);case Mo:e:{for(w=y.key;_!==null;){if(_.key===w)if(_.tag===4&&_.stateNode.containerInfo===y.containerInfo&&_.stateNode.implementation===y.implementation){n(f,_.sibling),_=r(_,y.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=xh(y,f.mode,S),_.return=f,f=_}return o(f);case vr:return w=y._init,g(f,_,w(y._payload),S)}if(il(y))return m(f,_,y,S);if(Ua(y))return v(f,_,y,S);Gc(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,y),_.return=f,f=_):(n(f,_),_=Eh(y,f.mode,S),_.return=f,f=_),o(f)):n(f,_)}return g}var ea=kx(!0),Fx=kx(!1),lc={},Ri=qr(lc),Bl=qr(lc),zl=qr(lc);function ys(t){if(t===lc)throw Error(ge(174));return t}function Bg(t,e){switch(pt(zl,e),pt(Bl,t),pt(Ri,lc),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kp(e,t)}yt(Ri),pt(Ri,e)}function ta(){yt(Ri),yt(Bl),yt(zl)}function Bx(t){ys(zl.current);var e=ys(Ri.current),n=kp(e,t.type);e!==n&&(pt(Bl,t),pt(Ri,n))}function zg(t){Bl.current===t&&(yt(Ri),yt(Bl))}var xt=qr(0);function md(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mh=[];function Vg(){for(var t=0;t<mh.length;t++)mh[t]._workInProgressVersionPrimary=null;mh.length=0}var Nu=or.ReactCurrentDispatcher,gh=or.ReactCurrentBatchConfig,Ns=0,Mt=null,kt=null,$t=null,gd=!1,_l=!1,Vl=0,VA=0;function Qt(){throw Error(ge(321))}function Hg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gi(t[n],e[n]))return!1;return!0}function Gg(t,e,n,i,r,s){if(Ns=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Nu.current=t===null||t.memoizedState===null?$A:jA,t=n(i,r),_l){s=0;do{if(_l=!1,Vl=0,25<=s)throw Error(ge(301));s+=1,$t=kt=null,e.updateQueue=null,Nu.current=XA,t=n(i,r)}while(_l)}if(Nu.current=vd,e=kt!==null&&kt.next!==null,Ns=0,$t=kt=Mt=null,gd=!1,e)throw Error(ge(300));return t}function Wg(){var t=Vl!==0;return Vl=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?Mt.memoizedState=$t=t:$t=$t.next=t,$t}function Kn(){if(kt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var e=$t===null?Mt.memoizedState:$t.next;if(e!==null)$t=e,kt=t;else{if(t===null)throw Error(ge(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},$t===null?Mt.memoizedState=$t=t:$t=$t.next=t}return $t}function Hl(t,e){return typeof e=="function"?e(t):e}function vh(t){var e=Kn(),n=e.queue;if(n===null)throw Error(ge(311));n.lastRenderedReducer=t;var i=kt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Ns&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Mt.lanes|=u,Ds|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,gi(i,e.memoizedState)||(En=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,Ds|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _h(t){var e=Kn(),n=e.queue;if(n===null)throw Error(ge(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);gi(s,e.memoizedState)||(En=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function zx(){}function Vx(t,e){var n=Mt,i=Kn(),r=e(),s=!gi(i.memoizedState,r);if(s&&(i.memoizedState=r,En=!0),i=i.queue,$g(Wx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||$t!==null&&$t.memoizedState.tag&1){if(n.flags|=2048,Gl(9,Gx.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(ge(349));Ns&30||Hx(n,e,r)}return r}function Hx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gx(t,e,n,i){e.value=n,e.getSnapshot=i,$x(e)&&jx(t)}function Wx(t,e,n){return n(function(){$x(e)&&jx(t)})}function $x(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gi(t,n)}catch{return!0}}function jx(t){var e=ir(t,1);e!==null&&fi(e,t,1,-1)}function J_(t){var e=_i();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hl,lastRenderedState:t},e.queue=t,t=t.dispatch=WA.bind(null,Mt,t),[e.memoizedState,t]}function Gl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Xx(){return Kn().memoizedState}function Du(t,e,n,i){var r=_i();Mt.flags|=t,r.memoizedState=Gl(1|e,n,void 0,i===void 0?null:i)}function Zd(t,e,n,i){var r=Kn();i=i===void 0?null:i;var s=void 0;if(kt!==null){var o=kt.memoizedState;if(s=o.destroy,i!==null&&Hg(i,o.deps)){r.memoizedState=Gl(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=Gl(1|e,n,s,i)}function Q_(t,e){return Du(8390656,8,t,e)}function $g(t,e){return Zd(2048,8,t,e)}function qx(t,e){return Zd(4,2,t,e)}function Yx(t,e){return Zd(4,4,t,e)}function Kx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zx(t,e,n){return n=n!=null?n.concat([t]):null,Zd(4,4,Kx.bind(null,e,t),n)}function jg(){}function Jx(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Hg(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Qx(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Hg(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ew(t,e,n){return Ns&21?(gi(n,e)||(n=ix(),Mt.lanes|=n,Ds|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,En=!0),t.memoizedState=n)}function HA(t,e){var n=ct;ct=n!==0&&4>n?n:4,t(!0);var i=gh.transition;gh.transition={};try{t(!1),e()}finally{ct=n,gh.transition=i}}function tw(){return Kn().memoizedState}function GA(t,e,n){var i=kr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},nw(t))iw(e,n);else if(n=Nx(t,e,n,i),n!==null){var r=pn();fi(n,t,i,r),rw(n,e,i)}}function WA(t,e,n){var i=kr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(nw(t))iw(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,gi(a,o)){var l=e.interleaved;l===null?(r.next=r,kg(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Nx(t,e,r,i),n!==null&&(r=pn(),fi(n,t,i,r),rw(n,e,i))}}function nw(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function iw(t,e){_l=gd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rw(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,wg(t,n)}}var vd={readContext:Yn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},$A={readContext:Yn,useCallback:function(t,e){return _i().memoizedState=[t,e===void 0?null:e],t},useContext:Yn,useEffect:Q_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Du(4194308,4,Kx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Du(4194308,4,t,e)},useInsertionEffect:function(t,e){return Du(4,2,t,e)},useMemo:function(t,e){var n=_i();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=_i();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=GA.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=_i();return t={current:t},e.memoizedState=t},useState:J_,useDebugValue:jg,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=J_(!1),e=t[0];return t=HA.bind(null,t[1]),_i().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=_i();if(St){if(n===void 0)throw Error(ge(407));n=n()}else{if(n=e(),Xt===null)throw Error(ge(349));Ns&30||Hx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Q_(Wx.bind(null,i,s,t),[t]),i.flags|=2048,Gl(9,Gx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=_i(),e=Xt.identifierPrefix;if(St){var n=Xi,i=ji;n=(i&~(1<<32-di(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=VA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jA={readContext:Yn,useCallback:Jx,useContext:Yn,useEffect:$g,useImperativeHandle:Zx,useInsertionEffect:qx,useLayoutEffect:Yx,useMemo:Qx,useReducer:vh,useRef:Xx,useState:function(){return vh(Hl)},useDebugValue:jg,useDeferredValue:function(t){var e=Kn();return ew(e,kt.memoizedState,t)},useTransition:function(){var t=vh(Hl)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:zx,useSyncExternalStore:Vx,useId:tw,unstable_isNewReconciler:!1},XA={readContext:Yn,useCallback:Jx,useContext:Yn,useEffect:$g,useImperativeHandle:Zx,useInsertionEffect:qx,useLayoutEffect:Yx,useMemo:Qx,useReducer:_h,useRef:Xx,useState:function(){return _h(Hl)},useDebugValue:jg,useDeferredValue:function(t){var e=Kn();return kt===null?e.memoizedState=t:ew(e,kt.memoizedState,t)},useTransition:function(){var t=_h(Hl)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:zx,useSyncExternalStore:Vx,useId:tw,unstable_isNewReconciler:!1};function na(t,e){try{var n="",i=e;do n+=Eb(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function yh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function om(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qA=typeof WeakMap=="function"?WeakMap:Map;function sw(t,e,n){n=Zi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){yd||(yd=!0,gm=i),om(t,e)},n}function ow(t,e,n){n=Zi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){om(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){om(t,e),typeof i!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function e0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new qA;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=lC.bind(null,t,e,n),e.then(t,t))}function t0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function n0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zi(-1,1),e.tag=2,Ur(n,e,1))),n.lanes|=1),t)}var YA=or.ReactCurrentOwner,En=!1;function dn(t,e,n,i){e.child=t===null?Fx(e,null,n,i):ea(e,t.child,n,i)}function i0(t,e,n,i,r){n=n.render;var s=e.ref;return Go(e,r),i=Gg(t,e,n,i,s,r),n=Wg(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,rr(t,e,r)):(St&&n&&Lg(e),e.flags|=1,dn(t,e,i,r),e.child)}function r0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!ev(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,aw(t,e,s,i,r)):(t=Fu(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ul,n(o,i)&&t.ref===e.ref)return rr(t,e,r)}return e.flags|=1,t=Fr(s,i),t.ref=e.ref,t.return=e,e.child=t}function aw(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ul(s,i)&&t.ref===e.ref)if(En=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(En=!0);else return e.lanes=t.lanes,rr(t,e,r)}return am(t,e,n,i,r)}function lw(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(Uo,Ln),Ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pt(Uo,Ln),Ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,pt(Uo,Ln),Ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,pt(Uo,Ln),Ln|=i;return dn(t,e,r,n),e.child}function cw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function am(t,e,n,i,r){var s=Mn(n)?Ls:on.current;return s=Jo(e,s),Go(e,r),n=Gg(t,e,n,i,s,r),i=Wg(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,rr(t,e,r)):(St&&i&&Lg(e),e.flags|=1,dn(t,e,n,r),e.child)}function s0(t,e,n,i,r){if(Mn(n)){var s=!0;cd(e)}else s=!1;if(Go(e,r),e.stateNode===null)Uu(t,e),Ox(e,n,i),sm(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Yn(c):(c=Mn(n)?Ls:on.current,c=Jo(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&K_(e,o,i,c),_r=!1;var h=e.memoizedState;o.state=h,pd(e,i,o,r),l=e.memoizedState,a!==i||h!==l||wn.current||_r?(typeof u=="function"&&(rm(e,n,u,i),l=e.memoizedState),(a=_r||Y_(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Dx(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:oi(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yn(l):(l=Mn(n)?Ls:on.current,l=Jo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&K_(e,o,i,l),_r=!1,h=e.memoizedState,o.state=h,pd(e,i,o,r);var m=e.memoizedState;a!==d||h!==m||wn.current||_r?(typeof p=="function"&&(rm(e,n,p,i),m=e.memoizedState),(c=_r||Y_(e,n,c,i,h,m,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return lm(t,e,n,i,s,r)}function lm(t,e,n,i,r,s){cw(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&W_(e,n,!1),rr(t,e,s);i=e.stateNode,YA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ea(e,t.child,null,s),e.child=ea(e,null,a,s)):dn(t,e,a,s),e.memoizedState=i.state,r&&W_(e,n,!0),e.child}function uw(t){var e=t.stateNode;e.pendingContext?G_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&G_(t,e.context,!1),Bg(t,e.containerInfo)}function o0(t,e,n,i,r){return Qo(),Ng(r),e.flags|=256,dn(t,e,n,i),e.child}var cm={dehydrated:null,treeContext:null,retryLane:0};function um(t){return{baseLanes:t,cachePool:null,transitions:null}}function dw(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),pt(xt,r&1),t===null)return nm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ef(o,i,0,null),t=xs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=um(n),e.memoizedState=cm,t):Xg(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return KA(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Fr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Fr(a,s):(s=xs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?um(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=cm,i}return s=t.child,t=s.sibling,i=Fr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Xg(t,e){return e=ef({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wc(t,e,n,i){return i!==null&&Ng(i),ea(e,t.child,null,n),t=Xg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function KA(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=yh(Error(ge(422))),Wc(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ef({mode:"visible",children:i.children},r,0,null),s=xs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ea(e,t.child,null,o),e.child.memoizedState=um(o),e.memoizedState=cm,s);if(!(e.mode&1))return Wc(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ge(419)),i=yh(s,i,void 0),Wc(t,e,o,i)}if(a=(o&t.childLanes)!==0,En||a){if(i=Xt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ir(t,r),fi(i,t,r,-1))}return Qg(),i=yh(Error(ge(421))),Wc(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=cC.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Dn=Dr(r.nextSibling),On=e,St=!0,li=null,t!==null&&(Vn[Hn++]=ji,Vn[Hn++]=Xi,Vn[Hn++]=Is,ji=t.id,Xi=t.overflow,Is=e),e=Xg(e,i.children),e.flags|=4096,e)}function a0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),im(t.return,e,n)}function Sh(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function fw(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(dn(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&a0(t,n,e);else if(t.tag===19)a0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(pt(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&md(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Sh(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&md(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Sh(e,!0,n,null,s);break;case"together":Sh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Uu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ds|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ge(153));if(e.child!==null){for(t=e.child,n=Fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ZA(t,e,n){switch(e.tag){case 3:uw(e),Qo();break;case 5:Bx(e);break;case 1:Mn(e.type)&&cd(e);break;case 4:Bg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;pt(fd,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(pt(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?dw(t,e,n):(pt(xt,xt.current&1),t=rr(t,e,n),t!==null?t.sibling:null);pt(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return fw(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pt(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,lw(t,e,n)}return rr(t,e,n)}var hw,dm,pw,mw;hw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dm=function(){};pw=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ys(Ri.current);var s=null;switch(n){case"input":r=Np(t,r),i=Np(t,i),s=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),s=[];break;case"textarea":r=Op(t,r),i=Op(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ad)}Fp(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Al.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Al.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};mw=function(t,e,n,i){n!==i&&(e.flags|=4)};function Va(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function JA(t,e,n){var i=e.pendingProps;switch(Ig(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return Mn(e.type)&&ld(),en(e),null;case 3:return i=e.stateNode,ta(),yt(wn),yt(on),Vg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Hc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,li!==null&&(ym(li),li=null))),dm(t,e),en(e),null;case 5:zg(e);var r=ys(zl.current);if(n=e.type,t!==null&&e.stateNode!=null)pw(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ge(166));return en(e),null}if(t=ys(Ri.current),Hc(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[xi]=e,i[Fl]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<sl.length;r++)gt(sl[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":g_(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":__(i,s),gt("invalid",i)}Fp(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Vc(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Vc(i.textContent,a,t),r=["children",""+a]):Al.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&gt("scroll",i)}switch(n){case"input":Nc(i),v_(i,s,!0);break;case"textarea":Nc(i),y_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ad)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=HE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[xi]=e,t[Fl]=i,hw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Bp(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<sl.length;r++)gt(sl[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":g_(t,i),r=Np(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),gt("invalid",t);break;case"textarea":__(t,i),r=Op(t,i),gt("invalid",t);break;default:r=i}Fp(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?$E(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&GE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Cl(t,l):typeof l=="number"&&Cl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Al.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&vg(t,s,l,o))}switch(n){case"input":Nc(t),v_(t,i,!1);break;case"textarea":Nc(t),y_(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Wr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Bo(t,!!i.multiple,s,!1):i.defaultValue!=null&&Bo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ad)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)mw(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ge(166));if(n=ys(zl.current),ys(Ri.current),Hc(e)){if(i=e.stateNode,n=e.memoizedProps,i[xi]=e,(s=i.nodeValue!==n)&&(t=On,t!==null))switch(t.tag){case 3:Vc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Vc(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[xi]=e,e.stateNode=i}return en(e),null;case 13:if(yt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(St&&Dn!==null&&e.mode&1&&!(e.flags&128))Ix(),Qo(),e.flags|=98560,s=!1;else if(s=Hc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ge(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ge(317));s[xi]=e}else Qo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else li!==null&&(ym(li),li=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?Ft===0&&(Ft=3):Qg())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return ta(),dm(t,e),t===null&&Ol(e.stateNode.containerInfo),en(e),null;case 10:return Og(e.type._context),en(e),null;case 17:return Mn(e.type)&&ld(),en(e),null;case 19:if(yt(xt),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Va(s,!1);else{if(Ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=md(t),o!==null){for(e.flags|=128,Va(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pt(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&It()>ia&&(e.flags|=128,i=!0,Va(s,!1),e.lanes=4194304)}else{if(!i)if(t=md(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Va(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!St)return en(e),null}else 2*It()-s.renderingStartTime>ia&&n!==1073741824&&(e.flags|=128,i=!0,Va(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=It(),e.sibling=null,n=xt.current,pt(xt,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return Jg(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ln&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(ge(156,e.tag))}function QA(t,e){switch(Ig(e),e.tag){case 1:return Mn(e.type)&&ld(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ta(),yt(wn),yt(on),Vg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zg(e),null;case 13:if(yt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ge(340));Qo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(xt),null;case 4:return ta(),null;case 10:return Og(e.type._context),null;case 22:case 23:return Jg(),null;case 24:return null;default:return null}}var $c=!1,rn=!1,eC=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Do(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ct(t,e,i)}else n.current=null}function fm(t,e,n){try{n()}catch(i){Ct(t,e,i)}}var l0=!1;function tC(t,e){if(Yp=rd,t=yx(),Pg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kp={focusedElem:t,selectionRange:n},rd=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,g=m.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?v:oi(e.type,v),g);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ge(163))}}catch(S){Ct(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return m=l0,l0=!1,m}function yl(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&fm(e,n,s)}r=r.next}while(r!==i)}}function Jd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function hm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function gw(t){var e=t.alternate;e!==null&&(t.alternate=null,gw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xi],delete e[Fl],delete e[Qp],delete e[kA],delete e[FA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vw(t){return t.tag===5||t.tag===3||t.tag===4}function c0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pm(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ad));else if(i!==4&&(t=t.child,t!==null))for(pm(t,e,n),t=t.sibling;t!==null;)pm(t,e,n),t=t.sibling}function mm(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(mm(t,e,n),t=t.sibling;t!==null;)mm(t,e,n),t=t.sibling}var Yt=null,ai=!1;function cr(t,e,n){for(n=n.child;n!==null;)_w(t,e,n),n=n.sibling}function _w(t,e,n){if(Ti&&typeof Ti.onCommitFiberUnmount=="function")try{Ti.onCommitFiberUnmount(Wd,n)}catch{}switch(n.tag){case 5:rn||Do(n,e);case 6:var i=Yt,r=ai;Yt=null,cr(t,e,n),Yt=i,ai=r,Yt!==null&&(ai?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(ai?(t=Yt,n=n.stateNode,t.nodeType===8?hh(t.parentNode,n):t.nodeType===1&&hh(t,n),Nl(t)):hh(Yt,n.stateNode));break;case 4:i=Yt,r=ai,Yt=n.stateNode.containerInfo,ai=!0,cr(t,e,n),Yt=i,ai=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&fm(n,e,o),r=r.next}while(r!==i)}cr(t,e,n);break;case 1:if(!rn&&(Do(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ct(n,e,a)}cr(t,e,n);break;case 21:cr(t,e,n);break;case 22:n.mode&1?(rn=(i=rn)||n.memoizedState!==null,cr(t,e,n),rn=i):cr(t,e,n);break;default:cr(t,e,n)}}function u0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new eC),e.forEach(function(i){var r=uC.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ei(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Yt=a.stateNode,ai=!1;break e;case 3:Yt=a.stateNode.containerInfo,ai=!0;break e;case 4:Yt=a.stateNode.containerInfo,ai=!0;break e}a=a.return}if(Yt===null)throw Error(ge(160));_w(s,o,r),Yt=null,ai=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ct(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yw(e,t),e=e.sibling}function yw(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ei(e,t),vi(t),i&4){try{yl(3,t,t.return),Jd(3,t)}catch(v){Ct(t,t.return,v)}try{yl(5,t,t.return)}catch(v){Ct(t,t.return,v)}}break;case 1:ei(e,t),vi(t),i&512&&n!==null&&Do(n,n.return);break;case 5:if(ei(e,t),vi(t),i&512&&n!==null&&Do(n,n.return),t.flags&32){var r=t.stateNode;try{Cl(r,"")}catch(v){Ct(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&zE(r,s),Bp(a,o);var c=Bp(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?$E(r,d):u==="dangerouslySetInnerHTML"?GE(r,d):u==="children"?Cl(r,d):vg(r,u,d,c)}switch(a){case"input":Dp(r,s);break;case"textarea":VE(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Bo(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Bo(r,!!s.multiple,s.defaultValue,!0):Bo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Fl]=s}catch(v){Ct(t,t.return,v)}}break;case 6:if(ei(e,t),vi(t),i&4){if(t.stateNode===null)throw Error(ge(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){Ct(t,t.return,v)}}break;case 3:if(ei(e,t),vi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Nl(e.containerInfo)}catch(v){Ct(t,t.return,v)}break;case 4:ei(e,t),vi(t);break;case 13:ei(e,t),vi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Kg=It())),i&4&&u0(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(rn=(c=rn)||u,ei(e,t),rn=c):ei(e,t),vi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Me=t,u=t.child;u!==null;){for(d=Me=u;Me!==null;){switch(h=Me,p=h.child,h.tag){case 0:case 11:case 14:case 15:yl(4,h,h.return);break;case 1:Do(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(v){Ct(i,n,v)}}break;case 5:Do(h,h.return);break;case 22:if(h.memoizedState!==null){f0(d);continue}}p!==null?(p.return=h,Me=p):f0(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=WE("display",o))}catch(v){Ct(t,t.return,v)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){Ct(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ei(e,t),vi(t),i&4&&u0(t);break;case 21:break;default:ei(e,t),vi(t)}}function vi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vw(n)){var i=n;break e}n=n.return}throw Error(ge(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Cl(r,""),i.flags&=-33);var s=c0(t);mm(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=c0(t);pm(t,a,o);break;default:throw Error(ge(161))}}catch(l){Ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nC(t,e,n){Me=t,Sw(t)}function Sw(t,e,n){for(var i=(t.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||$c;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||rn;a=$c;var c=rn;if($c=o,(rn=l)&&!c)for(Me=r;Me!==null;)o=Me,l=o.child,o.tag===22&&o.memoizedState!==null?h0(r):l!==null?(l.return=o,Me=l):h0(r);for(;s!==null;)Me=s,Sw(s),s=s.sibling;Me=r,$c=a,rn=c}d0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Me=s):d0(t)}}function d0(t){for(;Me!==null;){var e=Me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||Jd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:oi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&q_(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}q_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Nl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ge(163))}rn||e.flags&512&&hm(e)}catch(h){Ct(e,e.return,h)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function f0(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function h0(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jd(4,e)}catch(l){Ct(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{hm(e)}catch(l){Ct(e,s,l)}break;case 5:var o=e.return;try{hm(e)}catch(l){Ct(e,o,l)}}}catch(l){Ct(e,e.return,l)}if(e===t){Me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Me=a;break}Me=e.return}}var iC=Math.ceil,_d=or.ReactCurrentDispatcher,qg=or.ReactCurrentOwner,jn=or.ReactCurrentBatchConfig,ot=0,Xt=null,Ot=null,Zt=0,Ln=0,Uo=qr(0),Ft=0,Wl=null,Ds=0,Qd=0,Yg=0,Sl=null,Sn=null,Kg=0,ia=1/0,Hi=null,yd=!1,gm=null,Or=null,jc=!1,Rr=null,Sd=0,El=0,vm=null,Ou=-1,ku=0;function pn(){return ot&6?It():Ou!==-1?Ou:Ou=It()}function kr(t){return t.mode&1?ot&2&&Zt!==0?Zt&-Zt:zA.transition!==null?(ku===0&&(ku=ix()),ku):(t=ct,t!==0||(t=window.event,t=t===void 0?16:ux(t.type)),t):1}function fi(t,e,n,i){if(50<El)throw El=0,vm=null,Error(ge(185));sc(t,n,i),(!(ot&2)||t!==Xt)&&(t===Xt&&(!(ot&2)&&(Qd|=n),Ft===4&&Er(t,Zt)),Tn(t,i),n===1&&ot===0&&!(e.mode&1)&&(ia=It()+500,Yd&&Yr()))}function Tn(t,e){var n=t.callbackNode;zb(t,e);var i=id(t,t===Xt?Zt:0);if(i===0)n!==null&&x_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&x_(n),e===1)t.tag===0?BA(p0.bind(null,t)):Cx(p0.bind(null,t)),UA(function(){!(ot&6)&&Yr()}),n=null;else{switch(rx(i)){case 1:n=xg;break;case 4:n=tx;break;case 16:n=nd;break;case 536870912:n=nx;break;default:n=nd}n=Aw(n,Ew.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ew(t,e){if(Ou=-1,ku=0,ot&6)throw Error(ge(327));var n=t.callbackNode;if(Wo()&&t.callbackNode!==n)return null;var i=id(t,t===Xt?Zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ed(t,i);else{e=i;var r=ot;ot|=2;var s=ww();(Xt!==t||Zt!==e)&&(Hi=null,ia=It()+500,Es(t,e));do try{oC();break}catch(a){xw(t,a)}while(1);Ug(),_d.current=s,ot=r,Ot!==null?e=0:(Xt=null,Zt=0,e=Ft)}if(e!==0){if(e===2&&(r=Wp(t),r!==0&&(i=r,e=_m(t,r))),e===1)throw n=Wl,Es(t,0),Er(t,i),Tn(t,It()),n;if(e===6)Er(t,i);else{if(r=t.current.alternate,!(i&30)&&!rC(r)&&(e=Ed(t,i),e===2&&(s=Wp(t),s!==0&&(i=s,e=_m(t,s))),e===1))throw n=Wl,Es(t,0),Er(t,i),Tn(t,It()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ge(345));case 2:us(t,Sn,Hi);break;case 3:if(Er(t,i),(i&130023424)===i&&(e=Kg+500-It(),10<e)){if(id(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){pn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Jp(us.bind(null,t,Sn,Hi),e);break}us(t,Sn,Hi);break;case 4:if(Er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-di(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=It()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*iC(i/1960))-i,10<i){t.timeoutHandle=Jp(us.bind(null,t,Sn,Hi),i);break}us(t,Sn,Hi);break;case 5:us(t,Sn,Hi);break;default:throw Error(ge(329))}}}return Tn(t,It()),t.callbackNode===n?Ew.bind(null,t):null}function _m(t,e){var n=Sl;return t.current.memoizedState.isDehydrated&&(Es(t,e).flags|=256),t=Ed(t,e),t!==2&&(e=Sn,Sn=n,e!==null&&ym(e)),t}function ym(t){Sn===null?Sn=t:Sn.push.apply(Sn,t)}function rC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!gi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Er(t,e){for(e&=~Yg,e&=~Qd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-di(e),i=1<<n;t[n]=-1,e&=~i}}function p0(t){if(ot&6)throw Error(ge(327));Wo();var e=id(t,0);if(!(e&1))return Tn(t,It()),null;var n=Ed(t,e);if(t.tag!==0&&n===2){var i=Wp(t);i!==0&&(e=i,n=_m(t,i))}if(n===1)throw n=Wl,Es(t,0),Er(t,e),Tn(t,It()),n;if(n===6)throw Error(ge(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,us(t,Sn,Hi),Tn(t,It()),null}function Zg(t,e){var n=ot;ot|=1;try{return t(e)}finally{ot=n,ot===0&&(ia=It()+500,Yd&&Yr())}}function Us(t){Rr!==null&&Rr.tag===0&&!(ot&6)&&Wo();var e=ot;ot|=1;var n=jn.transition,i=ct;try{if(jn.transition=null,ct=1,t)return t()}finally{ct=i,jn.transition=n,ot=e,!(ot&6)&&Yr()}}function Jg(){Ln=Uo.current,yt(Uo)}function Es(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,DA(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch(Ig(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ld();break;case 3:ta(),yt(wn),yt(on),Vg();break;case 5:zg(i);break;case 4:ta();break;case 13:yt(xt);break;case 19:yt(xt);break;case 10:Og(i.type._context);break;case 22:case 23:Jg()}n=n.return}if(Xt=t,Ot=t=Fr(t.current,null),Zt=Ln=e,Ft=0,Wl=null,Yg=Qd=Ds=0,Sn=Sl=null,_s!==null){for(e=0;e<_s.length;e++)if(n=_s[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}_s=null}return t}function xw(t,e){do{var n=Ot;try{if(Ug(),Nu.current=vd,gd){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gd=!1}if(Ns=0,$t=kt=Mt=null,_l=!1,Vl=0,qg.current=null,n===null||n.return===null){Ft=1,Wl=e,Ot=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=t0(o);if(p!==null){p.flags&=-257,n0(p,o,a,s,e),p.mode&1&&e0(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var v=new Set;v.add(l),e.updateQueue=v}else m.add(l);break e}else{if(!(e&1)){e0(s,c,e),Qg();break e}l=Error(ge(426))}}else if(St&&a.mode&1){var g=t0(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),n0(g,o,a,s,e),Ng(na(l,a));break e}}s=l=na(l,a),Ft!==4&&(Ft=2),Sl===null?Sl=[s]:Sl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=sw(s,l,e);X_(s,f);break e;case 1:a=l;var _=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Or===null||!Or.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=ow(s,a,e);X_(s,S);break e}}s=s.return}while(s!==null)}Tw(n)}catch(E){e=E,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(1)}function ww(){var t=_d.current;return _d.current=vd,t===null?vd:t}function Qg(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Xt===null||!(Ds&268435455)&&!(Qd&268435455)||Er(Xt,Zt)}function Ed(t,e){var n=ot;ot|=2;var i=ww();(Xt!==t||Zt!==e)&&(Hi=null,Es(t,e));do try{sC();break}catch(r){xw(t,r)}while(1);if(Ug(),ot=n,_d.current=i,Ot!==null)throw Error(ge(261));return Xt=null,Zt=0,Ft}function sC(){for(;Ot!==null;)Mw(Ot)}function oC(){for(;Ot!==null&&!Lb();)Mw(Ot)}function Mw(t){var e=bw(t.alternate,t,Ln);t.memoizedProps=t.pendingProps,e===null?Tw(t):Ot=e,qg.current=null}function Tw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=QA(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ft=6,Ot=null;return}}else if(n=JA(n,e,Ln),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);Ft===0&&(Ft=5)}function us(t,e,n){var i=ct,r=jn.transition;try{jn.transition=null,ct=1,aC(t,e,n,i)}finally{jn.transition=r,ct=i}return null}function aC(t,e,n,i){do Wo();while(Rr!==null);if(ot&6)throw Error(ge(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ge(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Vb(t,s),t===Xt&&(Ot=Xt=null,Zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jc||(jc=!0,Aw(nd,function(){return Wo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jn.transition,jn.transition=null;var o=ct;ct=1;var a=ot;ot|=4,qg.current=null,tC(t,n),yw(n,t),bA(Kp),rd=!!Yp,Kp=Yp=null,t.current=n,nC(n),Ib(),ot=a,ct=o,jn.transition=s}else t.current=n;if(jc&&(jc=!1,Rr=t,Sd=r),s=t.pendingLanes,s===0&&(Or=null),Ub(n.stateNode),Tn(t,It()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(yd)throw yd=!1,t=gm,gm=null,t;return Sd&1&&t.tag!==0&&Wo(),s=t.pendingLanes,s&1?t===vm?El++:(El=0,vm=t):El=0,Yr(),null}function Wo(){if(Rr!==null){var t=rx(Sd),e=jn.transition,n=ct;try{if(jn.transition=null,ct=16>t?16:t,Rr===null)var i=!1;else{if(t=Rr,Rr=null,Sd=0,ot&6)throw Error(ge(331));var r=ot;for(ot|=4,Me=t.current;Me!==null;){var s=Me,o=s.child;if(Me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Me=c;Me!==null;){var u=Me;switch(u.tag){case 0:case 11:case 15:yl(8,u,s)}var d=u.child;if(d!==null)d.return=u,Me=d;else for(;Me!==null;){u=Me;var h=u.sibling,p=u.return;if(gw(u),u===c){Me=null;break}if(h!==null){h.return=p,Me=h;break}Me=p}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var g=v.sibling;v.sibling=null,v=g}while(v!==null)}}Me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Me=o;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:yl(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Me=f;break e}Me=s.return}}var _=t.current;for(Me=_;Me!==null;){o=Me;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Me=y;else e:for(o=_;Me!==null;){if(a=Me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Jd(9,a)}}catch(E){Ct(a,a.return,E)}if(a===o){Me=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Me=S;break e}Me=a.return}}if(ot=r,Yr(),Ti&&typeof Ti.onPostCommitFiberRoot=="function")try{Ti.onPostCommitFiberRoot(Wd,t)}catch{}i=!0}return i}finally{ct=n,jn.transition=e}}return!1}function m0(t,e,n){e=na(n,e),e=sw(t,e,1),t=Ur(t,e,1),e=pn(),t!==null&&(sc(t,1,e),Tn(t,e))}function Ct(t,e,n){if(t.tag===3)m0(t,t,n);else for(;e!==null;){if(e.tag===3){m0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Or===null||!Or.has(i))){t=na(n,t),t=ow(e,t,1),e=Ur(e,t,1),t=pn(),e!==null&&(sc(e,1,t),Tn(e,t));break}}e=e.return}}function lC(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=pn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&(Zt&n)===n&&(Ft===4||Ft===3&&(Zt&130023424)===Zt&&500>It()-Kg?Es(t,0):Yg|=n),Tn(t,e)}function Rw(t,e){e===0&&(t.mode&1?(e=Oc,Oc<<=1,!(Oc&130023424)&&(Oc=4194304)):e=1);var n=pn();t=ir(t,e),t!==null&&(sc(t,e,n),Tn(t,n))}function cC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Rw(t,n)}function uC(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ge(314))}i!==null&&i.delete(e),Rw(t,n)}var bw;bw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wn.current)En=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return En=!1,ZA(t,e,n);En=!!(t.flags&131072)}else En=!1,St&&e.flags&1048576&&Px(e,dd,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Uu(t,e),t=e.pendingProps;var r=Jo(e,on.current);Go(e,n),r=Gg(null,e,i,t,r,n);var s=Wg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mn(i)?(s=!0,cd(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Fg(e),r.updater=Kd,e.stateNode=r,r._reactInternals=e,sm(e,i,t,n),e=lm(null,e,i,!0,s,n)):(e.tag=0,St&&s&&Lg(e),dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Uu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=fC(i),t=oi(i,t),r){case 0:e=am(null,e,i,t,n);break e;case 1:e=s0(null,e,i,t,n);break e;case 11:e=i0(null,e,i,t,n);break e;case 14:e=r0(null,e,i,oi(i.type,t),n);break e}throw Error(ge(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),am(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),s0(t,e,i,r,n);case 3:e:{if(uw(e),t===null)throw Error(ge(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Dx(t,e),pd(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=na(Error(ge(423)),e),e=o0(t,e,i,n,r);break e}else if(i!==r){r=na(Error(ge(424)),e),e=o0(t,e,i,n,r);break e}else for(Dn=Dr(e.stateNode.containerInfo.firstChild),On=e,St=!0,li=null,n=Fx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qo(),i===r){e=rr(t,e,n);break e}dn(t,e,i,n)}e=e.child}return e;case 5:return Bx(e),t===null&&nm(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Zp(i,r)?o=null:s!==null&&Zp(i,s)&&(e.flags|=32),cw(t,e),dn(t,e,o,n),e.child;case 6:return t===null&&nm(e),null;case 13:return dw(t,e,n);case 4:return Bg(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ea(e,null,i,n):dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),i0(t,e,i,r,n);case 7:return dn(t,e,e.pendingProps,n),e.child;case 8:return dn(t,e,e.pendingProps.children,n),e.child;case 12:return dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,pt(fd,i._currentValue),i._currentValue=o,s!==null)if(gi(s.value,o)){if(s.children===r.children&&!wn.current){e=rr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Zi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),im(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ge(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),im(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Go(e,n),r=Yn(r),i=i(r),e.flags|=1,dn(t,e,i,n),e.child;case 14:return i=e.type,r=oi(i,e.pendingProps),r=oi(i.type,r),r0(t,e,i,r,n);case 15:return aw(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Uu(t,e),e.tag=1,Mn(i)?(t=!0,cd(e)):t=!1,Go(e,n),Ox(e,i,r),sm(e,i,r,n),lm(null,e,i,!0,t,n);case 19:return fw(t,e,n);case 22:return lw(t,e,n)}throw Error(ge(156,e.tag))};function Aw(t,e){return ex(t,e)}function dC(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,e,n,i){return new dC(t,e,n,i)}function ev(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fC(t){if(typeof t=="function")return ev(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yg)return 11;if(t===Sg)return 14}return 2}function Fr(t,e){var n=t.alternate;return n===null?(n=Wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fu(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")ev(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case To:return xs(n.children,r,s,e);case _g:o=8,r|=8;break;case Cp:return t=Wn(12,n,e,r|2),t.elementType=Cp,t.lanes=s,t;case Pp:return t=Wn(13,n,e,r),t.elementType=Pp,t.lanes=s,t;case Lp:return t=Wn(19,n,e,r),t.elementType=Lp,t.lanes=s,t;case kE:return ef(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case UE:o=10;break e;case OE:o=9;break e;case yg:o=11;break e;case Sg:o=14;break e;case vr:o=16,i=null;break e}throw Error(ge(130,t==null?t:typeof t,""))}return e=Wn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function xs(t,e,n,i){return t=Wn(7,t,i,e),t.lanes=n,t}function ef(t,e,n,i){return t=Wn(22,t,i,e),t.elementType=kE,t.lanes=n,t.stateNode={isHidden:!1},t}function Eh(t,e,n){return t=Wn(6,t,null,e),t.lanes=n,t}function xh(t,e,n){return e=Wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hC(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nh(0),this.expirationTimes=nh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nh(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function tv(t,e,n,i,r,s,o,a,l){return t=new hC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fg(s),t}function pC(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Cw(t){if(!t)return $r;t=t._reactInternals;e:{if(Ws(t)!==t||t.tag!==1)throw Error(ge(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ge(171))}if(t.tag===1){var n=t.type;if(Mn(n))return Ax(t,n,e)}return e}function Pw(t,e,n,i,r,s,o,a,l){return t=tv(n,i,!0,t,r,s,o,a,l),t.context=Cw(null),n=t.current,i=pn(),r=kr(n),s=Zi(i,r),s.callback=e??null,Ur(n,s,r),t.current.lanes=r,sc(t,r,i),Tn(t,i),t}function tf(t,e,n,i){var r=e.current,s=pn(),o=kr(r);return n=Cw(n),e.context===null?e.context=n:e.pendingContext=n,e=Zi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ur(r,e,o),t!==null&&(fi(t,r,o,s),Iu(t,r,o)),o}function xd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function g0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nv(t,e){g0(t,e),(t=t.alternate)&&g0(t,e)}function mC(){return null}var Lw=typeof reportError=="function"?reportError:function(t){console.error(t)};function iv(t){this._internalRoot=t}nf.prototype.render=iv.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ge(409));tf(t,e,null,null)};nf.prototype.unmount=iv.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Us(function(){tf(null,t,null,null)}),e[nr]=null}};function nf(t){this._internalRoot=t}nf.prototype.unstable_scheduleHydration=function(t){if(t){var e=ax();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Sr.length&&e!==0&&e<Sr[n].priority;n++);Sr.splice(n,0,t),n===0&&cx(t)}};function rv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function v0(){}function gC(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=xd(o);s.call(c)}}var o=Pw(e,i,t,0,null,!1,!1,"",v0);return t._reactRootContainer=o,t[nr]=o.current,Ol(t.nodeType===8?t.parentNode:t),Us(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=xd(l);a.call(c)}}var l=tv(t,0,!1,null,null,!1,!1,"",v0);return t._reactRootContainer=l,t[nr]=l.current,Ol(t.nodeType===8?t.parentNode:t),Us(function(){tf(e,l,n,i)}),l}function sf(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=xd(o);a.call(l)}}tf(e,o,t,r)}else o=gC(n,e,t,r,i);return xd(o)}sx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=rl(e.pendingLanes);n!==0&&(wg(e,n|1),Tn(e,It()),!(ot&6)&&(ia=It()+500,Yr()))}break;case 13:Us(function(){var i=ir(t,1);if(i!==null){var r=pn();fi(i,t,1,r)}}),nv(t,1)}};Mg=function(t){if(t.tag===13){var e=ir(t,134217728);if(e!==null){var n=pn();fi(e,t,134217728,n)}nv(t,134217728)}};ox=function(t){if(t.tag===13){var e=kr(t),n=ir(t,e);if(n!==null){var i=pn();fi(n,t,e,i)}nv(t,e)}};ax=function(){return ct};lx=function(t,e){var n=ct;try{return ct=t,e()}finally{ct=n}};Vp=function(t,e,n){switch(e){case"input":if(Dp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=qd(i);if(!r)throw Error(ge(90));BE(i),Dp(i,r)}}}break;case"textarea":VE(t,n);break;case"select":e=n.value,e!=null&&Bo(t,!!n.multiple,e,!1)}};qE=Zg;YE=Us;var vC={usingClientEntryPoint:!1,Events:[ac,Co,qd,jE,XE,Zg]},Ha={findFiberByHostInstance:vs,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_C={bundleType:Ha.bundleType,version:Ha.version,rendererPackageName:Ha.rendererPackageName,rendererConfig:Ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:or.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=JE(t),t===null?null:t.stateNode},findFiberByHostInstance:Ha.findFiberByHostInstance||mC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xc.isDisabled&&Xc.supportsFiber)try{Wd=Xc.inject(_C),Ti=Xc}catch{}}Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vC;Fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rv(e))throw Error(ge(200));return pC(t,e,null,n)};Fn.createRoot=function(t,e){if(!rv(t))throw Error(ge(299));var n=!1,i="",r=Lw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=tv(t,1,!1,null,null,n,!1,i,r),t[nr]=e.current,Ol(t.nodeType===8?t.parentNode:t),new iv(e)};Fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ge(188)):(t=Object.keys(t).join(","),Error(ge(268,t)));return t=JE(e),t=t===null?null:t.stateNode,t};Fn.flushSync=function(t){return Us(t)};Fn.hydrate=function(t,e,n){if(!rf(e))throw Error(ge(200));return sf(null,t,e,!0,n)};Fn.hydrateRoot=function(t,e,n){if(!rv(t))throw Error(ge(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Lw;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Pw(e,null,t,1,n??null,r,!1,s,o),t[nr]=e.current,Ol(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new nf(e)};Fn.render=function(t,e,n){if(!rf(e))throw Error(ge(200));return sf(null,t,e,!1,n)};Fn.unmountComponentAtNode=function(t){if(!rf(t))throw Error(ge(40));return t._reactRootContainer?(Us(function(){sf(null,null,t,!1,function(){t._reactRootContainer=null,t[nr]=null})}),!0):!1};Fn.unstable_batchedUpdates=Zg;Fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!rf(n))throw Error(ge(200));if(t==null||t._reactInternals===void 0)throw Error(ge(38));return sf(t,e,n,!1,i)};Fn.version="18.2.0-next-9e3b772b8-20220608";function Iw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Iw)}catch(t){console.error(t)}}Iw(),PE.exports=Fn;var Nw=PE.exports;const sv=yE(Nw);var Dw,_0=Nw;Dw=_0.createRoot,_0.hydrateRoot;/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $l(){return $l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},$l.apply(this,arguments)}var br;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(br||(br={}));const y0="popstate";function yC(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Sm("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Uw(r)}return EC(e,n,null,t)}function Bt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ov(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function SC(){return Math.random().toString(36).substr(2,8)}function S0(t,e){return{usr:t.state,key:t.key,idx:e}}function Sm(t,e,n,i){return n===void 0&&(n=null),$l({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?wa(e):e,{state:n,key:e&&e.key||i||SC()})}function Uw(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function wa(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function EC(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=br.Pop,l=null,c=u();c==null&&(c=0,o.replaceState($l({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=br.Pop;let g=u(),f=g==null?null:g-c;c=g,l&&l({action:a,location:v.location,delta:f})}function h(g,f){a=br.Push;let _=Sm(v.location,g,f);n&&n(_,g),c=u()+1;let y=S0(_,c),S=v.createHref(_);try{o.pushState(y,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;r.location.assign(S)}s&&l&&l({action:a,location:v.location,delta:1})}function p(g,f){a=br.Replace;let _=Sm(v.location,g,f);n&&n(_,g),c=u();let y=S0(_,c),S=v.createHref(_);o.replaceState(y,"",S),s&&l&&l({action:a,location:v.location,delta:0})}function m(g){let f=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof g=="string"?g:Uw(g);return Bt(f,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,f)}let v={get action(){return a},get location(){return t(r,o)},listen(g){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(y0,d),l=g,()=>{r.removeEventListener(y0,d),l=null}},createHref(g){return e(r,g)},createURL:m,encodeLocation(g){let f=m(g);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:p,go(g){return o.go(g)}};return v}var E0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(E0||(E0={}));function xC(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?wa(e):e,r=Fw(i.pathname||"/",n);if(r==null)return null;let s=Ow(t);wC(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=IC(s[a],UC(r));return o}function Ow(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Bt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=ws([i,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(Bt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ow(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:PC(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of kw(s.path))r(s,o,l)}),e}function kw(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=kw(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function wC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:LC(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const MC=/^:\w+$/,TC=3,RC=2,bC=1,AC=10,CC=-2,x0=t=>t==="*";function PC(t,e){let n=t.split("/"),i=n.length;return n.some(x0)&&(i+=CC),e&&(i+=RC),n.filter(r=>!x0(r)).reduce((r,s)=>r+(MC.test(s)?TC:s===""?bC:AC),i)}function LC(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function IC(t,e){let{routesMeta:n}=t,i={},r="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=r==="/"?e:e.slice(r.length)||"/",u=NC({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!u)return null;Object.assign(i,u.params);let d=a.route;s.push({params:i,pathname:ws([r,u.pathname]),pathnameBase:VC(ws([r,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(r=ws([r,u.pathnameBase]))}return s}function NC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=DC(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,u,d)=>{if(u==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return c[u]=OC(a[d]||"",u),c},{}),pathname:s,pathnameBase:o,pattern:t}}function DC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ov(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(i.push(a),"/([^\\/]+)"));return t.endsWith("*")?(i.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function UC(t){try{return decodeURI(t)}catch(e){return ov(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function OC(t,e){try{return decodeURIComponent(t)}catch(n){return ov(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Fw(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function kC(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?wa(t):t;return{pathname:n?n.startsWith("/")?n:FC(n,e):e,search:HC(i),hash:GC(r)}}function FC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function wh(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function BC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function zC(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=wa(t):(r=$l({},t),Bt(!r.pathname||!r.pathname.includes("?"),wh("?","pathname","search",r)),Bt(!r.pathname||!r.pathname.includes("#"),wh("#","pathname","hash",r)),Bt(!r.search||!r.search.includes("#"),wh("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(i||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=kC(r,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const ws=t=>t.join("/").replace(/\/\/+/g,"/"),VC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),HC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,GC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function WC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Bw=["post","put","patch","delete"];new Set(Bw);const $C=["get",...Bw];new Set($C);/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wd(){return wd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},wd.apply(this,arguments)}const av=me.createContext(null),jC=me.createContext(null),of=me.createContext(null),af=me.createContext(null),Ma=me.createContext({outlet:null,matches:[],isDataRoute:!1}),zw=me.createContext(null);function lf(){return me.useContext(af)!=null}function Vw(){return lf()||Bt(!1),me.useContext(af).location}function Hw(t){me.useContext(of).static||me.useLayoutEffect(t)}function lv(){let{isDataRoute:t}=me.useContext(Ma);return t?s2():XC()}function XC(){lf()||Bt(!1);let t=me.useContext(av),{basename:e,navigator:n}=me.useContext(of),{matches:i}=me.useContext(Ma),{pathname:r}=Vw(),s=JSON.stringify(BC(i).map(l=>l.pathnameBase)),o=me.useRef(!1);return Hw(()=>{o.current=!0}),me.useCallback(function(l,c){if(c===void 0&&(c={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let u=zC(l,JSON.parse(s),r,c.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:ws([e,u.pathname])),(c.replace?n.replace:n.push)(u,c.state,c)},[e,n,s,r,t])}function qC(t,e){return YC(t,e)}function YC(t,e,n){lf()||Bt(!1);let{navigator:i}=me.useContext(of),{matches:r}=me.useContext(Ma),s=r[r.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Vw(),c;if(e){var u;let v=typeof e=="string"?wa(e):e;a==="/"||(u=v.pathname)!=null&&u.startsWith(a)||Bt(!1),c=v}else c=l;let d=c.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",p=xC(t,{pathname:h}),m=e2(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:ws([a,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:ws([a,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),r,n);return e&&m?me.createElement(af.Provider,{value:{location:wd({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:br.Pop}},m):m}function KC(){let t=r2(),e=WC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return me.createElement(me.Fragment,null,me.createElement("h2",null,"Unexpected Application Error!"),me.createElement("h3",{style:{fontStyle:"italic"}},e),n?me.createElement("pre",{style:r},n):null,s)}const ZC=me.createElement(KC,null);class JC extends me.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?me.createElement(Ma.Provider,{value:this.props.routeContext},me.createElement(zw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function QC(t){let{routeContext:e,match:n,children:i}=t,r=me.useContext(av);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),me.createElement(Ma.Provider,{value:e},i)}function e2(t,e,n){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var r;if((r=n)!=null&&r.errors)t=n.matches;else return null}let s=t,o=(i=n)==null?void 0:i.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Bt(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,c)=>{let u=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||ZC);let h=e.concat(s.slice(0,c+1)),p=()=>{let m;return u?m=d:l.route.Component?m=me.createElement(l.route.Component,null):l.route.element?m=l.route.element:m=a,me.createElement(QC,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:m})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?me.createElement(JC,{location:n.location,revalidation:n.revalidation,component:d,error:u,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var Em;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Em||(Em={}));var jl;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(jl||(jl={}));function t2(t){let e=me.useContext(av);return e||Bt(!1),e}function n2(t){let e=me.useContext(jC);return e||Bt(!1),e}function i2(t){let e=me.useContext(Ma);return e||Bt(!1),e}function Gw(t){let e=i2(),n=e.matches[e.matches.length-1];return n.route.id||Bt(!1),n.route.id}function r2(){var t;let e=me.useContext(zw),n=n2(jl.UseRouteError),i=Gw(jl.UseRouteError);return e||((t=n.errors)==null?void 0:t[i])}function s2(){let{router:t}=t2(Em.UseNavigateStable),e=Gw(jl.UseNavigateStable),n=me.useRef(!1);return Hw(()=>{n.current=!0}),me.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,wd({fromRouteId:e},s)))},[t,e])}function ol(t){Bt(!1)}function o2(t){let{basename:e="/",children:n=null,location:i,navigationType:r=br.Pop,navigator:s,static:o=!1}=t;lf()&&Bt(!1);let a=e.replace(/^\/*/,"/"),l=me.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof i=="string"&&(i=wa(i));let{pathname:c="/",search:u="",hash:d="",state:h=null,key:p="default"}=i,m=me.useMemo(()=>{let v=Fw(c,a);return v==null?null:{location:{pathname:v,search:u,hash:d,state:h,key:p},navigationType:r}},[a,c,u,d,h,p,r]);return m==null?null:me.createElement(of.Provider,{value:l},me.createElement(af.Provider,{children:n,value:m}))}function a2(t){let{children:e,location:n}=t;return qC(xm(e),n)}var w0;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(w0||(w0={}));new Promise(()=>{});function xm(t,e){e===void 0&&(e=[]);let n=[];return me.Children.forEach(t,(i,r)=>{if(!me.isValidElement(i))return;let s=[...e,r];if(i.type===me.Fragment){n.push.apply(n,xm(i.props.children,s));return}i.type!==ol&&Bt(!1),!i.props.index||!i.props.children||Bt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=xm(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const l2="startTransition",M0=cb[l2];function c2(t){let{basename:e,children:n,future:i,window:r}=t,s=me.useRef();s.current==null&&(s.current=yC({window:r,v5Compat:!0}));let o=s.current,[a,l]=me.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},u=me.useCallback(d=>{c&&M0?M0(()=>l(d)):l(d)},[l,c]);return me.useLayoutEffect(()=>o.listen(u),[o,u]),me.createElement(o2,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}var T0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(T0||(T0={}));var R0;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(R0||(R0={}));function u2(t){const e=new Error(t);if(e.stack===void 0)try{throw e}catch{}return e}var d2=u2,Ye=d2;function f2(t){return!!t&&typeof t.then=="function"}var _t=f2;function h2(t,e){if(t!=null)return t;throw Ye(e??"Got unexpected null or undefined")}var Et=h2;function We(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class cf{getValue(){throw Ye("BaseLoadable")}toPromise(){throw Ye("BaseLoadable")}valueMaybe(){throw Ye("BaseLoadable")}valueOrThrow(){throw Ye(`Loadable expected value, but in "${this.state}" state`)}promiseMaybe(){throw Ye("BaseLoadable")}promiseOrThrow(){throw Ye(`Loadable expected promise, but in "${this.state}" state`)}errorMaybe(){throw Ye("BaseLoadable")}errorOrThrow(){throw Ye(`Loadable expected error, but in "${this.state}" state`)}is(e){return e.state===this.state&&e.contents===this.contents}map(e){throw Ye("BaseLoadable")}}class p2 extends cf{constructor(e){super(),We(this,"state","hasValue"),We(this,"contents",void 0),this.contents=e}getValue(){return this.contents}toPromise(){return Promise.resolve(this.contents)}valueMaybe(){return this.contents}valueOrThrow(){return this.contents}promiseMaybe(){}errorMaybe(){}map(e){try{const n=e(this.contents);return _t(n)?Os(n):ra(n)?n:cc(n)}catch(n){return _t(n)?Os(n.next(()=>this.map(e))):uf(n)}}}class m2 extends cf{constructor(e){super(),We(this,"state","hasError"),We(this,"contents",void 0),this.contents=e}getValue(){throw this.contents}toPromise(){return Promise.reject(this.contents)}valueMaybe(){}promiseMaybe(){}errorMaybe(){return this.contents}errorOrThrow(){return this.contents}map(e){return this}}class Ww extends cf{constructor(e){super(),We(this,"state","loading"),We(this,"contents",void 0),this.contents=e}getValue(){throw this.contents}toPromise(){return this.contents}valueMaybe(){}promiseMaybe(){return this.contents}promiseOrThrow(){return this.contents}errorMaybe(){}map(e){return Os(this.contents.then(n=>{const i=e(n);if(ra(i)){const r=i;switch(r.state){case"hasValue":return r.contents;case"hasError":throw r.contents;case"loading":return r.contents}}return i}).catch(n=>{if(_t(n))return n.then(()=>this.map(e).contents);throw n}))}}function cc(t){return Object.freeze(new p2(t))}function uf(t){return Object.freeze(new m2(t))}function Os(t){return Object.freeze(new Ww(t))}function $w(){return Object.freeze(new Ww(new Promise(()=>{})))}function g2(t){return t.every(e=>e.state==="hasValue")?cc(t.map(e=>e.contents)):t.some(e=>e.state==="hasError")?uf(Et(t.find(e=>e.state==="hasError"),"Invalid loadable passed to loadableAll").contents):Os(Promise.all(t.map(e=>e.contents)))}function jw(t){const n=(Array.isArray(t)?t:Object.getOwnPropertyNames(t).map(r=>t[r])).map(r=>ra(r)?r:_t(r)?Os(r):cc(r)),i=g2(n);return Array.isArray(t)?i:i.map(r=>Object.getOwnPropertyNames(t).reduce((s,o,a)=>({...s,[o]:r[a]}),{}))}function ra(t){return t instanceof cf}const v2={of:t=>_t(t)?Os(t):ra(t)?t:cc(t),error:t=>uf(t),loading:()=>$w(),all:jw,isLoadable:ra};var $s={loadableWithValue:cc,loadableWithError:uf,loadableWithPromise:Os,loadableLoading:$w,loadableAll:jw,isLoadable:ra,RecoilLoadable:v2},_2=$s.loadableWithValue,y2=$s.loadableWithError,S2=$s.loadableWithPromise,E2=$s.loadableLoading,x2=$s.loadableAll,w2=$s.isLoadable,M2=$s.RecoilLoadable,uc=Object.freeze({__proto__:null,loadableWithValue:_2,loadableWithError:y2,loadableWithPromise:S2,loadableLoading:E2,loadableAll:x2,isLoadable:w2,RecoilLoadable:M2});const wm={RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED:!0,RECOIL_GKS_ENABLED:new Set(["recoil_hamt_2020","recoil_sync_external_store","recoil_suppress_rerender_in_callback","recoil_memory_managament_2020"])};function T2(t,e){var n,i;const r=(n=process.env[t])===null||n===void 0||(i=n.toLowerCase())===null||i===void 0?void 0:i.trim();if(r==null||r==="")return;if(!["true","false"].includes(r))throw Ye(`({}).${t} value must be 'true', 'false', or empty: ${r}`);e(r==="true")}function R2(t,e){var n;const i=(n=process.env[t])===null||n===void 0?void 0:n.trim();i==null||i===""||e(i.split(/\s*,\s*|\s+/))}function b2(){var t;typeof process>"u"||((t=process)===null||t===void 0?void 0:t.env)!=null&&(T2("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED",e=>{wm.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=e}),R2("RECOIL_GKS_ENABLED",e=>{e.forEach(n=>{wm.RECOIL_GKS_ENABLED.add(n)})}))}b2();var Ta=wm;function df(t){return Ta.RECOIL_GKS_ENABLED.has(t)}df.setPass=t=>{Ta.RECOIL_GKS_ENABLED.add(t)};df.setFail=t=>{Ta.RECOIL_GKS_ENABLED.delete(t)};df.clear=()=>{Ta.RECOIL_GKS_ENABLED.clear()};var dt=df;function A2(t,e,{error:n}={}){return null}var C2=A2,cv=C2,Mh,Th,Rh;const P2=(Mh=lt.createMutableSource)!==null&&Mh!==void 0?Mh:lt.unstable_createMutableSource,Xw=(Th=lt.useMutableSource)!==null&&Th!==void 0?Th:lt.unstable_useMutableSource,qw=(Rh=lt.useSyncExternalStore)!==null&&Rh!==void 0?Rh:lt.unstable_useSyncExternalStore;function L2(){var t;const{ReactCurrentDispatcher:e,ReactCurrentOwner:n}=lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;return((t=e==null?void 0:e.current)!==null&&t!==void 0?t:n.currentDispatcher).useSyncExternalStore!=null}function I2(){return dt("recoil_transition_support")?{mode:"TRANSITION_SUPPORT",early:!0,concurrent:!0}:dt("recoil_sync_external_store")&&qw!=null?{mode:"SYNC_EXTERNAL_STORE",early:!0,concurrent:!1}:dt("recoil_mutable_source")&&Xw!=null&&typeof window<"u"&&!window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE?dt("recoil_suppress_rerender_in_callback")?{mode:"MUTABLE_SOURCE",early:!0,concurrent:!0}:{mode:"MUTABLE_SOURCE",early:!1,concurrent:!1}:dt("recoil_suppress_rerender_in_callback")?{mode:"LEGACY",early:!0,concurrent:!1}:{mode:"LEGACY",early:!1,concurrent:!1}}function N2(){return!1}var dc={createMutableSource:P2,useMutableSource:Xw,useSyncExternalStore:qw,currentRendererSupportsUseSyncExternalStore:L2,reactMode:I2,isFastRefreshEnabled:N2};class uv{constructor(e){We(this,"key",void 0),this.key=e}toJSON(){return{key:this.key}}}class Yw extends uv{}class Kw extends uv{}function D2(t){return t instanceof Yw||t instanceof Kw}var ff={AbstractRecoilValue:uv,RecoilState:Yw,RecoilValueReadOnly:Kw,isRecoilValue:D2},U2=ff.AbstractRecoilValue,O2=ff.RecoilState,k2=ff.RecoilValueReadOnly,F2=ff.isRecoilValue,sa=Object.freeze({__proto__:null,AbstractRecoilValue:U2,RecoilState:O2,RecoilValueReadOnly:k2,isRecoilValue:F2});function B2(t,e){return function*(){let n=0;for(const i of t)yield e(i,n++)}()}var hf=B2;class Zw{}const z2=new Zw,ks=new Map,dv=new Map;function V2(t){return hf(t,e=>Et(dv.get(e)))}function H2(t){if(ks.has(t)){const e=`Duplicate atom key "${t}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;console.warn(e)}}function G2(t){Ta.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED&&H2(t.key),ks.set(t.key,t);const e=t.set==null?new sa.RecoilValueReadOnly(t.key):new sa.RecoilState(t.key);return dv.set(t.key,e),e}class Jw extends Error{}function W2(t){const e=ks.get(t);if(e==null)throw new Jw(`Missing definition for RecoilValue: "${t}""`);return e}function $2(t){return ks.get(t)}const Md=new Map;function j2(t){var e;if(!dt("recoil_memory_managament_2020"))return;const n=ks.get(t);if(n!=null&&(e=n.shouldDeleteConfigOnRelease)!==null&&e!==void 0&&e.call(n)){var i;ks.delete(t),(i=Qw(t))===null||i===void 0||i(),Md.delete(t)}}function X2(t,e){dt("recoil_memory_managament_2020")&&(e===void 0?Md.delete(t):Md.set(t,e))}function Qw(t){return Md.get(t)}var bn={nodes:ks,recoilValues:dv,registerNode:G2,getNode:W2,getNodeMaybe:$2,deleteNodeConfigIfPossible:j2,setConfigDeletionHandler:X2,getConfigDeletionHandler:Qw,recoilValuesForKeys:V2,NodeMissingError:Jw,DefaultValue:Zw,DEFAULT_VALUE:z2};function q2(t,e){e()}var Y2={enqueueExecution:q2};function K2(t,e){return e={exports:{}},t(e,e.exports),e.exports}var Z2=K2(function(t){var e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},n={},i=5,r=Math.pow(2,i),s=r-1,o=r/2,a=r/4,l={},c=function(L){return function(){return L}},u=n.hash=function(D){var L=typeof D>"u"?"undefined":e(D);if(L==="number")return D;L!=="string"&&(D+="");for(var Z=0,de=0,C=D.length;de<C;++de){var ee=D.charCodeAt(de);Z=(Z<<5)-Z+ee|0}return Z},d=function(L){return L-=L>>1&1431655765,L=(L&858993459)+(L>>2&858993459),L=L+(L>>4)&252645135,L+=L>>8,L+=L>>16,L&127},h=function(L,Z){return Z>>>L&s},p=function(L){return 1<<L},m=function(L,Z){return d(L&Z-1)},v=function(L,Z,de,C){var ee=C;if(!L){var B=C.length;ee=new Array(B);for(var ie=0;ie<B;++ie)ee[ie]=C[ie]}return ee[Z]=de,ee},g=function(L,Z,de){var C=de.length-1,ee=0,B=0,ie=de;if(L)ee=B=Z;else for(ie=new Array(C);ee<Z;)ie[B++]=de[ee++];for(++ee;ee<=C;)ie[B++]=de[ee++];return L&&(ie.length=C),ie},f=function(L,Z,de,C){var ee=C.length;if(L){for(var B=ee;B>=Z;)C[B--]=C[B];return C[Z]=de,C}for(var ie=0,se=0,xe=new Array(ee+1);ie<Z;)xe[se++]=C[ie++];for(xe[Z]=de;ie<ee;)xe[++se]=C[ie++];return xe},_=1,y=2,S=3,E=4,w={__hamt_isEmpty:!0},T=function(L){return L===w||L&&L.__hamt_isEmpty},I=function(L,Z,de,C){return{type:_,edit:L,hash:Z,key:de,value:C,_modify:F}},x=function(L,Z,de){return{type:y,edit:L,hash:Z,children:de,_modify:j}},b=function(L,Z,de){return{type:S,edit:L,mask:Z,children:de,_modify:H}},Q=function(L,Z,de){return{type:E,edit:L,size:Z,children:de,_modify:ae}},ue=function(L){return L===w||L.type===_||L.type===y},k=function(L,Z,de,C,ee){for(var B=[],ie=C,se=0,xe=0;ie;++xe)ie&1&&(B[xe]=ee[se++]),ie>>>=1;return B[Z]=de,Q(L,se+1,B)},W=function(L,Z,de,C){for(var ee=new Array(Z-1),B=0,ie=0,se=0,xe=C.length;se<xe;++se)if(se!==de){var Ue=C[se];Ue&&!T(Ue)&&(ee[B++]=Ue,ie|=1<<se)}return b(L,ie,ee)},J=function D(L,Z,de,C,ee,B){if(de===ee)return x(L,de,[B,C]);var ie=h(Z,de),se=h(Z,ee);return b(L,p(ie)|p(se),ie===se?[D(L,Z+i,de,C,ee,B)]:ie<se?[C,B]:[B,C])},ce=function(L,Z,de,C,ee,B,ie,se){for(var xe=ee.length,Ue=0;Ue<xe;++Ue){var nt=ee[Ue];if(de(ie,nt.key)){var ft=nt.value,it=B(ft);return it===ft?ee:it===l?(--se.value,g(L,Ue,ee)):v(L,Ue,I(Z,C,ie,it),ee)}}var bt=B();return bt===l?ee:(++se.value,v(L,xe,I(Z,C,ie,bt),ee))},K=function(L,Z){return L===Z.edit},F=function(L,Z,de,C,ee,B,ie){if(Z(B,this.key)){var se=C(this.value);return se===this.value?this:se===l?(--ie.value,w):K(L,this)?(this.value=se,this):I(L,ee,B,se)}var xe=C();return xe===l?this:(++ie.value,J(L,de,this.hash,this,ee,I(L,ee,B,xe)))},j=function(L,Z,de,C,ee,B,ie){if(ee===this.hash){var se=K(L,this),xe=ce(se,L,Z,this.hash,this.children,C,B,ie);return xe===this.children?this:xe.length>1?x(L,this.hash,xe):xe[0]}var Ue=C();return Ue===l?this:(++ie.value,J(L,de,this.hash,this,ee,I(L,ee,B,Ue)))},H=function(L,Z,de,C,ee,B,ie){var se=this.mask,xe=this.children,Ue=h(de,ee),nt=p(Ue),ft=m(se,nt),it=se&nt,bt=it?xe[ft]:w,At=bt._modify(L,Z,de+i,C,ee,B,ie);if(bt===At)return this;var ts=K(L,this),lr=se,ns=void 0;if(it&&T(At)){if(lr&=~nt,!lr)return w;if(xe.length<=2&&ue(xe[ft^1]))return xe[ft^1];ns=g(ts,ft,xe)}else if(!it&&!T(At)){if(xe.length>=o)return k(L,Ue,At,se,xe);lr|=nt,ns=f(ts,ft,At,xe)}else ns=v(ts,ft,At,xe);return ts?(this.mask=lr,this.children=ns,this):b(L,lr,ns)},ae=function(L,Z,de,C,ee,B,ie){var se=this.size,xe=this.children,Ue=h(de,ee),nt=xe[Ue],ft=(nt||w)._modify(L,Z,de+i,C,ee,B,ie);if(nt===ft)return this;var it=K(L,this),bt=void 0;if(T(nt)&&!T(ft))++se,bt=v(it,Ue,ft,xe);else if(!T(nt)&&T(ft)){if(--se,se<=a)return W(L,se,Ue,xe);bt=v(it,Ue,w,xe)}else bt=v(it,Ue,ft,xe);return it?(this.size=se,this.children=bt,this):Q(L,se,bt)};w._modify=function(D,L,Z,de,C,ee,B){var ie=de();return ie===l?w:(++B.value,I(D,C,ee,ie))};function M(D,L,Z,de,C){this._editable=D,this._edit=L,this._config=Z,this._root=de,this._size=C}M.prototype.setTree=function(D,L){return this._editable?(this._root=D,this._size=L,this):D===this._root?this:new M(this._editable,this._edit,this._config,D,L)};var U=n.tryGetHash=function(D,L,Z,de){for(var C=de._root,ee=0,B=de._config.keyEq;;)switch(C.type){case _:return B(Z,C.key)?C.value:D;case y:{if(L===C.hash)for(var ie=C.children,se=0,xe=ie.length;se<xe;++se){var Ue=ie[se];if(B(Z,Ue.key))return Ue.value}return D}case S:{var nt=h(ee,L),ft=p(nt);if(C.mask&ft){C=C.children[m(C.mask,ft)],ee+=i;break}return D}case E:{if(C=C.children[h(ee,L)],C){ee+=i;break}return D}default:return D}};M.prototype.tryGetHash=function(D,L,Z){return U(D,L,Z,this)};var O=n.tryGet=function(D,L,Z){return U(D,Z._config.hash(L),L,Z)};M.prototype.tryGet=function(D,L){return O(D,L,this)};var q=n.getHash=function(D,L,Z){return U(void 0,D,L,Z)};M.prototype.getHash=function(D,L){return q(D,L,this)},n.get=function(D,L){return U(void 0,L._config.hash(D),D,L)},M.prototype.get=function(D,L){return O(L,D,this)};var $=n.has=function(D,L,Z){return U(l,D,L,Z)!==l};M.prototype.hasHash=function(D,L){return $(D,L,this)};var pe=n.has=function(D,L){return $(L._config.hash(D),D,L)};M.prototype.has=function(D){return pe(D,this)};var Se=function(L,Z){return L===Z};n.make=function(D){return new M(0,0,{keyEq:D&&D.keyEq||Se,hash:D&&D.hash||u},w,0)},n.empty=n.make();var fe=n.isEmpty=function(D){return D&&!!T(D._root)};M.prototype.isEmpty=function(){return fe(this)};var Pe=n.modifyHash=function(D,L,Z,de){var C={value:de._size},ee=de._root._modify(de._editable?de._edit:NaN,de._config.keyEq,0,D,L,Z,C);return de.setTree(ee,C.value)};M.prototype.modifyHash=function(D,L,Z){return Pe(Z,D,L,this)};var Ie=n.modify=function(D,L,Z){return Pe(D,Z._config.hash(L),L,Z)};M.prototype.modify=function(D,L){return Ie(L,D,this)};var z=n.setHash=function(D,L,Z,de){return Pe(c(Z),D,L,de)};M.prototype.setHash=function(D,L,Z){return z(D,L,Z,this)};var Be=n.set=function(D,L,Z){return z(Z._config.hash(D),D,L,Z)};M.prototype.set=function(D,L){return Be(D,L,this)};var Re=c(l),Ne=n.removeHash=function(D,L,Z){return Pe(Re,D,L,Z)};M.prototype.removeHash=M.prototype.deleteHash=function(D,L){return Ne(D,L,this)};var we=n.remove=function(D,L){return Ne(L._config.hash(D),D,L)};M.prototype.remove=M.prototype.delete=function(D){return we(D,this)};var ze=n.beginMutation=function(D){return new M(D._editable+1,D._edit+1,D._config,D._root,D._size)};M.prototype.beginMutation=function(){return ze(this)};var He=n.endMutation=function(D){return D._editable=D._editable&&D._editable-1,D};M.prototype.endMutation=function(){return He(this)};var ke=n.mutate=function(D,L){var Z=ze(L);return D(Z),He(Z)};M.prototype.mutate=function(D){return ke(D,this)};var tt=function(L){return L&&Rt(L[0],L[1],L[2],L[3],L[4])},Rt=function(L,Z,de,C,ee){for(;de<L;){var B=Z[de++];if(B&&!T(B))return Pt(B,C,[L,Z,de,C,ee])}return tt(ee)},Pt=function(L,Z,de){switch(L.type){case _:return{value:Z(L),rest:de};case y:case E:case S:var C=L.children;return Rt(C.length,C,0,Z,de);default:return tt(de)}},P={done:!0};function R(D){this.v=D}R.prototype.next=function(){if(!this.v)return P;var D=this.v;return this.v=tt(D.rest),D},R.prototype[Symbol.iterator]=function(){return this};var ne=function(L,Z){return new R(Pt(L._root,Z))},ye=function(L){return[L.key,L.value]},_e=n.entries=function(D){return ne(D,ye)};M.prototype.entries=M.prototype[Symbol.iterator]=function(){return _e(this)};var N=function(L){return L.key},he=n.keys=function(D){return ne(D,N)};M.prototype.keys=function(){return he(this)};var ve=function(L){return L.value},te=n.values=M.prototype.values=function(D){return ne(D,ve)};M.prototype.values=function(){return te(this)};var Te=n.fold=function(D,L,Z){var de=Z._root;if(de.type===_)return D(L,de.value,de.key);for(var C=[de.children],ee=void 0;ee=C.pop();)for(var B=0,ie=ee.length;B<ie;){var se=ee[B++];se&&se.type&&(se.type===_?L=D(L,se.value,se.key):C.push(se.children))}return L};M.prototype.fold=function(D,L){return Te(D,L,this)};var Le=n.forEach=function(D,L){return Te(function(Z,de,C){return D(de,C,L)},null,L)};M.prototype.forEach=function(D){return Le(D,this)};var Ae=n.count=function(D){return D._size};M.prototype.count=function(){return Ae(this)},Object.defineProperty(M.prototype,"size",{get:M.prototype.count}),t.exports?t.exports=n:(void 0).hamt=n});class J2{constructor(e){We(this,"_map",void 0),this._map=new Map(e==null?void 0:e.entries())}keys(){return this._map.keys()}entries(){return this._map.entries()}get(e){return this._map.get(e)}has(e){return this._map.has(e)}set(e,n){return this._map.set(e,n),this}delete(e){return this._map.delete(e),this}clone(){return hv(this)}toMap(){return new Map(this._map)}}class fv{constructor(e){if(We(this,"_hamt",Z2.empty.beginMutation()),e instanceof fv){const n=e._hamt.endMutation();e._hamt=n.beginMutation(),this._hamt=n.beginMutation()}else if(e)for(const[n,i]of e.entries())this._hamt.set(n,i)}keys(){return this._hamt.keys()}entries(){return this._hamt.entries()}get(e){return this._hamt.get(e)}has(e){return this._hamt.has(e)}set(e,n){return this._hamt.set(e,n),this}delete(e){return this._hamt.delete(e),this}clone(){return hv(this)}toMap(){return new Map(this._hamt)}}function hv(t){return dt("recoil_hamt_2020")?new fv(t):new J2(t)}var Q2={persistentMap:hv},eP=Q2.persistentMap,tP=Object.freeze({__proto__:null,persistentMap:eP});function nP(t,...e){const n=new Set;e:for(const i of t){for(const r of e)if(r.has(i))continue e;n.add(i)}return n}var xl=nP;function iP(t,e){const n=new Map;return t.forEach((i,r)=>{n.set(r,e(i,r))}),n}var Td=iP;function rP(){return{nodeDeps:new Map,nodeToNodeSubscriptions:new Map}}function sP(t){return{nodeDeps:Td(t.nodeDeps,e=>new Set(e)),nodeToNodeSubscriptions:Td(t.nodeToNodeSubscriptions,e=>new Set(e))}}function bh(t,e,n,i){const{nodeDeps:r,nodeToNodeSubscriptions:s}=n,o=r.get(t);if(o&&i&&o!==i.nodeDeps.get(t))return;r.set(t,e);const a=o==null?e:xl(e,o);for(const l of a)s.has(l)||s.set(l,new Set),Et(s.get(l)).add(t);if(o){const l=xl(o,e);for(const c of l){if(!s.has(c))return;const u=Et(s.get(c));u.delete(t),u.size===0&&s.delete(c)}}}function oP(t,e,n,i){var r,s,o,a;const l=n.getState();i===l.currentTree.version||i===((r=l.nextTree)===null||r===void 0?void 0:r.version)||((s=l.previousTree)===null||s===void 0||s.version);const c=n.getGraph(i);if(bh(t,e,c),i===((o=l.previousTree)===null||o===void 0?void 0:o.version)){const d=n.getGraph(l.currentTree.version);bh(t,e,d,c)}if(i===((a=l.previousTree)===null||a===void 0?void 0:a.version)||i===l.currentTree.version){var u;const d=(u=l.nextTree)===null||u===void 0?void 0:u.version;if(d!==void 0){const h=n.getGraph(d);bh(t,e,h,c)}}}var fc={cloneGraph:sP,graph:rP,saveDepsToStore:oP};let aP=0;const lP=()=>aP++;let cP=0;const uP=()=>cP++;let dP=0;const fP=()=>dP++;var pf={getNextTreeStateVersion:lP,getNextStoreID:uP,getNextComponentID:fP};const{persistentMap:b0}=tP,{graph:hP}=fc,{getNextTreeStateVersion:eM}=pf;function tM(){const t=eM();return{version:t,stateID:t,transactionMetadata:{},dirtyAtoms:new Set,atomValues:b0(),nonvalidatedAtoms:b0()}}function pP(){const t=tM();return{currentTree:t,nextTree:null,previousTree:null,commitDepth:0,knownAtoms:new Set,knownSelectors:new Set,transactionSubscriptions:new Map,nodeTransactionSubscriptions:new Map,nodeToComponentSubscriptions:new Map,queuedComponentCallbacks_DEPRECATED:[],suspendedComponentResolvers:new Set,graphsByVersion:new Map().set(t.version,hP()),retention:{referenceCounts:new Map,nodesRetainedByZone:new Map,retainablesToCheckForRelease:new Set},nodeCleanupFunctions:new Map}}var nM={makeEmptyTreeState:tM,makeEmptyStoreState:pP,getNextTreeStateVersion:eM};class iM{}function mP(){return new iM}var mf={RetentionZone:iM,retentionZone:mP};function gP(t,e){const n=new Set(t);return n.add(e),n}function vP(t,e){const n=new Set(t);return n.delete(e),n}function _P(t,e,n){const i=new Map(t);return i.set(e,n),i}function yP(t,e,n){const i=new Map(t);return i.set(e,n(i.get(e))),i}function SP(t,e){const n=new Map(t);return n.delete(e),n}function EP(t,e){const n=new Map(t);return e.forEach(i=>n.delete(i)),n}var rM={setByAddingToSet:gP,setByDeletingFromSet:vP,mapBySettingInMap:_P,mapByUpdatingInMap:yP,mapByDeletingFromMap:SP,mapByDeletingMultipleFromMap:EP};function*xP(t,e){let n=0;for(const i of t)e(i,n++)&&(yield i)}var pv=xP;function wP(t,e){return new Proxy(t,{get:(i,r)=>(!(r in i)&&r in e&&(i[r]=e[r]()),i[r]),ownKeys:i=>Object.keys(i)})}var sM=wP;const{getNode:hc,getNodeMaybe:MP,recoilValuesForKeys:A0}=bn,{RetentionZone:C0}=mf,{setByAddingToSet:TP}=rM,RP=Object.freeze(new Set);class bP extends Error{}function AP(t,e,n){if(!dt("recoil_memory_managament_2020"))return()=>{};const{nodesRetainedByZone:i}=t.getState().retention;function r(s){let o=i.get(s);o||i.set(s,o=new Set),o.add(e)}if(n instanceof C0)r(n);else if(Array.isArray(n))for(const s of n)r(s);return()=>{if(!dt("recoil_memory_managament_2020"))return;const{retention:s}=t.getState();function o(a){const l=s.nodesRetainedByZone.get(a);l==null||l.delete(e),l&&l.size===0&&s.nodesRetainedByZone.delete(a)}if(n instanceof C0)o(n);else if(Array.isArray(n))for(const a of n)o(a)}}function mv(t,e,n,i){const r=t.getState();if(r.nodeCleanupFunctions.has(n))return;const s=hc(n),o=AP(t,n,s.retainedBy),a=s.init(t,e,i);r.nodeCleanupFunctions.set(n,()=>{a(),o()})}function CP(t,e,n){mv(t,t.getState().currentTree,e,n)}function PP(t,e){var n;const i=t.getState();(n=i.nodeCleanupFunctions.get(e))===null||n===void 0||n(),i.nodeCleanupFunctions.delete(e)}function LP(t,e,n){return mv(t,e,n,"get"),hc(n).get(t,e)}function oM(t,e,n){return hc(n).peek(t,e)}function IP(t,e,n){var i;const r=MP(e);return r==null||(i=r.invalidate)===null||i===void 0||i.call(r,t),{...t,atomValues:t.atomValues.clone().delete(e),nonvalidatedAtoms:t.nonvalidatedAtoms.clone().set(e,n),dirtyAtoms:TP(t.dirtyAtoms,e)}}function NP(t,e,n,i){const r=hc(n);if(r.set==null)throw new bP(`Attempt to set read-only RecoilValue: ${n}`);const s=r.set;return mv(t,e,n,"set"),s(t,e,i)}function DP(t,e,n){const i=t.getState(),r=t.getGraph(e.version),s=hc(n).nodeType;return sM({type:s},{loadable:()=>oM(t,e,n),isActive:()=>i.knownAtoms.has(n)||i.knownSelectors.has(n),isSet:()=>s==="selector"?!1:e.atomValues.has(n),isModified:()=>e.dirtyAtoms.has(n),deps:()=>{var o;return A0((o=r.nodeDeps.get(n))!==null&&o!==void 0?o:[])},subscribers:()=>{var o,a;return{nodes:A0(pv(aM(t,e,new Set([n])),l=>l!==n)),components:hf((o=(a=i.nodeToComponentSubscriptions.get(n))===null||a===void 0?void 0:a.values())!==null&&o!==void 0?o:[],([l])=>({name:l}))}}})}function aM(t,e,n){const i=new Set,r=Array.from(n),s=t.getGraph(e.version);for(let a=r.pop();a;a=r.pop()){var o;i.add(a);const l=(o=s.nodeToNodeSubscriptions.get(a))!==null&&o!==void 0?o:RP;for(const c of l)i.has(c)||r.push(c)}return i}var Kr={getNodeLoadable:LP,peekNodeLoadable:oM,setNodeValue:NP,initializeNode:CP,cleanUpNode:PP,setUnvalidatedAtomValue_DEPRECATED:IP,peekNodeInfo:DP,getDownstreamNodes:aM};let lM=null;function UP(t){lM=t}function OP(){var t;(t=lM)===null||t===void 0||t()}var cM={setInvalidateMemoizedSnapshot:UP,invalidateMemoizedSnapshot:OP};const{getDownstreamNodes:kP,getNodeLoadable:uM,setNodeValue:FP}=Kr,{getNextComponentID:BP}=pf,{getNode:zP,getNodeMaybe:dM}=bn,{DefaultValue:gv}=bn,{reactMode:VP}=dc,{AbstractRecoilValue:HP,RecoilState:GP,RecoilValueReadOnly:WP,isRecoilValue:$P}=sa,{invalidateMemoizedSnapshot:jP}=cM;function XP(t,{key:e},n=t.getState().currentTree){var i,r;const s=t.getState();n.version===s.currentTree.version||n.version===((i=s.nextTree)===null||i===void 0?void 0:i.version)||(n.version,(r=s.previousTree)===null||r===void 0||r.version);const o=uM(t,n,e);return o.state==="loading"&&o.contents.catch(()=>{}),o}function qP(t,e){const n=t.clone();return e.forEach((i,r)=>{i.state==="hasValue"&&i.contents instanceof gv?n.delete(r):n.set(r,i)}),n}function YP(t,e,{key:n},i){if(typeof i=="function"){const r=uM(t,e,n);if(r.state==="loading"){const s=`Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;throw Ye(s)}else if(r.state==="hasError")throw r.contents;return i(r.contents)}else return i}function KP(t,e,n){if(n.type==="set"){const{recoilValue:r,valueOrUpdater:s}=n,o=YP(t,e,r,s),a=FP(t,e,r.key,o);for(const[l,c]of a.entries())Mm(e,l,c)}else if(n.type==="setLoadable"){const{recoilValue:{key:r},loadable:s}=n;Mm(e,r,s)}else if(n.type==="markModified"){const{recoilValue:{key:r}}=n;e.dirtyAtoms.add(r)}else if(n.type==="setUnvalidated"){var i;const{recoilValue:{key:r},unvalidatedValue:s}=n,o=dM(r);o==null||(i=o.invalidate)===null||i===void 0||i.call(o,e),e.atomValues.delete(r),e.nonvalidatedAtoms.set(r,s),e.dirtyAtoms.add(r)}else cv(`Unknown action ${n.type}`)}function Mm(t,e,n){n.state==="hasValue"&&n.contents instanceof gv?t.atomValues.delete(e):t.atomValues.set(e,n),t.dirtyAtoms.add(e),t.nonvalidatedAtoms.delete(e)}function fM(t,e){t.replaceState(n=>{const i=hM(n);for(const r of e)KP(t,i,r);return pM(t,i),jP(),i})}function gf(t,e){if(wl.length){const n=wl[wl.length-1];let i=n.get(t);i||n.set(t,i=[]),i.push(e)}else fM(t,[e])}const wl=[];function ZP(){const t=new Map;return wl.push(t),()=>{for(const[e,n]of t)fM(e,n);wl.pop()}}function hM(t){return{...t,atomValues:t.atomValues.clone(),nonvalidatedAtoms:t.nonvalidatedAtoms.clone(),dirtyAtoms:new Set(t.dirtyAtoms)}}function pM(t,e){const n=kP(t,e,e.dirtyAtoms);for(const s of n){var i,r;(i=dM(s))===null||i===void 0||(r=i.invalidate)===null||r===void 0||r.call(i,e)}}function mM(t,e,n){gf(t,{type:"set",recoilValue:e,valueOrUpdater:n})}function JP(t,e,n){if(n instanceof gv)return mM(t,e,n);gf(t,{type:"setLoadable",recoilValue:e,loadable:n})}function QP(t,e){gf(t,{type:"markModified",recoilValue:e})}function eL(t,e,n){gf(t,{type:"setUnvalidated",recoilValue:e,unvalidatedValue:n})}function tL(t,{key:e},n,i=null){const r=BP(),s=t.getState();s.nodeToComponentSubscriptions.has(e)||s.nodeToComponentSubscriptions.set(e,new Map),Et(s.nodeToComponentSubscriptions.get(e)).set(r,[i??"<not captured>",n]);const o=VP();if(o.early&&(o.mode==="LEGACY"||o.mode==="MUTABLE_SOURCE")){const a=t.getState().nextTree;a&&a.dirtyAtoms.has(e)&&n(a)}return{release:()=>{const a=t.getState(),l=a.nodeToComponentSubscriptions.get(e);l===void 0||!l.has(r)||(l.delete(r),l.size===0&&a.nodeToComponentSubscriptions.delete(e))}}}function nL(t,e){var n;const{currentTree:i}=t.getState(),r=zP(e.key);(n=r.clearCache)===null||n===void 0||n.call(r,t,i)}var Pi={RecoilValueReadOnly:WP,AbstractRecoilValue:HP,RecoilState:GP,getRecoilValueAsLoadable:XP,setRecoilValue:mM,setRecoilValueLoadable:JP,markRecoilValueModified:QP,setUnvalidatedRecoilValue:eL,subscribeToRecoilValue:tL,isRecoilValue:$P,applyAtomValueWrites:qP,batchStart:ZP,writeLoadableToTreeState:Mm,invalidateDownstreams:pM,copyTreeState:hM,refreshRecoilValue:nL};function iL(t,e,n){const i=t.entries();let r=i.next();for(;!r.done;){const s=r.value;if(e.call(n,s[1],s[0],t))return!0;r=i.next()}return!1}var rL=iL;const{cleanUpNode:sL}=Kr,{deleteNodeConfigIfPossible:oL,getNode:gM}=bn,{RetentionZone:vM}=mf,aL=12e4,_M=new Set;function yM(t,e){const n=t.getState(),i=n.currentTree;if(n.nextTree)return;const r=new Set;for(const o of e)if(o instanceof vM)for(const a of dL(n,o))r.add(a);else r.add(o);const s=lL(t,r);for(const o of s)uL(t,i,o)}function lL(t,e){const n=t.getState(),i=n.currentTree,r=t.getGraph(i.version),s=new Set,o=new Set;return a(e),s;function a(l){const c=new Set,u=cL(t,i,l,s,o);for(const m of u){var d;if(gM(m).retainedBy==="recoilRoot"){o.add(m);continue}if(((d=n.retention.referenceCounts.get(m))!==null&&d!==void 0?d:0)>0){o.add(m);continue}if(SM(m).some(g=>n.retention.referenceCounts.get(g))){o.add(m);continue}const v=r.nodeToNodeSubscriptions.get(m);if(v&&rL(v,g=>o.has(g))){o.add(m);continue}s.add(m),c.add(m)}const h=new Set;for(const m of c)for(const v of(p=r.nodeDeps.get(m))!==null&&p!==void 0?p:_M){var p;s.has(v)||h.add(v)}h.size&&a(h)}}function cL(t,e,n,i,r){const s=t.getGraph(e.version),o=[],a=new Set;for(;n.size>0;)l(Et(n.values().next().value));return o;function l(c){if(i.has(c)||r.has(c)){n.delete(c);return}if(a.has(c))return;const u=s.nodeToNodeSubscriptions.get(c);if(u)for(const d of u)l(d);a.add(c),n.delete(c),o.push(c)}}function uL(t,e,n){if(!dt("recoil_memory_managament_2020"))return;sL(t,n);const i=t.getState();i.knownAtoms.delete(n),i.knownSelectors.delete(n),i.nodeTransactionSubscriptions.delete(n),i.retention.referenceCounts.delete(n);const r=SM(n);for(const l of r){var s;(s=i.retention.nodesRetainedByZone.get(l))===null||s===void 0||s.delete(n)}e.atomValues.delete(n),e.dirtyAtoms.delete(n),e.nonvalidatedAtoms.delete(n);const o=i.graphsByVersion.get(e.version);if(o){const l=o.nodeDeps.get(n);if(l!==void 0){o.nodeDeps.delete(n);for(const c of l){var a;(a=o.nodeToNodeSubscriptions.get(c))===null||a===void 0||a.delete(n)}}o.nodeToNodeSubscriptions.delete(n)}oL(n)}function dL(t,e){var n;return(n=t.retention.nodesRetainedByZone.get(e))!==null&&n!==void 0?n:_M}function SM(t){const e=gM(t).retainedBy;return e===void 0||e==="components"||e==="recoilRoot"?[]:e instanceof vM?[e]:e}function fL(t,e){const n=t.getState();n.nextTree?n.retention.retainablesToCheckForRelease.add(e):yM(t,new Set([e]))}function hL(t,e,n){var i;if(!dt("recoil_memory_managament_2020"))return;const r=t.getState().retention.referenceCounts,s=((i=r.get(e))!==null&&i!==void 0?i:0)+n;s===0?EM(t,e):r.set(e,s)}function EM(t,e){if(!dt("recoil_memory_managament_2020"))return;t.getState().retention.referenceCounts.delete(e),fL(t,e)}function pL(t){if(!dt("recoil_memory_managament_2020"))return;const e=t.getState();yM(t,e.retention.retainablesToCheckForRelease),e.retention.retainablesToCheckForRelease.clear()}function mL(t){return t===void 0?"recoilRoot":t}var js={SUSPENSE_TIMEOUT_MS:aL,updateRetainCount:hL,updateRetainCountToZero:EM,releaseScheduledRetainablesNow:pL,retainedByOptionWithDefault:mL};const{unstable_batchedUpdates:gL}=sv;var vL={unstable_batchedUpdates:gL};const{unstable_batchedUpdates:_L}=vL;var yL={unstable_batchedUpdates:_L};const{batchStart:SL}=Pi,{unstable_batchedUpdates:EL}=yL;let vv=EL||(t=>t());const xL=t=>{vv=t},wL=()=>vv,ML=t=>{vv(()=>{let e=()=>{};try{e=SL(),t()}finally{e()}})};var vf={getBatcher:wL,setBatcher:xL,batchUpdates:ML};function*TL(t){for(const e of t)for(const n of e)yield n}var xM=TL;const wM=typeof Window>"u"||typeof window>"u",RL=t=>!wM&&(t===window||t instanceof Window),bL=typeof navigator<"u"&&navigator.product==="ReactNative";var _f={isSSR:wM,isReactNative:bL,isWindow:RL};function AL(t,e){let n;return(...i)=>{n||(n={});const r=e(...i);return Object.hasOwnProperty.call(n,r)||(n[r]=t(...i)),n[r]}}function CL(t,e){let n,i;return(...r)=>{const s=e(...r);return n===s||(n=s,i=t(...r)),i}}function PL(t,e){let n,i;return[(...o)=>{const a=e(...o);return n===a||(n=a,i=t(...o)),i},()=>{n=null}]}var LL={memoizeWithArgsHash:AL,memoizeOneWithArgsHash:CL,memoizeOneWithArgsHashAndInvalidation:PL};const{batchUpdates:Tm}=vf,{initializeNode:IL,peekNodeInfo:NL}=Kr,{graph:DL}=fc,{getNextStoreID:UL}=pf,{DEFAULT_VALUE:OL,recoilValues:P0,recoilValuesForKeys:L0}=bn,{AbstractRecoilValue:kL,getRecoilValueAsLoadable:FL,setRecoilValue:I0,setUnvalidatedRecoilValue:BL}=Pi,{updateRetainCount:Bu}=js,{setInvalidateMemoizedSnapshot:zL}=cM,{getNextTreeStateVersion:VL,makeEmptyStoreState:HL}=nM,{isSSR:GL}=_f,{memoizeOneWithArgsHashAndInvalidation:WL}=LL;class yf{constructor(e,n){We(this,"_store",void 0),We(this,"_refCount",1),We(this,"getLoadable",i=>(this.checkRefCount_INTERNAL(),FL(this._store,i))),We(this,"getPromise",i=>(this.checkRefCount_INTERNAL(),this.getLoadable(i).toPromise())),We(this,"getNodes_UNSTABLE",i=>{if(this.checkRefCount_INTERNAL(),(i==null?void 0:i.isModified)===!0){if((i==null?void 0:i.isInitialized)===!1)return[];const o=this._store.getState().currentTree;return L0(o.dirtyAtoms)}const r=this._store.getState().knownAtoms,s=this._store.getState().knownSelectors;return(i==null?void 0:i.isInitialized)==null?P0.values():i.isInitialized===!0?L0(xM([r,s])):pv(P0.values(),({key:o})=>!r.has(o)&&!s.has(o))}),We(this,"getInfo_UNSTABLE",({key:i})=>(this.checkRefCount_INTERNAL(),NL(this._store,this._store.getState().currentTree,i))),We(this,"map",i=>{this.checkRefCount_INTERNAL();const r=new Rm(this,Tm);return i(r),r}),We(this,"asyncMap",async i=>{this.checkRefCount_INTERNAL();const r=new Rm(this,Tm);return r.retain(),await i(r),r.autoRelease_INTERNAL(),r}),this._store={storeID:UL(),parentStoreID:n,getState:()=>e,replaceState:i=>{e.currentTree=i(e.currentTree)},getGraph:i=>{const r=e.graphsByVersion;if(r.has(i))return Et(r.get(i));const s=DL();return r.set(i,s),s},subscribeToTransactions:()=>({release:()=>{}}),addTransactionMetadata:()=>{throw Ye("Cannot subscribe to Snapshots")}};for(const i of this._store.getState().knownAtoms)IL(this._store,i,"get"),Bu(this._store,i,1);this.autoRelease_INTERNAL()}retain(){this._refCount<=0,this._refCount++;let e=!1;return()=>{e||(e=!0,this._release())}}autoRelease_INTERNAL(){GL||window.setTimeout(()=>this._release(),10)}_release(){if(this._refCount--,this._refCount===0){if(this._store.getState().nodeCleanupFunctions.forEach(e=>e()),this._store.getState().nodeCleanupFunctions.clear(),!dt("recoil_memory_managament_2020"))return}else this._refCount<0}isRetained(){return this._refCount>0}checkRefCount_INTERNAL(){dt("recoil_memory_managament_2020")&&this._refCount<=0}getStore_INTERNAL(){return this.checkRefCount_INTERNAL(),this._store}getID(){return this.checkRefCount_INTERNAL(),this._store.getState().currentTree.stateID}getStoreID(){return this.checkRefCount_INTERNAL(),this._store.storeID}}function MM(t,e,n=!1){const i=t.getState(),r=n?VL():e.version;return{currentTree:{version:n?r:e.version,stateID:n?r:e.stateID,transactionMetadata:{...e.transactionMetadata},dirtyAtoms:new Set(e.dirtyAtoms),atomValues:e.atomValues.clone(),nonvalidatedAtoms:e.nonvalidatedAtoms.clone()},commitDepth:0,nextTree:null,previousTree:null,knownAtoms:new Set(i.knownAtoms),knownSelectors:new Set(i.knownSelectors),transactionSubscriptions:new Map,nodeTransactionSubscriptions:new Map,nodeToComponentSubscriptions:new Map,queuedComponentCallbacks_DEPRECATED:[],suspendedComponentResolvers:new Set,graphsByVersion:new Map().set(r,t.getGraph(e.version)),retention:{referenceCounts:new Map,nodesRetainedByZone:new Map,retainablesToCheckForRelease:new Set},nodeCleanupFunctions:new Map(hf(i.nodeCleanupFunctions.entries(),([s])=>[s,()=>{}]))}}function $L(t){const e=new yf(HL());return t!=null?e.map(t):e}const[N0,TM]=WL((t,e)=>{var n;const i=t.getState(),r=e==="latest"?(n=i.nextTree)!==null&&n!==void 0?n:i.currentTree:Et(i.previousTree);return new yf(MM(t,r),t.storeID)},(t,e)=>{var n,i;return String(e)+String(t.storeID)+String((n=t.getState().nextTree)===null||n===void 0?void 0:n.version)+String(t.getState().currentTree.version)+String((i=t.getState().previousTree)===null||i===void 0?void 0:i.version)});zL(TM);function jL(t,e="latest"){const n=N0(t,e);return n.isRetained()?n:(TM(),N0(t,e))}class Rm extends yf{constructor(e,n){super(MM(e.getStore_INTERNAL(),e.getStore_INTERNAL().getState().currentTree,!0),e.getStoreID()),We(this,"_batch",void 0),We(this,"set",(i,r)=>{this.checkRefCount_INTERNAL();const s=this.getStore_INTERNAL();this._batch(()=>{Bu(s,i.key,1),I0(this.getStore_INTERNAL(),i,r)})}),We(this,"reset",i=>{this.checkRefCount_INTERNAL();const r=this.getStore_INTERNAL();this._batch(()=>{Bu(r,i.key,1),I0(this.getStore_INTERNAL(),i,OL)})}),We(this,"setUnvalidatedAtomValues_DEPRECATED",i=>{this.checkRefCount_INTERNAL();const r=this.getStore_INTERNAL();Tm(()=>{for(const[s,o]of i.entries())Bu(r,s,1),BL(r,new kL(s),o)})}),this._batch=n}}var Sf={Snapshot:yf,MutableSnapshot:Rm,freshSnapshot:$L,cloneSnapshot:jL},XL=Sf.Snapshot,qL=Sf.MutableSnapshot,YL=Sf.freshSnapshot,KL=Sf.cloneSnapshot,Ef=Object.freeze({__proto__:null,Snapshot:XL,MutableSnapshot:qL,freshSnapshot:YL,cloneSnapshot:KL});function ZL(...t){const e=new Set;for(const n of t)for(const i of n)e.add(i);return e}var JL=ZL;const{useRef:QL}=lt;function eI(t){const e=QL(t);return e.current===t&&typeof t=="function"&&(e.current=t()),e}var D0=eI;const{getNextTreeStateVersion:tI,makeEmptyStoreState:RM}=nM,{cleanUpNode:nI,getDownstreamNodes:iI,initializeNode:rI,setNodeValue:sI,setUnvalidatedAtomValue_DEPRECATED:oI}=Kr,{graph:aI}=fc,{cloneGraph:lI}=fc,{getNextStoreID:bM}=pf,{createMutableSource:Ah,reactMode:AM}=dc,{applyAtomValueWrites:cI}=Pi,{releaseScheduledRetainablesNow:CM}=js,{freshSnapshot:uI}=Ef,{useCallback:dI,useContext:PM,useEffect:bm,useMemo:fI,useRef:hI,useState:pI}=lt;function Ga(){throw Ye("This component must be used inside a <RecoilRoot> component.")}const LM=Object.freeze({storeID:bM(),getState:Ga,replaceState:Ga,getGraph:Ga,subscribeToTransactions:Ga,addTransactionMetadata:Ga});let Am=!1;function U0(t){if(Am)throw Ye("An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.");const e=t.getState();if(e.nextTree===null){dt("recoil_memory_managament_2020")&&dt("recoil_release_on_cascading_update_killswitch_2021")&&e.commitDepth>0&&CM(t);const n=e.currentTree.version,i=tI();e.nextTree={...e.currentTree,version:i,stateID:i,dirtyAtoms:new Set,transactionMetadata:{}},e.graphsByVersion.set(i,lI(Et(e.graphsByVersion.get(n))))}}const IM=lt.createContext({current:LM}),xf=()=>PM(IM),NM=lt.createContext(null);function mI(){return PM(NM)}function _v(t,e,n){const i=iI(t,n,n.dirtyAtoms);for(const r of i){const s=e.nodeToComponentSubscriptions.get(r);if(s)for(const[o,[a,l]]of s)l(n)}}function DM(t){const e=t.getState(),n=e.currentTree,i=n.dirtyAtoms;if(i.size){for(const[r,s]of e.nodeTransactionSubscriptions)if(i.has(r))for(const[o,a]of s)a(t);for(const[r,s]of e.transactionSubscriptions)s(t);(!AM().early||e.suspendedComponentResolvers.size>0)&&(_v(t,e,n),e.suspendedComponentResolvers.forEach(r=>r()),e.suspendedComponentResolvers.clear())}e.queuedComponentCallbacks_DEPRECATED.forEach(r=>r(n)),e.queuedComponentCallbacks_DEPRECATED.splice(0,e.queuedComponentCallbacks_DEPRECATED.length)}function gI(t){const e=t.getState();e.commitDepth++;try{const{nextTree:n}=e;if(n==null)return;e.previousTree=e.currentTree,e.currentTree=n,e.nextTree=null,DM(t),e.previousTree!=null?e.graphsByVersion.delete(e.previousTree.version):cv("Ended batch with no previous state, which is unexpected","recoil"),e.previousTree=null,dt("recoil_memory_managament_2020")&&n==null&&CM(t)}finally{e.commitDepth--}}function vI({setNotifyBatcherOfChange:t}){const e=xf(),[,n]=pI([]);return t(()=>n({})),bm(()=>(t(()=>n({})),()=>{t(()=>{})}),[t]),bm(()=>{Y2.enqueueExecution("Batcher",()=>{gI(e.current)})}),null}function _I(t,e){const n=RM();return e({set:(i,r)=>{const s=n.currentTree,o=sI(t,s,i.key,r),a=new Set(o.keys()),l=s.nonvalidatedAtoms.clone();for(const c of a)l.delete(c);n.currentTree={...s,dirtyAtoms:JL(s.dirtyAtoms,a),atomValues:cI(s.atomValues,o),nonvalidatedAtoms:l}},setUnvalidatedAtomValues:i=>{i.forEach((r,s)=>{n.currentTree=oI(n.currentTree,s,r)})}}),n}function yI(t){const e=uI(t),n=e.getStore_INTERNAL().getState();return e.retain(),n.nodeCleanupFunctions.forEach(i=>i()),n.nodeCleanupFunctions.clear(),n}let O0=0;function SI({initializeState_DEPRECATED:t,initializeState:e,store_INTERNAL:n,children:i}){let r;const s=p=>{const m=r.current.graphsByVersion;if(m.has(p))return Et(m.get(p));const v=aI();return m.set(p,v),v},o=(p,m)=>{if(m==null){const{transactionSubscriptions:v}=d.current.getState(),g=O0++;return v.set(g,p),{release:()=>{v.delete(g)}}}else{const{nodeTransactionSubscriptions:v}=d.current.getState();v.has(m)||v.set(m,new Map);const g=O0++;return Et(v.get(m)).set(g,p),{release:()=>{const f=v.get(m);f&&(f.delete(g),f.size===0&&v.delete(m))}}}},a=p=>{U0(d.current);for(const m of Object.keys(p))Et(d.current.getState().nextTree).transactionMetadata[m]=p[m]},l=p=>{U0(d.current);const m=Et(r.current.nextTree);let v;try{Am=!0,v=p(m)}finally{Am=!1}v!==m&&(r.current.nextTree=v,AM().early&&_v(d.current,r.current,v),Et(c.current)())},c=hI(null),u=dI(p=>{c.current=p},[c]),d=D0(()=>n??{storeID:bM(),getState:()=>r.current,replaceState:l,getGraph:s,subscribeToTransactions:o,addTransactionMetadata:a});n!=null&&(d.current=n),r=D0(()=>t!=null?_I(d.current,t):e!=null?yI(e):RM());const h=fI(()=>Ah==null?void 0:Ah(r,()=>r.current.currentTree.version),[r]);return bm(()=>{const p=d.current;for(const m of new Set(p.getState().knownAtoms))rI(p,m,"get");return()=>{for(const m of p.getState().knownAtoms)nI(p,m)}},[d]),lt.createElement(IM.Provider,{value:d},lt.createElement(NM.Provider,{value:h},lt.createElement(vI,{setNotifyBatcherOfChange:u}),i))}function EI(t){const{override:e,...n}=t,i=xf();return e===!1&&i.current!==LM?t.children:lt.createElement(SI,n)}function xI(){return xf().current.storeID}var ar={RecoilRoot:EI,useStoreRef:xf,useRecoilMutableSource:mI,useRecoilStoreID:xI,notifyComponents_FOR_TESTING:_v,sendEndOfBatchNotifications_FOR_TESTING:DM};function wI(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}var MI=wI;const{useEffect:TI,useRef:RI}=lt;function bI(t){const e=RI();return TI(()=>{e.current=t}),e.current}var UM=bI;const{useStoreRef:AI}=ar,{SUSPENSE_TIMEOUT_MS:CI}=js,{updateRetainCount:Wa}=js,{RetentionZone:PI}=mf,{useEffect:LI,useRef:II}=lt,{isSSR:k0}=_f;function NI(t){if(dt("recoil_memory_managament_2020"))return DI(t)}function DI(t){const n=(Array.isArray(t)?t:[t]).map(o=>o instanceof PI?o:o.key),i=AI();LI(()=>{if(!dt("recoil_memory_managament_2020"))return;const o=i.current;if(r.current&&!k0)window.clearTimeout(r.current),r.current=null;else for(const a of n)Wa(o,a,1);return()=>{for(const a of n)Wa(o,a,-1)}},[i,...n]);const r=II(),s=UM(n);if(!k0&&(s===void 0||!MI(s,n))){const o=i.current;for(const a of n)Wa(o,a,1);if(s)for(const a of s)Wa(o,a,-1);r.current&&window.clearTimeout(r.current),r.current=window.setTimeout(()=>{r.current=null;for(const a of n)Wa(o,a,-1)},CI)}}var yv=NI;function UI(){return"<component name not available>"}var pc=UI;const{batchUpdates:OI}=vf,{DEFAULT_VALUE:OM}=bn,{currentRendererSupportsUseSyncExternalStore:kI,reactMode:Ra,useMutableSource:FI,useSyncExternalStore:BI}=dc,{useRecoilMutableSource:zI,useStoreRef:Li}=ar,{AbstractRecoilValue:Cm,getRecoilValueAsLoadable:mc,setRecoilValue:Rd,setUnvalidatedRecoilValue:VI,subscribeToRecoilValue:oa}=Pi,{useCallback:Rn,useEffect:aa,useMemo:kM,useRef:Ml,useState:Sv}=lt,{setByAddingToSet:HI}=rM,{isSSR:GI}=_f;function Ev(t,e,n){if(t.state==="hasValue")return t.contents;throw t.state==="loading"?new Promise(r=>{const s=n.current.getState().suspendedComponentResolvers;s.add(r),GI&&_t(t.contents)&&t.contents.finally(()=>{s.delete(r)})}):t.state==="hasError"?t.contents:Ye(`Invalid value of loadable atom "${e.key}"`)}function WI(){const t=pc(),e=Li(),[,n]=Sv([]),i=Ml(new Set);i.current=new Set;const r=Ml(new Set),s=Ml(new Map),o=Rn(l=>{const c=s.current.get(l);c&&(c.release(),s.current.delete(l))},[s]),a=Rn((l,c)=>{s.current.has(c)&&n([])},[]);return aa(()=>{const l=e.current;xl(i.current,r.current).forEach(c=>{if(s.current.has(c))return;const u=oa(l,new Cm(c),h=>a(h,c),t);s.current.set(c,u),l.getState().nextTree?l.getState().queuedComponentCallbacks_DEPRECATED.push(()=>{a(l.getState(),c)}):a(l.getState(),c)}),xl(r.current,i.current).forEach(c=>{o(c)}),r.current=i.current}),aa(()=>{const l=s.current;return xl(i.current,new Set(l.keys())).forEach(c=>{const u=oa(e.current,new Cm(c),d=>a(d,c),t);l.set(c,u)}),()=>l.forEach((c,u)=>o(u))},[t,e,o,a]),kM(()=>{function l(m){return v=>{Rd(e.current,m,v)}}function c(m){return()=>Rd(e.current,m,OM)}function u(m){var v;i.current.has(m.key)||(i.current=HI(i.current,m.key));const g=e.current.getState();return mc(e.current,m,Ra().early&&(v=g.nextTree)!==null&&v!==void 0?v:g.currentTree)}function d(m){const v=u(m);return Ev(v,m,e)}function h(m){return[d(m),l(m)]}function p(m){return[u(m),l(m)]}return{getRecoilValue:d,getRecoilValueLoadable:u,getRecoilState:h,getRecoilStateLoadable:p,getSetRecoilState:l,getResetRecoilState:c}},[i,e])}const $I={current:0};function jI(t){const e=Li(),n=pc(),i=Rn(()=>{var a;const l=e.current,c=l.getState(),u=Ra().early&&(a=c.nextTree)!==null&&a!==void 0?a:c.currentTree;return{loadable:mc(l,t,u),key:t.key}},[e,t]),r=Rn(a=>{let l;return()=>{var c,u;const d=a();return(c=l)!==null&&c!==void 0&&c.loadable.is(d.loadable)&&((u=l)===null||u===void 0?void 0:u.key)===d.key?l:(l=d,d)}},[]),s=kM(()=>r(i),[i,r]),o=Rn(a=>{const l=e.current;return oa(l,t,a,n).release},[e,t,n]);return BI(o,s,s).loadable}function XI(t){const e=Li(),n=Rn(()=>{var c;const u=e.current,d=u.getState(),h=Ra().early&&(c=d.nextTree)!==null&&c!==void 0?c:d.currentTree;return mc(u,t,h)},[e,t]),i=Rn(()=>n(),[n]),r=pc(),s=Rn((c,u)=>{const d=e.current;return oa(d,t,()=>{if(!dt("recoil_suppress_rerender_in_callback"))return u();const p=n();l.current.is(p)||u(),l.current=p},r).release},[e,t,r,n]),o=zI();if(o==null)throw Ye("Recoil hooks must be used in components contained within a <RecoilRoot> component.");const a=FI(o,i,s),l=Ml(a);return aa(()=>{l.current=a}),a}function Pm(t){const e=Li(),n=pc(),i=Rn(()=>{var l;const c=e.current,u=c.getState(),d=Ra().early&&(l=u.nextTree)!==null&&l!==void 0?l:u.currentTree;return mc(c,t,d)},[e,t]),r=Rn(()=>({loadable:i(),key:t.key}),[i,t.key]),s=Rn(l=>{const c=r();return l.loadable.is(c.loadable)&&l.key===c.key?l:c},[r]);aa(()=>{const l=oa(e.current,t,c=>{a(s)},n);return a(s),l.release},[n,t,e,s]);const[o,a]=Sv(r);return o.key!==t.key?r().loadable:o.loadable}function qI(t){const e=Li(),[,n]=Sv([]),i=pc(),r=Rn(()=>{var a;const l=e.current,c=l.getState(),u=Ra().early&&(a=c.nextTree)!==null&&a!==void 0?a:c.currentTree;return mc(l,t,u)},[e,t]),s=r(),o=Ml(s);return aa(()=>{o.current=s}),aa(()=>{const a=e.current,l=a.getState(),c=oa(a,t,d=>{var h;if(!dt("recoil_suppress_rerender_in_callback"))return n([]);const p=r();(h=o.current)!==null&&h!==void 0&&h.is(p)||n(p),o.current=p},i);if(l.nextTree)a.getState().queuedComponentCallbacks_DEPRECATED.push(()=>{o.current=null,n([])});else{var u;if(!dt("recoil_suppress_rerender_in_callback"))return n([]);const d=r();(u=o.current)!==null&&u!==void 0&&u.is(d)||n(d),o.current=d}return c.release},[i,r,t,e]),s}function xv(t){return dt("recoil_memory_managament_2020")&&yv(t),{TRANSITION_SUPPORT:Pm,SYNC_EXTERNAL_STORE:kI()?jI:Pm,MUTABLE_SOURCE:XI,LEGACY:qI}[Ra().mode](t)}function FM(t){const e=Li(),n=xv(t);return Ev(n,t,e)}function wf(t){const e=Li();return Rn(n=>{Rd(e.current,t,n)},[e,t])}function YI(t){const e=Li();return Rn(()=>{Rd(e.current,t,OM)},[e,t])}function KI(t){return[FM(t),wf(t)]}function ZI(t){return[xv(t),wf(t)]}function JI(){const t=Li();return(e,n={})=>{OI(()=>{t.current.addTransactionMetadata(n),e.forEach((i,r)=>VI(t.current,new Cm(r),i))})}}function BM(t){return dt("recoil_memory_managament_2020")&&yv(t),Pm(t)}function zM(t){const e=Li(),n=BM(t);return Ev(n,t,e)}function QI(t){return[zM(t),wf(t)]}var eN={recoilComponentGetRecoilValueCount_FOR_TESTING:$I,useRecoilInterface:WI,useRecoilState:KI,useRecoilStateLoadable:ZI,useRecoilValue:FM,useRecoilValueLoadable:xv,useResetRecoilState:YI,useSetRecoilState:wf,useSetUnvalidatedAtomValues:JI,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:BM,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:zM,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:QI};function tN(t,e){const n=new Map;for(const[i,r]of t)e(r,i)&&n.set(i,r);return n}var nN=tN;function iN(t,e){const n=new Set;for(const i of t)e(i)&&n.add(i);return n}var rN=iN;function sN(...t){const e=new Map;for(let n=0;n<t.length;n++){const i=t[n].keys();let r;for(;!(r=i.next()).done;)e.set(r.value,t[n].get(r.value))}return e}var oN=sN;const{batchUpdates:aN}=vf,{DEFAULT_VALUE:lN,getNode:VM,nodes:cN}=bn,{useStoreRef:wv}=ar,{AbstractRecoilValue:uN,setRecoilValueLoadable:dN}=Pi,{SUSPENSE_TIMEOUT_MS:fN}=js,{cloneSnapshot:bd}=Ef,{useCallback:Mf,useEffect:HM,useRef:F0,useState:hN}=lt,{isSSR:B0}=_f;function Tf(t){const e=wv();HM(()=>e.current.subscribeToTransactions(t).release,[t,e])}function z0(t){const e=t.atomValues.toMap(),n=Td(nN(e,(i,r)=>{const o=VM(r).persistence_UNSTABLE;return o!=null&&o.type!=="none"&&i.state==="hasValue"}),i=>i.contents);return oN(t.nonvalidatedAtoms.toMap(),n)}function pN(t){Tf(Mf(e=>{let n=e.getState().previousTree;const i=e.getState().currentTree;n||(n=e.getState().currentTree);const r=z0(i),s=z0(n),o=Td(cN,l=>{var c,u,d,h;return{persistence_UNSTABLE:{type:(c=(u=l.persistence_UNSTABLE)===null||u===void 0?void 0:u.type)!==null&&c!==void 0?c:"none",backButton:(d=(h=l.persistence_UNSTABLE)===null||h===void 0?void 0:h.backButton)!==null&&d!==void 0?d:!1}}}),a=rN(i.dirtyAtoms,l=>r.has(l)||s.has(l));t({atomValues:r,previousAtomValues:s,atomInfo:o,modifiedAtoms:a,transactionMetadata:{...i.transactionMetadata}})},[t]))}function mN(t){Tf(Mf(e=>{const n=bd(e,"latest"),i=bd(e,"previous");t({snapshot:n,previousSnapshot:i})},[t]))}function gN(){const t=wv(),[e,n]=hN(()=>bd(t.current)),i=UM(e),r=F0(),s=F0();if(Tf(Mf(a=>n(bd(a)),[])),HM(()=>{const a=e.retain();if(r.current&&!B0){var l;window.clearTimeout(r.current),r.current=null,(l=s.current)===null||l===void 0||l.call(s),s.current=null}return()=>{window.setTimeout(a,10)}},[e]),i!==e&&!B0){if(r.current){var o;window.clearTimeout(r.current),r.current=null,(o=s.current)===null||o===void 0||o.call(s),s.current=null}s.current=e.retain(),r.current=window.setTimeout(()=>{var a;r.current=null,(a=s.current)===null||a===void 0||a.call(s),s.current=null},fN)}return e}function GM(t,e){var n;const i=t.getState(),r=(n=i.nextTree)!==null&&n!==void 0?n:i.currentTree,s=e.getStore_INTERNAL().getState().currentTree;aN(()=>{const o=new Set;for(const c of[r.atomValues.keys(),s.atomValues.keys()])for(const u of c){var a,l;((a=r.atomValues.get(u))===null||a===void 0?void 0:a.contents)!==((l=s.atomValues.get(u))===null||l===void 0?void 0:l.contents)&&VM(u).shouldRestoreFromSnapshots&&o.add(u)}o.forEach(c=>{dN(t,new uN(c),s.atomValues.has(c)?Et(s.atomValues.get(c)):lN)}),t.replaceState(c=>({...c,stateID:e.getID()}))})}function vN(){const t=wv();return Mf(e=>GM(t.current,e),[t])}var WM={useRecoilSnapshot:gN,gotoSnapshot:GM,useGotoRecoilSnapshot:vN,useRecoilTransactionObserver:mN,useTransactionObservation_DEPRECATED:pN,useTransactionSubscription_DEPRECATED:Tf};const{peekNodeInfo:_N}=Kr,{useStoreRef:yN}=ar;function SN(){const t=yN();return({key:e})=>_N(t.current,t.current.getState().currentTree,e)}var EN=SN;const{reactMode:xN}=dc,{RecoilRoot:wN,useStoreRef:MN}=ar,{useMemo:TN}=lt;function RN(){xN().mode==="MUTABLE_SOURCE"&&console.warn("Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.");const t=MN().current;return TN(()=>{function e({children:n}){return lt.createElement(wN,{store_INTERNAL:t},n)}return e},[t])}var bN=RN;const{loadableWithValue:AN}=uc,{initializeNode:CN}=Kr,{DEFAULT_VALUE:PN,getNode:LN}=bn,{copyTreeState:IN,getRecoilValueAsLoadable:NN,invalidateDownstreams:DN,writeLoadableToTreeState:UN}=Pi;function V0(t){return LN(t.key).nodeType==="atom"}class ON{constructor(e,n){We(this,"_store",void 0),We(this,"_treeState",void 0),We(this,"_changes",void 0),We(this,"get",i=>{if(this._changes.has(i.key))return this._changes.get(i.key);if(!V0(i))throw Ye("Reading selectors within atomicUpdate is not supported");const r=NN(this._store,i,this._treeState);if(r.state==="hasValue")return r.contents;throw r.state==="hasError"?r.contents:Ye(`Expected Recoil atom ${i.key} to have a value, but it is in a loading state.`)}),We(this,"set",(i,r)=>{if(!V0(i))throw Ye("Setting selectors within atomicUpdate is not supported");if(typeof r=="function"){const s=this.get(i);this._changes.set(i.key,r(s))}else CN(this._store,i.key,"set"),this._changes.set(i.key,r)}),We(this,"reset",i=>{this.set(i,PN)}),this._store=e,this._treeState=n,this._changes=new Map}newTreeState_INTERNAL(){if(this._changes.size===0)return this._treeState;const e=IN(this._treeState);for(const[n,i]of this._changes)UN(e,n,AN(i));return DN(this._store,e),e}}function kN(t){return e=>{t.replaceState(n=>{const i=new ON(t,n);return e(i),i.newTreeState_INTERNAL()})}}var FN={atomicUpdater:kN},BN=FN.atomicUpdater,$M=Object.freeze({__proto__:null,atomicUpdater:BN});function zN(t,e){if(!t)throw new Error(e)}var VN=zN,al=VN;const{atomicUpdater:HN}=$M,{batchUpdates:GN}=vf,{DEFAULT_VALUE:WN}=bn,{useStoreRef:$N}=ar,{refreshRecoilValue:jN,setRecoilValue:H0}=Pi,{cloneSnapshot:XN}=Ef,{gotoSnapshot:qN}=WM,{useCallback:YN}=lt;class jM{}const KN=new jM;function XM(t,e,n,i){let r=KN,s;if(GN(()=>{const a="useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";if(typeof e!="function")throw Ye(a);const l=sM({...i??{},set:(u,d)=>H0(t,u,d),reset:u=>H0(t,u,WN),refresh:u=>jN(t,u),gotoSnapshot:u=>qN(t,u),transact_UNSTABLE:u=>HN(t)(u)},{snapshot:()=>{const u=XN(t);return s=u.retain(),u}}),c=e(l);if(typeof c!="function")throw Ye(a);r=c(...n)}),r instanceof jM&&al(!1),_t(r))r=r.finally(()=>{var a;(a=s)===null||a===void 0||a()});else{var o;(o=s)===null||o===void 0||o()}return r}function ZN(t,e){const n=$N();return YN((...i)=>XM(n.current,t,i),e!=null?[...e,n]:void 0)}var qM={recoilCallback:XM,useRecoilCallback:ZN};const{useStoreRef:JN}=ar,{refreshRecoilValue:QN}=Pi,{useCallback:eD}=lt;function tD(t){const e=JN();return eD(()=>{const n=e.current;QN(n,t)},[t,e])}var nD=tD;const{atomicUpdater:iD}=$M,{useStoreRef:rD}=ar,{useMemo:sD}=lt;function oD(t,e){const n=rD();return sD(()=>(...i)=>{iD(n.current)(s=>{t(s)(...i)})},e!=null?[...e,n]:void 0)}var aD=oD;class lD{constructor(e){We(this,"value",void 0),this.value=e}}var cD={WrappedValue:lD},uD=cD.WrappedValue,YM=Object.freeze({__proto__:null,WrappedValue:uD});const{isFastRefreshEnabled:dD}=dc;class G0 extends Error{}class fD{constructor(e){var n,i,r;We(this,"_name",void 0),We(this,"_numLeafs",void 0),We(this,"_root",void 0),We(this,"_onHit",void 0),We(this,"_onSet",void 0),We(this,"_mapNodeValue",void 0),this._name=e==null?void 0:e.name,this._numLeafs=0,this._root=null,this._onHit=(n=e==null?void 0:e.onHit)!==null&&n!==void 0?n:()=>{},this._onSet=(i=e==null?void 0:e.onSet)!==null&&i!==void 0?i:()=>{},this._mapNodeValue=(r=e==null?void 0:e.mapNodeValue)!==null&&r!==void 0?r:s=>s}size(){return this._numLeafs}root(){return this._root}get(e,n){var i;return(i=this.getLeafNode(e,n))===null||i===void 0?void 0:i.value}getLeafNode(e,n){if(this._root==null)return;let i=this._root;for(;i;){if(n==null||n.onNodeVisit(i),i.type==="leaf")return this._onHit(i),i;const r=this._mapNodeValue(e(i.nodeKey));i=i.branches.get(r)}}set(e,n,i){const r=()=>{var s,o,a,l;let c,u;for(const[g,f]of e){var d,h,p;const _=this._root;if((_==null?void 0:_.type)==="leaf")throw this.invalidCacheError();const y=c;if(c=y?y.branches.get(u):_,c=(d=c)!==null&&d!==void 0?d:{type:"branch",nodeKey:g,parent:y,branches:new Map,branchKey:u},c.type!=="branch"||c.nodeKey!==g)throw this.invalidCacheError();y==null||y.branches.set(u,c),i==null||(h=i.onNodeVisit)===null||h===void 0||h.call(i,c),u=this._mapNodeValue(f),this._root=(p=this._root)!==null&&p!==void 0?p:c}const m=c?(s=c)===null||s===void 0?void 0:s.branches.get(u):this._root;if(m!=null&&(m.type!=="leaf"||m.branchKey!==u))throw this.invalidCacheError();const v={type:"leaf",value:n,parent:c,branchKey:u};(o=c)===null||o===void 0||o.branches.set(u,v),this._root=(a=this._root)!==null&&a!==void 0?a:v,this._numLeafs++,this._onSet(v),i==null||(l=i.onNodeVisit)===null||l===void 0||l.call(i,v)};try{r()}catch(s){if(s instanceof G0)this.clear(),r();else throw s}}delete(e){const n=this.root();if(!n)return!1;if(e===n)return this._root=null,this._numLeafs=0,!0;let i=e.parent,r=e.branchKey;for(;i;){var s;if(i.branches.delete(r),i===n)return i.branches.size===0?(this._root=null,this._numLeafs=0):this._numLeafs--,!0;if(i.branches.size>0)break;r=(s=i)===null||s===void 0?void 0:s.branchKey,i=i.parent}for(;i!==n;i=i.parent)if(i==null)return!1;return this._numLeafs--,!0}clear(){this._numLeafs=0,this._root=null}invalidCacheError(){const e=dD()?"Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache.":"Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";throw cv(e+(this._name!=null?` - ${this._name}`:"")),new G0}}var hD={TreeCache:fD},pD=hD.TreeCache,KM=Object.freeze({__proto__:null,TreeCache:pD});class mD{constructor(e){var n;We(this,"_maxSize",void 0),We(this,"_size",void 0),We(this,"_head",void 0),We(this,"_tail",void 0),We(this,"_map",void 0),We(this,"_keyMapper",void 0),this._maxSize=e.maxSize,this._size=0,this._head=null,this._tail=null,this._map=new Map,this._keyMapper=(n=e.mapKey)!==null&&n!==void 0?n:i=>i}head(){return this._head}tail(){return this._tail}size(){return this._size}maxSize(){return this._maxSize}has(e){return this._map.has(this._keyMapper(e))}get(e){const n=this._keyMapper(e),i=this._map.get(n);if(i)return this.set(e,i.value),i.value}set(e,n){const i=this._keyMapper(e);this._map.get(i)&&this.delete(e);const s=this.head(),o={key:e,right:s,left:null,value:n};s?s.left=o:this._tail=o,this._map.set(i,o),this._head=o,this._size++,this._maybeDeleteLRU()}_maybeDeleteLRU(){this.size()>this.maxSize()&&this.deleteLru()}deleteLru(){const e=this.tail();e&&this.delete(e.key)}delete(e){const n=this._keyMapper(e);if(!this._size||!this._map.has(n))return;const i=Et(this._map.get(n)),r=i.right,s=i.left;r&&(r.left=i.left),s&&(s.right=i.right),i===this.head()&&(this._head=r),i===this.tail()&&(this._tail=s),this._map.delete(n),this._size--}clear(){this._size=0,this._head=null,this._tail=null,this._map=new Map}}var gD={LRUCache:mD},vD=gD.LRUCache,ZM=Object.freeze({__proto__:null,LRUCache:vD});const{LRUCache:_D}=ZM,{TreeCache:yD}=KM;function SD({name:t,maxSize:e,mapNodeValue:n=i=>i}){const i=new _D({maxSize:e}),r=new yD({name:t,mapNodeValue:n,onHit:s=>{i.set(s,!0)},onSet:s=>{const o=i.tail();i.set(s,!0),o&&r.size()>e&&r.delete(o.key)}});return r}var W0=SD;function si(t,e,n){if(typeof t=="string"&&!t.includes('"')&&!t.includes("\\"))return`"${t}"`;switch(typeof t){case"undefined":return"";case"boolean":return t?"true":"false";case"number":case"symbol":return String(t);case"string":return JSON.stringify(t);case"function":if((e==null?void 0:e.allowFunctions)!==!0)throw Ye("Attempt to serialize function in a Recoil cache key");return`__FUNCTION(${t.name})__`}if(t===null)return"null";if(typeof t!="object"){var i;return(i=JSON.stringify(t))!==null&&i!==void 0?i:""}if(_t(t))return"__PROMISE__";if(Array.isArray(t))return`[${t.map((r,s)=>si(r,e,s.toString()))}]`;if(typeof t.toJSON=="function")return si(t.toJSON(n),e,n);if(t instanceof Map){const r={};for(const[s,o]of t)r[typeof s=="string"?s:si(s,e)]=o;return si(r,e,n)}return t instanceof Set?si(Array.from(t).sort((r,s)=>si(r,e).localeCompare(si(s,e))),e,n):Symbol!==void 0&&t[Symbol.iterator]!=null&&typeof t[Symbol.iterator]=="function"?si(Array.from(t),e,n):`{${Object.keys(t).filter(r=>t[r]!==void 0).sort().map(r=>`${si(r,e)}:${si(t[r],e,r)}`).join(",")}}`}function ED(t,e={allowFunctions:!1}){return si(t,e)}var Rf=ED;const{TreeCache:xD}=KM,qc={equality:"reference",eviction:"keep-all",maxSize:1/0};function wD({equality:t=qc.equality,eviction:e=qc.eviction,maxSize:n=qc.maxSize}=qc,i){const r=MD(t);return TD(e,n,r,i)}function MD(t){switch(t){case"reference":return e=>e;case"value":return e=>Rf(e)}throw Ye(`Unrecognized equality policy ${t}`)}function TD(t,e,n,i){switch(t){case"keep-all":return new xD({name:i,mapNodeValue:n});case"lru":return W0({name:i,maxSize:Et(e),mapNodeValue:n});case"most-recent":return W0({name:i,maxSize:1,mapNodeValue:n})}throw Ye(`Unrecognized eviction policy ${t}`)}var RD=wD;function bD(t){return()=>null}var AD={startPerfBlock:bD};const{isLoadable:CD,loadableWithError:Yc,loadableWithPromise:PD,loadableWithValue:Ch}=uc,{WrappedValue:JM}=YM,{getNodeLoadable:Kc,peekNodeLoadable:LD,setNodeValue:ID}=Kr,{saveDepsToStore:ND}=fc,{DEFAULT_VALUE:DD,getConfigDeletionHandler:UD,getNode:OD,registerNode:$0}=bn,{isRecoilValue:kD}=sa,{markRecoilValueModified:j0}=Pi,{retainedByOptionWithDefault:FD}=js,{recoilCallback:BD}=qM,{startPerfBlock:zD}=AD;class QM{}const $a=new QM,ja=[],Zc=new Map,VD=(()=>{let t=0;return()=>t++})();function e1(t){let e=null;const{key:n,get:i,cachePolicy_UNSTABLE:r}=t,s=t.set!=null?t.set:void 0,o=new Set,a=RD(r??{equality:"reference",eviction:"keep-all"},n),l=FD(t.retainedBy_UNSTABLE),c=new Map;let u=0;function d(){return!dt("recoil_memory_managament_2020")||u>0}function h(M){return M.getState().knownSelectors.add(n),u++,()=>{u--}}function p(){return UD(n)!==void 0&&!d()}function m(M,U,O,q,$){ce(U,q,$),v(M,O)}function v(M,U){W(M,U)&&k(M),f(U,!0)}function g(M,U){W(M,U)&&(Et(b(M)).stateVersions.clear(),f(U,!1))}function f(M,U){const O=Zc.get(M);if(O!=null){for(const q of O)j0(q,Et(e));U&&Zc.delete(M)}}function _(M,U){let O=Zc.get(U);O==null&&Zc.set(U,O=new Set),O.add(M)}function y(M,U,O,q,$,pe){return U.then(Se=>{if(!d())throw k(M),$a;const fe=Ch(Se);return m(M,O,$,fe,q),Se}).catch(Se=>{if(!d())throw k(M),$a;if(_t(Se))return S(M,Se,O,q,$,pe);const fe=Yc(Se);throw m(M,O,$,fe,q),Se})}function S(M,U,O,q,$,pe){return U.then(Se=>{if(!d())throw k(M),$a;pe.loadingDepKey!=null&&pe.loadingDepPromise===U?O.atomValues.set(pe.loadingDepKey,Ch(Se)):M.getState().knownSelectors.forEach(z=>{O.atomValues.delete(z)});const fe=T(M,O);if(fe&&fe.state!=="loading"){if((W(M,$)||b(M)==null)&&v(M,$),fe.state==="hasValue")return fe.contents;throw fe.contents}if(!W(M,$)){const z=x(M,O);if(z!=null)return z.loadingLoadable.contents}const[Pe,Ie]=w(M,O,$);if(Pe.state!=="loading"&&m(M,O,$,Pe,Ie),Pe.state==="hasError")throw Pe.contents;return Pe.contents}).catch(Se=>{if(Se instanceof QM)throw $a;if(!d())throw k(M),$a;const fe=Yc(Se);throw m(M,O,$,fe,q),Se})}function E(M,U,O,q){var $,pe,Se,fe;if(W(M,q)||U.version===(($=M.getState())===null||$===void 0||(pe=$.currentTree)===null||pe===void 0?void 0:pe.version)||U.version===((Se=M.getState())===null||Se===void 0||(fe=Se.nextTree)===null||fe===void 0?void 0:fe.version)){var Pe,Ie,z;ND(n,O,M,(Pe=(Ie=M.getState())===null||Ie===void 0||(z=Ie.nextTree)===null||z===void 0?void 0:z.version)!==null&&Pe!==void 0?Pe:M.getState().currentTree.version)}for(const Be of O)o.add(Be)}function w(M,U,O){const q=zD(n);let $=!0,pe=!0;const Se=()=>{q(),pe=!1};let fe,Pe=!1,Ie;const z={loadingDepKey:null,loadingDepPromise:null},Be=new Map;function Re({key:we}){const ze=Kc(M,U,we);switch(Be.set(we,ze),$||(E(M,U,new Set(Be.keys()),O),g(M,O)),ze.state){case"hasValue":return ze.contents;case"hasError":throw ze.contents;case"loading":throw z.loadingDepKey=we,z.loadingDepPromise=ze.contents,ze.contents}throw Ye("Invalid Loadable state")}const Ne=we=>(...ze)=>{if(pe)throw Ye("Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.");return e==null&&al(!1),BD(M,we,ze,{node:e})};try{fe=i({get:Re,getCallback:Ne}),fe=kD(fe)?Re(fe):fe,CD(fe)&&(fe.state==="hasError"&&(Pe=!0),fe=fe.contents),_t(fe)?fe=y(M,fe,U,Be,O,z).finally(Se):Se(),fe=fe instanceof JM?fe.value:fe}catch(we){fe=we,_t(fe)?fe=S(M,fe,U,Be,O,z).finally(Se):(Pe=!0,Se())}return Pe?Ie=Yc(fe):_t(fe)?Ie=PD(fe):Ie=Ch(fe),$=!1,ue(M,O,Be),E(M,U,new Set(Be.keys()),O),[Ie,Be]}function T(M,U){let O=U.atomValues.get(n);if(O!=null)return O;const q=new Set;try{O=a.get(pe=>(typeof pe!="string"&&al(!1),Kc(M,U,pe).contents),{onNodeVisit:pe=>{pe.type==="branch"&&pe.nodeKey!==n&&q.add(pe.nodeKey)}})}catch(pe){throw Ye(`Problem with cache lookup for selector "${n}": ${pe.message}`)}if(O){var $;U.atomValues.set(n,O),E(M,U,q,($=b(M))===null||$===void 0?void 0:$.executionID)}return O}function I(M,U){const O=T(M,U);if(O!=null)return k(M),O;const q=x(M,U);if(q!=null){var $;return(($=q.loadingLoadable)===null||$===void 0?void 0:$.state)==="loading"&&_(M,q.executionID),q.loadingLoadable}const pe=VD(),[Se,fe]=w(M,U,pe);return Se.state==="loading"?(Q(M,pe,Se,fe,U),_(M,pe)):(k(M),ce(U,Se,fe)),Se}function x(M,U){const O=xM([c.has(M)?[Et(c.get(M))]:[],hf(pv(c,([$])=>$!==M),([,$])=>$)]);function q($){for(const[pe,Se]of $)if(!Kc(M,U,pe).is(Se))return!0;return!1}for(const $ of O){if($.stateVersions.get(U.version)||!q($.depValuesDiscoveredSoFarDuringAsyncWork))return $.stateVersions.set(U.version,!0),$;$.stateVersions.set(U.version,!1)}}function b(M){return c.get(M)}function Q(M,U,O,q,$){c.set(M,{depValuesDiscoveredSoFarDuringAsyncWork:q,executionID:U,loadingLoadable:O,stateVersions:new Map([[$.version,!0]])})}function ue(M,U,O){if(W(M,U)){const q=b(M);q!=null&&(q.depValuesDiscoveredSoFarDuringAsyncWork=O)}}function k(M){c.delete(M)}function W(M,U){var O;return U===((O=b(M))===null||O===void 0?void 0:O.executionID)}function J(M){return Array.from(M.entries()).map(([U,O])=>[U,O.contents])}function ce(M,U,O){M.atomValues.set(n,U);try{a.set(J(O),U)}catch(q){throw Ye(`Problem with setting cache for selector "${n}": ${q.message}`)}}function K(M){if(ja.includes(n)){const U=`Recoil selector has circular dependencies: ${ja.slice(ja.indexOf(n)).join(" → ")}`;return Yc(Ye(U))}ja.push(n);try{return M()}finally{ja.pop()}}function F(M,U){const O=U.atomValues.get(n);return O??a.get(q=>{var $;return typeof q!="string"&&al(!1),($=LD(M,U,q))===null||$===void 0?void 0:$.contents})}function j(M,U){return K(()=>I(M,U))}function H(M){M.atomValues.delete(n)}function ae(M,U){e==null&&al(!1);for(const q of o){var O;const $=OD(q);(O=$.clearCache)===null||O===void 0||O.call($,M,U)}o.clear(),H(U),a.clear(),j0(M,e)}return s!=null?e=$0({key:n,nodeType:"selector",peek:F,get:j,set:(U,O,q)=>{let $=!1;const pe=new Map;function Se({key:z}){if($)throw Ye("Recoil: Async selector sets are not currently supported.");const Be=Kc(U,O,z);if(Be.state==="hasValue")return Be.contents;if(Be.state==="loading"){const Re=`Getting value of asynchronous atom or selector "${z}" in a pending state while setting selector "${n}" is not yet supported.`;throw Ye(Re)}else throw Be.contents}function fe(z,Be){if($)throw Ye("Recoil: Async selector sets are not currently supported.");const Re=typeof Be=="function"?Be(Se(z)):Be;ID(U,O,z.key,Re).forEach((we,ze)=>pe.set(ze,we))}function Pe(z){fe(z,DD)}const Ie=s({set:fe,get:Se,reset:Pe},q);if(Ie!==void 0)throw _t(Ie)?Ye("Recoil: Async selector sets are not currently supported."):Ye("Recoil: selector set should be a void function.");return $=!0,pe},init:h,invalidate:H,clearCache:ae,shouldDeleteConfigOnRelease:p,dangerouslyAllowMutability:t.dangerouslyAllowMutability,shouldRestoreFromSnapshots:!1,retainedBy:l}):e=$0({key:n,nodeType:"selector",peek:F,get:j,init:h,invalidate:H,clearCache:ae,shouldDeleteConfigOnRelease:p,dangerouslyAllowMutability:t.dangerouslyAllowMutability,shouldRestoreFromSnapshots:!1,retainedBy:l})}e1.value=t=>new JM(t);var la=e1;const{isLoadable:HD,loadableWithError:Ph,loadableWithPromise:Lh,loadableWithValue:Zs}=uc,{WrappedValue:t1}=YM,{peekNodeInfo:GD}=Kr,{DEFAULT_VALUE:ps,DefaultValue:yr,getConfigDeletionHandler:n1,registerNode:WD,setConfigDeletionHandler:$D}=bn,{isRecoilValue:jD}=sa,{getRecoilValueAsLoadable:XD,markRecoilValueModified:qD,setRecoilValue:X0,setRecoilValueLoadable:YD}=Pi,{retainedByOptionWithDefault:KD}=js,Xa=t=>t instanceof t1?t.value:t;function ZD(t){const{key:e,persistence_UNSTABLE:n}=t,i=KD(t.retainedBy_UNSTABLE);let r=0;function s(_){return Lh(_.then(y=>(o=Zs(y),y)).catch(y=>{throw o=Ph(y),y}))}let o=_t(t.default)?s(t.default):HD(t.default)?t.default.state==="loading"?s(t.default.contents):t.default:Zs(Xa(t.default));o.contents;let a;const l=new Map;function c(_){return _}function u(_,y){const S=y.then(E=>{var w,T;return((T=((w=_.getState().nextTree)!==null&&w!==void 0?w:_.getState().currentTree).atomValues.get(e))===null||T===void 0?void 0:T.contents)===S&&X0(_,f,E),E}).catch(E=>{var w,T;throw((T=((w=_.getState().nextTree)!==null&&w!==void 0?w:_.getState().currentTree).atomValues.get(e))===null||T===void 0?void 0:T.contents)===S&&YD(_,f,Ph(E)),E});return S}function d(_,y,S){var E;r++;const w=()=>{var k;r--,(k=l.get(_))===null||k===void 0||k.forEach(W=>W()),l.delete(_)};if(_.getState().knownAtoms.add(e),o.state==="loading"){const k=()=>{var W;((W=_.getState().nextTree)!==null&&W!==void 0?W:_.getState().currentTree).atomValues.has(e)||qD(_,f)};o.contents.finally(k)}const T=(E=t.effects)!==null&&E!==void 0?E:t.effects_UNSTABLE;if(T!=null){let K=function(U){if(W&&U.key===e){const O=k;return O instanceof yr?h(_,y):_t(O)?Lh(O.then(q=>q instanceof yr?o.toPromise():q)):Zs(O)}return XD(_,U)},F=function(U){return K(U).toPromise()},j=function(U){var O;const q=GD(_,(O=_.getState().nextTree)!==null&&O!==void 0?O:_.getState().currentTree,U.key);return W&&U.key===e&&!(k instanceof yr)?{...q,isSet:!0,loadable:K(U)}:q};var b=K,Q=F,ue=j;let k=ps,W=!0,J=!1,ce=null;const H=U=>O=>{if(W){const q=K(f),$=q.state==="hasValue"?q.contents:ps;k=typeof O=="function"?O($):O,_t(k)&&(k=k.then(pe=>(ce={effect:U,value:pe},pe)))}else{if(_t(O))throw Ye("Setting atoms to async values is not implemented.");typeof O!="function"&&(ce={effect:U,value:Xa(O)}),X0(_,f,typeof O=="function"?q=>{const $=Xa(O(q));return ce={effect:U,value:$},$}:Xa(O))}},ae=U=>()=>H(U)(ps),M=U=>O=>{var q;const{release:$}=_.subscribeToTransactions(pe=>{var Se;let{currentTree:fe,previousTree:Pe}=pe.getState();Pe||(Pe=fe);const Ie=(Se=fe.atomValues.get(e))!==null&&Se!==void 0?Se:o;if(Ie.state==="hasValue"){var z,Be,Re,Ne;const we=Ie.contents,ze=(z=Pe.atomValues.get(e))!==null&&z!==void 0?z:o,He=ze.state==="hasValue"?ze.contents:ps;((Be=ce)===null||Be===void 0?void 0:Be.effect)!==U||((Re=ce)===null||Re===void 0?void 0:Re.value)!==we?O(we,He,!fe.atomValues.has(e)):((Ne=ce)===null||Ne===void 0?void 0:Ne.effect)===U&&(ce=null)}},e);l.set(_,[...(q=l.get(_))!==null&&q!==void 0?q:[],$])};for(const U of T)try{const O=U({node:f,storeID:_.storeID,parentStoreID_UNSTABLE:_.parentStoreID,trigger:S,setSelf:H(U),resetSelf:ae(U),onSet:M(U),getPromise:F,getLoadable:K,getInfo_UNSTABLE:j});if(O!=null){var I;l.set(_,[...(I=l.get(_))!==null&&I!==void 0?I:[],O])}}catch(O){k=O,J=!0}if(W=!1,!(k instanceof yr)){var x;const U=J?Ph(k):_t(k)?Lh(u(_,k)):Zs(Xa(k));U.contents,y.atomValues.set(e,U),(x=_.getState().nextTree)===null||x===void 0||x.atomValues.set(e,U)}}return w}function h(_,y){var S,E;return(S=(E=y.atomValues.get(e))!==null&&E!==void 0?E:a)!==null&&S!==void 0?S:o}function p(_,y){if(y.atomValues.has(e))return Et(y.atomValues.get(e));if(y.nonvalidatedAtoms.has(e)){if(a!=null)return a;if(n==null)return o;const S=y.nonvalidatedAtoms.get(e),E=n.validator(S,ps);return a=E instanceof yr?o:Zs(E),a}else return o}function m(){a=void 0}function v(_,y,S){if(y.atomValues.has(e)){const E=Et(y.atomValues.get(e));if(E.state==="hasValue"&&S===E.contents)return new Map}else if(!y.nonvalidatedAtoms.has(e)&&S instanceof yr)return new Map;return a=void 0,new Map().set(e,Zs(S))}function g(){return n1(e)!==void 0&&r<=0}const f=WD({key:e,nodeType:"atom",peek:h,get:p,set:v,init:d,invalidate:m,shouldDeleteConfigOnRelease:g,dangerouslyAllowMutability:t.dangerouslyAllowMutability,persistence_UNSTABLE:t.persistence_UNSTABLE?{type:t.persistence_UNSTABLE.type,backButton:t.persistence_UNSTABLE.backButton}:void 0,shouldRestoreFromSnapshots:!0,retainedBy:i});return f}function Mv(t){const{...e}=t,n="default"in t?t.default:new Promise(()=>{});return jD(n)?JD({...e,default:n}):ZD({...e,default:n})}function JD(t){const e=Mv({...t,default:ps,persistence_UNSTABLE:t.persistence_UNSTABLE===void 0?void 0:{...t.persistence_UNSTABLE,validator:i=>i instanceof yr?i:Et(t.persistence_UNSTABLE).validator(i,ps)},effects:t.effects,effects_UNSTABLE:t.effects_UNSTABLE}),n=la({key:`${t.key}__withFallback`,get:({get:i})=>{const r=i(e);return r instanceof yr?t.default:r},set:({set:i},r)=>i(e,r),cachePolicy_UNSTABLE:{eviction:"most-recent"},dangerouslyAllowMutability:t.dangerouslyAllowMutability});return $D(n.key,n1(t.key)),n}Mv.value=t=>new t1(t);var i1=Mv;class QD{constructor(e){var n;We(this,"_map",void 0),We(this,"_keyMapper",void 0),this._map=new Map,this._keyMapper=(n=e==null?void 0:e.mapKey)!==null&&n!==void 0?n:i=>i}size(){return this._map.size}has(e){return this._map.has(this._keyMapper(e))}get(e){return this._map.get(this._keyMapper(e))}set(e,n){this._map.set(this._keyMapper(e),n)}delete(e){this._map.delete(this._keyMapper(e))}clear(){this._map.clear()}}var eU={MapCache:QD},tU=eU.MapCache,nU=Object.freeze({__proto__:null,MapCache:tU});const{LRUCache:q0}=ZM,{MapCache:iU}=nU,Jc={equality:"reference",eviction:"none",maxSize:1/0};function rU({equality:t=Jc.equality,eviction:e=Jc.eviction,maxSize:n=Jc.maxSize}=Jc){const i=sU(t);return oU(e,n,i)}function sU(t){switch(t){case"reference":return e=>e;case"value":return e=>Rf(e)}throw Ye(`Unrecognized equality policy ${t}`)}function oU(t,e,n){switch(t){case"keep-all":return new iU({mapKey:n});case"lru":return new q0({mapKey:n,maxSize:Et(e)});case"most-recent":return new q0({mapKey:n,maxSize:1})}throw Ye(`Unrecognized eviction policy ${t}`)}var r1=rU;const{setConfigDeletionHandler:aU}=bn;function lU(t){var e,n;const i=r1({equality:(e=(n=t.cachePolicyForParams_UNSTABLE)===null||n===void 0?void 0:n.equality)!==null&&e!==void 0?e:"value",eviction:"keep-all"});return r=>{var s,o;const a=i.get(r);if(a!=null)return a;const{cachePolicyForParams_UNSTABLE:l,...c}=t,u="default"in t?t.default:new Promise(()=>{}),d=i1({...c,key:`${t.key}__${(s=Rf(r))!==null&&s!==void 0?s:"void"}`,default:typeof u=="function"?u(r):u,retainedBy_UNSTABLE:typeof t.retainedBy_UNSTABLE=="function"?t.retainedBy_UNSTABLE(r):t.retainedBy_UNSTABLE,effects:typeof t.effects=="function"?t.effects(r):typeof t.effects_UNSTABLE=="function"?t.effects_UNSTABLE(r):(o=t.effects)!==null&&o!==void 0?o:t.effects_UNSTABLE});return i.set(r,d),aU(d.key,()=>{i.delete(r)}),d}}var cU=lU;const{setConfigDeletionHandler:uU}=bn;let dU=0;function fU(t){var e,n;const i=r1({equality:(e=(n=t.cachePolicyForParams_UNSTABLE)===null||n===void 0?void 0:n.equality)!==null&&e!==void 0?e:"value",eviction:"keep-all"});return r=>{var s;let o;try{o=i.get(r)}catch(h){throw Ye(`Problem with cache lookup for selector ${t.key}: ${h.message}`)}if(o!=null)return o;const a=`${t.key}__selectorFamily/${(s=Rf(r,{allowFunctions:!0}))!==null&&s!==void 0?s:"void"}/${dU++}`,l=h=>t.get(r)(h),c=t.cachePolicy_UNSTABLE,u=typeof t.retainedBy_UNSTABLE=="function"?t.retainedBy_UNSTABLE(r):t.retainedBy_UNSTABLE;let d;if(t.set!=null){const h=t.set;d=la({key:a,get:l,set:(m,v)=>h(r)(m,v),cachePolicy_UNSTABLE:c,dangerouslyAllowMutability:t.dangerouslyAllowMutability,retainedBy_UNSTABLE:u})}else d=la({key:a,get:l,cachePolicy_UNSTABLE:c,dangerouslyAllowMutability:t.dangerouslyAllowMutability,retainedBy_UNSTABLE:u});return i.set(r,d),uU(d.key,()=>{i.delete(r)}),d}}var Zr=fU;const hU=Zr({key:"__constant",get:t=>()=>t,cachePolicyForParams_UNSTABLE:{equality:"reference"}});function pU(t){return hU(t)}var mU=pU;const gU=Zr({key:"__error",get:t=>()=>{throw Ye(t)},cachePolicyForParams_UNSTABLE:{equality:"reference"}});function vU(t){return gU(t)}var _U=vU;function yU(t){return t}var SU=yU;const{loadableWithError:s1,loadableWithPromise:o1,loadableWithValue:a1}=uc;function bf(t,e){const n=Array(e.length).fill(void 0),i=Array(e.length).fill(void 0);for(const[r,s]of e.entries())try{n[r]=t(s)}catch(o){i[r]=o}return[n,i]}function EU(t){return t!=null&&!_t(t)}function Af(t){return Array.isArray(t)?t:Object.getOwnPropertyNames(t).map(e=>t[e])}function Lm(t,e){return Array.isArray(t)?e:Object.getOwnPropertyNames(t).reduce((n,i,r)=>({...n,[i]:e[r]}),{})}function $o(t,e,n){const i=n.map((r,s)=>r==null?a1(e[s]):_t(r)?o1(r):s1(r));return Lm(t,i)}function xU(t,e){return e.map((n,i)=>n===void 0?t[i]:n)}const wU=Zr({key:"__waitForNone",get:t=>({get:e})=>{const n=Af(t),[i,r]=bf(e,n);return $o(t,i,r)},dangerouslyAllowMutability:!0}),MU=Zr({key:"__waitForAny",get:t=>({get:e})=>{const n=Af(t),[i,r]=bf(e,n);return r.some(s=>!_t(s))?$o(t,i,r):new Promise(s=>{for(const[o,a]of r.entries())_t(a)&&a.then(l=>{i[o]=l,r[o]=void 0,s($o(t,i,r))}).catch(l=>{r[o]=l,s($o(t,i,r))})})},dangerouslyAllowMutability:!0}),TU=Zr({key:"__waitForAll",get:t=>({get:e})=>{const n=Af(t),[i,r]=bf(e,n);if(r.every(o=>o==null))return Lm(t,i);const s=r.find(EU);if(s!=null)throw s;return Promise.all(r).then(o=>Lm(t,xU(i,o)))},dangerouslyAllowMutability:!0}),RU=Zr({key:"__waitForAllSettled",get:t=>({get:e})=>{const n=Af(t),[i,r]=bf(e,n);return r.every(s=>!_t(s))?$o(t,i,r):Promise.all(r.map((s,o)=>_t(s)?s.then(a=>{i[o]=a,r[o]=void 0}).catch(a=>{i[o]=void 0,r[o]=a}):null)).then(()=>$o(t,i,r))},dangerouslyAllowMutability:!0}),bU=Zr({key:"__noWait",get:t=>({get:e})=>{try{return la.value(a1(e(t)))}catch(n){return la.value(_t(n)?o1(n):s1(n))}},dangerouslyAllowMutability:!0});var AU={waitForNone:wU,waitForAny:MU,waitForAll:TU,waitForAllSettled:RU,noWait:bU};const{RecoilLoadable:CU}=uc,{DefaultValue:PU}=bn,{RecoilRoot:LU,useRecoilStoreID:IU}=ar,{isRecoilValue:NU}=sa,{retentionZone:DU}=mf,{freshSnapshot:UU}=Ef,{useRecoilState:OU,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:kU,useRecoilStateLoadable:FU,useRecoilValue:BU,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:zU,useRecoilValueLoadable:VU,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:HU,useResetRecoilState:GU,useSetRecoilState:WU}=eN,{useGotoRecoilSnapshot:$U,useRecoilSnapshot:jU,useRecoilTransactionObserver:XU}=WM,{useRecoilCallback:qU}=qM,{noWait:YU,waitForAll:KU,waitForAllSettled:ZU,waitForAny:JU,waitForNone:QU}=AU;var Tv={DefaultValue:PU,isRecoilValue:NU,RecoilLoadable:CU,RecoilEnv:Ta,RecoilRoot:LU,useRecoilStoreID:IU,useRecoilBridgeAcrossReactRoots_UNSTABLE:bN,atom:i1,selector:la,atomFamily:cU,selectorFamily:Zr,constSelector:mU,errorSelector:_U,readOnlySelector:SU,noWait:YU,waitForNone:QU,waitForAny:JU,waitForAll:KU,waitForAllSettled:ZU,useRecoilValue:BU,useRecoilValueLoadable:VU,useRecoilState:OU,useRecoilStateLoadable:FU,useSetRecoilState:WU,useResetRecoilState:GU,useGetRecoilValueInfo_UNSTABLE:EN,useRecoilRefresher_UNSTABLE:nD,useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE:HU,useRecoilValue_TRANSITION_SUPPORT_UNSTABLE:zU,useRecoilState_TRANSITION_SUPPORT_UNSTABLE:kU,useRecoilCallback:qU,useRecoilTransaction_UNSTABLE:aD,useGotoRecoilSnapshot:$U,useRecoilSnapshot:jU,useRecoilTransactionObserver_UNSTABLE:XU,snapshot_UNSTABLE:UU,useRetain:yv,retentionZone:DU},e3=Tv.RecoilRoot,Jr=Tv.atom,Nn=Tv.useRecoilState;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rv="153",Js={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},t3=0,Y0=1,n3=2,l1=1,i3=2,Vi=3,jr=0,mn=1,wi=2,Br=0,jo=1,Im=2,K0=3,Z0=4,r3=5,wo=100,s3=101,o3=102,J0=103,Q0=104,a3=200,l3=201,c3=202,u3=203,c1=204,u1=205,d3=206,f3=207,h3=208,p3=209,m3=210,g3=0,v3=1,_3=2,Nm=3,y3=4,S3=5,E3=6,x3=7,bv=0,w3=1,M3=2,Ji=0,T3=1,R3=2,b3=3,A3=4,C3=5,d1=300,ca=301,ua=302,Dm=303,Um=304,Cf=306,Om=1e3,ci=1001,km=1002,fn=1003,ey=1004,Ih=1005,wt=1006,P3=1007,Xl=1008,zr=1009,L3=1010,I3=1011,Av=1012,f1=1013,Ar=1014,Cr=1015,Qi=1016,h1=1017,p1=1018,Ms=1020,N3=1021,ui=1023,D3=1024,U3=1025,Ts=1026,da=1027,O3=1028,m1=1029,k3=1030,g1=1031,v1=1033,Nh=33776,Dh=33777,Uh=33778,Oh=33779,ty=35840,ny=35841,iy=35842,ry=35843,F3=36196,sy=37492,oy=37496,ay=37808,ly=37809,cy=37810,uy=37811,dy=37812,fy=37813,hy=37814,py=37815,my=37816,gy=37817,vy=37818,_y=37819,yy=37820,Sy=37821,kh=36492,B3=36283,Ey=36284,xy=36285,wy=36286,_1=3e3,Rs=3001,z3=3200,V3=3201,Cv=0,H3=1,bs="",je="srgb",Ci="srgb-linear",y1="display-p3",Fh=7680,G3=519,W3=512,$3=513,j3=514,X3=515,q3=516,Y3=517,K3=518,Z3=519,Fm=35044,My="300 es",Bm=1035,qi=2e3,Ad=2001;class Xs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bh=Math.PI/180,zm=180/Math.PI;function Vr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function hn(t,e,n){return Math.max(e,Math.min(n,t))}function J3(t,e){return(t%e+e)%e}function zh(t,e,n){return(1-n)*t+n*e}function Ty(t){return(t&t-1)===0&&t!==0}function Vm(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Pr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ht(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ce{constructor(e=0,n=0){Ce.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,n,i,r,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],m=i[8],v=r[0],g=r[3],f=r[6],_=r[1],y=r[4],S=r[7],E=r[2],w=r[5],T=r[8];return s[0]=o*v+a*_+l*E,s[3]=o*g+a*y+l*w,s[6]=o*f+a*S+l*T,s[1]=c*v+u*_+d*E,s[4]=c*g+u*y+d*w,s[7]=c*f+u*S+d*T,s[2]=h*v+p*_+m*E,s[5]=h*g+p*y+m*w,s[8]=h*f+p*S+m*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,m=n*d+i*h+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=d*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Vh.makeScale(e,n)),this}rotate(e){return this.premultiply(Vh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Vh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vh=new Ze;function S1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ql(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Ry={};function Tl(t){t in Ry||(Ry[t]=!0,console.warn(t))}function Xo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Hh(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Q3=new Ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),eO=new Ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function tO(t){return t.convertSRGBToLinear().applyMatrix3(eO)}function nO(t){return t.applyMatrix3(Q3).convertLinearToSRGB()}const iO={[Ci]:t=>t,[je]:t=>t.convertSRGBToLinear(),[y1]:tO},rO={[Ci]:t=>t,[je]:t=>t.convertLinearToSRGB(),[y1]:nO},ti={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Ci},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=iO[e],r=rO[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let eo;class E1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{eo===void 0&&(eo=ql("canvas")),eo.width=e.width,eo.height=e.height;const i=eo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=eo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ql("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Xo(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Xo(n[i]/255)*255):n[i]=Xo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sO=0;class x1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sO++}),this.uuid=Vr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Gh(r[o].image)):s.push(Gh(r[o]))}else s=Gh(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Gh(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?E1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oO=0;class gn extends Xs{constructor(e=gn.DEFAULT_IMAGE,n=gn.DEFAULT_MAPPING,i=ci,r=ci,s=wt,o=Xl,a=ui,l=zr,c=gn.DEFAULT_ANISOTROPY,u=bs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oO++}),this.uuid=Vr(),this.name="",this.source=new x1(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Tl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Rs?je:bs),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==d1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Om:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case km:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Om:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case km:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Tl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===je?Rs:_1}set encoding(e){Tl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Rs?je:bs}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=d1;gn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,n=0,i=0,r=1){Kt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],m=l[9],v=l[2],g=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,S=(p+1)/2,E=(f+1)/2,w=(u+h)/4,T=(d+v)/4,I=(m+g)/4;return y>S&&y>E?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=T/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=I/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=T/s,r=I/s),this.set(i,r,s,n),this}let _=Math.sqrt((g-m)*(g-m)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(d-v)/_,this.z=(h-u)/_,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hi extends Xs{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Kt(0,0,e,n),this.scissorTest=!1,this.viewport=new Kt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Tl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Rs?je:bs),this.texture=new gn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:wt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new x1(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class w1 extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class aO extends gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],m=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=m,e[n+3]=v;return}if(d!==v||l!==h||c!==p||u!==m){let g=1-a;const f=l*h+c*p+u*m+d*v,_=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const E=Math.sqrt(y),w=Math.atan2(E,f*_);g=Math.sin(g*w)/E,a=Math.sin(a*w)/E}const S=a*_;if(l=l*g+h*S,c=c*g+p*S,u=u*g+m*S,d=d*g+v*S,g===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=E,c*=E,u*=E,d*=E}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],m=s[o+3];return e[n]=a*m+u*d+l*p-c*h,e[n+1]=l*m+u*h+c*d-a*p,e[n+2]=c*m+u*p+a*h-l*d,e[n+3]=u*m-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*m,this._y=c*p*d-h*u*m,this._z=c*u*m+h*p*d,this._w=c*u*d-h*p*m;break;case"YXZ":this._x=h*u*d+c*p*m,this._y=c*p*d-h*u*m,this._z=c*u*m-h*p*d,this._w=c*u*d+h*p*m;break;case"ZXY":this._x=h*u*d-c*p*m,this._y=c*p*d+h*u*m,this._z=c*u*m+h*p*d,this._w=c*u*d-h*p*m;break;case"ZYX":this._x=h*u*d-c*p*m,this._y=c*p*d+h*u*m,this._z=c*u*m-h*p*d,this._w=c*u*d+h*p*m;break;case"YZX":this._x=h*u*d+c*p*m,this._y=c*p*d+h*u*m,this._z=c*u*m-h*p*d,this._w=c*u*d-h*p*m;break;case"XZY":this._x=h*u*d-c*p*m,this._y=c*p*d-h*u*m,this._z=c*u*m+h*p*d,this._w=c*u*d+h*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(by.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(by.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*n+o*r-a*i,u=l*i+a*n-s*r,d=l*r+s*i-o*n,h=-s*n-o*i-a*r;return this.x=c*l+h*-s+u*-a-d*-o,this.y=u*l+h*-o+d*-s-c*-a,this.z=d*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wh.copy(this).projectOnVector(e),this.sub(Wh)}reflect(e){return this.sub(Wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wh=new V,by=new Fs;class gc{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),to.copy(e.boundingBox),to.applyMatrix4(e.matrixWorld),this.union(to);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Oi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Oi)}else r.boundingBox===null&&r.computeBoundingBox(),to.copy(r.boundingBox),to.applyMatrix4(e.matrixWorld),this.union(to)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qa),Qc.subVectors(this.max,qa),no.subVectors(e.a,qa),io.subVectors(e.b,qa),ro.subVectors(e.c,qa),ur.subVectors(io,no),dr.subVectors(ro,io),ss.subVectors(no,ro);let n=[0,-ur.z,ur.y,0,-dr.z,dr.y,0,-ss.z,ss.y,ur.z,0,-ur.x,dr.z,0,-dr.x,ss.z,0,-ss.x,-ur.y,ur.x,0,-dr.y,dr.x,0,-ss.y,ss.x,0];return!$h(n,no,io,ro,Qc)||(n=[1,0,0,0,1,0,0,0,1],!$h(n,no,io,ro,Qc))?!1:(eu.crossVectors(ur,dr),n=[eu.x,eu.y,eu.z],$h(n,no,io,ro,Qc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new V,new V,new V,new V,new V,new V,new V,new V],Oi=new V,to=new gc,no=new V,io=new V,ro=new V,ur=new V,dr=new V,ss=new V,qa=new V,Qc=new V,eu=new V,os=new V;function $h(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){os.fromArray(t,s);const a=r.x*Math.abs(os.x)+r.y*Math.abs(os.y)+r.z*Math.abs(os.z),l=e.dot(os),c=n.dot(os),u=i.dot(os);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const lO=new gc,Ya=new V,jh=new V;class Pv{constructor(e=new V,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):lO.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ya.subVectors(e,this.center);const n=Ya.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ya,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ya.copy(e.center).add(jh)),this.expandByPoint(Ya.copy(e.center).sub(jh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new V,Xh=new V,tu=new V,fr=new V,qh=new V,nu=new V,Yh=new V;class M1{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Xh.copy(e).add(n).multiplyScalar(.5),tu.copy(n).sub(e).normalize(),fr.copy(this.origin).sub(Xh);const s=e.distanceTo(n)*.5,o=-this.direction.dot(tu),a=fr.dot(this.direction),l=-fr.dot(tu),c=fr.lengthSq(),u=Math.abs(1-o*o);let d,h,p,m;if(u>0)if(d=o*l-a,h=o*a-l,m=s*u,d>=0)if(h>=-m)if(h<=m){const v=1/u;d*=v,h*=v,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Xh).addScaledVector(tu,h),p}intersectSphere(e,n){ki.subVectors(e.center,this.origin);const i=ki.dot(this.direction),r=ki.dot(ki)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,i,r,s){qh.subVectors(n,e),nu.subVectors(i,e),Yh.crossVectors(qh,nu);let o=this.direction.dot(Yh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fr.subVectors(this.origin,e);const l=a*this.direction.dot(nu.crossVectors(fr,nu));if(l<0)return null;const c=a*this.direction.dot(qh.cross(fr));if(c<0||l+c>o)return null;const u=-a*fr.dot(Yh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,n,i,r,s,o,a,l,c,u,d,h,p,m,v,g){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,h,p,m,v,g)}set(e,n,i,r,s,o,a,l,c,u,d,h,p,m,v,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=m,f[11]=v,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/so.setFromMatrixColumn(e,0).length(),s=1/so.setFromMatrixColumn(e,1).length(),o=1/so.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,m=a*u,v=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+m*c,n[5]=h-v*c,n[9]=-a*l,n[2]=v-h*c,n[6]=m+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,m=c*u,v=c*d;n[0]=h+v*a,n[4]=m*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-m,n[6]=v+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,m=c*u,v=c*d;n[0]=h-v*a,n[4]=-o*d,n[8]=m+p*a,n[1]=p+m*a,n[5]=o*u,n[9]=v-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,m=a*u,v=a*d;n[0]=l*u,n[4]=m*c-p,n[8]=h*c+v,n[1]=l*d,n[5]=v*c+h,n[9]=p*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,m=a*l,v=a*c;n[0]=l*u,n[4]=v-h*d,n[8]=m*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+m,n[10]=h-v*d}else if(e.order==="XZY"){const h=o*l,p=o*c,m=a*l,v=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+v,n[5]=o*u,n[9]=p*d-m,n[2]=m*d-p,n[6]=a*u,n[10]=v*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cO,e,uO)}lookAt(e,n,i){const r=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),hr.crossVectors(i,Cn),hr.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),hr.crossVectors(i,Cn)),hr.normalize(),iu.crossVectors(Cn,hr),r[0]=hr.x,r[4]=iu.x,r[8]=Cn.x,r[1]=hr.y,r[5]=iu.y,r[9]=Cn.y,r[2]=hr.z,r[6]=iu.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],m=i[2],v=i[6],g=i[10],f=i[14],_=i[3],y=i[7],S=i[11],E=i[15],w=r[0],T=r[4],I=r[8],x=r[12],b=r[1],Q=r[5],ue=r[9],k=r[13],W=r[2],J=r[6],ce=r[10],K=r[14],F=r[3],j=r[7],H=r[11],ae=r[15];return s[0]=o*w+a*b+l*W+c*F,s[4]=o*T+a*Q+l*J+c*j,s[8]=o*I+a*ue+l*ce+c*H,s[12]=o*x+a*k+l*K+c*ae,s[1]=u*w+d*b+h*W+p*F,s[5]=u*T+d*Q+h*J+p*j,s[9]=u*I+d*ue+h*ce+p*H,s[13]=u*x+d*k+h*K+p*ae,s[2]=m*w+v*b+g*W+f*F,s[6]=m*T+v*Q+g*J+f*j,s[10]=m*I+v*ue+g*ce+f*H,s[14]=m*x+v*k+g*K+f*ae,s[3]=_*w+y*b+S*W+E*F,s[7]=_*T+y*Q+S*J+E*j,s[11]=_*I+y*ue+S*ce+E*H,s[15]=_*x+y*k+S*K+E*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],m=e[3],v=e[7],g=e[11],f=e[15];return m*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+v*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+g*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-n*l*d+n*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],m=e[12],v=e[13],g=e[14],f=e[15],_=d*g*c-v*h*c+v*l*p-a*g*p-d*l*f+a*h*f,y=m*h*c-u*g*c-m*l*p+o*g*p+u*l*f-o*h*f,S=u*v*c-m*d*c+m*a*p-o*v*p-u*a*f+o*d*f,E=m*d*l-u*v*l-m*a*h+o*v*h+u*a*g-o*d*g,w=n*_+i*y+r*S+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=_*T,e[1]=(v*h*s-d*g*s-v*r*p+i*g*p+d*r*f-i*h*f)*T,e[2]=(a*g*s-v*l*s+v*r*c-i*g*c-a*r*f+i*l*f)*T,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*T,e[4]=y*T,e[5]=(u*g*s-m*h*s+m*r*p-n*g*p-u*r*f+n*h*f)*T,e[6]=(m*l*s-o*g*s-m*r*c+n*g*c+o*r*f-n*l*f)*T,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*T,e[8]=S*T,e[9]=(m*d*s-u*v*s-m*i*p+n*v*p+u*i*f-n*d*f)*T,e[10]=(o*v*s-m*a*s+m*i*c-n*v*c-o*i*f+n*a*f)*T,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*T,e[12]=E*T,e[13]=(u*v*r-m*d*r+m*i*h-n*v*h-u*i*g+n*d*g)*T,e[14]=(m*a*r-o*v*r-m*i*l+n*v*l+o*i*g-n*a*g)*T,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,m=s*d,v=o*u,g=o*d,f=a*d,_=l*c,y=l*u,S=l*d,E=i.x,w=i.y,T=i.z;return r[0]=(1-(v+f))*E,r[1]=(p+S)*E,r[2]=(m-y)*E,r[3]=0,r[4]=(p-S)*w,r[5]=(1-(h+f))*w,r[6]=(g+_)*w,r[7]=0,r[8]=(m+y)*T,r[9]=(g-_)*T,r[10]=(1-(h+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=so.set(r[0],r[1],r[2]).length();const o=so.set(r[4],r[5],r[6]).length(),a=so.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ni.copy(this);const c=1/s,u=1/o,d=1/a;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=d,ni.elements[9]*=d,ni.elements[10]*=d,n.setFromRotationMatrix(ni),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=qi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,m;if(a===qi)p=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===Ad)p=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=qi){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),h=(n+e)*c,p=(i+r)*u;let m,v;if(a===qi)m=(o+s)*d,v=-2*d;else if(a===Ad)m=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const so=new V,ni=new qt,cO=new V(0,0,0),uO=new V(1,1,1),hr=new V,iu=new V,Cn=new V,Ay=new qt,Cy=new Fs;class Pf{constructor(e=0,n=0,i=0,r=Pf.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(hn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-hn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(hn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ay.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ay,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Cy.setFromEuler(this),this.setFromQuaternion(Cy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pf.DEFAULT_ORDER="XYZ";class Lv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dO=0;const Py=new V,oo=new Fs,Fi=new qt,ru=new V,Ka=new V,fO=new V,hO=new Fs,Ly=new V(1,0,0),Iy=new V(0,1,0),Ny=new V(0,0,1),pO={type:"added"},Dy={type:"removed"};class vn extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dO++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new V,n=new Pf,i=new Fs,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new Ze}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Lv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return oo.setFromAxisAngle(e,n),this.quaternion.multiply(oo),this}rotateOnWorldAxis(e,n){return oo.setFromAxisAngle(e,n),this.quaternion.premultiply(oo),this}rotateX(e){return this.rotateOnAxis(Ly,e)}rotateY(e){return this.rotateOnAxis(Iy,e)}rotateZ(e){return this.rotateOnAxis(Ny,e)}translateOnAxis(e,n){return Py.copy(e).applyQuaternion(this.quaternion),this.position.add(Py.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ly,e)}translateY(e){return this.translateOnAxis(Iy,e)}translateZ(e){return this.translateOnAxis(Ny,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ru.copy(e):ru.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Ka,ru,this.up):Fi.lookAt(ru,Ka,this.up),this.quaternion.setFromRotationMatrix(Fi),r&&(Fi.extractRotation(r.matrixWorld),oo.setFromRotationMatrix(Fi),this.quaternion.premultiply(oo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(pO)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Dy)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Dy)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,e,fO),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,hO,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vn.DEFAULT_UP=new V(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new V,Bi=new V,Kh=new V,zi=new V,ao=new V,lo=new V,Uy=new V,Zh=new V,Jh=new V,Qh=new V;let su=!1;class Gn{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ii.subVectors(e,n),r.cross(ii);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ii.subVectors(r,n),Bi.subVectors(i,n),Kh.subVectors(e,n);const o=ii.dot(ii),a=ii.dot(Bi),l=ii.dot(Kh),c=Bi.dot(Bi),u=Bi.dot(Kh),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const h=1/d,p=(c*l-a*u)*h,m=(o*u-a*l)*h;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,zi),zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getUV(e,n,i,r,s,o,a,l){return su===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),su=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,zi),l.setScalar(0),l.addScaledVector(s,zi.x),l.addScaledVector(o,zi.y),l.addScaledVector(a,zi.z),l}static isFrontFacing(e,n,i,r){return ii.subVectors(i,n),Bi.subVectors(e,n),ii.cross(Bi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ii.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return su===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),su=!0),Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ao.subVectors(r,i),lo.subVectors(s,i),Zh.subVectors(e,i);const l=ao.dot(Zh),c=lo.dot(Zh);if(l<=0&&c<=0)return n.copy(i);Jh.subVectors(e,r);const u=ao.dot(Jh),d=lo.dot(Jh);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ao,o);Qh.subVectors(e,s);const p=ao.dot(Qh),m=lo.dot(Qh);if(m>=0&&p<=m)return n.copy(s);const v=p*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(lo,a);const g=u*m-p*d;if(g<=0&&d-u>=0&&p-m>=0)return Uy.subVectors(s,r),a=(d-u)/(d-u+(p-m)),n.copy(r).addScaledVector(Uy,a);const f=1/(g+v+h);return o=v*f,a=h*f,n.copy(i).addScaledVector(ao,o).addScaledVector(lo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let mO=0;class qs extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mO++}),this.uuid=Vr(),this.name="",this.type="Material",this.blending=jo,this.side=jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=c1,this.blendDst=u1,this.blendEquation=wo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Nm,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=G3,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fh,this.stencilZFail=Fh,this.stencilZPass=Fh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==jo&&(i.blending=this.blending),this.side!==jr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const T1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},ou={h:0,s:0,l:0};function ep(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ti.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ti.workingColorSpace){return this.r=e,this.g=n,this.b=i,ti.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ti.workingColorSpace){if(e=J3(e,1),n=hn(n,0,1),i=hn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ep(o,s,e+1/3),this.g=ep(o,s,e),this.b=ep(o,s,e-1/3)}return ti.toWorkingColorSpace(this,r),this}setStyle(e,n=je){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=je){const i=T1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xo(e.r),this.g=Xo(e.g),this.b=Xo(e.b),this}copyLinearToSRGB(e){return this.r=Hh(e.r),this.g=Hh(e.g),this.b=Hh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=je){return ti.fromWorkingColorSpace(nn.copy(this),e),Math.round(hn(nn.r*255,0,255))*65536+Math.round(hn(nn.g*255,0,255))*256+Math.round(hn(nn.b*255,0,255))}getHexString(e=je){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ti.workingColorSpace){ti.fromWorkingColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ti.workingColorSpace){return ti.fromWorkingColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=je){ti.fromWorkingColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==je?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ri),ri.h+=e,ri.s+=n,ri.l+=i,this.setHSL(ri.h,ri.s,ri.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ri),e.getHSL(ou);const i=zh(ri.h,ou.h,n),r=zh(ri.s,ou.s,n),s=zh(ri.l,ou.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Qe;Qe.NAMES=T1;class Lf extends qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new V,au=new Ce;class pi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Fm,this.updateRange={offset:0,count:-1},this.gpuType=Cr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)au.fromBufferAttribute(this,n),au.applyMatrix3(e),this.setXY(n,au.x,au.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Pr(n,this.array)),n}setX(e,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Pr(n,this.array)),n}setY(e,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Pr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Pr(n,this.array)),n}setW(e,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fm&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class R1 extends pi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class b1 extends pi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Xn extends pi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let gO=0;const zn=new qt,tp=new vn,co=new V,Pn=new gc,Za=new gc,Wt=new V;class Ii extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gO++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(S1(e)?b1:R1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,n,i){return zn.makeTranslation(e,n,i),this.applyMatrix4(zn),this}scale(e,n,i){return zn.makeScale(e,n,i),this.applyMatrix4(zn),this}lookAt(e){return tp.lookAt(e),tp.updateMatrix(),this.applyMatrix4(tp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Xn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pv);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Za.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Pn.min,Za.min),Pn.expandByPoint(Wt),Wt.addVectors(Pn.max,Za.max),Pn.expandByPoint(Wt)):(Pn.expandByPoint(Za.min),Pn.expandByPoint(Za.max))}Pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Wt.fromBufferAttribute(a,c),l&&(co.fromBufferAttribute(e,c),Wt.add(co)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<a;b++)c[b]=new V,u[b]=new V;const d=new V,h=new V,p=new V,m=new Ce,v=new Ce,g=new Ce,f=new V,_=new V;function y(b,Q,ue){d.fromArray(r,b*3),h.fromArray(r,Q*3),p.fromArray(r,ue*3),m.fromArray(o,b*2),v.fromArray(o,Q*2),g.fromArray(o,ue*2),h.sub(d),p.sub(d),v.sub(m),g.sub(m);const k=1/(v.x*g.y-g.x*v.y);isFinite(k)&&(f.copy(h).multiplyScalar(g.y).addScaledVector(p,-v.y).multiplyScalar(k),_.copy(p).multiplyScalar(v.x).addScaledVector(h,-g.x).multiplyScalar(k),c[b].add(f),c[Q].add(f),c[ue].add(f),u[b].add(_),u[Q].add(_),u[ue].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let b=0,Q=S.length;b<Q;++b){const ue=S[b],k=ue.start,W=ue.count;for(let J=k,ce=k+W;J<ce;J+=3)y(i[J+0],i[J+1],i[J+2])}const E=new V,w=new V,T=new V,I=new V;function x(b){T.fromArray(s,b*3),I.copy(T);const Q=c[b];E.copy(Q),E.sub(T.multiplyScalar(T.dot(Q))).normalize(),w.crossVectors(I,Q);const k=w.dot(u[b])<0?-1:1;l[b*4]=E.x,l[b*4+1]=E.y,l[b*4+2]=E.z,l[b*4+3]=k}for(let b=0,Q=S.length;b<Q;++b){const ue=S[b],k=ue.start,W=ue.count;for(let J=k,ce=k+W;J<ce;J+=3)x(i[J+0]),x(i[J+1]),x(i[J+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,u=new V,d=new V;if(e)for(let h=0,p=e.count;h<p;h+=3){const m=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let f=0;f<u;f++)h[m++]=c[p++]}return new pi(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ii,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oy=new qt,as=new M1,lu=new Pv,ky=new V,uo=new V,fo=new V,ho=new V,np=new V,cu=new V,uu=new Ce,du=new Ce,fu=new Ce,Fy=new V,By=new V,zy=new V,hu=new V,pu=new V;class $n extends vn{constructor(e=new Ii,n=new Lf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){cu.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(np.fromBufferAttribute(d,e),o?cu.addScaledVector(np,u):cu.addScaledVector(np.sub(n),u))}n.add(cu)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lu.copy(i.boundingSphere),lu.applyMatrix4(s),as.copy(e.ray).recast(e.near),!(lu.containsPoint(as.origin)===!1&&(as.intersectSphere(lu,ky)===null||as.origin.distanceToSquared(ky)>(e.far-e.near)**2))&&(Oy.copy(s).invert(),as.copy(e.ray).applyMatrix4(Oy),!(i.boundingBox!==null&&as.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,as)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=h.length;m<v;m++){const g=h[m],f=o[g.materialIndex],_=Math.max(g.start,p.start),y=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=_,E=y;S<E;S+=3){const w=a.getX(S),T=a.getX(S+1),I=a.getX(S+2);r=mu(this,f,e,i,c,u,d,w,T,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let g=m,f=v;g<f;g+=3){const _=a.getX(g),y=a.getX(g+1),S=a.getX(g+2);r=mu(this,o,e,i,c,u,d,_,y,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=h.length;m<v;m++){const g=h[m],f=o[g.materialIndex],_=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=_,E=y;S<E;S+=3){const w=S,T=S+1,I=S+2;r=mu(this,f,e,i,c,u,d,w,T,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=m,f=v;g<f;g+=3){const _=g,y=g+1,S=g+2;r=mu(this,o,e,i,c,u,d,_,y,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function vO(t,e,n,i,r,s,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===jr,a),l===null)return null;pu.copy(a),pu.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(pu);return c<n.near||c>n.far?null:{distance:c,point:pu.clone(),object:t}}function mu(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,uo),t.getVertexPosition(l,fo),t.getVertexPosition(c,ho);const u=vO(t,e,n,i,uo,fo,ho,hu);if(u){r&&(uu.fromBufferAttribute(r,a),du.fromBufferAttribute(r,l),fu.fromBufferAttribute(r,c),u.uv=Gn.getInterpolation(hu,uo,fo,ho,uu,du,fu,new Ce)),s&&(uu.fromBufferAttribute(s,a),du.fromBufferAttribute(s,l),fu.fromBufferAttribute(s,c),u.uv1=Gn.getInterpolation(hu,uo,fo,ho,uu,du,fu,new Ce),u.uv2=u.uv1),o&&(Fy.fromBufferAttribute(o,a),By.fromBufferAttribute(o,l),zy.fromBufferAttribute(o,c),u.normal=Gn.getInterpolation(hu,uo,fo,ho,Fy,By,zy,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new V,materialIndex:0};Gn.getNormal(uo,fo,ho,d.normal),u.face=d}return u}class vc extends Ii{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Xn(c,3)),this.setAttribute("normal",new Xn(u,3)),this.setAttribute("uv",new Xn(d,2));function m(v,g,f,_,y,S,E,w,T,I,x){const b=S/T,Q=E/I,ue=S/2,k=E/2,W=w/2,J=T+1,ce=I+1;let K=0,F=0;const j=new V;for(let H=0;H<ce;H++){const ae=H*Q-k;for(let M=0;M<J;M++){const U=M*b-ue;j[v]=U*_,j[g]=ae*y,j[f]=W,c.push(j.x,j.y,j.z),j[v]=0,j[g]=0,j[f]=w>0?1:-1,u.push(j.x,j.y,j.z),d.push(M/T),d.push(1-H/I),K+=1}}for(let H=0;H<I;H++)for(let ae=0;ae<T;ae++){const M=h+ae+J*H,U=h+ae+J*(H+1),O=h+(ae+1)+J*(H+1),q=h+(ae+1)+J*H;l.push(M,U,q),l.push(U,O,q),F+=6}a.addGroup(p,F,x),p+=F,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const i=fa(t[n]);for(const r in i)e[r]=i[r]}return e}function _O(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function A1(t){return t.getRenderTarget()===null?t.outputColorSpace:Ci}const Cd={clone:fa,merge:un};var yO=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SO=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yO,this.fragmentShader=SO,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fa(e.uniforms),this.uniformsGroups=_O(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class C1 extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=qi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class In extends C1{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zm*2*Math.atan(Math.tan(Bh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bh*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const po=-90,mo=1;class EO extends vn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new In(po,mo,e,n);r.layers=this.layers,this.add(r);const s=new In(po,mo,e,n);s.layers=this.layers,this.add(s);const o=new In(po,mo,e,n);o.layers=this.layers,this.add(o);const a=new In(po,mo,e,n);a.layers=this.layers,this.add(a);const l=new In(po,mo,e,n);l.layers=this.layers,this.add(l);const c=new In(po,mo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===qi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ad)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=Ji,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class P1 extends gn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:ca,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xO extends hi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Tl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Rs?je:bs),this.texture=new P1(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:wt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vc(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:fa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:Br});s.uniforms.tEquirect.value=n;const o=new $n(r,s),a=n.minFilter;return n.minFilter===Xl&&(n.minFilter=wt),new EO(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ip=new V,wO=new V,MO=new Ze;class ds{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ip.subVectors(i,n).cross(wO.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ip),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||MO.getNormalMatrix(e),r=this.coplanarPoint(ip).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new Pv,gu=new V;class L1{constructor(e=new ds,n=new ds,i=new ds,r=new ds,s=new ds,o=new ds){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=qi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],m=r[9],v=r[10],g=r[11],f=r[12],_=r[13],y=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,g-p,S-f).normalize(),i[1].setComponents(l+s,h+c,g+p,S+f).normalize(),i[2].setComponents(l+o,h+u,g+m,S+_).normalize(),i[3].setComponents(l-o,h-u,g-m,S-_).normalize(),i[4].setComponents(l-a,h-d,g-v,S-y).normalize(),n===qi)i[5].setComponents(l+a,h+d,g+v,S+y).normalize();else if(n===Ad)i[5].setComponents(a,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(gu.x=r.normal.x>0?e.max.x:e.min.x,gu.y=r.normal.y>0?e.max.y:e.min.y,gu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function I1(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function TO(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,h=c.usage,p=t.createBuffer();t.bindBuffer(u,p),t.bufferData(u,d,h),c.onUploadCallback();let m;if(d instanceof Float32Array)m=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)m=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)m=t.SHORT;else if(d instanceof Uint32Array)m=t.UNSIGNED_INT;else if(d instanceof Int32Array)m=t.INT;else if(d instanceof Int8Array)m=t.BYTE;else if(d instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:m,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const h=u.array,p=u.updateRange;t.bindBuffer(d,c),p.count===-1?t.bufferSubData(d,0,h):(n?t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:o,remove:a,update:l}}class Iv extends Ii{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=n/l,p=[],m=[],v=[],g=[];for(let f=0;f<u;f++){const _=f*h-o;for(let y=0;y<c;y++){const S=y*d-s;m.push(S,-_,0),v.push(0,0,1),g.push(y/a),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const y=_+c*f,S=_+c*(f+1),E=_+1+c*(f+1),w=_+1+c*f;p.push(y,S,w),p.push(S,E,w)}this.setIndex(p),this.setAttribute("position",new Xn(m,3)),this.setAttribute("normal",new Xn(v,3)),this.setAttribute("uv",new Xn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Iv(e.width,e.height,e.widthSegments,e.heightSegments)}}var RO=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bO=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AO=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,CO=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PO=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,LO=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IO="vec3 transformed = vec3( position );",NO=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DO=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,UO=`#ifdef USE_IRIDESCENCE
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
#endif`,OO=`#ifdef USE_BUMPMAP
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
#endif`,kO=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,FO=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BO=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zO=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VO=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HO=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,GO=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,WO=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$O=`#define PI 3.141592653589793
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
} // validated`,jO=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,XO=`vec3 transformedNormal = objectNormal;
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
#endif`,qO=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YO=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KO=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZO=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JO="gl_FragColor = linearToOutputTexel( gl_FragColor );",QO=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ek=`#ifdef USE_ENVMAP
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
#endif`,tk=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nk=`#ifdef USE_ENVMAP
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
#endif`,ik=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rk=`#ifdef USE_ENVMAP
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
#endif`,sk=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ok=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ak=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lk=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ck=`#ifdef USE_GRADIENTMAP
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
}`,uk=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,dk=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fk=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hk=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pk=`uniform bool receiveShadow;
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
#endif`,mk=`#ifdef USE_ENVMAP
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
#endif`,gk=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vk=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_k=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yk=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sk=`PhysicalMaterial material;
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
#endif`,Ek=`struct PhysicalMaterial {
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
}`,xk=`
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
#endif`,wk=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mk=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Tk=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rk=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bk=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ak=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ck=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Pk=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lk=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ik=`#if defined( USE_POINTS_UV )
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
#endif`,Nk=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dk=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uk=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ok=`#ifdef USE_MORPHNORMALS
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
#endif`,kk=`#ifdef USE_MORPHTARGETS
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
#endif`,Fk=`#ifdef USE_MORPHTARGETS
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
#endif`,Bk=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,zk=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vk=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hk=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gk=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wk=`#ifdef USE_NORMALMAP
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
#endif`,$k=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,jk=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xk=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qk=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yk=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kk=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zk=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jk=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qk=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eF=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tF=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nF=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iF=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rF=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sF=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oF=`float getShadowMask() {
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
}`,aF=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lF=`#ifdef USE_SKINNING
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
#endif`,cF=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uF=`#ifdef USE_SKINNING
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
#endif`,dF=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fF=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hF=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pF=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mF=`#ifdef USE_TRANSMISSION
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
#endif`,gF=`#ifdef USE_TRANSMISSION
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
#endif`,vF=`#ifdef USE_UV
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
#endif`,_F=`#ifdef USE_UV
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
#endif`,yF=`#ifdef USE_UV
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
#endif`,SF=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EF=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xF=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MF=`#ifdef ENVMAP_TYPE_CUBE
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
}`,TF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RF=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bF=`#include <common>
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
}`,AF=`#if DEPTH_PACKING == 3200
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
}`,CF=`#define DISTANCE
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
}`,PF=`#define DISTANCE
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
}`,LF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IF=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,NF=`uniform float scale;
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
}`,DF=`uniform vec3 diffuse;
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
}`,UF=`#include <common>
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
}`,OF=`uniform vec3 diffuse;
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
}`,kF=`#define LAMBERT
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
}`,FF=`#define LAMBERT
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
}`,BF=`#define MATCAP
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
}`,zF=`#define MATCAP
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
}`,VF=`#define NORMAL
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
}`,HF=`#define NORMAL
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
}`,GF=`#define PHONG
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
}`,WF=`#define PHONG
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
}`,$F=`#define STANDARD
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
}`,jF=`#define STANDARD
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
}`,XF=`#define TOON
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
}`,qF=`#define TOON
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
}`,YF=`uniform float size;
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
}`,KF=`uniform vec3 diffuse;
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
}`,ZF=`#include <common>
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
}`,JF=`uniform vec3 color;
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
}`,QF=`uniform float rotation;
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
}`,eB=`uniform vec3 diffuse;
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
}`,Ke={alphamap_fragment:RO,alphamap_pars_fragment:bO,alphatest_fragment:AO,alphatest_pars_fragment:CO,aomap_fragment:PO,aomap_pars_fragment:LO,begin_vertex:IO,beginnormal_vertex:NO,bsdfs:DO,iridescence_fragment:UO,bumpmap_pars_fragment:OO,clipping_planes_fragment:kO,clipping_planes_pars_fragment:FO,clipping_planes_pars_vertex:BO,clipping_planes_vertex:zO,color_fragment:VO,color_pars_fragment:HO,color_pars_vertex:GO,color_vertex:WO,common:$O,cube_uv_reflection_fragment:jO,defaultnormal_vertex:XO,displacementmap_pars_vertex:qO,displacementmap_vertex:YO,emissivemap_fragment:KO,emissivemap_pars_fragment:ZO,encodings_fragment:JO,encodings_pars_fragment:QO,envmap_fragment:ek,envmap_common_pars_fragment:tk,envmap_pars_fragment:nk,envmap_pars_vertex:ik,envmap_physical_pars_fragment:mk,envmap_vertex:rk,fog_vertex:sk,fog_pars_vertex:ok,fog_fragment:ak,fog_pars_fragment:lk,gradientmap_pars_fragment:ck,lightmap_fragment:uk,lightmap_pars_fragment:dk,lights_lambert_fragment:fk,lights_lambert_pars_fragment:hk,lights_pars_begin:pk,lights_toon_fragment:gk,lights_toon_pars_fragment:vk,lights_phong_fragment:_k,lights_phong_pars_fragment:yk,lights_physical_fragment:Sk,lights_physical_pars_fragment:Ek,lights_fragment_begin:xk,lights_fragment_maps:wk,lights_fragment_end:Mk,logdepthbuf_fragment:Tk,logdepthbuf_pars_fragment:Rk,logdepthbuf_pars_vertex:bk,logdepthbuf_vertex:Ak,map_fragment:Ck,map_pars_fragment:Pk,map_particle_fragment:Lk,map_particle_pars_fragment:Ik,metalnessmap_fragment:Nk,metalnessmap_pars_fragment:Dk,morphcolor_vertex:Uk,morphnormal_vertex:Ok,morphtarget_pars_vertex:kk,morphtarget_vertex:Fk,normal_fragment_begin:Bk,normal_fragment_maps:zk,normal_pars_fragment:Vk,normal_pars_vertex:Hk,normal_vertex:Gk,normalmap_pars_fragment:Wk,clearcoat_normal_fragment_begin:$k,clearcoat_normal_fragment_maps:jk,clearcoat_pars_fragment:Xk,iridescence_pars_fragment:qk,output_fragment:Yk,packing:Kk,premultiplied_alpha_fragment:Zk,project_vertex:Jk,dithering_fragment:Qk,dithering_pars_fragment:eF,roughnessmap_fragment:tF,roughnessmap_pars_fragment:nF,shadowmap_pars_fragment:iF,shadowmap_pars_vertex:rF,shadowmap_vertex:sF,shadowmask_pars_fragment:oF,skinbase_vertex:aF,skinning_pars_vertex:lF,skinning_vertex:cF,skinnormal_vertex:uF,specularmap_fragment:dF,specularmap_pars_fragment:fF,tonemapping_fragment:hF,tonemapping_pars_fragment:pF,transmission_fragment:mF,transmission_pars_fragment:gF,uv_pars_fragment:vF,uv_pars_vertex:_F,uv_vertex:yF,worldpos_vertex:SF,background_vert:EF,background_frag:xF,backgroundCube_vert:wF,backgroundCube_frag:MF,cube_vert:TF,cube_frag:RF,depth_vert:bF,depth_frag:AF,distanceRGBA_vert:CF,distanceRGBA_frag:PF,equirect_vert:LF,equirect_frag:IF,linedashed_vert:NF,linedashed_frag:DF,meshbasic_vert:UF,meshbasic_frag:OF,meshlambert_vert:kF,meshlambert_frag:FF,meshmatcap_vert:BF,meshmatcap_frag:zF,meshnormal_vert:VF,meshnormal_frag:HF,meshphong_vert:GF,meshphong_frag:WF,meshphysical_vert:$F,meshphysical_frag:jF,meshtoon_vert:XF,meshtoon_frag:qF,points_vert:YF,points_frag:KF,shadow_vert:ZF,shadow_frag:JF,sprite_vert:QF,sprite_frag:eB},Ee={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Si={basic:{uniforms:un([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:un([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:un([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:un([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:un([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:un([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:un([Ee.points,Ee.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:un([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:un([Ee.common,Ee.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:un([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:un([Ee.sprite,Ee.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:un([Ee.common,Ee.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:un([Ee.lights,Ee.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Si.physical={uniforms:un([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const vu={r:0,b:0,g:0};function tB(t,e,n,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function m(g,f){let _=!1,y=f.isScene===!0?f.background:null;switch(y&&y.isTexture&&(y=(f.backgroundBlurriness>0?n:e).get(y)),y===null?v(a,l):y&&y.isColor&&(v(y,1),_=!0),t.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),_=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),_=!0;break}(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Cf)?(u===void 0&&(u=new $n(new vc(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:fa(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=y.colorSpace!==je,(d!==y||h!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,h=y.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new $n(new Iv(2,2),new Un({name:"BackgroundMaterial",uniforms:fa(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:jr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=y.colorSpace!==je,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function v(g,f){g.getRGB(vu,A1(t)),i.buffers.color.setClear(vu.r,vu.g,vu.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(g,f=1){a.set(g),l=f,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,v(a,l)},render:m}}function nB(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let c=l,u=!1;function d(W,J,ce,K,F){let j=!1;if(o){const H=v(K,ce,J);c!==H&&(c=H,p(c.object)),j=f(W,K,ce,F),j&&_(W,K,ce,F)}else{const H=J.wireframe===!0;(c.geometry!==K.id||c.program!==ce.id||c.wireframe!==H)&&(c.geometry=K.id,c.program=ce.id,c.wireframe=H,j=!0)}F!==null&&n.update(F,t.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,I(W,J,ce,K),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(F).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(W){return i.isWebGL2?t.bindVertexArray(W):s.bindVertexArrayOES(W)}function m(W){return i.isWebGL2?t.deleteVertexArray(W):s.deleteVertexArrayOES(W)}function v(W,J,ce){const K=ce.wireframe===!0;let F=a[W.id];F===void 0&&(F={},a[W.id]=F);let j=F[J.id];j===void 0&&(j={},F[J.id]=j);let H=j[K];return H===void 0&&(H=g(h()),j[K]=H),H}function g(W){const J=[],ce=[],K=[];for(let F=0;F<r;F++)J[F]=0,ce[F]=0,K[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ce,attributeDivisors:K,object:W,attributes:{},index:null}}function f(W,J,ce,K){const F=c.attributes,j=J.attributes;let H=0;const ae=ce.getAttributes();for(const M in ae)if(ae[M].location>=0){const O=F[M];let q=j[M];if(q===void 0&&(M==="instanceMatrix"&&W.instanceMatrix&&(q=W.instanceMatrix),M==="instanceColor"&&W.instanceColor&&(q=W.instanceColor)),O===void 0||O.attribute!==q||q&&O.data!==q.data)return!0;H++}return c.attributesNum!==H||c.index!==K}function _(W,J,ce,K){const F={},j=J.attributes;let H=0;const ae=ce.getAttributes();for(const M in ae)if(ae[M].location>=0){let O=j[M];O===void 0&&(M==="instanceMatrix"&&W.instanceMatrix&&(O=W.instanceMatrix),M==="instanceColor"&&W.instanceColor&&(O=W.instanceColor));const q={};q.attribute=O,O&&O.data&&(q.data=O.data),F[M]=q,H++}c.attributes=F,c.attributesNum=H,c.index=K}function y(){const W=c.newAttributes;for(let J=0,ce=W.length;J<ce;J++)W[J]=0}function S(W){E(W,0)}function E(W,J){const ce=c.newAttributes,K=c.enabledAttributes,F=c.attributeDivisors;ce[W]=1,K[W]===0&&(t.enableVertexAttribArray(W),K[W]=1),F[W]!==J&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,J),F[W]=J)}function w(){const W=c.newAttributes,J=c.enabledAttributes;for(let ce=0,K=J.length;ce<K;ce++)J[ce]!==W[ce]&&(t.disableVertexAttribArray(ce),J[ce]=0)}function T(W,J,ce,K,F,j,H){H===!0?t.vertexAttribIPointer(W,J,ce,F,j):t.vertexAttribPointer(W,J,ce,K,F,j)}function I(W,J,ce,K){if(i.isWebGL2===!1&&(W.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const F=K.attributes,j=ce.getAttributes(),H=J.defaultAttributeValues;for(const ae in j){const M=j[ae];if(M.location>=0){let U=F[ae];if(U===void 0&&(ae==="instanceMatrix"&&W.instanceMatrix&&(U=W.instanceMatrix),ae==="instanceColor"&&W.instanceColor&&(U=W.instanceColor)),U!==void 0){const O=U.normalized,q=U.itemSize,$=n.get(U);if($===void 0)continue;const pe=$.buffer,Se=$.type,fe=$.bytesPerElement,Pe=i.isWebGL2===!0&&(Se===t.INT||Se===t.UNSIGNED_INT||U.gpuType===f1);if(U.isInterleavedBufferAttribute){const Ie=U.data,z=Ie.stride,Be=U.offset;if(Ie.isInstancedInterleavedBuffer){for(let Re=0;Re<M.locationSize;Re++)E(M.location+Re,Ie.meshPerAttribute);W.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let Re=0;Re<M.locationSize;Re++)S(M.location+Re);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let Re=0;Re<M.locationSize;Re++)T(M.location+Re,q/M.locationSize,Se,O,z*fe,(Be+q/M.locationSize*Re)*fe,Pe)}else{if(U.isInstancedBufferAttribute){for(let Ie=0;Ie<M.locationSize;Ie++)E(M.location+Ie,U.meshPerAttribute);W.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let Ie=0;Ie<M.locationSize;Ie++)S(M.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let Ie=0;Ie<M.locationSize;Ie++)T(M.location+Ie,q/M.locationSize,Se,O,q*fe,q/M.locationSize*Ie*fe,Pe)}}else if(H!==void 0){const O=H[ae];if(O!==void 0)switch(O.length){case 2:t.vertexAttrib2fv(M.location,O);break;case 3:t.vertexAttrib3fv(M.location,O);break;case 4:t.vertexAttrib4fv(M.location,O);break;default:t.vertexAttrib1fv(M.location,O)}}}}w()}function x(){ue();for(const W in a){const J=a[W];for(const ce in J){const K=J[ce];for(const F in K)m(K[F].object),delete K[F];delete J[ce]}delete a[W]}}function b(W){if(a[W.id]===void 0)return;const J=a[W.id];for(const ce in J){const K=J[ce];for(const F in K)m(K[F].object),delete K[F];delete J[ce]}delete a[W.id]}function Q(W){for(const J in a){const ce=a[J];if(ce[W.id]===void 0)continue;const K=ce[W.id];for(const F in K)m(K[F].object),delete K[F];delete ce[W.id]}}function ue(){k(),u=!0,c!==l&&(c=l,p(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:ue,resetDefaultState:k,dispose:x,releaseStatesOfGeometry:b,releaseStatesOfProgram:Q,initAttributes:y,enableAttribute:S,disableUnusedAttributes:w}}function iB(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){t.drawArrays(s,c,u),n.update(u,s,1)}function l(c,u,d){if(d===0)return;let h,p;if(r)h=t,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,d),n.update(u,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function rB(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=h>0,S=o||e.has("OES_texture_float"),E=y&&S,w=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:m,maxAttributes:v,maxVertexUniforms:g,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:E,maxSamples:w}}function sB(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ds,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const m=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,f=t.get(d);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const _=s?0:i,y=_*4;let S=f.clippingState||null;l.value=S,S=u(m,h,y,p);for(let E=0;E!==y;++E)S[E]=n[E];f.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,m){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const f=p+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<f)&&(g=new Float32Array(f));for(let y=0,S=p;y!==v;++y,S+=4)o.copy(d[y]).applyMatrix4(_,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function oB(t){let e=new WeakMap;function n(o,a){return a===Dm?o.mapping=ca:a===Um&&(o.mapping=ua),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Dm||a===Um)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new xO(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class N1 extends C1{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Oo=4,Vy=[.125,.215,.35,.446,.526,.582],ms=20,rp=new N1,Hy=new Qe;let sp=null;const fs=(1+Math.sqrt(5))/2,go=1/fs,Gy=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,fs,go),new V(0,fs,-go),new V(go,0,fs),new V(-go,0,fs),new V(fs,go,0),new V(-fs,go,0)];class Wy{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){sp=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sp),e.scissorTest=!1,_u(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ca||e.mapping===ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sp=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:Qi,format:ui,colorSpace:Ci,depthBuffer:!1},r=$y(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$y(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aB(s)),this._blurMaterial=lB(s,e,n)}return r}_compileMaterial(e){const n=new $n(this._lodPlanes[0],e);this._renderer.compile(n,rp)}_sceneToCubeUV(e,n,i,r){const a=new In(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Hy),u.toneMapping=Ji,u.autoClear=!1;const p=new Lf({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),m=new $n(new vc,p);let v=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,v=!0):(p.color.copy(Hy),v=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const y=this._cubeSize;_u(r,_*y,f>2?y:0,y,y),u.setRenderTarget(r),v&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ca||e.mapping===ua;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jy());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new $n(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;_u(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,rp)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Gy[(r-1)%Gy.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new $n(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ms-1),v=s/m,g=isFinite(s)?1+Math.floor(u*v):ms;g>ms&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ms}`);const f=[];let _=0;for(let T=0;T<ms;++T){const I=T/v,x=Math.exp(-I*I/2);f.push(x),T===0?_+=x:T<g&&(_+=2*x)}for(let T=0;T<f.length;T++)f[T]=f[T]/_;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=m,h.mipInt.value=y-i;const S=this._sizeLods[r],E=3*S*(r>y-Oo?r-y+Oo:0),w=4*(this._cubeSize-S);_u(n,E,w,3*S,2*S),l.setRenderTarget(n),l.render(d,rp)}}function aB(t){const e=[],n=[],i=[];let r=t;const s=t-Oo+1+Vy.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Oo?l=Vy[o-t+Oo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,m=6,v=3,g=2,f=1,_=new Float32Array(v*m*p),y=new Float32Array(g*m*p),S=new Float32Array(f*m*p);for(let w=0;w<p;w++){const T=w%3*2/3-1,I=w>2?0:-1,x=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];_.set(x,v*m*w),y.set(h,g*m*w);const b=[w,w,w,w,w,w];S.set(b,f*m*w)}const E=new Ii;E.setAttribute("position",new pi(_,v)),E.setAttribute("uv",new pi(y,g)),E.setAttribute("faceIndex",new pi(S,f)),e.push(E),r>Oo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function $y(t,e,n){const i=new hi(t,e,n);return i.texture.mapping=Cf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _u(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function lB(t,e,n){const i=new Float32Array(ms),r=new V(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Nv(),fragmentShader:`

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
		`,blending:Br,depthTest:!1,depthWrite:!1})}function jy(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nv(),fragmentShader:`

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
		`,blending:Br,depthTest:!1,depthWrite:!1})}function Xy(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function Nv(){return`

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
	`}function cB(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Dm||l===Um,u=l===ca||l===ua;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Wy(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){n===null&&(n=new Wy(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function uB(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dB(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);for(const m in h.morphAttributes){const v=h.morphAttributes[m];for(let g=0,f=v.length;g<f;g++)e.remove(v[g])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const m in h)e.update(h[m],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const m in p){const v=p[m];for(let g=0,f=v.length;g<f;g++)e.update(v[g],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,m=d.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let y=0,S=_.length;y<S;y+=3){const E=_[y+0],w=_[y+1],T=_[y+2];h.push(E,w,w,T,T,E)}}else{const _=m.array;v=m.version;for(let y=0,S=_.length/3-1;y<S;y+=3){const E=y+0,w=y+1,T=y+2;h.push(E,w,w,T,T,E)}}const g=new(S1(h)?b1:R1)(h,1);g.version=v;const f=s.get(d);f&&e.remove(f),s.set(d,g)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function fB(t,e,n,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){t.drawElements(s,p,a,h*l),n.update(p,s,1)}function d(h,p,m){if(m===0)return;let v,g;if(r)v=t,g="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[g](s,p,a,h*l,m),n.update(p,s,m)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function hB(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function pB(t,e){return t[0]-e[0]}function mB(t,e){return Math.abs(e[1])-Math.abs(t[1])}function gB(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Kt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=m!==void 0?m.length:0;let g=s.get(u);if(g===void 0||g.count!==v){let J=function(){k.dispose(),s.delete(u),u.removeEventListener("dispose",J)};var p=J;g!==void 0&&g.texture.dispose();const y=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let x=0;y===!0&&(x=1),S===!0&&(x=2),E===!0&&(x=3);let b=u.attributes.position.count*x,Q=1;b>e.maxTextureSize&&(Q=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const ue=new Float32Array(b*Q*4*v),k=new w1(ue,b,Q,v);k.type=Cr,k.needsUpdate=!0;const W=x*4;for(let ce=0;ce<v;ce++){const K=w[ce],F=T[ce],j=I[ce],H=b*Q*4*ce;for(let ae=0;ae<K.count;ae++){const M=ae*W;y===!0&&(o.fromBufferAttribute(K,ae),ue[H+M+0]=o.x,ue[H+M+1]=o.y,ue[H+M+2]=o.z,ue[H+M+3]=0),S===!0&&(o.fromBufferAttribute(F,ae),ue[H+M+4]=o.x,ue[H+M+5]=o.y,ue[H+M+6]=o.z,ue[H+M+7]=0),E===!0&&(o.fromBufferAttribute(j,ae),ue[H+M+8]=o.x,ue[H+M+9]=o.y,ue[H+M+10]=o.z,ue[H+M+11]=j.itemSize===4?o.w:1)}}g={count:v,texture:k,size:new Ce(b,Q)},s.set(u,g),u.addEventListener("dispose",J)}let f=0;for(let y=0;y<h.length;y++)f+=h[y];const _=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const m=h===void 0?0:h.length;let v=i[u.id];if(v===void 0||v.length!==m){v=[];for(let S=0;S<m;S++)v[S]=[S,0];i[u.id]=v}for(let S=0;S<m;S++){const E=v[S];E[0]=S,E[1]=h[S]}v.sort(mB);for(let S=0;S<8;S++)S<m&&v[S][1]?(a[S][0]=v[S][0],a[S][1]=v[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(pB);const g=u.morphAttributes.position,f=u.morphAttributes.normal;let _=0;for(let S=0;S<8;S++){const E=a[S],w=E[0],T=E[1];w!==Number.MAX_SAFE_INTEGER&&T?(g&&u.getAttribute("morphTarget"+S)!==g[w]&&u.setAttribute("morphTarget"+S,g[w]),f&&u.getAttribute("morphNormal"+S)!==f[w]&&u.setAttribute("morphNormal"+S,f[w]),r[S]=T,_+=T):(g&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),f&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const y=u.morphTargetsRelative?1:1-_;d.getUniforms().setValue(t,"morphTargetBaseInfluence",y),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function vB(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);return r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER)),d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const D1=new gn,U1=new w1,O1=new aO,k1=new P1,qy=[],Yy=[],Ky=new Float32Array(16),Zy=new Float32Array(9),Jy=new Float32Array(4);function ba(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=qy[r];if(s===void 0&&(s=new Float32Array(r),qy[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function If(t,e){let n=Yy[e];n===void 0&&(n=new Int32Array(e),Yy[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function _B(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function yB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Vt(n,e)}}function SB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Vt(n,e)}}function EB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Vt(n,e)}}function xB(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;Jy.set(i),t.uniformMatrix2fv(this.addr,!1,Jy),Vt(n,i)}}function wB(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;Zy.set(i),t.uniformMatrix3fv(this.addr,!1,Zy),Vt(n,i)}}function MB(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;Ky.set(i),t.uniformMatrix4fv(this.addr,!1,Ky),Vt(n,i)}}function TB(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function RB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Vt(n,e)}}function bB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Vt(n,e)}}function AB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Vt(n,e)}}function CB(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function PB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Vt(n,e)}}function LB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Vt(n,e)}}function IB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Vt(n,e)}}function NB(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||D1,r)}function DB(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||O1,r)}function UB(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||k1,r)}function OB(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||U1,r)}function kB(t){switch(t){case 5126:return _B;case 35664:return yB;case 35665:return SB;case 35666:return EB;case 35674:return xB;case 35675:return wB;case 35676:return MB;case 5124:case 35670:return TB;case 35667:case 35671:return RB;case 35668:case 35672:return bB;case 35669:case 35673:return AB;case 5125:return CB;case 36294:return PB;case 36295:return LB;case 36296:return IB;case 35678:case 36198:case 36298:case 36306:case 35682:return NB;case 35679:case 36299:case 36307:return DB;case 35680:case 36300:case 36308:case 36293:return UB;case 36289:case 36303:case 36311:case 36292:return OB}}function FB(t,e){t.uniform1fv(this.addr,e)}function BB(t,e){const n=ba(e,this.size,2);t.uniform2fv(this.addr,n)}function zB(t,e){const n=ba(e,this.size,3);t.uniform3fv(this.addr,n)}function VB(t,e){const n=ba(e,this.size,4);t.uniform4fv(this.addr,n)}function HB(t,e){const n=ba(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function GB(t,e){const n=ba(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function WB(t,e){const n=ba(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function $B(t,e){t.uniform1iv(this.addr,e)}function jB(t,e){t.uniform2iv(this.addr,e)}function XB(t,e){t.uniform3iv(this.addr,e)}function qB(t,e){t.uniform4iv(this.addr,e)}function YB(t,e){t.uniform1uiv(this.addr,e)}function KB(t,e){t.uniform2uiv(this.addr,e)}function ZB(t,e){t.uniform3uiv(this.addr,e)}function JB(t,e){t.uniform4uiv(this.addr,e)}function QB(t,e,n){const i=this.cache,r=e.length,s=If(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||D1,s[o])}function e4(t,e,n){const i=this.cache,r=e.length,s=If(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||O1,s[o])}function t4(t,e,n){const i=this.cache,r=e.length,s=If(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||k1,s[o])}function n4(t,e,n){const i=this.cache,r=e.length,s=If(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||U1,s[o])}function i4(t){switch(t){case 5126:return FB;case 35664:return BB;case 35665:return zB;case 35666:return VB;case 35674:return HB;case 35675:return GB;case 35676:return WB;case 5124:case 35670:return $B;case 35667:case 35671:return jB;case 35668:case 35672:return XB;case 35669:case 35673:return qB;case 5125:return YB;case 36294:return KB;case 36295:return ZB;case 36296:return JB;case 35678:case 36198:case 36298:case 36306:case 35682:return QB;case 35679:case 36299:case 36307:return e4;case 35680:case 36300:case 36308:case 36293:return t4;case 36289:case 36303:case 36311:case 36292:return n4}}class r4{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=kB(n.type)}}class s4{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=i4(n.type)}}class o4{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const op=/(\w+)(\])?(\[|\.)?/g;function Qy(t,e){t.seq.push(e),t.map[e.id]=e}function a4(t,e,n){const i=t.name,r=i.length;for(op.lastIndex=0;;){const s=op.exec(i),o=op.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Qy(n,c===void 0?new r4(a,t,e):new s4(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new o4(a),Qy(n,d)),n=d}}}class zu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);a4(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function eS(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let l4=0;function c4(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function u4(t){switch(t){case Ci:return["Linear","( value )"];case je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function tS(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+c4(t.getShaderSource(e),o)}else return r}function d4(t,e){const n=u4(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function f4(t,e){let n;switch(e){case T3:n="Linear";break;case R3:n="Reinhard";break;case b3:n="OptimizedCineon";break;case A3:n="ACESFilmic";break;case C3:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function h4(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ll).join(`
`)}function p4(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function m4(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ll(t){return t!==""}function nS(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function iS(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const g4=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hm(t){return t.replace(g4,v4)}function v4(t,e){const n=Ke[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Hm(n)}const _4=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rS(t){return t.replace(_4,y4)}function y4(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sS(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function S4(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===l1?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===i3?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function E4(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ca:case ua:e="ENVMAP_TYPE_CUBE";break;case Cf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function x4(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ua:e="ENVMAP_MODE_REFRACTION";break}return e}function w4(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case bv:e="ENVMAP_BLENDING_MULTIPLY";break;case w3:e="ENVMAP_BLENDING_MIX";break;case M3:e="ENVMAP_BLENDING_ADD";break}return e}function M4(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function T4(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=S4(n),c=E4(n),u=x4(n),d=w4(n),h=M4(n),p=n.isWebGL2?"":h4(n),m=p4(s),v=r.createProgram();let g,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ll).join(`
`),g.length>0&&(g+=`
`),f=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ll).join(`
`),f.length>0&&(f+=`
`)):(g=[sS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),f=[p,sS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ji?"#define TONE_MAPPING":"",n.toneMapping!==Ji?Ke.tonemapping_pars_fragment:"",n.toneMapping!==Ji?f4("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.encodings_pars_fragment,d4("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ll).join(`
`)),o=Hm(o),o=nS(o,n),o=iS(o,n),a=Hm(a),a=nS(a,n),a=iS(a,n),o=rS(o),a=rS(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===My?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===My?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=_+g+o,S=_+f+a,E=eS(r,r.VERTEX_SHADER,y),w=eS(r,r.FRAGMENT_SHADER,S);if(r.attachShader(v,E),r.attachShader(v,w),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),t.debug.checkShaderErrors){const x=r.getProgramInfoLog(v).trim(),b=r.getShaderInfoLog(E).trim(),Q=r.getShaderInfoLog(w).trim();let ue=!0,k=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ue=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,E,w);else{const W=tS(r,E,"vertex"),J=tS(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+W+`
`+J)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(b===""||Q==="")&&(k=!1);k&&(this.diagnostics={runnable:ue,programLog:x,vertexShader:{log:b,prefix:g},fragmentShader:{log:Q,prefix:f}})}r.deleteShader(E),r.deleteShader(w);let T;this.getUniforms=function(){return T===void 0&&(T=new zu(r,v)),T};let I;return this.getAttributes=function(){return I===void 0&&(I=m4(r,v)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=l4++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=w,this}let R4=0;class b4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new A4(e),n.set(e,i)),i}}class A4{constructor(e){this.id=R4++,this.code=e,this.usedTimes=0}}function C4(t,e,n,i,r,s,o){const a=new Lv,l=new b4,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===0?"uv":`uv${x}`}function g(x,b,Q,ue,k){const W=ue.fog,J=k.geometry,ce=x.isMeshStandardMaterial?ue.environment:null,K=(x.isMeshStandardMaterial?n:e).get(x.envMap||ce),F=K&&K.mapping===Cf?K.image.height:null,j=m[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const H=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ae=H!==void 0?H.length:0;let M=0;J.morphAttributes.position!==void 0&&(M=1),J.morphAttributes.normal!==void 0&&(M=2),J.morphAttributes.color!==void 0&&(M=3);let U,O,q,$;if(j){const nt=Si[j];U=nt.vertexShader,O=nt.fragmentShader}else U=x.vertexShader,O=x.fragmentShader,l.update(x),q=l.getVertexShaderID(x),$=l.getFragmentShaderID(x);const pe=t.getRenderTarget(),Se=k.isInstancedMesh===!0,fe=!!x.map,Pe=!!x.matcap,Ie=!!K,z=!!x.aoMap,Be=!!x.lightMap,Re=!!x.bumpMap,Ne=!!x.normalMap,we=!!x.displacementMap,ze=!!x.emissiveMap,He=!!x.metalnessMap,ke=!!x.roughnessMap,tt=x.anisotropy>0,Rt=x.clearcoat>0,Pt=x.iridescence>0,P=x.sheen>0,R=x.transmission>0,ne=tt&&!!x.anisotropyMap,ye=Rt&&!!x.clearcoatMap,_e=Rt&&!!x.clearcoatNormalMap,N=Rt&&!!x.clearcoatRoughnessMap,he=Pt&&!!x.iridescenceMap,ve=Pt&&!!x.iridescenceThicknessMap,te=P&&!!x.sheenColorMap,Te=P&&!!x.sheenRoughnessMap,Le=!!x.specularMap,Ae=!!x.specularColorMap,D=!!x.specularIntensityMap,L=R&&!!x.transmissionMap,Z=R&&!!x.thicknessMap,de=!!x.gradientMap,C=!!x.alphaMap,ee=x.alphaTest>0,B=!!x.extensions,ie=!!J.attributes.uv1,se=!!J.attributes.uv2,xe=!!J.attributes.uv3;return{isWebGL2:u,shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:U,fragmentShader:O,defines:x.defines,customVertexShaderID:q,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:Se,instancingColor:Se&&k.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Ci,map:fe,matcap:Pe,envMap:Ie,envMapMode:Ie&&K.mapping,envMapCubeUVHeight:F,aoMap:z,lightMap:Be,bumpMap:Re,normalMap:Ne,displacementMap:h&&we,emissiveMap:ze,normalMapObjectSpace:Ne&&x.normalMapType===H3,normalMapTangentSpace:Ne&&x.normalMapType===Cv,metalnessMap:He,roughnessMap:ke,anisotropy:tt,anisotropyMap:ne,clearcoat:Rt,clearcoatMap:ye,clearcoatNormalMap:_e,clearcoatRoughnessMap:N,iridescence:Pt,iridescenceMap:he,iridescenceThicknessMap:ve,sheen:P,sheenColorMap:te,sheenRoughnessMap:Te,specularMap:Le,specularColorMap:Ae,specularIntensityMap:D,transmission:R,transmissionMap:L,thicknessMap:Z,gradientMap:de,opaque:x.transparent===!1&&x.blending===jo,alphaMap:C,alphaTest:ee,combine:x.combine,mapUv:fe&&v(x.map.channel),aoMapUv:z&&v(x.aoMap.channel),lightMapUv:Be&&v(x.lightMap.channel),bumpMapUv:Re&&v(x.bumpMap.channel),normalMapUv:Ne&&v(x.normalMap.channel),displacementMapUv:we&&v(x.displacementMap.channel),emissiveMapUv:ze&&v(x.emissiveMap.channel),metalnessMapUv:He&&v(x.metalnessMap.channel),roughnessMapUv:ke&&v(x.roughnessMap.channel),anisotropyMapUv:ne&&v(x.anisotropyMap.channel),clearcoatMapUv:ye&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:_e&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:te&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(x.sheenRoughnessMap.channel),specularMapUv:Le&&v(x.specularMap.channel),specularColorMapUv:Ae&&v(x.specularColorMap.channel),specularIntensityMapUv:D&&v(x.specularIntensityMap.channel),transmissionMapUv:L&&v(x.transmissionMap.channel),thicknessMapUv:Z&&v(x.thicknessMap.channel),alphaMapUv:C&&v(x.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ne||tt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUv1s:ie,vertexUv2s:se,vertexUv3s:xe,pointsUvs:k.isPoints===!0&&!!J.attributes.uv&&(fe||C),fog:!!W,useFog:x.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:M,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&Q.length>0,shadowMapType:t.shadowMap.type,toneMapping:x.toneMapped?t.toneMapping:Ji,useLegacyLights:t.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wi,flipSided:x.side===mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:B&&x.extensions.derivatives===!0,extensionFragDepth:B&&x.extensions.fragDepth===!0,extensionDrawBuffers:B&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:B&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const Q in x.defines)b.push(Q),b.push(x.defines[Q]);return x.isRawShaderMaterial===!1&&(_(b,x),y(b,x),b.push(t.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function _(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function y(x,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),x.push(a.mask)}function S(x){const b=m[x.type];let Q;if(b){const ue=Si[b];Q=Cd.clone(ue.uniforms)}else Q=x.uniforms;return Q}function E(x,b){let Q;for(let ue=0,k=c.length;ue<k;ue++){const W=c[ue];if(W.cacheKey===b){Q=W,++Q.usedTimes;break}}return Q===void 0&&(Q=new T4(t,b,x,s),c.push(Q)),Q}function w(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),x.destroy()}}function T(x){l.remove(x)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:S,acquireProgram:E,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:I}}function P4(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function L4(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function oS(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function aS(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,m,v,g){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:m,renderOrder:d.renderOrder,z:v,group:g},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=m,f.renderOrder=d.renderOrder,f.z=v,f.group=g),e++,f}function a(d,h,p,m,v,g){const f=o(d,h,p,m,v,g);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,m,v,g){const f=o(d,h,p,m,v,g);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||L4),i.length>1&&i.sort(h||oS),r.length>1&&r.sort(h||oS)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function I4(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new aS,t.set(i,[o])):r>=s.length?(o=new aS,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function N4(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new Qe};break;case"SpotLight":n={position:new V,direction:new V,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function D4(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let U4=0;function O4(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function k4(t,e){const n=new N4,i=D4(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new V);const s=new V,o=new qt,a=new qt;function l(u,d){let h=0,p=0,m=0;for(let Q=0;Q<9;Q++)r.probe[Q].set(0,0,0);let v=0,g=0,f=0,_=0,y=0,S=0,E=0,w=0,T=0,I=0;u.sort(O4);const x=d===!0?Math.PI:1;for(let Q=0,ue=u.length;Q<ue;Q++){const k=u[Q],W=k.color,J=k.intensity,ce=k.distance,K=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=W.r*J*x,p+=W.g*J*x,m+=W.b*J*x;else if(k.isLightProbe)for(let F=0;F<9;F++)r.probe[F].addScaledVector(k.sh.coefficients[F],J);else if(k.isDirectionalLight){const F=n.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity*x),k.castShadow){const j=k.shadow,H=i.get(k);H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,r.directionalShadow[v]=H,r.directionalShadowMap[v]=K,r.directionalShadowMatrix[v]=k.shadow.matrix,S++}r.directional[v]=F,v++}else if(k.isSpotLight){const F=n.get(k);F.position.setFromMatrixPosition(k.matrixWorld),F.color.copy(W).multiplyScalar(J*x),F.distance=ce,F.coneCos=Math.cos(k.angle),F.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),F.decay=k.decay,r.spot[f]=F;const j=k.shadow;if(k.map&&(r.spotLightMap[T]=k.map,T++,j.updateMatrices(k),k.castShadow&&I++),r.spotLightMatrix[f]=j.matrix,k.castShadow){const H=i.get(k);H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,r.spotShadow[f]=H,r.spotShadowMap[f]=K,w++}f++}else if(k.isRectAreaLight){const F=n.get(k);F.color.copy(W).multiplyScalar(J),F.halfWidth.set(k.width*.5,0,0),F.halfHeight.set(0,k.height*.5,0),r.rectArea[_]=F,_++}else if(k.isPointLight){const F=n.get(k);if(F.color.copy(k.color).multiplyScalar(k.intensity*x),F.distance=k.distance,F.decay=k.decay,k.castShadow){const j=k.shadow,H=i.get(k);H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,r.pointShadow[g]=H,r.pointShadowMap[g]=K,r.pointShadowMatrix[g]=k.shadow.matrix,E++}r.point[g]=F,g++}else if(k.isHemisphereLight){const F=n.get(k);F.skyColor.copy(k.color).multiplyScalar(J*x),F.groundColor.copy(k.groundColor).multiplyScalar(J*x),r.hemi[y]=F,y++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_FLOAT_1,r.rectAreaLTC2=Ee.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_HALF_1,r.rectAreaLTC2=Ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=m;const b=r.hash;(b.directionalLength!==v||b.pointLength!==g||b.spotLength!==f||b.rectAreaLength!==_||b.hemiLength!==y||b.numDirectionalShadows!==S||b.numPointShadows!==E||b.numSpotShadows!==w||b.numSpotMaps!==T)&&(r.directional.length=v,r.spot.length=f,r.rectArea.length=_,r.point.length=g,r.hemi.length=y,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=w+T-I,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=I,b.directionalLength=v,b.pointLength=g,b.spotLength=f,b.rectAreaLength=_,b.hemiLength=y,b.numDirectionalShadows=S,b.numPointShadows=E,b.numSpotShadows=w,b.numSpotMaps=T,r.version=U4++)}function c(u,d){let h=0,p=0,m=0,v=0,g=0;const f=d.matrixWorldInverse;for(let _=0,y=u.length;_<y;_++){const S=u[_];if(S.isDirectionalLight){const E=r.directional[h];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),h++}else if(S.isSpotLight){const E=r.spot[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),m++}else if(S.isRectAreaLight){const E=r.rectArea[v];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),a.identity(),o.copy(S.matrixWorld),o.premultiply(f),a.extractRotation(o),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const E=r.point[p];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const E=r.hemi[g];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(f),g++}}}return{setup:l,setupView:c,state:r}}function lS(t,e){const n=new k4(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function F4(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new lS(t,e),n.set(s,[l])):o>=a.length?(l=new lS(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class B4 extends qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=z3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class z4 extends qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const V4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H4=`uniform sampler2D shadow_pass;
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
}`;function G4(t,e,n){let i=new L1;const r=new Ce,s=new Ce,o=new Kt,a=new B4({depthPacking:V3}),l=new z4,c={},u=n.maxTextureSize,d={[jr]:mn,[mn]:jr,[wi]:wi},h=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:V4,fragmentShader:H4}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const m=new Ii;m.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new $n(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=l1;let f=this.type;this.render=function(E,w,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const I=t.getRenderTarget(),x=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),Q=t.state;Q.setBlending(Br),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ue=f!==Vi&&this.type===Vi,k=f===Vi&&this.type!==Vi;for(let W=0,J=E.length;W<J;W++){const ce=E[W],K=ce.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const F=K.getFrameExtents();if(r.multiply(F),s.copy(K.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/F.x),r.x=s.x*F.x,K.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/F.y),r.y=s.y*F.y,K.mapSize.y=s.y)),K.map===null||ue===!0||k===!0){const H=this.type!==Vi?{minFilter:fn,magFilter:fn}:{};K.map!==null&&K.map.dispose(),K.map=new hi(r.x,r.y,H),K.map.texture.name=ce.name+".shadowMap",K.camera.updateProjectionMatrix()}t.setRenderTarget(K.map),t.clear();const j=K.getViewportCount();for(let H=0;H<j;H++){const ae=K.getViewport(H);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),Q.viewport(o),K.updateMatrices(ce,H),i=K.getFrustum(),S(w,T,K.camera,ce,this.type)}K.isPointLightShadow!==!0&&this.type===Vi&&_(K,T),K.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(I,x,b)};function _(E,w){const T=e.update(v);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new hi(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(w,null,T,h,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(w,null,T,p,v,null)}function y(E,w,T,I){let x=null;const b=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(b!==void 0)x=b;else if(x=T.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Q=x.uuid,ue=w.uuid;let k=c[Q];k===void 0&&(k={},c[Q]=k);let W=k[ue];W===void 0&&(W=x.clone(),k[ue]=W),x=W}if(x.visible=w.visible,x.wireframe=w.wireframe,I===Vi?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:d[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,T.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const Q=t.properties.get(x);Q.light=T}return x}function S(E,w,T,I,x){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Vi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const ue=e.update(E),k=E.material;if(Array.isArray(k)){const W=ue.groups;for(let J=0,ce=W.length;J<ce;J++){const K=W[J],F=k[K.materialIndex];if(F&&F.visible){const j=y(E,F,I,x);t.renderBufferDirect(T,null,ue,j,E,K)}}}else if(k.visible){const W=y(E,k,I,x);t.renderBufferDirect(T,null,ue,W,E,null)}}const Q=E.children;for(let ue=0,k=Q.length;ue<k;ue++)S(Q[ue],w,T,I,x)}}function W4(t,e,n){const i=n.isWebGL2;function r(){let C=!1;const ee=new Kt;let B=null;const ie=new Kt(0,0,0,0);return{setMask:function(se){B!==se&&!C&&(t.colorMask(se,se,se,se),B=se)},setLocked:function(se){C=se},setClear:function(se,xe,Ue,nt,ft){ft===!0&&(se*=nt,xe*=nt,Ue*=nt),ee.set(se,xe,Ue,nt),ie.equals(ee)===!1&&(t.clearColor(se,xe,Ue,nt),ie.copy(ee))},reset:function(){C=!1,B=null,ie.set(-1,0,0,0)}}}function s(){let C=!1,ee=null,B=null,ie=null;return{setTest:function(se){se?pe(t.DEPTH_TEST):Se(t.DEPTH_TEST)},setMask:function(se){ee!==se&&!C&&(t.depthMask(se),ee=se)},setFunc:function(se){if(B!==se){switch(se){case g3:t.depthFunc(t.NEVER);break;case v3:t.depthFunc(t.ALWAYS);break;case _3:t.depthFunc(t.LESS);break;case Nm:t.depthFunc(t.LEQUAL);break;case y3:t.depthFunc(t.EQUAL);break;case S3:t.depthFunc(t.GEQUAL);break;case E3:t.depthFunc(t.GREATER);break;case x3:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}B=se}},setLocked:function(se){C=se},setClear:function(se){ie!==se&&(t.clearDepth(se),ie=se)},reset:function(){C=!1,ee=null,B=null,ie=null}}}function o(){let C=!1,ee=null,B=null,ie=null,se=null,xe=null,Ue=null,nt=null,ft=null;return{setTest:function(it){C||(it?pe(t.STENCIL_TEST):Se(t.STENCIL_TEST))},setMask:function(it){ee!==it&&!C&&(t.stencilMask(it),ee=it)},setFunc:function(it,bt,At){(B!==it||ie!==bt||se!==At)&&(t.stencilFunc(it,bt,At),B=it,ie=bt,se=At)},setOp:function(it,bt,At){(xe!==it||Ue!==bt||nt!==At)&&(t.stencilOp(it,bt,At),xe=it,Ue=bt,nt=At)},setLocked:function(it){C=it},setClear:function(it){ft!==it&&(t.clearStencil(it),ft=it)},reset:function(){C=!1,ee=null,B=null,ie=null,se=null,xe=null,Ue=null,nt=null,ft=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,d=new WeakMap;let h={},p={},m=new WeakMap,v=[],g=null,f=!1,_=null,y=null,S=null,E=null,w=null,T=null,I=null,x=!1,b=null,Q=null,ue=null,k=null,W=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,K=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(F)[1]),ce=K>=1):F.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),ce=K>=2);let j=null,H={};const ae=t.getParameter(t.SCISSOR_BOX),M=t.getParameter(t.VIEWPORT),U=new Kt().fromArray(ae),O=new Kt().fromArray(M);function q(C,ee,B,ie){const se=new Uint8Array(4),xe=t.createTexture();t.bindTexture(C,xe),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ue=0;Ue<B;Ue++)i&&(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)?t.texImage3D(ee,0,t.RGBA,1,1,ie,0,t.RGBA,t.UNSIGNED_BYTE,se):t.texImage2D(ee+Ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,se);return xe}const $={};$[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),$[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&($[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),$[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pe(t.DEPTH_TEST),l.setFunc(Nm),we(!1),ze(Y0),pe(t.CULL_FACE),Re(Br);function pe(C){h[C]!==!0&&(t.enable(C),h[C]=!0)}function Se(C){h[C]!==!1&&(t.disable(C),h[C]=!1)}function fe(C,ee){return p[C]!==ee?(t.bindFramebuffer(C,ee),p[C]=ee,i&&(C===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=ee),C===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=ee)),!0):!1}function Pe(C,ee){let B=v,ie=!1;if(C)if(B=m.get(ee),B===void 0&&(B=[],m.set(ee,B)),C.isWebGLMultipleRenderTargets){const se=C.texture;if(B.length!==se.length||B[0]!==t.COLOR_ATTACHMENT0){for(let xe=0,Ue=se.length;xe<Ue;xe++)B[xe]=t.COLOR_ATTACHMENT0+xe;B.length=se.length,ie=!0}}else B[0]!==t.COLOR_ATTACHMENT0&&(B[0]=t.COLOR_ATTACHMENT0,ie=!0);else B[0]!==t.BACK&&(B[0]=t.BACK,ie=!0);ie&&(n.isWebGL2?t.drawBuffers(B):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(B))}function Ie(C){return g!==C?(t.useProgram(C),g=C,!0):!1}const z={[wo]:t.FUNC_ADD,[s3]:t.FUNC_SUBTRACT,[o3]:t.FUNC_REVERSE_SUBTRACT};if(i)z[J0]=t.MIN,z[Q0]=t.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(z[J0]=C.MIN_EXT,z[Q0]=C.MAX_EXT)}const Be={[a3]:t.ZERO,[l3]:t.ONE,[c3]:t.SRC_COLOR,[c1]:t.SRC_ALPHA,[m3]:t.SRC_ALPHA_SATURATE,[h3]:t.DST_COLOR,[d3]:t.DST_ALPHA,[u3]:t.ONE_MINUS_SRC_COLOR,[u1]:t.ONE_MINUS_SRC_ALPHA,[p3]:t.ONE_MINUS_DST_COLOR,[f3]:t.ONE_MINUS_DST_ALPHA};function Re(C,ee,B,ie,se,xe,Ue,nt){if(C===Br){f===!0&&(Se(t.BLEND),f=!1);return}if(f===!1&&(pe(t.BLEND),f=!0),C!==r3){if(C!==_||nt!==x){if((y!==wo||w!==wo)&&(t.blendEquation(t.FUNC_ADD),y=wo,w=wo),nt)switch(C){case jo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Im:t.blendFunc(t.ONE,t.ONE);break;case K0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Z0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case jo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Im:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case K0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Z0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}S=null,E=null,T=null,I=null,_=C,x=nt}return}se=se||ee,xe=xe||B,Ue=Ue||ie,(ee!==y||se!==w)&&(t.blendEquationSeparate(z[ee],z[se]),y=ee,w=se),(B!==S||ie!==E||xe!==T||Ue!==I)&&(t.blendFuncSeparate(Be[B],Be[ie],Be[xe],Be[Ue]),S=B,E=ie,T=xe,I=Ue),_=C,x=!1}function Ne(C,ee){C.side===wi?Se(t.CULL_FACE):pe(t.CULL_FACE);let B=C.side===mn;ee&&(B=!B),we(B),C.blending===jo&&C.transparent===!1?Re(Br):Re(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const ie=C.stencilWrite;c.setTest(ie),ie&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),ke(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):Se(t.SAMPLE_ALPHA_TO_COVERAGE)}function we(C){b!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),b=C)}function ze(C){C!==t3?(pe(t.CULL_FACE),C!==Q&&(C===Y0?t.cullFace(t.BACK):C===n3?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Se(t.CULL_FACE),Q=C}function He(C){C!==ue&&(ce&&t.lineWidth(C),ue=C)}function ke(C,ee,B){C?(pe(t.POLYGON_OFFSET_FILL),(k!==ee||W!==B)&&(t.polygonOffset(ee,B),k=ee,W=B)):Se(t.POLYGON_OFFSET_FILL)}function tt(C){C?pe(t.SCISSOR_TEST):Se(t.SCISSOR_TEST)}function Rt(C){C===void 0&&(C=t.TEXTURE0+J-1),j!==C&&(t.activeTexture(C),j=C)}function Pt(C,ee,B){B===void 0&&(j===null?B=t.TEXTURE0+J-1:B=j);let ie=H[B];ie===void 0&&(ie={type:void 0,texture:void 0},H[B]=ie),(ie.type!==C||ie.texture!==ee)&&(j!==B&&(t.activeTexture(B),j=B),t.bindTexture(C,ee||$[C]),ie.type=C,ie.texture=ee)}function P(){const C=H[j];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function R(){try{t.compressedTexImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ye(){try{t.texSubImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{t.texSubImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function N(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(){try{t.texStorage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{t.texStorage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Le(){try{t.texImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(C){U.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),U.copy(C))}function D(C){O.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),O.copy(C))}function L(C,ee){let B=d.get(ee);B===void 0&&(B=new WeakMap,d.set(ee,B));let ie=B.get(C);ie===void 0&&(ie=t.getUniformBlockIndex(ee,C.name),B.set(C,ie))}function Z(C,ee){const ie=d.get(ee).get(C);u.get(ee)!==ie&&(t.uniformBlockBinding(ee,ie,C.__bindingPointIndex),u.set(ee,ie))}function de(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},j=null,H={},p={},m=new WeakMap,v=[],g=null,f=!1,_=null,y=null,S=null,E=null,w=null,T=null,I=null,x=!1,b=null,Q=null,ue=null,k=null,W=null,U.set(0,0,t.canvas.width,t.canvas.height),O.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:pe,disable:Se,bindFramebuffer:fe,drawBuffers:Pe,useProgram:Ie,setBlending:Re,setMaterial:Ne,setFlipSided:we,setCullFace:ze,setLineWidth:He,setPolygonOffset:ke,setScissorTest:tt,activeTexture:Rt,bindTexture:Pt,unbindTexture:P,compressedTexImage2D:R,compressedTexImage3D:ne,texImage2D:Te,texImage3D:Le,updateUBOMapping:L,uniformBlockBinding:Z,texStorage2D:ve,texStorage3D:te,texSubImage2D:ye,texSubImage3D:_e,compressedTexSubImage2D:N,compressedTexSubImage3D:he,scissor:Ae,viewport:D,reset:de}}function $4(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let v;const g=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,R){return f?new OffscreenCanvas(P,R):ql("canvas")}function y(P,R,ne,ye){let _e=1;if((P.width>ye||P.height>ye)&&(_e=ye/Math.max(P.width,P.height)),_e<1||R===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const N=R?Vm:Math.floor,he=N(_e*P.width),ve=N(_e*P.height);v===void 0&&(v=_(he,ve));const te=ne?_(he,ve):v;return te.width=he,te.height=ve,te.getContext("2d").drawImage(P,0,0,he,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+he+"x"+ve+")."),te}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function S(P){return Ty(P.width)&&Ty(P.height)}function E(P){return a?!1:P.wrapS!==ci||P.wrapT!==ci||P.minFilter!==fn&&P.minFilter!==wt}function w(P,R){return P.generateMipmaps&&R&&P.minFilter!==fn&&P.minFilter!==wt}function T(P){t.generateMipmap(P)}function I(P,R,ne,ye,_e=!1){if(a===!1)return R;if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let N=R;return R===t.RED&&(ne===t.FLOAT&&(N=t.R32F),ne===t.HALF_FLOAT&&(N=t.R16F),ne===t.UNSIGNED_BYTE&&(N=t.R8)),R===t.RG&&(ne===t.FLOAT&&(N=t.RG32F),ne===t.HALF_FLOAT&&(N=t.RG16F),ne===t.UNSIGNED_BYTE&&(N=t.RG8)),R===t.RGBA&&(ne===t.FLOAT&&(N=t.RGBA32F),ne===t.HALF_FLOAT&&(N=t.RGBA16F),ne===t.UNSIGNED_BYTE&&(N=ye===je&&_e===!1?t.SRGB8_ALPHA8:t.RGBA8),ne===t.UNSIGNED_SHORT_4_4_4_4&&(N=t.RGBA4),ne===t.UNSIGNED_SHORT_5_5_5_1&&(N=t.RGB5_A1)),(N===t.R16F||N===t.R32F||N===t.RG16F||N===t.RG32F||N===t.RGBA16F||N===t.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function x(P,R,ne){return w(P,ne)===!0||P.isFramebufferTexture&&P.minFilter!==fn&&P.minFilter!==wt?Math.log2(Math.max(R.width,R.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?R.mipmaps.length:1}function b(P){return P===fn||P===ey||P===Ih?t.NEAREST:t.LINEAR}function Q(P){const R=P.target;R.removeEventListener("dispose",Q),k(R),R.isVideoTexture&&m.delete(R)}function ue(P){const R=P.target;R.removeEventListener("dispose",ue),J(R)}function k(P){const R=i.get(P);if(R.__webglInit===void 0)return;const ne=P.source,ye=g.get(ne);if(ye){const _e=ye[R.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&W(P),Object.keys(ye).length===0&&g.delete(ne)}i.remove(P)}function W(P){const R=i.get(P);t.deleteTexture(R.__webglTexture);const ne=P.source,ye=g.get(ne);delete ye[R.__cacheKey],o.memory.textures--}function J(P){const R=P.texture,ne=i.get(P),ye=i.get(R);if(ye.__webglTexture!==void 0&&(t.deleteTexture(ye.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++)t.deleteFramebuffer(ne.__webglFramebuffer[_e]),ne.__webglDepthbuffer&&t.deleteRenderbuffer(ne.__webglDepthbuffer[_e]);else{if(t.deleteFramebuffer(ne.__webglFramebuffer),ne.__webglDepthbuffer&&t.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&t.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let _e=0;_e<ne.__webglColorRenderbuffer.length;_e++)ne.__webglColorRenderbuffer[_e]&&t.deleteRenderbuffer(ne.__webglColorRenderbuffer[_e]);ne.__webglDepthRenderbuffer&&t.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let _e=0,N=R.length;_e<N;_e++){const he=i.get(R[_e]);he.__webglTexture&&(t.deleteTexture(he.__webglTexture),o.memory.textures--),i.remove(R[_e])}i.remove(R),i.remove(P)}let ce=0;function K(){ce=0}function F(){const P=ce;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),ce+=1,P}function j(P){const R=[];return R.push(P.wrapS),R.push(P.wrapT),R.push(P.wrapR||0),R.push(P.magFilter),R.push(P.minFilter),R.push(P.anisotropy),R.push(P.internalFormat),R.push(P.format),R.push(P.type),R.push(P.generateMipmaps),R.push(P.premultiplyAlpha),R.push(P.flipY),R.push(P.unpackAlignment),R.push(P.colorSpace),R.join()}function H(P,R){const ne=i.get(P);if(P.isVideoTexture&&Rt(P),P.isRenderTargetTexture===!1&&P.version>0&&ne.__version!==P.version){const ye=P.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(ne,P,R);return}}n.bindTexture(t.TEXTURE_2D,ne.__webglTexture,t.TEXTURE0+R)}function ae(P,R){const ne=i.get(P);if(P.version>0&&ne.__version!==P.version){fe(ne,P,R);return}n.bindTexture(t.TEXTURE_2D_ARRAY,ne.__webglTexture,t.TEXTURE0+R)}function M(P,R){const ne=i.get(P);if(P.version>0&&ne.__version!==P.version){fe(ne,P,R);return}n.bindTexture(t.TEXTURE_3D,ne.__webglTexture,t.TEXTURE0+R)}function U(P,R){const ne=i.get(P);if(P.version>0&&ne.__version!==P.version){Pe(ne,P,R);return}n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture,t.TEXTURE0+R)}const O={[Om]:t.REPEAT,[ci]:t.CLAMP_TO_EDGE,[km]:t.MIRRORED_REPEAT},q={[fn]:t.NEAREST,[ey]:t.NEAREST_MIPMAP_NEAREST,[Ih]:t.NEAREST_MIPMAP_LINEAR,[wt]:t.LINEAR,[P3]:t.LINEAR_MIPMAP_NEAREST,[Xl]:t.LINEAR_MIPMAP_LINEAR},$={[W3]:t.NEVER,[Z3]:t.ALWAYS,[$3]:t.LESS,[X3]:t.LEQUAL,[j3]:t.EQUAL,[K3]:t.GEQUAL,[q3]:t.GREATER,[Y3]:t.NOTEQUAL};function pe(P,R,ne){if(ne?(t.texParameteri(P,t.TEXTURE_WRAP_S,O[R.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,O[R.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,O[R.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,q[R.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,q[R.minFilter])):(t.texParameteri(P,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(P,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(R.wrapS!==ci||R.wrapT!==ci)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(P,t.TEXTURE_MAG_FILTER,b(R.magFilter)),t.texParameteri(P,t.TEXTURE_MIN_FILTER,b(R.minFilter)),R.minFilter!==fn&&R.minFilter!==wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),R.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,$[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ye=e.get("EXT_texture_filter_anisotropic");if(R.magFilter===fn||R.minFilter!==Ih&&R.minFilter!==Xl||R.type===Cr&&e.has("OES_texture_float_linear")===!1||a===!1&&R.type===Qi&&e.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||i.get(R).__currentAnisotropy)&&(t.texParameterf(P,ye.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy)}}function Se(P,R){let ne=!1;P.__webglInit===void 0&&(P.__webglInit=!0,R.addEventListener("dispose",Q));const ye=R.source;let _e=g.get(ye);_e===void 0&&(_e={},g.set(ye,_e));const N=j(R);if(N!==P.__cacheKey){_e[N]===void 0&&(_e[N]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,ne=!0),_e[N].usedTimes++;const he=_e[P.__cacheKey];he!==void 0&&(_e[P.__cacheKey].usedTimes--,he.usedTimes===0&&W(R)),P.__cacheKey=N,P.__webglTexture=_e[N].texture}return ne}function fe(P,R,ne){let ye=t.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ye=t.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ye=t.TEXTURE_3D);const _e=Se(P,R),N=R.source;n.bindTexture(ye,P.__webglTexture,t.TEXTURE0+ne);const he=i.get(N);if(N.version!==he.__version||_e===!0){n.activeTexture(t.TEXTURE0+ne),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,R.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ve=E(R)&&S(R.image)===!1;let te=y(R.image,ve,!1,u);te=Pt(R,te);const Te=S(te)||a,Le=s.convert(R.format,R.colorSpace);let Ae=s.convert(R.type),D=I(R.internalFormat,Le,Ae,R.colorSpace);pe(ye,R,Te);let L;const Z=R.mipmaps,de=a&&R.isVideoTexture!==!0,C=he.__version===void 0||_e===!0,ee=x(R,te,Te);if(R.isDepthTexture)D=t.DEPTH_COMPONENT,a?R.type===Cr?D=t.DEPTH_COMPONENT32F:R.type===Ar?D=t.DEPTH_COMPONENT24:R.type===Ms?D=t.DEPTH24_STENCIL8:D=t.DEPTH_COMPONENT16:R.type===Cr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===Ts&&D===t.DEPTH_COMPONENT&&R.type!==Av&&R.type!==Ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=Ar,Ae=s.convert(R.type)),R.format===da&&D===t.DEPTH_COMPONENT&&(D=t.DEPTH_STENCIL,R.type!==Ms&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=Ms,Ae=s.convert(R.type))),C&&(de?n.texStorage2D(t.TEXTURE_2D,1,D,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,D,te.width,te.height,0,Le,Ae,null));else if(R.isDataTexture)if(Z.length>0&&Te){de&&C&&n.texStorage2D(t.TEXTURE_2D,ee,D,Z[0].width,Z[0].height);for(let B=0,ie=Z.length;B<ie;B++)L=Z[B],de?n.texSubImage2D(t.TEXTURE_2D,B,0,0,L.width,L.height,Le,Ae,L.data):n.texImage2D(t.TEXTURE_2D,B,D,L.width,L.height,0,Le,Ae,L.data);R.generateMipmaps=!1}else de?(C&&n.texStorage2D(t.TEXTURE_2D,ee,D,te.width,te.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,te.width,te.height,Le,Ae,te.data)):n.texImage2D(t.TEXTURE_2D,0,D,te.width,te.height,0,Le,Ae,te.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){de&&C&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ee,D,Z[0].width,Z[0].height,te.depth);for(let B=0,ie=Z.length;B<ie;B++)L=Z[B],R.format!==ui?Le!==null?de?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,L.width,L.height,te.depth,Le,L.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,B,D,L.width,L.height,te.depth,0,L.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?n.texSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,L.width,L.height,te.depth,Le,Ae,L.data):n.texImage3D(t.TEXTURE_2D_ARRAY,B,D,L.width,L.height,te.depth,0,Le,Ae,L.data)}else{de&&C&&n.texStorage2D(t.TEXTURE_2D,ee,D,Z[0].width,Z[0].height);for(let B=0,ie=Z.length;B<ie;B++)L=Z[B],R.format!==ui?Le!==null?de?n.compressedTexSubImage2D(t.TEXTURE_2D,B,0,0,L.width,L.height,Le,L.data):n.compressedTexImage2D(t.TEXTURE_2D,B,D,L.width,L.height,0,L.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?n.texSubImage2D(t.TEXTURE_2D,B,0,0,L.width,L.height,Le,Ae,L.data):n.texImage2D(t.TEXTURE_2D,B,D,L.width,L.height,0,Le,Ae,L.data)}else if(R.isDataArrayTexture)de?(C&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ee,D,te.width,te.height,te.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Le,Ae,te.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,D,te.width,te.height,te.depth,0,Le,Ae,te.data);else if(R.isData3DTexture)de?(C&&n.texStorage3D(t.TEXTURE_3D,ee,D,te.width,te.height,te.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Le,Ae,te.data)):n.texImage3D(t.TEXTURE_3D,0,D,te.width,te.height,te.depth,0,Le,Ae,te.data);else if(R.isFramebufferTexture){if(C)if(de)n.texStorage2D(t.TEXTURE_2D,ee,D,te.width,te.height);else{let B=te.width,ie=te.height;for(let se=0;se<ee;se++)n.texImage2D(t.TEXTURE_2D,se,D,B,ie,0,Le,Ae,null),B>>=1,ie>>=1}}else if(Z.length>0&&Te){de&&C&&n.texStorage2D(t.TEXTURE_2D,ee,D,Z[0].width,Z[0].height);for(let B=0,ie=Z.length;B<ie;B++)L=Z[B],de?n.texSubImage2D(t.TEXTURE_2D,B,0,0,Le,Ae,L):n.texImage2D(t.TEXTURE_2D,B,D,Le,Ae,L);R.generateMipmaps=!1}else de?(C&&n.texStorage2D(t.TEXTURE_2D,ee,D,te.width,te.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Le,Ae,te)):n.texImage2D(t.TEXTURE_2D,0,D,Le,Ae,te);w(R,Te)&&T(ye),he.__version=N.version,R.onUpdate&&R.onUpdate(R)}P.__version=R.version}function Pe(P,R,ne){if(R.image.length!==6)return;const ye=Se(P,R),_e=R.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+ne);const N=i.get(_e);if(_e.version!==N.__version||ye===!0){n.activeTexture(t.TEXTURE0+ne),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,R.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const he=R.isCompressedTexture||R.image[0].isCompressedTexture,ve=R.image[0]&&R.image[0].isDataTexture,te=[];for(let B=0;B<6;B++)!he&&!ve?te[B]=y(R.image[B],!1,!0,c):te[B]=ve?R.image[B].image:R.image[B],te[B]=Pt(R,te[B]);const Te=te[0],Le=S(Te)||a,Ae=s.convert(R.format,R.colorSpace),D=s.convert(R.type),L=I(R.internalFormat,Ae,D,R.colorSpace),Z=a&&R.isVideoTexture!==!0,de=N.__version===void 0||ye===!0;let C=x(R,Te,Le);pe(t.TEXTURE_CUBE_MAP,R,Le);let ee;if(he){Z&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,C,L,Te.width,Te.height);for(let B=0;B<6;B++){ee=te[B].mipmaps;for(let ie=0;ie<ee.length;ie++){const se=ee[ie];R.format!==ui?Ae!==null?Z?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,ie,0,0,se.width,se.height,Ae,se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,ie,L,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,ie,0,0,se.width,se.height,Ae,D,se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,ie,L,se.width,se.height,0,Ae,D,se.data)}}}else{ee=R.mipmaps,Z&&de&&(ee.length>0&&C++,n.texStorage2D(t.TEXTURE_CUBE_MAP,C,L,te[0].width,te[0].height));for(let B=0;B<6;B++)if(ve){Z?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,te[B].width,te[B].height,Ae,D,te[B].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,L,te[B].width,te[B].height,0,Ae,D,te[B].data);for(let ie=0;ie<ee.length;ie++){const xe=ee[ie].image[B].image;Z?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,ie+1,0,0,xe.width,xe.height,Ae,D,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,ie+1,L,xe.width,xe.height,0,Ae,D,xe.data)}}else{Z?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Ae,D,te[B]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,L,Ae,D,te[B]);for(let ie=0;ie<ee.length;ie++){const se=ee[ie];Z?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,ie+1,0,0,Ae,D,se.image[B]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+B,ie+1,L,Ae,D,se.image[B])}}}w(R,Le)&&T(t.TEXTURE_CUBE_MAP),N.__version=_e.version,R.onUpdate&&R.onUpdate(R)}P.__version=R.version}function Ie(P,R,ne,ye,_e){const N=s.convert(ne.format,ne.colorSpace),he=s.convert(ne.type),ve=I(ne.internalFormat,N,he,ne.colorSpace);i.get(R).__hasExternalTextures||(_e===t.TEXTURE_3D||_e===t.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,ve,R.width,R.height,R.depth,0,N,he,null):n.texImage2D(_e,0,ve,R.width,R.height,0,N,he,null)),n.bindFramebuffer(t.FRAMEBUFFER,P),tt(R)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ye,_e,i.get(ne).__webglTexture,0,ke(R)):(_e===t.TEXTURE_2D||_e>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ye,_e,i.get(ne).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function z(P,R,ne){if(t.bindRenderbuffer(t.RENDERBUFFER,P),R.depthBuffer&&!R.stencilBuffer){let ye=t.DEPTH_COMPONENT16;if(ne||tt(R)){const _e=R.depthTexture;_e&&_e.isDepthTexture&&(_e.type===Cr?ye=t.DEPTH_COMPONENT32F:_e.type===Ar&&(ye=t.DEPTH_COMPONENT24));const N=ke(R);tt(R)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,N,ye,R.width,R.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,N,ye,R.width,R.height)}else t.renderbufferStorage(t.RENDERBUFFER,ye,R.width,R.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,P)}else if(R.depthBuffer&&R.stencilBuffer){const ye=ke(R);ne&&tt(R)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,t.DEPTH24_STENCIL8,R.width,R.height):tt(R)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ye,t.DEPTH24_STENCIL8,R.width,R.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,P)}else{const ye=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let _e=0;_e<ye.length;_e++){const N=ye[_e],he=s.convert(N.format,N.colorSpace),ve=s.convert(N.type),te=I(N.internalFormat,he,ve,N.colorSpace),Te=ke(R);ne&&tt(R)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,te,R.width,R.height):tt(R)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Te,te,R.width,R.height):t.renderbufferStorage(t.RENDERBUFFER,te,R.width,R.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Be(P,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),H(R.depthTexture,0);const ye=i.get(R.depthTexture).__webglTexture,_e=ke(R);if(R.depthTexture.format===Ts)tt(R)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ye,0,_e):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ye,0);else if(R.depthTexture.format===da)tt(R)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ye,0,_e):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function Re(P){const R=i.get(P),ne=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!R.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");Be(R.__webglFramebuffer,P)}else if(ne){R.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)n.bindFramebuffer(t.FRAMEBUFFER,R.__webglFramebuffer[ye]),R.__webglDepthbuffer[ye]=t.createRenderbuffer(),z(R.__webglDepthbuffer[ye],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=t.createRenderbuffer(),z(R.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(P,R,ne){const ye=i.get(P);R!==void 0&&Ie(ye.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),ne!==void 0&&Re(P)}function we(P){const R=P.texture,ne=i.get(P),ye=i.get(R);P.addEventListener("dispose",ue),P.isWebGLMultipleRenderTargets!==!0&&(ye.__webglTexture===void 0&&(ye.__webglTexture=t.createTexture()),ye.__version=R.version,o.memory.textures++);const _e=P.isWebGLCubeRenderTarget===!0,N=P.isWebGLMultipleRenderTargets===!0,he=S(P)||a;if(_e){ne.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)ne.__webglFramebuffer[ve]=t.createFramebuffer()}else{if(ne.__webglFramebuffer=t.createFramebuffer(),N)if(r.drawBuffers){const ve=P.texture;for(let te=0,Te=ve.length;te<Te;te++){const Le=i.get(ve[te]);Le.__webglTexture===void 0&&(Le.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&tt(P)===!1){const ve=N?R:[R];ne.__webglMultisampledFramebuffer=t.createFramebuffer(),ne.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let te=0;te<ve.length;te++){const Te=ve[te];ne.__webglColorRenderbuffer[te]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,ne.__webglColorRenderbuffer[te]);const Le=s.convert(Te.format,Te.colorSpace),Ae=s.convert(Te.type),D=I(Te.internalFormat,Le,Ae,Te.colorSpace,P.isXRRenderTarget===!0),L=ke(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,L,D,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+te,t.RENDERBUFFER,ne.__webglColorRenderbuffer[te])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(ne.__webglDepthRenderbuffer=t.createRenderbuffer(),z(ne.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(_e){n.bindTexture(t.TEXTURE_CUBE_MAP,ye.__webglTexture),pe(t.TEXTURE_CUBE_MAP,R,he);for(let ve=0;ve<6;ve++)Ie(ne.__webglFramebuffer[ve],P,R,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve);w(R,he)&&T(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(N){const ve=P.texture;for(let te=0,Te=ve.length;te<Te;te++){const Le=ve[te],Ae=i.get(Le);n.bindTexture(t.TEXTURE_2D,Ae.__webglTexture),pe(t.TEXTURE_2D,Le,he),Ie(ne.__webglFramebuffer,P,Le,t.COLOR_ATTACHMENT0+te,t.TEXTURE_2D),w(Le,he)&&T(t.TEXTURE_2D)}n.unbindTexture()}else{let ve=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?ve=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ve,ye.__webglTexture),pe(ve,R,he),Ie(ne.__webglFramebuffer,P,R,t.COLOR_ATTACHMENT0,ve),w(R,he)&&T(ve),n.unbindTexture()}P.depthBuffer&&Re(P)}function ze(P){const R=S(P)||a,ne=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ye=0,_e=ne.length;ye<_e;ye++){const N=ne[ye];if(w(N,R)){const he=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ve=i.get(N).__webglTexture;n.bindTexture(he,ve),T(he),n.unbindTexture()}}}function He(P){if(a&&P.samples>0&&tt(P)===!1){const R=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],ne=P.width,ye=P.height;let _e=t.COLOR_BUFFER_BIT;const N=[],he=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=i.get(P),te=P.isWebGLMultipleRenderTargets===!0;if(te)for(let Te=0;Te<R.length;Te++)n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Te=0;Te<R.length;Te++){N.push(t.COLOR_ATTACHMENT0+Te),P.depthBuffer&&N.push(he);const Le=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(Le===!1&&(P.depthBuffer&&(_e|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&(_e|=t.STENCIL_BUFFER_BIT)),te&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ve.__webglColorRenderbuffer[Te]),Le===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[he]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[he])),te){const Ae=i.get(R[Te]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ae,0)}t.blitFramebuffer(0,0,ne,ye,0,0,ne,ye,_e,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,N)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),te)for(let Te=0;Te<R.length;Te++){n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,ve.__webglColorRenderbuffer[Te]);const Le=i.get(R[Te]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,Le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function ke(P){return Math.min(d,P.samples)}function tt(P){const R=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Rt(P){const R=o.render.frame;m.get(P)!==R&&(m.set(P,R),P.update())}function Pt(P,R){const ne=P.colorSpace,ye=P.format,_e=P.type;return P.isCompressedTexture===!0||P.format===Bm||ne!==Ci&&ne!==bs&&(ne===je?a===!1?e.has("EXT_sRGB")===!0&&ye===ui?(P.format=Bm,P.minFilter=wt,P.generateMipmaps=!1):R=E1.sRGBToLinear(R):(ye!==ui||_e!==zr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),R}this.allocateTextureUnit=F,this.resetTextureUnits=K,this.setTexture2D=H,this.setTexture2DArray=ae,this.setTexture3D=M,this.setTextureCube=U,this.rebindTextures=Ne,this.setupRenderTarget=we,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=tt}function j4(t,e,n){const i=n.isWebGL2;function r(s,o=bs){let a;if(s===zr)return t.UNSIGNED_BYTE;if(s===h1)return t.UNSIGNED_SHORT_4_4_4_4;if(s===p1)return t.UNSIGNED_SHORT_5_5_5_1;if(s===L3)return t.BYTE;if(s===I3)return t.SHORT;if(s===Av)return t.UNSIGNED_SHORT;if(s===f1)return t.INT;if(s===Ar)return t.UNSIGNED_INT;if(s===Cr)return t.FLOAT;if(s===Qi)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===N3)return t.ALPHA;if(s===ui)return t.RGBA;if(s===D3)return t.LUMINANCE;if(s===U3)return t.LUMINANCE_ALPHA;if(s===Ts)return t.DEPTH_COMPONENT;if(s===da)return t.DEPTH_STENCIL;if(s===Bm)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===O3)return t.RED;if(s===m1)return t.RED_INTEGER;if(s===k3)return t.RG;if(s===g1)return t.RG_INTEGER;if(s===v1)return t.RGBA_INTEGER;if(s===Nh||s===Dh||s===Uh||s===Oh)if(o===je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Nh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Dh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Uh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Oh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Nh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Dh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Uh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Oh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ty||s===ny||s===iy||s===ry)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ty)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ny)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===iy)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ry)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===F3)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===sy||s===oy)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===sy)return o===je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===oy)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ay||s===ly||s===cy||s===uy||s===dy||s===fy||s===hy||s===py||s===my||s===gy||s===vy||s===_y||s===yy||s===Sy)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ay)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ly)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===cy)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===uy)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===dy)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fy)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hy)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===py)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===my)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gy)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vy)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_y)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yy)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sy)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===kh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===kh)return o===je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===B3||s===Ey||s===xy||s===wy)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===kh)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ey)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===xy)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wy)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ms?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class X4 extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yu extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const q4={type:"move"};class ap{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const g=n.getJointPose(v,i),f=this._getHandJoint(c,v);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&h>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(q4)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new yu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Y4 extends gn{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ts,u!==Ts&&u!==da)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ts&&(i=Ar),i===void 0&&u===da&&(i=Ms),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class K4 extends Xs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,m=null;const v=n.getContextAttributes();let g=null,f=null;const _=[],y=[];let S=null;const E=new In;E.layers.enable(1),E.viewport=new Kt;const w=new In;w.layers.enable(2),w.viewport=new Kt;const T=[E,w],I=new X4;I.layers.enable(1),I.layers.enable(2);let x=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(M){S=M},this.getController=function(M){let U=_[M];return U===void 0&&(U=new ap,_[M]=U),U.getTargetRaySpace()},this.getControllerGrip=function(M){let U=_[M];return U===void 0&&(U=new ap,_[M]=U),U.getGripSpace()},this.getHand=function(M){let U=_[M];return U===void 0&&(U=new ap,_[M]=U),U.getHandSpace()};function Q(M){const U=y.indexOf(M.inputSource);if(U===-1)return;const O=_[U];O!==void 0&&(O.update(M.inputSource,M.frame,c||o),O.dispatchEvent({type:M.type,data:M.inputSource}))}function ue(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",ue),r.removeEventListener("inputsourceschange",k);for(let M=0;M<_.length;M++){const U=y[M];U!==null&&(y[M]=null,_[M].disconnect(U))}x=null,b=null,e.setRenderTarget(g),p=null,h=null,d=null,r=null,f=null,ae.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(M){s=M,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(M){a=M,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(M){c=M},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(M){if(r=M,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",ue),r.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,U),r.updateRenderState({baseLayer:p}),f=new hi(p.framebufferWidth,p.framebufferHeight,{format:ui,type:zr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let U=null,O=null,q=null;v.depth&&(q=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,U=v.stencil?da:Ts,O=v.stencil?Ms:Ar);const $={colorFormat:n.RGBA8,depthFormat:q,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer($),r.updateRenderState({layers:[h]}),f=new hi(h.textureWidth,h.textureHeight,{format:ui,type:zr,depthTexture:new Y4(h.textureWidth,h.textureHeight,O,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const pe=e.properties.get(f);pe.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function k(M){for(let U=0;U<M.removed.length;U++){const O=M.removed[U],q=y.indexOf(O);q>=0&&(y[q]=null,_[q].disconnect(O))}for(let U=0;U<M.added.length;U++){const O=M.added[U];let q=y.indexOf(O);if(q===-1){for(let pe=0;pe<_.length;pe++)if(pe>=y.length){y.push(O),q=pe;break}else if(y[pe]===null){y[pe]=O,q=pe;break}if(q===-1)break}const $=_[q];$&&$.connect(O)}}const W=new V,J=new V;function ce(M,U,O){W.setFromMatrixPosition(U.matrixWorld),J.setFromMatrixPosition(O.matrixWorld);const q=W.distanceTo(J),$=U.projectionMatrix.elements,pe=O.projectionMatrix.elements,Se=$[14]/($[10]-1),fe=$[14]/($[10]+1),Pe=($[9]+1)/$[5],Ie=($[9]-1)/$[5],z=($[8]-1)/$[0],Be=(pe[8]+1)/pe[0],Re=Se*z,Ne=Se*Be,we=q/(-z+Be),ze=we*-z;U.matrixWorld.decompose(M.position,M.quaternion,M.scale),M.translateX(ze),M.translateZ(we),M.matrixWorld.compose(M.position,M.quaternion,M.scale),M.matrixWorldInverse.copy(M.matrixWorld).invert();const He=Se+we,ke=fe+we,tt=Re-ze,Rt=Ne+(q-ze),Pt=Pe*fe/ke*He,P=Ie*fe/ke*He;M.projectionMatrix.makePerspective(tt,Rt,Pt,P,He,ke),M.projectionMatrixInverse.copy(M.projectionMatrix).invert()}function K(M,U){U===null?M.matrixWorld.copy(M.matrix):M.matrixWorld.multiplyMatrices(U.matrixWorld,M.matrix),M.matrixWorldInverse.copy(M.matrixWorld).invert()}this.updateCameraXR=function(M){if(r===null)return M;S&&(M=S),I.near=w.near=E.near=M.near,I.far=w.far=E.far=M.far,(x!==I.near||b!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),x=I.near,b=I.far);const U=M.parent,O=I.cameras;K(I,U);for(let q=0;q<O.length;q++)K(O[q],U);return O.length===2?ce(I,E,w):I.projectionMatrix.copy(E.projectionMatrix),S&&F(I,U),I};function F(M,U){const O=S;U===null?O.matrix.copy(M.matrixWorld):(O.matrix.copy(U.matrixWorld),O.matrix.invert(),O.matrix.multiply(M.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0);const q=O.children;for(let $=0,pe=q.length;$<pe;$++)q[$].updateMatrixWorld(!0);O.projectionMatrix.copy(M.projectionMatrix),O.projectionMatrixInverse.copy(M.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=zm*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(M){l=M,h!==null&&(h.fixedFoveation=M),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=M)};let j=null;function H(M,U){if(u=U.getViewerPose(c||o),m=U,u!==null){const O=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let q=!1;O.length!==I.cameras.length&&(I.cameras.length=0,q=!0);for(let $=0;$<O.length;$++){const pe=O[$];let Se=null;if(p!==null)Se=p.getViewport(pe);else{const Pe=d.getViewSubImage(h,pe);Se=Pe.viewport,$===0&&(e.setRenderTargetTextures(f,Pe.colorTexture,h.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(f))}let fe=T[$];fe===void 0&&(fe=new In,fe.layers.enable($),fe.viewport=new Kt,T[$]=fe),fe.matrix.fromArray(pe.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(pe.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Se.x,Se.y,Se.width,Se.height),$===0&&(I.matrix.copy(fe.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),q===!0&&I.cameras.push(fe)}}for(let O=0;O<_.length;O++){const q=y[O],$=_[O];q!==null&&$!==void 0&&$.update(q,U,c||o)}j&&j(M,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),m=null}const ae=new I1;ae.setAnimationLoop(H),this.setAnimationLoop=function(M){j=M},this.dispose=function(){}}}function Z4(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,A1(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,_,y,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(g,f):f.isMeshToonMaterial?(s(g,f),d(g,f)):f.isMeshPhongMaterial?(s(g,f),u(g,f)):f.isMeshStandardMaterial?(s(g,f),h(g,f),f.isMeshPhysicalMaterial&&p(g,f,S)):f.isMeshMatcapMaterial?(s(g,f),m(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),v(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?l(g,f,_,y):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===mn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===mn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap){g.lightMap.value=f.lightMap;const y=t.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=f.lightMapIntensity*y,n(f.lightMap,g.lightMapTransform)}f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,_,y){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*_,g.scale.value=y*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),e.get(f).envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,_){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===mn&&g.clearcoatNormalScale.value.negate())),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function v(g,f){const _=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function J4(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,y){const S=y.program;i.uniformBlockBinding(_,S)}function c(_,y){let S=r[_.id];S===void 0&&(m(_),S=u(_),r[_.id]=S,_.addEventListener("dispose",g));const E=y.program;i.updateUBOMapping(_,E);const w=e.render.frame;s[_.id]!==w&&(h(_),s[_.id]=w)}function u(_){const y=d();_.__bindingPointIndex=y;const S=t.createBuffer(),E=_.__size,w=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,E,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const y=r[_.id],S=_.uniforms,E=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let w=0,T=S.length;w<T;w++){const I=S[w];if(p(I,w,E)===!0){const x=I.__offset,b=Array.isArray(I.value)?I.value:[I.value];let Q=0;for(let ue=0;ue<b.length;ue++){const k=b[ue],W=v(k);typeof k=="number"?(I.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,x+Q,I.__data)):k.isMatrix3?(I.__data[0]=k.elements[0],I.__data[1]=k.elements[1],I.__data[2]=k.elements[2],I.__data[3]=k.elements[0],I.__data[4]=k.elements[3],I.__data[5]=k.elements[4],I.__data[6]=k.elements[5],I.__data[7]=k.elements[0],I.__data[8]=k.elements[6],I.__data[9]=k.elements[7],I.__data[10]=k.elements[8],I.__data[11]=k.elements[0]):(k.toArray(I.__data,Q),Q+=W.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,x,I.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,y,S){const E=_.value;if(S[y]===void 0){if(typeof E=="number")S[y]=E;else{const w=Array.isArray(E)?E:[E],T=[];for(let I=0;I<w.length;I++)T.push(w[I].clone());S[y]=T}return!0}else if(typeof E=="number"){if(S[y]!==E)return S[y]=E,!0}else{const w=Array.isArray(S[y])?S[y]:[S[y]],T=Array.isArray(E)?E:[E];for(let I=0;I<w.length;I++){const x=w[I];if(x.equals(T[I])===!1)return x.copy(T[I]),!0}}return!1}function m(_){const y=_.uniforms;let S=0;const E=16;let w=0;for(let T=0,I=y.length;T<I;T++){const x=y[T],b={boundary:0,storage:0},Q=Array.isArray(x.value)?x.value:[x.value];for(let ue=0,k=Q.length;ue<k;ue++){const W=Q[ue],J=v(W);b.boundary+=J.boundary,b.storage+=J.storage}if(x.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=S,T>0){w=S%E;const ue=E-w;w!==0&&ue-b.boundary<0&&(S+=E-w,x.__offset=S)}S+=b.storage}return w=S%E,w>0&&(S+=E-w),_.__size=S,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function g(_){const y=_.target;y.removeEventListener("dispose",g);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}function Q4(){const t=ql("canvas");return t.style.display="block",t}class Dv{constructor(e={}){const{canvas:n=Q4(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),m=new Int32Array(4);let v=null,g=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=je,this.useLegacyLights=!0,this.toneMapping=Ji,this.toneMappingExposure=1;const y=this;let S=!1,E=0,w=0,T=null,I=-1,x=null;const b=new Kt,Q=new Kt;let ue=null;const k=new Qe(0);let W=0,J=n.width,ce=n.height,K=1,F=null,j=null;const H=new Kt(0,0,J,ce),ae=new Kt(0,0,J,ce);let M=!1;const U=new L1;let O=!1,q=!1,$=null;const pe=new qt,Se=new Ce,fe=new V,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return T===null?K:1}let z=i;function Be(A,X){for(let re=0;re<A.length;re++){const G=A[re],oe=n.getContext(G,X);if(oe!==null)return oe}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Rv}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",B,!1),n.addEventListener("webglcontextcreationerror",ie,!1),z===null){const X=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&X.shift(),z=Be(X,A),z===null)throw Be(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Re,Ne,we,ze,He,ke,tt,Rt,Pt,P,R,ne,ye,_e,N,he,ve,te,Te,Le,Ae,D,L,Z;function de(){Re=new uB(z),Ne=new rB(z,Re,e),Re.init(Ne),D=new j4(z,Re,Ne),we=new W4(z,Re,Ne),ze=new hB(z),He=new P4,ke=new $4(z,Re,we,He,Ne,D,ze),tt=new oB(y),Rt=new cB(y),Pt=new TO(z,Ne),L=new nB(z,Re,Pt,Ne),P=new dB(z,Pt,ze,L),R=new vB(z,P,Pt,ze),Te=new gB(z,Ne,ke),he=new sB(He),ne=new C4(y,tt,Rt,Re,Ne,L,he),ye=new Z4(y,He),_e=new I4,N=new F4(Re,Ne),te=new tB(y,tt,Rt,we,R,h,l),ve=new G4(y,R,Ne),Z=new J4(z,ze,Ne,we),Le=new iB(z,Re,ze,Ne),Ae=new fB(z,Re,ze,Ne),ze.programs=ne.programs,y.capabilities=Ne,y.extensions=Re,y.properties=He,y.renderLists=_e,y.shadowMap=ve,y.state=we,y.info=ze}de();const C=new K4(y,z);this.xr=C,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=Re.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Re.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(J,ce,!1))},this.getSize=function(A){return A.set(J,ce)},this.setSize=function(A,X,re=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=A,ce=X,n.width=Math.floor(A*K),n.height=Math.floor(X*K),re===!0&&(n.style.width=A+"px",n.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(J*K,ce*K).floor()},this.setDrawingBufferSize=function(A,X,re){J=A,ce=X,K=re,n.width=Math.floor(A*re),n.height=Math.floor(X*re),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(H)},this.setViewport=function(A,X,re,G){A.isVector4?H.set(A.x,A.y,A.z,A.w):H.set(A,X,re,G),we.viewport(b.copy(H).multiplyScalar(K).floor())},this.getScissor=function(A){return A.copy(ae)},this.setScissor=function(A,X,re,G){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,X,re,G),we.scissor(Q.copy(ae).multiplyScalar(K).floor())},this.getScissorTest=function(){return M},this.setScissorTest=function(A){we.setScissorTest(M=A)},this.setOpaqueSort=function(A){F=A},this.setTransparentSort=function(A){j=A},this.getClearColor=function(A){return A.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(A=!0,X=!0,re=!0){let G=0;if(A){let oe=!1;if(T!==null){const be=T.texture.format;oe=be===v1||be===g1||be===m1}if(oe){const be=T.texture.type,De=be===zr||be===Ar||be===Av||be===Ms||be===h1||be===p1,Fe=te.getClearColor(),Ve=te.getClearAlpha(),Je=Fe.r,Ge=Fe.g,Xe=Fe.b,mt=He.get(T).__webglFramebuffer;De?(p[0]=Je,p[1]=Ge,p[2]=Xe,p[3]=Ve,z.clearBufferuiv(z.COLOR,mt,p)):(m[0]=Je,m[1]=Ge,m[2]=Xe,m[3]=Ve,z.clearBufferiv(z.COLOR,mt,m))}else G|=z.COLOR_BUFFER_BIT}X&&(G|=z.DEPTH_BUFFER_BIT),re&&(G|=z.STENCIL_BUFFER_BIT),z.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",B,!1),n.removeEventListener("webglcontextcreationerror",ie,!1),_e.dispose(),N.dispose(),He.dispose(),tt.dispose(),Rt.dispose(),R.dispose(),L.dispose(),Z.dispose(),ne.dispose(),C.dispose(),C.removeEventListener("sessionstart",it),C.removeEventListener("sessionend",bt),$&&($.dispose(),$=null),At.stop()};function ee(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=ze.autoReset,X=ve.enabled,re=ve.autoUpdate,G=ve.needsUpdate,oe=ve.type;de(),ze.autoReset=A,ve.enabled=X,ve.autoUpdate=re,ve.needsUpdate=G,ve.type=oe}function ie(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function se(A){const X=A.target;X.removeEventListener("dispose",se),xe(X)}function xe(A){Ue(A),He.remove(A)}function Ue(A){const X=He.get(A).programs;X!==void 0&&(X.forEach(function(re){ne.releaseProgram(re)}),A.isShaderMaterial&&ne.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,re,G,oe,be){X===null&&(X=Pe);const De=oe.isMesh&&oe.matrixWorld.determinant()<0,Fe=GR(A,X,re,G,oe);we.setMaterial(G,De);let Ve=re.index,Je=1;G.wireframe===!0&&(Ve=P.getWireframeAttribute(re),Je=2);const Ge=re.drawRange,Xe=re.attributes.position;let mt=Ge.start*Je,Lt=(Ge.start+Ge.count)*Je;be!==null&&(mt=Math.max(mt,be.start*Je),Lt=Math.min(Lt,(be.start+be.count)*Je)),Ve!==null?(mt=Math.max(mt,0),Lt=Math.min(Lt,Ve.count)):Xe!=null&&(mt=Math.max(mt,0),Lt=Math.min(Lt,Xe.count));const Qn=Lt-mt;if(Qn<0||Qn===1/0)return;L.setup(oe,G,Fe,re,Ve);let Di,Nt=Le;if(Ve!==null&&(Di=Pt.get(Ve),Nt=Ae,Nt.setIndex(Di)),oe.isMesh)G.wireframe===!0?(we.setLineWidth(G.wireframeLinewidth*Ie()),Nt.setMode(z.LINES)):Nt.setMode(z.TRIANGLES);else if(oe.isLine){let rt=G.linewidth;rt===void 0&&(rt=1),we.setLineWidth(rt*Ie()),oe.isLineSegments?Nt.setMode(z.LINES):oe.isLineLoop?Nt.setMode(z.LINE_LOOP):Nt.setMode(z.LINE_STRIP)}else oe.isPoints?Nt.setMode(z.POINTS):oe.isSprite&&Nt.setMode(z.TRIANGLES);if(oe.isInstancedMesh)Nt.renderInstances(mt,Qn,oe.count);else if(re.isInstancedBufferGeometry){const rt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Xf=Math.min(re.instanceCount,rt);Nt.renderInstances(mt,Qn,Xf)}else Nt.render(mt,Qn)},this.compile=function(A,X){function re(G,oe,be){G.transparent===!0&&G.side===wi&&G.forceSinglePass===!1?(G.side=mn,G.needsUpdate=!0,Pc(G,oe,be),G.side=jr,G.needsUpdate=!0,Pc(G,oe,be),G.side=wi):Pc(G,oe,be)}g=N.get(A),g.init(),_.push(g),A.traverseVisible(function(G){G.isLight&&G.layers.test(X.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights(y.useLegacyLights),A.traverse(function(G){const oe=G.material;if(oe)if(Array.isArray(oe))for(let be=0;be<oe.length;be++){const De=oe[be];re(De,A,G)}else re(oe,A,G)}),_.pop(),g=null};let nt=null;function ft(A){nt&&nt(A)}function it(){At.stop()}function bt(){At.start()}const At=new I1;At.setAnimationLoop(ft),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(A){nt=A,C.setAnimationLoop(A),A===null?At.stop():At.start()},C.addEventListener("sessionstart",it),C.addEventListener("sessionend",bt),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(X=C.updateCameraXR(X)),A.isScene===!0&&A.onBeforeRender(y,A,X,T),g=N.get(A,_.length),g.init(),_.push(g),pe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),U.setFromProjectionMatrix(pe),q=this.localClippingEnabled,O=he.init(this.clippingPlanes,q),v=_e.get(A,f.length),v.init(),f.push(v),ts(A,X,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(F,j),O===!0&&he.beginShadows();const re=g.state.shadowsArray;if(ve.render(re,A,X),O===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,te.render(v,A),g.setupLights(y.useLegacyLights),X.isArrayCamera){const G=X.cameras;for(let oe=0,be=G.length;oe<be;oe++){const De=G[oe];lr(v,A,De,De.viewport)}}else lr(v,A,X);T!==null&&(ke.updateMultisampleRenderTarget(T),ke.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(y,A,X),L.resetDefaultState(),I=-1,x=null,_.pop(),_.length>0?g=_[_.length-1]:g=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function ts(A,X,re,G){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||U.intersectsSprite(A)){G&&fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pe);const De=R.update(A),Fe=A.material;Fe.visible&&v.push(A,De,Fe,re,fe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||U.intersectsObject(A))){A.isSkinnedMesh&&A.skeleton.frame!==ze.render.frame&&(A.skeleton.update(),A.skeleton.frame=ze.render.frame);const De=R.update(A),Fe=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),fe.copy(A.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),fe.copy(De.boundingSphere.center)),fe.applyMatrix4(A.matrixWorld).applyMatrix4(pe)),Array.isArray(Fe)){const Ve=De.groups;for(let Je=0,Ge=Ve.length;Je<Ge;Je++){const Xe=Ve[Je],mt=Fe[Xe.materialIndex];mt&&mt.visible&&v.push(A,De,mt,re,fe.z,Xe)}}else Fe.visible&&v.push(A,De,Fe,re,fe.z,null)}}const be=A.children;for(let De=0,Fe=be.length;De<Fe;De++)ts(be[De],X,re,G)}function lr(A,X,re,G){const oe=A.opaque,be=A.transmissive,De=A.transparent;g.setupLightsView(re),O===!0&&he.setGlobalState(y.clippingPlanes,re),be.length>0&&ns(oe,be,X,re),G&&we.viewport(b.copy(G)),oe.length>0&&Cc(oe,X,re),be.length>0&&Cc(be,X,re),De.length>0&&Cc(De,X,re),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function ns(A,X,re,G){const oe=Ne.isWebGL2;$===null&&($=new hi(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?Qi:zr,minFilter:Xl,samples:oe&&a===!0?4:0})),y.getDrawingBufferSize(Se),oe?$.setSize(Se.x,Se.y):$.setSize(Vm(Se.x),Vm(Se.y));const be=y.getRenderTarget();y.setRenderTarget($),y.getClearColor(k),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear();const De=y.toneMapping;y.toneMapping=Ji,Cc(A,re,G),ke.updateMultisampleRenderTarget($),ke.updateRenderTargetMipmap($);let Fe=!1;for(let Ve=0,Je=X.length;Ve<Je;Ve++){const Ge=X[Ve],Xe=Ge.object,mt=Ge.geometry,Lt=Ge.material,Qn=Ge.group;if(Lt.side===wi&&Xe.layers.test(G.layers)){const Di=Lt.side;Lt.side=mn,Lt.needsUpdate=!0,o_(Xe,re,G,mt,Lt,Qn),Lt.side=Di,Lt.needsUpdate=!0,Fe=!0}}Fe===!0&&(ke.updateMultisampleRenderTarget($),ke.updateRenderTargetMipmap($)),y.setRenderTarget(be),y.setClearColor(k,W),y.toneMapping=De}function Cc(A,X,re){const G=X.isScene===!0?X.overrideMaterial:null;for(let oe=0,be=A.length;oe<be;oe++){const De=A[oe],Fe=De.object,Ve=De.geometry,Je=G===null?De.material:G,Ge=De.group;Fe.layers.test(re.layers)&&o_(Fe,X,re,Ve,Je,Ge)}}function o_(A,X,re,G,oe,be){A.onBeforeRender(y,X,re,G,oe,be),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),oe.onBeforeRender(y,X,re,G,A,be),oe.transparent===!0&&oe.side===wi&&oe.forceSinglePass===!1?(oe.side=mn,oe.needsUpdate=!0,y.renderBufferDirect(re,X,G,oe,A,be),oe.side=jr,oe.needsUpdate=!0,y.renderBufferDirect(re,X,G,oe,A,be),oe.side=wi):y.renderBufferDirect(re,X,G,oe,A,be),A.onAfterRender(y,X,re,G,oe,be)}function Pc(A,X,re){X.isScene!==!0&&(X=Pe);const G=He.get(A),oe=g.state.lights,be=g.state.shadowsArray,De=oe.state.version,Fe=ne.getParameters(A,oe.state,be,X,re),Ve=ne.getProgramCacheKey(Fe);let Je=G.programs;G.environment=A.isMeshStandardMaterial?X.environment:null,G.fog=X.fog,G.envMap=(A.isMeshStandardMaterial?Rt:tt).get(A.envMap||G.environment),Je===void 0&&(A.addEventListener("dispose",se),Je=new Map,G.programs=Je);let Ge=Je.get(Ve);if(Ge!==void 0){if(G.currentProgram===Ge&&G.lightsStateVersion===De)return a_(A,Fe),Ge}else Fe.uniforms=ne.getUniforms(A),A.onBuild(re,Fe,y),A.onBeforeCompile(Fe,y),Ge=ne.acquireProgram(Fe,Ve),Je.set(Ve,Ge),G.uniforms=Fe.uniforms;const Xe=G.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=he.uniform),a_(A,Fe),G.needsLights=$R(A),G.lightsStateVersion=De,G.needsLights&&(Xe.ambientLightColor.value=oe.state.ambient,Xe.lightProbe.value=oe.state.probe,Xe.directionalLights.value=oe.state.directional,Xe.directionalLightShadows.value=oe.state.directionalShadow,Xe.spotLights.value=oe.state.spot,Xe.spotLightShadows.value=oe.state.spotShadow,Xe.rectAreaLights.value=oe.state.rectArea,Xe.ltc_1.value=oe.state.rectAreaLTC1,Xe.ltc_2.value=oe.state.rectAreaLTC2,Xe.pointLights.value=oe.state.point,Xe.pointLightShadows.value=oe.state.pointShadow,Xe.hemisphereLights.value=oe.state.hemi,Xe.directionalShadowMap.value=oe.state.directionalShadowMap,Xe.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Xe.spotShadowMap.value=oe.state.spotShadowMap,Xe.spotLightMatrix.value=oe.state.spotLightMatrix,Xe.spotLightMap.value=oe.state.spotLightMap,Xe.pointShadowMap.value=oe.state.pointShadowMap,Xe.pointShadowMatrix.value=oe.state.pointShadowMatrix);const mt=Ge.getUniforms(),Lt=zu.seqWithValue(mt.seq,Xe);return G.currentProgram=Ge,G.uniformsList=Lt,Ge}function a_(A,X){const re=He.get(A);re.outputColorSpace=X.outputColorSpace,re.instancing=X.instancing,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function GR(A,X,re,G,oe){X.isScene!==!0&&(X=Pe),ke.resetTextureUnits();const be=X.fog,De=G.isMeshStandardMaterial?X.environment:null,Fe=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ci,Ve=(G.isMeshStandardMaterial?Rt:tt).get(G.envMap||De),Je=G.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ge=!!re.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Xe=!!re.morphAttributes.position,mt=!!re.morphAttributes.normal,Lt=!!re.morphAttributes.color,Qn=G.toneMapped?y.toneMapping:Ji,Di=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Nt=Di!==void 0?Di.length:0,rt=He.get(G),Xf=g.state.lights;if(O===!0&&(q===!0||A!==x)){const An=A===x&&G.id===I;he.setState(G,A,An)}let Gt=!1;G.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==Xf.state.version||rt.outputColorSpace!==Fe||oe.isInstancedMesh&&rt.instancing===!1||!oe.isInstancedMesh&&rt.instancing===!0||oe.isSkinnedMesh&&rt.skinning===!1||!oe.isSkinnedMesh&&rt.skinning===!0||rt.envMap!==Ve||G.fog===!0&&rt.fog!==be||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==he.numPlanes||rt.numIntersection!==he.numIntersection)||rt.vertexAlphas!==Je||rt.vertexTangents!==Ge||rt.morphTargets!==Xe||rt.morphNormals!==mt||rt.morphColors!==Lt||rt.toneMapping!==Qn||Ne.isWebGL2===!0&&rt.morphTargetsCount!==Nt)&&(Gt=!0):(Gt=!0,rt.__version=G.version);let is=rt.currentProgram;Gt===!0&&(is=Pc(G,X,oe));let l_=!1,Da=!1,qf=!1;const ln=is.getUniforms(),rs=rt.uniforms;if(we.useProgram(is.program)&&(l_=!0,Da=!0,qf=!0),G.id!==I&&(I=G.id,Da=!0),l_||x!==A){if(ln.setValue(z,"projectionMatrix",A.projectionMatrix),Ne.logarithmicDepthBuffer&&ln.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),x!==A&&(x=A,Da=!0,qf=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const An=ln.map.cameraPosition;An!==void 0&&An.setValue(z,fe.setFromMatrixPosition(A.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ln.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||oe.isSkinnedMesh)&&ln.setValue(z,"viewMatrix",A.matrixWorldInverse)}if(oe.isSkinnedMesh){ln.setOptional(z,oe,"bindMatrix"),ln.setOptional(z,oe,"bindMatrixInverse");const An=oe.skeleton;An&&(Ne.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),ln.setValue(z,"boneTexture",An.boneTexture,ke),ln.setValue(z,"boneTextureSize",An.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Yf=re.morphAttributes;if((Yf.position!==void 0||Yf.normal!==void 0||Yf.color!==void 0&&Ne.isWebGL2===!0)&&Te.update(oe,re,is),(Da||rt.receiveShadow!==oe.receiveShadow)&&(rt.receiveShadow=oe.receiveShadow,ln.setValue(z,"receiveShadow",oe.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(rs.envMap.value=Ve,rs.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Da&&(ln.setValue(z,"toneMappingExposure",y.toneMappingExposure),rt.needsLights&&WR(rs,qf),be&&G.fog===!0&&ye.refreshFogUniforms(rs,be),ye.refreshMaterialUniforms(rs,G,K,ce,$),zu.upload(z,rt.uniformsList,rs,ke)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(zu.upload(z,rt.uniformsList,rs,ke),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ln.setValue(z,"center",oe.center),ln.setValue(z,"modelViewMatrix",oe.modelViewMatrix),ln.setValue(z,"normalMatrix",oe.normalMatrix),ln.setValue(z,"modelMatrix",oe.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const An=G.uniformsGroups;for(let Kf=0,jR=An.length;Kf<jR;Kf++)if(Ne.isWebGL2){const c_=An[Kf];Z.update(c_,is),Z.bind(c_,is)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return is}function WR(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function $R(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,X,re){He.get(A.texture).__webglTexture=X,He.get(A.depthTexture).__webglTexture=re;const G=He.get(A);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=re===void 0,G.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,X){const re=He.get(A);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,re=0){T=A,E=X,w=re;let G=!0,oe=null,be=!1,De=!1;if(A){const Ve=He.get(A);Ve.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(z.FRAMEBUFFER,null),G=!1):Ve.__webglFramebuffer===void 0?ke.setupRenderTarget(A):Ve.__hasExternalTextures&&ke.rebindTextures(A,He.get(A.texture).__webglTexture,He.get(A.depthTexture).__webglTexture);const Je=A.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(De=!0);const Ge=He.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(oe=Ge[X],be=!0):Ne.isWebGL2&&A.samples>0&&ke.useMultisampledRTT(A)===!1?oe=He.get(A).__webglMultisampledFramebuffer:oe=Ge,b.copy(A.viewport),Q.copy(A.scissor),ue=A.scissorTest}else b.copy(H).multiplyScalar(K).floor(),Q.copy(ae).multiplyScalar(K).floor(),ue=M;if(we.bindFramebuffer(z.FRAMEBUFFER,oe)&&Ne.drawBuffers&&G&&we.drawBuffers(A,oe),we.viewport(b),we.scissor(Q),we.setScissorTest(ue),be){const Ve=He.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ve.__webglTexture,re)}else if(De){const Ve=He.get(A.texture),Je=X||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ve.__webglTexture,re||0,Je)}I=-1},this.readRenderTargetPixels=function(A,X,re,G,oe,be,De){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=He.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe){we.bindFramebuffer(z.FRAMEBUFFER,Fe);try{const Ve=A.texture,Je=Ve.format,Ge=Ve.type;if(Je!==ui&&D.convert(Je)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=Ge===Qi&&(Re.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&Re.has("EXT_color_buffer_float"));if(Ge!==zr&&D.convert(Ge)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===Cr&&(Ne.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-G&&re>=0&&re<=A.height-oe&&z.readPixels(X,re,G,oe,D.convert(Je),D.convert(Ge),be)}finally{const Ve=T!==null?He.get(T).__webglFramebuffer:null;we.bindFramebuffer(z.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(A,X,re=0){const G=Math.pow(2,-re),oe=Math.floor(X.image.width*G),be=Math.floor(X.image.height*G);ke.setTexture2D(X,0),z.copyTexSubImage2D(z.TEXTURE_2D,re,0,0,A.x,A.y,oe,be),we.unbindTexture()},this.copyTextureToTexture=function(A,X,re,G=0){const oe=X.image.width,be=X.image.height,De=D.convert(re.format),Fe=D.convert(re.type);ke.setTexture2D(re,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,re.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,re.unpackAlignment),X.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,G,A.x,A.y,oe,be,De,Fe,X.image.data):X.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,G,A.x,A.y,X.mipmaps[0].width,X.mipmaps[0].height,De,X.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,G,A.x,A.y,De,Fe,X.image),G===0&&re.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(A,X,re,G,oe=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=A.max.x-A.min.x+1,De=A.max.y-A.min.y+1,Fe=A.max.z-A.min.z+1,Ve=D.convert(G.format),Je=D.convert(G.type);let Ge;if(G.isData3DTexture)ke.setTexture3D(G,0),Ge=z.TEXTURE_3D;else if(G.isDataArrayTexture)ke.setTexture2DArray(G,0),Ge=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment);const Xe=z.getParameter(z.UNPACK_ROW_LENGTH),mt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Lt=z.getParameter(z.UNPACK_SKIP_PIXELS),Qn=z.getParameter(z.UNPACK_SKIP_ROWS),Di=z.getParameter(z.UNPACK_SKIP_IMAGES),Nt=re.isCompressedTexture?re.mipmaps[0]:re.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Nt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Nt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,A.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,A.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,A.min.z),re.isDataTexture||re.isData3DTexture?z.texSubImage3D(Ge,oe,X.x,X.y,X.z,be,De,Fe,Ve,Je,Nt.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ge,oe,X.x,X.y,X.z,be,De,Fe,Ve,Nt.data)):z.texSubImage3D(Ge,oe,X.x,X.y,X.z,be,De,Fe,Ve,Je,Nt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Xe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,mt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Lt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Qn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Di),oe===0&&G.generateMipmaps&&z.generateMipmap(Ge),we.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?ke.setTextureCube(A,0):A.isData3DTexture?ke.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ke.setTexture2DArray(A,0):ke.setTexture2D(A,0),we.unbindTexture()},this.resetState=function(){E=0,w=0,T=null,we.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===je?Rs:_1}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Rs?je:Ci}}class ez extends Dv{}ez.prototype.isWebGL1Renderer=!0;class F1 extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class tz{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Fm,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Vr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const cn=new V;class Pd{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix4(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.applyNormalMatrix(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.transformDirection(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}setX(e,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Pr(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Pr(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Pr(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Pr(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new pi(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class B1 extends qs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let vo;const Ja=new V,_o=new V,yo=new V,So=new Ce,Qa=new Ce,z1=new qt,Su=new V,el=new V,Eu=new V,cS=new Ce,lp=new Ce,uS=new Ce;class nz extends vn{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",vo===void 0){vo=new Ii;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new tz(n,5);vo.setIndex([0,1,2,0,2,3]),vo.setAttribute("position",new Pd(i,3,0,!1)),vo.setAttribute("uv",new Pd(i,2,3,!1))}this.geometry=vo,this.material=e!==void 0?e:new B1,this.center=new Ce(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_o.setFromMatrixScale(this.matrixWorld),z1.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),yo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_o.multiplyScalar(-yo.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;xu(Su.set(-.5,-.5,0),yo,o,_o,r,s),xu(el.set(.5,-.5,0),yo,o,_o,r,s),xu(Eu.set(.5,.5,0),yo,o,_o,r,s),cS.set(0,0),lp.set(1,0),uS.set(1,1);let a=e.ray.intersectTriangle(Su,el,Eu,!1,Ja);if(a===null&&(xu(el.set(-.5,.5,0),yo,o,_o,r,s),lp.set(0,1),a=e.ray.intersectTriangle(Su,Eu,el,!1,Ja),a===null))return;const l=e.ray.origin.distanceTo(Ja);l<e.near||l>e.far||n.push({distance:l,point:Ja.clone(),uv:Gn.getInterpolation(Ja,Su,el,Eu,cS,lp,uS,new Ce),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function xu(t,e,n,i,r,s){So.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Qa.x=s*So.x-r*So.y,Qa.y=r*So.x+s*So.y):Qa.copy(So),t.copy(e),t.x+=Qa.x,t.y+=Qa.y,t.applyMatrix4(z1)}class Yl extends Ii{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new V,h=new V,p=[],m=[],v=[],g=[];for(let f=0;f<=i;f++){const _=[],y=f/i;let S=0;f===0&&o===0?S=.5/n:f===i&&l===Math.PI&&(S=-.5/n);for(let E=0;E<=n;E++){const w=E/n;d.x=-e*Math.cos(r+w*s)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(r+w*s)*Math.sin(o+y*a),m.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),g.push(w+S,1-y),_.push(c++)}u.push(_)}for(let f=0;f<i;f++)for(let _=0;_<n;_++){const y=u[f][_+1],S=u[f][_],E=u[f+1][_],w=u[f+1][_+1];(f!==0||o>0)&&p.push(y,S,w),(f!==i-1||l<Math.PI)&&p.push(S,E,w)}this.setIndex(p),this.setAttribute("position",new Xn(m,3)),this.setAttribute("normal",new Xn(v,3)),this.setAttribute("uv",new Xn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class iz extends qs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cv,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rz extends qs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cv,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const dS={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class sz{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],m=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null}}}const oz=new sz;class V1{constructor(e){this.manager=e!==void 0?e:oz,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class az extends V1{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=dS.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=ql("img");function l(){u(),dS.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class H1 extends V1{constructor(e){super(e)}load(e,n,i,r){const s=new gn,o=new az(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class lz extends vn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class G1 extends lz{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class cz{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fS(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=fS();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function fS(){return(typeof performance>"u"?Date:performance).now()}class hS{constructor(e,n,i=0,r=1/0){this.ray=new M1(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Lv,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Gm(e,this,i,n),i.sort(pS),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Gm(e[r],this,i,n);return i.sort(pS),i}}function pS(t,e){return t.distance-e.distance}function Gm(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Gm(r[s],e,n,!0)}}class mS{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(hn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rv}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rv);const gS={type:"change"},cp={type:"start"},vS={type:"end"};class W1 extends Xs{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Js.ROTATE,MIDDLE:Js.DOLLY,RIGHT:Js.PAN},this.touches={ONE:Qs.ROTATE,TWO:Qs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",tt),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",tt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(gS),i.update(),s=r.NONE},this.update=function(){const N=new V,he=new Fs().setFromUnitVectors(e.up,new V(0,1,0)),ve=he.clone().invert(),te=new V,Te=new Fs,Le=new V,Ae=2*Math.PI;return function(){const L=i.object.position;N.copy(L).sub(i.target),N.applyQuaternion(he),a.setFromVector3(N),i.autoRotate&&s===r.NONE&&x(T()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Z=i.minAzimuthAngle,de=i.maxAzimuthAngle;return isFinite(Z)&&isFinite(de)&&(Z<-Math.PI?Z+=Ae:Z>Math.PI&&(Z-=Ae),de<-Math.PI?de+=Ae:de>Math.PI&&(de-=Ae),Z<=de?a.theta=Math.max(Z,Math.min(de,a.theta)):a.theta=a.theta>(Z+de)/2?Math.max(Z,a.theta):Math.min(de,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),N.setFromSpherical(a),N.applyQuaternion(ve),L.copy(i.target).add(N),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,d||te.distanceToSquared(i.object.position)>o||8*(1-Te.dot(i.object.quaternion))>o||Le.distanceToSquared(i.target)>0?(i.dispatchEvent(gS),te.copy(i.object.position),Te.copy(i.object.quaternion),Le.copy(i.target),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",P),i.domElement.removeEventListener("pointerdown",Re),i.domElement.removeEventListener("pointercancel",we),i.domElement.removeEventListener("wheel",ke),i.domElement.removeEventListener("pointermove",Ne),i.domElement.removeEventListener("pointerup",we),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",tt),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new mS,l=new mS;let c=1;const u=new V;let d=!1;const h=new Ce,p=new Ce,m=new Ce,v=new Ce,g=new Ce,f=new Ce,_=new Ce,y=new Ce,S=new Ce,E=[],w={};function T(){return 2*Math.PI/60/60*i.autoRotateSpeed}function I(){return Math.pow(.95,i.zoomSpeed)}function x(N){l.theta-=N}function b(N){l.phi-=N}const Q=function(){const N=new V;return function(ve,te){N.setFromMatrixColumn(te,0),N.multiplyScalar(-ve),u.add(N)}}(),ue=function(){const N=new V;return function(ve,te){i.screenSpacePanning===!0?N.setFromMatrixColumn(te,1):(N.setFromMatrixColumn(te,0),N.crossVectors(i.object.up,N)),N.multiplyScalar(ve),u.add(N)}}(),k=function(){const N=new V;return function(ve,te){const Te=i.domElement;if(i.object.isPerspectiveCamera){const Le=i.object.position;N.copy(Le).sub(i.target);let Ae=N.length();Ae*=Math.tan(i.object.fov/2*Math.PI/180),Q(2*ve*Ae/Te.clientHeight,i.object.matrix),ue(2*te*Ae/Te.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Q(ve*(i.object.right-i.object.left)/i.object.zoom/Te.clientWidth,i.object.matrix),ue(te*(i.object.top-i.object.bottom)/i.object.zoom/Te.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function W(N){i.object.isPerspectiveCamera?c/=N:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*N)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(N){i.object.isPerspectiveCamera?c*=N:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/N)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ce(N){h.set(N.clientX,N.clientY)}function K(N){_.set(N.clientX,N.clientY)}function F(N){v.set(N.clientX,N.clientY)}function j(N){p.set(N.clientX,N.clientY),m.subVectors(p,h).multiplyScalar(i.rotateSpeed);const he=i.domElement;x(2*Math.PI*m.x/he.clientHeight),b(2*Math.PI*m.y/he.clientHeight),h.copy(p),i.update()}function H(N){y.set(N.clientX,N.clientY),S.subVectors(y,_),S.y>0?W(I()):S.y<0&&J(I()),_.copy(y),i.update()}function ae(N){g.set(N.clientX,N.clientY),f.subVectors(g,v).multiplyScalar(i.panSpeed),k(f.x,f.y),v.copy(g),i.update()}function M(N){N.deltaY<0?J(I()):N.deltaY>0&&W(I()),i.update()}function U(N){let he=!1;switch(N.code){case i.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?b(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,i.keyPanSpeed),he=!0;break;case i.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?b(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,-i.keyPanSpeed),he=!0;break;case i.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?x(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(i.keyPanSpeed,0),he=!0;break;case i.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?x(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(-i.keyPanSpeed,0),he=!0;break}he&&(N.preventDefault(),i.update())}function O(){if(E.length===1)h.set(E[0].pageX,E[0].pageY);else{const N=.5*(E[0].pageX+E[1].pageX),he=.5*(E[0].pageY+E[1].pageY);h.set(N,he)}}function q(){if(E.length===1)v.set(E[0].pageX,E[0].pageY);else{const N=.5*(E[0].pageX+E[1].pageX),he=.5*(E[0].pageY+E[1].pageY);v.set(N,he)}}function $(){const N=E[0].pageX-E[1].pageX,he=E[0].pageY-E[1].pageY,ve=Math.sqrt(N*N+he*he);_.set(0,ve)}function pe(){i.enableZoom&&$(),i.enablePan&&q()}function Se(){i.enableZoom&&$(),i.enableRotate&&O()}function fe(N){if(E.length==1)p.set(N.pageX,N.pageY);else{const ve=_e(N),te=.5*(N.pageX+ve.x),Te=.5*(N.pageY+ve.y);p.set(te,Te)}m.subVectors(p,h).multiplyScalar(i.rotateSpeed);const he=i.domElement;x(2*Math.PI*m.x/he.clientHeight),b(2*Math.PI*m.y/he.clientHeight),h.copy(p)}function Pe(N){if(E.length===1)g.set(N.pageX,N.pageY);else{const he=_e(N),ve=.5*(N.pageX+he.x),te=.5*(N.pageY+he.y);g.set(ve,te)}f.subVectors(g,v).multiplyScalar(i.panSpeed),k(f.x,f.y),v.copy(g)}function Ie(N){const he=_e(N),ve=N.pageX-he.x,te=N.pageY-he.y,Te=Math.sqrt(ve*ve+te*te);y.set(0,Te),S.set(0,Math.pow(y.y/_.y,i.zoomSpeed)),W(S.y),_.copy(y)}function z(N){i.enableZoom&&Ie(N),i.enablePan&&Pe(N)}function Be(N){i.enableZoom&&Ie(N),i.enableRotate&&fe(N)}function Re(N){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(N.pointerId),i.domElement.addEventListener("pointermove",Ne),i.domElement.addEventListener("pointerup",we)),R(N),N.pointerType==="touch"?Rt(N):ze(N))}function Ne(N){i.enabled!==!1&&(N.pointerType==="touch"?Pt(N):He(N))}function we(N){ne(N),E.length===0&&(i.domElement.releasePointerCapture(N.pointerId),i.domElement.removeEventListener("pointermove",Ne),i.domElement.removeEventListener("pointerup",we)),i.dispatchEvent(vS),s=r.NONE}function ze(N){let he;switch(N.button){case 0:he=i.mouseButtons.LEFT;break;case 1:he=i.mouseButtons.MIDDLE;break;case 2:he=i.mouseButtons.RIGHT;break;default:he=-1}switch(he){case Js.DOLLY:if(i.enableZoom===!1)return;K(N),s=r.DOLLY;break;case Js.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enablePan===!1)return;F(N),s=r.PAN}else{if(i.enableRotate===!1)return;ce(N),s=r.ROTATE}break;case Js.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enableRotate===!1)return;ce(N),s=r.ROTATE}else{if(i.enablePan===!1)return;F(N),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(cp)}function He(N){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;j(N);break;case r.DOLLY:if(i.enableZoom===!1)return;H(N);break;case r.PAN:if(i.enablePan===!1)return;ae(N);break}}function ke(N){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(N.preventDefault(),i.dispatchEvent(cp),M(N),i.dispatchEvent(vS))}function tt(N){i.enabled===!1||i.enablePan===!1||U(N)}function Rt(N){switch(ye(N),E.length){case 1:switch(i.touches.ONE){case Qs.ROTATE:if(i.enableRotate===!1)return;O(),s=r.TOUCH_ROTATE;break;case Qs.PAN:if(i.enablePan===!1)return;q(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Qs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;pe(),s=r.TOUCH_DOLLY_PAN;break;case Qs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Se(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(cp)}function Pt(N){switch(ye(N),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;fe(N),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Pe(N),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;z(N),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Be(N),i.update();break;default:s=r.NONE}}function P(N){i.enabled!==!1&&N.preventDefault()}function R(N){E.push(N)}function ne(N){delete w[N.pointerId];for(let he=0;he<E.length;he++)if(E[he].pointerId==N.pointerId){E.splice(he,1);return}}function ye(N){let he=w[N.pointerId];he===void 0&&(he=new Ce,w[N.pointerId]=he),he.set(N.pageX,N.pageY)}function _e(N){const he=N.pointerId===E[0].pointerId?E[1]:E[0];return w[he.pointerId]}i.domElement.addEventListener("contextmenu",P),i.domElement.addEventListener("pointerdown",Re),i.domElement.addEventListener("pointercancel",we),i.domElement.addEventListener("wheel",ke,{passive:!1}),this.update()}}const $1={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class _c{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const uz=new N1(-1,1,1,-1,0,1),Uv=new Ii;Uv.setAttribute("position",new Xn([-1,3,0,-1,-1,0,3,-1,0],3));Uv.setAttribute("uv",new Xn([0,2,0,0,2,0],2));class j1{constructor(e){this._mesh=new $n(Uv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,uz)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class dz extends _c{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Un?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Cd.clone(e.uniforms),this.material=new Un({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new j1(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _S extends _c{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class fz extends _c{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class X1{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Ce);this._width=i.width,this._height=i.height,n=new hi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qi}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new dz($1),this.clock=new cz}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}_S!==void 0&&(o instanceof _S?i=!0:o instanceof fz&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class q1 extends _c{constructor(e,n,i,r,s){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Qe}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}const hz={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Qe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Bs extends _c{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ce(e.x,e.y):new Ce(256,256),this.clearColor=new Qe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new hi(s,o,{type:Qi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new hi(s,o,{type:Qi});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const p=new hi(s,o,{type:Qi});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=hz;this.highPassUniforms=Cd.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Un({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.texSize.value=new Ce(s,o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=$1;this.copyUniforms=Cd.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Un({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Im,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Qe,this.oldClearAlpha=1,this.basic=new Lf,this.fsQuad=new j1(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.texSize.value=new Ce(i,r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Bs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Bs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new Un({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Ce(.5,.5)},direction:{value:new Ce(.5,.5)}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Un({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Bs.BlurDirectionX=new Ce(1,0);Bs.BlurDirectionY=new Ce(0,1);Date.now===void 0&&(Date.now=function(){return new Date().valueOf()});var sn=sn||function(){var t=[];return{REVISION:"8",getAll:function(){return t},removeAll:function(){t=[]},add:function(e){t.push(e)},remove:function(e){var n=t.indexOf(e);n!==-1&&t.splice(n,1)},update:function(e){if(t.length===0)return!1;var n=0,i=t.length;for(e=e!==void 0?e:Date.now();n<i;)t[n].update(e)?n++:(t.splice(n,1),i--);return!0}}}();sn.Tween=function(t){var e=t,n={},i={},r=1e3,s=0,o=null,a=sn.Easing.Linear.None,l=sn.Interpolation.Linear,c=[],u=null,d=!1,h=null,p=null;this.to=function(m,v){return v!==void 0&&(r=v),i=m,this},this.start=function(m){sn.add(this),d=!1,o=m!==void 0?m:Date.now(),o+=s;for(var v in i)if(!(e[v]===null||!(v in e))){if(i[v]instanceof Array){if(i[v].length===0)continue;i[v]=[e[v]].concat(i[v])}n[v]=e[v]}return this},this.stop=function(){return sn.remove(this),this},this.delay=function(m){return s=m,this},this.easing=function(m){return a=m,this},this.interpolation=function(m){return l=m,this},this.chain=function(){return c=arguments,this},this.onStart=function(m){return u=m,this},this.onUpdate=function(m){return h=m,this},this.onComplete=function(m){return p=m,this},this.update=function(m){if(m<o)return!0;d===!1&&(u!==null&&u.call(e),d=!0);var v=(m-o)/r;v=v>1?1:v;var g=a(v);for(var f in n){var _=n[f],y=i[f];y instanceof Array?e[f]=l(y,g):e[f]=_+(y-_)*g}if(h!==null&&h.call(e,g),v==1){p!==null&&p.call(e);for(var S=0,E=c.length;S<E;S++)c[S].start(m);return!1}return!0}};sn.Easing={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return .5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return t===0?0:Math.pow(1024,t-1)},Out:function(t){return t===1?1:1-Math.pow(2,-10*t)},InOut:function(t){return t===0?0:t===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){var e,n=.1,i=.4;return t===0?0:t===1?1:(!n||n<1?(n=1,e=i/4):e=i*Math.asin(1/n)/(2*Math.PI),-(n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)))},Out:function(t){var e,n=.1,i=.4;return t===0?0:t===1?1:(!n||n<1?(n=1,e=i/4):e=i*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/i)+1)},InOut:function(t){var e,n=.1,i=.4;return t===0?0:t===1?1:(!n||n<1?(n=1,e=i/4):e=i*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?-.5*(n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)):n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)*.5+1)}},Back:{In:function(t){var e=1.70158;return t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}},Bounce:{In:function(t){return 1-sn.Easing.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?sn.Easing.Bounce.In(t*2)*.5:sn.Easing.Bounce.Out(t*2-1)*.5+.5}}};sn.Interpolation={Linear:function(t,e){var n=t.length-1,i=n*e,r=Math.floor(i),s=sn.Interpolation.Utils.Linear;return e<0?s(t[0],t[1],i):e>1?s(t[n],t[n-1],n-i):s(t[r],t[r+1>n?n:r+1],i-r)},Bezier:function(t,e){var n=0,i=t.length-1,r=Math.pow,s=sn.Interpolation.Utils.Bernstein,o;for(o=0;o<=i;o++)n+=r(1-e,i-o)*r(e,o)*t[o]*s(i,o);return n},CatmullRom:function(t,e){var n=t.length-1,i=n*e,r=Math.floor(i),s=sn.Interpolation.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(r=Math.floor(i=n*(1+e))),s(t[(r-1+n)%n],t[r],t[(r+1)%n],t[(r+2)%n],i-r)):e<0?t[0]-(s(t[0],t[0],t[1],t[1],-i)-t[0]):e>1?t[n]-(s(t[n],t[n],t[n-1],t[n-1],i-n)-t[n]):s(t[r?r-1:0],t[r],t[n<r+1?n:r+1],t[n<r+2?n:r+2],i-r)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=sn.Interpolation.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1,i;if(t[e])return t[e];for(i=e;i>1;i--)n*=i;return t[e]=n}}(),CatmullRom:function(t,e,n,i,r){var s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}}};var yi=sn;function pz(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,r,s,o,a=[],l=!0,c=!1;try{if(s=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=s.call(n)).done)&&(a.push(i.value),a.length!==e);l=!0);}catch(u){c=!0,r=u}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw r}}return a}}function mz(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function yS(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,Az(i.key),i)}}function gz(t,e,n){return e&&yS(t.prototype,e),n&&yS(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function vz(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Wm(t,e)}function Ld(t){return Ld=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ld(t)}function Wm(t,e){return Wm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Wm(t,e)}function _z(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function yz(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Sz(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return yz(t)}function Ez(t){var e=_z();return function(){var i=Ld(t),r;if(e){var s=Ld(this).constructor;r=Reflect.construct(i,arguments,s)}else r=i.apply(this,arguments);return Sz(this,r)}}function SS(t,e){return wz(t)||pz(t,e)||Y1(t,e)||Rz()}function wu(t){return xz(t)||Mz(t)||Y1(t)||Tz()}function xz(t){if(Array.isArray(t))return $m(t)}function wz(t){if(Array.isArray(t))return t}function Mz(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Y1(t,e){if(t){if(typeof t=="string")return $m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $m(t,e)}}function $m(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Tz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bz(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Az(t){var e=bz(t,"string");return typeof e=="symbol"?e:String(e)}var Eo=typeof window<"u"&&window.THREE?window.THREE:{LinearFilter:wt,Sprite:nz,SpriteMaterial:B1,SRGBColorSpace:je,Texture:gn},Cz=function(t){vz(n,t);var e=Ez(n);function n(){var i,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:10,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"rgba(255, 255, 255, 1)";return mz(this,n),i=e.call(this,new Eo.SpriteMaterial),i._text="".concat(r),i._textHeight=s,i._color=o,i._backgroundColor=!1,i._padding=0,i._borderWidth=0,i._borderRadius=0,i._borderColor="white",i._strokeWidth=0,i._strokeColor="white",i._fontFace="system-ui",i._fontSize=90,i._fontWeight="normal",i._canvas=document.createElement("canvas"),i._genCanvas(),i}return gz(n,[{key:"text",get:function(){return this._text},set:function(r){this._text=r,this._genCanvas()}},{key:"textHeight",get:function(){return this._textHeight},set:function(r){this._textHeight=r,this._genCanvas()}},{key:"color",get:function(){return this._color},set:function(r){this._color=r,this._genCanvas()}},{key:"backgroundColor",get:function(){return this._backgroundColor},set:function(r){this._backgroundColor=r,this._genCanvas()}},{key:"padding",get:function(){return this._padding},set:function(r){this._padding=r,this._genCanvas()}},{key:"borderWidth",get:function(){return this._borderWidth},set:function(r){this._borderWidth=r,this._genCanvas()}},{key:"borderRadius",get:function(){return this._borderRadius},set:function(r){this._borderRadius=r,this._genCanvas()}},{key:"borderColor",get:function(){return this._borderColor},set:function(r){this._borderColor=r,this._genCanvas()}},{key:"fontFace",get:function(){return this._fontFace},set:function(r){this._fontFace=r,this._genCanvas()}},{key:"fontSize",get:function(){return this._fontSize},set:function(r){this._fontSize=r,this._genCanvas()}},{key:"fontWeight",get:function(){return this._fontWeight},set:function(r){this._fontWeight=r,this._genCanvas()}},{key:"strokeWidth",get:function(){return this._strokeWidth},set:function(r){this._strokeWidth=r,this._genCanvas()}},{key:"strokeColor",get:function(){return this._strokeColor},set:function(r){this._strokeColor=r,this._genCanvas()}},{key:"_genCanvas",value:function(){var r=this,s=this._canvas,o=s.getContext("2d"),a=Array.isArray(this.borderWidth)?this.borderWidth:[this.borderWidth,this.borderWidth],l=a.map(function(I){return I*r.fontSize*.1}),c=Array.isArray(this.borderRadius)?this.borderRadius:[this.borderRadius,this.borderRadius,this.borderRadius,this.borderRadius],u=c.map(function(I){return I*r.fontSize*.1}),d=Array.isArray(this.padding)?this.padding:[this.padding,this.padding],h=d.map(function(I){return I*r.fontSize*.1}),p=this.text.split(`
`),m="".concat(this.fontWeight," ").concat(this.fontSize,"px ").concat(this.fontFace);o.font=m;var v=Math.max.apply(Math,wu(p.map(function(I){return o.measureText(I).width}))),g=this.fontSize*p.length;if(s.width=v+l[0]*2+h[0]*2,s.height=g+l[1]*2+h[1]*2,this.borderWidth){if(o.strokeStyle=this.borderColor,l[0]){var f=l[0]/2;o.lineWidth=l[0],o.beginPath(),o.moveTo(f,u[0]),o.lineTo(f,s.height-u[3]),o.moveTo(s.width-f,u[1]),o.lineTo(s.width-f,s.height-u[2]),o.stroke()}if(l[1]){var _=l[1]/2;o.lineWidth=l[1],o.beginPath(),o.moveTo(Math.max(l[0],u[0]),_),o.lineTo(s.width-Math.max(l[0],u[1]),_),o.moveTo(Math.max(l[0],u[3]),s.height-_),o.lineTo(s.width-Math.max(l[0],u[2]),s.height-_),o.stroke()}if(this.borderRadius){var y=Math.max.apply(Math,wu(l)),S=y/2;o.lineWidth=y,o.beginPath(),[!!u[0]&&[u[0],S,S,u[0]],!!u[1]&&[s.width-u[1],s.width-S,S,u[1]],!!u[2]&&[s.width-u[2],s.width-S,s.height-S,s.height-u[2]],!!u[3]&&[u[3],S,s.height-S,s.height-u[3]]].filter(function(I){return I}).forEach(function(I){var x=SS(I,4),b=x[0],Q=x[1],ue=x[2],k=x[3];o.moveTo(b,ue),o.quadraticCurveTo(Q,ue,Q,k)}),o.stroke()}}this.backgroundColor&&(o.fillStyle=this.backgroundColor,this.borderRadius?(o.beginPath(),o.moveTo(l[0],u[0]),[[l[0],u[0],s.width-u[1],l[1],l[1],l[1]],[s.width-l[0],s.width-l[0],s.width-l[0],l[1],u[1],s.height-u[2]],[s.width-l[0],s.width-u[2],u[3],s.height-l[1],s.height-l[1],s.height-l[1]],[l[0],l[0],l[0],s.height-l[1],s.height-u[3],u[0]]].forEach(function(I){var x=SS(I,6),b=x[0],Q=x[1],ue=x[2],k=x[3],W=x[4],J=x[5];o.quadraticCurveTo(b,k,Q,W),o.lineTo(ue,J)}),o.closePath(),o.fill()):o.fillRect(l[0],l[1],s.width-l[0]*2,s.height-l[1]*2)),o.translate.apply(o,wu(l)),o.translate.apply(o,wu(h)),o.font=m,o.fillStyle=this.color,o.textBaseline="bottom";var E=this.strokeWidth>0;E&&(o.lineWidth=this.strokeWidth*this.fontSize/10,o.strokeStyle=this.strokeColor),p.forEach(function(I,x){var b=(v-o.measureText(I).width)/2,Q=(x+1)*r.fontSize;E&&o.strokeText(I,b,Q),o.fillText(I,b,Q)}),this.material.map&&this.material.map.dispose();var w=this.material.map=new Eo.Texture(s);w.minFilter=Eo.LinearFilter,w.colorSpace=Eo.SRGBColorSpace,w.needsUpdate=!0;var T=this.textHeight*p.length+a[1]*2+d[1]*2;this.scale.set(T*s.width/s.height,T,0)}},{key:"clone",value:function(){return new this.constructor(this.text,this.textHeight,this.color).copy(this)}},{key:"copy",value:function(r){return Eo.Sprite.prototype.copy.call(this,r),this.color=r.color,this.backgroundColor=r.backgroundColor,this.padding=r.padding,this.borderWidth=r.borderWidth,this.borderColor=r.borderColor,this.fontFace=r.fontFace,this.fontSize=r.fontSize,this.fontWeight=r.fontWeight,this.strokeWidth=r.strokeWidth,this.strokeColor=r.strokeColor,this}}]),n}(Eo.Sprite);const Pz=Jr({key:"cameraPositionState",default:{x:-.9587738871461505,y:.9319559440928621,z:-1.2050770728864884}}),K1=Jr({key:"isInfo",default:!1}),Z1=Jr({key:"isLogin",default:!1}),J1=Jr({key:"loginModal",default:!1}),Lz=Jr({key:"awarness",default:!1}),Ov=Jr({key:"pollutionLevel",default:0});Jr({key:"nickName",default:0});const Q1=Jr({key:"aboutStarryNight",default:!1}),Iz=[{country:"USA",camera:[-.2822325106742257,.9532250576577977,1.5005688252698752],location:{x:-.12670699972228983,y:.6039677812542492,z:.7830959792536895},pollutionLevel:.04},{country:"Korea",camera:[-.9587738871461505,.9319559440928621,-1.2050770728864884],location:{x:-.49879323913105933,y:.5913538811548442,z:-.6269301914101888},pollutionLevel:.02},{country:"UK",camera:[1.2052988948723735,1.3365621693103256,.02925989726484939],location:{x:.5922042811536482,y:.8013771570505241,z:.04001266993980511},pollutionLevel:.02},{country:"France",camera:[1.4261269232814708,1.0934100177132018,-.10303655592182832],location:{x:.6771773887308716,y:.7297435793079781,z:-.050293944220296295},pollutionLevel:.02},{country:"UAE",camera:[.9535914048560857,.6163384646057484,-1.3967069591120684],location:{x:.5028050855694319,y:.4035673356528914,z:-.7626308119537839},pollutionLevel:.02},{country:"Hong Kong",camera:[-.6264432344777228,.547452469624944,-1.5962032036926526],location:{x:-.3732289786266302,y:.3798922154299702,z:-.8441635610047926},pollutionLevel:.02},{country:"Mongolia",camera:[-.4197510833475272,1.0700726762552437,-1.3851907794814935],location:{x:-.20508661744206055,y:.7023019069661721,z:-.677683102394783},pollutionLevel:.8},{country:"Iceland",camera:[.8398362789792045,1.5715296370056615,.25489139750743106],location:{x:.4076212070054628,y:.9014316342520152,z:.1309234930268016},pollutionLevel:.8},{country:"Egypt",camera:[1.5580714142906211,.6640141080244135,-.6095069583811987],location:{x:.7823682956301422,y:.453911550073803,z:-.41561040979926633},pollutionLevel:.5},{country:"Brazil",camera:[1.0008800214073188,-.41932512244816106,1.4361078039031605],location:{x:.6115274304666978,y:-.18977805644560097,z:.7618239327619037},pollutionLevel:.5}];/**
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
 */const eT=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Nz=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},tT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(h=64)),i.push(n[u],n[d],n[h],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(eT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Nz(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||d==null)throw new Dz;const h=s<<2|a>>4;if(i.push(h),c!==64){const p=a<<4&240|c>>2;if(i.push(p),d!==64){const m=c<<6&192|d;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Dz extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uz=function(t){const e=eT(t);return tT.encodeByteArray(e,!0)},nT=function(t){return Uz(t).replace(/\./g,"")},iT=function(t){try{return tT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Oz(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kz=()=>Oz().__FIREBASE_DEFAULTS__,Fz=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Bz=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&iT(t[1]);return e&&JSON.parse(e)},kv=()=>{try{return kz()||Fz()||Bz()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zz=t=>{var e,n;return(n=(e=kv())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rT=()=>{var t;return(t=kv())===null||t===void 0?void 0:t.config},sT=t=>{var e;return(e=kv())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Vz{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function an(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hz(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(an())}function Gz(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Wz(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $z(){const t=an();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jz(){try{return typeof indexedDB=="object"}catch{return!1}}function Xz(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const qz="FirebaseError";class Qr extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=qz,Object.setPrototypeOf(this,Qr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yc.prototype.create)}}class yc{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?Yz(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Qr(r,a,i)}}function Yz(t,e){return t.replace(Kz,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const Kz=/\{\$([^}]+)}/g;function Zz(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Id(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(ES(s)&&ES(o)){if(!Id(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function ES(t){return t!==null&&typeof t=="object"}/**
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
 */function Sc(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function cl(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function ul(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Jz(t,e){const n=new Qz(t,e);return n.subscribe.bind(n)}class Qz{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");e5(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=up),r.error===void 0&&(r.error=up),r.complete===void 0&&(r.complete=up);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function e5(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function up(){}/**
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
 */function Ys(t){return t&&t._delegate?t._delegate:t}class ha{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hs="[DEFAULT]";/**
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
 */class t5{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Vz;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(i5(e))try{this.getOrInitializeService({instanceIdentifier:hs})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hs){return this.instances.has(e)}getOptions(e=hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:n5(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=hs){return this.component?this.component.multipleInstances?e:hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function n5(t){return t===hs?void 0:t}function i5(t){return t.instantiationMode==="EAGER"}/**
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
 */class r5{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new t5(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ut;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ut||(ut={}));const s5={debug:ut.DEBUG,verbose:ut.VERBOSE,info:ut.INFO,warn:ut.WARN,error:ut.ERROR,silent:ut.SILENT},o5=ut.INFO,a5={[ut.DEBUG]:"log",[ut.VERBOSE]:"log",[ut.INFO]:"info",[ut.WARN]:"warn",[ut.ERROR]:"error"},l5=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=a5[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oT{constructor(e){this.name=e,this._logLevel=o5,this._logHandler=l5,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ut))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?s5[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ut.DEBUG,...e),this._logHandler(this,ut.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ut.VERBOSE,...e),this._logHandler(this,ut.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ut.INFO,...e),this._logHandler(this,ut.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ut.WARN,...e),this._logHandler(this,ut.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ut.ERROR,...e),this._logHandler(this,ut.ERROR,...e)}}const c5=(t,e)=>e.some(n=>t instanceof n);let xS,wS;function u5(){return xS||(xS=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function d5(){return wS||(wS=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const aT=new WeakMap,jm=new WeakMap,lT=new WeakMap,dp=new WeakMap,Fv=new WeakMap;function f5(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Hr(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&aT.set(n,t)}).catch(()=>{}),Fv.set(e,t),e}function h5(t){if(jm.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});jm.set(t,e)}let Xm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function p5(t){Xm=t(Xm)}function m5(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(fp(this),e,...n);return lT.set(i,e.sort?e.sort():[e]),Hr(i)}:d5().includes(t)?function(...e){return t.apply(fp(this),e),Hr(aT.get(this))}:function(...e){return Hr(t.apply(fp(this),e))}}function g5(t){return typeof t=="function"?m5(t):(t instanceof IDBTransaction&&h5(t),c5(t,u5())?new Proxy(t,Xm):t)}function Hr(t){if(t instanceof IDBRequest)return f5(t);if(dp.has(t))return dp.get(t);const e=g5(t);return e!==t&&(dp.set(t,e),Fv.set(e,t)),e}const fp=t=>Fv.get(t);function v5(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Hr(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Hr(o.result),l.oldVersion,l.newVersion,Hr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const _5=["get","getKey","getAll","getAllKeys","count"],y5=["put","add","delete","clear"],hp=new Map;function MS(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hp.get(e))return hp.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=y5.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||_5.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return hp.set(e,s),s}p5(t=>({...t,get:(e,n,i)=>MS(e,n)||t.get(e,n,i),has:(e,n)=>!!MS(e,n)||t.has(e,n)}));/**
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
 */class S5{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(E5(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function E5(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qm="@firebase/app",TS="0.9.12";/**
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
 */const zs=new oT("@firebase/app"),x5="@firebase/app-compat",w5="@firebase/analytics-compat",M5="@firebase/analytics",T5="@firebase/app-check-compat",R5="@firebase/app-check",b5="@firebase/auth",A5="@firebase/auth-compat",C5="@firebase/database",P5="@firebase/database-compat",L5="@firebase/functions",I5="@firebase/functions-compat",N5="@firebase/installations",D5="@firebase/installations-compat",U5="@firebase/messaging",O5="@firebase/messaging-compat",k5="@firebase/performance",F5="@firebase/performance-compat",B5="@firebase/remote-config",z5="@firebase/remote-config-compat",V5="@firebase/storage",H5="@firebase/storage-compat",G5="@firebase/firestore",W5="@firebase/firestore-compat",$5="firebase",j5="9.22.2";/**
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
 */const Ym="[DEFAULT]",X5={[qm]:"fire-core",[x5]:"fire-core-compat",[M5]:"fire-analytics",[w5]:"fire-analytics-compat",[R5]:"fire-app-check",[T5]:"fire-app-check-compat",[b5]:"fire-auth",[A5]:"fire-auth-compat",[C5]:"fire-rtdb",[P5]:"fire-rtdb-compat",[L5]:"fire-fn",[I5]:"fire-fn-compat",[N5]:"fire-iid",[D5]:"fire-iid-compat",[U5]:"fire-fcm",[O5]:"fire-fcm-compat",[k5]:"fire-perf",[F5]:"fire-perf-compat",[B5]:"fire-rc",[z5]:"fire-rc-compat",[V5]:"fire-gcs",[H5]:"fire-gcs-compat",[G5]:"fire-fst",[W5]:"fire-fst-compat","fire-js":"fire-js",[$5]:"fire-js-all"};/**
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
 */const Nd=new Map,Km=new Map;function q5(t,e){try{t.container.addComponent(e)}catch(n){zs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kl(t){const e=t.name;if(Km.has(e))return zs.debug(`There were multiple attempts to register component ${e}.`),!1;Km.set(e,t);for(const n of Nd.values())q5(n,t);return!0}function cT(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Y5={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gr=new yc("app","Firebase",Y5);/**
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
 */class K5{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ha("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ec=j5;function uT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ym,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Gr.create("bad-app-name",{appName:String(r)});if(n||(n=rT()),!n)throw Gr.create("no-options");const s=Nd.get(r);if(s){if(Id(n,s.options)&&Id(i,s.config))return s;throw Gr.create("duplicate-app",{appName:r})}const o=new r5(r);for(const l of Km.values())o.addComponent(l);const a=new K5(n,i,o);return Nd.set(r,a),a}function Z5(t=Ym){const e=Nd.get(t);if(!e&&t===Ym&&rT())return uT();if(!e)throw Gr.create("no-app",{appName:t});return e}function qo(t,e,n){var i;let r=(i=X5[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zs.warn(a.join(" "));return}Kl(new ha(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const J5="firebase-heartbeat-database",Q5=1,Zl="firebase-heartbeat-store";let pp=null;function dT(){return pp||(pp=v5(J5,Q5,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zl)}}}).catch(t=>{throw Gr.create("idb-open",{originalErrorMessage:t.message})})),pp}async function e6(t){try{return await(await dT()).transaction(Zl).objectStore(Zl).get(fT(t))}catch(e){if(e instanceof Qr)zs.warn(e.message);else{const n=Gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zs.warn(n.message)}}}async function RS(t,e){try{const i=(await dT()).transaction(Zl,"readwrite");await i.objectStore(Zl).put(e,fT(t)),await i.done}catch(n){if(n instanceof Qr)zs.warn(n.message);else{const i=Gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zs.warn(i.message)}}}function fT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const t6=1024,n6=30*24*60*60*1e3;class i6{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new s6(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=bS();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=n6}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bS(),{heartbeatsToSend:n,unsentEntries:i}=r6(this._heartbeatsCache.heartbeats),r=nT(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function bS(){return new Date().toISOString().substring(0,10)}function r6(t,e=t6){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),AS(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),AS(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class s6{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jz()?Xz().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await e6(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return RS(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return RS(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function AS(t){return nT(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function o6(t){Kl(new ha("platform-logger",e=>new S5(e),"PRIVATE")),Kl(new ha("heartbeat",e=>new i6(e),"PRIVATE")),qo(qm,TS,t),qo(qm,TS,"esm2017"),qo("fire-js","")}o6("");var a6="firebase",l6="9.22.2";/**
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
 */qo(a6,l6,"app");var xn=function(){return xn=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},xn.apply(this,arguments)};function Bv(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function Jl(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return t.concat(s||Array.prototype.slice.call(e))}function hT(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c6=hT,pT=new yc("auth","Firebase",hT());/**
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
 */const Dd=new oT("@firebase/auth");function u6(t,...e){Dd.logLevel<=ut.WARN&&Dd.warn(`Auth (${Ec}): ${t}`,...e)}function Vu(t,...e){Dd.logLevel<=ut.ERROR&&Dd.error(`Auth (${Ec}): ${t}`,...e)}/**
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
 */function Zn(t,...e){throw zv(t,...e)}function bi(t,...e){return zv(t,...e)}function mT(t,e,n){const i=Object.assign(Object.assign({},c6()),{[e]:n});return new yc("auth","Firebase",i).create(e,{appName:t.name})}function d6(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&Zn(t,"argument-error"),mT(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zv(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return pT.create(t,...e)}function Oe(t,e,...n){if(!t)throw zv(e,...n)}function Yi(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vu(e),new Error(e)}function sr(t,e){t||Yi(e)}/**
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
 */function Zm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function f6(){return CS()==="http:"||CS()==="https:"}function CS(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function h6(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(f6()||Gz()||"connection"in navigator)?navigator.onLine:!0}function p6(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xc{constructor(e,n){this.shortDelay=e,this.longDelay=n,sr(n>e,"Short delay should be less than long delay!"),this.isMobile=Hz()||Wz()}get(){return h6()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Vv(t,e){sr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class gT{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Yi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Yi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Yi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const m6={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const g6=new xc(3e4,6e4);function Aa(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ca(t,e,n,i,r={}){return vT(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Sc(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),gT.fetch()(_T(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function vT(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},m6),e);try{const r=new v6(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Mu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Mu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Mu(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw mT(t,u,c);Zn(t,u)}}catch(r){if(r instanceof Qr)throw r;Zn(t,"network-request-failed",{message:String(r)})}}async function wc(t,e,n,i,r={}){const s=await Ca(t,e,n,i,r);return"mfaPendingCredential"in s&&Zn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function _T(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?Vv(t.config,r):`${t.config.apiScheme}://${r}`}class v6{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(bi(this.auth,"network-request-failed")),g6.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Mu(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=bi(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */async function _6(t,e){return Ca(t,"POST","/v1/accounts:delete",e)}async function y6(t,e){return Ca(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Rl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function S6(t,e=!1){const n=Ys(t),i=await n.getIdToken(e),r=Hv(i);Oe(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Rl(mp(r.auth_time)),issuedAtTime:Rl(mp(r.iat)),expirationTime:Rl(mp(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function mp(t){return Number(t)*1e3}function Hv(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Vu("JWT malformed, contained fewer than 3 sections"),null;try{const r=iT(n);return r?JSON.parse(r):(Vu("Failed to decode base64 JWT payload"),null)}catch(r){return Vu("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function E6(t){const e=Hv(t);return Oe(e,"internal-error"),Oe(typeof e.exp<"u","internal-error"),Oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ql(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Qr&&x6(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function x6({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class w6{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class yT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rl(this.lastLoginAt),this.creationTime=Rl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ud(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Ql(t,y6(n,{idToken:i}));Oe(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?R6(s.providerUserInfo):[],a=T6(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new yT(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function M6(t){const e=Ys(t);await Ud(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function T6(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function R6(t){return t.map(e=>{var{providerId:n}=e,i=Bv(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function b6(t,e){const n=await vT(t,{},async()=>{const i=Sc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=_T(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gT.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ec{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Oe(e.idToken,"internal-error"),Oe(typeof e.idToken<"u","internal-error"),Oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):E6(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Oe(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await b6(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new ec;return i&&(Oe(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(Oe(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(Oe(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ec,this.toJSON())}_performRefresh(){return Yi("not implemented")}}/**
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
 */function pr(t,e){Oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class As{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=Bv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new w6(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new yT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ql(this,this.stsTokenManager.getToken(this.auth,e));return Oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return S6(this,e)}reload(){return M6(this)}_assign(e){this!==e&&(Oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new As(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Ud(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ql(this,_6(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:y,emailVerified:S,isAnonymous:E,providerData:w,stsTokenManager:T}=n;Oe(y&&T,e,"internal-error");const I=ec.fromJSON(this.name,T);Oe(typeof y=="string",e,"internal-error"),pr(d,e.name),pr(h,e.name),Oe(typeof S=="boolean",e,"internal-error"),Oe(typeof E=="boolean",e,"internal-error"),pr(p,e.name),pr(m,e.name),pr(v,e.name),pr(g,e.name),pr(f,e.name),pr(_,e.name);const x=new As({uid:y,auth:e,email:h,emailVerified:S,displayName:d,isAnonymous:E,photoURL:m,phoneNumber:p,tenantId:v,stsTokenManager:I,createdAt:f,lastLoginAt:_});return w&&Array.isArray(w)&&(x.providerData=w.map(b=>Object.assign({},b))),g&&(x._redirectEventId=g),x}static async _fromIdTokenResponse(e,n,i=!1){const r=new ec;r.updateFromServerResponse(n);const s=new As({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Ud(s),s}}/**
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
 */const PS=new Map;function Ki(t){sr(t instanceof Function,"Expected a class definition");let e=PS.get(t);return e?(sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,PS.set(t,e),e)}/**
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
 */class ST{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ST.type="NONE";const LS=ST;/**
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
 */function Hu(t,e,n){return`firebase:${t}:${e}:${n}`}class Yo{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Hu(this.userKey,r.apiKey,s),this.fullPersistenceKey=Hu("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?As._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Yo(Ki(LS),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||Ki(LS);const o=Hu(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=As._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Yo(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Yo(s,e,i))}}/**
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
 */function IS(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ET(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(TT(e))return"Blackberry";if(RT(e))return"Webos";if(Gv(e))return"Safari";if((e.includes("chrome/")||xT(e))&&!e.includes("edge/"))return"Chrome";if(MT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function ET(t=an()){return/firefox\//i.test(t)}function Gv(t=an()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xT(t=an()){return/crios\//i.test(t)}function wT(t=an()){return/iemobile/i.test(t)}function MT(t=an()){return/android/i.test(t)}function TT(t=an()){return/blackberry/i.test(t)}function RT(t=an()){return/webos/i.test(t)}function Nf(t=an()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function A6(t=an()){var e;return Nf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function C6(){return $z()&&document.documentMode===10}function bT(t=an()){return Nf(t)||MT(t)||RT(t)||TT(t)||/windows phone/i.test(t)||wT(t)}function P6(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function AT(t,e=[]){let n;switch(t){case"Browser":n=IS(an());break;case"Worker":n=`${IS(an())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ec}/${i}`}async function CT(t,e){return Ca(t,"GET","/v2/recaptchaConfig",Aa(t,e))}function NS(t){return t!==void 0&&t.enterprise!==void 0}class PT{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function L6(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function LT(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=bi("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",L6().appendChild(i)})}function I6(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const N6="https://www.google.com/recaptcha/enterprise.js?render=",D6="recaptcha-enterprise",U6="NO_RECAPTCHA";class IT{constructor(e){this.type=D6,this.auth=es(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{CT(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new PT(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;NS(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(U6)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&NS(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}LT(N6+a).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Od(t,e,n,i=!1){const r=new IT(t);let s;try{s=await r.verify(n)}catch{s=await r.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class O6{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class k6{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new DS(this),this.idTokenSubscription=new DS(this),this.beforeStateQueue=new O6(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ki(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Yo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ud(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=p6()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ys(e):null;return n&&Oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ki(e))})}async initializeRecaptchaConfig(){const e=await CT(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new PT(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new IT(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yc("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ki(e)||this._popupRedirectResolver;Oe(n,this,"argument-error"),this.redirectPersistenceManager=await Yo.create(this,[Ki(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Oe(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=AT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&u6(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function es(t){return Ys(t)}class DS{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jz(n=>this.observer=n)}get next(){return Oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function F6(t,e){const n=cT(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Id(s,e??{}))return r;Zn(r,"already-initialized")}return n.initialize({options:e})}function B6(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ki);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function z6(t,e,n){const i=es(t);Oe(i._canInitEmulator,i,"emulator-config-failed"),Oe(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=NT(e),{host:o,port:a}=V6(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||H6()}function NT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function V6(t){const e=NT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:US(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:US(o)}}}function US(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function H6(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Wv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yi("not implemented")}_getIdTokenResponse(e){return Yi("not implemented")}_linkToIdToken(e,n){return Yi("not implemented")}_getReauthenticationResolver(e){return Yi("not implemented")}}async function G6(t,e){return Ca(t,"POST","/v1/accounts:update",e)}/**
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
 */async function gp(t,e){return wc(t,"POST","/v1/accounts:signInWithPassword",Aa(t,e))}/**
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
 */async function W6(t,e){return wc(t,"POST","/v1/accounts:signInWithEmailLink",Aa(t,e))}async function $6(t,e){return wc(t,"POST","/v1/accounts:signInWithEmailLink",Aa(t,e))}/**
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
 */class tc extends Wv{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new tc(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new tc(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await Od(e,i,"signInWithPassword");return gp(e,r)}else return gp(e,i).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Od(e,i,"signInWithPassword");return gp(e,s)}else return Promise.reject(r)});case"emailLink":return W6(e,{email:this._email,oobCode:this._password});default:Zn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return G6(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $6(e,{idToken:n,email:this._email,oobCode:this._password});default:Zn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ko(t,e){return wc(t,"POST","/v1/accounts:signInWithIdp",Aa(t,e))}/**
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
 */const j6="http://localhost";class Vs extends Wv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=Bv(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Vs(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ko(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Ko(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ko(e,n)}buildRequest(){const e={requestUri:j6,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Sc(n)}return e}}/**
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
 */function X6(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function q6(t){const e=cl(ul(t)).link,n=e?cl(ul(e)).deep_link_id:null,i=cl(ul(t)).deep_link_id;return(i?cl(ul(i)).link:null)||i||n||e||t}class $v{constructor(e){var n,i,r,s,o,a;const l=cl(ul(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,d=X6((r=l.mode)!==null&&r!==void 0?r:null);Oe(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=q6(e);try{return new $v(n)}catch{return null}}}/**
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
 */class Pa{constructor(){this.providerId=Pa.PROVIDER_ID}static credential(e,n){return tc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=$v.parseLink(n);return Oe(i,"argument-error"),tc._fromEmailAndCode(e,i.code,i.tenantId)}}Pa.PROVIDER_ID="password";Pa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class jv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mc extends jv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xr extends Mc{constructor(){super("facebook.com")}static credential(e){return Vs._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";xr.PROVIDER_ID="facebook.com";/**
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
 */class $i extends Mc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vs._fromParams({providerId:$i.PROVIDER_ID,signInMethod:$i.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $i.credentialFromTaggedObject(e)}static credentialFromError(e){return $i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return $i.credential(n,i)}catch{return null}}}$i.GOOGLE_SIGN_IN_METHOD="google.com";$i.PROVIDER_ID="google.com";/**
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
 */class wr extends Mc{constructor(){super("github.com")}static credential(e){return Vs._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.GITHUB_SIGN_IN_METHOD="github.com";wr.PROVIDER_ID="github.com";/**
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
 */class Mr extends Mc{constructor(){super("twitter.com")}static credential(e,n){return Vs._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Mr.credential(n,i)}catch{return null}}}Mr.TWITTER_SIGN_IN_METHOD="twitter.com";Mr.PROVIDER_ID="twitter.com";/**
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
 */async function vp(t,e){return wc(t,"POST","/v1/accounts:signUp",Aa(t,e))}/**
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
 */class Hs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await As._fromIdTokenResponse(e,i,r),o=OS(i);return new Hs({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=OS(i);return new Hs({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function OS(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class kd extends Qr{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,kd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new kd(e,n,i,r)}}function DT(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?kd._fromErrorAndOperation(t,s,e,i):s})}async function Y6(t,e,n=!1){const i=await Ql(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hs._forOperation(t,"link",i)}/**
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
 */async function K6(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await Ql(t,DT(i,r,e,t),n);Oe(s.idToken,i,"internal-error");const o=Hv(s.idToken);Oe(o,i,"internal-error");const{sub:a}=o;return Oe(t.uid===a,i,"user-mismatch"),Hs._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Zn(i,"user-mismatch"),s}}/**
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
 */async function UT(t,e,n=!1){const i="signIn",r=await DT(t,i,e),s=await Hs._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function Z6(t,e){return UT(es(t),e)}async function J6(t,e,n){var i;const r=es(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const c=await Od(r,s,"signUpPassword");o=vp(r,c)}else o=vp(r,s).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Od(r,s,"signUpPassword");return vp(r,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await Hs._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function Q6(t,e,n){return Z6(Ys(t),Pa.credential(e,n))}function eV(t,e,n,i){return Ys(t).onIdTokenChanged(e,n,i)}function tV(t,e,n){return Ys(t).beforeAuthStateChanged(e,n)}const Fd="__sak";/**
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
 */class OT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fd,"1"),this.storage.removeItem(Fd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function nV(){const t=an();return Gv(t)||Nf(t)}const iV=1e3,rV=10;class kT extends OT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=nV()&&P6(),this.fallbackToPolling=bT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);C6()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,rV):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},iV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kT.type="LOCAL";const sV=kT;/**
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
 */class FT extends OT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}FT.type="SESSION";const BT=FT;/**
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
 */function oV(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Df{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new Df(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await oV(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Df.receivers=[];/**
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
 */function Xv(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class aV{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Xv("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ai(){return window}function lV(t){Ai().location.href=t}/**
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
 */function zT(){return typeof Ai().WorkerGlobalScope<"u"&&typeof Ai().importScripts=="function"}async function cV(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uV(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dV(){return zT()?self:null}/**
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
 */const VT="firebaseLocalStorageDb",fV=1,Bd="firebaseLocalStorage",HT="fbase_key";class Tc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Uf(t,e){return t.transaction([Bd],e?"readwrite":"readonly").objectStore(Bd)}function hV(){const t=indexedDB.deleteDatabase(VT);return new Tc(t).toPromise()}function Jm(){const t=indexedDB.open(VT,fV);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Bd,{keyPath:HT})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Bd)?e(i):(i.close(),await hV(),e(await Jm()))})})}async function kS(t,e,n){const i=Uf(t,!0).put({[HT]:e,value:n});return new Tc(i).toPromise()}async function pV(t,e){const n=Uf(t,!1).get(e),i=await new Tc(n).toPromise();return i===void 0?null:i.value}function FS(t,e){const n=Uf(t,!0).delete(e);return new Tc(n).toPromise()}const mV=800,gV=3;class GT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>gV)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Df._getInstance(dV()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await cV(),!this.activeServiceWorker)return;this.sender=new aV(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uV()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jm();return await kS(e,Fd,"1"),await FS(e,Fd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>kS(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>pV(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>FS(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Uf(r,!1).getAll();return new Tc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}GT.type="LOCAL";const vV=GT;new xc(3e4,6e4);/**
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
 */function WT(t,e){return e?Ki(e):(Oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qv extends Wv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ko(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ko(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ko(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _V(t){return UT(t.auth,new qv(t),t.bypassAuthState)}function yV(t){const{auth:e,user:n}=t;return Oe(n,e,"internal-error"),K6(n,new qv(t),t.bypassAuthState)}async function SV(t){const{auth:e,user:n}=t;return Oe(n,e,"internal-error"),Y6(n,new qv(t),t.bypassAuthState)}/**
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
 */class $T{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _V;case"linkViaPopup":case"linkViaRedirect":return SV;case"reauthViaPopup":case"reauthViaRedirect":return yV;default:Zn(this.auth,"internal-error")}}resolve(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const EV=new xc(2e3,1e4);class ko extends $T{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,ko.currentPopupAction&&ko.currentPopupAction.cancel(),ko.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Oe(e,this.auth,"internal-error"),e}async onExecution(){sr(this.filter.length===1,"Popup operations only handle one event");const e=Xv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ko.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,EV.get())};e()}}ko.currentPopupAction=null;/**
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
 */const xV="pendingRedirect",Gu=new Map;class wV extends $T{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Gu.get(this.auth._key());if(!e){try{const i=await MV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Gu.set(this.auth._key(),e)}return this.bypassAuthState||Gu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MV(t,e){const n=XT(e),i=jT(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}async function TV(t,e){return jT(t)._set(XT(e),"true")}function RV(t,e){Gu.set(t._key(),e)}function jT(t){return Ki(t._redirectPersistence)}function XT(t){return Hu(xV,t.config.apiKey,t.name)}/**
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
 */function bV(t,e,n){return AV(t,e,n)}async function AV(t,e,n){const i=es(t);d6(t,e,jv),await i._initializationPromise;const r=WT(i,n);return await TV(r,i),r._openRedirect(i,e,"signInViaRedirect")}async function qT(t,e){return await es(t)._initializationPromise,YT(t,e,!1)}async function YT(t,e,n=!1){const i=es(t),r=WT(i,e),o=await new wV(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const CV=10*60*1e3;class PV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LV(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!KT(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(bi(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CV&&this.cachedEventUids.clear(),this.cachedEventUids.has(BS(e))}saveEventToCache(e){this.cachedEventUids.add(BS(e)),this.lastProcessedEventTime=Date.now()}}function BS(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function KT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LV(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return KT(t);default:return!1}}/**
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
 */async function IV(t,e={}){return Ca(t,"GET","/v1/projects",e)}/**
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
 */const NV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DV=/^https?/;async function UV(t){if(t.config.emulator)return;const{authorizedDomains:e}=await IV(t);for(const n of e)try{if(OV(n))return}catch{}Zn(t,"unauthorized-domain")}function OV(t){const e=Zm(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!DV.test(n))return!1;if(NV.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const kV=new xc(3e4,6e4);function zS(){const t=Ai().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function FV(t){return new Promise((e,n)=>{var i,r,s;function o(){zS(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zS(),n(bi(t,"network-request-failed"))},timeout:kV.get()})}if(!((r=(i=Ai().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=Ai().gapi)===null||s===void 0)&&s.load)o();else{const a=I6("iframefcb");return Ai()[a]=()=>{gapi.load?o():n(bi(t,"network-request-failed"))},LT(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Wu=null,e})}let Wu=null;function BV(t){return Wu=Wu||FV(t),Wu}/**
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
 */const zV=new xc(5e3,15e3),VV="__/auth/iframe",HV="emulator/auth/iframe",GV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $V(t){const e=t.config;Oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vv(e,HV):`https://${t.config.authDomain}/${VV}`,i={apiKey:e.apiKey,appName:t.name,v:Ec},r=WV.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Sc(i).slice(1)}`}async function jV(t){const e=await BV(t),n=Ai().gapi;return Oe(n,t,"internal-error"),e.open({where:document.body,url:$V(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GV,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=bi(t,"network-request-failed"),a=Ai().setTimeout(()=>{s(o)},zV.get());function l(){Ai().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const XV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qV=500,YV=600,KV="_blank",ZV="http://localhost";class VS{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JV(t,e,n,i=qV,r=YV){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},XV),{width:i.toString(),height:r.toString(),top:s,left:o}),c=an().toLowerCase();n&&(a=xT(c)?KV:n),ET(c)&&(e=e||ZV,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[p,m])=>`${h}${p}=${m},`,"");if(A6(c)&&a!=="_self")return QV(e||"",a),new VS(null);const d=window.open(e||"",a,u);Oe(d,t,"popup-blocked");try{d.focus()}catch{}return new VS(d)}function QV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const eH="__/auth/handler",tH="emulator/auth/handler",nH=encodeURIComponent("fac");async function HS(t,e,n,i,r,s){Oe(t.config.authDomain,t,"auth-domain-config-required"),Oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ec,eventId:r};if(e instanceof jv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Zz(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(s||{}))o[u]=d}if(e instanceof Mc){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${nH}=${encodeURIComponent(l)}`:"";return`${iH(t)}?${Sc(a).slice(1)}${c}`}function iH({config:t}){return t.emulator?Vv(t,tH):`https://${t.authDomain}/${eH}`}/**
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
 */const _p="webStorageSupport";class rH{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=BT,this._completeRedirectFn=YT,this._overrideRedirectResult=RV}async _openPopup(e,n,i,r){var s;sr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await HS(e,n,i,Zm(),r);return JV(e,o,Xv())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await HS(e,n,i,Zm(),r);return lV(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(sr(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await jV(e),i=new PV(e);return n.register("authEvent",r=>(Oe(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_p,{type:_p},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[_p];o!==void 0&&n(!!o),Zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UV(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bT()||Gv()||Nf()}}const sH=rH;var GS="@firebase/auth",WS="0.23.2";/**
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
 */class oH{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function aH(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lH(t){Kl(new ha("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;Oe(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:AT(t)},c=new k6(i,r,s,l);return B6(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Kl(new ha("auth-internal",e=>{const n=es(e.getProvider("auth").getImmediate());return(i=>new oH(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qo(GS,WS,aH(t)),qo(GS,WS,"esm2017")}/**
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
 */const cH=5*60,uH=sT("authIdTokenMaxAge")||cH;let $S=null;const dH=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>uH)return;const r=n==null?void 0:n.token;$S!==r&&($S=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function fH(t=Z5()){const e=cT(t,"auth");if(e.isInitialized())return e.getImmediate();const n=F6(t,{popupRedirectResolver:sH,persistence:[vV,sV,BT]}),i=sT("authTokenSyncURL");if(i){const s=dH(i);tV(n,s,()=>s(n.currentUser)),eV(n,o=>s(o))}const r=zz("auth");return r&&z6(n,`http://${r}`),n}lH("Browser");const hH={apiKey:"AIzaSyB63ItbHjTxflmnd13ocRqoKnqGWprW6YE",authDomain:"easylogin-a1a37.firebaseapp.com",projectId:"easylogin-a1a37",storageBucket:"easylogin-a1a37.appspot.com",messagingSenderId:"820536119363",appId:"1:820536119363:web:15fc63fb5c051cfbf344f6",measurementId:"G-QG4CPB6CZM"},pH=uT(hH),dl=fH(pH);/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var ZT=vH,jS=_H,mH=decodeURIComponent,gH=encodeURIComponent,Tu=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function vH(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");for(var n={},i=e||{},r=t.split(";"),s=i.decode||mH,o=0;o<r.length;o++){var a=r[o],l=a.indexOf("=");if(!(l<0)){var c=a.substring(0,l).trim();if(n[c]==null){var u=a.substring(l+1,a.length).trim();u[0]==='"'&&(u=u.slice(1,-1)),n[c]=yH(u,s)}}}return n}function _H(t,e,n){var i=n||{},r=i.encode||gH;if(typeof r!="function")throw new TypeError("option encode is invalid");if(!Tu.test(t))throw new TypeError("argument name is invalid");var s=r(e);if(s&&!Tu.test(s))throw new TypeError("argument val is invalid");var o=t+"="+s;if(i.maxAge!=null){var a=i.maxAge-0;if(isNaN(a)||!isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(i.domain){if(!Tu.test(i.domain))throw new TypeError("option domain is invalid");o+="; Domain="+i.domain}if(i.path){if(!Tu.test(i.path))throw new TypeError("option path is invalid");o+="; Path="+i.path}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");o+="; Expires="+i.expires.toUTCString()}if(i.httpOnly&&(o+="; HttpOnly"),i.secure&&(o+="; Secure"),i.sameSite){var l=typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite;switch(l){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return o}function yH(t,e){try{return e(t)}catch{return t}}function SH(){return typeof document=="object"&&typeof document.cookie=="string"}function EH(t,e){return typeof t=="string"?ZT(t,e):typeof t=="object"&&t!==null?t:{}}function xH(t,e){return typeof e>"u"&&(e=!t||t[0]!=="{"&&t[0]!=="["&&t[0]!=='"'),!e}function XS(t,e){e===void 0&&(e={});var n=wH(t);if(xH(n,e.doNotParse))try{return JSON.parse(n)}catch{}return t}function wH(t){return t&&t[0]==="j"&&t[1]===":"?t.substr(2):t}var gs=globalThis&&globalThis.__assign||function(){return gs=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},gs.apply(this,arguments)},MH=function(){function t(e,n){var i=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=EH(e,n),new Promise(function(){i.HAS_DOCUMENT_COOKIE=SH()}).catch(function(){})}return t.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=ZT(document.cookie,e))},t.prototype._emitChange=function(e){for(var n=0;n<this.changeListeners.length;++n)this.changeListeners[n](e)},t.prototype.get=function(e,n,i){return n===void 0&&(n={}),this._updateBrowserValues(i),XS(this.cookies[e],n)},t.prototype.getAll=function(e,n){e===void 0&&(e={}),this._updateBrowserValues(n);var i={};for(var r in this.cookies)i[r]=XS(this.cookies[r],e);return i},t.prototype.set=function(e,n,i){var r;typeof n=="object"&&(n=JSON.stringify(n)),this.cookies=gs(gs({},this.cookies),(r={},r[e]=n,r)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=jS(e,n,i)),this._emitChange({name:e,value:n,options:i})},t.prototype.remove=function(e,n){var i=n=gs(gs({},n),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=gs({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=jS(e,"",i)),this._emitChange({name:e,value:void 0,options:n})},t.prototype.addChangeListener=function(e){this.changeListeners.push(e)},t.prototype.removeChangeListener=function(e){var n=this.changeListeners.indexOf(e);n>=0&&this.changeListeners.splice(n,1)},t}();const TH=MH;var Yv=me.createContext(new TH);Yv.Provider;Yv.Consumer;const RH=Yv;function bH(){return typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"}function JT(t){var e=me.useContext(RH);if(!e)throw new Error("Missing <CookiesProvider>");var n=e.getAll(),i=me.useState(n),r=i[0],s=i[1],o=me.useRef(r);bH()&&me.useLayoutEffect(function(){function c(){var u=e.getAll();AH(t||null,u,o.current)&&s(u),o.current=u}return e.addChangeListener(c),function(){e.removeChangeListener(c)}},[e]);var a=me.useMemo(function(){return e.set.bind(e)},[e]),l=me.useMemo(function(){return e.remove.bind(e)},[e]);return[r,a,l]}function AH(t,e,n){if(!t)return!0;for(var i=0,r=t;i<r.length;i++){var s=r[i];if(e[s]!==n[s])return!0}return!1}function QT(){const[t,e]=JT(["nickName"]),[n,i]=me.useState(""),[r,s]=me.useState(""),[o,a]=me.useState(!0),[l,c]=Nn(Z1),[u,d]=Nn(J1);me.useEffect(()=>{qT(dl).then(v=>{v.user&&(c(!0),e("nickName",v.user.displayName,{path:"/"}),d(!0))}).catch(v=>{})},[l,u]);const h=()=>{const v=new $i;bV(dl,v)};function p(v){v.preventDefault(),Q6(dl,n,r).then(g=>{const f=/(.*)@/;c(!0),e("nickName",g.user.email.match(f)[1],{path:"/"}),d(!u)}).catch(g=>{alert("Please check your E-mail or Password")})}const m=v=>{v.preventDefault(),J6(dl,n,r).then(g=>{alert("Your account is signed up!"),a(!o)}).catch(g=>{alert("Please try again to sign up")})};return Y.jsxs("div",{className:"signInModal",children:[Y.jsx("h1",{children:"StarryNight"}),o?Y.jsxs(Y.Fragment,{children:[Y.jsxs("div",{className:"inputBox",children:[Y.jsx("div",{className:"loginInput",children:Y.jsx("input",{placeholder:"Email",required:!0,type:"email",value:n,onChange:v=>i(v.target.value)})}),Y.jsx("div",{className:"loginInput",children:Y.jsx("input",{placeholder:"Password",required:!0,type:"password",value:r,onChange:v=>s(v.target.value)})}),Y.jsx("button",{className:"",type:"submit",onClick:p,children:"Login"})]}),Y.jsxs("div",{className:"loginBox",children:[Y.jsxs("div",{className:"orBox",children:[Y.jsx("hr",{}),Y.jsx("span",{children:"or"}),Y.jsx("hr",{})]}),Y.jsx("button",{className:"googleLoginButton",type:"submit",onClick:h,children:"Google Login"}),Y.jsxs("div",{className:"signUpBox",children:[Y.jsx("span",{children:"Want to join with us?"}),Y.jsx("button",{onClick:()=>a(!o),children:"Sign up"})]})]})]}):Y.jsx(Y.Fragment,{children:Y.jsxs("div",{className:"inputBox",children:[Y.jsx("div",{className:"signUpInput",children:Y.jsx("input",{placeholder:"Email",type:"email",required:!0,value:n,onChange:v=>i(v.target.value)})}),Y.jsx("div",{className:"signUpInput",children:Y.jsx("input",{placeholder:"Password",type:"password",required:!0,value:r,onChange:v=>s(v.target.value)})}),Y.jsx("p",{children:"Please set correct email form and over 8 characters password"}),Y.jsx("button",{className:"",type:"submit",onClick:m,children:"SignUp & Go to Login"})]})})]})}function eR(t,e){return function(){return t.apply(e,arguments)}}const{toString:CH}=Object.prototype,{getPrototypeOf:Kv}=Object,Of=(t=>e=>{const n=CH.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ni=t=>(t=t.toLowerCase(),e=>Of(e)===t),kf=t=>e=>typeof e===t,{isArray:La}=Array,nc=kf("undefined");function PH(t){return t!==null&&!nc(t)&&t.constructor!==null&&!nc(t.constructor)&&qn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const tR=Ni("ArrayBuffer");function LH(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&tR(t.buffer),e}const IH=kf("string"),qn=kf("function"),nR=kf("number"),Ff=t=>t!==null&&typeof t=="object",NH=t=>t===!0||t===!1,$u=t=>{if(Of(t)!=="object")return!1;const e=Kv(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},DH=Ni("Date"),UH=Ni("File"),OH=Ni("Blob"),kH=Ni("FileList"),FH=t=>Ff(t)&&qn(t.pipe),BH=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||qn(t.append)&&((e=Of(t))==="formdata"||e==="object"&&qn(t.toString)&&t.toString()==="[object FormData]"))},zH=Ni("URLSearchParams"),VH=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Rc(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),La(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function iR(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const rR=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),sR=t=>!nc(t)&&t!==rR;function Qm(){const{caseless:t}=sR(this)&&this||{},e={},n=(i,r)=>{const s=t&&iR(e,r)||r;$u(e[s])&&$u(i)?e[s]=Qm(e[s],i):$u(i)?e[s]=Qm({},i):La(i)?e[s]=i.slice():e[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&Rc(arguments[i],n);return e}const HH=(t,e,n,{allOwnKeys:i}={})=>(Rc(e,(r,s)=>{n&&qn(r)?t[s]=eR(r,n):t[s]=r},{allOwnKeys:i}),t),GH=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),WH=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},$H=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Kv(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},jH=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},XH=t=>{if(!t)return null;if(La(t))return t;let e=t.length;if(!nR(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},qH=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Kv(Uint8Array)),YH=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},KH=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},ZH=Ni("HTMLFormElement"),JH=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),qS=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),QH=Ni("RegExp"),oR=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Rc(n,(r,s)=>{e(r,s,t)!==!1&&(i[s]=r)}),Object.defineProperties(t,i)},e8=t=>{oR(t,(e,n)=>{if(qn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(qn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},t8=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return La(t)?i(t):i(String(t).split(e)),n},n8=()=>{},i8=(t,e)=>(t=+t,Number.isFinite(t)?t:e),yp="abcdefghijklmnopqrstuvwxyz",YS="0123456789",aR={DIGIT:YS,ALPHA:yp,ALPHA_DIGIT:yp+yp.toUpperCase()+YS},r8=(t=16,e=aR.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n};function s8(t){return!!(t&&qn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const o8=t=>{const e=new Array(10),n=(i,r)=>{if(Ff(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const s=La(i)?[]:{};return Rc(i,(o,a)=>{const l=n(o,r+1);!nc(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},a8=Ni("AsyncFunction"),l8=t=>t&&(Ff(t)||qn(t))&&qn(t.then)&&qn(t.catch),le={isArray:La,isArrayBuffer:tR,isBuffer:PH,isFormData:BH,isArrayBufferView:LH,isString:IH,isNumber:nR,isBoolean:NH,isObject:Ff,isPlainObject:$u,isUndefined:nc,isDate:DH,isFile:UH,isBlob:OH,isRegExp:QH,isFunction:qn,isStream:FH,isURLSearchParams:zH,isTypedArray:qH,isFileList:kH,forEach:Rc,merge:Qm,extend:HH,trim:VH,stripBOM:GH,inherits:WH,toFlatObject:$H,kindOf:Of,kindOfTest:Ni,endsWith:jH,toArray:XH,forEachEntry:YH,matchAll:KH,isHTMLForm:ZH,hasOwnProperty:qS,hasOwnProp:qS,reduceDescriptors:oR,freezeMethods:e8,toObjectSet:t8,toCamelCase:JH,noop:n8,toFiniteNumber:i8,findKey:iR,global:rR,isContextDefined:sR,ALPHABET:aR,generateString:r8,isSpecCompliantForm:s8,toJSONObject:o8,isAsyncFn:a8,isThenable:l8};function st(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}le.inherits(st,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:le.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const lR=st.prototype,cR={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{cR[t]={value:t}});Object.defineProperties(st,cR);Object.defineProperty(lR,"isAxiosError",{value:!0});st.from=(t,e,n,i,r,s)=>{const o=Object.create(lR);return le.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),st.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const c8=null;function eg(t){return le.isPlainObject(t)||le.isArray(t)}function uR(t){return le.endsWith(t,"[]")?t.slice(0,-2):t}function KS(t,e,n){return t?t.concat(e).map(function(r,s){return r=uR(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function u8(t){return le.isArray(t)&&!t.some(eg)}const d8=le.toFlatObject(le,{},null,function(e){return/^is[A-Z]/.test(e)});function Bf(t,e,n){if(!le.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=le.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,g){return!le.isUndefined(g[v])});const i=n.metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&le.isSpecCompliantForm(e);if(!le.isFunction(r))throw new TypeError("visitor must be a function");function c(m){if(m===null)return"";if(le.isDate(m))return m.toISOString();if(!l&&le.isBlob(m))throw new st("Blob is not supported. Use a Buffer instead.");return le.isArrayBuffer(m)||le.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function u(m,v,g){let f=m;if(m&&!g&&typeof m=="object"){if(le.endsWith(v,"{}"))v=i?v:v.slice(0,-2),m=JSON.stringify(m);else if(le.isArray(m)&&u8(m)||(le.isFileList(m)||le.endsWith(v,"[]"))&&(f=le.toArray(m)))return v=uR(v),f.forEach(function(y,S){!(le.isUndefined(y)||y===null)&&e.append(o===!0?KS([v],S,s):o===null?v:v+"[]",c(y))}),!1}return eg(m)?!0:(e.append(KS(g,v,s),c(m)),!1)}const d=[],h=Object.assign(d8,{defaultVisitor:u,convertValue:c,isVisitable:eg});function p(m,v){if(!le.isUndefined(m)){if(d.indexOf(m)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(m),le.forEach(m,function(f,_){(!(le.isUndefined(f)||f===null)&&r.call(e,f,le.isString(_)?_.trim():_,v,h))===!0&&p(f,v?v.concat(_):[_])}),d.pop()}}if(!le.isObject(t))throw new TypeError("data must be an object");return p(t),e}function ZS(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Zv(t,e){this._pairs=[],t&&Bf(t,this,e)}const dR=Zv.prototype;dR.append=function(e,n){this._pairs.push([e,n])};dR.toString=function(e){const n=e?function(i){return e.call(this,i,ZS)}:ZS;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function f8(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function fR(t,e,n){if(!e)return t;const i=n&&n.encode||f8,r=n&&n.serialize;let s;if(r?s=r(e,n):s=le.isURLSearchParams(e)?e.toString():new Zv(e,n).toString(i),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class h8{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){le.forEach(this.handlers,function(i){i!==null&&e(i)})}}const JS=h8,hR={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},p8=typeof URLSearchParams<"u"?URLSearchParams:Zv,m8=typeof FormData<"u"?FormData:null,g8=typeof Blob<"u"?Blob:null,v8=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),_8=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Mi={isBrowser:!0,classes:{URLSearchParams:p8,FormData:m8,Blob:g8},isStandardBrowserEnv:v8,isStandardBrowserWebWorkerEnv:_8,protocols:["http","https","file","blob","url","data"]};function y8(t,e){return Bf(t,new Mi.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,s){return Mi.isNode&&le.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function S8(t){return le.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function E8(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function pR(t){function e(n,i,r,s){let o=n[s++];const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&le.isArray(r)?r.length:o,l?(le.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!le.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&le.isArray(r[o])&&(r[o]=E8(r[o])),!a)}if(le.isFormData(t)&&le.isFunction(t.entries)){const n={};return le.forEachEntry(t,(i,r)=>{e(S8(i),r,n,0)}),n}return null}const x8={"Content-Type":void 0};function w8(t,e,n){if(le.isString(t))try{return(e||JSON.parse)(t),le.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const zf={transitional:hR,adapter:["xhr","http"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=le.isObject(e);if(s&&le.isHTMLForm(e)&&(e=new FormData(e)),le.isFormData(e))return r&&r?JSON.stringify(pR(e)):e;if(le.isArrayBuffer(e)||le.isBuffer(e)||le.isStream(e)||le.isFile(e)||le.isBlob(e))return e;if(le.isArrayBufferView(e))return e.buffer;if(le.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return y8(e,this.formSerializer).toString();if((a=le.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Bf(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),w8(e)):e}],transformResponse:[function(e){const n=this.transitional||zf.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(e&&le.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?st.from(a,st.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Mi.classes.FormData,Blob:Mi.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};le.forEach(["delete","get","head"],function(e){zf.headers[e]={}});le.forEach(["post","put","patch"],function(e){zf.headers[e]=le.merge(x8)});const Jv=zf,M8=le.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),T8=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&M8[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},QS=Symbol("internals");function tl(t){return t&&String(t).trim().toLowerCase()}function ju(t){return t===!1||t==null?t:le.isArray(t)?t.map(ju):String(t)}function R8(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const b8=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Sp(t,e,n,i,r){if(le.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!le.isString(e)){if(le.isString(i))return e.indexOf(i)!==-1;if(le.isRegExp(i))return i.test(e)}}function A8(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function C8(t,e){const n=le.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}class Vf{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const u=tl(l);if(!u)throw new Error("header name must be a non-empty string");const d=le.findKey(r,u);(!d||r[d]===void 0||c===!0||c===void 0&&r[d]!==!1)&&(r[d||l]=ju(a))}const o=(a,l)=>le.forEach(a,(c,u)=>s(c,u,l));return le.isPlainObject(e)||e instanceof this.constructor?o(e,n):le.isString(e)&&(e=e.trim())&&!b8(e)?o(T8(e),n):e!=null&&s(n,e,i),this}get(e,n){if(e=tl(e),e){const i=le.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return R8(r);if(le.isFunction(n))return n.call(this,r,i);if(le.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=tl(e),e){const i=le.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Sp(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=tl(o),o){const a=le.findKey(i,o);a&&(!n||Sp(i,i[a],a,n))&&(delete i[a],r=!0)}}return le.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||Sp(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return le.forEach(this,(r,s)=>{const o=le.findKey(i,s);if(o){n[o]=ju(r),delete n[s];return}const a=e?A8(s):String(s).trim();a!==s&&delete n[s],n[a]=ju(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return le.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&le.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[QS]=this[QS]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=tl(o);i[a]||(C8(r,o),i[a]=!0)}return le.isArray(e)?e.forEach(s):s(e),this}}Vf.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);le.freezeMethods(Vf.prototype);le.freezeMethods(Vf);const er=Vf;function Ep(t,e){const n=this||Jv,i=e||n,r=er.from(i.headers);let s=i.data;return le.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function mR(t){return!!(t&&t.__CANCEL__)}function bc(t,e,n){st.call(this,t??"canceled",st.ERR_CANCELED,e,n),this.name="CanceledError"}le.inherits(bc,st,{__CANCEL__:!0});function P8(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new st("Request failed with status code "+n.status,[st.ERR_BAD_REQUEST,st.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const L8=Mi.isStandardBrowserEnv?function(){return{write:function(n,i,r,s,o,a){const l=[];l.push(n+"="+encodeURIComponent(i)),le.isNumber(r)&&l.push("expires="+new Date(r).toGMTString()),le.isString(s)&&l.push("path="+s),le.isString(o)&&l.push("domain="+o),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const i=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function I8(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function N8(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function gR(t,e){return t&&!I8(e)?N8(t,e):e}const D8=Mi.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let i;function r(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return i=r(window.location.href),function(o){const a=le.isString(o)?r(o):o;return a.protocol===i.protocol&&a.host===i.host}}():function(){return function(){return!0}}();function U8(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function O8(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),n[r]=l,i[r]=c;let d=s,h=0;for(;d!==r;)h+=n[d++],d=d%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const p=u&&c-u;return p?Math.round(h*1e3/p):void 0}}function eE(t,e){let n=0;const i=O8(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,l=i(a),c=s<=o;n=s;const u={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&c?(o-s)/l:void 0,event:r};u[e?"download":"upload"]=!0,t(u)}}const k8=typeof XMLHttpRequest<"u",F8=k8&&function(t){return new Promise(function(n,i){let r=t.data;const s=er.from(t.headers).normalize(),o=t.responseType;let a;function l(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}le.isFormData(r)&&(Mi.isStandardBrowserEnv||Mi.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(t.auth){const p=t.auth.username||"",m=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(p+":"+m))}const u=gR(t.baseURL,t.url);c.open(t.method.toUpperCase(),fR(u,t.params,t.paramsSerializer),!0),c.timeout=t.timeout;function d(){if(!c)return;const p=er.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),v={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:p,config:t,request:c};P8(function(f){n(f),l()},function(f){i(f),l()},v),c=null}if("onloadend"in c?c.onloadend=d:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(d)},c.onabort=function(){c&&(i(new st("Request aborted",st.ECONNABORTED,t,c)),c=null)},c.onerror=function(){i(new st("Network Error",st.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let m=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const v=t.transitional||hR;t.timeoutErrorMessage&&(m=t.timeoutErrorMessage),i(new st(m,v.clarifyTimeoutError?st.ETIMEDOUT:st.ECONNABORTED,t,c)),c=null},Mi.isStandardBrowserEnv){const p=(t.withCredentials||D8(u))&&t.xsrfCookieName&&L8.read(t.xsrfCookieName);p&&s.set(t.xsrfHeaderName,p)}r===void 0&&s.setContentType(null),"setRequestHeader"in c&&le.forEach(s.toJSON(),function(m,v){c.setRequestHeader(v,m)}),le.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),o&&o!=="json"&&(c.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&c.addEventListener("progress",eE(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",eE(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=p=>{c&&(i(!p||p.type?new bc(null,t,c):p),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const h=U8(u);if(h&&Mi.protocols.indexOf(h)===-1){i(new st("Unsupported protocol "+h+":",st.ERR_BAD_REQUEST,t));return}c.send(r||null)})},Xu={http:c8,xhr:F8};le.forEach(Xu,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const B8={getAdapter:t=>{t=le.isArray(t)?t:[t];const{length:e}=t;let n,i;for(let r=0;r<e&&(n=t[r],!(i=le.isString(n)?Xu[n.toLowerCase()]:n));r++);if(!i)throw i===!1?new st(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(le.hasOwnProp(Xu,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!le.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:Xu};function xp(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new bc(null,t)}function tE(t){return xp(t),t.headers=er.from(t.headers),t.data=Ep.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),B8.getAdapter(t.adapter||Jv.adapter)(t).then(function(i){return xp(t),i.data=Ep.call(t,t.transformResponse,i),i.headers=er.from(i.headers),i},function(i){return mR(i)||(xp(t),i&&i.response&&(i.response.data=Ep.call(t,t.transformResponse,i.response),i.response.headers=er.from(i.response.headers))),Promise.reject(i)})}const nE=t=>t instanceof er?t.toJSON():t;function pa(t,e){e=e||{};const n={};function i(c,u,d){return le.isPlainObject(c)&&le.isPlainObject(u)?le.merge.call({caseless:d},c,u):le.isPlainObject(u)?le.merge({},u):le.isArray(u)?u.slice():u}function r(c,u,d){if(le.isUndefined(u)){if(!le.isUndefined(c))return i(void 0,c,d)}else return i(c,u,d)}function s(c,u){if(!le.isUndefined(u))return i(void 0,u)}function o(c,u){if(le.isUndefined(u)){if(!le.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,d){if(d in e)return i(c,u);if(d in t)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u)=>r(nE(c),nE(u),!0)};return le.forEach(Object.keys(Object.assign({},t,e)),function(u){const d=l[u]||r,h=d(t[u],e[u],u);le.isUndefined(h)&&d!==a||(n[u]=h)}),n}const vR="1.4.0",Qv={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Qv[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const iE={};Qv.transitional=function(e,n,i){function r(s,o){return"[Axios v"+vR+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new st(r(o," has been removed"+(n?" in "+n:"")),st.ERR_DEPRECATED);return n&&!iE[o]&&(iE[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function z8(t,e,n){if(typeof t!="object")throw new st("options must be an object",st.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new st("option "+s+" must be "+l,st.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new st("Unknown option "+s,st.ERR_BAD_OPTION)}}const tg={assertOptions:z8,validators:Qv},mr=tg.validators;class zd{constructor(e){this.defaults=e,this.interceptors={request:new JS,response:new JS}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=pa(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&tg.assertOptions(i,{silentJSONParsing:mr.transitional(mr.boolean),forcedJSONParsing:mr.transitional(mr.boolean),clarifyTimeoutError:mr.transitional(mr.boolean)},!1),r!=null&&(le.isFunction(r)?n.paramsSerializer={serialize:r}:tg.assertOptions(r,{encode:mr.function,serialize:mr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=s&&le.merge(s.common,s[n.method]),o&&le.forEach(["delete","get","head","post","put","patch","common"],m=>{delete s[m]}),n.headers=er.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,d=0,h;if(!l){const m=[tE.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,c),h=m.length,u=Promise.resolve(n);d<h;)u=u.then(m[d++],m[d++]);return u}h=a.length;let p=n;for(d=0;d<h;){const m=a[d++],v=a[d++];try{p=m(p)}catch(g){v.call(this,g);break}}try{u=tE.call(this,p)}catch(m){return Promise.reject(m)}for(d=0,h=c.length;d<h;)u=u.then(c[d++],c[d++]);return u}getUri(e){e=pa(this.defaults,e);const n=gR(e.baseURL,e.url);return fR(n,e.params,e.paramsSerializer)}}le.forEach(["delete","get","head","options"],function(e){zd.prototype[e]=function(n,i){return this.request(pa(i||{},{method:e,url:n,data:(i||{}).data}))}});le.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(pa(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}zd.prototype[e]=n(),zd.prototype[e+"Form"]=n(!0)});const qu=zd;class e_{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new bc(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new e_(function(r){e=r}),cancel:e}}}const V8=e_;function H8(t){return function(n){return t.apply(null,n)}}function G8(t){return le.isObject(t)&&t.isAxiosError===!0}const ng={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ng).forEach(([t,e])=>{ng[e]=t});const W8=ng;function _R(t){const e=new qu(t),n=eR(qu.prototype.request,e);return le.extend(n,qu.prototype,e,{allOwnKeys:!0}),le.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return _R(pa(t,r))},n}const Ht=_R(Jv);Ht.Axios=qu;Ht.CanceledError=bc;Ht.CancelToken=V8;Ht.isCancel=mR;Ht.VERSION=vR;Ht.toFormData=Bf;Ht.AxiosError=st;Ht.Cancel=Ht.CanceledError;Ht.all=function(e){return Promise.all(e)};Ht.spread=H8;Ht.isAxiosError=G8;Ht.mergeConfig=pa;Ht.AxiosHeaders=er;Ht.formToJSON=t=>pR(le.isHTMLForm(t)?new FormData(t):t);Ht.HttpStatusCode=W8;Ht.default=Ht;const $8=Ht,j8="AIzaSyAf0aIGPl8pvWT_7g3GlRi99jlJXIsunS0";var vt="-ms-",bl="-moz-",at="-webkit-",yR="comm",Hf="rule",t_="decl",X8="@import",SR="@keyframes",q8="@layer",Y8=Math.abs,n_=String.fromCharCode,ig=Object.assign;function K8(t,e){return jt(t,0)^45?(((e<<2^jt(t,0))<<2^jt(t,1))<<2^jt(t,2))<<2^jt(t,3):0}function ER(t){return t.trim()}function Gi(t,e){return(t=e.exec(t))?t[0]:t}function qe(t,e,n){return t.replace(e,n)}function Yu(t,e){return t.indexOf(e)}function jt(t,e){return t.charCodeAt(e)|0}function ma(t,e,n){return t.slice(e,n)}function Ei(t){return t.length}function xR(t){return t.length}function fl(t,e){return e.push(t),t}function Z8(t,e){return t.map(e).join("")}function rE(t,e){return t.filter(function(n){return!Gi(n,e)})}var Gf=1,ga=1,wR=0,Jn=0,Ut=0,Ia="";function Wf(t,e,n,i,r,s,o,a){return{value:t,root:e,parent:n,type:i,props:r,children:s,line:Gf,column:ga,length:o,return:"",siblings:a}}function gr(t,e){return ig(Wf("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function xo(t){for(;t.root;)t=gr(t.root,{children:[t]});fl(t,t.siblings)}function J8(){return Ut}function Q8(){return Ut=Jn>0?jt(Ia,--Jn):0,ga--,Ut===10&&(ga=1,Gf--),Ut}function mi(){return Ut=Jn<wR?jt(Ia,Jn++):0,ga++,Ut===10&&(ga=1,Gf++),Ut}function Cs(){return jt(Ia,Jn)}function Ku(){return Jn}function $f(t,e){return ma(Ia,t,e)}function rg(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function eG(t){return Gf=ga=1,wR=Ei(Ia=t),Jn=0,[]}function tG(t){return Ia="",t}function wp(t){return ER($f(Jn-1,sg(t===91?t+2:t===40?t+1:t)))}function nG(t){for(;(Ut=Cs())&&Ut<33;)mi();return rg(t)>2||rg(Ut)>3?"":" "}function iG(t,e){for(;--e&&mi()&&!(Ut<48||Ut>102||Ut>57&&Ut<65||Ut>70&&Ut<97););return $f(t,Ku()+(e<6&&Cs()==32&&mi()==32))}function sg(t){for(;mi();)switch(Ut){case t:return Jn;case 34:case 39:t!==34&&t!==39&&sg(Ut);break;case 40:t===41&&sg(t);break;case 92:mi();break}return Jn}function rG(t,e){for(;mi()&&t+Ut!==47+10;)if(t+Ut===42+42&&Cs()===47)break;return"/*"+$f(e,Jn-1)+"*"+n_(t===47?t:mi())}function sG(t){for(;!rg(Cs());)mi();return $f(t,Jn)}function oG(t){return tG(Zu("",null,null,null,[""],t=eG(t),0,[0],t))}function Zu(t,e,n,i,r,s,o,a,l){for(var c=0,u=0,d=o,h=0,p=0,m=0,v=1,g=1,f=1,_=0,y="",S=r,E=s,w=i,T=y;g;)switch(m=_,_=mi()){case 40:if(m!=108&&jt(T,d-1)==58){Yu(T+=qe(wp(_),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:T+=wp(_);break;case 9:case 10:case 13:case 32:T+=nG(m);break;case 92:T+=iG(Ku()-1,7);continue;case 47:switch(Cs()){case 42:case 47:fl(aG(rG(mi(),Ku()),e,n,l),l);break;default:T+="/"}break;case 123*v:a[c++]=Ei(T)*f;case 125*v:case 59:case 0:switch(_){case 0:case 125:g=0;case 59+u:f==-1&&(T=qe(T,/\f/g,"")),p>0&&Ei(T)-d&&fl(p>32?oE(T+";",i,n,d-1,l):oE(qe(T," ","")+";",i,n,d-2,l),l);break;case 59:T+=";";default:if(fl(w=sE(T,e,n,c,u,r,a,y,S=[],E=[],d,s),s),_===123)if(u===0)Zu(T,e,w,w,S,s,d,a,E);else switch(h===99&&jt(T,3)===110?100:h){case 100:case 108:case 109:case 115:Zu(t,w,w,i&&fl(sE(t,w,w,0,0,r,a,y,r,S=[],d,E),E),r,E,d,a,i?S:E);break;default:Zu(T,w,w,w,[""],E,0,a,E)}}c=u=p=0,v=f=1,y=T="",d=o;break;case 58:d=1+Ei(T),p=m;default:if(v<1){if(_==123)--v;else if(_==125&&v++==0&&Q8()==125)continue}switch(T+=n_(_),_*v){case 38:f=u>0?1:(T+="\f",-1);break;case 44:a[c++]=(Ei(T)-1)*f,f=1;break;case 64:Cs()===45&&(T+=wp(mi())),h=Cs(),u=d=Ei(y=T+=sG(Ku())),_++;break;case 45:m===45&&Ei(T)==2&&(v=0)}}return s}function sE(t,e,n,i,r,s,o,a,l,c,u,d){for(var h=r-1,p=r===0?s:[""],m=xR(p),v=0,g=0,f=0;v<i;++v)for(var _=0,y=ma(t,h+1,h=Y8(g=o[v])),S=t;_<m;++_)(S=ER(g>0?p[_]+" "+y:qe(y,/&\f/g,p[_])))&&(l[f++]=S);return Wf(t,e,n,r===0?Hf:a,l,c,u,d)}function aG(t,e,n,i){return Wf(t,e,n,yR,n_(J8()),ma(t,2,-2),0,i)}function oE(t,e,n,i,r){return Wf(t,e,n,t_,ma(t,0,i),ma(t,i+1,-1),i,r)}function MR(t,e,n){switch(K8(t,e)){case 5103:return at+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return at+t+t;case 4789:return bl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return at+t+bl+t+vt+t+t;case 5936:switch(jt(t,e+11)){case 114:return at+t+vt+qe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return at+t+vt+qe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return at+t+vt+qe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return at+t+vt+t+t;case 6165:return at+t+vt+"flex-"+t+t;case 5187:return at+t+qe(t,/(\w+).+(:[^]+)/,at+"box-$1$2"+vt+"flex-$1$2")+t;case 5443:return at+t+vt+"flex-item-"+qe(t,/flex-|-self/g,"")+(Gi(t,/flex-|baseline/)?"":vt+"grid-row-"+qe(t,/flex-|-self/g,""))+t;case 4675:return at+t+vt+"flex-line-pack"+qe(t,/align-content|flex-|-self/g,"")+t;case 5548:return at+t+vt+qe(t,"shrink","negative")+t;case 5292:return at+t+vt+qe(t,"basis","preferred-size")+t;case 6060:return at+"box-"+qe(t,"-grow","")+at+t+vt+qe(t,"grow","positive")+t;case 4554:return at+qe(t,/([^-])(transform)/g,"$1"+at+"$2")+t;case 6187:return qe(qe(qe(t,/(zoom-|grab)/,at+"$1"),/(image-set)/,at+"$1"),t,"")+t;case 5495:case 3959:return qe(t,/(image-set\([^]*)/,at+"$1$`$1");case 4968:return qe(qe(t,/(.+:)(flex-)?(.*)/,at+"box-pack:$3"+vt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+at+t+t;case 4200:if(!Gi(t,/flex-|baseline/))return vt+"grid-column-align"+ma(t,e)+t;break;case 2592:case 3360:return vt+qe(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,r){return e=r,Gi(i.props,/grid-\w+-end/)})?~Yu(t+(n=n[e].value),"span")?t:vt+qe(t,"-start","")+t+vt+"grid-row-span:"+(~Yu(n,"span")?Gi(n,/\d+/):+Gi(n,/\d+/)-+Gi(t,/\d+/))+";":vt+qe(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return Gi(i.props,/grid-\w+-start/)})?t:vt+qe(qe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return qe(t,/(.+)-inline(.+)/,at+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ei(t)-1-e>6)switch(jt(t,e+1)){case 109:if(jt(t,e+4)!==45)break;case 102:return qe(t,/(.+:)(.+)-([^]+)/,"$1"+at+"$2-$3$1"+bl+(jt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Yu(t,"stretch")?MR(qe(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return qe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,r,s,o,a,l,c){return vt+r+":"+s+c+(o?vt+r+"-span:"+(a?l:+l-+s)+c:"")+t});case 4949:if(jt(t,e+6)===121)return qe(t,":",":"+at)+t;break;case 6444:switch(jt(t,jt(t,14)===45?18:11)){case 120:return qe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+at+(jt(t,14)===45?"inline-":"")+"box$3$1"+at+"$2$3$1"+vt+"$2box$3")+t;case 100:return qe(t,":",":"+vt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return qe(t,"scroll-","scroll-snap-")+t}return t}function Vd(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function lG(t,e,n,i){switch(t.type){case q8:if(t.children.length)break;case X8:case t_:return t.return=t.return||t.value;case yR:return"";case SR:return t.return=t.value+"{"+Vd(t.children,i)+"}";case Hf:if(!Ei(t.value=t.props.join(",")))return""}return Ei(n=Vd(t.children,i))?t.return=t.value+"{"+n+"}":""}function cG(t){var e=xR(t);return function(n,i,r,s){for(var o="",a=0;a<e;a++)o+=t[a](n,i,r,s)||"";return o}}function uG(t){return function(e){e.root||(e=e.return)&&t(e)}}function dG(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case t_:t.return=MR(t.value,t.length,n);return;case SR:return Vd([gr(t,{value:qe(t.value,"@","@"+at)})],i);case Hf:if(t.length)return Z8(n=t.props,function(r){switch(Gi(r,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xo(gr(t,{props:[qe(r,/:(read-\w+)/,":"+bl+"$1")]})),xo(gr(t,{props:[r]})),ig(t,{props:rE(n,i)});break;case"::placeholder":xo(gr(t,{props:[qe(r,/:(plac\w+)/,":"+at+"input-$1")]})),xo(gr(t,{props:[qe(r,/:(plac\w+)/,":"+bl+"$1")]})),xo(gr(t,{props:[qe(r,/:(plac\w+)/,vt+"input-$1")]})),xo(gr(t,{props:[r]})),ig(t,{props:rE(n,i)});break}return""})}}var fG={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},va=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",i_=typeof window<"u"&&"HTMLElement"in window,hG=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),jf=Object.freeze([]),_a=Object.freeze({});function pG(t,e,n){return n===void 0&&(n=_a),t.theme!==n.theme&&t.theme||e||n.theme}var TR=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),mG=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gG=/(^-|-$)/g;function aE(t){return t.replace(mG,"-").replace(gG,"")}var vG=/(a)(d)/gi,lE=function(t){return String.fromCharCode(t+(t>25?39:97))};function og(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=lE(e%52)+n;return(lE(e%52)+n).replace(vG,"$1-$2")}var Mp,Fo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},RR=function(t){return Fo(5381,t)};function bR(t){return og(RR(t)>>>0)}function _G(t){return t.displayName||t.name||"Component"}function Tp(t){return typeof t=="string"&&!0}var AR=typeof Symbol=="function"&&Symbol.for,CR=AR?Symbol.for("react.memo"):60115,yG=AR?Symbol.for("react.forward_ref"):60112,SG={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},EG={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},PR={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xG=((Mp={})[yG]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Mp[CR]=PR,Mp);function cE(t){return("type"in(e=t)&&e.type.$$typeof)===CR?PR:"$$typeof"in t?xG[t.$$typeof]:SG;var e}var wG=Object.defineProperty,MG=Object.getOwnPropertyNames,uE=Object.getOwnPropertySymbols,TG=Object.getOwnPropertyDescriptor,RG=Object.getPrototypeOf,dE=Object.prototype;function LR(t,e,n){if(typeof e!="string"){if(dE){var i=RG(e);i&&i!==dE&&LR(t,i,n)}var r=MG(e);uE&&(r=r.concat(uE(e)));for(var s=cE(t),o=cE(e),a=0;a<r.length;++a){var l=r[a];if(!(l in EG||n&&n[l]||o&&l in o||s&&l in s)){var c=TG(e,l);try{wG(t,l,c)}catch{}}}}return t}function ya(t){return typeof t=="function"}function r_(t){return typeof t=="object"&&"styledComponentId"in t}function Ss(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function ag(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=e?e+t[i]:t[i];return n}function ic(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function lg(t,e,n){if(n===void 0&&(n=!1),!n&&!ic(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=lg(t[i],e[i]);else if(ic(e))for(var i in e)t[i]=lg(t[i],e[i]);return t}function s_(t,e){Object.defineProperty(t,"toString",{value:e})}function Ac(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var bG=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,r=i.length,s=r;e>=s;)if((s<<=1)<0)throw Ac(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var o=r;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),r=i+n;this.groupSizes[e]=0;for(var s=i;s<r;s++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],r=this.indexOfGroup(e),s=r+i,o=r;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),Ju=new Map,Hd=new Map,Rp=1,Ru=function(t){if(Ju.has(t))return Ju.get(t);for(;Hd.has(Rp);)Rp++;var e=Rp++;return Ju.set(t,e),Hd.set(e,t),e},AG=function(t,e){Ju.set(t,e),Hd.set(e,t)},CG="style[".concat(va,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),PG=new RegExp("^".concat(va,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),LG=function(t,e,n){for(var i,r=n.split(","),s=0,o=r.length;s<o;s++)(i=r[s])&&t.registerName(e,i)},IG=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),r=[],s=0,o=i.length;s<o;s++){var a=i[s].trim();if(a){var l=a.match(PG);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(AG(u,c),LG(t,u,l[3]),t.getTag().insertRules(c,r)),r.length=0}else r.push(a)}}};function NG(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var IR=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(a){var l=Array.from(a.querySelectorAll("style[".concat(va,"]")));return l[l.length-1]}(n),s=r!==void 0?r.nextSibling:null;i.setAttribute(va,"active"),i.setAttribute("data-styled-version","6.0.7");var o=NG();return o&&i.setAttribute("nonce",o),n.insertBefore(i,s),i},DG=function(){function t(e){this.element=IR(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,r=0,s=i.length;r<s;r++){var o=i[r];if(o.ownerNode===n)return o}throw Ac(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),UG=function(){function t(e){this.element=IR(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),OG=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),fE=i_,kG={isServer:!i_,useCSSOMInjection:!hG},NR=function(){function t(e,n,i){e===void 0&&(e=_a),n===void 0&&(n={});var r=this;this.options=xn(xn({},kG),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&i_&&fE&&(fE=!1,function(s){for(var o=document.querySelectorAll(CG),a=0,l=o.length;a<l;a++){var c=o[a];c&&c.getAttribute(va)!=="active"&&(IG(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),s_(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(d){var h=function(f){return Hd.get(f)}(d);if(h===void 0)return"continue";var p=s.names.get(h),m=o.getGroup(d);if(p===void 0||m.length===0)return"continue";var v="".concat(va,".g").concat(d,'[id="').concat(h,'"]'),g="";p!==void 0&&p.forEach(function(f){f.length>0&&(g+="".concat(f,","))}),l+="".concat(m).concat(v,'{content:"').concat(g,'"}').concat(`/*!sc*/
`)},u=0;u<a;u++)c(u);return l}(r)})}return t.registerId=function(e){return Ru(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(xn(xn({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,r=n.target;return n.isServer?new OG(r):i?new DG(r):new UG(r)}(this.options),new bG(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Ru(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(Ru(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Ru(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),FG=/&/g,BG=/^\s*\/\/.*$/gm;function DR(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=DR(n.children,e)),n})}function zG(t){var e,n,i,r=t===void 0?_a:t,s=r.options,o=s===void 0?_a:s,a=r.plugins,l=a===void 0?jf:a,c=function(h,p,m){return m===n||m.startsWith(n)&&m.endsWith(n)&&m.replaceAll(n,"").length>0?".".concat(e):h},u=l.slice();u.push(function(h){h.type===Hf&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(FG,n).replace(i,c))}),o.prefix&&u.push(dG),u.push(lG);var d=function(h,p,m,v){p===void 0&&(p=""),m===void 0&&(m=""),v===void 0&&(v="&"),e=v,n=p,i=new RegExp("\\".concat(n,"\\b"),"g");var g=h.replace(BG,""),f=oG(m||p?"".concat(m," ").concat(p," { ").concat(g," }"):g);o.namespace&&(f=DR(f,o.namespace));var _=[];return Vd(f,cG(u.concat(uG(function(y){return _.push(y)})))),_};return d.hash=l.length?l.reduce(function(h,p){return p.name||Ac(15),Fo(h,p.name)},5381).toString():"",d}var VG=new NR,cg=zG(),UR=lt.createContext({shouldForwardProp:void 0,styleSheet:VG,stylis:cg});UR.Consumer;lt.createContext(void 0);function hE(){return me.useContext(UR)}var OR=function(){function t(e,n){var i=this;this.inject=function(r,s){s===void 0&&(s=cg);var o=i.name+s.hash;r.hasNameForId(i.id,o)||r.insertRules(i.id,o,s(i.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,s_(this,function(){throw Ac(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=cg),this.name+e.hash},t}(),HG=function(t){return t>="A"&&t<="Z"};function pE(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;HG(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var kR=function(t){return t==null||t===!1||t===""},FR=function(t){var e,n,i=[];for(var r in t){var s=t[r];t.hasOwnProperty(r)&&!kR(s)&&(Array.isArray(s)&&s.isCss||ya(s)?i.push("".concat(pE(r),":"),s,";"):ic(s)?i.push.apply(i,Jl(Jl(["".concat(r," {")],FR(s),!1),["}"],!1)):i.push("".concat(pE(r),": ").concat((e=r,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in fG||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function Ps(t,e,n,i){if(kR(t))return[];if(r_(t))return[".".concat(t.styledComponentId)];if(ya(t)){if(!ya(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var r=t(e);return Ps(r,e,n,i)}var s;return t instanceof OR?n?(t.inject(n,i),[t.getName(i)]):[t]:ic(t)?FR(t):Array.isArray(t)?Array.prototype.concat.apply(jf,t.map(function(o){return Ps(o,e,n,i)})):[t.toString()]}function GG(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ya(n)&&!r_(n))return!1}return!0}var WG=RR("6.0.7"),$G=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&GG(e),this.componentId=n,this.baseHash=Fo(WG,n),this.baseStyle=i,NR.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=Ss(r,this.staticRulesId);else{var s=ag(Ps(this.rules,e,n,i)),o=og(Fo(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=i(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}r=Ss(r,o),this.staticRulesId=o}else{for(var l=Fo(this.baseHash,i.hash),c="",u=0;u<this.rules.length;u++){var d=this.rules[u];if(typeof d=="string")c+=d;else if(d){var h=ag(Ps(d,e,n,i));l=Fo(l,h),c+=h}}if(c){var p=og(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,i(c,".".concat(p),void 0,this.componentId)),r=Ss(r,p)}}return r},t}(),BR=lt.createContext(void 0);BR.Consumer;var bp={};function jG(t,e,n){var i=r_(t),r=t,s=!Tp(t),o=e.attrs,a=o===void 0?jf:o,l=e.componentId,c=l===void 0?function(y,S){var E=typeof y!="string"?"sc":aE(y);bp[E]=(bp[E]||0)+1;var w="".concat(E,"-").concat(bR("6.0.7"+E+bp[E]));return S?"".concat(S,"-").concat(w):w}(e.displayName,e.parentComponentId):l,u=e.displayName;u===void 0&&function(y){return Tp(y)?"styled.".concat(y):"Styled(".concat(_G(y),")")}(t);var d=e.displayName&&e.componentId?"".concat(aE(e.displayName),"-").concat(e.componentId):e.componentId||c,h=i&&r.attrs?r.attrs.concat(a).filter(Boolean):a,p=e.shouldForwardProp;if(i&&r.shouldForwardProp){var m=r.shouldForwardProp;if(e.shouldForwardProp){var v=e.shouldForwardProp;p=function(y,S){return m(y,S)&&v(y,S)}}else p=m}var g=new $G(n,d,i?r.componentStyle:void 0);function f(y,S){return function(E,w,T){var I=E.attrs,x=E.componentStyle,b=E.defaultProps,Q=E.foldedComponentIds,ue=E.styledComponentId,k=E.target,W=lt.useContext(BR),J=hE(),ce=E.shouldForwardProp||J.shouldForwardProp,K=function(U,O,q){for(var $,pe=xn(xn({},O),{className:void 0,theme:q}),Se=0;Se<U.length;Se+=1){var fe=ya($=U[Se])?$(pe):$;for(var Pe in fe)pe[Pe]=Pe==="className"?Ss(pe[Pe],fe[Pe]):Pe==="style"?xn(xn({},pe[Pe]),fe[Pe]):fe[Pe]}return O.className&&(pe.className=Ss(pe.className,O.className)),pe}(I,w,pG(w,W,b)||_a),F=K.as||k,j={};for(var H in K)K[H]===void 0||H[0]==="$"||H==="as"||H==="theme"||(H==="forwardedAs"?j.as=K.forwardedAs:ce&&!ce(H,F)||(j[H]=K[H]));var ae=function(U,O){var q=hE(),$=U.generateAndInjectStyles(O,q.styleSheet,q.stylis);return $}(x,K),M=Ss(Q,ue);return ae&&(M+=" "+ae),K.className&&(M+=" "+K.className),j[Tp(F)&&!TR.has(F)?"class":"className"]=M,j.ref=T,me.createElement(F,j)}(_,y,S)}var _=lt.forwardRef(f);return _.attrs=h,_.componentStyle=g,_.shouldForwardProp=p,_.foldedComponentIds=i?Ss(r.foldedComponentIds,r.styledComponentId):"",_.styledComponentId=d,_.target=i?r.target:t,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=i?function(S){for(var E=[],w=1;w<arguments.length;w++)E[w-1]=arguments[w];for(var T=0,I=E;T<I.length;T++)lg(S,I[T],!0);return S}({},r.defaultProps,y):y}}),s_(_,function(){return".".concat(_.styledComponentId)}),s&&LR(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function mE(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n}var gE=function(t){return Object.assign(t,{isCss:!0})};function zR(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ya(t)||ic(t)){var i=t;return gE(Ps(mE(jf,Jl([i],e,!0))))}var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Ps(r):gE(Ps(mE(r,e)))}function ug(t,e,n){if(n===void 0&&(n=_a),!e)throw Ac(1,e);var i=function(r){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,zR.apply(void 0,Jl([r],s,!1)))};return i.attrs=function(r){return ug(t,e,xn(xn({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},i.withConfig=function(r){return ug(t,e,xn(xn({},n),r))},i}var VR=function(t){return ug(jG,t)},$e=VR;TR.forEach(function(t){$e[t]=VR(t)});function Na(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i=ag(zR.apply(void 0,Jl([t],e,!1))),r=bR(i);return new OR(r,i)}const XG=Na`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;$e.div`
  width: 100%;
`;const qG=$e.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`,YG=$e.div`
  width: 120px;
  height: 90px;
  background-color: gray;
  animation: ${XG} 1s ease-in-out infinite;
`,KG=$e.div`
  flex-grow: 1;
  margin-left: 16px;
`,ZG=$e.div`
  width: 70%;
  height: 18px;
  background-color: gray;
  margin-bottom: 8px;
  animation: pulse 1s ease-in-out infinite;
`,JG=$e.div`
  width: 50%;
  height: 14px;
  background-color: gray;
  animation: pulse 1s ease-in-out infinite;
`,QG=$e.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`,eW=$e.div`
  position: relative;
  width: 40%;
  height: 80%;
`;$e.img`
  width: 100%;
  height: 100%;
`;$e.svg`
  position: absolute;
  bottom: 5%;
  right: 5%;
  fill: white;
  cursor: pointer;
`;$e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;const tW=$e.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,nW=$e.h1`
  font-size: 4rem;
`,iW=$e.div`
  display: flex;
  justify-content: flex-end;
`;$e.svg`
  cursor: pointer;
`;const rW=$e.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;$e.svg`
  position: absolute;
  width: 5%;
  height: 5%;
  top: 5%;
  left: 0;
  cursor: pointer;
`;const sW=$e.iframe`
  width: 80%;
  height: 80%;
`,oW=$e.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;$e.svg`
  position: absolute;
  width: 5%;
  height: 5%;
  top: 5%;
  left: 0;
  cursor: pointer;
`;const aW=$e.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  width: 80%;
  height: 80%;
`,lW=$e.div`
  width: 20%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 0.8rem;
  color: white;
  border-radius: 10px;
  cursor: pointer;
`,cW=$e.img`
  border-radius: 10px 10px 0 0;
  width: 100%;
`,uW=$e.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
`,vE=$e.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
`;$e.div`
  color: red;
`;const dW=()=>{const[t,e]=me.useState(!0),[n,i]=me.useState(!1),[r,s]=me.useState(!1),[o,a]=me.useState(!1),[l,c]=me.useState(""),[u,d]=me.useState(""),[h,p]=me.useState(1),m=8,v=()=>{const w=(h-1)*m,T=w+m;return u.slice(w,T)},g=Math.ceil(u.length/m),f=[];for(let w=1;w<=g;w++)f.push(Y.jsx("button",{className:h===w?"active":"",onClick:()=>p(w),children:w},w));me.useEffect(()=>{(async()=>{try{const T=await $8.get("https://www.googleapis.com/youtube/v3/search",{params:{key:j8,part:"snippet",q:"light pollution",maxResults:50}});e(!t),i(!n),c(T.data.items[0]),d(T.data.items)}catch(T){console.error(T)}})()},[]);const _=()=>{i(!n),s(!r)},y=()=>{i(!n),a(!o)},S=w=>{p(w)},E=w=>{window.open(`https://www.youtube.com/watch?v=${w}`,"_blank")};return sv.createPortal(Y.jsxs("div",{className:"AwarnessModal",children:[t&&Y.jsxs(qG,{children:[Y.jsx(YG,{}),Y.jsxs(KG,{children:[Y.jsx(ZG,{}),Y.jsx(JG,{})]})]}),n&&Y.jsxs(QG,{children:[Y.jsxs(eW,{children:[Y.jsxs("svg",{onClick:_,width:"66",height:"66",viewBox:"0 0 66 66",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Y.jsx("rect",{width:"66",height:"66",rx:"33",fill:"white"}),Y.jsx("path",{d:"M50 33L24.5 47.7224L24.5 18.2776L50 33Z",fill:"black"})]}),Y.jsx("img",{src:l.snippet.thumbnails.high.url,alt:"mainvideo"})]}),Y.jsxs(tW,{children:[Y.jsxs("div",{children:[Y.jsx(nW,{children:l.snippet.title}),Y.jsx("p",{children:l.snippet.description}),Y.jsx("p",{})]}),Y.jsx(iW,{children:Y.jsx("svg",{onClick:y,width:"89",height:"22",viewBox:"0 0 89 22",xmlns:"http://www.w3.org/2000/svg",style:{fill:"black"},children:Y.jsx("path",{d:"M88.5312 12.0312C89.1007 11.4617 89.1007 10.5383 88.5312 9.9688L79.2504 0.688025C78.6809 0.118511 77.7575 0.118511 77.188 0.688025C76.6185 1.25754 76.6185 2.18091 77.188 2.75042L85.4376 11L77.188 19.2496C76.6185 19.8191 76.6185 20.7425 77.188 21.312C77.7575 21.8815 78.6809 21.8815 79.2504 21.312L88.5312 12.0312ZM0 12.4583H87.5V9.54167H0V12.4583Z",fill:"white"})})})]})]}),r&&Y.jsxs(rW,{children:[Y.jsx("svg",{onClick:_,width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Y.jsx("path",{d:"M0.910955 6.58917C0.754729 6.4329 0.666966 6.22097 0.666966 6C0.666966 5.77903 0.754729 5.56711 0.910955 5.41084L5.62512 0.696668C5.70199 0.617076 5.79395 0.553591 5.89562 0.509917C5.99729 0.466242 6.10664 0.443255 6.21729 0.442293C6.32794 0.441332 6.43767 0.462416 6.54008 0.504317C6.6425 0.546218 6.73554 0.608096 6.81378 0.68634C6.89203 0.764584 6.95391 0.857626 6.99581 0.96004C7.03771 1.06245 7.05879 1.17219 7.05783 1.28284C7.05687 1.39349 7.03388 1.50284 6.99021 1.60451C6.94653 1.70618 6.88305 1.79813 6.80345 1.875L2.67845 6L6.80345 10.125C6.95525 10.2822 7.03925 10.4927 7.03735 10.7112C7.03545 10.9297 6.94781 11.1387 6.7933 11.2932C6.6388 11.4477 6.42979 11.5353 6.21129 11.5372C5.99279 11.5391 5.78229 11.4551 5.62512 11.3033L0.910955 6.58917Z",fill:"white"})}),Y.jsx(sW,{src:`https://www.youtube.com/embed/${l.id.videoId}`,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})]}),o&&Y.jsxs(oW,{children:[Y.jsx("svg",{onClick:y,width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Y.jsx("path",{d:"M0.910955 6.58917C0.754729 6.4329 0.666966 6.22097 0.666966 6C0.666966 5.77903 0.754729 5.56711 0.910955 5.41084L5.62512 0.696668C5.70199 0.617076 5.79395 0.553591 5.89562 0.509917C5.99729 0.466242 6.10664 0.443255 6.21729 0.442293C6.32794 0.441332 6.43767 0.462416 6.54008 0.504317C6.6425 0.546218 6.73554 0.608096 6.81378 0.68634C6.89203 0.764584 6.95391 0.857626 6.99581 0.96004C7.03771 1.06245 7.05879 1.17219 7.05783 1.28284C7.05687 1.39349 7.03388 1.50284 6.99021 1.60451C6.94653 1.70618 6.88305 1.79813 6.80345 1.875L2.67845 6L6.80345 10.125C6.95525 10.2822 7.03925 10.4927 7.03735 10.7112C7.03545 10.9297 6.94781 11.1387 6.7933 11.2932C6.6388 11.4477 6.42979 11.5353 6.21129 11.5372C5.99279 11.5391 5.78229 11.4551 5.62512 11.3033L0.910955 6.58917Z",fill:"white"})}),Y.jsx(aW,{children:v().map(w=>Y.jsxs(lW,{onClick:()=>E(w.id.videoId),children:[Y.jsx(cW,{src:w.snippet.thumbnails.medium.url,alt:w.snippet.title}),Y.jsx("h3",{children:w.snippet.title}),Y.jsx("p",{children:w.snippet.publishTime.match(/^(\d{4}-\d{2}-\d{2})/)[0]})]},w.id.videoId))}),Y.jsxs(uW,{children:[h!==1&&Y.jsx(vE,{onClick:()=>S(h-1),children:"<"}),f.map(w=>w),h!==g&&Y.jsx(vE,{onClick:()=>S(h+1),children:">"})]})]})]}),document.getElementById("modal-aboutStarryNight"))},fW=Na`
    0%{
        top: 1rem;
        opacity: 0;
    }
    100%{
        top: 0.5rem;
        opacity: 1;
    }
`,hW=$e.header`
  width: 100%;
  opacity: 0;
  position: absolute;
  color: white;
  display: flex;
  justify-content: flex-end;
  animation: ${fW} 0.5s ease-in-out forwards;
  animation-delay: 4.5s;
`,pW=$e.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  margin-right: 5rem;
`;$e.div`
  position: absolute;
  z-index: 999;
  color: white;
  display: flex;
  align-items: center;
  top: 50%;
  left: 50%;
  height: 50%;
  font-size: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  transform: translate(-50%, -50%);
  padding: 0 1rem;
`;$e.button`
  position: absolute;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  top: 0;
  right: 0;
`;const _E=$e.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 998;
  background-color: white;
  opacity: 0.1;
`,HR=()=>{const[t,e,n]=JT(["nickName"]),i=lv(),[r,s]=Nn(K1),[o,a]=Nn(J1),[l,c]=Nn(Lz),[u,d]=Nn(Z1),[,h]=Nn(Q1);me.useEffect(()=>{a(!0),requestAnimationFrame(()=>{a(!1)})},[a]),me.useEffect(()=>{const f=t.nickName;f&&e("nickName",f)},[t.nickName,e]),me.useEffect(()=>{qT(dl).then(f=>{f.user&&(d(!0),e("nickName",f.user.displayName,{path:"/"}))}).catch(f=>{console.log(f)})},[u,e]);const p=()=>{a(!o)},m=()=>{s(!r),i(-1)},v=()=>{n("nickName"),window.location.reload()},g=()=>{c(!l)};return Y.jsxs(Y.Fragment,{children:[Y.jsx(hW,{children:Y.jsxs(pW,{children:[r&&Y.jsx(Y.Fragment,{children:Y.jsx("svg",{onClick:m,width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Y.jsx("path",{d:"M0.910955 6.58917C0.754729 6.4329 0.666966 6.22097 0.666966 6C0.666966 5.77903 0.754729 5.56711 0.910955 5.41084L5.62512 0.696668C5.70199 0.617076 5.79395 0.553591 5.89562 0.509917C5.99729 0.466242 6.10664 0.443255 6.21729 0.442293C6.32794 0.441332 6.43767 0.462416 6.54008 0.504317C6.6425 0.546218 6.73554 0.608096 6.81378 0.68634C6.89203 0.764584 6.95391 0.857626 6.99581 0.96004C7.03771 1.06245 7.05879 1.17219 7.05783 1.28284C7.05687 1.39349 7.03388 1.50284 6.99021 1.60451C6.94653 1.70618 6.88305 1.79813 6.80345 1.875L2.67845 6L6.80345 10.125C6.95525 10.2822 7.03925 10.4927 7.03735 10.7112C7.03545 10.9297 6.94781 11.1387 6.7933 11.2932C6.6388 11.4477 6.42979 11.5353 6.21129 11.5372C5.99279 11.5391 5.78229 11.4551 5.62512 11.3033L0.910955 6.58917Z",fill:"white"})})}),Y.jsx("span",{onClick:()=>{h(!0)},children:"About StarryNight"}),Y.jsx("span",{onClick:g,children:"Awarness"}),t.nickName?Y.jsxs(Y.Fragment,{children:[Y.jsx("span",{children:t.nickName}),Y.jsx("span",{onClick:v,children:"Log Out"})]}):Y.jsx("span",{onClick:p,children:"Sign In"})]})}),o&&Y.jsxs(Y.Fragment,{children:[Y.jsx(_E,{onClick:p}),Y.jsx(QT,{})]}),l&&Y.jsxs(Y.Fragment,{children:[Y.jsx(_E,{onClick:g}),Y.jsx(dW,{})]})]})};function mW(){const t=me.useRef(null),[e,n]=Nn(Pz),[i,r]=Nn(K1),[s,o]=Nn(Ov),a=lv(),l=me.useRef(null),c=me.useRef(null),u=me.useRef(null),d=me.useRef(null),h=me.useRef(null),p=me.useRef([]);return me.useEffect(()=>{let m=null;const v=new Dv({canvas:t.current,antialias:!0});v.setSize(window.innerWidth,window.innerHeight),v.domElement.style.pointerEvents="auto",l.current=v;const g=new F1;c.current=g;const f=new In(75,window.innerWidth/window.innerHeight,.1,1e3),_=0;f.zoom=_,f.updateProjectionMatrix(),u.current=f,f.position.copy(e);const y=new G1(3552075,.3);g.add(y);const S=new Yl(1,32,32),E=new H1,w=E.load("/earth/textures/Material.001_baseColor.jpeg",ae=>(ae.flipY=!1,ae.needsUpdate=!0,ae)),T=E.load("/earth/textures/Material.001_metallicRoughness.png",ae=>(ae.flipY=!1,ae.needsUpdate=!0,ae)),I=E.load("/earth/textures/Material.001_emissive.jpeg",ae=>(ae.flipY=!1,ae.needsUpdate=!0,ae)),x=new iz({map:w,metalnessMap:T,roughnessMap:T,emissiveMap:I,emissive:new Qe(16777215),emissiveIntensity:1});w.minFilter=wt,w.magFilter=wt,T.minFilter=wt,T.magFilter=wt,I.minFilter=wt,I.magFilter=wt;const b=new $n(S,x);g.add(b);const Q=new Bs,ue=new X1(v);ue.addPass(new q1(g,f)),ue.addPass(Q),h.current=ue;const k=new W1(f,v.domElement);k.enableDamping=!0,k.rotateSpeed=.4,k.panSpeed=.4,k.enableZoom=!1,d.current=k;class W{constructor(M,U,O,q){this.geometry=new Yl(.0115,8,8),this.material=new Lf({color:16777215,transparent:!0,opacity:.5,side:wi}),this.mesh=new $n(this.geometry,this.material),this.mesh.position.set(M.x,M.y,M.z),this.mesh.userData.isButton=!0,this.mesh.userData.hovered=!1,this.mesh.userData.clicked=!1,this.mesh.userData.cameraPosition=U,this.text=new Cz(O),this.text.position.set(M.x,M.y+.05,M.z),this.text.material.depthTest=!1,this.text.material.transparent=!0,this.text.material.opacity=0,this.text.scale.set(.05,.05,.05),this.mesh.userData.text=this.text,this.mesh.userData.level=q,g.add(this.mesh),g.add(this.text)}}Iz.forEach(ae=>{const M=new W(ae.location,ae.camera,ae.country,ae.pollutionLevel);g.add(M.mesh),p.current.push(M)});function J(ae){const M=new Ce;M.x=ae.clientX/window.innerWidth*2-1,M.y=-(ae.clientY/window.innerHeight)*2+1;const U=new hS;U.setFromCamera(M,f);const O=U.intersectObjects(g.children,!0);for(const q of g.children)q.userData.isButton&&(O.length>0&&O[0].object===q?q.userData.hovered||(q.userData.hovered=!0,q.material.opacity=1,q.material.needsUpdate=!0,v.domElement.style.cursor="pointer",q.userData.text.material.opacity=1):q.userData.hovered&&(q.userData.hovered=!1,q.material.opacity=.5,q.material.needsUpdate=!0,v.domElement.style.cursor="auto",q.userData.text.material.opacity=0))}function ce(){f.aspect=window.innerWidth/window.innerHeight,f.updateProjectionMatrix(),v.setSize(window.innerWidth,window.innerHeight),ue.setSize(window.innerWidth,window.innerHeight)}function K(ae){const M=new Ce;M.x=ae.clientX/window.innerWidth*2-1,M.y=-(ae.clientY/window.innerHeight)*2+1;const U=new hS;U.setFromCamera(M,f);const O=U.intersectObjects(g.children,!0);for(const q of O){const $=q.object;if($.userData&&$.userData.isButton&&!$.userData.clicked){$.userData.text.material.opacity=1;const pe=new V(...$.userData.cameraPosition),Se=1e3;new yi.Tween(f.position).to(pe,Se).easing(yi.Easing.Quadratic.InOut).start().onComplete(()=>{$.userData.clicked=!1;const fe=0,Pe=1e3;new yi.Tween(f).to({zoom:fe},Pe).easing(yi.Easing.Quadratic.InOut).onUpdate(()=>{f.updateProjectionMatrix()}).start().onComplete(()=>{n(f.position),o($.userData.level),r(!i),a("/info")})});break}}}function F(){setTimeout(()=>{new yi.Tween(f).to({zoom:1},4e3).easing(yi.Easing.Quadratic.InOut).onUpdate(()=>{f.updateProjectionMatrix()}).start()},500)}function j(){m=requestAnimationFrame(j),yi.update(),d.current.update(),h.current.render()}F(),j(),window.addEventListener("resize",()=>{f.aspect=window.innerWidth/window.innerHeight,f.updateProjectionMatrix(),v.setSize(window.innerWidth,window.innerHeight),ue.setSize(window.innerWidth,window.innerHeight)});const H=t.current;return H&&(H.addEventListener("mousemove",J),H.addEventListener("click",K)),()=>{cancelAnimationFrame(m),window.removeEventListener("resize",ce);const ae=t.current;ae&&(ae.addEventListener("mousemove",J),ae.addEventListener("click",K))}},[]),Y.jsxs(Y.Fragment,{children:[Y.jsx(HR,{}),Y.jsx("canvas",{ref:t}),";"]})}const gW=Na`
    0%{
        bottom: 4%;
        opacity: 0;
    }
    100%{
        bottom: 5%;
        opacity: 1;
    }
    `,vW=$e.div`
  position: absolute;
  width: 20%;
  bottom: 5%;
  right: 2%;
  animation: ${gW} 0.5s ease-in-out forwards;
  animation-delay: 4.5s;
  opacity: 0;
  cursor: pointer;
`,_W=$e.img`
  position: absolute;
  bottom: 5%;
  right: 2%;
  width: 20%;
  cursor: pointer;
`,yW=()=>{const[t,e]=me.useState(!1),[n]=Nn(Ov),i=me.useRef([]);me.useEffect(()=>{const o=document.querySelectorAll(".checkLevel");i.current=Array.from(o),r(n)},[n]);const r=o=>{switch(o){case .02:s(1);break;case .04:s(2);break;case .5:s(5);break;case .8:s(7);break}},s=o=>{if(i.current[o-1]){const l=Array.from(i.current).reverse()[o-1];l.style.display="none"}};return Y.jsxs(_W,{children:[Y.jsx(vW,{onClick:()=>e(!t),children:Y.jsxs("svg",{viewBox:"0 0 326 73",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Y.jsx("rect",{x:"295.712",y:"29.6949",width:"27.0224",height:"19.6526",fill:"#010001"}),Y.jsx("rect",{x:"295.712",y:"29.6949",width:"27.0224",height:"19.6526",fill:"black",fillOpacity:"0.5",className:"checkLevel"}),Y.jsx("rect",{x:"253.644",y:"29.6949",width:"27.0224",height:"19.6526",fill:"#152B6D"}),Y.jsx("rect",{x:"253.644",y:"29.6949",width:"27.0224",height:"19.6526",fill:"black",fillOpacity:"0.5",className:"checkLevel"}),Y.jsx("rect",{x:"211.576",y:"29.6949",width:"27.0224",height:"19.6526",fill:"#64D841"}),Y.jsx("rect",{x:"211.576",y:"29.6949",width:"27.0224",height:"19.6526",fill:"black",fillOpacity:"0.5",className:"checkLevel"}),Y.jsx("rect",{x:"169.508",y:"29.6949",width:"27.0224",height:"19.6526",fill:"#FDF953"}),Y.jsx("rect",{x:"169.508",y:"29.6949",width:"27.0224",height:"19.6526",fill:"black",fillOpacity:"0.5",className:"checkLevel"}),Y.jsx("rect",{x:"127.441",y:"29.6949",width:"27.0224",height:"19.6526",fill:"#E1A53C"}),Y.jsx("rect",{x:"127.441",y:"29.6949",width:"27.0224",height:"19.6526",fill:"black",fillOpacity:"0.5",className:"checkLevel"}),Y.jsx("rect",{x:"85.3728",y:"29.6949",width:"27.0224",height:"19.6526",fill:"#B75843"}),Y.jsx("rect",{x:"85.3728",y:"29.6949",width:"27.0224",height:"19.6526",fill:"black",fillOpacity:"0.5",className:"checkLevel"}),Y.jsx("rect",{x:"43.3051",y:"29.6949",width:"27.0224",height:"19.6526",fill:"#9C241D"}),Y.jsx("rect",{x:"43.3051",y:"29.6949",width:"27.0224",height:"19.6526",fill:"black",fillOpacity:"0.5",className:"checkLevel"}),Y.jsx("rect",{x:"1.2373",y:"29.6949",width:"27.0224",height:"19.6526",fill:"#AAAAAA"}),Y.jsx("rect",{x:"1.2373",y:"29.6949",width:"27.0224",height:"19.6526",fill:"black",fillOpacity:"0.5",className:"checkLevel"}),Y.jsx("path",{d:"M1.2373 56.9153L321.695 56.9153",stroke:"white",strokeWidth:"1.23729"}),Y.jsx("path",{d:"M2.31464 63.3915C2.55542 63.3932 2.79269 63.4372 3.02644 63.5233C3.26018 63.6094 3.47109 63.75 3.65914 63.9451C3.84895 64.1402 4.0001 64.4038 4.11258 64.736C4.22682 65.0664 4.28481 65.4777 4.28657 65.9698C4.28657 66.4425 4.23912 66.8635 4.14421 67.2325C4.04931 67.5999 3.9131 67.9101 3.73559 68.1631C3.55984 68.4162 3.3463 68.6087 3.09498 68.7405C2.84365 68.8723 2.56069 68.9382 2.2461 68.9382C1.92448 68.9382 1.63888 68.8749 1.38931 68.7484C1.13975 68.6218 0.936754 68.447 0.780335 68.2238C0.623917 67.9988 0.526375 67.7405 0.487709 67.4487H1.29177C1.3445 67.6807 1.4517 67.8687 1.6134 68.0129C1.77684 68.1552 1.98775 68.2264 2.2461 68.2264C2.64154 68.2264 2.94998 68.0542 3.17143 67.7097C3.39288 67.3635 3.50448 66.8801 3.50624 66.2597H3.46406C3.37266 66.4109 3.25843 66.5409 3.12134 66.6499C2.98601 66.7589 2.83399 66.8432 2.66527 66.903C2.49655 66.9628 2.3164 66.9926 2.12483 66.9926C1.81375 66.9926 1.53079 66.9162 1.27595 66.7633C1.02111 66.6104 0.818122 66.4003 0.666976 66.1332C0.51583 65.8661 0.440257 65.5611 0.440257 65.2184C0.440257 64.8775 0.517587 64.5681 0.672248 64.2905C0.828667 64.0128 1.0466 63.7931 1.32604 63.6314C1.60724 63.4679 1.93678 63.388 2.31464 63.3915ZM2.31728 64.0769C2.11165 64.0769 1.92623 64.1279 1.76103 64.2298C1.59758 64.33 1.4684 64.4662 1.3735 64.6384C1.27859 64.8089 1.23114 64.9987 1.23114 65.2079C1.23114 65.417 1.27683 65.6068 1.36822 65.7773C1.46137 65.946 1.58791 66.0805 1.74785 66.1807C1.90954 66.2791 2.09408 66.3283 2.30146 66.3283C2.45612 66.3283 2.60024 66.2984 2.73381 66.2387C2.86738 66.1789 2.98425 66.0963 3.08443 65.9908C3.18461 65.8836 3.26282 65.7624 3.31906 65.627C3.3753 65.4917 3.40342 65.3494 3.40342 65.2C3.40342 65.0014 3.35597 64.8168 3.26106 64.6464C3.16791 64.4759 3.03962 64.3388 2.87617 64.2351C2.71272 64.1296 2.52642 64.0769 2.31728 64.0769Z",fill:"white"}),Y.jsx("path",{d:"M323.025 63.4653V68.8644H322.208V64.2825H322.176L320.885 65.1262V64.3458L322.232 63.4653H323.025Z",fill:"white"}),Y.jsx("line",{x1:"1.85595",y1:"54.4407",x2:"1.85595",y2:"59.3898",stroke:"white",strokeWidth:"1.23729"}),Y.jsx("line",{x1:"322.313",y1:"54.4407",x2:"322.313",y2:"59.3898",stroke:"white",strokeWidth:"1.23729"})]})}),t&&Y.jsx("img",{onClick:()=>e(!t),src:"./public/stars/level.jpg",alt:"level"})]})};function SW(){const t=me.useRef(null),e=me.useRef(null),n=me.useRef(null),i=me.useRef(null),r=me.useRef(null),s=me.useRef(null),o=me.useRef(null),[a]=Nn(Ov);return me.useEffect(()=>{let l=null;const c=new Dv({canvas:t.current,antialias:!0});c.setSize(window.innerWidth,window.innerHeight),c.domElement.style.pointerEvents="auto",e.current=c;const u=new F1;n.current=u;const d=new In(75,window.innerWidth/window.innerHeight,.1,1e3);i.current=d;const h=new G1(3552075,.3);u.add(h);const p=new Yl(1,32,32),v=new H1().load("/stars/textures/material_emissive.png",Q=>{Q.flipY=!1,Q.minFilter=wt,Q.magFilter=wt,o.current.emissiveMap=Q,o.current.needsUpdate=!0}),g=new rz({emissiveMap:v,emissive:new Qe(16777215),emissiveIntensity:a,side:mn,transparent:!0,opacity:0});o.current=g,v.minFilter=wt,v.magFilter=wt;const f=new $n(p,g);u.add(f),f.geometry.computeBoundingSphere();const _=f.geometry.boundingSphere.center.clone(),y=1,S=_.clone().add(new V(0,0,y));d.position.copy(S),d.lookAt(_);const E=new Bs,w=new X1(c);w.addPass(new q1(u,d)),w.addPass(E),s.current=w;const T=new W1(d,c.domElement);T.enableDamping=!0,T.rotateSpeed=.4,T.panSpeed=.4,T.enableZoom=!1,r.current=T;function I(){d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight),w.setSize(window.innerWidth,window.innerHeight)}function x(){l=requestAnimationFrame(x),yi.update(),r.current.update(),s.current.render()}function b(){const Q={value:0},ue=2e3;new yi.Tween(Q).to({value:1},ue).easing(yi.Easing.Quadratic.InOut).onUpdate(()=>{o.current.opacity=Q.value,o.current.needsUpdate=!0}).start()}return setTimeout(()=>{b()},500),x(),window.addEventListener("resize",I),()=>{cancelAnimationFrame(l),window.removeEventListener("resize",I)}},[]),Y.jsxs("div",{style:{position:"relative"},children:[Y.jsx(HR,{}),Y.jsx("canvas",{ref:t}),Y.jsx(yW,{})]})}const EW=Na`
    0%{
        opacity: 0;
    }
    10%{
        opacity: 1;
    }
    90%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
`;Na`
    0%{
        opacity: 0;
    }
    20%{
        opacity: 1;
    }
    85%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
`;const xW=$e.main`
  width: 100vw;
  height: 100vh;
  text-align: center;
  color: white;
  font-size: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: "Georgia", serif;
  opacity: 0;
  animation: ${EW} 3s ease-in-out forwards;
  @media screen and (max-width: 600px) {
    font-size: 15px;
  }

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    font-size: 25px;
  }
`,wW=$e.p`
  margin-top: 40px;
  @media screen and (max-width: 600px) {
    margin-top: 20px;
  }

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    margin-top: 30px;
  }
`,MW=()=>{const t=lv(),e=()=>{t("/Earth")};return Y.jsx(xW,{onAnimationEnd:e,children:Y.jsxs(wW,{children:["“For my part I know nothing with any certainty, but the sight of the stars makes me dream.”",Y.jsx("br",{}),Y.jsx("br",{}),Y.jsx("br",{}),"— Vincent van Gogh"]})})},TW=Na`
    0%{
        top: 1rem;
        opacity: 0;
    }
    100%{
        top: 0.5rem;
        opacity: 1;
    }
`;$e.header`
  width: 100%;
  opacity: 0;
  position: absolute;
  color: white;
  display: flex;
  justify-content: flex-end;
  animation: ${TW} 0.5s ease-in-out forwards;
  animation-delay: 4.5s;
`;$e.div`
  width: 30%;
`;const RW=$e.div`
  position: absolute;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  font-size: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  transform: translate(-50%, -50%);
  padding: 0 1rem;
  pointer-events: auto;
`,bW=$e.div`
  width: 50%;
  height: 50%;
  font-size: 18px;
`;$e.button`
  position: absolute;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  top: 0;
  right: 0;
`;$e.div`
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.1;
`;function AW(){const[t,e]=Nn(Q1);return sv.createPortal(t&&Y.jsx(RW,{onClick:()=>e(!1),children:Y.jsx(bW,{onClick:n=>n.stopPropagation(),children:Y.jsxs("p",{children:["Have you ever seen the night sky because you want to see the stars?",Y.jsx("br",{}),"Have you ever looked up at the sky on an especially difficult day?",Y.jsx("br",{}),"But you rarely see stars Why is it getting harder to see the stars?",Y.jsx("br",{}),Y.jsx("br",{}),"According to the Ministry of Environment, light pollution refers to a condition in which excessive light due to improper use of artificial lighting or light leaking out of the lighting area to be illuminated interferes with people`'`s healthy and pleasant lives or damages the environment. Although this type of pollution can exist throughout the day, its effects are magnified during the night with the contrast of darkness.The area affected by artificial illumination continues to increase. The Starry night raises awareness of the phenomenon that light pollution is getting worse as urbanization gets worse. This project also tried to show the seriousness of light pollution in each country and the seriousness of each country.",Y.jsx("br",{}),Y.jsx("br",{}),"The Starry Night is a project by Jungho Yeom. Data from ",Y.jsx("a",{href:"https://www.darksky.org/light-pollution/",target:"_blank",rel:"noopener noreferrer",children:"Dark Sky"})," and visualization created with Three.js."]})})}),document.getElementById("modal-aboutStarryNight"))}Dw(document.getElementById("root")).render(Y.jsx(e3,{children:Y.jsxs(c2,{children:[Y.jsxs(a2,{children:[Y.jsx(ol,{path:"/",element:Y.jsx(MW,{})}),Y.jsx(ol,{path:"/earth",element:Y.jsx(mW,{style:{overflow:"hidden"}})}),Y.jsx(ol,{path:"/signin",element:Y.jsx(QT,{})}),Y.jsx(ol,{path:"/Info",element:Y.jsx(SW,{})})]}),Y.jsx(AW,{})]})}),document.getElementById("root"));
