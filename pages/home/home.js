// pages/home/home.js

import {Home} from 'home-model.js';
var home = new Home();

Page({

  /**
   * 页面的初始数据
   */
  data: {
  // 'bannerArr':""
  },

onLoad:function(){
  this._loadData();
},
_loadData:function(){
  var id=1;
  home.getBannerData(id,(res)=>{
    // console.log(res[0].img.url);
    
    this.setData({
      'bannerArr':res
      
    })
  });
  home.getThemeData(id,(res)=>{
    console.log(res);
    this.setData({
      'themeArr': res
    })
  })

  
},


  
})