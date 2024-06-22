/*
 * @Author: 3403784285-lucky 147294730+3403784285-lucky@users.noreply.github.com
 * @Date: 2023-11-22 15:07:09
 * @LastEditors: 3403784285-lucky 147294730+3403784285-lucky@users.noreply.github.com
 * @LastEditTime: 2023-12-07 15:32:17
 * @FilePath: \test-vue-big\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/index'
import {useButtonStore} from "../stores";
import {ElMessageBox} from "element-plus";
import {getStatusById} from "@/api/user";



//创建router实例
// 配置路由模式：
// hash模式  createWebHistory 跳转不带#号
// history模式 createWebHashHistory  跳转带#号
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 配置登录和架子
    {
      path: '/user/login',
      component: () => import('@/views/login/LoginPage.vue') //登录页
    },
    {
      path: '/manager-layout',
      component: () => import('@/views/layout/ManagerLayout.vue'),
      meta: { requiredRole: '1' },
      redirect: '/manage/house',
      children: [
        {
          path: '/manage/house',
          component: () => import('@/views/back/HouseManage.vue')
        },
        {
          path: '/manage/user',
          // 详细描述
          component: () => import('@/views/back/IndexLay.vue')
        },
        {
          path: '/manage/preview',
          // 详细描述
          component: () => import('@/views/back/PreviewManage.vue')
        }
      ]
    },
    {
      path: '/pay',
      meta: { requiresAuth:true },
      component: () => import('@/views/pay/IdentifyPay.vue')
    },
    {
      path: '/user',
      component: () => import('@/views/layout/UserLayout.vue'),
      redirect: '/user/preview',
      children: [
        {
          path: '/user/preview',
          component: () => import('@/views/user/UnpayPreview.vue')
        },
        {
          path: '/user/house',
          component: () => import('@/views/user/UserHouse.vue') //我的房源界面
        },
        {
          path: '/user/info',
          component: () => import('@/views/user/UserInfo.vue') //个人资料界面
        },
        {
          path: '/user/password',
          component: () => import('@/views/user/UserPassword.vue') //重置密码页
        }
      ]
    },
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/house/manage',
      meta: { uniqueId: 'home' }, // 添加一个唯一标识符
      children: [
        {
          path: '/house/channel',
          // 详细描述
          component: () => import('@/views/house/HouseChannel.vue'),
          meta: { uniqueId: 'homeChannel' } // 添加一个唯一标识符
        },
        {
          path: '/house/new',
          meta: { uniqueId: 'homeNew' }, // 添加一个唯一标识符

          // 详细描述
          component: () => import('@/views/house/HouseNew.vue')
        },
        {
          path: '/house/second',
          meta: { uniqueId: 'homeSecond',requiresAuth: true }, // 添加一个唯一标识符

          // 详细描述
          component: () => import('@/views/house/HouseSecond.vue')
        },
        {
          path: '/house/declare',
          meta: { uniqueId: 'homeDeclare',
            requiresAuth:true
          }, // 添加一个唯一标识符

          // 详细描述
          component: () => import('@/views/house/HouseDeclare.vue')
        },
        {
          path: '/house/manage',
          meta: { uniqueId: 'homeManage' }, // 添加一个唯一标识符

          // 新房
          component: () => import('@/views/house/HouseManage.vue')
        }
      ]
    }
  ]
})
//放里面和放外面的时机不同
// 登陆访问拦截,默认直接放行
// 如果是false，拦回from的页面；
// 具体路径或是路径对象拦截到对应的地址
// 前置首位
// router.beforeEach((to, from, next) => {
//   //如果没有token，且访问的是非登录页
//   // const userStore = useUserStore()
//   // console.log(userStore.token)

//   // if (userStore.token == '' && to.path !== '/user/login') return '/user/login'
//   if (to.path !== from.path) {
//     location.reload()
//   }
//   next()
// })


//全局前置守卫，在每次导航之前，检查是否需要认证以及用户是否已经登录
//判定身份权限
router.beforeEach(async (to, from, next) => {
  const uerStore = useUserStore();
  const buttonStore = useButtonStore()
  const loggedIn = uerStore.token;
  //const res = await userAllowanceService(userStore.userId)
  const userRole = (await getStatusById(uerStore.userId)).data.data;
  console.log(userRole);
  console.log(loggedIn);
  if ((to.matched.some(record => record.meta.requiresAuth) && !loggedIn) || (!loggedIn && buttonStore.fromButton)) {
    ElMessageBox.confirm('请先登录再进行操作！', '提示', {
      confirmButtonText: '去登录',
      cancelButtonText: '取消',
      type: 'warning',
    }).then(() => {
      router.push('/user/login');
      buttonStore.setFromButton(false);
      // next('/user/login');
    }).catch(() => {
      console.log('用户取消操作');
    });
  } else if (to.matched.some(record => record.meta.requiredRole) && userRole !== to.meta.requiredRole) {
    ElMessage('非管理员不可进入！');
    next({path: '/'}); // 或其他你希望重定向的页面
  } else {
    next();
  }
});
router.afterEach((to, from) => {
  if ((to.path == '/pay' && from.path != '/')) {
    location.reload()
    console.log(to.path + '------' + from.path)
  }
})
export default router;
