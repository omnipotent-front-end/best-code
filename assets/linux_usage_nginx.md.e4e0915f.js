import{_ as s,c as a,o as e,a as n,b as p}from"./app.a8980bfd.js";const g='{"title":"Nginx","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u914D\u7F6E\u5927\u5168","slug":"\u914D\u7F6E\u5927\u5168"},{"level":2,"title":"Location\u8BE6\u89E3","slug":"location\u8BE6\u89E3"},{"level":2,"title":"history\u8DEF\u7531404","slug":"history\u8DEF\u7531404"},{"level":2,"title":"\u8DE8\u57DF\u95EE\u9898","slug":"\u8DE8\u57DF\u95EE\u9898"},{"level":2,"title":"gzip\u538B\u7F29","slug":"gzip\u538B\u7F29"}],"relativePath":"linux/usage/nginx.md"}',t={},o=n(`<h1 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-hidden="true">#</a></h1><h2 id="\u914D\u7F6E\u5927\u5168" tabindex="-1">\u914D\u7F6E\u5927\u5168 <a class="header-anchor" href="#\u914D\u7F6E\u5927\u5168" aria-hidden="true">#</a></h2><div class="language-nginx"><pre><code><span class="token comment"># \u542F\u52A8\u8FDB\u7A0B,\u901A\u5E38\u8BBE\u7F6E\u6210\u548Ccpu\u7684\u6570\u91CF\u76F8\u7B49</span>
<span class="token directive"><span class="token keyword">worker_processes</span>  <span class="token number">1</span></span><span class="token punctuation">;</span>

<span class="token comment"># \u5168\u5C40\u9519\u8BEF\u65E5\u5FD7\u5B9A\u4E49\u7C7B\u578B\uFF0C[debug | info | notice | warn | error | crit]</span>
<span class="token directive"><span class="token keyword">error_log</span>  logs/error.log</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">error_log</span>  logs/error.log  notice</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">error_log</span>  logs/error.log  info</span><span class="token punctuation">;</span>

<span class="token comment"># \u8FDB\u7A0Bpid\u6587\u4EF6</span>
<span class="token directive"><span class="token keyword">pid</span>        /var/run/nginx.pid</span><span class="token punctuation">;</span>

<span class="token comment"># \u5DE5\u4F5C\u6A21\u5F0F\u53CA\u8FDE\u63A5\u6570\u4E0A\u9650</span>
<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token comment"># \u4EC5\u7528\u4E8Elinux2.6\u4EE5\u4E0A\u5185\u6838,\u53EF\u4EE5\u5927\u5927\u63D0\u9AD8nginx\u7684\u6027\u80FD</span>
    <span class="token directive"><span class="token keyword">use</span>   epoll</span><span class="token punctuation">;</span>

    <span class="token comment"># \u5355\u4E2A\u540E\u53F0worker process\u8FDB\u7A0B\u7684\u6700\u5927\u5E76\u53D1\u94FE\u63A5\u6570</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">1024</span></span><span class="token punctuation">;</span>

    <span class="token comment"># \u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934\u90E8\u7684\u7F13\u51B2\u533A\u5927\u5C0F</span>
    <span class="token directive"><span class="token keyword">client_header_buffer_size</span> <span class="token number">4k</span></span><span class="token punctuation">;</span>

    <span class="token comment"># keepalive \u8D85\u65F6\u65F6\u95F4</span>
    <span class="token directive"><span class="token keyword">keepalive_timeout</span> <span class="token number">60</span></span><span class="token punctuation">;</span>

    <span class="token comment"># \u544A\u8BC9nginx\u6536\u5230\u4E00\u4E2A\u65B0\u8FDE\u63A5\u901A\u77E5\u540E\u63A5\u53D7\u5C3D\u53EF\u80FD\u591A\u7684\u8FDE\u63A5</span>
    <span class="token comment"># multi_accept on;</span>
<span class="token punctuation">}</span>

<span class="token comment"># \u8BBE\u5B9Ahttp\u670D\u52A1\u5668\uFF0C\u5229\u7528\u5B83\u7684\u53CD\u5411\u4EE3\u7406\u529F\u80FD\u63D0\u4F9B\u8D1F\u8F7D\u5747\u8861\u652F\u6301</span>
<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token comment"># \u6587\u4EF6\u6269\u5C55\u540D\u4E0E\u6587\u4EF6\u7C7B\u578B\u6620\u5C04\u8868\u4E49</span>
    <span class="token directive"><span class="token keyword">include</span>       /etc/nginx/mime.types</span><span class="token punctuation">;</span>

    <span class="token comment"># \u9ED8\u8BA4\u6587\u4EF6\u7C7B\u578B</span>
    <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span>

    <span class="token comment"># \u9ED8\u8BA4\u7F16\u7801</span>
    <span class="token directive"><span class="token keyword">charset</span> utf-8</span><span class="token punctuation">;</span>

    <span class="token comment"># \u670D\u52A1\u5668\u540D\u5B57\u7684hash\u8868\u5927\u5C0F</span>
    <span class="token directive"><span class="token keyword">server_names_hash_bucket_size</span> <span class="token number">128</span></span><span class="token punctuation">;</span>

    <span class="token comment"># \u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934\u90E8\u7684\u7F13\u51B2\u533A\u5927\u5C0F</span>
    <span class="token directive"><span class="token keyword">client_header_buffer_size</span> <span class="token number">32k</span></span><span class="token punctuation">;</span>

    <span class="token comment"># \u5BA2\u6237\u8BF7\u6C42\u5934\u7F13\u51B2\u5927\u5C0F</span>
    <span class="token directive"><span class="token keyword">large_client_header_buffers</span> <span class="token number">4</span> <span class="token number">64k</span></span><span class="token punctuation">;</span>

    <span class="token comment"># \u8BBE\u5B9A\u901A\u8FC7nginx\u4E0A\u4F20\u6587\u4EF6\u7684\u5927\u5C0F</span>
    <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">8m</span></span><span class="token punctuation">;</span>

    <span class="token comment"># \u5F00\u542F\u76EE\u5F55\u5217\u8868\u8BBF\u95EE\uFF0C\u5408\u9002\u4E0B\u8F7D\u670D\u52A1\u5668\uFF0C\u9ED8\u8BA4\u5173\u95ED\u3002</span>
    <span class="token directive"><span class="token keyword">autoindex</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>

    <span class="token comment"># sendfile \u6307\u4EE4\u6307\u5B9A nginx \u662F\u5426\u8C03\u7528 sendfile \u51FD\u6570\uFF08zero copy \u65B9\u5F0F\uFF09\u6765\u8F93\u51FA\u6587\u4EF6\uFF0C\u5BF9\u4E8E\u666E\u901A\u5E94\u7528\uFF0C</span>
    <span class="token comment"># \u5FC5\u987B\u8BBE\u4E3A on,\u5982\u679C\u7528\u6765\u8FDB\u884C\u4E0B\u8F7D\u7B49\u5E94\u7528\u78C1\u76D8IO\u91CD\u8D1F\u8F7D\u5E94\u7528\uFF0C\u53EF\u8BBE\u7F6E\u4E3A off\uFF0C\u4EE5\u5E73\u8861\u78C1\u76D8\u4E0E\u7F51\u7EDCI/O\u5904\u7406\u901F\u5EA6</span>
    <span class="token directive"><span class="token keyword">sendfile</span>        <span class="token boolean">on</span></span><span class="token punctuation">;</span>

    <span class="token comment"># \u6B64\u9009\u9879\u5141\u8BB8\u6216\u7981\u6B62\u4F7F\u7528socke\u7684TCP_CORK\u7684\u9009\u9879\uFF0C\u6B64\u9009\u9879\u4EC5\u5728\u4F7F\u7528sendfile\u7684\u65F6\u5019\u4F7F\u7528</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment"># \u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF08\u5355\u79D2\u4E3A\u79D2\uFF09</span>
    <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">65</span></span><span class="token punctuation">;</span>


    <span class="token comment"># gzip\u6A21\u5757\u8BBE\u7F6E</span>
    <span class="token directive"><span class="token keyword">gzip</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>               <span class="token comment">#\u5F00\u542Fgzip\u538B\u7F29\u8F93\u51FA</span>
    <span class="token directive"><span class="token keyword">gzip_min_length</span> <span class="token number">1k</span></span><span class="token punctuation">;</span>    <span class="token comment">#\u6700\u5C0F\u538B\u7F29\u6587\u4EF6\u5927\u5C0F</span>
    <span class="token directive"><span class="token keyword">gzip_buffers</span> <span class="token number">4</span> <span class="token number">16k</span></span><span class="token punctuation">;</span>    <span class="token comment">#\u538B\u7F29\u7F13\u51B2\u533A</span>
    <span class="token directive"><span class="token keyword">gzip_http_version</span> 1.0</span><span class="token punctuation">;</span> <span class="token comment">#\u538B\u7F29\u7248\u672C\uFF08\u9ED8\u8BA41.1\uFF0C\u524D\u7AEF\u5982\u679C\u662Fsquid2.5\u8BF7\u4F7F\u75281.0\uFF09</span>
    <span class="token directive"><span class="token keyword">gzip_comp_level</span> <span class="token number">2</span></span><span class="token punctuation">;</span>     <span class="token comment">#\u538B\u7F29\u7B49\u7EA7</span>
    <span class="token directive"><span class="token keyword">gzip_types</span> text/plain application/x-javascript text/css application/xml</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_vary</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>

    <span class="token comment"># \u5F00\u542F\u9650\u5236IP\u8FDE\u63A5\u6570\u7684\u65F6\u5019\u9700\u8981\u4F7F\u7528</span>
    <span class="token comment">#limit_zone crawler $binary_remote_addr 10m;</span>

    <span class="token comment"># \u6307\u5B9A\u865A\u62DF\u4E3B\u673A\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u65B9\u4FBF\u7BA1\u7406</span>
    <span class="token directive"><span class="token keyword">include</span> /etc/nginx/conf.d/*.conf</span><span class="token punctuation">;</span>


    <span class="token comment"># \u8D1F\u8F7D\u5747\u8861\u914D\u7F6E</span>
    <span class="token directive"><span class="token keyword">upstream</span> aaa</span> <span class="token punctuation">{</span>
        <span class="token comment"># \u8BF7\u89C1\u4E0A\u6587\u4E2D\u7684\u4E94\u79CD\u914D\u7F6E</span>
    <span class="token punctuation">}</span>


   <span class="token comment"># \u865A\u62DF\u4E3B\u673A\u7684\u914D\u7F6E</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>

        <span class="token comment"># \u76D1\u542C\u7AEF\u53E3</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>

        <span class="token comment"># \u57DF\u540D\u53EF\u4EE5\u6709\u591A\u4E2A\uFF0C\u7528\u7A7A\u683C\u9694\u5F00</span>
        <span class="token directive"><span class="token keyword">server_name</span> www.aaa.com aaa.com</span><span class="token punctuation">;</span>

        <span class="token comment"># \u9ED8\u8BA4\u5165\u53E3\u6587\u4EF6\u540D\u79F0</span>
        <span class="token directive"><span class="token keyword">index</span> index.html index.htm index.php</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">root</span> /data/www/sk</span><span class="token punctuation">;</span>

        <span class="token comment"># \u56FE\u7247\u7F13\u5B58\u65F6\u95F4\u8BBE\u7F6E</span>
        <span class="token directive"><span class="token keyword">location</span> ~ .*.(gif|jpg|jpeg|png|bmp|swf)$</span><span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">expires</span> <span class="token number">10d</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#JS\u548CCSS\u7F13\u5B58\u65F6\u95F4\u8BBE\u7F6E</span>
        <span class="token directive"><span class="token keyword">location</span> ~ .*.(js|css)?$</span><span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">expires</span> <span class="token number">1h</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment"># \u65E5\u5FD7\u683C\u5F0F\u8BBE\u5B9A</span>
        <span class="token comment">#$remote_addr\u4E0E $http_x_forwarded_for\u7528\u4EE5\u8BB0\u5F55\u5BA2\u6237\u7AEF\u7684ip\u5730\u5740\uFF1B</span>
        <span class="token comment">#$remote_user\uFF1A\u7528\u6765\u8BB0\u5F55\u5BA2\u6237\u7AEF\u7528\u6237\u540D\u79F0\uFF1B</span>
        <span class="token comment">#$time_local\uFF1A\u7528\u6765\u8BB0\u5F55\u8BBF\u95EE\u65F6\u95F4\u4E0E\u65F6\u533A\uFF1B</span>
        <span class="token comment">#$request\uFF1A\u7528\u6765\u8BB0\u5F55\u8BF7\u6C42\u7684url\u4E0Ehttp\u534F\u8BAE\uFF1B</span>
        <span class="token comment">#$status\uFF1A\u7528\u6765\u8BB0\u5F55\u8BF7\u6C42\u72B6\u6001\uFF1B\u6210\u529F\u662F200\uFF0C</span>
        <span class="token comment">#$body_bytes_sent \uFF1A\u8BB0\u5F55\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u6587\u4EF6\u4E3B\u4F53\u5185\u5BB9\u5927\u5C0F\uFF1B</span>
        <span class="token comment">#$http_referer\uFF1A\u7528\u6765\u8BB0\u5F55\u4ECE\u90A3\u4E2A\u9875\u9762\u94FE\u63A5\u8BBF\u95EE\u8FC7\u6765\u7684\uFF1B</span>
        <span class="token directive"><span class="token keyword">log_format</span> access <span class="token string">&#39;<span class="token variable">$remote_addr</span> - <span class="token variable">$remote_user</span> [<span class="token variable">$time_local]</span> &quot;<span class="token variable">$request</span>&quot; &#39;</span>
        <span class="token string">&#39;<span class="token variable">$status</span> <span class="token variable">$body_bytes_sent</span> &quot;<span class="token variable">$http_referer</span>&quot; &#39;</span>
        <span class="token string">&#39;&quot;<span class="token variable">$http_user_agent</span>&quot; <span class="token variable">$http_x_forwarded_for</span>&#39;</span></span><span class="token punctuation">;</span>

        <span class="token comment"># \u5B9A\u4E49\u672C\u865A\u62DF\u4E3B\u673A\u7684\u8BBF\u95EE\u65E5\u5FD7</span>
        <span class="token directive"><span class="token keyword">access_log</span>  /usr/local/nginx/logs/host.access.log  main</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">access_log</span>  /usr/local/nginx/logs/host.access.404.log  log404</span><span class="token punctuation">;</span>

        <span class="token comment"># \u5BF9\u5177\u4F53\u8DEF\u7531\u8FDB\u884C\u53CD\u5411\u4EE3\u7406</span>
        <span class="token directive"><span class="token keyword">location</span> /connect-controller</span> <span class="token punctuation">{</span>

            <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:88</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_redirect</span> <span class="token boolean">off</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>

            <span class="token comment"># \u540E\u7AEF\u7684Web\u670D\u52A1\u5668\u53EF\u4EE5\u901A\u8FC7X-Forwarded-For\u83B7\u53D6\u7528\u6237\u771F\u5B9EIP</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>

            <span class="token comment"># \u5141\u8BB8\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u6700\u5927\u5355\u6587\u4EF6\u5B57\u8282\u6570</span>
            <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">10m</span></span><span class="token punctuation">;</span>

            <span class="token comment"># \u7F13\u51B2\u533A\u4EE3\u7406\u7F13\u51B2\u7528\u6237\u7AEF\u8BF7\u6C42\u7684\u6700\u5927\u5B57\u8282\u6570\uFF0C</span>
            <span class="token directive"><span class="token keyword">client_body_buffer_size</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>

            <span class="token comment"># \u8868\u793A\u4F7Fnginx\u963B\u6B62HTTP\u5E94\u7B54\u4EE3\u7801\u4E3A400\u6216\u8005\u66F4\u9AD8\u7684\u5E94\u7B54\u3002</span>
            <span class="token directive"><span class="token keyword">proxy_intercept_errors</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>

            <span class="token comment"># nginx\u8DDF\u540E\u7AEF\u670D\u52A1\u5668\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4(\u4EE3\u7406\u8FDE\u63A5\u8D85\u65F6)</span>
            <span class="token directive"><span class="token keyword">proxy_connect_timeout</span> <span class="token number">90</span></span><span class="token punctuation">;</span>

            <span class="token comment"># \u540E\u7AEF\u670D\u52A1\u5668\u6570\u636E\u56DE\u4F20\u65F6\u95F4_\u5C31\u662F\u5728\u89C4\u5B9A\u65F6\u95F4\u4E4B\u5185\u540E\u7AEF\u670D\u52A1\u5668\u5FC5\u987B\u4F20\u5B8C\u6240\u6709\u7684\u6570\u636E</span>
            <span class="token directive"><span class="token keyword">proxy_send_timeout</span> <span class="token number">90</span></span><span class="token punctuation">;</span>

            <span class="token comment"># \u8FDE\u63A5\u6210\u529F\u540E\uFF0C\u540E\u7AEF\u670D\u52A1\u5668\u54CD\u5E94\u7684\u8D85\u65F6\u65F6\u95F4</span>
            <span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">90</span></span><span class="token punctuation">;</span>

            <span class="token comment"># \u8BBE\u7F6E\u4EE3\u7406\u670D\u52A1\u5668\uFF08nginx\uFF09\u4FDD\u5B58\u7528\u6237\u5934\u4FE1\u606F\u7684\u7F13\u51B2\u533A\u5927\u5C0F</span>
            <span class="token directive"><span class="token keyword">proxy_buffer_size</span> <span class="token number">4k</span></span><span class="token punctuation">;</span>

            <span class="token comment"># \u8BBE\u7F6E\u7528\u4E8E\u8BFB\u53D6\u5E94\u7B54\u7684\u7F13\u51B2\u533A\u6570\u76EE\u548C\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E5F\u4E3A\u5206\u9875\u5927\u5C0F\uFF0C\u6839\u636E\u64CD\u4F5C\u7CFB\u7EDF\u7684\u4E0D\u540C\u53EF\u80FD\u662F4k\u6216\u80058k</span>
            <span class="token directive"><span class="token keyword">proxy_buffers</span> <span class="token number">4</span> <span class="token number">32k</span></span><span class="token punctuation">;</span>

            <span class="token comment"># \u9AD8\u8D1F\u8377\u4E0B\u7F13\u51B2\u5927\u5C0F\uFF08proxy_buffers*2\uFF09</span>
            <span class="token directive"><span class="token keyword">proxy_busy_buffers_size</span> <span class="token number">64k</span></span><span class="token punctuation">;</span>

            <span class="token comment"># \u8BBE\u7F6E\u5728\u5199\u5165proxy_temp_path\u65F6\u6570\u636E\u7684\u5927\u5C0F\uFF0C\u9884\u9632\u4E00\u4E2A\u5DE5\u4F5C\u8FDB\u7A0B\u5728\u4F20\u9012\u6587\u4EF6\u65F6\u963B\u585E\u592A\u957F</span>
            <span class="token comment"># \u8BBE\u5B9A\u7F13\u5B58\u6587\u4EF6\u5939\u5927\u5C0F\uFF0C\u5927\u4E8E\u8FD9\u4E2A\u503C\uFF0C\u5C06\u4ECEupstream\u670D\u52A1\u5668\u4F20</span>
            <span class="token directive"><span class="token keyword">proxy_temp_file_write_size</span> <span class="token number">64k</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment"># \u52A8\u9759\u5206\u79BB\u53CD\u5411\u4EE3\u7406\u914D\u7F6E\uFF08\u591A\u8DEF\u7531\u6307\u5411\u4E0D\u540C\u7684\u670D\u52A1\u7AEF\u6216\u754C\u9762\uFF09</span>
        <span class="token directive"><span class="token keyword">location</span> ~ .(jsp|jspx|do)?$</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:8080</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="location\u8BE6\u89E3" tabindex="-1">Location\u8BE6\u89E3 <a class="header-anchor" href="#location\u8BE6\u89E3" aria-hidden="true">#</a></h2>`,4),c=p("p",{"css-module":"."},"location\xA0[\xA0=\xA0|\xA0~\xA0|\xA0~*\xA0|\xA0^~\xA0]\xA0uri\xA0",-1),l=n(`<p>[ = | ~ | ~* | ^~ ]\uFF1A\u5339\u914D\u7684\u6807\u8BC6</p><p>~\u4E0E~*\u7684\u533A\u522B\u662F\uFF1A~\u533A\u5206\u5927\u5C0F\u5199\uFF0C~*\u4E0D\u533A\u5206\u5927\u5C0F\u5199</p><p>^~\uFF1A\u8FDB\u884C\u5E38\u89C4\u5B57\u7B26\u4E32\u5339\u914D\u540E\uFF0C\u4E0D\u505A\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u68C0\u67E5</p><p>uri\uFF1A\u5339\u914D\u7684\u7F51\u7AD9\u5730\u5740</p><p>{...}\uFF1A\u5339\u914Duri\u540E\u8981\u6267\u884C\u7684\u914D\u7F6E\u6BB5</p><p>\u4E3E\u4F8B\uFF1A</p><div class="language-nginx"><pre><code><span class="token directive"><span class="token keyword">location</span> = /</span> <span class="token punctuation">{</span>
    [ configuration A ]
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    [ configuration B ]
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">location</span> /sk/</span> <span class="token punctuation">{</span>
    [ configuration C ]
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">location</span> ^~ /img/</span> <span class="token punctuation">{</span>
    [ configuration D ]
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">location</span> ~* .(gif|jpg|jpeg)$</span> <span class="token punctuation">{</span>
    [ configuration E ]
<span class="token punctuation">}</span>
</code></pre></div><p>= / \u8BF7\u6C42 / \u7CBE\u51C6\u5339\u914DA\uFF0C\u4E0D\u518D\u5F80\u4E0B\u67E5\u627E</p><p>/ \u8BF7\u6C42/index.html\u5339\u914DB\u3002\u9996\u5148\u67E5\u627E\u5339\u914D\u7684\u524D\u7F00\u5B57\u7B26\uFF0C\u627E\u5230\u6700\u957F\u5339\u914D\u662F\u914D\u7F6EB\uFF0C\u63A5\u7740\u53C8\u6309\u7167\u987A\u5E8F\u67E5\u627E\u5339\u914D\u7684\u6B63\u5219\u3002\u7ED3\u679C\u6CA1\u6709\u627E\u5230\uFF0C\u56E0\u6B64\u4F7F\u7528\u5148\u524D\u6807\u8BB0\u7684\u6700\u957F\u5339\u914D\uFF0C\u5373\u914D\u7F6EB\u3002</p><p>/sk/ \u8BF7\u6C42/sk/abc \u5339\u914DC\u3002\u9996\u5148\u627E\u5230\u6700\u957F\u5339\u914DC\uFF0C\u7531\u4E8E\u540E\u9762\u6CA1\u6709\u5339\u914D\u7684\u6B63\u5219\uFF0C\u6240\u4EE5\u4F7F\u7528\u6700\u957F\u5339\u914DC\u3002</p><p>~* .(gif|jpg|jpeg)$ \u8BF7\u6C42/sk/logo.gif \u5339\u914DE\u3002\u9996\u5148\u8FDB\u884C\u524D\u7F00\u5B57\u7B26\u7684\u67E5\u627E\uFF0C\u627E\u5230\u6700\u957F\u5339\u914D\u9879C\uFF0C\u7EE7\u7EED\u8FDB\u884C\u6B63\u5219\u67E5\u627E\uFF0C\u627E\u5230\u5339\u914D\u9879E\u3002\u56E0\u6B64\u4F7F\u7528E\u3002</p><p>^~ \u8BF7\u6C42/img/logo.gif\u5339\u914DD\u3002\u9996\u5148\u8FDB\u884C\u524D\u7F00\u5B57\u7B26\u67E5\u627E\uFF0C\u627E\u5230\u6700\u957F\u5339\u914DD\u3002\u4F46\u662F\u5B83\u4F7F\u7528\u4E86^~\u4FEE\u9970\u7B26\uFF0C\u4E0D\u518D\u8FDB\u884C\u4E0B\u9762\u7684\u6B63\u5219\u7684\u5339\u914D\u67E5\u627E\uFF0C\u56E0\u6B64\u4F7F\u7528D\u3002</p><h2 id="history\u8DEF\u7531404" tabindex="-1">history\u8DEF\u7531404 <a class="header-anchor" href="#history\u8DEF\u7531404" aria-hidden="true">#</a></h2><div class="language-nginx"><pre><code>    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre></div><h2 id="\u8DE8\u57DF\u95EE\u9898" tabindex="-1">\u8DE8\u57DF\u95EE\u9898 <a class="header-anchor" href="#\u8DE8\u57DF\u95EE\u9898" aria-hidden="true">#</a></h2><div class="language-nginx"><pre><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>   <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token comment"># \u670D\u52A1\u5668\u9ED8\u8BA4\u662F\u4E0D\u88AB\u5141\u8BB8\u8DE8\u57DF\u7684\u3002</span>
        <span class="token comment"># \u914D\u7F6E\`*\`\u540E\uFF0C\u8868\u793A\u670D\u52A1\u5668\u53EF\u4EE5\u63A5\u53D7\u6240\u6709\u7684\u8BF7\u6C42\u6E90\uFF08Origin\uFF09,\u5373\u63A5\u53D7\u6240\u6709\u8DE8\u57DF\u7684\u8BF7\u6C42</span>
        <span class="token directive"><span class="token keyword">add_header</span> Access-Control-Allow-Origin *</span><span class="token punctuation">;</span>
        
        <span class="token directive"><span class="token keyword">add_header</span> Access-Control-Allow-Methods <span class="token string">&#39;GET, POST, OPTIONS&#39;</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">add_header</span> Access-Control-Allow-Headers <span class="token string">&#39;DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization&#39;</span></span><span class="token punctuation">;</span>
        
        <span class="token comment"># \u53D1\u9001&quot;\u9884\u68C0\u8BF7\u6C42&quot;\u65F6\uFF0C\u9700\u8981\u7528\u5230\u65B9\u6CD5 OPTIONS ,\u6240\u4EE5\u670D\u52A1\u5668\u9700\u8981\u5141\u8BB8\u8BE5\u65B9\u6CD5</span>
        <span class="token comment"># \u7ED9OPTIONS \u6DFB\u52A0 204\u7684\u8FD4\u56DE\uFF0C\u662F\u4E3A\u4E86\u5904\u7406\u5728\u53D1\u9001POST\u8BF7\u6C42\u65F6Nginx\u4F9D\u7136\u62D2\u7EDD\u8BBF\u95EE\u7684\u9519\u8BEF</span>
        <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$request_method</span> = <span class="token string">&#39;OPTIONS&#39;</span>)</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">return</span> <span class="token number">204</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="gzip\u538B\u7F29" tabindex="-1">gzip\u538B\u7F29 <a class="header-anchor" href="#gzip\u538B\u7F29" aria-hidden="true">#</a></h2><div class="language-nginx"><pre><code>    <span class="token comment"># gzip\u6A21\u5757\u8BBE\u7F6E</span>
    <span class="token directive"><span class="token keyword">gzip</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>               <span class="token comment">#\u5F00\u542Fgzip\u538B\u7F29\u8F93\u51FA</span>
    <span class="token directive"><span class="token keyword">gzip_min_length</span> <span class="token number">1k</span></span><span class="token punctuation">;</span>    <span class="token comment">#\u6700\u5C0F\u538B\u7F29\u6587\u4EF6\u5927\u5C0F</span>
    <span class="token directive"><span class="token keyword">gzip_buffers</span> <span class="token number">4</span> <span class="token number">16k</span></span><span class="token punctuation">;</span>    <span class="token comment">#\u538B\u7F29\u7F13\u51B2\u533A</span>
    <span class="token directive"><span class="token keyword">gzip_http_version</span> 1.0</span><span class="token punctuation">;</span> <span class="token comment">#\u538B\u7F29\u7248\u672C\uFF08\u9ED8\u8BA41.1\uFF0C\u524D\u7AEF\u5982\u679C\u662Fsquid2.5\u8BF7\u4F7F\u75281.0\uFF09</span>
    <span class="token directive"><span class="token keyword">gzip_comp_level</span> <span class="token number">2</span></span><span class="token punctuation">;</span>     <span class="token comment">#\u538B\u7F29\u7B49\u7EA7</span>
    
    <span class="token comment"># \u8BBE\u7F6E\u4EC0\u4E48\u7C7B\u578B\u7684\u6587\u4EF6\u9700\u8981\u538B\u7F29</span>
    <span class="token directive"><span class="token keyword">gzip_types</span> text/plain application/x-javascript text/css application/xml</span><span class="token punctuation">;</span>
    
    <span class="token comment"># \u7528\u4E8E\u8BBE\u7F6E\u4F7F\u7528Gzip\u8FDB\u884C\u538B\u7F29\u53D1\u9001\u662F\u5426\u643A\u5E26\u201CVary:Accept-Encoding\u201D\u5934\u57DF\u7684\u54CD\u5E94\u5934\u90E8</span>
    <span class="token comment"># \u4E3B\u8981\u662F\u544A\u8BC9\u63A5\u6536\u65B9\uFF0C\u6240\u53D1\u9001\u7684\u6570\u636E\u7ECF\u8FC7\u4E86Gzip\u538B\u7F29\u5904\u7406</span>
    <span class="token directive"><span class="token keyword">gzip_vary</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>

</code></pre></div>`,18),i=[o,c,l];function k(r,u,d,m,_,v){return e(),a("div",null,i)}var w=s(t,[["render",k]]);export{g as __pageData,w as default};
