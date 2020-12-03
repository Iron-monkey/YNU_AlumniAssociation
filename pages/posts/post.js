// 定义一个变量来接受 posts_data.js文件输出的对象
// 注意：require 只能使用相对路径！
var postsData = require('../../data/posts-data.js')

Page({
  // 数据绑定
  data: {
    swiperCurrent: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
    circular: true,
    imgUrls: ['../../images/04.jpg', '../../images/05.jpg', '../../images/06.jpg'],
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
  onLoad: function(options) {

    // 页面初始化,options为页面跳转所带来的参数
    // 向服务器请求数据

    // 小程序总是会读取data对象来做数据绑定，这个动作我们成为动作A。
    // 而这个动作A的执行，是在onLoad事件执行之后发生的。
    // this.data.posts_key = postsData.postList

    this.setData(
      // 替换发现前端的数据
      {
        posts_key: postsData.postList
      }
    );
    
  },

  //  打开新闻详情页事件
  onPostTap:function(event){
    // 获取新闻的postId
    var postId = event.currentTarget.dataset.postid;
    // 跳转到子页面，新闻详情界面
    wx.navigateTo({
      // 将新闻块的postid穿进去
      url: 'post-detail/post-detail?id='+postId,
    })
  },

})