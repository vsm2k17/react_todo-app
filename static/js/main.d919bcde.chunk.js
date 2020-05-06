(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(9),c=n.n(o),i=(n(15),n(16),n(7)),r=n(1),d=n(2),u=n(3),s=n(5),m=n(4),h=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={text:""},e.handleChangeNewTodoText=function(t){var n=t.target.value;e.setState({text:n})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.handleSubmit,n=this.state.text;return l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos"),l.a.createElement("form",{onSubmit:function(a){t(a,n),e.setState({text:""})}},l.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",value:n,onChange:this.handleChangeNewTodoText,onBlur:function(a){t(a,n),e.setState({text:""})}})))}}]),n}(l.a.Component),f=n(6),p=n.n(f),b=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todo,n=e.handleCheckboxChange,a=e.handleDoubleClick,o=e.handleEditing,c=e.handleClickDestroy,i=e.handleLossFocus;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"View"},l.a.createElement("input",{defaultChecked:!1,checked:t.elementState.editing?!t.elementState.editing:t.elementState.completed,onClick:function(){return n(t.id)},type:"checkbox",className:"toggle",id:"todo-".concat(t.id)}),l.a.createElement("label",{onDoubleClick:function(){return a(t.id)}},t.elementState.editing?"":t.text),l.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return c(t.id)}})),l.a.createElement("input",{type:"text",className:"edit",defaultValue:t.text,onKeyDown:function(e){return o(e,t.id)},onBlur:function(e){return i(e,t.id)}}))}}]),n}(l.a.Component),S=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.ListofTodo,n=e.handleCheckboxChange,a=e.handleDoubleClick,o=e.handleEditing,c=e.handleClickDestroy,i=e.handleLossFocus;return l.a.createElement("ul",{className:"todo-list"},0!==t.length?t.map((function(e){return l.a.createElement("li",{className:p()(e.elementState),key:e?e.id:null},l.a.createElement(b,{todo:e,handleCheckboxChange:n,handleDoubleClick:a,handleEditing:o,handleClickDestroy:c,handleLossFocus:i}))})):l.a.createElement("div",null))}}]),n}(l.a.Component),g=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.handleSelectComplited,n=e.handleSelectAll,a=e.handleSelectActive,o=e.activePage;return l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement("a",{href:"#/",className:p()({selected:"All"===o}),onClick:function(){return n()}},"All")),l.a.createElement("li",null,l.a.createElement("a",{onClick:function(){return a()},href:"#/active",className:p()({selected:"Active"===o})},"Active")),l.a.createElement("li",null,l.a.createElement("a",{onClick:function(){return t()},href:"#/completed",className:p()({selected:"Completed"===o})},"Completed")))}}]),n}(l.a.Component),v=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={activePage:"All",id:0,ListofTodo:[{id:123,text:"newTodoText",elementState:{completed:!0,editing:!1}},{id:124,text:"some text",elementState:{completed:!1,editing:!1}},{id:125,text:"another text",elementState:{completed:!1,editing:!1}}]},e.handleSubmit=function(t,n){if(t.preventDefault(),""!==n){var a={id:e.state.id+1,text:n,elementState:{completed:!1,editing:!1}};e.setState((function(e){return{ListofTodo:e.ListofTodo.concat([Object(r.a)({},a)]),id:e.id+1}}))}},e.handleCheckboxChange=function(t){e.setState((function(e){return{ListofTodo:e.ListofTodo.map((function(e){return e.id!==t?e:Object(r.a)(Object(r.a)({},e),{},{elementState:Object(r.a)(Object(r.a)({},e.elementState),{},{completed:!e.elementState.completed})})}))}}))},e.handleClickDestroy=function(t){e.setState((function(e){return{ListofTodo:e.ListofTodo.filter((function(e){return e.id!==t}))}}))},e.handleDoubleClick=function(t){e.setState((function(e){return{ListofTodo:e.ListofTodo.map((function(e){return e.id!==t?e:Object(r.a)(Object(r.a)({},e),{},{elementState:Object(r.a)(Object(r.a)({},e.elementState),{},{editing:!0})})}))}}))},e.handleEditing=function(t,n){var a=t.target.value;"Enter"===t.key&&e.setState((function(e){return{ListofTodo:e.ListofTodo.map((function(e){return e.id!==n?e:Object(r.a)(Object(r.a)({},e),{},{text:a,elementState:Object(r.a)(Object(r.a)({},e.elementState),{},{editing:!1})})}))}}))},e.handleLossFocus=function(t,n){var a=t.target.value;e.setState((function(e){return{ListofTodo:e.ListofTodo.map((function(e){return e.id!==n?e:Object(r.a)(Object(r.a)({},e),{},{text:a,elementState:Object(r.a)(Object(r.a)({},e.elementState),{},{editing:!1})})}))}}))},e.handleToggleAll=function(t){t.target.checked?e.setState((function(e){return{ListofTodo:e.ListofTodo.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{elementState:Object(r.a)(Object(r.a)({},e.elementState),{},{completed:!0})})}))}})):e.setState((function(e){return{ListofTodo:e.ListofTodo.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{elementState:Object(r.a)(Object(r.a)({},e.elementState),{},{completed:!1})})}))}}))},e.handleSelectAll=function(){e.setState({activePage:"All"})},e.handleSelectActive=function(){e.setState({activePage:"Active"})},e.handleSelectComplited=function(){e.setState({activePage:"Completed"})},e.hanleClearComplited=function(){e.setState((function(e){return{ListofTodo:e.ListofTodo.filter((function(e){return!0!==e.elementState.completed}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e,t=this.state,n=t.ListofTodo,a=t.activePage;return e="All"===a?Object(i.a)(n):"Active"===a?Object(i.a)(n.filter((function(e){return!1===e.elementState.completed}))):Object(i.a)(n.filter((function(e){return!0===e.elementState.completed}))),l.a.createElement("section",{className:"todoapp"},l.a.createElement(h,{handleSubmit:this.handleSubmit}),l.a.createElement("section",{className:"main"},l.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:n.every((function(e){return!0===e.elementState.completed})),onClick:this.handleToggleAll}),l.a.createElement("label",{hidden:0===n.length,htmlFor:"toggle-all"},"Mark all as complete"),l.a.createElement(S,{ListofTodo:e,handleCheckboxChange:this.handleCheckboxChange,handleDoubleClick:this.handleDoubleClick,handleEditing:this.handleEditing,handleClickDestroy:this.handleClickDestroy,handleLossFocus:this.handleLossFocus})),l.a.createElement("footer",{className:"footer"},l.a.createElement("span",{className:"todo-count"},n.reduce((function(e,t){return t.elementState.completed?e-1:e}),n.length)," items left"),l.a.createElement(g,{handleSelectAll:this.handleSelectAll,handleSelectActive:this.handleSelectActive,handleSelectComplited:this.handleSelectComplited,activePage:a}),l.a.createElement("button",{type:"button",className:"clear-completed",onClick:this.hanleClearComplited},"Clear completed")))}}]),n}(l.a.Component);c.a.render(l.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.d919bcde.chunk.js.map