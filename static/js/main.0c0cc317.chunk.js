(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{13:function(e,t,o){},14:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),a=o(6),c=o.n(a),i=o(7),l=o(1),s=o(2),d=o(4),p=o(3);function u(){return r.a.createElement("header",{style:m},r.a.createElement("h1",null,"TodoList"))}var m={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},h=function(e){Object(d.a)(o,e);var t=Object(p.a)(o);function o(){var e;Object(l.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:e.props.todo.completed?"line-through":"none"}},e}return Object(s.a)(o,[{key:"render",value:function(){var e=this.props.todo,t=e.id,o=e.title;return r.a.createElement("div",{style:this.getStyle()},r.a.createElement("p",null,r.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)}),o,r.a.createElement("button",{onClick:this.props.delTodo.bind(this,t),style:f},"x")))}}]),o}(n.Component),f={background:"#ff0000",color:"#fff",border:"none",padding:"5px 10px",borderRadius:"50%",cursor:"pointer",float:"right"},b=h,g=function(e){Object(d.a)(o,e);var t=Object(p.a)(o);function o(){return Object(l.a)(this,o),t.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return r.a.createElement(b,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo})}))}}]),o}(r.a.Component),v=(o(13),function(e){Object(d.a)(o,e);var t=Object(p.a)(o);function o(){var e;Object(l.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={todos:[{id:1,title:"Take out the trash",completed:!1},{id:2,title:"Fight Kevin",completed:!1},{id:3,title:"Be awesome",completed:!0}]},e.markComplete=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.delTodo=function(t){e.setState({todos:Object(i.a)(e.state.todos.filter((function(e){return e.id!==t})))})},e}return Object(s.a)(o,[{key:"render",value:function(){return console.log(this.state.todos),r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement(g,{todos:this.state.todos,markComplete:this.markComplete,delTodo:this.delTodo}))}}]),o}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,o){e.exports=o(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.0c0cc317.chunk.js.map