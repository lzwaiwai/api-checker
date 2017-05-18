# api-checker.js

> 根据自定义的模板数据结构来检测后端数据接口返回的数据是否满足前端要求
> 对于必要属性发生缺失，直接报错；低于非必要属性，可以通过模板数据赋值合并，且可以设置默认值

## Installation

In a browser:

```html
  <script src="api-checker.js"></script>
```

Using npm:

```
  $ npm i -S api-checker / yarn add api-checker
```

## Examples
```
var tplData = [{
  _id: { // 必须存在的属性，需要申明 requreid 为 true
    v: '',
    required: true
  },
  imageUrl: '', // 可无
  iconUrl: '', // 可无
  subject: '', // 可无
  weight: 123, // 可无，且可以根据情况自定义默认值
  items: { 必须存在的属性，需要申明 requreid 为 true
    v: [{
      _id: {
        v: '',
        required: true
      },
      subject: '', // 可无
      speakerImgUrl: '', // 可无
      numOfAudience: 0, // 可无
      itemType: '', // 可无
      numOfAudience: 0, // 可无
      operationStatus: '', // 可无
      normalPrice: 0, // 可无
      priceAfterTerminated: 0, // 可无
      customPageUrl: '' // 可无
    }],
    required: true
  }
}]

apiChecker.check(tplData, apiData, {
  success: function (data) {
    console.log(data)
  },
  fail: function (err) {
    console.log(err)
  }
})
```