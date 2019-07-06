<!-- 购物车弹窗列表 -->
<template>
  <transition name="fade">
    <cube-popup
      v-show="visible"
      :mask-closable="true"
      :z-index="90"
      position="bottom"
      type="shop-car-list"
      @mask-click="maskClick"
      ref="popup"
    >
      <transition name="move" @after-leave="onLeave">
        <div v-show="visible">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="empty">清空</span>
          </div>
          <cube-scroll class="list-content" ref="listContent">
            <ul>
              <li v-for="food in selectFoods" :key="food.name" class="food">
                <span class="name">{{food.name}}</span>
                <div class="price">
                  <span>￥{{food.price*food.count}}</span>
                </div>
                <div class="car-control-wrapper">
                  <car-control @add="onAdd" :food="food"></car-control>
                </div>
              </li>
            </ul>
          </cube-scroll>
        </div>
      </transition>
    </cube-popup>
  </transition>
</template>

<script>
import carControl from 'components/car-control/car-control'
import popupMixin from 'common/mixins/popup'
// 定义事件
const EVENT_LEAVE = 'leave'
const EVENT_ADD = 'add'
const EVENT_SHOW = 'show'
export default {
  mixins: [popupMixin],
  name: 'shop-car-list',
  props: {
    selectFoods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {
    this.$on(EVENT_SHOW, () => {
      this.$nextTick(() => {
        // 重新渲染
        this.$refs.listContent.refresh()
      })
    })
  },
  methods: {
    onLeave() {
      this.$emit(EVENT_LEAVE)
    },
    maskClick() {
      this.hide()
    },
    onAdd(target) {
      this.$emit(EVENT_ADD, target)
    },
    empty() {
      this.$createDialog({
        type: 'confirm',
        content: '确认清空购物车吗？',
        $events: {
          confirm: () => {
            this.selectFoods.forEach((food) => {
              food.count = 0
            })
            this.hide()
          }
        }
      }).show()
    }
  },
  components: {
    carControl
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin'
@import '~common/stylus/variable'

.cube-shop-car-list
  bottom: 48px
  &.fade-enter, &.fade-leave-to
    opacity: 0
  &.fade-enter-active, &.fade-leave-active
    transition: all 0.3s ease-in-out
  .move-enter, .move-leave-to
    transform: translate3d(0, 100%, 0)
  .move-enter-active, .move-leave-active
    transition: all 0.3s ease-in-out
  .list-header
    height: 40px
    line-height: 40px
    padding: 0 18px
    background: $color-background-ssss
    .title
      float: left
      font-size: $fontsize-medium
      color: $color-dark-grey
    .empty
      float: right
      font-size: $fontsize-small
      color: $color-blue
  .list-content
    padding: 0 18px
    max-height: 217px
    overflow: hidden
    background: $color-white
    .food
      position: relative
      padding: 12px 0
      box-sizing: border-box
      .name
        line-height: 24px
        font-size: $fontsize-medium
        color: $color-dark-grey
      .price
        position: absolute
        right: 90px
        bottom: 12px
        line-height: 24px
        font-weight: 700
        font-size: $fontsize-medium
        color: $color-red
      .car-control-wrapper
        position: absolute
        right: 0
        bottom: 6px
</style>
