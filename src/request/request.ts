const url_all = {
	'DEV': 'http://localhost:3000', // 开发
	'PRO': 'http://111.111.111.111:8080', // 生产
} as const

let BASEURL: string = url_all['DEV'] // 调整当前环境

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD'

// 放宽数据类型以兼容具体的业务接口结构
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RequestData = any

/*
* 全局请求封装
* @param path 请求路径
* @param method 请求类型(GET/POST/DELETE等)
* @param data 请求体数据
* @param loading 请求未完成是是否显示加载中，默认为true
*/
export default function request<T = any>(path: string, method: HttpMethod, data: RequestData = {}, loading: boolean = true): Promise<T> {
	// 获取存储token
	const token = uni.getStorageSync("token") as string | undefined
	const Authorization =  'Bearer ' + token
	console.log(1234414, token)
	if (loading) {
		uni.showLoading({
			title: "加载中",
			mask: true
		});
	};
	//根据token进行调用函数
	if (token && token !== '') {
		return tokenRequest<T>(path, method, data, loading, Authorization)
	} else {
		return noTokenRequest<T>(path, method, data, loading)
	}
};

// 无token时发送请求函数
function noTokenRequest<T = any>(path: string, method: HttpMethod, data: RequestData, loading: boolean): Promise<T> {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASEURL + path,
			method: method as any,
			data,
			success(response) {
				// console.log('%c响应拦截：', ' background:green', response);
				/* if ((response.data as any).code === 3001) {
					// logout()
				} */
				/* if ((response.data as any).code !== 20) {
					uni.showToast({
						icon: "none",
						duration: 4000,
						title: (response.data as any).msg
					});
				} */
				console.log(response.data)
				resolve(response.data as T);
			},
			fail(err) {
				uni.showToast({
					icon: "none",
					title: '服务响应失败'
				});
				console.error(err);
				reject(err as any);
			},
			complete() {
				uni.hideLoading();
			}
		});
	});
}


// 有token时发送请求函数
function tokenRequest<T = any>(path: string, method: HttpMethod, data: RequestData, loading: boolean, Authorization: string): Promise<T> {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASEURL + path,
			method: method as any,
			data,
			header: {
				"Authorization": Authorization
			},
			success(response) {
				console.log('%c响应拦截：', ' background:green', response);
				if ((response.data as any)?.code === 40101) {
					// logout()
				}
				console.log(response.data)
				resolve(response.data as T);
			},
			fail(err) {
				uni.showToast({
					icon: "none",
					title: '服务响应失败'
				});
				console.error(err);
				reject(err as any);
			},
			complete() {
				uni.hideLoading();
			}
		});
	});
}
