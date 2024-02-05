"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[432],{81643:function(ve,Z,a){a.d(Z,{Z:function(){return X}});const X=f=>f?typeof f=="function"?f():f:null},7134:function(ve,Z,a){a.d(Z,{C:function(){return he}});var X=a(94184),f=a.n(X),s=a(48555),x=a(42550),c=a(67294),oe=a(74443),W=a(53124),ae=a(25378),O=c.createContext({size:"default",shape:void 0}),$=a(14747),g=a(67968),i=a(45503);const m=u=>{const{antCls:S,componentCls:b,iconCls:E,avatarBg:M,avatarColor:se,containerSize:Q,containerSizeLG:D,containerSizeSM:Y,textFontSize:w,textFontSizeLG:ee,textFontSizeSM:pe,borderRadius:F,borderRadiusLG:U,borderRadiusSM:ge,lineWidth:te,lineType:ue}=u,le=(H,A,ie)=>({width:H,height:H,lineHeight:`${H-te*2}px`,borderRadius:"50%",[`&${b}-square`]:{borderRadius:ie},[`${b}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${b}-icon`]:{fontSize:A,[`> ${E}`]:{margin:0}}});return{[b]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,$.Wf)(u)),{position:"relative",display:"inline-block",overflow:"hidden",color:se,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:M,border:`${te}px ${ue} transparent`,["&-image"]:{background:"transparent"},[`${S}-image-img`]:{display:"block"}}),le(Q,w,F)),{["&-lg"]:Object.assign({},le(D,ee,U)),["&-sm"]:Object.assign({},le(Y,pe,ge)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},p=u=>{const{componentCls:S,groupBorderColor:b,groupOverlapping:E,groupSpace:M}=u;return{[`${S}-group`]:{display:"inline-flex",[`${S}`]:{borderColor:b},["> *:not(:first-child)"]:{marginInlineStart:E}},[`${S}-group-popover`]:{[`${S} + ${S}`]:{marginInlineStart:M}}}};var d=(0,g.Z)("Avatar",u=>{const{colorTextLightSolid:S,colorTextPlaceholder:b}=u,E=(0,i.TS)(u,{avatarBg:b,avatarColor:S});return[m(E),p(E)]},u=>{const{controlHeight:S,controlHeightLG:b,controlHeightSM:E,fontSize:M,fontSizeLG:se,fontSizeXL:Q,fontSizeHeading3:D,marginXS:Y,marginXXS:w,colorBorderBg:ee}=u;return{containerSize:S,containerSizeLG:b,containerSizeSM:E,textFontSize:Math.round((se+Q)/2),textFontSizeLG:D,textFontSizeSM:M,groupSpace:w,groupOverlapping:-Y,groupBorderColor:ee}}),y=function(u,S){var b={};for(var E in u)Object.prototype.hasOwnProperty.call(u,E)&&S.indexOf(E)<0&&(b[E]=u[E]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var M=0,E=Object.getOwnPropertySymbols(u);M<E.length;M++)S.indexOf(E[M])<0&&Object.prototype.propertyIsEnumerable.call(u,E[M])&&(b[E[M]]=u[E[M]]);return b};const k=(u,S)=>{const[b,E]=c.useState(1),[M,se]=c.useState(!1),[Q,D]=c.useState(!0),Y=c.useRef(null),w=c.useRef(null),ee=(0,x.sQ)(S,Y),{getPrefixCls:pe,avatar:F}=c.useContext(W.E_),U=c.useContext(O),ge=()=>{if(!w.current||!Y.current)return;const j=w.current.offsetWidth,P=Y.current.offsetWidth;if(j!==0&&P!==0){const{gap:L=4}=u;L*2<P&&E(P-L*2<j?(P-L*2)/j:1)}};c.useEffect(()=>{se(!0)},[]),c.useEffect(()=>{D(!0),E(1)},[u.src]),c.useEffect(ge,[u.gap]);const te=()=>{const{onError:j}=u;(j==null?void 0:j())!==!1&&D(!1)},{prefixCls:ue,shape:le,size:H="default",src:A,srcSet:ie,icon:K,className:G,rootClassName:Se,alt:be,draggable:e,children:t,crossOrigin:n}=u,l=y(u,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),o=H==="default"?U==null?void 0:U.size:H,v=Object.keys(typeof o=="object"?o||{}:{}).some(j=>["xs","sm","md","lg","xl","xxl"].includes(j)),h=(0,ae.Z)(v),C=c.useMemo(()=>{if(typeof o!="object")return{};const j=oe.c.find(L=>h[L]),P=o[j];return P?{width:P,height:P,lineHeight:`${P}px`,fontSize:K?P/2:18}:{}},[h,o]),r=pe("avatar",ue),[z,R]=d(r),B=f()({[`${r}-lg`]:o==="large",[`${r}-sm`]:o==="small"}),T=c.isValidElement(A),Ce=le||(U==null?void 0:U.shape)||"circle",ne=f()(r,B,F==null?void 0:F.className,`${r}-${Ce}`,{[`${r}-image`]:T||A&&Q,[`${r}-icon`]:!!K},G,Se,R),N=typeof o=="number"?{width:o,height:o,lineHeight:`${o}px`,fontSize:K?o/2:18}:{};let J;if(typeof A=="string"&&Q)J=c.createElement("img",{src:A,draggable:e,srcSet:ie,onError:te,alt:be,crossOrigin:n});else if(T)J=A;else if(K)J=K;else if(M||b!==1){const j=`scale(${b}) translateX(-50%)`,P={msTransform:j,WebkitTransform:j,transform:j},L=typeof o=="number"?{lineHeight:`${o}px`}:{};J=c.createElement(s.Z,{onResize:ge},c.createElement("span",{className:`${r}-string`,ref:w,style:Object.assign(Object.assign({},L),P)},t))}else J=c.createElement("span",{className:`${r}-string`,style:{opacity:0},ref:w},t);return delete l.onError,delete l.gap,z(c.createElement("span",Object.assign({},l,{style:Object.assign(Object.assign(Object.assign(Object.assign({},N),C),F==null?void 0:F.style),l.style),className:ne,ref:ee}),J))};var I=c.forwardRef(k),V=a(50344),re=a(55241),de=a(96159);const _=u=>{const{size:S,shape:b}=c.useContext(O),E=c.useMemo(()=>({size:u.size||S,shape:u.shape||b}),[u.size,u.shape,S,b]);return c.createElement(O.Provider,{value:E},u.children)};var me=u=>{const{getPrefixCls:S,direction:b}=c.useContext(W.E_),{prefixCls:E,className:M,rootClassName:se,style:Q,maxCount:D,maxStyle:Y,size:w,shape:ee,maxPopoverPlacement:pe="top",maxPopoverTrigger:F="hover",children:U}=u,ge=S("avatar",E),te=`${ge}-group`,[ue,le]=d(ge),H=f()(te,{[`${te}-rtl`]:b==="rtl"},M,se,le),A=(0,V.Z)(U).map((K,G)=>(0,de.Tm)(K,{key:`avatar-key-${G}`})),ie=A.length;if(D&&D<ie){const K=A.slice(0,D),G=A.slice(D,ie);return K.push(c.createElement(re.Z,{key:"avatar-popover-key",content:G,trigger:F,placement:pe,overlayClassName:`${te}-popover`},c.createElement(I,{style:Y},`+${ie-D}`))),ue(c.createElement(_,{shape:ee,size:w},c.createElement("div",{className:H,style:Q},K)))}return ue(c.createElement(_,{shape:ee,size:w},c.createElement("div",{className:H,style:Q},A)))};const fe=I;fe.Group=me;var he=fe},60590:function(ve,Z,a){a.d(Z,{t5:function(){return O}});var X=a(94184),f=a.n(X),s=a(92419),x=a(67294),c=a(53124),oe=a(81643),W=a(20136),ae=function(g,i){var m={};for(var p in g)Object.prototype.hasOwnProperty.call(g,p)&&i.indexOf(p)<0&&(m[p]=g[p]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,p=Object.getOwnPropertySymbols(g);d<p.length;d++)i.indexOf(p[d])<0&&Object.prototype.propertyIsEnumerable.call(g,p[d])&&(m[p[d]]=g[p[d]]);return m};const ce=(g,i,m)=>{if(!(!i&&!m))return x.createElement(x.Fragment,null,i&&x.createElement("div",{className:`${g}-title`},(0,oe.Z)(i)),x.createElement("div",{className:`${g}-inner-content`},(0,oe.Z)(m)))},O=g=>{const{hashId:i,prefixCls:m,className:p,style:d,placement:y="top",title:k,content:q,children:I}=g;return x.createElement("div",{className:f()(i,m,`${m}-pure`,`${m}-placement-${y}`,p),style:d},x.createElement("div",{className:`${m}-arrow`}),x.createElement(s.G,Object.assign({},g,{className:i,prefixCls:m}),I||ce(m,k,q)))},$=g=>{const{prefixCls:i}=g,m=ae(g,["prefixCls"]),{getPrefixCls:p}=x.useContext(c.E_),d=p("popover",i),[y,k]=(0,W.Z)(d);return y(x.createElement(O,Object.assign({},m,{prefixCls:d,hashId:k})))};Z.ZP=$},55241:function(ve,Z,a){var X=a(94184),f=a.n(X),s=a(67294),x=a(81643),c=a(33603),oe=a(53124),W=a(83062),ae=a(60590),ce=a(20136),O=function(i,m){var p={};for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&m.indexOf(d)<0&&(p[d]=i[d]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,d=Object.getOwnPropertySymbols(i);y<d.length;y++)m.indexOf(d[y])<0&&Object.prototype.propertyIsEnumerable.call(i,d[y])&&(p[d[y]]=i[d[y]]);return p};const $=i=>{let{title:m,content:p,prefixCls:d}=i;return s.createElement(s.Fragment,null,m&&s.createElement("div",{className:`${d}-title`},(0,x.Z)(m)),s.createElement("div",{className:`${d}-inner-content`},(0,x.Z)(p)))},g=s.forwardRef((i,m)=>{const{prefixCls:p,title:d,content:y,overlayClassName:k,placement:q="top",trigger:I="hover",mouseEnterDelay:V=.1,mouseLeaveDelay:re=.1,overlayStyle:de={}}=i,_=O(i,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:$e}=s.useContext(oe.E_),me=$e("popover",p),[fe,he]=(0,ce.Z)(me),u=$e(),S=f()(k,he);return fe(s.createElement(W.Z,Object.assign({placement:q,trigger:I,mouseEnterDelay:V,mouseLeaveDelay:re,overlayStyle:de},_,{prefixCls:me,overlayClassName:S,ref:m,overlay:d||y?s.createElement($,{prefixCls:me,title:d,content:y}):null,transitionName:(0,c.m)(u,"zoom-big",_.transitionName),"data-popover-inject":!0})))});g._InternalPanelDoNotUseOrYouWillBeFired=ae.ZP,Z.Z=g},20136:function(ve,Z,a){var X=a(14747),f=a(50438),s=a(97414),x=a(8796),c=a(67968),oe=a(45503);const W=O=>{const{componentCls:$,popoverColor:g,minWidth:i,fontWeightStrong:m,popoverPadding:p,boxShadowSecondary:d,colorTextHeading:y,borderRadiusLG:k,zIndexPopup:q,marginXS:I,colorBgElevated:V,popoverBg:re}=O;return[{[$]:Object.assign(Object.assign({},(0,X.Wf)(O)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:q,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":V,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${$}-content`]:{position:"relative"},[`${$}-inner`]:{backgroundColor:re,backgroundClip:"padding-box",borderRadius:k,boxShadow:d,padding:p},[`${$}-title`]:{minWidth:i,marginBottom:I,color:y,fontWeight:m},[`${$}-inner-content`]:{color:g}})},(0,s.ZP)(O,{colorBg:"var(--antd-arrow-background-color)"}),{[`${$}-pure`]:{position:"relative",maxWidth:"none",margin:O.sizePopupArrow,display:"inline-block",[`${$}-content`]:{display:"inline-block"}}}]},ae=O=>{const{componentCls:$}=O;return{[$]:x.i.map(g=>{const i=O[`${g}6`];return{[`&${$}-${g}`]:{"--antd-arrow-background-color":i,[`${$}-inner`]:{backgroundColor:i},[`${$}-arrow`]:{background:"transparent"}}}})}},ce=O=>{const{componentCls:$,lineWidth:g,lineType:i,colorSplit:m,paddingSM:p,controlHeight:d,fontSize:y,lineHeight:k,padding:q}=O,I=d-Math.round(y*k),V=I/2,re=I/2-g,de=q;return{[$]:{[`${$}-inner`]:{padding:0},[`${$}-title`]:{margin:0,padding:`${V}px ${de}px ${re}px`,borderBottom:`${g}px ${i} ${m}`},[`${$}-inner-content`]:{padding:`${p}px ${de}px`}}}};Z.Z=(0,c.Z)("Popover",O=>{const{colorBgElevated:$,colorText:g,wireframe:i}=O,m=(0,oe.TS)(O,{popoverPadding:12,popoverBg:$,popoverColor:g});return[W(m),ae(m),i&&ce(m),(0,f._y)(m,"zoom-big")]},O=>({width:177,minWidth:177,zIndexPopup:O.zIndexPopupBase+30}),{deprecatedTokens:[["width","minWidth"]]})},99559:function(ve,Z,a){a.d(Z,{Z:function(){return be}});var X=a(94184),f=a.n(X),s=a(67294),x=a(53124),c=a(98423),W=e=>{const{prefixCls:t,className:n,style:l,size:o,shape:v}=e,h=f()({[`${t}-lg`]:o==="large",[`${t}-sm`]:o==="small"}),C=f()({[`${t}-circle`]:v==="circle",[`${t}-square`]:v==="square",[`${t}-round`]:v==="round"}),r=s.useMemo(()=>typeof o=="number"?{width:o,height:o,lineHeight:`${o}px`}:{},[o]);return s.createElement("span",{className:f()(t,h,C,n),style:Object.assign(Object.assign({},r),l)})},ae=a(86557),ce=a(67968),O=a(45503);const $=new ae.E4("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),g=e=>({height:e,lineHeight:`${e}px`}),i=e=>Object.assign({width:e},g(e)),m=e=>({background:e.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:$,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),p=e=>Object.assign({width:e*5,minWidth:e*5},g(e)),d=e=>{const{skeletonAvatarCls:t,gradientFromColor:n,controlHeight:l,controlHeightLG:o,controlHeightSM:v}=e;return{[`${t}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:n},i(l)),[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:Object.assign({},i(o)),[`${t}${t}-sm`]:Object.assign({},i(v))}},y=e=>{const{controlHeight:t,borderRadiusSM:n,skeletonInputCls:l,controlHeightLG:o,controlHeightSM:v,gradientFromColor:h}=e;return{[`${l}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:h,borderRadius:n},p(t)),[`${l}-lg`]:Object.assign({},p(o)),[`${l}-sm`]:Object.assign({},p(v))}},k=e=>Object.assign({width:e},g(e)),q=e=>{const{skeletonImageCls:t,imageSizeBase:n,gradientFromColor:l,borderRadiusSM:o}=e;return{[`${t}`]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:l,borderRadius:o},k(n*2)),{[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:Object.assign(Object.assign({},k(n)),{maxWidth:n*4,maxHeight:n*4}),[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}}),[`${t}${t}-circle`]:{borderRadius:"50%"}}},I=(e,t,n)=>{const{skeletonButtonCls:l}=e;return{[`${n}${l}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${n}${l}-round`]:{borderRadius:t}}},V=e=>Object.assign({width:e*2,minWidth:e*2},g(e)),re=e=>{const{borderRadiusSM:t,skeletonButtonCls:n,controlHeight:l,controlHeightLG:o,controlHeightSM:v,gradientFromColor:h}=e;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:h,borderRadius:t,width:l*2,minWidth:l*2},V(l))},I(e,l,n)),{[`${n}-lg`]:Object.assign({},V(o))}),I(e,o,`${n}-lg`)),{[`${n}-sm`]:Object.assign({},V(v))}),I(e,v,`${n}-sm`))},de=e=>{const{componentCls:t,skeletonAvatarCls:n,skeletonTitleCls:l,skeletonParagraphCls:o,skeletonButtonCls:v,skeletonInputCls:h,skeletonImageCls:C,controlHeight:r,controlHeightLG:z,controlHeightSM:R,gradientFromColor:B,padding:T,marginSM:Ce,borderRadius:ne,titleHeight:N,blockRadius:J,paragraphLiHeight:j,controlHeightXS:P,paragraphMarginTop:L}=e;return{[`${t}`]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:T,verticalAlign:"top",[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:B},i(r)),[`${n}-circle`]:{borderRadius:"50%"},[`${n}-lg`]:Object.assign({},i(z)),[`${n}-sm`]:Object.assign({},i(R))},[`${t}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[`${l}`]:{width:"100%",height:N,background:B,borderRadius:J,[`+ ${o}`]:{marginBlockStart:R}},[`${o}`]:{padding:0,"> li":{width:"100%",height:j,listStyle:"none",background:B,borderRadius:J,"+ li":{marginBlockStart:P}}},[`${o}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-content`]:{[`${l}, ${o} > li`]:{borderRadius:ne}}},[`${t}-with-avatar ${t}-content`]:{[`${l}`]:{marginBlockStart:Ce,[`+ ${o}`]:{marginBlockStart:L}}},[`${t}${t}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},re(e)),d(e)),y(e)),q(e)),[`${t}${t}-block`]:{width:"100%",[`${v}`]:{width:"100%"},[`${h}`]:{width:"100%"}},[`${t}${t}-active`]:{[`
        ${l},
        ${o} > li,
        ${n},
        ${v},
        ${h},
        ${C}
      `]:Object.assign({},m(e))}}};var _=(0,ce.Z)("Skeleton",e=>{const{componentCls:t}=e,n=(0,O.TS)(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonImageCls:`${t}-image`,imageSizeBase:e.controlHeight*1.5,borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return[de(n)]},e=>{const{colorFillContent:t,colorFill:n}=e,l=t,o=n;return{color:l,colorGradientEnd:o,gradientFromColor:l,gradientToColor:o,titleHeight:e.controlHeight/2,blockRadius:e.borderRadiusSM,paragraphMarginTop:e.marginLG+e.marginXXS,paragraphLiHeight:e.controlHeight/2}},{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),me=e=>{const{prefixCls:t,className:n,rootClassName:l,active:o,shape:v="circle",size:h="default"}=e,{getPrefixCls:C}=s.useContext(x.E_),r=C("skeleton",t),[z,R]=_(r),B=(0,c.Z)(e,["prefixCls","className"]),T=f()(r,`${r}-element`,{[`${r}-active`]:o},n,l,R);return z(s.createElement("div",{className:T},s.createElement(W,Object.assign({prefixCls:`${r}-avatar`,shape:v,size:h},B))))},he=e=>{const{prefixCls:t,className:n,rootClassName:l,active:o,block:v=!1,size:h="default"}=e,{getPrefixCls:C}=s.useContext(x.E_),r=C("skeleton",t),[z,R]=_(r),B=(0,c.Z)(e,["prefixCls"]),T=f()(r,`${r}-element`,{[`${r}-active`]:o,[`${r}-block`]:v},n,l,R);return z(s.createElement("div",{className:T},s.createElement(W,Object.assign({prefixCls:`${r}-button`,size:h},B))))};const u="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z";var b=e=>{const{prefixCls:t,className:n,rootClassName:l,style:o,active:v}=e,{getPrefixCls:h}=s.useContext(x.E_),C=h("skeleton",t),[r,z]=_(C),R=f()(C,`${C}-element`,{[`${C}-active`]:v},n,l,z);return r(s.createElement("div",{className:R},s.createElement("div",{className:f()(`${C}-image`,n),style:o},s.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${C}-image-svg`},s.createElement("path",{d:u,className:`${C}-image-path`})))))},M=e=>{const{prefixCls:t,className:n,rootClassName:l,active:o,block:v,size:h="default"}=e,{getPrefixCls:C}=s.useContext(x.E_),r=C("skeleton",t),[z,R]=_(r),B=(0,c.Z)(e,["prefixCls"]),T=f()(r,`${r}-element`,{[`${r}-active`]:o,[`${r}-block`]:v},n,l,R);return z(s.createElement("div",{className:T},s.createElement(W,Object.assign({prefixCls:`${r}-input`,size:h},B))))},se=a(87462),Q={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},D=Q,Y=a(93771),w=function(t,n){return s.createElement(Y.Z,(0,se.Z)({},t,{ref:n,icon:D}))},ee=s.forwardRef(w),F=e=>{const{prefixCls:t,className:n,rootClassName:l,style:o,active:v,children:h}=e,{getPrefixCls:C}=s.useContext(x.E_),r=C("skeleton",t),[z,R]=_(r),B=f()(r,`${r}-element`,{[`${r}-active`]:v},R,n,l),T=h!=null?h:s.createElement(ee,null);return z(s.createElement("div",{className:B},s.createElement("div",{className:f()(`${r}-image`,n),style:o},T)))},U=a(74902),te=e=>{const t=C=>{const{width:r,rows:z=2}=e;if(Array.isArray(r))return r[C];if(z-1===C)return r},{prefixCls:n,className:l,style:o,rows:v}=e,h=(0,U.Z)(Array(v)).map((C,r)=>s.createElement("li",{key:r,style:{width:t(r)}}));return s.createElement("ul",{className:f()(n,l),style:o},h)},le=e=>{let{prefixCls:t,className:n,width:l,style:o}=e;return s.createElement("h3",{className:f()(t,n),style:Object.assign({width:l},o)})};function H(e){return e&&typeof e=="object"?e:{}}function A(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function ie(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}function K(e,t){const n={};return(!e||!t)&&(n.width="61%"),!e&&t?n.rows=3:n.rows=2,n}const G=e=>{const{prefixCls:t,loading:n,className:l,rootClassName:o,style:v,children:h,avatar:C=!1,title:r=!0,paragraph:z=!0,active:R,round:B}=e,{getPrefixCls:T,direction:Ce,skeleton:ne}=s.useContext(x.E_),N=T("skeleton",t),[J,j]=_(N);if(n||!("loading"in e)){const P=!!C,L=!!r,Ee=!!z;let ye;if(P){const Oe=Object.assign(Object.assign({prefixCls:`${N}-avatar`},A(L,Ee)),H(C));ye=s.createElement("div",{className:`${N}-header`},s.createElement(W,Object.assign({},Oe)))}let Pe;if(L||Ee){let Oe;if(L){const xe=Object.assign(Object.assign({prefixCls:`${N}-title`},ie(P,Ee)),H(r));Oe=s.createElement(le,Object.assign({},xe))}let je;if(Ee){const xe=Object.assign(Object.assign({prefixCls:`${N}-paragraph`},K(P,L)),H(z));je=s.createElement(te,Object.assign({},xe))}Pe=s.createElement("div",{className:`${N}-content`},Oe,je)}const Me=f()(N,{[`${N}-with-avatar`]:P,[`${N}-active`]:R,[`${N}-rtl`]:Ce==="rtl",[`${N}-round`]:B},ne==null?void 0:ne.className,l,o,j);return J(s.createElement("div",{className:Me,style:Object.assign(Object.assign({},ne==null?void 0:ne.style),v)},ye,Pe))}return typeof h!="undefined"?h:null};G.Button=he,G.Avatar=me,G.Input=M,G.Image=b,G.Node=F;var Se=G,be=Se}}]);
