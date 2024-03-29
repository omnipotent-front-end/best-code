# Nginx

## 配置大全

``` nginx
# 启动进程,通常设置成和cpu的数量相等
worker_processes  1;

# 全局错误日志定义类型，[debug | info | notice | warn | error | crit]
error_log  logs/error.log;
error_log  logs/error.log  notice;
error_log  logs/error.log  info;

# 进程pid文件
pid        /var/run/nginx.pid;

# 工作模式及连接数上限
events {
    # 仅用于linux2.6以上内核,可以大大提高nginx的性能
    use   epoll;

    # 单个后台worker process进程的最大并发链接数
    worker_connections  1024;

    # 客户端请求头部的缓冲区大小
    client_header_buffer_size 4k;

    # keepalive 超时时间
    keepalive_timeout 60;

    # 告诉nginx收到一个新连接通知后接受尽可能多的连接
    # multi_accept on;
}

# 设定http服务器，利用它的反向代理功能提供负载均衡支持
http {
    # 文件扩展名与文件类型映射表义
    include       /etc/nginx/mime.types;

    # 默认文件类型
    default_type  application/octet-stream;

    # 默认编码
    charset utf-8;

    # 服务器名字的hash表大小
    server_names_hash_bucket_size 128;

    # 客户端请求头部的缓冲区大小
    client_header_buffer_size 32k;

    # 客户请求头缓冲大小
    large_client_header_buffers 4 64k;

    # 设定通过nginx上传文件的大小
    client_max_body_size 8m;

    # 开启目录列表访问，合适下载服务器，默认关闭。
    autoindex on;

    # sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，对于普通应用，
    # 必须设为 on,如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，以平衡磁盘与网络I/O处理速度
    sendfile        on;

    # 此选项允许或禁止使用socke的TCP_CORK的选项，此选项仅在使用sendfile的时候使用
    #tcp_nopush     on;

    # 连接超时时间（单秒为秒）
    keepalive_timeout  65;


    # gzip模块设置
    gzip on;               #开启gzip压缩输出
    gzip_min_length 1k;    #最小压缩文件大小
    gzip_buffers 4 16k;    #压缩缓冲区
    gzip_http_version 1.0; #压缩版本（默认1.1，前端如果是squid2.5请使用1.0）
    gzip_comp_level 2;     #压缩等级
    gzip_types text/plain application/x-javascript text/css application/xml;
    gzip_vary on;

    # 开启限制IP连接数的时候需要使用
    #limit_zone crawler $binary_remote_addr 10m;

    # 指定虚拟主机的配置文件，方便管理
    include /etc/nginx/conf.d/*.conf;


    # 负载均衡配置
    upstream aaa {
        # 请见上文中的五种配置
    }


   # 虚拟主机的配置
    server {

        # 监听端口
        listen 80;

        # 域名可以有多个，用空格隔开
        server_name www.aaa.com aaa.com;

        # 默认入口文件名称
        index index.html index.htm index.php;
        root /data/www/sk;

        # 图片缓存时间设置
        location ~ .*.(gif|jpg|jpeg|png|bmp|swf)${
            expires 10d;
        }

        #JS和CSS缓存时间设置
        location ~ .*.(js|css)?${
            expires 1h;
        }

        # 日志格式设定
        #$remote_addr与 $http_x_forwarded_for用以记录客户端的ip地址；
        #$remote_user：用来记录客户端用户名称；
        #$time_local：用来记录访问时间与时区；
        #$request：用来记录请求的url与http协议；
        #$status：用来记录请求状态；成功是200，
        #$body_bytes_sent ：记录发送给客户端文件主体内容大小；
        #$http_referer：用来记录从那个页面链接访问过来的；
        log_format access '$remote_addr - $remote_user [$time_local] "$request" '
        '$status $body_bytes_sent "$http_referer" '
        '"$http_user_agent" $http_x_forwarded_for';

        # 定义本虚拟主机的访问日志
        access_log  /usr/local/nginx/logs/host.access.log  main;
        access_log  /usr/local/nginx/logs/host.access.404.log  log404;

        # 对具体路由进行反向代理
        location /connect-controller {

            proxy_pass http://127.0.0.1:88;
            proxy_redirect off;
            proxy_set_header X-Real-IP $remote_addr;

            # 后端的Web服务器可以通过X-Forwarded-For获取用户真实IP
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host $host;

            # 允许客户端请求的最大单文件字节数
            client_max_body_size 10m;

            # 缓冲区代理缓冲用户端请求的最大字节数，
            client_body_buffer_size 128k;

            # 表示使nginx阻止HTTP应答代码为400或者更高的应答。
            proxy_intercept_errors on;

            # nginx跟后端服务器连接超时时间(代理连接超时)
            proxy_connect_timeout 90;

            # 后端服务器数据回传时间_就是在规定时间之内后端服务器必须传完所有的数据
            proxy_send_timeout 90;

            # 连接成功后，后端服务器响应的超时时间
            proxy_read_timeout 90;

            # 设置代理服务器（nginx）保存用户头信息的缓冲区大小
            proxy_buffer_size 4k;

            # 设置用于读取应答的缓冲区数目和大小，默认情况也为分页大小，根据操作系统的不同可能是4k或者8k
            proxy_buffers 4 32k;

            # 高负荷下缓冲大小（proxy_buffers*2）
            proxy_busy_buffers_size 64k;

            # 设置在写入proxy_temp_path时数据的大小，预防一个工作进程在传递文件时阻塞太长
            # 设定缓存文件夹大小，大于这个值，将从upstream服务器传
            proxy_temp_file_write_size 64k;
        }

        # 动静分离反向代理配置（多路由指向不同的服务端或界面）
        location ~ .(jsp|jspx|do)?$ {
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass http://127.0.0.1:8080;
        }
    }
}

```


