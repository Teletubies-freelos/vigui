(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{537:function(e,t,n){Promise.resolve().then(n.bind(n,6703))},6703:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeRegistry:function(){return B}});var r=n(5713),o=n(8626),l=n(4472),u=n(1343),i=n(8573),a=n(4116);let s=(0,a.Z)({palette:{primary:{main:"#FF4C00"},secondary:{main:"#0039A4",900:"#0E58EA"},background:{default:"#0039A4"},info:{main:"#0E58EA"}},typography:{body1:{color:"white"}}});var c=n(8973),f=n(6339);let m=o.createContext(null);function d(){let e=o.useContext(m);return e}let h="function"==typeof Symbol&&Symbol.for;var y=h?Symbol.for("mui.nested"):"__THEME_NESTED__",p=function(e){let{children:t,theme:n}=e,l=d(),u=o.useMemo(()=>{let e=null===l?n:function(e,t){if("function"==typeof t){let n=t(e);return n}return(0,c.Z)({},e,t)}(l,n);return null!=e&&(e[y]=null!==l),e},[n,l]);return(0,r.jsx)(m.Provider,{value:u,children:t})},v=n(851);let b={};function g(e,t,n,r=!1){return o.useMemo(()=>{let o=e&&t[e]||t;if("function"==typeof n){let l=n(o),u=e?(0,c.Z)({},t,{[e]:l}):l;return r?()=>u:u}return e?(0,c.Z)({},t,{[e]:n}):(0,c.Z)({},t,n)},[e,t,n,r])}var x=function(e){let{children:t,theme:n,themeId:o}=e,l=(0,v.Z)(b),u=d()||b,a=g(o,l,n),s=g(o,u,n,!0);return(0,r.jsx)(p,{theme:s,children:(0,r.jsx)(i.T.Provider,{value:a,children:t})})},Z=n(9828);let S=["theme"];function j(e){let{theme:t}=e,n=(0,f.Z)(e,S),o=t[Z.Z];return(0,r.jsx)(x,(0,c.Z)({},n,{themeId:o?Z.Z:void 0,theme:o||t}))}var k=n(3296),_=n(7979);function C(e){let{styles:t,defaultTheme:n={}}=e,o="function"==typeof t?e=>t(null==e||0===Object.keys(e).length?n:e):t;return(0,r.jsx)(_.xB,{styles:o})}var E=n(7428),M=function({styles:e,themeId:t,defaultTheme:n={}}){let o=(0,E.Z)(n),l="function"==typeof e?e(t&&o[t]||o):e;return(0,r.jsx)(C,{styles:l})},T=n(7124),A=function(e){return(0,r.jsx)(M,(0,c.Z)({},e,{defaultTheme:T.Z,themeId:Z.Z}))};let O=(e,t)=>(0,c.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),F=e=>(0,c.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),w=(e,t=!1)=>{var n;let r={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([t,n])=>{var o;r[e.getColorSchemeSelector(t).replace(/\s*&/,"")]={colorScheme:null==(o=n.palette)?void 0:o.mode}});let o=(0,c.Z)({html:O(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,c.Z)({margin:0},F(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},r),l=null==(n=e.components)||null==(n=n.MuiCssBaseline)?void 0:n.styleOverrides;return l&&(o=[o,l]),o};var z=function(e){let t=(0,k.Z)({props:e,name:"MuiCssBaseline"}),{children:n,enableColorScheme:l=!1}=t;return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)(A,{styles:e=>w(e,l)}),n]})};let B=e=>{let{children:t}=e,[{cache:n,flush:a}]=(0,o.useState)(()=>{let e=(0,l.Z)({key:"mui"});e.compat=!0;let t=e.insert,n=[];return e.insert=function(){for(var r=arguments.length,o=Array(r),l=0;l<r;l++)o[l]=arguments[l];let u=o[1];return void 0===e.inserted[u.name]&&n.push(u.name),t(...o)},{cache:e,flush:()=>{let e=n;return n=[],e}}});return(0,u.useServerInsertedHTML)(()=>{let e=a();if(!e.length)return null;let t="";for(let r of e)t+=n.inserted[r];return(0,r.jsx)("style",{"data-emotion":"".concat(n.key," ").concat(e.join(" ")),dangerouslySetInnerHTML:{__html:t}},n.key)}),(0,r.jsx)(i.C,{value:n,children:(0,r.jsxs)(j,{theme:s,children:[(0,r.jsx)(z,{}),t]})})}},1343:function(e,t,n){e.exports=n(3758)}},function(e){e.O(0,[427,654,884,744],function(){return e(e.s=537)}),_N_E=e.O()}]);