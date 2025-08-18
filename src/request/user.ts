import request from './request'

// 获取用户基本信息（无参）
export const getBaseInfo = () => {
	return request(`/user/basicInfo`, 'GET')
}

// 获取用户基本信息（参数拼接在路径上）
export const getBaseInfoByQuery = (userId: string) => {
	return request(`/user/basicInfo?userId=${encodeURIComponent(userId)}`, 'GET')
}

// 获取用户基本信息（RESTful）
export const getBaseInfoByRest = (userId: string) => {
	return request(`/user/basicInfo/${encodeURIComponent(userId)}`, 'GET')
}

// 获取公钥（可控制loading）
export const getPubKey = (loading: boolean = true) => {
	return request(`/user/getPubKey`, 'GET', undefined, loading)
}

// 登录
export const login = (user: { username: string; password: string }) => {
	return request(`/api/auth/login`, 'POST', user)
}