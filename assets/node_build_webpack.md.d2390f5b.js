import{_ as n,c as s,o as a,a as p}from"./app.d572062b.js";const d='{"title":"webpack","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5168\u91CF\u914D\u7F6E","slug":"\u5168\u91CF\u914D\u7F6E"}],"relativePath":"node/build/webpack.md"}',t={},o=p(`<h1 id="webpack" tabindex="-1">webpack <a class="header-anchor" href="#webpack" aria-hidden="true">#</a></h1><h2 id="\u5168\u91CF\u914D\u7F6E" tabindex="-1">\u5168\u91CF\u914D\u7F6E <a class="header-anchor" href="#\u5168\u91CF\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">,</span> <span class="token comment">// &quot;production&quot; | &quot;development&quot; | &quot;none&quot;</span>
  <span class="token comment">// Chosen mode tells webpack to use its built-in optimizations accordingly.</span>

  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./app/entry&quot;</span><span class="token punctuation">,</span> <span class="token comment">// string | object | array</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./app/entry1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./app/entry2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&quot;./app/entry-a&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./app/entry-b1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./app/entry-b2&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8FD9\u91CC\u5E94\u7528\u7A0B\u5E8F\u5F00\u59CB\u6267\u884C</span>
  <span class="token comment">// webpack \u5F00\u59CB\u6253\u5305</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// webpack \u5982\u4F55\u8F93\u51FA\u7ED3\u679C\u7684\u76F8\u5173\u9009\u9879</span>

    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// string</span>
    <span class="token comment">// \u6240\u6709\u8F93\u51FA\u6587\u4EF6\u7684\u76EE\u6807\u8DEF\u5F84</span>
    <span class="token comment">// \u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84\uFF08\u4F7F\u7528 Node.js \u7684 path \u6A21\u5757\uFF09</span>

    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;bundle.js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// string</span>
    <span class="token comment">// \u300C\u5165\u53E3\u5206\u5757(entry chunk)\u300D\u7684\u6587\u4EF6\u540D\u6A21\u677F\uFF08\u51FA\u53E3\u5206\u5757\uFF1F\uFF09</span>

    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&quot;/assets/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// string</span>
    <span class="token comment">// \u8F93\u51FA\u89E3\u6790\u6587\u4EF6\u7684\u76EE\u5F55\uFF0Curl \u76F8\u5BF9\u4E8E HTML \u9875\u9762</span>

    <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token string">&quot;MyLibrary&quot;</span><span class="token punctuation">,</span> <span class="token comment">// string,</span>
    <span class="token comment">// \u5BFC\u51FA\u5E93(exported library)\u7684\u540D\u79F0</span>

    <span class="token literal-property property">libraryTarget</span><span class="token operator">:</span> <span class="token string">&quot;umd&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u901A\u7528\u6A21\u5757\u5B9A\u4E49</span>
    <span class="token comment">// \u5BFC\u51FA\u5E93(exported library)\u7684\u7C7B\u578B</span>

    <span class="token comment">/* \u9AD8\u7EA7\u8F93\u51FA\u914D\u7F6E\uFF08\u70B9\u51FB\u663E\u793A\uFF09 */</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5173\u4E8E\u6A21\u5757\u914D\u7F6E</span>

    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// \u6A21\u5757\u89C4\u5219\uFF08\u914D\u7F6E loader\u3001\u89E3\u6790\u5668\u7B49\u9009\u9879\uFF09</span>

      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.jsx?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;app&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;app/demo-files&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8FD9\u91CC\u662F\u5339\u914D\u6761\u4EF6\uFF0C\u6BCF\u4E2A\u9009\u9879\u90FD\u63A5\u6536\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u6216\u5B57\u7B26\u4E32</span>
        <span class="token comment">// test \u548C include \u5177\u6709\u76F8\u540C\u7684\u4F5C\u7528\uFF0C\u90FD\u662F\u5FC5\u987B\u5339\u914D\u9009\u9879</span>
        <span class="token comment">// exclude \u662F\u5FC5\u4E0D\u5339\u914D\u9009\u9879\uFF08\u4F18\u5148\u4E8E test \u548C include\uFF09</span>
        <span class="token comment">// \u6700\u4F73\u5B9E\u8DF5\uFF1A</span>
        <span class="token comment">// - \u53EA\u5728 test \u548C \u6587\u4EF6\u540D\u5339\u914D \u4E2D\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F</span>
        <span class="token comment">// - \u5728 include \u548C exclude \u4E2D\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u6570\u7EC4</span>
        <span class="token comment">// - \u5C3D\u91CF\u907F\u514D exclude\uFF0C\u66F4\u503E\u5411\u4E8E\u4F7F\u7528 include</span>

        <span class="token literal-property property">issuer</span><span class="token operator">:</span> <span class="token punctuation">{</span> test<span class="token punctuation">,</span> include<span class="token punctuation">,</span> exclude <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// issuer \u6761\u4EF6\uFF08\u5BFC\u5165\u6E90\uFF09</span>

        <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&quot;pre&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u6807\u8BC6\u5E94\u7528\u8FD9\u4E9B\u89C4\u5219\uFF0C\u5373\u4F7F\u89C4\u5219\u8986\u76D6\uFF08\u9AD8\u7EA7\u9009\u9879\uFF09</span>

        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5E94\u8BE5\u5E94\u7528\u7684 loader\uFF0C\u5B83\u76F8\u5BF9\u4E0A\u4E0B\u6587\u89E3\u6790</span>
        <span class="token comment">// \u4E3A\u4E86\u66F4\u6E05\u6670\uFF0C\`-loader\` \u540E\u7F00\u5728 webpack 2 \u4E2D\u4E0D\u518D\u662F\u53EF\u9009\u7684</span>
        <span class="token comment">// \u67E5\u770B webpack 1 \u5347\u7EA7\u6307\u5357\u3002</span>

        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;es2015&quot;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// loader \u7684\u53EF\u9009\u9879</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.html$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token string">&quot;\\.html$&quot;</span>

        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// \u5E94\u7528\u591A\u4E2A loader \u548C\u9009\u9879</span>
          <span class="token string">&quot;htmllint-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;html-loader&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token comment">/* ... */</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token punctuation">{</span> <span class="token literal-property property">oneOf</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">/* rules */</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// \u53EA\u4F7F\u7528\u8FD9\u4E9B\u5D4C\u5957\u89C4\u5219\u4E4B\u4E00</span>

      <span class="token punctuation">{</span> <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">/* rules */</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// \u4F7F\u7528\u6240\u6709\u8FD9\u4E9B\u5D4C\u5957\u89C4\u5219\uFF08\u5408\u5E76\u53EF\u7528\u6761\u4EF6\uFF09</span>

      <span class="token punctuation">{</span> <span class="token literal-property property">resource</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">and</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">/* \u6761\u4EF6 */</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// \u4EC5\u5F53\u6240\u6709\u6761\u4EF6\u90FD\u5339\u914D\u65F6\u624D\u5339\u914D</span>

      <span class="token punctuation">{</span> <span class="token literal-property property">resource</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">or</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">/* \u6761\u4EF6 */</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">resource</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">/* \u6761\u4EF6 */</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// \u4EFB\u610F\u6761\u4EF6\u5339\u914D\u65F6\u5339\u914D\uFF08\u9ED8\u8BA4\u4E3A\u6570\u7EC4\uFF09</span>

      <span class="token punctuation">{</span> <span class="token literal-property property">resource</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">not</span><span class="token operator">:</span> <span class="token comment">/* \u6761\u4EF6 */</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
      <span class="token comment">// \u6761\u4EF6\u4E0D\u5339\u914D\u65F6\u5339\u914D</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">/* \u9AD8\u7EA7\u6A21\u5757\u914D\u7F6E\uFF08\u70B9\u51FB\u5C55\u793A\uFF09 */</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u89E3\u6790\u6A21\u5757\u8BF7\u6C42\u7684\u9009\u9879</span>
    <span class="token comment">// \uFF08\u4E0D\u9002\u7528\u4E8E\u5BF9 loader \u89E3\u6790\uFF09</span>

    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">,</span>
      path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;app&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7528\u4E8E\u67E5\u627E\u6A21\u5757\u7684\u76EE\u5F55</span>

    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.json&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.jsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.css&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4F7F\u7528\u7684\u6269\u5C55\u540D</span>

    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6A21\u5757\u522B\u540D\u5217\u8868</span>

      <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;new-module&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u8D77\u522B\u540D\uFF1A&quot;module&quot; -&gt; &quot;new-module&quot; \u548C &quot;module/path/file&quot; -&gt; &quot;new-module/path/file&quot;</span>

      <span class="token string-property property">&quot;only-module$&quot;</span><span class="token operator">:</span> <span class="token string">&quot;new-module&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u8D77\u522B\u540D &quot;only-module&quot; -&gt; &quot;new-module&quot;\uFF0C\u4F46\u4E0D\u5339\u914D &quot;only-module/path/file&quot; -&gt; &quot;new-module/path/file&quot;</span>

      <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;app/third/module.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// \u8D77\u522B\u540D &quot;module&quot; -&gt; &quot;./app/third/module.js&quot; \u548C &quot;module/file&quot; \u4F1A\u5BFC\u81F4\u9519\u8BEF</span>
      <span class="token comment">// \u6A21\u5757\u522B\u540D\u76F8\u5BF9\u4E8E\u5F53\u524D\u4E0A\u4E0B\u6587\u5BFC\u5165</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">/* \u53EF\u4F9B\u9009\u62E9\u7684\u522B\u540D\u8BED\u6CD5\uFF08\u70B9\u51FB\u5C55\u793A\uFF09 */</span>

    <span class="token comment">/* \u9AD8\u7EA7\u89E3\u6790\u9009\u9879\uFF08\u70B9\u51FB\u5C55\u793A\uFF09 */</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">performance</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">hints</span><span class="token operator">:</span> <span class="token string">&quot;warning&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u679A\u4E3E</span>
    <span class="token literal-property property">maxAssetSize</span><span class="token operator">:</span> <span class="token number">200000</span><span class="token punctuation">,</span> <span class="token comment">// \u6574\u6570\u7C7B\u578B\uFF08\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\uFF09</span>
    <span class="token literal-property property">maxEntrypointSize</span><span class="token operator">:</span> <span class="token number">400000</span><span class="token punctuation">,</span> <span class="token comment">// \u6574\u6570\u7C7B\u578B\uFF08\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\uFF09</span>
    <span class="token function-variable function">assetFilter</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">assetFilename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u63D0\u4F9B\u8D44\u6E90\u6587\u4EF6\u540D\u7684\u65AD\u8A00\u51FD\u6570</span>
      <span class="token keyword">return</span> assetFilename<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;.css&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> assetFilename<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&quot;source-map&quot;</span><span class="token punctuation">,</span> <span class="token comment">// enum</span>
  <span class="token comment">// \u901A\u8FC7\u5728\u6D4F\u89C8\u5668\u8C03\u8BD5\u5DE5\u5177(browser devtools)\u4E2D\u6DFB\u52A0\u5143\u4FE1\u606F(meta info)\u589E\u5F3A\u8C03\u8BD5</span>
  <span class="token comment">// \u727A\u7272\u4E86\u6784\u5EFA\u901F\u5EA6\u7684 \`source-map&#39; \u662F\u6700\u8BE6\u7EC6\u7684\u3002</span>

  <span class="token literal-property property">context</span><span class="token operator">:</span> __dirname<span class="token punctuation">,</span> <span class="token comment">// string\uFF08\u7EDD\u5BF9\u8DEF\u5F84\uFF01\uFF09</span>
  <span class="token comment">// webpack \u7684\u4E3B\u76EE\u5F55</span>
  <span class="token comment">// entry \u548C module.rules.loader \u9009\u9879</span>
  <span class="token comment">// \u76F8\u5BF9\u4E8E\u6B64\u76EE\u5F55\u89E3\u6790</span>

  <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;web&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u679A\u4E3E</span>
  <span class="token comment">// \u5305(bundle)\u5E94\u8BE5\u8FD0\u884C\u7684\u73AF\u5883</span>
  <span class="token comment">// \u66F4\u6539 \u5757\u52A0\u8F7D\u884C\u4E3A(chunk loading behavior) \u548C \u53EF\u7528\u6A21\u5757(available module)</span>

  <span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;react&quot;</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^@angular\\/</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4E0D\u8981\u9075\u5FAA/\u6253\u5305\u8FD9\u4E9B\u6A21\u5757\uFF0C\u800C\u662F\u5728\u8FD0\u884C\u65F6\u4ECE\u73AF\u5883\u4E2D\u8BF7\u6C42\u4ED6\u4EEC</span>

  <span class="token literal-property property">stats</span><span class="token operator">:</span> <span class="token string">&quot;errors-only&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u7CBE\u786E\u63A7\u5236\u8981\u663E\u793A\u7684 bundle \u4FE1\u606F</span>

  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// proxy URLs to backend development server</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;public&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// boolean | string | array, static file location</span>
    <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// enable gzip compression</span>
    <span class="token literal-property property">historyApiFallback</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// true for index.html upon 404, object for multiple paths</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// hot module replacement. Depends on HotModuleReplacementPlugin</span>
    <span class="token literal-property property">https</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// true for self-signed, object for cert authority</span>
    <span class="token literal-property property">noInfo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// only errors &amp; warns on hot reload</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// \u9644\u52A0\u63D2\u4EF6\u5217\u8868</span>


  <span class="token comment">/* \u9AD8\u7EA7\u914D\u7F6E\uFF08\u70B9\u51FB\u5C55\u793A\uFF09 */</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3),e=[o];function c(l,r,u,k,i,m){return a(),s("div",null,e)}var q=n(t,[["render",c]]);export{d as __pageData,q as default};
