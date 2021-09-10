(this["webpackJsonpcounter-counter"]=this["webpackJsonpcounter-counter"]||[]).push([[0],{151:function(e,t,n){},152:function(e,t,n){},276:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(42),a=n.n(r),i=(n(151),n(37)),o=(n(152),n(305)),u=n(301),l=n(298),d=n(39),j=n(14),b=n(2);var m=function(){return Object(b.jsx)("div",{children:"You can get a sense for Nike's two primary purposes almost instantly -- fitness, and people. "})},h=n(31),O=n(10),p=n(7),x=n(20),f=n(18),v=n(19),g=n(294),w=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h1",{className:"curHeader",children:[" ","Current count  "+e.count]}),Object(b.jsx)(g.a,{variant:"outlined",color:"primary",onClick:e.handleIncrement,children:"Increment"}),Object(b.jsx)(g.a,{variant:"outlined",color:"secondary",onClick:e.handleDecrement,children:"Decrement"}),Object(b.jsx)(g.a,{variant:"outlined",color:"default",onClick:e.handleReset,children:"Reset"})]})},y=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var c;return Object(O.a)(this,n),(c=t.call(this,e)).state={count:0},c.handleIncrement=c.handleIncrement.bind(Object(x.a)(c)),c.handleDecrement=c.handleDecrement.bind(Object(x.a)(c)),c.handleReset=c.handleReset.bind(Object(x.a)(c)),c}return Object(p.a)(n,[{key:"handleIncrement",value:function(){var e=this;this.setState((function(t){return{count:e.state.count+1}}))}},{key:"handleDecrement",value:function(){var e=this;this.setState((function(t){return{count:e.state.count-1}}))}},{key:"handleReset",value:function(){this.setState((function(e){return{count:0}}))}},{key:"componentDidMount",value:function(){console.log("did mount")}},{key:"componentWillUnmount",value:function(){console.log("will unmount")}},{key:"render",value:function(){var e={handleIncrement:this.handleIncrement,count:this.state.count,handleDecrement:this.handleDecrement,handleReset:this.handleReset};return Object(b.jsx)(w,Object(h.a)({},e))}}]),n}(s.a.Component),S=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h1",{className:"num",children:["how much?",Object(b.jsxs)("div",{children:["=",e.numOfCounters]})]}),Object(b.jsx)(g.a,{variant:"contained",color:"primary",onClick:e.counterIncrement,children:"Increment Counter"}),Object(b.jsx)(g.a,{variant:"contained",color:"secondary",onClick:e.counterDecrement,children:"Decrement Counter"}),Object(b.jsx)(g.a,{variant:"contained",color:"default",onClick:e.counterReset,children:"Reset Counter"})]})},C=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(e){var c;return Object(O.a)(this,n),(c=t.call(this,e)).state={numOfCounters:1},c.counterIncrement=c.counterIncrement.bind(Object(x.a)(c)),c.counterDecrement=c.counterDecrement.bind(Object(x.a)(c)),c.counterReset=c.counterReset.bind(Object(x.a)(c)),c.evenValue=c.evenValue.bind(Object(x.a)(c)),c}return Object(p.a)(n,[{key:"counterIncrement",value:function(){var e=this;this.setState((function(t){return{numOfCounters:e.state.numOfCounters+1,evenValue:function(){}}}))}},{key:"counterDecrement",value:function(){var e=this;this.state.numOfCounters>1&&this.setState((function(t){return{numOfCounters:e.state.numOfCounters-1}}))}},{key:"counterReset",value:function(){this.setState((function(e){return{numOfCounters:1}}))}},{key:"evenValue",value:function(){var e=this;this.state.count%2===0&&this.setState((function(t){return{count:e.state.count+1}}))}},{key:"componentDidMount",value:function(){console.log("did mount")}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.numOfCounters;t+=1)e.push(Object(b.jsx)(y,{},t));var n={numOfCounters:this.state.numOfCounters,counterIncrement:this.counterIncrement,counterDecrement:this.counterDecrement,counterReset:this.counterReset,evenValue:this.evenValue};return Object(b.jsxs)("div",{children:[Object(b.jsx)(S,Object(h.a)({},n)),e]})}}]),n}(s.a.Component),R=n(296),L=n(297);var N=function(){return Object(b.jsxs)(s.a.Fragment,{children:[Object(b.jsx)(R.a,{}),Object(b.jsx)(L.a,{className:"error",children:"404 - \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430 :("})]})},k=n(65),D=n(82),F=D.a().shape({email:D.b().email("Email is invalid").required("Email is required"),password:D.b().typeError("Must be a string").required("Password is required").min(6,"min 6 symbols")}),I=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Log in"}),Object(b.jsx)(k.b,{initialValues:{email:"",password:""},validateOnBlur:!0,onSubmit:function(e,t){var n=t.resetForm;console.log(e),n()},validationSchema:F,children:function(e){var t=e.values,n=e.errors,c=e.touched,s=e.handleChange,r=e.handleBlur,a=e.isValid,i=e.handleSubmit,o=e.dirty;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{htmlFor:"email",className:"names",children:"Email"})," ",Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"inputs",type:"email",name:"email",onChange:s,onBlur:r,value:t.email})]}),c.email&&n.email&&Object(b.jsx)("p",{className:"errors-message",children:n.email}),Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{htmlFor:"password",className:"names",children:"Password"})," ",Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"inputs",type:"password",name:"password",onChange:s,onBlur:r,value:t.password})]}),c.password&&n.password&&Object(b.jsx)("p",{className:"errors-message",children:n.password}),Object(b.jsx)("button",{className:"btn",disabled:!a&&!o,onClick:i,type:"submit",children:"Enter"}),Object(b.jsx)("pre",{children:Object(b.jsxs)("code",{children:[Object(b.jsx)("strong",{children:"Your creds"})," = ",JSON.stringify(t.email,null,2),",",JSON.stringify(t.password,null,2)]})})]})}})]})},E=n(29),P=Object(E.b)((function(e){return{email:e.LoginReducer.email,password:e.LoginReducer.password}}),null)((function(e){var t=e.email,n=e.password;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h1",{children:["Welcome, ",t," "]}),Object(b.jsxs)("p",{children:["Your password: ",n]})]})})),U=function(e){var t=e.emailUpdate,n=e.passwordUpdate,c=e.onSubmit,s=e.emailSuccess,r=e.passwordSuccess;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Log in with Redux"}),Object(b.jsx)(k.b,{children:Object(b.jsx)(k.a,{onSubmit:c,children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{htmlFor:"email",className:"names",children:"Email"})," ",Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"inputs",type:"email",name:"email",onChange:t,required:!0})]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("label",{htmlFor:"password",className:"names",children:"Password"})," ",Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"inputs",type:"password",name:"password",onChange:n,required:!0,minLength:"6"})]}),Object(b.jsx)(g.a,{variant:"contained",color:"primary",type:"submit",children:"Enter"})]})})}),Object(b.jsx)("div",{children:Object(b.jsx)("pre",{children:Object(b.jsxs)("code",{children:[Object(b.jsx)("strong",{children:"Your creds"})," = ",JSON.stringify(s),",",JSON.stringify(r)]})})})]})},q=n(304),A=Object(q.a)("UPDATE_EMAIL"),J=Object(q.a)("UPDATE_PASSWORD"),V=Object(j.f)(Object(E.b)((function(e){return{email:e.LoginReducer.email,password:e.LoginReducer.password}}),(function(e){return{updateEmail:function(t){return e(A(t))},updatePassword:function(t){return e(J(t))}}}))((function(e){var t=e.updateEmail,n=e.updatePassword;console.log(e);return Object(b.jsx)(U,{emailUpdate:function(e){t(e.target.value)},passwordUpdate:function(e){n(e.target.value)},onSubmit:function(t){t.preventDefault(),e.history.push("/Login-Redux/Success")},emailSuccess:e.email,passwordSuccess:e.password})}))),B=n(302),M=n(299),Y=function(e){var t=e.onSubmit,n=e.emailUpdate,c=e.passwordUpdate,s=e.emailSuccessForm,r=e.passwordSuccessForm;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("form",{onSubmit:t,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email"})," ",Object(b.jsx)("br",{}),Object(b.jsx)(B.a,{className:"inputs",name:"email",component:"input",onChange:n,type:"email",required:!0})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"password",children:"Password"})," ",Object(b.jsx)("br",{}),Object(b.jsx)(B.a,{className:"inputs",name:"password",component:"input",onChange:c,minLength:"6",required:!0,type:"password"})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",className:"btn",children:"Submit"})})]}),Object(b.jsx)("div",{children:Object(b.jsx)("pre",{children:Object(b.jsxs)("code",{children:[Object(b.jsx)("strong",{children:"Your creds"})," = ",JSON.stringify(s),", ",JSON.stringify(r)]})})})]})},T=Y=Object(M.a)({form:"login"})(Y),W=Object(j.f)(Object(E.b)((function(e){return{email:e.LoginReducer.email,password:e.LoginReducer.password}}),(function(e){return{updateEmail:function(t){return e(A(t))},updatePassword:function(t){return e(J(t))}}}))((function(e){var t=e.updateEmail,n=e.updatePassword;return Object(b.jsx)(T,{onSubmit:function(t){t.preventDefault(),e.history.push("/Login-Redux/Success")},emailUpdate:function(e){t(e.target.value)},passwordUpdate:function(e){n(e.target.value)},emailSuccessForm:e.email,passwordSuccessForm:e.password})})));var _,H=function(){var e=["/About","/Counters","/Login","/Login-Redux","/404","/Login-Redux/Success","/Login-Redux-Form"],t=s.a.useState(0),n=Object(i.a)(t,2),c=n[0],r=n[1],a=function(e,t){r(t)};return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(j.a,{path:"/",render:function(t){return Object(b.jsx)(o.a,{position:"static",children:Object(b.jsxs)(u.a,{value:c,onChange:a,children:[Object(b.jsx)(l.a,{label:"About",component:d.b,to:e[0]}),Object(b.jsx)(l.a,{label:"Counters",component:d.b,to:e[1]}),Object(b.jsx)(l.a,{label:"Login",component:d.b,to:e[2]}),Object(b.jsx)(l.a,{label:"Login-Redux",component:d.b,to:e[3]}),Object(b.jsx)(l.a,{label:"Login-Redux-Form",component:d.b,to:e[6]})]})})}}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/About",component:m}),Object(b.jsx)(j.a,{path:"/Counters",component:C}),Object(b.jsx)(j.a,{path:"/Login",component:I}),Object(b.jsx)(j.a,{exact:!0,path:"/Login-Redux",component:V}),Object(b.jsx)(j.a,{path:"/Login-Redux/Success",component:P}),Object(b.jsx)(j.a,{path:"/Login-Redux-Form",component:W}),Object(b.jsx)(j.a,{path:"/404",component:N})]})]})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,307)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))},G=n(23),K=n(11),Q=n(300),X=Object(Q.a)((_={},Object(K.a)(_,A,(function(e,t){return Object(h.a)(Object(h.a)({},e),{},{email:t.payload})})),Object(K.a)(_,J,(function(e,t){return Object(h.a)(Object(h.a)({},e),{},{password:t.payload})})),_),{email:"",password:""}),Z=n(303),$=Object(G.b)({LoginReducer:X,form:Z.a}),ee=Object(G.c)($);a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(E.a,{store:ee,children:Object(b.jsx)(H,{})})}),document.getElementById("root")),z()}},[[276,1,2]]]);
//# sourceMappingURL=main.07141b8a.chunk.js.map