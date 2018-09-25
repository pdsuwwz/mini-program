// pages/test/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
    showGetUser: false,
    userData: {} 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAuthSetting() // 加载时就判断用户是否授权
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
   * 初始化数据
   */
  initData: function(){
    let { showGetUser } = this.data
    showGetUser = true
    this.setData({
      showGetUser
    })
  },


  /**
   * 判断用户是否授权
   */
  getAuthSetting: function(){
    // 获取用户请求过的授权
    wx.getSetting({
      success: (res) => {
        if ( res.authSetting["scope.userInfo"] ){ // 若授权过，则直接调取用户信息
          this.getUserInfo()
        } else if ( !res.authSetting["scope.userInfo"] ){ // 没有授权，初始化数据
          this.initData()
        }
      }
    })
  },

  /**
   * 授权信息回调函数
   */
  getUserInfo: function(){
    wx.getUserInfo({
      success: (res) => {
        let { loading, showGetUser, userData} = this.data
        loading = true
        showGetUser = false
        userData = res.userInfo
        this.setData({
          loading,
          showGetUser,
          userData
        })
      },
      fail: (res) => {
        console.log("fail: ", res)
      }
    })
  },

  touchstart: function(e){
    console.log(wx)
  }
})