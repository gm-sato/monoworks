(()=>{var e={791:()=>{function e(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=o(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}function o(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var r=document.querySelector("header").offsetHeight;document.querySelectorAll('a[href^="#"]').forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var o=e.getAttribute("href"),n=document.getElementById(o.replace("#","")).getBoundingClientRect().top+window.pageYOffset-r;window.scrollTo({top:n,behavior:"smooth"})}))}));var a=document.body;document.querySelectorAll(".js-modal-open").forEach((function(e){e.onclick=function(){a.style.top="-".concat(window.scrollY,"px"),a.classList.add("backgroundfix");var t=e.getAttribute("data-modal");document.getElementById(t).style.display="block",modalbg.classList.add("trpg--is_open")}})),document.querySelectorAll(".js-modal-close").forEach((function(e){e.onclick=function(){a.classList.remove("backgroundfix"),e.closest(".js-modal").style.display="none";var t=a.style.top.replace("px","").replace("-","");window.scrollTo(0,t)}})),window.onclick=function(e){".js-modal"===e.target.className&&(e.target.style.display="none",bodyFixedOff())},new Swiper(".movie_a",{loop:!0,slidesPerView:2,breakpoints:{820:{slidesPerView:3}},speed:1e4,allowTouchMove:!1,autoplay:{delay:0,disableOnInteraction:!1}}),new Swiper(".movie_b",{loop:!0,slidesPerView:2,breakpoints:{820:{slidesPerView:3}},speed:1e4,allowTouchMove:!1,autoplay:{delay:0,disableOnInteraction:!1,reverseDirection:!0}}),new Swiper(".log_slider",{scrollbar:{el:".swiper-scrollbar",hide:!1,draggable:!0},loop:!1,slidesPerView:"auto"}),new Swiper(".chara_slide",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:"#pagination",clickable:!0,renderBullet:function(e,t){return'<p class="'+t+'"><span>'+["001","002","003"][e]+"</span></p>"}},slidesPerView:1,loop:!1});var i=document.querySelectorAll(".chara-box");function l(){$(".fade_trigger").each((function(){var e=$(this).offset().top;$(window).scrollTop()>=e-$(window).height()?$((function(){$(".fade").each((function(e){$(this).delay(200*e).queue((function(){$(this).addClass("active")}))}))})):$(this).removeClass("fade")}))}function c(){$(".fade_up_trigger").each((function(){var e=$(this).offset().top;$(window).scrollTop()>=e-$(window).height()?$(this).addClass("fade_up"):$(this).removeClass("fade_up")}))}window.addEventListener("scroll",(function(){var e,o=window.scrollY,n=window.innerHeight,r=t(i);try{for(r.s();!(e=r.n()).done;){var a=e.value;o>a.getBoundingClientRect().top+o-n&&a.classList.add("is-animated")}}catch(e){r.e(e)}finally{r.f()}})),window.addEventListener("load",(function(){var e=document,o=e.querySelectorAll(".js-item"),n=[];for(var r in o)for(var a=0;a<o.length;a++)a<8?o[a].classList.add("accept"):o[a].classList.add("hidden");var i,l=t(e.querySelectorAll(".js-item-term"));try{var c=function(){var e=i.value;e.addEventListener("click",(function(){e.classList.toggle("active");var r=e.getAttribute("data-term"),a=n.indexOf(r);-1!==a?n.splice(a,1):n.push(r),console.log("terms: ",n);var i,l=t(o);try{var c=function(){var e=i.value;for(var t in o)for(var r=0;r<o.length;r++)e.classList.remove("accept"),e.classList.remove("hidden");if(0===n.length&&e.classList.contains("fadeOut"))return e.classList.remove("fadeOut"),"continue";var a=e.getAttribute("data-tag").replace(/\s+/g,"").split(","),l=n.filter((function(e){return-1!==a.indexOf(e)}));l.length===n.length||e.classList.contains("fadeOut")?l.length===n.length&&e.classList.contains("fadeOut")&&e.classList.remove("fadeOut"):e.classList.add("fadeOut")};for(l.s();!(i=l.n()).done;)c()}catch(e){l.e(e)}finally{l.f()}var s=document.querySelectorAll(".chara-box:not(.fadeOut)");for(var d in s){console.log(s[d]);for(var u=0;u<s.length;u++)u<8?s[u].classList.add("accept"):s[u].classList.add("hidden")}}))};for(l.s();!(i=l.n()).done;)c()}catch(e){l.e(e)}finally{l.f()}})),$(window).on("load",(function(){l(),c()})),$(window).scroll((function(){l(),c()})),window.addEventListener("DOMContentLoaded",(function(){a.classList.remove("fadeout")}));var s=[].concat(e(document.querySelectorAll('a:not([href*="#"]):not([target])')),e(document.querySelectorAll(".jsPageTransition"))),d=window.location.hostname;s.forEach((function(e){e.addEventListener("click",(function(t){if(!(t.ctrlKey&&!t.metaKey||!t.ctrlKey&&t.metaKey)){t.preventDefault(),t.stopPropagation();var o=e.getAttribute("href");""!==o&&o.indexOf(d)&&function(e){a.classList.add("fadeout"),setTimeout((function(){window.location=e}),800)}(o)}}),!1)})),window.addEventListener("pageshow",(function(e){e.persisted&&window.location.reload()}));var u,f=document.querySelectorAll(".mwCharacter-list__wrap-box");function v(){for(var e=document.getElementById("searchbox").value,t=0;t<f.length;t++)f[t].textContent.toLowerCase().includes(e.toLowerCase())?f[t].classList.remove("is-hidden"):f[t].classList.add("is-hidden")}document.getElementById("searchbox").addEventListener("keyup",(function(){clearTimeout(u),u=setTimeout(v,500)}))},438:()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,o){for(var n=0;n<o.length;n++){var r=o[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,a=function(t,o){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===e(a)?a:String(a)),r)}var a}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.target=t,this.videoId=t.dataset.url.slice(-11),this.loadIframePlayerAPI(),this.open(),this.close()}var o,n;return o=e,(n=[{key:"loadIframePlayerAPI",value:function(){var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}},{key:"onYouTubeIframeAPIReady",value:function(){new YT.Player("player",{videoId:this.videoId,playerVars:{autoplay:1,controls:1}})}},{key:"remakePlayerElement",value:function(){var e=document.querySelector("#modal-video");e.removeChild(e.firstElementChild);var t=document.createElement("div");t.id="player",e.appendChild(t)}},{key:"open",value:function(){var e=this;this.target.addEventListener("click",(function(t){body.style.top="-".concat(window.scrollY,"px"),body.classList.add("backgroundfix"),e.onYouTubeIframeAPIReady(),document.querySelector("#modal-video").classList.add("open"),document.querySelector("#modal-video").classList.remove("close")}))}},{key:"close",value:function(){var e=this;document.querySelector(".js-modal-video-close").addEventListener("click",(function(t){body.classList.remove("backgroundfix"),document.querySelector("#modal-video").classList.add("close"),document.querySelector("#modal-video").classList.remove("open"),e.remakePlayerElement();var o=body.style.top.replace("px","").replace("-","");window.scrollTo(0,o)}))}}])&&t(o.prototype,n),Object.defineProperty(o,"prototype",{writable:!1}),e}();document.addEventListener("DOMContentLoaded",(function(e){document.querySelectorAll(".js-modal-video-open").forEach((function(e){new o(e)}))}))}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(791),o(438)})()})();