import Vue from 'vue'
import Router from 'vue-router'
import HomePage from 'components/home-page/home-page'
import Rank from 'components/rank/rank'
import Login from 'components/login/login'
import Register from 'components/register/register'
import PreReset from 'components/pre-reset/pre-reset'
import ResetPwd from 'components/reset-pwd/reset-pwd'
import UserCenter from 'components/user-center/user-center'
import MovieDetail from 'components/movie-detail/movie-detail'
import StarDetail from 'components/star-detail/star-detail'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: HomePage
    }, {
      path: '/rank',
      component: Rank
    },
    {
      path: '/user/login',
      component: Login
    },
    {
      path: '/user/register',
      component: Register
    },
    {
      path: '/user/preReset',
      component: PreReset
    },
    {
      path: '/user/resetPwd',
      component: ResetPwd
    },
    {
      path: '/userCenter',
      component: UserCenter
    },
    {
      path: '/movieDetail',
      component: MovieDetail
    },
    {
      path: '/starDetail',
      component: StarDetail
    }

  ],

})
