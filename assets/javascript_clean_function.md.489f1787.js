import{_ as n,c as s,o as a,a as t}from"./app.fc70ffd8.js";const f='{"title":"\u51FD\u6570","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7ED9\u51FD\u6570\u547D\u540D","slug":"\u7ED9\u51FD\u6570\u547D\u540D"},{"level":2,"title":"\u4F7F\u7528\u9ED8\u8BA4\u53C2\u6570\u800C\u4E0D\u662F||","slug":"\u4F7F\u7528\u9ED8\u8BA4\u53C2\u6570\u800C\u4E0D\u662F"},{"level":2,"title":"\u4F7F\u7528Object.assign\u8BBE\u7F6E\u9ED8\u8BA4\u503C","slug":"\u4F7F\u7528object-assign\u8BBE\u7F6E\u9ED8\u8BA4\u503C"},{"level":2,"title":"\u5BF9\u5165\u53C2\u8FDB\u884C\u89E3\u6784\uFF0C\u89E3\u6784\u4FDD\u5B58\u4E86\u8FD9\u4E9B\u5C5E\u6027\u7684\u4E34\u65F6\u503C/\u5F15\u7528","slug":"\u5BF9\u5165\u53C2\u8FDB\u884C\u89E3\u6784\uFF0C\u89E3\u6784\u4FDD\u5B58\u4E86\u8FD9\u4E9B\u5C5E\u6027\u7684\u4E34\u65F6\u503C-\u5F15\u7528"},{"level":2,"title":"\u5165\u53C2\u907F\u514D\u6570\u7EC4\uFF0C\u91C7\u7528\u5BF9\u8C61","slug":"\u5165\u53C2\u907F\u514D\u6570\u7EC4\uFF0C\u91C7\u7528\u5BF9\u8C61"},{"level":2,"title":"\u4E0D\u8981\u4F7F\u7528arguments\uFF0C\u7528...\u66FF\u4EE3","slug":"\u4E0D\u8981\u4F7F\u7528arguments\uFF0C\u7528-\u66FF\u4EE3"},{"level":2,"title":"\u5165\u53C2\u4E0D\u8981\u542B\u6709\u5F00\u5173\u53C2\u6570","slug":"\u5165\u53C2\u4E0D\u8981\u542B\u6709\u5F00\u5173\u53C2\u6570"},{"level":2,"title":"\u5355\u4E00\u804C\u8D23\uFF0C\u5C3D\u53EF\u80FD\u62C6\u5206","slug":"\u5355\u4E00\u804C\u8D23\uFF0C\u5C3D\u53EF\u80FD\u62C6\u5206"},{"level":2,"title":"\u51FD\u6570\u540D\u8981\u8BED\u4E49\u5316","slug":"\u51FD\u6570\u540D\u8981\u8BED\u4E49\u5316"},{"level":2,"title":"\u63A7\u5236\u62BD\u8C61\u7EA7\u522B\u4E3A\u4E00\u5C42","slug":"\u63A7\u5236\u62BD\u8C61\u7EA7\u522B\u4E3A\u4E00\u5C42"},{"level":2,"title":"\u907F\u514D\u9020\u6210\u526F\u4F5C\u7528","slug":"\u907F\u514D\u9020\u6210\u526F\u4F5C\u7528"},{"level":2,"title":"\u4E0D\u8981\u9020\u6210\u539F\u578B\u6C61\u67D3","slug":"\u4E0D\u8981\u9020\u6210\u539F\u578B\u6C61\u67D3"},{"level":2,"title":"\u5C06\u6761\u4EF6\u8BED\u53E5\u5C01\u88C5","slug":"\u5C06\u6761\u4EF6\u8BED\u53E5\u5C01\u88C5"},{"level":2,"title":"\u907F\u514D\u53CD\u6761\u4EF6\u5224\u65AD","slug":"\u907F\u514D\u53CD\u6761\u4EF6\u5224\u65AD"}],"relativePath":"javascript/clean/function.md"}',p={},o=t(`<h1 id="\u51FD\u6570" tabindex="-1">\u51FD\u6570 <a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a></h1><p>\u9009\u81EA<a href="https://github.com/ryanmcdermott/clean-code-javascript" target="_blank" rel="noopener noreferrer">ryanmcdermott/clean-code-javascript: Clean Code concepts adapted for JavaScript</a></p><h2 id="\u7ED9\u51FD\u6570\u547D\u540D" tabindex="-1">\u7ED9\u51FD\u6570\u547D\u540D <a class="header-anchor" href="#\u7ED9\u51FD\u6570\u547D\u540D" aria-hidden="true">#</a></h2><p>\u51FD\u6570\u58F0\u660E\u65F6\u4F5C\u7528\u57DF\u88AB\u63D0\u524D\u4E86\uFF0C\u8FD9\u610F\u5473\u7740\u5728\u4E00\u4E2A\u6587\u4EF6\u91CC\u51FD\u6570\u5F88\u5BB9\u6613\uFF08\u592A\u5BB9\u6613\u4E86\uFF09\u5728\u5176\u5B9A\u4E49\u4E4B\u524D\u88AB\u5F15\u7528\u3002\u8FD9\u6837\u4F24\u5BB3\u4E86\u4EE3\u7801\u53EF\u8BFB\u6027\u548C\u53EF\u7EF4\u62A4\u6027\u3002\u5982\u679C\u4F60\u53D1\u73B0\u4E00\u4E2A\u51FD\u6570\u53C8\u5927\u53C8\u590D\u6742\uFF0C\u8FD9\u4E2A\u51FD\u6570\u59A8\u788D\u8FD9\u4E2A\u6587\u4EF6\u5176\u4ED6\u90E8\u5206\u7684\u7406\u89E3\u6027\uFF0C\u8FD9\u53EF\u80FD\u5C31\u662F\u65F6\u5019\u628A\u8FD9\u4E2A\u51FD\u6570\u5355\u72EC\u62BD\u6210\u4E00\u4E2A\u6A21\u5757\u4E86\u3002\u522B\u5FD8\u4E86\u7ED9\u8868\u8FBE\u5F0F\u663E\u793A\u7684\u547D\u540D\uFF0C\u4E0D\u7528\u7BA1\u8FD9\u4E2A\u540D\u5B57\u662F\u4E0D\u662F\u7531\u4E00\u4E2A\u786E\u5B9A\u7684\u53D8\u91CF\u63A8\u65AD\u51FA\u6765\u7684\uFF0C\u8FD9\u6D88\u9664\u4E86\u7531\u533F\u540D\u51FD\u6570\u5728\u9519\u8BEF\u8C03\u7528\u6808\u4EA7\u751F\u7684\u6240\u6709\u5047\u8BBE\uFF0C\u8FD9\u5728\u73B0\u4EE3\u6D4F\u89C8\u5668\u548C\u7C7B\u4F3Cbabel\u7F16\u8BD1\u5668\u4E2D\u5F88\u5E38\u89C1\u3002\u5177\u4F53\u8BA8\u8BBA\u53EF\u4EE5\u53C2\u8003<a href="https://github.com/airbnb/javascript/issues/794" target="_blank" rel="noopener noreferrer">\u8FD9\u91CC</a></p><div class="language-js"><pre><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token comment">// lexical name distinguished from the variable-referenced invocation(s)</span>
<span class="token comment">// \u51FD\u6570\u8868\u8FBE\u5F0F\u540D\u548C\u58F0\u660E\u7684\u51FD\u6570\u540D\u662F\u4E0D\u4E00\u6837\u7684</span>
<span class="token keyword">const</span> <span class="token function-variable function">short</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">longUniqueMoreDescriptiveLexicalFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u4F7F\u7528\u9ED8\u8BA4\u53C2\u6570\u800C\u4E0D\u662F" tabindex="-1">\u4F7F\u7528\u9ED8\u8BA4\u53C2\u6570\u800C\u4E0D\u662F|| <a class="header-anchor" href="#\u4F7F\u7528\u9ED8\u8BA4\u53C2\u6570\u800C\u4E0D\u662F" aria-hidden="true">#</a></h2><p>||\u6709\u5F88\u591A\u60C5\u51B5\u6BD4\u5982&#39;&#39;,false,0,null,NaN\u90FD\u4F1A\u7ED5\u8FC7</p><p><strong>Bad:</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createMicrobrewery</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> breweryName <span class="token operator">=</span> name <span class="token operator">||</span> <span class="token string">&quot;Hipster Brew Co.&quot;</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>Good:</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createMicrobrewery</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;Hipster Brew Co.&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u4F7F\u7528object-assign\u8BBE\u7F6E\u9ED8\u8BA4\u503C" tabindex="-1">\u4F7F\u7528Object.assign\u8BBE\u7F6E\u9ED8\u8BA4\u503C <a class="header-anchor" href="#\u4F7F\u7528object-assign\u8BBE\u7F6E\u9ED8\u8BA4\u503C" aria-hidden="true">#</a></h2><p><strong>Bad:</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> menuConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&quot;Bar&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">buttonText</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cancellable</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">createMenu</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  config<span class="token punctuation">.</span>title <span class="token operator">=</span> config<span class="token punctuation">.</span>title <span class="token operator">||</span> <span class="token string">&quot;Foo&quot;</span><span class="token punctuation">;</span>
  config<span class="token punctuation">.</span>body <span class="token operator">=</span> config<span class="token punctuation">.</span>body <span class="token operator">||</span> <span class="token string">&quot;Bar&quot;</span><span class="token punctuation">;</span>
  config<span class="token punctuation">.</span>buttonText <span class="token operator">=</span> config<span class="token punctuation">.</span>buttonText <span class="token operator">||</span> <span class="token string">&quot;Baz&quot;</span><span class="token punctuation">;</span>
  config<span class="token punctuation">.</span>cancellable <span class="token operator">=</span>
    config<span class="token punctuation">.</span>cancellable <span class="token operator">!==</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> config<span class="token punctuation">.</span>cancellable <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">createMenu</span><span class="token punctuation">(</span>menuConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>Good:</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> menuConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Order&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// User did not include &#39;body&#39; key</span>
  <span class="token literal-property property">buttonText</span><span class="token operator">:</span> <span class="token string">&quot;Send&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cancellable</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">createMenu</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  config <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Foo&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&quot;Bar&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">buttonText</span><span class="token operator">:</span> <span class="token string">&quot;Baz&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">cancellable</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    config
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// config now equals: {title: &quot;Order&quot;, body: &quot;Bar&quot;, buttonText: &quot;Send&quot;, cancellable: true}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token function">createMenu</span><span class="token punctuation">(</span>menuConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h2 id="\u5BF9\u5165\u53C2\u8FDB\u884C\u89E3\u6784\uFF0C\u89E3\u6784\u4FDD\u5B58\u4E86\u8FD9\u4E9B\u5C5E\u6027\u7684\u4E34\u65F6\u503C-\u5F15\u7528" tabindex="-1">\u5BF9\u5165\u53C2\u8FDB\u884C\u89E3\u6784\uFF0C\u89E3\u6784\u4FDD\u5B58\u4E86\u8FD9\u4E9B\u5C5E\u6027\u7684\u4E34\u65F6\u503C/\u5F15\u7528 <a class="header-anchor" href="#\u5BF9\u5165\u53C2\u8FDB\u884C\u89E3\u6784\uFF0C\u89E3\u6784\u4FDD\u5B58\u4E86\u8FD9\u4E9B\u5C5E\u6027\u7684\u4E34\u65F6\u503C-\u5F15\u7528" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> firstName <span class="token operator">=</span> user<span class="token punctuation">.</span>firstName<span class="token punctuation">;</span>
  <span class="token keyword">const</span> lastName <span class="token operator">=</span> user<span class="token punctuation">.</span>lastName<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> firstName<span class="token punctuation">,</span> lastName <span class="token punctuation">}</span> <span class="token operator">=</span> user<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// best</span>
<span class="token keyword">function</span> <span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> firstName<span class="token punctuation">,</span> lastName <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>firstName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>lastName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5165\u53C2\u907F\u514D\u6570\u7EC4\uFF0C\u91C7\u7528\u5BF9\u8C61" tabindex="-1">\u5165\u53C2\u907F\u514D\u6570\u7EC4\uFF0C\u91C7\u7528\u5BF9\u8C61 <a class="header-anchor" href="#\u5165\u53C2\u907F\u514D\u6570\u7EC4\uFF0C\u91C7\u7528\u5BF9\u8C61" aria-hidden="true">#</a></h2><p>\u5165\u53C2\u6700\u597D\u63A7\u5236\u57283\u4E2A\u4EE5\u5185\uFF0C\u591A\u4E86\u5C31\u91C7\u7528\u5BF9\u8C61</p><p><strong>Bad:</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createMenu</span><span class="token punctuation">(</span><span class="token parameter">title<span class="token punctuation">,</span> body<span class="token punctuation">,</span> buttonText<span class="token punctuation">,</span> cancellable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token function">createMenu</span><span class="token punctuation">(</span><span class="token string">&quot;Foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Bar&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Baz&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre></div><p><strong>Good:</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createMenu</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> title<span class="token punctuation">,</span> body<span class="token punctuation">,</span> buttonText<span class="token punctuation">,</span> cancellable <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token function">createMenu</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;Foo&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&quot;Bar&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">buttonText</span><span class="token operator">:</span> <span class="token string">&quot;Baz&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cancellable</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h2 id="\u4E0D\u8981\u4F7F\u7528arguments\uFF0C\u7528-\u66FF\u4EE3" tabindex="-1">\u4E0D\u8981\u4F7F\u7528arguments\uFF0C\u7528...\u66FF\u4EE3 <a class="header-anchor" href="#\u4E0D\u8981\u4F7F\u7528arguments\uFF0C\u7528-\u66FF\u4EE3" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">concatenateAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> args<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">concatenateAll</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> args<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5165\u53C2\u4E0D\u8981\u542B\u6709\u5F00\u5173\u53C2\u6570" tabindex="-1">\u5165\u53C2\u4E0D\u8981\u542B\u6709\u5F00\u5173\u53C2\u6570 <a class="header-anchor" href="#\u5165\u53C2\u4E0D\u8981\u542B\u6709\u5F00\u5173\u53C2\u6570" aria-hidden="true">#</a></h2><p>\u5F00\u5173\u53C2\u6570\u5C31\u76F8\u5173\u4E8E\u544A\u8BC9\u8FD9\u4E2A\u51FD\u6570\u4E0D\u4EC5\u4EC5\u505A\u4E00\u4EF6\u4E8B\u60C5\u4E86\uFF0C\u4E0D\u7B26\u5408\u5355\u4E00\u539F\u5219\u3002</p><p><strong>Bad:</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createFile</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> temp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>temp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fs<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./temp/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    fs<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>Good:</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createFile</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fs<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createTempFile</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">createFile</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./temp/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u5355\u4E00\u804C\u8D23\uFF0C\u5C3D\u53EF\u80FD\u62C6\u5206" tabindex="-1">\u5355\u4E00\u804C\u8D23\uFF0C\u5C3D\u53EF\u80FD\u62C6\u5206 <a class="header-anchor" href="#\u5355\u4E00\u804C\u8D23\uFF0C\u5C3D\u53EF\u80FD\u62C6\u5206" aria-hidden="true">#</a></h2><p><strong>Bad:</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">emailClients</span><span class="token punctuation">(</span><span class="token parameter">clients</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  clients<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">client</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> clientRecord <span class="token operator">=</span> database<span class="token punctuation">.</span><span class="token function">lookup</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>clientRecord<span class="token punctuation">.</span><span class="token function">isActive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">email</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>Good:</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">emailActiveClients</span><span class="token punctuation">(</span><span class="token parameter">clients</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  clients<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>isActiveClient<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isActiveClient</span><span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> clientRecord <span class="token operator">=</span> database<span class="token punctuation">.</span><span class="token function">lookup</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> clientRecord<span class="token punctuation">.</span><span class="token function">isActive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u51FD\u6570\u540D\u8981\u8BED\u4E49\u5316" tabindex="-1">\u51FD\u6570\u540D\u8981\u8BED\u4E49\u5316 <a class="header-anchor" href="#\u51FD\u6570\u540D\u8981\u8BED\u4E49\u5316" aria-hidden="true">#</a></h2><p><strong>Bad:</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">addToDate</span><span class="token punctuation">(</span><span class="token parameter">date<span class="token punctuation">,</span> month</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// It&#39;s hard to tell from the function name what is added</span>
<span class="token function">addToDate</span><span class="token punctuation">(</span>date<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>Good:</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">addMonthToDate</span><span class="token punctuation">(</span><span class="token parameter">month<span class="token punctuation">,</span> date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">addMonthToDate</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> date<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h2 id="\u63A7\u5236\u62BD\u8C61\u7EA7\u522B\u4E3A\u4E00\u5C42" tabindex="-1">\u63A7\u5236\u62BD\u8C61\u7EA7\u522B\u4E3A\u4E00\u5C42 <a class="header-anchor" href="#\u63A7\u5236\u62BD\u8C61\u7EA7\u522B\u4E3A\u4E00\u5C42" aria-hidden="true">#</a></h2><p>\u5982\u679C\u62BD\u8C61\u7EA7\u522B\u8D85\u8FC7\u4E00\u5C42\uFF0C\u5C31\u5E94\u8BE5\u53E6\u7ACB\u51FD\u6570\u4E86</p><p><strong>Bad:</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">parseBetterJSAlternative</span><span class="token punctuation">(</span><span class="token parameter">code</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token constant">REGEXES</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> statements <span class="token operator">=</span> code<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tokens <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token constant">REGEXES</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">REGEX</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    statements<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">statement</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> ast <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  tokens<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">token</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// lex...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  ast<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">node</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// parse...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>Good:</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">parseBetterJSAlternative</span><span class="token punctuation">(</span><span class="token parameter">code</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> tokens <span class="token operator">=</span> <span class="token function">tokenize</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> syntaxTree <span class="token operator">=</span> <span class="token function">parse</span><span class="token punctuation">(</span>tokens<span class="token punctuation">)</span><span class="token punctuation">;</span>
  syntaxTree<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">node</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// parse...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">tokenize</span><span class="token punctuation">(</span><span class="token parameter">code</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token constant">REGEXES</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> statements <span class="token operator">=</span> code<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tokens <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token constant">REGEXES</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">REGEX</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    statements<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">statement</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      tokens<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> tokens<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">parse</span><span class="token punctuation">(</span><span class="token parameter">tokens</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> syntaxTree <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  tokens<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">token</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    syntaxTree<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> syntaxTree<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u907F\u514D\u9020\u6210\u526F\u4F5C\u7528" tabindex="-1">\u907F\u514D\u9020\u6210\u526F\u4F5C\u7528 <a class="header-anchor" href="#\u907F\u514D\u9020\u6210\u526F\u4F5C\u7528" aria-hidden="true">#</a></h2><p>\u526F\u4F5C\u7528\u5305\u62EC\u4FEE\u6539\u5916\u90E8\u53D8\u91CF\u3001\u6587\u4EF6\u8BFB\u5199\u7B49\u7B49</p><p><strong>Bad:</strong></p><div class="language-js"><pre><code><span class="token comment">// Global variable referenced by following function.</span>
<span class="token comment">// If we had another function that used this name, now it&#39;d be an array and it could break it.</span>
<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&quot;Ryan McDermott&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">splitIntoFirstAndLastName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  name <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">splitIntoFirstAndLastName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;Ryan&#39;, &#39;McDermott&#39;];</span>

</code></pre></div><p><strong>Good:</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">splitIntoFirstAndLastName</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> name<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&quot;Ryan McDermott&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> newName <span class="token operator">=</span> <span class="token function">splitIntoFirstAndLastName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;Ryan McDermott&#39;;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newName<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;Ryan&#39;, &#39;McDermott&#39;];</span>

</code></pre></div><p>\u6CE8\u610F\u6570\u7EC4\u7684\u5F15\u7528\uFF0C\u4E0D\u8981\u76F4\u63A5\u4FEE\u6539\u539F\u6570\u7EC4\uFF1A</p><p><strong>Bad:</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">addItemToCart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">cart<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  cart<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> item<span class="token punctuation">,</span> <span class="token literal-property property">date</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>Good:</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">addItemToCart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">cart<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>cart<span class="token punctuation">,</span> <span class="token punctuation">{</span> item<span class="token punctuation">,</span> <span class="token literal-property property">date</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><h2 id="\u4E0D\u8981\u9020\u6210\u539F\u578B\u6C61\u67D3" tabindex="-1">\u4E0D\u8981\u9020\u6210\u539F\u578B\u6C61\u67D3 <a class="header-anchor" href="#\u4E0D\u8981\u9020\u6210\u539F\u578B\u6C61\u67D3" aria-hidden="true">#</a></h2><p><strong>Bad:</strong></p><div class="language-js"><pre><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">diff</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">diff</span><span class="token punctuation">(</span><span class="token parameter">comparisonArray</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> hash <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>comparisonArray<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">elem</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span>hash<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>Good:</strong></p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">SuperArray</span> <span class="token keyword">extends</span> <span class="token class-name">Array</span> <span class="token punctuation">{</span>
  <span class="token function">diff</span><span class="token punctuation">(</span><span class="token parameter">comparisonArray</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> hash <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>comparisonArray<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">elem</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span>hash<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u5C06\u6761\u4EF6\u8BED\u53E5\u5C01\u88C5" tabindex="-1">\u5C06\u6761\u4EF6\u8BED\u53E5\u5C01\u88C5 <a class="header-anchor" href="#\u5C06\u6761\u4EF6\u8BED\u53E5\u5C01\u88C5" aria-hidden="true">#</a></h2><p><strong>Bad:</strong></p><div class="language-js"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span>fsm<span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token string">&quot;fetching&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span>listNode<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>Good:</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">shouldShowSpinner</span><span class="token punctuation">(</span><span class="token parameter">fsm<span class="token punctuation">,</span> listNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> fsm<span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token string">&quot;fetching&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span>listNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shouldShowSpinner</span><span class="token punctuation">(</span>fsmInstance<span class="token punctuation">,</span> listNodeInstance<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u907F\u514D\u53CD\u6761\u4EF6\u5224\u65AD" tabindex="-1">\u907F\u514D\u53CD\u6761\u4EF6\u5224\u65AD <a class="header-anchor" href="#\u907F\u514D\u53CD\u6761\u4EF6\u5224\u65AD" aria-hidden="true">#</a></h2><p><strong>Bad:</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">isDOMNodeNotPresent</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isDOMNodeNotPresent</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>Good:</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">isDOMNodePresent</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDOMNodePresent</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

</code></pre></div>`,74),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{f as __pageData,g as default};
