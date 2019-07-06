<!-- 商品页 -->
<template>
  <div class="goods">
    <div class="scroll-nav-wrapper">
      <cube-scroll-nav
      :side="true"
      :data="goods"
      :options="scrollOptions"
      v-if="goods.length"
      >
      <!-- 插槽 -->
        <template slot="bar" slot-scope="props">
          <cube-scroll-nav-bar
          direction="vertical"
          :labels="props.labels"
          :txts="barTxts"
          :current="props.current">
          <template slot-scope="props">
            <div class="text">
              <support-ico
              v-if="props.txt.type>1"
              :size=3
              :type="props.txt.type"></support-ico>
              <span>{{props.txt.name}}</span>
              <span class="num" v-if="props.txt.count">
                <bubble :num="props.txt.count"></bubble>
              </span>
            </div>
          </template>
          </cube-scroll-nav-bar>
        </template>
        <cube-scroll-nav-panel
        v-for="good in goods"
        :key="good.name"
        :label="good.name"
        :title="good.name"
        >
        <ul>
            <li v-for="food in good.foods" :key="food.name" class="food-item" @click="selectFood(food)">
                <div class="icon">
                    <img width="57" height="57" :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="car-control-wrapper">
                    <car-control @add="onAdd" :food="food"></car-control>
                  </div>
                </div>
            </li>
        </ul>
        </cube-scroll-nav-panel>
      </cube-scroll-nav>
    </div>
    <div class="shop-car-wrapper">
      <shop-car ref="shopCar"
        :select-foods="selectFoods"
        :delivery-price="seller.deliveryPrice"
        :min-price="seller.minPrice"></shop-car>
    </div>
  </div>
</template>

<script>
import { getGoods } from 'api'
import ShopCar from 'components/shop-car/shop-car'
import CarControl from 'components/car-control/car-control'
import SupportIco from 'components/support-ico/support-ico'
import Bubble from 'components/bubble/bubble'
export default {
  name: 'goods',
  props: {
      data: {
          type: Object,
          default() {
              return {

              }
          }
      }
  },
  data() {
      return {
          goods: [],
          selectedFood: {},
          scrollOptions: {
              click: false,
              directionLockThreshold: 0
          }
      }
  },
  computed: {
    seller() {
      return this.data.seller
    },
    selectFoods() {
      let ret = []
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            ret.push(food)
          }
        })
      })
      return ret
    },
    barTxts() {
      // 自己构造侧边栏的数据
      let ret = []
      this.goods.forEach((good) => {
        const { type, name, foods } = good
        let count = 0
        foods.forEach((food) => {
          count += food.count || 0
        })
        ret.push({
            type,
            name,
            count
        })
      })
      return ret
    }
  },
  methods: {
    selectFood(food) {
      this.selectedFood = food
      this._showFood()
      this._showShopCarSticky()
    },
    fetch() {
      if (!this.fetched) {
        this.fetched = true
        getGoods({
          id: this.seller.id
        }).then((goods) => {
        this.goods = goods
      })
      }
    },
    // 驱动drop方法
    onAdd(el) {
        this.$refs.shopCar.drop(el)
    },
    _showFood() {
      this.foodComp = this.foodComp || this.$createFood({
        $props: {
          food: 'selectedFood'
        },
        $events: {
          leave: () => {
            this._hideShopCarList()
          },
          add: (el) => {
            this.shopCarStickyComp.drop(el)
          }
        }
      })
      this.foodComp.show()
    },
    _showShopCarSticky() {
      this.shopCarStickyComp = this.shopCarStickyComp || this.$createShopCarSticky({
        $props: {
          selectFoods: 'selectFoods',
          deliveryPrice: this.seller.deliveryPrice,
          minPrice: this.seller.minPrice,
          fold: true
        }
      })
      this.shopCarStickyComp.show()
    },
    _hideShopCarList() {
      this.shopCarStickyComp.hide()
    }
  },
  components: {
    ShopCar,
    CarControl,
    SupportIco,
    Bubble
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/mixin"
  @import "~common/stylus/variable"
.goods
    position: relative
    text-align: left
    height: 100%
    .scroll-nav-wrapper
      position :absolute
      width :100%
      top :0
      left :0
      bottom :48px
    >>> .cube-scroll-nav-bar
      width :80px
      white-space :normal
      overflow :hidden
    >>> .cube-scroll-nav-bar-item
      padding :0 12px
      height :54px
      display :flex
      align-items :center
      line-height :14px
      font-size :$fontsize-small
      border-bottom :1px solid $color-row-line
      background :$color-background-ssss
      .text
        flex: 1
        position: relative
      .num
        position: absolute
        right: -8px
        top: -10px
      .support-ico
        display: inline-block
        vertical-align: top
        margin-right: 4px
    >>> .cube-scroll-nav-bar-item_active
      background :$color-white
      color :$color-dark-grey
    >>> .cube-scroll-nav-panel-title
      height :26px
      padding-left :14px
      border-left :2px solid $color-col-line
      font-size :$fontsize-small
      color: $color-grey
      line-height :26px
      background :$color-background-ssss
    .food-item
      display :flex
      margin :18px
      padding-bottom :18px
      border-bottom :1px solid $color-row-line
      position :relative
      &:last-child
        border-bottom :none
        margin-bottom :0
      .icon
        flex :0 0 57px
        margin-right :10px
      .content
        flex :1
        .name
          padding :2px 0 8px 0
          font-size: $fontsize-medium
          line-height :14px
          color: $color-dark-grey
        .desc, .extra
          font-size :$fontsize-small-s
          line-height :10px
          color: $color-light-grey
        .desc
          margin-bottom: 8px
        .extra
          .count
            margin-right :12px
        .price
          font-weight :normal/700
          line-height :24px
          .now
            font-size :(20px/28px)/2px
            color: $color-red
            margin-right 8px
          .old
            text-decoration: line-through
            font-size: $fontsize-small-s
            color: $color-light-grey
        .car-control-wrapper
          position: absolute
          right: 0
          bottom: 12px
    .shop-car-wrapper
      position :absolute
      left :0
      bottom :0
      z-index :50
      width :100%
      height :48px
</style>
