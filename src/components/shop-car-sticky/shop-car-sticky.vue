<template>
    <div class="shop-car-sticky" v-show="visible">
        <shop-car
        ref="shopCar"
        :selectFoods="selectFoods"
        :delivery-price="deliveryPrice"
        :min-price="minPrice"
        :fold="fold"
        :sticky="true">
        </shop-car>
    </div>
</template>

<script>
import ShopCar from 'components/shop-car/shop-car'
import popupMixin from 'common/mixins/popup'
export default {
    mixins: [popupMixin],
    name: 'shop-car-sticky',
    props: {
        selectFoods: {
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
        list: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        drop(el) {
            this.$refs.shopCar.drop(el)
        }
    },
    components: {
        ShopCar
    }
}
</script>

<style lang="stylus" scoped>
.shop-car-sticky
  position :absolute
  bottom :0
  left :0
  z-index :999
  height :48px
  width :100%
</style>
