import{_ as s,c as n,o as a,a as t}from"./app.7806089e.js";const q='{"title":"\u6253\u5305","description":"","frontmatter":{},"headers":[{"level":2,"title":"package.json\u5165\u53E3","slug":"package-json\u5165\u53E3"},{"level":2,"title":"\u66B4\u9732\u591A\u4E2A\u547D\u4EE4","slug":"\u66B4\u9732\u591A\u4E2A\u547D\u4EE4"}],"relativePath":"node/build/pack.md"}',p={},o=t(`<h1 id="\u6253\u5305" tabindex="-1">\u6253\u5305 <a class="header-anchor" href="#\u6253\u5305" aria-hidden="true">#</a></h1><h2 id="package-json\u5165\u53E3" tabindex="-1">package.json\u5165\u53E3 <a class="header-anchor" href="#package-json\u5165\u53E3" aria-hidden="true">#</a></h2><p>\u73B0\u5728\u7684npm\u5305\uFF0C\u9700\u8981\u66B4\u9732main/module/exports/typing\u7B49\u591A\u4E2A\u5B57\u6BB5\uFF0C \u53EF\u4EE5\u53C2\u8003axios-retry\u7684package.json</p><div class="language-js"><pre><code>  <span class="token string-property property">&quot;typings&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./index.d.ts&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lib/esm/index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;exports&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;.&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;import&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./lib/esm/index.js&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./index.js&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;./package.json&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./package.json&quot;</span>
  <span class="token punctuation">}</span>
</code></pre></div><h2 id="\u66B4\u9732\u591A\u4E2A\u547D\u4EE4" tabindex="-1">\u66B4\u9732\u591A\u4E2A\u547D\u4EE4 <a class="header-anchor" href="#\u66B4\u9732\u591A\u4E2A\u547D\u4EE4" aria-hidden="true">#</a></h2><p>\u5728package.json\u4E2D\u6307\u660E\u591A\u4E2A</p><div class="language-js"><pre><code><span class="token string-property property">&quot;bin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;egg-bin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bin/egg-bin.js&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;mocha&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bin/mocha.js&quot;</span><span class="token punctuation">,</span> <span class="token string-property property">&quot;ets&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bin/ets.js&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>\u5176\u4E2Dmocha\u548Cest\u662F\u5BF9\u5176\u4ED6\u5E93\u7684\u5305\u88C5\u800C\u5DF2:</p><p>est.js</p><div class="language-js"><pre><code><span class="token hashbang comment">#!/usr/bin/env node</span>
<span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \u6CE8\u518Cets\u547D\u4EE4\uFF0C\u4F7F\u7528egg-ts-helper\u7684bin </span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;egg-ts-helper/dist/bin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><p>mocha.js</p><div class="language-js"><pre><code><span class="token hashbang comment">#!/usr/bin/env node</span>
<span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \u6CE8\u518Cmocha\u547D\u4EE4\uFF0C\u4F7F\u7528mocha </span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mocha/bin/mocha&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,12),e=[o];function r(c,i,u,l,k,g){return a(),n("div",null,e)}var h=s(p,[["render",r]]);export{q as __pageData,h as default};