(this["webpackJsonpcounter-counter"]=this["webpackJsonpcounter-counter"]||[]).push([[0],{138:function(e,t,n){},139:function(e,t,n){},249:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(26),s=n.n(c),i=(n(138),n(24)),o=(n(139),n(286)),u=n(288),l=n(287),d=n(48),h=n(12),j=n(10),b=n(276),m=n(4),O=n(278),p=n(279),f=n(281),x=n(282),v=n(289),g=n(290),C=n(280),k=n(73),y=n(71),w=n(118),S=n.n(w),D=n(119),I=n.n(D),N=n(120),R=n.n(N),A=n(117),F=n.n(A),L=n(2),V=Object(b.a)((function(e){return{root:{maxWidth:545,marginLeft:150,marginTop:20},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:y.a[500]}}}));function E(){var e=V(),t=r.a.useState(!1),n=Object(i.a)(t,2),a=n[0],c=n[1];return Object(L.jsxs)(O.a,{className:e.root,children:[Object(L.jsx)(p.a,{avatar:Object(L.jsx)(g.a,{"aria-label":"recipe",className:e.avatar,children:"R"}),action:Object(L.jsx)(C.a,{"aria-label":"settings",children:Object(L.jsx)(F.a,{})}),title:"Shrimp and Chorizo Paella",subheader:"August 27, 2021"}),Object(L.jsx)(f.a,{children:Object(L.jsx)(k.a,{variant:"body2",color:"textSecondary",component:"p",children:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."})}),Object(L.jsxs)(x.a,{disableSpacing:!0,children:[Object(L.jsx)(C.a,{"aria-label":"add to favorites",children:Object(L.jsx)(S.a,{})}),Object(L.jsx)(C.a,{"aria-label":"share",children:Object(L.jsx)(I.a,{})}),Object(L.jsx)(C.a,{className:Object(m.a)(e.expand,Object(j.a)({},e.expandOpen,a)),onClick:function(){c(!a)},"aria-expanded":a,"aria-label":"show more",children:Object(L.jsx)(R.a,{})})]}),Object(L.jsx)(v.a,{in:a,timeout:"auto",unmountOnExit:!0,children:Object(L.jsxs)(f.a,{children:[Object(L.jsx)(k.a,{paragraph:!0,children:"Method:"}),Object(L.jsx)(k.a,{paragraph:!0,children:"Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."}),Object(L.jsx)(k.a,{paragraph:!0,children:"Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add piment\xf3n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."}),Object(L.jsx)(k.a,{paragraph:!0,children:"Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don\u2019t open.)"}),Object(L.jsx)(k.a,{children:"Set aside off of the heat to let rest for 10 minutes, and then serve."})]})})]})}var T=n(64),B=n(8),q=n(7),M=n(19),P=n(17),z=n(18),J=n(283),H=function(e){return Object(L.jsxs)("div",{children:[Object(L.jsxs)("h1",{className:"curHeader",children:[" ","Current count  "+e.count]}),Object(L.jsx)(J.a,{variant:"outlined",color:"primary",onClick:e.handleIncrement,children:"Increment"}),Object(L.jsx)(J.a,{variant:"outlined",color:"secondary",onClick:e.handleDecrement,children:"Decrement"}),Object(L.jsx)(J.a,{variant:"outlined",color:"default",onClick:e.handleReset,children:"Reset"})]})},W=function(e){Object(P.a)(n,e);var t=Object(z.a)(n);function n(e){var a;return Object(B.a)(this,n),(a=t.call(this,e)).state={count:0},a.handleIncrement=a.handleIncrement.bind(Object(M.a)(a)),a.handleDecrement=a.handleDecrement.bind(Object(M.a)(a)),a.handleReset=a.handleReset.bind(Object(M.a)(a)),a}return Object(q.a)(n,[{key:"handleIncrement",value:function(){var e=this;this.setState((function(t){return{count:e.state.count+1}}))}},{key:"handleDecrement",value:function(){var e=this;this.setState((function(t){return{count:e.state.count-1}}))}},{key:"handleReset",value:function(){this.setState((function(e){return{count:0}}))}},{key:"componentDidMount",value:function(){console.log("did mount")}},{key:"componentWillUnmount",value:function(){console.log("will unmount")}},{key:"render",value:function(){var e={handleIncrement:this.handleIncrement,count:this.state.count,handleDecrement:this.handleDecrement,handleReset:this.handleReset};return Object(L.jsx)(H,Object(T.a)({},e))}}]),n}(r.a.Component),U=function(e){return Object(L.jsxs)("div",{children:[Object(L.jsxs)("h1",{className:"num",children:["how much?",Object(L.jsxs)("div",{children:["=",e.numOfCounters]})]}),Object(L.jsx)(J.a,{variant:"contained",color:"primary",onClick:e.counterIncrement,children:"Increment Counter"}),Object(L.jsx)(J.a,{variant:"contained",color:"secondary",onClick:e.counterDecrement,children:"Decrement Counter"}),Object(L.jsx)(J.a,{variant:"contained",color:"default",onClick:e.counterReset,children:"Reset Counter"})]})},Y=function(e){Object(P.a)(n,e);var t=Object(z.a)(n);function n(e){var a;return Object(B.a)(this,n),(a=t.call(this,e)).state={numOfCounters:1},a.counterIncrement=a.counterIncrement.bind(Object(M.a)(a)),a.counterDecrement=a.counterDecrement.bind(Object(M.a)(a)),a.counterReset=a.counterReset.bind(Object(M.a)(a)),a.evenValue=a.evenValue.bind(Object(M.a)(a)),a}return Object(q.a)(n,[{key:"counterIncrement",value:function(){var e=this;this.setState((function(t){return{numOfCounters:e.state.numOfCounters+1,evenValue:function(){}}}))}},{key:"counterDecrement",value:function(){var e=this;this.state.numOfCounters>1&&this.setState((function(t){return{numOfCounters:e.state.numOfCounters-1}}))}},{key:"counterReset",value:function(){this.setState((function(e){return{numOfCounters:1}}))}},{key:"evenValue",value:function(){var e=this;this.state.count%2===0&&this.setState((function(t){return{count:e.state.count+1}}))}},{key:"componentDidMount",value:function(){console.log("did mount")}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.numOfCounters;t+=1)e.push(Object(L.jsx)(W,{},t));var n={numOfCounters:this.state.numOfCounters,counterIncrement:this.counterIncrement,counterDecrement:this.counterDecrement,counterReset:this.counterReset,evenValue:this.evenValue};return Object(L.jsxs)("div",{children:[Object(L.jsx)(U,Object(T.a)({},n)),e]})}}]),n}(r.a.Component),G=n(284),K=n(285);var Q=function(){return Object(L.jsxs)(r.a.Fragment,{children:[Object(L.jsx)(G.a,{}),Object(L.jsx)(K.a,{className:"error",children:"404 - \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430 :("})]})},X=n(126),Z=n(72),$=function(){var e=Z.a().shape({email:Z.b().email("Email is invalid").required("Email is required"),password:Z.b().typeError("Must be a string").required("Password is required").min(6,"min 6 symbols")});return Object(L.jsxs)("div",{children:[Object(L.jsx)("h1",{children:"Log in"}),Object(L.jsx)(X.a,{initialValues:{email:"",password:""},validateOnBlur:!0,onSubmit:function(e,t){var n=t.resetForm;console.log(e),n()},validationSchema:e,children:function(e){var t=e.values,n=e.errors,a=e.touched,r=e.handleChange,c=e.handleBlur,s=e.isValid,i=e.handleSubmit,o=e.dirty;return Object(L.jsxs)("div",{children:[Object(L.jsxs)("p",{children:[Object(L.jsx)("label",{htmlFor:"email",className:"names",children:"Email"})," ",Object(L.jsx)("br",{}),Object(L.jsx)("input",{className:"inputs",type:"email",name:"email",onChange:r,onBlur:c,value:t.email})]}),a.email&&n.email&&Object(L.jsx)("p",{className:"errors-message",children:n.email}),Object(L.jsxs)("p",{children:[Object(L.jsx)("label",{htmlFor:"password",className:"names",children:"Password"})," ",Object(L.jsx)("br",{}),Object(L.jsx)("input",{className:"inputs",type:"password",name:"password",onChange:r,onBlur:c,value:t.password})]}),a.password&&n.password&&Object(L.jsx)("p",{className:"errors-message",children:n.password}),Object(L.jsx)("button",{className:"btn",disabled:!s&&!o,onClick:i,type:"submit",children:"Enter"}),Object(L.jsx)("pre",{children:Object(L.jsxs)("code",{children:[Object(L.jsx)("strong",{children:"Your creds"})," = ",JSON.stringify(t.email,null,2),",",JSON.stringify(t.password,null,2)]})})]})}})]})};var _=function(){var e=["/About","/Counters","/Login"],t=r.a.useState(0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=function(e,t){c(t)};return Object(L.jsx)("div",{className:"App",children:Object(L.jsxs)(d.a,{children:[Object(L.jsx)(h.a,{path:"/",render:function(t){return Object(L.jsx)(o.a,{position:"static",children:Object(L.jsxs)(u.a,{value:a,onChange:s,children:[Object(L.jsx)(l.a,{label:"About",value:e[0],component:d.b,to:e[0]}),Object(L.jsx)(l.a,{label:"Counters",value:e[1],component:d.b,to:e[1]}),Object(L.jsx)(l.a,{label:"Login",value:e[2],component:d.b,to:e[2]})]})})}}),Object(L.jsxs)(h.c,{children:[Object(L.jsx)(h.a,{path:"/About",component:E}),Object(L.jsx)(h.a,{path:"/Counters",component:Y}),Object(L.jsx)(h.a,{path:"/Login",component:$}),Object(L.jsx)(h.a,{path:"*",component:Q})]})]})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,291)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(L.jsx)(r.a.StrictMode,{children:Object(L.jsx)(_,{})}),document.getElementById("root")),ee()}},[[249,1,2]]]);
//# sourceMappingURL=main.951e71ed.chunk.js.map