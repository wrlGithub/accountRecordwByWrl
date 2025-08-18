<template>
  <view class="content">
    <u-icon name="edit-pen" size="22" color="#666"></u-icon>
    <u-icon name="checkmark" size="22" color="#666"></u-icon>
  </view>
  <view class="button-section">
    <view class="section-title">按钮展示</view>
    <view class="button-list">
      <u-button type="primary" text="确定"></u-button>
      <u-button type="primary" :plain="true" text="镂空"></u-button>
      <u-button
        type="primary"
        :plain="true"
        :hairline="true"
        text="细边"
      ></u-button>
      <u-button type="primary" :disabled="true" text="禁用"></u-button>
      <u-button type="primary" loading loadingText="加载中"></u-button>
      <u-button type="primary" icon="map" text="图标按钮"></u-button>
      <u-button type="primary" shape="circle" text="按钮形状"></u-button>
      <u-button
        text="渐变色按钮"
        color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
      ></u-button>
    </view>
  </view>
</template>

<script lang="ts" setup>

import { ref } from 'vue'
import { getBills, type BillEntity } from '@/request/bill'

const bills = ref<BillEntity[]>([])
getBills().then(
  res => {
    console.log(123, res)
  }
)

</script>

<style lang="scss" scoped></style>
