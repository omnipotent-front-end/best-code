import{_ as n,c as s,o as a,a as p}from"./app.7806089e.js";const m='{"title":"jsx","description":"","frontmatter":{},"headers":[{"level":2,"title":"createElement\u4F8B\u5B50","slug":"createelement\u4F8B\u5B50"},{"level":2,"title":"createElement\u5B8C\u6574\u53C2\u6570","slug":"createelement\u5B8C\u6574\u53C2\u6570"},{"level":2,"title":"jsx\u5199\u6CD5","slug":"jsx\u5199\u6CD5"}],"relativePath":"vue/grammar/jsx.md"}',t={},o=p(`<h1 id="jsx" tabindex="-1">jsx <a class="header-anchor" href="#jsx" aria-hidden="true">#</a></h1><h2 id="createelement\u4F8B\u5B50" tabindex="-1">createElement\u4F8B\u5B50 <a class="header-anchor" href="#createelement\u4F8B\u5B50" aria-hidden="true">#</a></h2><div class="language-js"><pre><code>
<span class="token comment">// @returns {VNode}</span>
<span class="token function">createElement</span><span class="token punctuation">(</span>
  <span class="token comment">// {String | Object | Function}</span>
  <span class="token comment">// \u4E00\u4E2A HTML \u6807\u7B7E\u540D\u3001\u7EC4\u4EF6\u9009\u9879\u5BF9\u8C61\uFF0C\u6216\u8005</span>
  <span class="token comment">// resolve \u4E86\u4E0A\u8FF0\u4EFB\u4F55\u4E00\u79CD\u7684\u4E00\u4E2A async \u51FD\u6570\u3002\u5FC5\u586B\u9879\u3002</span>
  <span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// {Object}</span>
  <span class="token comment">// \u4E00\u4E2A\u4E0E\u6A21\u677F\u4E2D attribute \u5BF9\u5E94\u7684\u6570\u636E\u5BF9\u8C61\u3002\u53EF\u9009\u3002</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// (\u8BE6\u60C5\u89C1\u4E0B\u4E00\u8282)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// {String | Array}</span>
  <span class="token comment">// \u5B50\u7EA7\u865A\u62DF\u8282\u70B9 (VNodes)\uFF0C\u7531 \`createElement()\` \u6784\u5EFA\u800C\u6210\uFF0C</span>
  <span class="token comment">// \u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B57\u7B26\u4E32\u6765\u751F\u6210\u201C\u6587\u672C\u865A\u62DF\u8282\u70B9\u201D\u3002\u53EF\u9009\u3002</span>
  <span class="token punctuation">[</span>
    <span class="token string">&#39;\u5148\u5199\u4E00\u4E9B\u6587\u5B57&#39;</span><span class="token punctuation">,</span>
    <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;h1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u4E00\u5219\u5934\u6761&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">createElement</span><span class="token punctuation">(</span>MyComponent<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">someProp</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">)</span>

</code></pre></div><h2 id="createelement\u5B8C\u6574\u53C2\u6570" tabindex="-1">createElement\u5B8C\u6574\u53C2\u6570 <a class="header-anchor" href="#createelement\u5B8C\u6574\u53C2\u6570" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token comment">// \u4E0E \`v-bind:class\` \u7684 API \u76F8\u540C\uFF0C</span>
  <span class="token comment">// \u63A5\u53D7\u4E00\u4E2A\u5B57\u7B26\u4E32\u3001\u5BF9\u8C61\u6216\u5B57\u7B26\u4E32\u548C\u5BF9\u8C61\u7EC4\u6210\u7684\u6570\u7EC4</span>
  <span class="token string-property property">&#39;class&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4E0E \`v-bind:style\` \u7684 API \u76F8\u540C\uFF0C</span>
  <span class="token comment">// \u63A5\u53D7\u4E00\u4E2A\u5B57\u7B26\u4E32\u3001\u5BF9\u8C61\uFF0C\u6216\u5BF9\u8C61\u7EC4\u6210\u7684\u6570\u7EC4</span>
  <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">&#39;14px&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u666E\u901A\u7684 HTML attribute</span>
  <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u7EC4\u4EF6 prop</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">myProp</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// DOM property</span>
  <span class="token literal-property property">domProps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">innerHTML</span><span class="token operator">:</span> <span class="token string">&#39;baz&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4E8B\u4EF6\u76D1\u542C\u5668\u5728 \`on\` \u5185\uFF0C</span>
  <span class="token comment">// \u4F46\u4E0D\u518D\u652F\u6301\u5982 \`v-on:keyup.enter\` \u8FD9\u6837\u7684\u4FEE\u9970\u5668\u3002</span>
  <span class="token comment">// \u9700\u8981\u5728\u5904\u7406\u51FD\u6570\u4E2D\u624B\u52A8\u68C0\u67E5 keyCode\u3002</span>
  <span class="token literal-property property">on</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">click</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>clickHandler
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4EC5\u7528\u4E8E\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u76D1\u542C\u539F\u751F\u4E8B\u4EF6\uFF0C\u800C\u4E0D\u662F\u7EC4\u4EF6\u5185\u90E8\u4F7F\u7528</span>
  <span class="token comment">// \`vm.$emit\` \u89E6\u53D1\u7684\u4E8B\u4EF6\u3002</span>
  <span class="token literal-property property">nativeOn</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">click</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nativeClickHandler
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u81EA\u5B9A\u4E49\u6307\u4EE4\u3002\u6CE8\u610F\uFF0C\u4F60\u65E0\u6CD5\u5BF9 \`binding\` \u4E2D\u7684 \`oldValue\`</span>
  <span class="token comment">// \u8D4B\u503C\uFF0C\u56E0\u4E3A Vue \u5DF2\u7ECF\u81EA\u52A8\u4E3A\u4F60\u8FDB\u884C\u4E86\u540C\u6B65\u3002</span>
  <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;my-custom-directive&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">expression</span><span class="token operator">:</span> <span class="token string">&#39;1 + 1&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">arg</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">modifiers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4F5C\u7528\u57DF\u63D2\u69FD\u7684\u683C\u5F0F\u4E3A</span>
  <span class="token comment">// { name: props =&gt; VNode | Array&lt;VNode&gt; }</span>
  <span class="token literal-property property">scopedSlots</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token parameter">props</span> <span class="token operator">=&gt;</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5982\u679C\u7EC4\u4EF6\u662F\u5176\u5B83\u7EC4\u4EF6\u7684\u5B50\u7EC4\u4EF6\uFF0C\u9700\u4E3A\u63D2\u69FD\u6307\u5B9A\u540D\u79F0</span>
  <span class="token literal-property property">slot</span><span class="token operator">:</span> <span class="token string">&#39;name-of-slot&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5176\u5B83\u7279\u6B8A\u9876\u5C42 property</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;myKey&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">ref</span><span class="token operator">:</span> <span class="token string">&#39;myRef&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5982\u679C\u4F60\u5728\u6E32\u67D3\u51FD\u6570\u4E2D\u7ED9\u591A\u4E2A\u5143\u7D20\u90FD\u5E94\u7528\u4E86\u76F8\u540C\u7684 ref \u540D\uFF0C</span>
  <span class="token comment">// \u90A3\u4E48 \`$refs.myRef\` \u4F1A\u53D8\u6210\u4E00\u4E2A\u6570\u7EC4\u3002</span>
  <span class="token literal-property property">refInFor</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="jsx\u5199\u6CD5" tabindex="-1">jsx\u5199\u6CD5 <a class="header-anchor" href="#jsx\u5199\u6CD5" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token operator">&lt;</span>DoTableAction
  icon<span class="token operator">=</span><span class="token string">&#39;caidans&#39;</span>
  actions<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;intoProject&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u8FDB\u5165\u9879\u76EE&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;caidans&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;svn&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;svn&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;caidans&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">divided</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;chart&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u6570\u636E\u62A5\u8868&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;caidans&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">divided</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">}</span>
  row<span class="token operator">=</span><span class="token punctuation">{</span>row<span class="token punctuation">}</span>
  status<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>
  dropdownDisable<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>
  clickHide<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>
  on<span class="token operator">-</span>action<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre></div><p>\u5BF9\u6807\u7684createElement\u51FD\u6570\uFF1A</p><div class="language-js"><pre><code><span class="token function">createElement</span><span class="token punctuation">(</span>
  DoTableAction<span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;caidans&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;intoProject&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u8FDB\u5165\u9879\u76EE&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;caidans&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;svn&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;svn&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;caidans&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">divided</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;chart&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u6570\u636E\u62A5\u8868&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;caidans&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">divided</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">row</span><span class="token operator">:</span> row<span class="token punctuation">,</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dropdownDisable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">clickHide</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4E8B\u4EF6\u76D1\u542C</span>
    <span class="token literal-property property">on</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">action</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre></div>`,9),e=[o];function c(r,l,k,i,u,y){return a(),s("div",null,e)}var g=n(t,[["render",c]]);export{m as __pageData,g as default};
