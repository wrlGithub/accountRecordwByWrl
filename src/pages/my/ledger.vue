<template>
  <view class="ledger-page">
    <view class="title">账本管理</view>
    <view class="empty">暂无账本</view>
  </view>
</template>

<script lang="ts" setup>
// 账本管理后续可扩展
</script>

<style lang="scss" scoped>
.ledger-page {
  min-height: 100vh;
  background: #f5f6fa;
  padding: 40rpx 24rpx;
}
.title {
  font-size: 36rpx;
  font-weight: bold;
  color: #222;
  margin-bottom: 40rpx;
}
.empty {
  color: #aaa;
  font-size: 28rpx;
  text-align: center;
  margin-top: 120rpx;
}
</style>
