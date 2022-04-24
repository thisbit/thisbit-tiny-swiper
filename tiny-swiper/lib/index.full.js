!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Swiper=t()}(this,function(){"use strict";function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,i=arguments[t];for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}function h(t,e){void 0===e&&(e=[]),Array.isArray(e)||(e=[e]),e.forEach(function(e){return!t.classList.contains(e)&&t.classList.add(e)})}function c(t,e){void 0===e&&(e=[]),Array.isArray(e)||(e=[e]),e.forEach(function(e){return t.classList.contains(e)&&t.classList.remove(e)})}function p(e,t,n,i){e.addEventListener(t,n,i)}function m(e,t,n){e.removeEventListener(t,n)}function u(e,t,n){return void 0===n&&(n=""),e.setAttribute(t,n),e}function a(t,n,e){return Object.keys(n).forEach(function(e){t.style[e]=n[e]}),e&&getComputedStyle(t),t}var f={direction:"horizontal",touchRatio:1,touchAngle:45,longSwipesRatio:.5,initialSlide:0,loop:!1,freeMode:!1,passiveListeners:!0,resistance:!0,resistanceRatio:.85,speed:300,longSwipesMs:300,spaceBetween:0,slidesPerView:1,centeredSlides:!1,slidePrevClass:"swiper-slide-prev",slideNextClass:"swiper-slide-next",slideActiveClass:"swiper-slide-active",slideClass:"swiper-slide",wrapperClass:"swiper-wrapper",touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchMoveStopPropagation:!1,excludeElements:[],injections:{translate:function(e,t,n,i){a(t.element.$wrapper,{transition:e.isStart?"none":"transform ease "+i+"ms",transform:n.isHorizontal?"translate3d("+e.transforms+"px, 0, 0)":"translate3d(0, "+e.transforms+"px, 0)"})}}};var v="before-init",g="after-init",w="before-slide",r="scroll",y="after-slide",x="before-destroy",E="after-destroy";function S(){var o={};return{on:function(e,t){o[e]?o[e].push(t):o[e]=[t]},off:function(e,t){!o[e]||-1<(t=o[e].indexOf(t))&&o[e].splice(t,1)},emit:function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];o[e]&&o[e].forEach(function(e){return e.apply(void 0,n)})},clear:function(){o={}}}}var o=180/Math.PI;function C(){var i=[];return{getDuration:function(){var e=i[0],t=i[i.length-1];return e?t.time-e.time:0},getOffset:function(){var e=i[0],t=i[i.length-1];return e?{x:t.x-e.x,y:t.y-e.y}:{x:0,y:0}},getLogs:function(){return i},vector:function(){return t=(e=i).length-1,n=e[t],e=e[t-1]||n,t={x:n.x-e.x,y:n.y-e.y},n=n.time-e.time,e=t.x/n||0,n=t.y/n||0,b({},t,{angle:Math.atan2(Math.abs(t.y),Math.abs(t.x))*o,velocityX:e,velocityY:n});var e,t,n},clear:function(){i=[]},push:function(e){i.push(b({time:Date.now()},e))}}}function d(){return(performance||Date).now()}var l=requestAnimationFrame||webkitRequestAnimationFrame||setTimeout,t=cancelAnimationFrame||webkitCancelAnimationFrame||clearTimeout;function n(){var i,e;return{run:function(n){i=void 0===i?d():i,e=l(function(){var e=d(),t=e-i;i=e,n(t)})},stop:function(){i=void 0,t(e)}}}function e(){var e=n();return{run:function t(n){e.run(function(e){t(n),n(e)})},stop:function(){e.stop()}}}function z(e,t){e=e.tracker,t=t.initStatus;e.clear(),t()}function T(r,l,s,c){var i=c.initLayout,o=c.initStatus,u=c.render,d=c.scrollPixel,f=c.slideTo,p=c.getOffsetSteps,m=e();return{preheat:function(e,t){var n=s.tracker;m.stop(),n.clear(),n.push(e),i(t),o(t),s.isStart=!0,u()},move:function(e){var t,n=s.tracker,i=r.touchRatio,o=r.touchAngle,a=r.isHorizontal;s.isStart&&!s.isScrolling&&(n.push(e),t=n.vector(),((e=n.getOffset()).x||e.y)&&(a&&t.angle<o||!a&&90-t.angle<o||s.isTouching?(i=t[a?"x":"y"]*i,s.isTouching=!0,d(i),u()):(s.isScrolling=!0,n.clear())))},stop:function(){var t,e,n,i=s.index,o=s.tracker,a=l.measure;s.isStart&&(s.isStart=!1,r.freeMode?(t=o.vector()[r.isHorizontal?"velocityX":"velocityY"],m.run(function(e){e*=t;t*=.98,Math.abs(e)<.01?(m.stop(),z(s,c)):(d(e),u(0))})):(e=o.getDuration(),n=o.getOffset()[r.isHorizontal?"x":"y"],o=Math.ceil(Math.abs(n)/a.boxSize),a=p(n),e>r.longSwipesMs?f(i+a*(0<n?-1:1)):f(0<n?i-o:i+o),z(s,c)))}}}function $(a,t,r,e){var l=a.touchable,s=["INPUT","SELECT","OPTION","TEXTAREA","BUTTON","VIDEO"],e=T(r,a,t,e),c=e.preheat,n=e.move,i=e.stop;function u(e){e=l?e.changedTouches[0]:e;return{x:e.pageX,y:e.pageY}}function o(e){for(var t=0;t<r.excludeElements.length;t++)if(r.excludeElements[t].contains(e.target))return;var n,i=a.element.$wrapper,o=r.touchStartPreventDefault&&-1===s.indexOf(e.target.nodeName)||r.touchStartForcePreventDefault;!l&&o&&e.preventDefault(),c(u(e),(n=i,o=r.isHorizontal,i=getComputedStyle(n).transform.replace(/[a-z]|\(|\)|\s/g,"").split(",").map(parseFloat),n=[],16===i.length?n=i.slice(12,14):6===i.length&&(n=i.slice(4,6)),n[o?0:1]||0))}function d(e){r.touchMoveStopPropagation&&e.stopPropagation(),n(u(e)),t.isTouching&&!1!==e.cancelable&&e.preventDefault()}function f(){i()}return{attach:function(){var e=a.element.$el;l?(p(e,"touchstart",o,{passive:r.passiveListeners,capture:!1}),p(e,"touchmove",d),p(e,"touchend",f),p(e,"touchcancel",f)):(p(e,"mousedown",o),p(document,"mousemove",d),p(document,"mouseup",f))},detach:function(){var e=a.element.$el;m(e,"touchstart",o),m(e,"touchmove",d),m(e,"touchend",f),m(e,"touchcancel",f),m(e,"mousedown",o),m(document,"mousemove",d),m(document,"mouseup",f)}}}function s(e,t,n){var i=e.$list,o=t.viewSize,a=t.slideSize,r=t.boxSize,e=(l=n).loop?Math.ceil(l.slidesPerView):0,t=e*r,l=-t+(n.centeredSlides?(o-a)/2:0);return{max:l,min:n.spaceBetween+(n.loop?a:o)+l-r*i.length,base:l,expand:e,buffer:t,minIndex:0,maxIndex:i.length-(n.centeredSlides||n.loop?1:Math.ceil(n.slidesPerView))}}function A(e,o){var a={};function t(e){var t,t=(t=o,i=(n=e).$el,n=t.isHorizontal?i.offsetWidth:i.offsetHeight,{boxSize:(i=(n-Math.ceil(t.slidesPerView-1)*t.spaceBetween)/t.slidesPerView)+t.spaceBetween,viewSize:n,slideSize:i}),n=s(e,t,o),i=Boolean("ontouchstart"in window||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints||window.DocumentTouch&&document instanceof DocumentTouch);Object.assign(a,{touchable:i,element:e,measure:t,limitation:n})}return(a.update=t)(e),a}var L="data-shallow-slider",M="data-slider";function P(l,s){function r(){l.element.$wrapper.querySelectorAll("["+L+"]").forEach(function(e){return l.element.$wrapper.removeChild(e)})}function e(){var e,n,i,t,o,a;l.element.$list.forEach(function(e,t){return u(e,M,t)}),r(),s.loop&&(e=l.element,t=l.limitation,n=e.$list,i=e.$wrapper,t=t.expand,o=n.slice(-t).map(function(e){return e.cloneNode(!0)}),a=n.slice(0,t).map(function(e){return e.cloneNode(!0)}),o.forEach(function(e,t){i.appendChild(u(a[t],L)),i.insertBefore(u(o[t],L),n[0])}))}function t(){var e=l.element,t=l.measure,n=e.$wrapper,i={display:"flex",willChange:"transform",flexDirection:s.isHorizontal?"row":"column"},o=((e={})[s.isHorizontal?"width":"height"]=t.slideSize+"px",e[s.isHorizontal?"margin-right":"margin-bottom"]=s.spaceBetween+"px",e);a(n,i),n.querySelectorAll("["+M+"]").forEach(function(e){return a(e,o)})}return{init:function(){e(),t()},render:function(e,t,n,i){var o,a=l.element.$wrapper,r=void 0===t?s.speed:t;s.injections.translate(e,l,s,r),e.isStart||(t=e,e=l.element.$wrapper,o=t.index,e.querySelectorAll("["+M+"]").forEach(function(e){var t=~~e.getAttribute(M);c(e,[s.slidePrevClass,s.slideNextClass,s.slideActiveClass]),t===o&&h(e,s.slideActiveClass),t==o-1&&h(e,s.slidePrevClass),t===o+1&&h(e,s.slideNextClass)})),i&&getComputedStyle(a).transform,n&&setTimeout(n,r)},destroy:function(){var e=l.element,t=e.$list,n=e.$wrapper,i=s.isHorizontal?"margin-right":"margin-bottom";["display","will-change","flex-direction"].forEach(function(e){n.style.removeProperty(e)}),t.forEach(function(e){return e.style.removeProperty(i)}),r()},updateSize:t}}function k(e,t){var n=e-t.max,t=e-t.min;return 0<n?n:t<0?t:0}function O(f,p,m,i,v){function h(e){var t=f.measure;return Math.ceil(Math.abs(e)/t.boxSize-m.longSwipesRatio)}function g(e,t,n){i.render(p,e,t,n)}function x(e){var t,n=f.limitation,i=n.min,o=n.max,n=o-i+(m.loop?f.measure.boxSize:0),i=n+1;p.transforms=e,m.loop?(t=(o-e)%i/n,p.progress=t<0?1+t:1<t?t-1:t):(t=(o-e)/n,p.progress=t<0?0:1<t?1:t),v.emit(r,b({},p))}function e(e,t){var n,i,o,a,r,l=f.measure,s=f.limitation,c=s.maxIndex-s.minIndex+1,u=m.loop?(e%c+c)%c:e>s.maxIndex?s.maxIndex:e<s.minIndex?s.minIndex:e,d=-u*l.boxSize+s.base;0!==h(d-p.transforms)&&m.loop&&(n=k(p.transforms,s),i=u-p.index,o=p.index,a=u,r=i,e=(c=s).maxIndex,o=(0<r?1:-1)*(c.minIndex-e-1)+a-o,(r=Math.abs(r)>Math.abs(o)?o:r)===i||n?p.index===u&&x(0<n?s.min-l.boxSize+n:s.max+l.boxSize+n):x(r<0?s.min-l.boxSize:s.max+l.boxSize),g(0,void 0,!0)),v.emit(w,p.index,p,u),p.index=u,x(d),g(t,function(){v.emit(y,u,p)})}return{update:function(){e(p.index,0),i.updateSize()},render:g,transform:x,slideTo:e,scrollPixel:function(e){var t,n=p.transforms,i=f.measure,o=f.limitation,a=(t=Number(e.toExponential().split("e")[1]))<=0?Math.pow(10,-(t-1)):1,r=n;m.resistance&&!m.loop&&(0<e&&n>=o.max?e-=Math.pow(e*a,m.resistanceRatio)/a:e<0&&n<=o.min&&(e+=Math.pow(-e*a,m.resistanceRatio)/a)),r+=e,m.loop&&(t=p.tracker.vector(),a=m.isHorizontal?t.velocityX:t.velocityY,(e=k(n,o))&&(t=n,n=o,0<(a=a)&&t>n.max||a<0&&t<n.min)&&(r=0<e?o.min-i.boxSize+e:o.max+i.boxSize+e)),x(r)},initStatus:function(e){void 0===e&&(e=0),p.startTransform=e,p.isStart=!1,p.isScrolling=!1,p.isTouching=!1},initLayout:function(e){x(e)},getOffsetSteps:h}}function D(e,t){var n="string"==typeof e?document.body.querySelector(e):e,e=n.querySelector("."+t.wrapperClass),t=[].slice.call(n.getElementsByClassName(t.slideClass));return{$el:n,$wrapper:e,$list:t=t.filter(function(e){return null===e.getAttribute("data-shallow-slider")})}}function B(e,t){var n=(r=b({},f,r=t),b({},r,{isHorizontal:"horizontal"===r.direction})),i=S(),o=A(D(e,n),n),a={tracker:C(),index:0,startTransform:0,isStart:!1,isScrolling:!1,isTouching:!1,transforms:0,progress:0},t=i.on,r=i.off,l=i.emit,s={on:t,off:r,env:o,state:a,options:n};(n.plugins||B.plugins||[]).forEach(function(e){return e(s,n)}),l(v,s);var c=P(o,n),u=O(o,a,n,c,i),d=$(o,a,n,u);return a=u.slideTo,Object.assign(s,{update:function(){c.destroy(),o.update(D(e,n)),c.init(),u.update()},destroy:function(){l(x,s),d.detach(),c.destroy(),l(E,s),i.clear()},slideTo:a,updateSize:function(){o.update(D(e,n)),u.update()}}),c.init(),d.attach(),a(n.initialSlide,0),l(g,s),s}var I="ArrowUp",H="ArrowRight",N="ArrowDown",j="ArrowLeft";function R(e){var t=function e(t){if(!t)return!1;var n=getComputedStyle(t);return"hidden"!==n.visibility&&"none"!==n.display&&(!t.parentElement||1!==t.parentElement.nodeType||e(t.parentElement))}(e),e=e.getBoundingClientRect();return 0<=e.top&&e.bottom<=window.innerHeight&&0<=e.left&&e.right<=window.innerWidth&&t}return(B.use=function(e){B.plugins=e})([function(o,e){var t=Boolean(e.lazyload),a=Object.assign({loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"},e.lazyload),i={load:function(e){var t,n,e=o.env.element.$list[e];function i(e){e.removeAttribute("data-src"),h(e,[a.loadedClass]),c(e,[a.loadingClass]),e.onload=null,e.onerror=null,e.isLoaded=!0,t.every(function(e){return e.isLoaded})&&n.forEach(function(e){e.parentElement.removeChild(e)})}e&&(t=[].slice.call(e.getElementsByClassName(a.elementClass)),n=[].slice.call(e.getElementsByClassName(a.preloaderClass)),t.forEach(function(e){var t;e.hasAttribute("data-src")&&(t=e.getAttribute("data-src"),h(e,[a.loadingClass]),c(e,[a.loadedClass]),e.src=t,e.onload=function(){return i(e)},e.onerror=function(){return i(e)})}))},loadRange:function(e,t){if(i.load(e),a.loadPrevNext&&1<=t)for(var n=1;n<=t;n++)i.load(e+n),i.load(e-n)}};t&&(o.on("before-init",function(){o.lazyload=i}),a.loadOnTransitionStart?o.on("before-slide",function(e,t,n){i.loadRange(n,a.loadPrevNextAmount)}):o.on("after-slide",function(e){i.loadRange(e,a.loadPrevNextAmount)}),o.on("after-destroy",function(){o.lazyload&&delete o.lazyload}))},function(f,p){var e=Boolean(p.pagination),m=Object.assign({clickable:!1,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",clickableClass:"swiper-pagination-clickable"},p.pagination),v={$pageList:[],$pagination:null};e&&(f.on("after-init",function(){var n=m.bulletClass,e=m.bulletActiveClass,t=m.clickableClass,i=m.renderBullet,o=f.env.element.$list,a="string"==typeof m.el?document.body.querySelector(m.el):m.el,r=[],l=document.createDocumentFragment(),s=o.length-Math.ceil(p.slidesPerView)+1;p.excludeElements.push(a),v.$pagination=a,v.$pageList=r;for(var c,u=0;u<s;u++){var d=i?(c=i(u,n),d=void 0,(d=document.createElement("div")).innerHTML=c,d.firstChild):document.createElement("div");h(d,u===f.state.index?[n,e]:n),r.push(d),l.appendChild(d)}a.appendChild(l),m.clickable&&(h(a,t),a.addEventListener("click",function(e){var t=e.target;t&&(e.preventDefault(),t=t.closest("."+n),f.slideTo(r.indexOf(t)),e.stopPropagation())}))}),f.on("after-destroy",function(){e&&(v.$pagination.innerHTML="",v.$pageList=[],v.$pagination=null)}),f.on("after-slide",function(n){var i=m.bulletActiveClass;v.$pageList&&v.$pageList.forEach(function(e,t){(t===n?h:c)(e,i)})}))},function(t,n){var e=Boolean(n.keyboard),i=Object.assign({enabled:!0,onlyInViewport:!0},n.keyboard),o={enable:function(){i.enabled=!0},disable:function(){i.enabled=!1},onKeyDown:function(e){e=e.key;i.onlyInViewport&&!R(t.env.element.$el)||!i.enabled||(n.isHorizontal?e===j?t.slideTo(t.state.index-1):e===H&&t.slideTo(t.state.index+1):e===N?t.slideTo(t.state.index-1):e===I&&t.slideTo(t.state.index+1))}};e&&(t.on("before-init",function(){t.keyboard=o,p(window,"keydown",o.onKeyDown)}),t.on("after-destroy",function(){t.keyboard&&(m(window,"keydown",o.onKeyDown),delete t.keyboard)}))},function(o,a){function t(e){var t,n,i=Math.abs(e.deltaX)>Math.abs(e.deltaY);a.isHorizontal===i&&(t=i?e.deltaX:e.deltaY,n=o.state.index,0<Math.abs(t)-Math.abs(l.wheelDelta)&&!l.wheeling&&Math.abs(t)>=r.sensitivity&&(i=r.invert?1:-1,o.slideTo(0<t?n-i:n+i),l.wheeling=!0,l.wheelingTimer=setTimeout(function(){l.wheeling=!1},r.interval)),l.wheelDelta=t,e.preventDefault(),e.stopPropagation())}var n=Boolean(a.mousewheel),r=Object.assign({invert:!1,sensitivity:1,interval:400},a.mousewheel),i={$el:null},l={wheeling:!1,wheelDelta:0,wheelingTimer:0};o.on("after-init",function(){var e;n&&(e=o.env.element.$el,p(i.$el=e,"wheel",t))}),o.on("after-destroy",function(){n&&(m(i.$el,"wheel",t),delete i.$el)})},function(a,e){function i(e){t(e.target,"next")}function o(e){t(e.target,"prev")}var r=Boolean(e.navigation),l={nextEl:null,prevEl:null},s=Object.assign({disabledClass:"swiper-button-disabled"},e.navigation),t=function(e,t){n(e)&&!a.options.loop||(e=a.state.index,"next"===t&&a.slideTo(e+1),"prev"===t&&a.slideTo(e-1))},n=function(e){return e.classList.contains(s.disabledClass)};a.on("before-slide",function(e,t,n){var i,o;a.options.loop||(i=n,o=a.env.limitation,n=o.minIndex,o=o.maxIndex,l&&l.prevEl&&l.nextEl&&(l.nextEl.classList.contains(s.disabledClass)&&n<=i&&l.nextEl.classList.remove(s.disabledClass),l.prevEl.classList.contains(s.disabledClass)&&i<=o&&l.prevEl.classList.remove(s.disabledClass),i===n&&l.prevEl.classList.add(s.disabledClass),i===o&&l.nextEl.classList.add(s.disabledClass)))}),a.on("after-init",function(){var e,t,n;r&&(l.nextEl="string"==typeof s.nextEl?document.body.querySelector(s.nextEl):s.nextEl,l.prevEl="string"==typeof s.prevEl?document.body.querySelector(s.prevEl):s.prevEl,a.options.loop||(e=a.state.index,t=a.env.element.$list,n=a.env.limitation.minIndex,e===n&&l.prevEl&&l.prevEl.classList.add(s.disabledClass),t.length===n&&l.nextEl&&l.nextEl.classList.add(s.disabledClass)),p(l.nextEl,"click",i),p(l.prevEl,"click",o))}),a.on("after-destroy",function(){l&&l.prevEl&&l.nextEl&&(m(l.nextEl,"click",i),m(l.prevEl,"click",o),delete l.nextEl,delete l.prevEl)})},function(o,a){var e,t=Boolean(a.breakpoints),n={update:function(){if(a.breakpoints){for(var e=0,t=Object.entries(a.breakpoints);e<t.length;e++){var n=t[e],i=n[0],n=n[1];"window"===a.breakpointsBase?window.matchMedia("(min-width: "+i+"px)").matches&&(o.options=Object.assign(o.options,n)):+i<=o.env.element.$el.offsetWidth&&(o.options=Object.assign(o.options,n))}l(o.updateSize)}}};t&&(e=function(o,a,r){void 0===a&&(a=200),void 0===r&&(r={trailing:!0});var l,s,c=0;return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=d();return a<=i-c&&(c=i,s=void 0,l=o.apply(void 0,t)),r.trailing&&(s&&clearTimeout(s),s=setTimeout(function(){return o.apply(void 0,t)},a)),l}}(n.update,200),o.on(g,function(){o.breakpoints=n,window.addEventListener("resize",e,{passive:!0})}),o.on(x,function(){window.removeEventListener("resize",e)}))}]),B});
