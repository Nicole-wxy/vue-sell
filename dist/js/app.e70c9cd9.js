(function(t){function s(s){for(var i,o,r=s[0],c=s[1],l=s[2],d=0,p=[];d<r.length;d++)o=r[d],a[o]&&p.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(s);while(p.length)p.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,s=0;s<n.length;s++){for(var e=n[s],i=!0,r=1;r<e.length;r++){var c=e[r];0!==a[c]&&(i=!1)}i&&(n.splice(s--,1),t=o(o.s=e[0]))}return t}var i={},a={app:0},n=[];function o(s){if(i[s])return i[s].exports;var e=i[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=i,o.d=function(t,s,e){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)o.d(e,i,function(s){return t[s]}.bind(null,i));return e},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="/vue-sell/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=s,r=r.slice();for(var l=0;l<r.length;l++)s(r[l]);var u=c;n.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"01f0":function(t,s,e){"use strict";var i=e("8d46"),a=e.n(i);a.a},"0418":function(t,s,e){"use strict";var i=e("b4f8"),a=e.n(i);a.a},"0486":function(t,s,e){},"080e":function(t,s,e){},"093f":function(t,s,e){"use strict";var i=e("385d"),a=e.n(i);a.a},"09ff":function(t,s,e){"use strict";var i=e("9978"),a=e.n(i);a.a},1595:function(t,s,e){"use strict";var i=e("3a75"),a=e.n(i);a.a},"343f":function(t,s,e){"use strict";var i=e("79ca"),a=e.n(i);a.a},"36b2":function(t,s,e){},"370a":function(t,s,e){"use strict";var i=e("9c2a"),a=e.n(i);a.a},"385d":function(t,s,e){},"3a75":function(t,s,e){},4491:function(t,s,e){"use strict";var i=e("0486"),a=e.n(i);a.a},"47d2":function(t,s,e){"use strict";var i=e("bdec"),a=e.n(i);a.a},"56d7":function(t,s,e){"use strict";e.r(s);e("cadf"),e("551c"),e("f751"),e("097d");var i=e("2b0e"),a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{seller:t.seller}}),e("div",{staticClass:"tab-wrapper"},[e("tab",{attrs:{tabs:t.tabs,initialIndex:0}})],1)],1)},n=[],o=(e("386d"),e("72bf")),r=e.n(o),c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"64",height:"64",src:t.seller.avatar}})]),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),e("div",{staticClass:"description"},[t._v(t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达")]),t.seller.supports?e("div",{staticClass:"support"},[e("support-ico",{attrs:{size:1,type:t.seller.supports[0].type}}),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])],1):t._e()]),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showDetail}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),e("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail}},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),e("i",{staticClass:"icon-keyboard_arrow_right"})]),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})])])},l=[],u=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"support-ico",class:t.iconCls})},d=[],p=(e("c5f6"),{name:"support-ico",props:{size:{type:Number},type:{type:Number}},computed:{iconCls:function(){var t=["decrease","discount","special","invoice","guarantee"];return"icon-".concat(this.size," ").concat(t[this.type])}}}),f=p,h=(e("343f"),e("2877")),v=Object(h["a"])(f,u,d,!1,null,"06a73194",null),m=v.exports,C={name:"v-header",props:{seller:{type:Object,default:function(){return{}}}},methods:{showDetail:function(){this.headerDetailComp=this.headerDetailComp||this.$createHeaderDetail({$props:{seller:"seller"}}),this.headerDetailComp.show()}},components:{SupportIco:m}},_=C,b=(e("e506"),Object(h["a"])(_,c,l,!1,null,"a2d89b0e",null)),y=b.exports,g=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{staticClass:"scroll-nav-wrapper"},[t.goods.length?e("cube-scroll-nav",{attrs:{side:!0,data:t.goods,options:t.scrollOptions},scopedSlots:t._u([{key:"bar",fn:function(s){return[e("cube-scroll-nav-bar",{attrs:{direction:"vertical",labels:s.labels,txts:t.barTxts,current:s.current},scopedSlots:t._u([{key:"default",fn:function(s){return[e("div",{staticClass:"text"},[s.txt.type>1?e("support-ico",{attrs:{size:3,type:s.txt.type}}):t._e(),e("span",[t._v(t._s(s.txt.name))]),s.txt.count?e("span",{staticClass:"num"},[e("bubble",{attrs:{num:s.txt.count}})],1):t._e()],1)]}}],null,!0)})]}}],null,!1,2444972323)},t._l(t.goods,function(s){return e("cube-scroll-nav-panel",{key:s.name,attrs:{label:s.name,title:s.name}},[e("ul",t._l(s.foods,function(s){return e("li",{key:s.name,staticClass:"food-item",on:{click:function(e){return t.selectFood(s)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57",height:"57",src:s.icon}})]),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount))]),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),e("div",{staticClass:"car-control-wrapper"},[e("car-control",{attrs:{food:s},on:{add:t.onAdd}})],1)])])}),0)])}),1):t._e()],1),e("div",{staticClass:"shop-car-wrapper"},[e("shop-car",{ref:"shopCar",attrs:{"select-foods":t.selectFoods,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}})],1)])},w=[],x=(e("ac6a"),e("bc3a")),k=e.n(x),S=0;function $(t){return function(s){return k.a.get(t,{params:s}).then(function(t){var s=t.data,e=s.errno,i=s.data;if(e===S)return i}).catch(function(){})}}var O="./";O="/vue-sell";var T=$("".concat(O,"api/seller")),P=$("".concat(O,"api/goods")),j=$("".concat(O,"api/ratings")),F=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"shop-car"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[e("bubble",{attrs:{num:t.totalCount}})],1)]),e("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice))]),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),e("div",{staticClass:"content-right"},[e("div",{staticClass:"pay",class:t.payClass,on:{click:function(s){return s.stopPropagation(),t.pay(s)}}},[t._v(t._s(t.payDesc))])])]),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s,i){return e("div",{key:i},[e("transition",{on:{"before-enter":t.beforeDrop,enter:t.dropping,"after-enter":t.afterDrop}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])],1)}),0)])])},N=[],E=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"bubble"},[t._v("\n    "+t._s(t.num)+"\n")])},L=[],D={name:"bubble",props:{num:{type:Number}}},B=D,R=(e("0418"),Object(h["a"])(B,E,L,!1,null,"416453a2",null)),z=R.exports,M=10,A="inner-hook";function I(){for(var t=[],s=0;s<M;s++)t.push({show:!1});return t}var Y={name:"shop-car",props:{selectFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0},fold:{type:Boolean,default:!0},sticky:{type:Boolean,default:!1}},data:function(){return{balls:I(),listFold:this.fold}},created:function(){this.dropBalls=[]},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){if(0===this.totalPrice)return"￥".concat(this.minPrice,"元起送");if(this.totalPrice<this.minPrice){var t=this.minPrice-this.totalPrice;return"还差".concat(t,"起送")}return"去结算"},payClass:function(){return!this.totalPrice||this.totalPrice<this.minPrice?"no-enough":"enough"}},methods:{drop:function(t){for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,void this.dropBalls.push(e)}},beforeDrop:function(t){var s=this.dropBalls[this.dropBalls.length-1],e=s.el.getBoundingClientRect(),i=e.left-32,a=-(window.innerHeight-e.top-22);t.style.display="",t.style.transform=t.style.webkitTransform="translate3d(0, ".concat(a,"px, 0)");var n=t.getElementsByClassName(A)[0];n.style.transform=n.style.webkitTransform="translate3d(".concat(i,"px, 0, 0)")},dropping:function(t,s){this._reflow=document.body.offsetHeight,t.style.transform=t.style.webkitTransform="translate3d(0, 0, 0)";var e=t.getElementsByClassName(A)[0];e.style.transform=e.style.webkitTransform="translate3d(0, 0, 0)",t.addEventListener("transitionend",s)},afterDrop:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")},toggleList:function(){if(this.listFold){if(!this.totalCount)return;this.listFold=!1,this._showShopCarList(),this._showShopCarSticky()}else this.listFold=!0,this._hideShopCarList()},_showShopCarList:function(){var t=this;this.shopCarListComp=this.shopCarListComp||this.$createShopCarList({$props:{selectFoods:"selectFoods"},$events:{hide:function(){t.listFold=!0},leave:function(){t._hideShopCarSticky()},add:function(s){t.shopCarStickyComp.drop(s)}}}),this.shopCarListComp.show()},_showShopCarSticky:function(){this.shopCarStickyComp=this.shopCarStickyComp||this.$createShopCarSticky({$props:{selectFoods:"selectFoods",deliveryPrice:"deliveryPrice",minPrice:"minPrice",fold:"listFold",list:this.shopCarListComp}}),this.shopCarStickyComp.show()},_hideShopCarList:function(){var t=this.sticky?this.$parent.list:this.shopCarListComp;t.hide&&t.hide()},_hideShopCarSticky:function(){this.shopCarStickyComp.hide()},pay:function(t){this.totalPrice<this.minPrice||(this.$createDialog({title:"支付",content:"您需要支付共".concat(this.totalPrice,"元")}).show(),t.stopPropagation())}},watch:{fold:function(t){this.listFold=t},totalCount:function(t){this.listFold||t||this._hideShopCarList()}},components:{Bubble:z}},H=Y,J=(e("01f0"),Object(h["a"])(H,F,N,!1,null,"11345966",null)),U=J.exports,W=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"car-control"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"car-decrease",on:{click:function(s){return s.stopPropagation(),t.decrease(s)}}},[e("span",{staticClass:"inner icon-remove_circle_outline"})])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"car-count"},[t._v(t._s(t.food.count))]),e("div",{staticClass:"car-add icon-add_circle",on:{click:function(s){return s.stopPropagation(),t.add(s)}}})],1)},V=[],X="add",q={name:"car-control",props:{food:{type:Object}},methods:{add:function(t){this.food.count?this.food.count++:this.$set(this.food,"count",1),this.$emit(X,t.target)},decrease:function(){this.food.count&&this.food.count--}}},G=q,K=(e("47d2"),Object(h["a"])(G,W,V,!1,null,"7cc097aa",null)),Q=K.exports,Z={name:"goods",props:{data:{type:Object,default:function(){return{}}}},data:function(){return{goods:[],selectedFood:{},scrollOptions:{click:!1,directionLockThreshold:0}}},computed:{seller:function(){return this.data.seller},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t},barTxts:function(){var t=[];return this.goods.forEach(function(s){var e=s.type,i=s.name,a=s.foods,n=0;a.forEach(function(t){n+=t.count||0}),t.push({type:e,name:i,count:n})}),t}},methods:{selectFood:function(t){this.selectedFood=t,this._showFood(),this._showShopCarSticky()},fetch:function(){var t=this;this.fetched||(this.fetched=!0,P({id:this.seller.id}).then(function(s){t.goods=s}))},onAdd:function(t){this.$refs.shopCar.drop(t)},_showFood:function(){var t=this;this.foodComp=this.foodComp||this.$createFood({$props:{food:"selectedFood"},$events:{leave:function(){t._hideShopCarList()},add:function(s){t.shopCarStickyComp.drop(s)}}}),this.foodComp.show()},_showShopCarSticky:function(){this.shopCarStickyComp=this.shopCarStickyComp||this.$createShopCarSticky({$props:{selectFoods:"selectFoods",deliveryPrice:this.seller.deliveryPrice,minPrice:this.seller.minPrice,fold:!0}}),this.shopCarStickyComp.show()},_hideShopCarList:function(){this.shopCarStickyComp.hide()}},components:{ShopCar:U,CarControl:Q,SupportIco:m,Bubble:z}},tt=Z,st=(e("690b"),Object(h["a"])(tt,g,w,!1,null,"14be39e8",null)),et=st.exports,it=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("cube-scroll",{staticClass:"ratings",attrs:{data:t.computedRatings,options:t.scrollOptions}},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),e("div",{staticClass:"title"},[t._v("综合评分")]),e("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("服务态度")]),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("商品评分")]),e("star",{attrs:{size:36,score:t.seller.foodScore}}),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),e("div",{staticClass:"delivery-wrapper"},[e("span",{staticClass:"title"},[t._v("送达时间")]),e("span",{staticClass:"delivery"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),e("split"),t.ratings.length?e("rating-select",{attrs:{ratings:t.ratings,onlyContent:t.onlyContent,selectType:t.selectType},on:{select:t.onSelect,toggle:t.onToggle}}):t._e(),e("div",{staticClass:"rating-wrapper"},[e("ul",t._l(t.computedRatings,function(s,i){return e("li",{key:i,staticClass:"rating-item border-bottom-1px"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,width:"28",height:"28"}})]),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.score}}),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"delivery"},[t._v(t._s(s.deliveryTime))])],1),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),e("div",{directives:[{name:"show",rawName:"v-show",value:s.recommend&&s.recommend.length,expression:"rating.recommend && rating.recommend.length"}],staticClass:"recommend"},[e("span",{staticClass:"icon-thumb_up"}),t._l(s.recommend,function(s,i){return e("span",{key:i,staticClass:"item"},[t._v(t._s(s))])})],2),e("div",{staticClass:"time"},[t._v(t._s(t.format(s.rateTime)))])])])}),0)])],1)])},at=[],nt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star",class:t.starType},t._l(t.itemClasses,function(t,s){return e("span",{key:s,staticClass:"star-item",class:t})}),0)},ot=[],rt=5,ct="on",lt="half",ut="off",dt={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!==0,i=Math.floor(s),a=0;a<i;a++)t.push(ct);e&&t.push(lt);while(t.length<rt)t.push(ut);return t}}},pt=dt,ft=(e("5717"),Object(h["a"])(pt,nt,ot,!1,null,null,null)),ht=ft.exports,vt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"split"})},mt=[],Ct={name:"split"},_t=Ct,bt=(e("6b5e"),Object(h["a"])(_t,vt,mt,!1,null,"6a13eb82",null)),yt=bt.exports,gt=e("c1df"),wt=e.n(gt),xt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"rating-select"},[e("div",{staticClass:"rating-type border-bottom-1px"},[e("span",{staticClass:"block positive",class:{active:2===t.selectType},on:{click:function(s){return t.select(2)}}},[t._v(t._s(t.desc.all)+"\n            "),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),e("span",{staticClass:"block positive",class:{active:0===t.selectType},on:{click:function(s){return t.select(0)}}},[t._v(t._s(t.desc.positive)+"\n            "),e("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),e("span",{staticClass:"block negative",class:{active:1===t.selectType},on:{click:function(s){return t.select(1)}}},[t._v(t._s(t.desc.negative)+"\n            "),e("span",{staticClass:"count"},[t._v(t._s(t.negatives.length))])])]),e("div",{staticClass:"switch",class:{on:t.onlyContent},on:{click:t.toggle}},[e("span",{staticClass:"icon-check_circle"}),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},kt=[],St=0,$t=1,Ot=2,Tt="select",Pt="toggle",jt={props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:Ot},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},computed:{positives:function(){return this.ratings.filter(function(t){return t.rateType===St})},negatives:function(){return this.ratings.filter(function(t){return t.rateType===$t})}},methods:{select:function(t){this.$emit(Tt,t)},toggle:function(){this.$emit(Pt)}}},Ft=jt,Nt=(e("d147"),Object(h["a"])(Ft,xt,kt,!1,null,"6911c7c5",null)),Et=Nt.exports,Lt=2,Dt={data:function(){return{onlyContent:!0,selectType:Lt}},computed:{computedRatings:function(){var t=this,s=[];return this.ratings.forEach(function(e){t.onlyContent&&!e.text||t.selectType!==Lt&&t.selectType!==e.rateType||s.push(e)}),s}},methods:{onSelect:function(t){this.selectType=t},onToggle:function(){this.onlyContent=!this.onlyContent}}},Bt={name:"ratings",mixins:[Dt],props:{data:{type:Object}},data:function(){return{ratings:[],scrollOptions:{click:!1,directionLockThreshold:0}}},computed:{seller:function(){return this.data.seller||{}}},methods:{fetch:function(){var t=this;this.fetched||(this.fetched=!0,j({id:this.seller.id}).then(function(s){t.ratings=s}))},format:function(t){return wt()(t).format("YYYY-MM-DD hh:mm")}},components:{Star:ht,Split:yt,RatingSelect:Et}},Rt=Bt,zt=(e("09ff"),Object(h["a"])(Rt,it,at,!1,null,"33e9d2bf",null)),Mt=zt.exports,At=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("cube-scroll",{staticClass:"seller",attrs:{options:t.sellerScrollOptions}},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),e("div",{staticClass:"desc border-bottom-1px"},[e("star",{attrs:{size:36,score:t.seller.score}}),e("span",{staticClass:"text"},[t._v(t._s(t.seller.ratingCount))]),e("span",{staticClass:"text"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",[t._v("起送价")]),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n                    ")])]),e("li",{staticClass:"block"},[e("h2",[t._v("商家配送")]),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\n                    ")])]),e("li",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟\n                    ")])])]),e("div",{staticClass:"favorite",on:{click:t.toggleFavorite}},[e("span",{staticClass:"icon-favorite",class:{active:t.favorite}}),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),e("split"),e("div",{staticClass:"bulletin"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),e("div",{staticClass:"content-wrapper border-bottom-1px"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{key:i,staticClass:"support-item border-bottom-1px"},[e("support-ico",{attrs:{size:4,type:t.seller.supports[i].type}}),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[i].description))])],1)}),0):t._e()]),e("split"),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),e("cube-scroll",{staticClass:"pic-wrapper",attrs:{options:t.picScrollOptions}},[e("ul",{staticClass:"pic-list"},t._l(t.seller.pics,function(t,s){return e("li",{key:s,staticClass:"pic-item"},[e("img",{attrs:{src:t,width:"120",height:"90"}})])}),0)])],1),e("split"),e("div",{staticClass:"info"},[e("h1",{staticClass:"title border-bottom-1px"},[t._v("商家信息")]),e("ul",t._l(t.seller.infos,function(s,i){return e("li",{key:i,staticClass:"info-item border-bottom-1px"},[t._v(t._s(s))])}),0)])],1)])},It=[],Yt=e("335a"),Ht="__seller__";function Jt(t,s,e){var i=Yt["a"].get(Ht,{});i[t]||(i[t]={}),i[t][s]=e,Yt["a"].set(Ht,i)}function Ut(t,s,e){var i=Yt["a"].get(Ht,{});return i[t]&&i[t][s]||e}var Wt="favorite",Vt={name:"seller",props:{data:{type:Object,default:function(){return{}}}},data:function(){return{favorite:!1,sellerScrollOptions:{directionLockThreshold:0,click:!1},picScrollOptions:{scrollX:!0,directionLockThreshold:0,stopPropagation:!0}}},created:function(){this.favorite=Ut(this.seller.id,Wt,!1)},computed:{seller:function(){return this.data.seller||{}},favoriteText:function(){return this.favorite?"已收藏":"收藏"}},methods:{toggleFavorite:function(){this.favorite=!this.favorite,Jt(this.seller.id,Wt,this.favorite)}},components:{Star:ht,Split:yt,SupportIco:m}},Xt=Vt,qt=(e("093f"),Object(h["a"])(Xt,At,It,!1,null,"7738191d",null)),Gt=qt.exports,Kt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tab"},[e("cube-tab-bar",{ref:"tabBar",staticClass:"border-bottom-1px",attrs:{showSlider:!0,data:t.tabs,useTransition:!1},model:{value:t.selectedLabel,callback:function(s){t.selectedLabel=s},expression:"selectedLabel"}}),e("div",{staticClass:"slide-wrapper"},[e("cube-slide",{ref:"slide",attrs:{loop:!1,"auto-play":!1,"show-dots":!1,"initial-index":t.index,options:t.slideOptions},on:{change:t.onChange,scroll:t.onScroll}},t._l(t.tabs,function(t,s){return e("cube-slide-item",{key:s},[e(t.component,{ref:"component",refInFor:!0,tag:"component",attrs:{data:t.data}})],1)}),1)],1)],1)},Qt=[],Zt=(e("20d6"),{name:"tab",props:{tabs:{type:Array,default:function(){return[]}},initialIndex:{type:Number,default:0}},data:function(){return{index:this.initialIndex,slideOptions:{listenScroll:!0,probeType:3,directionLockThreshold:0}}},computed:{selectedLabel:{get:function(){return this.tabs[this.index].label},set:function(t){this.index=this.tabs.findIndex(function(s){return s.label===t})}}},mounted:function(){this.onChange(this.index)},methods:{onChange:function(t){this.index=t;var s=this.$refs.component[t];s.fetch&&s.fetch()},onScroll:function(t){var s=this.$refs.tabBar.$el.clientWidth,e=this.$refs.slide.slide.scrollerWidth,i=-t.x/e*s;this.$refs.tabBar.setSliderTransform(i)}}}),ts=Zt,ss=(e("1595"),Object(h["a"])(ts,Kt,Qt,!1,null,"f7879d96",null)),es=ss.exports,is={name:"app",data:function(){return{seller:{id:r.a.parse(location.search).id}}},computed:{tabs:function(){return[{label:"商品",component:et,data:{seller:this.seller}},{label:"评论",component:Mt,data:{seller:this.seller}},{label:"商家",component:Gt,data:{seller:this.seller}}]}},created:function(){this._getSeller()},methods:{_getSeller:function(){var t=this;T({id:this.seller.id}).then(function(s){t.seller=Object.assign({},t.seller,s)})}},components:{VHeader:y,Tab:es}},as=is,ns=(e("370a"),Object(h["a"])(as,a,n,!1,null,"b4b958ec",null)),os=ns.exports,rs=(e("df49"),e("2696")),cs=e("7c8a"),ls=e("031d"),us=e("1cc1"),ds=e("0679"),ps=e("2799"),fs=e("36b6"),hs=e("0f85");i["a"].use(rs["a"]),i["a"].use(cs["a"]),i["a"].use(ls["a"]),i["a"].use(us["a"]),i["a"].use(ds["a"]),i["a"].use(ps["a"]),i["a"].use(fs["a"]),i["a"].use(hs["a"]);var vs=e("df9a"),ms=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"header-detail",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault()}}},[e("div",{staticClass:"detail-wrapper clear-fix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),e("div",{staticClass:"text"},[t._v("优惠信息")]),e("div",{staticClass:"line"})]),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{key:s.id,staticClass:"support-item"},[e("support-ico",{attrs:{size:2,type:t.seller.supports[i].type}}),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[i].description))])],1)}),0):t._e(),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),e("div",{staticClass:"text"},[t._v("商家公告")]),e("div",{staticClass:"line"})]),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),e("div",{staticClass:"detail-close",on:{click:t.hide}},[e("i",{staticClass:"icon-close"})])])])},Cs=[],_s="show",bs="hide",ys={data:function(){return{visible:!1}},methods:{show:function(){this.visible=!0,this.$emit(_s)},hide:function(){this.visible=!1,this.$emit(bs)}}},gs={name:"header-detail",mixins:[ys],props:{seller:{type:Object,default:function(){return{}}}},components:{SupportIco:m,Star:ht}},ws=gs,xs=(e("61cf"),Object(h["a"])(ws,ms,Cs,!1,null,"54bccb5f",null)),ks=xs.exports,Ss=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade"}},[e("cube-popup",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],ref:"popup",attrs:{"mask-closable":!0,"z-index":90,position:"bottom",type:"shop-car-list"},on:{"mask-click":t.maskClick}},[e("transition",{attrs:{name:"move"},on:{"after-leave":t.onLeave}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}]},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),e("cube-scroll",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{key:s.name,staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),e("div",{staticClass:"car-control-wrapper"},[e("car-control",{attrs:{food:s},on:{add:t.onAdd}})],1)])}),0)])],1)])],1)],1)},$s=[],Os="leave",Ts="add",Ps="show",js={mixins:[ys],name:"shop-car-list",props:{selectFoods:{type:Array,default:function(){return[]}}},created:function(){var t=this;this.$on(Ps,function(){t.$nextTick(function(){t.$refs.listContent.refresh()})})},methods:{onLeave:function(){this.$emit(Os)},maskClick:function(){this.hide()},onAdd:function(t){this.$emit(Ts,t)},empty:function(){var t=this;this.$createDialog({type:"confirm",content:"确认清空购物车吗？",$events:{confirm:function(){t.selectFoods.forEach(function(t){t.count=0}),t.hide()}}}).show()}},components:{carControl:Q}},Fs=js,Ns=(e("c44f"),Object(h["a"])(Fs,Ss,$s,!1,null,"47aac0ec",null)),Es=Ns.exports,Ls=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"shop-car-sticky"},[e("shop-car",{ref:"shopCar",attrs:{selectFoods:t.selectFoods,"delivery-price":t.deliveryPrice,"min-price":t.minPrice,fold:t.fold,sticky:!0}})],1)},Ds=[],Bs={mixins:[ys],name:"shop-car-sticky",props:{selectFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0},fold:{type:Boolean,default:!0},list:{type:Object,default:function(){return{}}}},methods:{drop:function(t){this.$refs.shopCar.drop(t)}},components:{ShopCar:U}},Rs=Bs,zs=(e("4491"),Object(h["a"])(Rs,Ls,Ds,!1,null,"59f30d04",null)),Ms=zs.exports,As=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"},on:{"after-leave":t.afterLeave}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"food"},[e("cube-scroll",{ref:"scroll",attrs:{data:t.computedRatings}},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image}}),e("div",{staticClass:"back",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),e("div",{staticClass:"car-control-wrapper"},[e("car-control",{attrs:{food:t.food},on:{add:t.addFood}})],1),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count,expression:"!food.count"}],staticClass:"buy",on:{click:t.addFirst}},[t._v("加入购物车")])])],1),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商品信息")]),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),e("split"),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),e("rating-select",{attrs:{ratings:t.ratings,onlyContent:t.onlyContent,selectType:t.selectType,desc:t.desc},on:{select:t.onSelect,toggle:t.onToggle}}),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.computedRatings&&t.computedRatings.length,expression:"computedRatings && computedRatings.length"}]},t._l(t.computedRatings,function(s,i){return e("li",{key:i,staticClass:"rating-item border-bottom-1px"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),e("img",{staticClass:"avatar",attrs:{width:"12",height:"12",src:s.avatar}})]),e("div",{staticClass:"time"},[t._v(t._s(t.format(s.rateTime)))]),e("p",{staticClass:"text"},[e("span",{class:{icon_thumb_up:0===s.rateType,icon_thumb_down:1===s.rateType}}),t._v("\n                                "+t._s(s.text)+"\n                            ")])])}),0),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.computedRatings||!t.computedRatings.length,expression:"!computedRatings || !computedRatings.length"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)],1)])],1)])},Is=[],Ys="show",Hs="leave",Js="add",Us={mixins:[ys,Dt],name:"food",props:{food:{type:Object}},data:function(){return{desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},computed:{ratings:function(){return this.food.ratings}},created:function(){var t=this;this.$on(Ys,function(){t.$nextTick(function(){t.$refs.scroll.refresh()})})},methods:{afterLeave:function(){this.$emit(Hs)},addFirst:function(t){this.$set(this.food,"count",1),this.$emit(Js,t.target)},addFood:function(t){this.$emit(Js,t)},format:function(t){return wt()(t).format("YYYY-MM-DD hh:mm")}},components:{Split:yt,CarControl:Q,RatingSelect:Et}},Ws=Us,Vs=(e("bee2"),Object(h["a"])(Ws,As,Is,!1,null,"0017ed3a",null)),Xs=Vs.exports;Object(vs["a"])(i["a"],ks),Object(vs["a"])(i["a"],Es),Object(vs["a"])(i["a"],Ms),Object(vs["a"])(i["a"],Xs);e("f867");i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(os)}}).$mount("#app")},5717:function(t,s,e){"use strict";var i=e("080e"),a=e.n(i);a.a},"5cb5":function(t,s,e){},"5d9c":function(t,s,e){var i={"./zh-cn":"5c3a","./zh-cn.js":"5c3a"};function a(t){var s=n(t);return e(s)}function n(t){var s=i[t];if(!(s+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s}a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id="5d9c"},"608e":function(t,s,e){},"61cf":function(t,s,e){"use strict";var i=e("5cb5"),a=e.n(i);a.a},"66c2":function(t,s,e){},"690b":function(t,s,e){"use strict";var i=e("66c2"),a=e.n(i);a.a},"6b5e":function(t,s,e){"use strict";var i=e("36b2"),a=e.n(i);a.a},"79ca":function(t,s,e){},8225:function(t,s,e){},"83a5":function(t,s,e){},"8d46":function(t,s,e){},9978:function(t,s,e){},"9c2a":function(t,s,e){},b4f8:function(t,s,e){},bdec:function(t,s,e){},bee2:function(t,s,e){"use strict";var i=e("8225"),a=e.n(i);a.a},c44f:function(t,s,e){"use strict";var i=e("d0c6"),a=e.n(i);a.a},d0c6:function(t,s,e){},d147:function(t,s,e){"use strict";var i=e("83a5"),a=e.n(i);a.a},e506:function(t,s,e){"use strict";var i=e("608e"),a=e.n(i);a.a},f867:function(t,s,e){}});
//# sourceMappingURL=app.e70c9cd9.js.map