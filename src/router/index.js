import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("../views/Home/Home")
const Login = () => import('../views/Login/Login')
const Welcome = () => import('../views/Home/children/Welcome')
const Users = () => import('../views/Home/children/Users/Users')
const Permissions  = () => import('../views/Home/children/ permissions/Rights')
const Roles = () => import('../views/Home/children/ permissions/Roles')
const Add = () => import('../views/Home/children/goods/Add')
const Cate = () => import('../views/Home/children/goods/Cate')
const List = () => import('../views/Home/children/goods/List')
const params = () => import('../views/Home/children/goods/params')
const Order = () => import('../views/Home/children/order/Order' )
const Report = () => import('../views/Home/children/report/Report')
Vue.use(VueRouter)

const routes = [
  {
    path: '/', redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/Home',
    //name 属性作为路由唯一标识，定向获取
    name: '',
    component: Home,
    redirect: '/welcome',
    children:[
        {
      path:'/welcome',
      component:Welcome
    },
      {
        path: '/users',
        component:Users
      },
      {
        path: '/roles',
        component:Roles
      },
      {
        path: '/rights',
        component:Permissions
      },
      {
        path: '/goods/add',
        component:Add
      },
      {
          path: '/categories',
        component:Cate
      },
      {
        path: '/goods',
        component:List
      },
      {
        path: '/params',
        component:params
      },
      {
        path:'/orders',
        component:Order
      },
      {
        path:'/reports',
        component:Report

      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
