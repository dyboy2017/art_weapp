//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        
        this.globalData.userKeyCode = res.code;

        //登陆请求 开发者服务器
        wx.request({
          url: this.globalData.main_url+'/user/login?code=' + res.code,
          success: (res) => {
            //获取用户keycode
            this.globalData.userinfo_isfinish = res.data.data.is_finish;
            console.log(res.data.data.is_finish);
            //获取headers
            this.globalData.headers.Cookie = res.header["Set-Cookie"];
          }
        })
        
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;

              var userinfo_temp = this.globalData.userInfo;

              //完善用户信息
              if (!this.globalData.userinfo_isfinish){
                wx.request({
                  url: this.globalData.main_url+'/user/finishinfo?nickname='+userinfo_temp.nickName + "&avatar=" + userinfo_temp.avatarUrl + "&gender=" + userinfo_temp.gender + "&city=" + userinfo_temp.city + "/" + userinfo_temp.province,
                  header: this.globalData.headers,
                  success: res => {
                    console.log("微信用户第一次登陆完善信息成功！")
                  }
                })
                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                if (this.userInfoReadyCallback) {
                  this.userInfoReadyCallback(res)
                }
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    main_url : "http://192.168.43.121/art/public/index",
    userInfo: null,
    userKeyCode:null,
    userinfo_isfinish:true,
    headers: {'Cookie': ''}
  }
})