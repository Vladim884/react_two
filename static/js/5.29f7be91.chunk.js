(this.webpackJsonpreact_two=this.webpackJsonpreact_two||[]).push([[5],{288:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var s=t(50),n=t(51),i=t(53),r=t(52),o=t(0),c=t.n(o),l=t(9),u=t(13),m=function(e){return{isAuth:e.authReducer.isAuth}},d=function(e){var a=function(a){Object(i.a)(o,a);var t=Object(r.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(n.a)(o,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(l.a,{to:"/login"})}}]),o}(c.a.Component);return Object(u.b)(m)(a)}},289:function(e,a,t){e.exports={dialogs:"dialogs_dialogs__3JC4D",dialogs_items:"dialogs_dialogs_items__xZTyZ",active:"dialogs_active__2vUcQ",messages:"dialogs_messages__1d2su",message:"dialogs_message__2aXnj"}},301:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(289),r=t.n(i),o=t(14),c=function(e){var a="/dialogs/"+e.id;return n.a.createElement("div",{className:r.a.dialog},n.a.createElement(o.b,{to:a},n.a.createElement("img",{src:"https://nulm.gov.in/images/user.png",alt:"user",width:"14"}),e.name))},l=function(e){return n.a.createElement("div",{className:r.a.message},e.message)},u=t(97),m=t(85),d=t(129),g=t(29),f=t(81),b=Object(f.a)(30),p=Object(d.a)({form:"dialogsAddMessageForm"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement(m.a,{validate:[f.b,b],component:g.b,name:"newMessageBody",placeholder:"Please, enter your message!"}),n.a.createElement("button",null,"Add Message"))})),_=function(e){var a=e.dialogs.map((function(e){return n.a.createElement(c,{name:e.name,id:e.id})})),t=e.messages.map((function(e){return n.a.createElement(l,{message:e.message,likesCont:e.likesCont})}));return n.a.createElement("div",{className:r.a.dialogs},n.a.createElement("div",{className:r.a.dialogs_items},a),n.a.createElement("div",{className:r.a.messages},t,n.a.createElement("div",null,n.a.createElement(p,{onSubmit:function(a){e.addMessageBLL(a.newMessageBody)}}))))},v=t(13),E=t(288),h=t(10);a.default=Object(h.compose)(Object(v.b)((function(e){return{messageValue:e.dialogsReducer.newMessageText,dialogs:e.dialogsReducer.dialogs,messages:e.dialogsReducer.messages}}),(function(e){return{addMessageBLL:function(a){e(Object(u.a)(a))}}})),E.a)(_)}}]);
//# sourceMappingURL=5.29f7be91.chunk.js.map