# 异步链路


## then地狱

滥用promise.then会变成then地狱，举例：

``` js
this.$confirm(`是否${row.status == 0 ? '关闭' : '开启'}项目`, '提示', {
  confirmButtonText: '确定',
  cancelButtonText: '取消',
  type: 'warning'
}).then(() => {
  updateProject(row.id, {
    status: row.status == 0 ? 1 : 0
  }).then(res => {
    if (res.status != 200) {
      this.$message.error(res.msg)
      return
    } else {
      this.$message.success('更新成功!')
      this.getList()
    }
  })
})
```

就应该改成：

``` js
this.$confirm(`是否${row.status == 0 ? '关闭' : '开启'}项目`, '提示', {
  confirmButtonText: '确定',
  cancelButtonText: '取消',
  type: 'warning'
}).then(() => updateProject(row.id, {
  status: row.status == 0 ? 1 : 0
})).then(res => {
  if (res.status != 200) {
    this.$message.error(res.msg)
    return
  } else {
    this.$message.success('更新成功!')
    this.getList()
  }
})
```

说白了就是每个then接一个promise即可。


## Promise.all

多个promise并行，通过Promise.all来优化：

``` js
const [category, departments, groups, projects, { data: users }] = await Promise.all([
  this.$store.dispatch('working/getWorkingCategory'),
  this.$store.dispatch('working/getDepartments'),
  this.$store.dispatch('working/getGroups'),
  this.$store.dispatch('working/getProjects'),
  getAllUsers()
])
```