/* 
1 输入框绑定 值改变事件 input事件
  1 获取到输入框的值
  2 合法性判断 
  3 检验通过 把输入框的值 发送到后台
  4 返回的数据打印到页面上

2 防抖 （防止抖动） 定时器  节流 
  0 防抖 一般 输入框中 防止重复输入 重复发送请求
  1 节流 一般是用在页面下拉和上拉 
  1 定义全局的定时器id
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
    "goods": [{
        "goods_id": 57396,
        "goods_name": "紫米ZMI 小米QC3.0快充车充 5V2.4A双USB智能输出 一拖二手机平板通用汽车充电器 AP821 银色"
      },
      {
        "goods_id": 57224,
        "goods_name": "70迈小米行车记录仪智能后视镜导航行车记录仪云镜测速一体机 8.88英寸大屏幕 官方标配"
      },
      {
        "goods_id": 57219,
        "goods_name": "70迈小米智能行车记录仪 高清夜视大广角 WiFi无线互联 隐藏式安装"
      },
      {
        "goods_id": 56873,
        "goods_name": "金免贝贝jintubeib拉运车载手机支架汽车用出风口手机座导航仪支架三星苹果小米通用升级版出风口"
      },
      {
        "goods_id": 56847,
        "goods_name": "汽车用出风口手机支架 车载iphone苹果小米三星卡扣式手机架座 卡扣插式手机支架可伸缩 黑色"
      },
      {
        "goods_id": 56841,
        "goods_name": "麦芽汽车用出风口手机支架 车载iphone苹果小米三星卡扣式手机架座 卡扣插式手机支架可伸缩 蓝色"
      },
      {
        "goods_id": 56473,
        "goods_name": "风帆（sail） Q1 充电宝，适用苹果华为小米移动充电 汽车应急启动电源 电瓶救援搭电宝 多功能移动电源"
      },
      {
        "goods_id": 52308,
        "goods_name": "英吉利婴儿小米米粉AD钙铁锌婴幼儿宝宝营养米粉宝宝米糊辅食1段"
      },
      {
        "goods_id": 52299,
        "goods_name": "英吉利米粉婴儿米粉米糊婴幼儿AD钙铁锌小米米粉宝宝辅食营养米粉"
      },
      {
        "goods_id": 52298,
        "goods_name": "英吉利婴儿小米粉DHA鱼肉蔬菜宝宝营养3段米粉婴儿三段婴儿米粉"
      },
      {
        "goods_id": 52295,
        "goods_name": "【苏宁自营】英吉利（yingjili）AD钙铁锌小米粉225g/盒"
      },
      {
        "goods_id": 51663,
        "goods_name": "小米手机 小米4移动标准版 （黑色）（3G RAM+16G ROM）"
      },
      {
        "goods_id": 51662,
        "goods_name": "Xiaomi/小米 红米手机 Note5A 标准版 2GB+16GB 全网通4G手机 香槟金"
      },
      {
        "goods_id": 51661,
        "goods_name": "小米（MI）红米Note5A 3GB+32GB （香槟金） 全网通4G手机"
      },
      {
        "goods_id": 50968,
        "goods_name": "小米笔记本Air 13.3英寸尊享版 指纹版 超薄手提笔记本电脑 Intel i7 8GB内存 256GB存储 银色"
      },
      {
        "goods_id": 50925,
        "goods_name": "小米（MI）米兔智能故事机 儿童早教机器人 益智学习机点读机 微信远程互动 智能语音交互"
      },
      {
        "goods_id": 50729,
        "goods_name": "【苏宁自营】小米米minimoto YA1005 迷你保温杯300ml 外出便携保温杯保温保冷水杯儿童保温杯"
      },
      {
        "goods_id": 49111,
        "goods_name": "方广 宝宝辅食 金装彩蝶小米蔬菜蝴蝶面(6个月以上适用)225g"
      },
      {
        "goods_id": 45481,
        "goods_name": "米家 MIJIA 小米 米家智能插线板 远程控制 定关时开 智能节电 新国标1mm² 线材"
      },
      {
        "goods_id": 45457,
        "goods_name": "小米（MI）插线板 黑色 3孔位+3USB多功能智能插座插排排插接线板 支持2A快充 3重安全保护 迷你设计 简洁便携"
      }
    ],
    // 取消 按钮 是否显示
    isFocus: false,
    // 输入框的值
    inpValue: ""
  },

  TimeId: -1,

  // 输入框的值改变 就会触发的事件
  handleInput(e) {
    console.log(e.detail.value);

    // 1 获取输入框的值
    const {
      value
    } = e.detail;
    // 2 检测合法性
    if (!value.trim()) {
      this.setData({
        goods: [],
        isFocus: false
      })
      // 值不合法
      return;
    }

    // 3 准备发送请求获取数据
    this.setData({
      isFocus: true
    });
    clearTimeout(this.TimeId);
    this.TimeId = setTimeout(() => {
      // this.qsearch(value);
      // 假装接口宕机了
    }, 1000);
  },

  // 发送请求获取搜索建议 数据 
  async qsearch(query) {
    const res = await request({
      url: "goods/qsearch",
      data: {
        query
      }
    });
    console.log(res);
    this.setData({
      goods: res
    })
  },

  // 点击 取消按钮
  handleCancel() {
    this.setData({
      inpValue: "",
      isFocus: false,
      goods: []
    })
  }

})