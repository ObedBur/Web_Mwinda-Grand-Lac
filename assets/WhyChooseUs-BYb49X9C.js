import{c as s,r as a,g as r,j as e}from"./index-z8OrqRRw.js";import{S as i}from"./ScrollTrigger-BWsqEc1I.js";/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",key:"17lmqv"}]],u=s("heart-handshake",d);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],m=s("shield-check",x);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],g=s("users",p);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],b=s("zap",h);r.registerPlugin(i);const f=[{icon:m,title:"Expertise Certifiée",desc:"Des protocoles stricts pour le nettoyage et une maîtrise technique pointue pour le digital.",color:"text-mwinda-green",bg:"bg-emerald-50"},{icon:b,title:"Double Compétence",desc:"Un partenaire unique pour votre image physique (locaux) et virtuelle (web).",color:"text-mwinda-orange",bg:"bg-orange-50"},{icon:g,title:"Ancrage Local Goma",desc:"Nous comprenons parfaitement les défis et les opportunités du marché en RDC.",color:"text-blue-600",bg:"bg-blue-50"},{icon:u,title:"Service Sur-Mesure",desc:"Des solutions personnalisées, qu'il s'agisse d'un abonnement ménage ou d'une stratégie SEO.",color:"text-purple-600",bg:"bg-purple-50"}],j=()=>{const o=a.useRef(null),n=a.useRef(null);return a.useLayoutEffect(()=>{const t=r.context(()=>{r.from(".feature-card",{y:60,opacity:0,duration:.8,stagger:.2,scrollTrigger:{trigger:n.current,start:"top 85%"}})},o);return()=>t.revert()},[]),e.jsx("section",{ref:o,className:"py-20 bg-white border-b border-slate-100",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsxs("div",{className:"text-center mb-16 max-w-3xl mx-auto",children:[e.jsx("span",{className:"text-sm font-bold tracking-widest text-slate-400 uppercase",children:"Nos Valeurs"}),e.jsxs("h2",{className:"text-3xl md:text-4xl font-extrabold text-slate-900 mt-2",children:["Pourquoi choisir ",e.jsx("span",{className:"text-mwinda-green",children:"Mwinda"})," Grands-Lacs ?"]}),e.jsx("p",{className:"mt-4 text-slate-600",children:"Nous ne nous contentons pas de fournir un service, nous bâtissons des relations de confiance basées sur la qualité et le résultat."})]}),e.jsx("div",{ref:n,className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:f.map((t,c)=>{const l=t.icon;return e.jsxs("div",{className:"feature-card p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300 bg-white",children:[e.jsx("div",{className:`w-14 h-14 rounded-xl ${t.bg} ${t.color} flex items-center justify-center mb-6`,children:e.jsx(l,{size:28})}),e.jsx("h3",{className:"text-xl font-bold text-slate-800 mb-3",children:t.title}),e.jsx("p",{className:"text-slate-500 text-sm leading-relaxed",children:t.desc})]},c)})})]})})};export{j as default};
