import{a as n,c as s,b as a}from"./app.dd25191e.js";const t='{"title":"Quick Start","description":"","frontmatter":{},"headers":[{"level":2,"title":"Install","slug":"install"},{"level":2,"title":"Use","slug":"use"},{"level":3,"title":"Fully import","slug":"fully-import"},{"level":3,"title":"On demand","slug":"on-demand"}],"relativePath":"en-US/components/quick-start.md","lastUpdated":1625825807587}',p={},o=a('<h1 id="quick-start"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick Start</h1><p><a href="https://www.npmjs.org/package/mand-mobile-next" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/mand-mobile-next.svg" alt="npm"></a> <a href="https://open.vscode.dev/mand-mobile/mand-mobile-next" target="_blank" rel="noopener noreferrer"><img src="https://open.vscode.dev/badges/open-in-vscode.svg" alt="Open in Visual Studio Code"></a><a href="https://github.com/mand-mobile/mand-mobile-next/actions" target="_blank" rel="noopener noreferrer"><img src="https://github.com/mand-mobile/mand-mobile-next/actions/workflows/build.yml/badge.svg?branch=vue3" alt="build"></a></p><h2 id="install"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><p>快速开始最好的方式就是使用 <code>vite</code> 初始化项目工程，添加 <code>mand-mobile-next</code> 即可。</p><p><strong>Use npm：</strong></p><div class="language-bash"><pre><code><span class="token function">npm</span> init @vite/app\n</code></pre></div><p>选择 <code>vue-ts</code>，初始化工程</p><p><strong>Install <code>mand-mobile-next</code></strong></p><div class="language-bash"><pre><code><span class="token function">npm</span> i mand-mobile-next@alpha\n<span class="token comment"># or</span>\n<span class="token function">yarn</span> <span class="token function">add</span> mand-mobile-next@alpha\n</code></pre></div><h2 id="use"><a class="header-anchor" href="#use" aria-hidden="true">#</a> Use</h2><h3 id="fully-import"><a class="header-anchor" href="#fully-import" aria-hidden="true">#</a> Fully import</h3><p>在 <code>main.ts</code> 写入一下内容</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> MandMobile <span class="token keyword">from</span> <span class="token string">&#39;mand-mobile-next&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;mand-mobile-next/dist/es/mand-mobile-next.min.css&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>MandMobile<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><h3 id="on-demand"><a class="header-anchor" href="#on-demand" aria-hidden="true">#</a> On demand</h3><p><strong>在 <code>vite</code> 中按需引入</strong></p><p>首先，安装 <code>vite-plugin-style-import</code>:</p><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> vite-plugin-style-import -D\n<span class="token comment">#or</span>\n<span class="token function">yarn</span> <span class="token function">add</span> vite-plugin-style-import -D\n</code></pre></div><p>然后修改 <code>vite.config.ts</code>:</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>\n<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>\n<span class="token keyword">import</span> styleImport <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-style-import&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">styleImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      libs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n        libraryName<span class="token operator">:</span> <span class="token string">&#39;mand-mobile-next&#39;</span><span class="token punctuation">,</span>\n        esModule<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        ensureStyleFile<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token function-variable function">resolveStyle</span><span class="token operator">:</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">mand-mobile-next/dist/es/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/index.css</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token function-variable function">resolveComponent</span><span class="token operator">:</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">mand-mobile-next/dist/es/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>接下来，如果你只希望引入部分组件，比如 Button，需要在 main.js 中写入以下内容：</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mand-mobile-next&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>Button<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Button<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* or\n * app.use(ElButton)\n * app.use(ElSelect)\n */</span>\n\napp<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><p>或者直接在组件中使用：</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mand-mobile-next&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  components<span class="token operator">:</span> <span class="token punctuation">{</span>\n    MdButton<span class="token operator">:</span> Button<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',23);p.render=function(a,t,p,e,c,l){return n(),s("div",null,[o])};export default p;export{t as __pageData};
