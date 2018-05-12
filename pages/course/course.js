// pages/course/course.js
//获取随机颜色 getRandomColor()
function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    video_url: "http://v4.music.126.net/20180505203659/144eac53572f9741a96f3449b14c28dd/web/cloudmusic/ICAgYCFgICEgMCAwNDUgIA==/mv/5381095/74b94b2496dbebf75662c36bc5d6a4bc.mp4",
    courses: ["http://www.runoob.com/try/demo_source/movie.mp4", "http://www.runoob.com/try/demo_source/movie.mp4", "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"],
  
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('log:' + this.data.array);
    
  },
  playvideo: function(e){
    //this.videoContext.pause();
    this.setData({
      video_url:e.currentTarget.dataset.src
    })
    // this.videoContext.play();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
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