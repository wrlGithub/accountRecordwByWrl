import request from './request'

// 数据类型定义
export interface CreateBillPayload {
	amount: number
	type: string // 建议: 'income' | 'expense'
	description?: string
	billDate: string // ISO 字符串或可被后端解析的日期字符串
	ledgerId: string
	categoryId: string
}

export interface UpdateBillPayload {
	amount?: number
	type?: string
	description?: string
	billDate?: string
	ledgerId?: string
	categoryId?: string
}

export interface PopulatedCategory {
	_id?: string
	name?: string
	icon?: string
	type?: string
}

export interface BillEntity {
	_id: string
	amount: number
	type: string
	description?: string
	billDate: string
	ledgerId: string
	categoryId: string | PopulatedCategory
	userId: string
	deletedAt?: string | null
	createdAt?: string
	updatedAt?: string
}

// 创建账单 POST /api/bills
export const createBill = (payload: CreateBillPayload) => {
	return request<BillEntity>(`/api/bills`, 'POST', payload)
}

// 获取账单列表 GET /api/bills?ledgerId=xxx
export const getBills = (params?: { ledgerId?: string }) => {
	const query = params?.ledgerId ? `?ledgerId=${encodeURIComponent(params.ledgerId)}` : ''
	return request<BillEntity[]>(`/api/bills${query}`, 'GET')
}

// 更新账单 PUT /api/bills/:id
export const updateBill = (id: string, payload: UpdateBillPayload) => {
	return request<BillEntity>(`/api/bills/${encodeURIComponent(id)}`, 'PUT', payload)
}

// 删除账单 DELETE /api/bills/:id
export const deleteBill = (id: string) => {
	return request<{ message: string }>(`/api/bills/${encodeURIComponent(id)}`, 'DELETE')
}
