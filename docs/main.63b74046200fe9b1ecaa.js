(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.d({},{L:()=>y});var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cargarLocalStorage()}var r,o,a;return r=e,(o=[{key:"nuevoTodo",value:function(e){this.todos.push(e),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e})),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(e){var r,n=t(this.todos);try{for(n.s();!(r=n.n()).done;){var o=r.value;if(o.id==e){o.completado=!0,this.guardarLocalStorage();break}}}catch(e){n.e(e)}finally{n.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter((function(e){return e.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){localStorage.getItem("todo")?this.todos=JSON.parse(localStorage.getItem("todo")):this.todo=[]}}])&&n(r.prototype,o),a&&n(r,a),Object.defineProperty(r,"prototype",{writable:!1}),e}();function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tarea=t,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}var t,r,n;return t=e,n=[{key:"fromJson",value:function(t){var r=t.id,n=t.tarea,o=t.completado,a=t.creado,i=new e(n);return i.id=r,i.completado=o,i.creado=a,i}}],(r=[{key:"imprimirClase",value:function(){console.log("impresión")}}])&&a(t.prototype,r),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=document.querySelector(".todo-list"),s=document.querySelector(".new-todo"),d=document.querySelector(".clear-completed"),f=document.querySelector(".filters"),m=document.querySelectorAll(".filtro"),v=function(e){var t='<li class="'.concat(e.completado?"completed":"",'" data-id="').concat(e.id,'">\n                        <div class="view">\n                            <input class="toggle" type="checkbox" ').concat(e.completado?"checked":"",">\n                            <label>").concat(e.tarea,'</label>\n                            <button class="destroy"></button>\n                        </div>\n                        <input class="edit" value="Create a TodoMVC template">\n                    </li>'),r=document.createElement("div");return r.innerHTML=t,u.append(r.firstElementChild),r.firstElementChild};s.addEventListener("keyup",(function(e){if(13==e.keyCode&&s.value.length>0){console.log(s.value);var t=new i(s.value);y.nuevoTodo(t),v(t),s.value=""}})),u.addEventListener("click",(function(e){var t=e.target.localName,r=e.target.parentElement.parentElement,n=r.getAttribute("data-id");t.includes("input")?(y.marcarCompletado(n),r.classList.toggle("completed")):t.includes("button")&&(y.eliminarTodo(n),u.removeChild(r)),console.log(y)})),d.addEventListener("click",(function(){y.eliminarCompletados();for(var e=u.children.length-1;e>=0;e--){var t=u.children[e];t.classList.contains("completed")&&u.removeChild(t)}})),f.addEventListener("click",(function(e){var t=e.target.text;if(console.log(t),t){m.forEach((function(e){return e.classList.remove("selected")})),e.target.classList.add("selected");var r,n=l(u.children);try{for(n.s();!(r=n.n()).done;){var o=r.value;o.classList.remove("hidden");var a=o.classList.contains("completed");switch(t){case"Pendientes":a&&o.classList.add("hidden");break;case"Completados":a||o.classList.add("hidden")}}}catch(e){n.e(e)}finally{n.f()}}}));var y=new o;y.todos.forEach((function(e){return v(e)}))})();