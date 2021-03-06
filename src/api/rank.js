import axios from 'axios'
import {
  apikey,
  doubanPrefix,
  rankMap
} from 'common/js/config'

export default function getRankData(index) {
  return axios.get(doubanPrefix + rankMap[index], {
    params: {
      apikey: apikey,
    }
  })
}
