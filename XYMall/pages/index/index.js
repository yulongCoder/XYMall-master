// 0 引入用来发送请求的方法, 小程序的话路径要补完整；
import {
  request
} from "../../request/index.js";


Page({
  data: {
    // 轮播图数组
    swiperList: [{
      "image_src": "https://api-hmugo-web.itheima.net/pyg/banner1.png",
      "open_type": "navigate",
      "goods_id": 129,
      "navigator_url": "/pages/goods_detail/main?goods_id=129"
    }, {
      "image_src": "https://api-hmugo-web.itheima.net/pyg/banner2.png",
      "open_type": "navigate",
      "goods_id": 395,
      "navigator_url": "/pages/goods_detail/main?goods_id=395"
    }, {
      "image_src": "https://api-hmugo-web.itheima.net/pyg/banner3.png",
      "open_type": "navigate",
      "goods_id": 38,
      "navigator_url": "/pages/goods_detail/main?goods_id=38"
    }],
    // 导航 数组
    catesList: [{
      "name": "分类",
      "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_4@2x.png",
      "open_type": "switchTab",
      "navigator_url": "/pages/category/main"
    }, {
      "name": "秒杀拍",
      "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_3@2x.png"
    }, {
      "name": "超市购",
      "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_2@2x.png"
    }, {
      "name": "母婴品",
      "image_src": "https://api-hmugo-web.itheima.net/pyg/icon_index_nav_1@2x.png"
    }],
    // 楼层数据
    floorList: [{
      "floor_title": {
        "name": "时尚女装",
        "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_title.png"
      },
      "product_list": [{
        "name": "优质服饰",
        "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_1@2x.png",
        "image_width": "232",
        "open_type": "navigate",
        "navigator_url": "/pages/goods_list?query=服饰"
      }, {
        "name": "春季热门",
        "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_2@2x.png",
        "image_width": "233",
        "open_type": "navigate",
        "navigator_url": "/pages/goods_list?query=热"
      }, {
        "name": "爆款清仓",
        "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_3@2x.png",
        "image_width": "233",
        "open_type": "navigate",
        "navigator_url": "/pages/goods_list?query=爆款"
      }, {
        "name": "倒春寒",
        "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_4@2x.png",
        "image_width": "233",
        "open_type": "navigate",
        "navigator_url": "/pages/goods_list?query=春季"
      }, {
        "name": "怦然心动",
        "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor01_5@2x.png",
        "image_width": "233",
        "open_type": "navigate",
        "navigator_url": "/pages/goods_list?query=心动"
      }]
    }, {
      "floor_title": {
        "name": "户外活动",
        "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_title.png"
      },
      "product_list": [{
        "name": "勇往直前",
        "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_1@2x.png",
        "image_width": "232",
        "open_type": "navigate",
        "navigator_url": "/pages/goods_list?query=户外"
      }, {
        "name": "户外登山包",
        "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_2@2x.png",
        "image_width": "273",
        "open_type": "navigate",
        "navigator_url": "/pages/goods_list?query=登山包"
      }, {
        "name": "超强手套",
        "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_3@2x.png",
        "image_width": "193",
        "open_type": "navigate",
        "navigator_url": "/pages/goods_list?query=手套"
      }, {
        "name": "户外运动鞋",
        "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_4@2x.png",
        "image_width": "193",
        "open_type": "navigate",
        "navigator_url": "/pages/goods_list?query=运动鞋"
      }, {
        "name": "冲锋衣系列",
        "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor02_5@2x.png",
        "image_width": "273",
        "open_type": "navigate",
        "navigator_url": "/pages/goods_list?query=冲锋衣"
      }]
    }, {
      "floor_title": {
        "name": "箱包配饰",
        "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_title.png"
      },
      "product_list": [{
        "name": "清新气质",
        "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_1@2x.png",
        "image_width": "232",
        "open_type": "navigate",
        "navigator_url": "/pages/goods_list?query=饰品"
      }, {
        "name": "复古胸针",
        "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_2@2x.png",
        "image_width": "263",
        "open_type": "navigate",
        "navigator_url": "/pages/goods_list?query=胸针"
      }, {
        "name": "韩版手链",
        "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_3@2x.png",
        "image_width": "203",
        "open_type": "navigate",
        "navigator_url": "/pages/goods_list?query=手链"
      }, {
        "name": "水晶项链",
        "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_4@2x.png",
        "image_width": "193",
        "open_type": "navigate",
        "navigator_url": "/pages/goods_list?query=水晶项链"
      }, {
        "name": "情侣表",
        "image_src": "https://api-hmugo-web.itheima.net/pyg/pic_floor03_5@2x.png",
        "image_width": "273",
        "open_type": "navigate",
        "navigator_url": "/pages/goods_list?query=情侣表"
      }]
    }]
  },

  // 页面开始加载就会触发
  onLoad: function () {
    // this.getSwiperList();
    // 将原生的请求修改为promise的方式
    // this.getSwiperList2();
    // this.getCateList();
    // this.getFloorList();

    // 假装接口宕机了
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
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
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
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems'
    }).then(result => {
      this.setData({
        catesList: result.data.message
      });
    });
  },

  // 获取楼层数据
  getFloorList() {
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata'
    }).then(result => {
      this.setData({
        floorList: result.data.message
      });
    });
  }
})