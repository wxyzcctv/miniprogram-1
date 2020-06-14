const { host, t_app_id, t_app_secret} = getApp().globalData

const _http = (method, url, data) => {
  return new Promise((resolve,reject)=>{
    wx.request({
      method,
      data,
      url: `${host}${url}`,
      header:{
        't-app-id': t_app_id,
        't-app-secret': t_app_secret
      },
      dataType: 'json',
      success: (response)=>{
        let statusCode = response.statusCode
        if(statusCode >= 400){
          reject({ response, statusCode })
        }else{
          resolve( statusCode )
        }
      },
      fail:(errors)=>{
        wx.showToast({ title: '请求失败',icon: 'none' })
        reject(errors)
      }
    })
  })
}

const http = {
  get: (url, params) => _http( 'GET', url, params),
  post: (url, data) => _http( 'POST', url, data),
  put: (url, data) => _http( 'PUT', url, data),
  delete: (url, data) => _http( 'DELET', url, data)
}

module.exports = {
  http
}