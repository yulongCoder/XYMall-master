// 0 引入用来发送请求的方法, 小程序的话路径要补完整；
import {
  request
} from "../../request/index.js";


Page({
  data: {
    // 轮播图数组
    swiperList: [],
    // 导航 数组
    catesList: [],
    // 楼层数据
    floorList:[]
  },

  // 页面开始加载就会触发
  onLoad: function () {
    // this.getSwiperList();
    // 将原生的请求修改为promise的方式
    this.getSwiperList2();
    this.getCateList();
    this.getFloorList();
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

  // 网络接口相关

  // 获取首页轮播图数据
  getSwiperList() {

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

  // 获取轮播图数据，通过promise的方式
  getSwiperList2() {
    request({
      url: 'home/swiperdata',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text'
    }).then(result => {
      this.setData({
        swiperList: result.data.message
      });
    });
  },

  // 获取分类导航数据
  getCateList() {
    request({
      url: 'home/catitems'
    }).then(result => {
      this.setData({
        catesList: result.data.message
      });
    });
  },

  // 获取楼层数据
  getFloorList() {
    request({
      url: 'home/floordata'
    }).then(result => {
      this.setData({
        floorList: result.data.message
      });
    });
  }
})