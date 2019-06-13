import router from '@/router'

/**
 * 刷新当前路由
 */
export const refreshCurrentRoute = () => {
  const { fullPath } = router.currentRoute
  router.replace({
    name: 'refresh',
    params: {
      redirect: fullPath
    }
  })
}
