<template>
  <div class="home">
  
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import { getBannerData,getSwiper,getUserInfo} from "@/api/data.js"

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
 async mounted() {
  	 let  result =await getBannerData()
	//  let  result1 =await getSwiper()
	//  let  result2 =await getUserInfo()
	 
	 
  }
}
</script>
