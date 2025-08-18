<template>
  <view class="login-container">
    <u-form :model="formData" :rules="rules" ref="loginForm">
      <u-form-item prop="username" label="账号">
        <u-input 
          v-model="formData.username" 
          placeholder="请输入账号/手机号" 
          clearable
        />
      </u-form-item>
      
      <u-form-item prop="password" label="密码">
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
        :loading="loading"
      >
        登录
      </u-button>
    </u-form>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { login } from '@/request/user'

// 表单数据（默认账户为123456）
const formData = ref({
  username: 'admin',
  password: ''
})

// 表单验证规则
const rules = {
  username: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 4, max: 16, message: '账号长度4-16位', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '密码长度6-20位', trigger: 'blur' }
  ]
}

const loginForm = ref() // 表单引用
const loading = ref(false) // 加载状态

// 登录方法
async function handleLogin() {
  try {
    // 表单验证
    await loginForm.value.validate()

    loading.value = true
    uni.showLoading({ title: '登录中...', mask: true })

    // 调用请求接口
    const data: any = await login({
      username: formData.value.username,
      password: formData.value.password
    })

    // 处理登录逻辑
    if (data?.token) {
      uni.setStorageSync('token', data.token)
      if (data.user) {
        uni.setStorageSync('userInfo', data.user)
      }
      uni.$u.toast('登录成功')
      uni.reLaunch({ url: '/pages/home/index' })
    }

  } catch (error) {
    uni.$u.toast((error as any)?.message || '登录失败')
  } finally {
    uni.hideLoading()
    loading.value = false
  }
}
</script>

<style scoped lang="scss">
.login-container {
  padding: 40rpx;
  
  .u-form {
    background: #fff;
    padding: 40rpx;
    border-radius: 16rpx;
    box-shadow: 0 4rpx 24rpx rgba(0,0,0,0.04);
    
    .u-form-item {
      margin-bottom: 40rpx;
    }
    
    .u-button {
      margin-top: 60rpx;
    }
  }
}
</style>
