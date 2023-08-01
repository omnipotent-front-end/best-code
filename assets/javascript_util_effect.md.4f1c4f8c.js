import{_ as n,c as s,o as a,a as t}from"./app.7806089e.js";const _='{"title":"\u526F\u4F5C\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5168\u5C40\u53D8\u91CF","slug":"\u5168\u5C40\u53D8\u91CF"},{"level":3,"title":"\u5B89\u5168\u83B7\u53D6\u5168\u5C40\u53D8\u91CF","slug":"\u5B89\u5168\u83B7\u53D6\u5168\u5C40\u53D8\u91CF"}],"relativePath":"javascript/util/effect.md"}',o={},p=t(`<h1 id="\u526F\u4F5C\u7528" tabindex="-1">\u526F\u4F5C\u7528 <a class="header-anchor" href="#\u526F\u4F5C\u7528" aria-hidden="true">#</a></h1><h2 id="\u5168\u5C40\u53D8\u91CF" tabindex="-1">\u5168\u5C40\u53D8\u91CF <a class="header-anchor" href="#\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a></h2><h3 id="\u5B89\u5168\u83B7\u53D6\u5168\u5C40\u53D8\u91CF" tabindex="-1">\u5B89\u5168\u83B7\u53D6\u5168\u5C40\u53D8\u91CF <a class="header-anchor" href="#\u5B89\u5168\u83B7\u53D6\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a></h3><p>\u5224\u65AD\u662F\u5426\u5728node\u73AF\u5883</p><div class="language-js"><pre><code><span class="token keyword">interface</span> <span class="token class-name">WebMonitorGlobal</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">__WebMonitor__</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        hub<span class="token operator">?</span><span class="token operator">:</span>any<span class="token punctuation">;</span>
        logger<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 


<span class="token comment">/**
 * Judge is it node environment
 * 
 * @returns {boolean}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> isNodeEnv <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> process <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">?</span> process <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;[object process]&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> fallbackGlobalObject <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">/**
 * Get global object safely
 * 
 * @returns {object}
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> getGlobalObject <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">&amp;</span> <span class="token parameter">WebMonitorGlobal</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">isNodeEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token operator">?</span> global
        <span class="token operator">:</span> <span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span>
            <span class="token operator">?</span> window
            <span class="token operator">:</span> <span class="token keyword">typeof</span> self <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span>
                <span class="token operator">?</span> self
                <span class="token operator">:</span> fallbackGlobalObject<span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token constant">T</span> <span class="token operator">&amp;</span> WebMonitorGlobal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53C2\u8003\u81EA\uFF1A<a href="https://github.com/brizer/web-monitor-sdk/blob/master/src/util/env.ts#L25" target="_blank" rel="noopener noreferrer">web-monitor-sdk/env.ts at master \xB7 brizer/web-monitor-sdk</a></p>`,6),e=[p];function c(r,l,k,i,u,d){return a(),s("div",null,e)}var f=n(o,[["render",c]]);export{_ as __pageData,f as default};
