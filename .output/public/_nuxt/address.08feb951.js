import{d as C,r as s,o as T,c as v,D as A,E as N,b as _,g as f,w as k,G as S,e as y,n as U,H as t,I as c,J as F,t as z,f as B,K as E,L as q,M as w,N as D,O as I}from"./entry.821f6ffe.js";import M from"./MainLayout.a081fd2a.js";const V=C({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(b,{slots:i,attrs:p}){const r=s(!1);return T(()=>{r.value=!0}),n=>{var e;if(r.value)return(e=i.default)==null?void 0:e.call(i);const o=i.fallback||i.placeholder;if(o)return o();const d=n.fallback||n.placeholder||"",u=n.fallbackTag||n.placeholderTag||"span";return v(u,p,d)}}}),$=["placeholder","maxlength","type"],L={key:0,class:"text-red-500 text-[14px] font-semibold"},O={__name:"TextInput",props:{input:String,placeholder:String,max:Number,inputType:String,error:{}},emits:["update:input"],setup(b,{emit:i}){const p=b,{input:r,placeholder:n,max:o,inputType:d,error:u}=A(p);let e=s(!1);const g=N({get:()=>r.value,set:h=>i("update:input",h)});return(h,l)=>{const m=V;return _(),v("div",null,[f(m,null,{default:k(()=>[S(y("input",{class:U(["w-full bg-white text-gray-800 border text-sm border-[#EFF0EB] rounded-lg p-3 placeholder-gray-500 focus:outline-none",{"border-gray-900":t(e)},{"border-red-500":t(u)}]),placeholder:t(n),maxlength:t(o),onFocus:l[0]||(l[0]=x=>c(e)?e.value=!0:e=!0),onBlur:l[1]||(l[1]=x=>c(e)?e.value=!1:e=!1),type:t(d),"onUpdate:modelValue":l[2]||(l[2]=x=>c(g)?g.value=x:null),autocomplete:"off"},null,42,$),[[F,t(g)]])]),_:1}),t(u)?(_(),v("span",L,z(t(u)),1)):B("",!0)])}}},R=O,G={id:"AddressPage",class:"mt-4 max-w-[500px] mx-auto px-2"},H={class:"mx-auto bg-white rounded-lg p-3"},J=y("div",{class:"text-xl text-bold mb-2"},"Address Details",-1),K=["disabled"],P={key:0},j={__name:"address",setup(b){const i=E();let p=s(null),r=s(null),n=s(null),o=s(null),d=s(null);s(null),s(!1);let u=s(!1),e=s(null);q(()=>{i.isLoading=!1});const g=async()=>{if(u.value=!0,e.value=null,p.value?r.value?n.value?o.value?d.value||(e.value={type:"country",message:"A country name is required"}):e.value={type:"city",message:"A city name is required"}:e.value={type:"zipCode",message:"A zip code name is required"}:e.value={type:"address",message:"A address name is required"}:e.value={type:"contactName",message:"A contact name is required"},e.value){u.value=!1;return}};return(h,l)=>{const m=R,x=I;return _(),w(M,null,{default:k(()=>[y("div",G,[y("div",H,[J,y("form",{onSubmit:l[5]||(l[5]=D(a=>g(),["prevent"]))},[f(m,{class:"w-full",placeholder:"Contact Name",input:t(p),"onUpdate:input":l[0]||(l[0]=a=>c(p)?p.value=a:p=a),inputType:"text",error:t(e)&&t(e).type=="contactName"?t(e).message:""},null,8,["input","error"]),f(m,{class:"w-full",placeholder:"Address",input:t(r),"onUpdate:input":l[1]||(l[1]=a=>c(r)?r.value=a:r=a),inputType:"text",error:t(e)&&t(e).type=="address"?t(e).message:""},null,8,["input","error"]),f(m,{class:"w-full",placeholder:"Zip Code",input:t(n),"onUpdate:input":l[2]||(l[2]=a=>c(n)?n.value=a:n=a),inputType:"text",error:t(e)&&t(e).type=="zipCode"?t(e).message:""},null,8,["input","error"]),f(m,{class:"w-full",placeholder:"City",input:t(o),"onUpdate:input":l[3]||(l[3]=a=>c(o)?o.value=a:o=a),inputType:"text",error:t(e)&&t(e).type=="city"?t(e).message:""},null,8,["input","error"]),f(m,{class:"w-full",placeholder:"Country",input:t(d),"onUpdate:input":l[4]||(l[4]=a=>c(d)?d.value=a:d=a),inputType:"text",error:t(e)&&t(e).type=="country"?t(e).message:""},null,8,["input","error"]),y("button",{disabled:t(u),type:"submit",class:"mt-6 bg-gradient-to-r from-[#FE630C] to-[#FF3200] w-full text-white text-=[21px] font-semibold p-1.5 rounded-full"},[t(u)?(_(),w(x,{key:1,name:"eos-icons:loading",size:"25",class:"mr-2"})):(_(),v("div",P,"Update Address"))],8,K)],32)])])]),_:1})}}};export{j as default};