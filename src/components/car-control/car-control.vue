<!-- 控制购物车添加 减少食物 -->
<template>
    <div class="car-control">
        <transition name="move">
            <div class="car-decrease" v-show="food.count>0" @click.stop="decrease">
                <span class="inner icon-remove_circle_outline"></span>
            </div>
        </transition>
        <div class="car-count" v-show="food.count>0">{{food.count}}</div>
        <div class="car-add icon-add_circle" @click.stop="add"></div>
    </div>
</template>

<script>
// 定义事件
const EVENT_ADD = 'add'
export default {
    name: 'car-control',
    props: {
        food: {
            type: Object
        }
    },
    methods: {
        add(event) {
            // 加入购物车
            if (!this.food.count) {
                // 添加count属性
                this.$set(this.food, 'count', 1)
            } else {
                this.food.count++
            }
            // 触发当前实例上的事件。附加参数都会传给监听器回调
            // 派发事件出去
            // event.target拿到点击的按钮
            this.$emit(EVENT_ADD, event.target)
        },
        decrease() {
            // 移除购物车
            if (this.food.count) {
                // 当数量大于零减减
                this.food.count--
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
 @import "~common/stylus/variable"
   .car-control
     display :flex
     align-items :center
    .car-decrease
      display: inline-block
      padding: 6px
      opacity: 1
      .inner
        display: inline-block
        line-height: 24px
        font-size: $fontsize-large-xxx
        color: $color-blue
        transition: all 0.4s linear
        transform: rotate(0)
      &.move-enter-active, &.move-leave-active
        transition: all 0.4s linear
      &.move-enter, &.move-leave-to
        opacity: 0
        transform: translate3d(24px, 0, 0)
        .inner
          transform: rotate(180deg)
    .car-count
      width: 12px
      line-height: 24px
      text-align: center
      font-size: $fontsize-small-s
      color: $color-grey
    .car-add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: $fontsize-large-xxx
      color: $color-blue
</style>
