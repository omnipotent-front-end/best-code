import{_ as n,c as a,o as s,a as t}from"./app.2a3660c5.js";const m='{"title":"animate","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u63A7\u5236\u52A8\u753B\u6682\u505C\u548C\u64AD\u653E\u903B\u8F91","slug":"\u63A7\u5236\u52A8\u753B\u6682\u505C\u548C\u64AD\u653E\u903B\u8F91"},{"level":2,"title":"\u4E0A\u4E0B\u4E0D\u505C\u6D6E\u52A8","slug":"\u4E0A\u4E0B\u4E0D\u505C\u6D6E\u52A8"},{"level":2,"title":"\u65CB\u8F6C","slug":"\u65CB\u8F6C"},{"level":2,"title":"\u9632\u6296","slug":"\u9632\u6296"}],"relativePath":"css/animate.md"}',p={},e=t(`<h1 id="animate" tabindex="-1">animate <a class="header-anchor" href="#animate" aria-hidden="true">#</a></h1><h2 id="\u63A7\u5236\u52A8\u753B\u6682\u505C\u548C\u64AD\u653E\u903B\u8F91" tabindex="-1">\u63A7\u5236\u52A8\u753B\u6682\u505C\u548C\u64AD\u653E\u903B\u8F91 <a class="header-anchor" href="#\u63A7\u5236\u52A8\u753B\u6682\u505C\u548C\u64AD\u653E\u903B\u8F91" aria-hidden="true">#</a></h2><p>\u901A\u8FC7style.animationPlayState\u6765\u63A7\u5236\uFF1A</p><div class="language-js"><pre><code>    <span class="token keyword">let</span> elem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.animation&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> state <span class="token operator">=</span> elem<span class="token punctuation">.</span>style<span class="token punctuation">[</span><span class="token string">&#39;animationPlayState&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	  
	<span class="token keyword">if</span><span class="token punctuation">(</span>state <span class="token operator">===</span> <span class="token string">&#39;paused&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    elem<span class="token punctuation">.</span>style<span class="token punctuation">[</span><span class="token string">&#39;animationPlayState&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;running&#39;</span><span class="token punctuation">;</span>
	    btn<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;stop&#39;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
	    elem<span class="token punctuation">.</span>style<span class="token punctuation">[</span><span class="token string">&#39;animationPlayState&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;paused&#39;</span><span class="token punctuation">;</span>
	    btn<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;play&#39;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u4E0A\u4E0B\u4E0D\u505C\u6D6E\u52A8" tabindex="-1">\u4E0A\u4E0B\u4E0D\u505C\u6D6E\u52A8 <a class="header-anchor" href="#\u4E0A\u4E0B\u4E0D\u505C\u6D6E\u52A8" aria-hidden="true">#</a></h2><div class="language-css"><pre><code><span class="token selector">.ghost</span> <span class="token punctuation">{</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> float 3s ease-out infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> float</span> <span class="token punctuation">{</span>
  <span class="token selector">50%</span> <span class="token punctuation">{</span>
     <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 20px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53C2\u8003\uFF1A<a href="https://cdpn.io/cpe/boomboom/index.html?key=index.html-c89a83db-5399-8f3c-c7d0-d68c432e4e6c" target="_blank" rel="noopener noreferrer">CodePen Demo</a></p><h2 id="\u65CB\u8F6C" tabindex="-1">\u65CB\u8F6C <a class="header-anchor" href="#\u65CB\u8F6C" aria-hidden="true">#</a></h2><div class="language-css"><pre><code><span class="token property">animation</span><span class="token punctuation">:</span>  rotate 3s  linear  infinite<span class="token punctuation">;</span>
</code></pre></div><h2 id="\u9632\u6296" tabindex="-1">\u9632\u6296 <a class="header-anchor" href="#\u9632\u6296" aria-hidden="true">#</a></h2><p>\u6CA1\u9519\uFF0Ccss\u52A8\u753B\u4E5F\u53EF\u4EE5\u7ED9\u6309\u94AE\u589E\u52A0\u9632\u6296\uFF0C\u53C2\u8003\u4F8B\u5B50\uFF1A<a href="https://mpfeow.csb.app/" target="_blank" rel="noopener noreferrer">https://mpfeow.csb.app/</a></p><p>\u5176\u6838\u5FC3\u903B\u8F91\u5176\u5B9E\u662F\u901A\u8FC7\u6837\u5F0F\u6765\uFF1A</p><div class="language-css"><pre><code><span class="token selector">.submitBtn</span> <span class="token punctuation">{</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> throttle 0.3s step-end forwards<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.submitBtn:active</span> <span class="token punctuation">{</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> throttle</span> <span class="token punctuation">{</span>
  <span class="token selector">from</span> <span class="token punctuation">{</span>
    <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">to</span> <span class="token punctuation">{</span>
    <span class="token property">pointer-events</span><span class="token punctuation">:</span> all<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,13),o=[e];function c(l,i,u,r,k,d){return s(),a("div",null,o)}var f=n(p,[["render",c]]);export{m as __pageData,f as default};
