"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{9438:function(n,e,r){r.d(e,{H4:function(){return x},Ke:function(){return d},MB:function(){return l},fW:function(){return g}});var t=r(5861),c=r(7757),u=r.n(c),a=r(4569),i=r.n(a),s=r(2007),o=r.n(s),p=r(9085),f="4568c047ac29c58c34b8c5ba81189d61",h="https://api.themoviedb.org/3/",l=function(){var n=(0,t.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(h,"trending/movie/week?api_key=").concat(f)).then((function(n){return n})).catch((function(n){p.Am.error(n.message)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(u().mark((function n(e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(h,"movie/").concat(e,"?api_key=").concat(f)).then((function(n){return n})).catch((function(n){p.Am.error(n.message)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,t.Z)(u().mark((function n(e,r){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("".concat(h,"movie/").concat(r,"/").concat(e,"?api_key=").concat(f,"&language=en-US&page=1")).then((function(n){return n})).catch((function(n){p.Am.error(n.message)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),g=function(){var n=(0,t.Z)(u().mark((function n(e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==e){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,i().get("".concat(h,"search/movie?api_key=").concat(f,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(n){return n})).catch((function(n){p.Am.error(n.message)}));case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();d.propTypes={id:o().string.isRequired},x.propTypes={page:o().string.isRequired,id:o().string.isRequired},g.propTypes={query:o().string.isRequired}},186:function(n,e,r){r.r(e),r.d(e,{default:function(){return o}});var t=r(885),c=r(2791),u=r(7689),a=r(9438),i=r(9661),s=r(184);function o(){var n=(0,c.useState)([]),e=(0,t.Z)(n,2),r=e[0],o=e[1],p=(0,u.UO)("cast").id;(0,c.useEffect)((function(){""!==p&&(0,a.H4)("reviews",p).then((function(n){var e=n.data;o(e)}))}),[p]);var f=r.results;return(0,s.jsx)(s.Fragment,{children:f&&0!==f.length?(0,s.jsx)(i.xu,{children:(0,s.jsx)(i.xu,{as:"ul",display:"flex",flexDirection:"column",gridGap:"10px",children:f.map((function(n){var e=n.author,r=n.content,t=n.id,c=n.url;return(0,s.jsxs)("li",{children:[(0,s.jsx)("p",{children:(0,s.jsx)("b",{children:e})}),(0,s.jsx)("p",{children:r}),(0,s.jsx)("p",{children:(0,s.jsx)("b",{children:c})}),(0,s.jsx)("p",{})]},t)}))})}):(0,s.jsx)(i.xu,{display:"flex",color:"black",children:(0,s.jsx)("h2",{children:"Sorry, nothing was found (:"})})})}}}]);
//# sourceMappingURL=186.9b312242.chunk.js.map