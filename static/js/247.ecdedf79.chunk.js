"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{9438:function(e,n,t){t.d(n,{H4:function(){return m},Ke:function(){return h},MB:function(){return d},fW:function(){return g}});var r=t(5861),c=t(7757),a=t.n(c),u=t(4569),i=t.n(u),o=t(2007),s=t.n(o),p=t(9085),f="4568c047ac29c58c34b8c5ba81189d61",l="https://api.themoviedb.org/3/",d=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(l,"trending/movie/week?api_key=").concat(f)).then((function(e){return e})).catch((function(e){p.Am.error(e.message)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(l,"movie/").concat(n,"?api_key=").concat(f)).then((function(e){return e})).catch((function(e){p.Am.error(e.message)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(a().mark((function e(n,t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(l,"movie/").concat(t,"/").concat(n,"?api_key=").concat(f,"&language=en-US&page=1")).then((function(e){return e})).catch((function(e){p.Am.error(e.message)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,i().get("".concat(l,"search/movie?api_key=").concat(f,"&language=en-US&query=").concat(n,"&page=1&include_adult=false")).then((function(e){return e})).catch((function(e){p.Am.error(e.message)}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();h.propTypes={id:s().string.isRequired},m.propTypes={page:s().string.isRequired,id:s().string.isRequired},g.propTypes={query:s().string.isRequired}},1247:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var r=t(885),c=t(2791),a=t(9661),u=t(9438),i=t(7689),o=t(184);function s(){var e=(0,c.useState)([]),n=(0,r.Z)(e,2),t=n[0],s=n[1],p=(0,i.UO)("cast").id;(0,c.useEffect)((function(){""!==p&&(0,u.H4)("credits",p).then((function(e){var n=e.data;s(n)}))}),[p]);var f=t.cast;if(f){var l=f.slice(0,12);return(0,o.jsx)(o.Fragment,{children:f&&0!==f.length?(0,o.jsx)(a.xu,{display:"flex",flexDirection:"column",color:"black",children:(0,o.jsx)(a.xu,{as:"ul",display:"grid",gridTemplateColumns:["repeat(6, 200px)"],gridGap:"50px",children:l.map((function(e){var n=e.character,t=e.id,r=e.name,c=e.profile_path,u=e.known_for_department;return(0,o.jsxs)(a.xu,{display:"flex",flexDirection:"column",alignItems:"center",gridGap:"5px",children:[(0,o.jsx)("img",{src:c?"https://image.tmdb.org/t/p/w200".concat(c):"https://dummyimage.com/200x300/000/0011ff&text=Not+find+photo",alt:r}),(0,o.jsx)("p",{children:r}),(0,o.jsx)("p",{children:n}),(0,o.jsx)("p",{children:u})]},t)}))})}):(0,o.jsx)(a.xu,{display:"flex",color:"black",children:(0,o.jsx)("h2",{children:"Sorry, nothing was found (:"})})})}}}}]);
//# sourceMappingURL=247.ecdedf79.chunk.js.map