webpackJsonp([2],{110:function(e,r,t){var n=t(93);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t(33)("6c68735d",n,!0)},133:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadMore,expression:"loadMore"}],staticClass:"container p-size",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"10"}},[t("div",{staticClass:"header"},[t("div",{staticClass:"nav"},[t("span",{staticClass:"nav-left iconfont icon-houtui",on:{click:e.back}}),e._v(" "),e._m(0),e._v(" "),t("span",{staticClass:"nav-right iconfont icon-search"})])]),e._v(" "),t("div",{staticClass:"search-if p-flex"},[t("div",{staticClass:"p-flex-1"},[e._v("默认")]),e._v(" "),t("div",{staticClass:"p-flex-1"},[e._v("最新")]),e._v(" "),t("div",{staticClass:"p-flex-1"},[e._v("销量")]),e._v(" "),t("div",{staticClass:"p-flex-1 search-price"},[e._v("价格")]),e._v(" "),t("div",{staticClass:"p-flex-1",on:{click:e.changeM}},[e._v("筛选")])]),e._v(" "),t("div",[t("cgoods",{attrs:{product:e.goodslist}})],1),e._v(" "),e.showfilter?t("div",{staticClass:"search-mask"}):e._e(),e._v(" "),e.showfilter?t("div",{staticClass:"search-m-f"},[t("div",{staticClass:"search-filter p-border-t"},[e._m(1),e._v(" "),t("button",{staticClass:"p-full-btn",on:{click:e.changeM}},[e._v("确定")])])]):e._e()])},staticRenderFns:[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("h1",{staticClass:"header-title"},[t("input",{staticClass:"search-input",attrs:{type:"text"}})])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticStyle:{height:"3.1rem","overflow-y":"scroll"}},[t("div",{staticClass:"p-border-b"},[t("span",[e._v("价格范围")]),e._v(" "),t("input",{attrs:{type:"number"}}),t("span",{staticClass:"search-s"},[e._v("---")]),e._v(" "),t("input",{attrs:{type:"number"}})]),e._v(" "),t("div",{staticClass:"p-border-b"},[t("span",[e._v("商户名称")]),e._v(" "),t("input",{attrs:{type:"text"}})]),e._v(" "),t("div",{staticClass:"search-pinpai"},[t("div",{staticClass:"search-filter-t"},[e._v("商品品牌")]),e._v(" "),t("span",[e._v("阿迪达斯")]),t("span",[e._v("阿迪达斯")]),t("span",[e._v("阿迪达斯")])])])}]}},52:function(e,r,t){t(110);var n=t(1)(t(91),t(133),null,null);e.exports=n.exports},53:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={props:["navleft","navright","title"],methods:{back:function(){this.$router.back()}}}},54:function(e,r,t){var n=t(1)(t(53),t(55),null,null);e.exports=n.exports},55:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"header"},[t("div",{staticClass:"nav"},["common"==e.navleft?t("span",{staticClass:"nav-left iconfont icon-houtui",on:{click:e.back}}):e._e(),e._v(" "),t("div",{staticClass:"header-title"},[e._v(e._s(e.title))]),e._v(" "),"home"==e.navright?t("router-link",{staticClass:"nav-right iconfont icon-sousuo",attrs:{to:{name:"search-child",params:{id:0}},tag:"span"}}):e._e(),e._v(" "),"product"==e.navright?t("router-link",{staticClass:"nav-right iconfont icon-shouye",attrs:{to:"/",tag:"span"}}):e._e(),e._v(" "),"orderpay"==e.navright?t("router-link",{staticClass:"nav-right nav-text",attrs:{to:{name:"orderall"},tag:"span"}},[e._v("订单列表")]):e._e(),e._v(" "),"common"==e.navright?t("span",{staticClass:"nav-right"}):e._e()],1)])},staticRenderFns:[]}},65:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={props:{product:{type:Array}}}},66:function(e,r,t){r=e.exports=t(32)(),r.push([e.i,'.home-goods-list{padding:0 .28rem .18rem .1rem;border-top:1px solid #dfdfdf;border-bottom:1px solid #dfdfdf}.goods{position:relative;padding-left:.18rem;padding-top:.18rem;width:100%;overflow:hidden}.goods-img{height:2rem;border:1px solid #dfdfdf;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.goods-name,.goods-oldprice{font-size:.2rem;margin-top:.1rem}.goods-name{font-size:12px;height:35px;color:#3c3c3c}.goods-oldprice{color:#cccbcb;margin-bottom:.1rem}.goods-newprice{color:#ff3b3b;font-size:.24rem}.goods-vip{background-color:#ff1877;left:.18rem;top:.18rem;padding-left:.05rem;color:#fff;font-size:.18rem;line-height:.34rem;width:1rem}.goods-vip,.goods-vip:before{position:absolute;height:.34rem}.goods-vip:before{content:"";right:-.17rem;top:0;border:.17rem solid #ff1877;box-sizing:border-box;-webkit-box-sizing:border-box;overflow:hidden;border-right-color:transparent}',"",{version:3,sources:["F:/Workspace/may-shop/src/components/goods.vue"],names:[],mappings:"AACA,iBACE,8BAAkC,AAClC,6BAA8B,AAC9B,+BAAiC,CAClC,AACD,OACE,kBAAmB,AACnB,oBAAqB,AACrB,mBAAoB,AACpB,WAAW,AACX,eAAiB,CAClB,AACD,WACE,YAAa,AACb,yBAA0B,AAC1B,gBAAiB,AACjB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,qBAAsB,AAC1B,wBAAyB,AACrB,qBAAsB,AAClB,sBAAwB,CACjC,AACD,4BAEE,gBAAiB,AACjB,gBAAkB,CACnB,AACD,YACE,eAAgB,AAChB,YAAa,AACb,aAAe,CAChB,AACD,gBACE,cAAe,AACf,mBAAqB,CACtB,AACD,gBACE,cAAe,AACf,gBAAkB,CACnB,AACD,WAEE,yBAA0B,AAC1B,YAAa,AACb,WAAY,AACZ,oBAAqB,AACrB,WAAY,AACZ,iBAAkB,AAClB,mBAAoB,AAEpB,UAAY,CACb,AACD,6BAXE,kBAAmB,AAQnB,aAAe,CAchB,AAXD,kBACE,WAAY,AAEZ,cAAgB,AAChB,MAAO,AACP,4BAA6B,AAE7B,sBAAuB,AACvB,8BAA+B,AAC/B,gBAAiB,AACjB,8BAAgC,CACjC",file:"goods.vue",sourcesContent:['\n.home-goods-list {\n  padding: 0rem .28rem .18rem .1rem;\n  border-top: 1px solid #DFDFDF;\n  border-bottom: 1px solid #DFDFDF;\n}\n.goods {\n  position: relative;\n  padding-left: .18rem;\n  padding-top: .18rem;  \n  width:100%;\n  overflow: hidden;\n}\n.goods-img {\n  height: 2rem;\n  border: 1px solid #dfdfdf;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.goods-name,\n.goods-oldprice {\n  font-size: .2rem;\n  margin-top: .1rem;\n}\n.goods-name {\n  font-size: 12px;\n  height: 35px;\n  color: #3C3C3C;\n}\n.goods-oldprice {\n  color: #cccbcb;\n  margin-bottom: .1rem;\n}\n.goods-newprice {\n  color: #FF3b3b;\n  font-size: .24rem;\n}\n.goods-vip {\n  position: absolute;\n  background-color: #ff1877;\n  left: .18rem;\n  top: .18rem;\n  padding-left: .05rem;\n  color: #fff;\n  font-size: .18rem;\n  line-height: .34rem;\n  height: .34rem;\n  width: 1rem;\n}\n.goods-vip:before {\n  content: "";\n  position: absolute;\n  right: -0.17rem;\n  top: 0;\n  border: .17rem solid #ff1877;\n  height: .34rem;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  overflow: hidden;\n  border-right-color: transparent;\n}\n'],sourceRoot:""}])},67:function(e,r,t){var n=t(66);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t(33)("5182a4e3",n,!0)},68:function(e,r,t){t(67);var n=t(1)(t(65),t(69),null,null);e.exports=n.exports},69:function(e,r){e.exports={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"home-goods-list clearfix p-flex-float"},e._l(e.product,function(r){return t("div",{key:r.id,staticClass:"goods"},[t("router-link",{attrs:{to:{name:"product"}}},[t("div",{staticClass:"goods-img p-align-justy"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:r.pic,expression:"item.pic"}],staticClass:"p-imgloay"})]),e._v(" "),t("div",{staticClass:"goods-name textellipsis"},[e._v("\n        "+e._s(r.names)+"\n      ")])])],1)}))},staticRenderFns:[]}},91:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(54),i=t.n(n),o=t(68),A=t.n(o);r.default={data:function(){return{showfilter:!1,indexnum:0,goodslist:["全部","潮流前线","男包装","女大衣","男裤子"]}},components:{navheader:i.a,cgoods:A.a},methods:{back:function(){this.$router.go(-1)},test:function(){console.dir(this.data)},searchchange:function(e){console.log(e)},changeM:function(){this.showfilter=!this.showfilter},loadMore:function(){var e=this;this.load=!1,setTimeout(function(){e.goodslist.push({pic:"http://s2.mogucdn.com/p2/170325/arkmaster_3el2ebda377a75le6hlef58a0b0ac_690x400.png"}),e.loading=!1},1e3)}}}},93:function(e,r,t){r=e.exports=t(32)(),r.push([e.i,'.search-input{position:relative;top:-.04rem;border-radius:10px;line-height:.55rem;width:95%;padding:0 5px}.search-if{line-height:.7rem;height:.7rem;font-size:.24rem;padding:0 .2rem;text-align:center}.search-price{position:relative}.search-price:after,.search-price:before{border:.06rem solid transparent;content:"";display:inline-block;position:absolute;right:.2rem}.search-price:before{border-bottom-color:#888;top:.2rem}.search-price:after{border-top-color:#888;bottom:.2rem}.search-filter{padding:0 .2rem}.search-filter>div{height:.86rem}.search-filter span{width:1.16rem}.search-filter input{height:.46rem;background:#f5f5f5;margin:.2rem 0;padding:0 10px}.search-filter input[type=number]{width:2.1rem}span.search-s{width:.64rem;text-align:center}.search-filter input[type=text]{width:4.84rem}.search-filter-t{padding:.2rem 0}.search-pinpai span{padding:.1rem .3rem;background:#f5f5f5;margin-right:.1rem;margin-bottom:.1rem;border-radius:.5rem;-webkit-border-radius:.5rem}.search-mask{left:0;right:0;bottom:0;z-index:5;background:rgba(0,0,0,.1)}.search-m-f,.search-mask{position:fixed;top:1.48rem}.search-m-f{width:6.4rem;margin:0 auto;z-index:6;background:#fff}',"",{version:3,sources:["F:/Workspace/may-shop/src/views/search.vue"],names:[],mappings:"AACA,cACE,kBAAmB,AACnB,YAAa,AACb,mBAAoB,AACpB,mBAAoB,AACpB,UAAW,AACX,aAAe,CAChB,AACD,WACE,kBAAmB,AACnB,aAAc,AACd,iBAAkB,AAClB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,cACE,iBAAmB,CACpB,AACD,yCAEE,gCAAiC,AACjC,WAAY,AACZ,qBAAsB,AACtB,kBAAmB,AACnB,WAAa,CACd,AACD,qBACE,yBAA6B,AAC7B,SAAW,CACZ,AACD,oBACE,sBAA0B,AAC1B,YAAc,CACf,AACD,eACE,eAAiB,CAClB,AACD,mBACE,aAAe,CAChB,AACD,oBACE,aAAe,CAChB,AACD,qBACE,cAAe,AACf,mBAAoB,AACpB,eAAgB,AAChB,cAAgB,CACjB,AACD,kCACE,YAAc,CACf,AACD,cACE,aAAc,AACd,iBAAmB,CACpB,AACD,gCACE,aAAe,CAChB,AACD,iBACE,eAAiB,CAClB,AACD,oBACE,oBAAqB,AACrB,mBAAoB,AACpB,mBAAoB,AACpB,oBAAqB,AACrB,oBAAqB,AACrB,2BAA6B,CAC9B,AACD,aAEE,OAAQ,AACR,QAAS,AAET,SAAU,AACV,UAAW,AACX,yBAA8B,CAC/B,AACD,yBARE,eAAgB,AAGhB,WAAa,CAYd,AAPD,YAEE,aAAc,AACd,cAAe,AACf,UAAW,AAEX,eAAoB,CACrB",file:"search.vue",sourcesContent:['\n.search-input {\r\n  position: relative;\r\n  top: -.04rem;\r\n  border-radius: 10px;\r\n  line-height: .55rem;\r\n  width: 95%;\r\n  padding: 0 5px;\n}\n.search-if {\r\n  line-height: .7rem;\r\n  height: .7rem;\r\n  font-size: .24rem;\r\n  padding: 0 .2rem;\r\n  text-align: center;\n}\n.search-price {\r\n  position: relative;\n}\n.search-price:before,\r\n.search-price:after {\r\n  border: .06rem solid transparent;\r\n  content: "";\r\n  display: inline-block;\r\n  position: absolute;\r\n  right: .2rem;\n}\n.search-price:before {\r\n  border-bottom-color: #888888;\r\n  top: .2rem;\n}\n.search-price:after {\r\n  border-top-color: #888888;\r\n  bottom: .2rem;\n}\n.search-filter {\r\n  padding: 0 .2rem;\n}\n.search-filter>div {\r\n  height: .86rem;\n}\n.search-filter span {\r\n  width: 1.16rem;\n}\n.search-filter input {\r\n  height: .46rem;\r\n  background: #F5F5F5;\r\n  margin: .2rem 0;\r\n  padding: 0 10px;\n}\n.search-filter input[type=number] {\r\n  width: 2.1rem;\n}\nspan.search-s {\r\n  width: .64rem;\r\n  text-align: center;\n}\n.search-filter input[type=text] {\r\n  width: 4.84rem;\n}\n.search-filter-t {\r\n  padding: .2rem 0;\n}\n.search-pinpai span {\r\n  padding: .1rem .3rem;\r\n  background: #F5F5F5;\r\n  margin-right: .1rem;\r\n  margin-bottom: .1rem;\r\n  border-radius: .5rem;\r\n  -webkit-border-radius: .5rem;\n}\n.search-mask {\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  top: 1.48rem;\r\n  bottom: 0;\r\n  z-index: 5;\r\n  background: rgba(0, 0, 0, .1);\n}\n.search-m-f {\r\n  position: fixed;\r\n  width: 6.4rem;\r\n  margin: 0 auto;\r\n  z-index: 6;\r\n  top: 1.48rem;\r\n  background: #FFFFFF;\n}\r\n'],sourceRoot:""}])}});
//# sourceMappingURL=2.c0684df8c34a3b42d6a9.js.map