(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{69:function(e,t,a){e.exports=a(80)},78:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(44),l=a.n(r),c=a(8),i=a(28),u=a(23),s=a(63),d=a(64),b=a(18),m={books:[],bookId:"",loading:!1,deleting:!1},O=Object(u.c)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_BOOKS":return Object(b.a)(Object(b.a)({},e),{},{books:[].concat(Object(i.a)(e.books),Object(i.a)(n)),loading:!1});case"ADD_BOOK":return Object(b.a)(Object(b.a)({},e),{},{books:[].concat(Object(i.a)(e.books),[n]),loading:!1});case"REMOVE_BOOK":return Object(b.a)(Object(b.a)({},e),{},{books:Object(i.a)(e.books.filter((function(e){return e.id!==n}))),deleting:!1});case"LOAD_BOOK":return Object(b.a)(Object(b.a)({},e),{},{bookId:n,deleting:!!n,loading:!n});default:return e}}}),f=function(e,t){return O(e,t)},h=(Object(d.createLogger)({collapsed:function(e,t,a){return!a.error}}),[s.a]);var p=function(e){return e},E=(a(78),function(){var e=Object(c.d)((function(e){return e.books})).books;return o.a.createElement("div",{className:"navbar"},o.a.createElement("h1",null,"Ninja Reading List"),o.a.createElement("p",null,"Currently you have ",e.length," books to get through..."))}),g=function(e){var t=e.book,a=Object(c.d)((function(e){return e.books})),r=a.bookId,l=a.deleting,i=Object(c.c)();return o.a.createElement("li",{onClick:function(){i({type:"LOAD_BOOK",payload:t.id}),setTimeout((function(){return i({type:"REMOVE_BOOK",payload:t.id})}),2e3)}},o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"id"},t.id),o.a.createElement("div",{className:"title"},t.title),o.a.createElement("div",{className:"author"},t.author),o.a.createElement("div",null,l&&t.id===r?o.a.createElement("p",null,"Deleting..."):"")))},v=function(){var e=Object(c.d)((function(e){return e.books}),c.b).books,t=Object(c.c)();return Object(n.useEffect)((function(){t({type:"LOAD_BOOK"});var e=sessionStorage.getItem("books");setTimeout((function(){return t({type:"GET_BOOKS",payload:e?JSON.parse(e):[]})}),2e3)}),[t]),Object(n.useEffect)((function(){sessionStorage.setItem("books",JSON.stringify(e))}),[e]),e.length?o.a.createElement("div",{className:"book-list"},o.a.createElement("ul",null,e.map((function(e){return o.a.createElement(g,{book:e,key:e.id})})))):o.a.createElement("div",{className:"empty"},"No books to read. Hello free name :)")},j=a(68),k=a(56),y=a(82),B=function(){var e=Object(c.d)((function(e){return e.books})).loading,t=Object(c.c)(),a=Object(j.a)({initialValues:{title:"",author:""},validationSchema:k.a({title:k.b().required("Required"),author:k.b().required("Required")}),onSubmit:function(e){var n=e.title,o=e.author;t({type:"LOAD_BOOK"}),setTimeout((function(){t({type:"ADD_BOOK",payload:{title:n,author:o,id:Object(y.a)()}}),a.resetForm()}),2e3)}});return o.a.createElement("form",{className:"form",onSubmit:a.handleSubmit},o.a.createElement("label",{htmlFor:"title"},"Title"),o.a.createElement("input",Object.assign({name:"title",type:"text"},a.getFieldProps("title"))),a.touched.title&&a.errors.title?o.a.createElement("div",null,a.errors.title):null,o.a.createElement("label",{htmlFor:"author"},"Author"),o.a.createElement("input",Object.assign({name:"author",type:"text"},a.getFieldProps("author"))),a.touched.author&&a.errors.author?o.a.createElement("div",null,a.errors.author):null,o.a.createElement("input",{type:"submit",value:e?"Loading...":"Submit"}))};var N=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(E,null),o.a.createElement(v,null),o.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=function(e){var t=[u.a.apply(void 0,Object(i.a)(h)),p],a=u.d.apply(void 0,t);return Object(u.e)(f,e,a)}();l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c.a,{store:S},o.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[69,1,2]]]);
//# sourceMappingURL=main.2897decc.chunk.js.map