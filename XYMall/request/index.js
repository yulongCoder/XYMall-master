
export const request = (params) => {
  return new Promise((resolve, reject) => {
    // 1 发送异步请求，获取轮播图数据
    var reqTask = wx.request({
      ...params,
      success: (result) => {
        resolve(result);
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
}

