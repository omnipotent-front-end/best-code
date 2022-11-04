# FILE

## base64 图片转文件

```js
// 将base64转换为文件
function dataURLtoFile(dataurl, filename) {
  const arr = dataurl.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = window.atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}
```

## 文件内容生成md5

``` js
import SparkMd5 from 'spark-md5'
/**
 * 通过文件内容生成md5值
 * @async
 * @param {*} file 文件内容File对象实例
 * @returns 文件内容的md5值
 */
function generateMd5fromFile(file) {
  return new Promise((resolve, reject) => {
    const sliceLength = 10
    const chunkSize = Math.ceil(file.size / sliceLength)
    const fileReader = new FileReader()
    const md5 = new SparkMd5()
    let index = 0
    const loadFile = () => {
      const slice = file.slice(index, index + chunkSize)
      fileReader.readAsBinaryString(slice)
    }
    loadFile()
    fileReader.onload = e => {
      md5.appendBinary(e.target.result)
      if (index < file.size) {
        index += chunkSize
        loadFile()
      } else {
        const sqlexecmd5 = md5.end()
        resolve(sqlexecmd5)
      }
    }
  })
}
```

## Blob转File

``` js
let files = new File([this.blob], file.name, {type: file.type})
```

## File转Blob

``` js
const blob = new Blob([file], { type: fileType || 'application/*' })
const blobUrl = window.URL.createObjectURL(blob)
```

