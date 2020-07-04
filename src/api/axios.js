import axios from 'axios'
import config from '@/config'

const baseUrl = process.env.NODE_ENV==="development" ? config.baseUrl.dev : config.baseUrl.pro
// console.log(process.env.NODE_ENV)
// 声明一个请求类
class HttpRequest{
	//封装构造函数
	constructor(baseUrl){
		this.baseUrl=baseUrl
		this.queue={}
	}
	
	//定义一个和外界结合的方法
	getInsideConfig(){
		//声明对象
		const config={
			baseURL:this.baseUrl,
			header:{
			//设置请求头
				
			}
		}
		return config
	}
	
	//定义拦截器
	interceptors(instance,url){
		//拦截和处理请求
		instance.interceptors.request.use((config)=>{
			console.log("拦截和处理请求")
			return config
		})
		
		//处理响应
		instance.interceptors.response.use((res)=>{
			console.log(res,"处理响应")
			return res
		},(error)=>{
			console.log(error)
			return {error:"网络出错了！"}
		})
	}
	
	//实例化请求方法
	request(options){
		const instance = axios.create()//创造实例对象
		options=Object.assign(this.getInsideConfig(),options)//如果实例化注册成功，options会把this.getInsideConfig()替换掉
		this.interceptors(instance,options.url)//劫持实例化对象的url
		return instance(options)//劫持成功，返回劫持对象
	}
	
	
	
} 




	
	

const axiosObj = new HttpRequest(baseUrl)
export default axiosObj