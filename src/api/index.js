import { get } from './helpers'
let baseUrl = './'
if (process.env.NODE_ENV === 'production') {
    baseUrl = '/vue-sell/'
}
const getSeller = get(baseUrl + 'api/seller')
const getGoods = get(baseUrl + 'api/goods')
const getRatings = get(baseUrl + 'api/ratings')
export {
    getSeller,
    getGoods,
    getRatings
}
