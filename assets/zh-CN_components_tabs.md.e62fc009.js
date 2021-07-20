import{_ as a}from"./demo0.a2248737.js";import{r as n,a as s,c as t,d as p,e as E,b as e}from"./app.95fb5bcf.js";import"./index.b7a35f02.js";import"./index.4d70550e.js";import"./index.fafb5533.js";import"./index.9a8612bc.js";import"./index.4fb65f58.js";const o=e('<h1 id="tabs-标签页"><a class="header-anchor" href="#tabs-标签页" aria-hidden="true">#</a> Tabs 标签页</h1><p>用于创建包含内容区域的标签页</p><h2 id="引入"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h2><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Tabs<span class="token punctuation">,</span> TabPane <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mand-mobile-next&#39;</span>\n\nVue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>Tabs<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Tabs<span class="token punctuation">)</span>\nVue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>TabPane<span class="token punctuation">.</span>name<span class="token punctuation">,</span> TabPane<span class="token punctuation">)</span>\n</code></pre></div><h2 id="代码演示"><a class="header-anchor" href="#代码演示" aria-hidden="true">#</a> 代码演示</h2>',5),C=e('<h2 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="tabs-props"><a class="header-anchor" href="#tabs-props" aria-hidden="true">#</a> Tabs Props</h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td>value</td><td>双向绑定的标签对象<code>name</code></td><td>String</td><td></td><td></td></tr><tr><td>immediate</td><td>初始化后立即就触发一次<code>change</code>事件</td><td>Boolean</td><td><code>false</code></td><td></td></tr></tbody></table><h3 id="tabpane-props"><a class="header-anchor" href="#tabpane-props" aria-hidden="true">#</a> TabPane Props</h3><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td>name</td><td>唯一键名</td><td>String</td><td></td><td>必须</td></tr><tr><td>label</td><td>菜单标题</td><td>String</td><td></td><td>必须</td></tr><tr><td>disabled</td><td>是否禁用</td><td>Boolean</td><td><code>false</code></td><td></td></tr></tbody></table><h3 id="tabs-methods"><a class="header-anchor" href="#tabs-methods" aria-hidden="true">#</a> Tabs Methods</h3><h4 id="reflowtabbar"><a class="header-anchor" href="#reflowtabbar" aria-hidden="true">#</a> reflowTabBar()</h4><p>重新计算<code>TabBar</code>样式布局</p><h3 id="tabs-events"><a class="header-anchor" href="#tabs-events" aria-hidden="true">#</a> Tabs Events</h3><h4 id="change-tab"><a class="header-anchor" href="#change-tab" aria-hidden="true">#</a> @change(tab)</h4><p>当用户选择标签触发</p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>tab</td><td>选中的标签菜单对象</td><td>Object:{name: String, label: String, disabled: Boolean}</td></tr></tbody></table>',12),c='{"title":"Tabs 标签页","description":"","frontmatter":{"component":"tabs","title":"Tabs 标签页","preview":"https://didi.github.io/mand-mobile/examples/#/tabs"},"headers":[{"level":2,"title":"引入","slug":"引入"},{"level":2,"title":"代码演示","slug":"代码演示"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Tabs Props","slug":"tabs-props"},{"level":3,"title":"TabPane Props","slug":"tabpane-props"},{"level":3,"title":"Tabs Methods","slug":"tabs-methods"},{"level":3,"title":"Tabs Events","slug":"tabs-events"}],"relativePath":"zh-CN/components/tabs.md","lastUpdated":1626766589593}',l={};const u=Object.assign(l,{expose:[],setup:function(e){const c={"../../../src/packages/tabs/demo/demo0.vue":a};return(a,e)=>{const l=n("demo-wrapper");return s(),t("div",null,[o,p(l,{htmlStrs:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20name%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&TabsDemo&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20title%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&%E5%9F%BA%E6%9C%AC&%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&vue&%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20MdTabs%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&mand-mobile%2Ftabs&%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20MdButton%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&mand-mobile%2Fbutton&%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20MdIcon%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&mand-mobile%2Ficon&%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20MdTabPane%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E&..%2Fpane.vue&%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3Echange%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Eitem%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20any%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Eitem%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20disabled%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20tabs%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3Eany%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20keyword%22%3Enull%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EgoToThree%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20disabled%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Efalse%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20function%22%3EsetTimeout%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20tabs%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%24refs%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Eswiper%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3EgetSwiperInstance%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20operator%22%3E%3F.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3EgoToPage%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E2%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E0%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%0A%20%20%20%20%20%20md-example-child%0A%20%20%20%20%20%20md-example-child-tabs%0A%20%20%20%20%20%20md-example-child-tabs-0%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Emd-tabs%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etabs%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Adefault-index%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E0%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aimmediate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etrue%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40change%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Echange%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Emd-tab-pane%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Econtent%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ename%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ep1%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E7%AC%AC%E4%B8%80%E7%AB%A0%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%E5%A5%B9%E5%AF%B9%E4%BB%96%E5%BE%88%E6%BB%A1%E6%84%8F%E3%80%82%E8%B5%B0%E5%90%A7%E3%80%82%E5%A5%BD%E3%80%82%E4%BB%96%E8%B5%B7%E8%BA%AB%E4%B9%B0%E5%8D%95%EF%BC%8C%E8%85%BF%E5%8D%B4%E4%B8%80%E6%8B%90%E4%B8%80%E6%8B%90%E7%9A%84%E3%80%82%E9%9A%BE%E6%80%AA%E4%BB%96%E6%89%8D%E5%8D%8E%E6%A8%AA%E6%BA%A2%EF%BC%8C%E4%BA%8B%E4%B8%9A%E6%9C%89%E6%88%90%EF%BC%8C%E5%8D%B4%E8%BF%98%E6%98%AF%E5%8D%95%E8%BA%AB%E3%80%82%E8%B6%81%E7%9D%80%E4%BB%96%E4%B9%B0%E5%8D%95%EF%BC%8C%E5%A5%B9%E8%B5%B6%E7%B4%A7%E6%82%84%E6%82%84%E8%B5%B0%E4%BA%86%E3%80%82%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Emd-tab-pane%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Emd-tab-pane%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Econtent%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ename%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ep2%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E7%AC%AC%E4%BA%8C%E7%AB%A0%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%E5%8F%88%E6%98%AF%E4%B8%80%E5%B9%B4%EF%BC%8C%E5%A5%B9%E5%8F%88%E9%81%87%E5%88%B0%E4%BA%86%E4%BB%96%EF%BC%8C%E4%BB%96%E6%AD%A3%E7%89%B5%E7%9D%80%E5%AD%A9%E5%AD%90%E7%9A%84%E6%89%8B%EF%BC%8C%E8%B5%B0%E7%9A%84%E9%A3%9E%E5%BF%AB%E3%80%82%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Emd-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Elink%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EgoToThree%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%E6%94%AF%E4%BB%980%E5%85%83%EF%BC%8C%E8%A7%A3%E9%94%81%E7%AC%AC%E4%B8%89%E7%AB%A0%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Emd-icon%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ename%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Earrow-right%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esize%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Exs%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Emd-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Emd-tab-pane%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Emd-tab-pane%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Econtent%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Ename%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ep3%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E7%AC%AC%E4%B8%89%E7%AB%A0%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Adisabled%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edisabled%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%E4%BD%A0%E7%9A%84%E8%85%BF%EF%BC%9F%E5%A5%B9%E6%9C%89%E4%BA%9B%E8%AF%A7%E5%BC%82%E3%80%82%E8%85%BF%EF%BC%9F%E6%88%91%E7%9A%84%E8%85%BF%E6%80%8E%E4%B9%88%E4%BA%86%EF%BC%9F%E4%BB%96%E6%9B%B4%E8%AF%A7%E5%BC%82%E3%80%82%E5%90%8E%E6%9D%A5%EF%BC%8C%E5%A5%B9%E6%89%8D%E7%9F%A5%E9%81%93%E4%BB%96%E7%9A%84%E8%85%BF%EF%BC%8C%E9%82%A3%E5%A4%A9%E5%8F%AA%E6%98%AF%E5%9D%90%E9%BA%BB%E4%BA%86%E8%80%8C%E5%B7%B2%E3%80%82%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Emd-tab-pane%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Emd-tabs%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Estylus%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A.md-example-child-tabs-0%0A%20%20background-color%20%23fff%0A%20%20.md-tab-bar%0A%20%20%20%20background-color%20%23fff%0A%20%20.content%0A%20%20%20%20margin%2012px%200%0A%20%20%20%20font-size%2028px%0A%20%20%20%20background%20%23FFF%0A%20%20%20%20padding%2020px%0A%20%20%20%20line-height%201.5%0A%20%20%20%20box-sizing%20border-box%0A%20%20.md-tabs-content%0A%20%20%20%20min-height%20200px%0A%20%20%20%20background%20%23FFF%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",codeStrs:"%3Cscript%20lang%3D%22ts%22%3E%0Aexport%20default%20%7B%0A%20%20name%3A%20&TabsDemo&%2C%0A%20%20title%3A%20&%E5%9F%BA%E6%9C%AC&%2C%0A%7D%0A%3C%2Fscript%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20&vue&%0Aimport%20MdTabs%20from%20&mand-mobile%2Ftabs&%0Aimport%20MdButton%20from%20&mand-mobile%2Fbutton&%0Aimport%20MdIcon%20from%20&mand-mobile%2Ficon&%0Aimport%20MdTabPane%20from%20&..%2Fpane.vue&%0A%0Aconst%20change%20%3D%20(item%3A%20any)%20%3D%3E%20%7B%0A%20%20console.log(item)%0A%7D%0A%0Aconst%20disabled%20%3D%20ref(true)%0Aconst%20tabs%20%3D%20ref%3Cany%3E(null)%0A%0Aconst%20goToThree%20%3D%20()%20%3D%3E%20%7B%0A%20%20disabled.value%20%3D%20false%0A%20%20setTimeout(()%20%3D%3E%20%7B%0A%20%20%20%20tabs.value.%24refs.swiper%0A%20%20%20%20%20%20.getSwiperInstance()%0A%20%20%20%20%20%20%3F.goToPage(2%2C%200)%0A%20%20%7D)%0A%7D%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%3Cdiv%0A%20%20%20%20class%3D%22%0A%20%20%20%20%20%20md-example-child%0A%20%20%20%20%20%20md-example-child-tabs%0A%20%20%20%20%20%20md-example-child-tabs-0%0A%20%20%20%20%22%0A%20%20%3E%0A%20%20%20%20%3Cmd-tabs%0A%20%20%20%20%20%20ref%3D%22tabs%22%0A%20%20%20%20%20%20%3Adefault-index%3D%220%22%0A%20%20%20%20%20%20%3Aimmediate%3D%22true%22%0A%20%20%20%20%20%20%40change%3D%22change%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cmd-tab-pane%20class%3D%22content%22%20name%3D%22p1%22%20label%3D%22%E7%AC%AC%E4%B8%80%E7%AB%A0%22%3E%0A%20%20%20%20%20%20%20%20%E5%A5%B9%E5%AF%B9%E4%BB%96%E5%BE%88%E6%BB%A1%E6%84%8F%E3%80%82%E8%B5%B0%E5%90%A7%E3%80%82%E5%A5%BD%E3%80%82%E4%BB%96%E8%B5%B7%E8%BA%AB%E4%B9%B0%E5%8D%95%EF%BC%8C%E8%85%BF%E5%8D%B4%E4%B8%80%E6%8B%90%E4%B8%80%E6%8B%90%E7%9A%84%E3%80%82%E9%9A%BE%E6%80%AA%E4%BB%96%E6%89%8D%E5%8D%8E%E6%A8%AA%E6%BA%A2%EF%BC%8C%E4%BA%8B%E4%B8%9A%E6%9C%89%E6%88%90%EF%BC%8C%E5%8D%B4%E8%BF%98%E6%98%AF%E5%8D%95%E8%BA%AB%E3%80%82%E8%B6%81%E7%9D%80%E4%BB%96%E4%B9%B0%E5%8D%95%EF%BC%8C%E5%A5%B9%E8%B5%B6%E7%B4%A7%E6%82%84%E6%82%84%E8%B5%B0%E4%BA%86%E3%80%82%0A%20%20%20%20%20%20%3C%2Fmd-tab-pane%3E%0A%20%20%20%20%20%20%3Cmd-tab-pane%20class%3D%22content%22%20name%3D%22p2%22%20label%3D%22%E7%AC%AC%E4%BA%8C%E7%AB%A0%22%3E%0A%20%20%20%20%20%20%20%20%E5%8F%88%E6%98%AF%E4%B8%80%E5%B9%B4%EF%BC%8C%E5%A5%B9%E5%8F%88%E9%81%87%E5%88%B0%E4%BA%86%E4%BB%96%EF%BC%8C%E4%BB%96%E6%AD%A3%E7%89%B5%E7%9D%80%E5%AD%A9%E5%AD%90%E7%9A%84%E6%89%8B%EF%BC%8C%E8%B5%B0%E7%9A%84%E9%A3%9E%E5%BF%AB%E3%80%82%0A%20%20%20%20%20%20%20%20%3Cmd-button%20type%3D%22link%22%20%40click%3D%22goToThree%22%3E%0A%20%20%20%20%20%20%20%20%20%20%E6%94%AF%E4%BB%980%E5%85%83%EF%BC%8C%E8%A7%A3%E9%94%81%E7%AC%AC%E4%B8%89%E7%AB%A0%0A%20%20%20%20%20%20%20%20%20%20%3Cmd-icon%20name%3D%22arrow-right%22%20size%3D%22xs%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2Fmd-button%3E%0A%20%20%20%20%20%20%3C%2Fmd-tab-pane%3E%0A%20%20%20%20%20%20%3Cmd-tab-pane%0A%20%20%20%20%20%20%20%20class%3D%22content%22%0A%20%20%20%20%20%20%20%20name%3D%22p3%22%0A%20%20%20%20%20%20%20%20label%3D%22%E7%AC%AC%E4%B8%89%E7%AB%A0%22%0A%20%20%20%20%20%20%20%20%3Adisabled%3D%22disabled%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%E4%BD%A0%E7%9A%84%E8%85%BF%EF%BC%9F%E5%A5%B9%E6%9C%89%E4%BA%9B%E8%AF%A7%E5%BC%82%E3%80%82%E8%85%BF%EF%BC%9F%E6%88%91%E7%9A%84%E8%85%BF%E6%80%8E%E4%B9%88%E4%BA%86%EF%BC%9F%E4%BB%96%E6%9B%B4%E8%AF%A7%E5%BC%82%E3%80%82%E5%90%8E%E6%9D%A5%EF%BC%8C%E5%A5%B9%E6%89%8D%E7%9F%A5%E9%81%93%E4%BB%96%E7%9A%84%E8%85%BF%EF%BC%8C%E9%82%A3%E5%A4%A9%E5%8F%AA%E6%98%AF%E5%9D%90%E9%BA%BB%E4%BA%86%E8%80%8C%E5%B7%B2%E3%80%82%0A%20%20%20%20%20%20%3C%2Fmd-tab-pane%3E%0A%20%20%20%20%3C%2Fmd-tabs%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20lang%3D%22stylus%22%3E%0A.md-example-child-tabs-0%0A%20%20background-color%20%23fff%0A%20%20.md-tab-bar%0A%20%20%20%20background-color%20%23fff%0A%20%20.content%0A%20%20%20%20margin%2012px%200%0A%20%20%20%20font-size%2028px%0A%20%20%20%20background%20%23FFF%0A%20%20%20%20padding%2020px%0A%20%20%20%20line-height%201.5%0A%20%20%20%20box-sizing%20border-box%0A%20%20.md-tabs-content%0A%20%20%20%20min-height%20200px%0A%20%20%20%20background%20%23FFF%0A%3C%2Fstyle%3E%0A",src:"src/packages/tabs/demo",demos:E(c)},null,8,["demos"]),C])}}});export default u;export{c as __pageData};
