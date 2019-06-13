<script>
export default {
  name: 'refresh',
  // 在路由进入refresh前立即返回原页面，从而达到刷新原页面的一个效果
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$router.replace({
        path: to.params.redirect
      })
    })
  },
  // 渲染一个空内容
  render (h) {
    return h()
  }
}
</script>
