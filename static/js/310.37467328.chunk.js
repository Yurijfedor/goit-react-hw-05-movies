"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{3073:function(t,n,e){e.d(n,{_:function(){return a}});var r=e(6731),c=e(184),a=function(t){var n=t.link,e=n.title,a=n.name,u=n.id,o=t.location;return e?(0,c.jsx)("li",{children:(0,c.jsx)(r.rU,{to:{pathname:"/movies/".concat(u)},state:{from:o},children:e})}):(0,c.jsx)("li",{children:(0,c.jsx)(r.rU,{to:{pathname:"/movies/".concat(u)},state:{from:o},children:a})})}},5310:function(t,n,e){e.r(n),e.d(n,{default:function(){return m}});var r,c=e(2982),a=e(885),u=e(6731),o=e(7689),s=e(7505),i=e(1361),p=e(2791),l=e(168),f=e(7691).ZP.input(r||(r=(0,l.Z)(["\n  width: 390px;\n"]))),h=e(115),v=e(3073),d=e(184),m=function(){var t,n=(0,p.useState)([]),e=(0,a.Z)(n,2),r=e[0],l=e[1],m=(0,u.lr)(),g=(0,a.Z)(m,2),x=g[0],w=g[1],Z=(0,p.useState)(""),j=(0,a.Z)(Z,2),k=j[0],b=j[1],y=(0,p.useState)(1),P=(0,a.Z)(y,2),S=P[0],_=P[1],C=(0,p.useState)(0),q=(0,a.Z)(C,2),L=q[0],U=q[1],B=null!==(t=x.get("query"))&&void 0!==t?t:"",F=(0,o.TH)();(0,p.useEffect)((function(){B&&(0,h.iP)(B,S).then((function(t){l((0,c.Z)(t.data.results)),U(t.data.total_pages)}))}),[B,S]);var N=function(){return b("")};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),w({query:k}),_(1),N()},children:[(0,d.jsx)(f,{type:"search",name:"searshQuery",placeholder:"Movie search",value:k,onChange:function(t){b(t.target.value)}}),(0,d.jsx)("button",{type:"submit",children:"Search"})]}),B?(0,d.jsx)("ul",{children:r.map((function(t,n){return(0,d.jsx)(v._,{link:t,location:F},n)}))}):"",(0,d.jsx)(s.Z,{spacing:2,children:!!L&&(0,d.jsx)(i.Z,{count:L,page:S,onChange:function(t,n){return _(n)},showFirstButton:!0,showLastButton:!0})}),(0,d.jsx)(p.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading subpage..."}),children:(0,d.jsx)(o.j3,{})})]})}},115:function(t,n,e){e.d(n,{NR:function(){return h},Np:function(){return l},Vu:function(){return p},iP:function(){return v},ns:function(){return f},yA:function(){return i}});var r=e(5861),c=e(7757),a=e.n(c),u=e(1044),o="https://api.themoviedb.org/3/",s=new URLSearchParams({api_key:"262a417f78469232900b1579d8d8e776"}),i="https://image.tmdb.org/t/p/w500",p=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("".concat(o,"trending/all/week?").concat(s,"&page=").concat(n));case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("".concat(o,"movie/").concat(n,"?").concat(s));case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("".concat(o,"movie/").concat(n,"/credits?").concat(s));case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("".concat(o,"movie/").concat(n,"/reviews?").concat(s));case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(a().mark((function t(n,e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("".concat(o,"search/movie?").concat(s,"&query=").concat(n,"&page=").concat(e));case 3:return r=t.sent,t.abrupt("return",r);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n,e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=310.37467328.chunk.js.map