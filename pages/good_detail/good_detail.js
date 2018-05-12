// pages/good_detail/good_detail.js
const app = getApp()

Page({
  

  /**
   * 页面的初始数据
   */
  data: {
    good_id:0,  //当前商品
    goods_pictures: [
      { url: 'http://img.alicdn.com/imgextra/i4/65/TB2V4PVn_lYBeNjSszcXXbwhFXa_!!65-0-luban.jpg_q100.jpg_.webp' },
      { url: 'http://img.alicdn.com/imgextra/i3/12/TB2c8jqhbSYBuNjSspfXXcZCpXa_!!12-0-luban.jpg_q100.jpg_.webp' },
      { url: 'http://img.alicdn.com/tps/i4/TB1E1xEbTdYBeNkSmLySutfnVXa.jpg' },
      { url: 'https://img.alicdn.com/imgextra/i2/2671315119/TB2b2zabvNNTKJjSspeXXaSwpXa_!!2671315119.jpg_490x490q100.jpg_.webp' }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      good_id: options.goodid
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
  
  }
})