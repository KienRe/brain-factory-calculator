(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1509:(e,i,a)=>{Promise.resolve().then(a.bind(a,368))},368:(e,i,a)=>{"use strict";a.d(i,{MainLayout:()=>w});var n=a(5155),t=a(2115);let r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=function(){for(var e=arguments.length,i=Array(e),a=0;a<e;a++)i[a]=arguments[a];return i.filter((e,i,a)=>!!e&&""!==e.trim()&&a.indexOf(e)===i).join(" ").trim()};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let c=(0,t.forwardRef)((e,i)=>{let{color:a="currentColor",size:n=24,strokeWidth:r=2,absoluteStrokeWidth:c,className:l="",children:m,iconNode:d,...u}=e;return(0,t.createElement)("svg",{ref:i,...o,width:n,height:n,stroke:a,strokeWidth:c?24*Number(r)/Number(n):r,className:s("lucide",l),...u},[...d.map(e=>{let[i,a]=e;return(0,t.createElement)(i,a)}),...Array.isArray(m)?m:[m]])}),l=(e,i)=>{let a=(0,t.forwardRef)((a,n)=>{let{className:o,...l}=a;return(0,t.createElement)(c,{ref:n,iconNode:i,className:s("lucide-".concat(r(e)),o),...l})});return a.displayName="".concat(e),a},m=l("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),d=l("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]),u=l("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),p=l("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),g={neuralPulse:{name:"Neural Pulse",icon:"⚡",description:"Raw electrical potential for neural activity",category:"raw"},brainGlucose:{name:"Brain Glucose",icon:"\uD83D\uDFE1",description:"Basic energy source for brain function",category:"raw"},aminoAcid:{name:"Amino Acid",icon:"\uD83E\uDDEC",description:"Building blocks for neurotransmitters",category:"raw"},memoryMatter:{name:"Memory Matter",icon:"\uD83D\uDCAD",description:"Raw material for emotional context",category:"raw"},basicSignal:{name:"Basic Signal",icon:"\uD83D\uDCE1",description:"Simple neural signal",category:"components"},brainEnergy:{name:"Brain Energy",icon:"✨",description:"Processed neural fuel",category:"components"},neuropeptide:{name:"Neuropeptide",icon:"\uD83D\uDD37",description:"Basic protein signal molecule",category:"components"},dopamine:{name:"Dopamine",icon:"\uD83D\uDE0A",description:"Pleasure and reward neurotransmitter",category:"neurotransmitters"},serotonin:{name:"Serotonin",icon:"\uD83D\uDE0C",description:"Mood and satisfaction regulator",category:"neurotransmitters"},cortisol:{name:"Cortisol",icon:"\uD83D\uDE30",description:"Stress hormone",category:"neurotransmitters"},oxytocin:{name:"Oxytocin",icon:"\uD83D\uDC9D",description:"Social bonding hormone",category:"neurotransmitters"},annoyance:{name:"Annoyance",icon:"\uD83D\uDE24",description:"Mild negative reaction",category:"basic-emotions"},boredom:{name:"Boredom",icon:"\uD83D\uDE11",description:"Lack of interest",category:"basic-emotions"},apprehension:{name:"Apprehension",icon:"\uD83D\uDE1F",description:"Mild worry or concern",category:"basic-emotions"},distraction:{name:"Distraction",icon:"\uD83E\uDD14",description:"Mild attention shift",category:"basic-emotions"},anger:{name:"Anger",icon:"\uD83D\uDE20",description:"Strong negative emotion",category:"medium-emotions"},disgust:{name:"Disgust",icon:"\uD83E\uDD22",description:"Aversion response",category:"medium-emotions"},fear:{name:"Fear",icon:"\uD83D\uDE28",description:"Danger response",category:"medium-emotions"},surprise:{name:"Surprise",icon:"\uD83D\uDE32",description:"Unexpected reaction",category:"medium-emotions"},rage:{name:"Rage",icon:"\uD83E\uDD2C",description:"Intense anger",category:"high-emotions"},loathing:{name:"Loathing",icon:"\uD83E\uDD2E",description:"Intense disgust",category:"high-emotions"},terror:{name:"Terror",icon:"\uD83D\uDE31",description:"Intense fear",category:"high-emotions"},amazement:{name:"Amazement",icon:"\uD83E\uDD2F",description:"Intense surprise",category:"high-emotions"},serenity:{name:"Serenity",icon:"\uD83D\uDE0C",description:"Deep calm and peace",category:"complex-emotions"},acceptance:{name:"Acceptance",icon:"\uD83E\uDD17",description:"Opening to experience",category:"complex-emotions"},interest:{name:"Interest",icon:"\uD83E\uDDD0",description:"Engaged attention",category:"complex-emotions"},pensiveness:{name:"Pensiveness",icon:"\uD83E\uDD14",description:"Reflective state",category:"complex-emotions"},ecstasy:{name:"Ecstasy",icon:"\uD83C\uDF1F",description:"Peak positive experience",category:"elite-emotions"},admiration:{name:"Admiration",icon:"✨",description:"Deep appreciation",category:"elite-emotions"},vigilance:{name:"Vigilance",icon:"\uD83D\uDC41️",description:"Heightened awareness",category:"elite-emotions"},grief:{name:"Grief",icon:"\uD83D\uDC94",description:"Deep sadness",category:"elite-emotions"}};function y(e){return e.replace(/([A-Z])/g," $1").replace(/^./,e=>e.toUpperCase()).trim()}function h(e){let{type:i,onClose:a,onSelect:r}=e,[s,o]=(0,t.useState)(""),c=function(e){let i={raw:"Raw Resources",components:"Basic Components",neurotransmitters:"Neurotransmitters","basic-emotions":"Basic Emotions","medium-emotions":"Medium Emotions","high-emotions":"High Emotions","complex-emotions":"Complex Emotions","elite-emotions":"Elite Emotions"};return Object.entries(e).reduce((e,a)=>{let[n,t]=a,r=i[t.category]||t.category;return e[r]||(e[r]=[]),e[r].push({id:n,...t}),e},{})}(Object.fromEntries(Object.entries(g).filter(e=>{let[i,a]=e;return a.name.toLowerCase().includes(s.toLowerCase())||y(i).toLowerCase().includes(s.toLowerCase())})));return(0,n.jsx)("div",{className:"fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50",children:(0,n.jsxs)("div",{className:"w-[900px] h-[80vh] bg-gray-900 rounded-lg border border-gray-800 flex flex-col",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between p-4 border-b border-gray-800",children:[(0,n.jsxs)("h2",{className:"text-xl font-semibold text-gray-100",children:["Select ",i," Item"]}),(0,n.jsx)("button",{onClick:a,className:"p-2 hover:bg-gray-800 rounded-full transition-colors",children:(0,n.jsx)(u,{className:"h-5 w-5 text-gray-400"})})]}),(0,n.jsx)("div",{className:"p-4 border-b border-gray-800",children:(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)(p,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"}),(0,n.jsx)("input",{type:"text",placeholder:"Search items...",value:s,onChange:e=>o(e.target.value),className:"w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700/50 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"})]})}),(0,n.jsx)("div",{className:"flex-1 overflow-y-auto overflow-x-hidden px-4 pb-8 custom-scrollbar",children:(0,n.jsx)("div",{className:"space-y-8 pt-4 min-h-[400px]",children:Object.entries(c).map(e=>{let[i,t]=e;return(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsx)("h3",{className:"text-lg font-medium text-gray-200",children:i}),(0,n.jsx)("div",{className:"grid grid-cols-2 gap-4",children:t.map(e=>(0,n.jsxs)("button",{onClick:()=>{null==r||r(e.id),a()},className:"flex items-center gap-4 p-4 rounded-lg border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800 transition-colors text-left",children:[(0,n.jsx)("span",{className:"text-2xl",children:e.icon}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"font-medium text-gray-200",children:y(e.id)}),(0,n.jsx)("div",{className:"text-sm text-gray-400",children:e.description})]})]},e.id))})]},i)})})})]})})}let b=l("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);var x=a(5898);function f(e){let{recipe:i,resourceId:a}=e,[r,s]=(0,t.useState)(!1),[o,c]=(0,t.useState)(i),[l,m]=(0,t.useState)(!1),{updateRecipe:d,deleteRecipe:u}=(0,x.Z)();return(0,n.jsxs)("div",{className:"border border-gray-700/50 rounded-lg p-6 bg-gray-800/50 backdrop-blur-sm",children:[(0,n.jsxs)("div",{className:"flex justify-between items-start mb-6",children:[(0,n.jsx)("div",{children:i.isDefault&&(0,n.jsx)("span",{className:"inline-block px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded",children:"DEFAULT"})}),(0,n.jsx)("div",{className:"flex gap-2",children:(0,n.jsx)("button",{className:"p-2 rounded hover:bg-gray-700/50 transition-colors",onClick:()=>s(!0),children:(0,n.jsx)(b,{className:"h-4 w-4 text-gray-400"})})})]}),(0,n.jsxs)("div",{className:"grid grid-cols-3 gap-8",children:[(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)("h4",{className:"text-sm font-medium text-gray-500 uppercase tracking-wider",children:"Ingredients"}),(0,n.jsx)("div",{className:"space-y-3 pt-2",children:Object.entries(i.inputs).map(e=>{var i;let[a,t]=e;return(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsxs)("span",{className:"text-gray-300 font-medium",children:[t,"x"]}),(null===(i=g[a])||void 0===i?void 0:i.icon)&&(0,n.jsx)("span",{className:"text-lg",children:g[a].icon}),(0,n.jsx)("span",{className:"text-gray-400",children:y(a)})]},a)})})]}),(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)("h4",{className:"text-sm font-medium text-gray-500 uppercase tracking-wider",children:"Produced in"}),(0,n.jsxs)("div",{className:"space-y-3 pt-2",children:[(0,n.jsx)("div",{className:"text-gray-400",children:y(i.machine)}),(0,n.jsxs)("div",{className:"text-gray-400",children:[i.baseTime,"s"]})]})]}),(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)("h4",{className:"text-sm font-medium text-gray-500 uppercase tracking-wider",children:"Products"}),(0,n.jsx)("div",{className:"space-y-3 pt-2",children:Object.entries(i.output).map(e=>{var i;let[a,t]=e;return(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsxs)("span",{className:"text-gray-300 font-medium",children:[t,"x"]}),(null===(i=g[a])||void 0===i?void 0:i.icon)&&(0,n.jsx)("span",{className:"text-lg",children:g[a].icon}),(0,n.jsx)("span",{className:"text-gray-400",children:y(a)})]},a)})})]})]})]})}function v(e){let{searchQuery:i}=e,{recipes:a}=(0,x.Z)(),t=Object.entries(a).filter(e=>{var a;let[n]=e;return""===i||y(n).toLowerCase().includes(i.toLowerCase())||(null===(a=g[n])||void 0===a?void 0:a.name.toLowerCase().includes(i.toLowerCase()))});return(0,n.jsx)("div",{className:"space-y-6 p-4",children:t.map(e=>{let[i,a]=e;return(0,n.jsx)("div",{children:(0,n.jsx)(f,{recipe:a[0],resourceId:i})},i)})})}function j(e){let{onClose:i}=e,[a,r]=t.useState("");return(0,n.jsx)("div",{className:"fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50",children:(0,n.jsxs)("div",{className:"w-[900px] h-[80vh] bg-gray-900 rounded-lg border border-gray-800 flex flex-col",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between p-4 border-b border-gray-800",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold text-gray-100",children:"Recipe Management"}),(0,n.jsx)("button",{onClick:i,className:"p-2 hover:bg-gray-800 rounded-full transition-colors",children:(0,n.jsx)(u,{className:"h-5 w-5 text-gray-400"})})]}),(0,n.jsx)("div",{className:"px-4 py-3 border-b border-gray-800",children:(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)(p,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"}),(0,n.jsx)("input",{type:"text",placeholder:"Search recipes...",value:a,onChange:e=>r(e.target.value),className:"w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700/50 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"})]})}),(0,n.jsx)("div",{className:"flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar",children:(0,n.jsx)(v,{searchQuery:a})})]})})}function N(){let[e,i]=(0,t.useState)(null);return(0,n.jsxs)("div",{className:"w-96 bg-gray-800 text-white",children:[(0,n.jsxs)("div",{className:"p-4",children:[(0,n.jsx)("div",{className:"mb-6",children:(0,n.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[(0,n.jsx)("h2",{className:"text-lg font-semibold",children:"Outputs"}),(0,n.jsx)("button",{onClick:()=>i("output"),className:"p-1 hover:bg-gray-700 rounded",children:(0,n.jsx)(m,{className:"h-5 w-5"})})]})}),(0,n.jsx)("div",{className:"mb-6",children:(0,n.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[(0,n.jsx)("h2",{className:"text-lg font-semibold",children:"Inputs"}),(0,n.jsx)("button",{onClick:()=>i("input"),className:"p-1 hover:bg-gray-700 rounded",children:(0,n.jsx)(m,{className:"h-5 w-5"})})]})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-lg font-semibold mb-2",children:"Options"}),(0,n.jsxs)("button",{onClick:()=>i("recipes"),className:"flex items-center gap-2 p-2 w-full bg-gray-700 hover:bg-gray-600 rounded",children:[(0,n.jsx)(d,{className:"h-5 w-5"}),(0,n.jsx)("span",{children:"Manage Recipes"})]})]})]}),"recipes"===e?(0,n.jsx)(j,{onClose:()=>i(null)}):e&&(0,n.jsx)(h,{type:e,onClose:()=>i(null),onSelect:e=>{i(null)}})]})}function w(){return(0,n.jsxs)("div",{className:"h-screen flex",children:[(0,n.jsx)("div",{className:"flex-1 bg-gray-900 p-4",children:(0,n.jsx)("div",{className:"h-full border-2 border-dashed border-gray-700 rounded-lg flex items-center justify-center text-gray-500",children:"Production graph will be displayed here"})}),(0,n.jsx)(N,{})]})}},5898:(e,i,a)=>{"use strict";a.d(i,{RecipeProvider:()=>o,Z:()=>c});var n=a(5155),t=a(2115);let r={basicSignal:[{id:"basic-signal",name:"Basic Signal",machine:"signalConstructor",inputs:{neuralPulse:2},output:{basicSignal:1},baseTime:4,isDefault:!0,category:"basic"}],brainEnergy:[{id:"brain-energy",name:"Brain Energy",machine:"energyProcessor",inputs:{brainGlucose:2},output:{brainEnergy:1},baseTime:4,isDefault:!0,category:"basic"}],neuropeptide:[{id:"neuropeptide",name:"Neuropeptide",machine:"proteinSynthesizer",inputs:{aminoAcid:2,brainEnergy:1},output:{neuropeptide:1},baseTime:6,isDefault:!0,category:"basic"}],dopamine:[{id:"dopamine",name:"Dopamine",machine:"transmitterLab",inputs:{basicSignal:1,neuropeptide:2,brainEnergy:1},output:{dopamine:1},baseTime:8,isDefault:!0,category:"basic"}],serotonin:[{id:"serotonin",name:"Serotonin",machine:"transmitterLab",inputs:{basicSignal:1,neuropeptide:1,brainEnergy:2},output:{serotonin:1},baseTime:8,isDefault:!0,category:"basic"}],cortisol:[{id:"cortisol",name:"Cortisol",machine:"transmitterLab",inputs:{basicSignal:1,brainEnergy:2},output:{cortisol:1},baseTime:8,isDefault:!0,category:"basic"}],oxytocin:[{id:"oxytocin",name:"Oxytocin",machine:"transmitterLab",inputs:{dopamine:1,serotonin:1},output:{oxytocin:1},baseTime:10,isDefault:!0,category:"basic"}],annoyance:[{id:"annoyance",name:"Annoyance",machine:"basicEmotionMixer",inputs:{dopamine:1,brainEnergy:1},output:{annoyance:1},baseTime:10,isDefault:!0,category:"basic"}],boredom:[{id:"boredom",name:"Boredom",machine:"basicEmotionMixer",inputs:{serotonin:1,brainEnergy:1},output:{boredom:1},baseTime:10,isDefault:!0,category:"basic"}],apprehension:[{id:"apprehension",name:"Apprehension",machine:"basicEmotionMixer",inputs:{cortisol:1,brainEnergy:1},output:{apprehension:1},baseTime:10,isDefault:!0,category:"basic"}],distraction:[{id:"distraction",name:"Distraction",machine:"basicEmotionMixer",inputs:{basicSignal:1,brainEnergy:1},output:{distraction:1},baseTime:10,isDefault:!0,category:"basic"}],anger:[{id:"anger",name:"Anger",machine:"standardEmotionLab",inputs:{annoyance:1,cortisol:1,brainEnergy:1},output:{anger:1},baseTime:12,isDefault:!0,category:"medium"}],disgust:[{id:"disgust",name:"Disgust",machine:"standardEmotionLab",inputs:{boredom:1,cortisol:1,brainEnergy:1},output:{disgust:1},baseTime:12,isDefault:!0,category:"medium"}],fear:[{id:"fear",name:"Fear",machine:"standardEmotionLab",inputs:{apprehension:1,cortisol:1,brainEnergy:1},output:{fear:1},baseTime:12,isDefault:!0,category:"medium"}],surprise:[{id:"surprise",name:"Surprise",machine:"standardEmotionLab",inputs:{distraction:1,dopamine:1,brainEnergy:1},output:{surprise:1},baseTime:12,isDefault:!0,category:"medium"}],rage:[{id:"rage",name:"Rage",machine:"advancedEmotionLab",inputs:{anger:1,cortisol:1,brainEnergy:1},output:{rage:1},baseTime:15,isDefault:!0,category:"high"}],loathing:[{id:"loathing",name:"Loathing",machine:"advancedEmotionLab",inputs:{disgust:1,cortisol:1,brainEnergy:1},output:{loathing:1},baseTime:15,isDefault:!0,category:"high"}],terror:[{id:"terror",name:"Terror",machine:"advancedEmotionLab",inputs:{fear:1,cortisol:1,brainEnergy:1},output:{terror:1},baseTime:15,isDefault:!0,category:"high"}],amazement:[{id:"amazement",name:"Amazement",machine:"advancedEmotionLab",inputs:{surprise:1,dopamine:1,brainEnergy:1},output:{amazement:1},baseTime:15,isDefault:!0,category:"high"}],serenity:[{id:"serenity",name:"Serenity",machine:"complexSynthesizer",inputs:{dopamine:1,oxytocin:1,brainEnergy:1},output:{serenity:1},baseTime:20,isDefault:!0,category:"complex"}],acceptance:[{id:"acceptance",name:"Acceptance",machine:"complexSynthesizer",inputs:{serotonin:1,oxytocin:1,brainEnergy:1},output:{acceptance:1},baseTime:20,isDefault:!0,category:"complex"}],interest:[{id:"interest",name:"Interest",machine:"complexSynthesizer",inputs:{dopamine:1,basicSignal:1,brainEnergy:1},output:{interest:1},baseTime:20,isDefault:!0,category:"complex"}],pensiveness:[{id:"pensiveness",name:"Pensiveness",machine:"complexSynthesizer",inputs:{serotonin:1,memoryMatter:1,brainEnergy:1},output:{pensiveness:1},baseTime:20,isDefault:!0,category:"complex"}],ecstasy:[{id:"ecstasy",name:"Ecstasy",machine:"eliteSynthesizer",inputs:{serenity:1,dopamine:1,oxytocin:1,brainEnergy:1},output:{ecstasy:1},baseTime:30,isDefault:!0,category:"elite"}],admiration:[{id:"admiration",name:"Admiration",machine:"eliteSynthesizer",inputs:{acceptance:1,oxytocin:1,dopamine:1,brainEnergy:1},output:{admiration:1},baseTime:30,isDefault:!0,category:"elite"}],vigilance:[{id:"vigilance",name:"Vigilance",machine:"eliteSynthesizer",inputs:{interest:1,cortisol:1,basicSignal:1,brainEnergy:1},output:{vigilance:1},baseTime:30,isDefault:!0,category:"elite"}],grief:[{id:"grief",name:"Grief",machine:"eliteSynthesizer",inputs:{pensiveness:1,cortisol:1,memoryMatter:1,brainEnergy:1},output:{grief:1},baseTime:30,isDefault:!0,category:"elite"}]},s=(0,t.createContext)(void 0);function o(e){let{children:i}=e,[a,o]=(0,t.useState)(r);return(0,n.jsx)(s.Provider,{value:{recipes:a,updateRecipe:(e,i,a)=>{o(n=>({...n,[e]:n[e].map(e=>e.id===i?a:e)}))},deleteRecipe:(e,i)=>{o(a=>({...a,[e]:a[e].filter(e=>e.id!==i)}))},addRecipe:(e,i)=>{o(a=>({...a,[e]:[...a[e]||[],i]}))}},children:i})}let c=()=>{let e=(0,t.useContext)(s);if(void 0===e)throw Error("useRecipes must be used within a RecipeProvider");return e}}},e=>{var i=i=>e(e.s=i);e.O(0,[441,517,358],()=>i(1509)),_N_E=e.O()}]);