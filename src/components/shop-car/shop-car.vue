<!-- 购物车以及小球容器 -->
<template>
  <div>
    <div class="shop-car">
      <div class="content" @click="toggleList">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{'highlight':totalCount>0}">
              <i class="icon-shopping_cart" :class="{'highlight':totalCount>0}"></i>
            </div>
            <div class="num" v-show="totalCount>0">
              <bubble :num="totalCount"></bubble>
            </div>
          </div>
          <div class="price" :class="{'highlight':totalPrice>0}">￥{{totalPrice}}</div>
          <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
        </div>
        <div class="content-right">
          <div class="pay" :class="payClass" @click.stop="pay">{{payDesc}}</div>
        </div>
      </div>
      <!-- 定义小球容器 -->
      <div class="ball-container">
        <div v-for="(ball,index) in balls" :key="index">
          <transition @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
            <div v-show="ball.show" class="ball">
              <div class="inner inner-hook"></div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bubble from 'components/bubble/bubble'
// 定义10个小球
const BALL_LEN = 10
const innerClsHook = 'inner-hook'
// 创建小球方法
function createBalls() {
  let ret = []
  for (let i = 0; i < BALL_LEN; i++) {
    ret.push({
      // 小球一开始为false
      show: false
    })
  }
  return ret
}
export default {
  name: 'shop-car',
  props: {
    selectFoods: {
      // 所选的食物
      type: Array,
      default() {
        return []
      }
    },
    deliveryPrice: {
      // 配送费
      type: Number,
      default: 0
    },
    minPrice: {
      // 几元起送
      type: Number,
      default: 0
    },
    fold: {
      type: Boolean,
      default: true
    },
    sticky: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 小球
      // 创建小球
      balls: createBalls(),
      listFold: this.fold
    }
  },
  created() {
    // 存放下落的小球
    this.dropBalls = []
  },
  computed: {
    totalPrice() {
      // 总价
      let total = 0
      this.selectFoods.forEach(food => {
        total += food.price * food.count
      })
      return total
    },
    totalCount() {
      // 总的数量
      let count = 0
      this.selectFoods.forEach(food => {
        count += food.count
      })
      return count
    },
    payDesc() {
      // 几元起送
      if (this.totalPrice === 0) {
        // 没有选食物时
        return `￥${this.minPrice}元起送`
      } else if (this.totalPrice < this.minPrice) {
        // 所选食物未超过起送价时
        let diff = this.minPrice - this.totalPrice
        return `还差${diff}起送`
      } else {
        return `去结算`
      }
    },
    payClass() {
      // 切换pay的class名
      if (!this.totalPrice || this.totalPrice < this.minPrice) {
        return 'no-enough'
      } else {
        return 'enough'
      }
    }
  },
  methods: {
    // 接收car-control添加食品按钮的位置
    // 驱动小球的过渡
    drop(el) {
      for (let i = 0; i < this.balls.length; i++) {
        const ball = this.balls[i]
        if (!ball.show) {
          ball.show = true
          // 把按钮保存在ball对象上
          ball.el = el
          // 存储掉落的小球
          this.dropBalls.push(ball)
          return
        }
      }
    },
    beforeDrop(el) {
      // 拿到最新的小球
      const ball = this.dropBalls[this.dropBalls.length - 1]
      // 获取按钮dom的位置
      const rect = ball.el.getBoundingClientRect()
      // 小球横向运动的距离
      const x = rect.left - 32
      // 小球纵向运动的距离
      const y = -(window.innerHeight - rect.top - 22)
      // el显示出来
      el.style.display = ''
      // y方向的平移
      el.style.transform = el.style.webkitTransform = `translate3d(0, ${y}px, 0)`
      // x方向的平移
      const inner = el.getElementsByClassName(innerClsHook)[0]
      inner.style.transform = inner.style.webkitTransform = `translate3d(${x}px, 0, 0)`
    },
    dropping(el, done) {
      // 触发重绘
      this._reflow = document.body.offsetHeight
      // 归位
      el.style.transform = el.style.webkitTransform = `translate3d(0, 0, 0)`
      const inner = el.getElementsByClassName(innerClsHook)[0]
      inner.style.transform = inner.style.webkitTransform = `translate3d(0, 0, 0)`
      // 监听
      el.addEventListener('transitionend', done)
    },
    afterDrop(el) {
      // 从掉落的小球中取出第一个
      const ball = this.dropBalls.shift()
      if (ball) {
        // 把小球回收起来
        ball.show = false
        el.style.display = 'none'
      }
    },
    toggleList() {
        if (this.listFold) {
          if (!this.totalCount) {
            return
          }
          this.listFold = false
          this._showShopCarList()
          this._showShopCarSticky()
        } else {
          this.listFold = true
          this._hideShopCarList()
        }
      },
    _showShopCarList() {
        this.shopCarListComp = this.shopCarListComp || this.$createShopCarList({
          $props: {
            selectFoods: 'selectFoods'
          },
          $events: {
            hide: () => {
              this.listFold = true
            },
            leave: () => {
              this._hideShopCarSticky()
            },
            add: (el) => {
              this.shopCarStickyComp.drop(el)
            }
          }
        })
        this.shopCarListComp.show()
      },
    _showShopCarSticky() {
        this.shopCarStickyComp = this.shopCarStickyComp || this.$createShopCarSticky({
          $props: {
            selectFoods: 'selectFoods',
            deliveryPrice: 'deliveryPrice',
            minPrice: 'minPrice',
            fold: 'listFold',
            list: this.shopCarListComp
          }
        })
        this.shopCarStickyComp.show()
    },
    _hideShopCarList() {
      const comp = this.sticky ? this.$parent.list : this.shopCarListComp
      comp.hide && comp.hide()
    },
    _hideShopCarSticky() {
      this.shopCarStickyComp.hide()
    },
    pay(e) {
      if (this.totalPrice < this.minPrice) {
        return
      }
      this.$createDialog({
        title: '支付',
        content: `您需要支付共${this.totalPrice}元`
      }).show()
      e.stopPropagation()
    }
  },
  watch: {
    fold(newVal) {
      this.listFold = newVal
    },
    totalCount(newVal) {
      if (!this.listFold && !newVal) {
          this._hideShopCarList()
      }
    }
  },
  components: {
    Bubble
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin'
@import '~common/stylus/variable'

.shop-car
  height: 100%
  .content
    display: flex
    background: $color-background
    color: $color-light-grey
    .content-left
      flex: 1
      .logo-wrapper
        display: inline-block
        width: 50px
        height: 50px
        border-radius: 50%
        position: relative
        top: -10px
        margin: 0 12px
        padding: 6px
        box-sizing: border-box
        background: $color-background
        .logo
          width: 100%
          height: 100%
          border-radius: 50%
          text-align: center
          background: $color-dark-grey
          &.highlight
            background: $color-blue
          .icon-shopping_cart
            line-height: 44px
            font-size: $fontsize-large-xxx
            color: $color-light-grey
            &.highlight
              color: $color-white
        .num
          position: absolute
          top: 0
          right: 0
      .price
        display: inline-block
        vertical-align: top
        margin-top: 12px
        line-height: 24px
        padding-right: 12px
        box-sizing: border-box
        border-right: 1px solid rgba(255, 255, 255, 0.1)
        font-weight: 700
        font-size: $fontsize-large
        &.highlight
          color: $color-white
      .desc
        display: inline-block
        vertical-align: top
        margin: 12px 0 0 12px
        line-height: 24px
        font-size: $fontsize-small-s
    .content-right
      flex: 0 0 105px
      width: 105px
      .pay
        height: 48px
        line-height: 48px
        text-align: center
        font-weight: 700
        font-size: $fontsize-small
        &.not-enough
          background: $color-dark-grey
        &.enough
          background: $color-green
          color: $color-white
  .ball-container
    .ball
      position: fixed
      left: 32px
      bottom: 22px
      z-index: 200
      transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
      .inner
        width: 16px
        height: 16px
        border-radius: 50%
        background: $color-blue
        transition: all 0.4s linear
</style>
