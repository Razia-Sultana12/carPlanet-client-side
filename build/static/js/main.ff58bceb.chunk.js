(this["webpackJsonpassignment-12-client"]=this["webpackJsonpassignment-12-client"]||[]).push([[0],{157:function(e,t,c){},158:function(e,t,c){},184:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),a=c(52),r=c.n(a),s=(c(157),c.p,c(158),c(21)),o=c(28),l=c(20),j=c(14),d=c(250),b=c(254),x=c(244),h=c(251),O=c(260),u=c(247),m=c(59),g=c(129),p={apiKey:"AIzaSyDueC_RedUJYF_2OOz4fILTolbKRn8BTOQ",authDomain:"assignment-12-f406a.firebaseapp.com",projectId:"assignment-12-f406a",storageBucket:"assignment-12-f406a.appspot.com",messagingSenderId:"412739400322",appId:"1:412739400322:web:d4d779f2cab6ee7c0f3a9b"};(function(){Object(g.a)(p)})();var f=function(){var e=Object(i.useState)({}),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(i.useState)(!0),r=Object(j.a)(a,2),s=r[0],o=r[1],l=Object(i.useState)(""),d=Object(j.a)(l,2),b=d[0],x=d[1],h=Object(i.useState)(!1),O=Object(j.a)(h,2),u=O[0],g=O[1],p=Object(i.useState)(""),f=Object(j.a)(p,2),v=f[0],y=(f[1],Object(m.b)());Object(i.useEffect)((function(){var e=Object(m.c)(y,(function(e){n(e||{}),o(!1)}));return function(){return e}}),[]),Object(i.useEffect)((function(){fetch("http://localhost:5000/users/".concat(c.email)).then((function(e){return e.json()})).then((function(e){return g(e.admin)}))}),[c.email]);var w=function(e,t){var c={email:e,displayName:t};fetch("http://localhost:5000/users",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(c)}).then()};return{user:c,isLoading:s,authError:b,registerUser:function(e,t,c,i){o(!0),Object(m.a)(y,e,t).then((function(t){x(""),n({email:e,displayName:c}),w(e,c,"POST"),Object(m.f)(y.currentUser,{displayName:c}).then((function(){})).catch((function(e){})),i.replace("/")})).catch((function(e){x(e.message),console.log(e)})).finally((function(){return o(!1)}))},loginUser:function(e,t,c,i){o(!0),Object(m.d)(y,e,t).then((function(e){var t,n=(null===c||void 0===c||null===(t=c.state)||void 0===t?void 0:t.from)||"/";i.replace(n),x("")})).catch((function(e){x(e.message)})).finally((function(){return o(!1)}))},logout:function(){o(!0),Object(m.e)(y).then((function(){})).catch((function(e){})).finally((function(){return o(!1)}))},admin:u,token:v}},v=c(0),y=Object(i.createContext)(null),w=function(e){var t=e.children,c=f();return Object(v.jsx)(y.Provider,{value:c,children:t})},S=function(){return Object(i.useContext)(y)},k=c.p+"static/media/bglog.bb949f8a.jpg",A=function(){var e=Object(i.useState)({}),t=Object(j.a)(e,2),c=t[0],n=t[1],a=S(),r=a.user,m=a.loginUser,g=a.isLoading,p=a.authError,f=Object(o.h)(),y=Object(o.g)(),w=function(e){var t=e.target.name,i=e.target.value,a=Object(l.a)({},c);a[t]=i,n(a)};return Object(v.jsxs)(d.a,{container:!0,spacing:2,children:[Object(v.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(v.jsx)("img",{sx:{width:"100%"},src:k,alt:""})}),Object(v.jsxs)(d.a,{sx:{mt:8},item:!0,xs:12,md:6,children:[Object(v.jsx)(b.a,{variant:"h4",gutterBottom:!0,color:"info.main",children:"Please Login"}),Object(v.jsxs)("form",{onSubmit:function(e){m(c.email,c.password,f,y),e.preventDefault()},children:[Object(v.jsx)(x.a,{label:"Email",name:"email",onBlur:w,sx:{width:"90%",m:1},id:"outlined-size-small",defaultValue:"",size:"small"}),Object(v.jsx)(x.a,{label:"Password",name:"password",type:"password",onBlur:w,sx:{width:"90%",m:1},id:"outlined-size-small",defaultValue:"",size:"small"}),Object(v.jsx)(h.a,{type:"submit",sx:{bgcolor:"info.main",color:"white",m:1,":hover":{bgcolor:"info.main"}},children:"Login"}),Object(v.jsx)(s.c,{style:{textDecoration:"none",display:"block"},to:"/register",children:Object(v.jsx)(h.a,{children:"New User?Please Register"})})]}),g&&Object(v.jsx)(O.a,{}),(null===r||void 0===r?void 0:r.email)&&Object(v.jsx)(u.a,{severity:"success",children:"Login Successfull!"}),p&&Object(v.jsx)(u.a,{severity:"error",children:p})]})]})},C=c(233),P=c(265),B=c(261),D=c(264),E=c(263),z=c(262),W=function(e){var t=e.explor,c=t._id,i=t.title,n=t.description,a=t.image,r=t.price;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(d.a,{item:!0,xs:12,sm:12,md:4,children:Object(v.jsx)(B.a,{sx:{maxWidth:345},children:Object(v.jsxs)(z.a,{children:[Object(v.jsx)(E.a,{component:"img",height:"200",image:a,alt:"green iguana"}),Object(v.jsxs)(D.a,{children:[Object(v.jsx)(b.a,{gutterBottom:!0,variant:"h5",component:"div",children:i}),Object(v.jsx)(b.a,{variant:"body2",color:"text.secondary",children:n}),Object(v.jsxs)(b.a,{gutterBottom:!0,variant:"h6",component:"div",children:["Price: ",r]}),Object(v.jsx)(s.b,{style:{textDecoration:"none"},to:"/order/".concat(c),children:Object(v.jsx)(h.a,{sx:{bgcolor:"blueviolet",color:"white",":hover":{backgroundColor:"rebeccapurple"}},children:"Buy Now"})})]})]})})})})},I=function(){var e=Object(i.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){fetch("https://fierce-peak-59128.herokuapp.com/cars").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),Object(v.jsx)(C.a,{sx:{flexGrow:1},children:Object(v.jsx)(P.a,{children:Object(v.jsx)(d.a,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:4,md:12},children:c.map((function(e){return Object(v.jsx)(W,{explor:e},e.title)}))})})})},T=c.p+"static/media/carbg.7394f512.svg",L=c.p+"static/media/dashbg.bdf1f185.jpg",R=function(){var e={backgroundImage:"url(".concat(L,")"),backgroundAttachment:"fixed",backgroundSize:"cover"};return Object(v.jsx)("div",{style:e,children:Object(v.jsx)(P.a,{children:Object(v.jsxs)(d.a,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[Object(v.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(v.jsx)("img",{style:{width:400},src:T,alt:""})}),Object(v.jsxs)(d.a,{item:!0,xs:12,md:6,children:[Object(v.jsx)(b.a,{variant:"h4",sx:{color:"info.main",fontWeight:"500",textAlign:"center"},children:"About Us"}),Object(v.jsx)(b.a,{sx:{color:"gray"},children:"No Stress, No Pressure. Just Great Cars Delivered. Put Worry In Your Rearview - Driveway Offers a Worry-Free 7-Day Guarantee! Delivery W/ Purchase. Nationwide. Extensive Inventory. No-Haggle. Best Price Up Front. Worry Free Guarantee. Car Buying Online. Brands: Honda, Acura, BMW, Ford, Jeep, Lexus, Mercedes Benz, Subaru, Toyota."})]})]})})})},M=function(e){var t=e.car,c=t._id,i=t.title,n=t.description,a=t.image,r=t.price;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(d.a,{item:!0,xs:12,sm:12,md:4,children:Object(v.jsx)(B.a,{sx:{maxWidth:345},children:Object(v.jsxs)(z.a,{children:[Object(v.jsx)(E.a,{component:"img",height:"200",image:a,alt:"green iguana"}),Object(v.jsxs)(D.a,{children:[Object(v.jsx)(b.a,{gutterBottom:!0,variant:"h5",component:"div",children:i}),Object(v.jsx)(b.a,{variant:"body2",color:"text.secondary",children:n}),Object(v.jsxs)(b.a,{gutterBottom:!0,variant:"h6",component:"div",children:["Price: ",r]}),Object(v.jsx)(s.b,{style:{textDecoration:"none"},to:"/order/".concat(c),children:Object(v.jsx)(h.a,{sx:{bgcolor:"blueviolet",color:"white",":hover":{backgroundColor:"rebeccapurple"}},children:"Buy Now"})})]})]})})})})},N=function(){var e=Object(i.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){fetch("https://fierce-peak-59128.herokuapp.com/cars").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),Object(v.jsx)(C.a,{sx:{flexGrow:1},children:Object(v.jsxs)(P.a,{children:[Object(v.jsx)(b.a,{sx:{textAlign:"center",fontWeight:"500",color:"rebeccapurple",m:3},variant:"h4",children:"Our New Collections"}),Object(v.jsx)(d.a,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:4,md:12},children:c.slice(0,6).map((function(e){return Object(v.jsx)(M,{car:e},e.title)}))})]})})},Y=c(257),U=c(234),q=c(235),G=function(e){var t=e.reviewUi,c=t.name,i=t.comment,n=t.rating;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(d.a,{item:!0,xs:12,sm:12,md:4,children:Object(v.jsx)(B.a,{sx:{maxWidth:345,textAlign:"center",bgcolor:"lightpurple",color:"white"},children:Object(v.jsx)(z.a,{children:Object(v.jsxs)(D.a,{children:[Object(v.jsxs)(b.a,{variant:"h5",bgcolor:"rebeccapurple",color:"white",children:[Object(v.jsx)(U.a,{})," ",c]}),Object(v.jsx)(Y.a,{}),Object(v.jsx)(b.a,{variant:"h5",color:"text.secondary",children:i}),Object(v.jsx)(q.a,{style:{color:"goldenrod"}}),Object(v.jsx)(q.a,{style:{color:"goldenrod"}}),Object(v.jsx)(q.a,{style:{color:"goldenrod"}}),Object(v.jsxs)(b.a,{variant:"h6",color:"text.secondary",children:["Rating : ",n]})]})})})})})},V=function(){var e=Object(i.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){fetch("https://fierce-peak-59128.herokuapp.com/reviews").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),Object(v.jsx)(C.a,{sx:{flexGrow:1},children:Object(v.jsxs)(P.a,{children:[Object(v.jsx)(b.a,{sx:{textAlign:"center",fontWeight:"500",color:"rebeccapurple",m:3},variant:"h4",children:"Our Customers Review"}),Object(v.jsx)(d.a,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:4,md:12},children:c.map((function(e){return Object(v.jsx)(G,{reviewUi:e},e._id)}))})]})})},F=c(236),_=c.p+"static/media/loginBG.bb68ef06.jpg",J=(c.p,function(){var e={backgroundImage:"url(".concat(_,")"),backgroundAttachment:"fixed",backgroundSize:"cover",height:"100vh",marginTop:"15px",marginBottom:"35px"},t={display:"flex",alignItems:"center",height:400};return Object(v.jsx)("div",{style:e,children:Object(v.jsx)(P.a,{sx:{flexGrow:1},children:Object(v.jsxs)(d.a,{container:!0,spacing:2,children:[Object(v.jsx)(d.a,{item:!0,style:Object(l.a)(Object(l.a)({},t),{},{textAlign:"left"}),xs:12,md:6,children:Object(v.jsxs)(F.a,{children:[Object(v.jsxs)(b.a,{sx:{color:"white"},variant:"h3",children:["Welcome To",Object(v.jsx)("br",{}),"Carplanet"]}),Object(v.jsx)(b.a,{variant:"h6",sx:{my:3,fontSize:13,fontWeight:300,color:"lightgray"},children:"Your journey starts here.We are always working for make you journey comfortable and memorable.Your comfortablity & safety is our promise.Keep smiling & keep traveling with the most comfortable & luxurious car!"}),Object(v.jsx)(s.b,{to:"/explore",children:Object(v.jsx)(h.a,{variant:"contained",style:{backgroundColor:"white",color:"blueviolet",borderColor:"blueviolet"},children:"Explore More"})})]})}),Object(v.jsx)(d.a,{item:!0,xs:12,md:6,style:t,children:Object(v.jsx)("img",{style:{width:"350px"},alt:""})})]})})})}),H=c.p+"static/media/blackimg.2f0ec482.jpg",K=c(237),Q=c(238),$=c(239),X=c(240),Z=c(241),ee=c(131),te=c.n(ee),ce=c(132),ie=c.n(ce),ne=function(){var e={backgroundImage:"url(".concat(H,")"),backgroundAttachment:"fixed",backgroundSize:"cover",marginTop:"25px"};return Object(v.jsx)("div",{style:e,children:Object(v.jsxs)(P.a,{children:[Object(v.jsx)(C.a,{sx:{width:"100%"},children:Object(v.jsxs)(d.a,{my:"10px",container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[Object(v.jsxs)(d.a,{item:!0,xs:12,md:3,children:[Object(v.jsx)(b.a,{variant:"h5",color:"white",children:"About"}),Object(v.jsx)(b.a,{color:"lightgray",children:"We provide best services in the city.Our products are always affordable for our users."})]}),Object(v.jsxs)(d.a,{item:!0,xs:12,md:3,children:[Object(v.jsx)(b.a,{variant:"h5",color:"white",children:"Contact"}),Object(v.jsx)(b.a,{color:"lightgray",children:"Address:Street road,California"}),Object(v.jsx)(b.a,{color:"lightgray",children:"Email:carplanet@gmail.com"}),Object(v.jsxs)(b.a,{color:"lightgray",children:[Object(v.jsx)(te.a,{})," Call Us : 0011233488"]}),Object(v.jsxs)(b.a,{color:"lightgray",children:[Object(v.jsx)(K.a,{}),Object(v.jsx)(Q.a,{}),Object(v.jsx)($.a,{}),Object(v.jsx)(X.a,{}),Object(v.jsx)(Z.a,{})]})]}),Object(v.jsxs)(d.a,{item:!0,xs:12,md:3,children:[Object(v.jsx)(b.a,{variant:"h5",color:"white",children:"Useful Links"}),Object(v.jsx)(b.a,{color:"lightgray",children:"Home "}),Object(v.jsx)(b.a,{color:"lightgray",children:"Explore "}),Object(v.jsx)(b.a,{color:"lightgray",children:" About Us "}),Object(v.jsx)(b.a,{color:"lightgray",children:" Services"})]}),Object(v.jsxs)(d.a,{item:!0,xs:12,md:3,children:[Object(v.jsx)(b.a,{variant:"h5",color:"white",children:"Subscribe"}),Object(v.jsx)(b.a,{color:"lightgray",children:"Youtube | LinkedIn | Pinterest"}),Object(v.jsx)(b.a,{color:"lightgray",children:"Subscribe to our channel"}),Object(v.jsxs)(b.a,{color:"lightgray",children:[Object(v.jsx)(ie.a,{})," Send us mail at : carplanet@email.com"]})]})]})}),Object(v.jsx)(b.a,{color:"lightgray",my:"10px",textAlign:"center",children:"Copyright \xa9 Carplanet. All rights reserved. Legal notice"})]})})},ae=c.p+"static/media/oilcar.e0c88220.jpg",re=c.p+"static/media/alignment.jpg.ed0b7a0d.crdownload",se=c.p+"static/media/engine.10de8b46.webp",oe=c.p+"static/media/repair.f9371a50.jpeg",le=c.p+"static/media/car.e66a9bf2.jpg",je=function(){var e={backgroundImage:"url(".concat(H,")"),backgroundAttachment:"fixed",backgroundSize:"cover"};return Object(v.jsxs)("div",{style:e,children:[Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsxs)(P.a,{children:[Object(v.jsx)(b.a,{sx:{fontWeight:"500",color:"white",textAlign:"center"},variant:"h4",children:"Our Services"}),Object(v.jsx)(b.a,{color:"lightgray",textAlign:"center",children:"Our Talented Cleaner Team Works Hard Everyday To Provide One Of the Best Services For You. Our Team Goes Above and Beyond To Cater To Each Project\u2019s Specific Needs.Call Us Now. 24/7 Emergency Service. Grease Pumping. Septic Tank Cleaning. Services: Residential Service, Commercial Service, Municipality Service, Restaurant Service."})]}),Object(v.jsxs)(d.a,{my:"55px",container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[Object(v.jsx)(d.a,{item:!0,xs:12,md:2,children:Object(v.jsx)(B.a,{sx:{maxWidth:345},children:Object(v.jsxs)(z.a,{children:[Object(v.jsx)(E.a,{component:"img",height:"140",image:ae,alt:"green iguana"}),Object(v.jsx)(D.a,{children:Object(v.jsx)(b.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Oil Change Service"})})]})})}),Object(v.jsx)(d.a,{item:!0,xs:12,md:2,children:Object(v.jsx)(B.a,{sx:{maxWidth:345},children:Object(v.jsxs)(z.a,{children:[Object(v.jsx)(E.a,{component:"img",height:"170",image:re,alt:"green iguana"}),Object(v.jsx)(D.a,{children:Object(v.jsx)(b.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Alignment"})})]})})}),Object(v.jsx)(d.a,{item:!0,xs:12,md:2,children:Object(v.jsx)(B.a,{sx:{maxWidth:345},children:Object(v.jsxs)(z.a,{children:[Object(v.jsx)(E.a,{component:"img",height:"140",image:se,alt:"green iguana"}),Object(v.jsx)(D.a,{children:Object(v.jsx)(b.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Engines & Transmissions"})})]})})}),Object(v.jsx)(d.a,{item:!0,xs:12,md:2,children:Object(v.jsx)(B.a,{sx:{maxWidth:345},children:Object(v.jsxs)(z.a,{children:[Object(v.jsx)(E.a,{component:"img",height:"110",image:le,alt:"green iguana"}),Object(v.jsx)(D.a,{children:Object(v.jsx)(b.a,{gutterBottom:!0,variant:"h5",component:"div",children:"30 000 / 60 000 / 90 000 SERVICE"})})]})})}),Object(v.jsx)(d.a,{item:!0,xs:12,md:2,children:Object(v.jsx)(B.a,{sx:{maxWidth:345},children:Object(v.jsxs)(z.a,{children:[Object(v.jsx)(E.a,{component:"img",height:"140",image:oe,alt:"green iguana"}),Object(v.jsx)(D.a,{children:Object(v.jsx)(b.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Break Repair & Service"})})]})})}),Object(v.jsx)(d.a,{item:!0,xs:12,md:2,children:Object(v.jsx)(B.a,{sx:{maxWidth:345,height:245,bgcolor:"lightgray",textAlign:"center",":hover":{bgcolor:"rebeccapurple",color:"white"}},children:Object(v.jsx)(z.a,{children:Object(v.jsx)(D.a,{children:Object(v.jsxs)(b.a,{marginY:"50px",gutterBottom:!0,variant:"h5",component:"div",children:["SEE ALL ",Object(v.jsx)(b.a,{variant:"h4",children:"SERVICES"})]})})})})})]})]})},de=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(J,{}),Object(v.jsx)(R,{}),Object(v.jsx)(N,{}),Object(v.jsx)(je,{}),Object(v.jsx)(V,{}),Object(v.jsx)(ne,{})]})},be=c(258),xe=c(259),he=c(256),Oe=c.p+"static/media/car-service.52b83451.png",ue=c(242),me=c(253),ge=function(){var e=S(),t=e.user,c=e.logout;return Object(v.jsx)(C.a,{sx:{flexGrow:1},children:Object(v.jsx)(be.a,{position:"static",sx:{bgcolor:"text.primary"},children:Object(v.jsxs)(xe.a,{children:[Object(v.jsx)(he.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2}}),Object(v.jsxs)(b.a,{variant:"h4",component:"div",sx:{flexGrow:1},children:[Object(v.jsx)("img",{width:"42",height:"42",src:Oe}),Object(v.jsx)("span",{className:"color",children:"CarPlanet"})]}),Object(v.jsx)(s.b,{to:"/home",children:Object(v.jsx)(h.a,{color:"inherit",sx:{textDecoration:"none",color:"white"},children:"Home"})}),Object(v.jsx)(s.b,{to:"/dashboard",children:Object(v.jsx)(h.a,{color:"inherit",sx:{textDecoration:"none",color:"white"},children:"DashBoard"})}),Object(v.jsx)(s.b,{to:"/explore",children:Object(v.jsx)(h.a,{color:"inherit",sx:{textDecoration:"none",color:"white"},children:"Explore"})}),(null===t||void 0===t?void 0:t.email)?Object(v.jsxs)(h.a,{onClick:c,color:"inherit",children:["LogOut ",Object(v.jsx)(ue.a,{})]}):Object(v.jsx)(s.b,{to:"/login",children:Object(v.jsx)(h.a,{color:"inherit",sx:{textDecoration:"none",color:"white"},children:"Login"})}),t.email&&Object(v.jsx)(me.a,{alt:"Remy Sharp",src:t.photoURL})]})})})},pe=function(){var e=Object(i.useState)({}),t=Object(j.a)(e,2),c=t[0],n=t[1],a=S(),r=a.user,o=a.registerUser,m=a.isLoading,g=a.authError,p=function(e){var t=e.target.name,i=e.target.value,a=Object(l.a)({},c);a[t]=i,n(a),console.log(a)};return Object(v.jsx)("div",{children:Object(v.jsxs)(d.a,{container:!0,spacing:2,children:[Object(v.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(v.jsx)("img",{sx:{width:"100%"},src:k,alt:""})}),Object(v.jsxs)(d.a,{sx:{mt:8},item:!0,xs:12,md:6,children:[Object(v.jsx)(b.a,{variant:"h4",gutterBottom:!0,color:"info.main",children:"Please Register"}),!m&&Object(v.jsxs)("form",{onSubmit:function(e){c.password===c.password2?(o(c.email,c.password),e.preventDefault()):alert("Password didn't match")},children:[Object(v.jsx)(x.a,{label:"Name",name:"name",onChange:p,sx:{width:"90%",m:1},id:"outlined-size-small",defaultValue:"",size:"small"}),Object(v.jsx)(x.a,{label:"Email",name:"email",onChange:p,sx:{width:"90%",m:1},id:"outlined-size-small",defaultValue:"",size:"small"}),Object(v.jsx)(x.a,{label:"Password",name:"password",type:"password",onChange:p,sx:{width:"90%",m:1},id:"outlined-size-small",defaultValue:"",size:"small"}),Object(v.jsx)(x.a,{label:"Re-enter Your Password",name:"password2",type:"password",onChange:p,sx:{width:"90%",m:1},id:"outlined-size-small",defaultValue:"",size:"small"}),Object(v.jsx)(h.a,{type:"submit",sx:{bgcolor:"info.main",color:"white",m:1,":hover":{bgcolor:"info.main"}},children:"Register"}),Object(v.jsx)(s.c,{style:{textDecoration:"none",display:"block"},to:"/login",children:Object(v.jsx)(h.a,{children:"Already Registered?Please Login"})})]}),m&&Object(v.jsx)(O.a,{}),(null===r||void 0===r?void 0:r.email)&&Object(v.jsx)(u.a,{severity:"success",children:"Congrats!You have successfully registered!"}),g&&Object(v.jsx)(u.a,{severity:"error",children:g})]})]})})},fe=c(243),ve=c(252),ye=c(134),we=c.n(ye),Se=c(133),ke=c.n(Se),Ae=function(){var e=Object(i.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(i.useState)(!1),r=Object(j.a)(a,2),s=r[0],o=r[1];return Object(v.jsxs)(C.a,{sx:{textAlign:"center"},xs:12,children:[Object(v.jsxs)(b.a,{sx:{textAlign:"center",m:3,color:"info.main"},variant:"h4",children:[Object(v.jsx)(ke.a,{sx:{fontSize:"40px"}}),"Make Admin"]}),Object(v.jsxs)("form",{sx:{textAlign:"center"},onSubmit:function(e){var t={email:c};fetch("https://fierce-peak-59128.herokuapp.com/users/admin",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.modifiedCount&&(console.log(e),o(!0))})),e.preventDefault()},children:[Object(v.jsx)(x.a,{label:"Email",name:"email",type:"email",onBlur:function(e){n(e.target.value)},sx:{width:"75%",m:1},id:"outlined-size-small",defaultValue:"",size:"small"}),Object(v.jsx)(h.a,{sx:{display:"block",mx:"auto"},type:"submit",variant:"contained",children:"Make Admin"})]}),s&&Object(v.jsx)(u.a,{severity:"success",children:"Made Admin successfully!"})]})},Ce=c(86),Pe=c.n(Ce),Be=c(66),De=function(){var e=Object(Be.a)(),t=e.register,c=e.handleSubmit,i=e.reset;return Object(v.jsxs)(C.a,{sx:{textAlign:"center"},xs:12,children:[Object(v.jsx)(b.a,{sx:{textAlign:"center",m:3,color:"info.main"},variant:"h4",children:"Add More Products"}),Object(v.jsxs)("form",{onSubmit:c((function(e){console.log(e),Pe.a.post("https://fierce-peak-59128.herokuapp.com/cars",e).then((function(e){e.data.insertedId&&(alert("Congrats,You have added a new product successfully!"),i())}))})),children:[Object(v.jsx)(x.a,Object(l.a)({sx:{width:"75%"},id:"filled-basic",label:"Add title",variant:"filled"},t("title",{required:!0}))),Object(v.jsx)(x.a,Object(l.a)({sx:{width:"75%",marginY:"20px"},id:"filled-basic",label:"Add description",variant:"filled"},t("description",{required:!0}))),Object(v.jsx)(x.a,Object(l.a)({sx:{width:"75%"},id:"filled-basic",label:"Add Price",variant:"filled"},t("price",{required:!0}))),Object(v.jsx)(x.a,Object(l.a)({sx:{width:"75%",marginY:"20px"},id:"filled-basic",label:"Add image url",variant:"filled"},t("image",{required:!0}))),Object(v.jsx)(h.a,{sx:{bgcolor:"info.main",color:"white",display:"block",mx:"auto",":hover":{bgcolor:"info.main"}},type:"submit",children:"Add Product"})]})]})},Ee=c(267),ze=c(271),We=c(270),Ie=c(266),Te=c(268),Le=c(269),Re=c(255),Me=function(){var e=Object(i.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1];c._id,c.title,c.description,c.image,c.price;Object(i.useEffect)((function(){fetch("https://fierce-peak-59128.herokuapp.com/cars").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]);return Object(v.jsxs)(P.a,{children:[Object(v.jsx)(b.a,{variant:"h4",color:"info.main",textAlign:"center",my:"15px",children:"Manage Products"}),Object(v.jsx)(Ie.a,{component:Re.a,children:Object(v.jsxs)(Ee.a,{sx:{minWidth:650},"aria-label":"simple table",children:[Object(v.jsx)(Te.a,{children:Object(v.jsxs)(Le.a,{children:[Object(v.jsx)(We.a,{children:"Product ID"}),Object(v.jsx)(We.a,{align:"right",children:"Title"}),Object(v.jsx)(We.a,{align:"right",children:"Price($)"}),Object(v.jsx)(We.a,{align:"right",children:"Delete"})]})}),Object(v.jsx)(ze.a,{children:c.map((function(e){return Object(v.jsxs)(Le.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(v.jsx)(We.a,{component:"th",scope:"row",children:e._id}),Object(v.jsx)(We.a,{align:"right",children:e.title}),Object(v.jsx)(We.a,{align:"right",children:e.price}),Object(v.jsx)(We.a,{align:"right",children:Object(v.jsx)(h.a,{onClick:function(){return function(e){var t="https://fierce-peak-59128.herokuapp.com/cars/".concat(e);fetch(t,{method:"DELETE"}).then((function(e){return e.json()})).then((function(t){if(console.log(t),t.deletedCount){alert("Deleted Successfully");var i=c.filter((function(t){return t._id!==e}));n(i)}}))}(e._id)},children:"Delete"})})]},e._id)}))})]})})]})},Ne=function(){return Object(v.jsx)("div",{children:Object(v.jsx)(b.a,{variant:"h3",children:"My Orders"})})},Ye=function(){var e=S().user,t=Object(Be.a)(),c=t.register,i=t.handleSubmit,n=t.reset;return Object(v.jsxs)(C.a,{sx:{textAlign:"center"},xs:12,children:[Object(v.jsx)(b.a,{sx:{textAlign:"center",m:3,color:"info.main"},variant:"h4",children:"Want to Give Some Review?"}),Object(v.jsxs)("form",{onSubmit:i((function(e){console.log(e),Pe.a.post("https://fierce-peak-59128.herokuapp.com/reviews",e).then((function(e){e.data.insertedId&&(alert("Congrats,Review Added successfully!"),n())}))})),children:[Object(v.jsx)(x.a,Object(l.a)({sx:{width:"75%"},id:"filled-basic",label:"name",variant:"filled"},c("name",{required:!0}))),Object(v.jsx)(x.a,Object(l.a)(Object(l.a)({sx:{width:"75%",marginY:"20px"},id:"filled-basic",label:"Email",variant:"filled"},c("email",{required:!0})),{},{defaultValue:null===e||void 0===e?void 0:e.email})),Object(v.jsx)(x.a,Object(l.a)({sx:{width:"75%"},id:"filled-basic",label:"comment",variant:"filled"},c("comment",{required:!0}))),Object(v.jsx)(x.a,Object(l.a)({sx:{width:"75%",marginY:"20px"},id:"filled-basic",label:"Rating",variant:"filled"},c("rating",{required:!0}))),Object(v.jsx)(h.a,{sx:{bgcolor:"info.main",color:"white",display:"block",mx:"auto",":hover":{bgcolor:"info.main"}},type:"submit",children:"Add Review"})]})]})},Ue=c.p+"static/media/pay1.c1e46b71.jfif",qe=function(){var e={backgroundImage:"url(".concat(Ue,")"),backgroundAttachment:"fixed",backgroundSize:"cover",height:"100vh",marginTop:"15px",marginBottom:"35px"};return Object(v.jsx)("div",{style:e,children:Object(v.jsx)(b.a,{variant:"h4",textAlign:"center",color:"info.main",paddingY:"120px",children:"Payment Method Coming Soon..."})})},Ge=function(){return Object(v.jsx)("div",{children:Object(v.jsx)("h1",{children:"Manage All Orders"})})},Ve=c(89),Fe=["children"],_e=function(e){var t=e.children,c=Object(Ve.a)(e,Fe),i=S(),n=i.user,a=i.admin;return i.isLoading?Object(v.jsx)(O.a,{}):Object(v.jsx)(o.b,Object(l.a)(Object(l.a)({},c),{},{render:function(e){var c=e.location;return n.email&&a?t:Object(v.jsx)(o.a,{to:{pathname:"/",state:{from:c}}})}}))},Je=200;var He=function(e){var t=e.window,c=i.useState(!1),n=Object(j.a)(c,2),a=n[0],r=n[1],l=Object(o.j)(),d=l.path,x=l.url,O=S(),u=O.admin,m=O.logout,g=function(){r(!a)},p=Object(v.jsxs)("div",{children:[Object(v.jsx)(xe.a,{}),Object(v.jsx)(Y.a,{}),Object(v.jsx)(s.b,{style:{textDecoration:"none"},to:"/home",children:Object(v.jsx)(h.a,{color:"inherit",children:"Home"})}),!u&&Object(v.jsxs)(C.a,{children:[Object(v.jsx)(Y.a,{}),Object(v.jsx)(s.b,{style:{textDecoration:"none"},to:"".concat(x,"/myorders"),children:Object(v.jsx)(h.a,{color:"inherit",children:"My Orders"})}),Object(v.jsx)(Y.a,{}),Object(v.jsx)(s.b,{style:{textDecoration:"none"},to:"".concat(x,"/pay"),children:Object(v.jsx)(h.a,{color:"inherit",children:"Payment"})}),Object(v.jsx)(Y.a,{}),Object(v.jsx)(s.b,{style:{textDecoration:"none"},to:"".concat(x,"/review"),children:Object(v.jsx)(h.a,{color:"inherit",children:"Review"})})]}),u&&Object(v.jsxs)(C.a,{children:[Object(v.jsx)(Y.a,{}),Object(v.jsx)(s.b,{style:{textDecoration:"none"},to:"".concat(x,"/addProduct"),children:Object(v.jsx)(h.a,{color:"inherit",children:"Add Product"})}),Object(v.jsx)(Y.a,{}),Object(v.jsx)(s.b,{style:{textDecoration:"none"},to:"".concat(x,"/manageProducts"),children:Object(v.jsx)(h.a,{color:"inherit",children:"Manage Products"})}),Object(v.jsx)(Y.a,{}),Object(v.jsx)(s.b,{style:{textDecoration:"none"},to:"".concat(x,"/manageAllOrders"),children:Object(v.jsx)(h.a,{color:"inherit",children:"Manage All Orders"})}),Object(v.jsx)(Y.a,{}),Object(v.jsx)(s.b,{style:{textDecoration:"none"},to:"".concat(x,"/createAdmin"),children:Object(v.jsx)(h.a,{color:"inherit",children:"Make Admin"})})]}),Object(v.jsx)(Y.a,{}),Object(v.jsxs)(h.a,{onClick:m,color:"inherit",children:["LogOut ",Object(v.jsx)(ue.a,{})]})]}),f=void 0!==t?function(){return t().document.body}:void 0;return Object(v.jsxs)(C.a,{sx:{display:"flex"},children:[Object(v.jsx)(fe.a,{}),Object(v.jsx)(be.a,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(Je,"px)")},ml:{sm:"".concat(Je,"px")}},children:Object(v.jsxs)(xe.a,{children:[Object(v.jsx)(he.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:g,sx:{mr:2,display:{sm:"none"}},children:Object(v.jsx)(we.a,{})}),Object(v.jsx)(b.a,{variant:"h6",noWrap:!0,component:"div",children:"DashBoard"})]})}),Object(v.jsxs)(C.a,{component:"nav",sx:{width:{sm:Je},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[Object(v.jsx)(ve.a,{container:f,variant:"temporary",open:a,onClose:g,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:Je}},children:p}),Object(v.jsx)(ve.a,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:Je}},open:!0,children:p})]}),Object(v.jsxs)(C.a,{component:"main",sx:{flexGrow:1,p:3,width:{sm:"calc(100% - ".concat(Je,"px)")}},children:[Object(v.jsx)(xe.a,{}),Object(v.jsx)(R,{}),Object(v.jsxs)(o.d,{children:[Object(v.jsx)(_e,{path:"".concat(d,"/createAdmin"),children:Object(v.jsx)(Ae,{})}),Object(v.jsx)(_e,{path:"".concat(d,"/manageProducts"),children:Object(v.jsx)(Me,{})}),Object(v.jsx)(_e,{path:"".concat(d,"/manageAllOrders"),children:Object(v.jsx)(Ge,{})}),Object(v.jsx)(_e,{path:"".concat(d,"/addProduct"),children:Object(v.jsx)(De,{})}),Object(v.jsx)(o.b,{path:"".concat(d,"/myorders"),children:Object(v.jsx)(Ne,{})}),Object(v.jsx)(o.b,{path:"".concat(d,"/review"),children:Object(v.jsx)(Ye,{})}),Object(v.jsx)(o.b,{path:"".concat(d,"/pay"),children:Object(v.jsx)(qe,{})})]})]})]})},Ke=["children"],Qe=function(e){var t=e.children,c=Object(Ve.a)(e,Ke),i=S(),n=i.user;return i.isLoading?Object(v.jsx)(O.a,{}):Object(v.jsx)(o.b,Object(l.a)(Object(l.a)({},c),{},{render:function(e){var c=e.location;return n.email?t:Object(v.jsx)(o.a,{to:{pathname:"/login",state:{from:c}}})}}))},$e=c(272),Xe=c(248),Ze=function(){var e=Object(o.i)().orderId,t=Object(i.useState)({}),c=Object(j.a)(t,2),n=c[0],a=c[1],r=S().user;Object(i.useEffect)((function(){fetch("https://fierce-peak-59128.herokuapp.com/cars/".concat(e)).then((function(e){return e.json()})).then((function(e){return a(e)}))}),[e]);var s={purchase:n},O=s.title,u=s.price,m=Object(Be.a)(),g=m.register,p=m.handleSubmit;return Object(v.jsx)(P.a,{children:Object(v.jsxs)(d.a,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[Object(v.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(B.a,{sx:{maxWidth:345,margin:10},children:Object(v.jsxs)(z.a,{children:[Object(v.jsx)(E.a,{component:"img",height:"200",image:n.image,alt:"green iguana"}),Object(v.jsxs)(D.a,{children:[Object(v.jsx)(b.a,{gutterBottom:!0,variant:"h5",component:"div",children:n.title}),Object(v.jsx)(b.a,{variant:"body2",color:"text.secondary",children:n.description}),Object(v.jsxs)(b.a,{gutterBottom:!0,variant:"h6",component:"div",children:["Price: ",n.price]})]})]})})}),Object(v.jsxs)(d.a,{item:!0,xs:12,md:6,children:[Object(v.jsx)(b.a,{color:"info.main",margin:"5",variant:"h4",children:"Delivery Information"}),Object(v.jsxs)("form",{sx:{margin:15},onSubmit:p((function(e){fetch("https://fierce-peak-59128.herokuapp.com/orders",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log(e),e.insertedId&&alert("Congrats!Order Added Successfully.")}))})),children:[Object(v.jsx)(x.a,Object(l.a)({sx:{width:"75%",marginY:"20px"},id:"filled-basic",label:"title",variant:"filled",defaultValue:O},g("title",{required:!0}))),Object(v.jsx)(x.a,Object(l.a)(Object(l.a)({sx:{width:"75%"},id:"filled-basic",label:"price",variant:"filled"},g("price",{required:!0})),{},{defaultValue:u})),Object(v.jsx)(x.a,Object(l.a)(Object(l.a)({sx:{width:"75%",marginY:"20px"},id:"filled-basic",label:"Email",variant:"filled"},g("email",{required:!0})),{},{defaultValue:null===r||void 0===r?void 0:r.email})),Object(v.jsx)(x.a,Object(l.a)(Object(l.a)({sx:{width:"75%",textAlign:"center"},id:"filled-basic",label:"Name",variant:"filled"},g("name",{required:!0})),{},{defaultValue:null===r||void 0===r?void 0:r.name})),Object(v.jsx)(x.a,Object(l.a)({sx:{width:"75%",marginY:"20px"},id:"filled-basic",label:"Address",variant:"filled"},g("address",{required:!0}))),Object(v.jsx)(x.a,Object(l.a)({sx:{width:"75%"},id:"filled-basic",label:"Phone No",variant:"filled"},g("phonenum",{required:!0}))),Object(v.jsx)(x.a,Object(l.a)({sx:{width:"75%",marginY:"20px"},id:"filled-basic",label:"",type:"date",variant:"filled"},g("date",{required:!0}))),Object(v.jsxs)(b.a,{children:[Object(v.jsx)($e.a,{value:"end",control:Object(v.jsx)(Xe.a,{}),label:"",labelPlacement:"end"}),"Agree to our terms & conditions"]}),Object(v.jsx)(h.a,{sx:{bgcolor:"info.main",color:"white",display:"block",":hover":{bgcolor:"info.main"}},type:"submit",children:"Confirm"})]})]})]})})},et=c.p+"static/media/404.bf501f5e.jpg",tt=function(){var e={backgroundImage:"url(".concat(et,")"),backgroundAttachment:"fixed",backgroundSize:"cover",height:"100vh",marginTop:"15px",marginBottom:"35px"};return Object(v.jsx)("div",{style:e,children:Object(v.jsx)(C.a,{textAlign:"center",alignContent:"verticalCenter",children:Object(v.jsx)(s.b,{to:"/",children:Object(v.jsx)(h.a,{sx:{bgcolor:"blueviolet",color:"white",":hover":{backgroundColor:"rebeccapurple"}},children:"Go Back"})})})})};var ct=function(){return Object(v.jsx)(w,{children:Object(v.jsxs)(s.a,{children:[Object(v.jsx)(ge,{}),Object(v.jsxs)(o.d,{children:[Object(v.jsx)(o.b,{exact:!0,path:"/",children:Object(v.jsx)(de,{})}),Object(v.jsx)(o.b,{path:"/home",children:Object(v.jsx)(de,{})}),Object(v.jsx)(Qe,{path:"/dashboard",children:Object(v.jsx)(He,{})}),Object(v.jsx)(o.b,{path:"/review",children:Object(v.jsx)(Ye,{})}),Object(v.jsx)(Qe,{path:"/explore",children:Object(v.jsx)(I,{})}),Object(v.jsx)(Qe,{path:"/order/:orderId",children:Object(v.jsx)(Ze,{})}),Object(v.jsx)(o.b,{path:"/login",children:Object(v.jsx)(A,{})}),Object(v.jsx)(o.b,{path:"/register",children:Object(v.jsx)(pe,{})}),Object(v.jsx)(o.b,{path:"*",children:Object(v.jsx)(tt,{})})]})]})})},it=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,274)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),i(e),n(e),a(e),r(e)}))};r.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(ct,{})}),document.getElementById("root")),it()}},[[184,1,2]]]);
//# sourceMappingURL=main.ff58bceb.chunk.js.map