# 网络相关

## 查看某个端口在运行什么

sudo lsof -nP -iTCP:80 | grep LISTEN

<img src="https://raw.githubusercontent.com/brizer/graph-bed/master/img/20230227155023.png"/>