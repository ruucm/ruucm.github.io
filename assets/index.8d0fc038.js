var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,a=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o;import{R as i,m as s,L as c,r as m,c as p,A as d,a as u,u as g,q as h,b as f,B as b,S as E,d as y,e as v}from"./vendor.758816e9.js";const x={active:{opacity:1},inActive:{opacity:0}};function k({title:e,duration:m,description:p,outlink:d,slug:u,tags:g}){const h=u?c:"a",f=u?{to:`/portfolio/${u}`}:{href:d,target:"_blank"};return i.createElement(h,(b=((e,t)=>{for(var n in t||(t={}))r.call(t,n)&&a(e,n,t[n]);if(o)for(var n of o(t))l.call(t,n)&&a(e,n,t[n]);return e})({},f),t(b,n({style:{textDecoration:"none",color:"black"}}))),i.createElement(s.div,{layoutId:e,transition:{duration:.36},style:{}},i.createElement(s.div,{initial:x.inActive,animate:x.active,exit:x.inActive,transition:{duration:.36},style:{position:"relative",border:"1px solid black",padding:"30px 15px"}},i.createElement("h4",{style:{marginTop:0,textTransform:"lowercase"}},e,m&&` (${m})`),i.createElement("p",null,p),i.createElement("div",{style:{color:"blue"}},u&&"More",d&&"More (outlink)"),i.createElement("em",{style:{position:"absolute",right:15,bottom:8}},g.map(((e,t)=>i.createElement("span",{key:t},e,t<g.length-1&&","," ")))))));var b}const w=[{title:"Lighthouse Design System",description:"Open-sourced Design System solution to re-invent designing and developing workflows.",duration:"2020 ~ ",slug:"lighthouse-design-system",tags:["design","develop"],role:"Developer / System Designer",links:[{text:"Website",href:"https://lighthouse.harbor.school"}]},{title:"Harbor School",description:"As the founder of Harbor School, I learned how software impacts people and society and markets.",duration:"2018 ~ ",slug:"harbor-school",tags:["develop","marketing"],role:"Founder / Developer / Instructor",links:[{text:"harbor.school",href:"https://beta.harbor.school"},{text:"class.harbor.school",href:"https://class.harbor.school"}]},{title:"Framer Korea",description:"Lead Developer (React) / Program Manager",duration:"2018 ~ ",slug:"framer-korea",tags:["develop","design"],role:"Developer / Motion Designer",links:[{text:"2019 Meetup Website",href:"https://framerkorea.org/en/are-you-having-fun/"},{text:"2020 Meetup Website",href:"https://framerkorea.org"}]},{title:"Seoul Lifelong Education Institute (SLEI) Magazine",description:"Developed whole website (React + Python + Github CI)",duration:"Oct 2020 ~ Dec 2020",slug:"seli",tags:["develop"],role:"Developer",links:[{text:"Website",href:"https://smile.seoul.kr/magazine"}]},{title:"Pulsen - Motion based Chatbot",description:"Developed whole website (React + Framer)",duration:"Mar 2019 - May 2019",slug:"pulsen",tags:["develop"],role:"Developer",links:[{text:"Demo",href:"https://pulsen.netlify.app/?token=demo"}]},{title:"Cnyttan - Online Shopping Site",description:"Developed whole website (Wordpress + PHP + React).",duration:"Oct 2018 - Nov 2018",slug:"cnyttan",tags:["develop"],role:"Developer",links:[{text:"Website",href:"https://cnyttan.com"}]},{title:"vincent project",description:"Developed whole website (Wordpress + CSS).",duration:"2014 ~ 2016",slug:"vincent-project",tags:["design","develop"],role:"Developer / Program Manager",links:[{text:"Instagram",href:"https://www.instagram.com/vincent.project/"},{text:"Website",href:"https://vincentproject.netlify.app/"}]}];function R({children:e,home:t=!1}){const[n,o]=function(e={thresholdTime:0}){const{thresholdTime:t}=e,[n,o]=m.exports.useState(!1),r=m.exports.useRef(null);let l=!1;const a=t||0,i=()=>{clearTimeout(),l=!0,o(!0)},s=()=>{l=!1,setTimeout((function(){!1===l&&o(!1)}),a)};return m.exports.useEffect((()=>{const e=(null==r?void 0:r.current)||window;if(e)return e.addEventListener("mouseover",i),e.addEventListener("mouseout",s),()=>{e.removeEventListener("mouseover",i),e.removeEventListener("mouseout",s)}}),[r.current]),[r,n]}(),{hasCopied:r,onCopy:l}=function(e,t=1500){const[n,o]=m.exports.useState(!1),r=m.exports.useCallback((()=>{const t=p(e);o(t)}),[e]);return m.exports.useEffect((()=>{if(n){const e=setTimeout((()=>{o(!1)}),t);return()=>clearTimeout(e)}}),[t,n]),{value:e,onCopy:r,hasCopied:n}}("ruucm@ruucm.work");return i.createElement(i.Fragment,null,i.createElement("header",null,i.createElement(c,{to:"/"},i.createElement("h2",{style:{display:"inline-block",padding:5,cursor:"pointer"},ref:n},o?"안녕 하세요,":"Hello,",i.createElement("br",null),i.createElement("span",{style:{textDecoration:"underline"}},"I'm yongmin ruucm.")))),i.createElement("div",{style:{display:"grid",gridTemplateColumns:"4fr 1fr"}},i.createElement("main",null,e),i.createElement("footer",{style:{WebkitWritingMode:"vertical-rl",MsWritingMode:"tb-rl",writingMode:"vertical-rl"}},i.createElement("div",{style:{position:"sticky",top:"10vh",display:"inline-block"}},i.createElement("a",{onClick:l,style:{color:"blue",textDecoration:"underline",cursor:"pointer"}},r?"copied":"ruucm@ruucm.work"),i.createElement("br",null),i.createElement("a",{href:"http://twitter.com/ruucm",target:"_blank"},"@ruucm"),i.createElement("br",null),i.createElement(c,{to:"/about"},"about")))))}function I(e,t){var n=e.indexOf(t);return-1!==n&&e.splice(n,1),[...e]}function S(){const[e,t]=m.exports.useState(w),[n,o]=m.exports.useState(["develop","design","marketing"]);return i.createElement(R,{home:!0},i.createElement("h3",null,"Design Engineer"),i.createElement("p",null,"yongmin ruucm is an experienced front-end developer who loves to build useful and joyful software."),i.createElement(d,null,i.createElement("div",{style:{textAlign:"right",marginBottom:7}},i.createElement("em",{className:`tags ${n.includes("develop")&&"active"}`,style:{cursor:"pointer",marginLeft:10},onClick:()=>o(n.includes("develop")?I(n,"develop"):[...n,"develop"])},"Develop"),i.createElement("em",{className:`tags ${n.includes("design")&&"active"}`,style:{cursor:"pointer",marginLeft:10},onClick:()=>o(n.includes("design")?I(n,"design"):[...n,"design"])},"Design"),i.createElement("em",{className:`tags ${n.includes("marketing")&&"active"}`,style:{cursor:"pointer",marginLeft:10},onClick:()=>o(n.includes("marketing")?I(n,"marketing"):[...n,"marketing"])},"Marketing")),i.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"20px"}},e.map(((e,t)=>i.createElement(u,{key:t},function(e,t){for(let n=0;n<t.tags.length;n++){const o=t.tags[n];if(e.includes(o))return!0}}(n,e)&&i.createElement(k,{title:e.title,duration:e.duration,description:e.description,outlink:e.outlink,slug:e.slug,tags:e.tags})))))))}function D(){const e=g().pathname.split("/")[2],t=function(e,t,n){for(let o=0;o<e.length;o++){const r=e[o];if(r[t]===n)return r}}(w,"slug",e);return m.exports.createElement("div",{style:{border:"1px solid black",display:"inline-block",padding:"30px 15px"}},m.exports.createElement("h3",{style:{color:"blue",fontWeight:400,marginTop:0}},t.title," (",t.duration,")"),m.exports.createElement("p",null,"Role - ",t.role),m.exports.createElement("p",null,"Links -"," ",t.links.map(((e,n)=>m.exports.createElement("span",{key:n},m.exports.createElement("a",{href:e.href,target:"_blank",style:{color:"black"}},e.text),n<t.links.length-1&&" / ")))),m.exports.createElement("p",{style:{marginBottom:0}},t.description))}const M=h.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;
  gap: 30px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;function W({images:e}){return m.exports.createElement(M,null,e.map(((e,t)=>m.exports.createElement("img",{key:t,src:e,style:{width:"100%",display:"block",border:"1px solid black"}}))))}function C(){return i.createElement(R,null,i.createElement(D,null),i.createElement(W,{images:["/assets/lighthouse_01.94d78d36.png","/assets/lighthouse_02.fbfb151b.png","/assets/lighthouse_03.0f0b1e21.png","/assets/lighthouse_04.9017a8a9.png","/assets/lighthouse_05.e43ed4cf.png","/assets/lighthouse_06.e7b5b463.png","/assets/lighthouse_07.4d2c9906.png","/assets/lighthouse_08.e3cbae40.png"]}))}const j={duration:.36},_=h.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 30px;
  direction: ltr;
  /* align-items: center; */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  ${({zoomed:e})=>e&&f`
      grid-template-columns: 1fr;
    `}
