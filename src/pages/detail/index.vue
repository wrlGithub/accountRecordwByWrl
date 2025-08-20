<template>
  <view class="detail-page">
    <!-- 上半部分 蓝色背景，固定顶部 -->
    <view class="top-section-fixed">
      <view class="top-section">
        <!-- 第一行：账本和切换 -->
        <view class="book-row-wrap">
          <view class="book-row" @click="showLedgerPicker = true">
            <view class="book-name">{{ selectedLedger.name }}</view>
            <u-icon
              name="arrow-down"
              size="18"
              color="#fff"
              class="switch-icon"
            />
          </view>
          <view class="add-bill-btn" @click="goToAddBill">+新增账单</view>
        </view>
        <!-- 第二行：icon和设置 -->
        <view class="row icon-row">
          <view>
            <!-- <u-icon
              name="setting-fill"
              size="16"
              color="#fff"
              class="setting-icon"
            />
            <view class="icon-label">设置</view> -->
          </view>
          <view class="icon-group">
            <view class="icon-item">
              <u-icon name="rmb-circle" size="16" color="#fff" />
              <view class="icon-label">资金</view>
            </view>
            <view class="icon-item">
              <u-icon name="calendar" size="16" color="#fff" />
              <view class="icon-label">日历</view>
            </view>
            <view class="icon-item">
              <u-icon name="total" size="16" color="#fff" />
              <view class="icon-label">报表</view>
            </view>
          </view>
        </view>
        <!-- 第三行：本月统计 -->
        <view class="row stat-row">
          <view class="stat-item">
            <view class="stat-label">本月收入</view>
            <view class="stat-value income">+8888.00</view>
          </view>
          <view class="stat-item">
            <view class="stat-label">本月结余</view>
            <view class="stat-value balance">6666.00</view>
          </view>
          <view class="stat-item">
            <view class="stat-label">本月支出</view>
            <view class="stat-value expense">-2222.00</view>
          </view>
        </view>
      </view>
    </view>

    <!-- 下半部分 滚动区域 -->
    <scroll-view class="bottom-section-scroll" scroll-y>
      <view class="bottom-section">
        <!-- 搜索账单 -->
        <view class="search-bar">
          <up-input
            placeholder="搜索账单"
            :show-action="false"
            bg-color="#f5f6fa"
          />
        </view>
        <!-- 账单item列表 -->
        <view class="bill-list">
          <view class="bill-item">
            <view class="bill-left">
              <view class="bill-date">2024-06-20</view>
              <view class="bill-week">周四</view>
              <view class="bill-cat">
                <image
                  class="bill-avatar"
                  src="https://cdn.uviewui.com/uview/album/2.jpg"
                  mode="aspectFill"
                />
                <view class="bill-type">餐饮</view>
              </view>
            </view>
            <view class="bill-right">
              <view class="bill-row"
                ><text class="label">收</text
                ><text class="income">+100.00</text></view
              >
              <view class="bill-row"
                ><text class="label">支</text
                ><text class="expense">-50.00</text></view
              >
              <view class="bill-row"
                ><text class="label">余</text
                ><text class="balance">50.00</text></view
              >
            </view>
          </view>
          <view class="bill-item">
            <view class="bill-left">
              <view class="bill-date">2024-06-20</view>
              <view class="bill-week">周四</view>
              <view class="bill-cat">
                <image
                  class="bill-avatar"
                  src="https://cdn.uviewui.com/uview/album/2.jpg"
                  mode="aspectFill"
                />
                <view class="bill-type">餐饮</view>
              </view>
            </view>
            <view class="bill-right">
              <view class="bill-row"
                ><text class="label">收</text
                ><text class="income">+100.00</text></view
              >
              <view class="bill-row"
                ><text class="label">支</text
                ><text class="expense">-50.00</text></view
              >
              <view class="bill-row"
                ><text class="label">余</text
                ><text class="balance">50.00</text></view
              >
            </view>
          </view>
          <view class="bill-item">
            <view class="bill-left">
              <view class="bill-date">2024-06-20</view>
              <view class="bill-week">周四</view>
              <view class="bill-cat">
                <image
                  class="bill-avatar"
                  src="https://cdn.uviewui.com/uview/album/2.jpg"
                  mode="aspectFill"
                />
                <view class="bill-type">餐饮</view>
              </view>
            </view>
            <view class="bill-right">
              <view class="bill-row"
                ><text class="label">收</text
                ><text class="income">+100.00</text></view
              >
              <view class="bill-row"
                ><text class="label">支</text
                ><text class="expense">-50.00</text></view
              >
              <view class="bill-row"
                ><text class="label">余</text
                ><text class="balance">50.00</text></view
              >
            </view>
          </view>
          <view class="bill-item">
            <view class="bill-left">
              <view class="bill-date">2024-06-20</view>
              <view class="bill-week">周四</view>
              <view class="bill-cat">
                <image
                  class="bill-avatar"
                  src="https://cdn.uviewui.com/uview/album/2.jpg"
                  mode="aspectFill"
                />
                <view class="bill-type">餐饮</view>
              </view>
            </view>
            <view class="bill-right">
              <view class="bill-row"
                ><text class="label">收</text
                ><text class="income">+100.00</text></view
              >
              <view class="bill-row"
                ><text class="label">支</text
                ><text class="expense">-50.00</text></view
              >
              <view class="bill-row"
                ><text class="label">余</text
                ><text class="balance">50.00</text></view
              >
            </view>
          </view>
          <view class="bill-item">
            <view class="bill-left">
              <view class="bill-date">2024-06-20</view>
              <view class="bill-week">周四</view>
              <view class="bill-cat">
                <image
                  class="bill-avatar"
                  src="https://cdn.uviewui.com/uview/album/2.jpg"
                  mode="aspectFill"
                />
                <view class="bill-type">餐饮</view>
              </view>
            </view>
            <view class="bill-right">
              <view class="bill-row"
                ><text class="label">收</text
                ><text class="income">+100.00</text></view
              >
              <view class="bill-row"
                ><text class="label">支</text
                ><text class="expense">-50.00</text></view
              >
              <view class="bill-row"
                ><text class="label">余</text
                ><text class="balance">50.00</text></view
              >
            </view>
          </view>
        </view>
      </view>
    </scroll-view>

    <!-- 账本选择弹窗 -->
    <u-popup
      :show="showLedgerPicker"
      mode="bottom"
      @close="showLedgerPicker = false"
      :round="20"
    >
      <view class="ledger-picker">
        <view class="picker-header">
          <view class="picker-title">选择账本</view>
          <view class="picker-actions">
            <view class="add-ledger-btn" @click="goToAddLedger">新增账本</view>
            <view class="picker-close" @click="showLedgerPicker = false">
              <u-icon name="close" size="20" color="#999" />
            </view>
          </view>
        </view>
        <view class="ledger-list">
          <view 
            class="ledger-item" 
            v-for="ledger in ledgerList" 
            :key="ledger.id"
            @click="selectLedger(ledger)"
          >
            <view class="ledger-info">
              <view class="ledger-name">{{ ledger.name }}</view>
              <view class="ledger-desc">包含所有账单记录</view>
            </view>
            <view class="ledger-check" v-if="selectedLedger.id === ledger.id">
              <u-icon name="checkmark" size="20" color="#3d7eff" />
            </view>
          </view>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script lang="ts" setup>
