import{_ as n,c as s,o as a,a as t}from"./app.5fee0017.js";const b='{"title":"\u57FA\u7840\u8BED\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53D8\u91CF","slug":"\u53D8\u91CF"},{"level":2,"title":"\u5E38\u91CF","slug":"\u5E38\u91CF"},{"level":2,"title":"\u57FA\u7840\u6570\u636E\u7C7B\u578B","slug":"\u57FA\u7840\u6570\u636E\u7C7B\u578B"},{"level":2,"title":"\u6570\u7EC4","slug":"\u6570\u7EC4"},{"level":2,"title":"\u5207\u7247","slug":"\u5207\u7247"},{"level":2,"title":"\u5B57\u5178Map","slug":"\u5B57\u5178map"},{"level":2,"title":"\u7ED3\u6784\u4F53Struct","slug":"\u7ED3\u6784\u4F53struct"},{"level":2,"title":"ifelse","slug":"ifelse"},{"level":2,"title":"switchcase","slug":"switchcase"},{"level":2,"title":"for","slug":"for"},{"level":2,"title":"goto","slug":"goto"},{"level":2,"title":"\u51FD\u6570","slug":"\u51FD\u6570"}],"relativePath":"go/grammar/basic.md"}',p={},o=t(`<h1 id="\u57FA\u7840\u8BED\u6CD5" tabindex="-1">\u57FA\u7840\u8BED\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u8BED\u6CD5" aria-hidden="true">#</a></h1><h2 id="\u53D8\u91CF" tabindex="-1">\u53D8\u91CF <a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a></h2><p>\u53D8\u91CF\u58F0\u660E\u4E3B\u8981\u6709\u4E09\u79CD\u65B9\u5F0F\uFF1A</p><p>1.\u4F7F\u7528\u5173\u952E\u5B57 var \u6765\u58F0\u660E\uFF1B</p><p>2.\u4F7F\u7528 := \u7684\u77ED\u53D8\u91CF\u58F0\u660E\u65B9\u5F0F\uFF1B</p><p>3.\u4F7F\u7528\u5185\u7F6E\u51FD\u6570 new\u3002</p><div class="language-go"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">// \u5168\u5C40\u53D8\u91CF</span>
<span class="token keyword">var</span> gg <span class="token operator">=</span> <span class="token string">&quot;global&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u4F5C\u7528\u57DF</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>gg<span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA global</span>
	gg <span class="token operator">=</span> <span class="token string">&quot;local&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>gg<span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA local</span>

	<span class="token comment">// \u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1A\u901A\u8FC7var\u6765\u58F0\u660E</span>
	<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&quot;initial&quot;</span> <span class="token comment">// \u58F0\u660E\u5355\u4E2A\u53D8\u91CF</span>

	<span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">// \u58F0\u660E\u5E03\u5C14\u503C</span>

	<span class="token comment">// \u4EE5\u7EC4\u7684\u65B9\u5F0F\u58F0\u660E\u591A\u4E2A\u53D8\u91CF</span>
	<span class="token keyword">var</span> <span class="token punctuation">(</span>
		b1<span class="token punctuation">,</span> c1 <span class="token builtin">int</span> <span class="token comment">// \u9ED8\u8BA4\u4F1A\u8D4B\u4E880</span>
		b2<span class="token punctuation">,</span> c2 <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span>
	<span class="token punctuation">)</span>
	<span class="token comment">// \u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1A\u4F7F\u7528\u77ED\u53D8\u91CF\u58F0\u660E\u65B9\u5F0F</span>
	<span class="token comment">// go\u4F1A\u81EA\u5DF1\u5224\u65AD\u7C7B\u578B</span>
	f <span class="token operator">:=</span> <span class="token string">&quot;short&quot;</span>
	<span class="token comment">// \u4EC0\u4E48\u591A\u4E2A\u503C</span>
	g<span class="token punctuation">,</span> h <span class="token operator">:=</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&quot;alwaysbeta&quot;</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b1<span class="token punctuation">,</span> c1<span class="token punctuation">,</span> b2<span class="token punctuation">,</span> c2<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> g<span class="token punctuation">,</span> h<span class="token punctuation">)</span>

	<span class="token comment">// \u8D4B\u503C \u4F7F\u7528=</span>
	<span class="token keyword">var</span> m<span class="token punctuation">,</span> n <span class="token builtin">int</span>
	m <span class="token operator">=</span> <span class="token number">9</span>
	n <span class="token operator">=</span> <span class="token number">10</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> n<span class="token punctuation">)</span> <span class="token comment">// 9, 10</span>
	<span class="token comment">// \u76F4\u63A5\u4EA4\u6362\u503C</span>
	m<span class="token punctuation">,</span> n <span class="token operator">=</span> n<span class="token punctuation">,</span> m
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> n<span class="token punctuation">)</span> <span class="token comment">// 10, 9</span>

	<span class="token comment">// \u5982\u679C\u6709\u4E0D\u9700\u8981\u7684\u53D8\u91CF\uFF0C\u4F7F\u7528\u7A7A\u6807\u8BC6\u7B26 _ \u6765\u5FFD\u7565</span>
	<span class="token comment">// \u7A7A\u6807\u8BC6\u7B26</span>
	r <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> r <span class="token punctuation">{</span>
		<span class="token comment">// fmt.Println(i, v)</span>
		<span class="token comment">// fmt.Println(v)   // \u5B9A\u4E49 i \u4F46\u4E0D\u7528\u4F1A\u62A5\u9519 i declared but not used</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token comment">// \u5FFD\u7565\u7D22\u5F15</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u5E38\u91CF" tabindex="-1">\u5E38\u91CF <a class="header-anchor" href="#\u5E38\u91CF" aria-hidden="true">#</a></h2><div class="language-go"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u65E0\u7C7B\u578B\u6574\u578B\u5E38\u91CF</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token number">500000000</span>

	<span class="token comment">// \u7528\u7F16\u8BD1\u9636\u6BB5\u5373\u53EF\u8BA1\u7B97\u51FA\u503C\u7684\u8868\u8FBE\u5F0F\u6765\u8D4B\u503C</span>
	<span class="token keyword">const</span> d <span class="token operator">=</span> <span class="token number">3e20</span> <span class="token operator">/</span> n
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
	<span class="token comment">// \u65E0\u7C7B\u578B\u6D6E\u70B9\u5E38\u91CF</span>
	<span class="token keyword">const</span> zero <span class="token operator">=</span> <span class="token number">0.0</span>

	<span class="token comment">// \u65E0\u7C7B\u578B\u6574\u578B\u548C\u5B57\u7B26\u4E32\u5E38\u91CF</span>
	<span class="token keyword">const</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&quot;foo&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>

	<span class="token comment">// \u591A\u4E2A\u5E38\u91CF</span>
	<span class="token keyword">const</span> <span class="token punctuation">(</span>
		size <span class="token builtin">int64</span> <span class="token operator">=</span> <span class="token number">1024</span>
		eof        <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token comment">// \u65E0\u7C7B\u578B\u6574\u578B\u5E38\u91CF</span>
	<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>size<span class="token punctuation">,</span> eof<span class="token punctuation">)</span>

	<span class="token comment">// \u5E38\u91CF\u58F0\u660E\u8FD8\u6709\u53EF\u4EE5\u4F7F\u7528\u5E38\u91CF\u751F\u6210\u5668 iota\uFF0C\u5B83\u4E0D\u4F1A\u663E\u793A\u5199\u51FA\u5E38\u91CF\u7684\u503C\uFF0C\u800C\u662F\u4ECE 0 \u5F00\u59CB\uFF0C\u9010\u9879\u52A0 1\u3002</span>
	<span class="token comment">// iota \u5728\u6BCF\u4E2A const \u5F00\u5934\u88AB\u91CD\u7F6E\u4E3A 0\u3002</span>
	<span class="token comment">// \u4ECE 0 \u503C\u5F00\u59CB\uFF0C\u9010\u9879\u52A0 1</span>
	<span class="token keyword">const</span> <span class="token punctuation">(</span>
		a0 <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">// 0</span>
		a1 <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">// 1</span>
		a2 <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">// 2</span>
	<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a0<span class="token punctuation">,</span> a1<span class="token punctuation">,</span> a2<span class="token punctuation">)</span>

	<span class="token comment">// \u7B80\u5199\uFF0C\u8868\u8FBE\u5F0F\u76F8\u540C\uFF0C\u53EF\u4EE5\u7701\u7565\u540E\u9762\u7684</span>
	<span class="token keyword">const</span> <span class="token punctuation">(</span>
		b0 <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token comment">// 0</span>
		b1        <span class="token comment">// 1</span>
		b2        <span class="token comment">// 2</span>
	<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b0<span class="token punctuation">,</span> b1<span class="token punctuation">,</span> b2<span class="token punctuation">)</span>

	<span class="token keyword">const</span> <span class="token punctuation">(</span>
		bb         <span class="token operator">=</span> <span class="token boolean">iota</span>      <span class="token comment">// 0</span>
		cc <span class="token builtin">float32</span> <span class="token operator">=</span> <span class="token boolean">iota</span> <span class="token operator">*</span> <span class="token number">10</span> <span class="token comment">// 10</span>
		dd         <span class="token operator">=</span> <span class="token boolean">iota</span>      <span class="token comment">// 2</span>
	<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>bb<span class="token punctuation">,</span> cc<span class="token punctuation">,</span> dd<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u57FA\u7840\u6570\u636E\u7C7B\u578B" tabindex="-1">\u57FA\u7840\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#\u57FA\u7840\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h2><p>Go \u7684\u6570\u636E\u7C7B\u578B\u5206\u56DB\u5927\u7C7B\uFF1A</p><p>\u57FA\u7840\u7C7B\u578B\uFF1A \u6570\u5B57 number\uFF0C\u5B57\u7B26\u4E32 string \u548C\u5E03\u5C14\u578B boolean\u3002</p><p>\u805A\u5408\u7C7B\u578B\uFF1A \u6570\u7EC4 array \u548C\u7ED3\u6784\u4F53 struct\u3002</p><p>\u5F15\u7528\u7C7B\u578B\uFF1A \u6307\u9488 pointer\uFF0C\u5207\u7247 slice\uFF0C\u5B57\u5178 map\uFF0C\u51FD\u6570 func \u548C\u901A\u9053 channel\u3002</p><p>\u63A5\u53E3\u7C7B\u578B\uFF1A \u63A5\u53E3 interface\u3002</p><p>\u5176\u4E2D\uFF0C\u57FA\u7840\u7C7B\u578B\u53C8\u5206\u4E3A\uFF1A</p><p>\u6574\u578B\uFF1A int8\u3001uint8\u3001byte\u3001int16\u3001uint16\u3001int32\u3001uint32\u3001int64\u3001uint64\u3001int\u3001uint\u3001uintptr\u3002</p><p>\u6D6E\u70B9\u578B\uFF1A float32\uFF0Cfloat64\u3002</p><p>\u590D\u6570\u7C7B\u578B\uFF1A complex64\u3001complex128\u3002</p><p>\u5E03\u5C14\u578B\uFF1A bool\u3002</p><p>\u5B57\u7B26\u4E32\uFF1A string\u3002</p><p>\u5B57\u7B26\u578B\uFF1A rune\u3002</p><img src="https://raw.githubusercontent.com/brizer/graph-bed/master/img/20221222103724.png"><div class="language-go"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> a <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">10</span>
	<span class="token keyword">var</span> b <span class="token builtin">int32</span> <span class="token operator">=</span> <span class="token number">20</span>

	<span class="token comment">// fmt.Println(a + b)	// \u62A5\u9519 invalid operation: a + b (mismatched types int and int32)</span>
	<span class="token comment">// \u9700\u8981\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token function">int</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA 30</span>

	<span class="token comment">// \u6D6E\u70B9\u578B\u8F6C\u6574\u578B</span>
	<span class="token keyword">var</span> c <span class="token builtin">float32</span> <span class="token operator">=</span> <span class="token number">10.23</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">int</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA 10</span>

	<span class="token comment">// \u53D6\u6A21</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">)</span>   <span class="token comment">// \u8F93\u51FA 2</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span> <span class="token operator">%</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA -2</span>

	<span class="token comment">// \u9664\u6CD5</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span>     <span class="token comment">// \u8F93\u51FA 1</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token number">5.0</span> <span class="token operator">/</span> <span class="token number">3.0</span><span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA 1.6666666666666667</span>

	<span class="token comment">// \u6BD4\u8F83\u8FD0\u7B97</span>
	<span class="token keyword">var</span> i <span class="token builtin">int32</span>
	<span class="token keyword">var</span> j <span class="token builtin">int64</span>
	i<span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span>

	<span class="token comment">// if i == j { // \u62A5\u9519 invalid operation: i == j (mismatched types int32 and int64)</span>
	<span class="token comment">// 	fmt.Println(&quot;i and j are equal.&quot;)</span>
	<span class="token comment">// }</span>
	<span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> j <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;equal.&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u590D\u6570</span>
	<span class="token keyword">var</span> x <span class="token builtin">complex64</span> <span class="token operator">=</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token number">5i</span>
	<span class="token keyword">var</span> y <span class="token builtin">complex128</span> <span class="token operator">=</span> <span class="token function">complex</span><span class="token punctuation">(</span><span class="token number">3.5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
	<span class="token comment">// \u5206\u522B\u6253\u5370\u5B9E\u90E8\u548C\u865A\u90E8</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">real</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">imag</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA 3 5</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">real</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">imag</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA 3.5 10</span>

	<span class="token comment">// \u5E03\u5C14</span>
	ok <span class="token operator">:=</span> <span class="token boolean">true</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ok<span class="token punctuation">)</span>

	<span class="token comment">// \u7C7B\u578B\u8F6C\u6362</span>
	<span class="token comment">// var e bool</span>
	<span class="token comment">// e = bool(1)	// \u62A5\u9519  cannot convert 1 (type untyped int) to type bool</span>

	m <span class="token operator">:=</span> <span class="token number">1</span>
	<span class="token comment">// if m { // \u62A5\u9519 non-bool m (type int) used as if condition</span>
	<span class="token comment">// 	fmt.Println(&quot;is true&quot;)</span>
	<span class="token comment">// }</span>
	<span class="token keyword">if</span> m <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;m is 1&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u5B57\u7B26\u4E32</span>
	s1 <span class="token operator">:=</span> <span class="token string">&quot;hello&quot;</span>
	s2 <span class="token operator">:=</span> <span class="token string">&quot;world&quot;</span>

	<span class="token comment">// \u539F\u59CB\u5B57\u7B26\u4E32</span>
	s <span class="token operator">:=</span> <span class="token string">\`row1\\r\\n
	row2\`</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

	<span class="token comment">// \u5B57\u7B26\u4E32\u62FC\u63A5</span>
	s3 <span class="token operator">:=</span> s1 <span class="token operator">+</span> s2
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s3<span class="token punctuation">)</span>
	<span class="token comment">// \u53D6\u5B57\u7B26\u4E32\u957F\u5EA6</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>s3<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">// \u53D6\u5355\u4E2A\u5B57\u7B26</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s3<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token comment">// \u5B57\u7B26\u4E32\u5207\u7247</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s3<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s3<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s3<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s3<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

	<span class="token comment">// \u4FEE\u6539\u62A5\u9519</span>
	<span class="token comment">// s3[0] = &quot;H&quot;	// cannot assign to s3[0] (strings are immutable)</span>

	s4 <span class="token operator">:=</span> <span class="token string">&quot;hello \u4E16\u754C&quot;</span>

	<span class="token comment">// \u904D\u5386\u5B57\u8282\u6570\u7EC4</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>s4<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> s4<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u904D\u5386 rune \u6570\u7EC4</span>
	<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> s4 <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u6570\u7EC4" tabindex="-1">\u6570\u7EC4 <a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a></h2><p>\u6570\u7EC4\u6709\u4E24\u4E2A\u7279\u70B9\uFF1A</p><p>\u56FA\u5B9A\u957F\u5EA6</p><p>\u5143\u7D20\u7C7B\u578B\u76F8\u540C</p><p>Go \u6570\u7EC4\u662F\u503C\u7C7B\u578B\uFF0C\u8D4B\u503C\u548C\u4F20\u53C2\u90FD\u4F1A\u590D\u5236\u6574\u4E2A\u6570\u7EC4\u3002</p><p>\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-go"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> a <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span>
	<span class="token comment">// \u8F93\u51FA\u6570\u7EC4\u7B2C\u4E00\u4E2A\u5143\u7D20</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
	<span class="token comment">// \u8F93\u51FA\u6570\u7EC4\u957F\u5EA6</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>

	<span class="token comment">// \u6570\u7EC4\u5B57\u9762\u91CF\u521D\u59CB\u5316</span>
	<span class="token keyword">var</span> b <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
	<span class="token keyword">var</span> c <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>    <span class="token comment">// [1 2 3]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>c<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>

	<span class="token comment">// \u4F7F\u7528 ...</span>
	d <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T\\n&quot;</span><span class="token punctuation">,</span> d<span class="token punctuation">)</span> <span class="token comment">// [5]int</span>

	<span class="token comment">// \u6307\u5B9A\u7D22\u5F15\u4F4D\u7F6E\u521D\u59CB\u5316</span>
	e <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">}</span>
	f <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">:</span> <span class="token number">6</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token comment">// [5 0 10 0]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token comment">// [2 0 0 0 6]</span>

	<span class="token comment">// \u4E8C\u7EF4\u6570\u7EC4</span>
	<span class="token keyword">var</span> g <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span>
	h <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
	<span class="token comment">// \u58F0\u660E\u5E76\u521D\u59CB\u5316\u5916\u5C42\u6570\u7EC4\u4E2D\u7D22\u5F15\u4E3A 1 \u548C 3 \u7684\u5143\u7D20</span>
	i <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">41</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
	<span class="token comment">// \u58F0\u660E\u5E76\u521D\u59CB\u5316\u5916\u5C42\u6570\u7EC4\u548C\u5185\u5C42\u6570\u7EC4\u7684\u5355\u4E2A\u5143\u7D20</span>
	j <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token number">41</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
	<span class="token comment">// [[0 0] [0 0] [0 0] [0 0]]</span>
	<span class="token comment">// [[10 11] [20 21] [30 31] [40 41]]</span>
	<span class="token comment">// [[0 0] [20 21] [0 0] [40 41]]</span>
	<span class="token comment">// [[0 0] [20 0] [0 0] [0 41]]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>g<span class="token punctuation">,</span> h<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>

	<span class="token comment">// \u6570\u7EC4\u6BD4\u8F83</span>
	a1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span>
	a2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span>
	a3 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
	<span class="token comment">// a4 := [3]int{1, 2}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a1 <span class="token operator">==</span> a2<span class="token punctuation">,</span> a1 <span class="token operator">==</span> a3<span class="token punctuation">,</span> a2 <span class="token operator">==</span> a3<span class="token punctuation">)</span> <span class="token comment">// true false false</span>
	<span class="token comment">// fmt.Println(a1 == a4)                     // invalid operation: a1 == a4 (mismatched types [2]int and [3]int)</span>

	<span class="token comment">// \u6570\u7EC4\u904D\u5386</span>
	<span class="token keyword">for</span> i<span class="token punctuation">,</span> n <span class="token operator">:=</span> <span class="token keyword">range</span> e <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 0 5</span>
	<span class="token comment">// 1 0</span>
	<span class="token comment">// 2 10</span>
	<span class="token comment">// 3 0</span>

	<span class="token comment">// Go \u6570\u7EC4\u662F\u503C\u7C7B\u578B\uFF0C\u8D4B\u503C\u548C\u4F20\u53C2\u90FD\u4F1A\u590D\u5236\u6574\u4E2A\u6570\u7EC4\u3002</span>
	<span class="token comment">// \u6570\u7EC4\u590D\u5236,\u5185\u5BB9\u90FD\u662F\u76F8\u540C\u7684\uFF0C\u4F46\u5730\u5740\u4E0D\u540C</span>
	x <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">}</span>
	y <span class="token operator">:=</span> x
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;x: %p, %v\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>x<span class="token punctuation">,</span> x<span class="token punctuation">)</span> <span class="token comment">// x: 0xc00012e020, [10 20]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;y: %p, %v\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>y<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token comment">// y: 0xc00012e030, [10 20]</span>
	<span class="token function">test</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>

	<span class="token comment">// \u4F20\u53C2</span>
	<span class="token function">modify</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main: &quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span> <span class="token comment">// main:  [10 20]</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">test</span><span class="token punctuation">(</span>a <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a: %p, %v\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">,</span> a<span class="token punctuation">)</span> <span class="token comment">// a: 0xc00012e060, [10 20]</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">modify</span><span class="token punctuation">(</span>a <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">30</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;modify: &quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span> <span class="token comment">// modify:  [30 20]</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u5207\u7247" tabindex="-1">\u5207\u7247 <a class="header-anchor" href="#\u5207\u7247" aria-hidden="true">#</a></h2><p>\u5207\u7247\u662F\u4E00\u79CD\u5F15\u7528\u7C7B\u578B\uFF0C\u5B83\u6709\u4E09\u4E2A\u5C5E\u6027\uFF1A\u6307\u9488\uFF0C\u957F\u5EA6\u548C\u5BB9\u91CF\u3002</p><p>\u6307\u9488\uFF1A\u6307\u5411 slice \u53EF\u4EE5\u8BBF\u95EE\u5230\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u3002</p><p>\u957F\u5EA6\uFF1Aslice \u4E2D\u5143\u7D20\u4E2A\u6570\u3002</p><p>\u5BB9\u91CF\uFF1Aslice \u8D77\u59CB\u5143\u7D20\u5230\u5E95\u5C42\u6570\u7EC4\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u95F4\u7684\u5143\u7D20\u4E2A\u6570\u3002</p><img src="https://raw.githubusercontent.com/brizer/graph-bed/master/img/20221222105055.png"><p>\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-go"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u521B\u5EFA\u5207\u7247\u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1A\u57FA\u4E8E\u6570\u7EC4\u521B\u5EFA\u5207\u7247</span>
	<span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">}</span>

	s1 <span class="token operator">:=</span> array<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">]</span>
	s2 <span class="token operator">:=</span> array<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span>
	s3 <span class="token operator">:=</span> array<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
	s4 <span class="token operator">:=</span> array<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s1: %v\\n&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span> <span class="token comment">// s1: [4 5 6]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s2: %v\\n&quot;</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token comment">// s2: [1 2 3 4 5]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s3: %v\\n&quot;</span><span class="token punctuation">,</span> s3<span class="token punctuation">)</span> <span class="token comment">// s3: [5 6 7 8]</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s4: %v\\n&quot;</span><span class="token punctuation">,</span> s4<span class="token punctuation">)</span> <span class="token comment">// s4: [1 2 3 4 5 6 7 8]</span>

	<span class="token comment">// \u521B\u5EFA\u5207\u7247\u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1A\u4F7F\u7528 make \u521B\u5EFA\u5207\u7247</span>
	<span class="token comment">// len: 10, cap: 10</span>
	a <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
	<span class="token comment">// len: 10, cap: 15</span>
	b <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a: %v, len: %d, cap: %d\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// a: [0 0 0 0 0 0 0 0 0 0], len: 10, cap: 10</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;b: %v, len: %d, cap: %d\\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// b: [0 0 0 0 0 0 0 0 0 0], len: 10, cap: 15</span>

	<span class="token comment">// \u5207\u7247\u904D\u5386,\u548C\u904D\u5386\u6570\u7EC4\u662F\u4E00\u6837\u7684</span>
	<span class="token keyword">for</span> i<span class="token punctuation">,</span> n <span class="token operator">:=</span> <span class="token keyword">range</span> s1 <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> n<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u6BD4\u8F83</span>
	<span class="token keyword">var</span> s <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">,</span> s <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">)</span> <span class="token comment">// true true</span>
	s <span class="token operator">=</span> <span class="token boolean">nil</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">,</span> s <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">)</span> <span class="token comment">// true true</span>
	s <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">int</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">,</span> s <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">)</span> <span class="token comment">// true true</span>
	s <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">,</span> s <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">)</span> <span class="token comment">// true false</span>

	<span class="token comment">// \u8FFD\u52A0</span>
	s5 <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>s4<span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s5: %v\\n&quot;</span><span class="token punctuation">,</span> s5<span class="token punctuation">)</span> <span class="token comment">// s5: [1 2 3 4 5 6 7 8 9]</span>
	s6 <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>s4<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s6: %v\\n&quot;</span><span class="token punctuation">,</span> s6<span class="token punctuation">)</span> <span class="token comment">// s5: [1 2 3 4 5 6 7 8 10 11]</span>

	<span class="token comment">// \u8FFD\u52A0\u53E6\u4E00\u4E2A\u5207\u7247</span>
	s7 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">}</span>
	s7 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s7<span class="token punctuation">,</span> s6<span class="token operator">...</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s7: %v\\n&quot;</span><span class="token punctuation">,</span> s7<span class="token punctuation">)</span> <span class="token comment">// s7: [12 13 1 2 3 4 5 6 7 8 10 11]</span>

	<span class="token comment">// \u590D\u5236</span>
	s8 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
	s9 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
	s10 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">6</span><span class="token punctuation">}</span>

	<span class="token function">copy</span><span class="token punctuation">(</span>s8<span class="token punctuation">,</span> s9<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s8: %v\\n&quot;</span><span class="token punctuation">,</span> s8<span class="token punctuation">)</span> <span class="token comment">// s8: [5 4 3 4 5]</span>
	<span class="token function">copy</span><span class="token punctuation">(</span>s10<span class="token punctuation">,</span> s9<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s10: %v\\n&quot;</span><span class="token punctuation">,</span> s10<span class="token punctuation">)</span> <span class="token comment">// s10: [5]</span>

	<span class="token comment">// \u4F20\u53C2</span>
	<span class="token function">modify</span><span class="token punctuation">(</span>s9<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main: &quot;</span><span class="token punctuation">,</span> s9<span class="token punctuation">)</span> <span class="token comment">// main:  [30 4 3]</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5728 modify \u4E2D\u4FEE\u6539\u7684\u503C\u4F1A\u5F71\u54CD\u5230 main \u4E2D\u3002</span>
<span class="token keyword">func</span> <span class="token function">modify</span><span class="token punctuation">(</span>a <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">30</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;modify: &quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span> <span class="token comment">// modify:  [30 4 3]</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u5B57\u5178map" tabindex="-1">\u5B57\u5178Map <a class="header-anchor" href="#\u5B57\u5178map" aria-hidden="true">#</a></h2><p>\u5B57\u5178\u662F\u4E00\u79CD\u975E\u5E38\u5E38\u7528\u7684\u6570\u636E\u7ED3\u6784\uFF0CGo \u4E2D\u7528\u5173\u952E\u8BCD map \u8868\u793A\uFF0C\u7C7B\u578B\u662F map[K]V\u3002K \u548C V \u5206\u522B\u662F\u5B57\u5178\u7684\u952E\u548C\u503C\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u5176\u4E2D\u952E\u5FC5\u987B\u652F\u6301\u76F8\u7B49\u8FD0\u7B97\u7B26\uFF0C\u6BD4\u5982\u6570\u5B57\uFF0C\u5B57\u7B26\u4E32\u7B49\u3002</p><p>\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-go"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u5B57\u9762\u91CF\u65B9\u5F0F\u521B\u5EFA</span>
	<span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token comment">// map[a:1 b:2]</span>

	<span class="token comment">// \u4F7F\u7528 make \u521B\u5EFA</span>
	m1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m1<span class="token punctuation">)</span> <span class="token comment">// map[]</span>

	<span class="token comment">// \u6307\u5B9A\u957F\u5EA6</span>
	m2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m2<span class="token punctuation">)</span> <span class="token comment">//map[]</span>

	<span class="token comment">// \u96F6\u503C\u662F nil</span>
	<span class="token keyword">var</span> m3 <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m3 <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>m3<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// true true</span>
	<span class="token comment">// nil \u8D4B\u503C\u62A5\u9519</span>
	<span class="token comment">// m3[&quot;a&quot;] = 1</span>
	<span class="token comment">// fmt.Println(m3)	// panic: assignment to entry in nil map</span>

	<span class="token comment">// \u8D4B\u503C</span>
	m<span class="token punctuation">[</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">3</span>
	m<span class="token punctuation">[</span><span class="token string">&quot;d&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">4</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token comment">// map[a:1 b:2 c:3 d:4]</span>

	<span class="token comment">// \u53D6\u503C</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> m<span class="token punctuation">[</span><span class="token string">&quot;d&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 1 4</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">[</span><span class="token string">&quot;k&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>         <span class="token comment">// 0</span>

	<span class="token comment">// \u5220\u9664</span>
	<span class="token function">delete</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span>
	<span class="token function">delete</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> <span class="token string">&quot;f&quot;</span><span class="token punctuation">)</span> <span class="token comment">// key \u4E0D\u5B58\u5728\u4E5F\u4E0D\u62A5\u9519</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token comment">// map[a:1 b:2 d:4]</span>

	<span class="token comment">// \u83B7\u53D6\u957F\u5EA6</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>

	<span class="token comment">// \u5224\u65AD\u952E\u662F\u5426\u5B58\u5728</span>
	<span class="token keyword">if</span> value<span class="token punctuation">,</span> ok <span class="token operator">:=</span> m<span class="token punctuation">[</span><span class="token string">&quot;d&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token comment">// 4</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u904D\u5386</span>
	<span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> m <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u4F20\u53C2</span>
	<span class="token comment">// map \u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u6240\u4EE5\u5728\u51FD\u6570\u95F4\u4F20\u9012\u65F6\uFF0C\u4E5F\u4E0D\u4F1A\u5236\u9020\u4E00\u4E2A\u6620\u5C04\u7684\u526F\u672C\uFF0C\u8FD9\u70B9\u548C\u5207\u7247\u7C7B\u4F3C\uFF0C\u90FD\u5F88\u9AD8\u6548\u3002</span>
	<span class="token function">modify</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main: &quot;</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span> <span class="token comment">// main:  map[a:1 b:2 d:4 e:10]</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">modify</span><span class="token punctuation">(</span>a <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	a<span class="token punctuation">[</span><span class="token string">&quot;e&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;modify: &quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span> <span class="token comment">//	modify:  map[a:1 b:2 d:4 e:10]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u7ED3\u6784\u4F53struct" tabindex="-1">\u7ED3\u6784\u4F53Struct <a class="header-anchor" href="#\u7ED3\u6784\u4F53struct" aria-hidden="true">#</a></h2><p>\u7ED3\u6784\u4F53\u662F\u4E00\u79CD\u805A\u5408\u7C7B\u578B\uFF0C\u5305\u542B\u96F6\u4E2A\u6216\u591A\u4E2A\u4EFB\u610F\u7C7B\u578B\u7684\u547D\u540D\u53D8\u91CF\uFF0C\u6BCF\u4E2A\u53D8\u91CF\u53EB\u505A\u7ED3\u6784\u4F53\u7684\u6210\u5458\u3002</p><p>\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-go"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">// \u58F0\u660E\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> user <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name <span class="token builtin">string</span>
	age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> admin <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	u       user
	isAdmin <span class="token builtin">bool</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> leader <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	u        user
	isLeader <span class="token builtin">bool</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> admin1 <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	user
	isAdmin <span class="token builtin">bool</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u521D\u59CB\u5316</span>
	u1 <span class="token operator">:=</span> user<span class="token punctuation">{</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>u1<span class="token punctuation">)</span> <span class="token comment">// {zhangsan 18}</span>

	<span class="token comment">// \u66F4\u597D\u7684\u65B9\u5F0F, \u6309\u7167\u5B57\u6BB5\u540D\u5B57\u6765\u521D\u59CB\u5316\u3002</span>
	<span class="token comment">// u := user{</span>
	<span class="token comment">// 	age: 20,</span>
	<span class="token comment">// }</span>
	<span class="token comment">// fmt.Println(u)	// { 20}</span>
	u <span class="token operator">:=</span> user<span class="token punctuation">{</span>
		name<span class="token punctuation">:</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span>
		age<span class="token punctuation">:</span>  <span class="token number">18</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span> <span class="token comment">// {zhangsan 18}</span>

	<span class="token comment">// \u8BBF\u95EE\u7ED3\u6784\u4F53\u6210\u5458</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>name<span class="token punctuation">,</span> u<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// zhangsan 18</span>
	u<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;lisi&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>u<span class="token punctuation">.</span>name<span class="token punctuation">,</span> u<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// lisi 18</span>

	<span class="token comment">// \u7ED3\u6784\u4F53\u6BD4\u8F83</span>
	u2 <span class="token operator">:=</span> user<span class="token punctuation">{</span>
		age<span class="token punctuation">:</span>  <span class="token number">18</span><span class="token punctuation">,</span>
		name<span class="token punctuation">:</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>u1 <span class="token operator">==</span> u<span class="token punctuation">)</span>  <span class="token comment">// false</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>u1 <span class="token operator">==</span> u2<span class="token punctuation">)</span> <span class="token comment">// true</span>

	<span class="token comment">// \u7ED3\u6784\u4F53\u5D4C\u5957</span>
	a <span class="token operator">:=</span> admin<span class="token punctuation">{</span>
		u<span class="token punctuation">:</span>       u<span class="token punctuation">,</span>
		isAdmin<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// {{lisi 18} true}</span>
	a<span class="token punctuation">.</span>u<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;wangwu&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>u<span class="token punctuation">.</span>name<span class="token punctuation">)</span>  <span class="token comment">// wangwu</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>u<span class="token punctuation">.</span>age<span class="token punctuation">)</span>   <span class="token comment">// 18</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>isAdmin<span class="token punctuation">)</span> <span class="token comment">// true</span>

	l <span class="token operator">:=</span> leader<span class="token punctuation">{</span>
		u<span class="token punctuation">:</span>        u<span class="token punctuation">,</span>
		isLeader<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span> <span class="token comment">// {{lisi 18} false}</span>

	<span class="token comment">// \u533F\u540D\u6210\u5458, \u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u53EF\u4EE5\u7701\u7565\u6389\u4E2D\u95F4\u53D8\u91CF\uFF0C\u76F4\u63A5\u8BBF\u95EE\u6211\u4EEC\u9700\u8981\u7684\u6210\u5458\u53D8\u91CF\u3002</span>
	a1 <span class="token operator">:=</span> admin1<span class="token punctuation">{</span>
		user<span class="token punctuation">:</span>    u<span class="token punctuation">,</span>
		isAdmin<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	a1<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">20</span>
	a1<span class="token punctuation">.</span>isAdmin <span class="token operator">=</span> <span class="token boolean">false</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a1<span class="token punctuation">)</span>         <span class="token comment">// {{lisi 20} false}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a1<span class="token punctuation">.</span>name<span class="token punctuation">)</span>    <span class="token comment">// lisi</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a1<span class="token punctuation">.</span>age<span class="token punctuation">)</span>     <span class="token comment">// 20</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a1<span class="token punctuation">.</span>isAdmin<span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="ifelse" tabindex="-1">ifelse <a class="header-anchor" href="#ifelse" aria-hidden="true">#</a></h2><div class="language-go"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token number">7</span><span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;7 is even&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;7 is odd&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 7 is odd</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> <span class="token number">8</span><span class="token operator">%</span><span class="token number">4</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;8 is divisible by 4&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 8 is divisible by 4</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> num <span class="token operator">:=</span> <span class="token number">9</span><span class="token punctuation">;</span> num <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token string">&quot;is negative&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> num <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token string">&quot;has 1 digit&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 9 has 1 digit</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token string">&quot;has multiple digits&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="switchcase" tabindex="-1">switchcase <a class="header-anchor" href="#switchcase" aria-hidden="true">#</a></h2><div class="language-go"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	i <span class="token operator">:=</span> <span class="token number">2</span>
	fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;write &quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token string">&quot; as &quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">switch</span> i <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;one&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;two&quot;</span><span class="token punctuation">)</span> <span class="token comment">// write 2 as two</span>
		<span class="token keyword">fallthrough</span>
	<span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;three&quot;</span><span class="token punctuation">)</span> <span class="token comment">// three</span>
	<span class="token keyword">case</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;four, five, six&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">switch</span> num <span class="token operator">:=</span> <span class="token number">9</span><span class="token punctuation">;</span> num <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;one&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;nine&quot;</span><span class="token punctuation">)</span> <span class="token comment">// nine</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">switch</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Weekday</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> time<span class="token punctuation">.</span>Saturday<span class="token punctuation">,</span> time<span class="token punctuation">.</span>Sunday<span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;it&#39;s the weekend&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;it&#39;s a weekday&quot;</span><span class="token punctuation">)</span> <span class="token comment">// it&#39;s a weekday</span>
	<span class="token punctuation">}</span>

	t <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">switch</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> t<span class="token punctuation">.</span><span class="token function">Hour</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">12</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;it&#39;s before noon&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;it&#39;s after noon&quot;</span><span class="token punctuation">)</span> <span class="token comment">// it&#39;s after noon</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="for" tabindex="-1">for <a class="header-anchor" href="#for" aria-hidden="true">#</a></h2><p>\u76F4\u63A5\u4EE3\u7801\uFF1A</p><div class="language-go"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	i <span class="token operator">:=</span> <span class="token number">1</span>
	<span class="token comment">// \u53EA\u6709\u6761\u4EF6</span>
	<span class="token keyword">for</span> i <span class="token operator">&lt;=</span> <span class="token number">3</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 1 2 3</span>
		i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u6709\u53D8\u91CF\u521D\u59CB\u5316\u548C\u6761\u4EF6</span>
	<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">7</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> <span class="token number">9</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token comment">// 7 8 9</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u6B7B\u5FAA\u73AF</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;loop&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">break</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u904D\u5386\u6570\u7EC4</span>
	a <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> a <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 0 1 2 3</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> a <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> v<span class="token punctuation">)</span> <span class="token comment">// 0 10, 1 20, 2 30, 3 40</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u904D\u5386\u5207\u7247</span>
	s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 0 1 2</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> v<span class="token punctuation">)</span> <span class="token comment">// 0 a, 1 b, 2 c</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u904D\u5386\u5B57\u5178</span>
	m <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">}</span>
	<span class="token keyword">for</span> k <span class="token operator">:=</span> <span class="token keyword">range</span> m <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span> <span class="token comment">// a b c</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> m <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="goto" tabindex="-1">goto <a class="header-anchor" href="#goto" aria-hidden="true">#</a></h2><p>goto \u7279\u70B9\uFF1A</p><p>\u53EA\u80FD\u5728\u51FD\u6570\u5185\u8DF3\u8F6C\uFF0C\u9700\u8981\u914D\u5408\u6807\u7B7E\u4E00\u8D77\u4F7F\u7528\uFF1B</p><p>\u4E0D\u80FD\u8DF3\u8FC7\u5185\u90E8\u53D8\u91CF\u58F0\u660E\u8BED\u53E5\uFF1B</p><p>\u53EA\u80FD\u8DF3\u5230\u540C\u7EA7\u4F5C\u7528\u57DF\u6216\u8005\u4E0A\u5C42\u4F5C\u7528\u57DF\u5185\uFF0C\u4E0D\u80FD\u8DF3\u5230\u5185\u90E8\u4F5C\u7528\u57DF\u5185\u3002</p><p>\u76F4\u63A5\u4EE3\u7801</p><div class="language-go"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u8DF3\u51FA\u5FAA\u73AF</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span>
			<span class="token keyword">goto</span> L1
		<span class="token punctuation">}</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
L1<span class="token punctuation">:</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Done&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// \u8DF3\u8FC7\u53D8\u91CF\u58F0\u660E\uFF0C\u4E0D\u5141\u8BB8</span>
	<span class="token comment">// 	goto L2</span>
	<span class="token comment">// 	j := 1</span>
	<span class="token comment">// L2:</span>

	<span class="token comment">// break \u8DF3\u8F6C\u5230\u6807\u7B7E\u5904\uFF0C\u7136\u540E\u8DF3\u8FC7 for \u5FAA\u73AF</span>
L3<span class="token punctuation">:</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> i <span class="token operator">&gt;=</span> <span class="token number">2</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span> L3
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> j <span class="token operator">&gt;</span> <span class="token number">4</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span>
			<span class="token punctuation">}</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// continue \u8DF3\u8F6C\u5230\u6807\u7B7E\u5904\uFF0C\u7136\u540E\u6267\u884C i++</span>
L4<span class="token punctuation">:</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> i <span class="token operator">&gt;</span> <span class="token number">4</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span> L4
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> i <span class="token operator">&gt;=</span> <span class="token number">2</span> <span class="token punctuation">{</span>
				<span class="token keyword">continue</span> L4
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> j <span class="token operator">&gt;</span> <span class="token number">4</span> <span class="token punctuation">{</span>
				<span class="token keyword">continue</span>
			<span class="token punctuation">}</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 0</span>
<span class="token comment">// 1</span>
<span class="token comment">// Done</span>
<span class="token comment">// 0 0</span>
<span class="token comment">// 0 1</span>
<span class="token comment">// 0 2</span>
<span class="token comment">// 0 3</span>
<span class="token comment">// 0 4</span>
<span class="token comment">// 1 0</span>
<span class="token comment">// 1 1</span>
<span class="token comment">// 1 2</span>
<span class="token comment">// 1 3</span>
<span class="token comment">// 1 4</span>
<span class="token comment">// 0 0</span>
<span class="token comment">// 0 1</span>
<span class="token comment">// 0 2</span>
<span class="token comment">// 0 3</span>
<span class="token comment">// 0 4</span>
<span class="token comment">// 1 0</span>
<span class="token comment">// 1 1</span>
<span class="token comment">// 1 2</span>
<span class="token comment">// 1 3</span>
<span class="token comment">// 1 4</span>

</code></pre></div><h2 id="\u51FD\u6570" tabindex="-1">\u51FD\u6570 <a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u51FD\u6570\u5305\u62EC\u4EE5\u4E0B\u51E0\u4E2A\u90E8\u5206\uFF1A\u5173\u952E\u8BCD func\uFF0C\u51FD\u6570\u540D\uFF0C\u53C2\u6570\u5217\u8868\uFF0C\u8FD4\u56DE\u5217\u8868\u548C\u51FD\u6570\u4F53\u3002</p><p>\u76F4\u63A5\u4E0A\u4EE3\u7801\uFF1A</p><div class="language-go"><pre><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">funcA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// i am funcA</span>

	<span class="token comment">// \u51FD\u6570\u7B7E\u540D</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T\\n&quot;</span><span class="token punctuation">,</span> add<span class="token punctuation">)</span> <span class="token comment">// func(int, int) int</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T\\n&quot;</span><span class="token punctuation">,</span> sub<span class="token punctuation">)</span> <span class="token comment">// func(int, int) int</span>

	<span class="token comment">// \u4E0D\u5B9A\u53C2\u6570</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">funcSum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">// 3</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">funcSum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>

	<span class="token comment">// slice \u53C2\u6570</span>
	s <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">funcSum</span><span class="token punctuation">(</span>s<span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 10</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">funcSum1</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">// 10</span>

	<span class="token comment">// \u591A\u8FD4\u56DE\u503C</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">swap</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 2 1</span>

	x<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token comment">// 2</span>

	<span class="token comment">// \u533F\u540D\u51FD\u6570</span>
	sum <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>

	<span class="token comment">// \u4F5C\u4E3A\u53C2\u6570</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">funcSum2</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 8</span>

	<span class="token comment">// \u4F5C\u4E3A\u8FD4\u56DE\u503C</span>
	f <span class="token operator">:=</span> <span class="token function">wrap</span><span class="token punctuation">(</span><span class="token string">&quot;add&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">f</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>

	<span class="token comment">// \u76F4\u63A5\u8C03\u7528</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 9</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">funcA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;i am funcA&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">sub</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>z <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	z <span class="token operator">=</span> x <span class="token operator">-</span> y
	<span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7B80\u5199\u5F62\u5F0F</span>
<span class="token keyword">func</span> <span class="token function">add1</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">sub1</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>z <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	z <span class="token operator">=</span> x <span class="token operator">-</span> y
	<span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E0D\u5B9A\u53C2\u6570</span>
<span class="token keyword">func</span> <span class="token function">funcSum</span><span class="token punctuation">(</span>args <span class="token operator">...</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ret <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> arg <span class="token operator">:=</span> <span class="token keyword">range</span> args <span class="token punctuation">{</span>
		ret <span class="token operator">+=</span> arg
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token comment">// slice \u53C2\u6570</span>
<span class="token keyword">func</span> <span class="token function">funcSum1</span><span class="token punctuation">(</span>args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ret <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> arg <span class="token operator">:=</span> <span class="token keyword">range</span> args <span class="token punctuation">{</span>
		ret <span class="token operator">+=</span> arg
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u591A\u8FD4\u56DE\u503C</span>
<span class="token keyword">func</span> <span class="token function">swap</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> y<span class="token punctuation">,</span> x
<span class="token punctuation">}</span>

<span class="token comment">// \u533F\u540D\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570</span>
<span class="token keyword">func</span> <span class="token function">funcSum2</span><span class="token punctuation">(</span>f <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u533F\u540D\u51FD\u6570\u4F5C\u4E3A\u8FD4\u56DE\u503C</span>
<span class="token keyword">func</span> <span class="token function">wrap</span><span class="token punctuation">(</span>op <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">switch</span> op <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token string">&quot;add&quot;</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> a <span class="token operator">+</span> b
		<span class="token punctuation">}</span>
	<span class="token keyword">case</span> <span class="token string">&quot;sub&quot;</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> a <span class="token operator">+</span> b
		<span class="token punctuation">}</span>

	<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,65),c=[o];function e(u,l,k,i,r,m){return a(),s("div",null,c)}var d=n(p,[["render",e]]);export{b as __pageData,d as default};
