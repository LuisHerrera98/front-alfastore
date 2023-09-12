import{r as p}from"./index.ed373d49.js";var a={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=p,u=Symbol.for("react.element"),_=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,x=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(r,e,f){var t,o={},s=null,l=null;f!==void 0&&(s=""+f),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(l=e.ref);for(t in e)m.call(e,t)&&!d.hasOwnProperty(t)&&(o[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)o[t]===void 0&&(o[t]=e[t]);return{$$typeof:u,type:r,key:s,ref:l,props:o,_owner:x.current}}n.Fragment=_;n.jsx=i;n.jsxs=i;a.exports=n;var y=a.exports;const E=()=>(p.useEffect(()=>{fetch("https://api.alfastoreargentina.com").then(r=>r.json()).then(r=>{console.log(r)}).catch(r=>{console.error("Error al realizar la petición:",r)})},[]),y.jsx("div",{children:"Counter"}));export{E as default};
