<template>

    <div id="example">
        <h2 :style="styleColor">{{authorName}} </h2>      
         <slot name="header"></slot>
         <slot></slot>
         <slot name="footer"></slot>
         <button @click="counterAddOne">{{counterOne}}</button>
         <button @click="counterAddTwo">{{counterTwo}}</button>
    </div>
    
</template>

<script>
export default{
  data () {
    return {
      authorName: 'DaskV',
      styleColor: this.colorStyle,
      counterOne:0,
      counterTwo:0
    }
  },
  props:{
    colorStyle:{
       type:Object,
       default:function() {
          return {
            "font-Size":'24px'
          }
       }
    }
  },
  methods:{
    counterAddOne:function() {
        this.counterOne++
        this.$emit('counterpick')
    },
    counterAddTwo:function() {
        this.counterTwo++
        this.$emit('counterpick')
    }
  }
}
</script>