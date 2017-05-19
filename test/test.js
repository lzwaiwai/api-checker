var apiChecker = require('../index')
var expect = require('chai').expect

var objData = require('./objData')

describe('obj-type api without missing value', function() {
  describe('deep equal', function() {
    it('should return { id: 123, name: \'lzwai\' }', function() {
      var data = apiChecker.check(objData.tplData, objData.apiDataWithAllVals)
      expect(data).to.deep.equal(objData.apiDataWithAllVals)
    })
  })
})

describe('obj-type api with wrong-type value that isn\'t required', function() {
  describe('deep equal', function() {
    it('should return { id: 123, name: \'\' }', function() {
      var data = apiChecker.check(objData.tplData, objData.apiDataWithTypeWrongNotRequired)
      expect(data).to.deep.equal({ id: 123, name: '' })
    })
  })
})

describe('obj-type api with wrong-type value that is required', function() {
  describe('throw', function() {
    it('should throw an error', function() {
      expect(function () {
        apiChecker.check(objData.tplData, objData.apiDataWithTypeWrongRequired)
      }).to.throw(Error)
    })
  })
})

describe('obj-type api with missing value that isn\'t required', function() {
  describe('deep equal', function() {
    it('should return { id: 112233, name: \'\' }', function() {
      var data = apiChecker.check(objData.tplData, objData.apiDataWithoutNotRequired)
      expect(data).to.deep.equal({ id: 123, name: '' })
    })
  })
})

describe('obj-type api with missing value that is required', function() {
  describe('throw', function() {
    it('should throw an error', function() {
      expect(function () {
        apiChecker.check(objData.tplData, objData.apiDataWithoutRequired)
      }).to.throw(Error)
    })
  })
})


var arrData = require('./arrData')

describe('arr-type api without missing value', function() {
  describe('deep equal', function() {
    it('should return [{ id: 123, name: \'lzwai\' }, ...]', function() {
      var data = apiChecker.check(arrData.tplData, arrData.apiDataWithAllVals)
      expect(data).to.deep.equal(arrData.apiDataWithAllVals)
    })
  })
})

describe('arr-type api with wrong-type value that isn\'t required', function() {
  describe('deep equal', function() {
    it('should return [{ id: 123, name: \'\' }, { id: 123, name: \'lzwai\'}]', function() {
      var data = apiChecker.check(arrData.tplData, arrData.apiDataWithTypeWrongNotRequired)
      expect(data).to.deep.equal([{
        id: 123,
        name: 'lzwai',
        lists: [{
          id: 123,
          name: '' // modified
        }]
      }, {
        id: 123,
        name: 'lzwai',
        lists: [{
          id: 123,
          name: 'lzwai'
        }]
      }])
    })
  })
})

describe('arr-type api with wrong-type value that is required', function() {
  describe('throw', function() {
    it('should return { err: \'the type of id is worng, we expect number\' }', function() {
      expect(function () {
        apiChecker.check(arrData.tplData, arrData.apiDataWithTypeWrongRequired)
      }).to.throw(Error)
    })
  })
})

describe('arr-type api with missing value that isn\'t required', function() {
  describe('deep equal', function() {
    it('should return [{ id: 123, name: \'lzwai\', lists:[{ id: 123, name: \'\' }] }, { id: 123, name: \'\', lists:[{ id: 123, name: \'lzwai\' }]]', function() {
      var data = apiChecker.check(arrData.tplData, arrData.apiDataWithoutNotRequired)
      expect(data).to.deep.equal([{
        id: 123,
        name: 'lzwai',
        lists: [{
          id: 123,
          name: '' // modified
        }]
      }, {
        id: 123,
        name: '', // modified
        lists: [{
          id: 123,
          name: 'lzwai'
        }]
      }])
    })
  })
})

describe('arr-type api with missing value that is required', function() {
  describe('throw', function() {
    it('should return { err: \'api is lack of id\' }', function() {
      expect(function () {
        apiChecker.check(arrData.tplData, arrData.apiDataWithoutRequired)
      }).to.throw(Error)
    })
  })
})


var otherData = require('./otherData')

describe('null api, tplDataObj', function() {
  describe('throw', function() {
    it('showld throw an error', function() {
      expect(function () {
        apiChecker.check(otherData.tplDataObj, otherData.apiDataNull)
      }).to.throw(Error)
    })
  })
})

describe('null api, tplDatArr', function() {
  describe('throw', function() {
    it('showld throw an error', function() {
      expect(function () {
        apiChecker.check(otherData.tplDataArr, otherData.apiDataNull)
      }).to.throw(Error)
    })
  })
})

describe('undefined api, tplDataObj', function() {
  describe('throw', function() {
    it('showld throw an error', function() {
      expect(function () {
        apiChecker.check(otherData.tplDataObj, otherData.apiDataUndefined)
      }).to.throw(Error)
    })
  })
})

describe('undefined api, tplDataArr', function() {
  describe('throw', function() {
    it('showld throw an error', function() {
      expect(function () {
        apiChecker.check(otherData.tplDataArr, otherData.apiDataUndefined)
      }).to.throw(Error)
    })
  })
})

describe('string api, tplDataObj', function() {
  describe('throw', function() {
    it('showld throw an error', function() {
      expect(function () {
        apiChecker.check(otherData.tplDataObj, otherData.apiDataString)
      }).to.throw(Error)
    })
  })
})

describe('string api, tplDataArr', function() {
  describe('throw', function() {
    it('showld throw an error', function() {
      expect(function () {
        apiChecker.check(otherData.tplDataArr, otherData.apiDataString)
      }).to.throw(Error)
    })
  })
})

describe('number api, tplDataObj', function() {
  describe('throw', function() {
    it('showld throw an error', function() {
      expect(function () {
        apiChecker.check(otherData.tplDataObj, otherData.apiDataNumber)
      }).to.throw(Error)
    })
  })
})

describe('number api, tplDataArr', function() {
  describe('throw', function() {
    it('showld throw an error', function() {
      expect(function () {
        apiChecker.check(otherData.tplDataArr, otherData.apiDataNumber)
      }).to.throw(Error)
    })
  })
})

describe('boolean api, tplDataObj', function() {
  describe('throw', function() {
    it('showld throw an error', function() {
      expect(function () {
        apiChecker.check(otherData.tplDataObj, otherData.apiDataBoolean)
      }).to.throw(Error)
    })
  })
})

describe('boolean api, tplDataArr', function() {
  describe('throw', function() {
    it('showld throw an error', function() {
      expect(function () {
        apiChecker.check(otherData.tplDataArr, otherData.apiDataBoolean)
      }).to.throw(Error)
    })
  })
})
