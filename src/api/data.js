import axios from '@/api/axios'

export const getSwiper = ()=>{
	return axios.request({
		url:'/',
		method:'get'
	})
}
export const getBannerData = ()=>{
	return axios.request({
		url:'/api/banner',
		method:'get'
	})
}

export const getUserInfo = ()=>{
	return axios.request({
		url:'/',
		method:'get'
	})
}