var tplDataObj = {
  id: {
    v: 0,
    required: true
  },
  name: ''
}

var tplDataArr = [{
  id: {
    v: 0,
    required: true
  },
  name: ''
}, {
  id: {
    v: 0,
    required: true
  },
  name: ''
}]

var apiDataNull = null
var apiDataUndefined = undefined
var apiDataString = 'test'
var apiDataNumber = 123
var apiDataBoolean = true

module.exports = {
  tplDataObj,
  tplDataArr,
  apiDataNull,
  apiDataUndefined,
  apiDataString,
  apiDataNumber,
  apiDataBoolean
}