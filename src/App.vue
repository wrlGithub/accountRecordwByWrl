<script setup lang="ts">
import { onLaunch, onShow, onHide, onLoad } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
onLoad(() => {
  console.log('6666', getApp().$u); // 如果有内容，说明已注册
}) 
</script>

<style lang="scss">
@import "uview-plus/index.scss";
</style>
