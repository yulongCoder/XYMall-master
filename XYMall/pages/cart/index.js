/*
1 获取用户的收货地址
  1 绑定点击事件
  2 调用小程序内置 api  获取用户的收货地址  wx.chooseAddress
 
  2 获取 用户 对小程序 所授予 获取地址的  权限 状态 scope
      1 假设 用户 点击获取收货地址的提示框 确定  authSetting scope.address 
      scope 值 true 直接调用 获取收货地址
      2 假设 用户 从来没有调用过 收货地址的api 
      scope undefined 直接调用 获取收货地址
      3 假设 用户 点击获取收货地址的提示框 取消   
      scope 值 false 
        1 诱导用户 自己 打开 授权设置页面(wx.openSetting) 当用户重新给与 获取地址权限的时候 
        2 获取收货地址
      4 把获取到的收货地址 存入到 本地存储中 

2 页面加载完毕
  0 onLoad  onShow ，由于购物车页面频繁的被打开，所以在 onShow中写代码
  1 获取本地存储中的地址数据
  2 把数据 设置给data中的一个变量

3 onShow 
  0 回到了商品详情页面 第一次添加商品的时候 手动添加了属性
    1 num=1;
    2 checked=true;
  1 获取缓存中的购物车数组
  2 把购物车数据 填充到data中
*/

