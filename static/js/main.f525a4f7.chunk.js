(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(3),r=n.n(a),i=(n(9),n(4)),l=(n(10),n(0)),o=function(e){return Object(l.jsx)("nav",{className:"menu",children:Object(l.jsx)("ul",{className:"nav-bar",children:e.curentPages.map((function(t){return Object(l.jsx)("li",{className:"list-nav",children:Object(l.jsxs)("a",{href:"#top",onClick:function(){return function(t){var n=new XMLHttpRequest;n.open("GET","https://rickandmortyapi.com/api/character/?page=".concat(t),!0),n.send(),n.onload=function(){if(200===n.status){var t=JSON.parse(n.responseText).results;e.setData(t)}}}(t)},children:[" ",t,"  "]})},t)}))})})},d=function(e){return Object(l.jsxs)("li",{className:"list",children:[Object(l.jsxs)("ul",{className:"list--style",children:[Object(l.jsx)("li",{className:"list--header",children:e.d.name}),Object(l.jsx)("li",{className:"Alive"===e.d.status?"alive":"dead",children:e.d.status}),Object(l.jsx)("li",{children:e.d.species}),Object(l.jsx)("li",{children:e.d.type?e.d.type:"no type"}),Object(l.jsx)("li",{children:e.d.gender}),Object(l.jsxs)("li",{children:[e.d.created.slice(0,10)," ",e.d.created.slice(11,16)]})]}),Object(l.jsx)("img",{className:"image",src:e.d.image,alt:e.d.name},e.d.image)]},e.id)},u=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),r=Object(i.a)(a,2),u=r[0],j=r[1],h=Array.from({length:34},(function(e,t){return t+1}));return Object(c.useEffect)((function(){var e=new XMLHttpRequest;e.open("GET","https://rickandmortyapi.com/api/character",!0),e.send(),e.onload=function(){if(200===e.status){var t=JSON.parse(e.responseText);console.log(t);var n=t.results;s(n)}}}),[]),Object(l.jsxs)("main",{className:"main",children:[Object(l.jsx)("div",{className:"serch",id:"top",children:Object(l.jsx)("input",{className:"serch-input",type:"text",placeholder:"Choose a character:",onChange:function(e){j(e.target.value)}})}),Object(l.jsx)("ul",{className:"conteiner",children:n.filter((function(e){return""===u||e.name.toLowerCase().includes(u.toLowerCase())?e:void 0})).map((function(e,t){return Object(l.jsx)(d,{id:t,d:e},t)}))}),Object(l.jsx)(o,{curentPages:h,setData:s})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),j()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.f525a4f7.chunk.js.map