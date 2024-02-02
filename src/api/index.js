import { get } from './helpers'
let getSeller = get('./api/seller')
let getGoods = get('./api/goods')
let getRatings = get('./api/ratings')
if (process.env.NODE_ENV === 'production') {
    getSeller = get('./api/seller.json')
    getGoods = get('./api/goods.json')
    getRatings = get('./api/ratings.json')
}
export {
    getSeller,
    getGoods,
    getRatings
}
