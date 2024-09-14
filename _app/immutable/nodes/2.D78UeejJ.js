import{a as O,t as H,c as se,n as _e,d as ne}from"../chunks/disclose-version.C3l25RE7.js";import{a1 as me,E as le,am as xe,an as Le,B as ce,ao as Me,ai as Ee,p as R,j as P,g as S,l as D,f as j,k as ue,ap as U,h as L,o as I,i as M,aq as Y}from"../chunks/runtime.Da3H4BDx.js";import{i as V}from"../chunks/lifecycle.CvDi3mem.js";import{t as q,s as re,a as Fe,d as Be,b as K}from"../chunks/DataGrid.svelte_svelte_type_style_lang.BSF4Ac9M.js";import{l as ie,p as d,i as Oe,s as Ie}from"../chunks/props.D7j7t0BO.js";import{i as Xe,c as ve,d as ze,n as Se,a as Te,e as J,s as Pe}from"../chunks/render.DYkWg1d6.js";import{o as oe}from"../chunks/index-client.Dqx8Me0t.js";import{g as Ue,w as Re}from"../chunks/index.FMaAuBK5.js";function je(t,e){if(e){const r=document.body;t.autofocus=!0,me(()=>{document.activeElement===r&&t.focus()})}}let fe=!1;function Ce(){fe||(fe=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const r of t.target.elements)(e=r.__on_r)==null||e.call(r)})},{capture:!0}))}function ke(t){if(le){var e=!1,r=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var l=t.value;X(t,"value",null),t.value=l}if(t.hasAttribute("checked")){var o=t.checked;X(t,"checked",null),t.checked=o}}};t.__on_r=r,xe(r),Ce()}}function X(t,e,r,l){r=r==null?null:r+"";var o=t.__attributes??(t.__attributes={});le&&(o[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||o[e]!==(o[e]=r)&&(e==="loading"&&(t[Le]=r),r===null?t.removeAttribute(e):t.setAttribute(e,r))}function ye(t,e,r,l,o=!1,s){var a=e||{},u=t.tagName==="OPTION";for(var v in e)v in r||(r[v]=null);l!==void 0&&(r.class=r.class?r.class+" "+l:l);var C=he.get(t.nodeName);C||he.set(t.nodeName,C=Ze(t));var E=t.__attributes??(t.__attributes={}),f=[];for(const n in r){let c=r[n];if(u&&n==="value"&&c==null){t.value=t.__value="",a[n]=c;continue}var F=a[n];if(c!==F){a[n]=c;var m=n[0]+n[1];if(m!=="$$")if(m==="on"){const b={},k="$$"+n;let x=n.slice(2);var y=Te(x);if(Xe(x)&&(x=x.slice(0,-7),b.capture=!0),!y&&F){if(c!=null)continue;t.removeEventListener(x,a[k],b),a[k]=null}if(c!=null)if(y)t[`__${x}`]=c,ze([x]);else{let B=function(Z){a[n].call(this,Z)};e?a[k]=ve(x,t,B,b):f.push([n,c,()=>a[k]=ve(x,t,B,b)])}}else if(c==null)E[n]=null,t.removeAttribute(n);else if(n==="style")t.style.cssText=c+"";else if(n==="autofocus")je(t,!!c);else if(n==="__value"||n==="value")t.value=t[n]=t.__value=c;else{var g=n;o||(g=Se(g)),C.includes(g)?le&&(g==="src"||g==="href"||g==="srcset")||(t[g]=c):typeof c!="function"&&X(t,g,c)}}}return e||me(()=>{if(t.isConnected)for(const[n,c,b]of f)a[n]===c&&b()}),a}var Ve=["width","height","draggable"],he=new Map;function Ze(t){for(var e=[],r,l=ce(t);l.constructor.name!=="Element";){r=Me(l);for(var o in r)r[o].set&&!Ve.includes(o)&&e.push(o);l=ce(l)}return e}function i(t,e,r,l,o){var s=t.__attributes??(t.__attributes={}),a=t.style,u="style-"+e;s[u]===r&&(!o||a.getPropertyValue(e)===r)||(s[u]=r,r==null?a.removeProperty(e):a.setProperty(e,r,""))}function Ne(t,e,r,l=r){t.addEventListener(e,r);const o=t.__on_r;o?t.__on_r=()=>{o(),l()}:t.__on_r=l,Ce()}function We(t,e,r){Ne(t,"change",()=>{var l=t.checked;r(l)}),e()==null&&r(!1),Ee(()=>{var l=e();t.checked=!!l})}let be=Re(0);const de=()=>(be.update(e=>e+1),Ue(be));var Ae=H('<div><span class="track svelte-1f54bii"></span> <span class="switch svelte-1f54bii"><!></span> <input></div>');function pe(t,e){const r=ie(e,["children","$$slots","$$events","$$legacy"]);R(e,!1);let l=d(e,"color",12,""),o=d(e,"id",12,""),s=d(e,"isChecked",12,!1),a=d(e,"onClick",8,()=>{}),u="2rem",v="1rem",C=l()!=="";function E(){s(!s())}let f=U();q.subscribe(b=>{P(f,b),C||l(S(f).colors.primary)}),oe(()=>{o()||o(`switch-${de()}`)}),V();var F=Ae();i(F,"height",u);var m=L(F);i(m,"height",u),i(m,"--Xl-border-radius",v);var y=I(m,2);i(y,"--Xl-border-radius",v);var g=L(y);Oe(g,s,b=>{var B;var k=se(),x=ue(k);re(x,(B=e.$$slots)==null?void 0:B.activeIcon,{}),O(b,k)},b=>{var B;var k=se(),x=ue(k);re(x,(B=e.$$slots)==null?void 0:B.disabledIcon,{}),O(b,k)}),M(y);var n=I(y,2);ke(n);let c;M(F),D(()=>{i(m,"background-color",s()?l():S(f).disabled.fill),i(y,"transform",`translate(${s()?"1.76rem":"0.26rem"}, 0.26rem)`),i(y,"--Xl-background-color",S(f).colors.background),c=ye(n,c,{type:"checkbox",id:o(),...r},"svelte-1f54bii"),i(n,"height",u,void 0,!0)}),We(n,s,b=>s(b)),J("click",n,()=>{E(),a()()}),O(t,F),j()}var He=_e('<svg viewBox="0 0 24 24" fill="black"><g clip-path="url(#clip0_429_11017)"><path d="M20.9955 11.7115L22.2448 11.6721C22.2326 11.2847 22.0414 10.9249 21.7272 10.698C21.413 10.4711 21.0113 10.4029 20.6397 10.5132L20.9955 11.7115ZM12.2885 3.00454L13.4868 3.36028C13.5971 2.98873 13.5289 2.58703 13.302 2.2728C13.0751 1.95857 12.7153 1.76736 12.3279 1.75516L12.2885 3.00454ZM20.6397 10.5132C20.1216 10.667 19.5716 10.75 19 10.75V13.25C19.815 13.25 20.6046 13.1314 21.3512 12.9098L20.6397 10.5132ZM19 10.75C15.8244 10.75 13.25 8.17564 13.25 5H10.75C10.75 9.55635 14.4437 13.25 19 13.25V10.75ZM13.25 5C13.25 4.42841 13.333 3.87841 13.4868 3.36028L11.0902 2.64879C10.8686 3.39542 10.75 4.18496 10.75 5H13.25ZM12 4.25C12.0834 4.25 12.1665 4.25131 12.2492 4.25392L12.3279 1.75516C12.219 1.75173 12.1097 1.75 12 1.75V4.25ZM4.25 12C4.25 7.71979 7.71979 4.25 12 4.25V1.75C6.33908 1.75 1.75 6.33908 1.75 12H4.25ZM12 19.75C7.71979 19.75 4.25 16.2802 4.25 12H1.75C1.75 17.6609 6.33908 22.25 12 22.25V19.75ZM19.75 12C19.75 16.2802 16.2802 19.75 12 19.75V22.25C17.6609 22.25 22.25 17.6609 22.25 12H19.75ZM19.7461 11.7508C19.7487 11.8335 19.75 11.9166 19.75 12H22.25C22.25 11.8903 22.2483 11.781 22.2448 11.6721L19.7461 11.7508Z"></path></g><defs><clipPath id="clip0_429_11017"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>');function De(t,e){R(e,!1);let r=d(e,"fill",8,""),l=d(e,"size",8,"2rem"),o=U();q.subscribe(v=>{P(o,v)}),V();var s=He(),a=L(s),u=L(a);M(a),Y(),M(s),D(()=>{X(s,"width",l()),X(s,"height",l()),X(u,"fill",r()!==""?r():S(o).colors.text.primary)}),O(t,s),j()}var qe=_e('<svg viewBox="0 0 24 24" fill="none"><path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');function Ge(t,e){R(e,!1);let r=d(e,"stroke",8,""),l=d(e,"size",8,"1.1rem"),o=U();q.subscribe(u=>{P(o,u)}),V();var s=qe(),a=L(s);M(s),D(()=>{X(s,"width",l()),X(s,"height",l()),X(a,"stroke",r()!==""?r():S(o).colors.text.primary)}),O(t,s),j()}var Je=H("<div><!></div>");function Ke(t,e){const r=ie(e,["children","$$slots","$$events","$$legacy"]);let l=d(e,"checked",8,!1);var o=Je(),s=L(o);pe(s,Ie({get isChecked(){return l()},onClick:Fe},()=>r,{$$slots:{activeIcon:(a,u)=>{De(a,{slot:"activeIcon",size:"1.1rem"})},disabledIcon:(a,u)=>{Ge(a,{slot:"disabledIcon",size:"1.1rem"})}}})),M(o),O(t,o)}var Ye=H('<div class="input-container svelte-sk69ro"><button placeholder="" class="svelte-sk69ro"><!></button></div>');function ge(t,e){R(e,!1);let r=d(e,"variant",8,"Contained"),l=d(e,"id",12,""),o=d(e,"borderColor",12,""),s=d(e,"borderRadius",12,""),a=d(e,"fontSize",12,""),u=d(e,"height",12,""),v=d(e,"labelColor",12,""),C=d(e,"minWidth",8,""),E=d(e,"outlineWidth",12,""),f=d(e,"paddingLeft",12,""),F=d(e,"paddingRight",12,""),m=d(e,"primaryColor",12,""),y=d(e,"secondaryColor",12,""),g=d(e,"textColor",12,""),n=d(e,"width",12,""),c=g()!=="",b=o()!=="",k=v()!=="",x=m()!=="",B=m()!=="",Z=U(""),p;q.subscribe(G=>{p=G,b||o(p.themeMode==="light"?p.colors.text.primary:p.colors.primary),k||v(p.colors.text.label),x||m(p.colors.primary),B||y(p.colors.secondary),c||g(r()==="Contained"?p.colors.text.primary:p.colors.primary),P(Z,p.controls.button.filter)}),p&&(s()||s(p.border.borderRadius),u()||u(p.controls.height),E()||E(p.border.disabled.width),f()||f(p.controls.textField.padding),F()||F(f()),n()||n(p.controls.width),a()||a(p.typography.fontSize)),oe(()=>{l()||l(`button-${de()}`)}),V();var N=Ye(),w=L(N),_=L(w);re(_,Be(e),{}),M(w),M(N),D(()=>{i(N,"width",n()),X(w,"id",l()),i(w,"border",r()==="Outlined"?`1px solid ${m()}`:"none"),i(w,"border-radius",s()),i(w,"padding-left",f()),i(w,"padding-right",F()),i(w,"font-size",a()),i(w,"min-width",C()),i(w,"width","100%"),i(w,"--Xl-color",r()==="Contained"?m():""),i(w,"--Xl-height",u()),i(w,"--Xl-secondaryColor",y()),i(w,"--Xl-hoverBorderColor",g()),i(w,"--Xl-textColor",g()),i(w,"--Xl-filter",S(Z))}),O(t,N),j()}const A={getInputValue(t){return t.target.value},getChecked(t){return t.target.checked},getElementById(t){return document.getElementById(t)}};var Qe=H('<div role="button" tabindex="0" class="input-container svelte-8llohp"><input> <label class="svelte-8llohp"> </label></div>');function te(t,e){const r=ie(e,["children","$$slots","$$events","$$legacy"]);R(e,!1);let l=d(e,"variant",8,"Outlined"),o=d(e,"id",12,""),s=d(e,"activedborderWidth",12,""),a=d(e,"backgroundColor",12,""),u=d(e,"borderColor",12,""),v=d(e,"borderRadius",12,""),C=d(e,"disabledborderWidth",12,""),E=d(e,"fontSize",12,""),f=d(e,"height",12,""),F=d(e,"label",8,"Text Field"),m=d(e,"labelColor",12,""),y=d(e,"paddingLeft",12,""),g=d(e,"paddingRight",12,""),n=d(e,"paddingTop",12,""),c=d(e,"primaryColor",12,""),b=d(e,"textColor",12,""),k=d(e,"width",12,""),x=a()!=="",B=u()!=="",Z=b()!=="",p=m()!=="",N=c()!=="",w=U(a()),_;q.subscribe(T=>{_=T,x||a(l()==="Filled"?_.disabled.touch:_.colors.background),B||u(l()==="Filled"?_.border.active.color:_.border.disabled.color),p||m(_.colors.text.label),N||c(_.colors.primary),Z||b(_.colors.text.primary),x||P(w,l()==="Filled"?_.disabled.fill:"")}),_&&(s()||s(_.border.active.width),v()?v(l()==="Outlined"?v():`${v()} ${v()} 0 0`):v(l()==="Outlined"?_.border.borderRadius:`${_.border.borderRadius} ${_.border.borderRadius} 0 0`),f()||f(_.controls.height),C()||C(_.border.disabled.width),y()||y(l()==="Standard"?"0":_.controls.textField.padding),g()||g(_.controls.textField.padding),n()||n(l()!=="Outlined"?"1rem":"0"),k()||k(_.controls.width),E()||E(_.typography.fontSize)),oe(()=>{o()||o(`text-field-${de()}`)});function G(){A.getElementById(o()).classList.add("hovered")}function Q(){A.getElementById(o()).classList.remove("hovered")}function $(){const T=A.getElementById(o());T.classList.add("focused"),T.focus()}function ee(){A.getElementById(o()).classList.remove("focused")}V();var W=Qe(),h=L(W);ke(h);let ae;var z=I(h,2),we=L(z);return M(z),M(W),D(()=>{i(W,"width",k()),i(W,"--Xl-background-color",a()),i(W,"--Xl-fill",S(w)),ae=ye(h,ae,{autocomplete:"off",id:o(),placeholder:"",type:"text",...r},"svelte-8llohp"),i(h,"outline","none",void 0,!0),i(h,"border-radius",v(),void 0,!0),i(h,"padding-left",y(),void 0,!0),i(h,"padding-right",g(),void 0,!0),i(h,"padding-top",n(),void 0,!0),i(h,"font-size",E(),void 0,!0),i(h,"font-width","0.5rem",void 0,!0),i(h,"border-left",l()!=="Outlined"?"none":"",void 0,!0),i(h,"border-right",l()!=="Outlined"?"none":"",void 0,!0),i(h,"border-top",l()!=="Outlined"?"none":"",void 0,!0),i(h,"--Xl-border-color",u(),void 0,!0),i(h,"--Xl-color",c(),void 0,!0),i(h,"--Xl-height",f(),void 0,!0),i(h,"--Xl-activeborderWidth",s(),void 0,!0),i(h,"--Xl-disabledborderWidth",C(),void 0,!0),i(h,"--Xl-hoverBorderColor",b(),void 0,!0),i(h,"--Xl-textColor",b(),void 0,!0),X(z,"for",o()),i(z,"position","absolute"),i(z,"margin-left",y()),i(z,"background-color",l()==="Filled"?"transparent":""),i(z,"--Xl-color",c()),i(z,"--Xl-font-size",E()),i(z,"--Xl-labelColor",m()),i(z,"--Xl-liftingHeight",l()==="Outlined"?`${f()}/2`:l()==="Standard"?`${f()}/2 + 0.65rem`:`${f()}/2 + 0.7rem`),Pe(we,F())}),J("mouseover",h,G),J("mouseout",h,Q),J("focus",h,$),J("blur",h,ee),O(t,W),K(e,"handleMouseOver",G),K(e,"handleMouseOut",Q),K(e,"handleFocus",$),K(e,"handleBlur",ee),j({handleMouseOver:G,handleMouseOut:Q,handleFocus:$,handleBlur:ee})}var $e=H('<div class="data-grid border svelte-ks27lr"><div class="row border svelte-ks27lr"><div class="cell border svelte-ks27lr"><p>Id</p></div> <div class="cell border svelte-ks27lr"><p>Jargon</p></div> <div class="cell border svelte-ks27lr"><p>Translate</p></div> <div class="cell border svelte-ks27lr"><p>Example Of Use</p></div></div> <div class="row border svelte-ks27lr"><div class="cell border svelte-ks27lr"></div> <div class="cell border svelte-ks27lr"></div> <div class="cell border svelte-ks27lr"></div> <div class="cell border svelte-ks27lr"></div></div> <div class="row border svelte-ks27lr"><div class="cell border svelte-ks27lr"></div> <div class="cell border svelte-ks27lr"></div> <div class="cell border svelte-ks27lr"></div> <div class="cell border svelte-ks27lr"></div></div></div>');function et(t,e){R(e,!1);let r=d(e,"backgroundColor",12,""),l=d(e,"borderColor",12,""),o=r()!=="",s=l()!=="",a=U(""),u=U(""),v;q.subscribe(f=>{v=f,P(a,v.action.hover),P(u,v.action.selected),o||r(v.disabled.touch),s||l(v.border.alegant.color)}),V();var C=$e(),E=L(C);Y(4),M(C),D(()=>{i(C,"background-color",S(a)),i(C,"--Xl-border-color",l()),i(C,"--Xl-head-bg",S(u)),i(E,"background-color",S(u))}),O(t,C),j()}const tt=!0,ut=Object.freeze(Object.defineProperty({__proto__:null,prerender:tt},Symbol.toStringTag,{value:"Module"}));var rt=H('<div id="container" class="svelte-j6efyv"><div id="page"><h1>Svelte Elegant Tester</h1> <p>Text Field</p> <div class="components-container svelte-j6efyv"><!> <!> <!></div> <p class="heading svelte-j6efyv">Data Grid</p> <div class="components-container svelte-j6efyv"><!></div> <p class="heading svelte-j6efyv">Button</p> <div class="components-container svelte-j6efyv"><!> <!></div> <p class="heading svelte-j6efyv">Switch</p> <div><!></div> <p class="heading svelte-j6efyv">Color Theme Switch</p> <div><!></div></div></div>');function vt(t,e){R(e,!1),V();var r=rt(),l=L(r),o=I(L(l),4),s=L(o);te(s,{variant:"Outlined",label:"Outlined",onfocus:()=>{},onblur:()=>{},oninput:c=>{A.getInputValue(c)}});var a=I(s,2);te(a,{variant:"Filled",label:"Filled"});var u=I(a,2);te(u,{variant:"Standard",label:"Standard"}),M(o);var v=I(o,4),C=L(v);et(C,{}),M(v);var E=I(v,4),f=L(E);ge(f,{variant:"Contained",children:(c,b)=>{Y();var k=ne("CONTAINED");O(c,k)},$$slots:{default:!0}});var F=I(f,2);ge(F,{variant:"Outlined",children:(c,b)=>{Y();var k=ne("OUTLINED");O(c,k)},$$slots:{default:!0}}),M(E);var m=I(E,4),y=L(m);pe(y,{onchange:c=>{A.getChecked(c)}}),M(m);var g=I(m,4),n=L(g);Ke(n,{}),M(g),M(l),M(r),O(t,r),j()}export{vt as component,ut as universal};
