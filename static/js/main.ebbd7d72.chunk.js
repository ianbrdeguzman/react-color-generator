(this["webpackJsonpcolor-generator"]=this["webpackJsonpcolor-generator"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(4),o=c.n(a),s=(c(14),c(2)),i=c(5),l=c(6),u=c(9),j=c(8),b=c(0),h=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={copy:!1},e.handleClick=function(){e.setState({copy:!0}),navigator.clipboard.writeText("#".concat(e.props.hex))},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(b.jsxs)("article",{onClick:this.handleClick,className:"color false",style:{backgroundColor:"#".concat(this.props.hex)},children:[Object(b.jsxs)("p",{className:"percent-value",children:[this.props.weight,"%"]}),Object(b.jsxs)("p",{className:"color-value",children:["#",this.props.hex]}),this.state.copy&&Object(b.jsx)("p",{className:"alert",children:"Copied!"})]})}}]),c}(n.Component),p=c(7),f=c.n(p);var O=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)("#f15025"),o=Object(s.a)(a,2),i=o[0],l=o[1],u=Object(n.useState)(!1),j=Object(s.a)(u,2),p=j[0],O=j[1],d=function(e){var t=new f.a(e);r(t.all(5))};return Object(n.useEffect)((function(){var e=setTimeout((function(){O(!1)}),5e3);return function(){return clearTimeout(e)}}),[p]),Object(n.useEffect)((function(){d("#f15025")}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("section",{className:"container",children:[Object(b.jsx)("h3",{children:"color generator"}),Object(b.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),i)try{d(i)}catch(t){O(!0),console.log(t)}},children:[Object(b.jsx)("input",{className:p?"error":"null",type:"text",name:"color",id:"color",onChange:function(e){return l(e.target.value)},placeholder:"#f15025"}),Object(b.jsx)("button",{type:"submit",className:"btn",children:"submit"})]})]}),Object(b.jsx)("section",{className:"colors",children:c.map((function(e,t){var c=e.weight,n=e.hex,r=e.rgb;return Object(b.jsx)(h,{weight:c,hex:n,rgb:r},t)}))})]})};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ebbd7d72.chunk.js.map