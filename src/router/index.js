import Vue from 'vue';
import Router from 'vue-router';
import Post from '@/components/pages/post';
import BoardList from '@/components/pages/board-list'
import Login from '@/components/pages/login'
import SignUp from '@/components/pages/signup'
import PostCreate from '@/components/pages/post-create'
import StatusBlog from '@/components/pages/status/status-blog'
import StatusPosts from '@/components/pages/status/status-posts'
import StatusMy from '@/components/pages/status/status-my'
import StatusUsers from '@/components/pages/status/status-users'
import StatusCategories from '@/components/pages/status/status-categories'

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
      path: '/info/blog',
      name: 'StatusBlog',
      component: StatusBlog
    },
    {
      path: '/info/my',
      name: 'StatusMy',
      component: StatusMy
    },
    {
      path: '/info/posts',
      name: 'StatusPosts',
      component: StatusPosts
    },
    {
      path: '/info/users',
      name: 'StatusUsers',
      component: StatusUsers
    },
    {
      path: '/info/categories',
      name: 'StatusCategories',
      component: StatusCategories
    },
  ]
})
