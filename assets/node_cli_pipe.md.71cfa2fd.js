import{_ as n,c as a,o as s,a as e}from"./app.2a3660c5.js";const h='{"title":"\u8F93\u5165\u8F93\u51FA\u6D41","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6E05\u7406\u63A7\u5236\u53F0","slug":"\u6E05\u7406\u63A7\u5236\u53F0"}],"relativePath":"node/cli/pipe.md"}',t={},o=e(`<h1 id="\u8F93\u5165\u8F93\u51FA\u6D41" tabindex="-1">\u8F93\u5165\u8F93\u51FA\u6D41 <a class="header-anchor" href="#\u8F93\u5165\u8F93\u51FA\u6D41" aria-hidden="true">#</a></h1><h2 id="\u6E05\u7406\u63A7\u5236\u53F0" tabindex="-1">\u6E05\u7406\u63A7\u5236\u53F0 <a class="header-anchor" href="#\u6E05\u7406\u63A7\u5236\u53F0" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */</span>

<span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
<span class="token comment">//brizer: clearconsole</span>
<span class="token keyword">function</span> <span class="token function">clearConsole</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  process<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>
    process<span class="token punctuation">.</span>platform <span class="token operator">===</span> <span class="token string">&#39;win32&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;\\x1B[2J\\x1B[0f&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;\\x1B[2J\\x1B[3J\\x1B[H&#39;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> clearConsole<span class="token punctuation">;</span>
</code></pre></div><p>\u53C2\u8003cra\uFF1A<a href="https://github.com/FunnyLiu/create-react-app/blob/master/packages/react-dev-utils/clearConsole.js" target="_blank" rel="noopener noreferrer">create-react-app/clearConsole.js at master \xB7 FunnyLiu/create-react-app</a></p>`,4),p=[o];function c(r,i,l,u,d,k){return s(),a("div",null,p)}var f=n(t,[["render",c]]);export{h as __pageData,f as default};
