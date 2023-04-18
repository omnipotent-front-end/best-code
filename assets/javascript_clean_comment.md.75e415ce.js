import{_ as n,c as a,o as s,a as t}from"./app.5fee0017.js";const h='{"title":"\u6CE8\u91CA","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u51FD\u6570\u5165\u53C2","slug":"\u51FD\u6570\u5165\u53C2"},{"level":2,"title":"\u51FD\u6570\u8FD4\u56DE\u503C","slug":"\u51FD\u6570\u8FD4\u56DE\u503C"},{"level":2,"title":"\u51FD\u6570\u6807\u8BC6","slug":"\u51FD\u6570\u6807\u8BC6"}],"relativePath":"javascript/clean/comment.md"}',e={},p=t(`<h1 id="\u6CE8\u91CA" tabindex="-1">\u6CE8\u91CA <a class="header-anchor" href="#\u6CE8\u91CA" aria-hidden="true">#</a></h1><h2 id="\u51FD\u6570\u5165\u53C2" tabindex="-1">\u51FD\u6570\u5165\u53C2 <a class="header-anchor" href="#\u51FD\u6570\u5165\u53C2" aria-hidden="true">#</a></h2><div class="language-js"><pre><code>
<span class="token comment">// \u5BF9\u8C61</span>
<span class="token comment">/**
 * Assign the project to an employee.
 * @param {Object} employee - The employee who is responsible for the project.
 * @param {string} employee.name - The name of the employee.
 * @param {string} employee.department - The employee&#39;s department.
 */</span>
<span class="token class-name">Project</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">assign</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name<span class="token punctuation">,</span> department <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//\u6570\u7EC4</span>

<span class="token comment">/**
 * Assign the project to a list of employees.
 * @param {Object[]} employees - The employees who are responsible for the project.
 * @param {string} employees[].name - The name of an employee.
 * @param {string} employees[].department - The employee&#39;s department.
 */</span>
<span class="token class-name">Project</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">assign</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">employees</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//\u591A\u7C7B\u578B+\u9ED8\u8BA4\u503C</span>

<span class="token comment">/**
 * @param {(string|string[])} [somebody=John Doe] - Somebody&#39;s name, or an array of names.
 */</span>
<span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token parameter">somebody</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>somebody<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        somebody <span class="token operator">=</span> <span class="token string">&#39;John Doe&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>somebody<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        somebody <span class="token operator">=</span> somebody<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;, &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Hello &#39;</span> <span class="token operator">+</span> somebody<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">//demo</span>
<span class="token comment">/**
 * \u622A\u56FE
 * @async
 * @function screenShots
 * @example
 * import { screenShots } from &#39;@/utils/imageUtil&#39;
 * await screenShots({
 *   dom: this.$refs.canvas,
 *   config: {
 *     name: &#39;devops\u65E5\u62A5\u8868&#39;
 *    }
 * })
 * @param {Object} params - \u53C2\u6570
 * @param {Object} params.dom - \u9700\u8981\u622A\u53D6\u7684dom\u5143\u7D20
 * @param {Object} params.canvasParams \u900F\u4F20\u7ED9html2canvas\u7684\u914D\u7F6E\u53C2\u6570
 * @param {Object} params.config \u81EA\u7528\u7684\u914D\u7F6E
 * @param {string} params.config.name \u56FE\u7247\u540D\u79F0
 */</span>
</code></pre></div><h2 id="\u51FD\u6570\u8FD4\u56DE\u503C" tabindex="-1">\u51FD\u6570\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u51FD\u6570\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">/**
 * Returns the sum of a and b
 * @param {number} a
 * @param {number} b
 * @returns {number} Sum of a and b
 */</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//promise</span>
<span class="token comment">/**
 * Returns the sum of a and b
 * @param {number} a
 * @param {number} b
 * @returns {Promise} Promise object represents the sum of a and b
 */</span>
<span class="token keyword">function</span> <span class="token function">sumAsync</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// \u591A\u7C7B\u578B</span>

<span class="token comment">/**
 * Returns the sum of a and b
 * @param {number} a
 * @param {number} b
 * @param {boolean} retArr If set to true, the function will return an array
 * @returns {(number|Array)} Sum of a and b or an array that contains a, b and the sum of a and b.
 */</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> retArr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>retArr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> a <span class="token operator">+</span> b<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u51FD\u6570\u6807\u8BC6" tabindex="-1">\u51FD\u6570\u6807\u8BC6 <a class="header-anchor" href="#\u51FD\u6570\u6807\u8BC6" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// \u5F02\u6B65</span>
<span class="token comment">/**
 * Download data from the specified URL.
 *
 * @async
 * @function downloadData
 * @param {string} url - The URL to download from.
 * @return {Promise&lt;string&gt;} The data from the URL.
 */</span>
</code></pre></div>`,7),o=[p];function c(r,u,l,i,k,m){return s(),a("div",null,o)}var f=n(e,[["render",c]]);export{h as __pageData,f as default};
