function t(t,e=[],n){if(!t)return;"function"==typeof e&&(n=e,e=[]);let r=0,o=[];const i=t=>{for(let f=0,c=t.length;f<c;f++){const c=Array.isArray(t[f]),s=Array.isArray(e)?e[r]:e;if(c||t[f]&&t[f][s])r++,o.push(f),i(c?t[f]:t[f][s]);else if(r>=e.length){if(n(t[f],r,[...o,f]))continue;break}}r=0,o=[]};i(t)}function e(t,e){let n=!0;return t&&e?("object"!=typeof t||"object"!=typeof e||JSON.stringify(t)!==JSON.stringify(e))&&(n=!1):n=!1,n}function n(t,r){return t instanceof Array&&r instanceof Array?function(t,e){if(t.length!==e.length)return!1;let r=!0;for(let o=0;o<t.length;o++)n(t[o],e[o])||(r=!1);return r}(t,r):Object.getPrototypeOf(t)===Object.prototype&&Object.getPrototypeOf(r)===Object.prototype?e(t,r):t===r}const r=function(t){const e=+t;return Math.sign?Math.sign(e):0===e||isNaN(e)?e:t>0?1:-1};function o(t){return t instanceof Date&&!isNaN(t.getTime())}export{r as M,e as c,n as d,o as i,t};