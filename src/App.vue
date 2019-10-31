<template>
 <div>
   <router-view></router-view>
 </div>
</template>

<script>

export default {
  name: 'app',
      data(){
        return{
          baseUrl:process.env.VUE_APP_URL,
        }
      }
}
</script>

<style>

#app {
  color:white;
}
</style>
