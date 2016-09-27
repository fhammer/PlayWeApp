

var page = {

  data: {
    // text:"这是一个页面"
    animationData: {}
  },
  onLoad: function() {
    // 页面初始化 options为页面跳转所带来的参数

  },
  onShow: function() {
    // 页面显示的时候的动画
    var animation = wx.createAnimation( {
      duration: 1000,
      timingFunction: 'ease-in-out',
      transformOrigin: "0% 100%",
    })

    this.animatin = animation

    animation.scale( 2, 2 ).step()

    // animation.opacity( 1 ).step()

    this.setData( {
      animationData: animation.export(),
    })

    setTimeout( function() {
      animation.scale( 1, 1 ).opacity( 1 ).step()
      this.setData( {
        animationData: animation.export(),
      })
    }.bind( this ), 2000 )

    // wx.redirectTo( {
    //   url: '../login/login?id=1'
    // })

  },
  //点击的方法
  skipToMain: function() {
    wx.navigateTo( {
      url: '../index/index'
    })
  }

}

Page( page )


