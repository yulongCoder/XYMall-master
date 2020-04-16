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

4 全选的实现 数据的展示
  1 onShow 获取缓存中的购物车数组
  2 根据购物车中的商品数据 所有的商品都被选中 checked=true  全选就被选中
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
    cart: [],
    allChecked: false,
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 1 获取缓存中的收货地址信息
    const address = wx.getStorageSync("address");
    // 1 获取缓存中的购物车数据
    const cart = wx.getStorageSync("cart") || [];
    // 1 计算全选
    // every 是数组方法，会遍历，会接收一个回调函数，那么，每一个回调函数都会返回 true，
    // 那么 every 方法的返回值为 true，只要有一个回调函数返回了false，那么不再循环执行，直接返回 false；
    // 空数组，调用 every，返回值就是 true
    // 所以这里空数组时，allChecked 应该为false
    const allChecked = cart.length ? (cart.every(v=>v.checked)) : false;

    // 2 给data赋值
    this.setData({
      address,
      cart,
      allChecked
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