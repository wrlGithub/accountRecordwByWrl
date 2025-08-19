<template>
  <view class="my-page">
    <!-- 顶部悬浮卡片 -->
    <view class="profile-card">
      <image class="avatar" src="https://cdn.uviewui.com/uview/album/1.jpg" mode="aspectFill" />
      <view class="info">
        <view class="name">Charon</view>
        <view class="email">zhangsan@example.com</view>
        <view class="stats">
          <view class="stat-item">记账天数 <text class="stat-num">123</text></view>
          <view class="stat-item">连登天数 <text class="stat-num">45</text></view>
          <view class="stat-item">记账笔数 <text class="stat-num">678</text></view>
        </view>
      </view>
    </view>

    <!-- 功能item列表 -->
    <view class="item-list">
      <view class="item" @click="goLedger">
        <u-icon name="order" size="22" color="#3D7EFF" />
        <text class="item-text">账本管理</text>
      </view>
      <view class="item">
        <u-icon name="phone" size="22" color="#3D7EFF" />
        <text class="item-text">绑定手机</text>
      </view>
      <view class="item">
        <u-icon name="weixin-fill" size="22" color="#07C160" />
        <text class="item-text">关注公众号</text>
      </view>
      <view class="item">
        <u-icon name="kefu-ermai" size="22" color="#FF9900" />
        <text class="item-text">联系客服</text>
      </view>
      <view class="item">
        <u-icon name="share-square" size="22" color="#34B7F1" />
        <text class="item-text">推荐给好友</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
const goLedger = () => {
  uni.navigateTo({ url: '/pages/my/ledger' })
}
</script>

<style lang="scss" scoped>
.my-page {
  min-height: 100vh;
  background: #f5f6fa;
  padding: 0 16rpx;
}
.profile-card {
  position: relative;
  top: 0rpx;
  margin-bottom: 32rpx;
  background: #f78f10;
  border-radius: 24rpx;
  box-shadow: 0 4rpx 24rpx rgba(61,126,255,0.08);
  display: flex;
  align-items: center;
  padding: 32rpx 24rpx 24rpx 24rpx;
  z-index: 10;
}
.avatar {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  margin-right: 32rpx;
  border: 1rpx solid #e9ecf2;
}
.info {
  flex: 1;
}
.name {
  font-size: 30rpx;
  font-weight: bold;
  color: #222;
}
.email {
  font-size: 24rpx;
  color: #3f3e3e;
  margin: 8rpx 0 16rpx 0;
}
.stats {
  display: flex;
  gap: 32rpx;
}
.stat-item {
  font-size: 24rpx;
  color: #383737;
}
.stat-num {
  color: #3D7EFF;
  font-weight: bold;
  margin-left: 8rpx;
}
.item-list {
  background: #fff;
  border-radius: 24rpx;
  box-shadow: 0 2rpx 12rpx rgba(61,126,255,0.04);
  padding: 8rpx 0;
}
.item {
  display: flex;
  align-items: center;
  padding: 32rpx 24rpx;
  border-bottom: 1rpx solid #f0f0f0;
}
.item:last-child {
  border-bottom: none;
}
.item-text {
  margin-left: 24rpx;
  font-size: 30rpx;
  color: #222;
}
</style>