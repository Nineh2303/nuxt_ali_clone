import{_ as $}from"./nuxt-link.bcc25473.js";import C from"./Icon.5bb2915e.js";import{u as w,_ as j}from"./MainLayout.3cccf6ff.js";import{B as F,r as h,E as N,b as u,c as m,e as t,M as f,C as r,n as A,t as g,g as v,A as S,o as I,K as B,H as E,w as D,F as y,I as k,z as T,N as z}from"./entry.8609b4e3.js";import"./config.6201b8f1.js";const P={class:"flex justify-start my-2"},R={class:"my-auto"},M=t("div",{class:"h-[8px] w-[8px] rounded-full bg-white"},null,-1),V=[M],L=["src"],U={class:"overflow-hidden pl-2 w-full"},q={class:"flex items-center justify-between w-full"},H={class:"flex items-center justify-between truncate"},W=t("span",{class:"sm:block hidden bg-[#FD374F] text-white text-[9px] font-semibold px-1.5 rounded-sm min-w-[80px]"},"Welcome Deal",-1),G={class:"truncate sm:pl-2"},J={class:"text-xl font-semibold"},K={class:"font-bold"},O=t("p",{class:"text-[#009A66] text-sx font-semibold pt-1"}," Free 11-day delivery over 8.28$ ",-1),Q=t("p",{class:"text-[#009A66] text-sx font-semibold pt-1"}," Free Shipping ",-1),X={class:"flex items-center justify-end"},Y={__name:"CartItem",props:{product:[],selectedArray:[]},emits:["selectedRadio"],setup(x,{emit:l}){const c=x,p=w(),{product:a,selectedArray:b}=F(c);let n=h(!1),d=h(!1);const o=()=>{p.cart.forEach((s,e)=>{s.id===a.value.id&&p.cart.splice(e,1)})};return N(()=>d.value,s=>{l("selectedRadio",{id:a.value.id,val:s})}),(s,e)=>{const _=C;return u(),m("div",P,[t("div",R,[t("div",{onMouseenter:e[1]||(e[1]=i=>f(n)?n.value=!0:n=!0),onMouseleave:e[2]||(e[2]=i=>f(n)?n.value=!1:n=!1),class:"flex items-center justify-start p-0.5 cursor-pointer"},[t("div",{onClick:e[0]||(e[0]=i=>f(d)?d.value=!r(d):d=!r(d)),class:A(["flex items-center justify-center h-[20px] w-[20px] rounded-full border mr-5 ml-2",[r(n)?"border-[#FD374F]":"border-gray-300",r(d)?"bg-[#FD374F]":""]])},V,2)],32)]),t("img",{class:"rounded-md w-[90px] max-h-[210px]",src:r(a).productImg,alt:""},null,8,L),t("div",U,[t("div",q,[t("div",H,[W,t("div",G,g(r(a).productName),1)]),t("button",{onClick:e[3]||(e[3]=i=>o()),class:"mx-3 sm:block hidden -mt-0.5 hover:text-red-500"},[v(_,{name:"material-symbols:delete-outline",size:"20"})])]),t("div",J,[S(" $"),t("span",K,g(r(a).productPrice/100),1)]),O,Q,t("div",X,[t("button",{onClick:e[4]||(e[4]=i=>o()),class:"sm:hidden block -mt-0.5 hover:text-red-500"},[v(_,{name:"material-symbols:delete-outline",size:"20"})])])])])}}},Z=Y,St=""+globalThis.__publicAssetsURL("cart-empty.png"),tt={id:"ShoppingCartPage",class:"mt-4 max-w-[1200px] mx-auto px-2"};const et={key:1,class:"md:flex gap-4 justify-between mx-auto w-full"},ot={class:"md:w-[65%]"},st=t("div",{class:"bg-white rounded-lg p-4"},[t("div",{class:"text-2xl font-bold mb-2"}," Shopping cart (0) ")],-1),ct=t("div",{class:"bg-[#FEEEEF] rounded-lg p4 mt-4"},[t("div",{class:"text-red-500 font-bold"},"Welcome Deal applicable on 1 item only")],-1),nt={id:"Items",class:"bg-white rounded-lg p-4 mt-4"},dt=t("div",{class:"md:hidden block my-4"},null,-1),rt={class:"md:w-[35%]"},it={id:"Summary",class:"bg-white rounded-lg p-4"},at=t("div",{class:"text-2xl font-extrabold mb-2"},"Summary",-1),lt={class:"flex items-center justify-between my-4"},ut=t("div",{class:"font-semibold"},"Total",-1),pt={class:"text-2xl font-semibold"},mt={class:"font-extrabold"},_t={id:"PaymentProtection",class:"bg-white rounded-lg p-4 mt-4"},ht=t("div",{class:"text-lg font-semibold mb-2"},"Payment Methods",-1),ft={class:"flex items-center justify-start gap-8 my-4"},gt=["src"],$t={__name:"shoppingcart",setup(x){const l=w(),c=h([]);I(()=>{setTimeout(()=>l.isLoading=!1,200)});const p=[{id:"641d682987310057ae4deef4",productName:"Lakewood SunghaJung signature",productBrand:"Lakewood",productPrice:999,productDescription:"The description",productImg:"https://res.cloudinary.com/nineh2000/image/upload/v1679648808/guitar-shop/iy8dmo3e48gjyrl4u4id.jpg",inStock:!1,countInStock:10,productSlug:"lakewood-sunghajung-signature"},{id:"642136d63cd8a2073c9deb44",productName:"Morris SC-145U ",productBrand:"Morris",productPrice:999,productDescription:"The description",productImg:"https://res.cloudinary.com/nineh2000/image/upload/v1679898327/guitar-shop/u30jwicvfbefw8qlps8k.jpg",inStock:!0,countInStock:10,productSlug:"morris-sc-145u"},{id:"642137b53cd8a2073c9deb49",productName:"Taylor 214CE",productBrand:"Taylor",productPrice:999,productDescription:"The description",productImg:"https://res.cloudinary.com/nineh2000/image/upload/v1679898550/guitar-shop/nxu8yrrlenjkrm84djy3.png",inStock:!0,countInStock:10,productSlug:"taylor-214ce"},{id:"64fadd6a517188916156abb9",productName:"Alvarez AD30",productBrand:"Alvarez",productPrice:899,productDescription:"The description",productImg:"https://res.cloudinary.com/nineh2000/image/upload/v1694162281/guitar-shop/p3lbg9rdd2t1zqbwwnmc.png",inStock:!0,countInStock:10,productSlug:"alvarez-ad30"},{id:"64fade13517188916156abbf",productName:"Alvarez AGFM80CEAR",productBrand:"Alvarez",productPrice:1049,productDescription:"The description",productImg:"https://res.cloudinary.com/nineh2000/image/upload/v1694162449/guitar-shop/gan3vhjlzap295eilgon.png",inStock:!0,countInStock:10,productSlug:"alvarez-agfm80cear"}],a=h(["visa.png","mastercard.png","paypal.png","applepay.png"]),b=B(()=>{let o=0;return p.forEach(s=>o+=s.productPrice),o/100}),n=o=>{if(!c.value.length){c.value.push(o);return}c.value.forEach((s,e)=>{o.id!=s.id?c.value.push(o):c.value.splice(e,1)})},d=()=>{let o=[];return l.checkout=[],c.value.forEach(e=>o.push(e.id)),l.cart.filter(e=>o.indexOf(e.id)!=-1).forEach(e=>l.checkout.push(T(e))),z("/checkout")};return(o,s)=>{const e=$,_=Z;return u(),E(j,null,{default:D(()=>[t("div",tt,[(u(),m("div",et,[t("div",ot,[st,ct,t("div",nt,[(u(),m(y,null,k(p,i=>t("div",null,[v(_,{product:i,selectedArray:r(c),onSelectedRadio:n},null,8,["product","selectedArray"])])),64))])]),dt,t("div",rt,[t("div",it,[at,t("div",lt,[ut,t("div",pt,[S(" $ "),t("span",mt,g(b.value),1)])]),t("button",{onClick:d,class:"flex items-center justify-center bg-[#FD374F] w-full text-white text-[12px] font-semibold p-1.5 rounded-full mt-4"}," Checkout ")]),t("div",_t,[ht,t("div",ft,[(u(!0),m(y,null,k(r(a),i=>(u(),m("div",null,[t("img",{src:i,alt:"",class:"h-6 cursor-pointer"},null,8,gt)]))),256))])])])]))])]),_:1})}}};export{$t as default};
