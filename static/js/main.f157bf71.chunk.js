(this["webpackJsonpfood-blog"]=this["webpackJsonpfood-blog"]||[]).push([[0],{125:function(e,t,n){},126:function(e,t,n){},135:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(34),s=n.n(a),i=(n(125),n(16)),o=n(14),l=(n(126),n(17)),j=n(32),b=n.n(j),d=n(53),u="https://www.themealdb.com/api/json/v1/".concat("1","/"),x=function(){var e=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u+"lookup.php?i="+t);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u+"categories.php");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u+"filter.php?c="+t);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u+"search.php?s="+t);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u+"filter.php?a="+t);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f="SET_CATEGORIES",g="SET_MEALS",y="GET_MEAL",v="GET_AREA",w=n(13),k=n(196),N=n(1),S={search:{display:"flex",alignItems:"center"},input:{border:"none",outline:"none",padding:"15px 28px 15.5px 15px",fontSize:"19px",fontWeight:"500",borderRadius:"5px",width:"100%",maxWidth:"300px"},btn:{padding:"14.5px 21px",borderRadius:"5px",borderBottomLeftRadius:"0",borderTopLeftRadius:"0",position:"relative",right:"10px",backgroundColor:"rgb(1 159 98)"}},C=function(){var e=Object(c.useState)(""),t=Object(w.a)(e,2),n=t[0],r=t[1],a=Object(l.b)(),s=function(){m(n).then((function(e){var t;a((t=e.meals,{type:y,payload:t}))})).catch((function(e){return console.log(e)}))};return Object(N.jsxs)("div",{style:S.search,children:[Object(N.jsx)("input",{id:"search",className:"input",type:"text",style:S.input,placeholder:"Enter name of dish",value:n,onKeyDown:function(e){"Enter"===e.key&&s()},onChange:function(e){return r(e.target.value)}}),Object(N.jsx)(i.b,{to:"meals/".concat(n),className:"link",children:Object(N.jsx)(k.a,{variant:"contained",style:S.btn,onClick:function(){return n.length&&s()},children:"Search"})})]})},z=function(){var e={intro:{maxWidth:"450px",color:"#fff",fontSize:"1.1rem"},label:{display:"block",marginBottom:"7px",fontWeight:"100"}};return Object(N.jsxs)("div",{style:e.intro,children:[Object(N.jsx)("h1",{style:{fontSize:"2.1rem"},children:"Delicious recipes for every day"}),Object(N.jsxs)("div",{style:{marginBottom:"50px"},children:[Object(N.jsx)("p",{className:"par-vis",children:"On our site you will find delicious, available and interesting home cooking recipes.  Can't you cook?  Don't be upset.  It is very easy to fix this, just  more often visit us and you will not only learn, but also love to cook!"}),Object(N.jsx)("p",{className:"par",children:"The most important secret of a delicious dish are good mood and confidence that you will succeed!  Love what you do!  Love to cook!  Cook with joy and you will succeed!"})]}),Object(N.jsx)("label",{htmlFor:"search",style:e.label,children:"Quick search for a dish"}),Object(N.jsx)(C,{})]})},B=n(197),T=function(){return Object(N.jsx)("section",{className:"banner",children:Object(N.jsx)("div",{className:"banner-wrapper",children:Object(N.jsx)(B.a,{children:Object(N.jsx)(z,{})})})})},E=n(184),W=n(202);function A(){return Object(N.jsx)(E.a,{sx:{width:"100%"},children:Object(N.jsx)(W.a,{style:{color:"#2baf64"}})})}var M=n(26),I=n(203),F=n(207),R=n(206),L=n(198),D=n(205);function G(e){var t=e.strCategory,n=e.strCategoryThumb,c=e.strCategoryDescription;return Object(N.jsx)(I.a,{sx:{maxWidth:345},children:Object(N.jsx)(i.b,{to:"/category/".concat(t),className:"link",children:Object(N.jsxs)(D.a,{className:"card",children:[Object(N.jsx)(R.a,{component:"img",height:"220",image:n,alt:t,style:{objectFit:"contain"}}),Object(N.jsxs)(F.a,{style:{flex:"1"},children:[Object(N.jsx)(L.a,{gutterBottom:!0,variant:"h5",component:"div",children:t}),Object(N.jsxs)(L.a,{className:"description",color:"text.secondary",style:{fontSize:"1.06rem"},children:[c.slice(0,45),"..."]})]})]})})})}var H=function(){var e=Object(l.c)((function(e){return e.categories}));return Object(N.jsx)("div",{className:"list",children:e.map((function(e){return Object(N.jsx)(G,Object(M.a)({},e),e.idCategory)}))})},P=function(){var e=Object(l.c)((function(e){return e.categories}));return Object(N.jsxs)("section",{className:"section",children:[Object(N.jsx)("h2",{style:{fontSize:"2rem"},children:"Dish recipes"}),Object(N.jsx)(B.a,{style:{minHeight:"400px"},children:e.length?Object(N.jsx)(H,{}):Object(N.jsx)(A,{})})]})},_=n(189),Y={subscription:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gridAutoColumns:"100%",gap:"2rem",justifyContent:"center",alignItems:"center"},title:{fontSize:"2rem",margin:"10px 0"},subtitle:{fontSize:"1.25rem",marginBottom:"70px"},btn:{backgroundColor:"rgb(1 159 98)",padding:"10px 5px",width:"90%"}},q=function(){return Object(N.jsxs)("section",{className:"section",children:[Object(N.jsx)("h2",{style:Y.title,children:"Subscribe to daily recipes"}),Object(N.jsx)("div",{style:Y.subtitle,className:"subtitle-subscrip",children:"Subscribe to the newsletter to receive new recipes"}),Object(N.jsxs)(B.a,{style:Y.subscription,children:[Object(N.jsx)("div",{children:Object(N.jsx)(_.a,{fullWidth:!0,id:"outlined-basic",label:"Name",variant:"outlined"})}),Object(N.jsx)("div",{children:Object(N.jsx)(_.a,{fullWidth:!0,id:"outlined-basic",label:"Email",variant:"outlined"})}),Object(N.jsx)("div",{children:Object(N.jsx)(k.a,{variant:"contained",size:"large",style:Y.btn,children:"Subscribe"})})]})]})},J=function(){var e=Object(l.b)();return Object(c.useEffect)((function(){h().then((function(t){e(function(e){return{type:f,payload:e}}(t.categories))})).catch((function(e){return console.log(e)}))}),[]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(T,{}),Object(N.jsx)(P,{}),Object(N.jsx)(q,{})]})},V=n(199),K=n(200),Q=n.p+"static/media/logo.3e8b5f96.svg",U=n(208),X=n(192),Z=n(209),$={width:"100%",maxWidth:360,display:"flex"};function ee(){return Object(N.jsxs)(U.a,{sx:$,component:"nav","aria-label":"mailbox folders",className:"menu",children:[Object(N.jsx)(X.a,{children:Object(N.jsxs)(i.b,{to:"/",className:"menu-link",children:[" ",Object(N.jsx)(Z.a,{primary:"Home"})]})}),Object(N.jsx)(X.a,{children:Object(N.jsx)(i.b,{to:"#",className:"menu-link",children:Object(N.jsx)(Z.a,{primary:"Recipes"})})}),Object(N.jsx)(X.a,{children:Object(N.jsxs)(i.b,{to:"/blog",className:"menu-link",children:[" ",Object(N.jsx)(Z.a,{primary:"Blog"})]})})]})}function te(){return Object(N.jsx)(E.a,{sx:{flexGrow:1},style:{position:"fixed",width:"100%",top:"0",left:"0",right:"0",zIndex:"1000"},children:Object(N.jsx)(V.a,{position:"static",style:{backgroundColor:"rgba(6, 17, 30, .95)"},children:Object(N.jsxs)(K.a,{style:{minHeight:"58px",justifyContent:"space-between"},children:[Object(N.jsx)(i.b,{to:"/",children:Object(N.jsx)("img",{src:Q,alt:"logo"})}),Object(N.jsx)(ee,{}),Object(N.jsx)(i.b,{to:"/login",className:"link",style:{color:"#fff"},children:Object(N.jsx)(k.a,{color:"inherit",size:"small",variant:"outlined",children:"Login"})})]})})})}var ne=n(98),ce=n.n(ne);function re(e){var t=e.strMeal,n=e.strMealThumb,c=e.idMeal;return Object(N.jsx)(I.a,{sx:{maxWidth:345,padding:1},children:Object(N.jsxs)(i.b,{to:"/meal/".concat(c),className:"link",style:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%",textAlign:"center"},children:[Object(N.jsx)(R.a,{component:"img",height:"200",image:n,alt:t,style:{objectFit:"contain"}}),Object(N.jsx)(F.a,{children:Object(N.jsxs)(L.a,{className:"description",gutterBottom:!0,component:"div",style:{fontSize:"1.13rem",fontWeight:"500"},children:[t.slice(0,20),"..."]})}),Object(N.jsxs)(k.a,{variant:"text",size:"large",style:{color:"rgb(0, 187, 119)"},children:["Read more",Object(N.jsx)(ce.a,{style:{marginLeft:"3px"}})]})]})})}var ae=function(e){var t=e.meals,n=void 0===t?{}:t;return Object(N.jsx)("div",{className:"list",children:n.map((function(e){return Object(N.jsx)(re,Object(M.a)({},e),e.idMeal)}))})},se=n(99),ie=n.n(se),oe=function(e){var t=e.goBack;return Object(N.jsxs)(k.a,{variant:"text",style:{color:"rgb(0, 187, 119)",marginBottom:"12px",display:"flex",justifyContent:"start",alignSelf:"start"},onClick:t,children:[Object(N.jsx)(ie.a,{style:{marginRight:"3px"}}),"Go back"]})},le=function(){var e=Object(o.g)().name,t=Object(o.f)().goBack,n=Object(l.b)(),r=Object(l.c)((function(e){return e.meals}));return Object(c.useEffect)((function(){p(e).then((function(e){n(function(e){return{type:g,payload:e}}(e.meals))})),window.scrollTo(0,0)}),[e]),Object(N.jsx)("section",{className:"section section--category",children:Object(N.jsxs)(B.a,{style:{minHeight:"400px"},children:[Object(N.jsx)("h1",{style:{fontSize:"2rem"},children:e}),Object(N.jsx)(oe,{goBack:t}),r.length?Object(N.jsx)(ae,{meals:r}):Object(N.jsx)(A,{})]})})};function je(){return Object(N.jsx)("footer",{position:"static",style:{backgroundColor:"rgb(7 21 37)"},children:Object(N.jsxs)(K.a,{style:{minHeight:"58px",justifyContent:"space-between"},className:"subfooter",children:[Object(N.jsx)(i.b,{to:"/",children:Object(N.jsx)("img",{src:Q,alt:"logo"})}),Object(N.jsx)(ee,{})]})})}var be=n(86),de=n.n(be),ue=n(187),xe=n(5),he=n(4),pe=n(212),me=n(214),Oe=n(186),fe=n(85),ge=n(211),ye=n(213),ve=n(210),we=n(204),ke=Object(he.a)(Oe.a)((function(e){var t,n=e.theme;return t={},Object(xe.a)(t,"&.".concat(fe.a.head),{backgroundColor:"#131d29",color:n.palette.common.white}),Object(xe.a)(t,"&.".concat(fe.a.body),{fontSize:14}),t})),Ne=Object(he.a)(ve.a)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}}));function Se(e){var t=e.recipe,n=void 0===t?{}:t;return Object(N.jsx)(ge.a,{component:we.a,children:Object(N.jsxs)(pe.a,{"aria-label":"ingredient table",children:[Object(N.jsx)(ye.a,{children:Object(N.jsxs)(ve.a,{children:[Object(N.jsx)(ke,{align:"left",children:"Ingredients"}),Object(N.jsx)(ke,{align:"left",children:"Measure"})]})}),Object(N.jsx)(me.a,{children:Object.keys(n).map((function(e){return e.includes("Ingredient")&&n[e]?Object(N.jsxs)(Ne,{children:[Object(N.jsx)(ke,{component:"th",scope:"row",align:"left",children:n[e]}),Object(N.jsx)(ke,{align:"left",children:n["strMeasure".concat(e.slice(13))]})]},e):null}))})]})})}var Ce=function(e){var t=e.recipe,n=void 0===t?{}:t,c={recipeWrapper:{display:"flex",flexWrap:"wrap",gap:"3rem",textAlign:"start"},title:{fontSize:"1.8rem",marginTop:"0"},image:{width:"320px"},instructions:{fontSize:"1.1rem"},name:{display:"flex",alignItems:"center",fontSize:"1.07rem",fontWeight:"500",marginTop:"15px"}};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{style:c.recipeWrapper,children:[Object(N.jsx)("img",{src:n.strMealThumb,alt:n.strMeal,style:c.image}),Object(N.jsxs)("div",{className:"recipe-title",children:[Object(N.jsx)("h2",{style:c.title,children:n.strMeal}),n.strCategory?Object(N.jsxs)("div",{style:c.name,children:[Object(N.jsx)(de.a,{fontSize:"large",style:{color:"rgb(0, 187, 119)"}}),"Category:",Object(N.jsx)(i.b,{to:"/category/".concat(n.strCategory),className:"link-ctg",children:n.strCategory})]}):null,n.strArea?Object(N.jsxs)("div",{style:c.name,children:[Object(N.jsx)(de.a,{fontSize:"large",style:{color:"rgb(0, 187, 119)"}}),"Area:",Object(N.jsxs)(i.b,{to:"/area/".concat(n.strArea),className:"link-ctg",children:[" ",n.strArea]})]}):null]})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{children:"Instruction"}),Object(N.jsx)("p",{style:c.instructions,children:n.strInstructions})]}),Object(N.jsx)(Se,{recipe:n}),n.strYoutube?Object(N.jsxs)(ue.a,{children:[Object(N.jsx)("h2",{children:"Video Recipe"}),Object(N.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(n.strYoutube.slice(-11)),title:n.idMeal})]}):null]})},ze=function(){var e=Object(o.g)().idMeal,t=Object(c.useState)([]),n=Object(w.a)(t,2),r=n[0],a=n[1],s=Object(o.f)().goBack;return Object(c.useEffect)((function(){x(e).then((function(e){return a(e.meals[0])})),window.scrollTo(0,0)}),[e]),Object(N.jsxs)("section",{className:"section",style:{paddingTop:"70px"},children:[Object(N.jsx)("h1",{style:{fontSize:"2rem",paddingBottom:"30px"},children:"Recipe"}),Object(N.jsxs)(B.a,{className:"recipe-container",children:[r.idMeal?Object(N.jsx)(Ce,{recipe:r}):Object(N.jsx)(A,{}),Object(N.jsx)(oe,{goBack:s})]})]})},Be=function(){var e=Object(l.c)((function(e){return e.meal||[]})),t=Object(o.f)().goBack;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(N.jsx)("section",{className:"section section--search",children:Object(N.jsxs)(B.a,{style:{textAlign:"start"},className:"recipe-container",children:[Object(N.jsx)("h1",{style:{fontSize:"1.8rem",marginBottom:"0"},children:"Result of your search"}),e.length?Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(ae,{meals:e})}):Object(N.jsx)("div",{style:{fontSize:"23px",marginBottom:"10px"},children:"Unfortunately this dish is not in the catalog..."}),Object(N.jsx)(oe,{goBack:t})]})})},Te=n(101),Ee={categories:[],meals:[],meal:[],filterArea:[]},We=Object(Te.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case f:return Object(M.a)(Object(M.a)({},e),{},{categories:c});case g:return Object(M.a)(Object(M.a)({},e),{},{meals:c});case y:return Object(M.a)(Object(M.a)({},e),{},{meal:c});case v:return Object(M.a)(Object(M.a)({},e),{},{filterArea:c});default:return e}})),Ae=function(){var e=Object(o.g)().area,t=Object(o.f)().goBack,n=Object(l.b)(),r=Object(l.c)((function(e){return e.filterArea}));return Object(c.useEffect)((function(){O(e).then((function(e){n(function(e){return{type:v,payload:e}}(e.meals))})),window.scrollTo(0,0)}),[e]),Object(N.jsxs)("section",{className:"section",style:{paddingTop:"70px"},children:[Object(N.jsx)("h2",{children:e}),Object(N.jsxs)(B.a,{children:[Object(N.jsx)(oe,{goBack:t}),Object(N.jsx)(ae,{meals:r})]})]})},Me=function(){return Object(N.jsx)("div",{style:{fontSize:"30px",padding:"100px 10px 10px"},children:"404 Not Found"})},Ie=function(){return Object(N.jsx)(B.a,{children:Object(N.jsx)("h1",{style:{paddingTop:"70px"},children:"Blog Page"})})},Fe=n(194),Re=n(188),Le=n(201),De=n(191),Ge=n(100),He=n.n(Ge),Pe=n(87),_e=n(195),Ye=Object(Pe.a)();function qe(){return Object(N.jsx)(_e.a,{theme:Ye,children:Object(N.jsxs)(B.a,{component:"main",maxWidth:"xs",children:[Object(N.jsx)(Re.a,{}),Object(N.jsxs)(E.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center",position:"relative",top:"45vh",transform:"translateY(-50%)"},children:[Object(N.jsx)(Fe.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(N.jsx)(He.a,{})}),Object(N.jsx)(L.a,{component:"h1",variant:"h5",children:"Login"}),Object(N.jsxs)(E.a,{component:"form",onSubmit:function(e){e.preventDefault()},noValidate:!0,sx:{mt:1},children:[Object(N.jsx)(_.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(N.jsx)(_.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(N.jsx)(Le.a,{control:Object(N.jsx)(De.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(N.jsx)(k.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},style:{backgroundColor:"rgb(1, 159, 98)"},children:"Sign In"})]})]})]})})}var Je=function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(i.a,{basename:"/food-blog",children:Object(N.jsxs)(l.a,{store:We,children:[Object(N.jsx)(te,{}),Object(N.jsx)("main",{className:"content",children:Object(N.jsxs)(o.c,{children:[Object(N.jsx)(o.a,{exact:!0,path:"/",component:J}),Object(N.jsx)(o.a,{path:"/category/:name",component:le}),Object(N.jsx)(o.a,{path:"/meal/:idMeal",component:ze}),Object(N.jsx)(o.a,{path:"/meals/:name",component:Be}),Object(N.jsx)(o.a,{path:"/area/:area",component:Ae}),Object(N.jsx)(o.a,{path:"/login",component:qe}),Object(N.jsx)(o.a,{path:"/blog",component:Ie}),Object(N.jsx)(o.a,{component:Me})]})}),Object(N.jsx)(je,{})]})})})},Ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,215)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(Je,{})}),document.getElementById("root")),Ve()}},[[135,1,2]]]);
//# sourceMappingURL=main.f157bf71.chunk.js.map