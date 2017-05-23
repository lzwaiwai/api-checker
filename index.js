;(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory)
  } else if (typeof exports === 'object') {
    module.exports = factory()
  } else {
    global.apiChecker = factory()
  }
}(this, function () {
  var class2type = {}
  var Fn = function () {}
  var apiChecker = {
    _init: function (options) {
      this.showLog = !!options.showLog
      this.success = options.success || Fn
      this.error = options.error || Fn
      this.warn = options.warn || Fn

      return this
    },

    _check: function (tplData, apiData) {
      var checkedData

      if (isPlainObject(tplData)) {
        checkedData = this._checkObj(tplData, apiData)
      } else if (isArray(tplData)) {
        checkedData = this._checkArr(tplData, apiData)
      } else {
        checkedData = apiData
      }
      return checkedData
    },

    check: function (tplData, apiData, options) {
      if (!options) {
        options = {}
      }

      var checkedData = this._init(options)._check(tplData, apiData)
      checkedData.err ? this._error(checkedData) : this.success(checkedData)

      return checkedData
    },

    _checkObj: function (tplData, apiData) {
      if (!isPlainObject(apiData)) {
        return this._error('tplData expects object!')
      }
      return this._checkItem(apiData, tplData)
    },

    _checkArr: function (tplData, apiData) {
      if (!isArray(apiData)) {
        return this._error('tplData expects array!')
      }

      var self = this
      var newApiData = []
      var tplRule = tplData[0]

      for (var i = 0, len = apiData.length; i < len; i++) {
        var item = apiData[i]
        var itemData = this._checkItem(item, tplRule)
        if (itemData.err) {
          return itemData
        }
        newApiData.push(itemData)
        // item = itemData
      }

      return newApiData
    },

    _checkItem: function (item, tplRule) {
      var newItem = {}
      for (var v in tplRule) {
        var api = item[v]
        var originApi = deepClone(item)
        var rule = tplRule[v]

        if (isPlainObject(rule)) { // 针对复杂数据结构
          newItem[v] = {}
          if (rule.required) {
            if (!api) {
              return this._error('api is lack of ' + v)
            } else if (typeof api !== typeof rule.v) {
              return this._error('the type of ' + v + ' is worng, we expect ' + typeof(rule.v))
            } else {
              newItem[v] = this._check(rule.v, api)
              if (newItem[v].err) {
                return newItem[v].err
              }
            }
          }

        } else if (api === undefined) { // 简单数据结构：api对应属性不存在或者数据类型不对
          newItem[v] = rule
          this._warnMiss(v, originApi, newItem).warn(v, originApi, newItem)
        } else if (typeof api !== typeof rule) {
          newItem[v] = rule
          this._warnType(v, originApi, newItem).warn(v, originApi, newItem)
        } else {
          newItem[v] = api
        }
      }
      return newItem
    },

    _error: function (err) {
      let error = { err: err }
      this.error(error)
      throw new Error(error) // 终止程序
    },

    _warnMiss: function (curVal, oldItem, newItem) {
      if (!this.showLog) {
        return this
      }
      let tip = 'api is lack of 「 ' + curVal + ' 」, but which is not required'
      this._warn(tip, oldItem, newItem)
      return this
    },

    _warnType: function (curVal, oldItem, newItem) {
      if (!this.showLog) {
        return this
      }
      let tip = 'the type of api\'s 「 ' + curVal + ' 」is wrong, but which is not required '
      this._warn(tip, oldItem, newItem)
      return this
    },

    _warn: function (tip, oldItem, newItem) {
      try {
        if (!window) {
          return
        }
        try {
          console.groupCollapsed(tip)
        } catch (e) {
          console.log(tip)
        }

        console.log('%c old data:', 'color: #03A9F4; font-weight: bold', oldItem)
        console.log('%c new data:', 'color: #4CAF50; font-weight: bold', newItem)

        try {
          console.groupEnd()
        } catch (e) {
          console.log('—— log end ——')
        }
      } catch (err) {}
    }
  }

  function isArray (value) {
    if (typeof Array.isArray === 'function') {
      return Array.isArray(value)
    } else {
      return Object.prototype.toString.call(value) === '[object Array]'
    }
  }

  function type (obj) {
    return obj == null ? String(obj) :
      class2type[toString.call(obj)] || 'object'
  }

  function isWindow (obj) {
    return obj !== null && obj === obj.window
  }

  function isObject (obj) {
    return type(obj) === 'object'
  }

  function isPlainObject (obj) {
    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) === Object.prototype
  }

  function deepClone (source) {
    if (!source && typeof source !== 'object') {
      throw new Error('error arguments')
    }

    var targetObj = source.constructor === Array ? [] : {};

    if (Object.assign) {
      return Object.assign(targetObj, source)
    }

    for (var keys in source) {
      if (source.hasOwnProperty(keys)) {
        if (source[keys] && typeof source[keys] === 'object') {
          targetObj[keys] = source[keys].constructor === Array ? [] : {}
          targetObj[keys] = deepClone(source[keys])
        } else {
          targetObj[keys] = source[keys]
        }
      }
    }
    return targetObj
  }

  return apiChecker
}))