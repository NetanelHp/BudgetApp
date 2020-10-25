(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{123:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),o=t.n(c),l=(t(98),t(21)),s=t(11),i=t(13),u=t.n(i),m=t(25),d=t(17),p=t(79),f=t(8),E=function(e,a){switch(a.type){case"TRANSACTION_ERROR":return Object(f.a)(Object(f.a)({},e),{},{error:a.payload});case"GET_TRANSACTIONS":return Object(f.a)(Object(f.a)({},e),{},{loading:!1,transactions:a.payload});case"DELETE_TRANSACTION":return Object(f.a)(Object(f.a)({},e),{},{transactions:e.transactions.filter((function(e){return e._id!==a.payload}))});case"ADD_TRANSACTION":return Object(f.a)(Object(f.a)({},e),{},{transactions:[].concat(Object(p.a)(e.transactions),[a.payload])});default:return e}},b=function(e,a){var t=a.type,n=a.payload;switch(t){case"LOGIN_SUCCESS":return localStorage.setItem("token",n),Object(f.a)(Object(f.a)({},e),{},{token:n,isAuthenticated:!0,loading:!1});case"LOGIN_FAILED":return localStorage.removeItem("token"),Object(f.a)(Object(f.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1});case"USER_LOGOUT":return localStorage.removeItem("token"),Object(f.a)(Object(f.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1,user:null});case"USER_LOADED":return Object(f.a)(Object(f.a)({},e),{},{isAuthenticated:!0,loading:!1,user:n});case"AUTH_ERROR":return localStorage.removeItem("token"),Object(f.a)(Object(f.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1});default:return e}},v=t(23),h=t.n(v),g=function(e){e?h.a.defaults.headers.common["x-auth-token"]=e:delete h.a.defaults.headers.common["x-auth-token"]},O={transactions:[],error:null,loadingTrans:!0},y={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null},j=Object(n.createContext)(),x=function(e){var a=e.children,t=Object(n.useReducer)(E,O),c=Object(d.a)(t,2),o=c[0],l=c[1],s=Object(n.useReducer)(b,y),i=Object(d.a)(s,2),p=i[0],f=i[1],v={headers:{"Content-Type":"application/json"}},x=function(){var e=Object(m.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&g(localStorage.token),e.prev=1,e.next=4,h.a.get("/api/user/auth");case 4:a=e.sent,f({type:"USER_LOADED",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),f({type:"AUTH_ERROR"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(m.a)(u.a.mark((function e(a){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/api/user/login",JSON.stringify(a),v);case 3:t=e.sent,f({type:"LOGIN_SUCCESS",payload:t.data.token}),x(),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),(n=e.t0.response.data.errors)&&n.forEach((function(e){alert(e.msg)})),f({type:"LOGIN_FAILED"});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}(),S=function(){var e=Object(m.a)(u.a.mark((function e(a){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/api/transactions",JSON.stringify(a),v);case 3:t=e.sent,l({type:"GET_TRANSACTIONS",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}(),C=function(){var e=Object(m.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("/api/transactions/".concat(a));case 3:l({type:"DELETE_TRANSACTION",payload:a}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),l({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(a){return e.apply(this,arguments)}}(),A=function(){var e=Object(m.a)(u.a.mark((function e(a){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/transactions/add",JSON.stringify(a),v);case 3:t=e.sent,l({type:"ADD_TRANSACTION",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(j.Provider,{value:{transactions:o.transactions,error:o.error,loadingtrans:o.loading,deleteTransaction:C,addTransaction:A,getTransactions:S,isAuthenticated:p.isAuthenticated,user:p.user,login:N,logout:function(){f({type:"USER_LOGOUT"})},loadUser:x}},a)},N=t(153),S=t(157),C=t(158),A=function(){var e=Object(n.useContext)(j).logout;return r.a.createElement("div",null,r.a.createElement(N.a,{position:"static",style:{background:"#181818"}},r.a.createElement(S.a,{className:"bar"},r.a.createElement(l.b,{to:"/addTrans",style:{textDecoration:"none"}},r.a.createElement(C.a,{style:{background:"transparent",color:"white"}},"Add Transaction")),r.a.createElement(l.b,{to:"/history",style:{textDecoration:"none"}},r.a.createElement(C.a,{style:{background:"#transparent",color:"white"}},"Transaction History")),r.a.createElement(l.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement(C.a,{onClick:e,variant:"contained",color:"secondary",style:{color:"white"}},"Logout")))))};var T=function(){var e=Object(n.useContext)(j).transactions.map((function(e){return e.amount})).reduce((function(e,a){return e+a}),0);return r.a.createElement("div",null,r.a.createElement("h1",null,"Your balance"),r.a.createElement("h3",null,e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," NIS"))},k=t(159),w=t(171),R=t(160),I=function(){var e=Object(n.useState)(""),a=Object(d.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(0),l=Object(d.a)(o,2),s=l[0],i=l[1],u=Object(n.useContext)(j),m=u.transactions,p=u.addTransaction,f=u.user,E=m.map((function(e){return e.amount})).filter((function(e){return e<0})).reduce((function(e,a){return e+a}),0);return r.a.createElement("div",{className:"addExpense"},r.a.createElement("h1",null,"Expense"),0===E?r.a.createElement("h3",null,"0"):r.a.createElement("h3",null,E),r.a.createElement("div",{className:"form"},r.a.createElement(k.a,{className:"form",color:"secondary"},r.a.createElement(w.a,{htmlFor:"expense-text-input"},"Add Expense"),r.a.createElement(R.a,{value:t,onChange:function(e){c(e.target.value)},autoComplete:"off",id:"expense-text-input"})),r.a.createElement(k.a,{className:"form",color:"secondary"},r.a.createElement(w.a,{htmlFor:"expense-amount-input"},"Amount"),r.a.createElement(R.a,{value:s,onChange:function(e){i(e.target.value)},autoComplete:"off",id:"expense-amount-input"})),r.a.createElement(C.a,{onClick:function(e){e.preventDefault();var a={text:t,amount:-s,userID:f._id};p(a),c(""),i(0)},variant:"contained",color:"secondary"},"Submit")))},D=function(){var e=Object(n.useState)(""),a=Object(d.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(0),l=Object(d.a)(o,2),s=l[0],i=l[1],u=Object(n.useContext)(j),m=u.transactions,p=u.addTransaction,f=u.user,E=m.map((function(e){return e.amount})).filter((function(e){return e>0})).reduce((function(e,a){return e+a}),0);return r.a.createElement("div",{className:"addIncome"},r.a.createElement("h1",null,"Income"),r.a.createElement("h3",null,E),r.a.createElement("form",{className:"form"},r.a.createElement(k.a,{className:"form",color:"primary"},r.a.createElement(w.a,{htmlFor:"income-text-input"},"Add Income"),r.a.createElement(R.a,{value:t,onChange:function(e){c(e.target.value)},type:"text",autoComplete:"off",id:"income-text-input"})),r.a.createElement(k.a,{className:"form",color:"primary"},r.a.createElement(w.a,{htmlFor:"incomeAmount-input"},"Amount"),r.a.createElement(R.a,{type:"number",value:s,onChange:function(e){i(e.target.value)},id:"income-amount-input"})),r.a.createElement(C.a,{onClick:function(e){e.preventDefault();var a={text:t,amount:+s,userID:f._id};p(a),c(""),i(0)},variant:"contained",color:"primary"},"Submit")))},_=function(){var e=Object(n.useContext)(j),a=e.getTransactions,t=e.user;return Object(n.useEffect)((function(){if(t){var e={userID:t._id};a(e)}}),[t]),r.a.createElement("div",{className:"AddTrans"},t&&r.a.createElement("h1",null,"Welcome",r.a.createElement("span",null," "),t.name),r.a.createElement("div",{className:"transactions"},r.a.createElement(D,null),r.a.createElement(I,null)),r.a.createElement("div",{className:"balance"},r.a.createElement(T,null)))},L=t(161),U=t(164),W=t(162),F=t(163),G=t(76),q=t.n(G),J=function(e){var a=e.transaction,t=Object(n.useContext)(j).deleteTransaction,c=a.amount>0?"blue":"red";return r.a.createElement(L.a,null,r.a.createElement(W.a,{style:{maxWidth:300},id:a.id,primary:a.text}),r.a.createElement(W.a,{id:a.id,primary:a.amount+" NIS",style:{color:c}}),r.a.createElement(F.a,null,r.a.createElement(U.a,{onClick:function(){return t(a._id)},edge:"end","aria-label":"delete"},r.a.createElement(q.a,null))))},H=t(165),P=function(){var e=Object(n.useContext)(j).transactions;return r.a.createElement("div",{className:"transHistory"},r.a.createElement("div",{className:"transList"},r.a.createElement(H.a,{className:"list",style:{width:"100%",maxWidth:700}},e===[]?r.a.createElement("p",null,"You Have No Transactions"):e.map((function(e){return r.a.createElement(J,{key:e._id,transaction:e})})))))},B=t(34),V=t(170),Y=t(168),M=t(169),z=t(77),K=t.n(z),Q=t(53),X=t(166),Z=t(167),$=Object(X.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),ee=function(){var e=Object(n.useState)(!1),a=Object(d.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)({name:"",email:"",password:"",passwordCheck:""}),i=Object(d.a)(o,2),p=i[0],E=i[1],b=function(e){E(Object(f.a)(Object(f.a)({},p),{},Object(B.a)({},e.target.name,e.target.value)))},v=function(){var e=Object(m.a)(u.a.mark((function e(a){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),j===x){e.next=5;break}alert("passwords does not match"),e.next=18;break;case 5:return t={name:O,email:y,password:j},e.prev=6,n={headers:{"Content-Type":"application/json"}},e.next=10,h.a.post("http://localhost:5000/api/user/register",JSON.stringify(t),n);case 10:alert("Register Success"),c(!0),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(6),(r=e.t0.response.data.errors)&&r.forEach((function(e){alert(e.msg)}));case 18:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(a){return e.apply(this,arguments)}}(),g=$(),O=p.name,y=p.email,j=p.password,x=p.passwordCheck;return t?r.a.createElement(s.a,{to:"/"}):r.a.createElement(Z.a,{component:"main",maxWidth:"xs"},r.a.createElement(Y.a,null),r.a.createElement("div",{className:g.paper},r.a.createElement(V.a,{className:g.avatar},r.a.createElement(K.a,null)),r.a.createElement(Q.a,{component:"h1",variant:"h5"},"Sign Up"),r.a.createElement("form",{className:g.form,noValidate:!0,onSubmit:v},r.a.createElement(M.a,{onChange:b,value:O,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"name",label:"Name",type:"name",id:"name",autoFocus:!0}),r.a.createElement(M.a,{onChange:b,value:y,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"}),r.a.createElement(M.a,{onChange:b,value:j,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(M.a,{onChange:b,value:x,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"passwordCheck",label:"Re-password",type:"password",id:"passwordCheck",autoComplete:"current-password"}),r.a.createElement(C.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:g.submit},"Register"),r.a.createElement(l.b,{to:"/",variant:"body2"},r.a.createElement(C.a,null," Already have an account? Sign In")))))},ae=t(78),te=t.n(ae),ne=Object(X.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.primary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),re=function(){var e=Object(n.useState)({email:"",password:""}),a=Object(d.a)(e,2),t=a[0],c=a[1],o=Object(n.useContext)(j),i=o.login,p=o.isAuthenticated,E=function(e){c(Object(f.a)(Object(f.a)({},t),{},Object(B.a)({},e.target.name,e.target.value)))},b=function(){var e=Object(m.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),i({email:h,password:g});case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),v=ne(),h=t.email,g=t.password;return p?r.a.createElement(s.a,{to:"/addTrans"}):r.a.createElement(Z.a,{component:"main",maxWidth:"xs"},r.a.createElement(Y.a,null),r.a.createElement("div",{className:v.paper},r.a.createElement(V.a,{className:v.avatar},r.a.createElement(te.a,null)),r.a.createElement(Q.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:v.form,noValidate:!0,onSubmit:b},r.a.createElement(M.a,{onChange:E,value:h,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),r.a.createElement(M.a,{onChange:function(e){return E(e)},value:g,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(C.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:v.submit},"Sign In"),r.a.createElement(l.b,{to:"/register",variant:"body2"},r.a.createElement(C.a,null," Don't have an account? Sign Up")))))},ce=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("p",null,"Redirect to",r.a.createElement(l.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement("span",{style:{color:"blueviolet",cursor:"pointer"}}," ","login"," ")),"page"))};localStorage.token&&g(localStorage.token);var oe=function(){var e=Object(n.useContext)(j),a=e.loadUser,t=e.isAuthenticated;return Object(n.useEffect)((function(){a()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement("div",null,t&&r.a.createElement(A,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:re}),r.a.createElement(s.b,{path:"/register",component:ee}),r.a.createElement(s.b,{path:"/addTrans",component:_}),r.a.createElement(s.b,{path:"/history",component:P}),r.a.createElement(s.b,{path:"/*",component:ce})))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null,r.a.createElement(oe,null))),document.getElementById("root"))},93:function(e,a,t){e.exports=t(123)},98:function(e,a,t){}},[[93,1,2]]]);
//# sourceMappingURL=main.f52f9714.chunk.js.map