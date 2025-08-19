<template>
  <view class="login-container">
    <!-- Background Image -->
    <image
      class="bg-image"
      src="/static/images/macwallpaper.webp"
      mode="aspectFill"
    />

    <!-- Gradient Overlay -->
    <view class="bg-overlay"></view>

    <view class="brand">记账本</view>
    <u-form
      :model="formData"
      :rules="rules"
      ref="loginForm"
      label-position="top"
    >
      <u-form-item prop="username" label="账号" class="u-text-right u-m-l-40">
        <u-input
          v-model="formData.username"
          placeholder="请输入账号/手机号"
          clearable
          class="my-form"
        />
      </u-form-item>

      <u-form-item prop="password" label="密码" class="u-text-right u-m-l-40">
        <u-input
          v-model="formData.password"
          placeholder="请输入密码"
          password
          clearable
        />
      </u-form-item>

      <u-button
        type="primary"
        @click="handleLogin"
        size="middle"
        shape="circle"
      >
        登录
      </u-button>
    </u-form>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { login } from "@/request/user";
import { defineOptions } from "vue";

defineOptions({
  options: {
    styleIsolation: "shared", // 微信小程序的样式隔离配置
  },
});
// 表单数据（默认账户为123456）
const formData = ref({
  username: "admin",
  password: "",
});

// 表单验证规则
const rules = {
  username: [
    { required: true, message: "请输入账号", trigger: "blur" },
    { min: 4, max: 16, message: "账号长度4-16位", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, max: 20, message: "密码长度6-20位", trigger: "blur" },
  ],
};

const loginForm = ref(); // 表单引用
const loading = ref(false); // 加载状态

// 登录方法
async function handleLogin() {
  try {
    // 表单验证
    await loginForm.value.validate();

    loading.value = true;
    // uni.showLoading({ title: "登录中...", mask: true });

    // 调用请求接口
    const data: any = await login({
      username: formData.value.username,
      password: formData.value.password,
    });
    // 处理登录逻辑
    if (data?.token) {
      uni.setStorageSync("token", data.token);
      if (data.user) {
        uni.setStorageSync("userInfo", data.user);
      }
      uni.$u.toast("登录成功");
      // 跳转到已配置的 tabBar 页面（小程序跳转 tabBar 必须用 switchTab）
      uni.switchTab({ url: "/pages/detail/index" });
    }
  } catch (error) {
    uni.$u.toast((error as any)?.message || "登录失败");
  } finally {
    uni.hideLoading();
    loading.value = false;
  }
}
</script>

<style scoped lang="scss">
.login-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Background Image */
.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.brand {
  margin-bottom: 40rpx;
  font-size: 48rpx;
  font-weight: 700;
  color: #f8f9fa;
  letter-spacing: 2rpx;
  text-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.3);
  z-index: 2;
  position: relative;
}

.u-button {
  margin-top: 20rpx;
  width: 100%;
  height: 88rpx;
  font-size: 30rpx;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0.15) 100%
  );
  backdrop-filter: blur(10rpx);
  -webkit-backdrop-filter: blur(10rpx);
  border: 1rpx solid rgba(255, 255, 255, 0.3);
  color: #f8f9fa;
  font-weight: 600;
  border-radius: 44rpx;

  &:active {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );
    transform: translateY(2rpx);
  }
}

.my-form > input {
  margin-top: 5px !important;
  border: 1px solid red;
}
</style>