import USearch from "uview-plus/components/u-search/u-search.vue";
import { ref, reactive } from 'vue'

// 响应式数据
const showLedgerPicker = ref(false)
const selectedLedger = ref({ id: '1', name: '默认账本' })

// 账本列表数据
const ledgerList = reactive([
  { id: '1', name: '默认账本' },
  { id: '2', name: '个人账本' },
  { id: '3', name: '家庭账本' },
  { id: '4', name: '工作账本' },
  { id: '5', name: '旅行账本' },
])

// 跳转到新增账单页面
const goToAddBill = () => {
  uni.navigateTo({
    url: '/pages/detail/add-bill'
  })
}

// 选择账本
const selectLedger = (ledger: any) => {
  selectedLedger.value = ledger
  showLedgerPicker.value = false
  console.log('切换到账本:', ledger.name)
}

// 跳转到新增账本页面
const goToAddLedger = () => {
  showLedgerPicker.value = false
  uni.navigateTo({
    url: '/pages/my/ledger-add'
  })
}
</script>

<style lang="scss" scoped>
.detail-page {
  min-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f6fa;
}
.top-section-fixed {
  position: relative;
  z-index: 10;
}
.top-section {
  background: linear-gradient(135deg, #3d7eff 80%, #5fa8ff 100%);
  padding: 40rpx 24rpx 32rpx 24rpx;
  color: #fff;
}
.book-row-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 32rpx;
}
.book-row {
  display: flex;
  align-items: center;
}
.add-bill-btn {
  font-size: 28rpx;
  color: #fff;
  padding: 0 16rpx;
  font-family: 'newfont';
}
.bottom-section-scroll {
  // flex: 1;
  min-height: 0;
  overflow-y: auto;
}
.bottom-section {
  padding: 0 24rpx 24rpx 24rpx;
}
.row {
  display: flex;
  align-items: center;
}
.book-row {
  justify-content: flex-start;
  gap: 12rpx;
  font-size: 30rpx;
  font-weight: bold;
}
.switch-icon {
  margin-left: 8rpx;
}
.switch-text {
  font-size: 24rpx;
  margin-left: 4rpx;
}
.icon-row {
  justify-content: space-between;
  margin-bottom: 32rpx;
}
.icon-group {
  display: flex;
  gap: 48rpx;
}
.icon-item {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.icon-label {
  font-size: 22rpx;
  font-family: 'newfont';
  line-height: 40rpx;
  margin-top: 8rpx;
}
.setting-icon {
  align-self: flex-start;
}
.stat-row {
  justify-content: space-between;
}
.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
.stat-label {
  font-family: 'newfont';
  font-size: 26rpx;
  margin-bottom: 8rpx;
}
.stat-value {
  font-size: 30rpx;
  font-weight: bold;
}
.income {
  color: #ffe066;
}
.expense {
  color: #ffb3b3;
}
.balance {
  color: #fff;
}
.search-bar {
  margin: 32rpx 0 24rpx 0;
}
.bill-list {
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}
.bill-item {
  background: #fff;
  border-radius: 20rpx;
  box-shadow: 0 2rpx 12rpx rgba(61, 126, 255, 0.04);
  display: flex;
  justify-content: space-between;
  padding: 24rpx 20rpx;
  align-items: center;
}
.bill-left {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}
.bill-date {
  font-size: 26rpx;
  color: #222;
}
.bill-week {
  font-size: 22rpx;
  color: #888;
}
.bill-cat {
  display: flex;
  align-items: center;
  gap: 8rpx;
}
.bill-avatar {
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
}
.bill-type {
  font-size: 22rpx;
  color: #3d7eff;
}
.bill-right {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
  align-items: flex-end;
}
.bill-row {
  font-size: 22rpx;
  display: flex;
  gap: 8rpx;
}
.label {
  color: #888;
}
.income {
  color: #3dc06c;
}
.expense {
  color: #ff4d4f;
}
.balance {
  color: #b8a519;
}

/* 账本选择弹窗样式 */
.ledger-picker {
  background: #fff;
  border-radius: 20rpx 20rpx 0 0;
  padding: 32rpx 24rpx;
  max-height: 60vh;
}

.picker-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32rpx;
  padding-bottom: 24rpx;
  border-bottom: 1rpx solid #f0f0f0;
}
.picker-actions {
  display: flex;
  align-items: center;
  gap: 16rpx;
}
.add-ledger-btn {
  font-size: 26rpx;
  color: #3d7eff;
  padding: 8rpx 16rpx;
  background: #e6f0ff;
  border-radius: 999rpx;
}

.picker-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #333;
}

.picker-close {
  padding: 8rpx;
}

.ledger-list {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
}

.ledger-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24rpx;
  border-radius: 16rpx;
  background: #f8f9fa;
  transition: all 0.3s;
}

.ledger-item:active {
  background: #e6f2ff;
}

.ledger-info {
  flex: 1;
}

.ledger-name {
  font-size: 28rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 8rpx;
}

.ledger-desc {
  font-size: 24rpx;
  color: #999;
}

.ledger-check {
  margin-left: 16rpx;
}
</style>
