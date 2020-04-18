/* 
1 页面被打开的时候 onShow 
  0 onShow 不同于onLoad 无法在形参上接收 options参数 
    0.5 判断缓存中有没有token 
    1 没有 直接跳转到授权页面
    2 有 直接往下进行 

  1 获取url上的参数type
  2 根据type来决定页面标题的数组元素 哪个被激活选中 
  2 根据type 去发送请求获取订单数据
  3 渲染页面
2 点击不同的标题 重新发送请求来获取和渲染数据 
 */

import {
  request
} from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    orders: [{
        "order_id": 2274,
        "user_id": 23,
        "order_number": "HMDD20200418000000002274",
        "order_price": 11296,
        "order_pay": "0",
        "is_send": "否",
        "trade_no": "",
        "order_fapiao_title": "个人",
        "order_fapiao_company": "",
        "order_fapiao_content": "",
        "consignee_addr": "北京市北京市东城区把健健康康",
        "pay_status": "0",
        "create_time": 1587197625,
        "update_time": 1587197625,
        "order_detail": null,
        "goods": [],
        "total_count": 0,
        "total_price": 0,
        "create_time_cn": "2020/4/18 下午4:13:45"
      },
      {
        "order_id": 2273,
        "user_id": 23,
        "order_number": "HMDD20200418000000002273",
        "order_price": 11296,
        "order_pay": "0",
        "is_send": "否",
        "trade_no": "",
        "order_fapiao_title": "个人",
        "order_fapiao_company": "",
        "order_fapiao_content": "",
        "consignee_addr": "北京市北京市东城区把健健康康",
        "pay_status": "0",
        "create_time": 1587197623,
        "update_time": 1587197623,
        "order_detail": null,
        "goods": [],
        "total_count": 0,
        "total_price": 0,
        "create_time_cn": "2020/4/18 下午4:13:43"
      },
      {
        "order_id": 2272,
        "user_id": 23,
        "order_number": "HMDD20200418000000002272",
        "order_price": 11296,
        "order_pay": "0",
        "is_send": "否",
        "trade_no": "",
        "order_fapiao_title": "个人",
        "order_fapiao_company": "",
        "order_fapiao_content": "",
        "consignee_addr": "北京市北京市东城区把健健康康",
        "pay_status": "0",
        "create_time": 1587197621,
        "update_time": 1587197621,
        "order_detail": null,
        "goods": [],
        "total_count": 0,
        "total_price": 0,
        "create_time_cn": "2020/4/18 下午4:13:41"
      },
      {
        "order_id": 2271,
        "user_id": 23,
        "order_number": "HMDD20200418000000002271",
        "order_price": 11296,
        "order_pay": "0",
        "is_send": "否",
        "trade_no": "",
        "order_fapiao_title": "个人",
        "order_fapiao_company": "",
        "order_fapiao_content": "",
        "consignee_addr": "北京市北京市东城区把健健康康",
        "pay_status": "0",
        "create_time": 1587197546,
        "update_time": 1587197546,
        "order_detail": null,
        "goods": [],
        "total_count": 0,
        "total_price": 0,
        "create_time_cn": "2020/4/18 下午4:12:26"
      },
      {
        "order_id": 2270,
        "user_id": 23,
        "order_number": "HMDD20200418000000002270",
        "order_price": 11296,
        "order_pay": "0",
        "is_send": "否",
        "trade_no": "",
        "order_fapiao_title": "个人",
        "order_fapiao_company": "",
        "order_fapiao_content": "",
        "consignee_addr": "北京市北京市东城区把健健康康",
        "pay_status": "0",
        "create_time": 1587197542,
        "update_time": 1587197542,
        "order_detail": null,
        "goods": [],
        "total_count": 0,
        "total_price": 0,
        "create_time_cn": "2020/4/18 下午4:12:22"
      },
      {
        "order_id": 2269,
        "user_id": 23,
        "order_number": "HMDD20200418000000002269",
        "order_price": 13999,
        "order_pay": "0",
        "is_send": "否",
        "trade_no": "",
        "order_fapiao_title": "个人",
        "order_fapiao_company": "",
        "order_fapiao_content": "",
        "consignee_addr": "广东省广州市海珠区新港中路397号",
        "pay_status": "0",
        "create_time": 1587195449,
        "update_time": 1587195449,
        "order_detail": null,
        "goods": [{
          "id": 3686,
          "order_id": 2269,
          "goods_id": 43986,
          "goods_price": 13999,
          "goods_number": 1,
          "goods_total_price": 13999,
          "goods_name": "海信(Hisense)LED55MU9600X3DUC 55英寸 4K超高清量子点电视 ULED画质 VIDAA系统",
          "goods_small_logo": "http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000160455569_1_400x400.jpg"
        }],
        "total_count": 1,
        "total_price": 13999,
        "create_time_cn": "2020/4/18 下午3:37:29"
      },
      {
        "order_id": 2268,
        "user_id": 23,
        "order_number": "HMDD20200418000000002268",
        "order_price": 4624,
        "order_pay": "0",
        "is_send": "否",
        "trade_no": "",
        "order_fapiao_title": "个人",
        "order_fapiao_company": "",
        "order_fapiao_content": "",
        "consignee_addr": "广东省广州市海珠区新港中路397号",
        "pay_status": "0",
        "create_time": 1587194846,
        "update_time": 1587194846,
        "order_detail": null,
        "goods": [{
            "id": 3683,
            "order_id": 2268,
            "goods_id": 27282,
            "goods_price": 489,
            "goods_number": 1,
            "goods_total_price": 489,
            "goods_name": "博斯顿S-6 家庭影院音箱 5.1回音壁条形电视音响 数字蓝牙 FIHI木质音箱 壁挂音箱同轴光纤 触控屏 黑色",
            "goods_small_logo": "http://image2.suning.cn/uimg/b2c/newcatentries/0070135516-000000000146664273_2_400x400.jpg"
          },
          {
            "id": 3684,
            "order_id": 2268,
            "goods_id": 47868,
            "goods_price": 3599,
            "goods_number": 1,
            "goods_total_price": 3599,
            "goods_name": "海信(Hisense)LED58EC550UA 58英寸 金属窄边4K HDR显示 VIDAA智能液晶平板电视",
            "goods_small_logo": "http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000178667792_2_400x400.jpg"
          },
          {
            "id": 3685,
            "order_id": 2268,
            "goods_id": 54530,
            "goods_price": 268,
            "goods_number": 2,
            "goods_total_price": 536,
            "goods_name": "才子(TRiES)秋季款头层牛皮系带商务休闲皮鞋 时尚简约舒适男鞋正装鞋 H09C885",
            "goods_small_logo": ""
          }
        ],
        "total_count": 4,
        "total_price": 4624,
        "create_time_cn": "2020/4/18 下午3:27:26"
      },
      {
        "order_id": 2267,
        "user_id": 23,
        "order_number": "HMDD20200418000000002267",
        "order_price": 198,
        "order_pay": "0",
        "is_send": "否",
        "trade_no": "",
        "order_fapiao_title": "个人",
        "order_fapiao_company": "",
        "order_fapiao_content": "",
        "consignee_addr": "北京市北京市西城区新华路199号 河北工业大学廊坊分校",
        "pay_status": "0",
        "create_time": 1587177937,
        "update_time": 1587177937,
        "order_detail": null,
        "goods": [{
          "id": 3682,
          "order_id": 2267,
          "goods_id": 57351,
          "goods_price": 198,
          "goods_number": 1,
          "goods_total_price": 198,
          "goods_name": "AIJIA 车载冰箱 4L迷你车载小冰箱 车家两用冷藏保鲜 加热保温车载冰箱 便携式冰箱 迷你冰箱 车用冰箱 冷暖 蓝色",
          "goods_small_logo": "http://image5.suning.cn/uimg/b2c/newcatentries/0070118448-000000000165989474_1_400x400.jpg"
        }],
        "total_count": 1,
        "total_price": 198,
        "create_time_cn": "2020/4/18 上午10:45:37"
      },
      {
        "order_id": 2266,
        "user_id": 23,
        "order_number": "HMDD20200418000000002266",
        "order_price": 42275,
        "order_pay": "0",
        "is_send": "否",
        "trade_no": "",
        "order_fapiao_title": "个人",
        "order_fapiao_company": "",
        "order_fapiao_content": "",
        "consignee_addr": "四川省成都市双流区朝阳小区",
        "pay_status": "0",
        "create_time": 1587177823,
        "update_time": 1587177823,
        "order_detail": null,
        "goods": [{
            "id": 3680,
            "order_id": 2266,
            "goods_id": 57335,
            "goods_price": 278,
            "goods_number": 1,
            "goods_total_price": 278,
            "goods_name": "美固MOBICOOL车载冰箱 T07-DC 车家两用冷热箱、食品、药品、化妆品都能带上了、本款产品内不含家用电源。",
            "goods_small_logo": "http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000150912194_1_400x400.jpg"
          },
          {
            "id": 3681,
            "order_id": 2266,
            "goods_id": 43986,
            "goods_price": 13999,
            "goods_number": 3,
            "goods_total_price": 41997,
            "goods_name": "海信(Hisense)LED55MU9600X3DUC 55英寸 4K超高清量子点电视 ULED画质 VIDAA系统",
            "goods_small_logo": "http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000160455569_1_400x400.jpg"
          }
        ],
        "total_count": 4,
        "total_price": 42275,
        "create_time_cn": "2020/4/18 上午10:43:43"
      },
      {
        "order_id": 2265,
        "user_id": 23,
        "order_number": "HMDD20200418000000002265",
        "order_price": 22796,
        "order_pay": "0",
        "is_send": "否",
        "trade_no": "",
        "order_fapiao_title": "个人",
        "order_fapiao_company": "",
        "order_fapiao_content": "",
        "consignee_addr": "天津市天津市河西区111",
        "pay_status": "0",
        "create_time": 1587177819,
        "update_time": 1587177819,
        "order_detail": null,
        "goods": [{
            "id": 3677,
            "order_id": 2265,
            "goods_id": 25972,
            "goods_price": 15999,
            "goods_number": 1,
            "goods_total_price": 15999,
            "goods_name": "三星(SAMSUNG) QA55Q7FAMJXXZ 55英寸 超高清 QLED光质量子点 超薄 超窄边框 智能电视",
            "goods_small_logo": "http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000611616571_2_400x400.jpg"
          },
          {
            "id": 3678,
            "order_id": 2265,
            "goods_id": 57442,
            "goods_price": 2999,
            "goods_number": 1,
            "goods_total_price": 2999,
            "goods_name": "创维彩电40G6A",
            "goods_small_logo": "http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000601395527_1_400x400.jpg"
          },
          {
            "id": 3679,
            "order_id": 2265,
            "goods_id": 57444,
            "goods_price": 1899,
            "goods_number": 2,
            "goods_total_price": 3798,
            "goods_name": "创维（Skyworth）42X6 42英寸10核智能酷开网络平板液晶电视（黑色）",
            "goods_small_logo": "http://image2.suning.cn/uimg/b2c/newcatentries/0070078057-000000000634917020_1_400x400.jpg"
          }
        ],
        "total_count": 4,
        "total_price": 22796,
        "create_time_cn": "2020/4/18 上午10:43:39"
      }
    ],
    tabs: [{
        id: 0,
        value: "全部",
        isActive: true
      },
      {
        id: 1,
        value: "待付款",
        isActive: false
      },
      {
        id: 2,
        value: "待发货",
        isActive: false
      },
      {
        id: 3,
        value: "退款/退货",
        isActive: false
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log("--onLoad--", options);
    // --onLoad-- {type: "1"}
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
    console.log("--onShow--", options);
    // --onShow-- undefined

    const token = wx.getStorageSync("token");
    if (!token) {
      wx.navigateTo({
        url: '/pages/auth/index'
      });
      return;
    }

    // 1 获取当前的小程序的页面栈-数组 长度最大是10页面 
    let pages = getCurrentPages();
    // 2 数组中 索引最大的页面就是当前页面
    let currentPage = pages[pages.length - 1];
    // 3 获取url上的type参数
    const {
      type
    } = currentPage.options;

    console.log("type==", type);

    // 4 激活选中页面标题 当 type=1 index=0 
    this.changeTitleByIndex(type - 1);

    // 假装接口宕机了
    // this.getOrders(type);
  },

  // 获取订单列表的方法
  async getOrders(type) {
    const res = await request({
      url: "my/orders/all",
      data: {
        type
      }
    });
    this.setData({
      orders: res.orders.map(v => ({
        ...v,
        create_time_cn: (new Date(v.create_time * 1000).toLocaleString())
      }))
    })
  },

  // 根据标题索引来激活选中 标题数组
  changeTitleByIndex(index) {
    // 2 修改源数组
    let {
      tabs
    } = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    // 3 赋值到data中
    this.setData({
      tabs
    })
  },

  handleTabsItemChange(e) {
    // 1 获取被点击的标题索引
    const {
      index
    } = e.detail;
    this.changeTitleByIndex(index);
    // 2 重新发送请求 type=1 index=0
    // this.getOrders(index + 1);
  }
})