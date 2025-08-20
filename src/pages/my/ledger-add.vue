<template>
  <view class="ledger-add-page">
    <!-- 顶部：状态栏占位 + 自定义导航 -->
    <view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>
    <view class="nav-bar" :style="{ top: statusBarHeight + 'px' }">
      <view class="nav-left" @click="goBack">
        <u-icon name="arrow-left" size="20" color="#333" />
        <text class="back-text">返回</text>
      </view>
      <view class="nav-title">新增账本</view>
      <view class="nav-right"></view>
    </view>

    <view class="content" :style="{ paddingTop: (24 + 88 + statusBarHeight) + 'rpx' }">
      <view class="form-card">
        <view class="form-item">
          <view class="label">名称</view>
          <input class="input" v-model="name" placeholder="请输入账本名称" maxlength="20" />
        </view>
        <view class="form-item">
          <view class="label">描述</view>
          <textarea class="textarea" v-model="description" placeholder="可填写账本用途..." maxlength="100" />
        </view>
        <view class="form-row">
          <view class="form-item half">
            <view class="label">图标</view>
            <input class="input" v-model="icon" placeholder="如 📒、📊" />
          </view>
          <view class="form-item half">
            <view class="label">颜色</view>
            <input class="input" v-model="color" placeholder="#3D7EFF" />
          </view>
        </view>

        <view class="btn-row">
          <button class="save-btn" @click="saveLedger">保存</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const statusBarHeight = ref(0)
const name = ref('')
const description = ref('')
const icon = ref('📊')
const color = ref('#3D7EFF')

const goBack = () => {
  uni.navigateBack()
}

const saveLedger = () => {
  if (!name.value.trim()) {
    uni.showToast({ title: '请输入名称', icon: 'none' })
    return
  }
  // TODO: 可在此调用后端API保存
  console.log('新增账本', { name: name.value, description: description.value, icon: icon.value, color: color.value })
  uni.showToast({ title: '保存成功', icon: 'success' })
  setTimeout(() => uni.navigateBack(), 1000)
}

onMounted(() => {
  const info = uni.getSystemInfoSync()
  statusBarHeight.value = info.statusBarHeight || 0
})
</script>

<style scoped lang="scss">
.ledger-add-page { min-height: 100vh; background: #f5f6fa; }
.status-bar { background: #fff; position: fixed; top: 0; left: 0; right: 0; z-index: 1000; }
.nav-bar { position: fixed; top: 0; left: 0; right: 0; z-index: 999; display: flex; align-items: center; justify-content: space-between; padding: 20rpx 24rpx; background: #fff; border-bottom: 1rpx solid #f0f0f0; }
.nav-left { display: flex; align-items: center; gap: 8rpx; }
.back-text { font-size: 28rpx; color: #333; }
.nav-title { font-size: 32rpx; font-weight: bold; color: #333; }
.nav-right { width: 80rpx; }
.content { padding: 24rpx; }
.form-card { background: #fff; border-radius: 16rpx; padding: 24rpx; }
.form-item { margin-bottom: 24rpx; }
.label { font-size: 28rpx; color: #333; margin-bottom: 12rpx; }
.input { background: #f7f8fa; border-radius: 12rpx; padding: 20rpx; font-size: 28rpx; }
.textarea { background: #f7f8fa; border-radius: 12rpx; padding: 20rpx; font-size: 28rpx; min-height: 120rpx; }
.form-row { display: flex; gap: 24rpx; }
.half { flex: 1; }
.btn-row { margin-top: 16rpx; }
.save-btn { width: 100%; height: 88rpx; background: #3d7eff; color: #fff; font-size: 32rpx; font-weight: bold; border-radius: 44rpx; border: none; }
.save-btn:active { background: #2d6eef; }
</style>

