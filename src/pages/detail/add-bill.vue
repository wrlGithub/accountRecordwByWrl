<template>
  <view class="add-bill-page">
    <!-- 状态栏留空 -->
    <view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>
    <!-- 顶部导航栏 -->
    <view class="nav-bar" :style="{ top: statusBarHeight + 'px' }">
      <view class="nav-left" @click="goBack">
        <u-icon name="arrow-left" size="20" color="#333" />
        <text class="back-text">返回</text>
      </view>
      <view class="nav-title">新增账单</view>
      <view class="nav-right"></view>
    </view>

    <!-- 主要内容区域 -->
    <view class="content" :style="{ paddingTop: (24 + 88 + statusBarHeight) + 'rpx' }">
      <!-- 账单类型选择 -->
      <view class="bill-type-section">
        <view class="section-title">账单类型</view>
        <view class="type-tabs">
          <view 
            class="type-tab" 
            :class="{ active: billType === 'expense' }"
            @click="billType = 'expense'"
          >
            支出
          </view>
          <view 
            class="type-tab" 
            :class="{ active: billType === 'income' }"
            @click="billType = 'income'"
          >
            收入
          </view>
        </view>
      </view>

      <!-- 金额输入 -->
      <view class="amount-section">
        <view class="section-title">金额</view>
        <view class="amount-input">
          <text class="currency">¥</text>
          <input 
            class="amount-field" 
            type="digit" 
            v-model="amount"
            placeholder="0.00"
            maxlength="10"
          />
        </view>
      </view>

      <!-- 分类选择 -->
      <view class="category-section">
        <view class="section-title">分类</view>
        <view class="category-grid">
          <view 
            class="category-item" 
            :class="{ active: selectedCategory === item.id }"
            v-for="item in categories" 
            :key="item.id"
            @click="selectedCategory = item.id"
          >
            <image class="category-icon" :src="item.icon" mode="aspectFill" />
            <text class="category-name">{{ item.name }}</text>
          </view>
        </view>
      </view>

      <!-- 日期选择 -->
      <view class="date-section">
        <view class="section-title">日期</view>
        <view class="date-picker" @click="openDatePicker">
          <text class="date-text">{{ selectedDate }}</text>
          <u-icon name="arrow-right" size="16" color="#999" />
        </view>
      </view>

      <!-- 备注输入 -->
      <view class="remark-section">
        <view class="section-title">备注</view>
        <textarea 
          class="remark-input" 
          v-model="remark"
          placeholder="添加备注..."
          maxlength="100"
        />
      </view>

      <!-- 保存按钮 -->
      <view class="save-section">
        <button class="save-btn" @click="saveBill">保存账单</button>
      </view>
    </view>

    <!-- 日期选择器 -->
    <u-datetime-picker
      :show="showDatePicker"
      mode="date"
      :value="selectedDate"
      @confirm="onDateConfirm"
      @close="showDatePicker = false"
    />
  </view>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'

// 响应式数据
const billType = ref('expense') // expense: 支出, income: 收入
const amount = ref('')
const selectedCategory = ref('')
const selectedDate = ref('')
const remark = ref('')
const showDatePicker = ref(false)
const statusBarHeight = ref(0)

// 分类数据
const categories = reactive([
  { id: '1', name: '餐饮', icon: 'https://cdn.uviewui.com/uview/album/2.jpg' },
  { id: '2', name: '交通', icon: 'https://cdn.uviewui.com/uview/album/2.jpg' },
  { id: '3', name: '购物', icon: 'https://cdn.uviewui.com/uview/album/2.jpg' },
  { id: '4', name: '娱乐', icon: 'https://cdn.uviewui.com/uview/album/2.jpg' },
  { id: '5', name: '医疗', icon: 'https://cdn.uviewui.com/uview/album/2.jpg' },
  { id: '6', name: '教育', icon: 'https://cdn.uviewui.com/uview/album/2.jpg' },
  { id: '7', name: '住房', icon: 'https://cdn.uviewui.com/uview/album/2.jpg' },
  { id: '8', name: '其他', icon: 'https://cdn.uviewui.com/uview/album/2.jpg' },
])

// 初始化日期
const initDate = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  selectedDate.value = `${year}-${month}-${day}`
}

