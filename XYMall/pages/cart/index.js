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





*/


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  // 点击 收货地址
  handleChooseAddress() {
    // 1 获取权限状态
    wx.getSetting({
      complete: (res) => {
        const scopeAddress = res.authSetting["scope.address"];
        console.log(res.authSetting);
        console.log(scopeAddress)

        if (scopeAddress === true || scopeAddress === undefined) {
          // true 表示用户以前开启 过授予获取地址权限，undefined 表示从来没调用过
          // 4 获取收货地址
          wx.chooseAddress({
            complete: (res) => {
              console.log("chooseAddress");
              console.log(res);
            }
          });
        } else {
          // 表示用户以前拒绝过授予获取地址权限，先诱导用户打开授权页面
          wx.openSetting({
            complete: (res2) => {
              // 4 获取收货地址
              wx.chooseAddress({
                complete: (res) => {
                  console.log("chooseAddress");
                  console.log(res);
                }
              });
            }
          })
        }
      }
    });
  }

})