## Location详解

location [ = | ~ | ~* | ^~ ] uri {...}



[ = | ~ | ~* | ^~ ]：匹配的标识

~与~*的区别是：~区分大小写，~*不区分大小写

^~：进行常规字符串匹配后，不做正则表达式的检查



uri：匹配的网站地址


{...}：匹配uri后要执行的配置段

举例：

``` nginx
location = / {
    [ configuration A ]
}
location / {
    [ configuration B ]
}
location /sk/ {
    [ configuration C ]
}
location ^~ /img/ {
    [ configuration D ]
}
location ~* .(gif|jpg|jpeg)$ {
    [ configuration E ]
}
```

= / 请求 / 精准匹配A，不再往下查找

/ 请求/index.html匹配B。首先查找匹配的前缀字符，找到最长匹配是配置B，接着又按照顺序查找匹配的正则。结果没有找到，因此使用先前标记的最长匹配，即配置B。

/sk/ 请求/sk/abc 匹配C。首先找到最长匹配C，由于后面没有匹配的正则，所以使用最长匹配C。

~* .(gif|jpg|jpeg)$ 请求/sk/logo.gif 匹配E。首先进行前缀字符的查找，找到最长匹配项C，继续进行正则查找，找到匹配项E。因此使用E。

^~ 请求/img/logo.gif匹配D。首先进行前缀字符查找，找到最长匹配D。但是它使用了^~修饰符，不再进行下面的正则的匹配查找，因此使用D。


## history路由404

``` nginx
    location / {
        try_files $uri $uri/ /index.html;
    }
```


## 跨域问题

``` nginx
server {
    listen   80;
    location / {
        # 服务器默认是不被允许跨域的。
        # 配置`*`后，表示服务器可以接受所有的请求源（Origin）,即接受所有跨域的请求
        add_header Access-Control-Allow-Origin *;
        
        add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
        add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
        
        # 发送"预检请求"时，需要用到方法 OPTIONS ,所以服务器需要允许该方法
        # 给OPTIONS 添加 204的返回，是为了处理在发送POST请求时Nginx依然拒绝访问的错误
        if ($request_method = 'OPTIONS') {
            return 204;
        }
    }
}
```

## gzip压缩

``` nginx
    # gzip模块设置
    gzip on;               #开启gzip压缩输出
    gzip_min_length 1k;    #最小压缩文件大小
    gzip_buffers 4 16k;    #压缩缓冲区
    gzip_http_version 1.0; #压缩版本（默认1.1，前端如果是squid2.5请使用1.0）
    gzip_comp_level 2;     #压缩等级
    
    # 设置什么类型的文件需要压缩
    gzip_types text/plain application/x-javascript text/css application/xml;
    
    # 用于设置使用Gzip进行压缩发送是否携带“Vary:Accept-Encoding”头域的响应头部
    # 主要是告诉接收方，所发送的数据经过了Gzip压缩处理
    gzip_vary on;

```
