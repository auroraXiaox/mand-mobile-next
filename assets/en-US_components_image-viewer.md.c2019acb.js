import{_ as a}from"./demo0.40b7464e.js";import{r as s,a as n,c as t,d as e,e as p,f as o,b as c}from"./app.dd25191e.js";import"./index.4e291119.js";import"./index.2b57aca1.js";import"./index.22509486.js";import"./index.5a8ec7a6.js";import"./index.cd48f3a1.js";const i=c('<h1 id="imageviewer"><a class="header-anchor" href="#imageviewer" aria-hidden="true">#</a> ImageViewer</h1><p>For browsing multiple pictures and swiping to switch pictures</p><h3 id="import"><a class="header-anchor" href="#import" aria-hidden="true">#</a> Import</h3><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ImageViewer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mand-mobile&#39;</span>\n\nVue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>ImageViewer<span class="token punctuation">.</span>name<span class="token punctuation">,</span> ImageViewer<span class="token punctuation">)</span>\n</code></pre></div><h3 id="code-examples"><a class="header-anchor" href="#code-examples" aria-hidden="true">#</a> Code Examples</h3>',5),C=c('<h3 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h3><h4 id="imageviewer-props"><a class="header-anchor" href="#imageviewer-props" aria-hidden="true">#</a> ImageViewer Props</h4><table><thead><tr><th>Props</th><th>Description</th><th>Type</th><th>Default</th><th>Note</th></tr></thead><tbody><tr><td>v-model</td><td>viewer display</td><td>Boolean</td><td><code>false</code></td><td></td></tr><tr><td>list</td><td>show picture list</td><td>Array&lt;String&gt;</td><td><code>[]</code></td><td>-</td></tr><tr><td>initial-index</td><td>initialize the index of displayed image</td><td>Number</td><td><code>0</code></td><td>-</td></tr><tr><td>has-dots</td><td>display the index of picture</td><td>Boolean</td><td><code>true</code></td><td>-</td></tr></tbody></table>',3),E='{"title":"ImageViewer","description":"","frontmatter":{"component":"image-viewer","title":"ImageViewer","preview":"https://didi.github.io/mand-mobile/examples/#/image-viewer"},"headers":[{"level":3,"title":"Import","slug":"import"},{"level":3,"title":"Code Examples","slug":"code-examples"},{"level":3,"title":"API","slug":"api"}],"relativePath":"en-US/components/image-viewer.md","lastUpdated":1625825807587}',l={};const r=Object.assign(l,{expose:[],setup:function(c){const E={"../../../src/packages/image-viewer/demo/demo0.vue":a};return(a,c)=>{const l=s("demo-wrapper");return n(),t("div",null,[i,e(l,{htmlStrs:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20name%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&ImageViewerDemo&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20title%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&%E5%9F%BA%E6%9C%AC&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&vue&%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20MdImageViewer%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&mand-mobile%2Fimage-viewer&%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20dataList%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20dataUrl%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20string%22%3E&%2F%2Fimg-hxy021.didistatic.com%2Fstatic%2Fstrategymis%2FinsurancePlatform_spu%2Fuploads%2F27fb7f097ca218d743f816836bc7ea4a&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20dataUrl%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20string%22%3E&%2F%2Fmanhattan.didistatic.com%2Fstatic%2Fmanhattan%2FinsurancePlatform_spu%2Fuploads%2Fc2912793a222eb24b606a582fd849ab7&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20visible%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20boolean%22%3Efalse%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Emd-image-viewer%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Cspan%20class%3D%22token%20namespace%22%3Ev-model%3A%3C%2Fspan%3Elist%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EdataList%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Cspan%20class%3D%22token%20namespace%22%3Ev-model%3A%3C%2Fspan%3Evisible%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Evisible%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Adefault-index%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E1%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Emd-image-viewer%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",codeStrs:"%3Cscript%20lang%3D%22ts%22%3E%0Aexport%20default%20%7B%0A%20%20name%3A%20&ImageViewerDemo&%2C%0A%20%20title%3A%20&%E5%9F%BA%E6%9C%AC&%2C%0A%7D%0A%3C%2Fscript%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20&vue&%0Aimport%20MdImageViewer%20from%20&mand-mobile%2Fimage-viewer&%0A%0Aconst%20dataList%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20dataUrl%3A%0A%20%20%20%20%20%20&%2F%2Fimg-hxy021.didistatic.com%2Fstatic%2Fstrategymis%2FinsurancePlatform_spu%2Fuploads%2F27fb7f097ca218d743f816836bc7ea4a&%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20dataUrl%3A%0A%20%20%20%20%20%20&%2F%2Fmanhattan.didistatic.com%2Fstatic%2Fmanhattan%2FinsurancePlatform_spu%2Fuploads%2Fc2912793a222eb24b606a582fd849ab7&%2C%0A%20%20%7D%2C%0A%5D)%0A%0Aconst%20visible%20%3D%20ref(false)%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cmd-image-viewer%0A%20%20%20%20%20%20v-model%3Alist%3D%22dataList%22%0A%20%20%20%20%20%20v-model%3Avisible%3D%22visible%22%0A%20%20%20%20%20%20%3Adefault-index%3D%221%22%0A%20%20%20%20%3E%3C%2Fmd-image-viewer%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",src:"src/packages/image-viewer/demo",demos:p(E)},null,8,["demos"]),o(" DEMO "),C])}}});export default r;export{E as __pageData};
