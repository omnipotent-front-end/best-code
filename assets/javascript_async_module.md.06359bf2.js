import{_ as n,c as s,o as a,a as p}from"./app.5fee0017.js";const m='{"title":"\u5F02\u6B65\u6A21\u5757","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/async/module.md"}',t={},o=p(`<h1 id="\u5F02\u6B65\u6A21\u5757" tabindex="-1">\u5F02\u6B65\u6A21\u5757 <a class="header-anchor" href="#\u5F02\u6B65\u6A21\u5757" aria-hidden="true">#</a></h1><p>\u8BE5\u65B9\u6848\u5C31\u6709nodejs</p><p>\u6709\u65F6\u5019\u6211\u4EEC\u6709\u4E9B\u903B\u8F91\u5728\u6A21\u5757\u7684\u5F02\u6B65\u91CC\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token string">&quot;bar&quot;</span>
async<span class="token punctuation">.</span><span class="token function">function</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  foo <span class="token operator">=</span> <span class="token string">&quot;foobar&quot;</span><span class="token punctuation">;</span>
  <span class="token comment">// module.exports = foo;  // having the export here breaks the app: foo is always undefined.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// having the export here results in working code, but without the variable being set.</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> foo<span class="token punctuation">;</span>
</code></pre></div><p>\u4F46\u662F\u6211\u4EEC\u66B4\u9732\u51FA\u53BB\u7684\u5176\u5B9E\u662Fbar\uFF0C\u800C\u4E0D\u662Ffoobar\u3002</p><p><strong>\u600E\u4E48\u89E3\u51B3\u8FD9\u79CD\u95EE\u9898</strong></p><p><strong>\u66B4\u9732\u4E00\u4E2A\u51FD\u6570\u56DE\u8C03</strong></p><div class="language-js"><pre><code><span class="token keyword">var</span> foo<span class="token punctuation">,</span> callback<span class="token punctuation">;</span>
async<span class="token punctuation">.</span><span class="token function">function</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    foo <span class="token operator">=</span> <span class="token string">&quot;foobar&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token keyword">typeof</span> callback <span class="token operator">==</span> <span class="token string">&#39;function&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">cb</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> foo <span class="token operator">!=</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">cb</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// If foo is already define, I don&#39;t wait.</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        callback <span class="token operator">=</span> cb<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F7F\u7528\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">var</span> fooMod <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./foo.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">fooMod</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">foo</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//Here code using foo;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u8FD9\u6837\u4F7F\u7528\u65B9\u7684\u903B\u8F91\u5C31\u5728\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u4E2D\u3002</p><p><strong>\u66B4\u9732\u4E00\u4E2Apromise</strong></p><div class="language-js"><pre><code><span class="token keyword">var</span> foo<span class="token punctuation">,</span> callback<span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    async<span class="token punctuation">.</span><span class="token function">function</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        foo <span class="token operator">=</span> <span class="token string">&quot;foobar&quot;</span>

        <span class="token function">resolve</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4F7F\u7528\u65B9\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">var</span> fooMod <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./foo.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">foo</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//Here code using foo;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u4F7F\u7528async require</strong></p><p>\u66B4\u9732\u7ACB\u5373\u6267\u884C\u51FD\u6570</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token comment">//some async initiallizers</span>
 <span class="token comment">//e.g. await the db module that has the same structure like this</span>
  <span class="token keyword">var</span> db <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./db&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">;</span>

  <span class="token comment">//resolve the export promise</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    foo
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre></div><div class="language-js"><pre><code><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./theuppercode&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,19),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var g=n(t,[["render",c]]);export{m as __pageData,g as default};
