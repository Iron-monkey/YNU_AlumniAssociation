//org.js

Page({
  data: {
    menuitems: [
      { text: '个人资料', url: '../myInfo/myInfo', icon: '../../images/mine/个人资料.png', tips: '', arrows: '../../images/mine/arrows.png' },
      { text: '我的相册', url: '../myPhoto/myPhto', icon: '../../images/mine/我的相册.png', tips: '', arrows: '../../images/mine/arrows.png' },
      { text: '我的系友', url: '../myFriends/myFriends', icon: '../../images/mine/我的系友.png', tips: '', arrows: '../../images/mine/arrows.png' },
      { text: '关于我们', url: '../about/about', icon: '../../images/mine/关于.png', tips: '', arrows: '../../images/mine/arrows.png' }
    ],
    about_service_data: [
      {
        icon_src:"../../images/mine/找校友.png",
        text: "添加好友"
      },
      {
        icon_src:"../../images/mine/系统消息.png",
        text: "系统消息"
      },
      {
        icon_src:"../../images/mine/我的组织.png",
        text: "我的组织"
      },
      {
        icon_src:"../../images/mine/我的活动.png",
        text: "我的活动"
      }
    ]
  },
  onLoad: function () {

  },
  // 注册登录的跳转
  toLogin: function(e) {
    wx.navigateTo({
      url: '../login/login',
    })
  },
  // 服务相关跳转页面函数
  about_service_tap: function(e) {
    const index = e.currentTarget.dataset.index;
    if(index === 0) {
      wx.navigateTo({
        url: '../addFriends/addFriends',
      })
    }
    else if(index === 1) {
      wx.navigateTo({
        url: '../systemMessage/systemMessage',
      })
    }
    else if(index === 2){
      wx.navigateTo({
        url: '../myGroup/myGroup',
      })
    }
    else{
      wx.navigateTo({
        url: '../myActivities/myActivities',
      })
    }
    
    
  }
})
