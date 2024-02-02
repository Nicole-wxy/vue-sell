import { get } from './helpers'
let getUrl = './'
if (process.env.NODE_ENV === 'production') {
  getUrl = '/vue-sell'
}
const getSeller = get(`${getUrl}api/seller`)
const getGoods = get(`${getUrl}api/goods`)
const getRatings = get(`${getUrl}api/ratings`)
export { getSeller, getGoods, getRatings }