// 返回上一页
const goBack = () => {
  uni.navigateBack()
}

// 打开日期选择器
const openDatePicker = () => {
  console.log('打开日期选择器')
  showDatePicker.value = true
}

// 日期确认
const onDateConfirm = (e: any) => {
  console.log('日期选择器确认:', e)
  if (e.value) {
    selectedDate.value = e.value
  }
  showDatePicker.value = false
}

// 保存账单
const saveBill = () => {
  if (!amount.value) {
    uni.showToast({
      title: '请输入金额',
      icon: 'none'
    })
    return
  }
  
  if (!selectedCategory.value) {
    uni.showToast({
      title: '请选择分类',
      icon: 'none'
    })
    return
  }

  // 这里可以调用API保存账单数据
  console.log('保存账单:', {
    type: billType.value,
    amount: amount.value,
    category: selectedCategory.value,
    date: selectedDate.value,
    remark: remark.value
  })

  uni.showToast({
    title: '保存成功',
    icon: 'success'
  })

  // 保存成功后返回上一页
  setTimeout(() => {
    uni.navigateBack()
  }, 1500)
}

// 页面加载时初始化
onMounted(() => {
  initDate()
  // 获取状态栏高度
  const systemInfo = uni.getSystemInfoSync()
  statusBarHeight.value = systemInfo.statusBarHeight || 0
})
</script>

<style lang="scss" scoped>
.add-bill-page {
  min-height: 100vh;
  background: #f5f6fa;
}

.status-bar {
  background: #fff;
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20rpx 24rpx;
  background: #fff;
  border-bottom: 1rpx solid #f0f0f0;
  padding-top: 20rpx;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding-top: 20rpx;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 8rpx;
}

.back-text {
  font-size: 28rpx;
  color: #333;
}

.nav-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
}

.nav-right {
  width: 80rpx;
}

.content {
  padding: 24rpx;
  padding-top: 24rpx;
}

.section-title {
  font-size: 28rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 24rpx;
}

.bill-type-section {
  background: #fff;
  border-radius: 16rpx;
  padding: 24rpx;
  margin-bottom: 24rpx;
}

.type-tabs {
  display: flex;
  gap: 24rpx;
}

.type-tab {
  flex: 1;
  text-align: center;
  padding: 20rpx 0;
  border-radius: 12rpx;
  font-size: 28rpx;
  color: #666;
  background: #f5f6fa;
  transition: all 0.3s;
}

.type-tab.active {
  background: #3d7eff;
  color: #fff;
}

.amount-section {
  background: #fff;
  border-radius: 16rpx;
  padding: 24rpx;
  margin-bottom: 24rpx;
}

.amount-input {
  display: flex;
  align-items: center;
  gap: 16rpx;
}

.currency {
  font-size: 48rpx;
  font-weight: bold;
  color: #333;
}

.amount-field {
  flex: 1;
  font-size: 48rpx;
  font-weight: bold;
  color: #333;
  border: none;
  outline: none;
}

.category-section {
  background: #fff;
  border-radius: 16rpx;
  padding: 24rpx;
  margin-bottom: 24rpx;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24rpx;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12rpx;
  padding: 20rpx 0;
  border-radius: 12rpx;
  transition: all 0.3s;
}

.category-item.active {
  background: #e6f2ff;
}

.category-icon {
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
}

.category-name {
  font-size: 24rpx;
  color: #666;
}

.date-section {
  background: #fff;
  border-radius: 16rpx;
  padding: 24rpx;
  margin-bottom: 24rpx;
}

.date-picker {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20rpx 0;
}

.date-text {
  font-size: 28rpx;
  color: #333;
}

.remark-section {
  background: #fff;
  border-radius: 16rpx;
  padding: 24rpx;
  margin-bottom: 48rpx;
}

.remark-input {
  width: 100%;
  min-height: 40rpx;
  font-size: 28rpx;
  color: #333;
  border: none;
  outline: none;
  resize: none;
}

.save-section {
  padding: 0 24rpx;
}

.save-btn {
  width: 100%;
  height: 88rpx;
  background: #3d7eff;
  color: #fff;
  font-size: 32rpx;
  font-weight: bold;
  border-radius: 44rpx;
  border: none;
  outline: none;
}

.save-btn:active {
  background: #2d6eef;
}
</style>
