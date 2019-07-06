import { createAPI } from 'cube-ui'
import Vue from 'vue'
import HeaderDetail from 'components/header-detail/header-detail'
import ShopCarList from 'components/shop-car-list/shop-car-list'
import ShopCarSticky from 'components/shop-car-sticky/shop-car-sticky'
import Food from 'components/food/food'
createAPI(Vue, HeaderDetail)
createAPI(Vue, ShopCarList)
createAPI(Vue, ShopCarSticky)
createAPI(Vue, Food)
