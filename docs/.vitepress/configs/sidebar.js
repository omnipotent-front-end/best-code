export default {
    '/javascript/': getJavascriptSidebar(),
    '/node/': getNodeSidebar(),
    '/css/': getCssSidebar(),
    '/react/': getReactSidebar(),
    '/vue/': getVueSidebar(),
};

function getJavascriptSidebar() {
    return [
        {
            text: '整洁之道',
            children: [
                {
                    text: '变量',
                    link: '/javascript/clean/variable'
                },
                {
                    text: '对象',
                    link: '/javascript/clean/object'
                },
                {
                    text: '类',
                    link: '/javascript/clean/class'
                },
                {
                    text: '函数',
                    link: '/javascript/clean/function'
                },
                {
                    text: '数组',
                    link: '/javascript/clean/array'
                },
                {
                    text: '注释',
                    link: '/javascript/clean/comment'
                }
            ]
        },
        {
            text: "封装util",
            children: [
                {
                    text: "入口",
                    link: "/javascript/util/entry",
                },
                {
                    text: "副作用相关",
                    link: "/javascript/util/effect",
                },
                {
                    text: "对象操作",
                    link: "/javascript/util/object",
                },
                {
                    text: "数组操作",
                    link: "/javascript/util/array",
                },
                {
                    text: "字符串操作",
                    link: "/javascript/util/string",
                },
                {
                    text: "函数操作",
                    link: "/javascript/util/function",
                },
                {
                    text: "数字操作",
                    link: "/javascript/util/number",
                },
                {
                    text: "类型判断",
                    link: "/javascript/util/type",
                },
                {
                    text: "日志",
                    link: "/javascript/util/log",
                },
            ],
        },
        {
            text: "WebAPI",
            children: [
                {
                    text: 'DOM',
                    link: '/javascript/web/dom'
                },
                {
                    text: 'FILE',
                    link: '/javascript/web/file'
                }
            ]
        },
        {
            text: "单元测试",
            children: [
                {
                    text: '参考最佳实践',
                    link: '/javascript/test/refer'
                }
            ]
        },
        {
            text: "异步",
            children: [
                {
                    text: '异步模块',
                    link: '/javascript/async/module'
                },
                {
                    text: '异步循环',
                    link: '/javascript/async/for'
                },
                {
                    text: '事件',
                    link: '/javascript/async/event'
                }
            ]
        }
    ];
}

function getNodeSidebar() {
    return [
        {
            text: "文件相关",
            children: [{ text: "文件操作", link: "/node/fs/fs" }],
        },
        {
            text: "命令行工具",
            children: [
                {
                    text: "最佳实践参考",
                    link: "/node/cli/refer",
                },
                {
                    text: "输入输出流",
                    link: "/node/cli/pipe",
                },
                {
                    text: "用户信息",
                    link: "/node/cli/ua",
                },
                {
                    text: "配置",
                    link: "/node/cli/config",
                },
            ],
        },
        {
            text: '打包构建',
            children: [
                {
                    text: '打包',
                    link: '/node/build/pack'
                }
            ]
        },
        {
            text: '进线程相关',
            children: [
                {
                    text: 'child_process',
                    link: '/node/process/child_process'
                },
                {
                    text: 'worker_thread',
                    link: '/node/process/worker_thread'
                }
            ]
        }
    ];
}

function getCssSidebar() {
    return [
        {
            text: '动画',
            link: '/css/animate'
        }
    ]
}

function getReactSidebar() {
    return [
        {
            text: "语法",
            children: [
                {
                    text: "JSX",
                    link: "/react/grammar/jsx",
                },
            ],
        }
    ];
}


function getVueSidebar() {
    return [
        {
            text: "语法",
            children: [
                {
                    text: "单文件组件",
                    link: "/vue/grammar/sfc",
                },
                {
                    text: "JSX",
                    link: "/vue/grammar/jsx",
                },
            ],
        }
    ];
}