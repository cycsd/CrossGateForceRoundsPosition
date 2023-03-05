const Ot=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}};Ot();const N={},gt=(t,e)=>t===e,yt=Symbol("solid-track"),W={equals:gt};let bt=lt;const M={},T=1,R=2,rt={owned:null,cleanups:null,context:null,owner:null};var y=null;let I=null,g=null,H=null,b=null,A=null,Q=0;function j(t,e){const i=g,n=y,r=t.length===0?rt:{owned:null,cleanups:null,context:null,owner:e||n};y=r,g=null;try{return Y(()=>t(()=>Z(r)),!0)}finally{g=i,y=n}}function L(t,e){e=e?Object.assign({},W,e):W;const i={value:t,observers:null,observerSlots:null,pending:M,comparator:e.equals||void 0},n=r=>(typeof r=="function"&&(r=r(i.pending!==M?i.pending:i.value)),X(i,r));return[ot.bind(i),n]}function $t(t,e,i){const n=J(t,e,!0,T);D(n)}function x(t,e,i){const n=J(t,e,!1,T);D(n)}function B(t,e,i){i=i?Object.assign({},W,i):W;const n=J(t,e,!0,0);return n.pending=M,n.observers=null,n.observerSlots=null,n.comparator=i.equals||void 0,D(n),ot.bind(n)}function mt(t){if(H)return t();let e;const i=H=[];try{e=t()}finally{H=null}return Y(()=>{for(let n=0;n<i.length;n+=1){const r=i[n];if(r.pending!==M){const o=r.pending;r.pending=M,X(r,o)}}},!1),e}function q(t){let e,i=g;return g=null,e=t(),g=i,e}function wt(t){return y===null||(y.cleanups===null?y.cleanups=[t]:y.cleanups.push(t)),t}function vt(t){const e=Symbol("context");return{id:e,Provider:_t(e),defaultValue:t}}function Ct(t){let e;return(e=dt(y,t.id))!==void 0?e:t.defaultValue}function xt(t){const e=B(t);return B(()=>V(e()))}function ot(){const t=I;if(this.sources&&(this.state||t)){const e=b;b=null,this.state===T||t?D(this):U(this),b=e}if(g){const e=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(e)):(g.sources=[this],g.sourceSlots=[e]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return this.value}function X(t,e,i){if(H)return t.pending===M&&H.push(t),t.pending=e,e;if(t.comparator&&t.comparator(t.value,e))return e;let n=!1;return t.value=e,t.observers&&t.observers.length&&Y(()=>{for(let r=0;r<t.observers.length;r+=1){const o=t.observers[r];n&&I.disposed.has(o),(n&&!o.tState||!n&&!o.state)&&(o.pure?b.push(o):A.push(o),o.observers&&ut(o)),n||(o.state=T)}if(b.length>1e6)throw b=[],new Error},!1),e}function D(t){if(!t.fn)return;Z(t);const e=y,i=g,n=Q;g=y=t,Pt(t,t.value,n),g=i,y=e}function Pt(t,e,i){let n;try{n=t.fn(e)}catch(r){ct(r)}(!t.updatedAt||t.updatedAt<=i)&&(t.observers&&t.observers.length?X(t,n):t.value=n,t.updatedAt=i)}function J(t,e,i,n=T,r){const o={fn:t,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:y,context:null,pure:i};return y===null||y!==rt&&(y.owned?y.owned.push(o):y.owned=[o]),o}function st(t){const e=I;if(t.state===0||e)return;if(t.state===R||e)return U(t);if(t.suspense&&q(t.suspense.inFallback))return t.suspense.effects.push(t);const i=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<Q);)(t.state||e)&&i.push(t);for(let n=i.length-1;n>=0;n--)if(t=i[n],t.state===T||e)D(t);else if(t.state===R||e){const r=b;b=null,U(t,i[0]),b=r}}function Y(t,e){if(b)return t();let i=!1;e||(b=[]),A?i=!0:A=[],Q++;try{const n=t();return St(i),n}catch(n){ct(n)}finally{b=null,i||(A=null)}}function St(t){b&&(lt(b),b=null),!t&&(A.length?mt(()=>{bt(A),A=null}):A=null)}function lt(t){for(let e=0;e<t.length;e++)st(t[e])}function U(t,e){const i=I;t.state=0;for(let n=0;n<t.sources.length;n+=1){const r=t.sources[n];r.sources&&(r.state===T||i?r!==e&&st(r):(r.state===R||i)&&U(r,e))}}function ut(t){const e=I;for(let i=0;i<t.observers.length;i+=1){const n=t.observers[i];(!n.state||e)&&(n.state=R,n.pure?b.push(n):A.push(n),n.observers&&ut(n))}}function Z(t){let e;if(t.sources)for(;t.sources.length;){const i=t.sources.pop(),n=t.sourceSlots.pop(),r=i.observers;if(r&&r.length){const o=r.pop(),s=i.observerSlots.pop();n<r.length&&(o.sourceSlots[s]=n,r[n]=o,i.observerSlots[n]=s)}}if(t.owned){for(e=0;e<t.owned.length;e++)Z(t.owned[e]);t.owned=null}if(t.cleanups){for(e=0;e<t.cleanups.length;e++)t.cleanups[e]();t.cleanups=null}t.state=0,t.context=null}function ct(t){throw t}function dt(t,e){return t?t.context&&t.context[e]!==void 0?t.context[e]:dt(t.owner,e):void 0}function V(t){if(typeof t=="function"&&!t.length)return V(t());if(Array.isArray(t)){const e=[];for(let i=0;i<t.length;i++){const n=V(t[i]);Array.isArray(n)?e.push.apply(e,n):e.push(n)}return e}return t}function _t(t){return function(i){let n;return $t(()=>n=q(()=>(y.context={[t]:i.value},xt(()=>i.children)))),n}}const At=Symbol("fallback");function z(t){for(let e=0;e<t.length;e++)t[e]()}function Nt(t,e,i={}){let n=[],r=[],o=[],s=0,l=e.length>1?[]:null;return wt(()=>z(o)),()=>{let O=t()||[],p,u;return O[yt],q(()=>{let a=O.length,c,h,d,f,m,v,w,C,_;if(a===0)s!==0&&(z(o),o=[],n=[],r=[],s=0,l&&(l=[])),i.fallback&&(n=[At],r[0]=j(at=>(o[0]=at,i.fallback())),s=1);else if(s===0){for(r=new Array(a),u=0;u<a;u++)n[u]=O[u],r[u]=j($);s=a}else{for(d=new Array(a),f=new Array(a),l&&(m=new Array(a)),v=0,w=Math.min(s,a);v<w&&n[v]===O[v];v++);for(w=s-1,C=a-1;w>=v&&C>=v&&n[w]===O[C];w--,C--)d[C]=r[w],f[C]=o[w],l&&(m[C]=l[w]);for(c=new Map,h=new Array(C+1),u=C;u>=v;u--)_=O[u],p=c.get(_),h[u]=p===void 0?-1:p,c.set(_,u);for(p=v;p<=w;p++)_=n[p],u=c.get(_),u!==void 0&&u!==-1?(d[u]=r[p],f[u]=o[p],l&&(m[u]=l[p]),u=h[u],c.set(_,u)):o[p]();for(u=v;u<a;u++)u in d?(r[u]=d[u],o[u]=f[u],l&&(l[u]=m[u],l[u](u))):r[u]=j($);r=r.slice(0,s=a),n=O.slice(0)}return r});function $(a){if(o[u]=a,l){const[c,h]=L(u);return l[u]=h,e(O[u],c)}return e(O[u])}}}function E(t,e){return q(()=>t(e||{}))}function tt(t){const e="fallback"in t&&{fallback:()=>t.fallback};return B(Nt(()=>t.each,t.children,e||void 0))}function Et(t){let e=!1;const i=B(()=>t.when,void 0,{equals:(n,r)=>e?n===r:!n==!r});return B(()=>{const n=i();if(n){const r=t.children;return(e=typeof r=="function"&&r.length>0)?q(()=>r(n)):r}return t.fallback})}function Tt(t,e,i){let n=i.length,r=e.length,o=n,s=0,l=0,O=e[r-1].nextSibling,p=null;for(;s<r||l<o;){if(e[s]===i[l]){s++,l++;continue}for(;e[r-1]===i[o-1];)r--,o--;if(r===s){const u=o<n?l?i[l-1].nextSibling:i[o-l]:O;for(;l<o;)t.insertBefore(i[l++],u)}else if(o===l)for(;s<r;)(!p||!p.has(e[s]))&&e[s].remove(),s++;else if(e[s]===i[o-1]&&i[l]===e[r-1]){const u=e[--r].nextSibling;t.insertBefore(i[l++],e[s++].nextSibling),t.insertBefore(i[--o],u),e[r]=i[o]}else{if(!p){p=new Map;let $=l;for(;$<o;)p.set(i[$],$++)}const u=p.get(e[s]);if(u!=null)if(l<u&&u<o){let $=s,a=1,c;for(;++$<r&&$<o&&!((c=p.get(e[$]))==null||c!==u+a);)a++;if(a>u-l){const h=e[s];for(;l<u;)t.insertBefore(i[l++],h)}else t.replaceChild(i[l++],e[s++])}else s++;else e[s++].remove()}}}const et="_$DX_DELEGATE";function kt(t,e,i){let n;return j(r=>{n=r,e===document?t():S(e,t(),e.firstChild?null:void 0,i)}),()=>{n(),e.textContent=""}}function P(t,e,i){const n=document.createElement("template");n.innerHTML=t;let r=n.content.firstChild;return i&&(r=r.firstChild),r}function ft(t,e=window.document){const i=e[et]||(e[et]=new Set);for(let n=0,r=t.length;n<r;n++){const o=t[n];i.has(o)||(i.add(o),e.addEventListener(o,Mt))}}function S(t,e,i,n){if(i!==void 0&&!n&&(n=[]),typeof e!="function")return G(t,e,n,i);x(r=>G(t,e(),r,i),n)}function Mt(t){const e=`$$${t.type}`;let i=t.composedPath&&t.composedPath()[0]||t.target;for(t.target!==i&&Object.defineProperty(t,"target",{configurable:!0,value:i}),Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return i||document}}),N.registry&&!N.done&&(N.done=!0,document.querySelectorAll("[id^=pl-]").forEach(n=>n.remove()));i!==null;){const n=i[e];if(n&&!i.disabled){const r=i[`${e}Data`];if(r!==void 0?n(r,t):n(t),t.cancelBubble)return}i=i.host&&i.host!==i&&i.host instanceof Node?i.host:i.parentNode}}function G(t,e,i,n,r){for(N.context&&!i&&(i=[...t.childNodes]);typeof i=="function";)i=i();if(e===i)return i;const o=typeof e,s=n!==void 0;if(t=s&&i[0]&&i[0].parentNode||t,o==="string"||o==="number"){if(N.context)return i;if(o==="number"&&(e=e.toString()),s){let l=i[0];l&&l.nodeType===3?l.data=e:l=document.createTextNode(e),i=k(t,i,n,l)}else i!==""&&typeof i=="string"?i=t.firstChild.data=e:i=t.textContent=e}else if(e==null||o==="boolean"){if(N.context)return i;i=k(t,i,n)}else{if(o==="function")return x(()=>{let l=e();for(;typeof l=="function";)l=l();i=G(t,l,i,n)}),()=>i;if(Array.isArray(e)){const l=[];if(K(l,e,r))return x(()=>i=G(t,l,i,n,!0)),()=>i;if(N.context){for(let O=0;O<l.length;O++)if(l[O].parentNode)return i=l}if(l.length===0){if(i=k(t,i,n),s)return i}else Array.isArray(i)?i.length===0?it(t,l,n):Tt(t,i,l):(i&&k(t),it(t,l));i=l}else if(e instanceof Node){if(N.context&&e.parentNode)return i=s?[e]:e;if(Array.isArray(i)){if(s)return i=k(t,i,n,e);k(t,i,null,e)}else i==null||i===""||!t.firstChild?t.appendChild(e):t.replaceChild(e,t.firstChild);i=e}}return i}function K(t,e,i){let n=!1;for(let r=0,o=e.length;r<o;r++){let s=e[r],l;if(s instanceof Node)t.push(s);else if(!(s==null||s===!0||s===!1))if(Array.isArray(s))n=K(t,s)||n;else if((l=typeof s)=="string")t.push(document.createTextNode(s));else if(l==="function")if(i){for(;typeof s=="function";)s=s();n=K(t,Array.isArray(s)?s:[s])||n}else t.push(s),n=!0;else t.push(document.createTextNode(s.toString()))}return n}function it(t,e,i){for(let n=0,r=e.length;n<r;n++)t.insertBefore(e[n],i)}function k(t,e,i,n){if(i===void 0)return t.textContent="";const r=n||document.createTextNode("");if(e.length){let o=!1;for(let s=e.length-1;s>=0;s--){const l=e[s];if(r!==l){const O=l.parentNode===t;!o&&!s?O?t.replaceChild(r,l):t.insertBefore(r,i):O&&l.remove()}else o=!0}}else t.insertBefore(r,i);return[r]}const ht=vt();function Ht(t){const e={1:[{position:1,hitOrder:1},{position:2,hitOrder:2},{position:3,hitOrder:3},{position:4,hitOrder:10},{position:5,hitOrder:8},{position:6,hitOrder:5},{position:7,hitOrder:4},{position:8,hitOrder:6},{position:9,hitOrder:7},{position:10,hitOrder:9}],2:[{position:1,hitOrder:6},{position:2,hitOrder:1},{position:3,hitOrder:4},{position:4,hitOrder:8},{position:5,hitOrder:9},{position:6,hitOrder:3},{position:7,hitOrder:5},{position:8,hitOrder:7},{position:9,hitOrder:2},{position:10,hitOrder:10}],3:[{position:1,hitOrder:8},{position:2,hitOrder:5},{position:3,hitOrder:1},{position:4,hitOrder:3},{position:5,hitOrder:9},{position:6,hitOrder:10},{position:7,hitOrder:2},{position:8,hitOrder:7},{position:9,hitOrder:4},{position:10,hitOrder:6}],4:[{position:1,hitOrder:10},{position:2,hitOrder:8},{position:3,hitOrder:5},{position:4,hitOrder:1},{position:5,hitOrder:7},{position:6,hitOrder:9},{position:7,hitOrder:6},{position:8,hitOrder:3},{position:9,hitOrder:4},{position:10,hitOrder:2}],5:[{position:1,hitOrder:9},{position:2,hitOrder:8},{position:3,hitOrder:4},{position:4,hitOrder:5},{position:5,hitOrder:1},{position:6,hitOrder:10},{position:7,hitOrder:7},{position:8,hitOrder:2},{position:9,hitOrder:3},{position:10,hitOrder:6}],6:[{position:1,hitOrder:5},{position:2,hitOrder:4},{position:3,hitOrder:6},{position:4,hitOrder:7},{position:5,hitOrder:9},{position:6,hitOrder:1},{position:7,hitOrder:2},{position:8,hitOrder:3},{position:9,hitOrder:10},{position:10,hitOrder:8}],7:[{position:1,hitOrder:3},{position:2,hitOrder:5},{position:3,hitOrder:7},{position:4,hitOrder:2},{position:5,hitOrder:10},{position:6,hitOrder:6},{position:7,hitOrder:1},{position:8,hitOrder:4},{position:9,hitOrder:8},{position:10,hitOrder:9}],8:[{position:1,hitOrder:10},{position:2,hitOrder:2},{position:3,hitOrder:7},{position:4,hitOrder:4},{position:5,hitOrder:6},{position:6,hitOrder:8},{position:7,hitOrder:5},{position:8,hitOrder:1},{position:9,hitOrder:3},{position:10,hitOrder:9}],9:[{position:1,hitOrder:9},{position:2,hitOrder:6},{position:3,hitOrder:3},{position:4,hitOrder:4},{position:5,hitOrder:2},{position:6,hitOrder:10},{position:7,hitOrder:8},{position:8,hitOrder:5},{position:9,hitOrder:1},{position:10,hitOrder:7}],10:[{position:1,hitOrder:10},{position:2,hitOrder:7},{position:3,hitOrder:2},{position:4,hitOrder:3},{position:5,hitOrder:6},{position:6,hitOrder:9},{position:7,hitOrder:8},{position:8,hitOrder:4},{position:9,hitOrder:5},{position:10,hitOrder:1}]},[i,n]=L([{position:1,hitOrder:0},{position:2,hitOrder:0},{position:3,hitOrder:0},{position:4,hitOrder:0},{position:5,hitOrder:0},{position:6,hitOrder:0},{position:7,hitOrder:0},{position:8,hitOrder:0},{position:9,hitOrder:0},{position:10,hitOrder:0}]),[r,o]=L([{position:11,hitOrder:11}]);function s(a,c){return{position:a,hitOrder:c}}const $=[()=>{const a=r();return i().map((c,h)=>a.some(d=>d.position==c.position)?new s(c.position,"0"):new s(c.position,c.hitOrder-a.filter(d=>d.hitOrder<c.hitOrder).length))},{resetHitOrder:(a,c)=>{n(e[a.position]),o(h=>h.map(d=>i().find(f=>f.position==d.position)||d).filter(d=>d.position!=a.position))},setPositionWithoutMonster:o,clearAllMonster:()=>{o(i())},toggleMonsterClick:(a,c)=>{o(h=>a.hasMonster?h.concat([{position:a.position,hitOrder:i().find(d=>d.position==a.position).hitOrder}]):h.filter(d=>d.position!=a.position))}}];return E(ht.Provider,{value:$,get children(){return t.children}})}function pt(){return Ct(ht)}const Lt=P("<div><div><button></button></div><button></button></div>");function nt(t){const{hitOrder:e,position:i}=t,[n,{resetHitOrder:r,setPositionWithoutMonster:o,toggleMonsterClick:s}]=pt();return(()=>{const l=Lt.cloneNode(!0),O=l.firstChild,p=O.firstChild,u=O.nextSibling;return O.style.setProperty("border-color","black"),O.style.setProperty("border-width","1px"),p.$$click=r,p.$$clickData={position:i},p.style.setProperty("width","100%"),p.style.setProperty("height","80%"),p.style.setProperty("border-width","1px"),p.style.setProperty("border-color","black"),S(p,e),u.$$click=s,u.$$clickData={hasMonster:e!=0,position:i},u.style.setProperty("width","100%"),u.style.setProperty("height","20%"),S(u,e!=0?"\u6709":"\u7121"),x(()=>p.style.setProperty("background-color",t.color)),l})()}ft(["click"]);const F=P("<div></div>"),Bt=P('<div style="clear:both;height:1%;"></div>'),It=P('<button id="ResetMonster"></button>'),qt=P('<button id="ClearMonster"></button>'),Dt=P('<div style="clear:both"><select name="bulletLevel" id="bulletLevel"></select></div>'),Ft=P('<div><label for="mustHitColor">\u5FC5\u5B9A\u64CA\u4E2D\u984F\u8272:</label><input type="color" name="mustHitColor"></div>'),jt=P('<div><label for="maybeHitColor">\u96A8\u6A5F\u64CA\u4E2D\u984F\u8272:</label><input type="color" name="mustHitColor"></div>'),Wt=P('<div><label for="notHitColor">\u4E0D\u4E2D\u984F\u8272:</label><input type="color" name="mustHitColor"></div>'),Rt=P('<div><label for="notHitColor">\u7121\u602A\u7378\u984F\u8272:</label><input type="color" name="mustHitColor"></div>'),Ut=P("<option>\u6C23\u529F\u5F48LV<!> \u8017\u9B54:<!> \u6578\u91CF:</option>");function Gt(){const[t,{hitClick:e,setPositionWithoutMonster:i,clearAllMonster:n,toggleMonsterClick:r}]=pt(),o={1:[1,1],2:[1,2],3:[2,2],4:[2,3],5:[3,3],6:[3,4],7:[3,5],8:[4,6],9:[5,7],10:[7,8],11:[7,8]},[s,l]=L([1,1]),O=c=>{l(o[c.currentTarget.value])},[p,u]=L(["#ff3e00","#FFFF00","#28FF28","#000000"]),$=c=>{const h=s().findIndex(d=>d>=c);return p()[h===-1?2:c==0?3:h]},a=(c,h)=>{u(d=>d.map((f,m)=>m===h?c:f))};return[(()=>{const c=F.cloneNode(!0);return c.style.setProperty("height","60%"),c.style.setProperty("margin-top","0%"),S(c,E(tt,{get each(){return t()},children:(h,d)=>E(Et,{get when(){return d()!=5},get fallback(){return[(()=>{const f=F.cloneNode(!0);return f.style.setProperty("height","30%"),f.style.setProperty("width","7%"),f.style.setProperty("float","left"),f.style.setProperty("clear","left"),f})(),(()=>{const f=F.cloneNode(!0);return f.style.setProperty("height","30%"),f.style.setProperty("width","15%"),f.style.setProperty("float","left"),f.style.setProperty("position","relative"),S(f,E(nt,{get color(){return $(h.hitOrder)},get hitOrder(){return h.hitOrder},get position(){return h.position}})),x(()=>f.style.setProperty("top",`${46-(d()%5+1)*9}%`)),f})()]},get children(){const f=F.cloneNode(!0);return f.style.setProperty("height","30%"),f.style.setProperty("width","15%"),f.style.setProperty("float","left"),f.style.setProperty("position","relative"),S(f,E(nt,{get color(){return $(h.hitOrder)},get hitOrder(){return h.hitOrder},get position(){return h.position}})),x(()=>f.style.setProperty("top",`${d()>5?46-(d()%5+1)*9:36-d()%5*9}%`)),f}})})),c})(),Bt.cloneNode(!0),(()=>{const c=It.cloneNode(!0);return c.$$click=h=>i([]),c.innerText="\u5168\u9078",c})(),(()=>{const c=qt.cloneNode(!0);return c.$$click=h=>n(),c.innerText="\u6E05\u7A7A",c})(),(()=>{const c=Dt.cloneNode(!0),h=c.firstChild;return h.addEventListener("change",O),S(h,E(tt,{get each(){return Object.entries(o)},children:(d,f)=>(()=>{const m=Ut.cloneNode(!0),v=m.firstChild,w=v.nextSibling,C=w.nextSibling,_=C.nextSibling;return _.nextSibling,S(m,()=>d[0],w),S(m,()=>d[0]*5,_),S(m,()=>d[1][0]==d[1][1]?d[1][0]:`${d[1][0]}~${d[1][1]}`,null),x(()=>m.value=d[0]),m})()})),c})(),(()=>{const c=Ft.cloneNode(!0),h=c.firstChild,d=h.nextSibling;return d.$$input=f=>a(f.currentTarget.value,0),x(()=>d.value=p()[0]),c})(),(()=>{const c=jt.cloneNode(!0),h=c.firstChild,d=h.nextSibling;return d.$$input=f=>a(f.currentTarget.value,1),x(()=>d.value=p()[1]),c})(),(()=>{const c=Wt.cloneNode(!0),h=c.firstChild,d=h.nextSibling;return d.$$input=f=>a(f.currentTarget.value,2),x(()=>d.value=p()[2]),c})(),(()=>{const c=Rt.cloneNode(!0),h=c.firstChild,d=h.nextSibling;return d.$$input=f=>a(f.currentTarget.value,3),x(()=>d.value=p()[3]),c})()]}ft(["click","input"]);kt(()=>E(Ht,{get children(){return E(Gt,{})}}),document.getElementById("app"));