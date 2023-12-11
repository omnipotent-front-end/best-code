import{_ as n,c as s,o as a,a as t}from"./app.a8980bfd.js";const y='{"title":"compositions","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5165\u95E8 todo","slug":"\u5165\u95E8-todo"},{"level":2,"title":"\u901A\u8FC7getCurrentInstance\u6765\u5BB9\u9519","slug":"\u901A\u8FC7getcurrentinstance\u6765\u5BB9\u9519"}],"relativePath":"vue/grammar/compositions.md"}',p={},o=t(`<h1 id="compositions" tabindex="-1">compositions <a class="header-anchor" href="#compositions" aria-hidden="true">#</a></h1><h2 id="\u5165\u95E8-todo" tabindex="-1">\u5165\u95E8 todo <a class="header-anchor" href="#\u5165\u95E8-todo" aria-hidden="true">#</a></h2><p>toggleLogic.ts</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vue/composition-api&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">toggleLogic</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> show <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">toggle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    show<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">!</span>show<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> show<span class="token punctuation">,</span> toggle <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>todoListLogic.ts</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> computed<span class="token punctuation">,</span> ComputedRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vue/composition-api&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Todo</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  completed<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  editing<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">totoListLogic</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    todoList<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span>
        completed<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        editing<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">,</span>
        completed<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        editing<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    newTodo<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token keyword">as</span> <span class="token keyword">undefined</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> getLatestTodoId<span class="token operator">:</span> ComputedRef<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> lastTodo<span class="token operator">:</span> Todo <span class="token operator">=</span> state<span class="token punctuation">.</span>todoList<span class="token punctuation">[</span>state<span class="token punctuation">.</span>todoList<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> lastTodo<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">addTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">.</span>newTodo <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    state<span class="token punctuation">.</span>todoList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      id<span class="token operator">:</span> getLatestTodoId<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> state<span class="token punctuation">.</span>newTodo<span class="token punctuation">,</span>
      completed<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      editing<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">editTodo</span><span class="token punctuation">(</span>todo<span class="token operator">:</span> Todo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    todo<span class="token punctuation">.</span>editing <span class="token operator">=</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>editing<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">cancelEdit</span><span class="token punctuation">(</span>todo<span class="token operator">:</span> Todo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    todo<span class="token punctuation">.</span>editing <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">doneEdit</span><span class="token punctuation">(</span>todo<span class="token operator">:</span> Todo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> editingTodo<span class="token operator">:</span> Todo <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> state<span class="token punctuation">.</span>todoList<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span>todo<span class="token operator">:</span> Todo<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> todo<span class="token punctuation">.</span>editing <span class="token operator">===</span> <span class="token boolean">true</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>editingTodo <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    editingTodo<span class="token punctuation">.</span>title <span class="token operator">=</span> todo<span class="token punctuation">.</span>title<span class="token punctuation">;</span>
    editingTodo<span class="token punctuation">.</span>editing <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> state<span class="token punctuation">,</span> getLatestTodoId<span class="token punctuation">,</span> addTodo<span class="token punctuation">,</span> editTodo<span class="token punctuation">,</span> cancelEdit<span class="token punctuation">,</span> doneEdit <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4F7F\u7528\u573A\u666F vue2+setup \u51FD\u6570+@vue/composition-api\uFF1A</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">margin-bottom</span><span class="token punctuation">:</span>32px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Toggle above to hide<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add-todo<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">v-focus</span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add something<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>state.newTodo<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@keyup.enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addTodo<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo in state.todoList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo-row<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.completed<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>!todo.editing<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@dblclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editTodo(todo)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        {{ todo.title }}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
        <span class="token attr-name">v-else</span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.title<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doneEdit(todo)<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@keyup.enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doneEdit(todo)<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@keyup.esc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cancelEdit(todo)<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">v-focus</span>
      <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> totoListLogic <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/compositions/todoListLogic&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> toggleLogic <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@/compositions/toggleLogic&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;HelloWorld&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// todo business logic</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">,</span>
      getLatestTodoId<span class="token punctuation">,</span>
      addTodo<span class="token punctuation">,</span>
      editTodo<span class="token punctuation">,</span>
      cancelEdit<span class="token punctuation">,</span>
      doneEdit<span class="token punctuation">,</span>
    <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">totoListLogic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// toggle business logic</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> show<span class="token punctuation">,</span> toggle <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">toggleLogic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">,</span>
      addTodo<span class="token punctuation">,</span>
      editTodo<span class="token punctuation">,</span>
      doneEdit<span class="token punctuation">,</span>
      cancelEdit<span class="token punctuation">,</span>
      show<span class="token punctuation">,</span>
      toggle<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">focus</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">inserted</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        el<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5BF9\u7167\u4F20\u7EDF vue2 \u7684 optionsAPI \u7248\u672C\uFF1A</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add-todo<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">v-focus</span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add something<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>newTodo<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@keyup.enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addTodo<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo in todoList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo-row<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.completed<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>!todo.editing<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@dblclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editTodo(todo)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        {{ todo.title }}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
        <span class="token attr-name">v-else</span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.title<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@blue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doneEdit(todo)<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@keyup.enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doneEdit(todo)<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">@keyup.esc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cancelEdit(todo)<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  reactive<span class="token punctuation">,</span>
  ref<span class="token punctuation">,</span>
  computed<span class="token punctuation">,</span>
  onMounted<span class="token punctuation">,</span>
  ComputedRef<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vue/composition-api&quot;</span><span class="token punctuation">;</span>

type Todo <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">completed</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">editing</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;HelloWorld&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">component mounted..</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">todoList</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">editing</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">editing</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">newTodo</span><span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token keyword">as</span> <span class="token keyword">undefined</span> <span class="token operator">|</span> string<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">getLatestTodoId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> number <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token literal-property property">lastTodo</span><span class="token operator">:</span> Todo <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>todoList<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>todoList<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> lastTodo<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">addTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>newTodo <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>todoList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>getLatestTodoId <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>newTodo<span class="token punctuation">,</span>
        <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">editing</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">editTodo</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">todo</span><span class="token operator">:</span> Todo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      todo<span class="token punctuation">.</span>editing <span class="token operator">=</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>editing<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">cancelEdit</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">todo</span><span class="token operator">:</span> Todo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token literal-property property">editingTodo</span><span class="token operator">:</span> Todo <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>todoList<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">todo</span><span class="token operator">:</span> Todo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> todo<span class="token punctuation">.</span>editing <span class="token operator">===</span> <span class="token boolean">true</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>editingTodo <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
      editingTodo<span class="token punctuation">.</span>editing <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">doneEdit</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">todo</span><span class="token operator">:</span> Todo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token literal-property property">editingTodo</span><span class="token operator">:</span> Todo <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>todoList<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">todo</span><span class="token operator">:</span> Todo</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> todo<span class="token punctuation">.</span>editing <span class="token operator">===</span> <span class="token boolean">true</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>editingTodo <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
      editingTodo<span class="token punctuation">.</span>title <span class="token operator">=</span> todo<span class="token punctuation">.</span>title<span class="token punctuation">;</span>
      editingTodo<span class="token punctuation">.</span>editing <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">focus</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">inserted</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        el<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u901A\u8FC7getcurrentinstance\u6765\u5BB9\u9519" tabindex="-1">\u901A\u8FC7getCurrentInstance\u6765\u5BB9\u9519 <a class="header-anchor" href="#\u901A\u8FC7getcurrentinstance\u6765\u5BB9\u9519" aria-hidden="true">#</a></h2><p>\u7B14\u8BB0\u7247\u6BB5\uFF1A\u901A\u8FC7getCurrentInstance\u5B9E\u73B0\u5BB9\u9519</p><p>\u5728Vue.js\u7684Composition API\u4E2D\uFF0CgetCurrentInstance\u662F\u4E00\u4E2A\u7528\u4E8E\u83B7\u53D6\u5F53\u524DVue\u5B9E\u4F8B\u7684\u51FD\u6570\u3002\u8FD9\u4E2A\u51FD\u6570\u53EF\u4EE5\u5728\u6211\u4EEC\u7F16\u5199\u81EA\u5B9A\u4E49\u94A9\u5B50\u6216\u5DE5\u5177\u51FD\u6570\u65F6\uFF0C\u5E2E\u52A9\u6211\u4EEC\u5B9E\u73B0\u5BB9\u9519\u673A\u5236\u3002</p><p>\u5F53\u6211\u4EEC\u8C03\u7528getCurrentInstance\u65F6\uFF0C\u5982\u679C\u5F53\u524D\u6709\u6D3B\u52A8\u7684Vue\u5B9E\u4F8B\uFF0C\u5B83\u5C06\u8FD4\u56DE\u8BE5\u5B9E\u4F8B\u3002\u7136\u800C\uFF0C\u5982\u679C\u6CA1\u6709\u6D3B\u52A8\u7684\u5B9E\u4F8B\uFF0C\u5B83\u5C06\u8FD4\u56DEnull\u3002\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u8FD9\u4E2A\u7279\u6027\u6765\u68C0\u67E5\u5F53\u524D\u662F\u5426\u5B58\u5728Vue\u5B9E\u4F8B\uFF0C\u5E76\u636E\u6B64\u51B3\u5B9A\u5982\u4F55\u6267\u884C\u4EE3\u7801\u3002</p><p>\u901A\u8FC7\u5224\u65ADgetCurrentInstance\u7684\u8FD4\u56DE\u503C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u81EA\u5B9A\u4E49\u51FD\u6570\u4E2D\u5B9E\u73B0\u5BB9\u9519\u903B\u8F91\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u6211\u4EEC\u60F3\u5728Vue\u5B9E\u4F8B\u5B58\u5728\u65F6\u4F7F\u7528onMounted\u94A9\u5B50\uFF0C\u800C\u5728\u6CA1\u6709\u5B9E\u4F8B\u65F6\u76F4\u63A5\u6267\u884C\u51FD\u6570\uFF0C\u53EF\u4EE5\u8FD9\u6837\u7F16\u5199\u4EE3\u7801\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>  
  
<span class="token keyword">function</span> <span class="token function">tryOnUnmounted</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token function">onUnmounted</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">tryOnMounted</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token function">onMounted</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
  <span class="token keyword">else</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728\u4E0A\u8FF0\u4EE3\u7801\u4E2D\uFF0CtryOnMounted\u51FD\u6570\u901A\u8FC7\u8C03\u7528getCurrentInstance\u6765\u83B7\u53D6\u5F53\u524DVue\u5B9E\u4F8B\u3002\u5982\u679C\u5B58\u5728\u5B9E\u4F8B\uFF0C\u5219\u4F7F\u7528onMounted\u5C06\u4F20\u5165\u7684\u51FD\u6570fn\u6CE8\u518C\u4E3A\u6302\u8F7D\u94A9\u5B50\u3002\u5982\u679C\u6CA1\u6709\u5B9E\u4F8B\uFF0C\u5219\u76F4\u63A5\u6267\u884C\u51FD\u6570fn\u3002</p><p>\u8FD9\u79CD\u5BB9\u9519\u5199\u6CD5\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u5728\u4E0D\u540C\u60C5\u51B5\u4E0B\u4FDD\u8BC1\u4EE3\u7801\u7684\u6B63\u5E38\u6267\u884C\uFF0C\u65E0\u8BBA\u662F\u5426\u5B58\u5728Vue\u5B9E\u4F8B\u3002\u5B83\u63D0\u9AD8\u4E86\u4EE3\u7801\u7684\u9002\u5E94\u6027\u548C\u5065\u58EE\u6027\uFF0C\u4F7F\u6211\u4EEC\u7684\u81EA\u5B9A\u4E49\u51FD\u6570\u66F4\u52A0\u53EF\u9760\u3002</p>`,18),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{y as __pageData,m as default};
