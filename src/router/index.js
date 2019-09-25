import Vue from 'vue';
import Router from 'vue-router';
import Post from '@/components/pages/post';
import BoardList from '@/components/pages/board-list'
import Login from '@/components/pages/login'
import SignUp from '@/components/pages/signup'
import PostCreate from '@/components/pages/post-create'
import MyStatus from '@/components/pages/my-status'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Post',
      component: Post
    },
    {
      path: '/post/:num',
      name: 'Post',
      component: Post
    },
    {
      path: '/list/:category',
      name: 'BoardList',
      component: BoardList
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/create/post',
      name: 'PostCreate',
      component: PostCreate
    },
    {
      path: '/info',
      name: 'MyStatus',
      component: MyStatus
    }
  ]
})
