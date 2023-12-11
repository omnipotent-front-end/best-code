import{_ as n,c as s,o as a,a as t}from"./app.a8980bfd.js";const m='{"title":"\u4E8B\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"promise\u4E0E\u4E8B\u4EF6\u7ED3\u5408","slug":"promise\u4E0E\u4E8B\u4EF6\u7ED3\u5408"}],"relativePath":"javascript/async/event.md"}',p={},o=t(`<h1 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h1><h2 id="promise\u4E0E\u4E8B\u4EF6\u7ED3\u5408" tabindex="-1">promise\u4E0E\u4E8B\u4EF6\u7ED3\u5408 <a class="header-anchor" href="#promise\u4E0E\u4E8B\u4EF6\u7ED3\u5408" aria-hidden="true">#</a></h2><p>\u67D0\u4E9Bapi\u662F\u57FA\u4E8E\u4E8B\u4EF6\u7CFB\u7EDF\u7684\uFF0C\u5982\u4F55\u5C01\u88C5\u6210promise\u5462\uFF1F\u53C2\u8003<a href="https://github.com/FunnyLiu/execa/blob/readsource/lib/promise.js#L23" target="_blank" rel="noopener noreferrer">execa</a></p><div class="language-js"><pre><code><span class="token comment">// \u5C06child_process.spawn\u5C01\u88C5\u4E3Apromise</span>
<span class="token comment">// Use promises instead of \`child_process\` events</span>
<span class="token keyword">const</span> <span class="token function-variable function">getSpawnedPromise</span> <span class="token operator">=</span> <span class="token parameter">spawned</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		spawned<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;exit&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">exitCode<span class="token punctuation">,</span> signal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>exitCode<span class="token punctuation">,</span> signal<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		spawned<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>spawned<span class="token punctuation">.</span>stdin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			spawned<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				<span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,4),e=[o];function c(u,i,r,l,k,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{m as __pageData,h as default};