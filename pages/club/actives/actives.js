//获取应用实例
var app = getApp()
Page( {
  data: {
    // 轮播
    images: [
      {
        "pic": "http://clubimg.lenovo.com.cn/pic/3892344689357/0"
      },
      {
        "pic": "http://clubimg.lenovo.com.cn/pic/3903010072873/0",
      },
      {
        "pic": "http://clubimg.lenovo.com.cn/pic/3903023086151/0",
      },
      {
        "pic": "http://clubimg.lenovo.com.cn/pic/3903032977396/0",
      },
      {
        "pic": "http://clubimg.lenovo.com.cn/pic/3903038475292/0",
      }
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 1200,
    // nav
    navs: [
      {
        image: 'http://clubimg.lenovo.com.cn/pic/3271602236148/0',
        text: '签到'
      }, {
        image: 'http://clubimg.lenovo.com.cn/pic/3271611283445/0',
        text: '日历'
      }, {
        image: 'http://clubimg.lenovo.com.cn/pic/3583937715282/0',
        text: '拍照'
      }, {
        image: 'http://clubimg.lenovo.com.cn/pic/3271616867699/0',
        text: '商城'
      }
    ],
    // item
    items: [
      {

        "recommend_pic": "http://clubimg.lenovo.com.cn/pic/3892327871518/0",

        "subject": "如约而至，如期相遇——记联想同城会重庆站"

      },
      {
        "recommend_pic": "http://clubimg.lenovo.com.cn/pic/3318507979562/0",

        "subject": "【大师听诊室】大师出手，专治电脑“疑难杂症”！"

      },
      {

        "recommend_pic": "http://clubimg.lenovo.com.cn/pic/3892221996475/0",

        "subject": "联想二合一笔记本MIIX 5晒单畅享1年延保＋帆布包福利！"
      },
      {
        "recommend_pic": "http://clubimg.lenovo.com.cn/pic/3813438669115/0",

        "subject": "【傲雪调研】你的笔记本屏幕在相机镜头下会闪吗？"

      },
      {

        "recommend_pic": "http://clubimg.lenovo.com.cn/pic/3892259064931/0",

        "subject": "【摄影技巧分享】 浅谈光影美感与拍摄思想的统一"

      },
      {

        "recommend_pic": "http://clubimg.lenovo.com.cn/pic/3892268200101/0",

        "subject": "【有奖活动】晒国庆出行计划，领赞助奖品啦"
      },
      {
        "recommend_pic": "http://clubimg.lenovo.com.cn/pic/3892278470523/0",

        "subject": "【乐拍摄影团】绿叶清风 耳边心语"

      },
      {

        "recommend_pic": "http://clubimg.lenovo.com.cn/pic/3606237150139/0",

        "subject": "与国行版有何不同？美版Moto Z开箱实拍"

      },
      {

        "recommend_pic": "http://clubimg.lenovo.com.cn/pic/3835055572326/0",

        "subject": "【摄影技巧分享】 花草小景拍摄心得"
      },
      {

        "recommend_pic": "http://clubimg.lenovo.com.cn/pic/3891105772049/0",

        "subject": "【摄影技巧分享】拒绝单反 手机也能拍大片"

      }
    ]
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },
  swiperchange: function( e ) {
    //FIXME: 当前页码
    //console.log(e.detail.current)
  },

  onLoad: function() {
    var that = this
    fetch( 'https://www.baidu.com' ).then( function( response ) {
      if( response.status !== 200 ) {
        console.log( "error：" + response.status );
        return;
      }
      response.json().then( function( data ) {
        // that.setData( {
        //   images: data
        // })
      });
    })

    fetch( 'https://www.baidu.com' ).then( function( response ) {
      if( response.status !== 200 ) {
        console.log( "error：" + response.status );
        return;
      }
      response.json().then( function( data ) {
        // that.setData( {
        //   items: data
        // })
      });
    })
  },
  go: function( event ) {
    wx.navigateTo( {
      url: '../list/index?type=' + event.currentTarget.dataset.type
    })
  }
})