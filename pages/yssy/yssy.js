var touch = [0, 0];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieData: [
      {
        id: 0,
        title: '回馈学院',
        image: '../../images/01.png',
      },
      {
        id: 1,
        title: '返校登记',
        image: '../../images/01.png',
      },
      {
        id: 2,
        title: '爱心校友',
        image: '../../images/01.png',
      }
  ],
    testCurrentNav: 0,
    currentIndex: 0,
    currentMovie: {},
    movieDistance: 0,
    classArray: ['active', 'next'], // 定义class数组，存放样式class，
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMovieList();
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getMovieList()
  },
  // 开始滑动
  onTouchStart(e) {
    touch[0] = e.touches[0].clientX
  },
  // 结束滑动
  onTouchEnd(e) {
    touch[1] = e.changedTouches[0].clientX;
    if (touch[0] - touch[1] > 5) {
      this.addClassName('left');
    } else if (touch[1] - touch[0] > 5) {
      this.addClassName('right');
    }
  },
  addClassName(direction) {
    let currentIndex = this.data.currentIndex
    let currentMovie = {}
    let movieData = this.data.movieData
    let length = movieData.length
    let classArray = new Array(length)

    if (direction === 'left') {  // 向左滑动
      if (++currentIndex >= length) return

      classArray[currentIndex] = 'active';
      classArray[currentIndex - 1] = 'prev';
      if (currentIndex + 1 < length) {
        classArray[currentIndex + 1] = 'next';
      }

    } else if (direction === 'right') {  // 向右滑动
      if (--currentIndex < 0) return

      if (currentIndex - 1 >= 0) {
        classArray[currentIndex - 1] = 'prev';
      }
      classArray[currentIndex] = 'active';
      classArray[currentIndex + 1] = 'next';

    }

    currentMovie = movieData[currentIndex]
    this.moveCard(direction)

    this.setData({
      currentIndex,
      classArray,
      currentMovie,
    })
  },
  // 创建平移动画
  moveCard(direction) {
    let currentIndex = this.data.currentIndex + 1
    let movieDistance = this.data.movieDistance

    if (direction === 'left') {
      movieDistance -= 549
    } else if (direction === 'right') {
      movieDistance += 549
    }

    this.setData({
      movieDistance
    })
  },
  /**
   * 获取电影信息
   */
  getMovieList() {
    
  },
  // 实现页面跳转
  onTapNavigateTo(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id,
    })
  },
})