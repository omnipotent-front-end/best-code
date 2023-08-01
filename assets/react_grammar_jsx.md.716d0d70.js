import{_ as s,c as a,o as n,a as t}from"./app.7806089e.js";const h='{"title":"JSX","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F20\u9012\u591A\u53C2\u6570","slug":"\u4F20\u9012\u591A\u53C2\u6570"},{"level":2,"title":"\u5408\u5E76\u53C2\u6570","slug":"\u5408\u5E76\u53C2\u6570"},{"level":2,"title":"\u6761\u4EF6\u5224\u65AD","slug":"\u6761\u4EF6\u5224\u65AD"},{"level":2,"title":"children\u5185\u5BB9","slug":"children\u5185\u5BB9"},{"level":2,"title":"list","slug":"list"},{"level":2,"title":"\u6837\u5F0F\u5185\u8054style","slug":"\u6837\u5F0F\u5185\u8054style"}],"relativePath":"react/grammar/jsx.md"}',p={},o=t(`<h1 id="jsx" tabindex="-1">JSX <a class="header-anchor" href="#jsx" aria-hidden="true">#</a></h1><h2 id="\u4F20\u9012\u591A\u53C2\u6570" tabindex="-1">\u4F20\u9012\u591A\u53C2\u6570 <a class="header-anchor" href="#\u4F20\u9012\u591A\u53C2\u6570" aria-hidden="true">#</a></h2><p>\u5229\u7528\u89E3\u6784\u3001\u5269\u4F59\u53C2\u6570\u548C\u5C55\u5F00\u8FD0\u7B97\u7B26</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Greeting</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name<span class="token punctuation">,</span> <span class="token operator">...</span>platformProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div <span class="token punctuation">{</span><span class="token operator">...</span>platformProps<span class="token punctuation">}</span><span class="token operator">&gt;</span>Hi <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5408\u5E76\u53C2\u6570" tabindex="-1">\u5408\u5E76\u53C2\u6570 <a class="header-anchor" href="#\u5408\u5E76\u53C2\u6570" aria-hidden="true">#</a></h2><p>\u5229\u7528\u9ED8\u8BA4\u53C2\u6570\u3001\u5C55\u5F00\u8FD0\u7B97\u7B26\uFF0C</p><p>\u5728\u64CD\u4F5CclassName\u65F6\u975E\u5E38\u5E38\u89C1</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">MyButton</span><span class="token punctuation">(</span><span class="token punctuation">{</span> className <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token operator">...</span>props <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> classNames <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;btn&quot;</span><span class="token punctuation">,</span> className<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token punctuation">{</span>classNames<span class="token punctuation">}</span> <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6761\u4EF6\u5224\u65AD" tabindex="-1">\u6761\u4EF6\u5224\u65AD <a class="header-anchor" href="#\u6761\u4EF6\u5224\u65AD" aria-hidden="true">#</a></h2><p>if\uFF1A</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  condition <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>Rendered when <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">truthy</span><span class="token template-punctuation string">\`</span></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>unless\uFF1A</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  condition <span class="token operator">||</span> <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>Rendered when <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">falsy</span><span class="token template-punctuation string">\`</span></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><p>if-else</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  condition <span class="token operator">?</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>Rendered when <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">truthy</span><span class="token template-punctuation string">\`</span></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>Rendered when <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">falsy</span><span class="token template-punctuation string">\`</span></span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="children\u5185\u5BB9" tabindex="-1">children\u5185\u5BB9 <a class="header-anchor" href="#children\u5185\u5BB9" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u4E3A\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u4EE5\u662F\u6570\u7EC4\uFF1A</p><div class="language-js"><pre><code><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Hello World<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">&quot;Hello &quot;</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>World<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token string">&quot;!&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre></div><h2 id="list" tabindex="-1">list <a class="header-anchor" href="#list" aria-hidden="true">#</a></h2><p>\u4F7F\u7528map</p><div class="language-js"><pre><code><span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
  <span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">&quot;first&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;second&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
<span class="token comment">//\u7B49\u540C\u4E8E</span>
<span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>first<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span>second<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
</code></pre></div><h2 id="\u6837\u5F0F\u5185\u8054style" tabindex="-1">\u6837\u5F0F\u5185\u8054style <a class="header-anchor" href="#\u6837\u5F0F\u5185\u8054style" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">MyHeader</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1 style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>Hello Style<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Add a little style<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,23),e=[o];function c(l,r,u,k,i,d){return n(),a("div",null,e)}var m=s(p,[["render",c]]);export{h as __pageData,m as default};