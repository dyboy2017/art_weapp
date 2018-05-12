//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    username: '微信用户',
    userInfo: {},
    hasUserInfo: false,
    isHideLoadMore:false,
    pictures: [
      { url: 'http://img.alicdn.com/imgextra/i4/65/TB2V4PVn_lYBeNjSszcXXbwhFXa_!!65-0-luban.jpg_q100.jpg_.webp' },
      { url: 'http://img.alicdn.com/imgextra/i3/12/TB2c8jqhbSYBuNjSspfXXcZCpXa_!!12-0-luban.jpg_q100.jpg_.webp' },
      { url: 'http://img.alicdn.com/tps/i4/TB1E1xEbTdYBeNkSmLySutfnVXa.jpg' },
      { url: 'https://img.alicdn.com/imgextra/i2/2671315119/TB2b2zabvNNTKJjSspeXXaSwpXa_!!2671315119.jpg_490x490q100.jpg_.webp' }
    ]
  },
  //事件处理函数
  //点击头像获取启动日志
  getLogs: function(e) {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //跳转消息详情
  getdetail:function(e){
    var aid = e.currentTarget.dataset.aid;  //点击消息的id
    wx.navigateTo({   //跳转详情页面传递文章aid参数
      url: '../article/article?aid='+aid,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })

  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      });
    } else if (true){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 下拉刷新
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    setTimeout(function() {
      wx.hideNavigationBarLoading() //完成停止加载
      console.log("刷新成功");
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 2000)
  },
  onReachBottom: function () {
    if (!this.isHideLoadMore){
      console.log("下拉加载无内容");
    }
    setTimeout(() => {
      this.setData({
        isHideLoadMore: true  //本次加载成功，隐藏加载动画
      })
    }, 2000);
  }
  
})
