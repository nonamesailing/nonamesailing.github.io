(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t),r=e.getAttribute("data-src");e.setAttribute("src",r)};ldv=function(t){var e=document.querySelector(t),r=document.querySelector(t+" source"),c=r.getAttribute("data-src");r.setAttribute("src",c),e.play()};!function(){if("Promise"in window&&void 0!==window.performance){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},d={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},d),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},d)}}();

$(function(){
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){var a='data-src';var e=document.querySelector('.un5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0464-1200.jpg':'images/dji_0464-600.jpg');
var a='data-src';var e=document.querySelector('.un6');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0454-1200.jpg':'images/dji_0454-600.jpg');
var a='data-src';var e=document.querySelector('.un7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0473-1200.jpg':'images/dji_0473-600.jpg');
var a='data-src';var e=document.querySelector('.un1 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/_dsc9424-2400-1.jpg':'images/_dsc9424-1200-1.jpg');}else if($(window).width()>=960){var a='data-src';var e=document.querySelector('.un5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0464-960.jpg':'images/dji_0464-480.jpg');
var a='data-src';var e=document.querySelector('.un6');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0454-960.jpg':'images/dji_0454-480.jpg');
var a='data-src';var e=document.querySelector('.un7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0473-960.jpg':'images/dji_0473-480.jpg');
var a='data-src';var e=document.querySelector('.un1 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/_dsc9424-1920-1.jpg':'images/_dsc9424-960-3.jpg');}else if($(window).width()>=768){var a='data-src';var e=document.querySelector('.un5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0464-768.jpg':'images/dji_0464-384.jpg');
var a='data-src';var e=document.querySelector('.un6');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0454-768.jpg':'images/dji_0454-384.jpg');
var a='data-src';var e=document.querySelector('.un7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0473-768.jpg':'images/dji_0473-384.jpg');
var a='data-src';var e=document.querySelector('.un1 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/_dsc9424-1536-1.jpg':'images/_dsc9424-768-1.jpg');}else if($(window).width()>=480){var a='data-src';var e=document.querySelector('.un5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0464-822.jpg':'images/dji_0464-411.jpg');
var a='data-src';var e=document.querySelector('.un6');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0454-776.jpg':'images/dji_0454-388.jpg');
var a='data-src';var e=document.querySelector('.un7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0473-626.jpg':'images/dji_0473-313.jpg');
var a='data-src';var e=document.querySelector('.un1 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/_dsc9424-960-2.jpg':'images/_dsc9424-480-1.jpg');}else{var a='data-src';var e=document.querySelector('.un5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0464-548.jpg':'images/dji_0464-274.jpg');
var a='data-src';var e=document.querySelector('.un6');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0454-518.jpg':'images/dji_0454-259.jpg');
var a='data-src';var e=document.querySelector('.un7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/dji_0473-418.jpg':'images/dji_0473-209.jpg');
var a='data-src';var e=document.querySelector('.un1 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/_dsc9424-640-1.jpg':'images/_dsc9424-320-1.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
!function(){var e=document.querySelectorAll('a[href^="#"]');[].forEach.call(e,function(e){e.addEventListener("click",function(t){var o=0;if(e.hash.length>1){var l=parseFloat(getComputedStyle(document.body).getPropertyValue("zoom"));l||(l=1);var n=document.querySelectorAll('[name="'+e.hash.slice(1)+'"]')[0];o=(n.getBoundingClientRect().top+pageYOffset)*l}if("scrollBehavior"in document.documentElement.style)scroll({top:o,left:0,behavior:"smooth"});else if("requestAnimationFrame"in window){var r=pageYOffset,a=null;requestAnimationFrame(function e(t){a||(a=t);var l=t-a;scrollTo(0,r<o?(o-r)*l/400+r:r-(r-o)*l/400),l<400?requestAnimationFrame(e):scrollTo(0,o)})}else scrollTo(0,o);t.preventDefault()},!1)})}();
$('.un1 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,overflow: 'hidden',fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2500});if(location.hash){var e=location.hash.replace("#",""),o=function(){var t=document.querySelectorAll('[name="'+e+'"]')[0];t&&t.scrollIntoView(),"0px"===window.getComputedStyle(document.body).getPropertyValue("min-width")&&setTimeout(o,100)};o()}

});lfn=function(){ldsrcset('.un51 source');ldsrcset('.un52 source');ldsrcset('.un53 source');};if(document.readyState=="complete"){lfn();}else{$(window).on("load",lfn);}