import{_ as n,c as s,o as a,a as p}from"./app.7806089e.js";const y='{"title":"\u7C7B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6700\u4F73\u5B9E\u8DF5\u53C2\u8003","slug":"\u6700\u4F73\u5B9E\u8DF5\u53C2\u8003"},{"level":2,"title":"class\u4E66\u5199","slug":"class\u4E66\u5199"},{"level":2,"title":"\u4F7F\u7528\u94FE\u5F0F\u8C03\u7528","slug":"\u4F7F\u7528\u94FE\u5F0F\u8C03\u7528"},{"level":2,"title":"\u591A\u7528\u7EC4\u5408\u5C11\u7528\u7EE7\u627F","slug":"\u591A\u7528\u7EC4\u5408\u5C11\u7528\u7EE7\u627F"},{"level":2,"title":"SOLID","slug":"solid"},{"level":3,"title":"Single Responsibility Principle (SRP)","slug":"single-responsibility-principle-srp"},{"level":3,"title":"Open/Closed Principle (OCP)","slug":"open-closed-principle-ocp"},{"level":3,"title":"Liskov Substitution Principle (LSP)","slug":"liskov-substitution-principle-lsp"},{"level":3,"title":"Interface Segregation Principle (ISP)","slug":"interface-segregation-principle-isp"},{"level":3,"title":"Dependency Inversion Principle (DIP)","slug":"dependency-inversion-principle-dip"},{"level":2,"title":"\u8C03\u7528\u51FD\u6570\u7684\u51FD\u6570\u548C\u88AB\u8C03\u51FD\u6570\u5E94\u653E\u5728\u8F83\u8FD1\u7684\u4F4D\u7F6E","slug":"\u8C03\u7528\u51FD\u6570\u7684\u51FD\u6570\u548C\u88AB\u8C03\u51FD\u6570\u5E94\u653E\u5728\u8F83\u8FD1\u7684\u4F4D\u7F6E"},{"level":2,"title":"\u51BB\u7ED3\u79C1\u6709\u53D8\u91CF","slug":"\u51BB\u7ED3\u79C1\u6709\u53D8\u91CF"},{"level":2,"title":"\u79C1\u6709\u5C5E\u6027","slug":"\u79C1\u6709\u5C5E\u6027"},{"level":2,"title":"\u91CD\u7F6E\u5C5E\u6027","slug":"\u91CD\u7F6E\u5C5E\u6027"}],"relativePath":"javascript/clean/class.md"}',t={},o=p(`<h1 id="\u7C7B" tabindex="-1">\u7C7B <a class="header-anchor" href="#\u7C7B" aria-hidden="true">#</a></h1><h2 id="\u6700\u4F73\u5B9E\u8DF5\u53C2\u8003" tabindex="-1">\u6700\u4F73\u5B9E\u8DF5\u53C2\u8003 <a class="header-anchor" href="#\u6700\u4F73\u5B9E\u8DF5\u53C2\u8003" aria-hidden="true">#</a></h2><p><a href="https://github.com/FunnyLiu/vscode-wakatime/blob/readsource/src/logger.ts#L1" target="_blank" rel="noopener noreferrer">\u53C2\u8003waketime\uFF0C\u591A\u4E2Aclass\u7EC4\u5408</a></p><p><a href="https://github.com/jdalrymple/gitbeaker" target="_blank" rel="noopener noreferrer">gitlab sdk</a>\uFF0C\u72EC\u7ACB\u5206\u5F00browser\u548Cnode\uFF0C\u5E95\u5C42\u540C\u65F6\u57FA\u4E8Ecore\uFF0Cbrowser\u4E0A\u5C42\u9002\u914D\u4E86request</p><p>extends,super\u7684\u5927\u91CF\u8FD0\u7528\uFF0C\u53C2\u8003\uFF1A <a href="https://github.com/FunnyLiu/apollo-client/blob/readsource/src/react/data/QueryData.ts#L31" target="_blank" rel="noopener noreferrer">apollo-client</a></p><p>js\u7248class\u7684\u7528\u6CD5demo\uFF0C\u4ECA\u65E5\u5934\u6761\u5F00\u6E90\u64AD\u653E\u5668\uFF0C\u53C2\u8003<a href="https://github.com/FunnyLiu/xgplayer/blob/readsource/packages/xgplayer-buffer/src/buffer.js#L1" target="_blank" rel="noopener noreferrer">xgplayer</a></p><h2 id="class\u4E66\u5199" tabindex="-1">class\u4E66\u5199 <a class="header-anchor" href="#class\u4E66\u5199" aria-hidden="true">#</a></h2><p>\u5F03\u7528es5\uFF0C\u62E5\u62B1es6</p><p><strong>Bad:</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">Animal</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">Animal</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Instantiate Animal with \`new\`&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Animal</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">move</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Mammal</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">age<span class="token punctuation">,</span> furColor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">Mammal</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Instantiate Mammal with \`new\`&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">Animal</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>furColor <span class="token operator">=</span> furColor<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Mammal</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Animal</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Mammal</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Mammal<span class="token punctuation">;</span>
<span class="token class-name">Mammal</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">liveBirth</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">liveBirth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Human</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">age<span class="token punctuation">,</span> furColor<span class="token punctuation">,</span> languageSpoken</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">Human</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Instantiate Human with \`new\`&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">Mammal</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> age<span class="token punctuation">,</span> furColor<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>languageSpoken <span class="token operator">=</span> languageSpoken<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Human</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Mammal</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Human</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Human<span class="token punctuation">;</span>
<span class="token class-name">Human</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">speak</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>Good:</strong></p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* ... */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Mammal</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">age<span class="token punctuation">,</span> furColor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>furColor <span class="token operator">=</span> furColor<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">liveBirth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* ... */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Human</span> <span class="token keyword">extends</span> <span class="token class-name">Mammal</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">age<span class="token punctuation">,</span> furColor<span class="token punctuation">,</span> languageSpoken</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>age<span class="token punctuation">,</span> furColor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>languageSpoken <span class="token operator">=</span> languageSpoken<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* ... */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u4F7F\u7528\u94FE\u5F0F\u8C03\u7528" tabindex="-1">\u4F7F\u7528\u94FE\u5F0F\u8C03\u7528 <a class="header-anchor" href="#\u4F7F\u7528\u94FE\u5F0F\u8C03\u7528" aria-hidden="true">#</a></h2><p><strong>Bad:</strong></p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">make<span class="token punctuation">,</span> model<span class="token punctuation">,</span> color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>make <span class="token operator">=</span> make<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>model <span class="token operator">=</span> model<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setMake</span><span class="token punctuation">(</span><span class="token parameter">make</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>make <span class="token operator">=</span> make<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setModel</span><span class="token punctuation">(</span><span class="token parameter">model</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>model <span class="token operator">=</span> model<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setColor</span><span class="token punctuation">(</span><span class="token parameter">color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>make<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">&quot;Ford&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;F-150&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
car<span class="token punctuation">.</span><span class="token function">setColor</span><span class="token punctuation">(</span><span class="token string">&quot;pink&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
car<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>Good:</strong></p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">make<span class="token punctuation">,</span> model<span class="token punctuation">,</span> color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>make <span class="token operator">=</span> make<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>model <span class="token operator">=</span> model<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setMake</span><span class="token punctuation">(</span><span class="token parameter">make</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>make <span class="token operator">=</span> make<span class="token punctuation">;</span>
    <span class="token comment">// NOTE: Returning this for chaining</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setModel</span><span class="token punctuation">(</span><span class="token parameter">model</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>model <span class="token operator">=</span> model<span class="token punctuation">;</span>
    <span class="token comment">// NOTE: Returning this for chaining</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setColor</span><span class="token punctuation">(</span><span class="token parameter">color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
    <span class="token comment">// NOTE: Returning this for chaining</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>make<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// NOTE: Returning this for chaining</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">&quot;Ford&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;F-150&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setColor</span><span class="token punctuation">(</span><span class="token string">&quot;pink&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h2 id="\u591A\u7528\u7EC4\u5408\u5C11\u7528\u7EE7\u627F" tabindex="-1">\u591A\u7528\u7EC4\u5408\u5C11\u7528\u7EE7\u627F <a class="header-anchor" href="#\u591A\u7528\u7EC4\u5408\u5C11\u7528\u7EE7\u627F" aria-hidden="true">#</a></h2><p><strong>Bad:</strong></p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> email</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>email <span class="token operator">=</span> email<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// Bad because Employees &quot;have&quot; tax data. EmployeeTaxData is not a type of Employee</span>
<span class="token keyword">class</span> <span class="token class-name">EmployeeTaxData</span> <span class="token keyword">extends</span> <span class="token class-name">Employee</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">ssn<span class="token punctuation">,</span> salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ssn <span class="token operator">=</span> ssn<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>salary <span class="token operator">=</span> salary<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>Good:</strong></p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">EmployeeTaxData</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">ssn<span class="token punctuation">,</span> salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ssn <span class="token operator">=</span> ssn<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>salary <span class="token operator">=</span> salary<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> email</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>email <span class="token operator">=</span> email<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setTaxData</span><span class="token punctuation">(</span><span class="token parameter">ssn<span class="token punctuation">,</span> salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>taxData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EmployeeTaxData</span><span class="token punctuation">(</span>ssn<span class="token punctuation">,</span> salary<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="solid" tabindex="-1">SOLID <a class="header-anchor" href="#solid" aria-hidden="true">#</a></h2><h3 id="single-responsibility-principle-srp" tabindex="-1">Single Responsibility Principle (SRP) <a class="header-anchor" href="#single-responsibility-principle-srp" aria-hidden="true">#</a></h3><p>\u5355\u4E00\u804C\u8D23\u539F\u5219\uFF0C\u4E00\u4E2A\u7C7B\u53EA\u505A\u4E00\u4EF6\u4E8B\u60C5\u3002</p><p><strong>Bad:</strong></p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">UserSettings</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>user <span class="token operator">=</span> user<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">changeSettings</span><span class="token punctuation">(</span><span class="token parameter">settings</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">verifyCredentials</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">verifyCredentials</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>Good:</strong></p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">UserAuth</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>user <span class="token operator">=</span> user<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">verifyCredentials</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">UserSettings</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>user <span class="token operator">=</span> user<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>auth <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserAuth</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">changeSettings</span><span class="token punctuation">(</span><span class="token parameter">settings</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>auth<span class="token punctuation">.</span><span class="token function">verifyCredentials</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="open-closed-principle-ocp" tabindex="-1">Open/Closed Principle (OCP) <a class="header-anchor" href="#open-closed-principle-ocp" aria-hidden="true">#</a></h3><p>\u5F00\u653E/\u5C01\u95ED\u539F\u5219\uFF0C\u5F00\u53D1\u8005\u589E\u52A0\u65B0\u529F\u80FD\u65F6\u4E0D\u5E94\u8BE5\u4FEE\u6539\u73B0\u6709\u4EE3\u7801\u3002</p><p><strong>Bad:</strong></p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">AjaxAdapter</span> <span class="token keyword">extends</span> <span class="token class-name">Adapter</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;ajaxAdapter&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">NodeAdapter</span> <span class="token keyword">extends</span> <span class="token class-name">Adapter</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;nodeAdapter&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">HttpRequester</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">adapter</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>adapter <span class="token operator">=</span> adapter<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>adapter<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">&quot;ajaxAdapter&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">makeAjaxCall</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// transform response and return</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>adapter<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">&quot;nodeAdapter&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">makeHttpCall</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// transform response and return</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">makeAjaxCall</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// request and return promise</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">makeHttpCall</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// request and return promise</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>Good:</strong></p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">AjaxAdapter</span> <span class="token keyword">extends</span> <span class="token class-name">Adapter</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;ajaxAdapter&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// request and return promise</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">NodeAdapter</span> <span class="token keyword">extends</span> <span class="token class-name">Adapter</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;nodeAdapter&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// request and return promise</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">HttpRequester</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">adapter</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>adapter <span class="token operator">=</span> adapter<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>adapter<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// transform response and return</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="liskov-substitution-principle-lsp" tabindex="-1">Liskov Substitution Principle (LSP) <a class="header-anchor" href="#liskov-substitution-principle-lsp" aria-hidden="true">#</a></h3><p>\u91CC\u6C0F\u53D8\u6362\u539F\u5219\u3002\u6B63\u5F0F\u5B9A\u4E49\u4E3A\u201C\u5982\u679CS\u662FT\u7684\u5B50\u7C7B\u578B\uFF0C\u5219\u53EF\u4EE5\u7528\u7C7B\u578BS\u7684\u5BF9\u8C61\u66FF\u6362\u7C7B\u578BT\u7684\u5BF9\u8C61\uFF08\u5373\uFF0C\u7C7B\u578BS\u7684\u5BF9\u8C61\u53EF\u4EE5\u66FF\u6362\u7C7B\u578BT\u7684\u5BF9\u8C61\uFF09\uFF0C\u800C\u65E0\u9700\u66F4\u6539\u8BE5\u7A0B\u5E8F\u7684\u4EFB\u4F55\u6240\u9700\u5C5E\u6027\uFF08\u6B63\u786E\u6027\uFF0C\u6267\u884C\u7684\u4EFB\u52A1\u7B49\uFF09\u3002\u201D</p><p>\u5982\u60A8\u6709\u4E00\u4E2A\u7236\u7C7B\u548C\u4E00\u4E2A\u5B50\u7C7B\uFF0C\u5219\u57FA\u7C7B\u548C\u5B50\u7C7B\u53EF\u4EE5\u4E92\u6362\u4F7F\u7528\u800C\u4E0D\u4F1A\u5F97\u5230\u9519\u8BEF\u7684\u7ED3\u679C\u3002</p><p><strong>Bad:</strong></p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setColor</span><span class="token punctuation">(</span><span class="token parameter">color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">area</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>

  <span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token parameter">width</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token parameter">height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token keyword">extends</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u7236\u5B50\u7C7B\u4E92\u6362\u540E\u8FD9\u91CC\u4F1A\u51FA\u9519</span>
  <span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token parameter">width</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> width<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token parameter">height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> height<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">renderLargeRectangles</span><span class="token punctuation">(</span><span class="token parameter">rectangles</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  rectangles<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">rectangle</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    rectangle<span class="token punctuation">.</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    rectangle<span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> area <span class="token operator">=</span> rectangle<span class="token punctuation">.</span><span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// BAD: Returns 25 for Square. Should be 20.</span>
    rectangle<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>area<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> rectangles <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Square</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">renderLargeRectangles</span><span class="token punctuation">(</span>rectangles<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>Good:</strong></p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
  <span class="token function">setColor</span><span class="token punctuation">(</span><span class="token parameter">color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">area</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">width<span class="token punctuation">,</span> height</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">length</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">=</span> length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">renderLargeShapes</span><span class="token punctuation">(</span><span class="token parameter">shapes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  shapes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">shape</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> area <span class="token operator">=</span> shape<span class="token punctuation">.</span><span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    shape<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>area<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> shapes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Square</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">renderLargeShapes</span><span class="token punctuation">(</span>shapes<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h3 id="interface-segregation-principle-isp" tabindex="-1">Interface Segregation Principle (ISP) <a class="header-anchor" href="#interface-segregation-principle-isp" aria-hidden="true">#</a></h3><p>\u63A5\u53E3\u9694\u79BB\u539F\u5219\uFF0C\u4E0D\u5E94\u5F3A\u8FEB\u5BA2\u6237\u7AEF\u4F9D\u8D56\u5176\u4E0D\u4F7F\u7528\u7684\u63A5\u53E3\u3002</p><p><strong>Bad:</strong></p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">DOMTraverser</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">settings</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>settings <span class="token operator">=</span> settings<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>rootNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>settings<span class="token punctuation">.</span>rootNode<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>animationModule<span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">traverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> $ <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DOMTraverser</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">rootNode</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;body&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">animationModule</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// Most of the time, we won&#39;t need to animate when traversing.</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>Good:</strong></p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">DOMTraverser</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">settings</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>settings <span class="token operator">=</span> settings<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> settings<span class="token punctuation">.</span>options<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>rootNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>settings<span class="token punctuation">.</span>rootNode<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setupOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">setupOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>animationModule<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">traverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> $ <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DOMTraverser</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">rootNode</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&quot;body&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">animationModule</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h3 id="dependency-inversion-principle-dip" tabindex="-1">Dependency Inversion Principle (DIP) <a class="header-anchor" href="#dependency-inversion-principle-dip" aria-hidden="true">#</a></h3><p>\u4F9D\u8D56\u53CD\u8F6C\u539F\u5219\u3002\u8BE5\u539F\u5219\u9648\u8FF0\u4E86\u4E24\u4E2A\u57FA\u672C\u8981\u70B9\uFF1A</p><p>1\u3001\u9AD8\u7EA7\u6A21\u5757\u4E0D\u5E94\u4F9D\u8D56\u4E8E\u4F4E\u7EA7\u6A21\u5757\u3002 \u4E24\u8005\u90FD\u5E94\u4F9D\u8D56\u62BD\u8C61\u3002</p><p>2\u3001\u62BD\u8C61\u4E0D\u5E94\u4F9D\u8D56\u7EC6\u8282\u3002 \u7EC6\u8282\u5E94\u53D6\u51B3\u4E8E\u62BD\u8C61\u3002</p><p><strong>Bad:</strong></p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">InventoryRequester</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token constant">REQ_METHODS</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;HTTP&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">requestItem</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">InventoryTracker</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">items</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> items<span class="token punctuation">;</span>

    <span class="token comment">// BAD: We have created a dependency on a specific request implementation.</span>
    <span class="token comment">// We should just have requestItems depend on a request method: \`request\`</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>requester <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InventoryRequester</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">requestItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>requester<span class="token punctuation">.</span><span class="token function">requestItem</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> inventoryTracker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InventoryTracker</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;apples&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bananas&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
inventoryTracker<span class="token punctuation">.</span><span class="token function">requestItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>Good:</strong></p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">InventoryTracker</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">items<span class="token punctuation">,</span> requester</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> items<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>requester <span class="token operator">=</span> requester<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">requestItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>requester<span class="token punctuation">.</span><span class="token function">requestItem</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">InventoryRequesterV1</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token constant">REQ_METHODS</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;HTTP&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">requestItem</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">InventoryRequesterV2</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token constant">REQ_METHODS</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;WS&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">requestItem</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// By constructing our dependencies externally and injecting them, we can easily</span>
<span class="token comment">// substitute our request module for a fancy new one that uses WebSockets.</span>
<span class="token keyword">const</span> inventoryTracker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InventoryTracker</span><span class="token punctuation">(</span>
  <span class="token punctuation">[</span><span class="token string">&quot;apples&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bananas&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token keyword">new</span> <span class="token class-name">InventoryRequesterV2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
inventoryTracker<span class="token punctuation">.</span><span class="token function">requestItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><p>\u9009\u81EA<a href="https://github.com/ryanmcdermott/clean-code-javascript" target="_blank" rel="noopener noreferrer">ryanmcdermott/clean-code-javascript: Clean Code concepts adapted for JavaScript</a></p><h2 id="\u8C03\u7528\u51FD\u6570\u7684\u51FD\u6570\u548C\u88AB\u8C03\u51FD\u6570\u5E94\u653E\u5728\u8F83\u8FD1\u7684\u4F4D\u7F6E" tabindex="-1">\u8C03\u7528\u51FD\u6570\u7684\u51FD\u6570\u548C\u88AB\u8C03\u51FD\u6570\u5E94\u653E\u5728\u8F83\u8FD1\u7684\u4F4D\u7F6E <a class="header-anchor" href="#\u8C03\u7528\u51FD\u6570\u7684\u51FD\u6570\u548C\u88AB\u8C03\u51FD\u6570\u5E94\u653E\u5728\u8F83\u8FD1\u7684\u4F4D\u7F6E" aria-hidden="true">#</a></h2><p>\u5F53\u51FD\u6570\u95F4\u5B58\u5728\u76F8\u4E92\u8C03\u7528\u7684\u60C5\u51B5\u65F6\uFF0C\u5E94\u5C06\u4E24\u8005\u7F6E\u4E8E\u8F83\u8FD1\u7684\u4F4D\u7F6E\u3002</p><p>\u7406\u60F3\u60C5\u51B5\u4E0B\uFF0C\u5E94\u5C06\u8C03\u7528\u5176\u4ED6\u51FD\u6570\u7684\u51FD\u6570\u5199\u5728\u88AB\u8C03\u7528\u51FD\u6570\u7684\u4E0A\u65B9\u3002</p><p><strong>Bad:</strong></p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">PerformanceReview</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">employee</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>employee <span class="token operator">=</span> employee<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">lookupPeers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> db<span class="token punctuation">.</span><span class="token function">lookup</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>employee<span class="token punctuation">,</span> <span class="token string">&quot;peers&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">lookupManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> db<span class="token punctuation">.</span><span class="token function">lookup</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>employee<span class="token punctuation">,</span> <span class="token string">&quot;manager&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getPeerReviews</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> peers <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">lookupPeers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>

  <span class="token function">perfReview</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getPeerReviews</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getManagerReview</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getSelfReview</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getManagerReview</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> manager <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">lookupManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getSelfReview</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> review <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PerformanceReview</span><span class="token punctuation">(</span>employee<span class="token punctuation">)</span><span class="token punctuation">;</span>
review<span class="token punctuation">.</span><span class="token function">perfReview</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><p><strong>Good:</strong></p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">PerformanceReview</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">employee</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>employee <span class="token operator">=</span> employee<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">perfReview</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getPeerReviews</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getManagerReview</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getSelfReview</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getPeerReviews</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> peers <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">lookupPeers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>

  <span class="token function">lookupPeers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> db<span class="token punctuation">.</span><span class="token function">lookup</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>employee<span class="token punctuation">,</span> <span class="token string">&quot;peers&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getManagerReview</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> manager <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">lookupManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">lookupManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> db<span class="token punctuation">.</span><span class="token function">lookup</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>employee<span class="token punctuation">,</span> <span class="token string">&quot;manager&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getSelfReview</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> review <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PerformanceReview</span><span class="token punctuation">(</span>employee<span class="token punctuation">)</span><span class="token punctuation">;</span>
review<span class="token punctuation">.</span><span class="token function">perfReview</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h2 id="\u51BB\u7ED3\u79C1\u6709\u53D8\u91CF" tabindex="-1">\u51BB\u7ED3\u79C1\u6709\u53D8\u91CF <a class="header-anchor" href="#\u51BB\u7ED3\u79C1\u6709\u53D8\u91CF" aria-hidden="true">#</a></h2><p>\u5BF9\u5916\u66B4\u9732\u53EF\u8C03\u7528\u7684API\u548C\u79C1\u6709\u53D8\u91CF\uFF0C\u53EF\u4EE5\u8FDB\u884C\u51BB\u7ED3\uFF0C\u53C2\u8003<a href="https://github.com/FunnyLiu/vta/blob/readsource/packages/core/src/core/App.ts#L131" target="_blank" rel="noopener noreferrer">vta</a></p><div class="language-js"><pre><code>    <span class="token keyword">this</span><span class="token punctuation">.</span>#prepareHelpers <span class="token operator">=</span> Object<span class="token punctuation">.</span>freeze<span class="token operator">&lt;</span>PrepareHelpers<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">cwd</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cwd<span class="token punctuation">,</span>
        <span class="token literal-property property">silent</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>silent<span class="token punctuation">,</span>
        <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">,</span>
        <span class="token literal-property property">getArgument</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getArgument</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">resolvePluginOptions</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">resolvePluginOptions</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">registPlugin</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#registPlugin<span class="token punctuation">,</span>
      <span class="token literal-property property">getPlugin</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#getPlugin<span class="token punctuation">,</span>
      <span class="token literal-property property">registFeature</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#registFeature<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><p>\u6216\u8005\u901A\u8FC7Object.defineProperty\uFF0C\u4E0D\u8BBE\u7F6Eset\uFF0C\u9ED8\u8BA4writable\u4E3Afalse\uFF0C\u6240\u4EE5\u5176\u4ED6\u4EBA\u65E0\u6CD5\u4FEE\u6539\u3002</p><div class="language-js"><pre><code><span class="token comment">//\u5224\u65AD\u662F\u5426\u662Fhttp\u5934\u4E4BX-Requested-With defineGetter(req, &#39;xhr&#39;, function xhr(){</span>
<span class="token keyword">var</span> val <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;X-Requested-With&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> val<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;xmlhttprequest&#39;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/**
* Helper function for creating a getter on an object. *
* @param {Object} obj
* @param {String} name
* @param {Function} getter
* @private
*/</span>
<span class="token comment">//\u4F7F\u7528Object.defineProperty\u6765\u9632\u6B62\u7BE1\u6539\u8FD9\u4E9B\u5BF9\u8C61, //\u56E0\u4E3A\u9ED8\u8BA4\u60C5\u51B5\u4E0Bwritable\u4E3Afalse\uFF0C\u6240\u4EE5\u5373\u4F7F\u5916\u754C\u8BBE\u7F6E\u4E86\u503C\uFF0C\u4E5F\u65E0\u6548\u3002 function defineGetter(obj, name, getter) {</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> name<span class="token punctuation">,</span> <span class="token punctuation">{</span> 
	<span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token literal-property property">get</span><span class="token operator">:</span> getter
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre></div><p>\u53C2\u8003\u81EA<a href="https://github.com/FunnyLiu/express/blob/readsource/lib/request.js#L518" target="_blank" rel="noopener noreferrer">express\u7684\u6E90\u7801</a></p><h2 id="\u79C1\u6709\u5C5E\u6027" tabindex="-1">\u79C1\u6709\u5C5E\u6027 <a class="header-anchor" href="#\u79C1\u6709\u5C5E\u6027" aria-hidden="true">#</a></h2><p>1\u3001\u539F\u751F\u5B9E\u73B0</p><p>ES2019 \u4E2D\u5DF2\u7ECF\u589E\u52A0\u4E86\u5BF9 class \u79C1\u6709\u5C5E\u6027\u7684\u539F\u751F\u652F\u6301\uFF0C\u53EA\u9700\u8981\u5728\u5C5E\u6027 / \u65B9\u6CD5\u540D\u524D\u9762\u52A0\u4E0A <code>&#39;#&#39;</code> \u5C31\u53EF\u4EE5\u5C06\u5176\u5B9A\u4E49\u4E3A\u79C1\u6709\uFF0C\u5E76\u4E14\u652F\u6301\u5B9A\u4E49\u79C1\u6709\u7684 <code>static</code> \u5C5E\u6027 / \u65B9\u6CD5\u3002\u4F8B\u5982\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  
  #name<span class="token punctuation">;</span> 

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hi, i&#39;m </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>#name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> and i&#39;m </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> years old</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p>2\u3001WeakMap</p><p>\u4E0A\u9762\u63D0\u5230\u7684#\u64CD\u4F5C\u7B26\uFF0C\u5728babel\u4E2D\u662F\u901A\u8FC7weakmap\u6765\u5B9E\u73B0</p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    _bar<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> _bar<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> _bar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6700\u5927\u7684\u7F3A\u9677\u5219\u662F\u517C\u5BB9\u6027\u5E26\u6765\u7684\u5185\u5B58\u81A8\u80C0\u95EE\u9898\uFF0C\u5728\u4E0D\u652F\u6301 WeakMap \u7684\u6D4F\u89C8\u5668\u4E2D\u662F\u65E0\u6CD5\u5B9E\u73B0 WeakMap \u7684\u5F31\u5F15\u7528\u7279\u6027\uFF0C\u56E0\u6B64\u5B9E\u4F8B\u65E0\u6CD5\u88AB\u5783\u573E\u56DE\u6536\u3002 \u6BD4\u5982\u793A\u4F8B\u4EE3\u7801\u4E2D privateProp \u662F\u4E00\u4E2A\u5F88\u5927\u7684\u6570\u636E\u9879\uFF0C\u65E0\u5F31\u5F15\u7528\u7684\u60C5\u51B5\u4E0B\uFF0C\u5B9E\u4F8B\u65E0\u6CD5\u56DE\u6536\uFF0C\u4ECE\u800C\u9020\u6210\u5185\u5B58\u6CC4\u9732\u3002</p><p>3.Symbol</p><div class="language-js"><pre><code>
<span class="token keyword">const</span> size <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;size&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Collection</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">[</span>size<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">[</span>size<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">[</span>size<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token function">sizeOf</span><span class="token punctuation">(</span><span class="token parameter">instance</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> instance<span class="token punctuation">[</span>size<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p>\u7F3A\u70B9\u662F</p><p>\u5199\u6CD5\u4E0A\u7A0D\u663E\u522B\u626D\uFF0C\u5FC5\u987B\u4E3A\u6BCF\u4E00\u4E2A\u79C1\u6709\u6210\u5458\u90FD\u521B\u5EFA\u4E00\u4E2A\u95ED\u5305\u53D8\u91CF\u8BA9\u5185\u90E8\u65B9\u6CD5\u53EF\u4EE5\u8BBF\u95EE\u3002</p><p>\u5916\u90E8\u8FD8\u662F\u53EF\u4EE5\u901A\u8FC7 Object.getOwnPropertySymbols\u7684\u65B9\u5F0F\u83B7\u53D6\u5B9E\u4F8B\u7684 symbol \u5C5E\u6027\u540D\u79F0</p><h2 id="\u91CD\u7F6E\u5C5E\u6027" tabindex="-1">\u91CD\u7F6E\u5C5E\u6027 <a class="header-anchor" href="#\u91CD\u7F6E\u5C5E\u6027" aria-hidden="true">#</a></h2><p>\u53C2\u8003<a href="https://github.com/FunnyLiu/preloader/blob/readsource/lib/index.js#L225" target="_blank" rel="noopener noreferrer">preload</a>\uFF0C\u63D0\u4F9B\u4E00\u4E2Areset\u65B9\u6CD5\u7528\u6765\u91CD\u7F6E\u5BF9\u8C61\u5185\u7684\u6240\u6709\u5C5E\u6027\u3002</p>`,85),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var h=n(t,[["render",c]]);export{y as __pageData,h as default};
