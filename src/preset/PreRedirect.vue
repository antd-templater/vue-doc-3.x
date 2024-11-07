<template>
  <div class="redirect-route-container">
    <div class="redirect-route-card">
      <div class="card-header">
        即将前往, 请稍后...
      </div>
      <div class="card-content">
        {{ redirect }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { onMounted } from 'vue'

defineOptions({ name: 'PreRedirect' })

const redirect = computed(() => {
  const host = window.location.host
  const search = window.location.search.slice(1)
  const domain = /^(.+\.)?atomgit\..+$/i.test(host) ? 'atomgit' : 'github'
  const regex = /\$\{domain\}/gi

  const route = search.includes('${domain}') ? search.replace(regex, domain) : search
  const url = route.replaceAll('atomgit.io', 'atomgit.net')

  return !(/^https?:\/\//).test(url)
    ? `https://${url}`
    : url
})

onMounted(() => {
  setTimeout(() => window.location.replace(redirect.value), 500)
})
</script>

<style lang="less" scoped>
.redirect-route-container {
  width: 100%;
  height: calc(100vh - 65px);
  background-color: #f4f5f5;
  box-sizing: border-box;
  position: relative;

  .redirect-route-card {
    width: 88%;
    height: 180px;
    max-width: 750px;
    padding: 30px;
    margin: auto;
    border-radius: 3px;
    background-color: #ffffff;
    box-shadow: 1px 1px 3px 0 rgba(255, 255, 255, 0.35);
    border: 1px solid #e5e6eb;
    position: absolute;
    bottom: 120px;
    right: 0;
    left: 0;
    top: 0;

    .card-header {
      width: 100%;
      height: 48px;
      padding: 0 5px;
      color: #303133;
      font-size: 18px;
      font-weight: bold;
      line-height: 54px;
    }

    .card-content {
      width: 100%;
      min-height: 54px;
      padding: 15px 5px;
      color: #707277;
      font-size: 16px;
      line-height: 1.5;
      font-weight: normal;
      border-bottom: 1px solid #e5e6eb;
      word-break: break-all;
      white-space: normal;
      overflow: hidden;
    }
  }
}
</style>
