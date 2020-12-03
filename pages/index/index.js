//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    current: 'homepage',
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    circular: true,
    imgUrls: ['https://p3.pstatp.com/large/43700001e49d85d3ab52', 'https://p3.pstatp.com/large/39f600038907bf3b9c96', 'https://p3.pstatp.com/large/31fa0003ed7228adf421'],
    links: ['../user/user', '../user/user', '../user/user'],
    newsList: []
  },
  handleChange({
    detail
  }) {
    this.setData({
      current: detail.key
    });
  },
  //轮播图的切换事件 
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //点击指示点切换 
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },
  //点击图片触发事件  
  swipclick: function (e) {    console.log(this.data.swiperCurrent); 
  wx.switchTab({
    url: this.data.links[this.data.swiperCurrent]
  })
},


//事件处理函数
bindViewTap: function () {
  wx.navigateTo({
    url: '../logs/logs'
  })
},
onLoad: function () {
  this.getNewsByType();
},
getNewsByType: function (event) {
  var that = this;
  wx.showToast({
    title: '正在加载中',
    icon: 'loading',
    duration: 1500
  })
  wx.request({
    url: 'http://v.juhe.cn/toutiao/index',
    data: {
      type: "top",
      key: "ab31a2487c139a1cdbd11c07eb468685"
    },
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
    success: function (res) {
      that.setData({
        newsList: res.data.result.data
      });
       wx.hideToast();
    }
  })
},
dynamic(){
  wx.navigateTo({
    url: '/pages/dynamic/dynamic',
  })
},
SeniorYear(){
  wx.navigateTo({
    url: '/pages/posts/post',
  })
},
Yssy(){
  wx.navigateTo({
    url: '/pages/yssy/yssy',
  })
},
newera(){
  wx.navigateTo({
    url: '/pages/newera/newera',
  })
}
})