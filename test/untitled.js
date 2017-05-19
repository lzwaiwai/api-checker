var tplData = [{
  id: {
    v: 0,
    required: true
  },
  name: 'defaultName',
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

var apiData = [{
  id: 123,
  lists: [{
    id: 123,
  }, {
    id: 123,
    name: 'lzwai'
  }],
  otherString: 'others is not change',
  otherArray: [1, 2, 3, 4]
}]

var resData = [{
  id: 123,
  name: 'defaultName'
  lists: [{
    id: 123,
    name: ''
  }, {
    id: 123,
    name: 'lzwai'
  }],
  others: 'others is not change',
  otherArray: [1, 2, 3, 4]
}]