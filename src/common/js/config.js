export const apikey = '0b2bdeda43b5688921839c8ecb20399b'
export const doubanPrefix = "/api"

export const localUrl = 'http://localhost:3000/'

export const loginUrl = localUrl + 'user/login'
export const secureQuestionUrl = localUrl + 'user/secureQuestion'
export const checkAnswerUrl = localUrl + 'user/checkAnswer'
export const resetPasswordUrl = localUrl + 'user/resetPassword'
export const registerUrl = localUrl + 'user/register'
export const loadCountDetailUrl = localUrl + 'user/count/load'
export const modifyWhatsUpUrl = localUrl + 'user/modify/whatsup'
export const checkNameUrl = localUrl + 'user/checkName'
export const changeCountUrl = localUrl + 'user/changeCount'
export const searchUserUrl = localUrl + 'search/user'
export const addToCollectionUrl = localUrl + 'collect/add'
export const checkCollectedUrl = localUrl + 'collect/checkCollected'
export const removeCollectionUrl = localUrl + 'collect/remove'
export const loadCollectionUrl = localUrl + 'collect/load'
export const newCommentUrl = localUrl + 'comment/new'
export const loadNewCommentUrl = localUrl + 'comment/load/movie/new'
export const loadHotCommentUrl = localUrl + 'comment/load/movie/hot'
export const loadUserCommentUrl = localUrl + 'comment/load/user'
export const judgeCommentUrl = localUrl + 'comment/judge'
export const recommendCommentUrl = localUrl + 'comment/recommend'
export const queryCountUrl = localUrl + 'comment/count'
export const getGuestDataUrl = localUrl + 'guest/get'

export const rankMap = ['/us_box', '/new_movies', '/weekly']
export const movieDetailUrl = doubanPrefix + '/subject/'
export const starDetailUrl = doubanPrefix + '/celebrity/'

export const SERVER_ERR_NOTICE = "服务器异常"

export const CURRENT_USER_KEY = '__CURRENT_USER__'

export const CURRENT_USER_EXPIRES_TIME = "2d"

export const ERR_OK = 200

export const DEFAULT_SWIPER_OPTIONS = {
  direction: 'vertical',
  slidesPerView: 'auto',
  freeMode: true,
  mousewheel: true,
  observer: true,
  observeParents: true
}

export const LIGHT_PRIMARY_COLOR = "#8BC34A"

export const USEFUL_FLAG = 1
export const USELESS_FLAG = 0

export const COUNT_HANDLE = {
  add: 1,
  remove: -1
}

export const COUNT_CATE = {
  fans: 0,
  subscribe: 1
}
