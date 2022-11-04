import{_ as n,c as s,o as a,a as t}from"./app.d572062b.js";const h='{"title":"\u51FD\u6570","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u901A\u8FC7call\u62E6\u622A\u51FD\u6570\uFF0C\u8FDB\u884CAOP\u64CD\u4F5C","slug":"\u901A\u8FC7call\u62E6\u622A\u51FD\u6570\uFF0C\u8FDB\u884Caop\u64CD\u4F5C"}],"relativePath":"javascript/util/function.md"}',p={},o=t(`<h1 id="\u51FD\u6570" tabindex="-1">\u51FD\u6570 <a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a></h1><h2 id="\u901A\u8FC7call\u62E6\u622A\u51FD\u6570\uFF0C\u8FDB\u884Caop\u64CD\u4F5C" tabindex="-1">\u901A\u8FC7call\u62E6\u622A\u51FD\u6570\uFF0C\u8FDB\u884CAOP\u64CD\u4F5C <a class="header-anchor" href="#\u901A\u8FC7call\u62E6\u622A\u51FD\u6570\uFF0C\u8FDB\u884Caop\u64CD\u4F5C" aria-hidden="true">#</a></h2><p>\u53C2\u8003<a href="https://github.com/FunnyLiu/dva/blob/readsource/packages/dva/src/index.js#L108" target="_blank" rel="noopener noreferrer">dva\u5BF9history.listen\u7684\u589E\u5F3A</a>\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">patchHistory</span><span class="token punctuation">(</span><span class="token parameter">history</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u5BF9\u539F\u6709\u65B9\u6CD5\u8FDB\u884C\u62E6\u622A</span>
  <span class="token keyword">const</span> oldListen <span class="token operator">=</span> history<span class="token punctuation">.</span>listen<span class="token punctuation">;</span>
  <span class="token comment">// \u5C01\u88C5subscription\u4E2Dhistory.listen\u65B9\u6CD5</span>
  history<span class="token punctuation">.</span><span class="token function-variable function">listen</span> <span class="token operator">=</span> <span class="token parameter">callback</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> cbStr <span class="token operator">=</span> callback<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> isConnectedRouterHandler <span class="token operator">=</span>
      <span class="token punctuation">(</span>callback<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">&#39;handleLocationChange&#39;</span> <span class="token operator">&amp;&amp;</span> cbStr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;onLocationChanged&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">||</span>
      <span class="token punctuation">(</span>cbStr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;.inTimeTravelling&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span>
        cbStr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;.inTimeTravelling&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span>
        cbStr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;arguments[2]&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">callback</span><span class="token punctuation">(</span>history<span class="token punctuation">.</span>location<span class="token punctuation">,</span> history<span class="token punctuation">.</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//\u518D\u8FDB\u884CAOP\u589E\u5F3A</span>
    <span class="token keyword">return</span> <span class="token function">oldListen</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>history<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>isConnectedRouterHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// Delay all listeners besides ConnectedRouter</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">callback</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> history<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre></div>`,4),c=[o];function e(l,u,i,r,k,d){return a(),s("div",null,c)}var m=n(p,[["render",e]]);export{h as __pageData,m as default};
