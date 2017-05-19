var tplData = [{
  id: {
    v: 0,
    required: true
  },
  name: '',
  lists: {
    v: [{
      id: {
        v: 0,
        required: true
      },
      name: '',
    }],
    required: true
  }
}]

var apiDataWithAllVals = [{
  id: 123,
  name: 'lzwai1',
  lists: [{
    id: 123,
    name: 'lzwai1-2'
  }]
},{
  id: 321,
  name: 'lzwai2',
  lists: [{
    id: 123,
    name: 'lzwai1-2'
  }]
}]

var apiDataWithTypeWrongNotRequired = [{
  id: 123,
  name: 'lzwai',
  lists: [{
    id: 123,
    name: true // wrong
  }]
}, {
  id: 123,
  name: 'lzwai',
  lists: [{
    id: 123,
    name: 'lzwai'
  }]
}]

var apiDataWithTypeWrongRequired = [{
  id: 123,
  name: 'lzwai',
  lists: [{
    id: '123', // wrong
    name: 'lzwai'
  }]
}, {
  id: 123,
  name: 'lzwai',
  lists: [{
    id: 123,
    name: 'lzwai'
  }]
}]

var apiDataWithoutNotRequired = [{
  id: 123,
  name: 'lzwai',
  lists: [{
    id: 123
  }]
}, {
  id: 123,
  lists: [{
    id: 123,
    name: 'lzwai'
  }]
}]

var apiDataWithoutRequired = [{
  id: 123,
  name: 'lzwai',
  lists: [{ // wrong
    name: 'lzwai'
  }]
}, {
  id: 321,
  name: 'lzwai',
  lists: [{
    id: 123,
    name: 'lzwai'
  }]
}]

module.exports = {
  tplData,
  apiDataWithAllVals,
  apiDataWithTypeWrongNotRequired,
  apiDataWithTypeWrongRequired,
  apiDataWithoutNotRequired,
  apiDataWithoutRequired
}