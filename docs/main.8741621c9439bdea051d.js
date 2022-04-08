(()=>{"use strict";var e,t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};t.d({},{R:()=>U});var r=new Uint8Array(16);function n(){if(!e&&!(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(r)}const o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const a=function(e){return"string"==typeof e&&o.test(e)};for(var i=[],l=0;l<256;++l)i.push((l+256).toString(16).substr(1));const c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(i[e[t+0]]+i[e[t+1]]+i[e[t+2]]+i[e[t+3]]+"-"+i[e[t+4]]+i[e[t+5]]+"-"+i[e[t+6]]+i[e[t+7]]+"-"+i[e[t+8]]+i[e[t+9]]+"-"+i[e[t+10]]+i[e[t+11]]+i[e[t+12]]+i[e[t+13]]+i[e[t+14]]+i[e[t+15]]).toLowerCase();if(!a(r))throw TypeError("Stringified UUID is invalid");return r};const s=function(e,t,r){var o=(e=e||{}).random||(e.rng||n)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){r=r||0;for(var a=0;a<16;++a)t[r+a]=o[a];return t}return c(o)};function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,r)}function f(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,g(e,t,"get"))}function p(e,t,r){return function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}(e,g(e,t,"set"),r),r}function g(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}var m=new WeakMap,h=new WeakMap,y=new WeakMap,v=new WeakMap,b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,m,{writable:!0,value:""}),d(this,h,{writable:!0,value:""}),d(this,y,{writable:!0,value:""}),d(this,v,{writable:!0,value:""}),p(this,m,t),p(this,h,s()),p(this,y,!1),p(this,v,new Date)}var t,r,n;return t=e,n=[{key:"fromJson",value:function(t){var r=t.id,n=t.tarea,o=t.completado,a=t.creado,i=new e(n);return i.setTarea=n,i.setId=r,i.setCompletado=o,i.setCreado=a,i}}],(r=[{key:"getTarea",get:function(){return f(this,m)}},{key:"getCompletado",get:function(){return f(this,y)}},{key:"getCreado",get:function(){return f(this,v)}},{key:"getId",get:function(){return f(this,h)}},{key:"setCompletado",set:function(e){p(this,y,e)}},{key:"setTarea",set:function(e){p(this,m,e)}},{key:"setId",set:function(e){p(this,h,e)}},{key:"setCreado",set:function(e){p(this,v,e)}}])&&u(t.prototype,r),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,t,r){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,r)}function T(e,t,r){return function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}(e,L(e,t,"set"),r),r}function E(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,L(e,t,"get"))}function L(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}var I=new WeakMap,A=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),S(this,I,{writable:!0,value:void 0}),this.cargarLocalStorage()}var t,r,n;return t=e,r=[{key:"nuevoTodo",value:function(e){E(this,I).push(b.fromJson(e)),this.guardarLocalStorage()}},{key:"eliminarTodoOne",value:function(e){T(this,I,E(this,I).filter((function(t){return t.getId!=e}))),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(e){var t=this;E(this,I).find((function(r){r.getId===e&&(r.setCompletado=!r.getCompletado,t.guardarLocalStorage())}))}},{key:"eliminarCompletados",value:function(){T(this,I,E(this,I).filter((function(e){return!e.getCompletado}))),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){console.log("guardar 1",E(this,I));var e=w(E(this,I));for(var t in e)if(e[t]instanceof b){var r=e[t],n=r.getTarea,o=r.getId,a=r.getCompletado,i=r.getCreado;e[t]={tarea:n,id:o,completado:a,creado:i}}console.log("guardar 2",e),localStorage.setItem("#todos",JSON.stringify(e))}},{key:"cargarLocalStorage",value:function(){T(this,I,localStorage.getItem("#todos")?JSON.parse(localStorage.getItem("#todos")):[]),console.log("this 1",E(this,I)),T(this,I,E(this,I).map((function(e){return b.fromJson(e)}))),console.log("this 2",E(this,I))}},{key:"getTodoList",get:function(){return E(this,I)}}],r&&k(t.prototype,r),n&&k(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var M=document.querySelector(".todo-list"),P=document.querySelector(".new-todo"),R=document.querySelector(".clear-completed"),V=document.querySelector(".filters"),q=document.querySelectorAll(".filtro"),J=function(e){var t='\n        <li class="'.concat((e.getCompletado?"completed":"")||(e.completado?"completed":""),'" data-id="').concat(e.getId||e.id,'">\n            <div class="view">\n                <input class="toggle" type="checkbox" ').concat(!!e.getCompletado||e.completado?"checked":"",">\n                <label>").concat(e.getTarea||e.tarea,' </label>\n                <button class="destroy"></button>\n            </div>\n            <input class="edit" value="Create a TodoMVC template">\n        </li>\n    '),r=document.createElement("div");return r.innerHTML=t,M.append(r.firstElementChild),r.firstElementChild};P.addEventListener("keyup",(function(e){if("Enter"===e.code&&P.value.length>0){var t=new b(P.value),r=t.getTarea,n=t.getId,o=t.getCompletado,a=t.getCreado;U.nuevoTodo({tarea:r,id:n,completado:o,creado:a}),J(t),P.value=""}})),M.addEventListener("click",(function(e){console.log(e.target.localName);var t=e.target.localName,r=e.target.parentElement.parentElement,n=r.getAttribute("data-id");t.includes("input")?(U.marcarCompletado(n),r.classList.toggle("completed")):t.includes("button")&&(U.eliminarTodoOne(n),M.removeChild(r)),console.log(U)})),R.addEventListener("click",(function(){U.eliminarCompletados();for(var e=M.children.length-1;e>=0;e--){var t=M.children[e];t.classList.contains("completed")&&M.removeChild(t)}})),V.addEventListener("click",(function(e){console.log(e.target.text);var t=e.target.text;if(t){q.forEach((function(e){return e.classList.remove("selected")})),e.target.classList.add("selected"),console.log(e.target);var r,n=j(M.children);try{for(n.s();!(r=n.n()).done;){var o=r.value;o.classList.remove("hidden");var a=o.classList.contains("completed");switch(t){case"Pendientes":a&&o.classList.add("hidden");break;case"Completados":a||o.classList.add("hidden")}}}catch(e){n.e(e)}finally{n.f()}}}));var U=new A;U.getTodoList.forEach(J),console.log("lista: ",U)})();