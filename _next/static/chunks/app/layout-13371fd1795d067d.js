(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4130:function(e,t,n){Promise.resolve().then(n.bind(n,1147)),Promise.resolve().then(n.t.bind(n,5081,23)),Promise.resolve().then(n.bind(n,9432)),Promise.resolve().then(n.t.bind(n,8308,23))},1147:function(e,t,n){"use strict";function o(e){let{children:t}=e;return t}n.d(t,{default:function(){return o}})},9432:function(e,t,n){"use strict";n.d(t,{default:function(){return c}});var o=n(8850),s=n(3850),r=n(851);function i(e){let{disabled:t=!1,size:n="medium",slotProps:s,sx:i,onChange:l,...a}=e;return(0,o.jsx)(r.Z,{disableUnderline:!0,slotProps:{root:{...null==s?void 0:s.root},input:{...null==s?void 0:s.input}},size:n,sx:{height:"fit-content","& input":{padding:"small"===n?"4px":"10px"},border:t?"1px solid hsla(184, 82%, 5%, 0.6)":"1px solid hsla(180, 100%, 50%, 0.6)",backgroundColor:"hsla(184, 82%, 5%, 1)",color:"hsla(176, 32%, 44%, 1)",fontFamily:"var(--font-inter)",fontSize:"16px",...i},onChange:l,...a})}var l=n(224),a=n(5955);let u=!1;function c(e){let{name:t,children:n}=e,[r,c]=(0,a.useState)(""),[d,p]=(0,a.useState)(!1),[f,h]=(0,a.useState)(""),[b,x]=(0,a.useState)(!0),g=async e=>!!(await fetch("/api/whisperer/password",{method:"POST",body:JSON.stringify({name:t,password:e})})).ok&&(x(!1),localStorage.setItem("whisperer-password-".concat(t),e),!0),w=async()=>{p(!0),await g(r)?h(""):h("Incorrect."),p(!1)};return((0,a.useEffect)(()=>{if(!u){u=!0;let e=localStorage.getItem("whisperer-password-".concat(t));e&&g(e)}},[]),b)?(0,o.jsxs)(l.default,{noTitle:!0,noLogin:!0,noAnswers:!0,backgroundTop:"/assets/backgrounds/top.webp",error:f,children:[(0,o.jsx)(i,{sx:{width:"100%"},placeholder:"Password",slotProps:{input:{sx:{textAlign:"center"}}},onChange:e=>c(e.target.value)}),(0,o.jsx)(s.Z,{fullWidth:!0,disabled:!r||d,sx:{mt:"40px"},onClick:w,children:"Submit"})]}):n}},8308:function(){}},function(e){e.O(0,[724,553,113,224,530,801,744],function(){return e(e.s=4130)}),_N_E=e.O()}]);