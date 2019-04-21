<template>
  <div>
    登录
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data () {
    return {

    }
  },
  created () {
    Toast({
      message: '开始了',
      duration: 0,
      forbidClick: true
    })
  }
}
</script>

<style scoped lang='scss'>
</style>
