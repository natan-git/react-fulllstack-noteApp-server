(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,n){},40:function(e,t,n){e.exports=n.p+"static/media/icons8-react.1932d407.svg"},41:function(e,t,n){e.exports=n.p+"static/media/icons8-redux.7f067025.svg"},42:function(e,t,n){e.exports=n.p+"static/media/icons8-nodejs.9d7b3072.svg"},43:function(e,t,n){e.exports=n.p+"static/media/icons8-mongodb.cfee114b.svg"},44:function(e,t,n){e.exports=n.p+"static/media/icons8-sass.cb160800.svg"},46:function(e,t,n){e.exports=n(82)},73:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),l=n(19),s=n(14),i=n(17),u=n(39),m=n(45),p=n(2),f={notes:[]};var h={user:null};n(24);var d=n(4),v=n(5),E=n(7),b=n(6),g=n(3),O=n(9),y=n(11),w=n.n(y),N=n(15),j=n(16),k=n.n(j),C={query:function(e){return S.apply(this,arguments)},getNoteById:function(e){return x.apply(this,arguments)},remove:function(e){return k.a.delete("".concat("/api/","note/").concat(e))},save:function(e){return _.apply(this,arguments)}};function S(){return(S=Object(N.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat("/api/","note")).then((function(e){return e.data}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(N.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat("/api/","note")).then((function(e){return e.data}));case 2:return n=e.sent,a=n.find((function(e){return e._id===t})),e.abrupt("return",Object(p.a)({},a));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=Object(N.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("save -> noteEdit",t),!t._id){e.next=6;break}return e.next=4,k.a.put("".concat("/api/","note/").concat(t._id),Object(p.a)({},t)).then((function(e){return e.data}));case 4:e.next=11;break;case 6:return console.log("noteEdit",t),e.next=9,k.a.post("".concat("/api/","note"),t).then((function(e){return e.data}));case 9:return n=e.sent,e.abrupt("return",n);case 11:return e.abrupt("return",Object(p.a)({},t));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){return console.log("editNote -> note",t),function(n){var a=t.title,r=t.info;return C.save(t,{title:a,info:r}).then((function(t){n({type:e,note:t})}))}}n(73);var T=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={note:{type:"TXT",isPinned:!1,style:null,info:"",title:"",time:""},showInput:!1,showCancel:!1,placeholder:"Take a note..."},e.handleFocus=function(t){e.setState({showInput:!0}),e.setState({showCancel:!0}),e.setState({showSave:!0}),e.setState({placeholder:"Title"}),t.target.select()},e.saveNote=function(t){if(t.preventDefault(),e.state.note.info){var n=Object(p.a)({},e.state.note);e.saveTime(),console.log("newNote",n),e.props.editNote("NOTE_ADD",n),e.setState({showInput:!1}),e.myFormRef.reset()}},e.handleInfoChange=function(t){var n=t.target.value,a=Object(p.a)({},e.state.note);a.info=n,e.setState({note:a})},e.handleTitleChange=function(t){var n=t.target.value,a=Object(p.a)({},e.state.note);a.title=n,e.setState({note:a})},e.renderInputs=function(){return r.a.createElement("input",{onChange:e.handleInfoChange,type:"text",placeholder:"Take a note...",defaultValue:""})},e.closeForm=function(){e.setState({showInput:!1}),e.setState({showCancel:!1}),e.setState({showSave:!1}),e.setState({placeholder:"Take a note..."}),e.myFormRef.reset()},e.saveTime=function(){var t=new Date,n=t.getHours(),a=t.getMinutes();a<10&&(a="0"+a);var r="AM";n>12&&(n-=12,r="PM");var c=t.getDate(),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],l=t.getFullYear(),s="".concat(c.toString()," ").concat(o.toString()," ").concat(l.toString(),"  ").concat(n.toString(),":").concat(a.toString()," ").concat(r.toString()),i=Object(p.a)({},e.state.note);i.time=s,e.setState({note:i})},e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.saveTime()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"flex align-center justify-center"},r.a.createElement("div",{className:"input-container flex col "},r.a.createElement("form",{ref:function(t){return e.myFormRef=t},onSubmit:this.saveNote},r.a.createElement("div",{className:"flex col justify-center align-center"},r.a.createElement("input",{onChange:this.handleTitleChange,placeholder:this.state.placeholder,name:"txt",type:"text",onClick:this.handleFocus}),this.state.showInput?this.renderInputs():null)),r.a.createElement("div",{className:"btn-conatiner flex space-between"},this.state.showSave?r.a.createElement("button",{className:"btn",onClick:this.saveNote},"Save"):null,this.state.showCancel?r.a.createElement("button",{className:"btn",onClick:this.closeForm},"Close"):null)))}}]),n}(a.Component),R={editNote:D},z=Object(s.b)(null,R)(T),A=(n(74),function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hover:!1,showEdit:!1},e.toggleHover=function(){e.setState({hover:!e.state.hover})},e}return Object(v.a)(n,[{key:"render",value:function(){return r.a.createElement(l.b,{to:"/noteApp/details/".concat(this.props.note._id),className:"card-link",onMouseEnter:this.toggleHover,onMouseLeave:this.toggleHover},r.a.createElement("div",{className:"card  ".concat(this.props.note.bgColor)},r.a.createElement("div",null,r.a.createElement("h3",{className:"card-title black-text"},this.props.note.title),r.a.createElement("span",{className:"card-info black-text"},this.props.note.info))))}}]),n}(a.Component)),I=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onClickHandler=function(t){e.props.openNoteDetails(t)},e}return Object(v.a)(n,[{key:"renderNotes",value:function(){return r.a.createElement("section",{className:"container flex wrap flex-start"},this.props.notes.map((function(e){return r.a.createElement(A,{key:e._id,note:e})})))}},{key:"render",value:function(){return r.a.createElement("div",{className:"M"},this.renderNotes())}}]),n}(a.Component);n(76);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var P=r.a.createElement("path",{d:"m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"}),H=r.a.createElement("path",{d:"m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"}),F=r.a.createElement("path",{d:"m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"}),U=r.a.createElement("path",{d:"m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"}),J=function(e){var t=e.svgRef,n=e.title,a=M(e,["svgRef","title"]);return r.a.createElement("svg",B({height:"20pt",viewBox:"-40 0 427 427.00131",width:"20pt",ref:t},a),n?r.a.createElement("title",null,n):null,P,H,F,U)},L=r.a.forwardRef((function(e,t){return r.a.createElement(J,B({svgRef:t},e))}));n.p;function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var X=r.a.createElement("path",{d:"m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0"}),q=r.a.createElement("path",{d:"m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0"}),G=function(e){var t=e.svgRef,n=e.title,a=W(e,["svgRef","title"]);return r.a.createElement("svg",V({height:"20pt",viewBox:"0 -1 401.52289 401",width:"20pt",ref:t},a),n?r.a.createElement("title",null,n):null,X,q)},Y=r.a.forwardRef((function(e,t){return r.a.createElement(G,V({svgRef:t},e))}));n.p;function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Q=r.a.createElement("path",{d:"m206.812 34.446-206.812 206.673 206.743 206.674 24.353-24.284-165.167-165.167h416.31v-34.445h-416.31l165.236-165.236z"}),Z=function(e){var t=e.svgRef,n=e.title,a=K(e,["svgRef","title"]);return r.a.createElement("svg",$({id:"Capa_1",enableBackground:"new 0 0 482.239 482.239",height:20,viewBox:"0 0 482.239 482.239",width:20,ref:t},a),n?r.a.createElement("title",null,n):null,Q)},ee=r.a.forwardRef((function(e,t){return r.a.createElement(Z,$({svgRef:t},e))}));n.p;function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ae=r.a.createElement("g",null,r.a.createElement("path",{d:"m512 127.467c0-58.572-32.668-117.345-34.059-119.818-2.656-4.725-7.654-7.649-13.074-7.649s-10.418 2.924-13.075 7.648c-1.391 2.473-34.059 61.247-34.059 119.818 0 19.8 12.278 36.775 29.615 43.744-1.675 9-3.97 21.836-6.547 37.656h-8.068c-44.948 0-81.4-36.367-81.4-81.4 0-61.519-49.769-111.4-111.4-111.4-132.536.001-239.933 107.236-239.933 239.934 0 132.536 107.235 239.933 239.933 239.933 69.05 0 133.852-29.731 178.857-80.003-.677 16.254-1.057 32.636-1.057 48.936 0 25.989 21.144 47.133 47.133 47.133s47.134-21.143 47.134-47.132c0-123.283-21.713-251.194-29.615-293.656 17.337-6.969 29.615-23.945 29.615-43.744zm-89.824 232.82c-37.42 65.249-106.952 105.646-182.243 105.646-115.757 0-209.933-94.176-209.933-209.933s94.176-209.933 209.933-209.933c44.954 0 81.4 36.372 81.4 81.4 0 48.906 36.623 111.4 114.759 111.4-6.131 41.51-10.802 82.262-13.916 121.42zm42.691 121.713c-9.447 0-17.133-7.686-17.133-17.133 0-77.555 8.794-157.095 17.136-215.098 8.34 57.982 17.13 137.502 17.13 215.098 0 9.447-7.686 17.133-17.133 17.133zm0-337.4c-9.447 0-17.133-7.686-17.133-17.133 0-27.721 8.979-56.46 17.148-76.87 8.16 20.37 17.119 49.066 17.119 76.87-.001 9.447-7.687 17.133-17.134 17.133z"}),r.a.createElement("path",{d:"m239.933 80.333c-25.989 0-47.133 21.144-47.133 47.133s21.144 47.133 47.133 47.133c25.99 0 47.134-21.144 47.134-47.133s-21.144-47.133-47.134-47.133zm0 64.267c-9.447 0-17.133-7.686-17.133-17.133s7.686-17.133 17.133-17.133c9.448 0 17.134 7.686 17.134 17.133s-7.686 17.133-17.134 17.133z"}),r.a.createElement("path",{d:"m239.933 337.4c-25.989 0-47.133 21.144-47.133 47.133s21.144 47.133 47.133 47.133c25.99 0 47.134-21.144 47.134-47.133s-21.144-47.133-47.134-47.133zm0 64.267c-9.447 0-17.133-7.686-17.133-17.133s7.686-17.133 17.133-17.133c9.448 0 17.134 7.686 17.134 17.133s-7.686 17.133-17.134 17.133z"}),r.a.createElement("path",{d:"m128.624 144.6c-25.99 0-47.134 21.144-47.134 47.133s21.144 47.133 47.134 47.133c25.989 0 47.133-21.144 47.133-47.133s-21.144-47.133-47.133-47.133zm0 64.267c-9.448 0-17.134-7.686-17.134-17.133s7.686-17.133 17.134-17.133c9.447 0 17.133 7.686 17.133 17.133s-7.686 17.133-17.133 17.133z"}),r.a.createElement("path",{d:"m351.243 273.133c-25.989 0-47.133 21.144-47.133 47.133s21.144 47.133 47.133 47.133 47.133-21.144 47.133-47.133-21.144-47.133-47.133-47.133zm0 64.267c-9.447 0-17.133-7.686-17.133-17.133s7.686-17.133 17.133-17.133 17.133 7.686 17.133 17.133-7.686 17.133-17.133 17.133z"}),r.a.createElement("path",{d:"m128.624 273.133c-25.99 0-47.134 21.144-47.134 47.133s21.144 47.133 47.134 47.133c25.989 0 47.133-21.144 47.133-47.133s-21.144-47.133-47.133-47.133zm0 64.267c-9.448 0-17.134-7.686-17.134-17.133s7.686-17.133 17.134-17.133c9.447 0 17.133 7.686 17.133 17.133s-7.686 17.133-17.133 17.133z"})),re=function(e){var t=e.svgRef,n=e.title,a=ne(e,["svgRef","title"]);return r.a.createElement("svg",te({id:"Layer_1",enableBackground:"new 0 0 512 512",height:25,viewBox:"0 0 512 512",width:25,ref:t},a),n?r.a.createElement("title",null,n):null,ae)},ce=r.a.forwardRef((function(e,t){return r.a.createElement(re,te({svgRef:t},e))})),oe=(n.p,function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={note:{},showEdit:!1,showColors:!1},e.loadNotes=Object(N.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.getNoteById(e.props.match.params.id);case 2:n=t.sent,e.setState({note:n});case 4:case"end":return t.stop()}}),t)}))),e.onDeleteTodo=function(){e.props.removeNote(e.state.note._id),e.props.history.push("/noteApp")},e.editNote=function(t){t.preventDefault(),e.state.note._id?e.props.editNote("NOTE_UPDATE",e.state.note):e.props.editNote("NOTE_ADD",e.state.note),e.props.history.push("/noteApp")},e.handleChange=function(t){var n=t.target.value,a=Object(p.a)({},e.state.note);a.info=n,e.setState({note:a})},e.showEdit=function(){return r.a.createElement("form",{onSubmit:e.editNote,className:"flex align-center justify-center"},r.a.createElement("div",null,r.a.createElement("textarea",{rows:"5",cols:"30",onChange:e.handleChange,name:"txt",type:"text",value:e.state.note.info})),r.a.createElement("button",{className:"btn"},"Save"))},e.showDetails=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,e.state.note.title),r.a.createElement("p",null,e.state.note.info))},e.renderColors=function(){return r.a.createElement("div",{className:"color-palette-container flex"},r.a.createElement("div",{className:"whitebtn",onClick:function(){return e.paintBC("white")}}),r.a.createElement("div",{className:"redbtn",onClick:function(){return e.paintBC("red")}}),r.a.createElement("div",{className:"bluebtn",onClick:function(){return e.paintBC("blue")}}),r.a.createElement("div",{className:"greenbtn",onClick:function(){return e.paintBC("green")}}),r.a.createElement("div",{className:"yellowbtn",onClick:function(){return e.paintBC("yellow")}}))},e.paintBC=function(t){var n=e.state.note;n.bgColor=t,e.setState({note:n}),e.props.editNote("NOTE_UPDATE",e.state.note),e.props.history.push("/noteApp")},e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.loadNotes()}},{key:"componentDidUpdate",value:function(e){console.log(this.props.match.params.id),e.match.params.id!==this.props.match.params.id&&this.loadNotes()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"noteDetails-container"},r.a.createElement("div",{className:"noteBody-container"},this.state.showEdit?this.showEdit():this.showDetails()),r.a.createElement("div",{className:"noteIcons-container flex align-center space-between"},r.a.createElement("div",{className:"noteIcons-container flex align-center space-between"},r.a.createElement(ee,{onClick:function(){return e.props.history.push("/noteApp")}}),r.a.createElement(L,{onClick:this.onDeleteTodo}),r.a.createElement(Y,{onClick:function(){return e.setState({showEdit:!e.state.showEdit})}}),r.a.createElement(ce,{onClick:function(){return e.setState({showColors:!e.state.showColors})}}),this.state.showColors?this.renderColors():null),r.a.createElement("p",null,this.state.note.time))),r.a.createElement("div",{className:"screen",onClick:function(){return e.props.history.push("/noteApp")}}))}}]),n}(a.Component)),le={removeNote:function(e){return function(t){return C.remove(e).then((function(){t({type:"NOTE_REMOVE",noteId:e})}))}},editNote:D},se=Object(s.b)(null,le)(oe),ie=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={search:"",showNoteDetails:!1},e.loadNotes=function(){e.props.loadNotes(e.state.search)},e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.loadNotes()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(z,{onSubmit:this.onFormSubmit}),this.props.notes&&r.a.createElement(I,{notes:this.props.notes}),r.a.createElement(g.a,{exact:!0,path:"/noteApp/details/:id",component:se}))}}]),n}(a.Component),ue={loadNotes:function(e){return function(t){return C.query(e).then((function(e){t(function(e){return{type:"SET_NOTES",notes:e}}(e))}))}}},me=Object(s.b)((function(e){return{notes:e.notes.notes}}),ue)(ie),pe=(n(77),n(40)),fe=n.n(pe),he=n(41),de=n.n(he),ve=n(42),Ee=n.n(ve),be=n(43),ge=n.n(be),Oe=n(44),ye=n.n(Oe),we=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"text-hero"},r.a.createElement("h1",null,"Note fullstack application"),r.a.createElement("p",null,"End to end note application ",r.a.createElement("br",null)," build with React, Redux, NodeJS,",r.a.createElement("br",null)," MongoDB and Sass.",r.a.createElement("br",null)," MVC architecture and full CRUD.")),r.a.createElement("div",{className:"web-logos flex justify-center"},r.a.createElement("div",{className:"logo-container"},r.a.createElement("img",{className:"tech-logo",src:fe.a,alt:""}),r.a.createElement("p",null,"React")),r.a.createElement("div",{className:"logo-container"},r.a.createElement("img",{className:"tech-logo",src:de.a,alt:""}),r.a.createElement("p",null,"Redux")),r.a.createElement("div",{className:"logo-container"},r.a.createElement("img",{className:"tech-logo",src:Ee.a,alt:""}),r.a.createElement("p",null,"NodeJS")),r.a.createElement("div",{className:"logo-container"},r.a.createElement("img",{className:"tech-logo",src:ge.a,alt:""}),r.a.createElement("p",null,"MongoDB")),r.a.createElement("div",{className:"logo-container"},r.a.createElement("img",{className:"tech-logo",src:ye.a,alt:""}),r.a.createElement("p",null,"Sass"))))}}]),n}(a.Component);n(78);var Ne=function(e){return r.a.createElement("button",{className:"toggle-button",onClick:e.click},r.a.createElement("div",{className:"toggle-button__line"}),r.a.createElement("div",{className:"toggle-button__line"}),r.a.createElement("div",{className:"toggle-button__line"}))},je=(n(79),function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"renderContent",value:function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"/noteApp"},"Notes")))}},{key:"render",value:function(){return r.a.createElement("header",{className:"toolbar"},r.a.createElement("nav",{className:"toolbar__navigation"},r.a.createElement("div",{className:"toolbar__toggle-button"},r.a.createElement(Ne,{click:this.props.drawerClickHandler})),r.a.createElement("div",{className:"toolbar__logo"},r.a.createElement("a",{href:"/"},"NOTES")),r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"toolbar_navigation-items"},this.renderContent())))}}]),n}(a.Component)),ke={fethUser:function(){return function(){var e=Object(N.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("http://localhost:5000/api/current_user");case 2:n=e.sent,t({type:"FETCH_USER",user:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},Ce=Object(s.b)((function(e){return{auth:e.auth}}),ke)(je),Se=(n(80),function(e){var t="side-drawer";return e.show&&(t="side-drawer open"),r.a.createElement("nav",{className:t},r.a.createElement("h1",null,"Logo"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"/noteApp"},"Notes")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Login With Google"))))}),xe=(n(81),function(e){return r.a.createElement("div",{className:"backdrop",onClick:e.click})}),_e=Object(O.a)(),De=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={sideDrawerOpen:!1},e.drawerToggleClickHandler=function(){e.setState((function(e){return{sideDrawerOpen:!e.sideDrawerOpen}}))},e.backdropClickHandler=function(){e.setState({sideDrawerOpen:!1})},e}return Object(v.a)(n,[{key:"render",value:function(){var e;return this.state.sideDrawerOpen&&(e=r.a.createElement(xe,{click:this.backdropClickHandler})),r.a.createElement("div",{className:"App"},r.a.createElement(Ce,{drawerClickHandler:this.drawerToggleClickHandler}),r.a.createElement(Se,{show:this.state.sideDrawerOpen}),e,r.a.createElement(g.b,{history:_e},r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/",component:we,exact:!0}),r.a.createElement(g.a,{path:"/noteApp",component:me}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Te=Object(i.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"FETCH_USER":return Object(p.a)(Object(p.a)({},e),{},{user:t.user||!1});default:return Object(p.a)({},e)}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SET_NOTES":return console.log("action.note",t.note),Object(p.a)(Object(p.a)({},e),{},{notes:t.notes});case"NOTE_REMOVE":return Object(p.a)(Object(p.a)({},e),{},{notes:e.notes.filter((function(e){return e._id!==t.noteId}))});case"NOTE_ADD":return Object(p.a)(Object(p.a)({},e),{},{notes:[].concat(Object(m.a)(e.notes),[t.note])});case"NOTE_UPDATE":return Object(p.a)(Object(p.a)({},e),{},{notes:e.notes.map((function(e){return e._id===t.note._id?t.note:e}))});default:return Object(p.a)({},e)}}}),Re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,ze=Object(i.e)(Te,Re(Object(i.a)(u.a)));o.a.render(r.a.createElement(s.a,{store:ze},r.a.createElement(l.a,null,r.a.createElement(De,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.8475c6b4.chunk.js.map