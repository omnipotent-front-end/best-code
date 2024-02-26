import{_ as n,c as s,o as a,a as t}from"./app.fc70ffd8.js";const d='{"title":"\u9AD8\u7EA7\u8BED\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"defer","slug":"defer"},{"level":2,"title":"panic\u548Crecover","slug":"panic\u548Crecover"},{"level":2,"title":"\u65B9\u6CD5method","slug":"\u65B9\u6CD5method"},{"level":2,"title":"\u63A5\u53E3interface","slug":"\u63A5\u53E3interface"},{"level":2,"title":"goroutine","slug":"goroutine"},{"level":2,"title":"channel","slug":"channel"},{"level":2,"title":"sync","slug":"sync"}],"relativePath":"go/grammar/better.md"}',p={},o=t(`<h1 id="\u9AD8\u7EA7\u8BED\u6CD5" tabindex="-1">\u9AD8\u7EA7\u8BED\u6CD5 <a class="header-anchor" href="#\u9AD8\u7EA7\u8BED\u6CD5" aria-hidden="true">#</a></h1><h2 id="defer" tabindex="-1">defer <a class="header-anchor" href="#defer" aria-hidden="true">#</a></h2><h1 id="defer-1" tabindex="-1">defer <a class="header-anchor" href="#defer-1" aria-hidden="true">#</a></h1><p>\u5EF6\u8FDF\u51FD\u6570\u8C03\u7528\uFF0Cdefer \u540E\u8FB9\u4F1A\u63A5\u4E00\u4E2A\u51FD\u6570\uFF0C\u4F46\u8BE5\u51FD\u6570\u4E0D\u4F1A\u7ACB\u523B\u88AB\u6267\u884C\uFF0C\u800C\u662F\u7B49\u5230\u5305\u542B\u5B83\u7684\u7A0B\u5E8F\u8FD4\u56DE\u65F6\uFF08\u5305\u542B\u5B83\u7684\u51FD\u6570\u6267\u884C\u4E86 return \u8BED\u53E5\u3001\u8FD0\u884C\u5230\u51FD\u6570\u7ED3\u5C3E\u81EA\u52A8\u8FD4\u56DE\u3001\u5BF9\u5E94\u7684 goroutine panic\uFF09\uFF0Cdefer \u51FD\u6570\u624D\u4F1A\u88AB\u6267\u884C\u3002</p><p>\u901A\u5E38\u7528\u4E8E\u8D44\u6E90\u91CA\u653E\u3001\u6253\u5370\u65E5\u5FD7\u3001\u5F02\u5E38\u6355\u83B7\u7B49\u3002</p><p><strong>\u4F7F\u7528 defer \u8BED\u53E5\u8FDB\u884C\u5EF6\u8FDF\u8C03\u7528\uFF0C\u7528\u6765\u5173\u95ED\u6216\u91CA\u653E\u8D44\u6E90</strong>\u3002</p><p>\u4EE3\u7801\uFF1A</p><div class="language-go"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// defer \u8BED\u53E5\u7684\u6267\u884C\u662F\u6309\u8C03\u7528 defer \u8BED\u53E5\u7684\u5012\u5E8F\u6267\u884C\u3002</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;first&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 5.  first</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;second&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 4.  second</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;done&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 1. done</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">triple</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//3. 12</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">double</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>result <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// defer \u8BED\u53E5\u5728 return \u8BED\u53E5\u4E4B\u540E\u6267\u884C</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;double(%d) = %d\\n&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> result<span class="token punctuation">)</span> <span class="token comment">//2. double(4) = 8</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> x <span class="token operator">+</span> x
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">triple</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>result <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		result <span class="token operator">+=</span> x
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> <span class="token function">double</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="panic\u548Crecover" tabindex="-1">panic\u548Crecover <a class="header-anchor" href="#panic\u548Crecover" aria-hidden="true">#</a></h2><p><strong>\u4F7F\u7528 panic \u548C recover \u6765\u629B\u51FA\u9519\u8BEF\u548C\u6062\u590D</strong>\u3002</p><p>\u4F7F\u7528 panic \u4E00\u822C\u6709\u4E24\u79CD\u60C5\u51B5\uFF1A</p><p>1.\u7A0B\u5E8F\u9047\u5230\u65E0\u6CD5\u6267\u884C\u7684\u9519\u8BEF\u65F6\uFF0C\u4E3B\u52A8\u8C03\u7528 panic \u7ED3\u675F\u8FD0\u884C\uFF1B</p><p>2.\u5728\u8C03\u8BD5\u7A0B\u5E8F\u65F6\uFF0C\u4E3B\u52A8\u8C03\u7528 panic \u7ED3\u675F\u8FD0\u884C\uFF0C\u6839\u636E\u629B\u51FA\u7684\u9519\u8BEF\u4FE1\u606F\u6765\u5B9A\u4F4D\u95EE\u9898\u3002</p><p>\u4E3A\u4E86\u7A0B\u5E8F\u7684\u5065\u58EE\u6027\uFF0C\u53EF\u4EE5\u4F7F\u7528 recover \u6355\u83B7\u9519\u8BEF\uFF0C\u6062\u590D\u7A0B\u5E8F\u8FD0\u884C\u3002</p><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u5728\u7A0B\u5E8F\u91CC\u8BB0\u5F55\u9519\u8BEF\u65E5\u5FD7\uFF0C\u5C31\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u5728\u78B0\u5230\u5F02\u5E38\u65F6\u5FEB\u901F\u5B9A\u4F4D\u95EE\u9898\u3002</p><p>\u4F46\u8FD8\u6709\u4E00\u4E9B\u9519\u8BEF\u6BD4\u8F83\u4E25\u91CD\u7684\uFF0C\u6BD4\u5982\u6570\u7EC4\u8D8A\u754C\u8BBF\u95EE\uFF0C\u7A0B\u5E8F\u4F1A\u4E3B\u52A8\u8C03\u7528 panic \u6765\u629B\u51FA\u5F02\u5E38\uFF0C\u7136\u540E\u7A0B\u5E8F\u9000\u51FA\u3002</p><p>\u5982\u679C\u4E0D\u60F3\u7A0B\u5E8F\u9000\u51FA\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4F7F\u7528 recover \u51FD\u6570\u6765\u6355\u83B7\u5E76\u6062\u590D\u3002</p><p>\u611F\u89C9\u633A\u4E0D\u597D\u7406\u89E3\u7684\uFF0C\u4F46\u4ED4\u7EC6\u60F3\u60F3\u5176\u5B9E\u548C try-catch \u4E5F\u6CA1\u4EC0\u4E48\u533A\u522B\u3002</p><p>\u4EE3\u7801\uFF1A</p><div class="language-go"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">G</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">G</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span> <span class="token comment">//4.  c</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7EE7\u7EED\u6267\u884C&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 3.  \u7EE7\u7EED\u6267\u884C</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6355\u83B7\u5F02\u5E38:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span> <span class="token comment">// 1.  \u6355\u83B7\u5F02\u5E38\uFF1Aa</span>
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 2.  b</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u65B9\u6CD5method" tabindex="-1">\u65B9\u6CD5method <a class="header-anchor" href="#\u65B9\u6CD5method" aria-hidden="true">#</a></h2><p>\u65B9\u6CD5\u53EF\u4EE5\u770B\u4F5C\u662F\u67D0\u79CD<strong>\u7279\u5B9A\u7C7B\u578B\u7684\u51FD\u6570</strong>\uFF0C\u662F Go \u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u7684\u7B2C\u4E00\u6B65\u3002\u7528\u597D\u65B9\u6CD5\uFF0C\u5177\u5907\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u601D\u60F3\u662F\u5173\u952E\u3002</p><p>\u65B9\u6CD5\u7684\u58F0\u660E\u548C\u51FD\u6570\u7C7B\u4F3C\uFF0C\u4ED6\u4EEC\u7684\u533A\u522B\u662F\uFF1A\u65B9\u6CD5\u5728\u5B9A\u4E49\u7684\u65F6\u5019\uFF0C\u4F1A\u5728 func \u548C\u65B9\u6CD5\u540D\u4E4B\u95F4\u589E\u52A0\u4E00\u4E2A\u53C2\u6570\uFF0C\u8FD9\u4E2A\u53C2\u6570\u5C31\u662F\u63A5\u6536\u8005\u3002</p><p>\u63A5\u6536\u8005\u6709\u4E24\u79CD\u7C7B\u578B\uFF1A\u503C\u63A5\u6536\u8005\u548C\u6307\u9488\u63A5\u6536\u8005\u3002\u4E0D\u7BA1\u662F\u4F7F\u7528\u503C\u63A5\u6536\u8005\uFF0C\u8FD8\u662F\u6307\u9488\u63A5\u6536\u8005\uFF0C\u4E00\u5B9A\u8981\u641E\u6E05\u695A\u7C7B\u578B\u7684\u672C\u8D28\uFF1A\u5BF9\u7C7B\u578B\u8FDB\u884C\u64CD\u4F5C\u7684\u65F6\u5019\uFF0C\u662F\u8981\u6539\u53D8\u5F53\u524D\u503C\uFF0C\u8FD8\u662F\u8981\u521B\u5EFA\u4E00\u4E2A\u65B0\u503C\u8FDB\u884C\u8FD4\u56DE\uFF1F\u8FD9\u4E9B\u5C31\u53EF\u4EE5\u51B3\u5B9A\u6211\u4EEC\u662F\u91C7\u7528\u503C\u4F20\u9012\uFF0C\u8FD8\u662F\u6307\u9488\u4F20\u9012\u3002</p><p>\u6700\u540E\u5C31\u662F\u65B9\u6CD5\u7684\u8C03\u7528\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 . \u64CD\u4F5C\u7B26\u8C03\u7528\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528\u65B9\u6CD5\u53D8\u91CF\u548C\u65B9\u6CD5\u8868\u8FBE\u5F0F\u3002</p><p>\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-go"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Point <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	x<span class="token punctuation">,</span> y <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	p <span class="token operator">:=</span> Person<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">}</span>

	<span class="token comment">// \u8C03\u7528\u65B9\u6CD5</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 1. person name is zhangsan</span>

	<span class="token comment">// \u503C\u63A5\u6536\u8005\uFF0C\u4E0D\u4F1A\u6539\u53D8\u539F\u59CB\u503C</span>
	p<span class="token punctuation">.</span><span class="token function">Modify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 2. person name is zhangsan</span>
	<span class="token comment">// \u7B49\u4EF7\u4E8E</span>
	<span class="token punctuation">(</span><span class="token operator">&amp;</span>p<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Modify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 3. person name is zhangsan</span>

	<span class="token comment">// \u6307\u9488\u63A5\u6536\u8005\uFF0C\u4F1A\u6539\u53D8\u539F\u59CB\u503C</span>
	p<span class="token punctuation">.</span><span class="token function">ModifyP</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 4. person name is lisi</span>
	<span class="token comment">// \u7B49\u4EF7\u4E8E</span>
	<span class="token punctuation">(</span><span class="token operator">&amp;</span>p<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ModifyP</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 5. person name is lisi</span>

	<span class="token comment">// \u65B9\u6CD5\u53D8\u91CF</span>
	p1 <span class="token operator">:=</span> Point<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span>
	q1 <span class="token operator">:=</span> Point<span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
	f <span class="token operator">:=</span> p1<span class="token punctuation">.</span>Add
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">f</span><span class="token punctuation">(</span>q1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 6. {4 6}</span>

	<span class="token comment">// \u65B9\u6CD5\u8868\u8FBE\u5F0F</span>
	f1 <span class="token operator">:=</span> Point<span class="token punctuation">.</span>Add
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">f1</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span> q1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 7. {4 6}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p Person<span class="token punctuation">)</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token string">&quot;person name is &quot;</span> <span class="token operator">+</span> p<span class="token punctuation">.</span>name
<span class="token punctuation">}</span>

<span class="token comment">// \u65B9\u6CD5\u5728\u5B9A\u4E49\u7684\u65F6\u5019\uFF0C\u4F1A\u5728 func \u548C\u65B9\u6CD5\u540D\u4E4B\u95F4\u589E\u52A0\u4E00\u4E2A\u53C2\u6570\uFF0C</span>
<span class="token comment">// \u8FD9\u4E2A\u53C2\u6570\u5C31\u662F\u63A5\u6536\u8005</span>
<span class="token comment">// \u5206\u4E3A\u503C\u63A5\u6536\u8005</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p Person<span class="token punctuation">)</span> <span class="token function">Modify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	p<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;lisi&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u548C\u6307\u9488\u63A5\u6536\u8005</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>p <span class="token operator">*</span>Person<span class="token punctuation">)</span> <span class="token function">ModifyP</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	p<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;lisi&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p Point<span class="token punctuation">)</span> <span class="token function">Add</span><span class="token punctuation">(</span>q Point<span class="token punctuation">)</span> Point <span class="token punctuation">{</span>
	<span class="token keyword">return</span> Point<span class="token punctuation">{</span>p<span class="token punctuation">.</span>x <span class="token operator">+</span> q<span class="token punctuation">.</span>x<span class="token punctuation">,</span> p<span class="token punctuation">.</span>y <span class="token operator">+</span> q<span class="token punctuation">.</span>y<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u63A5\u53E3interface" tabindex="-1">\u63A5\u53E3interface <a class="header-anchor" href="#\u63A5\u53E3interface" aria-hidden="true">#</a></h2><p>\u4E4B\u524D\u4ECB\u7ECD\u7684\u7C7B\u578B\u90FD\u662F\u5177\u4F53\u7C7B\u578B\uFF0C\u800C\u63A5\u53E3\u662F\u4E00\u79CD\u62BD\u8C61\u7C7B\u578B\uFF0C\u662F\u591A\u4E2A\u65B9\u6CD5\u58F0\u660E\u7684\u96C6\u5408\u3002\u5728 Go \u4E2D\uFF0C\u53EA\u8981\u76EE\u6807\u7C7B\u578B\u5B9E\u73B0\u4E86\u63A5\u53E3\u8981\u6C42\u7684\u6240\u6709\u65B9\u6CD5\uFF0C\u6211\u4EEC\u5C31\u8BF4\u5B83\u5B9E\u73B0\u4E86\u8FD9\u4E2A\u63A5\u53E3\u3002</p><p>\u63A5\u53E3\u8D4B\u503C\uFF0C\u7A7A\u63A5\u53E3\uFF0C\u7C7B\u578B\u65AD\u8A00\u548C\u7C7B\u578B\u67E5\u8BE2</p><p>\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-go"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">// \u5B9A\u4E49\u63A5\u53E3\uFF0C\u5305\u542B Eat \u65B9\u6CD5</span>
<span class="token keyword">type</span> Duck <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Duck1 <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">Walk</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9A\u4E49 Cat \u7ED3\u6784\u4F53\uFF0C\u5E76\u5B9E\u73B0 Eat \u65B9\u6CD5</span>
<span class="token keyword">type</span> Cat <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c <span class="token operator">*</span>Cat<span class="token punctuation">)</span> <span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;cat eat&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9A\u4E49 Dog \u7ED3\u6784\u4F53\uFF0C\u5E76\u5B9E\u73B0 Eat \u65B9\u6CD5</span>
<span class="token keyword">type</span> Dog <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>Dog<span class="token punctuation">)</span> <span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;dog eat&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d <span class="token operator">*</span>Dog<span class="token punctuation">)</span> <span class="token function">Walk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;dog walk&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> c Duck <span class="token operator">=</span> <span class="token operator">&amp;</span>Cat<span class="token punctuation">{</span><span class="token punctuation">}</span>
	c<span class="token punctuation">.</span><span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1. cat eat</span>

	<span class="token keyword">var</span> d Duck <span class="token operator">=</span> <span class="token operator">&amp;</span>Dog<span class="token punctuation">{</span><span class="token punctuation">}</span>
	d<span class="token punctuation">.</span><span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 2. do eat</span>

	s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>Duck<span class="token punctuation">{</span>
		<span class="token operator">&amp;</span>Cat<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token operator">&amp;</span>Dog<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> n <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>
		n<span class="token punctuation">.</span><span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 3. cat eat 4. dog eat</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">var</span> c1 Duck1 <span class="token operator">=</span> <span class="token operator">&amp;</span>Dog<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token keyword">var</span> c2 Duck <span class="token operator">=</span> c1
	c2<span class="token punctuation">.</span><span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 5. dog eat</span>

	<span class="token comment">// \u7C7B\u578B\u65AD\u8A00</span>
	<span class="token keyword">var</span> n <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token number">55</span>
	<span class="token function">assert</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token comment">// 6. 55</span>
	<span class="token keyword">var</span> n1 <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span>
	<span class="token comment">// assert(n1) // panic: interface conversion: interface {} is string, not int</span>
	<span class="token function">assertFlag</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span> <span class="token comment">// \u4E0D\u662Fint\u7C7B\u578B\uFF0C\u4E0D\u4F1A\u8F93\u51FA</span>
	<span class="token comment">// \u7C7B\u578B\u65AD\u8A00</span>
	<span class="token function">assertInterface</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// 7.  &amp;{}</span>

	<span class="token comment">// \u7C7B\u578B\u67E5\u8BE2</span>
	<span class="token function">searchType</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>         <span class="token comment">// 8. Int: 50</span>
	<span class="token function">searchType</span><span class="token punctuation">(</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 9. String: zhangsan</span>
	<span class="token function">searchType</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span>         <span class="token comment">// 10. dog eat</span>
	<span class="token function">searchType</span><span class="token punctuation">(</span><span class="token number">50.1</span><span class="token punctuation">)</span>       <span class="token comment">// 11.  Unknown type</span>

	<span class="token comment">// \u7A7A\u63A5\u53E3</span>
	s1 <span class="token operator">:=</span> <span class="token string">&quot;Hello World&quot;</span>
	i <span class="token operator">:=</span> <span class="token number">50</span>
	strt <span class="token operator">:=</span> <span class="token keyword">struct</span> <span class="token punctuation">{</span>
		name <span class="token builtin">string</span>
	<span class="token punctuation">}</span><span class="token punctuation">{</span>
		name<span class="token punctuation">:</span> <span class="token string">&quot;AlwaysBeta&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token function">test</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>   <span class="token comment">// Type = string, value = Hello World</span>
	<span class="token function">test</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>    <span class="token comment">// Type = int, value = 50</span>
	<span class="token function">test</span><span class="token punctuation">(</span>strt<span class="token punctuation">)</span> <span class="token comment">// Type = struct { name string }, value = {AlwaysBeta}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">assert</span><span class="token punctuation">(</span>i <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u7C7B\u578B\u65AD\u8A00\u662F\u4F5C\u7528\u5728\u63A5\u53E3\u503C\u4E0A\u7684\u64CD\u4F5C\uFF0Cx.(T)</span>
	<span class="token comment">// \u5982\u679C\u662F\uFF0C\u5219\u8F93\u51FA x \u7684\u503C\uFF1B\u5982\u679C\u4E0D\u662F\uFF0C\u7A0B\u5E8F\u76F4\u63A5 panic\u3002</span>
	s <span class="token operator">:=</span> i<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">assertInterface</span><span class="token punctuation">(</span>i <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u7C7B\u578B\u65AD\u8A00\u662F\u4F5C\u7528\u5728\u63A5\u53E3\u503C\u4E0A\u7684\u64CD\u4F5C\uFF0Cx.(T)</span>
	<span class="token comment">// \u5982\u679C\u662F\uFF0C\u5219\u8F93\u51FA x \u7684\u503C\uFF1B\u5982\u679C\u4E0D\u662F\uFF0C\u7A0B\u5E8F\u76F4\u63A5 panic\u3002</span>
	s <span class="token operator">:=</span> i<span class="token punctuation">.</span><span class="token punctuation">(</span>Duck<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">assertFlag</span><span class="token punctuation">(</span>i <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> s<span class="token punctuation">,</span> ok <span class="token operator">:=</span> i<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">searchType</span><span class="token punctuation">(</span>i <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u8BED\u6CD5\u7C7B\u4F3C\u7C7B\u578B\u65AD\u8A00\uFF0C\u53EA\u9700\u5C06 T \u76F4\u63A5\u7528\u5173\u952E\u8BCD type \u66FF\u4EE3\u3002</span>
	<span class="token keyword">switch</span> v <span class="token operator">:=</span> i<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token builtin">string</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;String: %s\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">case</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Int: %d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">case</span> Duck<span class="token punctuation">:</span>
		v<span class="token punctuation">.</span><span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Unknown type\\n&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>i <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Type = %T, value = %v\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>



</code></pre></div><h2 id="goroutine" tabindex="-1">goroutine <a class="header-anchor" href="#goroutine" aria-hidden="true">#</a></h2><p>Go \u8BED\u8A00\u7684\u5E76\u53D1\u6267\u884C\u4F53\u79F0\u4E3A goroutine\uFF0C\u4F7F\u7528\u5173\u952E\u8BCD go \u6765\u542F\u52A8\u4E00\u4E2A goroutine\u3002</p><p>go \u5173\u952E\u8BCD\u540E\u9762\u5FC5\u987B\u8DDF\u4E00\u4E2A\u51FD\u6570\uFF0C\u53EF\u4EE5\u662F\u6709\u540D\u51FD\u6570\uFF0C\u4E5F\u53EF\u4EE5\u662F\u65E0\u540D\u51FD\u6570\uFF0C\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4F1A\u88AB\u5FFD\u7565\u3002</p><p>go \u7684\u6267\u884C\u662F\u975E\u963B\u585E\u7684\u3002</p><p>\u5F53\u4E00\u4E2A\u7A0B\u5E8F\u542F\u52A8\u65F6\uFF0C\u53EA\u6709\u4E00\u4E2A goroutine \u6765\u8C03\u7528 main \u51FD\u6570\uFF0C\u79F0\u4E3A\u4E3B goroutine\u3002\u65B0\u7684 goroutine \u901A\u8FC7 go \u5173\u952E\u8BCD\u521B\u5EFA\uFF0C\u7136\u540E\u5E76\u53D1\u6267\u884C\u3002\u5F53 main \u51FD\u6570\u8FD4\u56DE\u65F6\uFF0C\u4E0D\u4F1A\u7B49\u5F85\u5176\u4ED6 goroutine \u6267\u884C\u5B8C\uFF0C\u800C\u662F\u76F4\u63A5\u66B4\u529B\u7ED3\u675F\u6240\u6709 goroutine\u3002</p><p>\u4EE3\u7801\uFF1A</p><div class="language-go"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u5E76\u4E0D\u963B\u585E</span>
	<span class="token keyword">go</span> <span class="token function">spinner</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Millisecond<span class="token punctuation">)</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token number">45</span>
	<span class="token comment">// \u8BA1\u7B97\u6590\u6CE2\u90A3\u5951\u6570\u5217</span>
	fibN <span class="token operator">:=</span> <span class="token function">fib</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\rFibonacci(%d) = %d\\n&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> fibN<span class="token punctuation">)</span> <span class="token comment">// Fibonacci(45) = 1134903170</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">spinner</span><span class="token punctuation">(</span>delay time<span class="token punctuation">.</span>Duration<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u8F6C\u5C0F\u83CA\u82B1</span>
		<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> r <span class="token operator">:=</span> <span class="token keyword">range</span> <span class="token string">\`-\\|/\`</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\r%c&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span>
			time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>delay<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">fib</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> x <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> x
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token function">fib</span><span class="token punctuation">(</span>x<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fib</span><span class="token punctuation">(</span>x<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="channel" tabindex="-1">channel <a class="header-anchor" href="#channel" aria-hidden="true">#</a></h2><p>\u4E00\u822C\u5199\u591A\u8FDB\u7A0B\u7A0B\u5E8F\u65F6\uFF0C\u90FD\u4F1A\u9047\u5230\u4E00\u4E2A\u95EE\u9898\uFF1A\u8FDB\u7A0B\u95F4\u901A\u4FE1\u3002\u5E38\u89C1\u7684\u901A\u4FE1\u65B9\u5F0F\u6709\u4FE1\u53F7\uFF0C\u5171\u4EAB\u5185\u5B58\u7B49\u3002goroutine \u4E4B\u95F4\u7684\u901A\u4FE1\u673A\u5236\u662F\u901A\u9053 channel\u3002</p><div class="language-go"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">Add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">,</span> ch <span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	z <span class="token operator">:=</span> x <span class="token operator">+</span> y
	ch <span class="token operator">&lt;-</span> z
<span class="token punctuation">}</span>

<span class="token comment">// \u901A\u9053\u652F\u6301\u4E09\u4E2A\u4E3B\u8981\u64CD\u4F5C\uFF1Asend\uFF0Creceive \u548C close\u3002</span>
<span class="token comment">// ch &lt;- x // \u53D1\u9001</span>
<span class="token comment">// x = &lt;-ch // \u63A5\u6536</span>
<span class="token comment">// &lt;-ch // \u63A5\u6536\uFF0C\u4E22\u5F03\u7ED3\u679C</span>

<span class="token comment">// close(ch) // \u5173\u95ED</span>
<span class="token keyword">func</span> <span class="token function">counter</span><span class="token punctuation">(</span>out <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> x <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> x <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> x<span class="token operator">++</span> <span class="token punctuation">{</span>
		out <span class="token operator">&lt;-</span> x
	<span class="token punctuation">}</span>
	<span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7C7B\u578B chan&lt;- int \u662F\u4E00\u4E2A\u53EA\u80FD\u53D1\u9001\u7684\u901A\u9053\uFF0C\u7C7B\u578B &lt;-chan int \u662F\u4E00\u4E2A\u53EA\u80FD\u63A5\u6536\u7684\u901A\u9053\u3002</span>
<span class="token keyword">func</span> <span class="token function">squarer</span><span class="token punctuation">(</span>out <span class="token keyword">chan</span><span class="token operator">&lt;-</span> <span class="token builtin">int</span><span class="token punctuation">,</span> in <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> in <span class="token punctuation">{</span>
		out <span class="token operator">&lt;-</span> v <span class="token operator">*</span> v
	<span class="token punctuation">}</span>
	<span class="token function">close</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">printer</span><span class="token punctuation">(</span>in <span class="token operator">&lt;-</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> in <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u4F7F\u7528 make \u521B\u5EFA\u901A\u9053\uFF1A</span>
	<span class="token comment">// make \u51FD\u6570\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u53EF\u9009\u53C2\u6570\uFF0C\u8868\u793A\u901A\u9053\u5BB9\u91CF\u3002\u4E0D\u4F20\u6216\u8005\u4F20 0 \u8868\u793A\u521B\u5EFA\u4E86\u4E00\u4E2A\u65E0\u7F13\u51B2\u901A\u9053\u3002</span>
	<span class="token comment">// \u65E0\u7F13\u51B2\u901A\u9053\u4E0A\u7684\u53D1\u9001\u64CD\u4F5C\u5C06\u4F1A\u963B\u585E\uFF0C\u76F4\u5230\u53E6\u4E00\u4E2A goroutine \u5728\u5BF9\u5E94\u7684\u901A\u9053\u4E0A\u6267\u884C\u63A5\u6536\u64CD\u4F5C</span>
	<span class="token comment">// \u6240\u4EE5\uFF0C\u65E0\u7F13\u51B2\u901A\u9053\u662F\u4E00\u79CD\u540C\u6B65\u901A\u9053</span>
	n <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	s <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token function">counter</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">squarer</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
	<span class="token function">printer</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
	<span class="token comment">// 0 1 4 9 16 25 36 49 64 81</span>

	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token function">Add</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i<span class="token punctuation">,</span> ch<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&lt;-</span>ch<span class="token punctuation">)</span>
		<span class="token comment">//\u968F\u673A\u7684\uFF1A 0 8 2 4 6 12 10 14 16</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="sync" tabindex="-1">sync <a class="header-anchor" href="#sync" aria-hidden="true">#</a></h2><p>sync \u5305\u63D0\u4F9B\u4E86\u4E24\u79CD\u9501\u7C7B\u578B\uFF1Async.Mutex \u548C sync.RWMutex\uFF0C\u524D\u8005\u662F\u4E92\u65A5\u9501\uFF0C\u540E\u8005\u662F\u8BFB\u5199\u9501\u3002</p><p>\u5F53\u4E00\u4E2A goroutine \u83B7\u53D6\u4E86 Mutex \u540E\uFF0C\u5176\u4ED6 goroutine \u4E0D\u7BA1\u8BFB\u5199\uFF0C\u53EA\u80FD\u7B49\u5F85\uFF0C\u76F4\u5230\u9501\u88AB\u91CA\u653E\u3002</p><p>RWMutex \u5C5E\u4E8E\u7ECF\u5178\u7684\u5355\u5199\u591A\u8BFB\u6A21\u578B\uFF0C\u5F53\u8BFB\u9501\u88AB\u5360\u7528\u65F6\uFF0C\u4F1A\u963B\u6B62\u5199\uFF0C\u4F46\u4E0D\u963B\u6B62\u8BFB\u3002\u800C\u5199\u9501\u4F1A\u963B\u6B62\u5199\u548C\u8BFB\u3002</p><p>\u4E92\u65A5\u9501\u4EE3\u7801\uFF1A</p><div class="language-go"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sync&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u4E92\u65A5\u9501</span>
	<span class="token comment">// \u5F53\u4E00\u4E2A goroutine \u83B7\u53D6\u4E86 Mutex \u540E\uFF0C\u5176\u4ED6 goroutine \u4E0D\u7BA1\u8BFB\u5199\uFF0C\u53EA\u80FD\u7B49\u5F85\uFF0C\u76F4\u5230\u9501\u88AB\u91CA\u653E</span>
	<span class="token keyword">var</span> mutex sync<span class="token punctuation">.</span>Mutex
	wg <span class="token operator">:=</span> sync<span class="token punctuation">.</span>WaitGroup<span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token comment">// \u4E3B goroutine \u5148\u83B7\u53D6\u9501</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Locking  (G0)&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 1. Locking  (G0)</span>
	mutex<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;locked (G0)&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 2. locked (G0)</span>

	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>i <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// \u7531\u4E8E\u4E3B goroutine \u5148\u83B7\u53D6\u9501\uFF0C\u7A0B\u5E8F\u5F00\u59CB 5 \u79D2\u4F1A\u963B\u585E\u5728\u8FD9\u91CC</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Locking2 (G%d)\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
			<span class="token comment">// 345\u4E09\u4E2A\u7ED3\u679C\u662F\u968F\u673A</span>
			<span class="token comment">// 3. Locking2 (G3)</span>
			<span class="token comment">// 4. Locking2 (G1)</span>
			<span class="token comment">// 5. Locking2 (G2)</span>
			mutex<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;locked2 (G%d)\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>

			time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
			mutex<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;unlocked2 (G%d)\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
			<span class="token comment">// 8 10 12\u4E4B\u95F4\u95F4\u9694\u4E24\u79D2</span>
			<span class="token comment">// 8. locked2 (G3)</span>
			<span class="token comment">// 9. unlocked2 (G3)</span>
			<span class="token comment">// 10. locked2 (G1)</span>
			<span class="token comment">// 11. unlocked2 (G1)</span>
			<span class="token comment">// 12. locked2 (G2)</span>
			<span class="token comment">// 13. unlocked2 (G2)</span>
			wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u4E3B goroutine 5 \u79D2\u540E\u91CA\u653E\u9501</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;ready unlock (G0)&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">// 6. ready unlock (G0)</span>
	mutex<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;unlocked (G0)&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">// 7. unlocked (G0)</span>

	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><p>\u8BFB\u5199\u9501\u4EE3\u7801\uFF1A</p><div class="language-go"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sync&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// RWMutex \u5C5E\u4E8E\u7ECF\u5178\u7684\u5355\u5199\u591A\u8BFB\u6A21\u578B\uFF0C\u5F53\u8BFB\u9501\u88AB\u5360\u7528\u65F6\uFF0C\u4F1A\u963B\u6B62\u5199\uFF0C\u4F46\u4E0D\u963B\u6B62\u8BFB\u3002\u800C\u5199\u9501\u4F1A\u963B\u6B62\u5199\u548C\u8BFB\u3002</span>

	<span class="token keyword">var</span> rwMutex sync<span class="token punctuation">.</span>RWMutex
	wg <span class="token operator">:=</span> sync<span class="token punctuation">.</span>WaitGroup<span class="token punctuation">{</span><span class="token punctuation">}</span>

	Data <span class="token operator">:=</span> <span class="token number">0</span>
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>t <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// \u7B2C\u4E00\u6B21\u8FD0\u884C\u540E\uFF0C\u5199\u89E3\u9501\u3002</span>
			<span class="token comment">// \u5FAA\u73AF\u5230\u7B2C\u4E8C\u6B21\u65F6\uFF0C\u8BFB\u9501\u5B9A\u540E\uFF0Cgoroutine \u6CA1\u6709\u963B\u585E\uFF0C\u540C\u65F6\u8BFB\u6210\u529F\u3002</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Locking&quot;</span><span class="token punctuation">)</span>
			<span class="token comment">// 1. \u8FDE\u7EED10\u4E2ALocking</span>
			rwMutex<span class="token punctuation">.</span><span class="token function">RLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">defer</span> rwMutex<span class="token punctuation">.</span><span class="token function">RUnlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Read data: %v\\n&quot;</span><span class="token punctuation">,</span> Data<span class="token punctuation">)</span>
			wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span>t <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// \u5199\u9501\u5B9A\u4E0B\u662F\u9700\u8981\u89E3\u9501\u540E\u624D\u80FD\u5199\u7684</span>
			rwMutex<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">defer</span> rwMutex<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			Data <span class="token operator">+=</span> t
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Write Data: %v %d \\n&quot;</span><span class="token punctuation">,</span> Data<span class="token punctuation">,</span> t<span class="token punctuation">)</span>
			wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div>`,50),c=[o];function e(u,l,k,i,r,m){return a(),s("div",null,c)}var g=n(p,[["render",e]]);export{d as __pageData,g as default};
