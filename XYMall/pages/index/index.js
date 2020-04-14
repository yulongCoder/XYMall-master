//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 轮播图数组
    swiperList: [],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  // 页面开始加载就会触发
  onLoad: function () {

    // 1 发送异步请求，获取轮播图数据
    var reqTask = wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        console.log("接口请求成功");
        console.log(result);
        this.setData({
          swiperList: result.data.message
        });
      },
      fail: () => {
        console.log("接口请求失败");
      },
      complete: () => {
        // 接口请求成功 或者 失败，都走这里
      }
    });
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {
    console.log("onShareAppMessage");
  },
  onPageScroll: function () {

  },
  // item(index, pagePath,text)
  onTabItemTap: function (item) {

  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})