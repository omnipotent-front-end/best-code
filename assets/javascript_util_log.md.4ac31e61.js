import{_ as n,c as s,o as a,a as p}from"./app.d572062b.js";const v='{"title":"\u65E5\u5FD7","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B80\u6613\u7684\u65E5\u5FD7\u7C7B","slug":"\u7B80\u6613\u7684\u65E5\u5FD7\u7C7B"}],"relativePath":"javascript/util/log.md"}',t={},o=p(`<h1 id="\u65E5\u5FD7" tabindex="-1">\u65E5\u5FD7 <a class="header-anchor" href="#\u65E5\u5FD7" aria-hidden="true">#</a></h1><h2 id="\u7B80\u6613\u7684\u65E5\u5FD7\u7C7B" tabindex="-1">\u7B80\u6613\u7684\u65E5\u5FD7\u7C7B <a class="header-anchor" href="#\u7B80\u6613\u7684\u65E5\u5FD7\u7C7B" aria-hidden="true">#</a></h2><p>\u8BE5\u65B9\u6848\u57FA\u4E8Etypescript</p><p><a href="https://github.com/FunnyLiu/vscode-wakatime/blob/readsource/src/logger.ts#L1" target="_blank" rel="noopener noreferrer">\u53C2\u8003vscode-waketime</a></p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> LogLevel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./constants&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \u4E00\u4E2A\u7B80\u5355\u7684\u65E5\u5FD7class</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token literal-property property">level</span><span class="token operator">:</span> LogLevel<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">level</span><span class="token operator">:</span> LogLevel</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setLevel</span><span class="token punctuation">(</span>level<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token function">getLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> LogLevel <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>level<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token function">setLevel</span><span class="token punctuation">(</span>level<span class="token operator">:</span> LogLevel<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>level <span class="token operator">=</span> level<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token function">log</span><span class="token punctuation">(</span>level<span class="token operator">:</span> LogLevel<span class="token punctuation">,</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>level <span class="token operator">&gt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>level<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      msg <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[WakaTime][</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>LogLevel<span class="token punctuation">[</span>level<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">] </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>msg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>level <span class="token operator">==</span> LogLevel<span class="token punctuation">.</span><span class="token constant">DEBUG</span><span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>level <span class="token operator">==</span> LogLevel<span class="token punctuation">.</span><span class="token constant">INFO</span><span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>level <span class="token operator">==</span> LogLevel<span class="token punctuation">.</span><span class="token constant">WARN</span><span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>level <span class="token operator">==</span> LogLevel<span class="token punctuation">.</span><span class="token constant">ERROR</span><span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token function">debug</span><span class="token punctuation">(</span>msg<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>LogLevel<span class="token punctuation">.</span><span class="token constant">DEBUG</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token function">info</span><span class="token punctuation">(</span>msg<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>LogLevel<span class="token punctuation">.</span><span class="token constant">INFO</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token function">warn</span><span class="token punctuation">(</span>msg<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>LogLevel<span class="token punctuation">.</span><span class="token constant">WARN</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token function">error</span><span class="token punctuation">(</span>msg<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>LogLevel<span class="token punctuation">.</span><span class="token constant">ERROR</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre></div>`,5),e=[o];function c(l,u,k,i,r,d){return a(),s("div",null,e)}var y=n(t,[["render",c]]);export{v as __pageData,y as default};
