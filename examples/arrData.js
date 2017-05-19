var tplData = [{
  _id: { // 必须存在的属性，需要申明 requreid 为 true
    v: '',
    required: true
  },
  imageUrl: '',
  iconUrl: '',
  subject: '',
  weight: 123, // 可无，且可以根据情况自定义默认值
  items: { // 必须存在的属性，需要申明 requreid 为 true
    v: [{
      _id: {
        v: '',
        required: true
      },
      subject: '',
      speakerImgUrl: '',
      numOfAudience: 0,
      itemType: '',
      numOfAudience: 0,
      operationStatus: '',
      normalPrice: 0,
      priceAfterTerminated: 0,
      customPageUrl: ''
    }],
    required: true
  }
}]

var apiData = [{
    _id: "58d9119bae7f585567728fac",
    // imageUrl: "https://ofe0v4nhm.qnssl.com/e351c257-b9b4-4c23-b3b9-33f50cd56dbd.jpeg",
    iconUrl: "",
    subject: "最新直播",
    introduction: "一块听听上线的最新直播，都在这里！ 每天都来看看，保证有惊喜！",
    topicUrl: "",
    weight: 10,
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
    }]
}, {
    _id: "58d9119bae7f585567728fac",
    imageUrl: "https://ofe0v4nhm.qnssl.com/e351c257-b9b4-4c23-b3b9-33f50cd56dbd.jpeg",
    iconUrl: "",
    subject: "最新直播",
    introduction: "一块听听上线的最新直播，都在这里！ 每天都来看看，保证有惊喜！",
    topicUrl: "",
    weight: 10,
    items: [{
      _id: "590041ccbeb5cf445face718"
    }, {
      _id: "5860dee9b2a34f43f62b5606",
      subject: "天天用英语",
      speakerName: "天天用英语",
      weight: 14,
      itemType: "L",
      speakerImgUrl: "https://ofe0v4nhm.qnssl.com/be702aaa-7b75-4858-a4e6-2db07d5e86a4",
      startOn: "2017-05-18T13:00:13.000Z",
      numOfAudience: 10059,
      operationStatus: "S",
      numOfQuestionsAnswered: 0,
      normalPrice: 36500,
      // priceAfterTerminated: 36500
  }]
}]