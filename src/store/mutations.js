import * as types from './mutation-types'
const mutations = {
  [types.SET_RESET_ACCOUNT](state, userName) {
    state.resetAccount = userName
  },
  [types.SET_CURRENT_USER](state, userName) {
    state.currentUser = userName
  },
  [types.SET_CURRENT_MOVIE](state, movie) {
    state.currentMovie = movie
  },
  [types.SET_CURRENT_STAR](state, star) {
    state.currentStar = star
  },
  [types.SET_KEYWORDS](state, keywords) {
    state.keywords = keywords
  },
  [types.SET_CURRENT_COMMENT](state, comment) {
    state.currentComment = comment
  },
  [types.SET_CURRENT_GUEST](state, guest) {
    state.currentGuest = guest
  },
  [types.SET_COUNT_CATE](state, cate) {
    state.countCate = cate
  },
  [types.SET_LIST_OWNER](state, owner) {
    state.listOwner = owner
  }
}

export default mutations
