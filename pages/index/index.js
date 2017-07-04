//index.js
//获取应用实例
let app = getApp()
let timer
Page({
  data: {
    flag: false,
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
    ],
    budge: [
      {
        id: 0,
        name: '<3万'
      },
      {
        id: 1,
        name: '<5万'
      },
      {
        id: 2,
        name: '<10万'
      },
      {
        id: 3,
        name: '>10万'
      }
    ],
    index: 0,
    name_zn: '',
    name_en: '',
    age: '',
    tel: ''
  },
  onLoad() {
    this.shrank()
  },

  onShareAppMessage(res) {
    return {
      title: '海疗康日本体检',
      path: '/pages/index/index'
    }
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

  //闪烁
  shrank() {
    clearInterval(timer)
    const that = this
    timer = setInterval(() => {
      that.setData({
        flag: !that.data.flag
      })
    }, 500)
  },

  budgePicker(e) {
    let index = e.detail.value
    this.setData({
      index: index
    })
  },

  //提交
  postData(e) {
    const that = this
    let temp = e.detail.value
    temp.budge = that.data.budge[that.data.index].name

    for (let i in temp) {
      if (temp[i] && (temp.focus.length > 0)) {
        console.log(temp[i])
        continue
      }
      else {
        console.log(temp[i])
        wx.showModal({
          title: '提示',
          content: '你还有信息没有填写哦~',
          showCancel: false
        })
        return
      }
    }
    wx.request({
      url: 'https://www.sennki.com/api/add',
      method: 'POST',
      data: temp,
      success: res => {
        if (200 == res.data.code) {
          wx.showToast({
            title: '提交成功',
            complete: () => {
              wx.switchTab({
                url: '/pages/question/question',
              })
            }
          })
          that.setData({
            name_zn: '',
            name_en: '',
            age: '',
            tel: ''
          })
        }
      }
    })
  }
})
