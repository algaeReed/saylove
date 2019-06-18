
Page({
  modalcnt: function () {
    wx.showModal({
      title: '',
      content: '点错了呦',
      cancelText: "否",
      cancelColor: 'pink',
      confirmText: "是",
      confirmColor: 'pink',
      success: function (res) {
        if (res.confirm) {
            wx.showToast({
              title: '会写代码',
              icon: 'success',
              duration: 1000
            }),
              setTimeout(function () {
                //要延时执行的代码
                wx.showToast({
                  title: '会修电脑',
                  icon: 'success',
                  duration: 1000
                })
              }, 1100)
          setTimeout(function () {
            //要延时执行的代码
            wx.showToast({
              title: '保大',
              icon: 'success',
              duration: 1000
            })
          }, 2200)
        
        } else if (res.cancel) {
          wx.showToast({
            title: '可爱的女孩纸呀',//最多支持7个字
            icon: 'success',
            duration: 1000
          })
        }
      }
    })
  },
  showok: function () {
    wx.showToast({
      title: '爱你呦',
      icon: 'success',
      duration: 3000
    })
  },
  
  data: {

    audioPoster: 'http://pswt07hsy.bkt.clouddn.com/d.jfif',
 
    audioName: 'Love You Like the Movies',
 
    audioAuthor: 'Anthem Lights',

    loop: true,
 
    audioSrc: 'http://pswt07hsy.bkt.clouddn.com/050f_0f5b_0708_2e6da35a2f81a81ad8780b98af2c9062.m4a',
 
  }
  
})  


