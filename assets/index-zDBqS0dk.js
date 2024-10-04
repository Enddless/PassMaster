import{j as s,r as i,R as x}from"./react-SnfFGwvi.js";import{c as w}from"./react-dom-BiIwaQT_.js";import"./scheduler-CzFDRTuY.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u=({label:l,type:o,value:n,checked:a,onChange:e,specialchar:t})=>{const r=o==="checkbox";return s.jsxs("label",{className:"password-generator__label",children:[l,r?s.jsxs(s.Fragment,{children:[s.jsx("input",{className:"password-generator__input checkbox checkbox--agreement",type:o,value:n,checked:a,onChange:e,pattern:t?'[!@#$%^&*_|<>?;^.,~{}[]-"]*':void 0,onKeyPress:c=>{t&&!/[!@#$%^&*_|<>?;^.,~{}[\]"-]/.test(c.key)&&c.preventDefault()}}),s.jsx("span",{className:"checkbox--fake",children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24px",height:"24px",children:s.jsx("path",{d:"M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z"})})})]}):s.jsx("input",{className:"password-generator__input",type:o,value:n,checked:a,onChange:e,pattern:t?'[!@#$%^&*_|<>?;^.,~{}[]-"]*':void 0,onKeyPress:c=>{t&&!/[!@#$%^&*_|<>?;^.,~{}[\]"-]/.test(c.key)&&c.preventDefault()}})]})},_=({length:l,includeSpecialChars:o,includeNumbers:n})=>{let a="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",e="";const t='!@#$%^&*_|<>?;^.,~{}[]-"';if(n&&(a+="0123456789"),o){const r=l>10?2:1;for(let c=0;c<r;c++)e+=t[Math.floor(Math.random()*t.length)]}for(;e.length<l;){const r=Math.floor(Math.random()*a.length);e+=a[r]}return e=e.split("").sort(()=>Math.random()-.5).join(""),e.slice(0,l)};function b(){const[l,o]=i.useState(8),[n,a]=i.useState(!1),[e,t]=i.useState(!1),[r,c]=i.useState(""),[h,d]=i.useState(""),m=p=>{p.preventDefault();const g=_({length:l,includeSpecialChars:n,includeNumbers:e});c(g),d("")},f=()=>{r&&navigator.clipboard.writeText(r).then(()=>{d("Пароль скопирован")}).catch(()=>{d("Ошибка при копировании")})};return s.jsxs("section",{className:"password-generator container",children:[s.jsxs("div",{className:"password-generator__header",children:[s.jsx("h1",{className:"password-generator__title",children:"Генератор паролей"}),s.jsx("p",{className:"password-generator__subtitle",children:"Надежный пароль без дополнительных усилий"})]}),s.jsxs("div",{className:"password-generator__settings",children:[s.jsxs("form",{className:"password-generator__form",onSubmit:m,children:[s.jsx(u,{label:"Длина пароля:",type:"number",value:l,onChange:p=>o(Number(p.target.value))}),s.jsx(u,{label:"Добавить специальные символы:",type:"checkbox",checked:n,onChange:()=>a(!n)}),s.jsx(u,{label:"Добавить цифры:",type:"checkbox",checked:e,onChange:()=>t(!e)}),s.jsx("button",{type:"submit",className:"password-generator__button",children:"Сгенерировать"})]}),s.jsxs("div",{className:"password-generator__result",children:[s.jsx("h2",{className:"password-generator__result-title",children:"Ваш пароль:"}),s.jsx("p",{className:"password-generator__result-password",onClick:f,style:{cursor:"pointer"},children:r}),h&&s.jsx("p",{className:"password-generator__copy-message",children:h})]})]})]})}w.createRoot(document.getElementById("root")).render(s.jsx(x.StrictMode,{children:s.jsx(b,{})}));
