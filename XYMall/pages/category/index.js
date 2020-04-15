// 0 引入用来发送请求的方法, 小程序的话路径要补完整；
import {
  request
} from "../../request/index.js";

// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧的菜单数据
    leftMenuList: [],
    // 右侧的商品数据
    rightContent: [],
    // 被点击的左侧的菜单
    currentIndex: 0,
    // 右侧内容的滚动条距离顶部的距离
    scrollTop: 0
  },
  // 接口的返回数据
  Cates: [],


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    /*
    0 web中的本地存储和 小程序中本地存储的区别
      1 写代码的方式不一样，
        web: localStorage.setItem("key", "value");
        小程序中 wx.setStorageSync("key", "value");
        小程序中获取 wx.getStorageSync("key");
      2 存储的时候，有没有做类型转换
        web：不管存入的是什么类型的数据，最终先会调用一下toString(),把数据变成字符串，再存储；
        小程序中，不存在类型转换这个操作的，存什么类型的数据进来，获取的时候就是什么类型。

    1 先判断一下本地存储中有没有旧的数据，
    我们会存储这样一个对象到本地，
    {time:Date.now(), data:[分类数据]};
    2 没有旧的数据，直接发送新请求，
    3 有旧的数据，同时，旧的数据也没有过期，就使用本地存储的旧数据即可
    */

    // 1 获取本地存储中的数据（小程序也是存在本地存储 技术）
    const Cates = wx.getStorageSync('cates');
    // 2 判断
    if (!Cates) {
      // 不存在，发送请求数据
      this.getCategories();
    } else {
      // 有旧的数据，定义过期时间 10s，后面改成5min
      if (Date.now() - Cates.time > 1000 * 10) {
        // 重新发送请求
        this.getCategories();
      } else {
        // 可以使用旧的数据
        console.log("可以使用旧的数据");
        this.Cates = Cates.data;
        let leftMenuList = this.Cates.map(v => v.cat_name);
        let rightContent = this.Cates[0].children;
        this.setData({
          leftMenuList,
          rightContent
        })
      }
    }
  },

  // 左侧菜单点击事件
  handleLeftMenuItemTap: function (e) {
    /*
    1 获取被点击的标题，身上的索引
    2 给data 中 的 currentIndex 赋值就可以了
    3 根据不同的索引，来渲染右侧的商品内容
    */
    const {
      index
    } = e.currentTarget.dataset;
    // 构造右侧的商品数据
    let rightContent = this.Cates[index].children;

    this.setData({
      currentIndex: index,
      rightContent,
      // 重新设置 右侧内容的scroll-view标签的距离顶部的距离
      scrollTop: 0
    });
  },

  // 获取分类数据
  getCategories() {
    request({
      url: 'categories'
    }).then(result => {
      this.Cates = result.data.message;
      // 把接口数据存储到本地
      wx.setStorageSync('cates', {
        time: Date.now(),
        data: this.Cates
      });

      // 构造左侧的大菜单数据
      let leftMenuList = this.Cates.map(v => v.cat_name);

      // 构造右侧的商品数据
      let rightContent = this.Cates[0].children;

      this.setData({
        leftMenuList,
        rightContent
      });
    });
  }
})