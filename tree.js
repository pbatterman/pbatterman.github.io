!function() { function n(n){ return n&&(n.ownerDocument||n.document||n).documentElement } function t(n){ return n&&(n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView) } function e(n,t){ return t>n?-1:n>t?1:n>=t?0:0/0 } function r(n){ return null===n?0/0:+n } function u(n) { return!isNaN(n) } function i(n) { return { left:function(t,e,r,u) { for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);  u>r;  ) { var i=r+u>>>1;  n(t[i],e)<0?r=i+1:u=i } return r } ,right:function(t,e,r,u) { for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);  u>r;  ) { var i=r+u>>>1;  n(t[i],e)>0?u=i:r=i+1 } return r }  }  } function o(n) { return n.length } function a(n) { for(var t=1;  n*t%1;  )t*=10;  return t } function c(n,t) { for(var e in t)Object.defineProperty(n.prototype,e, { value:t[e],enumerable:!1 } ) } function l() { this._=Object.create(null) } function s(n) { return(n+="")===pa||n[0]===va?va+n:n } function f(n) { return(n+="")[0]===va?n.slice(1):n } function h(n) { return s(n)in this._ } function g(n) { return(n=s(n))in this._&&delete this._[n] } function p() { var n=[];  for(var t in this._)n.push(f(t));  return n } function v() { var n=0;  for(var t in this._)++n;  return n } function d() { for(var n in this._)return!1;  return!0 } function m() { this._=Object.create(null) } function y(n) { return n } function M(n,t,e) { return function() { var r=e.apply(t,arguments);  return r===t?n:r }  } function x(n,t) { if(t in n)return t;  t=t.charAt(0).toUpperCase()+t.slice(1);  for(var e=0,r=da.length;  r>e;  ++e) { var u=da[e]+t;  if(u in n)return u }  } function b() {  } function _() {  } function w(n) { function t() { for(var t,r=e,u=-1,i=r.length;  ++u<i;  )(t=r[u].on)&&t.apply(this,arguments); return n } var e=[],r=new l; return t.on=function(t,u) { var i,o=r.get(t); return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,i=e.indexOf(o)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t, { on:u } )),n) } ,t } function S() { ta.event.preventDefault() } function k() { for(var n,t=ta.event; n=t.sourceEvent; )t=n; return t } function E(n) { for(var t=new _,e=0,r=arguments.length; ++e<r; )t[arguments[e]]=w(t); return t.of=function(e,r) { return function(u) { try { var i=u.sourceEvent=ta.event; u.target=n,ta.event=u,t[u.type].apply(e,r) } finally { ta.event=i }  }  } ,t } function A(n) { return ya(n,_a),n } function N(n) { return"function"==typeof n?n:function() { return Ma(n,this) }  } function C(n) { return"function"==typeof n?n:function() { return xa(n,this) }  } function z(n,t) { function e() { this.removeAttribute(n) } function r() { this.removeAttributeNS(n.space,n.local) } function u() { this.setAttribute(n,t) } function i() { this.setAttributeNS(n.space,n.local,t) } function o() { var e=t.apply(this,arguments); null==e?this.removeAttribute(n):this.setAttribute(n,e) } function a() { var e=t.apply(this,arguments); null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e) } return n=ta.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?i:u } function q(n) { return n.trim().replace(/\s+/g," ") } function L(n) { return new RegExp("(?:^|\\s+)"+ta.requote(n)+"(?:\\s+|$)","g") } function T(n) { return(n+"").trim().split(/^|\s+/) } function R(n,t) { function e() { for(var e=-1; ++e<u; )n[e](this,t) } function r() { for(var e=-1,r=t.apply(this,arguments); ++e<u; )n[e](this,r) } n=T(n).map(D); var u=n.length; return"function"==typeof t?r:e } function D(n) { var t=L(n); return function(e,r) { if(u=e.classList)return r?u.add(n):u.remove(n); var u=e.getAttribute("class")||""; r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",q(u+" "+n))):e.setAttribute("class",q(u.replace(t," "))) }  } function P(n,t,e) { function r() { this.style.removeProperty(n) } function u() { this.style.setProperty(n,t,e) } function i() { var r=t.apply(this,arguments); null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e) } return null==t?r:"function"==typeof t?i:u } function U(n,t) { function e() { delete this[n] } function r() { this[n]=t } function u() { var e=t.apply(this,arguments); null==e?delete this[n]:this[n]=e } return null==t?e:"function"==typeof t?u:r } function j(n) { function t() { var t=this.ownerDocument,e=this.namespaceURI; return e?t.createElementNS(e,n):t.createElement(n) } function e() { return this.ownerDocument.createElementNS(n.space,n.local) } return"function"==typeof n?n:(n=ta.ns.qualify(n)).local?e:t } function F() { var n=this.parentNode; n&&n.removeChild(this) } function H(n) { return { __data__:n }  } function O(n) { return function() { return ba(this,n) }  } function I(n) { return arguments.length||(n=e),function(t,e) { return t&&e?n(t.__data__,e.__data__):!t-!e }  } function Y(n,t) { for(var e=0,r=n.length; r>e; e++)for(var u,i=n[e],o=0,a=i.length; a>o; o++)(u=i[o])&&t(u,o,e); return n } function Z(n) { return ya(n,Sa),n } function V(n) { var t,e; return function(r,u,i) { var o,a=n[i].update,c=a.length; for(i!=e&&(e=i,t=0),u>=t&&(t=u+1); !(o=a[t])&&++t<c; ); return o }  } function X(n,t,e) { function r() { var t=this[o]; t&&(this.removeEventListener(n,t,t.$),delete this[o]) } function u() { var u=c(t,ra(arguments)); r.call(this),this.addEventListener(n,this[o]=u,u.$=e),u._=t } function i() { var t,e=new RegExp("^__on([^.]+)"+ta.requote(n)+"$"); for(var r in this)if(t=r.match(e)) { var u=this[r]; this.removeEventListener(t[1],u,u.$),delete this[r] }  } var o="__on"+n,a=n.indexOf("."),c=$; a>0&&(n=n.slice(0,a)); var l=ka.get(n); return l&&(n=l,c=B),a?t?u:r:t?b:i } function $(n,t) { return function(e) { var r=ta.event; ta.event=e,t[0]=this.__data__; try { n.apply(this,t) } finally { ta.event=r }  }  } function B(n,t) { var e=$(n,t); return function(n) { var t=this,r=n.relatedTarget; r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n) }  } function W(e) { var r=".dragsuppress-"+ ++Aa,u="click"+r,i=ta.select(t(e)).on("touchmove"+r,S).on("dragstart"+r,S).on("selectstart"+r,S); if(null==Ea&&(Ea="onselectstart"in e?!1:x(e.style,"userSelect")),Ea) { var o=n(e).style,a=o[Ea]; o[Ea]="none" } return function(n) { if(i.on(r,null),Ea&&(o[Ea]=a),n) { var t=function() { i.on(u,null) } ; i.on(u,function() { S(),t() } ,!0),setTimeout(t,0) }  }  } function J(n,e) { e.changedTouches&&(e=e.changedTouches[0]); var r=n.ownerSVGElement||n; if(r.createSVGPoint) { var u=r.createSVGPoint(); if(0>Na) { var i=t(n); if(i.scrollX||i.scrollY) { r=ta.select("body").append("svg").style( { position:"absolute",top:0,left:0,margin:0,padding:0,border:"none" } ,"important"); var o=r[0][0].getScreenCTM(); Na=!(o.f||o.e),r.remove() }  } return Na?(u.x=e.pageX,u.y=e.pageY):(u.x=e.clientX,u.y=e.clientY),u=u.matrixTransform(n.getScreenCTM().inverse()),[u.x,u.y] } var a=n.getBoundingClientRect(); return[e.clientX-a.left-n.clientLeft,e.clientY-a.top-n.clientTop] } function G() { return ta.event.changedTouches[0].identifier } function K(n) { return n>0?1:0>n?-1:0 } function Q(n,t,e) { return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0]) } function nt(n) { return n>1?0:-1>n?qa:Math.acos(n) } function tt(n) { return n>1?Ra:-1>n?-Ra:Math.asin(n) } function et(n) { return((n=Math.exp(n))-1/n)/2 } function rt(n) { return((n=Math.exp(n))+1/n)/2 } function ut(n) { return((n=Math.exp(2*n))-1)/(n+1) } function it(n) { return(n=Math.sin(n/2))*n } function ot() {  } function at(n,t,e) { return this instanceof at?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof at?new at(n.h,n.s,n.l):bt(""+n,_t,at):new at(n,t,e) } function ct(n,t,e) { function r(n) { return n>360?n-=360:0>n&&(n+=360),60>n?i+(o-i)*n/60:180>n?o:240>n?i+(o-i)*(240-n)/60:i } function u(n) { return Math.round(255*r(n)) } var i,o; return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,i=2*e-o,new mt(u(n+120),u(n),u(n-120)) } function lt(n,t,e) { return this instanceof lt?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof lt?new lt(n.h,n.c,n.l):n instanceof ft?gt(n.l,n.a,n.b):gt((n=wt((n=ta.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new lt(n,t,e) } function st(n,t,e) { return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new ft(e,Math.cos(n*=Da)*t,Math.sin(n)*t) } function ft(n,t,e) { return this instanceof ft?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof ft?new ft(n.l,n.a,n.b):n instanceof lt?st(n.h,n.c,n.l):wt((n=mt(n)).r,n.g,n.b):new ft(n,t,e) } function ht(n,t,e) { var r=(n+16)/116,u=r+t/500,i=r-e/200; return u=pt(u)*Xa,r=pt(r)*$a,i=pt(i)*Ba,new mt(dt(3.2404542*u-1.5371385*r-.4985314*i),dt(-.969266*u+1.8760108*r+.041556*i),dt(.0556434*u-.2040259*r+1.0572252*i)) } function gt(n,t,e) { return n>0?new lt(Math.atan2(e,t)*Pa,Math.sqrt(t*t+e*e),n):new lt(0/0,0/0,n) } function pt(n) { return n>.206893034?n*n*n:(n-4/29)/7.787037 } function vt(n) { return n>.008856?Math.pow(n,1/3):7.787037*n+4/29 } function dt(n) { return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055)) } function mt(n,t,e) { return this instanceof mt?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof mt?new mt(n.r,n.g,n.b):bt(""+n,mt,ct):new mt(n,t,e) } function yt(n) { return new mt(n>>16,n>>8&255,255&n) } function Mt(n) { return yt(n)+"" } function xt(n) { return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16) } function bt(n,t,e) { var r,u,i,o=0,a=0,c=0; if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(u=r[2].split(","),r[1]) { case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100); case"rgb":return t(kt(u[0]),kt(u[1]),kt(u[2])) } return(i=Ga.get(n.toLowerCase()))?t(i.r,i.g,i.b):(null==n||"#"!==n.charAt(0)||isNaN(i=parseInt(n.slice(1),16))||(4===n.length?(o=(3840&i)>>4,o=o>>4|o,a=240&i,a=a>>4|a,c=15&i,c=c<<4|c):7===n.length&&(o=(16711680&i)>>16,a=(65280&i)>>8,c=255&i)),t(o,a,c)) } function _t(n,t,e) { var r,u,i=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-i,c=(o+i)/2; return a?(u=.5>c?a/(o+i):a/(2-o-i),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=0/0,u=c>0&&1>c?0:r),new at(r,u,c) } function wt(n,t,e) { n=St(n),t=St(t),e=St(e); var r=vt((.4124564*n+.3575761*t+.1804375*e)/Xa),u=vt((.2126729*n+.7151522*t+.072175*e)/$a),i=vt((.0193339*n+.119192*t+.9503041*e)/Ba); return ft(116*u-16,500*(r-u),200*(u-i)) } function St(n) { return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4) } function kt(n) { var t=parseFloat(n); return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t } function Et(n) { return"function"==typeof n?n:function() { return n }  } function At(n) { return function(t,e,r) { return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Nt(t,e,n,r) }  } function Nt(n,t,e,r) { function u() { var n,t=c.status; if(!t&&zt(c)||t>=200&&300>t||304===t) { try { n=e.call(i,c) } catch(r) { return void o.error.call(i,r) } o.load.call(i,n) } else o.error.call(i,c) } var i= {  } ,o=ta.dispatch("beforesend","progress","load","error"),a= {  } ,c=new XMLHttpRequest,l=null; return!this.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=u:c.onreadystatechange=function() { c.readyState>3&&u() } ,c.onprogress=function(n) { var t=ta.event; ta.event=n; try { o.progress.call(i,c) } finally { ta.event=t }  } ,i.header=function(n,t) { return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",i) } ,i.mimeType=function(n) { return arguments.length?(t=null==n?null:n+"",i):t } ,i.responseType=function(n) { return arguments.length?(l=n,i):l } ,i.response=function(n) { return e=n,i } ,["get","post"].forEach(function(n) { i[n]=function() { return i.send.apply(i,[n].concat(ra(arguments))) }  } ),i.send=function(e,r,u) { if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),c.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),c.setRequestHeader)for(var s in a)c.setRequestHeader(s,a[s]); return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=l&&(c.responseType=l),null!=u&&i.on("error",u).on("load",function(n) { u(null,n) } ),o.beforesend.call(i,c),c.send(null==r?null:r),i } ,i.abort=function() { return c.abort(),i } ,ta.rebind(i,o,"on"),null==r?i:i.get(Ct(r)) } function Ct(n) { return 1===n.length?function(t,e) { n(null==t?e:null) } :n } function zt(n) { var t=n.responseType; return t&&"text"!==t?n.response:n.responseText } function qt() { var n=Lt(),t=Tt()-n; t>24?(isFinite(t)&&(clearTimeout(tc),tc=setTimeout(qt,t)),nc=0):(nc=1,rc(qt)) } function Lt() { var n=Date.now(); for(ec=Ka; ec; )n>=ec.t&&(ec.f=ec.c(n-ec.t)),ec=ec.n; return n } function Tt() { for(var n,t=Ka,e=1/0; t; )t.f?t=n?n.n=t.n:Ka=t.n:(t.t<e&&(e=t.t),t=(n=t).n); return Qa=n,e } function Rt(n,t) { return t-(n?Math.ceil(Math.log(n)/Math.LN10):1) } function Dt(n,t) { var e=Math.pow(10,3*ga(8-t)); return { scale:t>8?function(n) { return n/e } :function(n) { return n*e } ,symbol:n }  } function Pt(n) { var t=n.decimal,e=n.thousands,r=n.grouping,u=n.currency,i=r&&e?function(n,t) { for(var u=n.length,i=[],o=0,a=r[0],c=0; u>0&&a>0&&(c+a+1>t&&(a=Math.max(1,t-c)),i.push(n.substring(u-=a,u+a)),!((c+=a+1)>t)); )a=r[o=(o+1)%r.length]; return i.reverse().join(e) } :y; return function(n) { var e=ic.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"-",c=e[4]||"",l=e[5],s=+e[6],f=e[7],h=e[8],g=e[9],p=1,v="",d="",m=!1,y=!0; switch(h&&(h=+h.substring(1)),(l||"0"===r&&"="===o)&&(l=r="0",o="="),g) { case"n":f=!0,g="g"; break; case"%":p=100,d="%",g="f"; break; case"p":p=100,d="%",g="r"; break; case"b":case"o":case"x":case"X":"#"===c&&(v="0"+g.toLowerCase()); case"c":y=!1; case"d":m=!0,h=0; break; case"s":p=-1,g="r" } "$"===c&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=oc.get(g)||Ut; var M=l&&f; return function(n) { var e=d; if(m&&n%1)return""; var u=0>n||0===n&&0>1/n?(n=-n,"-"):"-"===a?"":a; if(0>p) { var c=ta.formatPrefix(n,h); n=c.scale(n),e=c.symbol+d } else n*=p; n=g(n,h); var x,b,_=n.lastIndexOf("."); if(0>_) { var w=y?n.lastIndexOf("e"):-1; 0>w?(x=n,b=""):(x=n.substring(0,w),b=n.substring(w)) } else x=n.substring(0,_),b=t+n.substring(_+1); !l&&f&&(x=i(x,1/0)); var S=v.length+x.length+b.length+(M?0:u.length),k=s>S?new Array(S=s-S+1).join(r):""; return M&&(x=i(k+x,k.length?s-b.length:1/0)),u+=v,n=x+b,("<"===o?u+n+k:">"===o?k+u+n:"^"===o?k.substring(0,S>>=1)+u+n+k.substring(S):u+(M?n:k+n))+e }  }  } function Ut(n) { return n+"" } function jt() { this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0]) } function Ft(n,t,e) { function r(t) { var e=n(t),r=i(e,1); return r-t>t-e?e:r } function u(e) { return t(e=n(new cc(e-1)),1),e } function i(n,e) { return t(n=new cc(+n),e),n } function o(n,r,i) { var o=u(n),a=[]; if(i>1)for(; r>o; )e(o)%i||a.push(new Date(+o)),t(o,1); else for(; r>o; )a.push(new Date(+o)),t(o,1); return a } function a(n,t,e) { try { cc=jt; var r=new jt; return r._=n,o(r,t,e) } finally { cc=Date }  } n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=o; var c=n.utc=Ht(n); return c.floor=c,c.round=Ht(r),c.ceil=Ht(u),c.offset=Ht(i),c.range=a,n } function Ht(n) { return function(t,e) { try { cc=jt; var r=new jt; return r._=t,n(r,e)._ } finally { cc=Date }  }  } function Ot(n) { function t(n) { function t(t) { for(var e,u,i,o=[],a=-1,c=0; ++a<r; )37===n.charCodeAt(a)&&(o.push(n.slice(c,a)),null!=(u=sc[e=n.charAt(++a)])&&(e=n.charAt(++a)),(i=N[e])&&(e=i(t,null==u?"e"===e?" ":"0":u)),o.push(e),c=a+1); return o.push(n.slice(c,a)),o.join("") } var r=n.length; return t.parse=function(t) { var r= { y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null } ,u=e(r,n,t,0); if(u!=t.length)return null; "p"in r&&(r.H=r.H%12+12*r.p); var i=null!=r.Z&&cc!==jt,o=new(i?jt:cc); return"j"in r?o.setFullYear(r.y,0,r.j):"w"in r&&("W"in r||"U"in r)?(o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+(r.Z/100|0),r.M+r.Z%100,r.S,r.L),i?o._:o } ,t.toString=function() { return n } ,t } function e(n,t,e,r) { for(var u,i,o,a=0,c=t.length,l=e.length; c>a; ) { if(r>=l)return-1; if(u=t.charCodeAt(a++),37===u) { if(o=t.charAt(a++),i=C[o in sc?t.charAt(a++):o],!i||(r=i(n,e,r))<0)return-1 } else if(u!=e.charCodeAt(r++))return-1 } return r } function r(n,t,e) { _.lastIndex=0; var r=_.exec(t.slice(e)); return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1 } function u(n,t,e) { x.lastIndex=0; var r=x.exec(t.slice(e)); return r?(n.w=b.get(r[0].toLowerCase()),e+r[0].length):-1 } function i(n,t,e) { E.lastIndex=0; var r=E.exec(t.slice(e)); return r?(n.m=A.get(r[0].toLowerCase()),e+r[0].length):-1 } function o(n,t,e) { S.lastIndex=0; var r=S.exec(t.slice(e)); return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1 } function a(n,t,r) { return e(n,N.c.toString(),t,r) } function c(n,t,r) { return e(n,N.x.toString(),t,r) } function l(n,t,r) { return e(n,N.X.toString(),t,r) } function s(n,t,e) { var r=M.get(t.slice(e,e+=2).toLowerCase()); return null==r?-1:(n.p=r,e) } var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths; t.utc=function(n) { function e(n) { try { cc=jt; var t=new cc; return t._=n,r(t) } finally { cc=Date }  } var r=t(n); return e.parse=function(n) { try { cc=jt; var t=r.parse(n); return t&&t._ } finally { cc=Date }  } ,e.toString=r.toString,e } ,t.multi=t.utc.multi=ae; var M=ta.map(),x=Yt(v),b=Zt(v),_=Yt(d),w=Zt(d),S=Yt(m),k=Zt(m),E=Yt(y),A=Zt(y); p.forEach(function(n,t) { M.set(n.toLowerCase(),t) } ); var N= { a:function(n) { return d[n.getDay()] } ,A:function(n) { return v[n.getDay()] } ,b:function(n) { return y[n.getMonth()] } ,B:function(n) { return m[n.getMonth()] } ,c:t(f),d:function(n,t) { return It(n.getDate(),t,2) } ,e:function(n,t) { return It(n.getDate(),t,2) } ,H:function(n,t) { return It(n.getHours(),t,2) } ,I:function(n,t) { return It(n.getHours()%12||12,t,2) } ,j:function(n,t) { return It(1+ac.dayOfYear(n),t,3) } ,L:function(n,t) { return It(n.getMilliseconds(),t,3) } ,m:function(n,t) { return It(n.getMonth()+1,t,2) } ,M:function(n,t) { return It(n.getMinutes(),t,2) } ,p:function(n) { return p[+(n.getHours()>=12)] } ,S:function(n,t) { return It(n.getSeconds(),t,2) } ,U:function(n,t) { return It(ac.sundayOfYear(n),t,2) } ,w:function(n) { return n.getDay() } ,W:function(n,t) { return It(ac.mondayOfYear(n),t,2) } ,x:t(h),X:t(g),y:function(n,t) { return It(n.getFullYear()%100,t,2) } ,Y:function(n,t) { return It(n.getFullYear()%1e4,t,4) } ,Z:ie,"%":function() { return"%" }  } ,C= { a:r,A:u,b:i,B:o,c:a,d:Qt,e:Qt,H:te,I:te,j:ne,L:ue,m:Kt,M:ee,p:s,S:re,U:Xt,w:Vt,W:$t,x:c,X:l,y:Wt,Y:Bt,Z:Jt,"%":oe } ; return t } function It(n,t,e) { var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length; return r+(e>i?new Array(e-i+1).join(t)+u:u) } function Yt(n) { return new RegExp("^(?:"+n.map(ta.requote).join("|")+")","i") } function Zt(n) { for(var t=new l,e=-1,r=n.length; ++e<r; )t.set(n[e].toLowerCase(),e); return t } function Vt(n,t,e) { fc.lastIndex=0; var r=fc.exec(t.slice(e,e+1)); return r?(n.w=+r[0],e+r[0].length):-1 } function Xt(n,t,e) { fc.lastIndex=0; var r=fc.exec(t.slice(e)); return r?(n.U=+r[0],e+r[0].length):-1 } function $t(n,t,e) { fc.lastIndex=0; var r=fc.exec(t.slice(e)); return r?(n.W=+r[0],e+r[0].length):-1 } function Bt(n,t,e) { fc.lastIndex=0; var r=fc.exec(t.slice(e,e+4)); return r?(n.y=+r[0],e+r[0].length):-1 } function Wt(n,t,e) { fc.lastIndex=0; var r=fc.exec(t.slice(e,e+2)); return r?(n.y=Gt(+r[0]),e+r[0].length):-1 } function Jt(n,t,e) { return/^[+-]\d { 4 } $/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1 } function Gt(n) { return n+(n>68?1900:2e3) } function Kt(n,t,e) { fc.lastIndex=0; var r=fc.exec(t.slice(e,e+2)); return r?(n.m=r[0]-1,e+r[0].length):-1 } function Qt(n,t,e) { fc.lastIndex=0; var r=fc.exec(t.slice(e,e+2)); return r?(n.d=+r[0],e+r[0].length):-1 } function ne(n,t,e) { fc.lastIndex=0; var r=fc.exec(t.slice(e,e+3)); return r?(n.j=+r[0],e+r[0].length):-1 } function te(n,t,e) { fc.lastIndex=0; var r=fc.exec(t.slice(e,e+2)); return r?(n.H=+r[0],e+r[0].length):-1 } function ee(n,t,e) { fc.lastIndex=0; var r=fc.exec(t.slice(e,e+2)); return r?(n.M=+r[0],e+r[0].length):-1 } function re(n,t,e) { fc.lastIndex=0; var r=fc.exec(t.slice(e,e+2)); return r?(n.S=+r[0],e+r[0].length):-1 } function ue(n,t,e) { fc.lastIndex=0; var r=fc.exec(t.slice(e,e+3)); return r?(n.L=+r[0],e+r[0].length):-1 } function ie(n) { var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=ga(t)/60|0,u=ga(t)%60; return e+It(r,"0",2)+It(u,"0",2) } function oe(n,t,e) { hc.lastIndex=0; var r=hc.exec(t.slice(e,e+1)); return r?e+r[0].length:-1 } function ae(n) { for(var t=n.length,e=-1; ++e<t; )n[e][0]=this(n[e][0]); return function(t) { for(var e=0,r=n[e]; !r[1](t); )r=n[++e]; return r[0](t) }  } function ce() {  } function le(n,t,e) { var r=e.s=n+t,u=r-n,i=r-u; e.t=n-i+(t-u) } function se(n,t) { n&&dc.hasOwnProperty(n.type)&&dc[n.type](n,t) } function fe(n,t,e) { var r,u=-1,i=n.length-e; for(t.lineStart(); ++u<i; )r=n[u],t.point(r[0],r[1],r[2]); t.lineEnd() } function he(n,t) { var e=-1,r=n.length; for(t.polygonStart(); ++e<r; )fe(n[e],t,1); t.polygonEnd() } function ge() { function n(n,t) { n*=Da,t=t*Da/2+qa/4; var e=n-r,o=e>=0?1:-1,a=o*e,c=Math.cos(t),l=Math.sin(t),s=i*l,f=u*c+s*Math.cos(a),h=s*o*Math.sin(a); yc.add(Math.atan2(h,f)),r=n,u=c,i=l } var t,e,r,u,i; Mc.point=function(o,a) { Mc.point=n,r=(t=o)*Da,u=Math.cos(a=(e=a)*Da/2+qa/4),i=Math.sin(a) } ,Mc.lineEnd=function() { n(t,e) }  } function pe(n) { var t=n[0],e=n[1],r=Math.cos(e); return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)] } function ve(n,t) { return n[0]*t[0]+n[1]*t[1]+n[2]*t[2] } function de(n,t) { return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]] } function me(n,t) { n[0]+=t[0],n[1]+=t[1],n[2]+=t[2] } function ye(n,t) { return[n[0]*t,n[1]*t,n[2]*t] } function Me(n) { var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]); n[0]/=t,n[1]/=t,n[2]/=t } function xe(n) { return[Math.atan2(n[1],n[0]),tt(n[2])] } function be(n,t) { return ga(n[0]-t[0])<Ca&&ga(n[1]-t[1])<Ca } function _e(n,t) { n*=Da; var e=Math.cos(t*=Da); we(e*Math.cos(n),e*Math.sin(n),Math.sin(t)) } function we(n,t,e) { ++xc,_c+=(n-_c)/xc,wc+=(t-wc)/xc,Sc+=(e-Sc)/xc } function Se() { function n(n,u) { n*=Da; var i=Math.cos(u*=Da),o=i*Math.cos(n),a=i*Math.sin(n),c=Math.sin(u),l=Math.atan2(Math.sqrt((l=e*c-r*a)*l+(l=r*o-t*c)*l+(l=t*a-e*o)*l),t*o+e*a+r*c); bc+=l,kc+=l*(t+(t=o)),Ec+=l*(e+(e=a)),Ac+=l*(r+(r=c)),we(t,e,r) } var t,e,r; qc.point=function(u,i) { u*=Da; var o=Math.cos(i*=Da); t=o*Math.cos(u),e=o*Math.sin(u),r=Math.sin(i),qc.point=n,we(t,e,r) }  } function ke() { qc.point=_e } function Ee() { function n(n,t) { n*=Da; var e=Math.cos(t*=Da),o=e*Math.cos(n),a=e*Math.sin(n),c=Math.sin(t),l=u*c-i*a,s=i*o-r*c,f=r*a-u*o,h=Math.sqrt(l*l+s*s+f*f),g=r*o+u*a+i*c,p=h&&-nt(g)/h,v=Math.atan2(h,g); Nc+=p*l,Cc+=p*s,zc+=p*f,bc+=v,kc+=v*(r+(r=o)),Ec+=v*(u+(u=a)),Ac+=v*(i+(i=c)),we(r,u,i) } var t,e,r,u,i; qc.point=function(o,a) { t=o,e=a,qc.point=n,o*=Da; var c=Math.cos(a*=Da); r=c*Math.cos(o),u=c*Math.sin(o),i=Math.sin(a),we(r,u,i) } ,qc.lineEnd=function() { n(t,e),qc.lineEnd=ke,qc.point=_e }  } function Ae(n,t) { function e(e,r) { return e=n(e,r),t(e[0],e[1]) } return n.invert&&t.invert&&(e.invert=function(e,r) { return e=t.invert(e,r),e&&n.invert(e[0],e[1]) } ),e } function Ne() { return!0 } function Ce(n,t,e,r,u) { var i=[],o=[]; if(n.forEach(function(n) { if(!((t=n.length-1)<=0)) { var t,e=n[0],r=n[t]; if(be(e,r)) { u.lineStart(); for(var a=0; t>a; ++a)u.point((e=n[a])[0],e[1]); return void u.lineEnd() } var c=new qe(e,n,null,!0),l=new qe(e,null,c,!1); c.o=l,i.push(c),o.push(l),c=new qe(r,n,null,!1),l=new qe(r,null,c,!0),c.o=l,i.push(c),o.push(l) }  } ),o.sort(t),ze(i),ze(o),i.length) { for(var a=0,c=e,l=o.length; l>a; ++a)o[a].e=c=!c; for(var s,f,h=i[0]; ; ) { for(var g=h,p=!0; g.v; )if((g=g.n)===h)return; s=g.z,u.lineStart(); do { if(g.v=g.o.v=!0,g.e) { if(p)for(var a=0,l=s.length; l>a; ++a)u.point((f=s[a])[0],f[1]); else r(g.x,g.n.x,1,u); g=g.n } else { if(p) { s=g.p.z; for(var a=s.length-1; a>=0; --a)u.point((f=s[a])[0],f[1]) } else r(g.x,g.p.x,-1,u); g=g.p } g=g.o,s=g.z,p=!p } while(!g.v); u.lineEnd() }  }  } function ze(n) { if(t=n.length) { for(var t,e,r=0,u=n[0]; ++r<t; )u.n=e=n[r],e.p=u,u=e; u.n=e=n[0],e.p=u }  } function qe(n,t,e,r) { this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null } function Le(n,t,e,r) { return function(u,i) { function o(t,e) { var r=u(t,e); n(t=r[0],e=r[1])&&i.point(t,e) } function a(n,t) { var e=u(n,t); d.point(e[0],e[1]) } function c() { y.point=a,d.lineStart() } function l() { y.point=o,d.lineEnd() } function s(n,t) { v.push([n,t]); var e=u(n,t); x.point(e[0],e[1]) } function f() { x.lineStart(),v=[] } function h() { s(v[0][0],v[0][1]),x.lineEnd(); var n,t=x.clean(),e=M.buffer(),r=e.length; if(v.pop(),p.push(v),v=null,r)if(1&t) { n=e[0]; var u,r=n.length-1,o=-1; if(r>0) { for(b||(i.polygonStart(),b=!0),i.lineStart(); ++o<r; )i.point((u=n[o])[0],u[1]); i.lineEnd() }  } else r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(Te)) } var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y= { point:o,lineStart:c,lineEnd:l,polygonStart:function() { y.point=s,y.lineStart=f,y.lineEnd=h,g=[],p=[] } ,polygonEnd:function() { y.point=o,y.lineStart=c,y.lineEnd=l,g=ta.merge(g); var n=Fe(m,p); g.length?(b||(i.polygonStart(),b=!0),Ce(g,De,n,e,i)):n&&(b||(i.polygonStart(),b=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),b&&(i.polygonEnd(),b=!1),g=p=null } ,sphere:function() { i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd() }  } ,M=Re(),x=t(M),b=!1; return y }  } function Te(n) { return n.length>1 } function Re() { var n,t=[]; return { lineStart:function() { t.push(n=[]) } ,point:function(t,e) { n.push([t,e]) } ,lineEnd:b,buffer:function() { var e=t; return t=[],n=null,e } ,rejoin:function() { t.length>1&&t.push(t.pop().concat(t.shift())) }  }  } function De(n,t) { return((n=n.x)[0]<0?n[1]-Ra-Ca:Ra-n[1])-((t=t.x)[0]<0?t[1]-Ra-Ca:Ra-t[1]) } function Pe(n) { var t,e=0/0,r=0/0,u=0/0; return { lineStart:function() { n.lineStart(),t=1 } ,point:function(i,o) { var a=i>0?qa:-qa,c=ga(i-e); ga(c-qa)<Ca?(n.point(e,r=(r+o)/2>0?Ra:-Ra),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(i,r),t=0):u!==a&&c>=qa&&(ga(e-u)<Ca&&(e-=u*Ca),ga(i-a)<Ca&&(i-=a*Ca),r=Ue(e,r,i,o),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=i,r=o),u=a } ,lineEnd:function() { n.lineEnd(),e=r=0/0 } ,clean:function() { return 2-t }  }  } function Ue(n,t,e,r) { var u,i,o=Math.sin(n-e); return ga(o)>Ca?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*o)):(t+r)/2 } function je(n,t,e,r) { var u; if(null==n)u=e*Ra,r.point(-qa,u),r.point(0,u),r.point(qa,u),r.point(qa,0),r.point(qa,-u),r.point(0,-u),r.point(-qa,-u),r.point(-qa,0),r.point(-qa,u); else if(ga(n[0]-t[0])>Ca) { var i=n[0]<t[0]?qa:-qa; u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u) } else r.point(t[0],t[1]) } function Fe(n,t) { var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,o=0; yc.reset(); for(var a=0,c=t.length; c>a; ++a) { var l=t[a],s=l.length; if(s)for(var f=l[0],h=f[0],g=f[1]/2+qa/4,p=Math.sin(g),v=Math.cos(g),d=1; ; ) { d===s&&(d=0),n=l[d]; var m=n[0],y=n[1]/2+qa/4,M=Math.sin(y),x=Math.cos(y),b=m-h,_=b>=0?1:-1,w=_*b,S=w>qa,k=p*M; if(yc.add(Math.atan2(k*_*Math.sin(w),v*x+k*Math.cos(w))),i+=S?b+_*La:b,S^h>=e^m>=e) { var E=de(pe(f),pe(n)); Me(E); var A=de(u,E); Me(A); var N=(S^b>=0?-1:1)*tt(A[2]); (r>N||r===N&&(E[0]||E[1]))&&(o+=S^b>=0?1:-1) } if(!d++)break; h=m,p=M,v=x,f=n }  } return(-Ca>i||Ca>i&&0>yc)^1&o } function He(n) { function t(n,t) { return Math.cos(n)*Math.cos(t)>i } function e(n) { var e,i,c,l,s; return { lineStart:function() { l=c=!1,s=1 } ,point:function(f,h) { var g,p=[f,h],v=t(f,h),d=o?v?0:u(f,h):v?u(f+(0>f?qa:-qa),h):0; if(!e&&(l=c=v)&&n.lineStart(),v!==c&&(g=r(e,p),(be(e,g)||be(p,g))&&(p[0]+=Ca,p[1]+=Ca,v=t(p[0],p[1]))),v!==c)s=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g; else if(a&&e&&o^v) { var m; d&i||!(m=r(p,e,!0))||(s=0,o?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1]))) } !v||e&&be(e,p)||n.point(p[0],p[1]),e=p,c=v,i=d } ,lineEnd:function() { c&&n.lineEnd(),e=null } ,clean:function() { return s|(l&&c)<<1 }  }  } function r(n,t,e) { var r=pe(n),u=pe(t),o=[1,0,0],a=de(r,u),c=ve(a,a),l=a[0],s=c-l*l; if(!s)return!e&&n; var f=i*c/s,h=-i*l/s,g=de(o,a),p=ye(o,f),v=ye(a,h); me(p,v); var d=g,m=ve(p,d),y=ve(d,d),M=m*m-y*(ve(p,p)-1); if(!(0>M)) { var x=Math.sqrt(M),b=ye(d,(-m-x)/y); if(me(b,p),b=xe(b),!e)return b; var _,w=n[0],S=t[0],k=n[1],E=t[1]; w>S&&(_=w,w=S,S=_); var A=S-w,N=ga(A-qa)<Ca,C=N||Ca>A; if(!N&&k>E&&(_=k,k=E,E=_),C?N?k+E>0^b[1]<(ga(b[0]-w)<Ca?k:E):k<=b[1]&&b[1]<=E:A>qa^(w<=b[0]&&b[0]<=S)) { var z=ye(d,(-m+x)/y); return me(z,p),[b,xe(z)] }  }  } function u(t,e) { var r=o?n:qa-n,u=0; return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u } var i=Math.cos(n),o=i>0,a=ga(i)>Ca,c=gr(n,6*Da); return Le(t,e,c,o?[0,-n]:[-qa,n-qa]) } function Oe(n,t,e,r) { return function(u) { var i,o=u.a,a=u.b,c=o.x,l=o.y,s=a.x,f=a.y,h=0,g=1,p=s-c,v=f-l; if(i=n-c,p||!(i>0)) { if(i/=p,0>p) { if(h>i)return; g>i&&(g=i) } else if(p>0) { if(i>g)return; i>h&&(h=i) } if(i=e-c,p||!(0>i)) { if(i/=p,0>p) { if(i>g)return; i>h&&(h=i) } else if(p>0) { if(h>i)return; g>i&&(g=i) } if(i=t-l,v||!(i>0)) { if(i/=v,0>v) { if(h>i)return; g>i&&(g=i) } else if(v>0) { if(i>g)return; i>h&&(h=i) } if(i=r-l,v||!(0>i)) { if(i/=v,0>v) { if(i>g)return; i>h&&(h=i) } else if(v>0) { if(h>i)return; g>i&&(g=i) } return h>0&&(u.a= { x:c+h*p,y:l+h*v } ),1>g&&(u.b= { x:c+g*p,y:l+g*v } ),u }  }  }  }  }  } function Ie(n,t,e,r) { function u(r,u) { return ga(r[0]-n)<Ca?u>0?0:3:ga(r[0]-e)<Ca?u>0?2:1:ga(r[1]-t)<Ca?u>0?1:0:u>0?3:2 } function i(n,t) { return o(n.x,t.x) } function o(n,t) { var e=u(n,1),r=u(t,1); return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0] } return function(a) { function c(n) { for(var t=0,e=d.length,r=n[1],u=0; e>u; ++u)for(var i,o=1,a=d[u],c=a.length,l=a[0]; c>o; ++o)i=a[o],l[1]<=r?i[1]>r&&Q(l,i,n)>0&&++t:i[1]<=r&&Q(l,i,n)<0&&--t,l=i; return 0!==t } function l(i,a,c,l) { var s=0,f=0; if(null==i||(s=u(i,c))!==(f=u(a,c))||o(i,a)<0^c>0) { do l.point(0===s||3===s?n:e,s>1?r:t); while((s=(s+c+4)%4)!==f) } else l.point(a[0],a[1]) } function s(u,i) { return u>=n&&e>=u&&i>=t&&r>=i } function f(n,t) { s(n,t)&&a.point(n,t) } function h() { C.point=p,d&&d.push(m=[]),S=!0,w=!1,b=_=0/0 } function g() { v&&(p(y,M),x&&w&&A.rejoin(),v.push(A.buffer())),C.point=f,w&&a.lineEnd() } function p(n,t) { n=Math.max(-Tc,Math.min(Tc,n)),t=Math.max(-Tc,Math.min(Tc,t)); var e=s(n,t); if(d&&m.push([n,t]),S)y=n,M=t,x=e,S=!1,e&&(a.lineStart(),a.point(n,t)); else if(e&&w)a.point(n,t); else { var r= { a: { x:b,y:_ } ,b: { x:n,y:t }  } ; N(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1) } b=n,_=t,w=e } var v,d,m,y,M,x,b,_,w,S,k,E=a,A=Re(),N=Oe(n,t,e,r),C= { point:f,lineStart:h,lineEnd:g,polygonStart:function() { a=A,v=[],d=[],k=!0 } ,polygonEnd:function() { a=E,v=ta.merge(v); var t=c([n,r]),e=k&&t,u=v.length; (e||u)&&(a.polygonStart(),e&&(a.lineStart(),l(null,null,1,a),a.lineEnd()),u&&Ce(v,i,t,l,a),a.polygonEnd()),v=d=m=null }  } ; return C }  } function Ye(n) { var t=0,e=qa/3,r=ir(n),u=r(t,e); return u.parallels=function(n) { return arguments.length?r(t=n[0]*qa/180,e=n[1]*qa/180):[t/qa*180,e/qa*180] } ,u } function Ze(n,t) { function e(n,t) { var e=Math.sqrt(i-2*u*Math.sin(t))/u; return[e*Math.sin(n*=u),o-e*Math.cos(n)] } var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),o=Math.sqrt(i)/u; return e.invert=function(n,t) { var e=o-t; return[Math.atan2(n,e)/u,tt((i-(n*n+e*e)*u*u)/(2*u))] } ,e } function Ve() { function n(n,t) { Dc+=u*n-r*t,r=n,u=t } var t,e,r,u; Hc.point=function(i,o) { Hc.point=n,t=r=i,e=u=o } ,Hc.lineEnd=function() { n(t,e) }  } function Xe(n,t) { Pc>n&&(Pc=n),n>jc&&(jc=n),Uc>t&&(Uc=t),t>Fc&&(Fc=t) } function $e() { function n(n,t) { o.push("M",n,",",t,i) } function t(n,t) { o.push("M",n,",",t),a.point=e } function e(n,t) { o.push("L",n,",",t) } function r() { a.point=n } function u() { o.push("Z") } var i=Be(4.5),o=[],a= { point:n,lineStart:function() { a.point=t } ,lineEnd:r,polygonStart:function() { a.lineEnd=u } ,polygonEnd:function() { a.lineEnd=r,a.point=n } ,pointRadius:function(n) { return i=Be(n),a } ,result:function() { if(o.length) { var n=o.join(""); return o=[],n }  }  } ; return a } function Be(n) { return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z" } function We(n,t) { _c+=n,wc+=t,++Sc } function Je() { function n(n,r) { var u=n-t,i=r-e,o=Math.sqrt(u*u+i*i); kc+=o*(t+n)/2,Ec+=o*(e+r)/2,Ac+=o,We(t=n,e=r) } var t,e; Ic.point=function(r,u) { Ic.point=n,We(t=r,e=u) }  } function Ge() { Ic.point=We } function Ke() { function n(n,t) { var e=n-r,i=t-u,o=Math.sqrt(e*e+i*i); kc+=o*(r+n)/2,Ec+=o*(u+t)/2,Ac+=o,o=u*n-r*t,Nc+=o*(r+n),Cc+=o*(u+t),zc+=3*o,We(r=n,u=t) } var t,e,r,u; Ic.point=function(i,o) { Ic.point=n,We(t=r=i,e=u=o) } ,Ic.lineEnd=function() { n(t,e) }  } function Qe(n) { function t(t,e) { n.moveTo(t+o,e),n.arc(t,e,o,0,La) } function e(t,e) { n.moveTo(t,e),a.point=r } function r(t,e) { n.lineTo(t,e) } function u() { a.point=t } function i() { n.closePath() } var o=4.5,a= { point:t,lineStart:function() { a.point=e } ,lineEnd:u,polygonStart:function() { a.lineEnd=i } ,polygonEnd:function() { a.lineEnd=u,a.point=t } ,pointRadius:function(n) { return o=n,a } ,result:b } ; return a } function nr(n) { function t(n) { return(a?r:e)(n) } function e(t) { return rr(t,function(e,r) { e=n(e,r),t.point(e[0],e[1]) } ) } function r(t) { function e(e,r) { e=n(e,r),t.point(e[0],e[1]) } function r() { M=0/0,S.point=i,t.lineStart() } function i(e,r) { var i=pe([e,r]),o=n(e,r); u(M,x,y,b,_,w,M=o[0],x=o[1],y=e,b=i[0],_=i[1],w=i[2],a,t),t.point(M,x) } function o() { S.point=e,t.lineEnd() } function c() { r(),S.point=l,S.lineEnd=s } function l(n,t) { i(f=n,h=t),g=M,p=x,v=b,d=_,m=w,S.point=i } function s() { u(M,x,y,b,_,w,g,p,f,v,d,m,a,t),S.lineEnd=o,o() } var f,h,g,p,v,d,m,y,M,x,b,_,w,S= { point:e,lineStart:r,lineEnd:o,polygonStart:function() { t.polygonStart(),S.lineStart=c