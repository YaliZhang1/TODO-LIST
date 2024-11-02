(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>A});var r=t(354),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,'* {\n  margin: 0;\n  padding: 0;\n  font-family: Poppins, sans-serif;\n  box-sizing: border-box;\n  list-style-type: none;\n  button {\n    text-align: center;\n    justify-items: end;\n    background-color: #add8e6;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    padding: 5px 10px;\n    font-size: 16px;\n    cursor: pointer;\n    transition: background-color 0.3s, transform 0.2s; /* 添加过渡效果 */\n  }\n}\nheader {\n  background-color: #7887ab;\n  text-align: center;\n  color: #2f4372;\n  padding: 3rem;\n}\nbody {\n  max-width: 800px;\n  margin: 0 auto;\n  text-align: center;\n  background: linear-gradient(100deg, #2f4372, #4f628e, #7887ab);\n  .pageContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    min-height: 90vh;\n    color: #fff;\n    text-align: center;\n    gap: 50px;\n    #app {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      min-height: 90vh;\n      color: #fff;\n      text-align: center;\n      gap: 10px;\n      ul {\n        list-style-type: none;\n        padding: 10px;\n        margin: 0;\n        max-height: 80vh;\n        /* place-items: center; */\n\n        li {\n          display: grid;\n          grid-template-columns: 10fr repeat(2, 1fr);\n          grid-template-rows: 1fr;\n          grid-column-gap: 0px;\n          grid-row-gap: 0px;\n          gap: 15px;\n          height: 40px;\n          place-items: center;\n          font-size: 16px;\n          span {\n            cursor: pointer;\n          }\n          button {\n            text-align: center;\n            justify-items: end;\n            background-color: #add8e6;\n            color: white;\n            border: none;\n            border-radius: 5px;\n            padding: 10px 20px;\n            font-size: 16px;\n            cursor: pointer;\n            transition: background-color 0.3s, transform 0.2s; /* 添加过渡效果 */\n          }\n          &:hover {\n            transform: translateY(-2px); /* 点击后下降2px */\n            background-color: #90a4c7;\n          }\n          margin-bottom: 10px;\n          input[type="checkbox"] {\n            margin-right: 5px;\n          }\n        }\n      }\n    }\n  }\n}\n\np {\n  white-space: nowrap;\n}\n\n.modal-content {\n  background-color: #f3f3ee;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n  min-width: 800px;\n  gap: 10px;\n  color: #000;\n  #add-task-section {\n    #due-date {\n      background-color: #add8e6;\n    }\n    #create-task {\n      background-color: #add8e6;\n    }\n  }\n  #view-task-section {\n    #task-list {\n      li {\n        display: grid;\n        grid-template-columns: 8fr 2fr 2fr;\n        grid-template-rows: 1fr;\n        grid-column-gap: 10px;\n        grid-row-gap: 10px;\n        margin-top: 15px;\n        p {\n          cursor: pointer;\n          min-width: 80px;\n          height: 30px;\n          font-size: 16px;\n          display: flex;\n          justify-content: center;\n\n          &:hover {\n            transform: translateY(-2px); /* 点击后下降2px */\n            background-color: #add8e6;\n            color: white;\n          }\n        }\n        button {\n          min-width: 80px;\n          max-height: 30px;\n        }\n      }\n    }\n  }\n  #view-task-detail {\n    h4 {\n      display: grid;\n      grid-template-columns: repeat(2, 1fr);\n      grid-template-rows: 1fr;\n      margin-bottom: 40px;\n      background-color: #f3f3ee;\n    }\n    p {\n      display: grid;\n      grid-template-columns: 1fr 6fr 1fr;\n      grid-template-rows: 1fr;\n    }\n  }\n}\n\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n.priorityBox {\n  display: flex;\n  gap: 10px;\n  text-align: center;\n  justify-content: center;\n}\n\n/* \n\n:root {\n  --clr-primary: rgb(54, 112, 199);\n  --clr-light: #f4f4f4;\n  --clr-dark: #333;\n  --clr-warning: rgb(99, 36, 36);\n}\n\n*/\n\n*::before,\n*::after {\n  font-family: inherit;\n  box-sizing: border-box;\n}\n\nform {\n  display: flex;\n}\n\n.btn {\n  cursor: pointer;\n  background: 0;\n  border: 0;\n  padding: 0;\n  color: inherit;\n}\n\n.btn.create {\n  font-size: 1.5rem;\n  font-weight: 900;\n  margin-right: 0.25em;\n  transition: opacity 250ms ease-in;\n}\n\n.btn.create:hover {\n  opacity: 0.7;\n}\n\n.todo-header {\n  padding: var(--spacer);\n  background: #e4e4e4;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n[type="checkbox"] {\n  opacity: 0;\n  position: absolute;\n}\n\n.task label {\n  display: flex-inline;\n  align-items: center;\n  position: relative;\n}\n\n.task {\n  position: relative;\n  margin-bottom: 1.25em;\n}\n\n.task::after {\n  content: "";\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: -0.5em;\n  height: 1px;\n  background: currentColor;\n  opacity: 0.1;\n}\n\n.priority-high {\n  background-color: #ff6961;\n}\n.priority-medium {\n  background-color: #ffc300;\n}\n.priority-low {\n  background-color: #77dd77;\n}\n.priority-none {\n  background-color: #d3d3d3;\n}\nfooter {\n  text-align: center;\n  padding: 15px;\n  background-color: #7887ab;\n  font-size: 14px;\n}\n',"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"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",sourcesContent:['* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: Poppins, sans-serif;\r\n  box-sizing: border-box;\r\n  list-style-type: none;\r\n  button {\r\n    text-align: center;\r\n    justify-items: end;\r\n    background-color: #add8e6;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 5px;\r\n    padding: 5px 10px;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s, transform 0.2s; /* 添加过渡效果 */\r\n  }\r\n}\r\nheader {\r\n  background-color: #7887ab;\r\n  text-align: center;\r\n  color: #2f4372;\r\n  padding: 3rem;\r\n}\r\nbody {\r\n  max-width: 800px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  background: linear-gradient(100deg, #2f4372, #4f628e, #7887ab);\r\n  .pageContainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    min-height: 90vh;\r\n    color: #fff;\r\n    text-align: center;\r\n    gap: 50px;\r\n    #app {\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      min-height: 90vh;\r\n      color: #fff;\r\n      text-align: center;\r\n      gap: 10px;\r\n      ul {\r\n        list-style-type: none;\r\n        padding: 10px;\r\n        margin: 0;\r\n        max-height: 80vh;\r\n        /* place-items: center; */\r\n\r\n        li {\r\n          display: grid;\r\n          grid-template-columns: 10fr repeat(2, 1fr);\r\n          grid-template-rows: 1fr;\r\n          grid-column-gap: 0px;\r\n          grid-row-gap: 0px;\r\n          gap: 15px;\r\n          height: 40px;\r\n          place-items: center;\r\n          font-size: 16px;\r\n          span {\r\n            cursor: pointer;\r\n          }\r\n          button {\r\n            text-align: center;\r\n            justify-items: end;\r\n            background-color: #add8e6;\r\n            color: white;\r\n            border: none;\r\n            border-radius: 5px;\r\n            padding: 10px 20px;\r\n            font-size: 16px;\r\n            cursor: pointer;\r\n            transition: background-color 0.3s, transform 0.2s; /* 添加过渡效果 */\r\n          }\r\n          &:hover {\r\n            transform: translateY(-2px); /* 点击后下降2px */\r\n            background-color: #90a4c7;\r\n          }\r\n          margin-bottom: 10px;\r\n          input[type="checkbox"] {\r\n            margin-right: 5px;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\np {\r\n  white-space: nowrap;\r\n}\r\n\r\n.modal-content {\r\n  background-color: #f3f3ee;\r\n  margin: 15% auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 80%;\r\n  min-width: 800px;\r\n  gap: 10px;\r\n  color: #000;\r\n  #add-task-section {\r\n    #due-date {\r\n      background-color: #add8e6;\r\n    }\r\n    #create-task {\r\n      background-color: #add8e6;\r\n    }\r\n  }\r\n  #view-task-section {\r\n    #task-list {\r\n      li {\r\n        display: grid;\r\n        grid-template-columns: 8fr 2fr 2fr;\r\n        grid-template-rows: 1fr;\r\n        grid-column-gap: 10px;\r\n        grid-row-gap: 10px;\r\n        margin-top: 15px;\r\n        p {\r\n          cursor: pointer;\r\n          min-width: 80px;\r\n          height: 30px;\r\n          font-size: 16px;\r\n          display: flex;\r\n          justify-content: center;\r\n\r\n          &:hover {\r\n            transform: translateY(-2px); /* 点击后下降2px */\r\n            background-color: #add8e6;\r\n            color: white;\r\n          }\r\n        }\r\n        button {\r\n          min-width: 80px;\r\n          max-height: 30px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  #view-task-detail {\r\n    h4 {\r\n      display: grid;\r\n      grid-template-columns: repeat(2, 1fr);\r\n      grid-template-rows: 1fr;\r\n      margin-bottom: 40px;\r\n      background-color: #f3f3ee;\r\n    }\r\n    p {\r\n      display: grid;\r\n      grid-template-columns: 1fr 6fr 1fr;\r\n      grid-template-rows: 1fr;\r\n    }\r\n  }\r\n}\r\n\r\n.close {\r\n  color: #aaa;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n.close:hover,\r\n.close:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n.priorityBox {\r\n  display: flex;\r\n  gap: 10px;\r\n  text-align: center;\r\n  justify-content: center;\r\n}\r\n\r\n/* \r\n\r\n:root {\r\n  --clr-primary: rgb(54, 112, 199);\r\n  --clr-light: #f4f4f4;\r\n  --clr-dark: #333;\r\n  --clr-warning: rgb(99, 36, 36);\r\n}\r\n\r\n*/\r\n\r\n*::before,\r\n*::after {\r\n  font-family: inherit;\r\n  box-sizing: border-box;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n}\r\n\r\n.btn {\r\n  cursor: pointer;\r\n  background: 0;\r\n  border: 0;\r\n  padding: 0;\r\n  color: inherit;\r\n}\r\n\r\n.btn.create {\r\n  font-size: 1.5rem;\r\n  font-weight: 900;\r\n  margin-right: 0.25em;\r\n  transition: opacity 250ms ease-in;\r\n}\r\n\r\n.btn.create:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n.todo-header {\r\n  padding: var(--spacer);\r\n  background: #e4e4e4;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n[type="checkbox"] {\r\n  opacity: 0;\r\n  position: absolute;\r\n}\r\n\r\n.task label {\r\n  display: flex-inline;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.task {\r\n  position: relative;\r\n  margin-bottom: 1.25em;\r\n}\r\n\r\n.task::after {\r\n  content: "";\r\n  position: absolute;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: -0.5em;\r\n  height: 1px;\r\n  background: currentColor;\r\n  opacity: 0.1;\r\n}\r\n\r\n.priority-high {\r\n  background-color: #ff6961;\r\n}\r\n.priority-medium {\r\n  background-color: #ffc300;\r\n}\r\n.priority-low {\r\n  background-color: #77dd77;\r\n}\r\n.priority-none {\r\n  background-color: #d3d3d3;\r\n}\r\nfooter {\r\n  text-align: center;\r\n  padding: 15px;\r\n  background-color: #7887ab;\r\n  font-size: 14px;\r\n}\r\n'],sourceRoot:""}]);const A=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);r&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),e.push(c))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],A=0;A<n.length;A++){var s=n[A],d=r.base?s[0]+r.base:s[0],c=i[d]||0,l="".concat(d," ").concat(c);i[d]=c+1;var p=t(l),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var m=o(u,r);r.byIndex=A,e.splice(A,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var A=t(i[a]);e[A].references--}for(var s=r(n,o),d=0;d<i.length;d++){var c=t(i[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;const r=class{constructor(n,e,t,r){this.item=n,this.onDelete=e,this.onToggle=t,this.onClick=r}render(){const n=document.createElement("li"),e=document.createElement("input");e.type="checkbox",e.checked=this.item.completed,e.addEventListener("change",(()=>{this.onToggle(this.item.id)}));const t=document.createElement("button");t.textContent="Delete",t.addEventListener("click",(()=>{this.onDelete(this.item.id)}));const r=document.createElement("span");return r.textContent=this.item.text,r.addEventListener("click",(()=>this.onClick(this.item.id))),n.appendChild(r),n.appendChild(e),n.appendChild(t),n}},o=class{constructor(n){this.task=n}render(){const n=document.createElement("li");return n.textContent=this.task.title,n.style.margin="30px",n.addEventListener("click",(()=>this.showTaskDetails())),n}showTaskDetails(){const n=document.getElementById("modal");document.getElementById("todo-details").innerHTML=`\n        <strong>Title:</strong> ${this.task.title}<br>\n        <strong>Description:</strong> ${this.task.description}<br>\n        <strong>Priority:</strong> ${this.task.priority}<br>\n        <strong>Due Date:</strong> ${this.task.dueDate}\n      `,n.style.display="block"}},i=class{constructor(){this.tasks={}}addTask(n,e){this.tasks[n]||(this.tasks[n]=[]),this.tasks[n].push(e)}renderTasks(n){const e=document.createElement("ul");return(this.tasks[n]||[]).forEach((n=>{const t=new o(n);e.appendChild(t.render())})),e}},a=n=>{localStorage.setItem("todo-list",JSON.stringify(n))};var A=t(72),s=t.n(A),d=t(825),c=t.n(d),l=t(659),p=t.n(l),u=t(56),m=t.n(u),C=t(540),g=t.n(C),B=t(113),h=t.n(B),f=t(365),E={};E.styleTagTransform=h(),E.setAttributes=m(),E.insert=p().bind(null,"head"),E.domAPI=c(),E.insertStyleElement=g(),s()(f.A,E),f.A&&f.A.locals&&f.A.locals,new class{constructor(n){this.container=n,this.todos=(()=>{const n=localStorage.getItem("todo-list");return n?JSON.parse(n):[]})(),this.taskList=new i,this.render(),this.initAddTodo(),this.setupModal()}initAddTodo(){const n=document.createElement("div");n.style.justifyContent="center",n.style.display="grid",n.style.gridTemplateColumns="8fr 2fr",n.style.gridTemplateRows="2fr",n.style.gap="15px";const e=document.createElement("input"),t=document.createElement("button");t.textContent="Add Todo",t.style.backgroundColor="#add8e6",t.style.color="white",t.style.borderRadius="5px",t.style.padding="10px 20px",t.style.border="none",t.addEventListener("click",(()=>{const n=e.value.trim();n&&(this.addTodo(n),e.value="")})),n.appendChild(e),n.appendChild(t),this.container.appendChild(n)}setupModal(){const n=document.getElementById("modal");document.getElementById("view-task-detail").style.display="none",document.getElementById("close").onclick=()=>{n.style.display="none"},window.onclick=e=>{e.target===n&&(n.style.display="none")}}showAddTaskSection(n){document.getElementById("add-task-section").style.display="block",document.getElementById("create-task").onclick=()=>{const e=document.getElementById("task-title").value,t=document.getElementById("task-desc").value,r=document.querySelector('input[name="priority"]:checked'),o=r?r.value:"Not set",i=document.getElementById("due-date").value,A={id:Date.now(),title:e,description:t,priority:o,dueDate:i},s=this.todos.find((e=>e.id===n));s.tasks=s.tasks||[],s.tasks.push(A),a(this.todos),this.onclickTodo(n),document.getElementById("task-title").value="",document.getElementById("task-desc").value="",r&&(r.checked=!1),document.getElementById("due-date").value="",this.updateTaskList(n)}}updateTaskList(n){const e=document.getElementById("task-list");e.innerHTML="";const t=this.todos.find((e=>e.id===n));t.tasks?.forEach((r=>{const o=document.createElement("li"),i=document.createElement("p");i.textContent=r.title,i.onclick=()=>this.viewTask(r);const A=document.createElement("button");A.textContent=r.completed?"Not Done":"Done",i.style.textDecoration=r.completed?"line-through":"none",A.onclick=()=>{r.completed=!r.completed,this.saveEdit("task-completed",r.id,r.completed),this.updateTaskList(n)};const s=document.createElement("button");s.textContent="Delete",s.disabled=!r.completed,s.onclick=()=>{confirm("Are you sure you want to delete this task?")&&(t.tasks=t.tasks.filter((n=>n.id!==r.id)),a(this.todos),this.updateTaskList(n))},o.appendChild(i),o.appendChild(A),o.appendChild(s),e.appendChild(o)}))}viewTask(n){const e=document.getElementById("task-detail-list");e.innerHTML="";const t=document.createElement("li");t.className=this.getPriorityClass(n.priority);const r=document.createElement("h4");r.innerHTML=`Title: <span id="task-title">${n.title}</span>`;const o=document.createElement("p");o.innerHTML=`Description: <span id="task-desc-edit">${n.description}</span>`;const i=document.createElement("button");i.textContent="Edit",i.onclick=()=>this.editField("task-desc-edit",n.id,n,i),o.appendChild(i);const a=document.createElement("p");a.innerHTML=`Priority: <span id="task-priority">${n.priority}</span>`;const A=document.createElement("button");A.textContent="Edit",A.onclick=()=>this.editField("task-priority",n.id,n,A),a.appendChild(A);const s=document.createElement("p");s.innerHTML=`Due Date: <span id="task-due-date">${n.dueDate}</span>`;const d=document.createElement("button");d.textContent="Edit",d.onclick=()=>this.editField("task-due-date",n.id,n,d),s.appendChild(d),t.appendChild(r),t.appendChild(o),t.appendChild(a),t.appendChild(s),t.style.padding="30px",e.appendChild(t),document.getElementById("view-task-detail").style.display="block"}getPriorityClass(n){switch(n){case"High":return"priority-high";case"Medium":return"priority-medium";case"Low":return"priority-low";default:return"priority-none"}}editField(n,e,t,r){const o=document.getElementById(n),i=o.textContent;let a;"task-priority"===n?(o.innerHTML="",["High","Medium","Low"].forEach((n=>{const e=document.createElement("label"),r=document.createElement("input");r.type="radio",r.name="priority",r.value=n,r.checked=t.priority===n,e.appendChild(r),e.appendChild(document.createTextNode(n)),o.appendChild(e)}))):(a=document.createElement("input"),a.type="task-due-date"===n?"date":"text",a.value=i,o.innerHTML="",o.appendChild(a)),r.style.display="none";const A=document.createElement("button");A.textContent="✔️",A.onclick=()=>{const t="task-priority"===n?document.querySelector('input[name="priority"]:checked')?.value:a.value;this.saveEdit(n,e,t),o.textContent=t,r.style.display="inline",A.remove(),s.remove()};const s=document.createElement("button");s.textContent="❌",s.onclick=()=>{this.cancelEdit(t,n,r,A,s)},o.appendChild(A),o.appendChild(s)}saveEdit(n,e,t){const r=this.todos.find((n=>n.tasks.find((n=>n.id===e)))),o=r.tasks.find((n=>n.id===e));"task-desc-edit"===n?o.description=t:"task-priority"===n?(o.priority=t,document.getElementById("task-detail-list").querySelector("li").className=this.getPriorityClass(t)):"task-due-date"===n?o.dueDate=t:"task-completed"===n&&(o.completed=t),a(this.todos)}cancelEdit(n,e,t,r,o){const i=document.getElementById(e),a="task-desc-edit"===e?n.description:"task-priority"===e?n.priority:n.dueDate;i.innerHTML=a,t.style.display="inline",r.remove(),o.remove()}addTodo(n){const e={id:Date.now(),text:n,completed:!1,tasks:[]};this.todos.push(e),a(this.todos),this.render()}onclickTodo(n){const e=this.todos.find((e=>e.id===n)),t=document.getElementById("modal"),r=document.getElementById("modal-title"),o=document.getElementById("task-list");r.textContent=e.text,o.innerHTML="",this.updateTaskList(e.id),this.showAddTaskSection(e.id),t.style.display="block"}deleteTodo(n){this.todos=this.todos.filter((e=>e.id!==n)),a(this.todos),this.render()}render(){this.container.innerHTML="",this.initAddTodo();const n=document.createElement("ul");this.todos.forEach((e=>{const t=new r(e,(n=>this.deleteTodo(n)),(n=>this.toggleTodo(n)),(n=>this.onclickTodo(n)));n.appendChild(t.render())})),this.container.appendChild(n)}}(document.getElementById("app")).render()})();
//# sourceMappingURL=index.js.map