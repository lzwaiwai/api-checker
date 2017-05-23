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
    key1: '', // 字符串类型
    key2: 0, // 数字类型
    key3: true, // 布尔类型
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
5. 被设置为必要属性的字段发生缺失或类型错误，直接抛出错误，所以凡是前端可以用默认值替代的字段尽量不建议设置为必要字段。其次，接口数据如果在模板数据中为出现，直接过滤掉。

6. 数据模板结构：
  ![img](https://o4a7cbihz.qnssl.com/cover/e668eb86-adc3-407d-816e-dd322daa26a8)

## Usage
```javascript
  apiChecker.check(tplData, apiData, {
      showLog: true,
      success: function (data) {
        console.log(data)
      },
      error: function (err) {
        console.log(err)
      },
      warn: function (curVal, oldItem, newItem) {
        // console.log('warn!')
      }
    })
```
