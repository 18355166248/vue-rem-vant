<template>
  <div id="app">
    <div v-if="!network"
         class="no-net">
      <div class="common-position no-net-box">
        <img src="@/assets/no-net.png"
             alt="">
        <h3>网络竟然崩溃了</h3>
        <div class="no-wrong">别紧张, 试试看刷新页面~</div>
        <button class="refresh"
                @click="onRefresh">刷新</button>
      </div>
    </div>
    <div v-else>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive">
        </router-view>
      </keep-alive>

      <router-view v-if="!$route.meta.keepAlive">
      </router-view>

    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { refreshCurrentRoute } from 'common/js/util'
export default {
  name: 'App',
  computed: {
    ...mapState(['network'])
  },
  methods: {
    onRefresh () {
      this.STOREChangeNetwork(true)
      refreshCurrentRoute()
    },
    ...mapMutations(['STOREChangeNetwork'])
  }
}
</script>

<style lang="scss" scoped>
#app {
  text-align: center;
  .no-net {
    background-color: #fff;
    width: 100%;
    height: 100%;
    position: absolute;
    font-size: 30px;
    .no-net-box {
      width: 100%;
      height: 400px;
      h3 {
        font: 400 30px "MicroSoft YaHei";
        padding: 20px 0;
      }
      .no-wrong {
        font-size: 20px;
        color: #b3afaf;
        margin-bottom: 30px;
      }
      .refresh {
        font-weight: 400;
        font-size: 25px;
        display: inline-block;
        width: 150px;
        height: 40px;
        line-height: 40px;
        border-radius: 30px;
        margin-top: 20px;
        border: 1px solid #333;
        background-color: #fff;
      }
      .refresh:active {
        background-color: #f1f0f0;
      }
    }
  }
}
</style>
