var tplData = {
  _id: {
    v: '', // 可以设置默认值
    required: true
  }, // 必须存在
  imageUrl: '', // 可无
  iconUrl: '', // 可无
  subject: '', // 可无
  weight: 10, // 可无
  items: {
    v: [{  // 必须存在
      _id: {
        v: '',
        required: true
      }, // 必须存在
      subject: '', // 可无
      speakerImgUrl: '', // 可无
      numOfAudience: 0, // 可无
      itemType: 'S', // 可无
      numOfAudience: 0, // 可无
      operationStatus: '', // 可无
      normalPrice: 10, // 可无
      priceAfterTerminated: 0, // 可无
      customPageUrl: '' // 可无
    }],
    required: true
  }
}

var apiData = {
  _id: "58d9119bae7f585567728fac",
  // imageUrl: "https://ofe0v4nhm.qnssl.com/e351c257-b9b4-4c23-b3b9-33f50cd56dbd.jpeg",
  iconUrl: "",
  subject: "最新直播",
  introduction: "一块听听上线的最新直播，都在这里！ 每天都来看看，保证有惊喜！",
  topicUrl: "",
  // weight: 10,
  items: [{
    _id: "590041ccbeb5cf445face718",
    // subject: "如何逃出迷茫期？我来为你指路",
    speakerName: "雷韵祺MK",
    weight: 15,
    itemType: "L",
    speakerImgUrl: "http://wx.qlogo.cn/mmopen/2BciaLP0iaXwGnCfMfk19ENJrh79qDvia0NBMk0VHTf5CDpUzCSxCicp1sSqZUuqDfiaibicrWPpfw9dfC8jyBZStsBic2icEW5ibjo7DH/0",
    startOn: "2017-05-18T12:00:00.000Z",
    numOfAudience: 4436,
    operationStatus: "S",
    numOfQuestionsAnswered: 0,
    normalPrice: 1990,
    priceAfterTerminated: 2990,
    customPageUrl: ""
  }, {
    _id: "590041ccbeb5cf445face718",
    subject: "如何逃出迷茫期？我来为你指路",
    speakerName: "雷韵祺MK",
    weight: 15,
    // itemType: "L",
    speakerImgUrl: "http://wx.qlogo.cn/mmopen/2BciaLP0iaXwGnCfMfk19ENJrh79qDvia0NBMk0VHTf5CDpUzCSxCicp1sSqZUuqDfiaibicrWPpfw9dfC8jyBZStsBic2icEW5ibjo7DH/0",
    startOn: "2017-05-18T12:00:00.000Z",
    numOfAudience: 4436,
    operationStatus: "S",
    numOfQuestionsAnswered: 0,
    // normalPrice: 1990,
    priceAfterTerminated: 2990,
    customPageUrl: ""
  }]
}