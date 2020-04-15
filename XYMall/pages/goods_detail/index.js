/* 
1 发送请求获取数据 
2 点击轮播图 预览大图
  1 给轮播图绑定点击事件
  2 调用小程序的api  previewImage 
3 点击 加入购物车
  1 先绑定点击事件
  2 获取缓存中的购物车数据 数组格式 
  3 先判断 当前的商品是否已经存在于 购物车
  4 已经存在 修改商品数据  执行购物车数量++ 重新把购物车数组 填充回缓存中
  5 不存在于购物车的数组中 直接给购物车数组添加一个新元素 新元素 带上 购买数量属性 num  重新把购物车数组 填充回缓存中
  6 弹出提示
4 商品收藏
  1 页面onShow的时候  加载缓存中的商品收藏的数据
  2 判断当前商品是不是被收藏 
    1 是 改变页面的图标
    2 不是 。。
  3 点击商品收藏按钮 
    1 判断该商品是否存在于缓存数组中
    2 已经存在 把该商品删除
    3 没有存在 把商品添加到收藏数组中 存入到缓存中即可
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
    goodsObj: {
      "goods_name": "海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面",
      "goods_price": 6809,
      "goods_introduce": "<div class=\"lazyimg\"><div moduleid=\"R0503002_2\" modulename=\"关联推荐\"><p><img data-src=\"//image.suning.cn/uimg/sop/commodity/297472958116848970954760_x.jpg?from=mobile&amp;format=80q.jpg\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/297472958116848970954760_x.jpg?from=mobile&format=80q.jpg\" width=\"100%\" height=\"auto\"></p></div><div moduleid=\"R0503002_3\" modulename=\"商品详情\"><p><img data-src=\"//image.suning.cn/uimg/sop/commodity/297472958116848970954760_x.jpg?from=mobile&amp;format=80q.jpg\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/297472958116848970954760_x.jpg?from=mobile&format=80q.jpg\" width=\"100%\" height=\"auto\"></p></div><div moduleid=\"R0503002_6\" modulename=\"安装说明\"><table style=\"width: 100%; height: auto;\">\n<tbody>\n<tr>\n<td><a href=\"https://sale.suning.com/shfw/cdaz/index.html#suning\" target=\"_blank\"><img data-src=\"https://sale.suning.com/shfw/cdazpic/images/all.jpg?from=mobile&amp;format=80q.jpg\" alt=\"\" src=\"https://sale.suning.com/shfw/cdazpic/images/all.jpg?from=mobile&format=80q.jpg\" width=\"100%\" height=\"auto\"></a></td>\n</tr>\n</tbody>\n</table></div></div>",
      "pics": [{
          "pics_id": 180132,
          "goods_id": 43985,
          "pics_big": "http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_1_800x800.jpg",
          "pics_mid": "http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_1_400x400.jpg",
          "pics_sma": "http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_1_200x200.jpg",
          "pics_big_url": "http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_1_800x800.jpg",
          "pics_mid_url": "http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_1_400x400.jpg",
          "pics_sma_url": "http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_1_200x200.jpg"
        },
        {
          "pics_id": 180133,
          "goods_id": 43985,
          "pics_big": "http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_2_800x800.jpg",
          "pics_mid": "http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_2_400x400.jpg",
          "pics_sma": "http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_2_200x200.jpg",
          "pics_big_url": "http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_2_800x800.jpg",
          "pics_mid_url": "http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_2_400x400.jpg",
          "pics_sma_url": "http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_2_200x200.jpg"
        },
        {
          "pics_id": 180134,
          "goods_id": 43985,
          "pics_big": "http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_3_800x800.jpg",
          "pics_mid": "http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_3_400x400.jpg",
          "pics_sma": "http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_3_200x200.jpg",
          "pics_big_url": "http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_3_800x800.jpg",
          "pics_mid_url": "http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_3_400x400.jpg",
          "pics_sma_url": "http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_3_200x200.jpg"
        },
        {
          "pics_id": 180135,
          "goods_id": 43985,
          "pics_big": "http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_4_800x800.jpg",
          "pics_mid": "http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_4_400x400.jpg",
          "pics_sma": "http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_4_200x200.jpg",
          "pics_big_url": "http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_4_800x800.jpg",
          "pics_mid_url": "http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_4_400x400.jpg",
          "pics_sma_url": "http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_4_200x200.jpg"
        },
        {
          "pics_id": 180136,
          "goods_id": 43985,
          "pics_big": "http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_5_800x800.jpg",
          "pics_mid": "http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_5_400x400.jpg",
          "pics_sma": "http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_5_200x200.jpg",
          "pics_big_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_5_800x800.jpg",
          "pics_mid_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_5_400x400.jpg",
          "pics_sma_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000193373779_5_200x200.jpg"
        }
      ]
    },
    // 商品是否被收藏
    isCollect: false
  },
  // 商品对象
  GoodsInfo: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {
      goods_id
    } = options;

    // this.getGoodsDetail(goods_id);
    // 假装接口宕机了
  },

  // 获取商品详情数据
  async getGoodsDetail(goods_id) {
    const goodsObj = await request({
      url: "goods/detail",
      data: {
        goods_id
      }
    });
    this.GoodsInfo = goodsObj;

    // 1 获取缓存中的商品收藏的数组
    let collect = wx.getStorageSync("collect") || [];
    // 2 判断当前商品是否被收藏
    let isCollect = collect.some(v => v.goods_id === this.GoodsInfo.goods_id);

    this.setData({
      goodsObj: {
        goods_name: goodsObj.goods_name,
        goods_price: goodsObj.goods_price,
        // iphone部分手机 不识别 webp图片格式 
        // 最好找到后台 让他进行修改 
        // 临时自己改 确保后台存在 1.webp => 1.jpg 
        goods_introduce: goodsObj.goods_introduce.replace(/\.webp/g, '.jpg'),
        pics: goodsObj.pics
      },
      isCollect
    })
  },

  // 点击轮播图 放大预览
  handlePrevewImage(e) {
    // 1 先构造要预览的图片数组 
    const urls = this.GoodsInfo.pics.map(v => v.pics_mid);
    // 2 接收传递过来的图片url
    const current = e.currentTarget.dataset.url;
    wx.previewImage({
      current,
      urls
    });
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