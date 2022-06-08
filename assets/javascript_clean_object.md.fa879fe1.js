import{_ as n,c as s,o as a,d as p}from"./app.469aebe0.js";const m='{"title":"\u5BF9\u8C61","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528\u8BA1\u7B97\u5C5E\u6027\u800C\u4E0D\u662F\u65B0\u589E\u8D4B\u503C","slug":"\u4F7F\u7528\u8BA1\u7B97\u5C5E\u6027\u800C\u4E0D\u662F\u65B0\u589E\u8D4B\u503C"},{"level":2,"title":"\u5BF9\u8C61\u5C5E\u6027\u7F29\u5199\u524D\u7F6E","slug":"\u5BF9\u8C61\u5C5E\u6027\u7F29\u5199\u524D\u7F6E"},{"level":2,"title":"\u4F7F\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\u800C\u4E0D\u662FObject.assign","slug":"\u4F7F\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\u800C\u4E0D\u662Fobject-assign"},{"level":2,"title":"\u4F7F\u7528setter\u548Cgetter","slug":"\u4F7F\u7528setter\u548Cgetter"}],"relativePath":"javascript/clean/object.md"}',t={},o=p(`<h1 id="\u5BF9\u8C61" tabindex="-1">\u5BF9\u8C61 <a class="header-anchor" href="#\u5BF9\u8C61" aria-hidden="true">#</a></h1><h2 id="\u4F7F\u7528\u8BA1\u7B97\u5C5E\u6027\u800C\u4E0D\u662F\u65B0\u589E\u8D4B\u503C" tabindex="-1">\u4F7F\u7528\u8BA1\u7B97\u5C5E\u6027\u800C\u4E0D\u662F\u65B0\u589E\u8D4B\u503C <a class="header-anchor" href="#\u4F7F\u7528\u8BA1\u7B97\u5C5E\u6027\u800C\u4E0D\u662F\u65B0\u589E\u8D4B\u503C" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">getKey</span><span class="token punctuation">(</span><span class="token parameter">k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">a key named </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>k<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;San Francisco&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">[</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token string">&#39;enabled&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">// good getKey(&#39;enabled&#39;)\u662F\u52A8\u6001\u5C5E\u6027\u540D</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;San Francisco&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token string">&#39;enabled&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5BF9\u8C61\u5C5E\u6027\u7F29\u5199\u524D\u7F6E" tabindex="-1">\u5BF9\u8C61\u5C5E\u6027\u7F29\u5199\u524D\u7F6E <a class="header-anchor" href="#\u5BF9\u8C61\u5C5E\u6027\u7F29\u5199\u524D\u7F6E" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">const</span> anakinSkywalker <span class="token operator">=</span> <span class="token string">&#39;Anakin Skywalker&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> lukeSkywalker <span class="token operator">=</span> <span class="token string">&#39;Luke Skywalker&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">episodeOne</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">twoJediWalkIntoACantina</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  lukeSkywalker<span class="token punctuation">,</span>
  <span class="token literal-property property">episodeThree</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mayTheFourth</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  anakinSkywalker<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  lukeSkywalker<span class="token punctuation">,</span>
  anakinSkywalker<span class="token punctuation">,</span>
  <span class="token literal-property property">episodeOne</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">twoJediWalkIntoACantina</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">episodeThree</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mayTheFourth</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u4F7F\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\u800C\u4E0D\u662Fobject-assign" tabindex="-1">\u4F7F\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\u800C\u4E0D\u662FObject.assign <a class="header-anchor" href="#\u4F7F\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\u800C\u4E0D\u662Fobject-assign" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// very bad</span>
<span class="token keyword">const</span> original <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> copy <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>original<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// this mutates \`original\` \u0CA0_\u0CA0</span>
<span class="token keyword">delete</span> copy<span class="token punctuation">.</span>a<span class="token punctuation">;</span> <span class="token comment">// so does this</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> original <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> copy <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> original<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// copy =&gt; { a: 1, b: 2, c: 3 }</span>

<span class="token comment">// good es6\u6269\u5C55\u8FD0\u7B97\u7B26 ...</span>
<span class="token keyword">const</span> original <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u6D45\u62F7\u8D1D</span>
<span class="token keyword">const</span> copy <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>original<span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// copy =&gt; { a: 1, b: 2, c: 3 }</span>

<span class="token comment">// rest \u8D4B\u503C\u8FD0\u7B97\u7B26</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> a<span class="token punctuation">,</span> <span class="token operator">...</span>noA <span class="token punctuation">}</span> <span class="token operator">=</span> copy<span class="token punctuation">;</span> <span class="token comment">// noA =&gt; { b: 2, c: 3 }</span>
</code></pre></div><h2 id="\u4F7F\u7528setter\u548Cgetter" tabindex="-1">\u4F7F\u7528setter\u548Cgetter <a class="header-anchor" href="#\u4F7F\u7528setter\u548Cgetter" aria-hidden="true">#</a></h2><p><strong>Bad:</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">makeBankAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">balance</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> account <span class="token operator">=</span> <span class="token function">makeBankAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
account<span class="token punctuation">.</span>balance <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>Good:</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">makeBankAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// this one is private</span>
  <span class="token keyword">let</span> balance <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token comment">// a &quot;getter&quot;, made public via the returned object below</span>
  <span class="token keyword">function</span> <span class="token function">getBalance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> balance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// a &quot;setter&quot;, made public via the returned object below</span>
  <span class="token keyword">function</span> <span class="token function">setBalance</span><span class="token punctuation">(</span><span class="token parameter">amount</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ... validate before updating the balance</span>
    balance <span class="token operator">=</span> amount<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    getBalance<span class="token punctuation">,</span>
    setBalance
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> account <span class="token operator">=</span> <span class="token function">makeBankAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
account<span class="token punctuation">.</span><span class="token function">setBalance</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div>`,12),e=[o];function c(l,r,k,u,i,d){return a(),s("div",null,e)}var b=n(t,[["render",c]]);export{m as __pageData,b as default};
