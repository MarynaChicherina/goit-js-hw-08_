function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,v=Math.min,p=function(){return l.Date.now()};function m(e,t,n){var i,r,o,u,f,a,c=0,l=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(h,t),l?g(e):u}function T(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-c>=o}function h(){var e=p();if(T(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-a);return d?v(n,o-(e-c)):n}(e))}function w(e){return f=void 0,m&&i?g(e):(i=r=void 0,u)}function x(){var e=p(),n=T(e);if(i=arguments,r=this,a=e,n){if(void 0===f)return j(a);if(d)return f=setTimeout(h,t),g(a)}return void 0===f&&(f=setTimeout(h,t)),u}return t=b(t)||0,y(n)&&(l=!!n.leading,o=(d="maxWait"in n)?s(b(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=r=f=void 0},x.flush=function(){return void 0===f?u:w(p())},x}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),m(e,t,{leading:i,maxWait:t,trailing:r})};const g=document.querySelector(".feedback-form"),j=document.querySelector("input"),T=document.querySelector("textarea"),h={};g.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(h)})),g.addEventListener("input",e(t)((function(e){h.email=j.value,h.message=T.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500));
//# sourceMappingURL=03-feedback.2f87385d.js.map
