"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[6535],{4982:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var r=n(5893),s=n(1151),o=n(5655),a=n.n(o),i=n(9960),l=n(5808);const u={title:"What is Bento for?",sidebar_label:"About",hide_title:!1},c=void 0,d={id:"about",title:"What is Bento for?",description:"Bento is a declarative data streaming service that solves a wide range of data engineering problems with simple, chained, stateless processing steps. It implements transaction based resiliency with back pressure, so when connecting to at-least-once sources and sinks it's able to guarantee at-least-once delivery without needing to persist messages during transit.",source:"@site/docs/about.md",sourceDirName:".",slug:"/about",permalink:"/bento/docs/about",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/about.md",tags:[],version:"current",frontMatter:{title:"What is Bento for?",sidebar_label:"About",hide_title:!1},sidebar:"docs",next:{title:"About",permalink:"/bento/docs/configuration/about"}},p={},m=[{value:"Components",id:"components",level:2},{value:"Inputs",id:"inputs",level:3},{value:"Processors",id:"processors",level:3},{value:"Outputs",id:"outputs",level:3}];function h(e){const t={a:"a",h2:"h2",h3:"h3",hr:"hr",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)("img",{src:"/bento/img/what-is-blob.svg"})}),"\n",(0,r.jsxs)(t.p,{children:["Bento is a declarative data streaming service that solves a wide range of data engineering problems with simple, chained, stateless ",(0,r.jsx)(t.a,{href:"/docs/components/processors/about",children:"processing steps"}),". It implements transaction based resiliency with back pressure, so when connecting to at-least-once sources and sinks it's able to guarantee at-least-once delivery without needing to persist messages during transit."]}),"\n","\n",(0,r.jsx)("div",{className:"container margin-vert--lg",children:(0,r.jsx)("div",{className:"row row--no-gutters",children:(0,r.jsx)(a(),{className:"col",height:"300px",url:"https://www.youtube.com/embed/88DSzCFV4Ng",controls:!0})})}),"\n",(0,r.jsxs)(t.p,{children:["It's ",(0,r.jsx)(t.a,{href:"/docs/guides/getting_started",children:"simple to deploy"}),", comes with a wide range of ",(0,r.jsx)(t.a,{href:"#components",children:"connectors"}),", and is totally data agnostic, making it easy to drop into your existing infrastructure. Bento has functionality that overlaps with integration frameworks, log aggregators and ETL workflow engines, and can therefore be used to complement these traditional data engineering tools or act as a simpler alternative."]}),"\n",(0,r.jsx)(t.p,{children:"Bento is ready to commit to this relationship, are you?"}),"\n","\n",(0,r.jsx)(i.Z,{to:"/docs/guides/getting_started",className:"button button--lg button--outline button--block button--primary",children:"Get Started"}),"\n",(0,r.jsx)(t.h2,{id:"components",children:"Components"}),"\n","\n","\n",(0,r.jsx)(t.h3,{id:"inputs",children:"Inputs"}),"\n",(0,r.jsx)(l.Z,{type:"inputs"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"processors",children:"Processors"}),"\n",(0,r.jsx)(l.Z,{type:"processors"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"outputs",children:"Outputs"}),"\n",(0,r.jsx)(l.Z,{type:"outputs"})]})}function f(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:function(e,t,n){n.d(t,{Z:function(){return a}});n(7294);var r=n(6010),s={tabItem:"tabItem_Ymn6"},o=n(5893);function a(e){let{children:t,hidden:n,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,a),hidden:n,children:t})}},4866:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(7294),s=n(6010),o=n(2466),a=n(6550),i=n(469),l=n(1980),u=n(7392),c=n(12);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,o=p(e),[a,l]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const s=null!=(t=r.find((e=>e.default)))?t:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:o}))),[u,d]=h({queryString:n,groupId:s}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[s,o]=(0,c.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),g=(()=>{const e=null!=u?u:f;return m({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=n(2389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},v=n(5893);function w(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==r&&(u(t),a(s))},d=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var r;const t=l.indexOf(e.currentTarget)+1;n=null!=(r=l[t])?r:l[0];break}case"ArrowLeft":{var s;const t=l.indexOf(e.currentTarget)-1;n=null!=(s=l[t])?s:l[l.length-1];break}}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,s.Z)("tabs__item",g.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===t}),children:null!=n?n:t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function x(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(w,{...e,...t}),(0,v.jsx)(y,{...e,...t})]})}function j(e){const t=(0,b.Z)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(t))}},5808:function(e,t,n){n.d(t,{Z:function(){return d}});n(7294);var r=n(2263),s=n(4866),o=n(5162),a=n(9960),i="componentCard_EbTf",l=n(5893);var u=function(e){const{type:t,component:n}=e;return(0,l.jsx)(a.Z,{to:"/docs/components/"+t+"/"+n.name,className:i,children:(0,l.jsx)("strong",{children:n.name})})};let c={inputs:[{name:"Services",description:"Inputs that consume from storage or message streaming services."},{name:"Network",description:"Inputs that consume directly from low level network protocols."},{name:"AWS",description:"Inputs that consume from Amazon Web Services products."},{name:"GCP",description:"Inputs that consume from Google Cloud Platform services."},{name:"Azure",description:"Inputs that consume from Microsoft Azure services."},{name:"Social",description:"Inputs that consume from social applications and services."},{name:"Local",description:"Inputs that consume from the local machine/filesystem."},{name:"Utility",description:"Inputs that provide utility by generating data or combining/wrapping other inputs."}],buffers:[{name:"Windowing",description:"Buffers that provide message windowing capabilities."},{name:"Utility",description:"Buffers that are intended for niche but general use."}],processors:[{name:"Mapping",description:"Processors that specialize in restructuring messages."},{name:"Integration",description:"Processors that interact with external services."},{name:"Parsing",description:"Processors that specialize in translating messages from one format to another."},{name:"Composition",description:"Higher level processors that compose other processors and modify their behavior."},{name:"Utility",description:"Processors that provide general utility or do not fit in another category."}],outputs:[{name:"Services",description:"Outputs that write to storage or message streaming services."},{name:"Network",description:"Outputs that write directly to low level network protocols."},{name:"AWS",description:"Outputs that write to Amazon Web Services products."},{name:"GCP",description:"Outputs that write to Google Cloud Platform services."},{name:"Azure",description:"Outputs that write to Microsoft Azure services."},{name:"Social",description:"Outputs that write to social applications and services."},{name:"Local",description:"Outputs that write to the local machine/filesystem."},{name:"Utility",description:"Outputs that provide utility by combining/wrapping other outputs."}]};var d=function(e){let{type:t}=e;const n=(0,r.Z)().siteConfig.customFields.components[t];let a=c[t]||[],i={},d=[];for(let r=0;r<a.length;r++)d.push(a[r].name),i[a[r].name.toLowerCase()]={summary:a[r].description,items:[]};for(let r=0;r<n.length;r++){let e=n[r].categories;if(Array.isArray(e))for(let t=0;t<e.length;t++){let s=e[t].toLowerCase();void 0===i[s]?(d.push(s.charAt(0).toUpperCase()+s.slice(1)),i[s]={summary:"",items:[n[r]]}):i[s].items.push(n[r])}}return(0,l.jsx)(s.Z,{defaultValue:d[0].toLowerCase(),values:d.map((e=>({label:e,value:e.toLowerCase()}))),children:d.map((e=>(0,l.jsxs)(o.Z,{value:e.toLowerCase(),children:[(0,l.jsx)("p",{children:i[e.toLowerCase()].summary}),i[e.toLowerCase()].items.map(((e,n)=>(0,l.jsx)(u,{type:t,component:e},n)))]},e.toLowerCase())))})}},1151:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return a}});var r=n(7294);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);