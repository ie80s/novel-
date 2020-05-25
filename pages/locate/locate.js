var app = getApp()
Page({

  data:{

  },
  getLocation:function(){
    var that = this;
    wx.getLocation({
      success: function(res) {
        that.setData({
          lat:res.latitude,
          lon:res.longitude,
          speed:res.speed,
          accuracy:res.accuracy
        })
      },
    })
  },

  onLoad: function(options) {

  },
})