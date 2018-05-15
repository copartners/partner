// pages/card/card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    genderArr: ['男', '女'],
    schoolArr: ['北京交通大学', '北京理工大学', '北京邮电大学', '北京科技大学'],
    genderIndex: 0,
    schoolIndex: 0,
    items: [
      { value: '前端', },
      { value: '后端', },
      { value: '算法' },
      { value: 'iOS' },
      { value: 'Android' },
      { value: '大数据' },
      { value: '测试' },
      { value: '其他' }
    ]
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

  genderChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      genderIndex: e.detail.value
    })
  },

  schoolChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      schoolIndex: e.detail.value
    })
  },

  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
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