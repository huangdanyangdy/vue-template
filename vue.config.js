module.exports = {
	//配置别名
	configureWebpack:{
		resolve:{//解决路径相关的对象
			// extentsions:['json','css','js']//省略后缀，默认已经配置过了
			alias:{
				//配置别名
				'@':"src",//默认配置过了
				'assets':'@/assets',
				'components':'@components',
				'common':'@common',
				'network':'@network',
				'pages':'@pages',
				'views':'@views'
			}
		}
	},
	
	//服务器代理
	devServer:{
		proxy:{
			'/api':{
				target:"http://localhost:3000",
				pathRewrite:{
					'^/api':""
				}
			}
		}
	}
}