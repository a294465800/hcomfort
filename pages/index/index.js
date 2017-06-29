//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    checkboxs: [
      {
        id: 0,
        name: '名医主检',
        en: 'mingyi',
        checked: false
      },
      {
        id: 1,
        name: '心脑血管',
        en: 'xinnao',
        checked: false
      },
      {
        id: 2,
        name: '肺部检查',
        en: 'feibu',
        checked: false
      },
      {
        id: 3,
        name: '肠胃检查',
        en: 'changwei',
        checked: false
      },
      {
        id: 4,
        name: '肿瘤早筛',
        en: 'zhongliu',
        checked: false
      }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

  //checkbox
  checkbox(e) {
    const that = this
    const index = e.currentTarget.dataset.index
    let temp = 'checkboxs[' + index + '].checked'
    that.setData({
      [temp]: !that.data.checkboxs[index].checked
    })
  },

  //提交
  postData(e) {
    console.log(e.detail.value)
  }
})
