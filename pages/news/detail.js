Page({
  data: {
    innerHTML: ""
  },
  onLoad: function (options) { 
    var that = this;
    that.setData({
      innerHTML: "http:\/\/mini.eastday.com\/mobile\/" + options.id + ".html?qid=juheshuju"
    });
  //var that = this;
  //   wx.request({
  //   url: 'https://mp.weixin.qq.com/',
  //   method: 'GET',
  //   success: function (res) {
  //   console.info(res);
  //   }
  // })
  }
});