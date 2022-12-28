import{_ as n,c as s,o as a,a as t}from"./app.429e1088.js";const d='{"title":"\u5355\u6587\u4EF6\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"vue2 \u5355\u6587\u4EF6\u7EC4\u4EF6\u57FA\u672C\u5199\u6CD5","slug":"vue2-\u5355\u6587\u4EF6\u7EC4\u4EF6\u57FA\u672C\u5199\u6CD5"},{"level":2,"title":"sync\u4FEE\u9970\u7B26","slug":"sync\u4FEE\u9970\u7B26"},{"level":2,"title":"slot\u900F\u4F20","slug":"slot\u900F\u4F20"}],"relativePath":"vue/grammar/sfc.md"}',p={},o=t(`<h1 id="\u5355\u6587\u4EF6\u7EC4\u4EF6" tabindex="-1">\u5355\u6587\u4EF6\u7EC4\u4EF6 <a class="header-anchor" href="#\u5355\u6587\u4EF6\u7EC4\u4EF6" aria-hidden="true">#</a></h1><h2 id="vue2-\u5355\u6587\u4EF6\u7EC4\u4EF6\u57FA\u672C\u5199\u6CD5" tabindex="-1">vue2 \u5355\u6587\u4EF6\u7EC4\u4EF6\u57FA\u672C\u5199\u6CD5 <a class="header-anchor" href="#vue2-\u5355\u6587\u4EF6\u7EC4\u4EF6\u57FA\u672C\u5199\u6CD5" aria-hidden="true">#</a></h2><p>\u53C2\u8003\uFF1A<a href="https://cn.vuejs.org/v2/style-guide/index.html" target="_blank" rel="noopener noreferrer">https://cn.vuejs.org/v2/style-guide/index.html</a></p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\u563B\u563B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- v-if v-for --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shouldShowUsers<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user in users<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- \u63D2\u503C --&gt;</span>
      {{ user.name }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- v-else-if v-else --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shouldShowMe<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- \u4E8B\u4EF6\u6CE8\u518C --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$emit(<span class="token punctuation">&#39;</span>input<span class="token punctuation">&#39;</span>, $event.target.value)<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>openModal<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u4F7F\u7528\u5B50\u7EC4\u4EF6\u7684\u51E0\u79CD\u65B9\u5F0F --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>the-modal</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>TheInput<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>TheDropdown<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TheButton</span> <span class="token attr-name">:some-prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>prop<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>CTA<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TheButton</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>the-modal</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u51E0\u79CD\u6837\u5F0F\u7684\u5199\u6CD5 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{</span> <span class="token attr-name"><span class="token namespace">&#39;is-active&#39;:</span></span> <span class="token attr-name">true,</span> <span class="token attr-name"><span class="token namespace">&#39;red&#39;:</span></span> <span class="token attr-name">isRed</span> <span class="token attr-name">}</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  &lt;div :class=[&#39;is-active&#39;, isRed ? &#39;red&#39; : &#39;&#39; ]&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{</span> <span class="token attr-name"><span class="token namespace">color:</span></span> <span class="token attr-name">textColor,</span> <span class="token attr-name"><span class="token namespace">fontSize:</span></span> <span class="token attr-name">&#39;18px&#39;</span> <span class="token attr-name">}</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
  <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>[{</span> <span class="token attr-name"><span class="token namespace">color:</span></span> <span class="token attr-name">textColor,</span> <span class="token attr-name"><span class="token namespace">fontSize:</span></span> <span class="token attr-name">&#39;18px&#39;</span> <span class="token attr-name">},</span> <span class="token attr-name">{</span> <span class="token attr-name"><span class="token namespace">fontWeight:</span></span> <span class="token attr-name">&#39;300&#39;</span> <span class="token attr-name">}]</span>
  <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> TheButton <span class="token keyword">from</span> <span class="token string">&#39;components/TheButton.vue&#39;</span>
  <span class="token keyword">import</span> TheModal <span class="token keyword">from</span> <span class="token string">&#39;components/TheModal.vue&#39;</span>
  <span class="token keyword">import</span> TheInput <span class="token keyword">from</span> <span class="token string">&#39;components/TheInput.vue&#39;</span>
  <span class="token keyword">import</span> TheDropdown <span class="token keyword">from</span> <span class="token string">&#39;components/TheDropdown.vue&#39;</span>

  <span class="token comment">// \u79C1\u6709\u65B9\u6CD5</span>
  <span class="token function">myPrivateFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// todo</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7EC4\u4EF6\u540D\u5E94\u8BE5\u59CB\u7EC8\u662F\u591A\u4E2A\u5355\u8BCD\u7684</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;TodoItem&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6CE8\u518C\u4F7F\u7528\u7684\u7EC4\u4EF6</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      TheButton<span class="token punctuation">,</span>
      TheModal<span class="token punctuation">,</span>
      TheInput<span class="token punctuation">,</span>
      TheDropdown<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6CE8\u518C\u5C40\u90E8\u6307\u4EE4</span>
    <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
      waves<span class="token punctuation">,</span>
      <span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u6307\u4EE4</span>
      <span class="token literal-property property">focus</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6307\u4EE4\u7684\u5B9A\u4E49</span>
        <span class="token function-variable function">inserted</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          el<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6CE8\u518C\u5C40\u90E8\u8FC7\u6EE4\u5668</span>
    <span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      filterA
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// mixin\uFF0C\u6CE8\u610F\u5176\u662F\u4E2A\u6570\u7EC4</span>
    <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>mixin<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7EE7\u627F\u5176\u4ED6\u7EC4\u4EF6</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> CompParent<span class="token punctuation">,</span>
    <span class="token comment">// props\u8BE6\u7EC6\u5B9A\u4E49</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u68C0\u6D4B\u7C7B\u578B</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token comment">// \u9ED8\u8BA4\u503C</span>
      <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
        <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;fang&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// \u68C0\u6D4B\u7C7B\u578B + \u5176\u4ED6\u9A8C\u8BC1</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> value <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7EC4\u4EF6\u7684 data \u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570\u3002</span>
    <span class="token comment">// data\u4E2D\u4E0D\u8981\u51FA\u73B0\u8BA1\u7B97\u5C5E\u6027\uFF0C\u56E0\u4E3A\u8FD8\u672A\u58F0\u660E</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u8BA1\u7B97\u5C5E\u6027</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">aDouble</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">+</span> <span class="token number">2</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">aPlus</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">+</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// watch\u76D1\u542C\uFF0C\u8FD9\u91CC\u4E0D\u80FD\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\uFF0C\u5426\u5219this\u6307\u4E0D\u5230vue\u5B9E\u4F8B</span>
    <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">/* \u2713 GOOD */</span>
      <span class="token function-variable function">a</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;new: %s, old: %s&#39;</span><span class="token punctuation">,</span> val<span class="token punctuation">,</span> oldVal<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token string">&#39;someMethod&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">handler</span><span class="token operator">:</span> <span class="token string">&#39;someMethod&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">e</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;handle1&#39;</span><span class="token punctuation">,</span>
        <span class="token keyword">function</span> <span class="token function">handle2</span> <span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">handle3</span> <span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">/* ... */</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;e.f&#39;</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u7EC4\u4EF6\u7684\u65B9\u6CD5</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u89E6\u53D1\u4E8B\u4EF6</span>
      <span class="token function">openModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">publicMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u8C03\u7528\u79C1\u6709\u65B9\u6CD5</span>
        <span class="token function">myPrivateFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u751F\u547D\u5468\u671F</span>
    <span class="token comment">// \u5728\u5B9E\u4F8B\u521D\u59CB\u5316\u4E4B\u540E,\u8FDB\u884C\u6570\u636E\u4FA6\u542C\u548C\u4E8B\u4EF6/\u4FA6\u542C\u5668\u7684\u914D\u7F6E\u4E4B\u524D\u540C\u6B65\u8C03\u7528\u3002</span>
    <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u751F\u547D\u5468\u671F</span>
    <span class="token comment">// \u5728\u5B9E\u4F8B\u521B\u5EFA\u5B8C\u6210\u540E\u88AB\u7ACB\u5373\u540C\u6B65\u8C03\u7528\u3002\u5728\u8FD9\u4E00\u6B65\u4E2D\uFF0C\u5B9E\u4F8B\u5DF2\u5B8C\u6210\u5BF9\u9009\u9879\u7684\u5904\u7406\uFF0C</span>
    <span class="token comment">// \u610F\u5473\u7740\u4EE5\u4E0B\u5185\u5BB9\u5DF2\u88AB\u914D\u7F6E\u5B8C\u6BD5\uFF1A\u6570\u636E\u4FA6\u542C\u3001\u8BA1\u7B97\u5C5E\u6027\u3001\u65B9\u6CD5\u3001\u4E8B\u4EF6/\u4FA6\u542C\u5668\u7684\u56DE\u8C03\u51FD\u6570</span>
    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u751F\u547D\u5468\u671F</span>
    <span class="token comment">// \u5728\u6302\u8F7D\u5F00\u59CB\u4E4B\u524D\u88AB\u8C03\u7528\uFF1A\u76F8\u5173\u7684 render \u51FD\u6570\u9996\u6B21\u88AB\u8C03\u7528\u3002</span>
    <span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u751F\u547D\u5468\u671F</span>
    <span class="token comment">// \u5B9E\u4F8B\u88AB\u6302\u8F7D\u540E\u8C03\u7528\uFF0C\u4E0D\u4F1A\u4FDD\u8BC1\u6240\u6709\u7684\u5B50\u7EC4\u4EF6\u4E5F\u90FD\u88AB\u6302\u8F7D\u5B8C\u6210\uFF0C\u8981\u786E\u4FDD\u5219\u4F7F\u7528nextTick</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4EC5\u5728\u6574\u4E2A\u89C6\u56FE\u90FD\u88AB\u6E32\u67D3\u4E4B\u540E\u624D\u4F1A\u8FD0\u884C\u7684\u4EE3\u7801</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u751F\u547D\u5468\u671F</span>
    <span class="token comment">// \u5728\u6570\u636E\u53D1\u751F\u6539\u53D8\u540E\uFF0CDOM \u88AB\u66F4\u65B0\u4E4B\u524D\u88AB\u8C03\u7528</span>
    <span class="token function">beforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u8FD9\u91CC\u9002\u5408\u5728\u73B0\u6709 DOM \u5C06\u8981\u88AB\u66F4\u65B0\u4E4B\u524D\u8BBF\u95EE\u5B83\uFF0C</span>
        <span class="token comment">//\u6BD4\u5982\u79FB\u9664\u624B\u52A8\u6DFB\u52A0\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\u3002</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u751F\u547D\u5468\u671F</span>
    <span class="token comment">// \u5728\u6570\u636E\u66F4\u6539\u5BFC\u81F4\u7684\u865A\u62DF DOM \u91CD\u65B0\u6E32\u67D3\u548C\u66F4\u65B0\u5B8C\u6BD5\u4E4B\u540E\u88AB\u8C03\u7528\u3002</span>
    <span class="token comment">// \u4E0D\u4F1A\u4FDD\u8BC1\u6240\u6709\u7684\u5B50\u7EC4\u4EF6\u4E5F\u90FD\u88AB\u91CD\u65B0\u6E32\u67D3\u5B8C\u6BD5</span>
    <span class="token function">updated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u751F\u547D\u5468\u671F</span>
    <span class="token comment">// \u5B9E\u4F8B\u9500\u6BC1\u4E4B\u524D\u8C03\u7528\u3002\u5728\u8FD9\u4E00\u6B65\uFF0C\u5B9E\u4F8B\u4ECD\u7136\u5B8C\u5168\u53EF\u7528</span>
    <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u751F\u547D\u5468\u671F</span>
    <span class="token comment">// \u5B9E\u4F8B\u9500\u6BC1\u540E\u8C03\u7528\u3002\u8BE5\u94A9\u5B50\u88AB\u8C03\u7528\u540E\uFF0C</span>
    <span class="token comment">// \u5BF9\u5E94 Vue \u5B9E\u4F8B\u7684\u6240\u6709\u6307\u4EE4\u90FD\u88AB\u89E3\u7ED1\uFF0C\u6240\u6709\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\u88AB\u79FB\u9664\uFF0C</span>
    <span class="token comment">// \u6240\u6709\u7684\u5B50\u5B9E\u4F8B\u4E5F\u90FD\u88AB\u9500\u6BC1\u3002</span>
    <span class="token function">destroyed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.do-icon</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> -0.15em<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="sync\u4FEE\u9970\u7B26" tabindex="-1">sync\u4FEE\u9970\u7B26 <a class="header-anchor" href="#sync\u4FEE\u9970\u7B26" aria-hidden="true">#</a></h2><p>\u901A\u8FC7\u8BED\u6CD5\u7CD6\u8FBE\u5230\u201C\u4FEE\u6539prop\u201D\u7684\u76EE\u7684\uFF1A</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>details<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>myComponent</span> <span class="token attr-name">:show.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>valueChild<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>myComponent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeValue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>toggle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span> <span class="token comment">//\u5BFC\u5165</span>
<span class="token comment">//\u5B50\u7EC4\u4EF6</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;myComponent&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> 
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div v-if=&quot;show&quot;&gt;
                    &lt;p&gt;\u9ED8\u8BA4\u521D\u59CB\u503C\u662F{{show}}\uFF0C\u6240\u4EE5\u662F\u663E\u793A\u7684&lt;/p&gt;
                    &lt;button @click.stop=&quot;closeDiv&quot;&gt;\u5173\u95ED&lt;/button&gt;
                 &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;show&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">closeDiv</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;update:show&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u89E6\u53D1 input \u4E8B\u4EF6\uFF0C\u5E76\u4F20\u5165\u65B0\u503C</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//\u7236\u7EC4\u4EF6</span>
<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">{</span>
            <span class="token literal-property property">valueChild</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">changeValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>valueChild <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>valueChild
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><p>\u5176\u672C\u8D28\uFF1A</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>comp</span> <span class="token attr-name">:foo.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>comp</span><span class="token punctuation">&gt;</span></span>&#39;
</code></pre></div><p>\u4F1A\u88AB\u6269\u5C55\u4E3A\uFF1A</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>comp</span> <span class="token attr-name">:foo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bar<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">@update:</span>foo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>val =&gt; bar = val<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>comp</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5F53\u5B50\u7EC4\u4EF6\u9700\u8981\u66F4\u65B0 foo \u7684\u503C\u65F6\uFF0C\u5B83\u9700\u8981\u663E\u5F0F\u5730\u89E6\u53D1\u4E00\u4E2A\u66F4\u65B0\u4E8B\u4EF6\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;update:foo&#39;</span><span class="token punctuation">,</span> newValue<span class="token punctuation">)</span>
</code></pre></div><h2 id="slot\u900F\u4F20" tabindex="-1">slot\u900F\u4F20 <a class="header-anchor" href="#slot\u900F\u4F20" aria-hidden="true">#</a></h2><p>\u4E8C\u6B21\u5C01\u88C5\u7EC4\u4EF6\u65F6\u7ECF\u5E38\u4F1A\u7528\u5230</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>do-infinite-scroll-list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>virtual-list</span>
      <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$attrs<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>styles<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">v-on</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$listeners<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- \u5B9E\u73B0 slot \u900F\u4F20 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span>
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slot in Object.entries($slots)<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slot[0]<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slot[0]<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>virtual-list</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,16),e=[o];function c(l,u,k,i,r,m){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{d as __pageData,y as default};
