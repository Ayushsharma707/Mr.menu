var e,t,r,n,i,o,a,s,c,u,l,d,h,p,f,v,m,g,y,b=globalThis;function _(e){return e&&e.__esModule?e.default:e}var w={},k={},E=function(e){return e&&e.Math===Math&&e};k=E("object"==typeof globalThis&&globalThis)||E("object"==typeof window&&window)||E("object"==typeof self&&self)||E("object"==typeof b&&b)||E("object"==typeof k&&k)||function(){return this}()||Function("return this")();var S={},O={};S=!(O=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var F={},j={};j=!O(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var $=Function.prototype.call;F=j?$.bind($):function(){return $.apply($,arguments)};var L={}.propertyIsEnumerable,M=Object.getOwnPropertyDescriptor;o=M&&!L.call({1:2},1)?function(e){var t=M(this,e);return!!t&&t.enumerable}:L;var P={};P=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var x={},T={},N={},A=Function.prototype,H=A.call,I=j&&A.bind.bind(H,H),q={},C=(N=j?I:function(e){return function(){return H.apply(e,arguments)}})({}.toString),D=N("".slice);q=function(e){return D(C(e),8,-1)};var R=Object,W=N("".split);T=O(function(){return!R("z").propertyIsEnumerable(0)})?function(e){return"String"===q(e)?W(e,""):R(e)}:R;var z={},U={};U=function(e){return null==e};var B=TypeError;z=function(e){if(U(e))throw new B("Can't call method on "+e);return e},x=function(e){return T(z(e))};var G={},Q={},J={},Y={},V="object"==typeof document&&document.all;Y=void 0===V&&void 0!==V?function(e){return"function"==typeof e||e===V}:function(e){return"function"==typeof e},J=function(e){return"object"==typeof e?null!==e:Y(e)};var K={},X={};X=function(e,t){var r;return arguments.length<2?(r=k[e],Y(r)?r:void 0):k[e]&&k[e][t]};var Z={};Z=N({}.isPrototypeOf);var ee={},et={},er={},en={},ei=k.navigator,eo=ei&&ei.userAgent;en=eo?String(eo):"";var ea=k.process,es=k.Deno,ec=ea&&ea.versions||es&&es.version,eu=ec&&ec.v8;eu&&(s=(a=eu.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&en&&(!(a=en.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=en.match(/Chrome\/(\d+)/))&&(s=+a[1]),er=s;var el=k.String;ee=(et=!!Object.getOwnPropertySymbols&&!O(function(){var e=Symbol("symbol detection");return!el(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&er&&er<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ed=Object;K=ee?function(e){return"symbol"==typeof e}:function(e){var t=X("Symbol");return Y(t)&&Z(t.prototype,ed(e))};var eh={},ep={},ef={},ev=String;ef=function(e){try{return ev(e)}catch(e){return"Object"}};var em=TypeError;ep=function(e){if(Y(e))return e;throw new em(ef(e)+" is not a function")},eh=function(e,t){var r=e[t];return U(r)?void 0:ep(r)};var eg={},ey=TypeError;eg=function(e,t){var r,n;if("string"===t&&Y(r=e.toString)&&!J(n=F(r,e))||Y(r=e.valueOf)&&!J(n=F(r,e))||"string"!==t&&Y(r=e.toString)&&!J(n=F(r,e)))return n;throw new ey("Can't convert object to primitive value")};var eb={},e_={},ew={};ew=!1;var ek={},eE=Object.defineProperty;ek=function(e,t){try{eE(k,e,{value:t,configurable:!0,writable:!0})}catch(r){k[e]=t}return t};var eS="__core-js_shared__",eO=e_=k[eS]||ek(eS,{});(eO.versions||(eO.versions=[])).push({version:"3.38.0",mode:ew?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.38.0/LICENSE",source:"https://github.com/zloirock/core-js"}),eb=function(e,t){return e_[e]||(e_[e]=t||{})};var eF={},ej={},e$=Object;ej=function(e){return e$(z(e))};var eL=N({}.hasOwnProperty);eF=Object.hasOwn||function(e,t){return eL(ej(e),t)};var eM={},eP=0,ex=Math.random(),eT=N(1..toString);eM=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eT(++eP+ex,36)};var eN=k.Symbol,eA=eb("wks"),eH=ee?eN.for||eN:eN&&eN.withoutSetter||eM,eI=TypeError,eq=(eF(eA,e="toPrimitive")||(eA[e]=et&&eF(eN,e)?eN[e]:eH("Symbol."+e)),eA[e]);Q=function(e,t){if(!J(e)||K(e))return e;var r,n=eh(e,eq);if(n){if(void 0===t&&(t="default"),r=F(n,e,t),!J(r)||K(r))return r;throw new eI("Can't convert object to primitive value")}return void 0===t&&(t="number"),eg(e,t)},G=function(e){var t=Q(e,"string");return K(t)?t:t+""};var eC={},eD={},eR=k.document,eW=J(eR)&&J(eR.createElement);eD=function(e){return eW?eR.createElement(e):{}},eC=!S&&!O(function(){return 7!==Object.defineProperty(eD("div"),"a",{get:function(){return 7}}).a});var ez=Object.getOwnPropertyDescriptor;i=S?ez:function(e,t){if(e=x(e),t=G(t),eC)try{return ez(e,t)}catch(e){}if(eF(e,t))return P(!F(o,e,t),e[t])};var eU={},eB={};eB=S&&O(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eG={},eQ=String,eJ=TypeError;eG=function(e){if(J(e))return e;throw new eJ(eQ(e)+" is not an object")};var eY=TypeError,eV=Object.defineProperty,eK=Object.getOwnPropertyDescriptor,eX="enumerable",eZ="configurable",e0="writable";c=S?eB?function(e,t,r){if(eG(e),t=G(t),eG(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e0 in r&&!r[e0]){var n=eK(e,t);n&&n[e0]&&(e[t]=r.value,r={configurable:eZ in r?r[eZ]:n[eZ],enumerable:eX in r?r[eX]:n[eX],writable:!1})}return eV(e,t,r)}:eV:function(e,t,r){if(eG(e),t=G(t),eG(r),eC)try{return eV(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eY("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eU=S?function(e,t,r){return c(e,t,P(1,r))}:function(e,t,r){return e[t]=r,e};var e1={},e2={},e4=Function.prototype,e8=S&&Object.getOwnPropertyDescriptor,e5=eF(e4,"name")&&(!S||S&&e8(e4,"name").configurable),e9={},e3=N(Function.toString);Y(e_.inspectSource)||(e_.inspectSource=function(e){return e3(e)}),e9=e_.inspectSource;var e7={},e6={},te=k.WeakMap;e6=Y(te)&&/native code/.test(String(te));var tt={},tr=eb("keys");tt=function(e){return tr[e]||(tr[e]=eM(e))};var tn={};tn={};var ti="Object already initialized",to=k.TypeError,ta=k.WeakMap;if(e6||e_.state){var ts=e_.state||(e_.state=new ta);ts.get=ts.get,ts.has=ts.has,ts.set=ts.set,u=function(e,t){if(ts.has(e))throw new to(ti);return t.facade=e,ts.set(e,t),t},l=function(e){return ts.get(e)||{}},d=function(e){return ts.has(e)}}else{var tc=tt("state");tn[tc]=!0,u=function(e,t){if(eF(e,tc))throw new to(ti);return t.facade=e,eU(e,tc,t),t},l=function(e){return eF(e,tc)?e[tc]:{}},d=function(e){return eF(e,tc)}}var tu=(e7={set:u,get:l,has:d,enforce:function(e){return d(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!J(t)||(r=l(t)).type!==e)throw new to("Incompatible receiver, "+e+" required");return r}}}).enforce,tl=e7.get,th=String,tp=Object.defineProperty,tf=N("".slice),tv=N("".replace),tm=N([].join),tg=S&&!O(function(){return 8!==tp(function(){},"length",{value:8}).length}),ty=String(String).split("String"),tb=e2=function(e,t,r){"Symbol("===tf(th(t),0,7)&&(t="["+tv(th(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eF(e,"name")||e5&&e.name!==t)&&(S?tp(e,"name",{value:t,configurable:!0}):e.name=t),tg&&r&&eF(r,"arity")&&e.length!==r.arity&&tp(e,"length",{value:r.arity});try{r&&eF(r,"constructor")&&r.constructor?S&&tp(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tu(e);return eF(n,"source")||(n.source=tm(ty,"string"==typeof t?t:"")),e};Function.prototype.toString=tb(function(){return Y(this)&&tl(this).source||e9(this)},"toString"),e1=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(Y(r)&&e2(r,o,n),n.global)i?e[t]=r:ek(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var t_={},tw={},tk={},tE={},tS={},tO={},tF=Math.ceil,tj=Math.floor;tO=Math.trunc||function(e){var t=+e;return(t>0?tj:tF)(t)},tS=function(e){var t=+e;return t!=t||0===t?0:tO(t)};var t$=Math.max,tL=Math.min;tE=function(e,t){var r=tS(e);return r<0?t$(r+t,0):tL(r,t)};var tM={},tP={},tx=Math.min;tP=function(e){var t=tS(e);return t>0?tx(t,9007199254740991):0},tM=function(e){return tP(e.length)};var tT=function(e){return function(t,r,n){var i,o=x(t),a=tM(o);if(0===a)return!e&&-1;var s=tE(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tN={includes:tT(!0),indexOf:tT(!1)}.indexOf,tA=N([].push);tk=function(e,t){var r,n=x(e),i=0,o=[];for(r in n)!eF(tn,r)&&eF(n,r)&&tA(o,r);for(;t.length>i;)eF(n,r=t[i++])&&(~tN(o,r)||tA(o,r));return o};var tH=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");h=Object.getOwnPropertyNames||function(e){return tk(e,tH)},p=Object.getOwnPropertySymbols;var tI=N([].concat);tw=X("Reflect","ownKeys")||function(e){var t=h(eG(e));return p?tI(t,p(e)):t},t_=function(e,t,r){for(var n=tw(t),o=0;o<n.length;o++){var a=n[o];eF(e,a)||r&&eF(r,a)||c(e,a,i(t,a))}};var tq={},tC=/#|\.prototype\./,tD=function(e,t){var r=tW[tR(e)];return r===tU||r!==tz&&(Y(t)?O(t):!!t)},tR=tD.normalize=function(e){return String(e).replace(tC,".").toLowerCase()},tW=tD.data={},tz=tD.NATIVE="N",tU=tD.POLYFILL="P";tq=tD,w=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?k:l?k[c]||ek(c,{}):k[c]&&k[c].prototype)for(n in t){if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tq(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;t_(a,o)}(e.sham||o&&o.sham)&&eU(a,"sham",!0),e1(r,n,a,e)}};var tB={},tG={},tQ=Function.prototype,tJ=tQ.apply,tY=tQ.call;tG="object"==typeof Reflect&&Reflect.apply||(j?tY.bind(tJ):function(){return tY.apply(tJ,arguments)});var tV={},tK={},tX=(tK=function(e){if("Function"===q(e))return N(e)})(tK.bind);tV=function(e,t){return ep(e),void 0===t?e:j?tX(e,t):function(){return e.apply(t,arguments)}};var tZ={};tZ=X("document","documentElement");var t0={};t0=N([].slice);var t1={},t2=TypeError;t1=function(e,t){if(e<t)throw new t2("Not enough arguments");return e};var t4={};t4=/(?:ipad|iphone|ipod).*applewebkit/i.test(en);var t8={},t5={},t9=function(e){return en.slice(0,e.length)===e};t8="NODE"==(t5=t9("Bun/")?"BUN":t9("Cloudflare-Workers")?"CLOUDFLARE":t9("Deno/")?"DENO":t9("Node.js/")?"NODE":k.Bun&&"string"==typeof Bun.version?"BUN":k.Deno&&"object"==typeof Deno.version?"DENO":"process"===q(k.process)?"NODE":k.window&&k.document?"BROWSER":"REST");var t3=k.setImmediate,t7=k.clearImmediate,t6=k.process,re=k.Dispatch,rt=k.Function,rr=k.MessageChannel,rn=k.String,ri=0,ro={},ra="onreadystatechange";O(function(){f=k.location});var rs=function(e){if(eF(ro,e)){var t=ro[e];delete ro[e],t()}},rc=function(e){return function(){rs(e)}},ru=function(e){rs(e.data)},rl=function(e){k.postMessage(rn(e),f.protocol+"//"+f.host)};t3&&t7||(t3=function(e){t1(arguments.length,1);var t=Y(e)?e:rt(e),r=t0(arguments,1);return ro[++ri]=function(){tG(t,void 0,r)},v(ri),ri},t7=function(e){delete ro[e]},t8?v=function(e){t6.nextTick(rc(e))}:re&&re.now?v=function(e){re.now(rc(e))}:rr&&!t4?(g=(m=new rr).port2,m.port1.onmessage=ru,v=tV(g.postMessage,g)):k.addEventListener&&Y(k.postMessage)&&!k.importScripts&&f&&"file:"!==f.protocol&&!O(rl)?(v=rl,k.addEventListener("message",ru,!1)):v=ra in eD("script")?function(e){tZ.appendChild(eD("script"))[ra]=function(){tZ.removeChild(this),rs(e)}}:function(e){setTimeout(rc(e),0)});var rd=(tB={set:t3,clear:t7}).clear;w({global:!0,bind:!0,enumerable:!0,forced:k.clearImmediate!==rd},{clearImmediate:rd});var rh=tB.set,rp={},rf=k.Function,rv=/MSIE .\./.test(en)||"BUN"===t5&&((t=k.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rp=function(e,t){var r=t?2:1;return rv?function(n,i){var o=t1(arguments.length,1)>r,a=Y(n)?n:rf(n),s=o?t0(arguments,r):[],c=o?function(){tG(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rm=k.setImmediate?rp(rh,!1):rh;w({global:!0,bind:!0,enumerable:!0,forced:k.setImmediate!==rm},{setImmediate:rm});var rg=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof m?r:m).prototype);return i(c,"_invoke",{value:(a=new j(o||[]),s=h,function(r,i){if(s===p)throw Error("Generator is already running");if(s===f){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(c){if(c===v)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===h)throw s=f,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=p;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?f:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=f,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var h="suspendedStart",p="executing",f="completed",v={};function m(){}function g(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_($([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=m.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function $(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return g.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:g,configurable:!0}),g.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=$,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),F(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;F(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:$(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=rg}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rg:Function("r","regeneratorRuntime = r")(rg)}const ry="https://forkify-api.herokuapp.com/api/v2/recipes/",rb="7a9a8152-b9b8-44ab-81f9-11834896b784",r_=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rw={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rk=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rE=async function(e){try{let t=await r_(`${ry}${e}?key=${rb}`);rw.recipe=rk(t),rw.bookmarks.some(t=>t.id===e)?rw.recipe.bookmarked=!0:rw.recipe.bookmarked=!1,console.log(rw.recipe)}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},rS=async function(e){try{rw.search.query=e;let t=await r_(`${ry}?search=${e}&key=${rb}`);console.log(t),rw.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rw.search.page=1}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},rO=function(e=rw.search.page){rw.search.page=e;let t=(e-1)*rw.search.resultsPerPage,r=e*rw.search.resultsPerPage;return rw.search.results.slice(t,r)},rF=function(e){rw.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rw.recipe.servings}),rw.recipe.servings=e},rj=function(){localStorage.setItem("bookmarks",JSON.stringify(rw.bookmarks))},r$=function(e){rw.bookmarks.push(e),e.id===rw.recipe.id&&(rw.recipe.bookmarked=!0),rj()},rL=function(e){let t=rw.bookmarks.findIndex(t=>t.id===e);rw.bookmarks.splice(t,1),e===rw.recipe.id&&(rw.recipe.bookmarked=!1),rj()};!function(){let e=localStorage.getItem("bookmarks");e&&(rw.bookmarks=JSON.parse(e))}();const rM=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient fromat! Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await r_(`${ry}?key=${rb}`,r);rw.recipe=rk(n),r$(rw.recipe)}catch(e){throw e}};var rP={};rP=new URL("icons.c14567a0.svg",import.meta.url).toString();class rx{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${_(rP)}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${_(rP)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${_(rP)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},y=Fraction;class rT extends rx{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return this._data?`
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${_(rP)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${_(rP)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
              <svg>
                <use href="${_(rP)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
              <svg>
                <use href="${_(rP)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
          <svg>
            <use href="${_(rP)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${_(rP)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient.bind(this)).join("")}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a class="btn--small recipe__btn" href="${this._data.sourceUrl}" target="_blank">
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${_(rP)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `:""}_generateMarkupIngredient(e){return`
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${_(rP)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${this._formatQuantity(e.quantity)}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${e.unit}</span>
          ${e.description}
        </div>
      </li>
    `}_formatQuantity(e){try{return e?new y(e).toString():""}catch(t){return console.error("Error formatting quantity",t),e}}}var rN=new rT;class rA{_parentEl=document.querySelector(".search");_searchField=this._parentEl?.querySelector(".search__field");getQuery(){let e=this._searchField?.value||"";return this._clearInput(),e}_clearInput(){this._searchField&&(this._searchField.value="")}addHandlerSearch(e){this._parentEl?.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rH=new rA,rI=new class extends rx{_parentElement="";setParentElement(e){e&&(this._parentElement=e)}_generateMarkup(){let e=window.location.hash.slice(1);return this._data?`
      <li class="preview">
        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key?"":"hidden"}">
              <svg>
                <use href="${_(rP)}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `:""}};class rq extends rx{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data&&0!==this._data.length?this._data.map(e=>rI.render(e,!1)).join(""):this.renderError()}}var rC=new rq,rD=new class extends rx{_parentElement;constructor(){super(),this._parentElement=document.querySelector(".pagination")}addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage),r=(e,t)=>`
            <button data-goto="${e}" class="btn--inline pagination__btn--${t}">
                ${"prev"===t?`
                    <svg class="search__icon">
                        <use href="${_(rP)}#icon-arrow-left"></use>
                    </svg>`:""}
                <span>Page ${e}</span>
                ${"next"===t?`
                    <svg class="search__icon">
                        <use href="${_(rP)}#icon-arrow-right"></use>
                    </svg>`:""}
            </button>
        `;return 1===e&&t>1?r(e+1,"next"):e===t&&t>1?r(e-1,"prev"):e<t?`
                ${r(e-1,"prev")}
                ${r(e+1,"next")}
            `:""}},rR=new class extends rx{_parentElement;_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it ;)";_message="";constructor(){super(),this._parentElement=document.querySelector(".bookmarks__list")}addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data&&0!==this._data.length?this._data.map(e=>rI.render(e,!1)).join(""):this.renderError()}};class rW extends rx{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay&&this._window&&(this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden"))}_addHandlerShowWindow(){this._btnOpen&&this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose&&this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay&&this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var rz=new rW;const rU=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rN.renderSpinner(),rC.update(rO()),rR.update(rw.bookmarks),await rE(e),rN.render(rw.recipe)}catch(e){rN.renderError(),console.error(e)}},rB=async function(){try{rC.renderSpinner();let e=rH.getQuery();if(!e)return;await rS(e),rC.render(rO()),rD.render(rw.search)}catch(e){console.log(e)}},rG=async function(e){try{rz.renderSpinner(),await rM(e),console.log(rw.recipe),rN.render(rw.recipe),rz.renderMessage(),rR.render(rw.bookmarks),window.history.pushState(null,"",`#${rw.recipe.id}`),setTimeout(function(){rz.toggleWindow()},2500)}catch(e){console.error("\uD83D\uDCA5",e),rz.renderError(e.message)}};rR.addHandlerRender(function(){rR.render(rw.bookmarks)}),rN.addHandlerRender(rU),rN.addHandlerUpdateServings(function(e){rF(e),rN.update(rw.recipe)}),rN.addHandlerAddBookmark(function(){rw.recipe.bookmarked?rL(rw.recipe.id):r$(rw.recipe),rN.update(rw.recipe),rR.render(rw.bookmarks)}),rH.addHandlerSearch(rB),rD.addHandlerClick(function(e){rC.render(rO(e)),rD.render(rw.search)}),rz.addHandlerUpload(rG);
//# sourceMappingURL=index.1f9b5a92.js.map