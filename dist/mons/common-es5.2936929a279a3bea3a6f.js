(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2mXy":function(e,t,n){"use strict";n.r(t),n.d(t,"render",(function(){return F})),n.d(t,"hydrate",(function(){return L})),n.d(t,"createElement",(function(){return v})),n.d(t,"h",(function(){return v})),n.d(t,"Fragment",(function(){return g})),n.d(t,"createRef",(function(){return m})),n.d(t,"isValidElement",(function(){return o})),n.d(t,"Component",(function(){return b})),n.d(t,"cloneElement",(function(){return M})),n.d(t,"createContext",(function(){return B})),n.d(t,"toChildArray",(function(){return k})),n.d(t,"_unmount",(function(){return R})),n.d(t,"options",(function(){return r}));var r,o,i,u,c,l,a,_,s={},f=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function d(e,t){for(var n in t)e[n]=t[n];return e}function h(e){var t=e.parentNode;t&&t.removeChild(e)}function v(e,t,n){var r,o=arguments,i={};for(r in t)"key"!==r&&"ref"!==r&&(i[r]=t[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(i.children=n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===i[r]&&(i[r]=e.defaultProps[r]);return y(e,i,t&&t.key,t&&t.ref,null)}function y(e,t,n,o,i){var u={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i};return null==i&&(u.__v=u),r.vnode&&r.vnode(u),u}function m(){return{}}function g(e){return e.children}function b(e,t){this.props=e,this.context=t}function E(e,t){if(null==t)return e.__?E(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?E(e):null}function C(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return C(e)}}function S(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!u++||l!==r.debounceRendering)&&((l=r.debounceRendering)||c)(N)}function N(){for(var e;u=i.length;)e=i.sort((function(e,t){return e.__v.__b-t.__v.__b})),i=[],e.some((function(e){var t,n,r,o,i,u,c;e.__d&&(u=(i=(t=e).__v).__e,(c=t.__P)&&(n=[],(r=d({},i)).__v=r,o=w(c,i,r,t.__n,void 0!==c.ownerSVGElement,null,n,null==u?E(i):u),I(n,i),o!=u&&C(i)))}))}function O(e,t,n,r,o,i,u,c,l){var a,_,p,d,v,y,m,g=n&&n.__k||f,b=g.length;if(c==s&&(c=null!=i?i[0]:b?E(n,0):null),a=0,t.__k=k(t.__k,(function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(p=g[a])||p&&n.key==p.key&&n.type===p.type)g[a]=void 0;else for(_=0;_<b;_++){if((p=g[_])&&n.key==p.key&&n.type===p.type){g[_]=void 0;break}p=null}if(d=w(e,n,p=p||s,r,o,i,u,c,l),(_=n.ref)&&p.ref!=_&&(m||(m=[]),p.ref&&m.push(p.ref,null,n),m.push(_,n.__c||d,n)),null!=d){var f;if(null==y&&(y=d),void 0!==n.__d)f=n.__d,n.__d=void 0;else if(i==p||d!=c||null==d.parentNode){e:if(null==c||c.parentNode!==e)e.appendChild(d),f=null;else{for(v=c,_=0;(v=v.nextSibling)&&_<b;_+=2)if(v==d)break e;e.insertBefore(d,c),f=c}"option"==t.type&&(e.value="")}c=void 0!==f?f:d.nextSibling,"function"==typeof t.type&&(t.__d=c)}else c&&p.__e==c&&c.parentNode!=e&&(c=E(p))}return a++,n})),t.__e=y,null!=i&&"function"!=typeof t.type)for(a=i.length;a--;)null!=i[a]&&h(i[a]);for(a=b;a--;)null!=g[a]&&R(g[a],g[a]);if(m)for(a=0;a<m.length;a++)P(m[a],m[++a],m[++a])}function k(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var r=0;r<e.length;r++)k(e[r],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?y(null,e,null,null,e):null!=e.__e||null!=e.__c?y(e.type,e.props,e.key,null,e.__v):e):e);return n}function A(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===p.test(t)?n+"px":null==n?"":n}function T(e,t,n,r,o){var i,u,c,l,a;if(o?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(i=e.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(l in r)n&&l in n||A(i,l,"");if(n)for(a in n)r&&n[a]===r[a]||A(i,a,n[a])}else"o"===t[0]&&"n"===t[1]?(u=t!==(t=t.replace(/Capture$/,"")),c=t.toLowerCase(),t=(c in e?c:t).slice(2),n?(r||e.addEventListener(t,D,u),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,D,u)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function D(e){this.l[e.type](r.event?r.event(e):e)}function w(e,t,n,o,i,u,c,l,a){var _,s,f,p,h,v,y,m,E,C,S=t.type;if(void 0!==t.constructor)return null;(_=r.__b)&&_(t);try{e:if("function"==typeof S){if(m=t.props,E=(_=S.contextType)&&o[_.__c],C=_?E?E.props.value:_.__:o,n.__c?y=(s=t.__c=n.__c).__=s.__E:("prototype"in S&&S.prototype.render?t.__c=s=new S(m,C):(t.__c=s=new b(m,C),s.constructor=S,s.render=U),E&&E.sub(s),s.props=m,s.state||(s.state={}),s.context=C,s.__n=o,f=s.__d=!0,s.__h=[]),null==s.__s&&(s.__s=s.state),null!=S.getDerivedStateFromProps&&(s.__s==s.state&&(s.__s=d({},s.__s)),d(s.__s,S.getDerivedStateFromProps(m,s.__s))),p=s.props,h=s.state,f)null==S.getDerivedStateFromProps&&null!=s.componentWillMount&&s.componentWillMount(),null!=s.componentDidMount&&s.__h.push(s.componentDidMount);else{if(null==S.getDerivedStateFromProps&&m!==p&&null!=s.componentWillReceiveProps&&s.componentWillReceiveProps(m,C),!s.__e&&null!=s.shouldComponentUpdate&&!1===s.shouldComponentUpdate(m,s.__s,C)||t.__v===n.__v&&!s.__){for(s.props=m,s.state=s.__s,t.__v!==n.__v&&(s.__d=!1),s.__v=t,t.__e=n.__e,t.__k=n.__k,s.__h.length&&c.push(s),_=0;_<t.__k.length;_++)t.__k[_]&&(t.__k[_].__=t);break e}null!=s.componentWillUpdate&&s.componentWillUpdate(m,s.__s,C),null!=s.componentDidUpdate&&s.__h.push((function(){s.componentDidUpdate(p,h,v)}))}s.context=C,s.props=m,s.state=s.__s,(_=r.__r)&&_(t),s.__d=!1,s.__v=t,s.__P=e,_=s.render(s.props,s.state,s.context),t.__k=null!=_&&_.type==g&&null==_.key?_.props.children:Array.isArray(_)?_:[_],null!=s.getChildContext&&(o=d(d({},o),s.getChildContext())),f||null==s.getSnapshotBeforeUpdate||(v=s.getSnapshotBeforeUpdate(p,h)),O(e,t,n,o,i,u,c,l,a),s.base=t.__e,s.__h.length&&c.push(s),y&&(s.__E=s.__=null),s.__e=!1}else null==u&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=x(n.__e,t,n,o,i,u,c,a);(_=r.diffed)&&_(t)}catch(e){t.__v=null,r.__e(e,t,n)}return t.__e}function I(e,t){r.__c&&r.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){r.__e(e,t.__v)}}))}function x(e,t,n,r,o,i,u,c){var l,a,_,p,d,h=n.props,v=t.props;if(o="svg"===t.type||o,null!=i)for(l=0;l<i.length;l++)if(null!=(a=i[l])&&((null===t.type?3===a.nodeType:a.localName===t.type)||e==a)){e=a,i[l]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),i=null,c=!1}if(null===t.type)h!==v&&e.data!=v&&(e.data=v);else{if(null!=i&&(i=f.slice.call(e.childNodes)),_=(h=n.props||s).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!c){if(h===s)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(p||_)&&(p&&_&&p.__html==_.__html||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||T(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||T(e,i,t[i],n[i],r)})(e,v,h,o,c),p?t.__k=[]:(t.__k=t.props.children,O(e,t,n,r,"foreignObject"!==t.type&&o,i,u,s,c)),c||("value"in v&&void 0!==(l=v.value)&&l!==e.value&&T(e,"value",l,h.value,!1),"checked"in v&&void 0!==(l=v.checked)&&l!==e.checked&&T(e,"checked",l,h.checked,!1))}return e}function P(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){r.__e(e,n)}}function R(e,t,n){var o,i,u;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||P(o,null,t)),n||"function"==typeof e.type||(n=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(u=0;u<o.length;u++)o[u]&&R(o[u],t,n);null!=i&&h(i)}function U(e,t,n){return this.constructor(e,n)}function F(e,t,n){var o,i,u;r.__&&r.__(e,t),i=(o=n===a)?null:n&&n.__k||t.__k,e=v(g,null,[e]),u=[],w(t,(o?t:n||t).__k=e,i||s,s,void 0!==t.ownerSVGElement,n&&!o?[n]:i?null:f.slice.call(t.childNodes),u,n||s,o),I(u,e)}function L(e,t){F(e,t,a)}function M(e,t){var n,r;for(r in t=d(d({},e.props),t),arguments.length>2&&(t.children=f.slice.call(arguments,2)),n={},t)"key"!==r&&"ref"!==r&&(n[r]=t[r]);return y(e.type,n,t.key||e.key,t.ref||e.ref,null)}function B(e){var t={},n={__c:"__cC"+_++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return t[n.__c]=o,t},this.shouldComponentUpdate=function(e){o.props.value!==e.value&&r.some((function(t){t.context=e.value,S(t)}))},this.sub=function(e){r.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){r.splice(r.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}r={__e:function(e,t){for(var n,r;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(e)),r)return S(n.__E=n)}catch(t){e=t}throw e}},o=function(e){return null!=e&&void 0===e.constructor},b.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&d(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),S(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),S(this))},b.prototype.render=g,i=[],u=0,c="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,a=s,_=0},"36aJ":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r=function(e){var t=e.currentWallet,n=e.selectedWallet;return t?'\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    We have detected that you already have\n    <b>'.concat(t,"</b>\n    installed. If you would prefer to use\n    <b>").concat(n,'</b>\n    instead, then click below to install.\n    </p>\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    <b>Tip:</b>\n    If you already have ').concat(n,' installed, check your\n    browser extension settings to make sure that you have it enabled\n    and that you have disabled any other browser extension wallets.\n    <span\n      class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick="window.location.reload();">\n      Then refresh the page.\n    </span>\n    </p>\n    '):'\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    You\'ll need to install <b>'.concat(n,'</b> to continue. Once you have it installed, go ahead and\n    <span\n    class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick={window.location.reload();}>\n      refresh the page.\n    </span>\n    ').concat("Opera"===n?'<br><br><i>Hint: If you already have Opera installed, make sure that your web3 wallet is <a style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;" class="bn-onboard-clickable" href="https://help.opera.com/en/touch/crypto-wallet/" rel="noreferrer noopener" target="_blank">enabled</a></i>':"","\n    </p>\n    ")},o=function(e){var t=e.selectedWallet;return'\n  <p style="font-size: 0.889rem;">\n    You\'ll need to install <b>'.concat(t,"</b> to continue. Click below to install and then load this Dapp with <b>").concat(t,"</b>.\n  </p>\n  ")}},B3Rj:function(e,t,n){var r=n("QqcV");e.exports=r("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")},BumV:function(e,t,n){"use strict";var r=n("B3Rj"),o=n("hwdV").Buffer;e.exports=function(e){function t(t){var n=t.slice(0,-4),r=t.slice(-4),o=e(n);if(!(r[0]^o[0]|r[1]^o[1]|r[2]^o[2]|r[3]^o[3]))return n}return{encode:function(t){var n=e(t);return r.encode(o.concat([t,n],t.length+4))},decode:function(e){var n=t(r.decode(e));if(!n)throw new Error("Invalid checksum");return n},decodeUnsafe:function(e){var n=r.decodeUnsafe(e);if(n)return t(n)}}}},MOxe:function(e,t,n){"use strict";n.r(t),n.d(t,"useState",(function(){return d})),n.d(t,"useReducer",(function(){return h})),n.d(t,"useEffect",(function(){return v})),n.d(t,"useLayoutEffect",(function(){return y})),n.d(t,"useRef",(function(){return m})),n.d(t,"useImperativeHandle",(function(){return g})),n.d(t,"useMemo",(function(){return b})),n.d(t,"useCallback",(function(){return E})),n.d(t,"useContext",(function(){return C})),n.d(t,"useDebugValue",(function(){return S})),n.d(t,"useErrorBoundary",(function(){return N}));var r,o,i,u=n("2mXy"),c=0,l=[],a=u.options.__r,_=u.options.diffed,s=u.options.__c,f=u.options.unmount;function p(e,t){u.options.__h&&u.options.__h(o,e,c||t),c=0;var n=o.__H||(o.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function d(e){return c=1,h(D,e)}function h(e,t,n){var i=p(r++,2);return i.__c||(i.__c=o,i.__=[n?n(t):D(void 0,t),function(t){var n=e(i.__[0],t);i.__[0]!==n&&(i.__[0]=n,i.__c.setState({}))}]),i.__}function v(e,t){var n=p(r++,3);!u.options.__s&&T(n.__H,t)&&(n.__=e,n.__H=t,o.__H.__h.push(n))}function y(e,t){var n=p(r++,4);!u.options.__s&&T(n.__H,t)&&(n.__=e,n.__H=t,o.__h.push(n))}function m(e){return c=5,b((function(){return{current:e}}),[])}function g(e,t,n){c=6,y((function(){"function"==typeof e?e(t()):e&&(e.current=t())}),null==n?n:n.concat(e))}function b(e,t){var n=p(r++,7);return T(n.__H,t)?(n.__H=t,n.__h=e,n.__=e()):n.__}function E(e,t){return c=8,b((function(){return e}),t)}function C(e){var t=o.context[e.__c],n=p(r++,9);return n.__c=e,t?(null==n.__&&(n.__=!0,t.sub(o)),t.props.value):e.__}function S(e,t){u.options.useDebugValue&&u.options.useDebugValue(t?t(e):e)}function N(e){var t=p(r++,10),n=d();return t.__=e,o.componentDidCatch||(o.componentDidCatch=function(e){t.__&&t.__(e),n[1](e)}),[n[0],function(){n[1](void 0)}]}function O(){l.some((function(e){if(e.__P)try{e.__H.__h.forEach(k),e.__H.__h.forEach(A),e.__H.__h=[]}catch(o){return e.__H.__h=[],u.options.__e(o,e.__v),!0}})),l=[]}function k(e){e.t&&e.t()}function A(e){var t=e.__();"function"==typeof t&&(e.t=t)}function T(e,t){return!e||t.some((function(t,n){return t!==e[n]}))}function D(e,t){return"function"==typeof t?t(e):t}u.options.__r=function(e){a&&a(e),r=0,(o=e.__c).__H&&(o.__H.__h.forEach(k),o.__H.__h.forEach(A),o.__H.__h=[])},u.options.diffed=function(e){_&&_(e);var t=e.__c;if(t){var n=t.__H;n&&n.__h.length&&(1!==l.push(t)&&i===u.options.requestAnimationFrame||((i=u.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);"undefined"!=typeof window&&(t=requestAnimationFrame(n))})(O))}},u.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(k),e.__h=e.__h.filter((function(e){return!e.__||A(e)}))}catch(i){t.some((function(e){e.__h&&(e.__h=[])})),t=[],u.options.__e(i,e.__v)}})),s&&s(e,t)},u.options.unmount=function(e){f&&f(e);var t=e.__c;if(t){var n=t.__H;if(n)try{n.__.forEach((function(e){return e.t&&e.t()}))}catch(e){u.options.__e(e,t.__v)}}}},N1pS:function(e,t){e.exports=o,o.default=o,o.stable=u,o.stableStringify=u;var n=[],r=[];function o(e,t,o){var i;for(function e(t,o,i,u){var c;if("object"==typeof t&&null!==t){for(c=0;c<i.length;c++)if(i[c]===t){var l=Object.getOwnPropertyDescriptor(u,o);return void(void 0!==l.get?l.configurable?(Object.defineProperty(u,o,{value:"[Circular]"}),n.push([u,o,t,l])):r.push([t,o]):(u[o]="[Circular]",n.push([u,o,t])))}if(i.push(t),Array.isArray(t))for(c=0;c<t.length;c++)e(t[c],c,i,t);else{var a=Object.keys(t);for(c=0;c<a.length;c++){var _=a[c];e(t[_],_,i,t)}}i.pop()}}(e,"",[],void 0),i=0===r.length?JSON.stringify(e,t,o):JSON.stringify(e,c(t),o);0!==n.length;){var u=n.pop();4===u.length?Object.defineProperty(u[0],u[1],u[3]):u[0][u[1]]=u[2]}return i}function i(e,t){return e<t?-1:e>t?1:0}function u(e,t,o){var u,l=function e(t,o,u,c){var l;if("object"==typeof t&&null!==t){for(l=0;l<u.length;l++)if(u[l]===t){var a=Object.getOwnPropertyDescriptor(c,o);return void(void 0!==a.get?a.configurable?(Object.defineProperty(c,o,{value:"[Circular]"}),n.push([c,o,t,a])):r.push([t,o]):(c[o]="[Circular]",n.push([c,o,t])))}if("function"==typeof t.toJSON)return;if(u.push(t),Array.isArray(t))for(l=0;l<t.length;l++)e(t[l],l,u,t);else{var _={},s=Object.keys(t).sort(i);for(l=0;l<s.length;l++){var f=s[l];e(t[f],f,u,t),_[f]=t[f]}if(void 0===c)return _;n.push([c,o,t]),c[o]=_}u.pop()}}(e,"",[],void 0)||e;for(u=0===r.length?JSON.stringify(l,t,o):JSON.stringify(l,c(t),o);0!==n.length;){var a=n.pop();4===a.length?Object.defineProperty(a[0],a[1],a[3]):a[0][a[1]]=a[2]}return u}function c(e){return e=void 0!==e?e:function(e,t){return t},function(t,n){if(r.length>0)for(var o=0;o<r.length;o++){var i=r[o];if(i[1]===t&&i[0]===n){n="[Circular]",r.splice(o,1);break}}return e.call(this,t,n)}}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},b3gk:function(e,t,n){"use strict";var r=n("mObS"),o=n("BumV");e.exports=o((function(e){var t=r("sha256").update(e).digest();return r("sha256").update(t).digest()}))},cDf5:function(e,t){function n(t){return e.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},kl0C:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r='\n\t<svg width="40" height="40" viewBox="0 0 383 383" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<g clip-path="url(#clip0)">\n\t\t<g filter="url(#filter0_dd)">\n\t\t\t<path d="M0.998047 0.572266L382.78 0.572266V382.354H0.998047L0.998047 0.572266Z" fill="url(#paint0_linear)"/>\n\t\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M59.1074 191.572C59.1074 264.966 118.605 324.463 191.998 324.463C265.392 324.463 324.889 264.966 324.889 191.572C324.889 118.179 265.392 58.6816 191.998 58.6816C118.605 58.6816 59.1074 118.179 59.1074 191.572ZM158.037 148.752C153.144 148.752 149.178 152.718 149.178 157.611V225.533C149.178 230.426 153.144 234.393 158.037 234.393H225.959C230.852 234.393 234.818 230.426 234.818 225.533V157.611C234.818 152.718 230.852 148.752 225.959 148.752H158.037Z" fill="white"/>\n\t\t</g>\n\t\t</g>\n\t\t<defs>\n\t\t\t<filter id="filter0_dd" x="-23.002" y="-7.42773" width="429.782" height="429.782" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n\t\t\t\t<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n\t\t\t\t<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n\t\t\t\t<feOffset dy="16"/>\n\t\t\t\t<feGaussianBlur stdDeviation="12"/>\n\t\t\t\t<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>\n\t\t\t\t<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n\t\t\t\t<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\n\t\t\t\t<feOffset/>\n\t\t\t\t<feGaussianBlur stdDeviation="4"/>\n\t\t\t\t<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>\n\t\t\t\t<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>\n\t\t\t\t<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>\n\t\t\t</filter>\n\t\t\t<linearGradient id="paint0_linear" x1="191.889" y1="0.572266" x2="191.889" y2="382.354" gradientUnits="userSpaceOnUse">\n\t\t\t\t<stop stop-color="#2E66F8"/>\n\t\t\t\t<stop offset="1" stop-color="#124ADB"/>\n\t\t\t</linearGradient>\n\t\t\t<clipPath id="clip0">\n\t\t\t\t<rect width="381.782" height="381.782" fill="white" transform="translate(0.998047 0.572266)"/>\n\t\t\t</clipPath>\n\t\t</defs>\n\t</svg>\n'},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},o0o1:function(e,t,n){e.exports=n("ls82")},qPxQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return s}));var r={},o={},i=function(e,t){o[e]=t},u=function(e){var t=function(t,n){Object.assign(this,n),this.name=e,this.message=t||e,this.stack=(new Error).stack};return t.prototype=new Error,r[e]=t,t};u("AccountNameRequired"),u("AccountNotSupported"),u("AmountRequired"),u("BluetoothRequired"),u("BtcUnmatchedApp"),u("CantOpenDevice"),u("CashAddrNotSupported"),u("CurrencyNotSupported"),u("DeviceAppVerifyNotSupported"),u("DeviceGenuineSocketEarlyClose"),u("DeviceNotGenuine"),u("DeviceOnDashboardExpected"),u("DeviceOnDashboardUnexpected"),u("DeviceInOSUExpected"),u("DeviceHalted"),u("DeviceNameInvalid"),u("DeviceSocketFail"),u("DeviceSocketNoBulkStatus"),u("DisconnectedDevice"),u("DisconnectedDeviceDuringOperation"),u("EnpointConfig");var c=u("EthAppPleaseEnableContractData"),l=(u("FeeEstimationFailed"),u("FirmwareNotRecognized"),u("HardResetFail"),u("InvalidXRPTag"),u("InvalidAddress"),u("InvalidAddressBecauseDestinationIsAlsoSource"),u("LatestMCUInstalledError"),u("UnknownMCU"),u("LedgerAPIError"),u("LedgerAPIErrorWithMessage"),u("LedgerAPINotAvailable"),u("ManagerAppAlreadyInstalled"),u("ManagerAppRelyOnBTC"),u("ManagerAppDepInstallRequired"),u("ManagerAppDepUninstallRequired"),u("ManagerDeviceLocked"),u("ManagerFirmwareNotEnoughSpace"),u("ManagerNotEnoughSpace"),u("ManagerUninstallBTCDep"),u("NetworkDown"),u("NoAddressesFound"),u("NotEnoughBalance"),u("NotEnoughBalanceToDelegate"),u("NotEnoughBalanceInParentAccount"),u("NotEnoughSpendableBalance"),u("NotEnoughBalanceBecauseDestinationNotCreated"),u("NoAccessToCamera"),u("NotEnoughGas"),u("NotSupportedLegacyAddress"),u("GasLessThanEstimate"),u("PasswordsDontMatch"),u("PasswordIncorrect"),u("RecommendSubAccountsToEmpty"),u("RecommendUndelegation"),u("TimeoutTagged"),u("UnexpectedBootloader"),u("MCUNotGenuineToDashboard"),u("RecipientRequired"),u("UnavailableTezosOriginatedAccountReceive"),u("UnavailableTezosOriginatedAccountSend"),u("UpdateFetchFileFail"),u("UpdateIncorrectHash"),u("UpdateIncorrectSig"),u("UpdateYourApp"),u("UserRefusedDeviceNameChange"),u("UserRefusedAddress"),u("UserRefusedFirmwareUpdate"),u("UserRefusedAllowManager"),u("UserRefusedOnDevice"),u("TransportOpenUserCancelled"),u("TransportInterfaceNotAvailable"),u("TransportRaceCondition"));function a(e,t){this.name="TransportError",this.message=e,this.stack=(new Error).stack,this.id=t}u("TransportWebUSBGestureRequired"),u("DeviceShouldStayInApp"),u("WebsocketConnectionError"),u("WebsocketConnectionFailed"),u("WrongDeviceForAccount"),u("WrongAppForCurrency"),u("ETHAddressNonEIP"),u("CantScanQRCode"),u("FeeNotLoaded"),u("FeeRequired"),u("FeeTooHigh"),u("SyncError"),u("PairingFailed"),u("GenuineCheckFailed"),u("LedgerAPI4xx"),u("LedgerAPI5xx"),u("FirmwareOrAppUpdateRequired"),u("NoDBPathGiven"),u("DBWrongPassword"),u("DBNotReset"),a.prototype=new Error,i("TransportError",(function(e){return new a(e.message,e.id)}));var _={PIN_REMAINING_ATTEMPTS:25536,INCORRECT_LENGTH:26368,MISSING_CRITICAL_PARAMETER:26624,COMMAND_INCOMPATIBLE_FILE_STRUCTURE:27009,SECURITY_STATUS_NOT_SATISFIED:27010,CONDITIONS_OF_USE_NOT_SATISFIED:27013,INCORRECT_DATA:27264,NOT_ENOUGH_MEMORY_SPACE:27268,REFERENCED_DATA_NOT_FOUND:27272,FILE_ALREADY_EXISTS:27273,INCORRECT_P1_P2:27392,INS_NOT_SUPPORTED:27904,CLA_NOT_SUPPORTED:28160,TECHNICAL_PROBLEM:28416,OK:36864,MEMORY_PROBLEM:37440,NO_EF_SELECTED:37888,INVALID_OFFSET:37890,FILE_NOT_FOUND:37892,INCONSISTENT_FILE:37896,ALGORITHM_NOT_SUPPORTED:38020,INVALID_KCV:38021,CODE_NOT_INITIALIZED:38914,ACCESS_CONDITION_NOT_FULFILLED:38916,CONTRADICTION_SECRET_CODE_STATUS:38920,CONTRADICTION_INVALIDATION:38928,CODE_BLOCKED:38976,MAX_VALUE_REACHED:38992,GP_AUTH_FAILED:25344,LICENSING:28482,HALTED:28586};function s(e){this.name="TransportStatusError";var t=Object.keys(_).find((function(t){return _[t]===e}))||"UNKNOWN_ERROR",n=function(e){switch(e){case 26368:return"Incorrect length";case 26624:return"Missing critical parameter";case 27010:return"Security not satisfied (dongle locked or have invalid access rights)";case 27013:return"Condition of use not satisfied (denied by the user?)";case 27264:return"Invalid data received";case 27392:return"Invalid parameter received"}if(28416<=e&&e<=28671)return"Internal error, please report"}(e)||t,r=e.toString(16);this.message="Ledger device: "+n+" (0x"+r+")",this.stack=(new Error).stack,this.statusCode=e,this.statusText=t}s.prototype=new Error,i("TransportStatusError",(function(e){return new s(e.statusCode)}))},yXPU:function(e,t){function n(e,t,n,r,o,i,u){try{var c=e[i](u),l=c.value}catch(a){return void n(a)}c.done?t(l):Promise.resolve(l).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var u=e.apply(t,r);function c(e){n(u,o,i,c,l,"next",e)}function l(e){n(u,o,i,c,l,"throw",e)}c(void 0)}))}}}}]);