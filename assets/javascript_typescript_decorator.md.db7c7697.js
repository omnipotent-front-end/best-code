import{_ as n,c as s,o as a,a as t}from"./app.c58f1cde.js";const m='{"title":"\u88C5\u9970\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6267\u884C\u987A\u5E8F","slug":"\u6267\u884C\u987A\u5E8F"}],"relativePath":"javascript/typescript/decorator.md"}',o={},p=t(`<h1 id="\u88C5\u9970\u5668" tabindex="-1">\u88C5\u9970\u5668 <a class="header-anchor" href="#\u88C5\u9970\u5668" aria-hidden="true">#</a></h1><h2 id="\u6267\u884C\u987A\u5E8F" tabindex="-1">\u6267\u884C\u987A\u5E8F <a class="header-anchor" href="#\u6267\u884C\u987A\u5E8F" aria-hidden="true">#</a></h2><ul><li>\u9996\u5148\u6267\u884C\u5B9E\u4F8B\u76F8\u5173\uFF1A\u53C2\u6570\u88C5\u9970\u5668 &gt; \u65B9\u6CD5\u88C5\u9970\u5668 &gt; \u8BBF\u95EE\u5668\u88C5\u9970\u5668 &gt; \u5C5E\u6027\u88C5\u9970\u5668</li><li>\u7136\u540E\u6267\u884C\u9759\u6001\u76F8\u5173\uFF1A\u53C2\u6570\u88C5\u9970\u5668 &gt; \u65B9\u6CD5\u88C5\u9970\u5668 &gt; \u8BBF\u95EE\u5668\u88C5\u9970\u5668 &gt; \u5C5E\u6027\u88C5\u9970\u5668</li><li>\u7136\u540E\u6267\u884C\u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\u88C5\u9970\u5668</li><li>\u6700\u540E\u662F\u7C7B\u88C5\u9970\u5668</li><li>\u591A\u4E2A\u88C5\u9970\u5668\u88C5\u9970\u540C\u4E00\u4E2A\u6570\u636E\u65F6\uFF0C\u4ECE\u4E0B\u5F80\u4E0A\u4F9D\u6B21\u6267\u884C</li></ul><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">staticParamsDecorator</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> name<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;static params decorator&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">staticFuncDecorator</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> name<span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;static func decorator&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">staticPropertyDecorator</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;static property decorator&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">instanceParamsDecorator</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> name<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;instance params decorator&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">instanceFuncDecorator</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> name<span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;instance func decorator&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">instancePropertyDecorator</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;instance property decorator&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">constructorParamsDecorator</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> name<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;constructor params decorator&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">classDecorator1</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;class decorator1&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">classDecorator2</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;class decorator2&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">classDecorator1</span></span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">classDecorator2</span></span>
<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">constructorParamsDecorator</span></span> options<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">staticPropertyDecorator</span></span>
  <span class="token keyword">static</span> Name <span class="token operator">=</span> <span class="token string">&#39;zlx&#39;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">staticFuncDecorator</span></span>
  <span class="token keyword">static</span> <span class="token function">Say</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">staticParamsDecorator</span></span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">instancePropertyDecorator</span></span>
  age <span class="token operator">=</span> <span class="token number">11</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">instanceFuncDecorator</span></span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">instanceParamsDecorator</span></span> time<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// instance property decorator</span>
<span class="token comment">// instance params decorator</span>
<span class="token comment">// instance func decorator</span>
<span class="token comment">// static property decorator</span>
<span class="token comment">// static params decorator</span>
<span class="token comment">// static func decorator</span>
<span class="token comment">// constructor params decorator</span>
<span class="token comment">// class decorator2</span>
<span class="token comment">// class decorator1</span>

</code></pre></div>`,4),c=[p];function e(u,l,i,r,k,d){return a(),s("div",null,c)}var g=n(o,[["render",e]]);export{m as __pageData,g as default};
