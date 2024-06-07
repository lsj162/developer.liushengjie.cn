import{r as P,j as m}from"./index-0YOxdGCb.js";import{T as Yt,r as Y,k as zt,j as Ot,s as Bt,c as bt,u as qt,v as Ht,z as Ut,l as Gt,b as gt,t as Kt,e as Wt,i as Jt}from"./defaultLocale-wL9RazD-.js";import{i as E,a as Qt,b as Zt}from"./value-QEG42McN.js";import{c as ct,i as lt}from"./rgb-Ly1lppTZ.js";import{T as jt,D as tn}from"./index-hGGsaSPQ.js";import"./extends-z9a7DBh-.js";import"./assertThisInitialized-74GPva8e.js";function ft(t,n,e){var r=new Yt;return n=n==null?0:+n,r.restart(i=>{r.stop(),t(i+n)},n,e),r}function nn(t){return Math.max(0,-Y(Math.abs(t)))}function en(t,n){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Y(n)/3)))*3-Y(Math.abs(t)))}function rn(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,Y(n)-Y(t))+1}function on(t,n){return t=+t,n=+n,function(e){return Math.round(t*(1-e)+n*e)}}var ht=180/Math.PI,Z={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function wt(t,n,e,r,i,s){var o,a,c;return(o=Math.sqrt(t*t+n*n))&&(t/=o,n/=o),(c=t*e+n*r)&&(e-=t*c,r-=n*c),(a=Math.sqrt(e*e+r*r))&&(e/=a,r/=a,c/=a),t*r<n*e&&(t=-t,n=-n,c=-c,o=-o),{translateX:i,translateY:s,rotate:Math.atan2(n,t)*ht,skewX:Math.atan(c)*ht,scaleX:o,scaleY:a}}var b;function sn(t){const n=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return n.isIdentity?Z:wt(n.a,n.b,n.c,n.d,n.e,n.f)}function an(t){return t==null||(b||(b=document.createElementNS("http://www.w3.org/2000/svg","g")),b.setAttribute("transform",t),!(t=b.transform.baseVal.consolidate()))?Z:(t=t.matrix,wt(t.a,t.b,t.c,t.d,t.e,t.f))}function xt(t,n,e,r){function i(u){return u.length?u.pop()+" ":""}function s(u,l,p,f,h,_){if(u!==p||l!==f){var y=h.push("translate(",null,n,null,e);_.push({i:y-4,x:E(u,p)},{i:y-2,x:E(l,f)})}else(p||f)&&h.push("translate("+p+n+f+e)}function o(u,l,p,f){u!==l?(u-l>180?l+=360:l-u>180&&(u+=360),f.push({i:p.push(i(p)+"rotate(",null,r)-2,x:E(u,l)})):l&&p.push(i(p)+"rotate("+l+r)}function a(u,l,p,f){u!==l?f.push({i:p.push(i(p)+"skewX(",null,r)-2,x:E(u,l)}):l&&p.push(i(p)+"skewX("+l+r)}function c(u,l,p,f,h,_){if(u!==p||l!==f){var y=h.push(i(h)+"scale(",null,",",null,")");_.push({i:y-4,x:E(u,p)},{i:y-2,x:E(l,f)})}else(p!==1||f!==1)&&h.push(i(h)+"scale("+p+","+f+")")}return function(u,l){var p=[],f=[];return u=t(u),l=t(l),s(u.translateX,u.translateY,l.translateX,l.translateY,p,f),o(u.rotate,l.rotate,p,f),a(u.skewX,l.skewX,p,f),c(u.scaleX,u.scaleY,l.scaleX,l.scaleY,p,f),u=l=null,function(h){for(var _=-1,y=f.length,d;++_<y;)p[(d=f[_]).i]=d.x(h);return p.join("")}}}var un=xt(sn,"px, ","px)","deg)"),cn=xt(an,", ",")",")");function ln(t){return t}var J=1,Q=2,j=3,$=4,pt=1e-6;function fn(t){return"translate("+t+",0)"}function hn(t){return"translate(0,"+t+")"}function pn(t){return n=>+t(n)}function _n(t,n){return n=Math.max(0,t.bandwidth()-n*2)/2,t.round()&&(n=Math.round(n)),e=>+t(e)+n}function yn(){return!this.__axis}function At(t,n){var e=[],r=null,i=null,s=6,o=6,a=3,c=typeof window<"u"&&window.devicePixelRatio>1?0:.5,u=t===J||t===$?-1:1,l=t===$||t===Q?"x":"y",p=t===J||t===j?fn:hn;function f(h){var _=r??(n.ticks?n.ticks.apply(n,e):n.domain()),y=i??(n.tickFormat?n.tickFormat.apply(n,e):ln),d=Math.max(s,0)+a,V=n.range(),w=+V[0]+c,A=+V[V.length-1]+c,T=(n.bandwidth?_n:pn)(n.copy(),c),M=h.selection?h.selection():h,R=M.selectAll(".domain").data([null]),k=M.selectAll(".tick").data(_,n).order(),W=k.exit(),O=k.enter().append("g").attr("class","tick"),D=k.select("line"),I=k.select("text");R=R.merge(R.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),k=k.merge(O),D=D.merge(O.append("line").attr("stroke","currentColor").attr(l+"2",u*s)),I=I.merge(O.append("text").attr("fill","currentColor").attr(l,u*d).attr("dy",t===J?"0em":t===j?"0.71em":"0.32em")),h!==M&&(R=R.transition(h),k=k.transition(h),D=D.transition(h),I=I.transition(h),W=W.transition(h).attr("opacity",pt).attr("transform",function(C){return isFinite(C=T(C))?p(C+c):this.getAttribute("transform")}),O.attr("opacity",pt).attr("transform",function(C){var B=this.parentNode.__axis;return p((B&&isFinite(B=B(C))?B:T(C))+c)})),W.remove(),R.attr("d",t===$||t===Q?o?"M"+u*o+","+w+"H"+c+"V"+A+"H"+u*o:"M"+c+","+w+"V"+A:o?"M"+w+","+u*o+"V"+c+"H"+A+"V"+u*o:"M"+w+","+c+"H"+A),k.attr("opacity",1).attr("transform",function(C){return p(T(C)+c)}),D.attr(l+"2",u*s),I.attr(l,u*d).text(y),M.filter(yn).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===Q?"start":t===$?"end":"middle"),M.each(function(){this.__axis=T})}return f.scale=function(h){return arguments.length?(n=h,f):n},f.ticks=function(){return e=Array.from(arguments),f},f.tickArguments=function(h){return arguments.length?(e=h==null?[]:Array.from(h),f):e.slice()},f.tickValues=function(h){return arguments.length?(r=h==null?null:Array.from(h),f):r&&r.slice()},f.tickFormat=function(h){return arguments.length?(i=h,f):i},f.tickSize=function(h){return arguments.length?(s=o=+h,f):s},f.tickSizeInner=function(h){return arguments.length?(s=+h,f):s},f.tickSizeOuter=function(h){return arguments.length?(o=+h,f):o},f.tickPadding=function(h){return arguments.length?(a=+h,f):a},f.offset=function(h){return arguments.length?(c=+h,f):c},f}function vn(t){return At(j,t)}function dn(t){return At($,t)}var tt="http://www.w3.org/1999/xhtml";const _t={svg:"http://www.w3.org/2000/svg",xhtml:tt,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function G(t){var n=t+="",e=n.indexOf(":");return e>=0&&(n=t.slice(0,e))!=="xmlns"&&(t=t.slice(e+1)),_t.hasOwnProperty(n)?{space:_t[n],local:t}:t}function mn(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===tt&&n.documentElement.namespaceURI===tt?n.createElement(t):n.createElementNS(e,t)}}function gn(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function kt(t){var n=G(t);return(n.local?gn:mn)(n)}function wn(){}function ot(t){return t==null?wn:function(){return this.querySelector(t)}}function xn(t){typeof t!="function"&&(t=ot(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var s=n[i],o=s.length,a=r[i]=new Array(o),c,u,l=0;l<o;++l)(c=s[l])&&(u=t.call(c,c.__data__,l,s))&&("__data__"in c&&(u.__data__=c.__data__),a[l]=u);return new v(r,this._parents)}function An(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function kn(){return[]}function Nt(t){return t==null?kn:function(){return this.querySelectorAll(t)}}function Nn(t){return function(){return An(t.apply(this,arguments))}}function Sn(t){typeof t=="function"?t=Nn(t):t=Nt(t);for(var n=this._groups,e=n.length,r=[],i=[],s=0;s<e;++s)for(var o=n[s],a=o.length,c,u=0;u<a;++u)(c=o[u])&&(r.push(t.call(c,c.__data__,u,o)),i.push(c));return new v(r,i)}function St(t){return function(){return this.matches(t)}}function Mt(t){return function(n){return n.matches(t)}}var Mn=Array.prototype.find;function Cn(t){return function(){return Mn.call(this.children,t)}}function En(){return this.firstElementChild}function Tn(t){return this.select(t==null?En:Cn(typeof t=="function"?t:Mt(t)))}var Rn=Array.prototype.filter;function Fn(){return Array.from(this.children)}function Xn(t){return function(){return Rn.call(this.children,t)}}function Vn(t){return this.selectAll(t==null?Fn:Xn(typeof t=="function"?t:Mt(t)))}function Dn(t){typeof t!="function"&&(t=St(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var s=n[i],o=s.length,a=r[i]=[],c,u=0;u<o;++u)(c=s[u])&&t.call(c,c.__data__,u,s)&&a.push(c);return new v(r,this._parents)}function Ct(t){return new Array(t.length)}function In(){return new v(this._enter||this._groups.map(Ct),this._parents)}function U(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}U.prototype={constructor:U,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function Pn(t){return function(){return t}}function $n(t,n,e,r,i,s){for(var o=0,a,c=n.length,u=s.length;o<u;++o)(a=n[o])?(a.__data__=s[o],r[o]=a):e[o]=new U(t,s[o]);for(;o<c;++o)(a=n[o])&&(i[o]=a)}function Ln(t,n,e,r,i,s,o){var a,c,u=new Map,l=n.length,p=s.length,f=new Array(l),h;for(a=0;a<l;++a)(c=n[a])&&(f[a]=h=o.call(c,c.__data__,a,n)+"",u.has(h)?i[a]=c:u.set(h,c));for(a=0;a<p;++a)h=o.call(t,s[a],a,s)+"",(c=u.get(h))?(r[a]=c,c.__data__=s[a],u.delete(h)):e[a]=new U(t,s[a]);for(a=0;a<l;++a)(c=n[a])&&u.get(f[a])===c&&(i[a]=c)}function Yn(t){return t.__data__}function zn(t,n){if(!arguments.length)return Array.from(this,Yn);var e=n?Ln:$n,r=this._parents,i=this._groups;typeof t!="function"&&(t=Pn(t));for(var s=i.length,o=new Array(s),a=new Array(s),c=new Array(s),u=0;u<s;++u){var l=r[u],p=i[u],f=p.length,h=On(t.call(l,l&&l.__data__,u,r)),_=h.length,y=a[u]=new Array(_),d=o[u]=new Array(_),V=c[u]=new Array(f);e(l,p,y,d,V,h,n);for(var w=0,A=0,T,M;w<_;++w)if(T=y[w]){for(w>=A&&(A=w+1);!(M=d[A])&&++A<_;);T._next=M||null}}return o=new v(o,r),o._enter=a,o._exit=c,o}function On(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function Bn(){return new v(this._exit||this._groups.map(Ct),this._parents)}function bn(t,n,e){var r=this.enter(),i=this,s=this.exit();return typeof t=="function"?(r=t(r),r&&(r=r.selection())):r=r.append(t+""),n!=null&&(i=n(i),i&&(i=i.selection())),e==null?s.remove():e(s),r&&i?r.merge(i).order():i}function qn(t){for(var n=t.selection?t.selection():t,e=this._groups,r=n._groups,i=e.length,s=r.length,o=Math.min(i,s),a=new Array(i),c=0;c<o;++c)for(var u=e[c],l=r[c],p=u.length,f=a[c]=new Array(p),h,_=0;_<p;++_)(h=u[_]||l[_])&&(f[_]=h);for(;c<i;++c)a[c]=e[c];return new v(a,this._parents)}function Hn(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r=t[n],i=r.length-1,s=r[i],o;--i>=0;)(o=r[i])&&(s&&o.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(o,s),s=o);return this}function Un(t){t||(t=Gn);function n(p,f){return p&&f?t(p.__data__,f.__data__):!p-!f}for(var e=this._groups,r=e.length,i=new Array(r),s=0;s<r;++s){for(var o=e[s],a=o.length,c=i[s]=new Array(a),u,l=0;l<a;++l)(u=o[l])&&(c[l]=u);c.sort(n)}return new v(i,this._parents).order()}function Gn(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function Kn(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function Wn(){return Array.from(this)}function Jn(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,s=r.length;i<s;++i){var o=r[i];if(o)return o}return null}function Qn(){let t=0;for(const n of this)++t;return t}function Zn(){return!this.node()}function jn(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i=n[e],s=0,o=i.length,a;s<o;++s)(a=i[s])&&t.call(a,a.__data__,s,i);return this}function te(t){return function(){this.removeAttribute(t)}}function ne(t){return function(){this.removeAttributeNS(t.space,t.local)}}function ee(t,n){return function(){this.setAttribute(t,n)}}function re(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function ie(t,n){return function(){var e=n.apply(this,arguments);e==null?this.removeAttribute(t):this.setAttribute(t,e)}}function oe(t,n){return function(){var e=n.apply(this,arguments);e==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function se(t,n){var e=G(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((n==null?e.local?ne:te:typeof n=="function"?e.local?oe:ie:e.local?re:ee)(e,n))}function Et(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function ae(t){return function(){this.style.removeProperty(t)}}function ue(t,n,e){return function(){this.style.setProperty(t,n,e)}}function ce(t,n,e){return function(){var r=n.apply(this,arguments);r==null?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function le(t,n,e){return arguments.length>1?this.each((n==null?ae:typeof n=="function"?ce:ue)(t,n,e??"")):X(this.node(),t)}function X(t,n){return t.style.getPropertyValue(n)||Et(t).getComputedStyle(t,null).getPropertyValue(n)}function fe(t){return function(){delete this[t]}}function he(t,n){return function(){this[t]=n}}function pe(t,n){return function(){var e=n.apply(this,arguments);e==null?delete this[t]:this[t]=e}}function _e(t,n){return arguments.length>1?this.each((n==null?fe:typeof n=="function"?pe:he)(t,n)):this.node()[t]}function Tt(t){return t.trim().split(/^|\s+/)}function st(t){return t.classList||new Rt(t)}function Rt(t){this._node=t,this._names=Tt(t.getAttribute("class")||"")}Rt.prototype={add:function(t){var n=this._names.indexOf(t);n<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function Ft(t,n){for(var e=st(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function Xt(t,n){for(var e=st(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function ye(t){return function(){Ft(this,t)}}function ve(t){return function(){Xt(this,t)}}function de(t,n){return function(){(n.apply(this,arguments)?Ft:Xt)(this,t)}}function me(t,n){var e=Tt(t+"");if(arguments.length<2){for(var r=st(this.node()),i=-1,s=e.length;++i<s;)if(!r.contains(e[i]))return!1;return!0}return this.each((typeof n=="function"?de:n?ye:ve)(e,n))}function ge(){this.textContent=""}function we(t){return function(){this.textContent=t}}function xe(t){return function(){var n=t.apply(this,arguments);this.textContent=n??""}}function Ae(t){return arguments.length?this.each(t==null?ge:(typeof t=="function"?xe:we)(t)):this.node().textContent}function ke(){this.innerHTML=""}function Ne(t){return function(){this.innerHTML=t}}function Se(t){return function(){var n=t.apply(this,arguments);this.innerHTML=n??""}}function Me(t){return arguments.length?this.each(t==null?ke:(typeof t=="function"?Se:Ne)(t)):this.node().innerHTML}function Ce(){this.nextSibling&&this.parentNode.appendChild(this)}function Ee(){return this.each(Ce)}function Te(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Re(){return this.each(Te)}function Fe(t){var n=typeof t=="function"?t:kt(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}function Xe(){return null}function Ve(t,n){var e=typeof t=="function"?t:kt(t),r=n==null?Xe:typeof n=="function"?n:ot(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})}function De(){var t=this.parentNode;t&&t.removeChild(this)}function Ie(){return this.each(De)}function Pe(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function $e(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function Le(t){return this.select(t?$e:Pe)}function Ye(t){return arguments.length?this.property("__data__",t):this.node().__data__}function ze(t){return function(n){t.call(this,n,this.__data__)}}function Oe(t){return t.trim().split(/^|\s+/).map(function(n){var e="",r=n.indexOf(".");return r>=0&&(e=n.slice(r+1),n=n.slice(0,r)),{type:n,name:e}})}function Be(t){return function(){var n=this.__on;if(n){for(var e=0,r=-1,i=n.length,s;e<i;++e)s=n[e],(!t.type||s.type===t.type)&&s.name===t.name?this.removeEventListener(s.type,s.listener,s.options):n[++r]=s;++r?n.length=r:delete this.__on}}}function be(t,n,e){return function(){var r=this.__on,i,s=ze(n);if(r){for(var o=0,a=r.length;o<a;++o)if((i=r[o]).type===t.type&&i.name===t.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=s,i.options=e),i.value=n;return}}this.addEventListener(t.type,s,e),i={type:t.type,name:t.name,value:n,listener:s,options:e},r?r.push(i):this.__on=[i]}}function qe(t,n,e){var r=Oe(t+""),i,s=r.length,o;if(arguments.length<2){var a=this.node().__on;if(a){for(var c=0,u=a.length,l;c<u;++c)for(i=0,l=a[c];i<s;++i)if((o=r[i]).type===l.type&&o.name===l.name)return l.value}return}for(a=n?be:Be,i=0;i<s;++i)this.each(a(r[i],n,e));return this}function Vt(t,n,e){var r=Et(t),i=r.CustomEvent;typeof i=="function"?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function He(t,n){return function(){return Vt(this,t,n)}}function Ue(t,n){return function(){return Vt(this,t,n.apply(this,arguments))}}function Ge(t,n){return this.each((typeof n=="function"?Ue:He)(t,n))}function*Ke(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,s=r.length,o;i<s;++i)(o=r[i])&&(yield o)}var Dt=[null];function v(t,n){this._groups=t,this._parents=n}function z(){return new v([[document.documentElement]],Dt)}function We(){return this}v.prototype=z.prototype={constructor:v,select:xn,selectAll:Sn,selectChild:Tn,selectChildren:Vn,filter:Dn,data:zn,enter:In,exit:Bn,join:bn,merge:qn,selection:We,order:Hn,sort:Un,call:Kn,nodes:Wn,node:Jn,size:Qn,empty:Zn,each:jn,attr:se,style:le,property:_e,classed:me,text:Ae,html:Me,raise:Ee,lower:Re,append:Fe,insert:Ve,remove:Ie,clone:Le,datum:Ye,on:qe,dispatch:Ge,[Symbol.iterator]:Ke};function yt(t){return typeof t=="string"?new v([[document.querySelector(t)]],[document.documentElement]):new v([[t]],Dt)}function Je(t){let n;for(;n=t.sourceEvent;)t=n;return t}function Qe(t,n){if(t=Je(t),n===void 0&&(n=t.currentTarget),n){var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=t.clientX,r.y=t.clientY,r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}if(n.getBoundingClientRect){var i=n.getBoundingClientRect();return[t.clientX-i.left-n.clientLeft,t.clientY-i.top-n.clientTop]}}return[t.pageX,t.pageY]}var Ze=zt("start","end","cancel","interrupt"),je=[],It=0,vt=1,nt=2,q=3,dt=4,et=5,H=6;function K(t,n,e,r,i,s){var o=t.__transition;if(!o)t.__transition={};else if(e in o)return;tr(t,e,{name:n,index:r,group:i,on:Ze,tween:je,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:It})}function at(t,n){var e=g(t,n);if(e.state>It)throw new Error("too late; already scheduled");return e}function x(t,n){var e=g(t,n);if(e.state>q)throw new Error("too late; already running");return e}function g(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("transition not found");return e}function tr(t,n,e){var r=t.__transition,i;r[n]=e,e.timer=Ot(s,0,e.time);function s(u){e.state=vt,e.timer.restart(o,e.delay,e.time),e.delay<=u&&o(u-e.delay)}function o(u){var l,p,f,h;if(e.state!==vt)return c();for(l in r)if(h=r[l],h.name===e.name){if(h.state===q)return ft(o);h.state===dt?(h.state=H,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete r[l]):+l<n&&(h.state=H,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete r[l])}if(ft(function(){e.state===q&&(e.state=dt,e.timer.restart(a,e.delay,e.time),a(u))}),e.state=nt,e.on.call("start",t,t.__data__,e.index,e.group),e.state===nt){for(e.state=q,i=new Array(f=e.tween.length),l=0,p=-1;l<f;++l)(h=e.tween[l].value.call(t,t.__data__,e.index,e.group))&&(i[++p]=h);i.length=p+1}}function a(u){for(var l=u<e.duration?e.ease.call(null,u/e.duration):(e.timer.restart(c),e.state=et,1),p=-1,f=i.length;++p<f;)i[p].call(t,l);e.state===et&&(e.on.call("end",t,t.__data__,e.index,e.group),c())}function c(){e.state=H,e.timer.stop(),delete r[n];for(var u in r)return;delete t.__transition}}function nr(t,n){var e=t.__transition,r,i,s=!0,o;if(e){n=n==null?null:n+"";for(o in e){if((r=e[o]).name!==n){s=!1;continue}i=r.state>nt&&r.state<et,r.state=H,r.timer.stop(),r.on.call(i?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete e[o]}s&&delete t.__transition}}function er(t){return this.each(function(){nr(this,t)})}function rr(t,n){var e,r;return function(){var i=x(this,t),s=i.tween;if(s!==e){r=e=s;for(var o=0,a=r.length;o<a;++o)if(r[o].name===n){r=r.slice(),r.splice(o,1);break}}i.tween=r}}function ir(t,n,e){var r,i;if(typeof e!="function")throw new Error;return function(){var s=x(this,t),o=s.tween;if(o!==r){i=(r=o).slice();for(var a={name:n,value:e},c=0,u=i.length;c<u;++c)if(i[c].name===n){i[c]=a;break}c===u&&i.push(a)}s.tween=i}}function or(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r=g(this.node(),e).tween,i=0,s=r.length,o;i<s;++i)if((o=r[i]).name===t)return o.value;return null}return this.each((n==null?rr:ir)(e,t,n))}function ut(t,n,e){var r=t._id;return t.each(function(){var i=x(this,r);(i.value||(i.value={}))[n]=e.apply(this,arguments)}),function(i){return g(i,r).value[n]}}function Pt(t,n){var e;return(typeof n=="number"?E:n instanceof ct?lt:(e=ct(n))?(n=e,lt):Qt)(t,n)}function sr(t){return function(){this.removeAttribute(t)}}function ar(t){return function(){this.removeAttributeNS(t.space,t.local)}}function ur(t,n,e){var r,i=e+"",s;return function(){var o=this.getAttribute(t);return o===i?null:o===r?s:s=n(r=o,e)}}function cr(t,n,e){var r,i=e+"",s;return function(){var o=this.getAttributeNS(t.space,t.local);return o===i?null:o===r?s:s=n(r=o,e)}}function lr(t,n,e){var r,i,s;return function(){var o,a=e(this),c;return a==null?void this.removeAttribute(t):(o=this.getAttribute(t),c=a+"",o===c?null:o===r&&c===i?s:(i=c,s=n(r=o,a)))}}function fr(t,n,e){var r,i,s;return function(){var o,a=e(this),c;return a==null?void this.removeAttributeNS(t.space,t.local):(o=this.getAttributeNS(t.space,t.local),c=a+"",o===c?null:o===r&&c===i?s:(i=c,s=n(r=o,a)))}}function hr(t,n){var e=G(t),r=e==="transform"?cn:Pt;return this.attrTween(t,typeof n=="function"?(e.local?fr:lr)(e,r,ut(this,"attr."+t,n)):n==null?(e.local?ar:sr)(e):(e.local?cr:ur)(e,r,n))}function pr(t,n){return function(e){this.setAttribute(t,n.call(this,e))}}function _r(t,n){return function(e){this.setAttributeNS(t.space,t.local,n.call(this,e))}}function yr(t,n){var e,r;function i(){var s=n.apply(this,arguments);return s!==r&&(e=(r=s)&&_r(t,s)),e}return i._value=n,i}function vr(t,n){var e,r;function i(){var s=n.apply(this,arguments);return s!==r&&(e=(r=s)&&pr(t,s)),e}return i._value=n,i}function dr(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(n==null)return this.tween(e,null);if(typeof n!="function")throw new Error;var r=G(t);return this.tween(e,(r.local?yr:vr)(r,n))}function mr(t,n){return function(){at(this,t).delay=+n.apply(this,arguments)}}function gr(t,n){return n=+n,function(){at(this,t).delay=n}}function wr(t){var n=this._id;return arguments.length?this.each((typeof t=="function"?mr:gr)(n,t)):g(this.node(),n).delay}function xr(t,n){return function(){x(this,t).duration=+n.apply(this,arguments)}}function Ar(t,n){return n=+n,function(){x(this,t).duration=n}}function kr(t){var n=this._id;return arguments.length?this.each((typeof t=="function"?xr:Ar)(n,t)):g(this.node(),n).duration}function Nr(t,n){if(typeof n!="function")throw new Error;return function(){x(this,t).ease=n}}function Sr(t){var n=this._id;return arguments.length?this.each(Nr(n,t)):g(this.node(),n).ease}function Mr(t,n){return function(){var e=n.apply(this,arguments);if(typeof e!="function")throw new Error;x(this,t).ease=e}}function Cr(t){if(typeof t!="function")throw new Error;return this.each(Mr(this._id,t))}function Er(t){typeof t!="function"&&(t=St(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var s=n[i],o=s.length,a=r[i]=[],c,u=0;u<o;++u)(c=s[u])&&t.call(c,c.__data__,u,s)&&a.push(c);return new S(r,this._parents,this._name,this._id)}function Tr(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,s=Math.min(r,i),o=new Array(r),a=0;a<s;++a)for(var c=n[a],u=e[a],l=c.length,p=o[a]=new Array(l),f,h=0;h<l;++h)(f=c[h]||u[h])&&(p[h]=f);for(;a<r;++a)o[a]=n[a];return new S(o,this._parents,this._name,this._id)}function Rr(t){return(t+"").trim().split(/^|\s+/).every(function(n){var e=n.indexOf(".");return e>=0&&(n=n.slice(0,e)),!n||n==="start"})}function Fr(t,n,e){var r,i,s=Rr(n)?at:x;return function(){var o=s(this,t),a=o.on;a!==r&&(i=(r=a).copy()).on(n,e),o.on=i}}function Xr(t,n){var e=this._id;return arguments.length<2?g(this.node(),e).on.on(t):this.each(Fr(e,t,n))}function Vr(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}function Dr(){return this.on("end.remove",Vr(this._id))}function Ir(t){var n=this._name,e=this._id;typeof t!="function"&&(t=ot(t));for(var r=this._groups,i=r.length,s=new Array(i),o=0;o<i;++o)for(var a=r[o],c=a.length,u=s[o]=new Array(c),l,p,f=0;f<c;++f)(l=a[f])&&(p=t.call(l,l.__data__,f,a))&&("__data__"in l&&(p.__data__=l.__data__),u[f]=p,K(u[f],n,e,f,u,g(l,e)));return new S(s,this._parents,n,e)}function Pr(t){var n=this._name,e=this._id;typeof t!="function"&&(t=Nt(t));for(var r=this._groups,i=r.length,s=[],o=[],a=0;a<i;++a)for(var c=r[a],u=c.length,l,p=0;p<u;++p)if(l=c[p]){for(var f=t.call(l,l.__data__,p,c),h,_=g(l,e),y=0,d=f.length;y<d;++y)(h=f[y])&&K(h,n,e,y,f,_);s.push(f),o.push(l)}return new S(s,o,n,e)}var $r=z.prototype.constructor;function Lr(){return new $r(this._groups,this._parents)}function Yr(t,n){var e,r,i;return function(){var s=X(this,t),o=(this.style.removeProperty(t),X(this,t));return s===o?null:s===e&&o===r?i:i=n(e=s,r=o)}}function $t(t){return function(){this.style.removeProperty(t)}}function zr(t,n,e){var r,i=e+"",s;return function(){var o=X(this,t);return o===i?null:o===r?s:s=n(r=o,e)}}function Or(t,n,e){var r,i,s;return function(){var o=X(this,t),a=e(this),c=a+"";return a==null&&(c=a=(this.style.removeProperty(t),X(this,t))),o===c?null:o===r&&c===i?s:(i=c,s=n(r=o,a))}}function Br(t,n){var e,r,i,s="style."+n,o="end."+s,a;return function(){var c=x(this,t),u=c.on,l=c.value[s]==null?a||(a=$t(n)):void 0;(u!==e||i!==l)&&(r=(e=u).copy()).on(o,i=l),c.on=r}}function br(t,n,e){var r=(t+="")=="transform"?un:Pt;return n==null?this.styleTween(t,Yr(t,r)).on("end.style."+t,$t(t)):typeof n=="function"?this.styleTween(t,Or(t,r,ut(this,"style."+t,n))).each(Br(this._id,t)):this.styleTween(t,zr(t,r,n),e).on("end.style."+t,null)}function qr(t,n,e){return function(r){this.style.setProperty(t,n.call(this,r),e)}}function Hr(t,n,e){var r,i;function s(){var o=n.apply(this,arguments);return o!==i&&(r=(i=o)&&qr(t,o,e)),r}return s._value=n,s}function Ur(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(n==null)return this.tween(r,null);if(typeof n!="function")throw new Error;return this.tween(r,Hr(t,n,e??""))}function Gr(t){return function(){this.textContent=t}}function Kr(t){return function(){var n=t(this);this.textContent=n??""}}function Wr(t){return this.tween("text",typeof t=="function"?Kr(ut(this,"text",t)):Gr(t==null?"":t+""))}function Jr(t){return function(n){this.textContent=t.call(this,n)}}function Qr(t){var n,e;function r(){var i=t.apply(this,arguments);return i!==e&&(n=(e=i)&&Jr(i)),n}return r._value=t,r}function Zr(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;return this.tween(n,Qr(t))}function jr(){for(var t=this._name,n=this._id,e=Lt(),r=this._groups,i=r.length,s=0;s<i;++s)for(var o=r[s],a=o.length,c,u=0;u<a;++u)if(c=o[u]){var l=g(c,n);K(c,t,e,u,o,{time:l.time+l.delay+l.duration,delay:0,duration:l.duration,ease:l.ease})}return new S(r,this._parents,t,e)}function ti(){var t,n,e=this,r=e._id,i=e.size();return new Promise(function(s,o){var a={value:o},c={value:function(){--i===0&&s()}};e.each(function(){var u=x(this,r),l=u.on;l!==t&&(n=(t=l).copy(),n._.cancel.push(a),n._.interrupt.push(a),n._.end.push(c)),u.on=n}),i===0&&s()})}var ni=0;function S(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function Lt(){return++ni}var N=z.prototype;S.prototype={constructor:S,select:Ir,selectAll:Pr,selectChild:N.selectChild,selectChildren:N.selectChildren,filter:Er,merge:Tr,selection:Lr,transition:jr,call:N.call,nodes:N.nodes,node:N.node,size:N.size,empty:N.empty,each:N.each,on:Xr,attr:hr,attrTween:dr,style:br,styleTween:Ur,text:Wr,textTween:Zr,remove:Dr,tween:or,delay:wr,duration:kr,ease:Sr,easeVarying:Cr,end:ti,[Symbol.iterator]:N[Symbol.iterator]};function ei(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var ri={time:null,delay:0,duration:250,ease:ei};function ii(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))throw new Error(`transition ${n} not found`);return e}function oi(t){var n,e;t instanceof S?(n=t._id,t=t._name):(n=Lt(),(e=ri).time=Bt(),t=t==null?null:t+"");for(var r=this._groups,i=r.length,s=0;s<i;++s)for(var o=r[s],a=o.length,c,u=0;u<a;++u)(c=o[u])&&K(c,t,n,u,o,e||ii(c,n));return new S(r,this._parents,t,n)}z.prototype.interrupt=er;z.prototype.transition=oi;function si(t,n){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(n).domain(t);break}return this}function ai(t){return function(){return t}}function ui(t){return+t}var mt=[0,1];function F(t){return t}function rt(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:ai(isNaN(n)?NaN:.5)}function ci(t,n){var e;return t>n&&(e=t,t=n,n=e),function(r){return Math.max(t,Math.min(n,r))}}function li(t,n,e){var r=t[0],i=t[1],s=n[0],o=n[1];return i<r?(r=rt(i,r),s=e(o,s)):(r=rt(r,i),s=e(s,o)),function(a){return s(r(a))}}function fi(t,n,e){var r=Math.min(t.length,n.length)-1,i=new Array(r),s=new Array(r),o=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++o<r;)i[o]=rt(t[o],t[o+1]),s[o]=e(n[o],n[o+1]);return function(a){var c=bt(t,a,1,r)-1;return s[c](i[c](a))}}function hi(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function pi(){var t=mt,n=mt,e=Zt,r,i,s,o=F,a,c,u;function l(){var f=Math.min(t.length,n.length);return o!==F&&(o=ci(t[0],t[f-1])),a=f>2?fi:li,c=u=null,p}function p(f){return f==null||isNaN(f=+f)?s:(c||(c=a(t.map(r),n,e)))(r(o(f)))}return p.invert=function(f){return o(i((u||(u=a(n,t.map(r),E)))(f)))},p.domain=function(f){return arguments.length?(t=Array.from(f,ui),l()):t.slice()},p.range=function(f){return arguments.length?(n=Array.from(f),l()):n.slice()},p.rangeRound=function(f){return n=Array.from(f),e=on,l()},p.clamp=function(f){return arguments.length?(o=f?!0:F,l()):o!==F},p.interpolate=function(f){return arguments.length?(e=f,l()):e},p.unknown=function(f){return arguments.length?(s=f,p):s},function(f,h){return r=f,i=h,l()}}function _i(){return pi()(F,F)}function yi(t,n,e,r){var i=qt(t,n,e),s;switch(r=Ht(r??",f"),r.type){case"s":{var o=Math.max(Math.abs(t),Math.abs(n));return r.precision==null&&!isNaN(s=en(i,o))&&(r.precision=s),Ut(r,o)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(s=rn(i,Math.max(Math.abs(t),Math.abs(n))))&&(r.precision=s-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(s=nn(i))&&(r.precision=s-(r.type==="%")*2);break}}return Gt(r)}function vi(t){var n=t.domain;return t.ticks=function(e){var r=n();return gt(r[0],r[r.length-1],e??10)},t.tickFormat=function(e,r){var i=n();return yi(i[0],i[i.length-1],e??10,r)},t.nice=function(e){e==null&&(e=10);var r=n(),i=0,s=r.length-1,o=r[i],a=r[s],c,u,l=10;for(a<o&&(u=o,o=a,a=u,u=i,i=s,s=u);l-- >0;){if(u=Kt(o,a,e),u===c)return r[i]=o,r[s]=a,n(r);if(u>0)o=Math.floor(o/u)*u,a=Math.ceil(a/u)*u;else if(u<0)o=Math.ceil(o*u)/u,a=Math.floor(a*u)/u;else break;c=u}return t},t}function it(){var t=_i();return t.copy=function(){return hi(t,it())},si.apply(t,arguments),vi(t)}function L(t,n,e){this.k=t,this.x=n,this.y=e}L.prototype={constructor:L,scale:function(t){return t===1?this:new L(this.k*t,this.x,this.y)},translate:function(t,n){return t===0&n===0?this:new L(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};L.prototype;function di({width:t=640,height:n=400,marginTop:e=20,marginRight:r=20,marginBottom:i=30,marginLeft:s=40}){const[o,a]=P.useState(()=>gt(-2,2,200).map(Math.sin)),c=P.useRef(),u=P.useRef(),l=it([0,o.length-1],[s,t-r]),p=it(Wt(o),[n-i,e]),f=Jt((_,y)=>l(y),p);P.useEffect(()=>void yt(c.current).call(vn(l)),[c,l]),P.useEffect(()=>void yt(u.current).call(dn(p)),[u,p]);function h(_){const[y,d]=Qe(_);a(o.slice(-200).concat(Math.atan2(y,d)))}return m.jsx("div",{onMouseMove:h,children:m.jsxs("svg",{width:t,height:n,children:[m.jsx("g",{ref:c,transform:`translate(0,${n-i})`}),m.jsx("g",{ref:u,transform:`translate(${s},0)`}),m.jsx("path",{fill:"none",stroke:"currentColor","stroke-width":"1.5",d:f(o)}),m.jsx("g",{fill:"white",stroke:"currentColor","stroke-width":"1.5",children:o.map((_,y)=>m.jsx("circle",{cx:l(y),cy:p(_),r:"2.5"},y))})]})})}function Si(){const t=[{key:"1",label:"Demo",children:m.jsx(di,{})}],n=()=>{};return m.jsxs(m.Fragment,{children:[m.jsx(jt,{defaultActiveKey:"1",items:t,onChange:n}),m.jsx(tn,{})]})}export{Si as default};
