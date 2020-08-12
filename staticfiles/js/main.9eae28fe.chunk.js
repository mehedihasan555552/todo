(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(4),c=n.n(o),l=(n(14),n(2)),s=n(5),r=n(6),d=n(1),u=n(8),h=n(7),m=(n(15),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={todoList:[],activeItem:{id:null,title:"",complete:!1},editing:!1},a.fetchTasks=a.fetchTasks.bind(Object(d.a)(a)),a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.getCookie=a.getCookie.bind(Object(d.a)(a)),a.startEdit=a.startEdit.bind(Object(d.a)(a)),a.deleteItem=a.deleteItem.bind(Object(d.a)(a)),a.strikeUnstrike=a.strikeUnstrike.bind(Object(d.a)(a)),a}return Object(r.a)(n,[{key:"getCookie",value:function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var i=n[a].trim();if(i.substring(0,e.length+1)===e+"="){t=decodeURIComponent(i.substring(e.length+1));break}}return t}},{key:"componentWillMount",value:function(){this.fetchTasks()}},{key:"fetchTasks",value:function(){var e=this;console.log("Fetching..."),fetch("http://127.0.0.1:8000/api/task-list/").then((function(e){return e.json()})).then((function(t){return e.setState({todoList:t})}))}},{key:"handleChange",value:function(e){var t=e.target.name,n=e.target.value;console.log("Name:",t),console.log("value:",n),this.setState({activeItem:Object(l.a)(Object(l.a)({},this.state.activeItem),{},{title:n})})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log("ITEM:",this.state.activeItem);this.getCookie("csrftoken");var n="http://127.0.0.1:8000/api/task-create/";1==this.state.editing&&(n="http://127.0.0.1:8000/api/task-update/".concat(this.state.activeItem.id,"/"),this.setState({editing:!1})),fetch(n,{method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":"csrftoken"},body:JSON.stringify(this.state.activeItem)}).then((function(e){t.fetchTasks(),t.setState({activeItem:{id:null,title:"",complete:!1}})})).catch((function(e){console.log("ERROR:",e)}))}},{key:"startEdit",value:function(e){this.setState({activeItem:e,editing:!0})}},{key:"deleteItem",value:function(e){var t=this,n=this.getCookie("csrftoken");fetch("http://127.0.0.1:8000/api/task-delete/".concat(e.id,"/"),{method:"DELETE",headers:{"Content-type":"application/json","X-CSRFToken":n}}).then((function(e){t.fetchTasks()}))}},{key:"strikeUnstrike",value:function(e){var t=this;e.completed=!e.completed;var n=this.getCookie("csrftoken"),a="http://127.0.0.1:8000/api/task-update/".concat(e.id,"/");fetch(a,{method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":n},body:JSON.stringify({completed:e.completed,title:e.title})}).then((function(){t.fetchTasks()})),console.log("TASK:",e.completed)}},{key:"render",value:function(){var e=this.state.todoList,t=this;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{id:"task-container"},i.a.createElement("div",{id:"form-wrapper"},i.a.createElement("form",{onSubmit:this.handleSubmit,id:"form"},i.a.createElement("div",{className:"flex-wrapper"},i.a.createElement("div",{style:{flex:6}},i.a.createElement("input",{onChange:this.handleChange,value:this.state.activeItem.title,className:"form-control",id:"title",type:"text",name:"title",placeholder:"Title"})),i.a.createElement("div",{style:{flex:1}},i.a.createElement("input",{id:"submit",className:"btn btn-warning",type:"submit",name:"Add"}))))),i.a.createElement("div",{id:"list-wrapper"},e.map((function(e,n){return i.a.createElement("div",{key:n,className:"task-wrapper flex-wrapper"},i.a.createElement("div",{onClick:function(){return t.strikeUnstrike(e)},style:{flex:7}},0==e.completed?i.a.createElement("span",null,e.title):i.a.createElement("strike",null,e.title)),i.a.createElement("div",{style:{flex:1}},i.a.createElement("button",{onClick:function(){return t.startEdit(e)},type:"button",class:"btn btn-outline-info"},"Edit")),i.a.createElement("div",{style:{flex:1}},i.a.createElement("button",{onClick:function(){return t.deleteItem(e)},type:"button",class:"btn btn-outline-dark delete"},"Delete")))})))))}}]),n}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.9eae28fe.chunk.js.map