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
  console.log("6666", getApp().$u); // 如果有内容，说明已注册
});
</script>

<style lang="scss">
@import "uview-plus/index.scss";
@import "@/styles/font.scss";
.uni-app--showtabbar uni-page-wrapper:after {
        // height: 80rpx;
        // height: calc(80rpx + constant(safe-area-inset-bottom));
        // height: calc(80rpx + env(safe-area-inset-bottom));
    }
    uni-tabbar {
        .uni-tabbar { // tab 背景
            // background-color: rgba(57, 181, 74, 0.1)!important; // tab 背景色
            // background-image: linear-gradient(to top, #a80077, #66ff00)!important; // tab 背景图片，也可以是渐变色，背景色和背景图片最多选择一个进行设置
            // .uni-tabbar-border { // tabBar 上边框
            //     background-color: #e54d42!important; // tabBar 上边框的颜色
            // }
            .uni-tabbar__bd { // tabBar 单项
                height: 80px!important;
                .uni-tabbar__icon { // tabBar 图标
                    width: 40px!important;
                    height: 40px!important;
                }
                .uni-tabbar__label { // tabBar 文字
                    font-size: 14px!important;
                    font-family: 'newfont';
                }
            }
        }
        .uni-tabbar~.uni-placeholder {
            height: 80rpx;
        }
    }
</style>
