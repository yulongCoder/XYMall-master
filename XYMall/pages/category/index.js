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
  },
  // 接口的返回数据
  Cates: [],


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCategories();
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
      rightContent
    });
  },

  // 获取分类数据
  getCategories() {
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories'
    }).then(result => {
      this.Cates = result.data.message;

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