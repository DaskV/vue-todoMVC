<template>
    <div id="secondcomponent">
    <h1>I am DaskV</h1>
    <h2>this is page {{count}}</h2>
    <router-view></router-view>
  </div>
  
</template>
<script>
export default{
  data () {
    return {
      author: 'DaskV',
      count: 2
    }
  }
}
</script>