`,P=h.div`
  padding: 30px 15px;

  @media (max-width: 768px) {
    padding-top: 0px;
  }
`;function A({img:e,title:t,description:n,grayscale:o=!1,alignRight:r=!1}){const[l,a]=m.exports.useState(!1);return m.exports.createElement(_,{zoomed:l},m.exports.createElement(O,{img:e,grayscale:o,zoomed:l,setZoomed:a}),m.exports.createElement(P,null,m.exports.createElement(s.h4,{style:{textDecoration:"underline",display:"inline-block",fontWeight:400},layout:!0,transition:j},t),m.exports.createElement("br",null),m.exports.createElement(s.p,{layout:!0,transition:j,style:{lineHeight:"1.55em"}},n)))}const O=({img:e,grayscale:t,zoomed:n,setZoomed:o})=>{let r="";return t&&(r+="grayscale(1) brightness(0.5)"),m.exports.createElement("div",{style:{position:"relative",width:"100%",height:"0",paddingTop:"66.66%",cursor:n?"zoom-out":"zoom-in",filter:r}},m.exports.createElement(s.div,{animate:{opacity:n?1:0},className:"shade",onClick:()=>o(!1)}),m.exports.createElement(s.img,{src:e,alt:"",onClick:()=>o(!n),layout:!0,transition:j,style:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",width:"100%",height:"100%",border:"1px solid black"}}))};function T(e){return React.createElement(R,null,React.createElement(D,null),React.createElement(d,null,React.createElement("h4",{style:{textAlign:"right",fontWeight:400,color:"blue"}},"Education Content Experience"),React.createElement("div",{style:{display:"grid",gap:30}},React.createElement(A,{img:"/assets/problem-youtube.ba5930f4.png",title:"[Problems] - Bad Education Content Experience",description:"I learn programming and design by myself with youtube videos and blog\n        posts. But as a learner's view, there are solid problem on both side.\n        On video side, it is always difficult to jump the point directly you\n        want. If you find a just example line of code, watching video could be\n        terrible experiences. On post side, it is easy to find information but\n        sometimes post author could skip contents that makes students take a\n        ton of times for finding why their project don't excuted like the\n        post."}),React.createElement(A,{img:"/assets/solution-video-explorer.9e85416e.gif",title:"[Solution] - Video Explorer",description:'So I started develop a new UI called "Video Explorer". I combines good\n      points of video and post at the same time. It includes whole proccess\n      of tutorial to make the results, and user can find information quickly\n      like the blog posts.'})),React.createElement("h4",{style:{textAlign:"right",fontWeight:400,color:"blue"}},"Internal Student Management System"),React.createElement("div",{style:{display:"grid",gap:30}},React.createElement(A,{img:"/assets/problem-students-management.31ea16b8.png",title:"[Problems] - Seperated CRM and Student Managements",description:"I had to offer CRM(Customer relationship management) with student's achievement dashboard."}),React.createElement(A,{img:"/assets/solution-students-management.3b329b1b.png",title:"[Solution] - Student Management System",description:"And I need to collect latest resources for students. But we had only one\n            junior developer and me with limited time.\n            I started to find the fastest and reliable method for that\n            problem."}))))}function L(e){return React.createElement(R,null,React.createElement(D,null),React.createElement(d,null,React.createElement("h4",{style:{textAlign:"right",fontWeight:400,color:"blue"}},"2019 Framer Korea Meetup Website"),React.createElement(A,{img:"/assets/framer-korea-2019.d8db40d0.png",title:"",description:"I developed whole websites using Gatsby.js with the other junior developer. I used Framer to communicate with a designer for motion.\n\n          It also supports bilingual en/ko without losing the website's speed.\n          "}),React.createElement("h4",{style:{textAlign:"right",fontWeight:400,color:"blue"}},"2020 Framer Korea Meetup Website"),React.createElement(A,{img:"/assets/framer-korea-2020.4b4c898f.png",title:"",description:"\n          I developed whole websites using Gatsby.js. I prototyped motions of the website on Framer and moved it to the React development environment without hassle."})))}function z(e){return React.createElement(R,null,React.createElement(D,null),React.createElement(W,{images:["/assets/seli_01.05c1dd95.png","/assets/seli_02.b73cd832.png","/assets/seli_03.7a8dbc0f.png","/assets/seli_04.725ed785.png"]}),React.createElement("div",{style:{height:100}}),React.createElement(d,null,React.createElement("h4",{style:{textAlign:"right",fontWeight:400,color:"blue"}},"Delight Writing Experience for Magazine Website"),React.createElement("div",{style:{display:"grid",gap:30}},React.createElement(A,{img:"/assets/seli-cms-problem.1553a385.png",title:"[Problems] - There are no excellent editors for Web projects.",description:"When developing web projects from scratch, there is only an old WYSIWYG editor for the admin side. I think it could be progressed."}),React.createElement(A,{img:"/assets/seli-cms-notion.1ebba2ce.png",title:"[Solution] - Use Notion as CMS(Content Management System)",description:"I've seen many people use Notion(notion.so) as their daily notes, blogs, portfolios, even for job postings. And it has a straightforward block-style editing system. It seems much better it linked to the front-end, but there was no official API yet (2020). So I decided to develop my own for this project. I used Github CI (Continous Integration) to link changes from Notion to the website. Python3 was also a good choice for getting Notion contents and performances."}))))}function N(e){return React.createElement(R,null,React.createElement(D,null),React.createElement(W,{images:["/assets/pulsen.bf45cab1.gif"]}))}function F(e){return React.createElement(R,null,React.createElement(D,null),React.createElement(W,{images:["/assets/cynttan_01.b36a9883.png","/assets/cynttan_02.d2922f28.png","/assets/cynttan_03.f16d898e.png","/assets/cynttan_04.0650ca0f.png"]}),React.createElement("p",null,"I handled whole WordPress shopping functions (cart, checkout, refund, membership, shipping) as REST API for making dynamic checkout front page with React."))}function B(e){return React.createElement(R,null,React.createElement(D,null),React.createElement(W,{images:["/assets/vincent_01.ba3ac77e.png","/assets/vincent_02.9cd7f83e.png","/assets/vincent_03.f7d8db4c.png","/assets/vincent_04.7cf37fa7.png"]}))}function $(){return i.createElement(R,null,i.createElement("h3",null,"About"),i.createElement("img",{src:"/assets/profile.a74b97bb.jpg",style:{width:200}}))}function G(){return i.createElement(b,null,i.createElement(E,null,i.createElement(y,{path:"/portfolio/vincent-project"},i.createElement(B,null)),i.createElement(y,{path:"/portfolio/cnyttan"},i.createElement(F,null)),i.createElement(y,{path:"/portfolio/pulsen"},i.createElement(N,null)),i.createElement(y,{path:"/portfolio/seli"},i.createElement(z,null)),i.createElement(y,{path:"/portfolio/framer-korea"},i.createElement(L,null)),i.createElement(y,{path:"/portfolio/harbor-school"},i.createElement(T,null)),i.createElement(y,{path:"/portfolio/lighthouse-design-system"},i.createElement(C,null)),i.createElement(y,{path:"/about"},i.createElement($,null)),i.createElement(y,{path:"/"},i.createElement(S,null))))}v.render(i.createElement(i.StrictMode,null,i.createElement(G,null)),document.getElementById("root"));
