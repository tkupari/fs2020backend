(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),c=t.n(o),u=(t(20),t(4)),i=t(2),l=t(3),s=t.n(l),f="http://localhost:3001/api/persons",m=function(){return s.a.get(f).then((function(e){return e.data}))},d=function(e){return s.a.post(f,e).then((function(e){return e.data}))},h=function(e,n){return s.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){return s.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},b=function(e){var n=e.message,t=e.messageClass;return null===n?null:r.a.createElement("div",{className:"message "+t},n)},v=function(e){var n=e.filter,t=e.setFilter;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:function(e){t(e.target.value)}}))},E=function(e){var n=e.persons,t=e.setPersons,o=e.notify,c=Object(a.useState)(""),l=Object(i.a)(c,2),s=l[0],f=l[1],m=Object(a.useState)(""),p=Object(i.a)(m,2),b=p[0],v=p[1];return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),s.length>0){var a=n.find((function(e){return e.name===s}));if(a){if(window.confirm("".concat(s," is already added to phonebook. Do you want to update the phone number?"))){var r=Object(u.a)(Object(u.a)({},a),{},{number:b});h(a.id,r).then((function(e){t(n.map((function(n){return n.id!==a.id?n:e}))),o("Updated ".concat(e.name))}))}}else d({name:s,number:b}).then((function(e){t(n.concat(e)),o("Added ".concat(e.name))}));f(""),v("")}}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:s,onChange:function(e){f(e.target.value)}}),"number: ",r.a.createElement("input",{value:b,onChange:function(e){v(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},g=function(e){var n=e.person,t=e.deleteperson;return r.a.createElement("div",null,n.name," ",n.number,r.a.createElement("button",{onClick:function(){return t(n)}},"delete"))},j=function(e){var n=e.persons,t=e.filter,a=e.setpersons,o=e.notify,c=e.error,u=function(e){p(e.id).then((function(t){o("".concat(e.name," deleted")),a(n.filter((function(n){return n.id!==e.id})))})).catch((function(t){c("".concat(e.name," has already been deleted from server")),a(n.filter((function(n){return n.id!==e.id})))}))},i=t.length>0?n.filter((function(e){return e.name.toLowerCase().includes(t)})):n;return r.a.createElement("div",null,i.map((function(e){return r.a.createElement(g,{key:e.name,person:e,deleteperson:u})})))},w=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),u=Object(i.a)(c,2),l=u[0],s=u[1],f=Object(a.useState)(null),d=Object(i.a)(f,2),h=d[0],p=d[1],g=Object(a.useState)("info"),w=Object(i.a)(g,2),O=w[0],y=w[1];Object(a.useEffect)((function(){m().then((function(e){return o(e)}))}),[]);var k=function(e,n){p(e),y(n),setTimeout((function(){p(null)}),2e3)},S=function(e){k(e,"info")};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(b,{message:h,messageClass:O}),r.a.createElement(v,{filter:l,setFilter:s}),r.a.createElement("h2",null,"add a new"),r.a.createElement(E,{persons:t,setPersons:o,notify:S}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(j,{persons:t,filter:l,setpersons:o,notify:S,error:function(e){k(e,"error")}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.31bcda6b.chunk.js.map