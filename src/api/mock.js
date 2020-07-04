import Mock from "mockjs"

Mock.setup({
	timeout:1000,
	
})

// Mock.mock("/",user)
Mock.mock("/",{
	username:"老板",
	password:"123456",
	age:18
})
Mock.mock("/",{
	username:"老板",
	password:"123456"
})

Mock.mock("/api/banner",{
	username:"老板",
	password:"123456",
	sex:"男",
	'score|1-10':'*'
})

export const user = req =>{
	return {
		username:"老板",
		password:"123456"
	}
}
