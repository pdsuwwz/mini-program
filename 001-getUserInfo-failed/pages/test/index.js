// pages/test/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'xxx',
    loading: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad!")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady!")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow!")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide!")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload!")
  },

  getUserinfo: function(){
    wx.getUserInfo({
      success: function(res){
        console.log("success: ", res) // 不会触发
      },
      fail: function(res){
        console.log("fail: ", res) // 小程序改版后导致第一次直接调用获取用户信息接口报错
      }
    })
  },

  touchstart: function(e){
    console.log(wx)
  }
})
