<template>
  <div class="not-found">
    <img src="@/assets/404.jpg"
         alt="">
    <h1>404</h1>
    <van-button round
                type="info"
                @click="$router.push('/home')">返回首页</van-button>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  components: {
    [Button.name]: Button
  }
}
</script>

<style scoped lang='scss'>
.not-found {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 0 50px;
  img {
    width: 100%;
  }
  h1 {
    font-size: 180px;
    color: #000;
    margin: 50px 0;
  }
  .van-button--info {
    padding: 0 30px;
  }
}
</style>
