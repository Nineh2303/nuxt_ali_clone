import{d as r,E as n,a7 as c,Z as h,l as o,a8 as l,b as d,c as u,H as f}from"./entry.821f6ffe.js";const g=["src","alt","width","height"],p=r({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,i=n(()=>{var a;if((a=t.src)!=null&&a.startsWith("/")&&!t.src.startsWith("//")){const s=c(h(o().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return l(s,t.src)}return t.src});return(a,s)=>(d(),u("img",{src:f(i),alt:e.alt,width:e.width,height:e.height},null,8,g))}});export{p as default};