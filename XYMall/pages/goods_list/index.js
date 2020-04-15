import {
  request
} from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [{
        id: 0,
        value: "综合",
        isActive: true
      },
      {
        id: 1,
        value: "销量",
        isActive: false
      },
      {
        id: 2,
        value: "价格",
        isActive: false
      }
    ],
    goodsList: [{
        "goods_id": 57396,
        "cat_id": 999,
        "goods_name": "紫米ZMI 小米QC3.0快充车充 5V2.4A双USB智能输出 一拖二手机平板通用汽车充电器 AP821 银色",
        "goods_price": 69,
        "goods_number": 100,
        "goods_weight": 100,
        "goods_big_logo": "http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000740439998_1_800x800.jpg",
        "goods_small_logo": "http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000740439998_1_400x400.jpg",
        "add_time": 1516663006,
        "upd_time": 1516663006,
        "hot_mumber": 0,
        "is_promote": false,
        "cat_one_id": 962,
        "cat_two_id": 981,
        "cat_three_id": 999
      },
      {
        "goods_id": 57224,
        "cat_id": 993,
        "goods_name": "70迈小米行车记录仪智能后视镜导航行车记录仪云镜测速一体机 8.88英寸大屏幕 官方标配",
        "goods_price": 1299,
        "goods_number": 100,
        "goods_weight": 100,
        "goods_big_logo": "http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000719098452_2_800x800.jpg",
        "goods_small_logo": "http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000719098452_2_400x400.jpg",
        "add_time": 1516662412,
        "upd_time": 1516662412,
        "hot_mumber": 0,
        "is_promote": false,
        "cat_one_id": 1480,
        "cat_two_id": 1481,
        "cat_three_id": 993
      }
    ]
  },

  // 接口要的参数
  QueryParams: {
    query: "",
    cid: "",
    pagenum: 1,
    pagesize: 10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.cid);
    this.QueryParams.cid = options.cid;
    // this.getGoodsList();
    // 假装接口宕机了

  },

  // 获取商品列表数据
  async getGoodsList() {
    const res = await request({
      url: "goods/search",
      data: this.QueryParams
    });

    this.setData({
      goodsList: res.goods
    });

  },

  // 标题点击事件 从子组件传递过来
  handleTabsItemChange(e) {
    // 1 获取被点击的标题索引
    const {
      index
    } = e.detail;
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