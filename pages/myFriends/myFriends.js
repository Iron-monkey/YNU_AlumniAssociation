// pages/myFriends/myFriends.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    friends: [
      {
        avatorSrc: "../../images/myFriends/1.jpg",
        nickname: "大王"
      },
      {
        avatorSrc: "../../images/myFriends/2.jpg",
        nickname: "叫我"
      },
      {
        avatorSrc: "../../images/myFriends/3.jpg",
        nickname: "来"
      },
      {
        avatorSrc: "../../images/myFriends/4.jpg",
        nickname: "巡山"
      },
      {
        avatorSrc: "../../images/myFriends/5.jpg",
        nickname: "海绵宝宝"
      },
      {
        avatorSrc: "../../images/myFriends/1.jpg",
        nickname: "派大星"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  clickFriend: function(e) {
    const index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../myFriendsDetail/myFriendsDetail',
    })
  }
})