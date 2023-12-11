import{_ as n,c as s,o as a,a as p}from"./app.a8980bfd.js";const w='{"title":"\u5165\u53E3","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5C01\u88C5\u900F\u4F20util","slug":"\u5C01\u88C5\u900F\u4F20util"},{"level":2,"title":"\u5165\u53C2\u4E0E\u9ED8\u8BA4\u53C2\u6570\u5408\u5E76","slug":"\u5165\u53C2\u4E0E\u9ED8\u8BA4\u53C2\u6570\u5408\u5E76"},{"level":2,"title":"\u5165\u53C2\u4FDD\u8BC1\u53C2\u6570\u6D45\u62F7\u8D1D","slug":"\u5165\u53C2\u4FDD\u8BC1\u53C2\u6570\u6D45\u62F7\u8D1D"},{"level":2,"title":"\u83B7\u53D6\u5F62\u53C2\u4E2A\u6570","slug":"\u83B7\u53D6\u5F62\u53C2\u4E2A\u6570"}],"relativePath":"javascript/util/entry.md"}',t={},o=p(`<h1 id="\u5165\u53E3" tabindex="-1">\u5165\u53E3 <a class="header-anchor" href="#\u5165\u53E3" aria-hidden="true">#</a></h1><h2 id="\u5C01\u88C5\u900F\u4F20util" tabindex="-1">\u5C01\u88C5\u900F\u4F20util <a class="header-anchor" href="#\u5C01\u88C5\u900F\u4F20util" aria-hidden="true">#</a></h2><p>\u5728\u5F00\u53D1util\u65F6\uFF0C\u53EF\u80FD\u90E8\u5206\u4F1A\u7531\u5176\u4ED6\u5E93\u7EC4\u6210\uFF0C\u5C06\u5176proxy\u3002\u53C2\u8003<a href="https://github.com/brizer/vue-cli/blob/dev/packages/%40vue/cli-shared-utils/index.js" target="_blank" rel="noopener noreferrer">vue-cli/index.js at dev \xB7 brizer/vue-cli</a>\uFF1A</p><p>\u8BE5\u65B9\u6848\u4F9D\u8D56node commonjs\u89C4\u8303\u3002</p><p>\u901A\u8FC7\u5165\u53E3\u6587\u4EF6\uFF0C\u5C06\u4E00\u4E9B\u6A21\u5757\u96C6\u5408\u5230exports\u4E0A\uFF0C\u7EDF\u4E00\u66B4\u9732\u51FA\u53BB:</p><div class="language-js"><pre><code><span class="token punctuation">[</span>
  <span class="token string">&#39;env&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;exit&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;ipc&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;logger&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;module&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;object&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;openBrowser&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;pluginResolution&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;launch&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;request&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;spinner&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;validate&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">m</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>exports<span class="token punctuation">,</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./lib/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>m<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

exports<span class="token punctuation">.</span>chalk <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;chalk&#39;</span><span class="token punctuation">)</span>
exports<span class="token punctuation">.</span>execa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;execa&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4E5F\u53EF\u4EE5\u53C2\u8003umi\u7684\u65B9\u5F0F\uFF0C\u4E00\u4E2A\u57FA\u4E8E\u4E09\u65B9\u5305\u7684util\u5E93\uFF0C\u96C6\u5408\u5185\u7F6E\u4E00\u8D77\uFF0C\u4ECE\u800C\u63A7\u5236\u7248\u672C\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// \u4E00\u4E2A\u57FA\u4E8E\u7B2C\u4E09\u65B9\u5305\u7684util\u5E93\uFF0C\u96C6\u5408\u4F53</span>
<span class="token keyword">import</span> address <span class="token keyword">from</span> <span class="token string">&#39;address&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> chalk <span class="token keyword">from</span> <span class="token string">&#39;chalk&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> spawn <span class="token keyword">from</span> <span class="token string">&#39;cross-spawn&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> chokidar <span class="token keyword">from</span> <span class="token string">&#39;chokidar&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> clipboardy <span class="token keyword">from</span> <span class="token string">&#39;clipboardy&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> createDebug<span class="token punctuation">,</span> <span class="token punctuation">{</span> Debugger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;debug&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> deepmerge <span class="token keyword">from</span> <span class="token string">&#39;deepmerge&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> execa <span class="token keyword">from</span> <span class="token string">&#39;execa&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> lodash <span class="token keyword">from</span> <span class="token string">&#39;lodash&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> glob <span class="token keyword">from</span> <span class="token string">&#39;glob&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> portfinder <span class="token keyword">from</span> <span class="token string">&#39;portfinder&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> got <span class="token keyword">from</span> <span class="token string">&#39;got&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> resolve <span class="token keyword">from</span> <span class="token string">&#39;resolve&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> yargs <span class="token keyword">from</span> <span class="token string">&#39;yargs&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> mkdirp <span class="token keyword">from</span> <span class="token string">&#39;mkdirp&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> pkgUp <span class="token keyword">from</span> <span class="token string">&#39;pkg-up&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Mustache <span class="token keyword">from</span> <span class="token string">&#39;mustache&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> signale <span class="token keyword">from</span> <span class="token string">&#39;signale&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> rimraf <span class="token keyword">from</span> <span class="token string">&#39;rimraf&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> yParser <span class="token keyword">from</span> <span class="token string">&#39;yargs-parser&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> t <span class="token keyword">from</span> <span class="token string">&#39;@babel/types&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> parser <span class="token keyword">from</span> <span class="token string">&#39;@babel/parser&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> traverse <span class="token keyword">from</span> <span class="token string">&#39;@babel/traverse&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> semver <span class="token keyword">from</span> <span class="token string">&#39;semver&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> spawn <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> semver <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> address <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> chalk <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> cheerio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./cheerio/cheerio&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> clipboardy <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> chokidar <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> createDebug<span class="token punctuation">,</span> Debugger <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> deepmerge <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> execa <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> lodash <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> glob <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> got <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> portfinder <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> pkgUp <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> yargs <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> mkdirp <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> Mustache <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> rimraf <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> yParser <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> parser <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> traverse <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> signale <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u518D\u66B4\u9732\u4E00\u4E9B\u81EA\u5DF1\u5C01\u88C5\u7684util</span>
<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./ssr&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./routes&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> compatESModuleRequire <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./compatESModuleRequire/compatESModuleRequire&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> mergeConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./mergeConfig/mergeConfig&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> isLernaPackage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./isLernaPackage/isLernaPackage&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> getFile <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./getFile/getFile&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> winPath <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./winPath/winPath&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> winEOL<span class="token punctuation">,</span> isWindows <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./winEOL/winEOL&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> parseRequireDeps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./parseRequireDeps/parseRequireDeps&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> BabelRegister <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./BabelRegister/BabelRegister&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> Generator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Generator/Generator&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> randomColor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./randomColor/randomColor&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> delay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./delay/delay&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> cleanRequireCache <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./cleanRequireCache/cleanRequireCache&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./types&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6709\u65F6\u5019\u9700\u8981\u5408\u5E76\u591A\u4E2A\u5E93\u7684\u5BFC\u51FA\u4E00\u8D77\u5BFC\u51FA\uFF0C\u53EF\u4EE5\u53C2\u8003<code>**</code>\u548C<code>**-core</code>\u7CFB\u5217\u3002 <a href="https://github.com/FunnyLiu/umi/blob/readsource/packages/umi/index.js#L2" target="_blank" rel="noopener noreferrer">umi\u5BFC\u51FA</a></p><p><a href="https://github.com/FunnyLiu/node-fs-extra/blob/readsource/lib/fs/index.js#L60" target="_blank" rel="noopener noreferrer">\u53C2\u8003node-fs-extra</a></p><h2 id="\u5165\u53C2\u4E0E\u9ED8\u8BA4\u53C2\u6570\u5408\u5E76" tabindex="-1">\u5165\u53C2\u4E0E\u9ED8\u8BA4\u53C2\u6570\u5408\u5E76 <a class="header-anchor" href="#\u5165\u53C2\u4E0E\u9ED8\u8BA4\u53C2\u6570\u5408\u5E76" aria-hidden="true">#</a></h2><p>\u7B80\u5355\u7684\uFF0C\u901A\u8FC7\u548C\u4E00\u4E2A\u521D\u59CB\u5B9A\u4E49\u503C\u5408\u5E76\uFF1A</p><div class="language-js"><pre><code>  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">options</span><span class="token operator">:</span> CallappOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">2000</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>defaultOptions<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>\u590D\u6742\u7248\uFF0C\u5728\u5408\u5E76\u540E\u4E00\u4E00\u68C0\u67E5\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Metric</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">config<span class="token punctuation">,</span> defaults <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isObject</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;constructor expected a config object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">//\u7ED9\u6784\u9020\u51FD\u6570\u5165\u53C2\u7684\u5408\u5E76</span>
		Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>
			<span class="token keyword">this</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">labelNames</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token literal-property property">registers</span><span class="token operator">:</span> <span class="token punctuation">[</span>globalRegistry<span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token literal-property property">aggregator</span><span class="token operator">:</span> <span class="token string">&#39;sum&#39;</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			defaults<span class="token punctuation">,</span>
			config<span class="token punctuation">,</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>registers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// in case config.registers is \`undefined\`</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>registers <span class="token operator">=</span> <span class="token punctuation">[</span>globalRegistry<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>help<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Missing mandatory help parameter&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Missing mandatory name parameter&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">validateMetricName</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Invalid metric name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">validateLabelName</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>labelNames<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Invalid label name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>collect <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> <span class="token keyword">this</span><span class="token punctuation">.</span>collect <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Optional &quot;collect&quot; parameter must be a function&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> register <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>registers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			register<span class="token punctuation">.</span><span class="token function">registerMetric</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">/* abstract */</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5165\u53C2\u4FDD\u8BC1\u53C2\u6570\u6D45\u62F7\u8D1D" tabindex="-1">\u5165\u53C2\u4FDD\u8BC1\u53C2\u6570\u6D45\u62F7\u8D1D <a class="header-anchor" href="#\u5165\u53C2\u4FDD\u8BC1\u53C2\u6570\u6D45\u62F7\u8D1D" aria-hidden="true">#</a></h2><p>\u5BF9\u4E8E\u6570\u7EC4\u5165\u53C2\u53EF\u4EE5\u901A\u8FC7<code>[...arr]</code>:</p><div class="language-js"><pre><code><span class="token comment">/**
 * \u5728\u6570\u7EC4\u4E2D\u968F\u673A\u751F\u9009\u62E9 n \u4E2A\u5143\u7D20\u751F\u6210\u65B0\u7684\u6570\u7EC4
 * \u57FA\u4E8EFisher\u2013Yates shuffle \u6D17\u724C\u7B97\u6CD5
 * @param arr - \u539F\u59CB\u6570\u7EC4
 * @param n - \u65B0\u6570\u7EC4\u5143\u7D20\u4E2A\u6570
 * @returns \u968F\u673A\u65B0\u6570\u7EC4
 */</span>
<span class="token keyword">function</span> <span class="token function">sampleSize</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">]</span><span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> m <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// eslint-disable-next-line</span>
    <span class="token keyword">const</span> i <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> m<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// eslint-disable-next-line</span>
    <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><p>\u5BF9\u8C61\u4E5F\u662F\u4E00\u6837\u7684\u901A\u8FC7<code>{...obj}</code></p><h2 id="\u83B7\u53D6\u5F62\u53C2\u4E2A\u6570" tabindex="-1">\u83B7\u53D6\u5F62\u53C2\u4E2A\u6570 <a class="header-anchor" href="#\u83B7\u53D6\u5F62\u53C2\u4E2A\u6570" aria-hidden="true">#</a></h2><p>\u51FD\u6570\u5B9E\u4F8B.length\u5C31\u662F\u5F62\u53C2\u7684\u4E2A\u6570\uFF0Carguments.length\u662F\u5B9E\u53C2\u7684\u4E2A\u6570\uFF0C\u4F46\u662F\u4E00\u822C\u53EF\u4EE5\u901A\u8FC7\u5269\u4F59\u53C2\u8003\u6765\u89E3\u51B3\u3002</p><p>\u770B\u4E00\u4E2A\u5F62\u53C2\u7684\u4F7F\u7528\u573A\u666F\uFF1A</p><div class="language-js"><pre><code>

<span class="token comment">//\u4E0B\u9762\u4ECB\u7ECD\u521B\u5EFA\u51FD\u6570\u67EF\u91CC\u5316\u7684\u901A\u7528\u65B9\u6CD5 </span>
<span class="token keyword">function</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//fn.length\u662F\u5F62\u53C2\u7684\u4E2A\u5565</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> fn<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">curry</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>args2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B:</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span>num2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> num1<span class="token operator">+</span>num2<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token keyword">var</span> curriedAdd <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span>add<span class="token punctuation">)</span><span class="token punctuation">;</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">curriedAdd</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//8 </span>
<span class="token keyword">var</span> curriedAddB <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span>add<span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">curriedAddB</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//15</span>

</code></pre></div>`,23),e=[o];function c(k,l,u,r,i,d){return a(),s("div",null,e)}var m=n(t,[["render",c]]);export{w as __pageData,m as default};