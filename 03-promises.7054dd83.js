!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("ejkSG");function a(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var o=new FormData(n.target),t=parseInt(o.get("delay"),10),i=parseInt(o.get("step"),10),c=parseInt(o.get("amount"),10),l=0;l<c;l++)a(l+1,t+l*i).then((function(n){var o=n.position,t=n.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms")),e(r).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(t,"ms")),e(r).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}))}))}();
//# sourceMappingURL=03-promises.7054dd83.js.map