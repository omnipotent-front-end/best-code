import{_ as n,c as s,o as a,a as t}from"./app.d572062b.js";const h='{"title":"worker_thread","description":"","frontmatter":{},"headers":[{"level":2,"title":"worker_thread\u6700\u4F73\u5B9E\u8DF5","slug":"worker-thread\u6700\u4F73\u5B9E\u8DF5"}],"relativePath":"node/process/worker_thread.md"}',p={},o=t(`<h1 id="worker-thread" tabindex="-1">worker_thread <a class="header-anchor" href="#worker-thread" aria-hidden="true">#</a></h1><h2 id="worker-thread\u6700\u4F73\u5B9E\u8DF5" tabindex="-1">worker_thread\u6700\u4F73\u5B9E\u8DF5 <a class="header-anchor" href="#worker-thread\u6700\u4F73\u5B9E\u8DF5" aria-hidden="true">#</a></h2><p>\u53C2\u8003<a href="https://github.com/FunnyLiu/jest/blob/readsource/packages/jest-worker/src/workers/NodeThreadsWorker.ts#L49" target="_blank" rel="noopener noreferrer">jest-worker</a></p><div class="language-js"><pre><code><span class="token comment">//\u57FA\u4E8Eworker_threads\u5F00\u542F\u591A\u7EBF\u7A0B\u5DE5\u4F5C</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_worker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./threadChild.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">eval</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">stderr</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">stdout</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">workerData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">cwd</span><span class="token operator">:</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token operator">...</span>process<span class="token punctuation">.</span>env<span class="token punctuation">,</span>
          <span class="token constant">JEST_WORKER_ID</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_options<span class="token punctuation">.</span>workerId <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 0-indexed workerId, 1-indexed JEST_WORKER_ID</span>
        <span class="token punctuation">}</span> <span class="token keyword">as</span> NodeJS<span class="token punctuation">.</span>ProcessEnv<span class="token punctuation">,</span>
        <span class="token comment">// Suppress --debug / --inspect flags while preserving others (like --harmony).</span>
        <span class="token literal-property property">execArgv</span><span class="token operator">:</span> process<span class="token punctuation">.</span>execArgv<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^--(debug|inspect)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">silent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>_options<span class="token punctuation">.</span>forkOptions<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_worker<span class="token punctuation">.</span>stdout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>_stdout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// We need to add a permanent stream to the merged stream to prevent it</span>
        <span class="token comment">// from ending when the subprocess stream ends</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_stdout <span class="token operator">=</span> <span class="token function">mergeStream</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_getFakeStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>_stdout<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_worker<span class="token punctuation">.</span>stdout<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_worker<span class="token punctuation">.</span>stderr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>_stderr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// We need to add a permanent stream to the merged stream to prevent it</span>
        <span class="token comment">// from ending when the subprocess stream ends</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_stderr <span class="token operator">=</span> <span class="token function">mergeStream</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_getFakeStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>_stderr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_worker<span class="token punctuation">.</span>stderr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>_worker<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onMessage</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_worker<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;exit&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onExit</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>_worker<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token constant">CHILD_MESSAGE_INITIALIZE</span><span class="token punctuation">,</span>
      <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_options<span class="token punctuation">.</span>workerPath<span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_options<span class="token punctuation">.</span>setupArgs<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5176\u5B50\u7EBF\u7A0BthreadChild.js\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>parentPort<span class="token punctuation">,</span> isMainThread<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;worker_threads&#39;</span><span class="token punctuation">;</span>

parentPort<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">request</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>request<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token constant">CHILD_MESSAGE_INITIALIZE</span><span class="token operator">:</span>
      <span class="token keyword">const</span> <span class="token literal-property property">init</span><span class="token operator">:</span> ChildMessageInitialize <span class="token operator">=</span> request<span class="token punctuation">;</span>
      file <span class="token operator">=</span> init<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      setupArgs <span class="token operator">=</span> request<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>

    <span class="token keyword">case</span> <span class="token constant">CHILD_MESSAGE_CALL</span><span class="token operator">:</span>
      <span class="token keyword">const</span> <span class="token literal-property property">call</span><span class="token operator">:</span> ChildMessageCall <span class="token operator">=</span> request<span class="token punctuation">;</span>
      <span class="token function">execMethod</span><span class="token punctuation">(</span>call<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> call<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>

    <span class="token keyword">case</span> <span class="token constant">CHILD_MESSAGE_END</span><span class="token operator">:</span>
      <span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>

    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span>
        <span class="token string">&#39;Unexpected request from parent process: &#39;</span> <span class="token operator">+</span> request<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div>`,6),e=[o];function c(u,k,l,r,i,d){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{h as __pageData,y as default};
