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
    leftMenuList: [
      "大家电",
      "热门推荐",
      "海外购",
      "苏宁房产",
      "手机相机",
      "电脑办公",
      "厨卫电器",
      "食品酒水",
      "居家生活",
      "厨房电器",
      "生活电器",
      "个护健康",
      "烹饪厨具",
      "家装建材",
      "奶粉尿裤",
      "男装",
      "男鞋",
      "女装",
      "女鞋",
      "汽车生活",
      "运动户外",
      "美妆洗护",
      "内衣配饰",
      "童装玩具",
      "珠宝首饰",
      "智能设备",
      "钟表眼镜",
      "皮具箱包",
      "邮币乐器",
      "其他"
    ],
    // 右侧的商品数据
    rightContent: [{
        "cat_id": 3,
        "cat_name": "电视",
        "cat_pid": 1,
        "cat_level": 1,
        "cat_deleted": false,
        "cat_icon": "/full/none.jpg",
        "children": [{
            "cat_id": 5,
            "cat_name": "曲面电视",
            "cat_pid": 3,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/2fb113b32f7a2b161f5ee4096c319afedc3fd5a1.jpg"
          },
          {
            "cat_id": 6,
            "cat_name": "海信",
            "cat_pid": 3,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/5e38cf9e6e7c46a17fe1c597a883ae627977b296.jpg"
          },
          {
            "cat_id": 8,
            "cat_name": "夏普",
            "cat_pid": 3,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/cece39bd7e9654c20043e4af71696e1f838d4a22.jpg"
          },
          {
            "cat_id": 9,
            "cat_name": "创维",
            "cat_pid": 3,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/f62eba98423af3311487f3331c6798d8f099c893.jpg"
          },
          {
            "cat_id": 10,
            "cat_name": "TCL",
            "cat_pid": 3,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/86832cc37db8474ac07853c835009f9873eaec89.jpg"
          },
          {
            "cat_id": 11,
            "cat_name": "PPTV",
            "cat_pid": 3,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/41c169f14680b3ebf88b4a37ea09085ed731c985.jpg"
          },
          {
            "cat_id": 12,
            "cat_name": "小米",
            "cat_pid": 3,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/5c282c3ec283fbc092107f8c7b86f212365acdfa.jpg"
          },
          {
            "cat_id": 13,
            "cat_name": "长虹",
            "cat_pid": 3,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/14291787e1f9f0215816048e813e4ec4fbb3dffe.jpg"
          },
          {
            "cat_id": 14,
            "cat_name": "康佳",
            "cat_pid": 3,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/de58455691bc7b85351055c220f1a5410ab15693.jpg"
          },
          {
            "cat_id": 15,
            "cat_name": "三星",
            "cat_pid": 3,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/8b36730c09815e90de1f86664baef8690c89e979.jpg"
          },
          {
            "cat_id": 16,
            "cat_name": "飞利浦",
            "cat_pid": 3,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/7643c31541df41da21c9e734bd2d9a18fed2a2aa.jpg"
          },
          {
            "cat_id": 17,
            "cat_name": "索尼",
            "cat_pid": 3,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/e8c76dd2bb103a620929bcb4ad5c5431d62418d3.jpg"
          },
          {
            "cat_id": 18,
            "cat_name": "先锋",
            "cat_pid": 3,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/5a46bef92bf32f0157b4d5a6d9a35ca8a5615aca.jpg"
          },
          {
            "cat_id": 19,
            "cat_name": "家庭影院",
            "cat_pid": 3,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/5fae60f2cc05c53eaf43075db7eb82bfc9bba9b4.jpg"
          },
          {
            "cat_id": 20,
            "cat_name": "音响",
            "cat_pid": 3,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/5515d491f88587084e59aac50010458bb916ee17.jpg"
          },
          {
            "cat_id": 21,
            "cat_name": "盒子",
            "cat_pid": 3,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/e65bab9fcb64c336a3f5fba3b2174fef41f12330.jpg"
          }
        ]
      },
      {
        "cat_id": 7,
        "cat_name": "空调",
        "cat_pid": 1,
        "cat_level": 1,
        "cat_deleted": false,
        "cat_icon": "/full/none.jpg",
        "children": [{
            "cat_id": 23,
            "cat_name": "变频空调",
            "cat_pid": 7,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/994977fac8f4fa6cea5eb413cd64ddac24a97600.jpg"
          },
          {
            "cat_id": 24,
            "cat_name": "立柜空调",
            "cat_pid": 7,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/19fc040b41b4c821c16748529545265f5feb34fa.jpg"
          },
          {
            "cat_id": 25,
            "cat_name": "挂壁空调",
            "cat_pid": 7,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/7f3dfec1efdb2559d7fba1ea39d901f4763fae21.jpg"
          },
          {
            "cat_id": 26,
            "cat_name": "中央空调",
            "cat_pid": 7,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/47a417ea3c71e5b88a261729e43706611da4ae7e.jpg"
          },
          {
            "cat_id": 27,
            "cat_name": "移动空调",
            "cat_pid": 7,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/b9f06f11815deebf5417636cf6967d859956e8bf.jpg"
          },
          {
            "cat_id": 28,
            "cat_name": "海尔",
            "cat_pid": 7,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/528517c1f5c49a15f4558be03f46e27f23d379ba.jpg"
          },
          {
            "cat_id": 29,
            "cat_name": "三菱重工",
            "cat_pid": 7,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/3ae5b4e47f663b3889edc694c95bf098b7893316.jpg"
          },
          {
            "cat_id": 31,
            "cat_name": "志高",
            "cat_pid": 7,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/4d5fd81e6e2e45a9a55d187c2326dea57ef90f9d.jpg"
          },
          {
            "cat_id": 32,
            "cat_name": "奥克斯",
            "cat_pid": 7,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/9ec815cf683ef384f74c0b1c6011891da20589f9.jpg"
          },
          {
            "cat_id": 33,
            "cat_name": "长虹",
            "cat_pid": 7,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/74547903a7193d252f4a1643849cc707981affa2.jpg"
          },
          {
            "cat_id": 34,
            "cat_name": "科龙",
            "cat_pid": 7,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/85ac1aecafb4f25158d2e08d213e6f617307a323.jpg"
          },
          {
            "cat_id": 35,
            "cat_name": "海信",
            "cat_pid": 7,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/2079cb1725672419834c3624d52b6abaea8be308.jpg"
          },
          {
            "cat_id": 36,
            "cat_name": "惠而浦",
            "cat_pid": 7,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/33774cdd0a4b866bc3f56c0fc55a0063d1f15892.jpg"
          },
          {
            "cat_id": 37,
            "cat_name": "空调清洗",
            "cat_pid": 7,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/f4836d9ba4831e4d81ab275cff4ab50677076a2b.jpg"
          },
          {
            "cat_id": 38,
            "cat_name": "空调维修",
            "cat_pid": 7,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/19ed844b023720a49792de3c1397e614c9bb260b.jpg"
          },
          {
            "cat_id": 39,
            "cat_name": "空调安装",
            "cat_pid": 7,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/f216557789c6d87ac6b31845e0a8c47186d6521a.jpg"
          },
          {
            "cat_id": 40,
            "cat_name": "空调回收",
            "cat_pid": 7,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/da07de0ac2f01b18a9ec206fd44a51cf117cf987.jpg"
          }
        ]
      },
      {
        "cat_id": 30,
        "cat_name": "洗衣机",
        "cat_pid": 1,
        "cat_level": 1,
        "cat_deleted": false,
        "cat_icon": "/full/none.jpg",
        "children": [{
            "cat_id": 42,
            "cat_name": "洗衣机",
            "cat_pid": 30,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/d33bc76faf761d86692f6b79dbd5bdb007a6c060.jpg"
          },
          {
            "cat_id": 43,
            "cat_name": "滚筒洗衣机",
            "cat_pid": 30,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/4f083927b8062beb2e2a8e5fbcb956e07231e644.jpg"
          },
          {
            "cat_id": 44,
            "cat_name": "波轮洗衣机",
            "cat_pid": 30,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/2333a004401004514d43fc56bf3a08de3d6dee44.jpg"
          },
          {
            "cat_id": 45,
            "cat_name": "大容量洗衣机",
            "cat_pid": 30,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/e2459762678fe83b75b10dab705d9be2570d014c.jpg"
          },
          {
            "cat_id": 46,
            "cat_name": "迷你洗衣机",
            "cat_pid": 30,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/1fa57f855d15370a93c16c12b856fae164458c5b.jpg"
          },
          {
            "cat_id": 47,
            "cat_name": "双缸洗衣机",
            "cat_pid": 30,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/d8549a361e957132f07d7a9ebcee9bcf9adc12a1.jpg"
          },
          {
            "cat_id": 48,
            "cat_name": "干衣机",
            "cat_pid": 30,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/259207618f9cb1fda1fcb8f4ce16280bde8959de.jpg"
          },
          {
            "cat_id": 49,
            "cat_name": "洗衣机服务",
            "cat_pid": 30,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/ac69da199d085a7c59360686310697565ef8083e.jpg"
          },
          {
            "cat_id": 50,
            "cat_name": "西门子",
            "cat_pid": 30,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/b7c7741303e60a58bbc5ea6ad6679cd0c7f08ce7.jpg"
          },
          {
            "cat_id": 51,
            "cat_name": "海尔",
            "cat_pid": 30,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/d2a002e5912a0cf8e74352a9ea38e17e165ccc8d.jpg"
          },
          {
            "cat_id": 52,
            "cat_name": "小天鹅",
            "cat_pid": 30,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/3732a28271acaadbdedefb7445efae3aac1c3c81.jpg"
          }
        ]
      },
      {
        "cat_id": 53,
        "cat_name": "冰箱",
        "cat_pid": 1,
        "cat_level": 1,
        "cat_deleted": false,
        "cat_icon": "/full/none.jpg",
        "children": [{
            "cat_id": 57,
            "cat_name": "对开门冰箱",
            "cat_pid": 53,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/4b6bfa1646ca0beeb0acda07f77149bc1e3e7185.jpg"
          },
          {
            "cat_id": 58,
            "cat_name": "多门冰箱",
            "cat_pid": 53,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/51a4c3435e9445093fc172b65309089e6f8b2262.jpg"
          },
          {
            "cat_id": 59,
            "cat_name": "三门冰箱",
            "cat_pid": 53,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/9b4ef20a87083e32b189c49417c55d1e6d297c9a.jpg"
          },
          {
            "cat_id": 60,
            "cat_name": "十字对开门",
            "cat_pid": 53,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/941952a7134b6b1e342f25e774f2d926ce35f6a5.jpg"
          },
          {
            "cat_id": 61,
            "cat_name": "双门冰箱",
            "cat_pid": 53,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/ba282e17cf2bbbdac501aefc5be6fbd180bcd62c.jpg"
          },
          {
            "cat_id": 62,
            "cat_name": "冷柜/冰吧",
            "cat_pid": 53,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/30cc729fd6ec23960ef02786d7f9ed3e6527a349.jpg"
          },
          {
            "cat_id": 63,
            "cat_name": "商用冷柜",
            "cat_pid": 53,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/53f4290298db81aed79bd8b4cc97c019da49eb1b.jpg"
          },
          {
            "cat_id": 64,
            "cat_name": "海尔",
            "cat_pid": 53,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/d2a002e5912a0cf8e74352a9ea38e17e165ccc8d.jpg"
          },
          {
            "cat_id": 65,
            "cat_name": "西门子",
            "cat_pid": 53,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/b7c7741303e60a58bbc5ea6ad6679cd0c7f08ce7.jpg"
          },
          {
            "cat_id": 66,
            "cat_name": "容声",
            "cat_pid": 53,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/722b97ed263f975f3dc25e8ac94084c79cd44962.jpg"
          },
          {
            "cat_id": 67,
            "cat_name": "美菱",
            "cat_pid": 53,
            "cat_level": 2,
            "cat_deleted": false,
            "cat_icon": "https://api-hmugo-web.itheima.net/full/e55f3b4c84ebe797397537e2d92e4fd31482d398.jpg"
          }
        ]
      }
    ],
    // 被点击的左侧的菜单
    currentIndex: 0,
  },
  // 接口的返回数据
  Cates: [],


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getCategories();
    // 假装接口宕机了
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