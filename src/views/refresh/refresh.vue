<template>
  <div></div>
</template>

<script>
export default {
  beforeRouterEnter (to, from, next) {
    next(vm => {
      console.log(from)
      vm.$router.replace(from.fullPath)
    })
  }
}
</script>
