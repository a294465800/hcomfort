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
    ]
  },
  onLoad() {
    this.shrank()
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

  //提交
  postData(e) {
    console.log(e.detail.value)
  }
})
