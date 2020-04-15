
export const request = (params) => {
  // 定义公共的url
  const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1/";
  return new Promise((resolve, reject) => {
    // 1 发送异步请求，获取轮播图数据
    var reqTask = wx.request({
      ...params,
      url: baseUrl + params.url,
      success: (result) => {
        resolve(result.data.message);
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
}

