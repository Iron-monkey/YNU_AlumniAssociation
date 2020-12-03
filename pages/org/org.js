// pages/org/org.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:['云南大学生命科学学院发轫于1937年，其前身为云南大学植物学系。1938年，云南大学校长、著名数学家、教育家熊庆来教授基于云南独特的生物资源、生态环境、开展生物学研究之便利条件以及学术影响，改植物学系为生物系，凡历60余年。1997年，云大生物学和化学学科结合，组建为生命科学与化学学院。2002年4月生物学科重建为生命科学学院。目前，生命科学学院拥有馆藏丰富的动、植物标本馆，成立了“国家级人才培养模式创新实验区”、“国家级生命科学实验教学示范中心”、“国家级大学生野外实践基地”等，为学生培养提供了优异而独特的条件和保障。',
    '生命科学学院现有国家级重点学科1个（微生物学），省级重点学科5个（生物学一级学科，植物学、生物化学与分子生物学、遗传学、微生物学等二级学科）。此外，学院拥有国家级人才培养基地２个（国家理科基础科学研究和教学人才培养基地、国家生命科学与技术人才培养基地）。生命科学学院的本科教育包括生物科学和生物技术系两个专业。在研究生培养方面，生命科学学院有一级学科博士点2个（生物学和生态学， 覆盖12个二级学科博士点和4个扩展专业点和相应的硕士点），博士后科研流动站2个（生物学和生态学两个一级学科）。',
    '学院现有教职工105人，包括教授22人，副教授26人。其中，2人获得“国家杰出青年基金”资助；2人获评“国家级教学名师”；3人获评“教育部新世纪优秀人才”；10人入选“云南省学术技术带头人”。在教学方面，获评“国家级教学团队”和“云南省教学团队”各1个。学院出版专著20余部，主编教材12部，其中6部教材为国家级规划教材，1部入选为国家级精品教材。',
    '在科学研究方面，生命科学学院在经典植物学、动物学和微生物学研究领域具有鲜明的地域特色和研究优势。为适应一流大学和一流学科建设的需要，生命科学学院新近成立了“云南大学生命科学研究中心”。“云南大学生命科学研究中心”将面向国家和云南省经济发展和人口健康的重大战略需求，聚焦于现代生命科学领域的重要科学问题，开展具有鲜明学科特色、国际水准、国内一流的现代生命科学研究。“云南大学生命科学研究中心”将与“云南生物资源利用与保护省部共建国家重点实验室”紧密协作，建设成为中国西南以及东南亚地区生命科学研究的重要基地。'],
    currentIndex:0,
    imagesTabs: [{
      tab: '简介',
      key: 1,
      picPlacement: 'top',
      image: {
        activeImage: '/images/org/简介.png',
        defaultImage: '/images/org/简介.png',
      }
    },
    {
      tab: '活动',
      key: 2,
      picPlacement: 'top',
      image: {
        activeImage: '/images/org/活动.png',
        defaultImage: '/images/org/活动.png',
      }
    }, {
      tab: '成员',
      key: 3,
      picPlacement: 'top',
      image: {
        activeImage: '/images/org/成员.png',
        defaultImage: '/images/org/成员.png',
      }
    },
    {
      tab: '相册',
      key: 4,
      picPlacement: 'top',
      image: {
        activeImage: '/images/org/相册.png',
        defaultImage: '/images/org/相册.png',
      }
    }
    ],
    headLineList: [
      {
      'title': '国家基金委生命科学部冯雪莲副主任访问生命科学中心',
      'source': '云大生科院系友总会',
      'date': '2020-10-10'
      }, {
      'title': '李家洋院士、舒红兵院士和储成才研究员一行来我院调研',
      'source': '云大生科院系友总会',
      'date': '2020-9-10'
      }, {
      'title': '赵博研究员应邀至生命科学学院开展学术讲座',
      'source': '云大生科院系友总会',
      'date': '2020-8-10'
      },
      ],
      member:[
        {id:0,name:'张三',identity:'负责人'},
        {id:1,name:'李四',identity:'负责人'},
        {id:2,name:'张五',identity:'成员'},
        {id:3,name:'张六',identity:'成员'},
        {id:4,name:'张七',identity:'成员'},
        {id:5,name:'张八',identity:'成员'},
      ],
      HotImgUrls: [
        {
          //头像地址,文字标题,文字内容,图片地址
          head:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1037527703,3129433808&fm=27&gp=0.jpg',
          title:'毕业相册',
          content: '同学们，让我们重逢在完美的明天。祝你前程似锦，一帆风顺！',
          url: '/images/04.jpg'
        },
        {
          head: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1037527703,3129433808&fm=27&gp=0.jpg',
          title: '毕业相册',
          content: '六月的阳光灿烂，分别的泪花闪闪。不必把相聚的誓言宣，深厚的友情记在心间。今日告别，来日再见。',
          url: '/images/05.jpg'
        },
        {
          head: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1037527703,3129433808&fm=27&gp=0.jpg',
          title: '毕业相册',
          content: '同学们，让我们重逢在完美的明天。祝你前程似锦，一帆风顺！',
          url: '/images/06.jpg'
        },
        {
          head: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1037527703,3129433808&fm=27&gp=0.jpg',
          title: '毕业相册',
          content: '六月的阳光灿烂，分别的泪花闪闪。不必把相聚的誓言宣，深厚的友情记在心间。今日告别，来日再见。',
          url: '/images/07.jpg'
        }
      ],
      indicatorDots: true, //显示面板显示点
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  Change:function(e){
    this.setData({
      currentIndex:e.detail.currentIndex
    })
  },
  jumpDetails: function (e) {
    console.log(e.currentTarget.dataset.title)
    wx.navigateTo({
    url: '../news/news?title=' + e.currentTarget.dataset.title,
    success: function (res) {
    // success
    },
    fail: function () {
    // fail
    },
    complete: function () {
    // complete
    }
    })
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

  },
  joinApply(){
    wx.navigateTo({
      url: '/pages/join/join',
    })
  }
})