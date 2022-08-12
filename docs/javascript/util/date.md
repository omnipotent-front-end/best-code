# 日期

## moment

### 昨天

``` js
moment().subtract(1, 'days').format('YYYY-MM-DD')
```

### 今天

``` js
moment().format('YYYY-MM-DD')
```


### 当前周一

``` js
moment().subtract(moment().format('E') - 1, 'days').format('YYYY-MM-DD')
```

### 当前周日

``` js
moment().add(7 - moment().format('E'), 'days').format('YYYY-MM-DD')
```

### 上周一

``` js
moment().week(moment().week() - 1).startOf('week').format('YYYY-MM-DD')
```

### 上周日

``` js
moment().week(moment().week() - 1).endOf('week').format('YYYY-MM-DD')
```

