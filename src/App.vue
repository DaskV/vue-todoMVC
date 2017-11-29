<style lang="scss" scoped="" type="text/css">
  @import "./sass/App.scss";
</style>
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Hello Vue!</h1>
    <example :colorStyle="styleobj" @counterpick="pickerTotal">
          <h3 slot="header">这里可能是一个页面标题</h3> 
          <div>
            <p>这是显示的内容1</p>
            <p>这是显示的内容2</p>
          </div>        
          <h3 slot="footer">这里可能是一个页面页脚</h3>       
    </example>
    <p>您点击了 {{total}} 次</p>
    <p v-if="seen" :class="classobj" :style="styleobj" @click="swicthSeen">{{msg}}</p>
    <p v-else @click="swicthSeen">点我显示</p>
    <button @click="swicthSeen">点击切换显示</button>
    <button @click="reverseText">点击颠倒文字</button><br/><br/>
    <input v-model="inputValue" placeholder="请输入作者">
    <p>您输入的是:{{inputValue}}</p>
    <ul>
      <li v-for="(item,index) in items">{{index}}---{{item.message}}</li>
    </ul>
    <ul>
      <li v-for="n in even(numbers)">{{n}}</li>
    </ul>

    <ul>
      <li class="de"><router-link to='/first'>第一页</router-link></li>
      <li class="de"><router-link to='/second'>第二页</router-link></li>
      <li class="de"><router-link to='/second/nest'>第二页和其嵌套页面</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import example from './components/example'
export default {
  data () {
    return {
      msg: '你看到我了',
      seen: false,
      updateCount:0,
      date:'暂无时间',
      total:0,
      classobj: {
        active: true,
        fontbold: false
      },
      styleobj: {
        'color': "red",
        'font-Size': "16px",
        'transform':"rotate(0deg)"
      },
      items: [
        {message: 'foo'},
        {message: 'bar'}
      ],
      numbers:[1,2,3,4,5,6,7,8,9,10],
      inputValue:''
    }
  },
  methods:{
    swicthSeen: function() {
      this.seen = ! this.seen
    },
    reverseText: function() {
      this.msg = this.msg.split('').reverse().join('')
    },
    even: function (numbers){      
       return numbers.filter(function(value){
          return value % 2 ===0
       })
    },
    pickerTotal: function(){
      this.total++
    }
  },
  created: function () {
    console.log(this.msg)
  },
  mounted: function() {
    console.log('app vue updated '+this.updateCount)
  },
  updated: function() {
    this.updateCount++
    console.log('app vue updated '+this.updateCount)
  },
  components: {example}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
