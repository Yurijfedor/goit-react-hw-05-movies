"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{3073:function(t,n,e){e.d(n,{_:function(){return a}});var r=e(6731),c=e(184),a=function(t){var n=t.link,e=n.title,a=n.name,u=n.id,o=t.location;return e?(0,c.jsx)("li",{children:(0,c.jsx)(r.rU,{to:{pathname:"/movies/".concat(u)},state:{from:o},children:e})}):(0,c.jsx)("li",{children:(0,c.jsx)(r.rU,{to:{pathname:"/movies/".concat(u)},state:{from:o},children:a})})}},9544:function(t,n,e){e.r(n);var r=e(2982),c=e(885),a=e(2791),u=e(7505),o=e(1361),s=e(115),i=e(3073),p=e(7689),l=e(184);n.default=function(){var t=(0,a.useState)([]),n=(0,c.Z)(t,2),e=n[0],f=n[1],h=(0,a.useState)(1),v=(0,c.Z)(h,2),d=v[0],m=v[1],g=(0,a.useState)(0),x=(0,c.Z)(g,2),w=x[0],k=x[1];return(0,a.useEffect)((function(){(0,s.Vu)(d).then((function(t){f((0,r.Z)(t.data.results)),k(t.data.total_pages)}))}),[d]),(0,l.jsxs)("main",{children:[(0,l.jsx)("h1",{children:"Trending today"}),0!==e.length&&(0,l.jsx)("ul",{children:e.map((function(t,n){return(0,l.jsx)(i._,{link:t},n)}))}),(0,l.jsx)(u.Z,{spacing:2,children:!!w&&(0,l.jsx)(o.Z,{count:w,page:d,onChange:function(t,n){return m(n)},showFirstButton:!0,showLastButton:!0})}),(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading subpage..."}),children:(0,l.jsx)(p.j3,{})})]})}},115:function(t,n,e){e.d(n,{NR:function(){return h},Np:function(){return l},Vu:function(){return p},iP:function(){return v},ns:function(){return f},yA:function(){return i}});var r=e(5861),c=e(7757),a=e.n(c),u=e(1044),o="https://api.themoviedb.org/3/",s=new URLSearchParams({api_key:"262a417f78469232900b1579d8d8e776"}),i="https://image.tmdb.org/t/p/w500",p=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("".concat(o,"trending/all/week?").concat(s,"&page=").concat(n));case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("".concat(o,"movie/").concat(n,"?").concat(s));case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("".concat(o,"movie/").concat(n,"/credits?").concat(s));case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("".concat(o,"movie/").concat(n,"/reviews?").concat(s));case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(a().mark((function t(n,e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.ZP.get("".concat(o,"search/movie?").concat(s,"&query=").concat(n,"&page=").concat(e));case 3:return r=t.sent,t.abrupt("return",r);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n,e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.e47f9cb8.chunk.js.map