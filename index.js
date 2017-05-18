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

      this.success = options.success || Fn
      this.fail = options.fail || Fn

      var checkedData = this._check(tplData, apiData)
      this.success(checkedData)

      return checkedData
    },

    _checkObj: function (tplData, apiData) {
      if (!isPlainObject(apiData)) {
        return this.fail({ err: 'tplData expects object!' })
      }
      return this._checkItem(apiData, tplData)
    },

    _checkArr: function (tplData, apiData) {
      if (!isArray(apiData)) {
        return this.fail({ err: 'tplData expects array!' })
      }

      var self = this
      var tplRule = tplData[0]

      apiData.forEach(function (item) {
        item = self._checkItem(item, tplRule)
      })
      return apiData
    },

    _checkItem: function (item, tplRule) {
      for (var v in tplRule) {
        var api = item[v]
        var rule = tplRule[v]

        if (isPlainObject(rule)) { // 针对复杂数据结构

          if (rule.required) {
            if (!api) {
              return this.fail({ err: 'api is lack of ' + v })
            } else {
              this._check(rule.v, api)
            }
          }

        } else if (api === undefined || typeof(api) !== typeof(rule)) { // 简单数据结构：api对应属性不存在或者数据类型不对
          console && console.warn('api is lack of 「 ' + v + ' 」 that is not required')
          item[v] = rule
        }
      }
      return item
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

  return apiChecker
}))