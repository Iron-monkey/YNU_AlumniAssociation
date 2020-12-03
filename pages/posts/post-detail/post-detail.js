// 定义一个变量来接受 posts_data.js文件输出的对象
// 注意：require 只能使用相对路径！
var postsData = require('../../../data/posts-data.js')
var app = getApp();
Page({
  data: {
    isPlayMusic: false,
  },

  onLoad: function(option) {
    // 接收post.js传进来的postid值。
    var postId = option.id;
    // 拿到数据文件对应id的数据元素
    var postData = postsData.postList[postId];
    // console.log(postData)
    // 数据绑定
    this.setData(
      // 替换发现前端的数据
      {
        postData: postData,
        currentPostId: postId
      },
    );

    // var postsCollected = {
    //   1:'true',
    //   2:'false',
    //   3:'true',
    //   ···
    // }

    // 获取所有文章的收藏状态
    var postsCollected = wx.getStorageSync('posts_collected');
    if (postsCollected) {
      // 获取本篇文章的收藏状态
      var collected = postsCollected[postId];
      // 数据绑定
      this.setData({
        collected: collected,
      })
    } else {
      var postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync('posts_collected', postsCollected);
    }

    if (app.globaData.g_isPlayingMusic && app.globaData.g_currentMusicPostId===postId) {
      this.setData({
        isPlayMusic: true,
      })
    }
    this.setMusicMonitor();

  },

  setMusicMonitor: function() {
    // 监听音乐启动
    var that = this;
    wx.onBackgroundAudioPlay(function() {
      that.setData({
        isPlayingMusic: true,
      })
      // 修改全局变量
      app.globaData.g_isPlayingMusic = true;
      app.globaData.g_currentMusicPostId = that.data.currentPostId;
    });
    wx.onBackgroundAudioPause(function() {
      that.setData({
        isPlayingMusic: false,
      })
      // 修改全局变量
      app.globaData.g_isPlayingMusic = false;
      app.globaData.g_currentMusicPostId = null;
    });
  },

  // 点击收藏按钮
  onCollectionTap: function(event) {
    this.getPostsCollectedAsy(); // 异步
    // this.getPostsCollectedSyc(); // 同步
  },

  // 异步
  getPostsCollectedAsy: function() {
    var that = this;
    wx.getStorage({
      key: 'posts_collected',
      success: function(res) {
        var postsCollected = res.data;
        var postCollected = postsCollected[that.data.currentPostId];
        // 收藏变成未收藏，未收藏变成收藏
        postCollected = !postCollected;
        postsCollected[that.data.currentPostId] = postCollected;
        that.showToast(postCollected, postsCollected);
      }
    })
  },

  // 同步
  getPostsCollectedSyc: function() {
    var postsCollected = wx.getStorageSync('posts_collected');
    var postCollected = postsCollected[this.data.currentPostId];
    // 收藏变成未收藏，未收藏变成收藏
    postCollected = !postCollected;
    postsCollected[this.data.currentPostId] = postCollected;
    this.showToast(postCollected, postsCollected);
  },


  showModal: function(postCollected, postsCollected) {
    var that = this;
    wx.showModal({
      title: '收藏',
      content: postCollected ? '收藏该文章' : '取消收藏该文章',
      showCancel: 'true',
      cancelText: '取消',
      cancelColor: '#333',
      confirmText: '确认',
      confirmColor: '#405f80',
      success: function(res) {
        if (res.confirm) {
          // 更新文章的缓存值
          wx.setStorageSync('posts_collected', postsCollected);
          // 更新数据绑定变量，实现切换图片
          that.setData({
            collected: postCollected
          })
        }
      },
    })
  },


  showToast: function(postCollected, postsCollected) {
    // 更新文章的缓存值
    wx.setStorageSync('posts_collected', postsCollected);
    // 更新数据绑定变量，实现切换图片
    this.setData({
        collected: postCollected
      }),
      // 收藏成功提示
      wx.showToast({
        title: postCollected ? '收藏成功' : '取消成功',
        // 设置出现时间长度
        duration: 1000,
        // 设置出现图标
        icon: 'success',
      })
  },


  // 分享按钮点击事件
  onShareTap: function(event) {
    var itemList = [
      "分享给微信好友",
      "分享到朋友圈",
      "分享到QQ",
      "分享到微博"
    ]
    wx.showActionSheet({
      itemList: itemList,
      // 设置字体颜色
      itemColor: "405f80",
      success: function(res) {
        // res.cancel 用户是不是点击了取消
        // res.tapIndex 数组元素的序号，从0开始
        wx.showModal({
          title: '用户分享到了 ' + itemList[res.tapIndex],
          content: "用户选择是否取消？" + res.cancel + "现在还不能实现分享功能，什么时候能支持呢？"
        })
      }
    })
  },

  // 音乐播放点击事件
  onMusicTap: function(event) {
    var currentPostId = this.data.currentPostId;
    var isPlayMusic = this.data.isPlayMusic;
    if (isPlayMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayMusic: false,
      })
    } else {
      wx.playBackgroundAudio({
        dataUrl: postsData.postList[currentPostId].music.url,
        title: postsData.postList[currentPostId].music.title,
        coverImgUrl: postsData.postList[currentPostId].music.coverImg,
      });
      this.setData({
        isPlayMusic: true,
      })
    }
  }

})