var tplData = {
  id: {
    v: 0,
    required: true
  },
  name: ''
}

var apiDataWithAllVals = {
  id: 123,
  name: 'lzwai'
}

var apiDataWithTypeWrongNotRequired = {
  id: 123,
  name: true
}

var apiDataWithTypeWrongRequired = {
  id: '123',
  name: 'lzwai'
}

var apiDataWithoutNotRequired = {
  id: 123
}

var apiDataWithoutRequired = {
  name: 'lzwai'
}

module.exports = {
  tplData,
  apiDataWithAllVals,
  apiDataWithTypeWrongNotRequired,
  apiDataWithTypeWrongRequired,
  apiDataWithoutNotRequired,
  apiDataWithoutRequired
}