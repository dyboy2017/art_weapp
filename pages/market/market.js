// pages/market/market.js

var good_id = "";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: ""
  },
  //展示input
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  //隐藏input
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  //清空input
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  //获取input的内容
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
//查看商品详情
  get_details:function(e){
    good_id = e.currentTarget.dataset.goodid;
    console.log(e);
    console.log(good_id);
    wx.navigateTo({
      url: '../good_detail/good_detail?goodid='+good_id,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {
      },
    })
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