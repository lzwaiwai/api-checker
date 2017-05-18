# api-checker.js

> 根据自定义的模板数据结构来检测后端数据接口返回的数据是否满足前端要求.
> 
> 对于必要属性发生缺失，直接报错；对于非必要属性，可以通过模板数据赋值合并，且可以设置默认值

## Installation

In a browser:

```html
  <script src="api-checker.js"></script>
```

Using npm:

```
  $ npm i -S api-checker / yarn add api-checker
```

## data model
1. model 目前支持对象，数组，和简单数据类型。
2. data 中的简单数据类型属性如果不为必要属性，需如下设置：
```
    key1: '',
    key2: 0,
    key3: true,
    ...
```
3. data 中的简单数据类型属性如果为必要属性，需如下设置：
```
    key: {
      v: '', // 这里可以设置任意简单数据类型的初始值
      required: true
    }
```
4. data 中的复杂数据类型属性如果为必要属性，需如下设置：
```
    key: {
      v: [...],
      required: true
    }

    or

    key: {
      v: {..},
      required: true
    }
```

## Usage
```
apiChecker.check(tplData, apiData, { // 可以运行 examples 的事例来理解
  success: function (data) {
    console.log(data) // 返回符合模板规则的数据结构
  },
  fail: function (err) {
    console.log(err) // 输出任何不合规则报错
  }
})
```