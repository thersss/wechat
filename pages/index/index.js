import common from "../../utils/public.js"
// 此处传入的common为对象
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
getrequest()
{
  wx.request({
    url: 'https://ku.qingnian8.com/school/list.php',
    data:{
      num:5,
      page:1
    },
    success: res => {
      res.data.forEach(item => {
        // var time = item.posttime * 1000;
        // var d = new Date(time);
        // var year = d.getFullYear();
        // var month = (d.getMonth() + 1) < 10 ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1);
        // var day = (d.getDate() + 1) < 10 ? "0" + (d.getDate()) : (d.getDate());
        // var posttime = year + "-" + month + "-" + day;
        item.posttime = common.format(item.posttime);
        item.title=common.getstrlen(item.title,15);
      
      })

      console.log(res.data);
      this.setData({
        datalist: res.data
      })
    }
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.getrequest();
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