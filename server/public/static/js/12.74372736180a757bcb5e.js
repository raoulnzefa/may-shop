webpackJsonp([12],{145:function(r,e){r.exports={render:function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:r.loadMore,expression:"loadMore"}],staticClass:"p-order-con",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"10"}},r._l(r.lists,function(e){return t("orderitem",{key:e.id,attrs:{orderitem:e},on:{enter:function(t){r.penter(e)},test:function(t){r.ptest(e)}}})}))},staticRenderFns:[]}},45:function(r,e,t){var n=t(1)(t(84),t(145),null,null);r.exports=n.exports},56:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["orderitem"],methods:{test:function(){alert("hild"),this.$emit("est")},enter:function(){this.$router.push({path:"/orderdetail"})}}}},58:function(r,e,t){e=r.exports=t(32)(),e.push([r.i,".order-item{position:relative;margin-top:.12rem;background:#fff;font-size:.22rem}.order-crate,.order-goods-desc{padding:0 .2rem;display:-webkit-box;display:-ms-flexbox;display:flex}.order-crate{height:1.2rem;color:#888;font-size:.22rem;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.order-status{width:200px;color:#ff1877;right:.2rem;font-size:.22rem}.order-status>p>span:first-child{width:1rem;color:#545454}.order-goods-desc span:first-child{width:1.3rem;height:1.3rem;margin:.1rem .1rem .1rem 0;background:#fff}.order-goods-desc span:first-child>img{width:100%;height:100%}.order-status-info{color:#2196f3}.order-total{line-height:.6rem;padding:0 .2rem;font-size:.22rem;text-align:right;-webkit-box-flex:1;-ms-flex:1;flex:1}.order-btn{border:1px solid #ff1877;padding:.08rem .25rem;border-radius:.06rem}.order-btn,.order-btn:active{background:#ff1877;color:#fff}.order-enter{position:absolute;line-height:1.5rem;width:.6rem;right:0;background:#f5f5f5;top:.6rem;color:#aaa9a9}","",{version:3,sources:["F:/Workspace/may-shop/src/components/orderItem.vue"],names:[],mappings:"AACA,YACE,kBAAmB,AACnB,kBAAmB,AACnB,gBAAiB,AACjB,gBAAkB,CACnB,AAOD,+BALE,gBAAiB,AACjB,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CAiBf,AAfD,aACI,cAAe,AAGf,WAAe,AACf,iBAAkB,AAIlB,wBAAyB,AACzB,qBAAsB,AACtB,uBAAwB,AACxB,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAC/B,AACD,cACE,YAAa,AACb,cAAe,AACf,YAAa,AACb,gBAAkB,CACnB,AACD,iCACE,WAAY,AACV,aAAe,CAClB,AACD,mCACE,aAAc,AACd,cAAe,AACf,2BAA4B,AAC5B,eAAiB,CAClB,AACD,uCACE,WAAY,AACZ,WAAa,CACd,AACD,mBACE,aAAc,CACf,AACD,aACE,kBAAmB,AACnB,gBAAiB,AACjB,iBAAkB,AAClB,iBAAkB,AAClB,mBAAoB,AAChB,WAAY,AACR,MAAQ,CACjB,AACD,WAEI,yBAA0B,AAC1B,sBAAuB,AACvB,oBAAsB,CAEzB,AACD,6BANM,mBAAoB,AAItB,UAAY,CAKf,AACD,aACE,kBAAmB,AACnB,mBAAoB,AACpB,YAAa,AACb,QAAS,AACT,mBAAoB,AACpB,UAAW,AACX,aAAe,CAChB",file:"orderItem.vue",sourcesContent:["\n.order-item {\r\n  position: relative;\r\n  margin-top: .12rem;\r\n  background: #fff;\r\n  font-size: .22rem;\n}\n.order-goods-desc {\r\n  padding: 0 .2rem;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\n}\n.order-crate {\r\n    height: 1.2rem;\r\n  padding: 0 .2rem;\r\n    /* line-height: .6rem; */\r\n    color: #888888;\r\n    font-size: .22rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\n}\n.order-status {\r\n  width: 200px;\r\n  color: #ff1877;\r\n  right: .2rem;\r\n  font-size: .22rem;\n}\n.order-status>p>span:first-child{\r\n  width: 1rem;\r\n    color: #545454;\n}\n.order-goods-desc span:first-child {\r\n  width: 1.3rem;\r\n  height: 1.3rem;\r\n  margin: .1rem .1rem .1rem 0;\r\n  background: #fff;\n}\n.order-goods-desc span:first-child>img{\r\n  width: 100%;\r\n  height: 100%;\n}\n.order-status-info{\r\n  color: #2196F3\n}\n.order-total {\r\n  line-height: .6rem;\r\n  padding: 0 .2rem;\r\n  font-size: .22rem;\r\n  text-align: right;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\n}\n.order-btn {\r\n      background: #ff1877;\r\n    border: 1px solid #ff1877;\r\n    padding: .08rem .25rem;\r\n    border-radius: .06rem;\r\n    color: #fff;\n}\n.order-btn:active {\r\n  background: #ff1877;\r\n  color: #fff;\n}\n.order-enter {\r\n  position: absolute;\r\n  line-height: 1.5rem;\r\n  width: .6rem;\r\n  right: 0;\r\n  background: #F5F5F5;\r\n  top: .6rem;\r\n  color: #AAA9A9;\n}\r\n"],sourceRoot:""}])},59:function(r,e,t){var n=t(58);"string"==typeof n&&(n=[[r.i,n,""]]),n.locals&&(r.exports=n.locals);t(33)("254fc44d",n,!0)},61:function(r,e,t){t(59);var n=t(1)(t(56),t(64),null,null);r.exports=n.exports},64:function(r,e){r.exports={render:function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"order-item p-border-t"},[t("div",{staticClass:"order-crate p-border-b"},[t("div",{staticClass:"order-status"},[r._m(0),r._v(" "),t("p",[t("span",[r._v("总    价:")]),t("span",{staticClass:"order-status-price"},[r._v("¥ "+r._s(r.orderitem.price))])])]),r._v(" "),t("div",{staticClass:"order-total"},[t("div",{staticClass:"order-btns"},[t("button",{staticClass:"order-btn",on:{click:r.test}},[r._v("去付款")])])])]),r._v(" "),t("div",{staticClass:"order-goods-desc p-border-b ",on:{click:r.enter}},[t("span",[t("img",{attrs:{src:r.orderitem.img,alt:""}})]),r._v(" "),t("span",{staticClass:"textellipsisone"},[r._v("\n      "+r._s(r.orderitem.name)+"\n    ")])])])},staticRenderFns:[function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("p",[t("span",[r._v("状    态:")]),t("span",{staticClass:"order-status-info"},[r._v("完成")])])}]}},84:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t(61),o=t.n(n);e.default={data:function(){return{loading:!1,lists:[{name:"test1",price:88},{name:"test2",price:188},{name:"test3",price:80}]}},components:{orderitem:o.a},methods:{loadMore:function(){console.log("Hello")}}}}});
//# sourceMappingURL=12.74372736180a757bcb5e.js.map