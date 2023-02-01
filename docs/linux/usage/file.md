# 文件相关

## 某个文件夹下递归一共多少个文件


``` bash
find /path/to/folder -type f | wc -l
```


## 某个文件夹下当前的文件总数

``` bash
ls -l | grep "^-" | wc -l
```