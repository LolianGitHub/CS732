(this["webpackJsonpto-do-list-app"]=this["webpackJsonpto-do-list-app"]||[]).push([[0],{12:function(e,t,n){e.exports={nav:"nav-bar_nav__uTaNY",before:"nav-bar_before__hn69u",links:"nav-bar_links__3-ZLn",after:"nav-bar_after__1Ot1d",activeLink:"nav-bar_activeLink__20r6h"}},26:function(e,t,n){e.exports={card:"card_card__1WiCg",cardText:"card_cardText__aE9RK"}},31:function(e,t,n){e.exports={header:"page-header_header__2pABr"}},32:function(e,t,n){e.exports={container:"app_container__10y0P"}},34:function(e,t,n){e.exports={dialogBackground:"dialog_dialogBackground__3ysBd"}},35:function(e,t,n){e.exports={table:"table_table__3HrdH"}},37:function(e,t,n){e.exports={addTodoForm:"to-do-page_addTodoForm__zrBkE"}},43:function(e,t,n){e.exports=n(57)},48:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),l=n.n(o),c=(n(48),n(18)),i=n(19),u=n(21),s=n(20),d=n(22),m=n(13),f=n(9),E=n(31),p=n.n(E);function v(e){var t=e.title,n=e.description;return r.a.createElement("header",{className:p.a.header},r.a.createElement("h1",null,t),r.a.createElement("p",null,n))}var h=n(32),g=n.n(h),O=n(12),b=n.n(O);function T(e){var t=e.beforeLinks,n=e.links,a=e.afterLinks;return r.a.createElement("nav",{className:b.a.nav},r.a.createElement("div",{className:b.a.before},t),r.a.createElement("div",{className:b.a.links},n.map((function(e,t){return r.a.createElement(m.b,{key:t,to:e.path,activeClassName:b.a.activeLink},e.text)}))),r.a.createElement("div",{className:b.a.after},a))}var _=n(10);function y(e){var t=e.columns,n=e.children,a=e.style,o="1fr";t&&(o=isNaN(t)?t:new Array(t).fill("1fr").join(" "));var l=Object(_.a)({display:"grid",gridAutoRows:"auto",gridTemplateColumns:o,columnGap:"var(--std-spacing)"},a);return r.a.createElement("div",{style:l},n)}function x(e){var t=e.style,n=e.children,a=Object(_.a)({display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"},t);return r.a.createElement("div",{style:a},n)}var C=n(26),k=n.n(C);function N(e){var t=e.img,n=e.title,a=e.children;return r.a.createElement("div",{className:k.a.card},t&&r.a.createElement("img",{src:t,alt:""}),r.a.createElement("div",{className:k.a.cardText},n&&r.a.createElement("h1",null,n),a))}var j=n(34),D=n.n(j);function S(e){var t=e.title,n=e.buttons,a=e.onButtonClick,o=e.children;return r.a.createElement("div",{className:D.a.dialogBackground},r.a.createElement("div",null,r.a.createElement(N,{title:t},r.a.createElement("div",null,o),r.a.createElement("div",{className:"flex-row-end",style:{marginTop:"var(--half-spacing)"}},n&&n.map((function(e,t){return r.a.createElement("button",{key:t,style:{marginLeft:"var(--half-spacing)"},onClick:function(t){return a(Object(_.a)({},t,{buttonName:e}))}},e)}))))))}var w=n(35),L=n.n(w);function A(e){var t=e.todos,n=e.onSetComplete;return r.a.createElement("table",{className:L.a.table},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Item"),r.a.createElement("th",null,"Complete?"))),r.a.createElement("tbody",null,t&&t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.text),r.a.createElement("td",null,r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:e.completed,onChange:function(e){return n({index:t,isComplete:e.target.checked})}}),r.a.createElement("span",null," ",e.completed?"Complete":"Incomplete"))))}))))}var B=n(8);var M=n(37),R=n.n(M),I=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={newTodoText:""},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleDialogButtonClick",value:function(e){var t=e.buttonName,n=this.props,a=n.addTodo,r=n.history;"Ok"===t&&this.state.newTodoText&&a(this.state.newTodoText),this.setState({newTodoText:""}),r.goBack()}},{key:"render",value:function(){var e=this,t=this.props,n=t.match,a=t.todos,o=t.setTodoComplete,l=t.history,c=n.url,i=n.path,u=a.filter((function(e){return e.completed})).length,s=a.length-u;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{columns:"1fr 300px"},r.a.createElement(x,null,r.a.createElement(U,{todos:a,onSetComplete:function(e){return o(e.index,e.isComplete)},onNewTodoClick:function(e){return l.push("".concat(c,"/add"))}})),r.a.createElement(x,null,r.a.createElement(G,{numCompleted:u,numIncomplete:s}))),r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"".concat(i,"/add")},r.a.createElement(S,{title:"New to-do",buttons:["Ok","Cancel"],onButtonClick:function(t){return e.handleDialogButtonClick(t)}},r.a.createElement("div",{className:R.a.addTodoForm},r.a.createElement("label",null,"Text:"),r.a.createElement("input",{type:"text",value:this.state.newTodoText,onChange:function(t){return e.setState({newTodoText:t.target.value})}}))))))}}]),t}(r.a.Component);var P={addTodo:function(e){return{type:"ADD_TODO",text:e}},setTodoComplete:function(e,t){return{type:"SET_TODO_COMPLETE",index:e,completed:t}}},F=Object(B.b)((function(e){return{todos:e.todos}}),P)(Object(f.g)(I));function U(e){var t=e.todos,n=e.onSetComplete,a=e.onNewTodoClick;return r.a.createElement(N,{title:"My To-Dos"},r.a.createElement(A,{todos:t,onSetComplete:function(e){return n(e)}}),r.a.createElement("div",{className:"flex-row-end",style:{marginTop:"var(--half-spacing)"}},r.a.createElement("button",{onClick:function(e){return a(e)}},"Add Todo")))}function G(e){var t=e.numCompleted,n=e.numIncomplete;return r.a.createElement(N,{title:"Summary"},r.a.createElement("p",null,"Completed items: ",r.a.createElement("strong",null,t)),r.a.createElement("p",null,"Still to-do: ",r.a.createElement("strong",null,n)))}var Y=n(3),V=n.n(Y);var z=Object(B.b)((function(e){return{events:e.events}}))((function(e){var t=e.events;return r.a.createElement(y,{columns:"1fr 400px"},r.a.createElement(x,null,r.a.createElement(J,{events:t})),r.a.createElement(x,null,r.a.createElement(H,{events:t})))}));function J(){return r.a.createElement(N,{title:"My Calendar"},r.a.createElement("p",null,"Calendar goes here"))}function H(e){var t=e.events,n=V()(),a=t.find((function(e){return n.isAfter(e.start)&&n.isBefore(e.end)})),o=t.filter((function(e){return n.isBefore(e.start)})).sort(),l=o&&o[0],c=o.filter((function(e){return n.isSame(e.start,"day")})).length,i=o.filter((function(e){return n.isSame(e.start,"week")})).length,u=o.filter((function(e){return n.isSame(e.start,"month")})).length;return r.a.createElement(N,{title:"My Events"},r.a.createElement("h3",null,"Current:"),r.a.createElement(q,{event:a,messageIfNoEvent:"Nothing on right now"}),r.a.createElement("h3",null,"Next:"),r.a.createElement(q,{event:l}),u&&r.a.createElement("div",null,r.a.createElement("h3",null,"Coming up later..."),r.a.createElement("p",null,r.a.createElement("strong",null,"Later today:")," ",c,r.a.createElement("br",null),r.a.createElement("strong",null,"Later this week:")," ",i,r.a.createElement("br",null),r.a.createElement("strong",null,"Later this month:")," ",u)))}function q(e){var t=e.event,n=e.messageIfNoEvent;if(t){var a=V()(t.start).calendar(),o=V()();return o.isAfter(t.start)&&o.isBefore(t.end)&&(a="happening now"),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,t.name)," ",r.a.createElement("span",{className:"text-secondary text-it"},"(",a,")"),r.a.createElement("br",null),t.description))}return r.a.createElement("p",null,n||"No upcoming events")}var K={getTodos:function(){return fetch("/api/todos").then((function(e){return e.json()}))},addTodo:function(e){return fetch("/api/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},getEvents:function(){return fetch("/api/events").then((function(e){return e.json()}))}};var W=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.loadTodos()}},{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:g.a.container},r.a.createElement(v,{title:"Organizer",description:"Organize your life!"}),r.a.createElement(T,{links:[{path:"/todos",text:"My To-Dos"},{path:"/calendar",text:"My Calendar"}],afterLinks:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("strong",null,this.props.numUpcomingEvents)," upcoming events, ",r.a.createElement("strong",null,this.props.numPendingTodos)," pending to-dos"))}),r.a.createElement("main",null,r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/todos"},r.a.createElement(F,null)),r.a.createElement(f.b,{path:"/calendar"},r.a.createElement(z,null)),r.a.createElement(f.b,{exact:!0,path:"/"},r.a.createElement(f.a,{to:"/todos"})),r.a.createElement(f.b,{path:"*"},r.a.createElement("p",null,"404 Not Found!!")))),r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 SE750 / CS732, ",V()().format("MMMM Do, YYYY")))))}}]),t}(r.a.Component);var Z={loadTodos:function(){return function(e){e({type:"LOAD_TODOS_LOADING"}),K.getTodos().then((function(t){return e(function(e){return{type:"LOAD_TODOS_SUCCESS",todos:e}}(t))}),(function(t){return e({type:"LOAD_TODOS_ERROR",err:t.message||"Unexpected error!"})}))}}},Q=Object(B.b)((function(e){var t=V()();return{numUpcomingEvents:e.events.filter((function(e){return t.isBefore(e.start)})).length,numPendingTodos:e.todos.filter((function(e){return!e.completed})).length}}),Z)(W),X=n(5),$=n(15),ee=n(58);function te(e,t){return[].concat(Object($.a)(e),[{id:Object(ee.a)(),text:t.text,completed:!1,modified:V()().format()}])}function ne(e,t){return e.map((function(e,n){return n===t.index?Object.assign({},e,{completed:t.completed,modified:V()().format()}):e}))}function ae(e,t){return e}function re(e,t){var n=t.todos;return e.map((function(e,t){var a=n.find((function(t){return t.id===e.id}));return a&&V()(a.modified).isAfter(e.modified)?a:e})).concat(n.filter((function(t){return void 0===e.find((function(e){return t.id===e.id}))})))}function oe(e,t){return e}function le(e,t){return[].concat(Object($.a)(e),[Object(_.a)({},t.event,{id:Object(ee.a)(),modified:V()().format()})])}function ce(e,t){return e}function ie(e,t){var n=t.events,a=e.map((function(e,t){var a=n.find((function(t){return t.id===e.id}));return a&&V()(a.modified).isAfter(e.modified)?a:e}));return[].concat(Object($.a)(a),[n.filter((function(t){return void 0===e.find((function(e){return t.id===e.id}))}))])}function ue(e,t){return e}var se=Object(X.c)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return te(e,t);case"SET_TODO_COMPLETE":return ne(e,t);case"LOAD_TODOS_LOADING":return ae(e,t);case"LOAD_TODOS_SUCCESS":return re(e,t);case"LOAD_TODOS_ERROR":return oe(e,t);default:return e}},events:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EVENT":return le(e,t);case"LOAD_EVENTS_LOADING":return ce(e,t);case"LOAD_EVENTS_SUCCESS":return ie(e,t);case"LOAD_EVENTS_ERROR":return ue(e,t);default:return e}}}),de=n(28),me=n(38),fe=n.n(me),Ee=n(39),pe=n.n(Ee),ve=n(40),he={key:"root",storage:fe.a,stateReconciler:pe.a},ge=Object(de.a)(he,se),Oe=Object(X.e)(ge,{todos:[],events:[]},Object(X.d)(Object(X.a)(ve.a),window.devToolsExtension?window.devToolsExtension():function(e){return e})),be=Object(de.b)(Oe),Te=n(41);l.a.render(r.a.createElement(B.a,{store:Oe},r.a.createElement(Te.PersistGate,{loading:r.a.createElement((function(){return r.a.createElement("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}},r.a.createElement("h1",null,"Loading..."))}),null),persistor:be},r.a.createElement(Q,null))),document.querySelector("#root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.3096517d.chunk.js.map