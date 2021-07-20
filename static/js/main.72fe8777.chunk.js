(this["webpackJsonpreact-resume"]=this["webpackJsonpreact-resume"]||[]).push([[0],{113:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(10),c=n.n(r),s=n(18),o=n(11),l=n(149),d=n(139),j=n(156),b=n(117),u=n(143),x=n(141),h=n(151),m=n(150),O=n(155),p=n(74),v=n(2),f=Object.entries(p).sort((function(e,t){return e[0].toLowerCase()>t[0].toLowerCase()?1:-1}));function g(e){var t,n,a=null!==(t=f.filter((function(t){var n;return t[0].toLowerCase().startsWith(null!==(n=null===e||void 0===e?void 0:e.toLowerCase())&&void 0!==n?n:"")})))&&void 0!==t?t:new Array;if(0===(null!==(n=null===a||void 0===a?void 0:a.length)&&void 0!==n?n:0))return Object(v.jsx)("button",{children:e});var r=a[0][1];return Object(v.jsx)(i.Suspense,{fallback:Object(v.jsx)("span",{children:"loading..."}),children:Object(v.jsx)(r,{})})}function y(e){var t=a.a.useState(null),n=Object(s.a)(t,2),i=n[0],r=n[1],c=a.a.useState(!1),o=Object(s.a)(c,2),j=o[0],u=o[1],x=a.a.useState(null),p=Object(s.a)(x,2),f=p[0],y=p[1],w=a.a.useState(null),T=Object(s.a)(w,2),A=T[0],C=T[1],L=Boolean(null!==f),D=function(t){t.preventDefault();var n=j;if(i&&(clearTimeout(i),r(null),u(!1),C(null)),"pointerleave"!==t.type){var a=Boolean(t&&("mousedown"===t.type||"pointerdown"===t.type));a&&!n?r(setTimeout((function(){var n;C(null!==(n=t.currentTarget)&&void 0!==n?n:t.target),u(!0),window.isSecureContext?navigator.clipboard.writeText(e.ClipboardText).then((function(){y("success")}),(function(){y("warning")})):y("warning")}),333)):a||n||window.open(e.Link,e.MethodName)}};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(l.a,{displayPrint:"none",children:Object(v.jsxs)(d.a,{item:!0,style:{cursor:"pointer",userSelect:"none",msUserSelect:"none"},children:[Object(v.jsx)(d.a,{container:!0,spacing:1,alignContent:"center",justify:"center",onMouseDown:D,onMouseUp:D,onPointerDown:D,onPointerUp:D,onPointerLeave:D,children:Object(v.jsxs)(d.a,{item:!0,style:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:[Object(v.jsx)(h.a,{children:g(e.Icon)}),Object(v.jsx)(m.a,{open:j,anchorEl:A,transformOrigin:{vertical:50,horizontal:0},children:Object(v.jsx)(b.a,{variant:"overline",style:{margin:"1em",cursor:"pointer"},children:e.DisplayText})})]})}),Object(v.jsx)(O.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:L,message:"success"===f&&L?"Contact information copied to clipboard.":"warning"===f&&L?"Unable to copy contact information to clipboard.":null,autoHideDuration:600,onClose:function(){setTimeout((function(){return y(null)}),600)}},e.MethodName)]})}),Object(v.jsx)(l.a,{display:"none",displayPrint:"block",children:Object(v.jsxs)(d.a,{container:!0,item:!0,style:{paddingRight:"1.0em"},children:[Object(v.jsx)(d.a,{item:!0,style:{paddingRight:"0.25em"},children:g(e.Icon)}),Object(v.jsx)(d.a,{item:!0,style:{paddingRight:"1.0em"},children:Object(v.jsx)(b.a,{children:e.DisplayText})})]})})]})}var w=n(140),T=n(142),A=n(23);function C(e){var t=Object(A.a)(),n=Object(x.a)((function(e){return{root:{flexGrow:1,overflow:"hidden"},padded100:{padding:"".concat(e.spacing(1),"px"),height:"100%"}}}))();return Object(v.jsxs)(d.a,{item:!0,xs:e.xs||"auto",sm:e.sm||"auto",md:e.md||"auto",lg:e.lg||"auto",xl:e.xl||"auto",children:[Object(v.jsx)(l.a,{displayPrint:"none",className:n.padded100,children:Object(v.jsxs)(w.a,{className:n.padded100,children:[e.title&&Object(v.jsx)(b.a,{variant:"h4",style:{flexGrow:1,paddingBottom:"0.25em"},children:e.title}),Object(v.jsx)(T.a,{children:e.children})]})}),Object(v.jsx)(l.a,{display:"none",displayPrint:"block",children:Object(v.jsxs)(l.a,{pl:"1em",children:[Object(v.jsx)(b.a,{variant:"h4",style:{color:t.palette.info.dark,paddingBottom:"0.25em"},children:e.title}),Object(v.jsx)(T.a,{children:e.children})]})})]})}function L(e){var t=Object(A.a)(),n=Object(x.a)((function(e){return{large:{width:e.spacing(15),height:e.spacing(15),margin:"auto",marginTop:"-50px"},name:{textAlign:"center",textTransform:"uppercase"},blurb:{padding:"1em",fontStyle:"italic",fontSize:"smaller",textAlign:"center"},contact:{display:"flex","& > *":{margin:e.spacing(1)}}}}))();function i(){return"".concat(e.info.FirstName," ").concat(e.info.MiddleName).trim()+" ".concat(e.info.LastName)}return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(l.a,{style:{paddingTop:"35px"},displayPrint:"none",children:Object(v.jsx)(C,{children:Object(v.jsxs)(d.a,{container:!0,justify:"center",children:[Object(v.jsx)(d.a,{item:!0,xs:12,children:Object(v.jsx)(j.a,{alt:i(),src:e.info.PhotoUrl,className:n.large})}),Object(v.jsx)(d.a,{item:!0,xs:12,className:n.name,children:Object(v.jsx)(b.a,{variant:"h3",children:i()})}),Object(v.jsx)(d.a,{container:!0,direction:"row",justify:"center",alignContent:"center",className:n.contact,children:Array.isArray(e.info.Contact)&&e.info.Contact.map((function(e,t){return Object(v.jsx)(y,{Link:e.Link,MethodName:e.MethodName,DisplayText:e.DisplayText,Icon:e.Icon,ClipboardText:e.ClipboardText},t.toString())}))}),Object(v.jsx)(d.a,{item:!0,className:n.blurb,children:Object(v.jsx)(b.a,{children:e.info.Blurb})})]})})}),Object(v.jsxs)(l.a,{id:"me",display:"none",displayPrint:"block",children:[Object(v.jsxs)(d.a,{container:!0,children:[Object(v.jsx)(d.a,{item:!0,xs:12,md:12,children:Object(v.jsx)(b.a,{variant:"h3",style:{color:t.palette.info.dark},children:i().toUpperCase()})}),Object(v.jsx)(d.a,{container:!0,item:!0,xs:12,md:12,children:Array.isArray(e.info.Contact)&&e.info.Contact.map((function(e,t){return Object(v.jsx)(y,{Link:e.Link,MethodName:e.MethodName,DisplayText:e.DisplayText,Icon:e.Icon,ClipboardText:e.ClipboardText},t.toString())}))})]}),Object(v.jsx)(u.a,{})]})]})}var D=n(51),N=n(66);function k(e){var t,n,i=Object(x.a)((function(e){return{root:{},duration:Object(N.a)({textAlign:"right"},e.breakpoints.down("xs"),{textAlign:"left"})}}))(),a=new Array;return Array.isArray(e.Duties)&&a.push.apply(a,Object(D.a)(e.Duties)),Array.isArray(e.Achievements)&&a.push.apply(a,Object(D.a)(e.Achievements)),Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{children:[Object(v.jsxs)(d.a,{item:!0,container:!0,xs:12,sm:12,md:12,lg:12,xl:12,children:[Object(v.jsxs)(l.a,{displayPrint:"none",display:"contents",style:{width:"100%"},children:[Object(v.jsx)(d.a,{item:!0,md:8,sm:6,xs:12,children:Object(v.jsx)(b.a,{variant:"subtitle1",children:Object(v.jsx)("strong",{children:e.Title})})}),Object(v.jsx)(d.a,{item:!0,md:4,sm:6,xs:12,children:Object(v.jsxs)(b.a,{variant:"subtitle2",className:i.duration,children:[e.From," - ",e.To]})})]}),Object(v.jsxs)(l.a,{displayPrint:"contents",display:"none",children:[Object(v.jsx)(d.a,{item:!0,xs:6,children:Object(v.jsx)(b.a,{variant:"subtitle1",children:Object(v.jsx)("strong",{children:e.Title})})}),Object(v.jsx)(d.a,{item:!0,xs:6,children:Object(v.jsxs)(b.a,{variant:"subtitle2",style:{textAlign:"right"},children:[e.From," - ",e.To]})})]})]}),(null===e||void 0===e||null===(t=e.Notes)||void 0===t||null===(n=t.trim())||void 0===n?void 0:n.length)>0&&Object(v.jsx)(d.a,{item:!0,sm:12,xs:12,children:Object(v.jsx)(b.a,{variant:"subtitle2",style:{fontSize:"smaller"},children:e.Notes})}),a&&a.length>0&&Object(v.jsx)(d.a,{item:!0,xs:12,children:Object(v.jsx)(b.a,{variant:"body2",children:Object(v.jsx)("ul",{style:{marginTop:"0.25em",marginBottom:"0.5em"},children:a.map((function(e,t){return Object(v.jsx)("li",{children:e},t)}))})})})]})})}function F(e){return Object(v.jsxs)(d.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,children:[Object(v.jsx)(b.a,{variant:"h6",children:e.CompanyName}),Object(v.jsx)(b.a,{variant:"subtitle2",color:"textSecondary",children:e.Description}),void 0!==e.Roles&&e.Roles.map((function(e,t){return Object(v.jsx)(k,{Title:e.Title,From:e.From,To:e.To,Duties:e.Duties,Achievements:e.Achievements,Notes:e.Notes},t)}))]})}function S(e){return void 0===e.companies?Object(v.jsx)(v.Fragment,{}):Object(v.jsx)(C,{title:"Experience",xs:12,sm:12,md:12,lg:12,xl:12,children:e.companies.map((function(e,t){return Object(v.jsx)(F,{Description:e.Description,CompanyName:e.CompanyName,Roles:e.Roles},t)}))})}var M=n(75),P=n(144),E=n(147),B=n(148),I=n(49),U=n(153);function R(e){var t=Object(x.a)((function(){return{root:{},duration:{textAlign:"right"}}}))();function n(){var t,n,i="",a=Boolean(e.From&&String(e.From).trim().length>0),r=Boolean(e.To&&String(e.To).trim().length>0);a&&(i=null!==(t=null===e||void 0===e?void 0:e.From)&&void 0!==t?t:"");(a&&r&&(i+=" - "),r)&&(i+=null!==(n=null===e||void 0===e?void 0:e.To)&&void 0!==n?n:"");return i}return Object(v.jsxs)(d.a,{container:!0,children:[Object(v.jsx)(d.a,{item:!0,md:10,sm:10,xs:12,children:Object(v.jsx)(b.a,{variant:"subtitle1",children:Object(v.jsx)("strong",{children:e.Title})})}),Object(v.jsx)(U.a,{xsDown:!0,children:Object(v.jsx)(d.a,{item:!0,md:2,sm:2,children:Object(v.jsx)(b.a,{variant:"subtitle2",className:t.duration,children:n()})})}),Object(v.jsx)(d.a,{item:!0,md:12,xs:8,children:Object(v.jsx)(b.a,{variant:"body2",children:e.Authority})}),Object(v.jsx)(U.a,{smUp:!0,children:Object(v.jsx)(d.a,{item:!0,xs:4,children:Object(v.jsx)(b.a,{variant:"body2",className:t.duration,children:n()})})}),Object(v.jsx)(d.a,{item:!0,md:12,sm:12,xs:12,children:Object(v.jsx)(b.a,{children:Object(v.jsx)("span",{style:{fontSize:"smaller"},children:e.Text})})})]})}function z(e){return void 0===e.education?Object(v.jsx)(v.Fragment,{}):Object(v.jsx)(C,{title:"Education",xs:12,sm:12,md:12,lg:12,xl:12,children:e.education.map((function(e,t){return Object(v.jsx)(R,{Authority:e.Authority,From:e.From,To:e.To,Title:e.Title,Text:e.Text},t)}))})}var W=n(154),G=n(70),J=n.n(G),H=n(69),q=n.n(H);function K(e){var t=Object(A.a)(),n={.5:{label:"Novice",backgroundColor:J.a[50],color:t.palette.primary},1.5:{label:"Beginner",backgroundColor:t.palette.secondary.light},2.5:{label:"Competent",backgroundColor:t.palette.secondary.dark},3.5:{label:"Proficient",backgroundColor:t.palette.primary.light},4.5:{label:"Expert",backgroundColor:t.palette.primary.dark}};function r(){var t,i=Array.from(Object.keys(n),(function(e){return Number(e)})).sort().reduce((function(t,n){return e.Level>=n?n:t}));return t=n[i].label,e.Level>i&&(t+="++"),t}var c=a.a.useState(6),o=Object(s.a)(c,2),j=o[0],u=o[1],x=a.a.useState(!1),h=Object(s.a)(x,2),m=h[0],O=h[1];window.addEventListener("beforeprint",(function(){return O(!0)})),window.addEventListener("afterprint",(function(){return O(!1)}));var p=Object(P.a)(q()({maxWidth:"800px"}));function f(){return Object(v.jsxs)(d.a,{item:!0,xs:6,sm:6,md:6,children:[Object(v.jsx)(b.a,{variant:"subtitle1",component:"legend",children:Object(v.jsx)("strong",{children:e.Title})}),Object(v.jsx)(W.a,{value:e.Level,precision:.5,readOnly:!0,size:m?"medium":"small",max:5})]})}return Object(i.useEffect)((function(){u(p?6:12)}),[p]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(l.a,{displayPrint:"none",display:"contents",children:p?f():Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(d.a,{item:!0,xs:j,sm:8,md:6,children:Object(v.jsx)(b.a,{component:"legend",variant:"subtitle1",children:Object(v.jsx)("strong",{children:e.Title})})}),Object(v.jsx)(d.a,{item:!0,xs:j,sm:!0,md:!0,children:Object(v.jsx)(W.a,{name:e.Title,value:e.Level,precision:.5,readOnly:!0,size:"small",max:5})}),Object(v.jsx)(U.a,{smDown:!0,children:Object(v.jsx)(d.a,{item:!0,sm:!0,md:!0,lg:!0,xl:!0,style:{textAlign:"right"},children:Object(v.jsx)(b.a,{variant:"caption",children:r()})})})]})}),Object(v.jsx)(l.a,{displayPrint:"contents",display:"none",children:f()})]})}function Q(e){if(void 0===e.proficiencies)return Object(v.jsx)(v.Fragment,{});var t=e.sort?e.proficiencies.sort((function(e,t){return e.Level>t.Level?-1:e.Level===t.Level&&e.Title.toLowerCase()>t.Title.toLowerCase()?1:-1})):e.proficiencies;return Object(v.jsx)(C,{title:"Skills",xs:12,sm:6,md:6,lg:6,xl:6,children:Object(v.jsx)(d.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",spacing:1,children:t.map((function(e,t){return Object(v.jsx)(K,{Title:e.Title,Level:e.Level},t)}))})})}var V=n(146),X=n(157),Y=n(145);function Z(e){return Object(v.jsx)(X.a,{style:{padding:0,paddingBottom:"1em"},children:Object(v.jsxs)(d.a,{container:!0,item:!0,xs:12,sm:12,md:12,lg:12,xl:12,spacing:2,children:[Object(v.jsx)(l.a,{displayPrint:"none",children:Object(v.jsx)(d.a,{item:!0,children:Object(v.jsx)(Y.a,{href:e.Link,target:e.Title,title:e.Title,underline:"none",children:void 0===(null===e||void 0===e?void 0:e.Avatar)?Object(v.jsx)(v.Fragment,{}):e.Avatar&&e.Avatar.toLowerCase().startsWith("http")?Object(v.jsx)(j.a,{alt:e.Title,src:e.Avatar}):e.Avatar&&e.Avatar.length<=2?Object(v.jsx)(j.a,{alt:e.Title,children:e.Avatar}):e.Avatar&&e.Avatar.length>0?Object(v.jsx)(j.a,{alt:e.Title,children:g(e.Avatar)}):Object(v.jsx)(j.a,{alt:e.Title,children:e.Title[0]})})})}),Object(v.jsxs)(d.a,{item:!0,xs:!0,sm:!0,md:!0,lg:!0,xl:!0,children:[Object(v.jsx)(b.a,{variant:"subtitle1",children:Object(v.jsx)("strong",{children:e.Title})}),Object(v.jsx)(b.a,{variant:"subtitle2",color:"textSecondary",children:e.Description})]})]})})}function $(e){var t=a.a.useState(12),n=Object(s.a)(t,2),i=n[0],r=n[1];return window.addEventListener("beforeprint",(function(){r(6)})),window.addEventListener("afterprint",(function(){r(12)})),void 0===e.contributions?Object(v.jsx)(v.Fragment,{}):Object(v.jsx)(C,{title:"Certifications",xs:i,sm:6,md:6,lg:6,xl:6,children:Object(v.jsx)(d.a,{container:!0,item:!0,spacing:1,style:{display:"contents"},children:Object(v.jsx)(V.a,{style:{padding:0},children:e.contributions.map((function(e,t){return Object(v.jsx)(Z,{Title:e.Title,Description:e.Description,Contribution:e.Contribution,Link:e.Link,Avatar:e.Avatar},t)}))})})})}var _=n(71),ee=n(72),te=n.n(ee),ne=function e(t){Object(o.a)(this,e),this.FirstName=void 0,this.MiddleName=void 0,this.LastName=void 0,this.Title=void 0,this.Blurb=void 0,this.PhotoUrl=void 0,this.Contact=new Array(0),Object.assign(this,t)},ie=function e(t){Object(o.a)(this,e),this.Demographics=new ne({Contact:new Array(0)}),this.Experience=new Array(0),this.Education=new Array(0),this.Proficiencies=new Array(0),this.Certifications=new Array(0),Object.assign(this,t)},ae=n(73),re=function(){function e(t){Object(o.a)(this,e),this.dataUrl=void 0,this.dataUrl=t}return Object(_.a)(e,[{key:"Get",value:function(){return te.a.get("".concat(this.dataUrl,"?").concat(Math.round(Date.now()/1e3))).then((function(e){if(200===e.status){var t=ae.a.load(e.data);return new ie(t)}})).catch((function(e){return console.log(e),e}))}}]),e}(),ce=M.a,se=new re("https://gist.githubusercontent.com/MeganParson/7513b9217a1d1f0c8f967ed8bd04af1b/raw/resume.yaml"),oe=function e(t){Object(o.a)(this,e),this.loaded=!1,this.dataModel=new ie,Object.assign(this,t)};var le=function(){var e=Object(P.a)("(prefers-color-scheme: dark)"),t=ce({palette:{type:e?"dark":"light"}});window.addEventListener("contextmenu",(function(e){e.preventDefault()}),{passive:!1}),window.addEventListener("mousedown",(function(e){e.preventDefault()}),{passive:!1}),window.addEventListener("mouseup",(function(e){e.preventDefault()}),{passive:!1});var n=Object(i.useState)(new oe),a=Object(s.a)(n,2),r=a[0],c=a[1];return Object(i.useEffect)((function(){se.Get().then((function(e){c(new oe({dataModel:e,loaded:!0}))}))}),[]),r.loaded?Object(v.jsx)(I.b,{children:Object(v.jsxs)(E.a,{theme:t,children:[Object(v.jsx)(B.a,{}),Object(v.jsxs)(I.a,{children:[Object(v.jsx)("title",{children:"".concat(r.dataModel.Demographics.FirstName," ").concat(r.dataModel.Demographics.LastName," - ").concat(r.dataModel.Demographics.Title)}),Object(v.jsx)("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"}),Object(v.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),Object(v.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"})]}),Object(v.jsx)(T.a,{maxWidth:"md",style:{cursor:"default"},children:Object(v.jsxs)(d.a,{container:!0,item:!0,direction:"row",justify:"flex-start",alignItems:"stretch",children:[Object(v.jsx)(L,{info:r.dataModel.Demographics}),Object(v.jsx)(S,{companies:r.dataModel.Experience}),Object(v.jsx)(z,{education:r.dataModel.Education}),Object(v.jsx)(Q,{proficiencies:r.dataModel.Proficiencies,sort:!1}),Object(v.jsx)($,{contributions:r.dataModel.Certifications})]})})]})}):Object(v.jsx)(v.Fragment,{})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,159)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))};n(113);c.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(le,{})}),document.getElementById("root")),de()}},[[114,1,2]]]);
//# sourceMappingURL=main.72fe8777.chunk.js.map