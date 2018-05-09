// pages/release/release.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['小于3个月', '3-6个月', '6-9个月', '9-12个月', '12个月以上'],
    index: 0,
    items: [
      { value: '前端', checked: 'true' },
      { value: '后端', },
      { value: '算法' },
      { value: 'iOS' },
      { value: 'Android' },
      { value: '大数据' },
      { value: '测试' },
      { value: '其他' }
    ]
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },

  formSubmit: function (e) {
    var formData = e.detail.value;
    wx.request({
      url: 'http://123.206.79.199:80/release',
      data: formData,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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