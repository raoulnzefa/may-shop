webpackJsonp([14],{101:function(t,e,a){e=t.exports=a(32)(),e.push([t.i,".manager-nav a{position:relative;line-height:.69rem;color:#3c3c3c;font-size:.22rem;display:block}","",{version:3,sources:["F:/Workspace/may-shop/src/views/orders/orderManage.vue"],names:[],mappings:"AACA,eACE,kBAAmB,AACnB,mBAAoB,AACpB,cAAe,AACf,iBAAkB,AAClB,aAAe,CAChB",file:"orderManage.vue",sourcesContent:["\n.manager-nav a {\n  position: relative;\n  line-height: .69rem;\n  color: #3C3C3C;\n  font-size: .22rem;\n  display: block;\n}\n"],sourceRoot:""}])},118:function(t,e,a){var n=a(101);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(33)("4b7fb19f",n,!0)},144:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-size"},[a("navheader",{attrs:{navleft:"common",title:"订单管理"}}),t._v(" "),a("div",{staticClass:"manager-nav p-border-b p-flex"},t._l(t.routersname,function(e){return a("router-link",{key:e.id,staticClass:"p-flex-1 p-text-c",attrs:{replace:"",to:{name:e.rname},"active-class":"search-swiper-active"}},[t._v(t._s(e.title))])})),t._v(" "),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)},staticRenderFns:[]}},47:function(t,e,a){a(118);var n=a(1)(a(86),a(144),null,null);t.exports=n.exports},53:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["navleft","navright","title"],methods:{back:function(){this.$router.back()}}}},54:function(t,e,a){var n=a(1)(a(53),a(55),null,null);t.exports=n.exports},55:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"nav"},["common"==t.navleft?a("span",{staticClass:"nav-left iconfont icon-houtui",on:{click:t.back}}):t._e(),t._v(" "),a("div",{staticClass:"header-title"},[t._v(t._s(t.title))]),t._v(" "),"home"==t.navright?a("router-link",{staticClass:"nav-right iconfont icon-sousuo",attrs:{to:{name:"search-child",params:{id:0}},tag:"span"}}):t._e(),t._v(" "),"product"==t.navright?a("router-link",{staticClass:"nav-right iconfont icon-shouye",attrs:{to:"/",tag:"span"}}):t._e(),t._v(" "),"orderpay"==t.navright?a("router-link",{staticClass:"nav-right nav-text",attrs:{to:{name:"orderall"},tag:"span"}},[t._v("订单列表")]):t._e(),t._v(" "),"common"==t.navright?a("span",{staticClass:"nav-right"}):t._e()],1)])},staticRenderFns:[]}},86:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(54),r=a.n(n);e.default={data:function(){return{routersname:[{rname:"orderall",title:"全部"},{rname:"orderwaitpay",title:"待付款"},{rname:"orderwaitgoods",title:"待收货"},{rname:"orderwaitping",title:"待评价"}]}},components:{navheader:r.a}}}});
//# sourceMappingURL=14.962bfa55e96350cf3676.js.map