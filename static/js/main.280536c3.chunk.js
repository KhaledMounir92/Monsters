(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(7),o=n.n(c),a=(n(12),n(2)),i=n(3),u=n(5),h=n(4),l=(n(13),n(14),n(0)),p=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(e){return console.log(this.props),Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(this.props.id,"?set=set2")}),Object(l.jsx)("h2",{children:this.props.monster.name},this.props.id),Object(l.jsx)("p",{children:this.props.monster.email})]})}}]),n}(s.Component),j=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(e){return console.log(this.props),Object(l.jsx)("div",{className:"card-list",children:this.props.monsters.map((function(e){return Object(l.jsx)(p,{id:e.id,monster:e})}))})}}]),n}(s.Component),d=(n(16),function(e){var t=e.placeholder,n=e.HandleChange;return Object(l.jsx)("div",{className:"search",children:Object(l.jsx)("input",{type:"search",placeholder:t,onChange:n})})}),b=(n(17),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,s=t.searchField,r=n.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));return console.log(this.state),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Monster Rodelx"}),Object(l.jsx)(d,{placeholder:"Search",HandleChange:function(t){return e.setState({searchField:t.target.value})}}),Object(l.jsx)(j,{monsters:r})]})}}]),n}(s.Component)),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),r(e),c(e),o(e)}))};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.280536c3.chunk.js.map