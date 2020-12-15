// pages/myPhoto/myPhto.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 存放相册日期数组的数组
    photoDate: [{
        date: "2020年1月",
        photoSrc: [{
            id: 0,
            src: "../../images/myPhoto/1.jpg"
          },
          {
            id: 1,
            src: "../../images/myPhoto/2.jpg"
          }
        ]
      },
      {
        date: "2020年2月",
        photoSrc: [{
            id: 0,
            src: "../../images/myPhoto/3.jpg"
          },
          {
            id: 1,
            src: "../../images/myPhoto/4.jpg"
          },
          {
            id: 2,
            src: "../../images/myPhoto/5.jpg"
          },
          {
            id: 3,
            src: "../../images/myPhoto/6.jpg"
          }
        ]
      },
      {
        date: "2020年3月",
        photoSrc: [{
            id: 0,
            src: "../../images/myPhoto/7.jpg"
          },
          {
            id: 1,
            src: "../../images/myPhoto/8.jpg"
          },
          {
            id: 2,
            src: "../../images/myPhoto/9.jpg"
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})