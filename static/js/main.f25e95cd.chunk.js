(this.webpackJsonpcard_filter=this.webpackJsonpcard_filter||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(3),i=n.n(s),o=(n(12),n(4)),a=n(5),u=n(7),l=n(6),h=(n(13),n(14),n(0)),d=function(e){return Object(h.jsxs)("div",{className:"card-container",children:[Object(h.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id+100,"?set=set2&size=180x180")}),Object(h.jsx)("h2",{children:e.monster.name}),Object(h.jsx)("h3",{children:e.monster.email})]})},j=(n(16),function(e){return Object(h.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(h.jsx)(d,{monster:e},e.id)}))})}),f=(n(17),function(e){var t=e.Filter,n=e.placeholder;return Object(h.jsx)("input",{className:"search",type:"search",placeholder:n,onChange:t})}),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).Filter=function(t){return e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLocaleLowerCase())}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Monster Finder"}),Object(h.jsx)(f,{Filter:this.Filter,placeholder:"Search monster"}),Object(h.jsx)(j,{monsters:r})]})}}]),n}(c.a.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.f25e95cd.chunk.js.map