import {
  getSetting,
  chooseAddress,
  openSetting,
  showModal,
  showToast
} from "../../utils/asyncWx.js";
import regeneratorRuntime from '../../lib/runtime/runtime';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    cart: [{
        "goods_id": 43984,
        "cat_id": 5,
        "goods_name": "TCL电视 49P3",
        "goods_price": 4699,
        "goods_number": 100,
        "goods_weight": 100,
        "goods_introduce": "<div class=\"lazyimg\"><div moduleid=\"R0503002_2\" modulename=\"关联推荐\"><p><img data-src=\"//image.suning.cn/uimg/sop/commodity/158540798117008225997466_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/158540798117008225997466_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"></p></div><div moduleid=\"R0503002_3\" modulename=\"商品详情\"><p><img data-src=\"//image.suning.cn/uimg/sop/commodity/158540798117008225997466_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/158540798117008225997466_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"></p>\n<p><img data-src=\"//image.suning.cn/uimg/sop/commodity/142683651370832520772730_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/142683651370832520772730_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"></p></div><div moduleid=\"R0503002_6\" modulename=\"安装说明\"><table style=\"width: 100%; height: auto;\">\n<tbody>\n<tr>\n<td><a href=\"https://sale.suning.com/shfw/cdaz/index.html#suning\" target=\"_blank\"><img data-src=\"https://sale.suning.com/shfw/cdazpic/images/all.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"https://sale.suning.com/shfw/cdazpic/images/all.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"></a></td>\n</tr>\n</tbody>\n</table></div></div>",
        "goods_big_logo": "http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_1_800x800.jpg",
        "goods_small_logo": "http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_1_400x400.jpg",
        "goods_state": 2,
        "is_del": "0",
        "add_time": 1516509849,
        "upd_time": 1516509849,
        "delete_time": null,
        "hot_mumber": 0,
        "is_promote": false,
        "cat_one_id": 1,
        "cat_two_id": 3,
        "cat_three_id": 5,
        "goods_cat": "1,3,5",
        "pics": [{
            "pics_id": 180127,
            "goods_id": 43984,
            "pics_big": "http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_1_800x800.jpg",
            "pics_mid": "http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_1_400x400.jpg",
            "pics_sma": "http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_1_200x200.jpg",
            "pics_big_url": "http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_1_800x800.jpg",
            "pics_mid_url": "http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_1_400x400.jpg",
            "pics_sma_url": "http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_1_200x200.jpg"
          },
          {
            "pics_id": 180128,
            "goods_id": 43984,
            "pics_big": "http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_2_800x800.jpg",
            "pics_mid": "http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_2_400x400.jpg",
            "pics_sma": "http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_2_200x200.jpg",
            "pics_big_url": "http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_2_800x800.jpg",
            "pics_mid_url": "http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_2_400x400.jpg",
            "pics_sma_url": "http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_2_200x200.jpg"
          },
          {
            "pics_id": 180129,
            "goods_id": 43984,
            "pics_big": "http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_3_800x800.jpg",
            "pics_mid": "http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_3_400x400.jpg",
            "pics_sma": "http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_3_200x200.jpg",
            "pics_big_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_3_800x800.jpg",
            "pics_mid_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_3_400x400.jpg",
            "pics_sma_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_3_200x200.jpg"
          },
          {
            "pics_id": 180130,
            "goods_id": 43984,
            "pics_big": "http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_4_800x800.jpg",
            "pics_mid": "http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_4_400x400.jpg",
            "pics_sma": "http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_4_200x200.jpg",
            "pics_big_url": "http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_4_800x800.jpg",
            "pics_mid_url": "http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_4_400x400.jpg",
            "pics_sma_url": "http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_4_200x200.jpg"
          },
          {
            "pics_id": 180131,
            "goods_id": 43984,
            "pics_big": "http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_5_800x800.jpg",
            "pics_mid": "http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_5_400x400.jpg",
            "pics_sma": "http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_5_200x200.jpg",
            "pics_big_url": "http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_5_800x800.jpg",
            "pics_mid_url": "http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_5_400x400.jpg",
            "pics_sma_url": "http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000606013705_5_200x200.jpg"
          }
        ],
        "attrs": [{
            "goods_id": 43984,
            "attr_id": 2704,
            "attr_value": "49P3",
            "add_price": 0,
            "attr_name": "主体-商品名称",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "海信电视LED55EC520UA"
          },
          {
            "goods_id": 43984,
            "attr_id": 2705,
            "attr_value": "是",
            "add_price": 0,
            "attr_name": "显示-曲面",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "否"
          },
          {
            "goods_id": 43984,
            "attr_id": 2706,
            "attr_value": "智能电视",
            "add_price": 0,
            "attr_name": "系统-智能电视",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "智能电视"
          },
          {
            "goods_id": 43984,
            "attr_id": 2709,
            "attr_value": "115瓦特",
            "add_price": 0,
            "attr_name": "功耗-整机功率（W）",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "170瓦特"
          }
        ],
        "num": 1,
        "checked": true
      },
      {
        "goods_id": 17927,
        "cat_id": 12,
        "goods_name": "小米（MI）小米电视4 2GB+8GB 55英寸四核64位高性能处理器智能平板电视",
        "goods_price": 4099,
        "goods_number": 100,
        "goods_weight": 100,
        "goods_introduce": "<div class=\"lazyimg\"><div data-title=\"本代码由疯狂的美工京东助理生成\">\n<div><img data-src=\"https://image.suning.cn/uimg/sop/commodity/169245613218907200069461_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" usemap=\"#Crazy_bpnrc\" border=\"0\" src=\"https://image.suning.cn/uimg/sop/commodity/169245613218907200069461_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"> </div>\n</div><div moduleid=\"R0503002_2\" modulename=\"关联推荐\"><p>.</p></div><div moduleid=\"R0503002_3\" modulename=\"商品详情\"><p><img data-src=\"https://image.suning.cn/uimg/sop/commodity/110847399312233496688396_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"https://image.suning.cn/uimg/sop/commodity/110847399312233496688396_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"https://image.suning.cn/uimg/sop/commodity/148954009711343024416301_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"https://image.suning.cn/uimg/sop/commodity/148954009711343024416301_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"https://image.suning.cn/uimg/sop/commodity/675065152168472729179850_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"https://image.suning.cn/uimg/sop/commodity/675065152168472729179850_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"https://image.suning.cn/uimg/sop/commodity/133546902064830607814700_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"https://image.suning.cn/uimg/sop/commodity/133546902064830607814700_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"https://image.suning.cn/uimg/sop/commodity/308349060870539505480200_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"https://image.suning.cn/uimg/sop/commodity/308349060870539505480200_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"https://image.suning.cn/uimg/sop/commodity/701167427126503446386060_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"https://image.suning.cn/uimg/sop/commodity/701167427126503446386060_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"https://image.suning.cn/uimg/sop/commodity/117851413519842529591230_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"https://image.suning.cn/uimg/sop/commodity/117851413519842529591230_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"https://image.suning.cn/uimg/sop/commodity/479193027103395780572020_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"https://image.suning.cn/uimg/sop/commodity/479193027103395780572020_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"https://image.suning.cn/uimg/sop/commodity/397170205928480380402000_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"https://image.suning.cn/uimg/sop/commodity/397170205928480380402000_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"https://image.suning.cn/uimg/sop/commodity/122606905010320427016339_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"https://image.suning.cn/uimg/sop/commodity/122606905010320427016339_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"https://image.suning.cn/uimg/sop/commodity/175187878956364498861860_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"https://image.suning.cn/uimg/sop/commodity/175187878956364498861860_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"https://image.suning.cn/uimg/sop/commodity/156646118277445165616250_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"https://image.suning.cn/uimg/sop/commodity/156646118277445165616250_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"https://image.suning.cn/uimg/sop/commodity/828094985525873883396800_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"https://image.suning.cn/uimg/sop/commodity/828094985525873883396800_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"https://image.suning.cn/uimg/sop/commodity/720480989133103901697200_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"https://image.suning.cn/uimg/sop/commodity/720480989133103901697200_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"></p></div><div moduleid=\"R0503002_6\" modulename=\"安装说明\"><p>.</p></div></div>",
        "goods_big_logo": "http://image4.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_1_800x800.jpg",
        "goods_small_logo": "http://image4.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_1_400x400.jpg",
        "goods_state": 2,
        "is_del": "0",
        "add_time": 1516397772,
        "upd_time": 1516397772,
        "delete_time": null,
        "hot_mumber": 0,
        "is_promote": false,
        "cat_one_id": 1,
        "cat_two_id": 3,
        "cat_three_id": 12,
        "goods_cat": "1,3,12",
        "pics": [{
            "pics_id": 77932,
            "goods_id": 17927,
            "pics_big": "http://image4.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_1_800x800.jpg",
            "pics_mid": "http://image4.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_1_400x400.jpg",
            "pics_sma": "http://image4.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_1_200x200.jpg",
            "pics_big_url": "http://image4.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_1_800x800.jpg",
            "pics_mid_url": "http://image4.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_1_400x400.jpg",
            "pics_sma_url": "http://image4.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_1_200x200.jpg"
          },
          {
            "pics_id": 77933,
            "goods_id": 17927,
            "pics_big": "http://image5.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_2_800x800.jpg",
            "pics_mid": "http://image5.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_2_400x400.jpg",
            "pics_sma": "http://image5.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_2_200x200.jpg",
            "pics_big_url": "http://image5.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_2_800x800.jpg",
            "pics_mid_url": "http://image5.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_2_400x400.jpg",
            "pics_sma_url": "http://image5.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_2_200x200.jpg"
          },
          {
            "pics_id": 77934,
            "goods_id": 17927,
            "pics_big": "http://image1.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_3_800x800.jpg",
            "pics_mid": "http://image1.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_3_400x400.jpg",
            "pics_sma": "http://image1.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_3_200x200.jpg",
            "pics_big_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_3_800x800.jpg",
            "pics_mid_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_3_400x400.jpg",
            "pics_sma_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_3_200x200.jpg"
          },
          {
            "pics_id": 77935,
            "goods_id": 17927,
            "pics_big": "http://image2.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_4_800x800.jpg",
            "pics_mid": "http://image2.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_4_400x400.jpg",
            "pics_sma": "http://image2.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_4_200x200.jpg",
            "pics_big_url": "http://image2.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_4_800x800.jpg",
            "pics_mid_url": "http://image2.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_4_400x400.jpg",
            "pics_sma_url": "http://image2.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_4_200x200.jpg"
          },
          {
            "pics_id": 77936,
            "goods_id": 17927,
            "pics_big": "http://image3.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_5_800x800.jpg",
            "pics_mid": "http://image3.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_5_400x400.jpg",
            "pics_sma": "http://image3.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_5_200x200.jpg",
            "pics_big_url": "http://image3.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_5_800x800.jpg",
            "pics_mid_url": "http://image3.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_5_400x400.jpg",
            "pics_sma_url": "http://image3.suning.cn/uimg/b2c/newcatentries/0070141413-000000000623824255_5_200x200.jpg"
          }
        ],
        "attrs": [{
            "goods_id": 17927,
            "attr_id": 4290,
            "attr_value": "小米电视4",
            "add_price": 0,
            "attr_name": "主体-商品名称",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "小米电视4A L32M5-AZ 体育版"
          },
          {
            "goods_id": 17927,
            "attr_id": 4291,
            "attr_value": "否",
            "add_price": 0,
            "attr_name": "显示-曲面",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "否"
          },
          {
            "goods_id": 17927,
            "attr_id": 4292,
            "attr_value": "智能电视",
            "add_price": 0,
            "attr_name": "系统-智能电视",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "智能电视"
          },
          {
            "goods_id": 17927,
            "attr_id": 4294,
            "attr_value": "155瓦特",
            "add_price": 0,
            "attr_name": "功耗-整机功率（W）",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "50瓦特"
          }
        ],
        "num": 1,
        "checked": true
      },
      {
        "goods_id": 26950,
        "cat_id": 188,
        "goods_name": "华为 麦芒5 4GB+64GB 全网通4G手机高配版 （香槟金）",
        "goods_price": 1449,
        "goods_number": 100,
        "goods_weight": 100,
        "goods_introduce": "<div class=\"lazyimg\"><p><a title=\"X 银色 64GB\" href=\"http://product.suning.com/0070142956/713063356.html\" target=\"_blank\"><img data-src=\"https://image.suning.cn/uimg/sop/richtext/528023680197760425656700.gif?from=mobile\" alt=\"\" src=\"https://image.suning.cn/uimg/sop/richtext/528023680197760425656700.gif?from=mobile\" width=\"100%\" height=\"auto\"></a></p>\n<p><a title=\"快来买啊！错过了就没了！！快快快！！！\" href=\"http://product.suning.com/0070142956/191617664.html\" target=\"_blank\"><img data-src=\"https://image.suning.cn/uimg/sop/richtext/151328176212829147328134.gif?from=mobile\" alt=\"\" src=\"https://image.suning.cn/uimg/sop/richtext/151328176212829147328134.gif?from=mobile\" width=\"100%\" height=\"auto\"></a></p>\n<p><img data-src=\"https://image.suning.cn/uimg/sop/commodity/245032698679652640481300_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" usemap=\"Map8756\" src=\"https://image.suning.cn/uimg/sop/commodity/245032698679652640481300_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"> </p><div moduleid=\"R1901001_3\" modulename=\"商品详情\"><p><img data-src=\"//image.suning.cn/uimg/sop/commodity/154562813998988961204400_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/154562813998988961204400_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"//image.suning.cn/uimg/sop/commodity/116257690131149767253950_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/116257690131149767253950_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"//image.suning.cn/uimg/sop/commodity/850806113197768870589900_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/850806113197768870589900_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"//image.suning.cn/uimg/sop/commodity/185082211311715277076931_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/185082211311715277076931_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"//image.suning.cn/uimg/sop/commodity/119271952214382700291004_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/119271952214382700291004_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"//image.suning.cn/uimg/sop/commodity/414466758169846581660400_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/414466758169846581660400_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"//image.suning.cn/uimg/sop/commodity/201286043595038148579650_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/201286043595038148579650_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"//image.suning.cn/uimg/sop/commodity/467292129107930492720450_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/467292129107930492720450_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"//image.suning.cn/uimg/sop/commodity/127008207616972274799512_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/127008207616972274799512_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"//image.suning.cn/uimg/sop/commodity/880241599214345068811130_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/880241599214345068811130_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"//image.suning.cn/uimg/sop/commodity/125554454217832376066913_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/125554454217832376066913_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"//image.suning.cn/uimg/sop/commodity/643580861749881432535800_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/643580861749881432535800_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"//image.suning.cn/uimg/sop/commodity/211815072281615731980250_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/211815072281615731980250_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"></p></div><div moduleid=\"R1901001_5\" modulename=\"常见问题\"><p><img data-src=\"//image.suning.cn/uimg/sop/commodity/530711269155428905833090_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/530711269155428905833090_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"></p></div><div moduleid=\"R1901001_6\" modulename=\"售后服务\"><p><img data-src=\"//image.suning.cn/uimg/sop/commodity/124885924110123717524609_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/124885924110123717524609_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"></p></div><p><img data-src=\"https://image.suning.cn/uimg/sop/commodity/154396136537753326899510_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"https://image.suning.cn/uimg/sop/commodity/154396136537753326899510_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"></p>\n<p><img data-src=\"//image.suning.cn/uimg/sop/commodity/614149072432341773082000_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/614149072432341773082000_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"//image.suning.cn/uimg/sop/commodity/914560124119742873575890_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/914560124119742873575890_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"></p>\n<p><span>因9月1号新广告法规定，所有页面不得出现广告禁用词。我们支持新广告法，为了不影响消费者正常购物，明显区域本公司已经在排查修改，并在此郑重表态：本页面所有广告禁用词在此声明失效，不作为赔付理由。往期商品不明显区域我们会逐步排查和完善，新品将全线整改。请为真正的消费者让路。维权是双向的，希望各位消费者理解， 在此感谢！</span></p>\n<p><span>所有争议，应当提交网站所在地人民法院管辖</span></p></div>",
        "goods_big_logo": "http://image3.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_1_800x800.jpg",
        "goods_small_logo": "http://image3.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_1_400x400.jpg",
        "goods_state": 2,
        "is_del": "0",
        "add_time": 1516435232,
        "upd_time": 1516435232,
        "delete_time": null,
        "hot_mumber": 0,
        "is_promote": false,
        "cat_one_id": 172,
        "cat_two_id": 184,
        "cat_three_id": 188,
        "goods_cat": "172,184,188",
        "pics": [{
            "pics_id": 112035,
            "goods_id": 26950,
            "pics_big": "http://image3.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_1_800x800.jpg",
            "pics_mid": "http://image3.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_1_400x400.jpg",
            "pics_sma": "http://image3.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_1_200x200.jpg",
            "pics_big_url": "http://image3.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_1_800x800.jpg",
            "pics_mid_url": "http://image3.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_1_400x400.jpg",
            "pics_sma_url": "http://image3.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_1_200x200.jpg"
          },
          {
            "pics_id": 112036,
            "goods_id": 26950,
            "pics_big": "http://image2.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_2_800x800.jpg",
            "pics_mid": "http://image2.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_2_400x400.jpg",
            "pics_sma": "http://image2.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_2_200x200.jpg",
            "pics_big_url": "http://image2.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_2_800x800.jpg",
            "pics_mid_url": "http://image2.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_2_400x400.jpg",
            "pics_sma_url": "http://image2.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_2_200x200.jpg"
          },
          {
            "pics_id": 112037,
            "goods_id": 26950,
            "pics_big": "http://image1.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_3_800x800.jpg",
            "pics_mid": "http://image1.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_3_400x400.jpg",
            "pics_sma": "http://image1.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_3_200x200.jpg",
            "pics_big_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_3_800x800.jpg",
            "pics_mid_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_3_400x400.jpg",
            "pics_sma_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_3_200x200.jpg"
          },
          {
            "pics_id": 112038,
            "goods_id": 26950,
            "pics_big": "http://image5.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_4_800x800.jpg",
            "pics_mid": "http://image5.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_4_400x400.jpg",
            "pics_sma": "http://image5.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_4_200x200.jpg",
            "pics_big_url": "http://image5.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_4_800x800.jpg",
            "pics_mid_url": "http://image5.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_4_400x400.jpg",
            "pics_sma_url": "http://image5.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_4_200x200.jpg"
          },
          {
            "pics_id": 112039,
            "goods_id": 26950,
            "pics_big": "http://image4.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_5_800x800.jpg",
            "pics_mid": "http://image4.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_5_400x400.jpg",
            "pics_sma": "http://image4.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_5_200x200.jpg",
            "pics_big_url": "http://image4.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_5_800x800.jpg",
            "pics_mid_url": "http://image4.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_5_400x400.jpg",
            "pics_sma_url": "http://image4.suning.cn/uimg/b2c/newcatentries/0070142956-000000000191617681_5_200x200.jpg"
          }
        ],
        "attrs": [{
            "goods_id": 26950,
            "attr_id": 1073,
            "attr_value": "",
            "add_price": 0,
            "attr_name": "主体-品牌",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": ""
          },
          {
            "goods_id": 26950,
            "attr_id": 1074,
            "attr_value": "金色",
            "add_price": 0,
            "attr_name": "外观-颜色",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "蓝色"
          },
          {
            "goods_id": 26950,
            "attr_id": 1075,
            "attr_value": "Android",
            "add_price": 0,
            "attr_name": "系统-手机操作系统",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "Android"
          },
          {
            "goods_id": 26950,
            "attr_id": 1076,
            "attr_value": "八核",
            "add_price": 0,
            "attr_name": "CPU-CPU核数",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "八核"
          },
          {
            "goods_id": 26950,
            "attr_id": 1077,
            "attr_value": "移动4G,联通4G,电信4G,全网通",
            "add_price": 0,
            "attr_name": "网络-4G网络制式",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "移动4G,联通4G,电信4G"
          },
          {
            "goods_id": 26950,
            "attr_id": 1078,
            "attr_value": "64GB",
            "add_price": 0,
            "attr_name": "存储-机身内存",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "128GB"
          },
          {
            "goods_id": 26950,
            "attr_id": 1079,
            "attr_value": "5.5英寸",
            "add_price": 0,
            "attr_name": "屏幕-屏幕尺寸",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "6.0英寸"
          },
          {
            "goods_id": 26950,
            "attr_id": 1080,
            "attr_value": "800万像素",
            "add_price": 0,
            "attr_name": "拍照-前摄像头",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "2000万像素"
          },
          {
            "goods_id": 26950,
            "attr_id": 1081,
            "attr_value": "3340mAh",
            "add_price": 0,
            "attr_name": "电池-电池容量",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "3340mAh"
          },
          {
            "goods_id": 26950,
            "attr_id": 1082,
            "attr_value": "蓝牙4.1",
            "add_price": 0,
            "attr_name": "接口-蓝牙版本",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "蓝牙4.2"
          },
          {
            "goods_id": 26950,
            "attr_id": 1083,
            "attr_value": "支持",
            "add_price": 0,
            "attr_name": "手机特性-重力传感器",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "支持"
          },
          {
            "goods_id": 26950,
            "attr_id": 1084,
            "attr_value": "无",
            "add_price": 0,
            "attr_name": "其他-运营商标识",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "无"
          }
        ],
        "num": 1,
        "checked": true
      },
      {
        "goods_id": 26951,
        "cat_id": 188,
        "goods_name": "华为 nova 2 全网通版 4GB+64GB 流光金 移动联通电信4G手机 双卡双待",
        "goods_price": 0,
        "goods_number": 100,
        "goods_weight": 100,
        "goods_introduce": "<div class=\"lazyimg\"><!--  此处注释淘宝会自动过滤  -->\n<div data-title=\"来自淘宝代码生成网www.001daima.com\">\n<div>\n<div><img data-src=\"https://image.suning.cn/uimg/sop/commodity/208512767613110538015733_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" usemap=\"#ma270897704\" src=\"https://image.suning.cn/uimg/sop/commodity/208512767613110538015733_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"></div>\n</div>\n</div><div moduleid=\"R1901001_3\" modulename=\"商品详情\"><p><img data-src=\"//image.suning.cn/uimg/sop/commodity/179604777212279864098142_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/179604777212279864098142_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"></p></div><div moduleid=\"R1901001_5\" modulename=\"常见问题\"><p>.</p></div><div moduleid=\"R1901001_6\" modulename=\"售后服务\"><p>.</p></div><p><img data-src=\"https://image.suning.cn/uimg/sop/commodity/206689920786299632736420_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"https://image.suning.cn/uimg/sop/commodity/206689920786299632736420_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"></p></div>",
        "goods_big_logo": "http://image4.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_2_800x800.jpg",
        "goods_small_logo": "http://image4.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_2_400x400.jpg",
        "goods_state": 2,
        "is_del": "0",
        "add_time": 1516435232,
        "upd_time": 1516435232,
        "delete_time": null,
        "hot_mumber": 0,
        "is_promote": false,
        "cat_one_id": 172,
        "cat_two_id": 184,
        "cat_three_id": 188,
        "goods_cat": "172,184,188",
        "pics": [{
            "pics_id": 112040,
            "goods_id": 26951,
            "pics_big": "http://image4.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_2_800x800.jpg",
            "pics_mid": "http://image4.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_2_400x400.jpg",
            "pics_sma": "http://image4.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_2_200x200.jpg",
            "pics_big_url": "http://image4.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_2_800x800.jpg",
            "pics_mid_url": "http://image4.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_2_400x400.jpg",
            "pics_sma_url": "http://image4.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_2_200x200.jpg"
          },
          {
            "pics_id": 112041,
            "goods_id": 26951,
            "pics_big": "http://image3.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_1_800x800.jpg",
            "pics_mid": "http://image3.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_1_400x400.jpg",
            "pics_sma": "http://image3.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_1_200x200.jpg",
            "pics_big_url": "http://image3.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_1_800x800.jpg",
            "pics_mid_url": "http://image3.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_1_400x400.jpg",
            "pics_sma_url": "http://image3.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_1_200x200.jpg"
          },
          {
            "pics_id": 112042,
            "goods_id": 26951,
            "pics_big": "http://image4.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_2_800x800.jpg",
            "pics_mid": "http://image4.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_2_400x400.jpg",
            "pics_sma": "http://image4.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_2_200x200.jpg",
            "pics_big_url": "http://image4.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_2_800x800.jpg",
            "pics_mid_url": "http://image4.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_2_400x400.jpg",
            "pics_sma_url": "http://image4.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_2_200x200.jpg"
          },
          {
            "pics_id": 112043,
            "goods_id": 26951,
            "pics_big": "http://image5.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_3_800x800.jpg",
            "pics_mid": "http://image5.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_3_400x400.jpg",
            "pics_sma": "http://image5.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_3_200x200.jpg",
            "pics_big_url": "http://image5.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_3_800x800.jpg",
            "pics_mid_url": "http://image5.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_3_400x400.jpg",
            "pics_sma_url": "http://image5.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_3_200x200.jpg"
          },
          {
            "pics_id": 112044,
            "goods_id": 26951,
            "pics_big": "http://image1.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_4_800x800.jpg",
            "pics_mid": "http://image1.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_4_400x400.jpg",
            "pics_sma": "http://image1.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_4_200x200.jpg",
            "pics_big_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_4_800x800.jpg",
            "pics_mid_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_4_400x400.jpg",
            "pics_sma_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_4_200x200.jpg"
          },
          {
            "pics_id": 112045,
            "goods_id": 26951,
            "pics_big": "http://image2.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_5_800x800.jpg",
            "pics_mid": "http://image2.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_5_400x400.jpg",
            "pics_sma": "http://image2.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_5_200x200.jpg",
            "pics_big_url": "http://image2.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_5_800x800.jpg",
            "pics_mid_url": "http://image2.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_5_400x400.jpg",
            "pics_sma_url": "http://image2.suning.cn/uimg/b2c/newcatentries/0070129296-000000000625203992_5_200x200.jpg"
          }
        ],
        "attrs": [{
            "goods_id": 26951,
            "attr_id": 1073,
            "attr_value": "",
            "add_price": 0,
            "attr_name": "主体-品牌",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": ""
          },
          {
            "goods_id": 26951,
            "attr_id": 1074,
            "attr_value": "金色",
            "add_price": 0,
            "attr_name": "外观-颜色",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "蓝色"
          },
          {
            "goods_id": 26951,
            "attr_id": 1075,
            "attr_value": "Android",
            "add_price": 0,
            "attr_name": "系统-手机操作系统",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "Android"
          },
          {
            "goods_id": 26951,
            "attr_id": 1076,
            "attr_value": "八核",
            "add_price": 0,
            "attr_name": "CPU-CPU核数",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "八核"
          },
          {
            "goods_id": 26951,
            "attr_id": 1077,
            "attr_value": "移动4G,联通4G,电信4G,全网通",
            "add_price": 0,
            "attr_name": "网络-4G网络制式",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "移动4G,联通4G,电信4G"
          },
          {
            "goods_id": 26951,
            "attr_id": 1078,
            "attr_value": "64GB",
            "add_price": 0,
            "attr_name": "存储-机身内存",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "128GB"
          },
          {
            "goods_id": 26951,
            "attr_id": 1079,
            "attr_value": "5.0英寸",
            "add_price": 0,
            "attr_name": "屏幕-屏幕尺寸",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "6.0英寸"
          },
          {
            "goods_id": 26951,
            "attr_id": 1080,
            "attr_value": "2000万像素",
            "add_price": 0,
            "attr_name": "拍照-前摄像头",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "2000万像素"
          },
          {
            "goods_id": 26951,
            "attr_id": 11493,
            "attr_value": "聚合物锂电池",
            "add_price": 0,
            "attr_name": "电池-电池类型",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "聚合物锂电池"
          },
          {
            "goods_id": 26951,
            "attr_id": 1082,
            "attr_value": "蓝牙4.2",
            "add_price": 0,
            "attr_name": "接口-蓝牙版本",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "蓝牙4.2"
          },
          {
            "goods_id": 26951,
            "attr_id": 1083,
            "attr_value": "支持",
            "add_price": 0,
            "attr_name": "手机特性-重力传感器",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "支持"
          },
          {
            "goods_id": 26951,
            "attr_id": 1084,
            "attr_value": "无",
            "add_price": 0,
            "attr_name": "其他-运营商标识",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "无"
          }
        ],
        "num": 3,
        "checked": true
      },
      {
        "goods_id": 26948,
        "cat_id": 188,
        "goods_name": "【到手价3588 6期免息】HUAWEI/华为P10 Plus 6GB+64GB 曜石黑 移动联通电信手机",
        "goods_price": 3988,
        "goods_number": 100,
        "goods_weight": 100,
        "goods_introduce": "<div class=\"lazyimg\"><table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%; height: auto;\">\n<tbody>\n<tr>\n<td><a href=\"https://product.suning.com/0000000000/762758751.html\" target=\"_blank\"><img data-src=\"https://image.suning.cn/uimg/sop/commodity/201814109448239356941100_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"https://image.suning.cn/uimg/sop/commodity/201814109448239356941100_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"></a></td>\n</tr>\n</tbody>\n</table>\n<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" style=\"width: 100%; height: auto;\">\n<tbody>\n<tr>\n<td><a href=\"https://product.suning.com/0000000000/762758521.html\" target=\"_blank\"><img data-src=\"https://image.suning.cn/uimg/sop/commodity/742689856347804008902600_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"https://image.suning.cn/uimg/sop/commodity/742689856347804008902600_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"></a></td>\n<td><a href=\"https://product.suning.com/0000000000/861242843.html\" target=\"_blank\"><img data-src=\"https://image.suning.cn/uimg/sop/commodity/145978136719857808111865_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"https://image.suning.cn/uimg/sop/commodity/145978136719857808111865_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"></a></td>\n</tr>\n</tbody>\n</table><div moduleid=\"R1901001_3\" modulename=\"商品详情\"><p><img data-src=\"//image.suning.cn/uimg/sop/commodity/969312262581959416786000_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/969312262581959416786000_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"//image.suning.cn/uimg/sop/commodity/199847898761407960746900_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/199847898761407960746900_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"//image.suning.cn/uimg/sop/commodity/186713573913779842155456_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/186713573913779842155456_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"//image.suning.cn/uimg/sop/commodity/191894093330480714128770_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/191894093330480714128770_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"//image.suning.cn/uimg/sop/commodity/338924984145367266233990_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/338924984145367266233990_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"//image.suning.cn/uimg/sop/commodity/880575514114148515096960_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/880575514114148515096960_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"//image.suning.cn/uimg/sop/commodity/941110310170835174031510_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/941110310170835174031510_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"//image.suning.cn/uimg/sop/commodity/332614183151943830284500_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/332614183151943830284500_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"//image.suning.cn/uimg/sop/commodity/665199031605339432313900_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/665199031605339432313900_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"//image.suning.cn/uimg/sop/commodity/116422016815101410789271_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/116422016815101410789271_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"><img data-src=\"//image.suning.cn/uimg/sop/commodity/186468005171670529297210_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/186468005171670529297210_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"></p></div><div moduleid=\"R1901001_5\" modulename=\"常见问题\"><p>1</p></div><div moduleid=\"R1901001_6\" modulename=\"售后服务\"><p><img data-src=\"//image.suning.cn/uimg/sop/commodity/320602489974514815373000_x.jpg?from=mobile&amp;format=80q.webp\" alt=\"\" src=\"//image.suning.cn/uimg/sop/commodity/320602489974514815373000_x.jpg?from=mobile&format=80q.webp\" width=\"100%\" height=\"auto\"></p></div></div>",
        "goods_big_logo": "http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_1_800x800.jpg",
        "goods_small_logo": "http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_1_400x400.jpg",
        "goods_state": 2,
        "is_del": "0",
        "add_time": 1516435228,
        "upd_time": 1516435228,
        "delete_time": null,
        "hot_mumber": 0,
        "is_promote": false,
        "cat_one_id": 172,
        "cat_two_id": 184,
        "cat_three_id": 188,
        "goods_cat": "172,184,188",
        "pics": [{
            "pics_id": 112025,
            "goods_id": 26948,
            "pics_big": "http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_1_800x800.jpg",
            "pics_mid": "http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_1_400x400.jpg",
            "pics_sma": "http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_1_200x200.jpg",
            "pics_big_url": "http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_1_800x800.jpg",
            "pics_mid_url": "http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_1_400x400.jpg",
            "pics_sma_url": "http://image5.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_1_200x200.jpg"
          },
          {
            "pics_id": 112026,
            "goods_id": 26948,
            "pics_big": "http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_2_800x800.jpg",
            "pics_mid": "http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_2_400x400.jpg",
            "pics_sma": "http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_2_200x200.jpg",
            "pics_big_url": "http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_2_800x800.jpg",
            "pics_mid_url": "http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_2_400x400.jpg",
            "pics_sma_url": "http://image4.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_2_200x200.jpg"
          },
          {
            "pics_id": 112027,
            "goods_id": 26948,
            "pics_big": "http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_3_800x800.jpg",
            "pics_mid": "http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_3_400x400.jpg",
            "pics_sma": "http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_3_200x200.jpg",
            "pics_big_url": "http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_3_800x800.jpg",
            "pics_mid_url": "http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_3_400x400.jpg",
            "pics_sma_url": "http://image3.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_3_200x200.jpg"
          },
          {
            "pics_id": 112028,
            "goods_id": 26948,
            "pics_big": "http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_4_800x800.jpg",
            "pics_mid": "http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_4_400x400.jpg",
            "pics_sma": "http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_4_200x200.jpg",
            "pics_big_url": "http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_4_800x800.jpg",
            "pics_mid_url": "http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_4_400x400.jpg",
            "pics_sma_url": "http://image2.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_4_200x200.jpg"
          },
          {
            "pics_id": 112029,
            "goods_id": 26948,
            "pics_big": "http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_5_800x800.jpg",
            "pics_mid": "http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_5_400x400.jpg",
            "pics_sma": "http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_5_200x200.jpg",
            "pics_big_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_5_800x800.jpg",
            "pics_mid_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_5_400x400.jpg",
            "pics_sma_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000603605103_5_200x200.jpg"
          }
        ],
        "attrs": [{
            "goods_id": 26948,
            "attr_id": 1073,
            "attr_value": "",
            "add_price": 0,
            "attr_name": "主体-品牌",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": ""
          },
          {
            "goods_id": 26948,
            "attr_id": 1074,
            "attr_value": "黑色",
            "add_price": 0,
            "attr_name": "外观-颜色",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "蓝色"
          },
          {
            "goods_id": 26948,
            "attr_id": 1075,
            "attr_value": "Android",
            "add_price": 0,
            "attr_name": "系统-手机操作系统",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "Android"
          },
          {
            "goods_id": 26948,
            "attr_id": 1076,
            "attr_value": "八核",
            "add_price": 0,
            "attr_name": "CPU-CPU核数",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "八核"
          },
          {
            "goods_id": 26948,
            "attr_id": 1077,
            "attr_value": "全网通",
            "add_price": 0,
            "attr_name": "网络-4G网络制式",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "移动4G,联通4G,电信4G"
          },
          {
            "goods_id": 26948,
            "attr_id": 1078,
            "attr_value": "64GB",
            "add_price": 0,
            "attr_name": "存储-机身内存",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "128GB"
          },
          {
            "goods_id": 26948,
            "attr_id": 1079,
            "attr_value": "5.5英寸",
            "add_price": 0,
            "attr_name": "屏幕-屏幕尺寸",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "6.0英寸"
          },
          {
            "goods_id": 26948,
            "attr_id": 1080,
            "attr_value": "800万像素",
            "add_price": 0,
            "attr_name": "拍照-前摄像头",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "2000万像素"
          },
          {
            "goods_id": 26948,
            "attr_id": 1081,
            "attr_value": "3750mAh",
            "add_price": 0,
            "attr_name": "电池-电池容量",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "3340mAh"
          },
          {
            "goods_id": 26948,
            "attr_id": 1082,
            "attr_value": "蓝牙4.2",
            "add_price": 0,
            "attr_name": "接口-蓝牙版本",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "蓝牙4.2"
          },
          {
            "goods_id": 26948,
            "attr_id": 1083,
            "attr_value": "支持",
            "add_price": 0,
            "attr_name": "手机特性-重力传感器",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "支持"
          },
          {
            "goods_id": 26948,
            "attr_id": 1084,
            "attr_value": "无",
            "add_price": 0,
            "attr_name": "其他-运营商标识",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "无"
          }
        ],
        "num": 1,
        "checked": true
      }
    ]
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 1 获取缓存中的收货地址信息
    const address = wx.getStorageSync("address");
    // 1 获取缓存中的购物车数据
    const cart = wx.getStorageSync("cart") || [];
    this.setData({
      address,

      // 假装接口宕机了，在商品详情中添加购物车不行了
      // cart
    });
  },

  // 点击 收货地址
  async handleChooseAddress() {
    try {
      // 1 获取 权限状态
      const res1 = await getSetting();
      const scopeAddress = res1.authSetting["scope.address"];
      // 2 判断 权限状态
      if (scopeAddress === false) {
        await openSetting();
      }
      // 4 调用获取收货地址的 api
      let address = await chooseAddress();
      address.all = address.provinceName + address.cityName + address.countyName + address.detailInfo;

      // 5 存入到缓存中
      wx.setStorageSync("address", address);

    } catch (error) {
      console.log("第一次就拒绝授予权限，走这里");
      console.log(error);
    }
  }

})